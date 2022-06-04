import { Request, Response } from "express";
import { failure, success } from "../utils/helper";
import CVService from "../services/CVService";
import { ICV } from "../interfaces/index.interface";

const CV = new CVService();

export const generateCV = async(req: Request, res: Response) => {
  const {basics, work, education, skills, projects} = req.body as ICV;
  const userId = req.params.userId as string;

  let url = await CV.generateCV({basics, work, education, skills, projects}, userId);

  return res.json(success(url, 'Your CV has been generated.'));
}
