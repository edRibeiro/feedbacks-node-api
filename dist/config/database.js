"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    if (!process.env.MONGO_URL)
        throw new Error('MONGODB_URL not found!');
    return mongoose_1.default.connect(process.env.MONGO_URL);
};
exports.connect = connect;
//# sourceMappingURL=database.js.map