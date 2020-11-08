import ICreateNotificationDTO from "@notifications/dtos/ICreateNotificationDTO"
import Notification from '@modules/notifications/infra/Typeorm/schemas/Notification'

 export default interface INotificationsRepository {
   create(data: ICreateNotificationDTO): Promise<Notification>;
 }
