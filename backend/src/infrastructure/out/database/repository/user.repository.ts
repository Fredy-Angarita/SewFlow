import { UserModel } from 'domain/models/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserRepository implements IUserPersistencePort {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async saveUser(user: UserModel): Promise<UserModel> {
    return this.repository.save(user);
  }
  async updateUser(user: Partial<UserModel>): Promise<UserModel> {
    const entity = await this.repository.findOneBy({ id: user.id });
    if (!entity) throw new NotFoundException('Size not found');
    const updated = this.repository.merge(entity, user);
    return await this.repository.save(updated);
  }
  async getUserByEmail(email: string): Promise<UserModel | null> {
    return this.repository.findOneBy({ email });
  }
  async getUserById(id: string): Promise<UserModel | null> {
    return this.repository.findOneBy({ id });
  }
  async getUserByUsername(username: string): Promise<UserModel | null> {
    return this.repository.findOneBy({ username });
  }
}
