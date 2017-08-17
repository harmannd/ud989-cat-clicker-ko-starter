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
    this.currentCat = ko.observable(new Cat({
        clickCount = 0,
        name = 'Tabby',
        imgSrc = 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution = 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames = ["Biggles", "Meowy", "Kitty", "PawPaw"]
    }));

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());