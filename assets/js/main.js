//#SLICK SLIDER
$('.home-promotion__slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
});
if (window.innerWidth <= 900) {
  $('.home-menu__list').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  });
}
else
$('.home-menu__list').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
});

$('.home-feedback__slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  dots: true,
  arrows:  false
});

var cart__count = 0
var cart__price = 0
var cart__more = 0
var more 
var moreprice
var size
var base
var note
var val
document.querySelector('#CART--slot').innerText = cart__count
//#MỞ OVERVIEW SẢN PHẨM KHI CLICK
document.querySelectorAll('.product').forEach((e) =>{
e.addEventListener('click',  () => {
  changeProduct(e.value)
  document.getElementById('popup').style.display = "flex";
  //#TÙY VÀO SẢN PHẨM MÀ HIỂN THỊ POPUP
  if (e.value < 7){
    document.querySelector('.product-overview__container__right--size').style.display = "block"
    document.querySelector('.product-overview__container__right--base').style.display = "block"
    document.querySelector('.product-overview__container__right--more').style.display = "block"
  }
  else{
    document.querySelector('.product-overview__container__right--size').style.display = "none"
    document.querySelector('.product-overview__container__right--base').style.display = "none"
    document.querySelector('.product-overview__container__right--more').style.display = "none"
  }
  //#CHỌN SIZE + THÊM NHÂN
  more = ""
  moreprice = 0
  cart__moreprice = 0
  document.querySelectorAll('.more__item').forEach((x) =>{
    x.addEventListener('click', () =>{
      x.classList.toggle('active');
      x.classList.toggle('active-2');
      more = ""
      moreprice = 0
      document.querySelectorAll('.active-2').forEach((i)=>{
        more += i.querySelector('.more__item--name').innerText + ", "
        moreprice += i.value
      })
      more = more.substring(0, more.length - 2)
      document.getElementById('product__price').innerText = `${product[e.value].price + moreprice}VNĐ`;
    })
  })
  size = 'Nhỏ 6"'
  document.querySelectorAll('.size__item').forEach((x) =>{
    x.addEventListener('click', () =>{
      document.querySelectorAll('.size__item').forEach((child)=>{
        child.classList.remove('active');
      })
      x.classList.add('active');
      size = x.innerText
    })
  })
  base = "Dày"
  document.querySelectorAll('.base__item').forEach((x) => {
    x.addEventListener('click', ()=>{
      document.querySelectorAll('.base__item').forEach((child)=>{
        child.classList.remove('active');
      })
      x.classList.add('active');
      base = x.innerText
    })
  })
  note =""
  document.querySelector('#product-overview-note').addEventListener('keyup', ()=>{
     note = document.getElementById('product-overview-note').value
  })
  val = e
})
})
document.querySelector('#addtocardbtn').addEventListener('click', ()=>{
  if (val.value < 7){
    document.querySelector('.cart__content__list').innerHTML += `
    <li class="cart__list__item" value = "${val.value}">
      <img src=${product[val.value].pic} class="cart__list__item--img">
      <ul>
        <li class="cart__list__item--name">${product[val.value].name} - ${product[val.value].price + moreprice}VNĐ</li>
        <li class="cart__list__item--size">${size}</li>
        <li class="cart__list__item--base">${base}</li>   
        <li class="cart__list__item--more">Thêm: ${more}</li>   
        <li class="cart__list__item--more">Ghi chú: ${note}</li>   
      </ul>
      <div class="cart__list__item--group"><span>Điều chỉnh</span><span class = "remove--btn">Xóa</span><span>Số lượng: <input type="number" value = "1"></span></div>
    </li>
    `
  }
  else{
    document.querySelector('.cart__content__list').innerHTML += `
    <li class="cart__list__item" value = "${val.value}">
      <img src=${product[val.value].pic} class="cart__list__item--img">
      <ul>
        <li class="cart__list__item--name">${product[val.value].name} - ${product[val.value].price + moreprice}VNĐ</li> 
        <li class="cart__list__item--more">Ghi chú: ${note}</li>   
      </ul>
      <div class="cart__list__item--group"><span>Điều chỉnh</span><span class = "remove--btn">Xóa</span><span>Số lượng: <input type="number" value = "1"></span></div>
    </li>
    `
  }

  toast({
    title: "Thành công!",
    message: `Bạn đã thêm ${product[val.value].name} vào giỏ hàng !`,
    type: "success",
    duration: 3000
  });
  cart__count++
  cart__price += product[val.value].price
  cart__moreprice += moreprice
  document.querySelector('.cart__content__summary--totalprice').innerText = `${cart__price + cart__moreprice + 30000}VNĐ`
  document.querySelector('.cart__content__summary--total--price').innerText = `${cart__price + cart__moreprice}VNĐ`
  document.querySelector('.cart__content__summary--ship--price').innerText = "30000VNĐ"
  document.querySelector('#CART--slot').innerText = cart__count
  if (cart__count == 0) document.querySelector('.cart__content__list__noti').style.display = "flex"
  else document.querySelector('.cart__content__list__noti').style.display = "none"
  document.querySelectorAll('.remove--btn').forEach((x) => {
    x.addEventListener('click', ()=>{
      x.parentElement.parentElement.remove();
      cart__count--
      cart__price -= product[x.parentElement.parentElement.value].price
      document.querySelector('.cart__content__summary--totalprice').innerText = `${cart__price + cart__moreprice + 30000}VNĐ`
      if (cart__count == 0) {
        document.querySelector('.cart__content__list__noti').style.display = "flex"
        moreprice =0
        document.querySelector('.cart__content__summary--totalprice').innerText = `${cart__price + cart__moreprice}VNĐ`
      }
      document.querySelector('.cart__content__summary--total--price').innerText = `${cart__price + cart__moreprice}VNĐ`
      document.querySelector('#CART--slot').innerText = cart__count
    })
  })
  order();
})

