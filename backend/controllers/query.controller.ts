import { Request, Response } from "express";
import {sendQuery} from "../services/query.service.ts"

const sendQueryHandler = async (req: Request, res: Response) => {
  try {
   console.log(req.body)
   const res = await sendQuery()
   console.log(res)
  } catch (error) {
  }
};

export default { sendQueryHandler };
