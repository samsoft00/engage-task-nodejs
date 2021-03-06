import log from 'fancy-log'

import Engage from './app'
import MongoDbManager from './mongodbManager'
import OlistRepo from './repos/olist.repo'
require('dotenv').config()

const dbManager = MongoDbManager.getInstance()

const port =
  parseInt(process.env.NODE_ENV === 'test' ? 8378 : process.env.PORT, 10) ||
  8000

Engage.listen(port, async () => {
  await dbManager.connectDb()
  await OlistRepo.dataLoader()

  log(`Server is running on http://localhost:${port} `)
})
