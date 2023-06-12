import express, { Request, Response } from "express";
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

app.get('/Api', (req: Request, res: Response) => {
    
    res.send('This is the reponse from Node js').status(200);
});

app.listen(3200, () => {
    console.log('Server is running on port 3200');
});
