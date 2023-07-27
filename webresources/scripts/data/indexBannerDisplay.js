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
                      Partake in the summer festivities and let your spirits soar as you create memories to cherish forever!<br><a href='#ttdSection' >View Special Event</a>";
  
  // Season of Light
  bannerTxtDisp[2] = "<h2>The Holidays Are Here!</h2>Season of Light has returned for a holiday full of sparkles, magic, and joy<br><a href='#ttdSection' >View Special Event</a>";

  // Spooky Season
  bannerTxtDisp[3] = "<h2>The Spookiest Season of All</h2>This Halloween, experience new frights, sights, and delights!<br><a href='#ttdSection' >View Special Event</a>";


// ----------------------------------------------------------------------------------------------------------------------------- BANNER DISPLAYS


// ----------------------------------------------------------------------------------------------------------------------------- DISPLAY OBJECTS
const vidBannerTxtBox = document.getElementById("videoBannerTextBoxContent");
const videoBanner = document.getElementById("videoContainer");


// ---------------------------------------------------------------------------------------------------------------------------------- JAVASCRIPT
const d = new Date();
const todayMonth = d.getMonth();

function setBannerDisplays(){
  switch(todayMonth){
      
    case 0:                               // January
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[2];
      break;
    case 10:                              // November
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[2];
      break;
    case 11:                              // December
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[2];
      break;
    case 4:                               // May
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      break;
    case 5:                               // June
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      break;
    case 6:                               // July
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      break;
    case 7:                               // August
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[1];
      break;
    case 8:                               // September
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[3];
      break;
    case 9:                               // October
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[3];
      break;
    default:
      vidBannerTxtBox.innerHTML =  bannerTxtDisp[0];
      
  }//end switch
}//end setBannerDisp
