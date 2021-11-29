const Document = require("../database/models/Document");

module.exports = {
    async store(req, res) {
        try {

            const { title, link_download, description, link_site, document_category_id } = req.body;
           
            const document = await Document.create({  title, link_download, description, link_site, document_category_id });

            return res.status(201).send(document);

        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {
            const document = await Document.findAll({
                include: {association: 'document_document_category'},
            });
            return res.status(200).send(document);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const document = await Document.findByPk(id);

            if (!document)
                return res.status(400).send({ error: "document not found." });

            await document.destroy();

            return res.status(200).send({message: "the document has been deleted.", document: document});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { title } = req.body;
            const document = await Document.findByPk(id);

            if (!document)
                return res.status(400).send({ error: "document not found." });

                document.setAttributes({ title });
            await document.save();

            return res.status(200).send({message: "the document has been changed.", document: document});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};