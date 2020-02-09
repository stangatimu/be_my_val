const { assert } = require('chai');
const mongoose = require('mongoose');


// invitation log
const { Invitation } = require("../../../logic");

describe("Invitation", function(){
    describe("Accept invitation", function(){
        this.beforeAll( async ()=>{
            let data = await mongoose.model('Invitation').create({
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


        it("should require invitation id to be provided")
        it("should require provided id to be a valid object id")
        it("should should return false if invitation is not found")
        it("should should update invitation status and return true")
    })
})