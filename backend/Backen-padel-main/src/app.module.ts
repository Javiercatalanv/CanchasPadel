import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservasModule } from './reservas/reservas.module';
import { NotificationsModule } from './notificaciones/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/padel'),
    ReservasModule,NotificationsModule,
  ],
  
})
export class AppModule {}
