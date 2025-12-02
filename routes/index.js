const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');
const Region = require('../models/Region');
const Type = require('../models/Type');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    const { name, regionId } = req.query;
    const where = {};
    if (name) where.name = { [Op.like]: `%${name}%` };
    if (regionId) where.RegionId = regionId;

    const pokemons = await Pokemon.findAll({
        where,
        include: [Region, Type]
    });
    const regions = await Region.findAll();
    res.render('home', { pokemons, regions, name, regionId });
});

module.exports = router;