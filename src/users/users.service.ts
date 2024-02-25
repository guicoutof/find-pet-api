import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "src/schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const menu = new this.userModel(createUserDto);
    return menu.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return this.userModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: number) {
    return this.userModel.findByIdAndDelete(id);
  }
}
