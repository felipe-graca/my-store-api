import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create_user.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor() {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const saltDrRound = 10;
    const hashPassword = await hash(createUserDTO.password, saltDrRound);

    const user: User = {
      id: this.users.length + 1,
      ...createUserDTO,
      password: hashPassword,
    };
    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
