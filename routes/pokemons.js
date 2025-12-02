const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getPokemons);
router.get('/create', pokemonController.getCreatePokemon);
router.post('/create', pokemonController.postCreatePokemon);
router.get('/edit/:id', pokemonController.getEditPokemon);
router.post('/edit/:id', pokemonController.postEditPokemon);
router.get('/delete/:id', pokemonController.getDeletePokemon);
router.post('/delete/:id', pokemonController.postDeletePokemon);

module.exports = router;