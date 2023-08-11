import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create_user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user: User = {
      ...createUserDTO,
      id: this.users.length + 1,
    };

    this.users.push(user);

    return user;
  }
}
