import {getIPUser,savedIPUser } from "../controllers/IpUser";
import {Router} from 'express';

const router: Router = Router();

router.get('/ip', getIPUser)
router.post('/ip', savedIPUser);


export default router;