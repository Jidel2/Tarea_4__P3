const Pokemon = require('../models/Pokemon');
const Region = require('../models/Region');
const Type = require('../models/Type');

exports.getPokemons = async (req, res) => {
    const { name, regionId } = req.query;
    const where = {};
    if (name) where.name = { [Op.like]: `%${name}%` };
    if (regionId) where.RegionId = regionId;

    const pokemons = await Pokemon.findAll({
        where,
        include: [Region, Type]
    });
    const regions = await Region.findAll();
    res.render('pokemons/index', { pokemons, regions, name, regionId });
};

exports.getCreatePokemon = async (req, res) => {
    const regions = await Region.findAll();
    const types = await Type.findAll();
    res.render('pokemons/create', { regions, types });
};

exports.postCreatePokemon = async (req, res) => {
    const { name, image, regionId, typeId } = req.body;
    if (!name || !image || !regionId || !typeId) {
        const regions = await Region.findAll();
        const types = await Type.findAll();
        return res.render('pokemons/create', {
            regions,
            types,
            error: 'Todos los campos son obligatorios'
        });
    }
    await Pokemon.create({ name, image, RegionId: regionId, TypeId: typeId });
    res.redirect('/pokemons');
};

exports.getEditPokemon = async (req, res) => {
    const pokemon = await Pokemon.findByPk(req.params.id, { include: [Region, Type] });
    const regions = await Region.findAll();
    const types = await Type.findAll();
    res.render('pokemons/edit', { pokemon, regions, types });
};

exports.postEditPokemon = async (req, res) => {
    const { name, image, regionId, typeId } = req.body;
    if (!name || !image || !regionId || !typeId) {
        const pokemon = await Pokemon.findByPk(req.params.id, { include: [Region, Type] });
        const regions = await Region.findAll();
        const types = await Type.findAll();
        return res.render('pokemons/edit', {
            pokemon,
            regions,
            types,
            error: 'Todos los campos son obligatorios'
        });
    }
    await Pokemon.update(
        { name, image, RegionId: regionId, TypeId: typeId },
        { where: { id: req.params.id } }
    );
    res.redirect('/pokemons');
};

exports.getDeletePokemon = async (req, res) => {
    const pokemon = await Pokemon.findByPk(req.params.id);
    res.render('pokemons/delete', { pokemon });
};

exports.postDeletePokemon = async (req, res) => {
    await Pokemon.destroy({ where: { id: req.params.id } });
    res.redirect('/pokemons');
};