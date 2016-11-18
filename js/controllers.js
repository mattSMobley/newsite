angular.module("app")
  .controller('MainController', [MainController]);

  function MainController (){
    var vm = this;

    vm.valencia = [{
      1: {
        name: "Placa de L'Ajuntamiento",
        location: [39.4707127,-0.3785823]
      },
      2: {
        name: "La Malvarrosa Beach",
        location: [39.4707127,-0.3785823]
      },
      3: {
        name: "Mercado Central",
        location: [39.4735895,-0.3811613]
      },
      4: {
        name: "Architecture in Valencia",
        location: [39.4763957,-0.3746121]
      },
      5: {
        name: "El Leon",
        location: [39.4735716,-0.376738]
      },
      6: {
        name: "Scenery in Valencia",
        location: [39.4549801,-0.3535858]
      },
      7: {
        name: "Turia River Gardens",
        location: [39.468942,-0.3629215]
      },
      8: {
        name: "Valencian Oranges",
        location: [39.4694739,-0.3632742]
      },
      9: {
        name: "Torres de Serranos",
        location: [39.4791922,-0.378187]
      },
      10: {
        name: "Views from Torres de Serranos",
        location: [39.4789663,-0.3760672]
      },
      11: {
        name: "City of Arts and Sciences - Umbracle",
        location: [39.4559059,-0.3542361]
      },
      12: {
        name: "City of Arts and Sciences - Hemisfèric",
        location: [39.456234,-0.3530583]
      },
      13: {
        name: "City of Arts and Sciences - Oceanogràfic",
        location: [39.4524697,-0.3482139]
      }
    }];

    vm.palma = [{
      1: {
        name: "La Seu",
        location: [39.5663203,2.6468408]
      },
      2: {
        name: "La Seu 2",
        location: [39.565796,2.6479555]
      },
      3: {
        name: "Beer Palma",
        location: [39.5664738,2.6462015]
      },
      4: {
        name: "Parc de la Mar",
        location: [39.5652199,2.651545]
      },
      5: {
        name: "Palacio Real de la Almudaina",
        location: [39.56739,2.6464228]
      },
      6: {
        name: "S'Hort del Rei",
        location: [39.56794,2.6463794]
      },
      7: {
        name: "Port de Palma",
        location: [39.5610967,2.6270887]
      },
      8: {
        name: "Castell de Belver",
        location: [39.5610967,2.6270887]
      },
      9: {
        name: "Port de Soller",
        location: [39.7932192,2.6899099]
      },
      10: {
        name: "Port de Soller 2",
        location: [39.7969175,2.6963108]
      }
    }];
    vm.catalonia = [{
      1: {
        name: "Montserrat",
        location: [41.5969879,1.8443225]
      },
      2: {
        name: "Pedraforca",
        location: [42.2281602,1.7633045]
      },
      3: {
        name: "Incredible Views Near Cardona",
        location: [41.9142732,1.6843866]
      },
      4: {
        name: "The Pyrenees",
        location: [42.1344032,1.8654166]
      },
      5: {
        name: "The Pyrenees",
        location: [42.2965258,1.6644908]
      },
      6: {
        name: "Salo - Pedrafita",
        location: [41.8442676,1.6396371]
      },
      7: {
        name: "Salo - Pedrafita 2",
        location: [41.8459529,1.6552087]
      },
      8: {
        name: "Valls de Torroella - Ca L'Arenys",
        location: [41.846255,1.720712]
      },
      9: {
        name: "Solsona - Restaurant",
        location: [42.0023967,1.5020398]
      },
      10: {
        name: "Solsona - Catolonian Flags",
        location: [41.9943826,1.5181067]
        // This one is only approximate
      }
    }];
    vm.malaga = [{
      1: {
        name: "Plaza de Toros",
        location: [36.7228956,-4.4114334]
      },
      2: {
        name: "Fuente de Las Tres Gracias",
        location: [36.7206332,-4.4127828]
      },
      3: {
        name: "Castillo De Gibralfaro",
        location: [36.7239361,-4.4107976]
      },
      4: {
        name: "Castillo De Gibralfaro - 2",
        location: [36.7237402,-4.4127079]
      },
      5: {
        name: "",
        location: []
      },
      6: {
        name: "",
        location: []
      },
      7: {
        name: "",
        location: []
      },
      8: {
        name: "",
        location: []
      },
      9: {
        name: "",
        location: []
      },
      10: {
        name: "",
        location: []
      },
      11: {
        name: "",
        location: []
      }
    }];
  }
