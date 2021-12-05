"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("../controllers/AuthController");
const express_1 = require("express");
const verifityToken_1 = require("../libs/verifityToken");
const router = (0, express_1.Router)();
router.post('/signup', AuthController_1.signUp);
router.post('/signin', AuthController_1.signIn);
router.get('/ruta_prueba', verifityToken_1.tokenValidation, AuthController_1.rutaPrueba);
exports.default = router;
//# sourceMappingURL=auth.js.map