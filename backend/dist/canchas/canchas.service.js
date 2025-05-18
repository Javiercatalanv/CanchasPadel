"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanchasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cancha_schema_1 = require("../schemas/cancha.schema");
const reserva_schema_1 = require("../schemas/reserva.schema");
let CanchasService = class CanchasService {
    canchaModel;
    reservaModel;
    constructor(canchaModel, reservaModel) {
        this.canchaModel = canchaModel;
        this.reservaModel = reservaModel;
    }
    async obtenerDisponibles(fechaInicio, fechaFin) {
        const reservas = await this.reservaModel.find({
            $or: [
                { fechaInicio: { $lt: fechaFin }, fechaFin: { $gt: fechaInicio } },
            ],
        });
        const canchasOcupadas = reservas.map(r => r.cancha);
        const canchasDisponibles = await this.canchaModel.find({
            nombre: { $nin: canchasOcupadas },
        });
        return canchasDisponibles;
    }
};
exports.CanchasService = CanchasService;
exports.CanchasService = CanchasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cancha_schema_1.Cancha.name)),
    __param(1, (0, mongoose_1.InjectModel)(reserva_schema_1.Reserva.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CanchasService);
//# sourceMappingURL=canchas.service.js.map