import { Request, Response } from "express";
import { failure, success } from "../utils/helper";
import CVService from "../services/CVService";
import { ICV } from "../interfaces/index.interface";

const CV = new CVService();

export const generateCV = (req: Request, res: Response) => {
  const {basics, work, education, skills, projects} = req.body as ICV;
  const userId = req.params.userId as string;

  CV.generateCV({basics, work, education, skills, projects}, userId);

  return res.json(success(null, 'Your CV is being generated.'));
}
