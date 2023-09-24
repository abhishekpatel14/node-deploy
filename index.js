require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

console.log('env',process.env.DB_PASSWORD);

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
}


server.use(cors());
// body parser middleware
server.use(express.json());
// server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

// server.use('/api', productRouter.router);
// server.use('/', productRouter.router);
server.use('/products', productRouter.router);
// server.use('/api/v1', productRouter.router);
server.use('/users',userRouter.router);
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'build','index.html'));
  // res.sendFile(__dirname+'/build/index.html');
})



server.listen(process.env.PORT,()=>{
    console.log('server started');
})