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
const auth = getAuth(app);
const dbref = ref(db);
//#ĐĂNG NHẬP THÀNH CÔNG {XUẤT HIỆN TAB ACCOUNT} {ẨN TAB ĐĂNG NHẬP}
document.getElementById('LOGIN-BTN').addEventListener('click', ()=>{
    document.getElementById('nav__LOGIN').style.display = "none";
    document.getElementById('nav__ACCOUNT').style.display = "flex";

    const email = document.getElementById('login__email').value;
    const password = document.getElementById('login__password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        document.getElementById('nav__ACCOUNT').innerText = email;
        window.alert("ĐĂNG NHẬP THÀNH CÔNG");
        // XÓA GIÁ TRỊ EMAIL VÀ PASSWORD
        email = "";
        password = "";
        // loadAccountInfo(user.uid);
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
    document.getElementById('nav__ACCOUNT').style.display = "none";
    document.getElementById('nav__ACCOUNT').innerText = "";
    document.querySelector('.account-config').style.display = "none";

    signOut(auth).then(() => {
        // Sign-out successful.
        window.alert("ĐĂNG XUẤT THÀNH CÔNG");
      }).catch((error) => {
        // An error happened.
    });
})
  
document.getElementById('nav__ACCOUNT').addEventListener('pointerenter', ()=>{
    document.querySelector('.account-config').style.display = "flex"
})

// function loadAccountInfo(UID){
//     get (child(dbref, `/${UID}/_overview`))
//     .then((snapshot)=>{
//         var account = [];
//         snapshot.forEach(childSnapshot => {
//             account.push(childSnapshot.val());
//             console.log("OK");
//         });
        
//     })
// }


