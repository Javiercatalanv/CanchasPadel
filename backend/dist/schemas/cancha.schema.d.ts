import { Document } from 'mongoose';
export type CanchaDocument = Cancha & Document;
export declare class Cancha {
    nombre: string;
    ubicacion: string;
}
export declare const CanchaSchema: import("mongoose").Schema<Cancha, import("mongoose").Model<Cancha, any, any, any, Document<unknown, any, Cancha, any> & Cancha & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cancha, Document<unknown, {}, import("mongoose").FlatRecord<Cancha>, {}> & import("mongoose").FlatRecord<Cancha> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
