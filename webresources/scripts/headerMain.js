//---------------------------------------------------------------------------------------------------------------------------------- VARIABLES AND INITIALIZATION
  	const Header = document.getElementById("header");
	const footBar = document.getElementById("footer");

	function runHeaderSetup(){
		Header.innerHTML = "<div id='headerBar'></div>";
		createFooter();
		initializeHeader();
	}

	

//---------------------------------------------------------------------------------------------------------------------------------- HEADER SETUP
	window.onresize = initializeHeader();

	function initializeHeader(){
		

		const headBar = document.getElementById("headerBar");
		headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
		headBar.innerHTML += "<button id='headerBarTP'>Tickets and Passes</button>  <button class='headerBarButton'>More &#9661;</button>  \
													<button class='headerBarButton'>Special Events</button> \
													<button class='headerBarButton'>Hotels and Resorts</button>  \
													<button class='headerBarButton'>Things to Do &#9661;</button>";
	}

//---------------------------------------------------------------------------------------------------------------------------------- FOOTER SETUP
	function createFooter(){
		footBar.innerHTML = "<div class='spacer'></div>";

		footBar.innerHTML += "<div class='spacer'></div> \
				     <div class='container' style='text-align:center;line-height:2;'> \
				     <b>Get in Touch</b> <br> (312) 988 1000 <br> <a>guestservices.gcrh@gcpr.net</a> </div>";
		
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

