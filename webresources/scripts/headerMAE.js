const Header = document.getElementById("header");
const footBar = document.getElementById("footer");

function runHeaderSetup(){
		Header.innerHTML = "";
		
	//	createFooter();
		initializeHeader();
	}

function initializeHeader(){
		console.log('resizing header'); 
    	Header.innerHTML = "<div id='headerSpacer'></div> \
                        <div id='headerBar'><img src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='goHome()'><br> \
                        <a href='https://gcparksandresorts.github.io/gcresorthighland/meetings-and-events'>Home</a> \
                        <a href='https://gcparksandresorts.github.io/gcresorthighland/meetings-and-events/meeting-spaces'>Meeting Spaces</a> \
                        <a>Event Planning</a> \
                        <a>Event Services</a> \
                        </div>";

	document.getElementById('loader').style.display = 'none';
	
}//end of function initializeHeader

function goHome(){
	window.open("https://gcparksandresorts.github.io/gcresorthighland","_self");
}
