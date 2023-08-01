// DESCRIPTION 
/* This document contains the Resort Spotlights (3 total pm) for each month
  Each month is separated into a separate array. Each array has 9 variables:
  There are 3 per spotlight:
        1. Image Link
        2. Heading and Paragraph Content
        3. Link to go to when clicked
*/

// ------------------------------------------------------------------------------------------------------------------------------- SPOTLIGHT CONTENT
const january = [];
      january[0] = "https://www.parksavers.com/wp-content/uploads/2019/11/i-DzrQLXh-X3.jpg";
      january[1] = "<h3>Season of Light Continues</h3>Globe-City's Season of Light<sup>TM</sup> celebration isn't over yet, Visit before time runs out!";
      january[2] = "";

      january[3] = "https://www.splishsplash.com/content/dam/sny/images/blog/Season%20Pass%20Blog%20image.png";
      january[4] = "<h3>Season Passes on Sale</h3>As the holiday season wraps up, now is a good time to buy an annual pass and extend your adventure";
      january[5] = "";

      january[6] = "https://esllibrary.s3.amazonaws.com/uploads/ckeditor/pictures/2905/content_Happy-New-Year_Ellii.jpg";
      january[7] = "<h3>Happy New Year!</h3>From all of us here at the resort, may this year be full of fun and new adventures <3";
      january[8] = "";

const february = [];
      february[0] = "https://media.cnn.com/api/v1/images/stellar/prod/190705153928-millennium-force-rollercoaster-004.jpg?q=w_1600,h_900,x_0,y_0,c_fill";
      february[1] = "<h3>Season of Light Has Ended</h3>Now is a good time to visit with lower entry costs and fewer crowds";
      february[2] = "";

      february[3] = "https://www.thespruceeats.com/thmb/dfa8Uq14SlF33FCAsPbDZVHp9bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-toast-4174244-hero-03-d9d005dc633f44889ba5385fe4ebe633.jpg";
      february[4] = "<h3>New FlexEat<sup>TM</sup> Menu offerings</h3>Healthy-Eatz and GCPR have curated even more delicious diet-friendly dining options. Try them out now at our resort restaurants.";
      february[5] = "";

      february[6] = "https://jollyrogerpieroc.com/app/uploads/2019/01/pier-night-43-min-scaled.jpg";
      february[7] = "<h3>Trying New Things</h3>Have you ever tried your skills at the Boardwalk Midway? How about new flavors at the Magic Bakery Store? This year, we're trying new things, and you should too!";
      february[8] = "";

