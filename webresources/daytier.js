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

parkHoursList[0] = "Error in Retrieval | Error in Retrieval";
parkHoursList[1] = "10:00 AM - 6:00 PM | 11:00 AM - 10:00 PM";
parkHoursList[2] = "10:00 AM - 8:00 PM | 11:00 AM - 11:00 PM";
parkHoursList[3] = "10:00 AM - 10:00 PM | 11:00 AM - 11:00 PM";
parkHoursList[4] = "10:00 AM - 11:00 PM | 11:00 AM - 12:00 AM";
parkHoursList[5] = "9:00 AM - 11:00 PM | 11:00 AM - 12:00 AM";
parkHoursList[6] = "10:00 AM - 7:00 PM | 11:00 AM - 10:00 PM | 6:00 PM - 12:00 AM"; // Special Event
parkHoursList[7] = "10:00 AM - 8:00 PM | 11:00 AM - 10:00 PM | 7:00 PM - 1:00 AM"; // Special Event
parkHoursList[8] = "10:00AM - 1:00AM | 10:00AM - 1:00AM | 7:00PM - 1:00AM"; // Adventure Eve Hours



// ------------------------------------------------------------------------------ ENTERTAINMENT -------------------------------------------------------------------------------------------------
entertainmentList = []; // Name | Hours | Image_Link | Click_Link ||  Name | Hours | Image_Link | Click_Link || ...
// entertainmentList[N] = "Name | Hours | Image_link | click_link";

entertainmentList[0] = "No Shows Today";

// Standard Entertainment
entertainmentList[1] = "Globe-City Marching Band | 12:00PM, 2:00PM, 3:00PM, 4:00PM | https://brettalan.com/wp-content/uploads/2019/01/00004-Grossmont-District-Showcase-2018-D7A_5349.jpg | https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park/entertainment/gc-marching-band";
entertainmentList[2] = "Character Greetings | Daily | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/banner5.jpg | https://gcparksandresorts.github.io/gcresorthighland/attractions";
entertainmentList[3] = "Drummers of the Mandahari | 12:30PM, 1:30PM, 3:30PM, 5:00PM, 6:00PM | https://drummingreview.com/wp-content/uploads/2023/02/History-of-Taiko-Drumming.webp | https://gcparksandresorts.github.io/gcresorthighland/attractions";
entertainmentList[4] = "";

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
eventList[18] = "";
eventList[19] = "Season of Light Closing Celebration | Special Event | https://www.micechat.com/wp-content/uploads/2021/12/Disneyland-Christmas-Castle-Fireworks-micechat.jpg | https://gcparksandresorts.github.io/gcresorthighland/blog/events/season-of-light/01-07-sol-closing-celebration";
eventList[20] = "Founder's Day | Special Event | https://yt3.googleusercontent.com/ytc/AOPolaS7pVowyT8MlEB1s-pJaiDaJJYuyIrdg4ZpoR1dWwY=s900-c-k-c0x00ffffff-no-rj | https://gcparksandresorts.github.io/gcresorthighland/blog/events/05-30-Founders-Day";

//eventList[10] = "name | hours | image_link | click_link";
eventList[99] = "name | hours | image_link | click_link";


