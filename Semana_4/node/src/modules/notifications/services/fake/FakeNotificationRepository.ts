import { ObjectID } from "mongodb";
import Notification from "@notifications/infra/Typeorm/schemas/Notification";
import ICreateNotificationDTO from "@notifications/dtos/ICreateNotificationDTO";
import INotificationsRepository from "@notifications/repositories/INotificationsRepository";

export default class FakeNotificationRepository
  implements INotificationsRepository {
  private notifications: Notification[] = [];
  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    let notification = new Notification();
    Object.assign(notification, {
      id: new ObjectID(),
      content,
      recipient_id,
    });

    this.notifications.push(notification);

    return notification;
  }
}
