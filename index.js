const express = require("express"),
    app = express(),
    morgan = require("morgan"),
    cors = require("cors"),
    helmet = require("helmet"),
    bodyParser = require("body-parser"),
    graphqlHttp = require("express-graphql"),
    { Server } = require("http");

require("dotenv").config();
const { schema, resolvers } = require("./graphql");
const { setUpDB } = require("./lib");

// set up mongoose connection
setUpDB();

// app config
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("dev"));

// allow cors
app.use(cors());

// create server
const server = Server(app);

app.get('/', (req, res) => res.send('?BE MY VALENTINES'));
app.use('/graphql',
    bodyParser.json(),
    graphqlHttp({
        schema,
        rootValue: resolvers,
        graphiql:!process.env.PRODUCTION
    }))

const port = process.env.PORT || 1996;
const ip = process.env.IP;

server.listen(port,ip, function(){
    console.log(`server running on port ${port} \n`);
})