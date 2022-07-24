class Mkulima {
  constructor() {
    this.farms = [];
    this.groceryvendors = [];
    this.products = [];
  }

  addfarms(id, name, farmer, phonenumber, address) {
    let farm = {};
    farm["farmId"] = id;
    farm["farmname"] = name;
    farm["farmer"] = farmer;
    farm["phone"] = phonenumber;
    farm["location"] = address;
    this.farms.push(farm);
    console.log(this.farms);
  }

  removeFarm(farmId) {
    for (let farm in this.farms) {
      if (this.farms[farm].id === farmId) {
        this.farms.splice(farm, 1);
        return `Deleted farm with ID ${farmId} : ${this.farms}`;
      }
    }
    return "Nothing Deleted, check id";
  }

  updateFarm(farmId, name, farmer, phone, address) {
    let farmFound = this.farms.find((farm) => farm.id === farmId);
    farmFound.farmName = name;
    farmFound.farmer = farmer;
    farmFound.phone = phone;
    farmFound.address = address;
    return farmFound;
  }

  getFarm(farmId) {
    let farmFound = this.farms.find((farm) => farm.id === farmId);
    return farmFound;
  }

  addProduct(productId, name, price) {
    let product = {};
    product["id"] = productId;
    product["name"] = name;
    product["price"] = price;
    this.products.push(product);
  }

  removeProduct(productId) {
    for (let product in this.products) {
      if (this.products[product].id === productId) {
        this.products.splice(product, 1);
        return `Deleted product with ID ${productId} : ${this.products}`;
      }
    }
    return "Nothing Deleted, check id";
  }

  updateProduct(productId, name, price) {
    let productFound = this.products.find(
      (product) => product.id === productId
    );
    productFound.productId = productId;
    productFound.name = name;
    productFound.price = price;
    return productFound;
  }

  getProduct(productId) {
    let productFound = this.farms.find((product) => product.id === productId);
    return productFound;
  }

  printProducts() {
    console.log(this.product);
  }

  calculateOrderCost(productId, quantity) {
    let product = this.products.find((product) => product.id === productId);
    let cost = product.price * quantity;
    return cost;
  }
}

var mkulima = new Mkulima();
mkulima.addfarms("3", "enkishon", "Clint", "0718777705", "Narok");
mkulima.addfarms("2", "enkaji", "Ole Ntimama", "0712567894", "Nairobi");
mkulima.addfarms("1", "enkare", "Naserian", "07147878990", "Nakuru");
mkulima.removeFarm("1");
mkulima.updateFarm("2","Entoyee","Mayiana","0785946367","lowdwa")
mkulima.getFarm("3")
mkulima.addProduct("3", "banana", 300);
mkulima.addProduct("2", "oranges", 400);
mkulima.addProduct("1", "apples", 500);
mkulima.updateProduct("2","Mango",600)
mkulima.getProduct("2")
mkulima.printProducts()
mkulima.calculateOrderCost("3",20)


console.log(mkulima.farms);
console.log(mkulima.products);
console.log(mkulima.farms);
