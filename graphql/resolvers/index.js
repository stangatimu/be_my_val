const { Invitation } = require("../../logic");

const APIResolvers = {
    async create({ params },req){
        return Invitation.create(params,req);
    },
    async getByID({ _id },req){
        return Invitation.getById(_id,req);
    },
    async respondToInvitation({ params },req){
        return Invitation.respondToInvitation(params,req);
    }
}

module.exports = APIResolvers;