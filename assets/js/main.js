//#SLICK SLIDER
$('.sale__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
$('.list').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  });
$('.feedback__slider').slick({
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
