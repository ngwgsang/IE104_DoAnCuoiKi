const product = [
//# PIZZA
    {
      name: 'Pizza Hải Sản',
      description: 'Tôm, cua, mực và nghêu với sốt Marinara',
      price: 99000,
      pic: './images/pizza-1.png'
    },
    {
      name: 'Pizza Hải Sản Đào',
      description: 'Tôm, Giăm bông, Đào hoà quyện bùng nổ cùng sốt Thousand Island',
      price: 99000,
      pic: './images/pizza-2.png'
    },
    {
      name: 'Pizza Hải Sản Cocktail',
      description: 'Tôm, cua, giăm bông,... với sốt Thousand Island',
      price: 99000,
      pic: './images/pizza-3.png'
    },
    {
      name: 'Pizza Hải Sản Nhiệt Đới',
      description: 'Tôm, nghêu, mực cua, dứa với sốt Thousand Island',
      price: 99000,
      pic: './images/pizza-4.png'
    },
    {
      name: 'Pizza Thịt Nguội Kiểu Canada',
      description: 'Sự kết hợp giữa thịt nguội và bắp ngọt',
      price: 99000,
      pic: './images/pizza-6.png'
    },
    {
      name: 'Pizza Thịt Xông Khói',
      description: 'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua',
      price: 99000,
      pic: './images/pizza-7.png'
    },
//# SPAGHETTI
    {
        name: 'Mì Ý Cay Hải Sản',
        description: 'Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi',
        price: 99000,
        pic: './images/spg-1.png'
    },
    {
        name: 'Mì Ý Cay Xúc Xích',
        description: 'Mỳ Ý rán với xúc xích cay, thảo mộc, ngò gai và húng quế Ý',
        price: 99000,
        pic: './images/spg-2.png'
    },
    {
        name: 'Mì Ý Giăm Bông',
        description: 'Mỳ Ý, nấm và giăm bông được nấu cùng với sốt kem trắng',
        price: 99000,
        pic: './images/spg-3.png'
    },
    {
        name: 'Mì Ý cay với thịt xông khói',
        description: 'Mỳ Ý cay nồng và ngậy hương thơm của thịt xông khói',
        price: 99000,
        pic: './images/spg-4.png'
    },
    {
        name: 'Mì Ý Chay Sốt Marinara',
        description: 'Sốt Marinara, nấm, ớt chuông và cà chua đỏ',
        price: 99000,
        pic: './images/spg-5.png'
    },
    {
        name: 'Mì Ý thịt bò bằm',
        description: 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý',
        price: 99000,
        pic: './images/spg-6.png'
    },
//# SALAD
    {
        name: 'Salad Gà Giòn Không Xương',
        description: 'Salad Gà giòn với trứng cút, thịt xông khói, phô mai parmesan và sốt Thousand Island',
        price: 79000,
        pic: './images/salad-1.png'
    },
    {
        name: 'Salad Da Cá Hồi Giòn',
        description: 'Salad với da cá hồi giòn với bắp cải đỏ, cà chua bi, ngô với sốt Yuzu',
        price: 79000,
        pic: './images/salad-2.png'
    },
//# FRIED
    {
        name: 'Gà Zòn Zòn',
        description: 'Cánh gà được phủ bởi một lớp bột chiên giòn',
        price: 99000,
        pic: './images/fr-1.png'
    },
    {
        name: 'Đùi Gà Tẩm Bột Chiên Giòn',
        description: 'Đùi Gà phủ một lớp bột chiên giòn rụm',
        price: 99000,
        pic: './images/fr-2.png'
    },
    {
        name: 'Gà Giòn Không Xương',
        description: 'Gà giòn tan với sốt Cocktail thơm ngậy',
        price: 99000,
        pic: './images/fr-3.png'
    },
    {
        name: 'Gà Zòn Zòn cay',
        description: 'Cánh gà được phủ bởi một lớp bột chiên giòn cay',
        price: 99000,
        pic: './images/fr-4.png'
    },
//# DRINK
    {
        name: 'Seven Up',
        description: 'Seven up vị nguyên bản',
        price: 22000,
        pic: './images/d-1.png'
    },
    {
        name: 'Mirinda vị Soda Kem',
        description: 'Mirinda vị Soda kem ngon xoắn lưỡi',
        price: 22000,
        pic: './images/d-2.png'
    },
    {
        name: 'Pepsi vị chanh không calo',
        description: 'Pepsi phiên bản vị chanh không calo',
        price: 22000,
        pic: './images/d-3.png'
    },
    {
        name: 'Pepsi không calo',
        description: 'Pepsi phiên bản không calo',
        price: 22000,
        pic: './images/d-4.png'
    },
    {
        name: 'Trà Lipton vị chanh',
        description: 'Trà đen vị chanh từ thương hiệu Lipton',
        price: 22000,
        pic: './images/d-5.png'
    },
    {
        name: 'Pepsi',
        description: 'Pepsi vị nguyên bản',
        price: 22000,
        pic: './images/d-6.png'
    },
//# DRINK
    {
        name: 'Combo Tri Ân',
        description: '1 Pizza Hải Sản + 1 Salad Gà Giòn Không Xương + 1 Gà Zòn Zòn',
        price: 269000,
        pic: './images/combo-1.png'
    },
    {
        name: 'Combo Đồng Hành',
        description: '1 Pizza Thịt Nguội Kiểu Canada + 1 Salad Da Cá Hồi Giòn + 1 Gà Zòn Zòn',
        price: 269000,
        pic: './images/combo-2.png'
    },
    {
        name: 'Combo Gắn Kết',
        description: '1 Pizza Thịt Nguội Kiểu Canada + 1 Salad Da Cá Hồi Giòn + 1 Mì Ý Sốt Chay Marinara',
        price: 269000,
        pic: './images/combo-3.png'
    },
    //#BỔ SUNG
    {
        name: 'Mực chiên giòn',
        description: 'Khoanh mực chiên giòn rụm',
        price: 99000,
        pic: './images/fr-5.png'
    },
    {
        name: 'Khoai tây chiên',
        description: 'Khoai tây chiên giòn với công thức ướp đặc trưng',
        price: 99000,
        pic: './images/fr-6.png'
    },
    {
        name: 'Salad rau củ trộn dầu giấm',
        description: 'Salad rau củ trộn dầu giấm',
        price: 99000,
        pic: './images/salad-3.png'
    },
    {
        name: 'Salad rau củ mayonaise',
        description: 'Salad rau củ mayonaise',
        price: 99000,
        pic: './images/salad-4.png'
    },

]