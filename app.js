(function() {
  var app = angular.module('gemStore',[]);

  app.controller('StoreController', function(){
    var store = this;
    store.products = gems;
  });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function (selectedTab) {
            this.tab = selectedTab;
        }

        this.isSelected = function (currentTab) {
            return (this.tab === currentTab);
        }
    });

    app.controller("GalleryController", function(){
        this.current = 0;

        this.setCurrent = function(currentImage){
            this.current = currentImage || 0;
        };
    });

    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
          "img/boy.png",
          "img/boy-2.png",
      ],
      thumbs: [
          "img/small/builder.png",
          "img/small/astronaut.png"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org"
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org"
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
          "img/boy-2.png",
      ],
      thumbs: [
          "img/small/assistant.png",
          "img/small/builder-1.png",
          "img/small/builder.png"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org"
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org"
      }]
      }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
            "img/boy-3.png",
        ],
        thumbs: [
            "img/small/assistant.png",
            "img/small/builder-1.png"
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org"
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org"
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org"
        }]
    }
  ];
})();
