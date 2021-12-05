"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutaPrueba = exports.signIn = exports.signUp = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //validar que no exista el nombre de usuario
    const userFound = yield User_1.default.findOne({ username: req.body.username });
    if (userFound)
        return res.status(409).json({ message: "username already exists" });
    //validar nombre de uusario fin
    const user = new User_1.default({
        username: req.body.username,
        password: req.body.password,
    });
    user.password = yield user.encryptPassword(user.password);
    const savedUser = yield user.save();
    //creating token
    const token = yield jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || "tokentest");
    res.status(201).header("auth-token", token).json({ message: 'user created', savedUser });
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ username: req.body.username });
    if (!user)
        return res.status(404).json({ message: "username not found" });
    const correctPassword = yield user.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json({ message: "password incorrect" });
    //creating token
    const token = yield jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || "tokentest");
    res.header('auth-token', token).status(200).json({ message: "ok", user });
});
exports.signIn = signIn;
const rutaPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await User.findById(req.userId)
    // if (!user) return res.status(404).json({ message: 'no user found'});
    // res.status(200).json({ message: 'ok', user});
    res.send('uwu');
});
exports.rutaPrueba = rutaPrueba;
//# sourceMappingURL=AuthController.js.map