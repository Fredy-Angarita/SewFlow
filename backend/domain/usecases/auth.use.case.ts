import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ERROR_CONSTANTS } from 'domain/constants/error.constants';
import { AlreadyExistsException } from 'domain/exceptions/already.exists.exception';
import { UserModel } from 'domain/models/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';

export class AuthUseCase {
  constructor(private readonly userPersistencePort: IUserPersistencePort) {}

  async login(email: string, password: string) {
    const user = await this.userPersistencePort.getUserByEmail(email);
    if (!user) throw new NotFoundException(ERROR_CONSTANTS.USER_NOT_FOUND);
    if (user.password !== password)
      throw new BadRequestException(ERROR_CONSTANTS.USER_INVALID_CREDENTIALS);

    return 'login';
  }
  async register(user: UserModel) {
    const emailExists = await this.userPersistencePort.getUserByEmail(
      user.email,
    );
    if (emailExists)
      throw new AlreadyExistsException(
        ERROR_CONSTANTS.USER_EMAIL_ALREADY_EXISTS,
      );
    const userNameExists = await this.userPersistencePort.getUserByUsername(
      user.username,
    );
    if (userNameExists)
      throw new AlreadyExistsException(
        ERROR_CONSTANTS.USER_NAME_ALREADY_EXISTS,
      );

    return 'test';
  }
}
