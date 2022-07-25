const express = require('express')
const app = express()
const port = 3000

import configViewEngine from './src/configs/ViewEngine';
configViewEngine(app);

//cấu hình router
import initWebRouter from './src/routes/web';
initWebRouter(app);

/* app.get('/', (req, res) => {
    res.send('Hello World!')
})
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})