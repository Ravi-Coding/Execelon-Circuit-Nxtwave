const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 3004;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(()=>console.log('MongoDB connected successfully'))
.catch(error=>console.error('MongoDB connection error:',error));


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

