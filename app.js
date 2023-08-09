import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();

app.use(express.json());
app.use('/api/user',router);
app.use('/api/blog', blogRouter);

mongoose.connect(
    "mongodb://127.0.0.1:27017"
)
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to Databse and listening to localhost 5000")
    );

// app.use("/", (req, res) => {
//     res.send("Hello World");
// });

// app.listen(5000);
