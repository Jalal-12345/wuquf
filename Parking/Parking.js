const TitlePark = document.querySelector(".title-park")



function GetUrl() {
  const urlprams = new URLSearchParams(window.location.search);
  const NamePark = urlprams.get("NamePark");
  return NamePark;
}

TitlePark.innerHTML = `
 ${GetUrl()}
`
document.querySelectorAll(" td > button").forEach(item=>{
   item.addEventListener("click",(e)=>{
    postLocation(e.target.innerText)
   })
})


function postLocation(numPark){
  location = `../post-parking/post-parking.html?numPark=${numPark}`
}



