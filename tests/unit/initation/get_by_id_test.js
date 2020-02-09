const { assert } = require('chai')
const mongoose = require('mongoose');

// invitation logic
const { Invitation } = require("../../../logic");


describe('Invitation', function(){
    describe("get by id",function(){
        let data;
        this.beforeAll(async ()=>{
            data = await mongoose.model("Invitation").create({
                recepient:{
                    name:"lupita kare",
                    alias:"Lulu"
                },
                sender:"Stan Gatimu",
            });
        });
        it("should require invitation id to be provided", async ()=>{
            try{
                let inivitaion = await Invitation.getById();
                assert.isUndefined(inivitaion,'expected undefined but got result'); 
            
            }catch(err){
                assert.equal(err.message,'invitation id is required');    
            }
        });
        it("should require provided id to be a valid object id", async ()=>{
            try{
                let inivitaion = await Invitation.getById("this cannot be an object id");
                assert.isUndefined(inivitaion,'expected undefined but got result');                
            
            }catch(err){
                assert.equal(err.message,'provided id is not a valid id');    
            }
        });
        it("should return inivitaion with correct fields", async ()=>{
            let inivitaion = await Invitation.getById(data.id);
            assert.equal(data.sender,inivitaion.sender);
            assert.equal(data.recepient.name,inivitaion.recepient.name);
            assert.equal(inivitaion.status,false);
            
        });
    });
});