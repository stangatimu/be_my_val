const { assert } = require('chai')
const mongoose = require('mongoose');


describe('Invitation', function(){
    describe("get by id",function(){
        it("should require invitation id to be provided");
        it("should require provided id to be a valid object id");
        it("should return inivitaion with correct fields");
    });
});