import {Router} from 'express';
import { addToHistory, getUserHistory, login, register } from '../controllers/user.controllers.js';

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/addActivity").post(addToHistory);
router.route("/getActivity").get(getUserHistory);

export default router;