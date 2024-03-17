import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async addUser(userData: any): Promise<User> {
    return await this.userModel.create(userData);
  }

  async getUserById(id: number): Promise<User> {
    return await this.userModel.findByPk(id);
  }
}
