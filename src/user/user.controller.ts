import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('findAllUser')
  findAll() {
    return this.userService.findAll();
  }

  @Get('findOneUser')
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @Patch('updateUser')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @Delete('removeUser')
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
