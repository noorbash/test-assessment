import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/profile')
  getProfile(@Param('id') id: number) {
    return this.usersService.getProfile(id);
  }

  @Put(':id/profile')
  updateProfile(@Param('id') id: number, @Body() profileData: { fullName: string; bio: string }) {
    return this.usersService.updateProfile(id, profileData);
  }
}
