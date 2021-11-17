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
    console.log(product.value)
    document.getElementById('popup').style.display = "flex";
  })
})

//#ĐÓNG OVERVIEW SẢN PHẨM KHI CLICK [X]
document.getElementById('close-overview-btn').addEventListener('click', ()=>{
  document.getElementById('popup').style.display = "none"
})

