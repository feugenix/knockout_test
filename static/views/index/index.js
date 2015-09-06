var categories = {};

var Category = function(name) {
    if (!(this instanceof Category))
        return new Category(name);

    if (categories[name])
        return categories[name];

    this.name = name;
    categories[name] = this;
};

var Cost = function(name, category, value) {
    this.name = name;
    this.category = category;
    this.value = Number(value) || 0;
};

Cost.prototype.getValue = function() {
    return this.value;
};

var AppViewModel = function() {
    this.categories = ko.observableArray([
        Category('food'),
        Category('house goods'),
        Category('transport'),
        Category('fun')
    ]);
    this.filter = ko.observable(null);
    this.newCost = ko.observable(new Cost);

    this.costs = ko.observableArray([
        new Cost('orange', categories['food'], 1)
    ]);

    this.totalCategory = ko.observable(0);
    this.total = ko.computed(function() {
        return this.costs().reduce(function(prev, current) {
            return prev + current.getValue();
        }, 0);
    }, this);

    this.addExpensive = function() {
        var newCostData = this.newCost();
        this.costs.push(new Cost(newCostData.name, newCostData.category, newCostData.value));
        this.newCost(new Cost);
    };
};

ko.applyBindings(new AppViewModel);