//#ĐẶT MÓN

  
document.querySelector('.order--btn').addEventListener('click', ()=>{  
  if (cart__count == 0 ) {
    toast({
      title: "Thất bại!",
      message: `Bạn chưa có sản phẩm nào trong giỏ hàng !`,
      type: "error",
      duration: 3000
    })
  }
  else{
    cart__count=0
    cart__price=0
    cart__moreprice=0
    document.querySelectorAll('.cart__list__item').forEach((x) =>{
      x.remove();
    })
    toast({
      title: "Thành công!",
      message: `Bạn đã đặt hàng thành công !`,
      type: "success",
      duration: 3000
    });
    document.querySelector('.cart__content__list__noti').style.display = "flex"
    document.querySelector('.cart__content__summary--totalprice').innerText = `${cart__price + cart__moreprice}VNĐ`
    document.querySelector('.cart__content__summary--total--price').innerText = `${cart__price + cart__moreprice}VNĐ`
    document.querySelector('.cart__content__summary--ship--price').innerText = "0VNĐ"
    document.querySelector('#CART--slot').innerText = cart__count
  }
})


//#ĐÓNG OVERVIEW SẢN PHẨM KHI CLICK [X]
document.getElementById('close-overview-btn').addEventListener('click', ()=>{
document.getElementById('popup').style.display = "none"
})

//#THAY ĐỔI ĐỐI TƯỢNG TRONG POP-UP
function changeProduct(index){
document.getElementById('product__name').innerText = product[index].name;
document.getElementById('product__price').innerText = `${product[index].price}VNĐ`;
document.getElementById('product__description').innerText = product[index].description;
document.getElementById('product__pic').src = product[index].pic;
}
//# RADIO
// function checkRadio(e){
//   // document.querySelectorAll('.base-box-radio').forEach((check) =>{
//   //     check.removeAttribute('checked');
//   // })  
//   document.getElementById('base-1').removeAttribute('checked');
//   document.getElementById('base-2').removeAttribute('checked');
//   document.getElementById('base-3').removeAttribute('checked');
//   document.getElementById('base-4').removeAttribute('checked');
//   document.getElementById('base-5').removeAttribute('checked');
//   e.setAttribute('checked', 'checked');
// }
//


