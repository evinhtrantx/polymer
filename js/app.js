function initMapLocal(areaId) {
    _map = new google.maps.Map(document.getElementById(areaId), {
      center: {lat: 21.028665, lng: 105.852129},
      zoom: 17,
      styles:mapStyle
    });
}
