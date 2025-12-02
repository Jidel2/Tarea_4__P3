const Region = require('../models/Region');

exports.getRegions = async (req, res) => {
    const regions = await Region.findAll();
    res.render('regions/index', { regions });
};

exports.getCreateRegion = (req, res) => {
    res.render('regions/create');
};

exports.postCreateRegion = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.render('regions/create', { error: 'El nombre es obligatorio' });
    }
    await Region.create({ name });
    res.redirect('/regions');
};

exports.getEditRegion = async (req, res) => {
    const region = await Region.findByPk(req.params.id);
    res.render('regions/edit', { region });
};

exports.postEditRegion = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        const region = await Region.findByPk(req.params.id);
        return res.render('regions/edit', { region, error: 'El nombre es obligatorio' });
    }
    await Region.update({ name }, { where: { id: req.params.id } });
    res.redirect('/regions');
};

exports.getDeleteRegion = async (req, res) => {
    const region = await Region.findByPk(req.params.id);
    res.render('regions/delete', { region });
};

exports.postDeleteRegion = async (req, res) => {
    await Region.destroy({ where: { id: req.params.id } });
    res.redirect('/regions');
};