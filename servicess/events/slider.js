const restaurant = [
    "Milanees's Kitchen", "Grill Inn", "The Bawarchi", "Food Republic", 
    "Oven Story Pizza", "Amor Ice Cream", "The Chinese Monk", 
    "The Hunger Out", "Galaxy Sweets", "Gyani's Restaurant", 
    "Fresh Eat & Bite", "South Indian@99", "The Golden Chow", 
    "Hotel Paras Heights", "Biryani By Kilo", "The Alcor Hotel", 
    "Pentola Hotel", "Indiana Burgers", "Campus Addaa", 
    "Kitchen Kraft", "The Dessert Zone"
];

const eventt = [
    ["Birthday Parties", "Comedy Night", "Charity Event", "Wine Tastings"], 
    ["Open Mic", "Ladies Night", "Corporate Events", "Karaoke"],             
    ["Cooking Classes", "Themed Nights", "Dance Night", "Birthday Parties"], 
    ["Food Festival", "Game Night", "Cooking Competition", "Movie Screening"],
    ["Pizza Making Workshops", "Discount Days", "Family Night", "Couples' Pizza Party"], 
    ["Ice Cream Socials", "Dessert Tastings", "Kids Party", "Summer Specials"],
    ["Cultural Food Fair", "Chinese Tea Ceremony", "Cooking Classes", "Holiday Specials"],
    ["Eating Contests", "Live Music", "Comedy Night", "Trivia Night"],         
    ["Sweets Exhibition", "Festival Sweets Sale", "Holiday Dessert Making", "Specialty Candle Night"], 
    ["Buffet Night", "Karaoke Night", "Family Day", "Birthday Packages"],      
    ["Healthy Food Fest", "Cooking Challenges", "Smoothie Day", "Farm-to-Table Tasting"], 
    ["South Indian Cuisine Festival", "Onam Celebration", "Cooking Classes", "Discount Day"], 
    ["Chinese New Year Specials", "Dumpling Contest", "Tea Tasting", "Family Dinner Night"], 
    ["Cultural Events", "Corporate Lunches", "Wedding Catering", "New Year Gala"], 
    ["Biryani Festival", "Cooking Demos", "Takeaway Specials", "Charity Meals"], 
    ["Hotel Gala Dinners", "Music Concerts", "Corporate Events", "Charity Balls"], 
    ["Hotel Events", "Cooking Workshops", "Corporate Dinners", "Wine Tasting"],  
    ["Burger Eating Contests", "Live Bands", "Themed Nights", "Game Day Specials"], 
    ["College Fest Specials", "DJ Night", "Talent Hunt", "Trivia Night"],         
    ["Baking Workshops", "Family Baking Classes", "Dessert Festivals", "Wedding Anniversary Party"],
    ["Dessert Making Competitions", "Ice Cream Parties", "Cupcake Decorating", "Chocolate Tasting"]
];

