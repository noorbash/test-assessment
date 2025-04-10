import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getProfile(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async updateProfile(id: number, profileData: { fullName: string; bio: string }) {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      user.fullName = profileData.fullName;
      user.bio = profileData.bio;
      return this.userRepository.save(user);
    }
    return null;
  }
}
