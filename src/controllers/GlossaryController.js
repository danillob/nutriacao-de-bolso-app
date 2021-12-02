const Glossary = require("../database/models/Glossary");

module.exports = {
    async store(req, res) {
        try {

            const { title, description } = req.body;
           
            const glossary = await Glossary.create({  title, description });

            return res.status(201).send(glossary);

        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {
            const glossary = await Glossary.findAll();
            return res.status(200).send(glossary);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const {title} = req.params;
            const glossary = await Glossary.findAll({
                where: { title: title + "%" }
            });
            return res.status(200).send(glossary);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const glossary = await Glossary.findByPk(id);

            if (!glossary)
                return res.status(400).send({ error: "glossary not found." });

            await glossary.destroy();

            return res.status(200).send({message: "the glossary has been deleted.", glossary: glossary});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { title } = req.body;
            const glossary = await Glossary.findByPk(id);

            if (!glossary)
                return res.status(400).send({ error: "glossary not found." });

                glossary.setAttributes({ title });
            await glossary.save();

            return res.status(200).send({message: "the glossary has been changed.", glossary: glossary});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};