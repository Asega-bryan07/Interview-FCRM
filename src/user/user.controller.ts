
import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  async addUser(@Body() userData: any) {
    return await this.userService.addUser(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-user/:id')
  async getUserById(@Param('id') id: number) {
    return await this.userService.getUserById(id);
  }
}
