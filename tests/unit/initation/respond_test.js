const { assert } = require('chai');
const mongoose = require('mongoose');


// invitation log
const { Invitation } = require("../../../logic");

describe("Invitation", function(){
    describe("Respond invitation", function(){
        let data;
        this.beforeAll( async ()=>{
            data = await mongoose.model('Invitation').create({
                recepient:{
                    name:"lupita kare",
                    alias:"Lulu"
                },
                sender:"Stan Gatimu",
            });
        });
        this.afterAll(async ()=>{
            await mongoose.model("Invitation").deleteMany({})
        });


        it("should require invitation id to be provided", async ()=>{
            let params = {
                status:true,
                comment:"Thanks for the invite"
            }
            try{
                const result = await Invitation.respondToInvitation(params);
                assert.isUndefined(result,"expect error got result");
            }catch(err){
                assert.equal(err.message,"invitation id is required");
            }
        })
        it("should require provided id to be a valid object id", async ()=>{
            let params = {
                _id:"not a valid object id",
                status:true,
                comment:"Thanks for the invite"
            }
            try{
                const result = await Invitation.respondToInvitation(params);
                assert.isUndefined(result,"expect error got result");
            }catch(err){
                assert.equal(err.message,"provided id is not a valid id");
            }
        })
        it("should should return false if invitation is not found", async ()=>{
            let params = {
                _id:String(new mongoose.Types.ObjectId()),
                status:true,
                comment:"Thanks for the invite"
            }
            const result = await Invitation.respondToInvitation(params);
            assert.isFalse(result);
        })
        it("should should update invitation status and return true", async ()=>{
            let params = {
                _id:data.id,
                status:true,
                comment:"Thanks for the invite"
            }
            const result = await Invitation.respondToInvitation(params);
            const invitation = await Invitation.getById(data.id);
            assert.isTrue(result);
            assert.isTrue(invitation.status);
            assert.equal(invitation.comment,params.comment);

        })
    })
})