// get Google maps
let map;

async function initMap() {
  const center = { lat : 24.85653136189153, lng : 46.72408194516214 }
  const zoom = 14
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("Maps"), {
    center,
    zoom,
    disableDefaultUI: true,
    mapTypeId: "satellite"
  });

  new google.maps.Marker({
    position: {lat : 24.85347934171513, lng : 46.72581740734896},
    map,
    label: "P",
  })

  new google.maps.Marker({
    position: {lat:24.853907689370406, lng:46.71002456126437},
    map,
    label: "P"
  })



  new google.maps.Marker({
    position: {lat:24.723285822712835, lng:46.61441964763554},
    map,
    label: "P"
  })

  new google.maps.Marker({
    position: {lat:24.850061223568407, lng:46.71421026134136},
    map,
    label: "P"
  })
  
}

window.initMap = initMap;


// post url Name park
function ClickedPost(NamePark){
  location = `../Parking/Parking.html?NamePark=${NamePark}`
  console.log(NamePark);
}

// Save

let saved = document.querySelector(".saved");

saved.addEventListener("click", ()=>{

  if(saved.style.background = "#fbfbfb"){
    saved.style.background = "#8779a4";
    document.querySelector(".saved > i").style.color = "#fff";
    document.querySelector(".resultMaps ul").innerHTML = `
    <li><a href="#" onclick="ClickedPost(this.dataset.college)" data-college="أكاديمية طويق"><strong>أكاديمية  طويق</strong> <img src="../Image/Parking.png" alt=""></a></li>
    `
    console.log("HI");
  }else if(saved.style.background == "#8779a4"){
    console.log("hello");
  }
    
})