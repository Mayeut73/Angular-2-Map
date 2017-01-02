import {Component, OnInit, OnChanges} from '@angular/core';

declare var google: any;
declare var geoXML3: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {


    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: { lat: 45.22, lng: 5.66}
    });


    var myKmlOptions = {
      preserveViewport: true,
      suppressInfoWindows: true
    }


    var myParser = new geoXML3.parser({map: map});
    myParser.parse('./data/troncons.kml');

    directionsDisplay.setMap(map);

    //var ctaLayer = new google.maps.KmlLayer({
    //  url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
    //  map: map
    //});
    //calculateAndDisplayRoute(directionsService, directionsDisplay);

    //findAndDisplayRoute(directionsService, directionsDisplay);
    function findAndDisplayRoute(directionsService, directionsDisplay) {

      var waypts = [];
      var checkboxArray: any[] = [
        'fontaine', 'grenoble', 'eybens'
      ];
      for (var i = 0; i < checkboxArray.length; i++) {

        waypts.push({
          location: checkboxArray[i],
          stopover: true
        });

      }

      directionsService.route({
        origin: {lat: 45.214892, lng: 5.652484},
        destination: {lat: 45.207862, lng: 5.662556},
        //waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {

      var waypts = [];
      var checkboxArray: any[] = [
        'winnipeg', 'regina', 'calgary'
      ];
      for (var i = 0; i < checkboxArray.length; i++) {

        waypts.push({
          location: checkboxArray[i],
          stopover: true
        });

      }

      directionsService.route({
        origin: {lat: 41.85, lng: -87.65},
        destination: {lat: 49.3, lng: -123.12},
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }

  }
}
