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
      january[0] = "https://aztechadmit.github.io/gcresorthighland/main/images/banner6.jpg";
      january[1] = "<h3>Return of Admission Discounts and Promotions</h3>Start the new year off with an Adventure! Oras Nou Resident, RMember, and Retail Multi-Day admission discounts have all returned so you can experience all the magic for less!";
      january[2] = "https://gcparksandresorts.github.io/gcresorthighland/information/promotions";

      january[3] = "https://www.splishsplash.com/content/dam/sny/images/blog/Season%20Pass%20Blog%20image.png";
      january[4] = "<h3>Season Passes on Sale</h3>As the holiday season wraps up, now is a good time to buy an annual pass and extend your adventure";
      january[5] = "https://gcparksandresorts.github.io/gcresorthighland/tickets/annual-passports";

      january[6] = "https://esllibrary.s3.amazonaws.com/uploads/ckeditor/pictures/2905/content_Happy-New-Year_Ellii.jpg";
      january[7] = "<h3>Happy New Year!</h3>From all of us here at the resort, may this year be full of fun and new adventures <3";
      january[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park";

const february = [];
      february[0] = "https://www.enjoyflorida.com/wp-content/uploads/2019/05/dance-floor-with-dancers-the-groove-nightclub-universal-citywalk-orlando.jpg";
      february[1] = "<h3>Introducing Saturday Nightz at City-Shop</h3>This March, live your Highland Night adventure with free-to-access dance parties at Globe-City's City-Shop Fountain Plaza. Featuring different DJs every saturday and a unique theme for all four nights, its the ultimate social Saturday event!";
      february[2] = "https://gcparksandresorts.github.io/gcresorthighland/blog/entertainment/03-01-2024-Saturday-Nightz";

      february[3] = "https://cache.undercovertourist.com/blog/2019/02/120-romantic-things-disneyland-kissing-castle.jpg";
      february[4] = "<h3>Romance is in the Air!</h3>In honor of the month of love, view our February blog post for an in-depth list of some of the most romantic spots at the resort.";
      february[5] = "https://gcparksandresorts.github.io/gcresorthighland/blog/other/02-01-2024-romance-around-the-resort.html";

      february[6] = "https://www.mtishows.com/sites/default/files/styles/hero_image/public/bhm_disney_interview_fnh.jpg?itok=o_-3fVIt";
      february[7] = "<h3>BMU Celebrates Black History Month</h3>Explore unique displays of culture and humanity in honor of Black History Month, put on by the Black Minecraftians United organization.";
      february[8] = "https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/boardwalk-bumpers";

const march = [];
      march[0] = "https://www.enjoyflorida.com/wp-content/uploads/2019/05/dance-floor-with-dancers-the-groove-nightclub-universal-citywalk-orlando.jpg";
      march[1] = "<h3>Saturday Nightz at City-Shop is on!</h3>For the entire month of March, live your Highland Night adventure with free-to-access dance parties at Globe-City's City-Shop Fountain Plaza. Featuring different DJs every saturday and a unique theme for all four nights, its the ultimate social Saturday event!";
      march[2] = "blog/entertainment/03-01-2024-Saturday-Nightz";

      march[3] = "https://www.thespruceeats.com/thmb/dfa8Uq14SlF33FCAsPbDZVHp9bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-toast-4174244-hero-03-d9d005dc633f44889ba5385fe4ebe633.jpg";
      march[4] = "<h3>New FlexEat<sup>TM</sup> Menu offerings</h3>Healthy-Eatz and GCPR have curated even more delicious diet-friendly dining options. Try them out now at our resort restaurants.";
      march[5] = "";

      march[6] = "https://sustainival.com/wp-content/uploads/2017/03/bumper-car.jpg";
      march[7] = "<h3>&#127905; Ride Spotlight: Boardwalk Bumpers</h3>Get behind the wheel of a timeless classic and bump around for some delightful new fun!";
      march[8] = "https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/boardwalk-bumpers";

const april = [];
      april[3] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      april[4] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      april[5] = "";

      april[0] = "https://www.thespruceeats.com/thmb/dfa8Uq14SlF33FCAsPbDZVHp9bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-toast-4174244-hero-03-d9d005dc633f44889ba5385fe4ebe633.jpg";
      april[1] = "<h3>New FlexEat<sup>TM</sup> Menu offerings</h3>Healthy-Eatz and GCPR have curated even more delicious diet-friendly dining options. Try them out now at our resort restaurants.";
      april[2] = "";

      april[6] = "https://www.laughingplace.com/w/wp-content/uploads/2019/04/A-753.jpg";
      april[7] = "<h3>&#127905; Ride Spotlight: Old Yander's Mine Train</h3>Take a wild ride through the untamed frontier, where the untold treasures of the rustic gold mine await and chaos lurks around every turn.";
      april[8] = "";

const may = [];
      may[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      may[1] = "<h3>Adventure The Whole Year 'Round</h3>Before SummerFest<sup>TM</sup> officially begins, take your oppurtunity to purchase a resort Annual Passport and visit on over 230 days of the year, or all summer long!";
      may[2] = "https://gcparksandresorts.github.io/gcresorthighland/tickets/annualpassports";

      may[3] = "https://marinmagazine.com/wp-content/uploads/2021/07/08_2019__-DL.5727-scaled-1-770x514.jpg";
      may[4] = "<h3>The Start of SummerFest<sup>TM</sup></h3>The sun is rising on this year's SummerFest Celebration! There's lots of fun to be had here at the Globe-City Resort Highland this summer.";
      may[5] = "";

      may[6] = "https://mickeyvisit.com/wp-content/uploads/2022/04/mothersdaydisneyland.jpeg";
      may[7] = "<h3>Celebrating Mothers Everywhere</h3>This mother's day, treat your mom to some delectible treats and thrilling new eats made just for her with a trip to our Mother's day celebration at the resort!";
      may[8] = "";

const june = [];
      june[0] = "https://marinmagazine.com/wp-content/uploads/2021/07/08_2019__-DL.5727-scaled-1-770x514.jpg";
      june[1] = "<h3>Welcome to the SummerFest<sup>TM</sup> Celebration!</h3>Brand new entertainment, food offerings, merchandise and more have filled every corner of Adventure Park for a sunny summer you won't forget!";
      june[2] = "";

      june[3] = "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/06/20230619_Disney-Pride-Night_KMartinez_50.jpg";
      june[4] = "<h3>Globe-City Celebrates Pride!</h3>From all of us here at the resort: Happy Pride Month to all our LGBTQ+ adventurers! This year, we're happy to announce the first ever <b>Adventurous Night of Pride</b> special event! Click to learn more";
      june[5] = "https://gcparksandresorts.github.io/gcresorthighland/events/nights-of-pride";

      june[6] = "https://media.cnn.com/api/v1/images/stellar/prod/190705153928-millennium-force-rollercoaster-004.jpg?q=w_1600,h_900,x_0,y_0,c_fill";
      june[7] = "<h3>&#127905; Ride Spotlight: Touch the Sky</h3>Soar into summer at 60mph aboard this thrilling beach-side rollercoaster full of inversions, twists, turns, and a whole 'lotta fun!";
      june[8] = "";

const july = [];
      july[0] = "https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg";
      july[1] = "<h3>The Party's On at City-Shop</h3>Dazzling lights, high class shopping, and more! City-Shop is the hip destination everyone's talking about";
      july[2] = "";

      july[3] = "https://static.wixstatic.com/media/f7111f_4c766d7c897d4ba3a4a444d7792bc42c~mv2.jpg/v1/fill/w_640,h_360,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/f7111f_4c766d7c897d4ba3a4a444d7792bc42c~mv2.jpg";
      july[4] = "<h3>Celebrate the 4th In Style</h3>For the whole month of July, Adventure Park will feature special decorations and food offerings. On July 4th, expect a celebratory fireworks spectacular!";
      july[5] = "";

      july[6] = "https://i.ytimg.com/vi/W3Iip4Wxe2g/hqdefault.jpg";
      july[7] = "<h3>&#127905; Ride Spotlight: Journey to Atlantis</h3>As the summer heat stands strong, take a trip below the refreshing waves and visit the mystical lost city of Atlantis";
      july[8] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/journey-to-atlantis";

const august = [];
      august[0] = "https://noguiltdisney.com/wp-content/uploads/2022/09/sanderson-sisters-hocus-pocus-Disneyland-oogie-boogie-bash.jpg.webp";
      august[1] = "<h3>Gear Up for Halloween 2023</h3>The 2022 Halloween season is getting close! Get ready for dazzling in-park decorations and special Halloween themed events and specials at the resort!";
      august[2] = "https://gcparksandresorts.github.io/gcresorthighland/events/sallys-halloween-party";

      august[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      august[4] = "<h3>Last Call for SummerFest<sup>TM</sup>!</h3>The sun is beggining to set on GC's SummerFest Celebration! Visit the park now for some family friendly fun in the sun and stock up on memories until next season";
      august[5] = "https://gcparksandresorts.github.io/gcresorthighland/events/summerfest";

      august[6] = "https://premier-rides.com/wp-content/uploads/2016/06/Revenge_of_the_Mummy_compressed.jpg";
      august[7] = "<h3>&#127905; Ride Spotlight: Tomb of the Emperor's Curse</h3>Explore an abandonded tomb and find what treasures (and curses) lie within its stone walls";
      august[8] = "";

const september = [];
      september[0] = "https://disneydose.com/wp-content/uploads/halloween-time-scott-brinegardisneyland.jpg";
      september[1] = "<h3>👻 Halloween Has Entered the Station 👻</h3>As the fog rolls in, we're shaking with excitement and getting our treat bags ready for the Halloween Season!";
      september[2] = "https://gcparksandresorts.github.io/gcresorthighland/blog/events/halloween/9-9-23-halloween-at-the-globe-city-resort.html";

      september[3] = "https://s7d2.scene7.com/is/image/TWCNews/1025_n13_disney_springs_halloween_cookie_waffle_taco";
      september[4] = "<h3>New Spooky Treats Coming to Town &#127871</h3>Step into a world of frightful delights as we unleash the magic of Halloween into our menus throughout the resort!";
      september[5] = "https://gcparksandresorts.github.io/gcresorthighland/dining/seasonal/halloween-menu";

      september[6] = "https://www.usatoday.com/gcdn/presto/2022/10/27/USAT/9e7570ea-899d-4532-9611-aa2bdb139a2b-AFP_AFP_32LZ87R.jpg?crop=5567,3132,x0,y0&width=3200&height=1801&format=pjpg&auto=webp";
      september[7] = "<h3>Day of the Dead at Plaza Del Mexico</h3>Celebrate la Dia De Los Muertos at <a>Plaza Del Mexico</a> in Adventure Park with authentic latin-inspired live entertainment, characters, and food offerings. Now through October";
      september[8] = "https://gcparksandresorts.github.io/gcresorthighland/blog/events/halloween/9-10-23-dia-de-los-muertos";

const october = [];
      october[0] = "https://www.wdw-magazine.com/wp-content/uploads/2021/10/2021-oogie-boogie-bash_treat-trails_white-1.jpg";
      october[1] = "<h3>More Tricks Than Treats!</h3>Endulge in a Halloween classic with a twist, all month long! During <a href='https://gcparksandresorts.github.io/gcresorthighland/events/sallys-halloween-party'>Sally's Halloween After-Party</a>, trick-or-treat throughout the park equipped with a complimentary themed tote bag";
      october[2] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventurepark/attractions/seasonal/halloween/trick-or-treating";

      october[3] = "https://www.azcentral.com/gcdn/presto/2019/04/17/PPHX/2d57cc62-07ed-4659-8bc6-7f18cebc7a1b-Oogie_Boogie_Bash_Hero_Image.jpg?crop=2699,1518,x1,y207&width=1600&height=800&format=pjpg&auto=webp";
      october[4] = "<h3>Frightful Fun for the Family!</h3>Gather your friends and family and spend this Halloween screaming with delight at the Globe-City Resort Highland! Try our advanced <a>Itinerary Creator</a> to craft your perfect Spooky Adventure";
      october[5] = "blog/events/halloween/9-9-23-halloween-at-the-globe-city-resort.html";

      october[6] = "https://www.usatoday.com/gcdn/presto/2022/10/27/USAT/9e7570ea-899d-4532-9611-aa2bdb139a2b-AFP_AFP_32LZ87R.jpg?crop=5567,3132,x0,y0&width=3200&height=1801&format=pjpg&auto=webp";
      october[7] = "<h3>Day of the Dead at Plaza Del Mexico</h3>Celebrate la Dia De Los Muertos at <a>Plaza Del Mexico</a> in Adventure Park with authentic latin-inspired live entertainment, characters, and food offerings. Now through October";
      october[8] = "https://gcparksandresorts.github.io/gcresorthighland/blog/events/halloween/9-10-23-dia-de-los-muertos";

const november = [];
      november[0] = "https://eikhu9b6e94.exactdn.com/wp-content/uploads/2022/11/Disneyland-holiday-minnie-mickey-goofy-donald-daisy-new-costumes-2022.jpeg?strip=all&lossy=0&quality=80&webp=80&avif=80&ssl=1";
      november[1] = "<h3>Happy Holidays!</h3>Snow is beggining to fall on the Globe-City Resort Highland as we get into the wonderful holiday spirit!";
      november[2] = "https://gcparksandresorts.github.io/gcresorthighland/blog";

      november[3] = "https://preview.redd.it/w3qdq88z09e21.jpg?auto=webp&s=849ee48b06f5ee0dc08b320f1a4f4237e8425126";
      november[4] = "<h3>Thanksgiving at the Aztech Resort</h3>Spend your Thanksgiving dining under gorgeous chandeliers with live entertainment at the <a>Very Merry Thanksgiving Feast</a> hosted by the Aztech Resort.";
      november[5] = "https://gcparksandresorts.github.io/gcresorthighland/events/very-merry-thanksgiving-feast";

      november[6] = "https://content.api.news/v3/images/bin/e22c63f4a09424eb87386003dd43a90f";
      november[7] = "<h3>Give the Gift of Adventure</h3>This season, give the gift of an unforgettable Adventure with new affordable vacation packages at the Globe-City Resort!";
      november[8] = "https://gcparksandresorts.github.io/gcresorthighland/tickets/promotions";

const december = [];
      december[0] = "https://media.istockphoto.com/id/1166630631/photo/grandfather-and-grandson-amusement-park-fun.jpg?s=612x612&w=0&k=20&c=XDES5Q-NBO0QcpomzQw3oZXLarChJh4XNXRMQ5lHNHg=";
      december[1] = "<h3>Give the Gift of Together</h3>Make your holiday one to remember forever! Endulge your family in a deluxe vacation package for a wonderful winter vacation at an unbeatable price";
      december[2] = "https://gcparksandresorts.github.io/gcresorthighland/hotels#vacationPackages";

      december[3] = "https://i.ytimg.com/vi/6Fhr_dqNEB8/maxresdefault.jpg";
      december[4] = "<h3>A Holiday Foodie's Favorites</h3>Our Creative Culinary head chef, Ashley Franco, takes us on a tour of the wonderful holiday food and beverage options at Adventure Park";
      december[5] = "https://gcparksandresorts.github.io/gcresorthighland/blog/december/ashleys-foodie-tour";

      december[6] = "https://www.themeparkinsider.com/art/flume/8644.jpg";
      december[7] = "<h3>New Years at Adventure Park</h3>End this year in style at Adventure Park's annual <a>New Years Eve Celebration</a> complete with live entertainment, fireworks, and more!";
      december[8] = "https://gcparksandresorts.github.io/gcresorthighland/events";


// ------------------------------------------------------------------------------------------------------------------------------- MONTHS
const monthsNamed = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// ------------------------------------------------------------------------------------------------------------------------------- JAVASCRIPT
const mainBody = document.getElementById('resortSpotlightContainer');
const monthDisplay = document.getElementById('resortSpotlightDate');

const tdate = new Date();
vtdate = tdate.getMonth();

function createSpotlight(){

  // Display this month and the year
  let thisMonthNamed = monthsNamed[vtdate];
  monthDisplay.innerHTML = thisMonthNamed + " " + tdate.getFullYear();

  let temp = [];

  // Create the Spotlight
  switch(vtdate){
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

      mainBody.innerHTML = "<div class='spotlightTile' onclick='" + 'window.open("' + temp[2] + '");' + "'><img src='"+temp[0]+"'><div class='spotlightText'>"+temp[1]+"</div><br><br><a class='splink'>Learn More</a><br></div>";
      mainBody.innerHTML += "<div class='spotlightTile' onclick='" + 'window.open("' + temp[5] + '");' + "'><img src='"+temp[3]+"'><div class='spotlightText'>"+temp[4]+"</div><br><br><a class='splink'>Learn More</a><br></div>";
      mainBody.innerHTML += "<div class='spotlightTile' onclick='" + 'window.open("' + temp[8] + '");' + "'><img src='"+temp[6]+"'><div class='spotlightText'>"+temp[7]+"</div><br><br><a class='splink'>Learn More</a><br></div>";

  
}//end of function
