// ---------------------------------------------------------------------------- TICKET PRICING  -------------------------------------------------------------------------------------------------
ticketPrice = [];

ticketPrice[0] = "Oras Nou Resident Admission | 75,75,85,95,109";
ticketPrice[1] = "General Admission | 85,85,95,109,110";
ticketPrice[2] = "GC VIP Bronze Admission | 130,150,165,175,199";
ticketPrice[3] = "GC VIP Silver Admission | 150,180,199,210, 299";
ticketPrice[4] = "GC VIP Gold Admission | 189,199,265,275,399";
ticketPrice[5] = "GC VIP Deluxe Admission | 215,265,299,350,399";

ticketPrice[6] = "Sally's Halloween Party Admission | 59, 69";
ticketPrice[7] = "Adventurous Nights of Pride Admission | 55";
ticketPrice[8] = "Adventure EVE Nighttime Admission | 45";
  
// ------------------------------------------------------------------------------ PARK HOURS  ---------------------------------------------------------------------------------------------------
parkHoursList = []; // Adventure Park : CityShop : Special Event

parkHoursList[0] = "Park Closed | 11:00AM - 9:00PM";
parkHoursList[1] = "10:00 AM - 6:00 PM | 11:00 AM - 10:00 PM";
parkHoursList[2] = "10:00 AM - 8:00 PM | 11:00 AM - 11:00 PM";
parkHoursList[3] = "10:00 AM - 10:00 PM | 11:00 AM - 11:00 PM";
parkHoursList[4] = "10:00 AM - 11:00 PM | 11:00 AM - 12:00 AM";
parkHoursList[5] = "9:00 AM - 11:00 PM | 11:00 AM - 12:00 AM";
parkHoursList[6] = "10:00 AM - 7:00 PM | 11:00 AM - 10:00 PM | 6:00 PM - 12:00 AM"; // Special Event
parkHoursList[7] = "10:00 AM - 8:00 PM | 11:00 AM - 10:00 PM | 7:00 PM - 1:00 AM"; // Special Event
parkHoursList[8] = "10:00AM - 1:00AM | 10:00AM - 1:00AM | 7:00PM - 1:00AM"; // Adventure Eve Hours

parkHoursList[12] = "Park Closed | Closed"; // Really bad weather




// ------------------------------------------------------------------------------ ENTERTAINMENT -------------------------------------------------------------------------------------------------
entertainmentList = []; // Name | Hours | Image_Link | Click_Link ||  Name | Hours | Image_Link | Click_Link || ...
// entertainmentList[N] = "Name | Hours | Image_link | click_link";

entertainmentList[0] = "No Shows Today";

// Standard Entertainment
entertainmentList[1] = "Globe-City Marching Band | 12:15PM, 2:15PM, 3:30PM, 4:30PM | https://brettalan.com/wp-content/uploads/2019/01/00004-Grossmont-District-Showcase-2018-D7A_5349.jpg | https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park/entertainment/gc-marching-band";
entertainmentList[2] = "Character Greetings | Daily | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/banner5.jpg | https://gcparksandresorts.github.io/gcresorthighland/attractions";
entertainmentList[3] = "Drummers of the Mandahari | 12:30PM, 1:30PM, 3:30PM, 5:00PM | https://drummingreview.com/wp-content/uploads/2023/02/History-of-Taiko-Drumming.webp | https://gcparksandresorts.github.io/gcresorthighland/attractions";
entertainmentList[4] = "Renee and Company @ The Plaza | 3:10PM, 4:30PM, 6:10PM | https://insidethemagic.net/wp-content/uploads/2021/09/916C6948-5A05-4B5A-8179-A89590AEC71E.jpeg | https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/entertainment/renee-and-company";

