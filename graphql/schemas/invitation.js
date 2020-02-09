module.exports = `
    type Recepient {
        name:String!
        alias:String
    }

    input RecepientI {
        name:String!
        alias:String
    }

    type InvitationO {
        _id: ID!
        date: String!
        sender:String!
        recepient:Recepient!
        comment:String
        status:Boolean!
    }

    input ResponseI {
        _id: ID!
        status: Boolean!
        comment: String!
    }

    input InvitationI {
        _id: ID!
        date: String!
        sender:String!
        recepient:RecepientI!
    }

    type InvitationM {
        Create(params: InvitationI ): InvitationO
        RespondToInvitation(params: ResponseI ): Boolean!
    }

    type InvitationQ {
        GetById (_id:ID!): InvitationO
    }
`