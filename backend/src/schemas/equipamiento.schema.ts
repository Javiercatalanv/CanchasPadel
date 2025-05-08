import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EquipmentDocument = Equipment & Document;

@Schema()
export class Equipment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  cost: number;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
