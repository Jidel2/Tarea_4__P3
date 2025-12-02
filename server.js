const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const session = require('express-session');
const authController = require('./controllers/authController');


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

//lo maldito handler una vaina asi coño del diablo
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    helpers: {
        eq: (a, b) => a === b
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
function requireLogin(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
}


// Routes
app.use('/', require('./routes/index'));
app.use('/pokemons', require('./routes/pokemons'));
app.use('/regions', require('./routes/regions'));
app.use('/types', require('./routes/types'));
app.get('/login', authController.showLogin);
app.post('/login', authController.login);
app.get('/logout', authController.logout);


// Database synchronization
sequelize.sync().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
//actova seccone
app.use(session({
    secret: 'supersecretkey',
    resave: false,
    saveUninitialized: false
}));

