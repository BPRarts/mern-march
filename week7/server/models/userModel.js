const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true,'First name is required']
    },
    lastName:{
        type:String,
        required:[true,':Last name is required']
    },
    email:{
        type:String,
        required:[true,':Email name is required'],
        validate:[isEmail,'Invalid Email']
    },
    password:{
        type:String,
        required:[true,':Password is required'],
        minLength:[8,'Password must be 8 characters']
    }
},{timestamps:true})

UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value)
    
UserSchema.pre('validate',function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword','Password dont match')
    }
    next();
})

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model('User', UserSchema)
