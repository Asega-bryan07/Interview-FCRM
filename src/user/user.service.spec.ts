
import User from './user.model';

@Injectable()
export class UserService {
  async addUser(userData: any): Promise<User> {
    return await User.create(userData);
  }

  async getUserById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }
}
