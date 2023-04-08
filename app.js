//設定用express.js 框架
const express = require('express')
const app = express()

//設定用express-handlebars進行樣板引擎設定
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//定義伺服器連接阜號
const port = 3000

//設定靜態檔案位置
app.use(express.static('public'))

//設定req/res
app.get('/',(req, res) => {
   const home = "首頁"
  res.render('index', {home: home})
})

app.get('/:n',(req, res) => {
   const test = req.params.n
   res.render('index', {test: test})
})

//啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})