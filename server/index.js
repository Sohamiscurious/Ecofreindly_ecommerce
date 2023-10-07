const express = require('express');
const cors = require('cors');

require('./models/config');
require('./models/User')
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());
const PORT = process.env.PORT || 5000

app.use('/api/auth', require('./routes/auth'));
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(PORT,()=>{
    console.log("Connected to http://localhost:5000");
})