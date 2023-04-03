//console.log('hello');
const dotenv = require ('dotenv');
dotenv.config();

const {PORT} = process.env;

const app = require ('./app');


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})