const eimg = [
    ["https://img.freepik.com/premium-photo/photo-table-with-birthday-cake-deco-background_1235950-92679.jpg", 
     "https://i.pinimg.com/736x/d4/b1/72/d4b172c32065a5e06c16273fd6ad94eb.jpg", 
     "https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1667833986837-6Y5EEO12MM29JOYSX195/Restaurant+Local+Charities.png", 
     "https://assets.atdw-online.com.au/images/84775fe92624db878c1132b3ee75108e.jpeg?rect=453%2C0%2C7285%2C5464&w=2048&h=1536&rot=360"
    ],
    ["https://media.istockphoto.com/id/892039922/photo/microphone-infront-of-an-out-of-focus-audience.jpg?s=612x612&w=0&k=20&c=egOCieubHk13ujV44sBtRrSk5WSMrl_9MujBuPxl8rs=",
     "https://images.squarespace-cdn.com/content/v1/5c6c91707fdcb8cb5defbed6/1594096968147-PQUSUXI5SJEI53GB2JNN/Screen+Shot+2020-07-07+at+2.41.10+PM.png?format=1500w",
     "https://www.benaresnyc.com/wp-content/themes/benaras/img/corporate-banner.jpg",
     "https://www.diablohillsgolfcourse.com/images/karaoke17.jpg"
    ],
    ["https://asset---north-carolina.bldg15.net/img/6/1/618f4408-0b78-4b24-bebb-f0fa18c1921e/Chef%20Alyssa%27s%20Kitchen-fit(1000,600).4d964c70.jpg",
     "https://i.pinimg.com/736x/21/ce/89/21ce8975d5261eacb34dbd6f7c192912.jpg",
     "https://imgmedia.lbb.in/media/2019/06/5d121d585d71350ac9c7f381_1561468248666.JPG",
     "https://www.pakwaancandlelightdinner.com/images/frozenfa1.jpeg"
    ],
    [
     "https://www.bottleneckmgmt.com/wp-content/uploads/2019/06/Chicken-Tinga-Tacos-1.jpg",
     "https://www.gaimn.org/wp-content/uploads/2024/03/GameNight_Generic_web.jpg",
     "https://media.istockphoto.com/id/178073905/photo/ranking-food-at-a-contest.jpg?s=612x612&w=0&k=20&c=6NQ1lL9dl9uo4cbvU4xSNzHQVkSv2Fp1nPNw_gZW85w=",
     "https://www.apexacoustics.co.uk/wp-content/uploads/2015/07/3-Tyneside-Cinema-cafe-bar-film-screening.jpg"
    ],
    [
     "https://yasc.edu.ph/wp-content/uploads/2023/06/Pizza-News1.jpg",
     "https://www.tastecard.co.uk/content/dam/dcg/products/restaurants/giraffe/images/GIRAFFE-FOOD-EXT-0001.JPG",
     "https://media.istockphoto.com/id/1553473885/photo/happy-extended-indian-family-dining-together-outdoors-in-fancy-house-garden-at-night-family.jpg?s=612x612&w=0&k=20&c=_oUDTPMo6pMHzCXFnZf7uEkTKoOb0RE5GzvldYdFH0A=",
     "https://www.restaurantdive.com/imgproxy/oeg4S_CaItibuaGqI7uiTHpN1w2VXAFUfG5N1UAwvVw/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL0dldHR5SW1hZ2VzLTEzMzEwNzY1NDUuanBn.webp"
    ],
    [
     "https://b.zmtcdn.com/data/pictures/1/21439581/11617a293970214cd3341800cae950ec_o2_featured_v2.jpg",
     "https://b.zmtcdn.com/data/pictures/chains/2/18279492/e420ba81c829c3326cc62c04f16147d4.jpg?fit=around|960:500&crop=960:500;*,*",
     "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Ii9NziJ2-_DSC2095.jpg",
     "https://b.zmtcdn.com/data/pictures/chains/0/50970/7d87cd28140eac3d2944b48bbd0cdcc7.jpg"
    ],
    [
    "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/05/Popular-Food-Festival-In-India.jpg?fit=1024%2C683&ssl=1",
    "https://img.freepik.com/premium-photo/traditional-chinese-tea-ceremony-outdoors-amidst-autumn-leaves_840347-4687.jpg",
    "https://fesmag.com/images/stories/2018-07/FBD_University-of-Vermont-Central-Campus-Dining.jpg",
    "https://api.vip.foodnetwork.ca/wp-content/uploads/2023/12/reign-holiday-special.jpg?w=3840&quality=75"
    ],
    [
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/T%C3%A4ff%C3%A4_-_Spaghetti_eating_contest_%2810313993593%29.jpg",
    "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/02/24132030/live-music.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCuv9IXj8fD5xseDa_xolBHTSYB55we26WA&s",
    "https://img-us.didaudo.net/us-locations/US/000/008/8091/0oflahertys-irish-pub0.jpg?output=webp&fit=cover&w=800&h=600"
    ],
    [
    "https://thumbs.dreamstime.com/b/lot-various-multicolored-caramel-christmas-fair-lviv-ukraine-december-sweets-sold-colorful-lollipops-sale-supermarket-132948592.jpg",
    "https://img.freepik.com/premium-photo/traditional-diwali-sweets-snacks-decorative-platter_1264082-156666.jpg",
    "https://media.istockphoto.com/id/613115478/photo/foie-gras-and-cranberry-chutney.jpg?s=612x612&w=0&k=20&c=BiWik9zaYppnTVInXtUb3SuuWIoy9DsAZv6a5oMvjek=",
    "https://media.istockphoto.com/id/1277116200/photo/table-with-burning-candles-in-candlesticks-glasses-and-food-outside-in-the-evening.jpg?s=612x612&w=0&k=20&c=nzEWK6NxyVVoiQI8xI0mqmrzVMFvQmDyBcyzxbRz3AE="
    ],
    [
    "https://content.jdmagicbox.com/comp/def_content_category/dinner-buffet-restaurants/a2e724120c-dinner-buffet-restaurants-2-94f6h.jpg",
    "https://media.timeout.com/images/105304811/750/562/image.jpg",
    "https://media.istockphoto.com/id/1178431717/photo/portrait-of-happy-family-eating-in-the-restaurant-at-christmas.jpg?s=612x612&w=0&k=20&c=SNVfFUe4Z9o0LQ0ZvayGaR0sgNjJmhilPnRClx2e-fg=",
    "https://t4.ftcdn.net/jpg/07/08/90/93/360_F_708909392_bfAE4ejXUNn6iZhG1E0nHFzHIpei6LMu.jpg",
    ],
    [
    "https://tb-static.uber.com/prod/image-proc/processed_images/3551e74f418acd05c07ae51cbd0f629d/61e8d264e9409914f90881b13f54d0ac.jpeg",
    "https://micelah.com/wp-content/uploads/2024/05/Culinary-Teambuilding-1.jpg",
    "https://media.istockphoto.com/id/1406625741/photo/smoothies-and-fruits.jpg?s=612x612&w=0&k=20&c=RAVi04e0DALtjpTbV2UUDDmOyHFzcquGYCNeL-vjb7E=",
    "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/local-samosal/media/media_files/zYtnHPx3MDL2vH1re63u.png"
    ],
    [
    "https://indianfoodfreak.com/wp-content/uploads/2014/09/South-Indian-Prasadam-Thali-1.jpg",
    "https://assets.telegraphindia.com/telegraph/2024/Sep/1725973422_lead.jpg",
    "https://content.jdmagicbox.com/comp/def_content/cookery_classes/default-cookery-classes-9.jpg",
    "https://bytesflow.com/wp-content/uploads/2019/04/shutterstock_543802489-850x476.jpg"
    ],
    [
    "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/vfihdymn/33e2959a-9238-4fbd-9aeb-1b858af9fa63.jpg",
    "https://media.istockphoto.com/id/96655791/photo/dim-sum.jpg?s=612x612&w=0&k=20&c=0_LLSsStw2EwGR1B5s5Hbykm8-_u2F7n6O2GW4DhZcA=",
    "https://st.depositphotos.com/12982378/55208/i/450/depositphotos_552080146-stock-photo-top-view-cups-tea-wooden.jpg",
    "https://img.freepik.com/free-photo/people-enjoying-mexican-barbecue_23-2151000258.jpg"
    ],
    [
    "https://qul.imgix.net/43a7d09f-da0a-4d28-827d-1d9c3c8dda19/456577_sld.jpg",
    "https://media.istockphoto.com/id/1444001932/photo/business-lunch.jpg?s=612x612&w=0&k=20&c=MFmAaYl5GL4chJFbSAfrE_tJfy7XiRpphXphpYjIsv4=",
    "https://4.imimg.com/data4/SQ/KG/MY-9630668/wedding-caterers.jpg",
    "https://images.cye-group.com/Assets/184056/big.webp"
    ],
    [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/37/1a/09/fusion-feast-hyderabadi.jpg?w=1200&h=-1&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7iK9sB9ZtBCUUx6vntEVMh5F7VivF9Bi4w&s",
    "https://jaipurindia.co.nz/wp-content/uploads/lunch-special-takeaway-jaipur-indian-restaurant-latest.jpg",
    "https://media.istockphoto.com/id/1383952487/photo/simple-and-traditional-brazilian-food-being-served-in-a-popular-restaurant.jpg?s=612x612&w=0&k=20&c=lgq9nXgKUCjOwMV4ZKdRPbUTW0_pxEGRV5xEAXXosto="
    ],
    [
    "https://www.stmaur.ac.jp/images/2024/01/08/231028-121---Christina-Furstenau1.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/05102016_Anti-Social1_20180609154309.jpg",
    "https://www.benaresnyc.com/wp-content/themes/benaras/img/corporate-banner.jpg",
    "https://www.powerofparenting.co.uk/files/images/pop_ball_2018_12.jpg"
    ],
    [
    "https://carrolldesign.co.uk/wp-content/uploads/2024/05/hotel-event-room.jpg",
    "https://duongsrestaurant.com/wp-content/uploads/2023/07/duong-cooking-class-9.jpg",
    "https://silverspurrvpark.com/wp-content/uploads/2023/02/silverton-oregon-restaurants-1024x605.jpeg",
    "https://elcoto.com/wp-content/uploads/2022/09/como-catar-un-vino-restaurante.jpg"
    ],
    [
    "https://images.squarespace-cdn.com/content/v1/56da7a0ef699bb4be0fe33c2/1662692731995-OLGFW9WYLSMTNTFPI7Y6/The+Rose+-+DZuks+-+August+2022+-+655.jpg",
    "https://koalamate.life/wp-content/uploads/2023/03/Koalamate-Mulan-Music-Restaurant-4.jpg",
    "https://media.licdn.com/dms/image/C5112AQGkof_vCPCTqw/article-cover_image-shrink_600_2000/0/1520227709264?e=2147483647&v=beta&t=h-FcDEHrxjdo3fhmEu85KY0pUe32Aly4sXSsb9TrSyw",
    "https://www.partstown.com/about-us/wp-content/uploads/2019/01/Super-Bowl-Promotion-Ideas-for-Your-Restaurant-or-Bar.png"
    ],
    [
    "https://www.weddingbellcaterer.com/wp-content/uploads/2022/07/best-caterer-kolkata-for-college-fest-1024x768.jpg",
    "https://www.dreamsbanquethall.co.in/images/services/dj-party.jpg",
    "https://media.istockphoto.com/id/598223378/photo/chef-placing-finishing-touches-on-a-meal.jpg?b=1&s=612x612&w=0&k=20&c=OYcE-Gjd8HtYTYlLwmB8cmA4QR-0p9w3qKC-4Y4GFiI=",
    "https://t3.ftcdn.net/jpg/09/18/82/24/360_F_918822414_9PEdccWa4YulxQ98cFzwvZRoj7udQoZ5.jpg"
    ],
    [
    "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,h_305,q_60,w_580/v1/classpop/66a605d18ccd4.jpg",
    "https://img.freepik.com/premium-photo/cooking-class-culinary-bakery-food-people-concept-happy-group-friends-male-chef-cook-baking-kitchen_380164-126083.jpg",
    "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2019%2F09%2F13%2Ffile75adsjo0jgh12gb1hg02-1568341801.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
    "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/seating-area-of-fuego-x-551.jpg"
    ],
    [
    "https://www.shutterstock.com/image-photo/johannesburg-south-africa-november-10-600nw-1761833702.jpg",
    "https://cdn.trendhunterstatic.com/thumbs/532/party-pizookie.jpeg?auto=webp",
    "https://imgcdn.stablediffusionweb.com/2024/3/20/315460bf-e0bf-42fa-86d2-0453e2f7a6b7.jpg",
    "https://images.bizbuysell.com/shared/listings/227/2274682/ee6f2763-2264-4383-b446-ed427ed31566-W768.jpg"
    ]
];


