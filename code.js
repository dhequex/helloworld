shoppingList = function (name) {
    
    var list = ["apples", "cabbage", "kittens",1,2,3,4,4,4,4,4];

    this.removeItem = function(item){return list.filter((item) => item === name);
    }
    
    this.addItem = function(addItem) {
      return list.push(item)
    }
    
    this.getList = function(shoppingList){
      return list;
    }
};

console.log(shoppingList.removeItem)
