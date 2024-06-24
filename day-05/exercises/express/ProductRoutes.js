const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    console.log(req.query);
   if(req.query.filter && req.query.sort){
    res.send(`Get the products list filter by ${req.query.filter} and sort by ${req.query.sort}`)
   }
   else if(req.query.filter){
    res.send(`Get the prducts list filter by ${req.query.filter}`)
   }
   else if(req.query.sort){
    res.send(`Get the prducts list sort by ${req.query.sort}`)
   }
   else{
    res.send("Get the product list");
   }
});
router.post('/',(req,res)=>{
    res.send("Post request for products");
})
router.put("/:id",(req,res)=>{
   res.send(`Put request for product ${req.params.id}`);
});
router.delete("/:id",(req,res)=>{
    res.send(`Delete request for products ${req.params.id}`);
})
router.get("/:productId/reviews",(req,res)=>{
    res.send(`getting reviews for ${req.params.productId}`);
});
router.post("/:productId/reviews",(req,res)=>{
    res.send(`Adding review for ${req.params.productId}`)
});
router.delete("/:productId/reviews/:reviweId",(req,res)=>{
    res.send(`deleting the ${req.params.reviweId} for the product ${req.params.productId} `)
});
router.post(":productId/reviews")
module.exports = router;