"use strict";

const mongoose = require("mongoose");
const env = require('dotenv');
env.config();

const { setUpDB } = require("../lib");

before(async ()=> await setUpDB())

after(() => mongoose.disconnect());