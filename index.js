 const restaurant=["Milanees's Kitchen","Grill Inn","The Bawarchi","Food Republic","Oven Story Pizza","Amor Ice Cream","The Chinese Monk","The Hunger Out","Galaxy Sweets","Gyani's Restaurant","Fresh Eat & Bite","South Indian@99","The Golden Chow","Hotel Paras Heights","Biryani By Kilo","The Alcor Hotel","Pentola Hotel","Indiana Burgers","Campus Addaa","Kitchen Kraft","The Dessert Zone"]
 const foodname=[
    ["Butter Garlic Naan","Paneer Makhani","Chole Samose Chaat","Cheese Grilled Sandwich","Paneer Kabab","Chicken Lollipop","Chicken Leg Biryani","Chicken Tikka Kebab","Egg Chicken Roll","Golden Fried Prawn"],
    ["Combo Meal 1","Combo Meal 2","Veggie Delight Regular Pizza","Creamy Pasta","Deluxe Chicken Pizza","Fried Chicken Burger","Simply Chicken Footlong","Chicken 65 Dry ","Cheese Egg Maggi"],
    ["Paneer Pakoda","Baby Corn Chilli","Mushroom Salt N Pepper","Cheese Ball","Paneer Crispy","Chicken Malai Tikka", "Fish Tandoori", "Mutton Seekh Kebab", "Butter Chicken", "Prawn Curry"],
    ["Veg Fried Rice", "Hakka Noodles", "Spring Rolls", "Paneer Butter Masala", "Dal Tadka",   "Chickpea Curry", "Fish Curry", "Mutton Biryani", "Prawn Masala", "Chicken Korma"],
    ["Margherita Pizza", "Veggie Supreme Pizza", "Paneer Tikka Pizza", "BBQ Veggie Pizza", "Mushroom Pizza","Chicken BBQ Pizza", "Tandoori Chicken Pizza", "Pepperoni Pizza", "Chicken Sausage Pizza", "Seafood Pizza"],
    ["Vanilla Ice Cream", "Chocolate Ice Cream", "Mango Sorbet", "Pistachio Ice Cream", "Strawberry Ice Cream","Mint Chocolate Chip", "Butterscotch Ice Cream", "Cookies and Cream", "Tiramisu Ice Cream", "Fruit Salad"],
    ["Vegetable Spring Rolls", "Veg Manchurian", "Chili Paneer", "Fried Rice", "Hakka Noodles","Chicken Manchurian", "Chili Chicken", "Sweet and Sour Chicken", "Honey Chicken", "Prawn Crackers"],
    ["Veg Burger", "French Fries", "Veg Sandwich", "Stuffed Paratha", "Pav Bhaji","Chicken Burger", "Fish Burger", "Chicken Nuggets", "Hot Wings", "Cheesy Fries"],
    ["Gulab Jamun", "Rasgulla", "Ladoo", "Jalebi", "Barfi","Kheer", "Gajar Ka Halwa", "Peda", "Soan Papdi", "Chocolate Mousse"],
    ["Paneer Tikka", "Veg Korma", "Dum Aloo", "Mixed Vegetable Curry", "Vegetable Biryani","Chicken Tikka", "Butter Chicken", "Mutton Curry", "Fish Fry", "Chicken Biryani"],
    ["Caprese Salad", "Garlic Bread", "Veg Wrap", "Fruit Chaat", "Methi Thepla","Chicken Caesar Salad", "Grilled Chicken Sandwich", "Fish Tacos", "Chicken Salad", "Beef Quesadilla"],
    ["Idli", "Dosa", "Vada", "Sambar Rice", "Pongal","Chicken Chettinad", "Fish Curry", "Mutton Biryani", "Egg Curry", "Chicken Stew"],
    ["Veg Fried Rice", "Chow Mein", "Vegetable Manchurian", "Hot and Sour Soup", "Spring Rolls","Chicken Fried Rice", "Chili Chicken", "Sweet and Sour Chicken", "Prawn Fried Rice", "Beef Noodles"],
    ["Veg Thali", "Paneer Tikka Masala", "Vegetable Pulao", "Dal Makhani", "Bhindi Masala","Mutton Rogan Josh", "Butter Chicken", "Chicken Tikka Masala", "Fish Tikka", "Chicken Dum Biryani"],
    ["Veg Biryani", "Paneer Biryani", "Dum Aloo Biryani", "Hyderabadi Biryani", "Kolkata Biryani","Chicken Biryani", "Mutton Biryani", "Egg Biryani", "Prawn Biryani", "Fish Biryani"],
    ["Veg Korma", "Vegetable Pakora", "Methi Malai Murg", "Vegetable Stew", "Paneer Tikka Masala", "Chicken Curry", "Lamb Korma", "Fish Curry", "Chicken Vindaloo", "Prawn Biryani"],
    ["Caprese Salad", "Roasted Vegetable Sandwich", "Mushroom Risotto", "Stuffed Peppers", "Vegetable Lasagna","Grilled Chicken", "Fish and Chips", "Beef Stroganoff", "Pork Chops", "Lamb Shank"],
    ["Veggie Burger", "Spicy Paneer Burger", "Mushroom Burger", "Black Bean Burger", "Falafel Burger","Chicken Burger", "Bacon Cheeseburger", "Barbecue Chicken Burger", "Fish Burger", "Double Decker Burger"],
    ["Paneer Butter Masala", "Veg Biryani", "Vegetable Pakora", "Daal Makhani", "Aloo Gobi","Chicken Biryani", "Butter Chicken", "Chicken Kebab", "Fish Curry", "Chicken Seekh Kebab"],
    ["Caesar Salad", "Vegetable Stir Fry", "Veg Fried Rice", "Mushroom Soup", "Greek Salad", "Beef Stir Fry", "Chicken Curry", "Prawn Stir Fry", "Fish Tacos", "Chicken Sandwich"],
    ["Chocolate Cake", "Cheesecake", "Fruit Tart", "Brownies", "Panna Cotta","Tiramisu", "Lemon Meringue Pie", "Red Velvet Cake", "Crème Brûlée", "Gulab Jamun"]
] 
const fprice=[
    [50, 180, 70, 120, 150, 200, 250, 220, 80, 300],
    [150, 180, 200, 160, 220, 150, 170, 190, 90, 250],
    [120, 140, 160, 130, 180, 220, 250, 260, 280, 300],
    [150, 100, 140, 170, 130, 220, 250, 200, 150, 300],
    [250, 300, 320, 350, 380, 400, 450, 430, 470, 500],
    [100, 120, 110, 130, 140, 150, 170, 180, 160, 200],
    [80, 140, 160, 130, 150, 180, 220, 200, 240, 260],
    [120, 150, 130, 140, 160, 180, 220, 200, 190, 210],
    [50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    [140, 60, 120, 100, 160, 220, 250, 230, 180, 260],
    [100, 120, 140, 130, 150, 180, 200, 220, 170, 190],
    [50, 40, 60, 70, 80, 150, 220, 200, 100, 180],
    [120, 140, 130, 150, 160, 200, 220, 240, 260, 250],
    [150, 180, 160, 140, 130, 220, 240, 260, 200, 230],
    [200, 220, 210, 190, 230, 250, 300, 280, 240, 320],
    [150, 170, 160, 140, 130, 220, 250, 200, 240, 300],
    [220, 200, 180, 160, 150, 250, 300, 240, 230, 270],
    [100, 120, 130, 80, 90, 150, 200, 170, 180, 220],
    [60, 70, 80, 90, 100, 150, 180, 130, 160, 200],
    [140, 100, 150, 130, 120, 200, 220, 190, 210, 230],
    [70, 80, 90, 50, 60, 100, 120, 130, 110, 140]
]

const qtyname=[
["200g", "500ml", "100g", "100g", "250g", "400g", "400g", "200g", "100g", "300g"], // Milanees's Kitchen
["200g", "250g", "300g", "150ml", "200g", "250g", "300g", "150g", "100g", "300g"], // Grill Inn
["150g", "200g", "180g", "160g", "200g", "300g", "400g", "350g", "300g", "400g"], // The Bawarchi
["200g", "150g", "250g", "300g", "200g", "350g", "300g", "400g", "350g", "400g"], // Food Republic
["300g", "350g", "400g", "300g", "400g", "450g", "500g", "470g", "420g", "450g"], // Oven Story Pizza
["100ml", "120ml", "110ml", "130ml", "150ml", "200ml", "170ml", "180ml", "150g", "200g"], // Amor Ice Cream
["180g", "200g", "250g", "300g", "350g", "400g", "450g", "350g", "300g", "400g"], // The Chinese Monk
["150g", "200g", "150g", "200g", "180g", "220g", "300g", "240g", "200g", "250g"], // The Hunger Out
["100g", "150g", "80g", "70g", "100g", "150g", "200g", "180g", "120g", "200g"],   // Galaxy Sweets
["150g", "250g", "200g", "180g", "250g", "300g", "400g", "350g", "300g", "400g"], // Gyani's Restaurant
["200g", "100g", "150g", "120g", "130g", "200g", "220g", "180g", "150g", "200g"], // Fresh Eat & Bite
["150g", "100g", "50g", "60g", "100g", "200g", "220g", "200g", "150g", "250g"],   // South Indian@99
["200g", "250g", "180g", "150g", "300g", "400g", "450g", "400g", "350g", "500g"], // The Golden Chow
["180g", "200g", "150g", "160g", "200g", "250g", "300g", "350g", "300g", "450g"], // Hotel Paras Heights
["300g", "350g", "200g", "250g", "300g", "400g", "500g", "450g", "350g", "400g"], // Biryani By Kilo
["200g", "150g", "200g", "250g", "150g", "400g", "500g", "450g", "350g", "300g"], // The Alcor Hotel
["300g", "250g", "200g", "150g", "250g", "400g", "450g", "400g", "350g", "450g"], // Pentola Hotel
["150g", "200g", "180g", "120g", "150g", "250g", "300g", "250g", "300g", "350g"], // Indiana Burgers
["150g", "100g", "150g", "200g", "250g", "300g", "400g", "350g", "300g", "400g"], // Campus Addaa
["200g", "100g", "150g", "180g", "250g", "300g", "350g", "300g", "200g", "400g"], // Kitchen Kraft
["100g", "120g", "130g", "140g", "100g", "200g", "150g", "180g", "170g", "200g"]  // The Dessert Zone
];




const fdescrip=[
   [
        "Fluffy leavened dough flatbread enlivened with garlic & dollop of butter",
        "Paneer Makhani lightly spiced with a hint of tang and sweetness.",
        "Samosa crushed with chole gravy & a topping of green chutney and sev.",
        "Three Layered Bread with creamy and delicious cheese.",
        "Grilled paneer cubes simmered in a spicy and smoky gravy.",
        "chicken drumette is marinated and then batter fried or baked until crisp.",
        "A Pakistani dish that incorporates layers and layers of flavor together.",
        "Boneless pieces of chicken, marinated in spiced yogurt, and cooked on charcoal.",
        "Egg & Chicken simply, deliciously put together and packed with together.",
        "Spicy Prawns with Sweet delicious Dipping."
   ]

    [   "Hearty combo meal with assorted delights, satisfying and tasty.",
        "Second combo meal offering diverse, filling, and flavorful choices.",
        "Classic pizza topped with veggies, cheese, and tangy sauce.",
        "Rich, creamy pasta cooked to perfection with delightful flavors.",
        "Pizza loaded with deluxe chicken, cheese, and flavorful toppings.",
        "Juicy chicken burger with crispy lettuce, mayo, and spices.",
        "Chicken footlong sub with tender meat and fresh veggies.",
        "Spicy chicken 65, crispy outside, tender inside, full flavor.",
        "Classic Maggi noodles topped with cheese and egg, savory delight.",
        "Pizza topped with spicy pepperoni, gooey cheese, and sauce."
    ],

    [   "Crispy paneer pakoras fried golden, served with tangy chutney.",
        "Crispy baby corn tossed in spicy, tangy chili sauce.",
        "Mushrooms seasoned and fried with salt, pepper, and aromatic spices.",
        "Cheese-filled balls, crispy outside, gooey inside, delightful treat.",
        "Crispy paneer tossed in spicy sauce, full of flavor.",
        "Chicken marinated in cream, grilled to tender perfection, delicious.",
        "Whole fish marinated, grilled, and served with tangy chutney.",
        "Minced mutton skewered, grilled, and packed with robust spices.",
        "Tender chicken in creamy, spiced butter sauce, flavorful and rich.",
        "Prawns simmered in spicy curry sauce, bursting with flavor."
    ],

    [
        "Paneer in rich, spiced tomato gravy, creamy and flavorful.",
         "Fragrant basmati rice cooked with mixed vegetables, mildly spiced.",
        "Potatoes cooked in rich, tangy tomato gravy, perfectly spiced.",
        "Creamy spinach cooked with paneer cubes, mild and comforting.",
        "Fried vegetable balls in spicy, tangy Manchurian sauce.",
        "Crispy chicken pieces tossed in spicy, tangy Manchurian sauce.",
        "Fragrant basmati rice cooked with tender mutton, aromatic spices.",
        "Basmati rice stir-fried with chicken, vegetables, and soy sauce.",
        "Eggs simmered in rich, spicy curry sauce, satisfying and flavorful.",
        "Fish fillets fried until golden, crispy, and delicious."
    ],

    [
     "Classic margherita pizza topped with fresh tomatoes, mozzarella, basil.",
     "Pizza loaded with farm-fresh veggies, cheese, and tangy sauce.",
     "Pizza with marinated paneer, onions, and spicy tikka sauce.",
     "Extravagant pizza loaded with assorted veggies, cheese, and sauce.",
     "Cheese-stuffed crust pizza, overflowing with gooey, melty cheese.",
     "Pizza topped with spicy chicken sausages, cheese, and sauce.",
     "Pizza with smoky barbecue chicken, gooey cheese, tangy sauce.",
     "Pizza loaded with chicken, cheese, and assorted flavorful toppings.",
     "Pizza topped with meatballs, cheese, and rich marinara sauce.",
     "BBQ chicken pizza with smoky, spicy, tangy barbecue sauce."
    ],

    [
     "Vanilla ice cream topped with chocolate sauce, nuts, cherries.",
     "Rich chocolate brownie topped with ice cream, whipped cream.",
     "Creamy mango ice cream, fruity, sweet, and refreshing.",
     "Creamy butterscotch ice cream topped with crunchy praline, delightful.",
     "Fresh fruit salad mixed with creamy, rich ice cream.",
     "Fictional chicken ice cream roll, unique, savory, and intriguing.",
     "Fictional bacon ice cream sandwich, sweet, savory, crispy treat.",
     "Fictional grilled chicken ice cream, savory, sweet, unexpectedly tasty.",
     "Fictional turkey ice cream roll, savory, sweet, creamy delight.",
     "Fictional sausage sundae, spicy, sweet, creamy, and surprisingly delicious."  
    ],

    [
      "Crispy spring rolls filled with seasoned vegetables, savory delight.",
     "Noodles stir-fried with vegetables, soy sauce, and aromatic spices.",
     "Fried rice with vegetables, spiced with tangy Schezwan sauce.",
     "Vegetable balls in spicy sauce, savory, tangy, delightful.",
     "Tofu cubes in spicy garlic sauce, soft, flavorful, tangy.",
     "Crispy spring rolls filled with spiced chicken, perfectly fried.",
     "Spicy chicken stir-fried with peanuts, vegetables, and tangy sauce.",
     "Noodles stir-fried with chicken, vegetables, soy sauce, perfectly seasoned.",
     "Chicken stir-fried with spicy chili sauce, crispy, tangy, flavorful.",
     "Fried rice with prawns, soy sauce, vegetables, perfectly seasoned."
    ],

    [
      "Vegetarian burger with fresh veggies, cheese, and tangy sauce.",
     "Paneer wrapped in soft tortilla with spicy, tangy sauce.",
     "Crispy nachos topped with melted cheese, jalapenos, tangy salsa.",
     "French fries loaded with cheese, jalapenos, tangy sauces, crispy.",
     "Pizza loaded with vegetables, cheese, and tangy, spicy sauce.",
     "Juicy chicken burger with lettuce, mayo, and special seasoning.",
     "Chicken wrapped in tortilla with spicy, tangy sauce, delicious.",
     "French fries loaded with chicken, cheese, jalapenos, tangy sauces.",
     "Chicken wings coated in smoky barbecue sauce, crispy, tangy.",
     "Fish tacos with crispy fish, tangy slaw, spicy sauce."
    ],

    [
     "Soft, spongy rasgulla soaked in sweet, sugary syrup.",
     "Warm gulab jamun soaked in rich, aromatic sugar syrup.",
     "Thin, diamond-shaped kaju katli with rich, smooth texture.",
     "Rich, dense mysore pak with ghee, sugar, cardamom flavor.",
     "Crispy, syrup-soaked jalebi with tangy, sweet, aromatic flavor.",
     "Fictional chicken halwa, sweet, savory, unique, and surprising dessert.",
     "Fictional mutton jalebi, crispy, syrup-soaked, with a savory twist.",
     "Fictional fish sandesh, sweet, creamy, with a seafood twist.",
     "Fictional prawn barfi, sweet, dense, with a surprising seafood touch.",
     "Fictional turkey jalebi, sweet, crispy, with a savory note."
    ],

    [
      "Scrambled paneer cooked with spices, onions, and tomatoes, flavorful.",
     "Whole wheat paratha stuffed with spicy, mashed potatoes, satisfying.",
     "Spicy chickpeas served with fluffy, deep-fried bhature, hearty.",
     "Steamed rice served with spiced kidney beans, hearty comfort.",
     "Paneer cubes simmered in creamy spinach gravy, mild, flavorful.",
     "Juicy chicken cooked in rich, creamy tomato gravy, delightful.",
     "Tender mutton in rich, spiced gravy, hearty and satisfying.",
     "Fish fillet marinated and grilled, served with tangy chutney.",
     "Flaky naan stuffed with spiced minced meat, crispy, delicious.",
     "Spiced chicken curry cooked in flavorful gravy, rich and hearty."
    ],

    [
      "Grilled vegetable sandwich with cheese, fresh veggies, and seasoning.",
     "Paneer rolled in soft tortilla with tangy, spicy sauce.",
     "Sub sandwich loaded with fresh veggies, cheese, and sauce.",
     "Burrito stuffed with beans, rice, veggies, and spicy sauce.",
     "Cheesy quesadilla stuffed with vegetables, grilled to crispy perfection.",
     "Sub sandwich loaded with tender chicken, fresh veggies, sauce.",
     "Burrito stuffed with chicken, rice, beans, and spicy sauce.",
     "Cheesy quesadilla stuffed with grilled chicken, perfectly spiced, flavorful.",
     "Grilled chicken sandwich with fresh veggies, tangy, savory, delightful.",
     "Spicy buffalo wings, crispy outside, tender inside, with sauce."
    ],

    [
      "Crispy dosa stuffed with spiced potatoes, served with chutneys.",
     "Soft, steamed idlis served with tangy, spicy sambar.",
     "Crispy vadas served with sambar and coconut chutney.",
     "Thick uttapam topped with onions, tomatoes, and green chilies.",
     "Fragrant lemon rice with peanuts, curry leaves, mild spices.",
     "Spicy chicken curry cooked with coconut, curry leaves, flavorful.",
     "Tender mutton cooked in rich, spiced gravy, hearty dish.",
     "Delicate fish curry cooked with coconut milk, aromatic spices.",
     "Boiled eggs simmered in spicy, tangy curry sauce.",
     "Prawns cooked in coconut milk with aromatic spices, flavorful dish."
    ],

    [
     "Fried rice loaded with vegetables, seasoned with soy sauce.",
     "Noodles stir-fried with vegetables, soy sauce, and tangy spices.",
     "Vegetable balls in spicy, tangy, flavorful Manchurian sauce.",
     "Crispy spring rolls filled with seasoned vegetables, savory delight.",
     "Paneer cubes stir-fried in tangy, spicy chili sauce.",
     "Chicken stir-fried with vegetables, soy sauce, tangy and flavorful.",
     "Noodles stir-fried with chicken, vegetables, soy sauce, seasoned perfectly.",
     "Chicken cubes in tangy, spicy, flavorful garlic sauce.",
     "Prawns stir-fried with vegetables, soy sauce, perfectly seasoned.",
     "Crispy chicken pieces tossed in spicy, tangy Manchurian sauce."
    ],

    [
     "Paneer tikka grilled with spices, served with tangy chutney.",
     "Crispy samosas filled with spiced potatoes, served with chutney.",
     "Fragrant basmati rice cooked with mixed vegetables, mildly spiced.",
     "Vegetable biryani cooked with aromatic spices, served with raita.",
     "Spicy aloo tikki served with tangy, flavorful chutneys.",
     "Chicken tandoori cooked in clay oven, smoky, spiced, flavorful.",
     "Mutton curry cooked with aromatic spices, hearty, rich, and flavorful.",
     "Spiced prawns grilled to perfection, served with tangy chutney.",
     "Tender chicken curry cooked with aromatic spices, hearty and satisfying.",
     "Fish curry cooked with coconut milk, aromatic, and flavorful."
    ],

    [
      "Veg biryani cooked with fragrant basmati rice, aromatic spices.",
     "Paneer biryani cooked with aromatic spices, served with raita.",
     "Aloo biryani cooked with tender potatoes, aromatic spices, delicious.",
     "Mushroom biryani cooked with spices, served with tangy raita.",
     "Mixed veg biryani cooked with assorted vegetables, aromatic spices.",
     "Chicken biryani cooked with fragrant basmati rice, aromatic spices.",
     "Mutton biryani cooked with tender mutton, aromatic spices, flavorful.",
     "Egg biryani cooked with aromatic spices, served with raita.",
     "Prawn biryani cooked with fragrant basmati rice, aromatic spices.",
     "Fish biryani cooked with tender fish, aromatic spices, delightful."
    ],

    [
     "Paneer tikka grilled with spices, served with tangy chutney.",
     "Crispy samosas filled with spiced potatoes, served with chutney.",
     "Vegetable curry cooked with aromatic spices, hearty, flavorful dish.",
     "Mixed vegetable pulao cooked with fragrant basmati rice, spices.",
     "Spiced aloo tikki served with tangy, flavorful chutneys.",
     "Chicken tandoori cooked in clay oven, smoky, spiced, flavorful.",
     "Mutton curry cooked with aromatic spices, hearty, rich, and flavorful.",
     "Prawns stir-fried with vegetables, soy sauce, perfectly seasoned.",
     "Tender chicken curry cooked with aromatic spices, hearty and satisfying.",
     "Fish curry cooked with coconut milk, aromatic, and flavorful."
    ],

    [
     "Paneer tikka grilled with spices, served with tangy chutney.",
     "Crispy samosas filled with spiced potatoes, served with chutney.",
     "Fragrant basmati rice cooked with mixed vegetables, mildly spiced.",
     "Vegetable biryani cooked with aromatic spices, served with raita.",
     "Spicy aloo tikki served with tangy, flavorful chutneys.",
     "Chicken tandoori cooked in clay oven, smoky, spiced, flavorful.",
     "Mutton curry cooked with aromatic spices, hearty, rich, and flavorful.",
     "Spiced prawns grilled to perfection, served with tangy chutney.",
     "Tender chicken curry cooked with aromatic spices, hearty and satisfying.",
     "Fish curry cooked with coconut milk, aromatic, and flavorful."
    ],

    [
     "Vegetarian burger with fresh veggies, cheese, and tangy sauce.",
     "Paneer tikka wrapped in soft tortilla with tangy sauce.",
     "Sub sandwich loaded with fresh veggies, cheese, and sauce.",
     "Burrito stuffed with beans, rice, veggies, and spicy sauce.",
     "Cheesy quesadilla stuffed with vegetables, grilled to crispy perfection.",
     "Juicy chicken burger with lettuce, mayo, and special seasoning.",
     "Chicken wrap filled with spiced chicken, lettuce, tangy sauce.",
     "Spicy chicken wings, crispy outside, tender inside, full flavor.",
     "Grilled chicken sandwich with fresh veggies, tangy, savory, delightful.",
     "Fish and chips, crispy, golden-brown, served with tangy sauce."
    ],

    [
      "Crispy samosas filled with spiced potatoes, served with chutney.",
     "Paneer tikka grilled with spices, served with tangy chutney.",
     "Crispy vadas served with sambar and coconut chutney.",
     "Steamed idlis served with tangy, spicy sambar, comforting.",
     "Fragrant lemon rice with peanuts, curry leaves, mild spices.",
     "Juicy chicken kebabs, grilled to perfection, spiced and tender.",
     "Spicy chicken curry cooked with aromatic spices, hearty dish.",
     "Fish tikka grilled with spices, served with tangy chutney.",
     "Tender mutton curry cooked with aromatic spices, hearty and flavorful.",
     "Spiced prawns grilled to perfection, served with tangy chutney."
    ],

    [
     "Crispy paneer pakoras fried golden, served with tangy chutney.",
     "Baby corn stir-fried with chili sauce, tangy, flavorful.",
     "Mushrooms stir-fried with salt, pepper, and aromatic spices.",
     "Cheese balls fried golden-brown, crispy outside, gooey inside.",
     "Paneer crispy fried, tossed with spicy sauce, full flavor.",
     "Chicken lollipop deep-fried, coated in spicy, tangy sauce, delicious.",
     "Fish tikka grilled with spices, served with tangy chutney.",
     "Mutton kebabs grilled to perfection, spiced, juicy, and flavorful.",
     "Spicy chicken wings coated in tangy sauce, crispy outside.",
     "Grilled prawns marinated in spices, tender, juicy, flavorful treat."
    ],

    [
      "Soft, spongy rasgulla soaked in sweet, sugary syrup.",
     "Warm gulab jamun soaked in rich, aromatic sugar syrup.",
     "Thin, diamond-shaped kaju katli with rich, smooth texture.",
     "Rich, dense mysore pak with ghee, sugar, cardamom flavor.",
     "Crispy, syrup-soaked jalebi with tangy, sweet, aromatic flavor.",
     "Fictional chicken halwa, sweet, savory, unique, and surprising dessert.",
     "Fictional mutton jalebi, crispy, syrup-soaked, with a savory twist.",
     "Fictional fish sandesh, sweet, creamy, with a seafood twist.",
     "Fictional prawn barfi, sweet, dense, with a surprising seafood touch.",
     "Fictional turkey jalebi, sweet, crispy, with a savory note."
    ]        
]

const imgres=["milkit.jpg","grillin.jpg","bawar.avif","foodrep.jpg","ovenst.avif","amore.webp","tcm.avif","tho.webp","galsw.jpg","gyani.avif","feab.jpg","si99.webp","goldenchow.jpg","parash.avif","bbk.webp","alcor.jpg","pentola.jpg","ib.avif","ca.png","kk.jpg","deszone.jpg"]
const restname=["Milanee's Kitchen","Grill Inn","The Bawarchi","Food Republic","Oven Story Pizza","Amore Ice Cream","The Chinese Monk","The Hunger Out","Galaxy Sweets","Gyani's Restaurant","Fresh Eat & Bite","South Indian @99","The Golden Chow","Hotel Paras Heights","Biryani By Kilo","The Alcor Hotel","Pentola Hotel","Indiana Burgers","Campus Addaa","Kitchen Kraft","The Dessert Zone"]
const resttdescrip=[
    "North Indian, Chinese, Biryani, Fast Food",
   "Fast Food, Burger, Pizza, Desserts, Beverages",
    "North Indian, Chinese, Biryani, Rolls, Momos, Sichuan",
    "North Indian, Chinese, Biryani, Seafood, Rolls, Momos, Sichuan",
    "Pizza, Italian, Pasta, Fries",
    "Ice Cream, Desserts, Sweets",
    "Chinese, Fast Food, Rolls, Momos, Sichuan",
    "South Indian, North Indian, Momos, Chinese, Fast Food, Street Food",
   "Mithai, Chinese, Street Food",
    "North Indian, Mughlai, Biryani, Fast Food, Chinese, Beverages",
    "Fast Food, Pizza, Sandwiches",
    "South Indian, Burger",
    "Chinese, Juices, Shake",
    "North Indian, Chinese, Desserts, Sichuan",
    "Biryani, Hyderabadi, Kebab, North Indian, Ice Cream, Desserts",
    "North Indian, Mughlai, Kebab, Seafood, Biryani, Desserts",
    "North Indian, Chinese",
    "Burger, American, Fast Food, Desserts, Shake, Beverages",
    "North Indian, Chinese, Mughlai, Fast Food, Rolls, Sichuan",
    "North Indian, Gujarati, Sandwich, Healthy Food, Fast Food, Desserts",
    "Desserts, Shake, Ice Cream, Bakery, Beverages"
]

const resaddress=[
    "Opposite Women's College, J Road, Bistupur, East Singhbhum, Jamshedpur, Jharkhand, 831001",
    "Plot 443, Khata 38, Ground Floor, Riddhi Siddhi Bhawan Sonari, Jamshedpur, Jharkhand, 831001",
    "Beside Blue Bells English High School.Dimna Road, Muncipality, Purbi Singhbhum, Mango, Jamshedpur",
    "Shop 4, Plaza Market, Near Bhubaneswari Temple, Telco Colony, Jamshedpur, Jharkhand, 831001",
    "GROUND FLOOR, NIL-14, B CHAKRAVARTY COMPOUND, Contractors Area, Bistupur, Jamshedpur, Jharkhand 831001",
    "93B, New Sitaram Dera, Sakchi, Jamshedpur,Jharkhand",
    "3rd Floor, Swarnswaroop Tower, New Kalimati Road, Near Howrah Bridge, Sakchi, Jamshedpur",
    "16/B, Kasidih Line 1, Near Durga Puja Maidan, Sakchi, Jamshedpur",
    "23/508, Jaiswal Complex, Sakchi, Jamshedpur, Jharkhand",
    "49/50, Telco Azad Market, Telco Colony, Jamshedpur, Jharkhand",
    "17-K2/1, Cross Road, Telco Colony, Jamshedpur",
    "K-95-A-12, Village Masoodpur, Vasant Kunj, Jamshedpur, Jharkhand",
    "Shop 2, Hanumant Nagar, Moon City Road, Mango, Jamshedpur",
    "Poreshbala Developers Private Limited, Main Road, Gamharia, Chota Gamahriya, Jamshedpur",
    "Holding 16, Block Jamshedpur, Purbi Singhbhum, Mills And Godown Road Area, Sakchi, Jamshedpur",
    "Holding 4, Ramdas Bhatta, Bistupur, Jamshedpur",
    "Main Road, Near UCO Bank, Mango, Jamshedpur",
    "Shop Hts, bistupur, Jamshedpur - 831001",
    "House 30, Taj Building, Aambagan, SNP Area, Sakchi, Jamshedpur",
    "1/3, Kanwal Sam Tower, Uliyan, Kadma, Anil Sur Path, C Road, Sonari, Jamshedpur",
    "H-T-S Shop, Purbi Singhbhum, Bistupur, Jamshedpur"
]

openingtym=[
    "10am - 11:30pm(Everyday)",
    "9am - 10pm(Mon - Sat)",
    "10:30am - 12am(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10:30am - 11:30pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10:30am - 11:30pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10:30am - 11:30pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Everyday)",
    "10:30am - 11:30pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Everyday)",
    "10:30am - 11:30pm(Mon - Sat)",
    "10am - 11pm(Mon - Fri)"

]

ratedine=["4.3*","4.1*","4.4*","4.2*","4.5*","4.2*","3.5*","3.7*","4.3*","4.1*","4.3*","4.5*","4.2*","3.8*","4.1*","4.3*","4.4*","3.9*"]
ratedeli=["4.8*","4.7*","4.8*","4.3*","4.0*","4.8*","4.1*","4.2*","4.5*","4.3*","4.6*","4.2*","4.8*","4.0*","4.9*","4.4*","4.2*","4.8*",]


function chk(){
    let s=document.getElementById('searchh').value;
    for (let i = 0; i < restaurant.length; i++) 
    {
        if (restaurant[i] === s)
        {
          // window.alert(document.getElements().getElementsByTags())
// 7lines of code
            document.getElementById("resimg").src = "images/"+imgres[i]
            document.getElementById("resname").innerHTML = restname[i]
            var abc= document.getElementsByClassName("d32")
           
            document.getElementById(abc[0]).innerHTML =  resttdescrip[i]
           // document.getElementById("restttdetail").innerHTML = resttdescrip[i]

            document.getElementById("restloc").innerHTML = resaddress[i]
            document.getElementById("restime").innerHTML = openingtym[i]
            document.getElementById("dirate").innerHTML = ratedine[i]
            document.getElementById("derate").innerHTML = ratedeli[i]


            for (let j = 0; j < foodname[i].length; j++)
            {
                document.getElementById("foodtitle"+ j).innerText = foodname[i][j];
                document.getElementById("qtytitle"+ j).innerText = qtyname[i][j];
                document.getElementById("pricetitle"+ j).innerText = fprice[i][j];
                document.getElementById("desctitle"+ j).innerText = fdescrip[i][j];
            }
         }

     }
 }


