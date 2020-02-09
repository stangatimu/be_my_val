const { Invitation } = require("../../logic");

const Resolvers = {
    async Create({ params },req){
        return Invitation.create(params,req);
    },
    async GetByID({ _id },req){
        return Invitation.getById(_id,req);
    },
    async RespondToInvitation({ params },req){
        return Invitation.respondToInvitation(params,req);
    }
}

module.exports = Resolvers;