import { CanchasService } from './canchas.service';
export declare class CanchasController {
    private readonly canchasService;
    constructor(canchasService: CanchasService);
    getDisponibles(inicio: string, fin: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/cancha.schema").CanchaDocument, {}> & import("../schemas/cancha.schema").Cancha & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
