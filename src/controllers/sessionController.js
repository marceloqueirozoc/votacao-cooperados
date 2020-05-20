const Session = require('../models/session');

module.exports = {

    async cadSession(req, res){
        const { title } = req.body;

        try {
            if(await Session.findOne({ title }))
                return res.status(400).send({ error: 'Sessão existente!'});

            const session = await Session.create(req.body);

            return res.send({ session });
        }catch (err){
            return res.status(400).send({ error: 'Erro ao registrar sessão!'})
        }
    },

    async getSessions(req,res) {
        Session.find({}, function(err, session) {
            res.json(session);
        });
      }

}