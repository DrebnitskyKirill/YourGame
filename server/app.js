const express = require('express');
const config = require('./config');
const logRouter = require('./routes/api/log.routes')
const regRouter = require('./routes/api/reg.routes');
const logoutRouter = require('./routes/api/logout.routes')



const app = express();

const PORT = process.env.PORT || 3002;

config(app);

app.use('/', logRouter);
app.use('/', regRouter);
app.use('/', logoutRouter);




app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
