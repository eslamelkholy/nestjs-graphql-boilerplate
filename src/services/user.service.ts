import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  public createUser(): User {
    return new User();
  }

  public updateUser(): User {
    return new User();
  }

  getUser(): User {
    return new User();
  }

  async getUsers(): Promise<User[]> {
    const user = new User();
    user.id = 1;
    user.name = 'eslam';
    user.email = 'eslamelkholy444@gmail.com';

    return [user];
  }

  public deleteUser(): User {
    return new User();
  }
}
