// Define inventory
const inventory = [
  {
    category: "Beers",
    items: [
      {
        name: "Bud",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0WVqxjzBfnLmi2V6r-bzJRL3b7GBKoG3bzum4duvW8CQxhJl66KiNIGB16BtZOKfsSMnOTHQ&usqp=CAc",
        price: 13.73 
      },
      {
        name: "Bud Light",
        img: "https://thepartysource.com/image/cache/catalog/inventory/BUD-LT-24PK-CN-FLAT-500x500.jpg",
        price: 13.73
      },
      {
        name: "Stella",
        img: "https://nlliquor.com/wp-content/uploads/2021/07/23258_m_v2.jpg",
        price: 15.65
      },
      {
        name: "Corona",
        img: "https://aem.lcbo.com/content/dam/lcbo/products/0/1/7/8/017853.jpg.thumb.1280.1280.jpg",
        price: 15.65
      },
      {
        name: "Organic",
        img: "https://millstreetdelivery.com/cdn/shop/products/MillStreet_0010_organic.png?v=1677176043",
        price: 14.92
      },
      {
        name: "Blue Wave",
        img: "https://millstreetdelivery.com/cdn/shop/products/MillStreet_0017_BlueWave473mLcanDRY.png?v=1657634746",
        price: 14.92 
      }
    ]
  },
  {
    category: "Coolers",
    items: [
      {
        name: "Grape",
        img: "https://aem.lcbo.com/content/dam/lcbo/products/0/3/1/3/031355.jpg.thumb.1280.1280.jpg",
        price: 15.02
      },
      {
        name: "Lemon",
        img: "https://aem.lcbo.com/content/dam/lcbo/products/5/5/3/1/553164.jpg.thumb.1280.1280.jpg",
        price: 15.02
      },
      {
        name: "Palm Bay",
        img: "https://aem.lcbo.com/content/dam/lcbo/products/0/2/4/3/024333.jpg.thumb.1280.1280.jpg",
        price: 15.02
      },
      {
        name: "Mike Tea",
        img: "https://tagliquorstores.com/cdn/shop/products/Mikes-Hard-Iced-Tea-Single-Can-473ml.jpg?v=1652831343",
        price: 15.02
      },
      {
        name: "Mike Orange",
        img: "https://speedybooze.ca/cdn/shop/products/2_a9340263-abd9-40b7-8285-bb8b333c491a_530x@2x.jpg?v=1677141639",
        price: 15.02
      },
      {
        name: "Cider",
        img: "https://aem.lcbo.com/content/dam/lcbo/products/3/9/4/0/394015.jpg.thumb.1280.1280.jpg",
        price: 14.85
      }
    ]
  },
  {
    category: "Wines",
    items: [
      {
        name: "White",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQO_4mWzNHzXd15qo7vvExVnzkgZsJqV_rOIYiyMaOxpoSIrAc&usqp=CAc",
        price: 18.98
      },
      {
        name: "Red",
        img: "https://aem.lcbo.com/content/dam/lcbo/products/6/0/7/9/607903.jpg.thumb.1280.1280.jpg",
        price: 18.98
      }
    ]
  }
	];

// Create form elements for each item
const inventoryContainer = document.getElementById("inventory");

inventory.forEach(category => {
  const categoryTitle = document.createElement("h2");
  categoryTitle.innerText = category.category;
  inventoryContainer.appendChild(categoryTitle);

  category.items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    const itemImage = document.createElement("img");
    itemImage.src = item.img; 
    itemImage.alt = item.name;
    itemDiv.appendChild(itemImage);

    const itemLoad = document.createElement("input");
    itemLoad.type = "number";
    itemLoad.id = item.name + "Load";
    itemLoad.placeholder = "Total load of " + item.name;
    itemDiv.appendChild(itemLoad);

    const itemPrice = document.createElement("input");
    itemPrice.type = "number";
    itemPrice.id = item.name + "Price";
    itemPrice.placeholder = "Price of " + item.name;
    itemPrice.value = item.price;
    itemDiv.appendChild(itemPrice);

    const itemSales = document.createElement("p");
    itemSales.id = "sales" + item.name;
    itemSales.innerText = "Total sales of " + item.name + ": 0";
    itemDiv.appendChild(itemSales);

    inventoryContainer.appendChild(itemDiv);
  });
});

// Function to calculate inventory
function calculateInventory() {
  let totalSales = 0; // Initialize totalSales variable

  inventory.forEach(category => {
    category.items.forEach(item => {
      const load = document.getElementById(item.name + "Load").value;
      const price = document.getElementById(item.name + "Price").value;
      const sales = load * price;

      totalSales += sales; // Add each item's sales to the total

      document.getElementById("sales" + item.name).innerText = "Total sales of " + item.name + ": " + sales.toFixed(2);
    });
  });

  document.getElementById("totalSales").innerText = "Total sales of all items: " + totalSales.toFixed(2);

  const machineTotal = document.getElementById("machineTotal").value;
  const tipOut = document.getElementById("tipOut").value;
  const grandTotal = machineTotal - tipOut;
  document.getElementById("grandTotal").innerText = "Grand total: " + grandTotal.toFixed(2);
}