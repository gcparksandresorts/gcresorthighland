//---------------------------------------------------------------------------------------------------------------------------------- VARIABLES AND INITIALIZATION
  	const Header = document.getElementById("header");
	const footBar = document.getElementById("footer");

	const hotelsLink = '"https://gcparksandresorts.github.io/gcresorthighland/hotels", "_self"';
	const eventsLink = '"https://gcparksandresorts.github.io/gcresorthighland/events", "_self"';
	
	curDate = new Date();
	curDate = curDate.getMonth();

	function runHeaderSetup(){
		Header.innerHTML = "<div id='headerBar'></div><div id='ttdMenu'></div><div id='moreMenu'></div><div id='ttdHide' onclick='hideTTD();' monmouseover='hideTTD();'></div> <div id='moreHide' onclick='hideMore();' monmouseover='hideMore();'></div> <div id='headerSpacer'></div>";
		
		createFooter();
		initializeHeader();
	}

	

//---------------------------------------------------------------------------------------------------------------------------------- HEADER SETUP
	
	function initializeHeader(){
		console.log('resizing header'); 
		let headBar = document.getElementById("headerBar");
		headBar.innerHTML = "";
		
		if(window.innerWidth >= 900){
			// Desktop Version
			headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
			headBar.innerHTML += "<button id='headerBarTP'>Tickets and Passes</button>  <button class='headerBarButton'>More &#9661;</button>";
			headBar.innerHTML += "<button class='headerBarButton' onclick='window.open(" + eventsLink + ")'>Special Events</button>";
			headBar.innerHTML += "<button class='headerBarButton' onclick='window.open(" + hotelsLink + ")'>Hotels and Resorts</button>";
			headBar.innerHTML += "<button class='headerBarButton' onclick='showTTD()' id='ttdBtnH'>Things to Do &#9661;</button>";
														
		}//end of if statemement
		else{
			// Mobile Version
			headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
			headBar.innerHTML += "<button class='headerBarButton' style='font-size:25px;margin-right:30px;'>&#8801;</button>";
			
		}//end of else statemement

		// Check for Pride Month (JUNE) -> if yes, make the header logo rainbow!
		if(curDate == 5){
			document.getElementById("headerBarLogo").src = "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/GCRESORT-PrideLogo.png";
			console.log('HAPPY PRIDE!!'); 
		}
		// If september or october set headerto halloween color scheme
		else if(curDate == 8 || curDate == 9 ){

			headBar.style.background = "url('https://gcparksandresorts.github.io/gcresorthighland/webresources/images/spookyGradient.jpg')";
			headBar.style.backgroundSize = "cover";
			headBar.style.backgroundRepeat = "no-repeat";
			headBar.style.backgroundPosition = "center";

			console.log("Header Set For Halloween");
 		}
		// If november or december set headerto SOL color scheme
		else if(curDate == 10 || curDate == 11 ){

			headBar.style.background = "url('https://gcparksandresorts.github.io/gcresorthighland/webresources/images/solbkg01.jpg')";
			headBar.style.backgroundSize = "cover";
			headBar.style.backgroundRepeat = "no-repeat";
			headBar.style.backgroundPosition = "center";

			console.log("Header Set For Halloween");
 		}
	}

	window.onresize = function(){initializeHeader();};

//---------------------------------------------------------------------------------------------------------------------------------- FOOTER SETUP
	function createFooter(){
		footBar.innerHTML = "<div class='spacer'></div>";

		footBar.innerHTML += "<div class='spacer'></div> \
				     <div class='container' style='text-align:center;line-height:2;'> \
				     <b>Get in Touch</b> <br> (312) 988 1000 <br> <a href='mailto: globecityparksandresorts@gmail.com'>guestservices.gcrh@gcpr.net</a> </div>";
		
		footBar.innerHTML += "<div class='spacer'></div> \
			              <div style='text-align:center'> <br> \
			              <img src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcprGrayLogo.png' style='width:300px;height:auto;margin:auto;'> \
			              </div> <br>";
		
		footBar.innerHTML += "<div style='text-align:center'> <p class='disclaimer'>©2023 Globe-City Parks and Resorts LLC.<br></p> \
    				      <a>Privacy Policy</a> | <a>Legal Information</a> | <a>MCBPO</a> | <a>Careers</a> \
    				      <br><br>    </div>";
		
	}


//---------------------------------------------------------------------------------------------------------------------------------- PAGE LOADING FUNCTIONS 
  	function funcGoToHome(){window.open("https://gcparksandresorts.github.io/gcresorthighland","_self");}
  
  	function endLoadingInit(){
  		document.getElementById('loader').style.display = 'none';
  	}

	function showTTD(){

		document.getElementById("moreMenu").style.display='none'; document.getElementById("moreHide").style.display='none';
		
		const ttdManu = document.getElementById("ttdMenu");

		//document.getElementById("ttdBtnH").style.background = "#efefef";
		

		const aplnk = '"https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park", "_self"';
		const cslnk = '"https://gcparksandresorts.github.io/gcresorthighland/destinations/city-shop", "_self"';
		const aelnk = '"https://gcparksandresorts.github.io/gcresorthighland/attractions", "_self"';
		const dilnk = '"https://gcparksandresorts.github.io/gcresorthighland/dining", "_self"';
		const shlnk = '"https://gcparksandresorts.github.io/gcresorthighland/shopping", "_self"';

		ttdManu.innerHTML = "<button class='ttdParkIcon' id='ttdAP' onclick='window.open(" + aplnk + ")'>Adventure Park</button>";
		ttdManu.innerHTML += "<button class='ttdParkIcon' id='ttdCS' onclick='window.open(" + cslnk + ")'>City-Shop</button>";
		ttdManu.innerHTML += "<button class='ttdButton' onclick='window.open(" + aelnk + ")'>Attractions and Entertainment</button>";
		ttdManu.innerHTML += "<button class='ttdButton' onclick='window.open(" + dilnk + ")'>Resturaunts and Dining</button>";
		ttdManu.innerHTML += "<button class='ttdButton' onclick='window.open(" + shlnk + ")'>Shopping</button>";
		
		document.getElementById("ttdHide").style.display='block';

		ttdManu.style.display = 'block';
		
	}

	function hideTTD(){const ttdManu = document.getElementById("ttdMenu"); ttdManu.style.display = 'none'; document.getElementById("ttdHide").style.display='none';}

	function showMore(){

		document.getElementById("ttdMenu").style.display = 'none'; document.getElementById("ttdHide").style.display='none';
		
		const moreManu = document.getElementById("moreMenu");

		const inflnk = '"https://gcparksandresorts.github.io/gcresorthighland/information/resort-schedule", "_self"';
		const vplnk = '"https://gcparksandresorts.github.io/gcresorthighland/tickets/gcvip", "_self"';
		const apslnk = '"https://gcparksandresorts.github.io/gcresorthighland/tickets/annual-passports", "_self"';

		moreManu.innerHTML = "<button class='moreBtn' onclick='window.open(" + inflnk + ")'>Resort Hours and Information</button>";
		moreManu.innerHTML += "<button class='moreBtn' onclick='window.open(" + vplnk + ")'>GC VIP Admission</button>";
		moreManu.innerHTML += "<button class='moreBtn' onclick='window.open(" + apslnk + ")'>Annual Passports</button>";
	}

	function hideMore(){document.getElementById("moreMenu").style.display='none'; document.getElementById("moreHide").style.display='none';}

