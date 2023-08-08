// DESCRIPTION 
/* This document contains 1. The by-month text blocks to display over the Home Page video banner
                          2. The by-month images or video banners to display over the Home Page Video Banner
                          3. The script that assigns these things depending on the date
*/

// ------------------------------------------------------------------------------------------------------------------------------- TEXT DISPLAYS
const bannerTxtDisp = [];

  //General Use
  bannerTxtDisp[0] = "<h2>It's time to embark on a new Adventure!</h2>Travel new roads and explore mystical worlds here at the Globe-City Resort Highland!<br><a href='#ttdSection'>Learn More</a>";

  // SummerFest
  bannerTxtDisp[1] = "<h2>Globe-City's Summer Fest<sup>TM</sup> is Here!</h2>Gather your family and friends and set forth on an adventure of a lifetime! \
                      Partake in the summer festivities and let your spirits soar as you create memories to cherish forever!<br><a href='https://gcparksandresorts.github.io/gcresorthighland/events' >View Special Event</a>";
  
  // Season of Light
  bannerTxtDisp[2] = "<h2>The Holidays Are Here!</h2>Season of Light has returned for a holiday full of sparkles, magic, and joy<br><a href='#ttdSection' >View Special Event</a>";

  // Spooky Season
  bannerTxtDisp[3] = "<h2>The Spookiest Season of All</h2>This Halloween, experience new frights, sights, and delights with the return of Sally's Halloween After-Party<sup>TM</sup>!<br><a href='#ttdSection' >View Special Event</a>";


// ----------------------------------------------------------------------------------------------------------------------------- BANNER DISPLAYS


// ----------------------------------------------------------------------------------------------------------------------------- DISPLAY OBJECTS
var vidBannerTxtBox = document.getElementById("videoBannerTextBoxContent");
var videoBanner = document.getElementById("videoContainer");

var debugMonth = -1;


// ---------------------------------------------------------------------------------------------------------------------------------- JAVASCRIPT
const d = new Date();
var todayMonth = d.getMonth();

function setBannerDisplays(){
  switch(todayMonth){
      
    case 0:                               // January
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[2];
      videoBanner.innerHTML = "<img id='videoBanner' src='https://i.pinimg.com/originals/da/d6/33/dad6333674d70d671f80fa4a3d2a784f.gif'>";
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
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      videoBanner.innerHTML = "<video autoplay muted loop id='videoBanner' poster='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1Poster.png'><source src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1.mp4' type='video/mp4'> </video>";
      break;
    case 5:                               // June
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      videoBanner.innerHTML = "<video autoplay muted loop id='videoBanner' poster='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1Poster.png'><source src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1.mp4' type='video/mp4'> </video>";
      break;
    case 6:                               // July
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      videoBanner.innerHTML = "<video autoplay muted loop id='videoBanner' poster='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1Poster.png'><source src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1.mp4' type='video/mp4'> </video>";
      break;
    case 7:                               // August
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[0];
      videoBanner.innerHTML = "<video autoplay muted loop id='videoBanner' poster='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1Poster.png'><source src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/video/vidBanner1.1.mp4' type='video/mp4'> </video>";
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
      videoBanner.innerHTML = "<img id='videoBanner' src='https://media0.giphy.com/media/pHoXs2uHHMenUq8AQA/giphy.gif'>";
      
  }//end switch
}//end setBannerDisp

function runDebug(){
  debugMonth += 1;
  if(debugMonth > 11){debugMonth = 0;}
  alert("Month set to: " + debugMonth);

  todayMonth = debugMonth;
  setBannerDisplays();
}