//#ĐIỀU HƯỚNG TRANG
function hideAllPage(box){
document.getElementById('HOME').style.display = "none";
document.getElementById('PROMOTION').style.display = "none";
document.getElementById('PROMOTIONCONTENT').style.display = "none";
document.getElementById('MENU').style.display = "none";
document.getElementById('LOGIN').style.display = "none";
document.getElementById('SIGNUP').style.display = "none";
document.getElementById('ACCOUNT').style.display = "none";
document.getElementById('LOCATION').style.display = "none";
document.getElementById('BRANDSTORY').style.display = "none";
document.getElementById('MEMBER').style.display = "none";
document.getElementById('RECRUITMENT').style.display = "none";
document.getElementById('CONTACT').style.display = "none";
document.getElementById('DEPOLICY').style.display = "none";
document.getElementById('PRPOLICY').style.display = "none";
document.getElementById('TAC').style.display = "none";
document.getElementById('CART').style.display = "none";
if (window.innerWidth < 900)  {
  document.querySelector('.navbar__menu').style = "display: none !important;"
  document.querySelector('.navbar__menu--phone').style = "display: flex !important;"
} 
// ẨN HẾT TẤT CẢ CÁC TRANG VÀ HIỂN THỊ TRANG ĐÃ CHỌN
box.style.display = "flex";
window.scrollTo(0, 0);
}
////////// LOAD LẦN ĐẦU
hideAllPage(document.getElementById('HOME'));
/////////  CLICK VÀO NAV THÌ CHUYỂN PAGE
document.getElementById('nav__HOME').addEventListener('click', ()=>{
hideAllPage(document.getElementById('HOME'))
});
document.getElementById('nav__MENU').addEventListener('click', ()=>{
hideAllPage(document.getElementById('MENU'))
});
document.getElementById('nav__PROMOTION').addEventListener('click', ()=>{
hideAllPage(document.getElementById('PROMOTION'))
});
document.getElementById('nav__promo').addEventListener('click', ()=>{
  hideAllPage(document.getElementById('PROMOTION'))
  });
document.querySelectorAll('.nav__LOGIN').forEach((e) =>{
e.addEventListener('click', ()=>{
  hideAllPage(document.getElementById('LOGIN'))
  });
});
document.getElementById('nav__SIGNUP').addEventListener('click', ()=>{
hideAllPage(document.getElementById('SIGNUP'))
});
document.getElementById('nav__ACCOUNT').addEventListener('click', ()=>{
hideAllPage(document.getElementById('ACCOUNT'))
});
document.getElementById('nav__LOCATION').addEventListener('click', ()=>{
hideAllPage(document.getElementById('LOCATION'))
});
document.getElementById('nav__BRANDSTORY').addEventListener('click', ()=>{
hideAllPage(document.getElementById('BRANDSTORY'))
});
document.getElementById('nav__MEMBER').addEventListener('click', ()=>{
hideAllPage(document.getElementById('MEMBER'))
});
document.getElementById('nav__RECRUITMENT').addEventListener('click', ()=>{
hideAllPage(document.getElementById('RECRUITMENT'))
});
document.getElementById('nav__CONTACT').addEventListener('click', ()=>{
hideAllPage(document.getElementById('CONTACT'))
});
document.getElementById('nav__DEPOLICY').addEventListener('click', ()=>{
hideAllPage(document.getElementById('DEPOLICY'))
});
document.getElementById('nav__PRPOLICY').addEventListener('click', ()=>{
hideAllPage(document.getElementById('PRPOLICY'))
});
document.getElementById('nav__TAC').addEventListener('click', ()=>{
hideAllPage(document.getElementById('TAC'))
});
document.getElementById('nav__CART').addEventListener('click', ()=>{
hideAllPage(document.getElementById('CART'))
});
document.querySelectorAll('.nav__PROMOTIONCONTENT-1').forEach((e)=>{
  e.addEventListener('click', ()=>{
  hideAllPage(document.getElementById('PROMOTIONCONTENT'))
  document.querySelector('.promotion-content-1').style.display = "flex"
  document.querySelector('.promotion-content-2').style.display = "none"
  document.querySelector('.promotion-content-3').style.display = "none"
  })
})
document.querySelectorAll('.nav__PROMOTIONCONTENT-2').forEach((e)=>{
  e.addEventListener('click', ()=>{
  hideAllPage(document.getElementById('PROMOTIONCONTENT'))
  document.querySelector('.promotion-content-2').style.display = "flex"
  document.querySelector('.promotion-content-1').style.display = "none"
  document.querySelector('.promotion-content-3').style.display = "none"
  })
})
document.querySelectorAll('.nav__PROMOTIONCONTENT-3').forEach((e)=>{
  e.addEventListener('click', ()=>{
    hideAllPage(document.getElementById('PROMOTIONCONTENT'))
    document.querySelector('.promotion-content-3').style.display = "flex"
    document.querySelector('.promotion-content-1').style.display = "none"
    document.querySelector('.promotion-content-2').style.display = "none"
  })
})


