"use strict";

const mongoose = require("mongoose");
const env = require('dotenv');
env.config();

const { setUpDB } = require("../lib");

setUpDB();

after(() => mongoose.disconnect());