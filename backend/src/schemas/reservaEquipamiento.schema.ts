import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReservationEquipmentDocument = ReservationEquipment & Document;

@Schema()
export class ReservationEquipment {
  @Prop({ type: Types.ObjectId, ref: 'Reservation', required: true })
  reservation_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Equipment', required: true })
  equipment_id: Types.ObjectId;

  @Prop({ required: true })
  quantity: number;
}

export const ReservationEquipmentSchema = SchemaFactory.createForClass(ReservationEquipment);