//#ĐIỀU HƯỚNG MENU
function hideAllMenu(list){
  document.querySelector('#pasta').style.display = "none"
  document.querySelector('#pizza').style.display = "none"
  document.querySelector('#salad').style.display = "none"
  document.querySelector('#drink').style.display = "none"
  document.querySelector('#fried').style.display = "none"
  document.querySelector('#nav__fried').classList.remove("active")
  document.querySelector('#nav__pasta').classList.remove("active")
  document.querySelector('#nav__pizza').classList.remove("active")
  document.querySelector('#nav__salad').classList.remove("active")
  document.querySelector('#nav__drink').classList.remove("active")
  document.querySelector('#nav__fried').classList.remove("active")
  
  //#Hiện menu được chọn
  list.style.display = "flex"
}
//# KHỞI TẠO
hideAllMenu(document.getElementById('pizza'))
document.querySelector('#nav__pizza').classList.add("active")
//
document.getElementById('nav__pasta').addEventListener('click', ()=>{
  hideAllMenu(document.getElementById('pasta'))
  document.querySelector('#nav__pasta').classList.add("active")
});
document.getElementById('nav__pizza').addEventListener('click', ()=>{
  hideAllMenu(document.getElementById('pizza'))
  document.querySelector('#nav__pizza').classList.add("active")
});
document.getElementById('nav__salad').addEventListener('click', ()=>{
  hideAllMenu(document.getElementById('salad'))
  document.querySelector('#nav__salad').classList.add("active")
});
document.getElementById('nav__drink').addEventListener('click', ()=>{
  hideAllMenu(document.getElementById('drink'))
  document.querySelector('#nav__drink').classList.add("active")
});
document.getElementById('nav__fried').addEventListener('click', ()=>{
  hideAllMenu(document.getElementById('fried'))
  document.querySelector('#nav__fried').classList.add("active")
});

//#THAO TÁC TRÊN TRANG TÀI KHOẢN
/////>KHỞI TẠO
changeActiveNav(document.getElementById('nav__overview'));
changeAccountContent(document.querySelector('.account__content__overview'));
/////>LINK SIDE-NAV VỚI CONTENT
function changeAccountContent(box){
    document.querySelector('.account__content__overview').style.display = "none";
    document.querySelector('.account__content__address').style.display = "none";
    document.querySelector('.account__content__search').style.display = "none";
    document.querySelector('.account__content__password').style.display = "none";
    document.querySelector('.account__content__voucher').style.display = "none";
    //> ẨN HẾT TẤT CẢ BOX KHÁC NGOẠI TRỪ NỘI DUNG ĐƯỢC CHỌN
    box.style.display = "flex";
}
function changeActiveNav(box){
    document.querySelector('#nav__overview').classList.remove("active");
    document.querySelector('#nav__address').classList.remove("active");
    document.querySelector('#nav__search').classList.remove("active");
    document.querySelector('#nav__password').classList.remove("active");
    document.querySelector('#nav__voucher').classList.remove("active");
    //>LOẠI BỎ ACTIVE HẾT TẤT CẢ BOX KHÁC NGOẠI TRỪ NỘI DUNG ĐƯỢC CHỌN
    box.classList.add("active");
}
document.getElementById('nav__overview').addEventListener('click', ()=>{
    changeActiveNav(document.getElementById('nav__overview'));
    changeAccountContent(document.querySelector('.account__content__overview'));
})
document.getElementById('nav__address').addEventListener('click', ()=>{
    changeActiveNav(document.getElementById('nav__address'));
    changeAccountContent(document.querySelector('.account__content__address'));
})
document.getElementById('nav__search').addEventListener('click', ()=>{
    changeActiveNav(document.getElementById('nav__search'));
    changeAccountContent(document.querySelector('.account__content__search'));
})
document.getElementById('nav__password').addEventListener('click', ()=>{
    changeActiveNav(document.getElementById('nav__password'));
    changeAccountContent(document.querySelector('.account__content__password'));
})
document.getElementById('nav__voucher').addEventListener('click', ()=>{
    changeActiveNav(document.getElementById('nav__voucher'));
    changeAccountContent(document.querySelector('.account__content__voucher'));
})


// Toast function
function toast(
  { title = "", 
    message = "", 
    type = "info", 
    duration = 2000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Tự động xóa msg
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Xóa thẻ khi click
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle"
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}



//#RESPONDSIVE NAVBAR
let show = 0
document.querySelector('.navbar__menu--phone').addEventListener('click', ()=>{
  if (show == 0)
  {
    document.querySelector('.navbar__menu').style = "display: flex !important;"
    show = 1
  }
  else {
    document.querySelector('.navbar__menu').style = "display: none !important;"
    show = 0
  }
})