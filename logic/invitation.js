const mongoose = require('mongoose')
const Joi = require('@hapi/joi');


const Invitation = {
    async create(params,req){

        // expected data schema
        let data_schema = Joi.object({
            sender:Joi.string().min(3).max(30).required().pattern(/^[a-zA-Z ]*$/),
            recepient:Joi.object({
                name: Joi.string().min(3).max(30).required().pattern(/^[a-zA-Z ]*$/),
                alias:Joi.string().alphanum().min(3).max(10).pattern(/^[a-zA-Z0-9 ]*$/)
            }).required()
        });

        // validate recieved data
        const is_valid = data_schema.validate(params);

        // check and throw joi validation error
        if(is_valid.error){
            throw new Error(is_valid.error.details[0].message);
        }

        // create new invitation
        let new_inivitation = await mongoose.model("Invitation").create(params);
        
        // return invitation id
        return new_inivitation.id;        
    }
}
module.exports = Invitation;