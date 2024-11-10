import { Router } from "express";
import { sendEmailController } from "./controlers/emailControler.js";


const router = Router();

router.post(`/send-email`, sendEmailController);






export default router;