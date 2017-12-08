const express = require('express');
const consign = require('consign');

module.exports = function(){
    const app = express();
    consign()
        .include('routes')
        .then('data')
        .into(app);
    return app;
};