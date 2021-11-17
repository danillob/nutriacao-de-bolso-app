const Pratice = require("../database/models/Pratice");


module.exports = {
    async store(req, res) {
        try {
            const { information } = req.body;

            const pratice = await Pratice.create({ information });

            return res.status(201).send(pratice);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {

            const pratice = await Pratice.findAll({
                include: {association: 'subtitles'},
            });
            return res.status(200).send(pratice);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const {id} = req.params;
            const pratice = await Pratice.findAll({
                where: { id: id },
                include: {
                  association: 'subtitles',
                },
            });
            return res.status(200).send(pratice);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const pratice = await Pratice.findByPk(id);

            if (!pratice)
                return res.status(400).send({ error: "pratice not found." });

            await pratice.destroy();

            return res.status(200).send({ message: "the pratice has been deleted.", action: pratice });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async deleteSubtitle(req, res) {
        try {
            const { pratice_id, subtitle_id } = req.params;
            const subtitle = await Subtitle.findByPk(subtitle_id)

            if(!subtitle)
                throw new Error("subtitle not found.");

            const pratice = await Pratice.findByPk(pratice_id)

            if(!pratice)
                throw new Error("pratice not found.");

            await pratice.removeSubtitle(subtitle);

            return res.status(200).send({ message: "the subtitle has been deleted."});


        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { information } = req.body;
            const pratice = await Pratice.findByPk(id);

            if (!pratice)
                return res.status(400).send({ error: "action not found." });

            pratice.setAttributes({ information });
            await pratice.save();

            return res.status(200).send({ message: "the action has been changed.", action: pratice });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};