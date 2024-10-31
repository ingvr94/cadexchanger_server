"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST');
    next();
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Thank you for your interest, ${req.body.name}`);
});
//# sourceMappingURL=index.js.map