const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('ok')
})

require('./controllers/petController')(app)
require('./controllers/userController')(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('> Start up')
})