const restaurant=["Milanees's Kitchen","Grill Inn","The Bawarchi","Food Republic","Oven Story Pizza","Amor Ice Cream","The Chinese Monk","The Hunger Out","Galaxy Sweets","Gyani's Restaurant","Fresh Eat & Bite","South Indian@99","The Golden Chow","Hotel Paras Heights","Biryani By Kilo","The Alcor Hotel","Pentola Hotel","Indiana Burgers","Campus Addaa","Kitchen Kraft","The Dessert Zone"]
 const foodname=[
    ["Butter Garlic Naan","Paneer Makhani","Chole Samose Chaat","Cheese Grilled Sandwich","Paneer Kabab","Chicken Lollipop","Chicken Leg Biryani","Chicken Tikka Kebab","Egg Chicken Roll","Golden Fried Prawn"],
    ["Combo Meal 1","Combo Meal 2","Veggie Delight Regular Pizza","Creamy Pasta","Deluxe Paneer Pizza","Fried Chicken Burger","Simply Chicken Footlong","Chicken 65 Dry ","Cheese Egg Maggi","Peppy Chicken Pizza"],
    ["Paneer Pakoda","Baby Corn Chilli","Mushroom Salt N Pepper","Cheese Ball","Paneer Crispy","Chicken Malai Tikka", "Fish Tandoori", "Mutton Seekh Kebab", "Butter Chicken", "Prawn Curry"],
    ["Veg Fried Rice", "Hakka Noodles", "Spring Rolls", "Paneer Butter Masala", "Dal Tadka",   "Chickpea Curry", "Fish Curry", "Mutton Biryani", "Prawn Masala", "Chicken Korma"],
    ["Margherita Pizza", "Veggie Supreme Pizza", "Paneer Tikka Pizza", "BBQ Veggie Pizza", "Mushroom Pizza","Chicken BBQ Pizza", "Tandoori Chicken Pizza", "Pepperoni Pizza", "Chicken Sausage Pizza", "Seafood Pizza"],
    ["Vanilla Ice Cream", "Chocolate Ice Cream", "Mango Sorbet", "Pistachio Ice Cream", "Strawberry Ice Cream","Mint Chocolate Chip", "Butterscotch Ice Cream", "Cookies and Cream", "Tiramisu Ice Cream", "Fruit Salad"],
    ["Vegetable Spring Rolls", "Veg Manchurian", "Chilli Paneer", "Fried Rice", "Hakka Noodles","Chicken Manchurian", "Chili Chicken", "Sweet and Sour Chicken", "Honey Chicken", "Prawn Crackers"],
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
];

