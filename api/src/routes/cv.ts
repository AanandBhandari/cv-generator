
import {Router} from 'express'
import { generateCV } from "../controllers/cv";
const router = Router()

router.post("/generate", generateCV)

export default router

