import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservasModule } from './reservas/reservas.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/padel'),
    ReservasModule,
    AuthModule,
  ],
  
})
export class AppModule {}
