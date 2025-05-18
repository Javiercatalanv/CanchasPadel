import { Model } from 'mongoose';
import { Reserva, ReservaDocument } from '../schemas/reserva.schema';
export declare class ReservasService {
    private reservaModel;
    constructor(reservaModel: Model<ReservaDocument>);
    create(data: Partial<Reserva>): Promise<import("mongoose").Document<unknown, {}, ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, data: Partial<Reserva>): Promise<(import("mongoose").Document<unknown, {}, ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
