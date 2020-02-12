const { assert } = require('chai');
const mongoose = require('mongoose');

// invitation log
const { Invitation } = require("../../../logic");



describe("Invitation", function(){
    describe("getManyByIds", function(){
        let data;
        this.beforeAll(async ()=>{
            data = await mongoose.model("Invitation").insertMany(params);
        });

        it("should get all the invitations by ids", async ()=>{
            const result = await Invitation.getManyByIds(
                [...data.map(invite =>(invite.id)).slice(0,2)]
            );
            assert.isArray(result,"expected array got non-array");
            assert.lengthOf(result,2);
        })
        // TODOs : make the tests more comprehensive
    })
});

const params =[
    {
        recepient:{
            name:"lupita kare",
            alias:"Lulu"
        },
        sender:"Stan Gatimu",
    },
    {
        recepient:{
            name:"lupita kare",
            alias:"Lulu"
        },
        sender:"Stan Gatimu",
    },
    {
        recepient:{
            name:"lupita kare",
            alias:"Lulu"
        },
        sender:"Stan Gatimu",
    },
    {
        recepient:{
            name:"lupita kare",
            alias:"Lulu"
        },
        sender:"Stan Gatimu",
    }
]