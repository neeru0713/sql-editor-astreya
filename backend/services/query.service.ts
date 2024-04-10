const { BigQuery } = require("@google-cloud/bigquery");
import { createSnowFlakeConnection } from '../server';

const sendQuerySnowflake = async (query: string): Promise<any> => {
    try {
        const connection = await createSnowFlakeConnection();
        const resultSet = await connection.execute({ sqlText: query });
        const rows = resultSet.fetchAll();
        await connection.destroy();
        return rows;
    } catch (error) {
        console.error('Error executing Snowflake query:', error);
        throw error;
    }
};

  const sendQueryBigQuery = async (query: string): Promise<any> => {
    try {
        const bigquery = new BigQuery();
        const [job] = await bigquery.createQueryJob({ query });
        const [rows] = await job.getQueryResults();
        return rows;
    } catch (error) {
        throw error;
    }
};
  
  export { sendQueryBigQuery,  sendQuerySnowflake};
  