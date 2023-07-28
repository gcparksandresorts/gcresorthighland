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

  // Create the Spotlight
  switch(tdate.getMonth()){
    case 0:
      mainBody.innerHTML = "<div onclick='" + 'window.open("' + january[2] + '");' + "'><img src='"+january[0]+"'>"+january[1]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + january[5] + '");' + "'><img src='"+january[3]+"'>"+january[4]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + january[8] + '");' + "'><img src='"+january[6]+"'>"+january[7]+"<br></div>";
      break;
    case 1:
      mainBody.innerHTML = "<div onclick='" + 'window.open("' + february[2] + '");' + "'><img src='"+february[0]+"'>"+february[1]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + february[5] + '");' + "'><img src='"+february[3]+"'>"+february[4]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + february[8] + '");' + "'><img src='"+february[6]+"'>"+february[7]+"<br></div>";
      break;
    case 6:
      mainBody.innerHTML = "<div onclick='" + 'window.open("' + march[2] + '");' + "'><img src='"+march[0]+"'>"+march[1]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + march[5] + '");' + "'><img src='"+march[3]+"'>"+march[4]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + march[8] + '");' + "'><img src='"+march[6]+"'>"+march[7]+"<br></div>";
      break; 
    default:
      mainBody.innerHTML = "<div>Error Loading.<br><br>Please Try Again Later.";
  }// end of switch

  
}//end of function
