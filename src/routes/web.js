import express from "express";
//import homeController from '../controllers/homeController'
//import chiphikhacController from '../controllers/chiphikhacController'
let router = express.Router();
const initWebRouter = (app) => {

    router.get('/', (req, res) => {
        res.send('Home Page')
    });

    return app.use('/', router)
}

export default initWebRouter;