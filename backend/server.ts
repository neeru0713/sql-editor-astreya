const snowflake = require("snowflake-sdk");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
import routes from "./routes/index.ts";
import * as dotenv from "dotenv";


dotenv.config();
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);


const createSnowFlakeConnection = async () => {

  try {
    const connection = await snowflake.createConnection({
      account: process.env.SNOWFLAKE_ACCOUNT,
      authenticator: process.env.SNOWFLAKE_AUTHENTICATOR,
      username: process.env.SNOWFLAKE_USERNAME,
      password: process.env.SNOWFLAKE_PASSWORD,
      database: process.env.SNOWFLAKE_DATABASE,
      application: process.env.SNOWFLAKE_DATABASE,
    });

    const conn = await connection.connect();
    console.log(conn , conn.getId(), conn.isTokenValid(), conn.isUp(), await conn.isValidAsync(), conn.isAnError())
    return connection; 
  } catch (err) {
    console.error('Error creating Snowflake connection:', err);
    throw err;
  }
};

app.listen(8080, () => {
  console.log(`server started on 8080`);
});

export { createSnowFlakeConnection };
