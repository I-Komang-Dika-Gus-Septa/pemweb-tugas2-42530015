const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const pageRoutes = require('./Routes/page.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Halaman tidak ditemukan.</p>');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});