// abbreviation Header

document.querySelectorAll(".primary-Header").forEach(item=>{ 
  item.innerHTML = `
  <!-- nav bar -->  
  <header>
    <nav class="navbar">
    <div style="display: flex; flex-direction: row-reverse;">
      <a href="../Home/Tuwaiq1.html" class="titleWebsite"><img src="../Image/Logo.png" alt=""></a>
        <ul class="nav-links">
          <li><a href="../post-parking/post-parking.html">موقف</a></li>
          <li style="display: flex; flex-direction: column;  align-items: center;" onmousemove="DrowDawnMove();" onmouseout="DrowDawnOut()"><a href="#" class="Maps">الخريطة</a> 
            <div class="DrowDawnMaps">
              <ul>
               <li><a href="../Map/Map.html">جامعة الأميرة نورة</a> <div class="img"><img style="width: 37px; height: 30px; margin-left: 10px;" src="../Image/الأميرة نورة.png"></div></li>
              </ul>
         </div>
          </li>
          <li><a href="../AboutUs/AboutUS.html">من نحن</a></li>
          <li><a href="../Home/Tuwaiq1.html">الرئيسية</a></li>
        </ul>
    </div>
    <div class="right-Header">
      <a href="../Login and register/Login.html" class="active">تسجيل الدخول</a>
      </div>
   
      <i class="fas fa-bars menu-icon" id="menu" onclick="MENU()"></i>
    </nav>
   </header>
   <!-- // nav bar // -->
   
   
   <!-- Nvbar Mobile -->
   
   <header class="MENU-Mobile">
    <nav class="navbar-Mobile">
      <h1><a href="#">وقوف</a><img src="../Image/Logo.png" alt=""></h1>
      <ul class="nav-links-Mobile">
        <li><a href="../Home/Tuwaiq1.html">الرئيسية</a></li>
        <li><a href="../AboutUs/AboutUS.html">من نحن</a></li>
        <li ><a href="../Map/Map.html" class="Maps">الخريطة</a> 
        </li>
        <li><a href="#">موقف</a></li>
      </ul>
   
      <i class="fa-solid fa-x" onclick="Close()" id="close"></i>
    </nav>
   </header>
      <!-- // Nvbar Mobile // -->
`
})


const Menue = document.querySelector(".MENU-Mobile");
// Menue

function MENU (){
  Menue.classList.add("open")
}

function Close (){
  Menue.classList.remove("open");
}

const DrowDawnMaps = document.querySelector(".DrowDawnMaps");


// Drow Dawn

function DrowDawnMove(){
  DrowDawnMaps.style.display = "block"
}

function DrowDawnOut(){
  DrowDawnMaps.style.display = "none"
}






const namePerson = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");
const radio = document.querySelectorAll(".radio");
const NationalityRegister = document.getElementById("NationalityRegister")
const CityLogin = document.getElementById("CityLogin");
let Checked;
radio.forEach(item=>{
  item.addEventListener("click", ()=>{
    register(item.innerText)
    Checked = item.innerText;
  })
})


// register
function   register() {
  const info = {
    name:namePerson.value,
    number:number.value,
    email: email.value,
    password: password.value,
    NationalityRegister: NationalityRegister.value,
    City:CityLogin.value,
    Checked,
}

const info_json = JSON.stringify(info);
 localStorage.setItem("info-person" , info_json)
 localStorage.setItem("login", "on");
}


const EmailLogin = document.getElementById("Email");
const PasswordLogin = document.getElementById("Password");


// Login

function Login(){
   const user = JSON.parse(localStorage.getItem("info-person"))

   if(EmailLogin.value == user.email && PasswordLogin.value == user.password){
    location = `../Home/Tuwaiq1.html`
    alert("تم تسجيل الدخول");

   }
   else{
    alert("تأكد من إسم المستخدم أو كلمة المرور");
   }
}



// Show profile

function ShowProfile(){
  if(localStorage.getItem("login")){
    document.querySelector(".right-Header").innerHTML = `
    <a href="../Profile/Profile.html"><img src="../Image/Profile.png" alt=""></a>
    `
     document.querySelector(".text-Home").innerHTML = `
     <h1>اكتشاف مواقف السيارات القريبة والمتاحة</h1>
     <a href="../Map/Map.html">إبدأ الآن</a>
    `
  }else{
    document.querySelector("..right-Header").innerHTML = `
    <a href="../Login and register/Login.html" class="active">تسجيل الدخول</a>
    `}

}

ShowProfile();








