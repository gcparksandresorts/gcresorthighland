const inputBox = document.getElementById("menuSelect");

function selectMenu(){
  let curSelection = inputBox.value;

  var divsToHide = document.getElementsByClassName("menuSection"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

  document.getElementById(curSelection).style.display = 'block';
}
