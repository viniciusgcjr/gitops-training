
function proximaImagem() {
            removeOverlay();
			x = (x === images.length - 1) ? 0 : x + 1;	
			addOverlay();
			data();
			console.log(images[x]);		
          }

function imagemAnterior() {
			removeOverlay();
			x = (x <= 0) ? images.length - 1 : x - 1;
			addOverlay();
			data();
          }

function startTimer() {
              temporizador = setInterval(proximaImagem, 1000);
          }

function pausar() {
              clearTimeout(temporizador);
          }		  

function play() {
              startTimer();
          }	
		  
var imagens = [];


//var imagens ={
//      opacity:0.6
//  };
var map;

var imageBounds = {
    north: -5.92565,
    south: -10.462,
    east: -33.1681,
    west: -37.7434
  };

  var imageBoundsPetrolina = {
    north: -7.144,
    south: -11.543,
    east: -38.347,
    west: -42.841
  };

  var imageBoundsNatal = {
    north: -3.659,
    south: -8.135,
    east: -33.021,
    west: -37.420
  };

  var imageBoundsMaceio = {
    north: -7.309,
    south: -11.785,
    east: -33.530,
    west: -38.017
  };




function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: -7.740, lng: -35.18}	
  });

	imagens[0] = new google.maps.GroundOverlay(images[0],imageBounds);

	imagens[1] = new google.maps.GroundOverlay(images[1],imageBounds);
	  
	imagens[2] = new google.maps.GroundOverlay(images[2],imageBounds);

	imagens[3] = new google.maps.GroundOverlay(images[3],imageBounds);

	imagens[4] = new google.maps.GroundOverlay(images[4],imageBounds);
	  
	imagens[5] = new google.maps.GroundOverlay(images[5],imageBounds);

  images_natal[0] = new google.maps.GroundOverlay(images_natal[0],imageBoundsNatal);

  images_natal[1] = new google.maps.GroundOverlay(images_natal[1],imageBoundsNatal);
    
  images_natal[2] = new google.maps.GroundOverlay(images_natal[2],imageBoundsNatal);

  images_natal[3] = new google.maps.GroundOverlay(images_natal[3],imageBoundsNatal);

  images_natal[4] = new google.maps.GroundOverlay(images_natal[4],imageBoundsNatal);
    
  images_natal[5] = new google.maps.GroundOverlay(images_natal[5],imageBoundsNatal);

  images_petrolina[0] = new google.maps.GroundOverlay(images_petrolina[0],imageBoundsPetrolina);

  images_petrolina[1] = new google.maps.GroundOverlay(images_petrolina[1],imageBoundsPetrolina);
    
  images_petrolina[2] = new google.maps.GroundOverlay(images_petrolina[2],imageBoundsPetrolina);

  images_petrolina[3] = new google.maps.GroundOverlay(images_petrolina[3],imageBoundsPetrolina);

  images_petrolina[4] = new google.maps.GroundOverlay(images_petrolina[4],imageBoundsPetrolina);
    
  images_petrolina[5] = new google.maps.GroundOverlay(images_petrolina[5],imageBoundsPetrolina);

  images_maceio[0] = new google.maps.GroundOverlay(images_maceio[0],imageBoundsMaceio);

  images_maceio[1] = new google.maps.GroundOverlay(images_maceio[1],imageBoundsMaceio);
    
  images_maceio[2] = new google.maps.GroundOverlay(images_maceio[2],imageBoundsMaceio);

  images_maceio[3] = new google.maps.GroundOverlay(images_maceio[3],imageBoundsMaceio);

  images_maceio[4] = new google.maps.GroundOverlay(images_maceio[4],imageBoundsMaceio);
    
  images_maceio[5] = new google.maps.GroundOverlay(images_maceio[5],imageBoundsMaceio);



//var ctaLayer = new google.maps.KmlLayer({
//          url: '',
//          map: map
//        });	  
  
  addOverlay();
  startTimer();
  
const citymap = {
  cha_grande: {
    center: { lat: -8.19 , lng: -35.464 },
    population: 1,
  },
  petrolina: {
    center: { lat: -9.370 , lng: -40.57  },
    population: 2,
  },
  maceio: {
    center: { lat: -5.908, lng: -35.251 },
    population: 3,
  },
  natal: {
    center: { lat: -9.555, lng: -35.251 },
    population: 4,
  },
};

for (const city in citymap) {
  const cityCircle = new google.maps.Circle({
            strokeColor: '#000000',
            strokeOpacity: 0.4,
            strokeWeight: 1,
            fillColor: '#000000',
            fillOpacity: 0.0,
            map: map,
            //center: new google.maps.LatLng(-8.19, -35.464),
            center: citymap[city].center,
            radius: 250000.00
          });
}
}

function addOverlay() { 
  imagens[x].setMap(map);
  images_natal[x].setMap(map);
  images_maceio[x].setMap(map);
  images_petrolina[x].setMap(map);
}

function removeOverlay() {
  imagens[x].setMap(null);
  images_natal[x].setMap(null);
  images_maceio[x].setMap(null);
  images_petrolina[x].setMap(null);
}
