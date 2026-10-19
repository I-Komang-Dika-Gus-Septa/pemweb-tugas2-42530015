const menuKafe = [
    { id: 1, nama: 'Kopi Espresso', kategori: 'kopi', harga: 18000, deskripsi: 'Perpaduan espresso dan susu steamed yang lembut dan creamy, menghadirkan cita rasa kopi yang seimbang dengan sentuhan manis alami dari susu. Cocok dinikmati kapan saja, baik untuk menemani aktivitas sehari-hari maupun bersantai sambil menikmati setiap tegukan.', foto: 'espresso.jpg' },
    { id: 2, nama: 'Caffe Latte', kategori: 'kopi', harga: 25000, deskripsi: 'Perpaduan espresso dan susu steamed yang lembut, menghasilkan cita rasa kopi yang seimbang dengan tekstur creamy dan sentuhan manis alami dari susu. Aroma espresso yang khas berpadu sempurna dengan kelembutan susu, menciptakan minuman yang nikmat dan cocok menemani waktu santai maupun aktivitas sehari-hari.', foto: 'latte.jpg' },
    { id: 3, nama: 'Caramel Macchiato', kategori: 'kopi', harga: 32000, deskripsi: 'Perpaduan espresso dengan susu segar yang lembut, dilengkapi sentuhan saus karamel manis yang memberikan cita rasa khas pada setiap tegukan. Aroma kopi yang kuat berpadu dengan kelembutan susu dan manisnya karamel, menciptakan rasa yang seimbang dan nikmat. Pilihan tepat bagi kamu yang menyukai kopi dengan sentuhan manis dan aroma karamel yang menggoda.', foto: 'caramel-macchiato.jpg' },
    { id: 4, nama: 'Manual Brew V60', kategori: 'kopi', harga: 28000, deskripsi: 'Kopi hitam yang diseduh secara manual menggunakan metode V60 untuk menghasilkan cita rasa kopi yang khas dan aroma yang memikat. Menggunakan pilihan biji kopi single origin dengan karakter rasa yang unik, menghadirkan pengalaman menikmati kopi yang lebih autentik. Cocok bagi pencinta kopi hitam yang ingin menikmati kekayaan aroma dan cita rasa alami dari setiap biji kopi.', foto: 'v60.jpg' },
    { id: 5, nama: 'Green Tea Latte', kategori: 'non-kopi', harga: 28000, deskripsi: 'Perpaduan matcha Jepang pilihan dengan susu yang lembut dan creamy, menghadirkan cita rasa teh hijau yang khas dengan sentuhan rasa manis yang seimbang. Aroma matcha yang menenangkan berpadu dengan kelembutan susu, menciptakan minuman yang nikmat dan menyegarkan untuk menemani waktu santai Anda.', foto: 'greentea.jpg' },
    { id: 6, nama: 'Chocolate Regal', kategori: 'non-kopi', harga: 30000, deskripsi: 'Perpaduan susu cokelat yang creamy dengan remahan biskuit Marie Regal yang khas, menghadirkan rasa cokelat yang manis dan tekstur biskuit yang menambah kenikmatan di setiap tegukan. Kombinasi cokelat dan biskuit menciptakan minuman yang lembut dengan cita rasa yang memanjakan, cocok dinikmati kapan saja untuk menemani waktu santai Anda.', foto: 'choco-regal.jpg' },
    { id: 7, nama: 'Croissant Butter', kategori: 'makanan', harga: 20000, deskripsi: 'Pastry berlapis dengan tekstur renyah di bagian luar dan lembut di bagian dalam, dipadukan dengan aroma mentega yang harum dan menggugah selera. Setiap gigitan menghadirkan cita rasa buttery yang khas dengan sensasi ringan dan nikmat. Cocok dinikmati sebagai teman minum kopi di pagi hari maupun camilan santai di waktu luang.', foto: 'croissant.jpg' },
    { id: 8, nama: 'Chicken Wings BBQ', kategori: 'makanan', harga: 35000, deskripsi: 'Sayap ayam goreng crispy yang dibalut dengan saus barbecue bercita rasa gurih dan manis, menghadirkan perpaduan rasa yang lezat di setiap gigitan. Tekstur ayam yang renyah di luar dengan daging yang lembut di dalam berpadu dengan aroma khas saus BBQ yang menggugah selera. Cocok dinikmati sebagai camilan lezat maupun teman bersantai bersama teman dan keluarga.', foto: 'chicken-wings.jpg' },
    { id: 9, nama: 'French Fries Truffle', kategori: 'makanan', harga: 26000, deskripsi: 'Kentang goreng renyah yang dipadukan dengan taburan bumbu truffle spesial, menghadirkan cita rasa gurih dengan aroma khas yang menggugah selera. Tekstur kentang yang renyah di luar dan lembut di dalam membuat setiap gigitan terasa nikmat. Cocok dijadikan camilan untuk menemani waktu santai, berkumpul bersama teman, atau sebagai pelengkap minuman favorit Anda.', foto: 'french-fries.jpg' },
    { id: 10, nama: 'Churros Saus Cokelat', kategori: 'makanan', harga: 22000, deskripsi: 'Camilan pastry goreng berbentuk tabung dengan tekstur renyah di luar dan lembut di dalam, disajikan bersama saus cokelat yang manis dan lumer. Perpaduan tekstur churros yang khas dengan kelembutan saus cokelat menciptakan sensasi rasa yang nikmat di setiap gigitan. Cocok dinikmati sebagai teman bersantai atau camilan manis untuk melengkapi waktu ngopi Anda.', foto: 'churros.jpg' }
];

const getKatalogMenu = (req, res) => {
    const kategoriFilter = req.query.kategori;
    const searchQuery = req.query.search ? req.query.search.toLowerCase().trim() : '';
    
    let hasilMenu = menuKafe;

    if (kategoriFilter && kategoriFilter.toLowerCase() !== 'semua') {
        hasilMenu = hasilMenu.filter(item => item.kategori.toLowerCase() === kategoriFilter.toLowerCase());
    }

    if (searchQuery) {
        hasilMenu = hasilMenu.filter(item => 
            item.nama.toLowerCase().includes(searchQuery)
        );
    }

    res.render('pages/index', { 
        menu: hasilMenu, 
        kategoriAktif: kategoriFilter || 'Semua',
        searchQuery: req.query.search || ''
    });
};

const getDetailMenu = (req, res) => {
    const menuId = parseInt(req.params.id);
    const itemMenu = menuKafe.find(item => item.id === menuId);

    if (!itemMenu) {
        return res.status(404).send('Menu tidak ditemukan!');
    }

    res.render('pages/detail', { menu: itemMenu });
};

module.exports = {
    getKatalogMenu,
    getDetailMenu
};