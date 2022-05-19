const express = require('express');
const config = require('./config');
// const mainRoute = require('./routes/views/main.route');
// const regRoute = require('./routes/api/reg.routes');
// const productRoute = require('./routes/api/product.routes');
// const userRoute = require('./routes/api/user.routes');
// const activeRoute = require('./routes/api/active.routes');

const app = express();

const PORT = process.env.PORT || 3000;

config(app);

// app.use('/', mainRoute);
// app.use('/', regRoute);
// app.use('/', productRoute);
// app.use('/user', userRoute);
// app.use('/', activeRoute);
dsfas

app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