const fdimg=[
    ["https://img.freepik.com/premium-photo/indian-breakfast-dish-paneer-paratha-serve-with-curd-chutney_1106454-136498.jpg?size=626&ext=jpg&ga=GA1.1.499511868.1720688163&semt=ais_hybrid","https://www.flavourstreat.com/wp-content/uploads/2019/03/restaurant-style-paneer-makhani-recipe.jpg","https://media.istockphoto.com/id/1398144537/photo/curd-samosa-chaat.jpg?s=612x612&w=0&k=20&c=TXAOhd3V-Ad2TnYmKzz2ZBdOvSERy4XVvb0DXucpItw=","https://images.unsplash.com/photo-1589786742500-14363e62a9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNoZWVzZSUyMGdyaWxsZWQlMjBzYW5kd2ljaHxlbnwwfDF8MHx8fDA%3D","https://t3.ftcdn.net/jpg/07/53/75/14/360_F_753751496_xHNxVB44GiJDWLiXmiKYv6DtVvwaXNjX.jpg","https://t4.ftcdn.net/jpg/08/14/19/19/360_F_814191958_uFotyhyIrIiRSbyHqTyQYM0gmao6H247.jpg","https://storage.googleapis.com/takeapp/media/clyk2sqpn000k0clb92xh77lf.jpg","https://easyindiancookbook.com/wp-content/uploads/2023/02/chicken-tikka-3-jpg.webp","https://gully2gully.in/wp-content/uploads/2021/12/egg-roll.jpg","https://static.toiimg.com/thumb/75454037.cms?imgsize=1271304&width=800&height=800"],
    ["https://media.istockphoto.com/id/1207420200/photo/indian-rice-and-bread-served-wirh-chicken-curry-and-paneer-curry-on-a-pan-along-with-fruits.jpg?s=612x612&w=0&k=20&c=3g7l2tvVeqN6sqOP6pa8gRfltEovoBSmrkjHDgUHceA=","https://b.zmtcdn.com/data/pictures/8/19522528/a670cc751fea6d6c7183cef5b36b69cd.jpg","https://img.cdnx.in/214640/1690356058816_SKU-0230_0.jpg?width=600","https://veenaazmanov.com/wp-content/uploads/2020/01/Chicken-Breast-Pasta-Recipe30.jpg","https://cdn.dotpe.in/longtail/store-items/8034978/fj7XQLK6.jpeg","https://st4.depositphotos.com/2822381/29830/i/450/depositphotos_298304080-stock-photo-fresh-tasty-burger-isolated-on.jpg","https://static.toiimg.com/thumb/60069559.cms?width=1200&height=900","https://i.pinimg.com/550x/6e/a4/5b/6ea45bddf9f8febe0fbcec3e603e29f6.jpg","https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/02/spicy-masala-maggi.jpg","https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI="],
    ["https://spoonsofflavor.com/wp-content/uploads/2021/07/Paneer-Pakora-Recipe.jpg","https://www.730sagestreet.com/wp-content/uploads/2023/05/baby-corn-recipes.jpg","https://yummyies.com/wp-content/uploads/2021/03/Mutton-Paya-300x300.jpg","https://st2.depositphotos.com/4687049/6974/i/450/depositphotos_69743565-stock-photo-bolinha-de-queijo-traditional-food.jpg","https://dms.mydukaan.io/original/jpeg/50926/d9fc0c66-881e-4c54-9a48-92e9b49e484c.png","https://5.imimg.com/data5/SELLER/Default/2024/9/449799643/YL/SW/PN/230584086/malai-chicken-tikka-full.jpg","https://t4.ftcdn.net/jpg/07/15/92/87/360_F_715928787_G324AsDLfKu8nk1ZrK1DcsjuwHrecSKL.jpg","https://desidhaba.antagonmedia.com/wp-content/uploads/2023/12/seekh-Kabab.jpg","https://media.istockphoto.com/id/879661732/photo/butter-chicken-indian-chicken-curry-dish.jpg?s=612x612&w=0&k=20&c=tgAXA4C-HzKe7z7J03GpQHADRTOYnyIjhkOz5qSCOWk=","https://thumbs.dreamstime.com/b/prawn-curry-indian-tomato-gravy-39065975.jpg"],
    ["https://www.cookwithmanali.com/wp-content/uploads/2017/04/Indo-Chinese-Fried-Rice-500x375.jpg","https://vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg","https://onestophalal.com/cdn/shop/articles/frozen_spring_rolls-1699236796097_1200x.jpg?v=1699236891","https://t4.ftcdn.net/jpg/03/31/65/45/360_F_331654539_FaCJJWVUB3SmrIPIkmeEOnk7TYgl7xQC.jpg","https://cinnamonsnail.com/wp-content/uploads/2023/04/Arhar-Dal-Feature-1-of-1.jpg","https://downshiftology.com/wp-content/uploads/2024/01/Chickpea-Curry-main-500x500.jpg","https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-7.jpg","https://assets.limetray.com/assets/user_images/menus/compressed/1606114914_HyderabadiMutton.JPG","https://www.licious.in/blog/wp-content/uploads/2020/12/Prawns-Masala-min.jpg","https://t3.ftcdn.net/jpg/02/28/09/64/360_F_228096414_PF4smFUTAqBUEMhDmeyntdSSq3Lz8CSN.jpg"],
    ["https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA0L3Jhd3BpeGVsb2ZmaWNlMTlfcGl6emFfbWFyZ2hlcml0YV9mMDM2Yzc5YS0wOWI3LTQxMmEtODA1Mi1mY2I2ODI1ZTUyZWFfMS5qcGc.jpg","https://pickyeaterblog.com/wp-content/uploads/2023/09/veggie-supreme-pizza-500x500.jpg","https://img.thecdn.in/167599/1681290353021_SKU-2557_0.webp?width=600","https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Barbekiu_30sm/Medium.png?hash=b35d2b33c43f3083ad5154b1c8ab1859","https://www.mrcoconut.in/img/products/04_12_2022_14_25_271_pm.jpg","https://media.istockphoto.com/id/489809469/photo/bbq-chicken-pizza.jpg?s=612x612&w=0&k=20&c=kB3xRU4-A7fJ9iYpIzlOqSiLX4f6OIath45yFOmqjxQ=","https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=","https://www.iheartnaptime.net/wp-content/uploads/2023/04/Pepperoni-pizza.jpg","https://maplelodgefarms.com/wp-content/uploads/2023/05/Grilled-Italian-Chicken-Sausage-Pizza-060-4x5-650x650.jpg","https://media.istockphoto.com/id/1080361788/photo/pizza-with-mozzarella-cheese-olives-shrimps-tomato-sauce-spices-and-fresh-green-onion-italian.jpg?s=612x612&w=0&k=20&c=a2r8J9OhfllyQavFl83emJNjNC4lUks96jcoGroh-ac="],
    ["https://img.lovepik.com/photo/48012/4791.jpg_wh860.jpg","https://thumbs.dreamstime.com/b/scoops-rich-chocolate-ice-cream-topped-chocolate-sauce-nuts-dark-bowl-chocolate-ice-cream-delight-bowl-319413363.jpg","https://media.istockphoto.com/id/470731269/photo/scoops-of-mango-sorbet.jpg?s=612x612&w=0&k=20&c=PmVIej897BDhd_87bAN7jbf5MFzKq9hNmopLQFaPxSg=","https://png.pngtree.com/png-vector/20240321/ourmid/pngtree-pistachio-ice-cream-in-the-glass-bowl-png-image_12189384.png","https://img.lovepik.com/photo/48011/4723.jpg_wh860.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx00YSE9an8oFJ-tWkWuf1fOMKzpM-nbyYDg&s","https://3.imimg.com/data3/RG/WW/MY-8635703/butterscotch-ice-cream-500x500.png","https://wallpapercave.com/wp/wp3055540.jpg","https://anitalianinmykitchen.com/wp-content/uploads/2020/06/tiramisu-icecream-sq-1-of-1.jpg","https://www.thegraciouswife.com/wp-content/uploads/2018/04/Best-Homemade-Fruit-Salad-feature.jpg"],
    ["https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/Vegetable-Spring-Rolls-2-1.jpg","https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.jpg?s=612x612&w=0&k=20&c=lZvW1lWr03mQszDbx4v59IAnxWacQ_Ti275hjj18hcE=","https://spicecravings.com/wp-content/uploads/2022/01/Chilli-Paneer-Featured-2.jpg","https://www.wholesomeyum.com/wp-content/uploads/2023/02/wholesomeyum-Easy-Fried-Rice-Recipe-1.jpg","https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-vegetable-hakka-noodles.jpg","https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431914.jpg","https://www.easycookingwithmolly.com/wp-content/uploads/2021/04/chili-chicken-recipe.jpg","https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aQlwaPEnnEwIs5MYSW1Gvq_6SsA9YjXb6g&s","https://tuktukdubai.com/wp-content/uploads/2023/06/Prawn-crackers.webp"],
    ["https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg","https://img.freepik.com/free-photo/top-view-french-fries-bowl-with-ketchup-sauce_23-2148701517.jpg","https://static.vecteezy.com/system/resources/previews/030/655/270/non_2x/veggie-sandwich-with-hummus-cucumber-and-tomato-o-free-photo.jpg","https://thumbs.dreamstime.com/b/aloo-paratha-indian-stuffed-flatbread-filled-spiced-mashed-potatoes-pan-fried-to-golden-perfection-flavorful-comfort-food-318593601.jpg","https://thumbs.dreamstime.com/b/traditional-maharashtrian-snacks-pav-bhaji-indian-dish-mix-vegetable-curry-served-buttered-buns-also-known-as-ladi-very-158573906.jpg","https://st4.depositphotos.com/2822381/29830/i/450/depositphotos_298304080-stock-photo-fresh-tasty-burger-isolated-on.jpg","https://girlheartfood.com/wp-content/uploads/2020/06/Crispy-Fish-Burger-Recipe-9.jpg","https://img.freepik.com/premium-photo/chicken-nuggets-with-tomato-sauce-lettuce_996201-28517.jpg","https://thumbs.dreamstime.com/b/crispy-fried-chicken-wings-wooden-table-kentucky-88919528.jpg","https://recipes.net/wp-content/uploads/2023/05/ocharleys-loaded-cheese-fries-recipe_5290dd40b5eee2908d7dc1f63efa8f11.jpeg"],
    ["https://images.slurrp.com/prodarticles/zr7t7j7s00j.webp","https://shreelaxmisweets.in/wp-content/uploads/2023/06/rasgulla-back.jpg","https://thumbs.dreamstime.com/b/motichoor-ladoo-ka-ka-sweet-food-india-made-grilled-gram-flour-flakes-which-sweetened-mixed-67644731.jpg","https://media.istockphoto.com/id/666999640/photo/indian-sweet-jalebi.jpg?s=612x612&w=0&k=20&c=HThX0goLh4odAYAErT_jHp6WwqkvEVSn6efONUUCqxA=","https://t4.ftcdn.net/jpg/06/76/71/05/360_F_676710573_ocFwb6SS7TLJZYsAgIMpRSWO5TnPw8x3.jpg","https://img.freepik.com/premium-photo/kheer-perfection-ar-c_839793-176114.jpg","https://media.istockphoto.com/id/1447442563/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=9O3ArX_Zp9nMA-7Ffpu6zxdoV9FRfcuajc1FlCyQuP8=","https://dadus.co.in/cdn/shop/products/kesar_peda.webp?v=1678163835&width=2048","https://t3.ftcdn.net/jpg/09/57/19/82/360_F_957198228_vd5lsCgxV3H7d2VQoSL6HABp6Ay6869Q.jpg","https://img.freepik.com/premium-photo/chocolate-mousse-glass-bowl-with-chocolate-chips-dark-background_759095-6104.jpg"],
    ["https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg","https://holycowvegan.net/wp-content/uploads/2013/12/vegetable-korma-kurma-mixed-vegetable-curry-8.jpg","https://www.cookforindia.com/wp-content/uploads/2015/12/dum-aloo-3.jpg","https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe.jpg","https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=","https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg","https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400","https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_521733-11296.jpg","https://static.toiimg.com/thumb/60973839.cms?width=1200&height=900","https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized-500x436.jpg"],
    ["https://www.wholesomeyum.com/wp-content/uploads/2022/05/wholesomeyum-Caprese-Salad-5.jpg","https://t4.ftcdn.net/jpg/03/19/22/35/360_F_319223572_ILWIWBuhaeyTzGPLQ0rJCVtBSGOqw864.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLrKN9YDgdv7UDVodCHo8amR15ZzqSOO9sQ&s","https://pipingpotcurry.com/wp-content/uploads/2022/04/Fruit-Chaat-recipe-indian-pakistani-style-Piping-Pot-Curry.jpg","https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/thepla-recipe-2.jpg","https://www.joyfulhealthyeats.com/wp-content/uploads/2020/04/Easy-Grilled-Chicken-Caesar-Salad-with-Homemade-Dressing-web-6-520x520.jpg","https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg","https://assets.epicurious.com/photos/65b177d8e2d2a451cf8cc6ef/1:1/w_4713,h_4713,c_limit/Fish-Tacos_RECIPE.jpg","https://littlespicejar.com/wp-content/uploads/2018/07/Crispy-Chicken-Salad-with-BBQ-Honey-Mustard-Dressing-13-720x540.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHKo1jXz0_R9rJuJf5Iqqdy1P90zGZyO0MQ&s"],
    ["https://media.istockphoto.com/id/1024549286/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=pLE9fkx7E502vOhRZ0bwc6R9z2QgJzhRwd0F-6-nGT0=","https://content.jdmagicbox.com/v2/comp/delhi/x1/011pxx11.xx11.211113154328.d3x1/catalogue/anna-dosa-south-indian-food-indirapuram-ghaziabad-south-indian-fast-food-joints-cg40umqf64.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSyq5ugvI89eGQUnx1wnr3AlNCb0V7gsvsA&s","https://bawarchiindianrestaurant.com/wp-content/uploads/2020/07/sambar-rice.png","https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxlT4bD95kM6ClFBDwjVbWTSX7-LIWN6_1A&s","https://img.freepik.com/premium-photo/fish-curry-seer-fish-curry-traditional-indian-fish-curry-kerala-special-dish-using-coconut-arranged-white-bowl-garnished-with-curry-leaves-malabar-tamarind-white-textured-background_527904-2016.jpg","https://www.awesomecuisine.com/wp-content/uploads/2007/11/mutton_biryani.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bN45gG4cWFoUDqhsEgWfnXzLymv5fbOqhg&s","https://www.cook2eatwell.com/wp-content/uploads/2022/10/chicken-stew-image-2.jpg"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_kdVCTh3UGIsNfzSdsCdtCO8meFGo6r9Lw&s","https://t4.ftcdn.net/jpg/02/94/95/95/360_F_294959511_536HlgQVuK77Jo0NIU80ZrFRS0qFabIV.jpg","https://t3.ftcdn.net/jpg/04/18/04/38/360_F_418043833_ffNKOvraTarqXjqkJ0ouQAlod0viZ9L5.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkosx5UiOHGSLVb073CExbqDWeGfB5NNHcQ&s","https://onestophalal.com/cdn/shop/articles/frozen_spring_rolls-1699236796097_1200x.jpg?v=1699236891","https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min.jpg","https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-image_15609001.jpg","https://www.browneyedbaker.com/wp-content/uploads/2021/02/sweet-sour-chicken-9-square.jpg","https://www.licious.in/blog/wp-content/uploads/2022/07/shutterstock_1582779079.jpg","https://www.kitchensanctuary.com/wp-content/uploads/2018/01/Crispy-Chilli-Beef-Noodles-recipe-square-FS.jpg"],
    ["https://e1.pxfuel.com/desktop-wallpaper/417/923/desktop-wallpaper-veg-thali-thumbnail.jpg","https://t4.ftcdn.net/jpg/06/50/67/49/360_F_650674921_zSKBnxMSCAg4eT40PG22ogu5tV9tuLUf.jpg","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3wPNuGuDxgw423er4D2SRljPO72TRnNubuGGEl-7Ti8UWnZ42sBqblm9xVHkMpmR1-VRP0E02rdxfJRgccanNmYOUDXwG2fz9jhbwXVxpe5Dxbqi1K_uDgyzIvXmyDxSibOGXyrG4GXqr/s640/vegetable+pulav.jpg","https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg","https://aromaticessence.co/wp-content/uploads/2022/06/punjabi_bhindi_masala_gravy_featured.jpg","https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800","https://amritsr.com/wp-content/uploads/2021/10/butter-chicken-recipe.jpg","https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIixOBrWoWeHi99Ac6ZlUay4lgZoQQnN5Xw&s","https://static.wixstatic.com/media/c048ac_8f382e5e7747434bb6a58edcd300442c~mv2.jpg/v1/fill/w_742,h_742,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c048ac_8f382e5e7747434bb6a58edcd300442c~mv2.jpg"],
    ["https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg","https://spicecravings.com/wp-content/uploads/2022/06/Achari-Paneer-Biryani-Featured.jpg","https://media.istockphoto.com/id/1934234952/photo/aloo-biryani-rice-with-potato-and-lemon-slice-served-in-plate-isolated-wooden-background-top.jpg?s=612x612&w=0&k=20&c=k6v-WiaaJUgu9h6JIFA96he0KId7P17skVtpg86sT94=","https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/fill/w_560,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg","https://b.zmtcdn.com/data/dish_photos/542/0465cc1c05f119a2638e2c7a7d27a542.jpg","https://img.freepik.com/premium-photo/bowl-chicken-biryani-with-mint-leaves-side_787273-1828.jpg","https://img.freepik.com/premium-photo/indian-mutton-biryani-prepared-basmati-rice-served-with-yogurt-dip-moody-background-selective-focus_466689-53059.jpg","https://static.toiimg.com/thumb/52397749.cms?width=1200&height=900","https://media.istockphoto.com/id/494094785/photo/indian-biryani-with-shrimp.jpg?s=612x612&w=0&k=20&c=HPjzvYh2ZH85df_h1MZOKn1p9KZvgEc8IV6kmToRjeU=","https://images.slurrp.com/prod/recipe_images/whiskaffair/fish-dum-biryani-1617379990_6B1ZNLMDRVK2V13FI96H.webp"],
    ["https://holycowvegan.net/wp-content/uploads/2013/12/vegetable-korma-kurma-mixed-vegetable-curry-8.jpg","https://img.freepik.com/premium-photo/vegetable-pakora-kebab-with-raita-served-dish-isolated-table-side-view-arabian-food_762785-60551.jpg","https://i.ytimg.com/vi/Bxxhc_Hitfk/maxresdefault.jpg","https://t4.ftcdn.net/jpg/00/82/08/79/360_F_82087975_DG2YNlNAQfZySfsiQASz3PQyJXlpzqp3.jpg","https://www.mukhorochak.com/wp-content/uploads/2023/09/paneer-tikka-masala.jpg","https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg","https://www.pavaniskitchen.com/wp-content/uploads/2021/06/lamb-curry.jpg","https://t3.ftcdn.net/jpg/04/18/22/44/360_F_418224468_53Zl6zdQh7PlFtMA8ebN4HO1lbMkzU0v.jpg","https://www.shutterstock.com/image-photo/chicken-vindaloo-spinach-black-bowl-600nw-1933658456.jpg","https://t4.ftcdn.net/jpg/14/12/58/23/360_F_1412582330_rTHFP13LxwLRvFKIM7WDKtn9eZQfdoVU.jpg"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxwAMNm8Rg9Wr5nINMKwOagvNt9wAjYWxmA&s","https://sinfullyspicy.com/wp-content/uploads/2024/04/1200-by-1200-images-2-300x300.jpg","https://www.smalltownwoman.com/wp-content/uploads/2020/08/Mushroom-Risotto-DSC_2581-II.jpg","https://www.allrecipes.com/thmb/eBsB2933MCuNVCim4O-AyCR97YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79805-StuffedPeppersWithturkeyAndVegtables-MFS-2x3-0048-444ecb49b0184daab29e5326e4330af3.jpg","https://www.happyfoodstube.com/wp-content/uploads/2020/05/vegetable-lasagna-image.jpg","https://www.wholesomeyum.com/wp-content/uploads/2023/05/wholesomeyum-Grilled-Chicken-Legs-15.jpg","https://img.freepik.com/premium-photo/fish-chips-hd-8k-wallpaper-stock-photographic-image_853645-68241.jpg","https://www.foodandwine.com/thmb/YlvSkk7fsIGE8ywW-bT7Pal9Wh8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-beef-stroganoff-hero-06-5dc1fb98ed9f4eea97bab613d212eead.jpg","https://assets.epicurious.com/photos/65415fbb4a09ca9aa000fead/1:1/w_3025,h_3025,c_limit/Chermoula%20Pork%20Chops-RECIPE.jpg","https://cookbook.pfeiffer.net.au/files/lambShanksMughlai.jpg"],
    ["https://www.cookwithmanali.com/wp-content/uploads/2018/05/Vegetarian-Burger-Indian-500x500.jpg","https://img.freepik.com/premium-photo/spicy-paneer-tikka-burger-white-background-paneer-tikka-image-photography_1020697-118615.jpg","https://www.joskitchenlarder.com/wp-content/uploads/2020/06/Portobello-Mushroom-Burger-1200x1200-1.jpg","https://www.freshoffthegrid.com/wp-content/uploads/Sweet-Potato-Black-Bean-Burger-11.jpg","https://www.elbgewuerze.de/wp-content/uploads/2023/07/Falafel-Burger-mit-dem-Rub-Bombay-Ole-Elbgewuerze.png","https://img.freepik.com/premium-photo/delicious-crispy-chicken-burger-high-quality-image_985236-276.jpg","https://www.braums.com/wp-content/uploads/2018/04/BaconCheeseburger-768x660-1.jpg","https://saltedmint.com/wp-content/uploads/2024/01/Grilled-Chicken-Burgers-2.jpg","https://thumbs.dreamstime.com/b/fish-burger-breaded-selective-focus-51729632.jpg","https://img.freepik.com/premium-photo/double-decker-crispy-chicken-doppler-burger-double-decker-crispy-zinger-burger-with-cheese_730243-673.jpg"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBSQJWhJe5nZSRGlZEmLzEyksDg-VScL0yQ&s","https://img-global.cpcdn.com/recipes/a9a71d2df2715ef5/680x482cq70/vegetable-biryani-recipe-main-photo.jpg","https://t3.ftcdn.net/jpg/08/95/20/54/360_F_895205463_4B16WBbjJHDUhNg0WSqM96piIxcAnHST.jpg","https://i.pinimg.com/originals/82/bb/b9/82bbb93fab74455c48029094a096a2d5.jpg","https://ministryofcurry.com/wp-content/uploads/2017/04/Aloo-Gobi-5.jpg","https://t3.ftcdn.net/jpg/06/08/84/24/360_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg","https://castleinthemountains.com/wp-content/uploads/2021/03/Low-Carb-Butter-Chicken-FI.jpg","https://thumbs.dreamstime.com/b/chicken-kebab-bamboo-skewers-chicken-kebab-bamboo-skewers-frying-pan-114812842.jpg","https://vismaifood.com/storage/app/uploads/public/fa9/eb5/467/thumb__700_0_0_0_auto.jpg","https://arysdeli.com/cdn/shop/files/MalaiChickenSeekhKebabs_1200x1200.jpg?v=1705662723"],
    ["https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg","https://t4.ftcdn.net/jpg/00/93/61/59/360_F_93615917_yWT3d5bsLEfjbkyRYc6BoIKWHuNvpdYe.jpg","https://jalojog.com/wp-content/uploads/2024/03/Veg_Fried_Rice.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjb3kwHxC-SjYwgiXOBj6K9INj2Lo0MyVYg&s","https://kitchenfunwithmy3sons.com/wp-content/uploads/2021/12/beef-stir-fry-feature-500x500.jpg","https://images.pexels.com/photos/6113813/pexels-photo-6113813.jpeg?cs=srgb&dl=pexels-shahbaz-6113813.jpg&fm=jpg","https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3pp4-9ZAhDRkXfzhyi8vYS1DUhYi_OqKyg&s","https://media.istockphoto.com/id/185101854/photo/closeup-of-fish-tacos-on-plate.jpg?s=612x612&w=0&k=20&c=_ADDYezHX1Ht5yNAwBQhEZTHQaPROskjK1KiASwkxxI=","https://media.istockphoto.com/id/535466213/photo/sandwich.jpg?s=612x612&w=0&k=20&c=61sLrNISCpB6moFMLtmSfD8FrU6ZnGNp8S4XhJzC1uI="],
    ["https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=","https://thumbs.dreamstime.com/b/homemade-christmas-winter-berry-fruit-cheesecake-wooden-dark-table-creamy-mascarpone-dessert-ozy-atmospheric-photo-78974340.jpg","https://www.culinaryhill.com/wp-content/uploads/2023/07/Fresh-Fruit-Tart-Culinary-Hill-1200x-800.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-zF42va4xP781KBsovAXXIN0xCTtc9FNsw&s","https://www.cookingclassy.com/wp-content/uploads/2021/05/panna-cotta-01-500x500.jpg","https://whatscookinchicago.com/wp-content/uploads/2024/02/U1447_d7966d6a-085c-49f9-b2b6-0b99420ee860.png","https://www.foodandwine.com/thmb/5udMPSy5UC0Tms1LGuNRu3eH0Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-200807-r-lemon-meringue-cc0b3fce6a5a4e57967c7002efeab4c3.jpg","https://www.fnp.com/images/pr/l/v20221205201844/red-velvet-fresh-cream-cake-half-kg_2.jpg","https://natashaskitchen.com/wp-content/uploads/2020/02/Creme-Brule-Recipe-SQ.jpg","https://wallpapercave.com/wp/wp2157265.jpg"],
];

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
];

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
   ],

    [   "Hearty combo meal with assorted delights, satisfying and tasty.",
        "Second combo meal offering diverse, filling, and flavorful choices.",
        "Classic pizza topped with veggies, cheese, and tangy sauce.",
        "Rich, creamy pasta cooked to perfection with delightful flavors.",
        "Paneer chunks and spices on a crispy base, delightful for paneer enthusiasts.",
        "Juicy chicken burger with crispy lettuce, mayo, and spices.",
        "Chicken footlong sub with tender meat and fresh veggies.",
        "Spicy chicken 65, crispy outside, tender inside, full flavor.",
        "Classic Maggi noodles topped with cheese and egg, savory delight.",
        "Pizza topped with spicy pepperoni, gooey cheese, and sauce."
    ],

    [   "Stir-fried rice with fresh vegetables, light soy sauce, and subtle spices.",
        "Stir-fried noodles tossed with vegetables in savory sauces, a Chinese-Indian favorite.",
        "Crispy, golden rolls filled with mixed vegetables, great for snacking or appetizers.",
        "Paneer cubes in a rich, creamy tomato sauce, mildly spiced and flavorful.",
        "Yellow lentils cooked with tempering of garlic, cumin, and spices, simple yet satisfying.",
        "Hearty chickpeas in a spiced tomato gravy, delicious and protein-packed.",
        "Fish cooked in a tangy, spiced curry sauce, ideal with rice.",
        "Fragrant rice layered with tender, spiced mutton, slow-cooked for rich flavors.",
        "Juicy prawns cooked in a thick, spiced masala gravy, bold and delicious.",
        "Creamy, rich curry with tender chicken, slow-cooked in aromatic spices."
    ],

    [
        "Stir-fried rice with mixed vegetables, soy sauce, and spices, simple delight.",
        "Stir-fried noodles with vegetables and soy sauce, a popular Indo-Chinese favorite.",
        "Crispy rolls filled with spiced vegetables, perfect as a snack or appetizer.",
        "Soft paneer cubes in a rich, creamy tomato gravy, mildly spiced.",
        "Yellow lentils tempered with ghee, garlic, and spices, a comforting classic.",
        "Spiced chickpeas in a flavorful gravy, hearty and protein-rich vegetarian dish.",
        "Tender fish simmered in a tangy, spiced curry, ideal with rice.",
        "Fragrant rice layered with tender spiced mutton, slow-cooked for deep, rich flavors.",
        "Juicy prawns cooked in a spiced, flavorful gravy, perfect with rice or bread.",
        "Tender chicken in a creamy, mildly spiced gravy, rich and aromatic.",
    ],

    [
     "Classic margherita pizza topped with fresh tomatoes, mozzarella, basil.",
     "Pizza loaded with farm-fresh veggies, cheese, and tangy sauce.",
     "Pizza with marinated paneer, onions, and spicy tikka sauce.",
     "Barbecue sauce, veggies, and cheese on a crispy crust, smoky and satisfying.",
     "Fresh mushrooms with melted cheese on a golden crust, earthy and delicious.",
     "Grilled chicken and barbecue sauce on a cheesy base, smoky and savory.",
     "Tandoori-spiced chicken pieces, cheese, and onions on a crisp, flavorful base.",
     "Zesty pepperoni slices and melted cheese on a crispy, golden pizza crust.",
     "Juicy chicken sausage slices with cheese and sauce, a savory delight.",
     "A medley of fresh seafood, cheese, and tangy sauce on crispy crust."
    ],

    [
     "Vanilla ice cream topped with chocolate sauce, nuts, cherries.",
     "Rich chocolate brownie topped with ice cream, whipped cream.",
     "Creamy mango ice cream, fruity, sweet, and refreshing.",
     "Creamy ice cream with nutty pistachio flavor, offering a rich, delightful crunch.",
     "Sweet, fruity, and creamy ice cream packed with fresh strawberry goodness.",
     "Refreshing mint-flavored ice cream with chocolate chips, perfect balance of coolness and sweetness.",
     "Smooth and creamy butterscotch ice cream with a hint of caramelized sweetness.",
     "Vanilla ice cream loaded with cookie chunks, a perfect crunchy-creamy combination.",
     "Italian-inspired ice cream with coffee, cocoa, and mascarpone flavors, rich and indulgent.",
     "Fresh, colorful medley of seasonal fruits, light, healthy, and naturally sweet."  
    ],

    [
      "Crispy spring rolls filled with seasoned vegetables, savory delight.",
     "Fried vegetable balls tossed in a spicy, tangy Indo-Chinese gravy, flavorful.",
     "Paneer cubes stir-fried with spicy sauce, peppers, and onions, tangy and bold.",
     "Stir-fried rice with vegetables and light soy sauce, simple and satisfying.",
     "Stir-fried noodles with mixed veggies, tossed in savory sauces, Chinese street favorite.",
     "Fried chicken tossed in a spicy, tangy sauce with peppers and onions.",
     "Spicy stir-fried chicken with green chilies, soy sauce, and vegetables, bold flavor.",
     "Chicken in a tangy-sweet sauce, balancing bold and fruity flavors.",
     "Crispy fried chicken glazed in a sweet honey sauce with a crispy texture.",
     "Light, crispy crackers made from prawns, perfect for snacking or appetizers."
    ],

    [
      "Vegetarian burger with fresh veggies, cheese, and tangy sauce.",
     "Crispy, golden potato fries, perfectly salted and served hot, classic snack.",
     "Fresh vegetables between toasted bread slices, light and delicious for quick meals.",
     "Soft, stuffed flatbread with spicy fillings, served with yogurt or pickle.",
     "Spiced mashed vegetables served with buttered buns, a popular Indian street food.",
     "Juicy chicken patty with fresh veggies and sauce, served in a bun.",
     "Crispy fish fillet, fresh veggies, and tartar sauce, perfect seafood sandwich.",
     "Bite-sized, crispy chicken pieces, perfect for dipping and snacking on-the-go",
     "Spicy, crispy chicken wings coated in tangy sauce, perfect for wing lovers.",
     "Crispy fries smothered in melted cheese, a savory and indulgent snack."
    ],

    [
     "Soft, spongy fried dough balls soaked in sugar syrup, rich and sweet.",
     "Spongy cottage cheese balls soaked in light, sweet sugar syrup, refreshing dessert.",
     "Round sweet balls made from flour, ghee, and sugar, a festive favorite.",
     "Crispy, spiral-shaped fried sweet soaked in sugar syrup, crunchy and juicy.",
     "Fudgy sweet made with condensed milk and sugar, often garnished with nuts.",
     "Creamy rice pudding flavored with cardamom and nuts, a traditional Indian dessert.",
     "Sweet carrot pudding cooked with milk, ghee, and sugar, warm and comforting.",
     "Soft, melt-in-your-mouth sweet made with khoya and sugar, mildly flavored.",
     "Flaky, light sweet with a soft texture, made from gram flour and ghee.",
     "Light, airy dessert made from rich chocolate and cream, smooth and indulgent."
    ],

    [
      "Grilled paneer cubes marinated in spices, smoky, flavorful, and perfect for appetizers.",
     "Creamy curry with mixed vegetables and aromatic spices, rich and mildly spiced.",
     "Potatoes cooked in a rich, spiced gravy, offering bold and tangy flavors.",
     "A medley of vegetables cooked in a flavorful, spiced curry, healthy and hearty.",
     "Fragrant basmati rice cooked with spiced vegetables, offering bold, aromatic flavors.",
     "Marinated, grilled chicken pieces, smoky and tender, bursting with Indian spices.",
     "Tender chicken cooked in a rich, creamy tomato gravy, mildly spiced.",
     "Succulent mutton simmered in a spiced gravy, hearty and full of flavor.",
     "Crispy, spiced fried fish, golden brown on the outside, juicy inside.",
     "Aromatic basmati rice layered with tender, spiced chicken, slow-cooked for rich flavor."
    ],

    [
      "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze, light and flavorful.",
     "Crispy bread slices topped with buttery garlic and herbs, warm and aromatic.",
     "Fresh vegetables wrapped in a soft tortilla, light and perfect for lunch.",
     "Mixed seasonal fruits tossed with spices, tangy, sweet, and refreshing.",
     "Spiced flatbread with fenugreek leaves, savory, and ideal with yogurt or pickle.",
     "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing, hearty and satisfying.",
     "Tender grilled chicken with fresh veggies and sauce in a toasted bun.",
     "Soft tortillas filled with crispy fish, cabbage slaw, and tangy sauce.",
     "Shredded chicken mixed with vegetables and dressing, light, creamy, and flavorful.",
     " Flour tortillas filled with seasoned beef and melted cheese, grilled to perfection."
    ],

    [
      "Soft, steamed rice cakes served with chutney and sambar, light and fluffy.",
     "Thin, crispy rice crepe served with chutney and sambar, savory and satisfying.",
     "Crispy, savory lentil doughnuts, perfect with sambar and coconut chutney.",
     "Rice cooked with lentils, vegetables, and spices, hearty and comforting.",
     "Creamy rice and lentil dish flavored with black pepper and ginger, comforting.",
     "Spicy, aromatic chicken curry from Chettinad, with rich, complex flavors and spices.",
     "Tender fish cooked in a spiced, tangy curry sauce, flavorful and savory.",
     "Aromatic basmati rice layered with tender mutton, slow-cooked with spices, flavorful.",
     "Boiled eggs in a rich, spiced tomato gravy, comforting and satisfying.",
     "Tender chicken simmered in a creamy, spiced gravy with vegetables, hearty and warm."
    ],

    [
     "Stir-fried rice with mixed vegetables, soy sauce, simple and flavorful.",
     "Stir-fried noodles with vegetables, soy sauce, and spices, crispy and savory.",
     "Deep-fried vegetable balls in a tangy, spiced sauce, perfect Indo-Chinese dish.",
     "Spicy, tangy soup with vegetables and tofu, bold and warming flavors.",
     "Crispy fried rolls filled with vegetables, perfect as an appetizer or snack.",
     "Stir-fried rice with chicken and vegetables, simple, hearty, and delicious.",
     "Spicy, stir-fried chicken in a tangy sauce with vegetables, bold flavors.",
     "Crispy chicken in a tangy, sweet sauce, balanced with bold flavors",
     "Stir-fried rice with prawns and vegetables, seafood-rich and flavorful.",
     "Stir-fried noodles with tender beef, vegetables, and soy sauce, savory and hearty."
    ],

    [
     "A complete meal with assorted vegetarian dishes, rice, bread, and desserts.",
     "Grilled paneer in a rich, spiced tomato-based gravy, creamy and flavorful.",
     "Fragrant basmati rice cooked with mixed vegetables and spices, light and flavorful.",
     "Creamy black lentils slow-cooked with butter and spices, rich and comforting.",
     "Spiced okra stir-fried with onions and tomatoes, a flavorful vegetarian dish.",
     "Tender mutton slow-cooked in a spiced curry, rich and deeply flavorful.",
     "Tender chicken pieces in a creamy, mildly spiced tomato gravy, indulgent & smooth.",
     "Grilled chicken simmered in a spiced, tomato-based gravy, bold and flavorful.",
     "Marinated fish pieces grilled to perfection, smoky, flavorful, & perfect with chutney.",
     "Aromatic rice and spiced chicken slow-cooked together, rich, flavorful, and fragrant."
    ],

    [
      "Fragrant basmati rice cooked with spiced veggies, slow-cooked for rich, bold flavors.",
     "Aromatic rice layered with paneer cubes, cooked to perfection, hearty and delicious.",
     "Spiced potatoes layered with fragrant rice, slow-cooked for a rich, flavorful dish.",
     "Signature biryani with rice and marinated meat, known for bold, complex spices.",
     "Fragrant rice with mild spices, tender meat, and potatoes, a subtle, flavorful version.",
     "Aromatic rice & spiced chicken slow-cooked together for deep, layered flavors.",
     "Tender mutton pieces cooked with fragrant basmati rice & spices, rich and flavorful.",
     "Fragrant rice layered with spiced boiled eggs, a flavorful and protein-packed dish.",
     "Prawn biryani cooked with fragrant basmati rice, aromatic spices.",
     "Fish biryani cooked with tender fish, aromatic spices, delightful."
    ],

    [
     "Mixed vegetables cooked in a creamy, mildly spiced curry, rich and flavorful.",
     "Crispy deep-fried vegetable fritters, spiced and crunchy, perfect for snacks or appetizers.",
     "Chicken cooked in a creamy fenugreek-flavored gravy, mild yet aromatic and delicious.",
     "Hearty vegetables simmered in a light, spiced broth, comforting and healthy.",
     "Grilled paneer in a rich, spicy tomato-based gravy, smoky and flavorful.",
     "Tender chicken pieces in a spiced, flavorful gravy, perfect with rice or bread.",
     "Succulent lamb slow-cooked in a creamy, spiced sauce, rich and indulgent.",
     "Fish simmered in a tangy, spiced curry, perfect with rice or naan.",
     "Spicy, tangy chicken curry with bold flavors, a fiery and vibrant dish.",
     "Fragrant basmati rice layered with spiced prawns, slow-cooked, flavorful and aromatic."
    ],

    [
     "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze, light and flavorful.",
     "Grilled vegetables layered in crusty bread, perfect for a healthy, flavorful meal.",
     "Creamy rice cooked with mushrooms, Parmesan, and white wine, rich and savory.",
     "Bell peppers filled with spiced rice and vegetables, baked to perfection.",
     "Layers of pasta, vegetables, and cheese baked in a savory tomato sauce.",
     "Tender, juicy chicken grilled with herbs and spices, smoky and flavorful.",
     "Crispy battered fish served with golden fries, classic and comforting dish.",
     "Tender beef cooked in a creamy mushroom sauce, served over noodles or rice.",
     "Juicy pork chops grilled or pan-seared, served with a flavorful sauce.",
     "Slow-cooked lamb shank in a rich, spiced gravy, tender and hearty."
    ],

    [
     "Grilled vegetable patty with fresh toppings, served in a soft bun.",
     "Crispy, spicy paneer patty with fresh veggies, served in a toasted bun.",
     "Juicy mushrooms and melted cheese on a soft bun, earthy and flavorful.",
     "Protein-packed black bean patty with fresh toppings, flavorful and hearty.",
     "Crispy falafel patty with hummus and veggies, a Mediterranean-inspired delight.",
     "Grilled or fried chicken patty with fresh veggies, served in a soft bun.",
     "Juicy beef patty topped with crispy bacon, cheese, and fresh toppings.",
     "Grilled chicken smothered in barbecue sauce, with crispy onions and fresh toppings.",
     "Crispy fried fish fillet with tartar sauce and fresh veggies, seafood classic.",
     "Two juicy patties stacked with cheese, veggies, and sauce, extra indulgence."
    ],

    [
      "Soft paneer cubes in a rich, creamy tomato gravy, mildly spiced.",
     "Fragrant basmati rice layered with spiced vegetables, slow-cooked for bold flavors.",
     "Crispy, spiced vegetable fritters deep-fried to golden perfection, perfect as snacks.",
     "Creamy, slow-cooked black lentils in a rich, buttery sauce, hearty and comforting.",
     "Spiced potatoes and cauliflower cooked together, a classic, flavorful vegetarian dish.",
     "Aromatic rice and tender chicken layered with spices, slow-cooked for rich flavors.",
     "Tender chicken pieces in a creamy, spiced tomato gravy, mildly sweet.",
     "Spiced, grilled chicken skewers, juicy and smoky with bold flavors.",
     "Tender fish cooked in a tangy, spiced curry sauce, perfect with rice.",
     "Minced chicken spiced and grilled on skewers, smoky and succulent."
    ],

    [
     "Crisp romaine lettuce, croutons, Parmesan, and Caesar dressing, light and refreshing.",
     "Fresh vegetables sautéed in a flavorful sauce, quick, healthy, and delicious.",
     "Stir-fried rice with vegetables and soy sauce, simple, satisfying, and flavorful.",
     "Creamy, earthy mushroom soup with rich, savory flavors, perfect for comfort.",
     "Fresh cucumbers, tomatoes, feta cheese, and olives, dressed in olive oil.",
     "Tender beef strips stir-fried with vegetables in a savory, flavorful sauce.",
     "Tender chicken pieces simmered in a spiced gravy, comforting and aromatic.",
     "Juicy prawns stir-fried with vegetables and sauce, bold and delicious flavors.",
     "Soft tortillas filled with crispy fish, slaw, and tangy sauce, fresh.",
     "Grilled chicken with fresh veggies and sauce between toasted bread, hearty meal."
    ],

    [
      "Rich, moist cake with layers of chocolate goodness, perfect for chocolate lovers.",
     "Creamy, smooth cheese-based dessert with a buttery crust, topped with fruits or sauce.",
     "Crisp pastry crust filled with custard and topped with fresh, vibrant fruits.",
     "Fudgy, rich chocolate squares with a soft center, perfect for an indulgent treat.",
     "Silky, creamy Italian dessert made from sweetened cream and gelatin, light and delicate.",
     "Coffee-flavored Italian dessert with layers of mascarpone & cocoa, decadent & rich.",
     "Tart lemon filling topped with sweet, fluffy meringue, a perfect balance of flavors.",
     "Velvety, moist cake with a hint of cocoa and cream cheese frosting.",
     "Rich custard topped with a caramelized sugar crust, smooth and crispy combination.",
     "Soft, spongy fried dough balls soaked in sugar syrup, a syrupy delight."
    ]        
];

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
];