// SummerFest Entertainment
entertainmentList[5] = "Summers to Remember Forever | 9:30PM | https://www.tripsavvy.com/thmb/QUGooCRqxcg7uCB_oIVdZpaMumU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12_2018_DL.2342-a4227ae6881c4341a1f1528aafa3360c.jpg | https://gcparksandresorts.github.io/gcresorthighland/events/summerfest";
entertainmentList[6] = "La Musicas De Mariachi | 12:00PM, 1:00PM, 2:00PM, 5:00PM | https://www.alleytheatre.org/app/uploads/2023/07/Mariachi-Day-1200x834.jpg.webp | https://gcparksandresorts.github.io/gcresorthighland/events/summerfest";
entertainmentList[7] = "SummerFest Boulevard Blast | 8:30PM | https://ca-times.brightspotcdn.com/dims4/default/45c1555/2147483647/strip/true/crop/1943x2473+0+0/resize/1200x1527!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F04%2Fb4%2Ffb9962a343e08aedcb38689444f4%2Fmsep-encantofloat.jpg | https://gcparksandresorts.github.io/gcresorthighland/events/summerfest"; 

// Halloween Entertainment
entertainmentList[8] = "Villanous Dance Party | 7:45PM, 11:45PM | https://i.ytimg.com/vi/R5i5_-hpaws/maxresdefault.jpg | click_link";
entertainmentList[9] = "Sally's Spooktacular Fireworks | 10:30PM | https://i.ytimg.com/vi/uhGhwinM78o/maxresdefault.jpg | https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/seasonal/entertainment/sallys-spooktacular-fireworks";
entertainmentList[10] = "Witchy Beats and Halloween Treats | 8:45PM 9:45PM 11:15PM | https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/events/halloween/entertainment/0816ZS_1291CMG-1_R-_mm-16x9.jpg?2022-04-21T17:44:42+00:00 | https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/seasonal/entertainment/witch-sisters-musical";
entertainmentList[11] = "Dia De Los Muertos Entertainment | Every 30min from 11:00AM | https://www.usatoday.com/gcdn/presto/2022/10/27/USAT/9e7570ea-899d-4532-9611-aa2bdb139a2b-AFP_AFP_32LZ87R.jpg?crop=5567,3132,x0,y0&width=3200&height=1801&format=pjpg&auto=webp | https://gcparksandresorts.github.io/gcresorthighland/blog/events/halloween/9-10-23-dia-de-los-muertos";
entertainmentList[12] = "Halfway to Halloween, Featuring the Witch Sisters | 7:00PM 9:00PM | https://d23.com/app/uploads/2015/09/1180-x-600-092415_hocus-pocus-comes-to-wdw_v2-780x440.jpg | https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/seasonal/entertainment/halfway-to-halloween";

// Holiday Entertainment
entertainmentList[13] = "Spirit of the Holidays Spectacular | 9:30PM | https://live.staticflickr.com/3745/12000287585_b5d37d5e81_b.jpg | https://gcparksandresorts.github.io/gcresorthighland/attractions/adventure-park/seasonal/spirit-of-the-holidays";
entertainmentList[14] = "Dance of the Winter Fairies | 12:00PM, 1:00PM, 2:00PM, 4:00PM, 5:00PM | https://www.universalbeijingresort.com/sites/default/files/2021-09/Triwizard%20Spirit%20Rally2.jpg | click_link";
entertainmentList[15] = "Season of Snow Cavalcade | 6:00PM, 8:00PM | https://decider.com/wp-content/uploads/2022/12/disney-christmas-day-parade-1.jpg?quality=75&strip=all | click_link";
entertainmentList[16] = "Yander's Boom-Town Boogie | 3:00PM, 5:00PM, 7:00PM | https://pbs.twimg.com/media/FZf7mP_XEAYeX90?format=jpg&name=4096x4096 | ../attractions/adventure-park/seasonal/entertainment/holiday-boom-town-boogie ";

