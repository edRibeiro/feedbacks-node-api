"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./src/app"));
const port = process.env.PORT || 3000;
(0, app_1.default)()
    .then((app) => {
    app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}`));
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map