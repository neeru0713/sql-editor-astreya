
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
import routes from './routes/index.ts';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.listen(8080, () => {
  console.log(`server started on 8080`);
});

export default routes;




