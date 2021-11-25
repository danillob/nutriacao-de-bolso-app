const PracticeCategory = require("../database/models/PracticeCategory");


module.exports = {
  
    async store(req, res) {
        try {
            const { title, subcategory_of } = req.body;
           
            const practiceCategory = await PracticeCategory.findOrCreate({where:{title, subcategory_of}});
           
            return res.status(201).send(practiceCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {
            // trazer corretamente a relação
            const practiceCategory = await PracticeCategory.findAll({
                include: {association: 'sub_category_of'},
            });
            return res.status(200).send(practiceCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const {id} = req.params;
            const practiceCategory = await PracticeCategory.findAll({
                where: { id: id },
                include: {
                  association: 'sub_category_of',
                },
            });
            return res.status(200).send(practiceCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const practiceCategory = await PracticeCategory.findByPk(id);

            if (!practiceCategory)
                return res.status(400).send({ error: "Practice Category not found." });

            await practiceCategory.destroy();

            return res.status(200).send({ message: "the practiceCategory has been deleted.", action: practiceCategory });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { title, subcategory_of } = req.body;
            const practiceCategory = await PracticeCategory.findByPk(id);

            if (!practiceCategory)
                return res.status(400).send({ error: "practiceCategory not found." });

                practiceCategory.setAttributes({ title, subcategory_of });
            await practiceCategory.save();

            return res.status(200).send({ message: "the practiceCategory has been changed.", practiceCategory: practiceCategory });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};
