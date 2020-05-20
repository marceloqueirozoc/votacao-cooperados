const Topic = require('../models/topic');

module.exports = {
    async cadTopic(req, res){
        const { title } = req.body;

        try {
            if(await Topic.findOne({ title }))
                return res.status(400).send({ error: 'Pauta existente!'});

            const topic = await Topic.create(req.body);

            return res.send({ topic });
        }catch (err){
            return res.status(400).send({ error: 'Erro ao registrar pauta!'})
        }
    },

    async getTopics(req,res) {
        Topic.find({}, function(err, topic) {
            res.json(topic);
        });
      }
}
