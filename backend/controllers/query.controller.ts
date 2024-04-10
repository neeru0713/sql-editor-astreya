import { Request, Response } from "express";
import {sendQueryBigQuery, sendQuerySnowflake} from "../services/query.service.ts"

const sendQueryHandler = async (req: Request, res: Response) => {
  try {
   console.log()
   const {query, database} = req.body
   if(database === 'BigQuery'){
    // use google cloud BigQuery api
    const data = await sendQueryBigQuery(query)
    res.status(200).json({data})
    
   } else if(database === 'Snowflake'){
    // use snowflake api
    const data = await sendQuerySnowflake(query)
    res.status(200).json({data})
   }

   
   console.log(res)
  } catch (error) {
  }
};

export default { sendQueryHandler };
