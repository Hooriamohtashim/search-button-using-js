// const products = [
//     { name: "Frozen Peas", available: true },
//     { name: "Frozen Corn", available: false },
//     { name: "Frozen Broccoli", available: true },
//     { name: "Frozen Chicken", available: true },
//     { name: "Frozen Pizza", available: false },
//     { name: "Frozen Berries", available: true },
// ];

// const searchInput = document.getElementById("searchInput");
// const productList = document.getElementById("productList");

// 


var shirts = [

    { name: "blue shirt", available: true },
    { name: "green shirt", available: false },
    { name: "black shirt", available: true },
    { name: "white shirt", available: true },
    { name: "grey shirt", available: false },
    { name: "red shirt", available: false },

];

var search = document.getElementById("search");
var shirtlist = document.getElementById("shirtlist");

search.addEventListener("input", function() {
var searchInput = search.value.toLowerCase();
shirtlist.innerHTML = "";

var filterproduct = shirts.filter(shirt =>
    shirt.name.toLowerCase().includes(searchInput)
);


filterproduct.forEach(shirt => {
    var shirtdiv = document.createElement("div");
    shirtdiv.className = "shirt";
     shirtdiv.textContent = shirt.name;

    var availability = document.createElement("span");
    availability.className = shirt.available ? "in-stock" : "out-of-stock";
    availability.textContent = shirt.available ? "In stock" : "Out of stock";

    shirtdiv.appendChild(availability);
    shirtlist.appendChild(shirtdiv);
    
      })
})

// searchInput.addEventListener("input", function() {
    //     const searchTerm = searchInput.value.toLowerCase();
    //     productList.innerHTML = ""; // Clear previous results
    
    //     const filteredProducts = products.filter(product => 
    //         product.name.toLowerCase().includes(searchTerm)
    //     );
    
    //     filteredProducts.forEach(product => {
    //         const productDiv = document.createElement("div");
    //         productDiv.className = "product";
    //         productDiv.textContent = product.name;
    
    //         const availability = document.createElement("span");
    //         availability.className = product.available ? "in-stock" : "out-of-stock";
    //         availability.textContent = product.available ? "In Stock" : "Out of Stock";
    
    //         productDiv.appendChild(availability);
    //         productList.appendChild(productDiv);
    //     });
    // });
    