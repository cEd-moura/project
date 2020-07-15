const mongoose = require('mongoose');

require('../models/Tool');

const Tool = mongoose.model('Tool');


module.exports = {
    async index(req, res) {
        const tools = await Tool.find();

        return res.json(tools);
    },

    async createTool(req, res) {
        const tool = await Tool.create(req.body);

        return res.json(tool);
    }
}