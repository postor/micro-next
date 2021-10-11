import express from 'express'
import next from 'next'

import routes from '../../common/routes'

const port = parseInt(process.env.PORT, 10) || 3000
const { DEV_MODE } = process.env
const isDev = DEV_MODE && DEV_MODE != 'false'
const nextApp = next({ dev: isDev })

  ;
(async () => {
  await nextApp.prepare()
  let app = express()
  app.use(routes.getRequestHandler(nextApp))
  app.listen(port, () => console.log(`server started on ${port}`))
})()