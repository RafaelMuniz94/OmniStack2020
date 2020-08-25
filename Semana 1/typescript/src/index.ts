import express from 'express'
import {helloworld} from './route'

const app = express();

app.get('/',helloworld)

app.listen(3333,()=>{
    console.log('Running 🚀')
});
