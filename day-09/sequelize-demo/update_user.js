const {Sequelize,DataTypes,Op} = require('sequelize');
const sequelize = new Sequelize('test','root','Saibaba123456@',{
    host:"localhost",
    dialect:'mysql'
});
const User = sequelize.define('User',{
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
     type:DataTypes.STRING,
     allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    }

});
async function updateUser(){
    await sequelize.sync();
    let user = await User.findOne({
        where:{
            email:{
                [Op.like] : 'john.doe%'
            }
        }
    })
    if(user){
        user =User.update({email:'johndoe1@gmail.com'},{where:{
            email:{
                [Op.like] : 'john.doe%'
            }
        }});
        console.log('User updated:', user.toJSON())
    }
}
updateUser();