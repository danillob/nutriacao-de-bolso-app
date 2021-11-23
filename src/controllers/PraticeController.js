const Practice = require("../database/models/Practice");


module.exports = {
    async store(req, res) {
        try {
            const { information } = req.body;

            const practice = await Practice.create({ information });

            return res.status(201).send(practice);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {

            const practice = await Practice.findAll({
                include: {association: 'practice_practice_group'},
            });
            return res.status(200).send(practice);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const {id} = req.params;
            const practice = await Practice.findAll({
                where: { id: id },
                include: {
                  association: 'practice_practice_group',
                },
            });
            return res.status(200).send(practice);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const practice = await Practice.findByPk(id);

            if (!practice)
                return res.status(400).send({ error: "Practice not found." });

            await practice.destroy();

            return res.status(200).send({ message: "the practice has been deleted.", action: practice });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { information } = req.body;
            const practice = await Practice.findByPk(id);

            if (!practice)
                return res.status(400).send({ error: "practice not found." });

            practice.setAttributes({ information });
            await practice.save();

            return res.status(200).send({ message: "the practice has been changed.", practice: practice });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};
