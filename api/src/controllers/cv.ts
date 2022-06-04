import { Request, Response } from "express";
import { failure, success } from "../utils/helper";
import CVService from "../services/CVService";

const CV = new CVService();

export const generateCV = (req: Request, res: Response) => {
  CV.generateCV({});
  return res.json(success(null, 'Your CV is being generated.'));
}
