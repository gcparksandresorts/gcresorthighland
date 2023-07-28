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
      january[0] = "https://dummyimage.com/640x360/fff/aaa";
      january[1] = "<h3>Season of Light Continues</h3>Globe-City's Season of Light<sup>TM</sup> celebration isn't over yet, Visit before time runs out!";
      january[2] = "https://www.youtube.com/watch?v=ja1sXvNCyO0&ab_channel=FunnyCatsLife";

      january[3] = "https://dummyimage.com/640x360/fff/aaa";
      january[4] = "<h3>Season Passes on Sale</h3>As the holiday season wraps up, now is a good time to buy an annual pass and extend your adventure";
      january[5] = "https://www.youtube.com/watch?v=ja1sXvNCyO0&ab_channel=FunnyCatsLife";

      january[6] = "https://dummyimage.com/640x360/fff/aaa";
      january[7] = "<h3>Happy New Year!</h3>From all of us here at the resort, may this year be full of fun and new adventures <3";
      january[8] = "https://www.youtube.com/watch?v=ja1sXvNCyO0&ab_channel=FunnyCatsLife";

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
    case 6:
      mainBody.innerHTML = "<div onclick='" + 'window.open("' + january[2] + '","_self");' + "'><img src='"+january[0]+"'>"+january[1]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + january[5] + '","_self");' + "'><img src='"+january[3]+"'>"+january[4]+"<br></div>";
      mainBody.innerHTML += "<div onclick='" + 'window.open("' + january[8] + '","_self");' + "'><img src='"+january[6]+"'>"+january[7]+"<br></div>";
      break;
    case 1:
      break;
    default:
      mainBody.innerHTML = "<div>Error Loading.<br><br>Please Try Again Later.";
  }// end of switch

  
}//end of function
