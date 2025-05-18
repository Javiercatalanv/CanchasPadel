import { Document } from 'mongoose';
export type ReservaDocument = Reserva & Document;
export declare class Reserva {
    nombreSocio: string;
    cancha: string;
    fecha: Date;
    estado: string;
}
export declare const ReservaSchema: import("mongoose").Schema<Reserva, import("mongoose").Model<Reserva, any, any, any, Document<unknown, any, Reserva, any> & Reserva & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reserva, Document<unknown, {}, import("mongoose").FlatRecord<Reserva>, {}> & import("mongoose").FlatRecord<Reserva> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
