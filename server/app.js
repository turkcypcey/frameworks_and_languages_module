const express = require('express')
const app = express()
const port = 8000

ITEMS = {
  1: {
      "id": 1,
      "user_id": "user1234",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "lat": 1,
      "lon": 1,
      "date_from": "2021-11-22T08:22:39.067408",
  }
}

app.get('/', (req, res) => {
  res.json({})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})