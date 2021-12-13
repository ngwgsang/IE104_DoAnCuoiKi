import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getDatabase, set, get , ref , child , update, remove  } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDBFDnIU7btsKCP6PG-T6X2EekhreOYMSw",
    authDomain: "oishii-pizza.firebaseapp.com",
    databaseURL: "https://oishii-pizza-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "oishii-pizza",
    storageBucket: "oishii-pizza.appspot.com",
    messagingSenderId: "70572006035",
    appId: "1:70572006035:web:88dc7f487acab764dfcb66"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
var auth = getAuth(app);
const dbref = ref(db);
var cur;
// const UID;
//#ĐĂNG NHẬP THÀNH CÔNG {XUẤT HIỆN TAB ACCOUNT} {ẨN TAB ĐĂNG NHẬP}
document.getElementById('LOGIN-BTN').addEventListener('click', ()=>{
    document.getElementById('nav__LOGIN').style.display = "none";
    document.getElementById('nav__ACCOUNT').style.display = "flex";
    document.getElementById('LOGIN').style.display = "none";
    document.getElementById('HOME').style.display = "flex";

    const email = document.getElementById('login__email').value;
    const password = document.getElementById('login__password').value;
    let index;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        document.getElementById('nav__ACCOUNT').innerText = email;
        window.alert(`ĐĂNG NHẬP THÀNH CÔNG HEHE ${userCredential.user.uid}`);
        fetchData(auth.currentUser.uid);
        // XÓA GIÁ TRỊ EMAIL VÀ PASSWORD
        email = "";
        password = "";
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..   
    });
    
})
//#ĐĂNG KÝ
document.getElementById('SIGNUP-BTN').addEventListener('click', ()=>{
    const email = document.getElementById('signup__email').value;
    const password = document.getElementById('signup__password').value;
    const name = document.getElementById('signup__name').value;
    const phone = document.getElementById('signup__phone').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // TẠO BRANCH Ở DATABASE
        set(ref(db, `${user.uid}/_overview`),{
            _email: email,
            _name: name,
            _phone: phone,
        })
        .then(()=>{
            console.log("Tạo branch thành công");
        })
        .catch((error)=>{
            console.log("Tạo branch không thành công, Lỗi: " + error);
        });
      // XÓA GIÁ TRỊ EMAIL VÀ PASSWORD
        email = "";
        password = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})
//#ĐĂNG XUẤT
document.getElementById('LOGOUT-BTN').addEventListener('click', ()=>{
    document.getElementById('nav__LOGIN').style.display = "flex";
    document.getElementById('LOGIN').style.display = "flex";
    document.getElementById('ACCOUNT').style.display = "none";
    document.getElementById('nav__ACCOUNT').style.display = "none";
    document.querySelector('.account-config').style.display = "none";
    clearData();
    signOut(auth).then(() => {
        // Sign-out successful.
        window.alert("ĐĂNG XUẤT THÀNH CÔNG");
        // location.reload();
      }).catch((error) => {
        // An error happened.
        // window.alert(error);
    });
})
  
document.getElementById('nav__ACCOUNT').addEventListener('pointerenter', ()=>{
    document.querySelector('.account-config').style.display = "flex"
})

//# NẠP TẤT CẢ DATA THEO UID
function fetchData(uid){
  get(child(dbref, `${uid}/_overview`))
  .then((snapshot)=>{
        document.getElementById('account--name').innerText  = snapshot.val()._name;
        document.getElementById('overview--name').innerText  = snapshot.val()._name;
        document.getElementById('overview--email').innerText = snapshot.val()._email;
        document.getElementById('overview--phone').innerText = snapshot.val()._phone;
  })
  .catch((error)=>{
      alert("LỖI" + error);
  });
//## FETCH DATA BRACNH HISTORY
  get(child(dbref, `${uid}/_history`))
  .then((snapshot)=>{
      var history = [];
      snapshot.forEach(childSnapshot => {
          history.push(childSnapshot.val());
      });
      history.forEach((e)=>{
        document.getElementById('history--list').innerHTML += 
        `
        <li>
        <span>${e._bill_id}</span>
        <span>${e._bill_name}</span>
        <span>${e._bill_time}</span>
        <span>${e._bill_price}</span>
        <span>${e._bill_status}</span>
        </li>
        `         
      })
  })
  .catch(()=>{
    alert("LỖI" + error);
  });
//## FETCH DATA BRACNH ADDRESS
  get(child(dbref, `${uid}/_address`))
  .then((snapshot)=>{
      var address = [];
      snapshot.forEach(childSnapshot => {
          address.push(childSnapshot.val());
      });
      address.forEach((e)=>{
        if (e._default == 1){
          document.getElementById('default_address--name').innerText = e._name;
          document.getElementById('default_address--address').innerText = e._home_address;
          document.getElementById('default_address--phone').innerText = e._phone;
        }
        else{
          document.getElementById('address--list').innerHTML += 
          `
          <li class="address">
            <ul>
              <li>Họ tên: <span>${e._name}</span></li>
              <li>Địa chỉ: <span></span>${e._home_address}</li>
              <li>Số điện thoại: <span>${e._phone}</span></li>
            </ul>
          </li>
          `         
        }
      })
  })
//# FETCH DATA BRACNH VOUCHER
  get(child(dbref, `${uid}/_voucher`))
  .then((snapshot)=>{
      var voucher = [];
      snapshot.forEach(childSnapshot => {
          voucher.push(childSnapshot.val());
      });
      document.getElementById('voucher--list').innerHTML = ""
      voucher.forEach((e)=>{
          let status;
          if (e._voucher_status == 1) status = "Chưa sử dụng"
          if (e._voucher_status == 2) status = "Đã sử dụng"
          if (e._voucher_status == 3) status = "Đã hết hạn"
          document.getElementById('voucher--list').innerHTML +=
          `
          <li>
              <span>${e._voucher_id}</span>
              <span>${e._voucher_description}</span>
              <span>${e._voucher_exp}</span>
              <span>${status}</span>
          </li>
          `         
      })
  })
}

function clearData(){
  document.getElementById('default_address--name').innerText = "";
  document.getElementById('default_address--address').innerText = "";
  document.getElementById('default_address--phone').innerText = "";
  document.getElementById('address--list').innerText = "";
  document.getElementById('voucher--list').innerText = "";
  document.getElementById('history--list').innerText = "";
  document.getElementById('account--name').innerText  = "";
  document.getElementById('overview--name').innerText  = "";
  document.getElementById('overview--email').innerText = "";
  document.getElementById('overview--phone').innerText = "";
  document.getElementById('nav__ACCOUNT').innerText = "";
}