dateTierList = [];
//Month_# - DAY - TIER - Entertainment - Events
//                        Entertainment: 1, 2, 3 etc. Each num adds a different show to the list
//                        Events: 1, 2, 3, etc. Each num adds a different event to the list
// ------------------------------------------------------------------------------ PASTE BELOW THIS LINE -----------------------------------------------------------------------------------------
dateTierList[0] = "May 30 - Thursday - 3 - 1,2,3,19 - 20"; // Thursday, May 30th
dateTierList[1] = "January 98 - Tuesday - 1 - 1 - 1"; // Tuesday, January 2st
dateTierList[2] = "January 99 - Wednesday - 1 - 1 - 1"; // Wednesday, January 3st
dateTierList[3] = "January 96 - Thursday - 1 - 1 - 1"; // Thursday, January 4st
dateTierList[4] = "August 24 - Thursday - 1 - 1 - 1"; // Thursday, January 4st
dateTierList[5] = "August 25 - Friday - 1 - 1 - 1"; // Thursday, January 4st
dateTierList[6] = "August 28 - Monday - 7 - 1 - 1"; // Thursday, January 4st
dateTierList[7] = "August 29 - Tuesday - 0 - 1 - 1"; // Thursday, January 4st
dateTierList[8] = "August 30 - Wednesday - 0 - 3 - 2"; // Thursday, January 4st
dateTierList[9] = "September 3 - Sunday - 6 - 0 - 2"; // Thursday, January 4st
dateTierList[10] = "September 4 - Monday - 4 - 1 - 3"; // Thursday, January 4st
dateTierList[11] = "September 5 - Tuesday - 0 - 0 - 3"; // Thursday, January 4st
dateTierList[12] = "September 6 - Wednesday - 0 - 0 - 3"; // Thursday, January 4st
dateTierList[13] = "September 7 - Thursday - 0 - 0 - 3"; // Thursday, January 4st
dateTierList[14] = "September 9 - Saturday - 3 - 1 - 3"; // Thursday, January 4st
dateTierList[15] = "September 10 - Sunday - 2 - 1 - 3"; // Thursday, January 4st
dateTierList[16] = "September 11 - Monday - 0 - 1,2,3 - 1,8"; // Thursday, January 4st
dateTierList[17] = "September 12 - Tuesday - 6 - 1,2,8,9,10 - 1,8,9"; // Thursday, January 4st
dateTierList[18] = "September 13 - Wednesday - 6 - 1,2,8,9,10 - 1,8,9"; // Thursday, January 4st
dateTierList[19] = "September 14 - Thursday - 6 - 1,2,8,9,10 - 1,8,9"; // Thursday, January 4st
dateTierList[20] = "September 15 - Friday - 3 - 1,3,11 - 1,8"; // Thursday, January 4st
dateTierList[21] = "September 16 - Saturday - 4 - 1,11,3 - 1,8"; // Thursday, January 4st
dateTierList[22] = "September 17 - Sunday - 3 - 1,11,3 - 1,8"; // Thursday, January 4st
dateTierList[23] = "September 18 - Monday - 1 - 2,11 - 1,8"; // Thursday, January 4st
dateTierList[24] = "September 19 - Tuesday - 6 - 8,9,10 - 1,8,9"; // Thursday, January 4st
dateTierList[25] = "September 20 - Wednesday - 6 - 8,9,10 - 1,8,9"; // Thursday, January 4st
dateTierList[26] = "September 21 - Thursday - 6 - 8,9,10 - 1,8,9"; // Thursday, January 4st
dateTierList[27] = "September 22 - Friday - 2 - 1,2,11,3 - 1,8"; // Thursday, January 4st
dateTierList[28] = "September 23 - Saturday - 4 - 1,2,11,3 - 1,8"; // Thursday, January 4st
dateTierList[29] = "September 24 - Sunday - 3 - 1,2,11,3 - 1,8"; // Thursday, January 4st
dateTierList[30] = "September 25 - Monday - 1 - 2,11 - 1,8"; // Thursday, January 4st
dateTierList[31] = "September 26 - Tuesday - 1 - 2,11 - 1,8"; // Thursday, January 4st
dateTierList[32] = 'September 27 - Wednesday - 6 - 8,9,10 - 1,8,9';
dateTierList[33] = 'September 28 - Thursday - 6 - 8,9,10 - 1,8,9';
dateTierList[34] = 'September 29 - Friday - 6 - 8,9,10 - 1,8,9';
dateTierList[35] = 'September 30 - Saturday - 2 - 11,1,2 - 1,8';
dateTierList[36] = 'October 2 - Monday - 0 - 11,2 - 1,8';
dateTierList[37] = 'October 3 - Tuesday - 0 - 11,2 - 1,8';
dateTierList[38] = 'October 4 - Wednesday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[39] = 'October 5 - Thursday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[40] = 'October 6 - Friday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[41] = 'October 7 - Saturday - 2 - 11,2,1 - 1,8';
dateTierList[42] = 'October 8 - Sunday - 2 - 11,2,1 - 1,8';
dateTierList[43] = 'October 9 - Monday - 0 - 11,2 - 1,8';
dateTierList[44] = 'October 10 - Tuesday - 0 - 11,2 - 1,8';
dateTierList[45] = 'October 11 - Wednesday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[46] = 'October 12 - Thursday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[47] = 'October 13 - Friday - 2 - 11,2,20 - 1,8,9,10';
dateTierList[48] = 'October 14 - Saturday - 2 - 11,2,1 - 1,8';
dateTierList[49] = 'October 15 - Sunday - 4 - 11,2,1,12 - 1,8,11';
dateTierList[50] = 'October 18 - Wednesday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[51] = 'October 19 - Thursday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[52] = 'October 20 - Friday - 6 - 11,8,9,10 - 1,8,9';
dateTierList[53] = 'October 21 - Saturday - 2 - 11,2,1 - 1,8';
dateTierList[54] = 'October 22 - Sunday - 2 - 11,2,1 - 1,8';

