const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const toolsRoutes = require('./routes/v1/tools.route');
const userRoutes = require("./routes/v1/user.route");
const dbConnect = require("./utils/dbConnect");
const viewCount = require("./middleware/viewCount");


app.use(cors());
app.use(express.json());
app.use(viewCount);


dbConnect();
app.use('/api/v1/tools', toolsRoutes);
app.use('/api/v1/user', userRoutes);
// app.use('/api/v1/user', userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
