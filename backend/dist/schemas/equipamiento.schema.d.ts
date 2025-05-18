import { Document } from 'mongoose';
export type EquipmentDocument = Equipment & Document;
export declare class Equipment {
    name: string;
    type: string;
    stock: number;
    cost: number;
}
export declare const EquipmentSchema: import("mongoose").Schema<Equipment, import("mongoose").Model<Equipment, any, any, any, Document<unknown, any, Equipment, any> & Equipment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Equipment, Document<unknown, {}, import("mongoose").FlatRecord<Equipment>, {}> & import("mongoose").FlatRecord<Equipment> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
