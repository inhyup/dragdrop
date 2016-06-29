const koa = require('koa')
const serve = require('koa-static')
const app = koa()
const path = require('path')

app.use(serve(path.join(__dirname, 'public')))

app.listen(3000)
console.log('server is running on port 3000')