const resaddress=[
    "Opposite Women's College, J Road, Bistupur, East Singhbhum, Jamshedpur, Jharkhand, 831001",
    "Plot 443, Khata 38, Ground Floor, Riddhi Siddhi Bhawan Sonari, Jamshedpur, Jharkhand, 831001",
    "Beside Blue Bells English High School.Dimna Road, Muncipality, Purbi Singhbhum, Mango, Jamshedpur",
    "Shop 4, Plaza Market, Near Bhubaneswari Temple, Telco Colony, Jamshedpur, Jharkhand, 831001",
    "Ground Floor, Nil-14, B Chakravarty Compound, Contractors Area, Bistupur, Jamshedpur, Jharkhand 831001",
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
];

openingtym=[
    "10am - 11:30pm(Everyday)",
    "9am - 10pm(Mon - Sat)",
    "10:30am - 12am(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11:30pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10:30am - 11pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Everyday)",
    "10:30am - 11pm(Mon - Sat)",
    "10am - 11:30pm(Everyday)",
    "10am - 11pm(Mon - Fri)",
    "10am - 11:30pm(Everyday)",
    "10am - 11:30pm(Mon - Sat)",
    "10am - 11pm(Mon - Fri)"

];

ratedine=["4.3*","4.1*","4.4*","4.2*","4.5*","4.2*","3.5*","3.7*","4.3*","4.1*","4.3*","4.5*","4.2*","3.8*","4.1*","4.3*","4.4*","3.9*"];
ratedeli=["4.8*","4.7*","4.8*","4.3*","4.0*","4.8*","4.1*","4.2*","4.5*","4.3*","4.6*","4.2*","4.8*","4.0*","4.9*","4.4*","4.2*","4.8*",];

