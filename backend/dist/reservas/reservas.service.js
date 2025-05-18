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
exports.ReservasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reserva_schema_1 = require("../schemas/reserva.schema");
let ReservasService = class ReservasService {
    reservaModel;
    constructor(reservaModel) {
        this.reservaModel = reservaModel;
    }
    create(data) {
        const reserva = new this.reservaModel(data);
        return reserva.save();
    }
    findAll() {
        return this.reservaModel.find().exec();
    }
    findOne(id) {
        return this.reservaModel.findById(id).exec();
    }
    update(id, data) {
        return this.reservaModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    remove(id) {
        return this.reservaModel.findByIdAndDelete(id).exec();
    }
};
exports.ReservasService = ReservasService;
exports.ReservasService = ReservasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reserva_schema_1.Reserva.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReservasService);
//# sourceMappingURL=reservas.service.js.map