// Special Entertainiment
entertainmentList[18] = "Fourth of July Fireworks | 9:30 PM | Image_link | click_link";
entertainmentList[19] = "Founder's Day Fireworks | 8:30 PM | https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2022/06/764/432/GettyImages-1402978807.jpg?ve=1&tl=1 | https://gcparksandresorts.github.io/gcresorthighland/blog/events/05-30-Founders-Day#fireworks";
entertainmentList[20] = "Friday the 13th Entertainment | All Day | https://itsastampede615821596.files.wordpress.com/2019/07/friday-13th-3d.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/posts/events/10-13-2023-Friday-the-13";
entertainmentList[21] = "New Year's Celebration Entertainment | Starts at 8:00PM | https://metro.co.uk/wp-content/uploads/2021/12/GettyImages-1155981852.jpg?quality=90&strip=all | https://gcparksandresorts.github.io/gcresorthighland/events/adventure-eve.html";
entertainmentList[22] = "Adventure EVE New Year's Review and Countdown | 11:30PM | https://attractionsmagazine.com/wp-content/uploads/2022/12/EVE-at-Universal-Studios-Hollywood-Fireworks-Image-courtesy-fo-Universal-Studios-Hollywood.jpeg | https://gcparksandresorts.github.io/gcresorthighland/events/adventure-eve.html";
entertainmentList[23] = "Forever in Love Fireworks | 8:00PM | https://static.wixstatic.com/media/7130b7_7a0803c9de354c01b61b1e7399fe573f~mv2.jpg/v1/fill/w_640,h_524,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7130b7_7a0803c9de354c01b61b1e7399fe573f~mv2.jpg | click-link";
entertainmentList[24] = "Mardi Gras Cast Parade | 3:15 PM | https://media.wdwnt.com/2023/02/02_Universals-Mardi-Gras-Parade.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/events/2024-mardi-gras";



// ------------------------------------------------------------------------------ SPECIAL EVENTS ------------------------------------------------------------------------------------------------
eventList = []; // Name | Hours (or 'special event') | Image_Link | Click_Link ||  Name | Hours (or 'special event') | Image_Link | Click_Link || ...
// eventList[N] = "name | hours | image_link | click_link";

eventList[0] = "No Events Today";
eventList[1] = "RMember Admission Discounts | Promotion | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/banner4.jpg | www.google.com";
eventList[3] = "Passholder Preview Day | Special Event | https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/uor-universal-annual-passholder-friends-shopping-a.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/posts/seasonal/halloween-at-the-resort";

// JUNE PRIDE EVENTS
eventList[4] = "Globe-City Celebrates Pride | Special Event | https://insidethemagic.net/wp-content/uploads/2023/04/Pride-Nite-1.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/posts/seasonal/pride";
eventList[5] = "Adventurous Nights of Pride | Special Event | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/nop.jpg | https://gcparksandresorts.github.io/gcresorthighland/events/nights-of-pride";

eventList[6] = "SummerFest Celebration | Special Event | https://cpfoodblog.com/wp-content/uploads/2019/06/2019-Knotts-Summer-Nights-Smores.jpg | https://gcparksandresorts.github.io/gcresorthighland/events/summerfest";
eventList[7] = "Fourth of July Celebration | Special Event | image_link | click_link";


eventList[8] = "Halloween at the Globe-City Resort Highland | Seasonal Event | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/halloween02.png | https://gcparksandresorts.github.io/gcresorthighland/blog/events/halloween/9-9-23-halloween-at-the-globe-city-resort.html";
eventList[9] = "Sally's Halloween Party | 7:00 PM to 12:00 AM | https://www.azcentral.com/gcdn/presto/2019/04/17/PPHX/2d57cc62-07ed-4659-8bc6-7f18cebc7a1b-Oogie_Boogie_Bash_Hero_Image.jpg?crop=2699,1518,x1,y207&width=1600&height=800&format=pjpg&auto=webp | https://gcparksandresorts.github.io/gcresorthighland/events/sallys-halloween-party";
eventList[10] = "Friday the 13th | Special Event | https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/Friday-the-13th-feature.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/posts/events/10-13-2023-Friday-the-13";
eventList[11] = "Halfway to Halloween Celebration | Special Event | https://spirit.scene7.com/is/image/Spirit/Halfway%20to%20Halloween?$fullsize1200$ | blog/events/halloween/10-15-23-halfway-to-halloween.html";

