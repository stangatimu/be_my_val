const { buildSchema } = require("graphql");

const Invitation = require("./invitation");

module.exports = buildSchema(`
    ${Invitation}
    
    type Query {
        Invitation:InvitationQ
    }

    type Mutation {
        Invitation: InvitationM
    }
`)