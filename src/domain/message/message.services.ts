import type { ICreateMessageInput } from "@domain";
import type { IMessageRepository } from "@infrastructure";

interface IMessageService {
  createMessage(data: ICreateMessageInput): Promise<boolean>;
}

class MessageService implements IMessageService {
  private messageRepository: IMessageRepository;

  constructor(messageRepository: IMessageRepository) {
    this.messageRepository = messageRepository;
  }

  createMessage(data: ICreateMessageInput): Promise<boolean> {
    return this.messageRepository.createMessage(data);
  }
}

export default MessageService;
export type { IMessageService };
