const mongoose = require('mongoose');

require('../models/Tool');

const Tool = mongoose.model('Tool');


module.exports = {
    async index(req, res) {
        const tools = await Tool.find();

        return res.json(tools);
    },

    async findTool(req, res) {
        const tool = await Tool.findById(req.params.id);
        return res.json(tool);
    },

    async createTool(req, res) {
        const tool = await Tool.create(req.body);

        return res.json(tool);
    },

    async update(req, res) {
        const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(tool);
    },

    async destroy(req, res) {
        await Tool.findByIdAndDelete(req.params.id);

        return res.json({
            "Mensagem": `A ferramenta ${req.params.id} foi deletada`
        });
    }
}