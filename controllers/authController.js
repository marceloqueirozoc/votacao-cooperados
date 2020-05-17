const express = require('express');

const User = require('../models/user');
const Pauta = require('../models/pauta');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email })) 
            return res.status(400).send({ error: 'Usuário existente'});
        
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao registrar usuário'});
    }
});

router.post('/cadpauta', async (req, res) => {
    const { titulo } = req.body;

    try {
        if(await Pauta.findOne({ titulo }))
            return res.status(400).send({ error: 'Pauta existente'});

        const pauta = await Pauta.create(req.body);

        return res.send({ pauta });
    }catch (err){
        return res.status(400).send({ error: 'Erro ao registrar pauta'})
    }
})

module.exports = app => app.use('/auth', router);