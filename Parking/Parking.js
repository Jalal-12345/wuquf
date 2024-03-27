const TitlePark = document.querySelector(".title-park")

// get URl name Park
function GetUrl() {
  const urlprams = new URLSearchParams(window.location.search);
  const NamePark = urlprams.get("NamePark");
  return NamePark;
}

TitlePark.innerHTML = `
 ${GetUrl()}
`

// عند الضغط الزر يوديه تعبئة معلومات
document.querySelectorAll(" td > button").forEach(item=>{
   item.addEventListener("click",(e)=>{
     postLocation(e.target.innerText);
   })
})



// post url numPark
function postLocation(numPark){
  location = `../post-parking/post-parking.html?numPark=${numPark}`
}



