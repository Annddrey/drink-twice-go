const map = L.map('map-wrapper').setView([59.968322, 30.317359], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const marker = L.icon({
  iconUrl: '../images/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50]
});

L.marker([59.968322, 30.317359], {
  draggable: true,
  icon: marker,
}).addTo(map);


