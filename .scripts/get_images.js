// Scrape images for each document in the animals collection.
// Google Custom Search API could be used. I should find a site that has a database of images for animal breeds.
// More than one image per breed is good to deal with duplicates.

const axios = require("axios");
const key = 'AIzaSyAWDZWWEXcfkmkRveBIQzjbabXN7BHf_JQ';

var query = "+American+Shorthair";

const url1 =`https://www.googleapis.com/customsearch/v1?q=${query}`
const url2 =`&cx=008887852426201453910%3Akcwt7qiqmw8&searchType=image&fields=items%2Fimage&key=${key}`
const url = url1.concat(url2);


axios
  .get(url)
  .then(response => {
    console.log(`Link ${response.data['items'][0]['image']['thumbnailLink']}`);
  })
  .catch(error => {
    console.log(error);
  });

// var a =  {
//  "items": [
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-facts/lifestyle/1321-top-10-most-searched-cat-breeds-and-mixes",
//     "height": 666,
//     "width": 680,
//     "byteSize": 784743,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7u47sY0XXKtXJW7yIryrDEqG3fgLTLQ1iq4EArUkjpnMN2UiDcdfuBKGCPg",
//     "thumbnailHeight": 136,
//     "thumbnailWidth": 139
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-breeds/characteristics/intelligence-level-of-cat-breeds",
//     "height": 189,
//     "width": 300,
//     "byteSize": 11265,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81LLcPDs6oxKj33UZQBnQZ7txMCGQ_i_VbOO_Y46iDbRI0-mAFoAgPA",
//     "thumbnailHeight": 73,
//     "thumbnailWidth": 116
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-breeds/american-wirehair-cats",
//     "height": 453,
//     "width": 680,
//     "byteSize": 218289,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgPcVlicaJR83cDxLLmANGKOeNtu2Hr4bqtvwibAim2FlG6zyL3JhdXk",
//     "thumbnailHeight": 93,
//     "thumbnailWidth": 139
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-breeds/american-wirehair-cats",
//     "height": 290,
//     "width": 460,
//     "byteSize": 14704,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fr-3mx4kRazcy5vCqvegk4aOWLc3LXoDYcLBpnE9oWENkwPLhnuyRzE",
//     "thumbnailHeight": 81,
//     "thumbnailWidth": 128
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-breeds/characteristics/easy-to-groom-cat-breeds",
//     "height": 189,
//     "width": 300,
//     "byteSize": 7084,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqe6VV_ElcPA6PStH4McCf-QPWLJEz-AiwJmaH0yDhWxZ9DMfA-PpUA",
//     "thumbnailHeight": 73,
//     "thumbnailWidth": 116
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/trending/18299-7-tips-for-having-a-happy-cat-in-happy-cat-month",
//     "height": 430,
//     "width": 760,
//     "byteSize": 68390,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJlsNsCzuLaEUTZQDYFdhWoiP3eJ08sNC2W3mAXsjZmTIN31aObv1wtQ",
//     "thumbnailHeight": 80,
//     "thumbnailWidth": 142
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-breeds/characteristics/cat-breeds-amount-of-shedding",
//     "height": 189,
//     "width": 300,
//     "byteSize": 7783,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK72Tl0kWOZsEtsxC2Mb6t-nJ-mSa2DS4_dby2_z_tYHOJQBZWkb3Io4",
//     "thumbnailHeight": 73,
//     "thumbnailWidth": 116
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/amazing-cats-in-flight",
//     "height": 453,
//     "width": 680,
//     "byteSize": 103673,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNoiE26XjjewswX-SCOcc0pfwKXMrIr_3NlSLJ1RTY30vRtB9rmeCoEA",
//     "thumbnailHeight": 93,
//     "thumbnailWidth": 139
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-facts/lifestyle/1321-top-10-most-searched-cat-breeds-and-mixes",
//     "height": 454,
//     "width": 680,
//     "byteSize": 145189,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjOuR1ccZ5HVPo_mujCcQ__EPmsMfcybmyoVHAd5pljKFazkk2QgBYoE",
//     "thumbnailHeight": 93,
//     "thumbnailWidth": 139
//    }
//   },
//   {
//    "image": {
//     "contextLink": "http://cattime.com/cat-breeds/characteristics/cat-breeds-amount-of-shedding",
//     "height": 189,
//     "width": 300,
//     "byteSize": 9400,
//     "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPS88AuQ6Qli_Pg7Hp26WUuNbkyjtqLOm6EpixVc_doIJXjcGrZ2XCg",
//     "thumbnailHeight": 73,
//     "thumbnailWidth": 116
//    }
//   }
//  ]
// }
//
// console.log(a['items'][0]['image']['thumbnailLink']);
