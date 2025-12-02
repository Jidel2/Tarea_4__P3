const Type = require('../models/Type');

exports.getTypes = async (req, res) => {
    const types = await Type.findAll();
    res.render('types/index', { types });
};

exports.getCreateType = (req, res) => {
    res.render('types/create');
};

exports.postCreateType = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.render('types/create', { error: 'El nombre es obligatorio' });
    }
    await Type.create({ name });
    res.redirect('/types');
};

exports.getEditType = async (req, res) => {
    const type = await Type.findByPk(req.params.id);
    res.render('types/edit', { type });
};

exports.postEditType = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        const type = await Type.findByPk(req.params.id);
        return res.render('types/edit', { type, error: 'El nombre es obligatorio' });
    }
    await Type.update({ name }, { where: { id: req.params.id } });
    res.redirect('/types');
};

exports.getDeleteType = async (req, res) => {
    const type = await Type.findByPk(req.params.id);
    res.render('types/delete', { type });
};

exports.postDeleteType = async (req, res) => {
    await Type.destroy({ where: { id: req.params.id } });
    res.redirect('/types');
};