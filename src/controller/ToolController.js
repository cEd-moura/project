const mongoose = require('mongoose');

require('../models/Tool');

const Tool = mongoose.model('Tool');


module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const tools = await Tool.paginate({}, { page, limit: 20 });

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
    },

    async testeMarko(req, res) {
        tools = await Tool.find();
        res.marko(
            require('../views/lista.marko'),
            tools)
    },

    criaMarko(req, res) {
        res.marko(
            require('../views/cria.marko')
        )
    },

    async editaMarko(req, res) {
        try {
            tool = await Tool.findById(req.params.id);
            res.marko(
                require('../views/edita.marko',
                    tool)
            )
        } catch (error) {
            console.log(error);
        }
    },

    async criaToolMarko(req, res) {
        try {
            tool = await Tool.create(req.body);
            res.redirect('/teste_marko');
        } catch (err) {
            console.log('Verifique o preenchimento dos campos');
            res.redirect('/teste_marko/new')
        }
    },
    async deletaToolMarko(req, res) {
        try {
            await Tool.findByIdAndDelete(req.params.id);
            res.status(200).end();
        } catch (error) {
            console.log('Failed');
        }
    },

    async updateToolMarko(req, res) {
        try {
            tool = await Tool.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/teste_marko');
        } catch (error) {
            console.log('Ocorreu um erro');
        }
    }
}