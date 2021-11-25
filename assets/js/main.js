//#SLICK SLIDER
$('.home-promotion__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
});
$('.home-menu__list').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
});
$('.home-feedback__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  dots: true,
  arrows:  false
});


//#MỞ OVERVIEW SẢN PHẨM KHI CLICK
document.querySelectorAll('.product').forEach((product) =>{
product.addEventListener('click',  () => {
  changeProduct(product.value)
  document.getElementById('popup').style.display = "flex";
  if (product.value < 7){
    document.querySelector('.product-overview__container__right--size').style.display = "block"
    document.querySelector('.product-overview__container__right--base').style.display = "block"
    document.querySelector('.product-overview__container__right--more').style.display = "block"
  }
  else{
    document.querySelector('.product-overview__container__right--size').style.display = "none"
    document.querySelector('.product-overview__container__right--base').style.display = "none"
    document.querySelector('.product-overview__container__right--more').style.display = "none"
  }
})
})

//#ĐÓNG OVERVIEW SẢN PHẨM KHI CLICK [X]
document.getElementById('close-overview-btn').addEventListener('click', ()=>{
document.getElementById('popup').style.display = "none"
})

//#THAY ĐỔI ĐỐI TƯỢNG TRONG POP-UP
function changeProduct(index){
document.getElementById('product__name').innerText = product[index].name;
document.getElementById('product__price').innerText = product[index].price;
document.getElementById('product__description').innerText = product[index].description;
document.getElementById('product__pic').src = product[index].pic;
}
//#CHỌN SIZE + THÊM NHÂN
document.querySelectorAll('.more__item').forEach((e) =>{
  e.addEventListener('click', () =>{
    e.classList.toggle('active');
  })
})
document.querySelectorAll('.size__item').forEach((e) =>{
  e.addEventListener('click', () =>{
    document.querySelectorAll('.size__item').forEach((child)=>{
      child.classList.remove('active');
    })
    e.classList.add('active');
  })
})
//# RADIO

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