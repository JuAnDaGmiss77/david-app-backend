import {signIn, signUp, rutaPrueba} from '../controllers/AuthController';
import { Router } from 'express';
import {tokenValidation} from '../libs/verifityToken';

const router: Router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/ruta_prueba', tokenValidation, rutaPrueba );

export default router;