function start() {
    let s = document.getElementById('searchh').value.toLowerCase();
    let k = 0;

    // Clear previous suggestions
    for (let j = 0; j < 5; j++) {
        document.getElementById('resname' + j).innerHTML = '';
    }

    // Loop through restaurant list and display suggestions
    for (let i = 0; i < restaurant.length; i++) {
        if (restaurant[i].toLowerCase().startsWith(s)) {
            if (k < 5) { // Display up to 5 suggestions
                document.getElementById('resname' + k).innerHTML = restaurant[i];
                k++;
            }
        }
    }
}

function chk() {
    let s = document.getElementById('searchh').value;
    for (let i = 0; i < restaurant.length; i++) {
        if (restaurant[i].toLowerCase() === s.toLowerCase()) {
            document.getElementById("eventimg").src = eimg[i][0];
            document.getElementById("resname").innerHTML = restaurant[i];
            document.getElementById("eventname").innerHTML = eventt[i][0];

            let currentEventIndex = 0;

            function updateEvent() {
                document.getElementById("eventimg").src = eimg[i][currentEventIndex];
                document.getElementById("eventname").innerHTML = eventt[i][currentEventIndex];
            }

            document.getElementById("next").addEventListener("click", () => {
                currentEventIndex = (currentEventIndex + 1) % eventt[i].length;
                updateEvent();
            });

            document.getElementById("prev").addEventListener("click", () => {
                currentEventIndex = (currentEventIndex - 1 + eventt[i].length) % eventt[i].length;
                updateEvent();
            });

            return; // Exit the loop once the restaurant is found
        }
        document.getElementById("fid").style.display="none"
        document.getElementById("sliderid").style.display="block"
    }
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

    // If no match found, display no result
    // document.getElementById("nores").innerHTML = "No Restaurant Found";
    // document.getElementById("eventname").innerHTML = "";
    // document.getElementById("eventimg").src = "";
}