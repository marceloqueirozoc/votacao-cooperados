const axios = require('axios');

const User = require('../models/user');

module.exports = {
    async register(req, res){
        const { email } = req.body;

        try {
            if(await User.findOne({ email })) 
                return res.status(400).send({ error: 'Usuário existente!'});
            
            const user = await User.create(req.body);

            user.password = undefined;

            return res.send({ user });
        } catch (err) {
            return res.status(400).send({ error: 'Erro ao registrar usuário!'});
        }
    },

    async cpfCheck(req, res){
        const { cpf } = req.body;

        try{
            if(await User.findOne({ cpf })){
                const apiResponse = await axios.get(`https://user-info.herokuapp.com/users/${ cpf }`);
                return res.status(200).send(apiResponse.data);
            }
        }catch (err) {
            return res.status(400).send({ error: 'CPF Inválido!'});
        }

    },
    
    async getUsers(req,res) {
        User.find({}, function(err, user) {
            res.json(user);
        });
      }
}