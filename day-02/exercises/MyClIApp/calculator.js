const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
if(isNaN(num1) || isNaN(num2)){
    console.log("values should be numbers");
}
else{
    switch(process.argv[2]){
        case 'add' : {
            addNum(num1,num2);
            break;
        }
        case 'subtract':{
            subNum(num1,num2);
            break;
        }
        case 'multiply':{
            mulNum(num1,num2);
            break;
        }
        case 'divide':{
            divNum(num1,num2);
            break;
        }
        default:console.log("operation should be add , multiply , divide, substract");
    }
}
function addNum(n1,n2){
   console.log(n1+n2);
}
function subNum(n1,n2){
    console.log(n1-n2);
}
function mulNum(n1,n2){
    console.log(n1*n2);
}
function divNum(n1,n2){
    try{
        console.log(n1/n2);
    }
    catch(e){
        console.log(e);
    }
}