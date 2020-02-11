const mongoose = require('mongoose')
const Joi = require('@hapi/joi');


const Invitation = {
    async create(params,req){

        // expected data schema
        let data_schema = Joi.object({
            sender:Joi.string().min(3).max(30).required().pattern(/^[a-zA-Z ]*$/),
            recepient:Joi.object({
                name: Joi.string().min(3).max(30).required().pattern(/^[a-zA-Z ]*$/),
                alias:Joi.string().min(3).max(10).pattern(/^[a-zA-Z0-9 ]*$/)
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
        return new_inivitation;        
    },
    async getById(_id){
        // validate id
        if(!_id) throw new Error("invitation id is required")
        if(!mongoose.isValidObjectId(_id)) throw new Error("provided id is not a valid id");

        // findById and return
        return await mongoose.model('Invitation').findById(_id).lean();
    },
    async respondToInvitation(params,req){

        // validate id
        if(!params._id) throw new Error("invitation id is required")
        if(!mongoose.isValidObjectId(params._id)) throw new Error("provided id is not a valid id");

        // validate data object
        const data_schema = Joi.object({
            _id:Joi.string().alphanum().required(),
            comment:Joi.string().max(150),
            status:Joi.boolean()
        });

        // validate recieved data
        const is_valid = data_schema.validate(params);

        // check and throw joi validation error
        if(is_valid.error){
            throw new Error(is_valid.error.details[0].message);
        }

        // update invitation
        const invitation = await mongoose.model('Invitation').findById(params._id);

        if(!invitation) return false;

        // update invitation
        invitation.status = params.status;
        invitation.comment = params.comment;

        // save invitation
        await invitation.save();

        return invitation.status;
    }
}
module.exports = Invitation;