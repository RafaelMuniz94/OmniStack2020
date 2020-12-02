import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from "./styles";
import Button from "../../components/Button";
import logoImg from "../../Assets/logo.svg";
import { FiPower, FiClock } from "react-icons/fi";
import { FaBeer } from "react-icons/fa";
import { useAuth } from "../../hooks/AuthContext";
import DayPicker, { DayModifiers } from "react-day-picker";
import "react-day-picker/lib/style.css";
import api from "../../services/api";
import { isToday, format, parseISO, isAfter } from "date-fns";
import ptbr from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  let { signOut, user } = useAuth();
  let [selectedDate, setSelectedDate] = useState(new Date());
  let [currentMonth, setCurrentMonth] = useState(new Date());
  let [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);
  let [appointments, setAppointments] = useState<Appointment[]>([]);

  let disabledDays = useMemo(() => {
    let dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        let year = currentMonth.getFullYear();
        let month = currentMonth.getMonth();
        let date = new Date(year, month, monthDay.day);

        return date;
      });

    return dates;
  }, [currentMonth, monthAvailability]); // memoriza um valor especifico ou formatacao e indica quando ele deve ser recarregado
  // No react nunca devemos criar variaveis ou manipular valores como uma variavel em tempo de execucao

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  useEffect(() => {
    api
      .get<Appointment[]>("/appointments/me", {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then((response) => {
        let appointsFormatted = response.data.map((appointment) => {
          return {
            ...appointment,
            hourFormatted: format(parseISO(appointment.date), "HH:mm"),
          };
        });
        setAppointments(appointsFormatted);
      });
  }, [selectedDate, user.id]);

  let morningAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [appointments]);
  let afternoonAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [appointments]);

  let nextAppointment = useMemo(() => {
    return appointments.find((appointment) => {
      return isAfter(parseISO(appointment.date), new Date());
    });
  }, [appointments]);

  let handleMonth = useCallback(async (month: Date) => {
    setCurrentMonth(month);
  }, []);

  let handleDateChange = useCallback(
    async (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available && !modifiers.disabled) setSelectedDate(day);
    },
    []
  );

  let selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptbr,
    });
  }, [selectedDate]);

  let selectedWeekDayText = useMemo(() => {
    return format(selectedDate, "cccc", {
      locale: ptbr,
    });
  }, [selectedDate]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-Vindo</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>
          <Button type="button" name="btnSair" onClick={signOut}>
            <FiPower />
          </Button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horarios Agendados:</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDayText}</span>
          </p>

          {isToday(selectedDate) && nextAppointment && (
            <NextAppointment>
              <strong>Agendamento a seguir:</strong>
              <div>
                <img
                  src={nextAppointment.user.avatar_url}
                  alt={nextAppointment.user.name}
                />
                <strong>{nextAppointment.user.name}</strong>
                <span>
                  <FiClock />
                  {nextAppointment.hourFormatted}
                </span>
              </div>
            </NextAppointment>
          )}

          <Section>
            <strong>Manhã</strong>

            {morningAppointments.length === 0 && (
              <p>Nenhum agendamento nesse periodo!</p>
            )}

            {morningAppointments.map((appointment) => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.hourFormatted}
                </span>

                <div>
                  {appointment.user.avatar_url ? (
                    <img
                      src={appointment.user.avatar_url}
                      alt={appointment.user.name}
                    />
                  ) : (
                    <FaBeer />
                  )}

                  <strong>{appointment.user.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>

          <Section>
            <strong>Tarde</strong>

            {afternoonAppointments.length === 0 && (
              <p>Nenhum agendamento nesse periodo!</p>
            )}

            {afternoonAppointments.map((appointment) => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.hourFormatted}
                </span>

                <div>
                  {appointment.user.avatar_url ? (
                    <img
                      src={appointment.user.avatar_url}
                      alt={appointment.user.name}
                    />
                  ) : (
                    <FaBeer />
                  )}
                  <strong>{appointment.user.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: {
                daysOfWeek: [1, 2, 3, 4, 5],
              },
            }}
            onMonthChange={handleMonth}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
