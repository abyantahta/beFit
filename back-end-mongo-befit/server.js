const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./model');
const cors = require('cors');
const authRoute = require('./routes/auth');
const refreshToken = require('./routes/refreshToken');
const cookieParser = require('cookie-parser');

dotenv.config();
const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}
// palpale
db.mongoose.connect(db.url, dbConfig)
    .then(() => { console.log('Connected to the database!'); })
    .catch(err => {
        console.log('Cannot connect to the database!', err); process.exit();
    });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use('/api/user', authRoute);
app.get('/api/user/refreshToken', refreshToken);

exports.app = app;

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server running on port: http://localhost:' + PORT));