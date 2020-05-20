const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apivotacao', { 
    useNewUrlParser: true,
        useUnifiedTopology: true,
            useCreateIndex: true
});

// mongoose.connect('mongodb://marceloqueirozoc:marceloqueirozoc@cluster0-shard-00-00-k6thy.mongodb.net:27017,cluster0-shard-00-01-k6thy.mongodb.net:27017,cluster0-shard-00-02-k6thy.mongodb.net:27017/apivotacao?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//      useUnifiedTopology: true
// })

mongoose.Promise = global.Promise;

module.exports = mongoose;