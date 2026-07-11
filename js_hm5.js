var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
price: function() {
    let sumPrice = 0;
    let list_of_values = Object.values(services);
    for (let value of list_of_values) {
        value = Number.parseFloat(value);
        if (typeof value == "number" && value >= 0) {
            sumPrice += value;
        } 
    }
    return sumPrice;
},
min_price: function() {
    let minValue;
    let list_of_values = Object.values(services);
    for (let value of list_of_values) {
        value = Number.parseFloat(value);
        if (typeof value == "number" && value >= 0) {
            if (minValue == undefined) {
                minValue = value;
            } else if (value < minValue) {
                minValue = value;
            }
        } 
    }
    return minValue;
},
max_price: function() {
    let maxValue;
    let list_of_values = Object.values(services);
    for (let value of list_of_values) {
        value = Number.parseFloat(value);
        if (typeof value == "number" && value >= 0) {
            if (maxValue == undefined) {
                maxValue = value;
            } else if (value > maxValue) {
                maxValue = value;
            }
        } 
    }
    return maxValue;
}
};


console.log(services.price());
console.log(services.max_price());
console.log(services.min_price());
