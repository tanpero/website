const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 中间件，解析请求体中的JSON
app.use(express.json());

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// 错误处理中间件
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 监听端口
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
