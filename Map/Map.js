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