eventList[12] = "Globe-City's Season of Light Celebration | Seasonal Event | https://orangecoast.com/.image/t_share/MTk3NjY1NTgxNDc0MjYwMjY5/mickey-mouse-and-his-pals-don-their-holiday-finest-at-disneyland-park.jpg | https://gcparksandresorts.github.io/gcresorthighland/events/season-of-light";
eventList[13] = "Thanksgiving at the Resort | Seasonal Event | https://thehappiestblogonearth.com/wp-content/uploads/2019/09/Mickey-and-Minnie-Thanksgiving.jpg | blog";
eventList[14] = "The Aztech Resort Thanksgiving Feast | Dinner Event | https://i0.wp.com/www.freshbakeddisney.com/wp-content/uploads/2014/11/dlh310231LARGE.jpg?fit=900%2C457&ssl=1 | click_link";
eventList[15] = "Painter Family Holiday Tree Lighting Ceramony | Begins at 7:00PM | https://disneylandparis-news.com/app/uploads/2022/06/N015878-scaled.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/events/season-of-light/11-17-23-painter-family-tree-lighting";
eventList[16] = "Adventure Eve | 7PM to 1AM | https://www.ocregister.com/wp-content/uploads/2022/11/LDN-L-UNIVERSAL-NYE-1201.jpg?w=1024 | https://gcparksandresorts.github.io/gcresorthighland/events/adventure-eve";

eventList[17] = "";
eventList[18] = "Spring Break Fever! | Special Event | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/vipBanner1.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/events/03-01-spring-break-fever";
eventList[19] = "Season of Light Closing Celebration | Special Event | https://www.micechat.com/wp-content/uploads/2021/12/Disneyland-Christmas-Castle-Fireworks-micechat.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/events/season-of-light/01-07-sol-closing-celebration";
eventList[20] = "Founder's Day | Special Event | https://yt3.googleusercontent.com/ytc/AOPolaS7pVowyT8MlEB1s-pJaiDaJJYuyIrdg4ZpoR1dWwY=s900-c-k-c0x00ffffff-no-rj | https://gcparksandresorts.github.io/gcresorthighland/blog/events/05-30-Founders-Day";
eventList[21] = "Valentines Day | Special Event | https://www.micechat.com/wp-content/uploads/2022/01/Disneyland-Valentines-Day-Baby-Yoda.jpg | click-link";
eventList[22] = "Mardi Gras at Adventure Park | Special Event | https://cdn.tripster.com/travelguide/wp-content/uploads/los-angeles-california-usa-Disneyland-New-Orleans-Square-Decorations-Mardi-Gras.jpeg | https://gcparksandresorts.github.io/gcresorthighland/blog/events/2024-mardi-gras";
eventList[23] = "Saturday Nightz at City-Shop | 9:00 PM to 12:00 AM | https://static.wixstatic.com/media/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg/v1/fill/w_600,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8006c1_a8db5520415c4e5b873999954f9da136~mv2.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/entertainment/03-01-2024-Saturday-Nightz";


//eventList[10] = "name | hours | image_link | click_link";
eventList[99] = "name | hours | image_link | click_link";


