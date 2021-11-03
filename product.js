class Product {

    constructor(name,price,desc,weight,domestic){
        this.name=name;
        this.price=price;
        this.desc=desc;
        this.weight=weight;
        this.domestic=domestic;
    }

    addPrice(priceTotal){
        return this.price+priceTotal;
    }
}