dateTierList[55] = 'November 3 - Friday - 3 - 0 - 1';
dateTierList[56] = 'November 4 - Saturday - 4 - 1,2,3 - 1';
dateTierList[57] = 'November 5 - Sunday - 3 - 1,2,3 - 1';
dateTierList[58] = 'November 6 - Monday - 0 - 0 - 1';
dateTierList[59] = 'November 7 - Tuesday - 0 - 0 - 1';
dateTierList[60] = 'November 8 - Wednesday - 0 - 0 - 1';
dateTierList[61] = 'November 9 - Thursday - 0 - 0 - 1';
dateTierList[62] = 'November 10 - Friday - 0 - 1,2,3 - 1'; 
dateTierList[63] = 'November 11 - Saturday - 2 - 1,2,3 - 1';
dateTierList[64] = 'November 12 - Sunday - 2 - 1,2,3 - 1'; 
dateTierList[65] = 'November 13 - Monday - 0 - 0 - 1'; 
dateTierList[66] = 'November 14 - Tuesday - 0 - 0 - 1'; 
dateTierList[67] = 'November 15 - Wednesday - 0 - 0 - 1'; 
dateTierList[68] = 'November 16 - Thursday - 0 - 1,2 - 1'; 

dateTierList[69] = 'November 17 - Friday - 3 - 13,14,15,16 - 12,15'; // Season of Light Begins
dateTierList[70] = 'November 18 - Saturday - 4 - 13,14,15,16 - 12';
dateTierList[71] = 'November 19 - Sunday - 5 - 13,14,15,16 - 12,13';

dateTierList[72] = 'November 20 - Monday - 3 - 13,14,15,16 - 12,13'; //ThanksGiving Break!
dateTierList[73] = 'November 21 - Tuesday - 4 - 13,14,15,16 - 12,13';
dateTierList[74] = 'November 22 - Wednesday - 4 - 13,14,15,16 - 12,13';
dateTierList[75] = 'November 23 - Thursday - 3 - 13,14,15,16 - 12,13,14';
dateTierList[76] = 'November 24 - Friday - 5 - 13,14,15,16 - 12,13';
dateTierList[77] = 'November 25 - Saturday - 5 - 13,14,15,16 - 12,13';
dateTierList[78] = 'November 26 - Sunday - 3 - 13,14,15,16 - 12,13';

