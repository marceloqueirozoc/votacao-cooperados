const router = require('express').Router();

const Vote = require('../models/vote');

module.exports = {

    async vote(req, res){
        const { cpf } = req.body;

        try {
            if(await Vote.findOne({ cpf })) 
                return res.status(400).send({ error: 'Usuário ja votou!'});
            
            const vote = await Vote.create(req.body);

            return res.send({ vote });
        } catch (err) {
            return res.status(400).send({ error: 'Erro ao registrar voto!'});
        }
    },

    async getVotes(req,res) {
        Vote.find({}, function(err, vote) {
            res.json(vote);
        });
      }
}