dateTierList = [];
//Month_# - DAY - TIER - Entertainment - Events
//                        Entertainment: 1, 2, 3 etc. Each num adds a different show to the list
//                        Events: 1, 2, 3, etc. Each num adds a different event to the list
// ------------------------------------------------------------------------------ PASTE BELOW THIS LINE -----------------------------------------------------------------------------------------
dateTierList[0] = "January 1 - Monday - 3 - 13,14,16 - 12"; //New Years Day
dateTierList[1] = "January 2 - Tuesday - 4 - 13,14,15,16 - 12";
dateTierList[2] = "January 3 - Wednesday - 4 - 13,14,15,16 - 12";
dateTierList[3] = "January 4 - Thursday - 4 - 13,14,15,16 - 12";
dateTierList[4] = "January 5 - Friday - 4 - 13,14,15,16 - 12";
dateTierList[5] = "January 6 - Saturday - 5 - 13,14,15,16 - 12";
dateTierList[6] = "January 7 - Sunday - 5 - 13,14,15,16 - 12,19"; // Last day of season of light
dateTierList[7] = "January 8 - Monday - 1 - 0 - 0";
dateTierList[8] = "January 9 - Tuesday - 1 - 0 - 0";
dateTierList[9] = "January 10 - Wednesday - 1 - 0 - 0";
dateTierList[10] = "January 11 - Thursday - 2 - 1,2 - 1";
dateTierList[11] = "January 12 - Friday - 2 - 1,2,3 - 1";
dateTierList[12] = "January 13 - Saturday - 3 - 1,2,3 - 1";
dateTierList[13] = "January 14 - Sunday - 2 - 1,2,3 - 1";
dateTierList[14] = "January 15 - Monday - 0 - 0 - 1";
dateTierList[15] = "January 16 - Tuesday - 0 - 0 - 1";
dateTierList[16] = "January 17 - Wednesday - 0 - 0 - 1";
dateTierList[17] = "January 18 - Thursday - 0 - 1,2 - 1";
dateTierList[18] = "January 19 - Friday - 2 - 1,2 - 1";
dateTierList[19] = "January 20 - Saturday - 2 - 1,2 - 1";
dateTierList[20] = "January 21 - Sunday - 2 - 1,2 - 1";
dateTierList[21] = "January 22 - Monday - 0 - 0 - 1";
dateTierList[22] = "January 23 - Tuesday - 0 - 0 - 1";
dateTierList[23] = "January 24 - Wednesday - 0 - 0 - 1";
dateTierList[24] = "January 25 - Thursday - 0 - 0 - 1";
dateTierList[25] = "January 26 - Friday - 0 - 0 - 1";
dateTierList[26] = "January 27 - Saturday - 0 - 0 - 1";
dateTierList[27] = "January 28 - Sunday - 0 - 0 - 1";
dateTierList[28] = "January 29 - Monday - 0 - 0 - 1";
dateTierList[29] = "January 30 - Tuesday - 0 - 0 - 1";
dateTierList[30] = "January 31 - Wednesday - 0 - 0 - 1";
dateTierList[31] = "February 1 - Thursday - 0 - 0 - 1";
dateTierList[32] = "February 2 - Friday - 0 - 0 - 1";
dateTierList[33] = "February 3 - Saturday - 2 - 1,2,3 - 1";
dateTierList[34] = "February 4 - Sunday - 2 - 1,2,3 - 1";
dateTierList[35] = "February 5 - Monday - 12 - 0 - 1"; //Beggining of severe storm
dateTierList[36] = "February 6 - Tuesday - 12 - 0 - 1";
dateTierList[37] = "February 7 - Wednesday - 12 - 0 - 1"; //End of severe storm
dateTierList[38] = "February 8 - Thursday - 0 - 0 - 1";
dateTierList[39] = "February 9 - Friday - 0 - 0 - 1";
dateTierList[40] = "February 10 - Saturday - 0 - 0 - 1";
dateTierList[41] = "February 11 - Sunday - 0 - 0 - 1";
dateTierList[42] = "February 12 - Monday - 0 - 0 - 1";
dateTierList[43] = "February 13 - Tuesday - 2 - 2,1,24 - 22"; // Mardi Gras !!
dateTierList[44] = "February 14 - Wednesday - 2 - 1,2,23 - 1,21"; //Valentines Day
dateTierList[45] = "February 15 - Thursday - 0 - 0 - 0";
dateTierList[46] = "February 16 - Friday - 0 - 0 - 0";
dateTierList[47] = "February 17 - Saturday - 3 - 1,2,3 - 1"; // Presidents Weekend
dateTierList[48] = "February 18 - Sunday - 4 - 1,2,3 - 1";
dateTierList[49] = "February 19 - Monday - 4 - 1,2,3 - 1"; // Presidents Day
dateTierList[50] = "February 20 - Tuesday - 12 - 0 - 0";
dateTierList[51] = "February 21 - Wednesday - 0 - 0 - 0";
dateTierList[52] = "February 22 - Thursday - 0 - 0 - 0";
dateTierList[53] = "February 23 - Friday - 0 - 0 - 0";
dateTierList[54] = "February 24 - Saturday - 0 - 0 - 0";

