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