import { ReservasService } from './reservas.service';
import { Reserva } from '../schemas/reserva.schema';
export declare class ReservasController {
    private readonly reservasService;
    constructor(reservasService: ReservasService);
    create(reserva: Partial<Reserva>): Promise<import("mongoose").Document<unknown, {}, import("../schemas/reserva.schema").ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/reserva.schema").ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/reserva.schema").ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, reserva: Partial<Reserva>): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/reserva.schema").ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/reserva.schema").ReservaDocument, {}> & Reserva & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