users=["dimplek1@gmail.com","khannapri@gmil.com","sosuman123@gmail.com"];
passwords=["dimple","preity","suman"];
usernames=["Dimple Kumari","Preity Khanna","Suman Sharma"];
addresses=["H.no 52, South Park, Bistupur, Jamshedpur","Vijay Niwas Apartment, 3rd Floor, Flat no. 410, Mango, Jamshedour","Neetu Niwas, Road no. 5, Sonari, Jamshedpur"];


function login(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const loginBox = document.querySelector(".loginbox");

    const userIndex = users.findIndex((user, index) => user === email && passwords[index] === password);
    
     console.log("User",userIndex);

     console.log("Username --->",usernames[userIndex]);
     console.log("Address --->",addresses[userIndex]);

    
    if (userIndex !== -1) {
        // Successful login
        document.querySelector(".loginpage").style.display = "none"; // Hide login page
        
        console.log("Runnning-->");
        // Populate user details in invoice
        document.getElementById("invoice-name").innerText = usernames[userIndex];
        document.getElementById("invoice-address").innerText = addresses[userIndex];
      
    } else {
      console.log("Login Failed");
    }

    return false; // Prevent form submission
}




function chk() {
    let s = document.getElementById('searchh').value;
    for (let i = 0; i <= restaurant.length; i++) {
        if (restaurant[i] === s) {
            // Update restaurant information
            document.getElementById("resimg").src = "images/" + imgres[i];
            document.getElementById("resname").innerHTML = restname[i];
            document.getElementById("rdetail").innerHTML = resttdescrip[i];
            document.getElementById("restloc").innerHTML = resaddress[i];
            document.getElementById("restime").innerHTML = openingtym[i];
            document.getElementById("dirate").innerHTML = ratedine[i];
            document.getElementById("derate").innerHTML = ratedeli[i];

            // Update food items
            for (let j = 0; j < foodname[i].length; j++) {
                document.getElementById("foodtitle" + j).innerText = foodname[i][j];
                document.getElementById("qtytitle" + j).innerText = qtyname[i][j];
                document.getElementById("pricetitle" + j).innerText = fprice[i][j];
                document.getElementById("desctitle" + j).innerText = fdescrip[i][j];
                document.getElementById("vegpics" + j).src = fdimg[i][j];
            }

            // Scroll to element with ID 'main3'
            document.getElementById("main3").scrollIntoView({
                behavior: "smooth"  // Optional: adds smooth scrolling
            });

            break;  // Exit the loop once the restaurant is found
        }
    }

}

