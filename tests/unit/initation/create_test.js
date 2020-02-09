const { assert } = require('chai');
const mongoose = require('mongoose');

// create invitation logic
const { Invitation } = require("../../../logic");


describe("Invitation", function(){
    describe("Create",function(){
        it("should check if recepient name is provided", async ()=>{
            const params = {
                recepient:{
                    alias:"Lulu"
                },
                sender:"Stan Gatimu",
            }
            try{
                const result = await Invitation.create(params)
                assert.isFalse(!!result);

            }catch(err){
                assert.equal(err.message,'"recepient.name" is required');
            }
        });
        it("should require sender's name to be provided", async ()=>{
            const params = {
                recepient:{
                    name:"lupita kare",
                    alias:"lulu"
                },
            }
            try{
                const result = await Invitation.create(params)
                assert.isFalse(!!result);
            }catch(err){
                assert.equal(err.message,'"sender" is required');
            }
        });
        it("should ensure recipient's name is a valid string", async ()=>{
            const params = {
                recepient:{
                    name:"lupita123kare",
                    alias:"Lulu"
                },
                sender:"Stan Gatimu",
            }
            try{
                const result = await Invitation.create(params)
                assert.isFalse(!!result);

            }catch(err){
                assert.equal(err.message,'"recepient.name" with value "lupita123kare" fails to match the required pattern: /^[a-zA-Z ]*$/');
            }
        });
        it("should ensure sender's name is a valid string", async ()=>{
            const params = {
                recepient:{
                    name:"lupita kare",
                    alias:"Lulu"
                },
                sender:"Stan 13Gatimu",
            }
            try{
                const result = await Invitation.create(params)
                assert.isFalse(!!result);

            }catch(err){
                assert.equal(err.message,'"sender" with value "Stan 13Gatimu" fails to match the required pattern: /^[a-zA-Z ]*$/');
            }
        });
        it("should create invitation and return invitation id", async ()=>{
            const params = {
                recepient:{
                    name:"lupita kare",
                    alias:"Lulu"
                },
                sender:"Stan Gatimu",
            }
            
            const result = await Invitation.create(params);
            assert.isDefined(result,'expected object id returned undefined');
            assert.isTrue(mongoose.isValidObjectId(result),'returned result is not a valid object id');
         
        });
    });
});