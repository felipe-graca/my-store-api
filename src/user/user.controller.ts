import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create_user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<CreateUserDTO> {
    return this.userService.createUser(createUserDTO);
  }
}
