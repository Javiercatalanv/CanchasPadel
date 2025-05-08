import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '.././schemas/user.schema';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

  async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ name, email, password: hashedPassword });
    await newUser.save();
    return { message: 'Usuario registrado' };
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new Error('Usuario no encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Contraseña incorrecta');

    const payload = { email: user.email, sub: user._id };
    const token = this.jwtService.sign(payload);
    return { token };
  }
}
