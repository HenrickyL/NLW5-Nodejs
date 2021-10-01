import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/Message';

@EntityRepository(Message)
class MessageRepository extends Repository<Message>{
}


export {MessageRepository}