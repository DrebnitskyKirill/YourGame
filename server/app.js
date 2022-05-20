const express = require('express');
const config = require('./config');
const questionRoute = require('./routes/api/question.routes');
// const mainRoute = require('./routes/views/main.route');
// const regRoute = require('./routes/api/reg.routes');
// const userRoute = require('./routes/api/user.routes');
// const activeRoute = require('./routes/api/active.routes');

const app = express();

const PORT = process.env.PORT || 4000;

config(app);

// app.use('/', mainRoute);
// app.use('/', regRoute);
app.use('/', questionRoute);
// app.use('/user', userRoute);
// app.use('/', activeRoute);


app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
