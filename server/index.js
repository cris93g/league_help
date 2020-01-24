require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require("./routes/routes")
const {json}= require("body-parser")

const app = express();
const port = process.env.PORT || 3001;
app.use(json())
app.use(cors())


routes(app)

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
