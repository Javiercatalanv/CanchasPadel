import { Model } from 'mongoose';
import { Cancha, CanchaDocument } from '../schemas/cancha.schema';
import { ReservaDocument } from '../schemas/reserva.schema';
export declare class CanchasService {
    private canchaModel;
    private reservaModel;
    constructor(canchaModel: Model<CanchaDocument>, reservaModel: Model<ReservaDocument>);
    obtenerDisponibles(fechaInicio: Date, fechaFin: Date): Promise<(import("mongoose").Document<unknown, {}, CanchaDocument, {}> & Cancha & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
