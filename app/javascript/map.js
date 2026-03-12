let map
let geocoder
let marker

function initMap() {

  geocoder = new google.maps.Geocoder()

  map = new google.maps.Map(
    document.getElementById("map"),
    {
      center: { lat: 35.9356087, lng: 139.5526597 },
      zoom: 12
    }
  )

  marker = new google.maps.Marker({
    position: { lat: 35.9356087, lng: 139.5526597 },
    map: map
  })

  map.addListener("click", function(event){

  const location = event.latLng

  map.setCenter(location)

  if (marker) {
    marker.setMap(null)
  }

  marker = new google.maps.Marker({
    map: map,
    position: location
  })

  geocoder.geocode(
    { location: location },
    function(results, status){

      if (status === "OK"){

        if (results[0]){

          document.getElementById("display").textContent =
            "住所：" + results[0].formatted_address

        }

      }

    }
  )

})


}

function codeAddress(){

  const inputAddress = document.getElementById("address").value
  const display = document.getElementById("display")

  geocoder.geocode(
    { address: inputAddress },
    function(results, status){

      if (status === "OK"){

        map.setCenter(results[0].geometry.location)

        if (marker) {
          marker.setMap(null)
        }

        marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        })

        display.textContent =
          "検索結果：" + results[0].formatted_address

      } else {

        alert("該当なし：" + status)

      }

    }
  )
}

window.addEventListener("load", function() {

  const input = document.getElementById("address")

  if (input) {
    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        codeAddress()
      }
    })
  }

})

function getCurrentLocation(){

  if (navigator.geolocation){

    navigator.geolocation.getCurrentPosition(function(position){

      const lat = position.coords.latitude
      const lng = position.coords.longitude

      const location = { lat: lat, lng: lng }

      map.setCenter(location)

      if (marker) {
        marker.setMap(null)
      }

      marker = new google.maps.Marker({
        map: map,
        position: location
      })

    })

  } else {

    alert("このブラウザでは現在地取得ができません")

  }

}

function printPage(){
  window.print()
}

window.initMap = initMap
window.codeAddress = codeAddress
window.getCurrentLocation = getCurrentLocation
window.printPage = printPage
