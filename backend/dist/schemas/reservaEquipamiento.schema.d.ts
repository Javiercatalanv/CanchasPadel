import { Document, Types } from 'mongoose';
export type ReservationEquipmentDocument = ReservationEquipment & Document;
export declare class ReservationEquipment {
    reservation_id: Types.ObjectId;
    equipment_id: Types.ObjectId;
    quantity: number;
}
export declare const ReservationEquipmentSchema: import("mongoose").Schema<ReservationEquipment, import("mongoose").Model<ReservationEquipment, any, any, any, Document<unknown, any, ReservationEquipment, any> & ReservationEquipment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReservationEquipment, Document<unknown, {}, import("mongoose").FlatRecord<ReservationEquipment>, {}> & import("mongoose").FlatRecord<ReservationEquipment> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