dateTierList[79] = 'November 27 - Monday - 0 - 14,16 - 12';
dateTierList[80] = 'November 28 - Tuesday - 0 - 14,16 - 12';
dateTierList[81] = 'November 29 - Wednesday - 0 - 14,16 - 12';
dateTierList[82] = 'November 30 - Thursday - 0 - 14,16 - 12';
dateTierList[83] = 'December 1 - Friday - 3 - 14,15,16,13 - 12';
dateTierList[84] = 'December 2 - Saturday - 4 - 13,14,15,16 - 12';
dateTierList[85] = 'December 3 - Sunday - 3 - 13,14,15,16 - 12';
dateTierList[86] = 'December 4 - Monday - 2 - 14,16 - 12';
dateTierList[87] = 'December 5 - Tuesday - 2 - 14,16 - 12';
dateTierList[88] = 'December 6 - Wednesday - 2 - 14,16 - 12';
dateTierList[89] = 'December 7 - Thursday - 2 - 14,16 - 12';
dateTierList[90] = 'December 8 - Friday - 3 - 14,15,16,13 - 12';
dateTierList[91] = 'December 9 - Saturday - 4 - 13,14,15,16 - 12';
dateTierList[92] = 'December 10 - Sunday - 3 - 13,14,15,16 - 12';
dateTierList[93] = 'December 11 - Monday - 2 - 14,16 - 12';
dateTierList[94] = 'December 12 - Tuesday - 2 - 14,16 - 12';
dateTierList[95] = 'December 13 - Wednesday - 2 - 14,16 - 12';
dateTierList[96] = 'December 14 - Thursday - 2 - 14,16 - 12';
dateTierList[97] = 'December 15 - Friday - 3 - 14,15,16,13 - 12';
dateTierList[98] = 'December 16 - Saturday - 4 - 13,14,15,16 - 12';
dateTierList[99] = 'December 17 - Sunday - 5 - 13,14,15,16 - 12';

dateTierList[100] = 'December 18 - Monday - 4 - 13,14,15,16 - 12'; //Beggining of Oras Nou School Holiday
dateTierList[101] = 'December 19 - Tuesday - 3 - 13,14,15,16 - 12';
dateTierList[102] = 'December 20 - Wednesday - 5 - 13,14,15,16 - 12';
dateTierList[103] = 'December 21 - Thursday - 4 - 13,14,15,16 - 12';
dateTierList[104] = 'December 22 - Friday - 5 - 14,15,16,13 - 12';
dateTierList[105] = 'December 23 - Saturday - 5 - 13,14,15,16 - 12';
dateTierList[106] = 'December 24 - Sunday - 5 - 13,14,15,16 - 12,15'; //Christmas Eve
dateTierList[107] = 'December 25 - Monday - 4 - 13,14,15,16 - 12'; // Christmas Day
dateTierList[108] = 'December 26 - Tuesday - 5 - 13,14,15,16 - 12';
dateTierList[109] = 'December 27 - Wednesday - 5 - 13,14,15,16 - 12';
dateTierList[110] = 'December 28 - Thursday - 4 - 13,14,15,16 - 12';
dateTierList[111] = 'December 29 - Friday - 5 - 14,15,16,13 - 12';
dateTierList[112] = 'December 30 - Saturday - 5 - 13,14,15,16 - 12';
dateTierList[113] = 'December 31 - Sunday - 8 - 14,16,21,22 - 12,16'; // New Years Eve
dateTierList[114] = 'January 1 - Monday - 2 - 13,15,16 - 12';
dateTierList[115] = 'January 2 - Tuesday - 3 - 13,14,15,16 - 12';
dateTierList[116] = 'January 3 - Wednesday - 3 - 13,14,15,16 - 12';
dateTierList[117] = 'January 4 - Thursday - 3 - 13,14,15,16 - 12';
dateTierList[118] = 'January 5 - Friday - 5 - 13,14,15,16 - 12';
dateTierList[119] = 'January 6 - Saturday - 4 - 13,14,15,16 - 12';
dateTierList[120] = 'January 7 - Sunday - 4 - 13,14,15,16 - 12,19'; // Last Day of Season of Light
dateTierList[121] = 'January 8 - Monday - 1 - 0 - 0';
dateTierList[122] = 'January 9 - Tuesday - 1 - 0 - 0';
dateTierList[123] = 'January 10 - Wednesday - 1 - 0 - 0';
dateTierList[124] = 'January 11 - Thursday - 1 - 0 - 0';
dateTierList[125] = 'January 12 - Friday - 1 - 0 - 0';
dateTierList[126] = 'January 13 - Saturday - 2 - 0 - 0';
dateTierList[127] = 'January 14 - Sunday - 2 - 0 - 0';










