var initialCats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames : ["Biggles", "Meowy", "Kitty", "PawPaw"]
    },
    {
        clickCount : 0,
        name : 'Greg',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames : ["Grey", "Meowy", "Kitty", "PawPaw"]
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames : ["zzzzz"]
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution)
    this.nickNames = ko.observableArray(data.nickNames);
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "Newborn";
        }
        else if (this.clickCount() < 50) {
            return "Infant";
        }
        else if (this.clickCount() < 100) {
            return "Teen";
        }
        else {
            return "Adult";
        }
    }, this);
}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.changeCurrentCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
}

ko.applyBindings(new ViewModel());