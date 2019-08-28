import {Injectable} from '@nestjs/common';

export type User =any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    //dummy data for now. look at mongo implemtation code here in future//
    constructor() {
        this.users = [
          {
            userId: 1,
            username: 'lewis',
            password: 'password1',
          },
          {
            userId: 2,
            username: 'kellan',
            password: 'password2',
          },
          {
            userId: 3,
            username: 'sam',
            password: 'password3',
          },
          {
            userId: 4,
            username: 'heidi',
            password: 'password4',
          },
        ];
      }
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
    }