dateTierList[55] = "February 25 - Sunday - 0 - 0 - 0";
dateTierList[56] = "February 26 - Monday - 0 - 0 - 0";
dateTierList[57] = "February 27 - Tuesday - 0 - 0 - 0";
dateTierList[58] = "February 28 - Wednesday - 0 - 0 - 0";
dateTierList[59] = "February 29 - Thursday - 0 - 0 - 0";
dateTierList[60] = "March 1 - Friday - 0 - 1,2,4 - 0";
dateTierList[61] = "March 2 - Saturday - 3 - 1,2,3,4 - 1,23"; // First Saturday Nightz Event
dateTierList[62] = "March 3 - Sunday - 0 - 1,2,3,4 - 0";
dateTierList[63] = "March 4 - Monday - 0 - 0 - 0";
dateTierList[64] = "March 5 - Tuesday - 0 - 2 - 1";
dateTierList[65] = "March 6 - Wednesday - 0 - 2 - 1";
dateTierList[66] = "March 7 - Thursday - 0 - 2 - 1";
dateTierList[67] = "March 8 - Friday - 0 - 1,2,4 - 1,18";
dateTierList[68] = "March 9 - Saturday - 3 - 1,2,3,4 - 1,18,23";// SN //Minor University Breaks
dateTierList[69] = "March 10 - Sunday - 4 - 1,2,3,4 - 1,18";
dateTierList[70] = "March 11 - Monday - 2 - 1,2,3 - 1,18";
dateTierList[71] = "March 12 - Tuesday - 2 - 1,2,3 - 1,18";
dateTierList[72] = "March 13 - Wednesday - 1 - 1,2,4 - 1,18";
dateTierList[73] = "March 14 - Thursday - 1 - 1,2,3 - 1,18";
dateTierList[74] = "March 15 - Friday - 3 - 1,2,3,4 - 1,18";
dateTierList[75] = "March 16 - Saturday - 5 - 1,2,3,4 - 1,18,23"; //SN //COMMUNITY COLLEGE SPRING BREAK START
dateTierList[76] = "March 17 - Sunday - 2 - 1,2,3,4 - 1,18";
dateTierList[77] = "March 18 - Monday - 2 - 1,2,3,4 - 1,18";
dateTierList[78] = "March 19 - Tuesday - 2 - 1,2,3 - 1,18";
dateTierList[79] = "March 20 - Wednesday - 2 - 1,2,3 - 1,18";
dateTierList[80] = "March 21 - Thursday - 2 - 1,2,4 - 1,18";
dateTierList[81] = "March 22 - Friday - 3 - 1,2,3,4 - 1,18";
dateTierList[82] = "March 23 - Saturday - 5 - 1,2,3,4,6 - 1,18,23"; //SN ONUSD SPRING BREAK START
dateTierList[83] = "March 24 - Sunday - 4 - 1,2,3,4,6 - 1,18"; 
dateTierList[84] = "March 25 - Monday - 3 - 1,2,3 - 1,18";
dateTierList[85] = "March 26 - Tuesday - 4 - 1,2,3,6 - 1,18";
dateTierList[86] = "March 27 - Wednesday - 3 - 1,2,3,6 - 1,18";
dateTierList[87] = "March 28 - Thursday - 4 - 1,2,3,4,6 - 1,18";
dateTierList[88] = "March 29 - Friday - 5 - 1,2,3,4,6 - 1,18";
dateTierList[89] = "March 30 - Saturday - 5 - 1,2,3,4,6 - 1,18,23";// Last Saturday Nightz
dateTierList[90] = "March 31 - Sunday - 4 - 1,2,3,4 - 1,18"; //ONUSD SPRING BREAK END










