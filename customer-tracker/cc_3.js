let customers = [
    { name: "Bob Beck",
      email: "BobBeckisBest@yahoo.com",
      purchases: ["Corn","Tomato","Cucumber"]
    },
    { name: "Susan Crunch",
      email: "Susan2323@hotmail.com",
      purchases: ["Watermelon","Bannana","Lemon"]
    },
    { name: "Chef Master",
      email: "Masterchefofficial@gmail.com",
      purchases: ["Lime","Lettuce","Carrot"]
    }
    ]
    customers.push({ name: "Tom Samson",
      email: "TomSamsonGolfs@gmail.com",
      purchases: ["Beans","Brocolli","Beetroot"]
    })

    customers.shift()

    customers[0].email = "Susan2323@Bullscollege.edu"

    customers[1].purchases.push("Onion")
    
    console.log("Customer List:");
    customers.forEach(customer => {
      console.log(`Name: ${customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases.join(", ")}`);
    });