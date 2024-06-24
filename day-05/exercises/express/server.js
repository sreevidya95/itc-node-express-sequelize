const express = require('express');
const server =express();
const ProductRoutes = require('./ProductRoutes');
server.use('/products',ProductRoutes);
server.listen(3000,()=>{
    console.log("listening")
})