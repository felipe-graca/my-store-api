import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create_user.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<CreateUserDTO> {
    return createUser;
  }
}
