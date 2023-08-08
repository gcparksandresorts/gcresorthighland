const inputBox = document.getElementById("menuSelect");
const inputBoxB = document.getElementById("sectionSelect");

function selectMenu(){
  let curSelection = inputBox.value;

  var divsToHide = document.getElementsByClassName("menuSection"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

  document.getElementById(curSelection).style.display = 'block';
}


function showImage(idText, dType, hideText){
  let curSelection = document.getElementById(idText);
  let nonSelection = document.getElementById(hideText);
  curSelection.style.display = dType;
  if(hideText != ''){
    nonSelection.style.display = 'none';
  }
}

function hideImage(idText){
  let curSelection = document.getElementById(idText);
  curSelection.style.display = 'none';
}

function selectSection() {
    let curSelection = inputBoxB.value;

    var divsToHide = document.getElementsByClassName("sectionContainer"); //divsToHide is an array
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = "none"; // depending on what you're doing
      }

    if(curSelection == "view-all"){
      var divsToHide = document.getElementsByClassName("sectionContainer"); //divsToHide is an array
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = "block"; // depending on what you're doing
      }
    }
    else{
      document.getElementById(curSelection).style.display = 'block';
    }
}