// const restaurant=["Milanees's Kitchen","Grill Inn","The Bawarchi","Food Republic","Oven Story Pizza","Amor Ice Cream","The Chinese Monk","The Hunger Out","Galaxy Sweets","Gyani's Restaurant","Fresh Eat & Bite","South Indian@99","The Golden Chow","Hotel Paras Heights","Biryani By Kilo","The Alcor Hotel","Pentola Hotel","Indiana Burgers","Campus Addaa","Kitchen Kraft","The Dessert Zone"]

function start(){
    k=0
    s=document.getElementById('searchh').value;
    for(i=0;i<=21;i++)
    {
        if([i].startsWith(s))
        {
            document.getElementById('resname'+k).innerHTML=restaurant[i];
        }
    }
}

function plcorder() {
    const orders = [];
    let totalAmount = 0; // Initialize total amount to zero

    // Loop through the items to gather selected orders
    for (let i = 0; i < 10; i++) {
        const quantity = parseInt(document.getElementById("qtyLabel" + i).innerText);
        if (quantity > 0) {
            const dishName = document.getElementById("foodtitle" + i).innerText;
            const priceText = document.getElementById("pricetitle" + i).innerText;
            const price = parseFloat(priceText.replace("₹", "").replace("/-", "").trim()); // Convert price to a number
            const dishimage = document.getElementById("vegpics" + i).src;
            const dishdesc = document.getElementById("desctitle" + i).innerText;

            // Calculate the total price for this item
            const itemTotal = price * quantity;
            totalAmount += itemTotal; // Add to total amount

            // Add item to the orders array
            orders.push({ dishName, dishimage, quantity, price, dishdesc, itemTotal });
        }
    }
    
   
    renderOrders(orders);

    // Update the total amount in the .amount div
    document.querySelector(".total .amount").innerText = `₹${totalAmount}/-`;
    document.getElementById("invoiceTotalAmount").innerText = `₹${totalAmount}/-`;
}

