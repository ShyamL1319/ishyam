import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user-module/interface/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
  public user: User[] = [
    {
      name: 'shyam',
      age: 24,
      company: 'Simplilearn',
      location: 'Bengaluru',
    },
    {
      name: 'ravi',
      age: 30,
      company: 'Bangalore Electricity Supply Company Limited',
      location: 'Mysoor',
    },
    {
      name: 'shikha',
      age: 25,
      company: 'Simplilearn',
      location: 'Bengaluru',
    },
  ];

  async addUser(user: User): Promise<any> {
   return await new this.userModel(user).save()
  }

  public async getAllUser(): Promise<User[]> {
    return await this.userModel.find();
  }

  deleteUser(name: string): User[] {
    return this.user.filter((usr) => usr.name != name);
  }
}