const march = [];
      march[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      march[1] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      march[2] = "";

      march[3] = "https://www.thespruceeats.com/thmb/dfa8Uq14SlF33FCAsPbDZVHp9bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-toast-4174244-hero-03-d9d005dc633f44889ba5385fe4ebe633.jpg";
      march[4] = "<h3>New FlexEat<sup>TM</sup> Menu offerings</h3>Healthy-Eatz and GCPR have curated even more delicious diet-friendly dining options. Try them out now at our resort restaurants.";
      march[5] = "";

      march[6] = "https://jollyrogerpieroc.com/app/uploads/2019/01/pier-night-43-min-scaled.jpg";
      march[7] = "<h3>Trying New Things</h3>Have you ever tried your skills at the Boardwalk Midway? How about new flavors at the Magic Bakery Store? This year, we're trying new things, and you should too!";
      march[8] = "";

const april = [];
      april[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      april[1] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      april[2] = "";

      april[3] = "https://www.thespruceeats.com/thmb/dfa8Uq14SlF33FCAsPbDZVHp9bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-toast-4174244-hero-03-d9d005dc633f44889ba5385fe4ebe633.jpg";
      april[4] = "<h3>New FlexEat<sup>TM</sup> Menu offerings</h3>Healthy-Eatz and GCPR have curated even more delicious diet-friendly dining options. Try them out now at our resort restaurants.";
      april[5] = "";

      april[6] = "https://jollyrogerpieroc.com/app/uploads/2019/01/pier-night-43-min-scaled.jpg";
      april[7] = "<h3>Trying New Things</h3>Have you ever tried your skills at the Boardwalk Midway? How about new flavors at the Magic Bakery Store? This year, we're trying new things, and you should too!";
      april[8] = "";

const may = [];
      may[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      may[1] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      may[2] = "";

      may[3] = "https://marinmagazine.com/wp-content/uploads/2021/07/08_2019__-DL.5727-scaled-1-770x514.jpg";
      may[4] = "<h3>The Start of SummerFest<sup>TM</sup></h3>The sun is rising on this year's SummerFest Celebration! There's lots of fun to be had here at the Globe-City Resort Highland this summer.";
      may[5] = "";

      may[6] = "https://jollyrogerpieroc.com/app/uploads/2019/01/pier-night-43-min-scaled.jpg";
      may[7] = "<h3>Trying New Things</h3>Have you ever tried your skills at the Boardwalk Midway? How about new flavors at the Magic Bakery Store? This year, we're trying new things, and you should too!";
      may[8] = "";

const june = [];
      june[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      june[1] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      june[2] = "";

      june[3] = "https://marinmagazine.com/wp-content/uploads/2021/07/08_2019__-DL.5727-scaled-1-770x514.jpg";
      june[4] = "<h3>The Start of SummerFest<sup>TM</sup></h3>The sun is rising on this year's SummerFest Celebration! There's lots of fun to be had here at the Globe-City Resort Highland this summer.";
      june[5] = "";

      june[6] = "https://jollyrogerpieroc.com/app/uploads/2019/01/pier-night-43-min-scaled.jpg";
      june[7] = "<h3>Trying New Things</h3>Have you ever tried your skills at the Boardwalk Midway? How about new flavors at the Magic Bakery Store? This year, we're trying new things, and you should too!";
      june[8] = "";

const july = [];
      july[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      july[1] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      july[2] = "";

      july[3] = "https://marinmagazine.com/wp-content/uploads/2021/07/08_2019__-DL.5727-scaled-1-770x514.jpg";
      july[4] = "<h3>The Start of SummerFest<sup>TM</sup></h3>The sun is rising on this year's SummerFest Celebration! There's lots of fun to be had here at the Globe-City Resort Highland this summer.";
      july[5] = "";

      july[6] = "https://jollyrogerpieroc.com/app/uploads/2019/01/pier-night-43-min-scaled.jpg";
      july[7] = "<h3>Trying New Things</h3>Have you ever tried your skills at the Boardwalk Midway? How about new flavors at the Magic Bakery Store? This year, we're trying new things, and you should too!";
      july[8] = "";

const august = [];
      august[0] = "https://noguiltdisney.com/wp-content/uploads/2022/09/sanderson-sisters-hocus-pocus-Disneyland-oogie-boogie-bash.jpg.webp";
      august[1] = "<h3>Gear Up for Halloween 2023</h3>The 2022 Halloween season is getting close! Get ready for dazzling in-park decorations and special Halloween themed events and specials at the resort!";
      august[2] = "";

      august[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      august[4] = "<h3>Last Call for SummerFest<sup>TM</sup>!</h3>The sun is beggining to set on GC's SummerFest Celebration! Visit the park now for some family friendly fun in the sun and stock up on memories until next season";
      august[5] = "";

      august[6] = "https://i.ytimg.com/vi/W3Iip4Wxe2g/hqdefault.jpg";
      august[7] = "<h3>Ride Spotlight: Journey to Atlantis</h3>As the summer heat stands strong, take a trip below the refreshing waves and visit the mystical lost city of Atlantis";
      august[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/journey-to-atlantis";

const september = [];
      september[0] = "https://disneydose.com/wp-content/uploads/halloween-time-scott-brinegardisneyland.jpg";
      september[1] = "<h3>👻 Halloween Has Entered the Station 👻</h3>As the fog rolls in, we're shaking with excitement and getting our treat bags ready for the Halloween Season!";
      september[2] = "https://gcparksandresorts.github.io/gcresorthighland/events/sallys-halloween-afterparty";

      september[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      september[4] = "<h3>New Spooky Treats Coming to Town &#127871</h3>Step into a world of frightful delights as we unleash the magic of Halloween into our menus throughout the resort!";
      september[5] = "";

      september[6] = "https://dapsmagic.com/wp-content/uploads/2023/02/Haunted-Mansion-Featured-Image-1.jpg";
      september[7] = "<h3>🎡 Ride Spotlight: Sally's Manor 🎡</h3>Get into the spooky season spirit and take a tour of the famed haunted manor of Sally Spookson on this one-of-a-kind bone-chilling attraction";
      september[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/sallys-manor";

const october = [];
      october[0] = "https://noguiltdisney.com/wp-content/uploads/2022/09/sanderson-sisters-hocus-pocus-Disneyland-oogie-boogie-bash.jpg.webp";
      october[1] = "<h3>Gear Up for Halloween 2023</h3>The 2022 Halloween season is getting close! Get ready for dazzling in-park decorations and special Halloween themed events and specials at the resort!";
      october[2] = "";

      october[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      october[4] = "<h3>Last Call for SummerFest<sup>TM</sup>!</h3>The sun is beggining to set on GC's SummerFest Celebration! Visit the park now for some family friendly fun in the sun and stock up on memories until next season";
      october[5] = "";

      october[6] = "https://i.ytimg.com/vi/W3Iip4Wxe2g/hqdefault.jpg";
      october[7] = "<h3>Ride Spotlight: Journey to Atlantis</h3>As the summer heat stands strong, take a trip below the refreshing waves and visit the mystical lost city of Atlantis";
      october[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/journey-to-atlantis";

const november = [];
      november[0] = "https://noguiltdisney.com/wp-content/uploads/2022/09/sanderson-sisters-hocus-pocus-Disneyland-oogie-boogie-bash.jpg.webp";
      november[1] = "<h3>Gear Up for Halloween 2023</h3>The 2022 Halloween season is getting close! Get ready for dazzling in-park decorations and special Halloween themed events and specials at the resort!";
      november[2] = "";

      november[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      november[4] = "<h3>Last Call for SummerFest<sup>TM</sup>!</h3>The sun is beggining to set on GC's SummerFest Celebration! Visit the park now for some family friendly fun in the sun and stock up on memories until next season";
      november[5] = "";

      november[6] = "https://i.ytimg.com/vi/W3Iip4Wxe2g/hqdefault.jpg";
      november[7] = "<h3>Ride Spotlight: Journey to Atlantis</h3>As the summer heat stands strong, take a trip below the refreshing waves and visit the mystical lost city of Atlantis";
      november[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/journey-to-atlantis";

const december = [];
      december[0] = "https://noguiltdisney.com/wp-content/uploads/2022/09/sanderson-sisters-hocus-pocus-Disneyland-oogie-boogie-bash.jpg.webp";
      december[1] = "<h3>Gear Up for Halloween 2023</h3>The 2022 Halloween season is getting close! Get ready for dazzling in-park decorations and special Halloween themed events and specials at the resort!";
      december[2] = "";

      december[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      december[4] = "<h3>Last Call for SummerFest<sup>TM</sup>!</h3>The sun is beggining to set on GC's SummerFest Celebration! Visit the park now for some family friendly fun in the sun and stock up on memories until next season";
      december[5] = "";

      december[6] = "https://i.ytimg.com/vi/W3Iip4Wxe2g/hqdefault.jpg";
      december[7] = "<h3>Ride Spotlight: Journey to Atlantis</h3>As the summer heat stands strong, take a trip below the refreshing waves and visit the mystical lost city of Atlantis";
      december[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/journey-to-atlantis";


// ------------------------------------------------------------------------------------------------------------------------------- MONTHS
const monthsNamed = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// ------------------------------------------------------------------------------------------------------------------------------- JAVASCRIPT
const mainBody = document.getElementById('resortSpotlightContainer');
const monthDisplay = document.getElementById('resortSpotlightDate');

function createSpotlight(){

  // Display this month and the year
  let tdate = new Date();
  let thisMonthNamed = monthsNamed[tdate.getMonth()];
  monthDisplay.innerHTML = thisMonthNamed + " " + tdate.getFullYear();

  let temp = [];

  // Create the Spotlight
  switch(tdate.getMonth()){
    case 0:
      temp[0] = january[0]; temp[1] = january[1]; temp[2] = january[2];
      temp[3] = january[3]; temp[4] = january[4]; temp[5] = january[5];
      temp[6] = january[6]; temp[7] = january[7]; temp[8] = january[8];
      break;
    case 1:
      temp[0] = february[0]; temp[1] = february[1]; temp[2] = february[2];
      temp[3] = february[3]; temp[4] = february[4]; temp[5] = february[5];
      temp[6] = february[6]; temp[7] = february[7]; temp[8] = february[8];
      break;
    case 2:
      temp[0] = march[0]; temp[1] = march[1]; temp[2] = march[2];
      temp[3] = march[3]; temp[4] = march[4]; temp[5] = march[5];
      temp[6] = march[6]; temp[7] = march[7]; temp[8] = march[8];
      break; 
   case 3:
      temp[0] = april[0]; temp[1] = april[1]; temp[2] = april[2];
      temp[3] = april[3]; temp[4] = april[4]; temp[5] = april[5];
      temp[6] = april[6]; temp[7] = april[7]; temp[8] = april[8];
      break;
    case 4:
      temp[0] = may[0]; temp[1] = may[1]; temp[2] = may[2];
      temp[3] = may[3]; temp[4] = may[4]; temp[5] = may[5];
      temp[6] = may[6]; temp[7] = may[7]; temp[8] = may[8];
      break; 
    case 5:
      temp[0] = june[0]; temp[1] = june[1]; temp[2] = june[2];
      temp[3] = june[3]; temp[4] = june[4]; temp[5] = june[5];
      temp[6] = june[6]; temp[7] = june[7]; temp[8] = june[8];
      break; 
    case 6:
      temp[0] = july[0]; temp[1] = july[1]; temp[2] = july[2];
      temp[3] = july[3]; temp[4] = july[4]; temp[5] = july[5];
      temp[6] = july[6]; temp[7] = july[7]; temp[8] = july[8];
      break; 
    case 7:
      temp[0] = august[0]; temp[1] = august[1]; temp[2] = august[2];
      temp[3] = august[3]; temp[4] = august[4]; temp[5] = august[5];
      temp[6] = august[6]; temp[7] = august[7]; temp[8] = august[8];
      break; 
    case 8:
      temp[0] = september[0]; temp[1] = september[1]; temp[2] = september[2];
      temp[3] = september[3]; temp[4] = september[4]; temp[5] = september[5];
      temp[6] = september[6]; temp[7] = september[7]; temp[8] = september[8];
      break; 
    case 9:
      temp[0] = october[0]; temp[1] = october[1]; temp[2] = october[2];
      temp[3] = october[3]; temp[4] = october[4]; temp[5] = october[5];
      temp[6] = october[6]; temp[7] = october[7]; temp[8] = october[8];
      break; 
    case 10:
      temp[0] = november[0]; temp[1] = november[1]; temp[2] = november[2];
      temp[3] = november[3]; temp[4] = november[4]; temp[5] = november[5];
      temp[6] = november[6]; temp[7] = november[7]; temp[8] = november[8];
      break; 
    case 11:
      temp[0] = december[0]; temp[1] = december[1]; temp[2] = december[2];
      temp[3] = december[3]; temp[4] = december[4]; temp[5] = december[5];
      temp[6] = december[6]; temp[7] = december[7]; temp[8] = december[8];
      break;
    
    default:
      mainBody.innerHTML = "<div>Error Loading.<br><br>Please Try Again Later.</div>";
      
  }// end of switch

      mainBody.innerHTML = "<div onclick='" + 'window.open("' + temp[2] + '");' + "'><img src='"+temp[0]+"'>"+temp[1]+"<br><br><a>Learn More</a><br><br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + temp[5] + '");' + "'><img src='"+temp[3]+"'>"+temp[4]+"<br><br><a>Learn More</a><br><br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + temp[8] + '");' + "'><img src='"+temp[6]+"'>"+temp[7]+"<br><br><a>Learn More</a><br><br></div>";

  
}//end of function
