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
      mainBody.innerHTML = "";
      break;
    case 1;
      break;
  }// end of switch

  
}