// Show the invoice when "PLACE ORDER" button is clicked
document.getElementById("place-order-button").addEventListener("click", showInvoice);

function renderOrders(orders) {
    const orderList = document.querySelector(".leftmain");
    const foodItems = orderList.getElementsByClassName("foods"); // Get existing food items

    // Loop through the orders and update existing food items or fill available slots
    for (let i = 0; i <= orders.length; i++) {
        const order = orders[i];
        if (i < foodItems.length) { // Check if we have a corresponding div
            const existingFoodItem = foodItems[i];

            // Update the food image
            const foodPic = existingFoodItem.querySelector(".foodpic img");
            foodPic.src = order.dishimage;

            // Update the food name
            const foodName = existingFoodItem.querySelector(".foodname p");
            foodName.innerText = order.dishName;

            // Update the food description
            const desc = existingFoodItem.querySelector(".descf p");
            desc.innerText = order.dishdesc;

            // Update the quantity
            const quantityDiv = existingFoodItem.querySelector(".quan");
            const currentQuantity = parseInt(quantityDiv.innerText.split(": ")[1]) || 0; 
            quantityDiv.innerText = `${order.quantity}`; 

            const price = existingFoodItem.querySelector(".price");
            price.innerText = `Price: ₹${order.price}/-`;

        }
    }
    document.getElementById("place-order-button").addEventListener("click", showInvoice);
    // Clear remaining slots if there are fewer orders than food items
    for (let j = orders.length; j < foodItems.length; j++) {
        orderList.removeChild(foodItems[j]); // Remove excess items if any
    }
}


function inc(n)
{
   
    x=parseInt(document.getElementById("qtyLabel"+ n).innerHTML)
    x=x+1
    document.getElementById("qtyLabel"+ n).innerHTML=x
}
function dec(n)
{
    x=parseInt(document.getElementById("qtyLabel"+ n).innerHTML)
    if(x>0)
        x=x-1
    document.getElementById("qtyLabel"+ n).innerHTML=x
}

function ordersummary(){
    var os=document.getElementById("os")
    os.classList.toggle('active')
}

function showInvoice() {
    document.getElementById("invoice").style.display = "block";
    document.getElementById("orderSummary").style.display = "none"; // Hide order summary
    document.getElementById("invoiceTotalAmount").innerText = "₹220.00"; //eg

    
}

