import {itl} from './itl.js'
import {bel} from './bel.js'
import {cos} from './cos.js'
import {cro} from './cro.js'
import {thai} from './thai.js'

var decks = [{
    'id': 'belize',
    'location': 'Belize',
    'images': 'belize.png',
    'imagelink': '/travel-photos/#belize',
    'title': 'lamanai mayan ruins',
    'area': 'Central America',
    'text': "Picture of Belize",
    'it': bel,//map data
    'lat': '17.1833',//weather data
    'lon': '-87.5000'
  },
  {
    'location': 'Belize',
    'images': 'belize2.png',
    'text': "Picture of Belize2",
    'title': 'cave tubing'
  },

  {
    'id': 'costarica',
    'location': 'Costa Rica',
    'images': 'costarica.png',
    'imagelink': '/travel-photos/#costarica',
    'area': 'Central America',
    'title': 'manuel antonio national park',
    'text': "Costa Rica - Manuel Antonio National Park",
    'it': cos,
    'lat': '9.9667',
    'lon': '-84.8333'
  },

  {
    'id': 'croatia',
    'location': 'Croatia',
    'images': 'croatia.png',
    'area': 'Europe',
    'title': 'hvar boat dock',
    'imagelink': '/travel-photos/#croatia',
    'text': "Picture of Croatia",
    'it': cro,
    'lat': '43.5167',
    'lon': '16.4333'
  },

  {
     'id': 'italy',
     'location': 'Italy',
     'images': 'italy.png',
     'area': 'Europe',
     'title': 'trevi fountain',
     'imagelink': '/travel-photos/#italy',
     'text': "Picture of Italy",
     'it': itl,
     'lat': '41.9000',
     'lon': '12.4833'
   },

  {
    'id': 'thailand',
    'location': 'Thailand',
    'images': 'thaibeach.png',
    'area': 'Asia',
    'title': 'phi phi island',
    'imagelink': '/travel-photos/#thailand',
    'text': "Picture of beach in Thailand",
    'it': thai,
    'lat': '13.7000',
    'lon': '100.5667'
  },
  {
    'location': 'Thailand',
    'images': 'thai.png',
    'text': "Picture of elephant in Thailand",
    'title': 'chiang mai elephant sanctuary',
  }
];


export {
  decks
}

var accordionObject = [{
    title: "Booking Conditions",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni mollitia modi quis, sequi minima voluptatum aliquid est veritatis, culpa voluptas dolores ea, itaque dolorem fugiat eius odio inventore quibusdam. Voluptatibus reiciendis magnam autem nam, quisquam eum cumque possimus. Perspiciatis, deleniti, illum alias cupiditate est, nihil atque, explicabo esse amet laudantium tempore? Placeat, optio tenetur. Facere laborum velit omnis ea veniam expedita, suscipit architecto consectetur itaque. Ipsum possimus, animi tenetur consequatur odio quasi illum deleniti amet itaque. Impedit ipsam cumque et, fuga. Sed distinctio laudantium, delectus aperiam obcaecati ex tenetur eius."
  },
  {
    title: "Travel Insurance",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iste distinctio dolores ab voluptatem, vel expedita nemo ducimus, porro dolor, molestiae? Enim quaerat ullam, labore quas perspiciatis veniam magnam suscipit quod optio eveniet corrupti in dolorem architecto fuga magni, laborum, atque! Tenetur mollitia, perferendis provident odit dolores, laboriosam necessitatibus veritatis neque eum magnam dicta corporis, nobis a. Tempora, delectus minus!"
  },
  {
    title: "FAQ",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam assumenda ullam corrupti provident, dolorum pariatur libero illum. Alias nam voluptate, iste tempore, distinctio possimus quo quibusdam velit mollitia rerum deleniti, nostrum repellendus reiciendis ducimus voluptatum culpa asperiores voluptas numquam totam officia doloribus fugiat itaque illum corrupti. Laudantium, reiciendis? Expedita itaque veritatis porro accusantium deserunt exercitationem, magnam cupiditate nemo sint tempora."
  }
]

export {
  accordionObject
}
