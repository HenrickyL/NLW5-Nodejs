import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection> {
}


export {ConnectionRepository}