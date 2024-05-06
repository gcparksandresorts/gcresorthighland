// DESCRIPTION 
/* This document contains 1. The by-month text blocks to display over the Home Page video banner
                          2. The by-month images or video banners to display over the Home Page Video Banner
                          3. The script that assigns these things depending on the date
*/

// ------------------------------------------------------------------------------------------------------------------------------- TEXT DISPLAYS
const bannerTxtDisp = [];

  //General Use
  bannerTxtDisp[0] = "<h2>It's time to embark on a new Adventure</h2>Travel new roads and explore mystical worlds here at the Globe-City Resort Highland!<br><a href='#ttdSection'>Learn More</a>";

  // SummerFest
  bannerTxtDisp[1] = "<img src='webresources/images/logos/gcSummerFest.png' style='display:block; margin:auto; margin-bottom:15px; width:95%; max-width:400px; height:auto;'>Globe-City's Summer Fest<sup>TM</sup> is Here! Gather your family and friends and set forth on an adventure of a lifetime! \
                      From now until August 31st, Partake in the summer festivities and let your spirits soar as you create memories to cherish forever!  \
                      <br><a href='https://gcparksandresorts.github.io/gcresorthighland/events/summerfest'>View Special Event</a>";
  
  // Season of Light
  bannerTxtDisp[2] = "<h2>The Holidays Are Here</h2> Season of Light<sup>TM</sup> has returned! Immerse yourself in the holiday spirit, from enchanting light displays to heartwarming live performances. Bring your loved ones and create cherished memories as you share laughter, joy, and the true essence of the holidays. \
                      <br><a href='https://gcparksandresorts.github.io/gcresorthighland/events/season-of-light' >View Special Event</a>";

  // Spooky Season
  bannerTxtDisp[3] = "<h2>The Spookiest Season of All</h2>This Halloween, experience new frights, sights, and delights with the return of Sally's Halloween After-Party<sup>TM</sup>!<br><a href='https://gcparksandresorts.github.io/gcresorthighland/events/sallys-halloween-party' >View Special Event</a>";

  // New Years
  bannerTxtDisp[4] = "<h2>Welcome to the New Year</h2>This year, set fourth on new Adventures and create memories to cherish forever, only at the Globe-City Resort Highland!<br><a href='https://gcparksandresorts.github.io/gcresorthighland/tickets'>Buy Tickets</a>";


// ----------------------------------------------------------------------------------------------------------------------------- BANNER DISPLAYS


// ----------------------------------------------------------------------------------------------------------------------------- DISPLAY OBJECTS
const vidBannerTxtBox = document.getElementById("videoBannerTextBoxContent");
const videoBanner = document.getElementById("videoContainer");

var debugMonth = -1;


// ---------------------------------------------------------------------------------------------------------------------------------- JAVASCRIPT
const d = new Date();
var todayMonth = d.getMonth();

function setBannerDisplays(){
  switch(todayMonth){
      
    case 0:                               // January
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[4];
      videoBanner.innerHTML = "<img id='videoBanner' src='https://www.disneyholidays.co.uk/disneyland-paris/images/planning/mobile/new-years-eve-fireworks-hero-sleeping-beauty-castle.jpg'>";
      break;
    case 10:                              // November
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[2];
      videoBanner.innerHTML = "<img id='videoBanner' src='https://i.pinimg.com/originals/da/d6/33/dad6333674d70d671f80fa4a3d2a784f.gif'>";
      break;
    case 11:                              // December
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[2];
      videoBanner.innerHTML = "<img id='videoBanner' src='https://i.pinimg.com/originals/da/d6/33/dad6333674d70d671f80fa4a3d2a784f.gif'>";
      break;
    case 4:                               // May
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[0];
      videoBanner.innerHTML = "<video autoplay muted loop id='videoBanner' poster='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1Poster.png'><source src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1.mp4' type='video/mp4'> </video>";
      break;
    case 5:                               // June
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      videoBanner.innerHTML = "<img id='videoBanner' class='vidBanAnimated' src='https://i.imgur.com/7TY07oG.jpg'>";
      break;
    case 6:                               // July
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      videoBanner.innerHTML = "<img id='videoBanner' class='vidBanAnimated' src='https://i.imgur.com/7TY07oG.jpg'>";
      break;
    case 7:                               // August
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[0];
      videoBanner.innerHTML = "<img id='videoBanner' class='vidBanAnimated' src='https://i.imgur.com/7TY07oG.jpg'>";
      break;
    case 8:                               // September
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[3];
      videoBanner.innerHTML = "<img id='videoBanner' src='https://media0.giphy.com/media/pHoXs2uHHMenUq8AQA/giphy.gif'>";
      break;
    case 9:                               // October
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[3];
      videoBanner.innerHTML = "<img id='videoBanner' src='https://media0.giphy.com/media/pHoXs2uHHMenUq8AQA/giphy.gif'>";
      break;
    default:
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[0];
      videoBanner.innerHTML = "<video autoplay muted loop id='videoBanner' poster='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1Poster.png'><source src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1.mp4' type='video/mp4'> </video>";
      
  }//end switch

  console.log("Index Welcome Banner Set for Month" + todayMonth);
}//end setBannerDisp

function runDebug(){
  debugMonth = window.prompt("Enter a Numerical Value for the Month","1") - 1;
  if(debugMonth > 11 || debugMonth < 0){debugMonth = 0;}
  alert("Month set to: " + debugMonth);

  todayMonth = debugMonth;
  vtdate = debugMonth;
  curDate = debugMonth;
  createSpotlight();
  setBannerDisplays();
  decorateHeaderBar();
}
