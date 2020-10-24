# Recuperar Senha (Esqueci minha senha)

**RF - Requisitos funcionais**
> Quais a funcionalidades que temos dentro do macro recurso

- [ ]  O usuario deve poder recuperar sua senha informando o email;
- [ ]  O usuario deve receber um email com instrucoes de recuperacao de senha;
- [ ]  O usuario deve poder resetar sua senha;
  

**RNF - Requisitos não funcionais**
> Requisitos nao ligados diretamente com a regra de negocios, mais proximos das questoes tecnicas

- [ ]  Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- [ ]  Utilizar o Amazon SES para envios em produção;
- [ ]  Envio de emails deve ocorrer em segundo plano (background job);

**RN - Regras de negócios**

 > Regras que definem como deve funcionar as funcionalidades da aplicação

- [ ]  O Link enviado por email para resetar a senha deverá espirar em duas horas;
- [ ]  O usuario precisa confirmar sua nova senha ao resetar;

# Atualização do Perfil

**RF - Requisitos funcionais**
> Quais a funcionalidades que temos dentro do macro recurso

  - [ ]  O usuário deve poder atualizar seu perfil (nome, email, senha);
  - [ ]  O usuário deve poder atualizar seu avatar(imagem de perfil);

**RNF - Requisitos não funcionais**
> Requisitos nao ligados diretamente com a regra de negocios, mais proximos das questoes tecnicas

**RN - Regras de negócios**

 > Regras que definem como deve funcionar as funcionalidades da aplicação

 - [ ]  O usuário não pode atualizar o seu email para um que já esteja em uso;
 - [ ]  Para atualizar sua senha, o usuário deve informar a senha antiga;
 - [ ]  Para atualizar sua senha, o usuário devera confirmar sua nova senha;


# Painel do prestador

**RF - Requisitos funcionais**
> Quais a funcionalidades que temos dentro do macro recurso

- [ ]  O usuário deve poder listar seus agendamentos de um dia especifico;
- [ ]  O prestador deve receber uma notificacao sempre que houver um agendamento;
- [ ]  O prestador deve poder visualizar as notificações não lidas;

**RNF - Requisitos não funcionais**
> Requisitos nao ligados diretamente com a regra de negocios, mais proximos das questoes tecnicas

- [ ]  Os agendamentos do prestador no dia, devem ser armazenado em cache;
- [ ]  As notificações do prestador devem ser armazenadas no MongoDB;
- [ ]  As notificações do prestador devem ser utilziadas em tempo real utilizando Socket.io;

**RN - Regras de negócios**

 > Regras que definem como deve funcionar as funcionalidades da aplicação

 - [ ]  A notificação deve ter um status de lida ou não lida para que o prestador tenha maior controle;

# Agendamento de Serviços

**RF - Requisitos funcionais**
> Quais a funcionalidades que temos dentro do macro recurso

- [ ]  O usuário deve poder listar todos os prestadores de serviço cadastrados;
- [ ]  O usuário deve poder listar os dias do mês com pelo menos um horário disponível de um prestador;
- [ ]  O usuário deve poder listar horários disponívies em um dia específico de um prestador;
- [ ]  O usuário deve poder realizar um novo agendamento com o prestador;

**RNF - Requisitos não funcionais**
> Requisitos nao ligados diretamente com a regra de negocios, mais proximos das questoes tecnicas

- [ ]  Armazenar listagem de prestadores em cache;

**RN - Regras de negócios**

 > Regras que definem como deve funcionar as funcionalidades da aplicação

 - [ ]  Todo agendamento deverá ter no máximo uma hora;
 - [ ]  Os agendamentos devem estar disponivies entre as 8 horas da manhã e as 18h (Primeiro as 8h e o ultimo as 17h);
 - [ ]  O usuário não pode agendar um horario já ocupado; 
 - [ ]  O usuário não pode agendar um horario passado; 
 - [ ]  O usuário não pode agendar um serviço para ele mesmo; 