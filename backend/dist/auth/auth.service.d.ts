import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '.././schemas/user.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
