//---------------------------------------------------------------------------------------------------------------------------------- VARIABLES AND INITIALIZATION
  	const Header = document.getElementById("header");
	const footBar = document.getElementById("footer");

	const hotelsLink = '"https://gcparksandresorts.github.io/gcresorthighland/hotels"';
	const eventsLink = '"https://gcparksandresorts.github.io/gcresorthighland/events"';

	function runHeaderSetup(){
		Header.innerHTML = "<div id='headerBar'></div><div id='headerSpacer'></div>";
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
			headBar.innerHTML += "<button class='headerBarButton'>Things to Do &#9661;</button>";
														
		}//end of if statemement
		else{
			// Mobile Version
			headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
			headBar.innerHTML += "<button class='headerBarButton' style='font-size:25px;margin-right:30px;'>&#8801;</button>";
			
		}//end of else statemement

		// Check for Pride Month (JUNE) -> if yes, make the header logo rainbow!
		let curDate = new Date();
		if(curDate.getMonth() == 5){
			document.getElementById("headerBarLogo").src = "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/GCRESORT-PrideLogo.png";
			console.log('HAPPY PRIDE!!'); 
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

