//---------------------------------------------------------------------------------------------------------------------------------- VARIABLES AND INITIALIZATION
  	const Header = document.getElementById("header");
	const footBar = document.getElementById("footer");

	function runHeaderSetup(){
		initializeHeader();
	}

	

//---------------------------------------------------------------------------------------------------------------------------------- HEADER SETUP
	window.onresize = initializeHeader();

	function initializeHeader(){
		Header.innerHTML = "<div id='headerBar'></div>";

		const headBar = document.getElementById("headerBar");
		headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
		headBar.innerHTML += "<button id='headerBarTP'>Tickets and Passes</button>  <button class='headerBarButton'>More &#9661;</button>  \
													<button class='headerBarButton'>Special Events</button> \
													<button class='headerBarButton'>Hotels and Resorts</button>  \
													<button class='headerBarButton'>Things to Do &#9661;</button>";
	}


//---------------------------------------------------------------------------------------------------------------------------------- PAGE LOADING FUNCTIONS 
  	function funcGoToHome(){window.open("https://gcparksandresorts.github.io/gcresorthighland","_self");}
  
  	function endLoadingInit(){
  		document.getElementById('loader').style.display = 'none';
  	}

