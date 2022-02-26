dbPassword = 'mongodb+srv://user:'+ encodeURIComponent('user') + '@cluster0.0rg6k.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};
// module.exports= {
//     MongoURI: 'mongodb+srv://user:user@cluster0.0rg6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// }