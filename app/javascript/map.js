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
          "検索結果：" + results[0].geometry.location

      } else {

        alert("該当なし：" + status)

      }

    }
  )
}


window.initMap = initMap
window.codeAddress = codeAddress

