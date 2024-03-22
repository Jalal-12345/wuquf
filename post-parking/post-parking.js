function GetUrl() {
  const urlprams = new URLSearchParams(window.location.search);
  const NamePark = urlprams.get("numPark");
  return NamePark;
}
document.getElementById("park").value = GetUrl()
