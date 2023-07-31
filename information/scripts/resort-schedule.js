const finalDisplay = document.getElementById("dateDisplayText");

const monthsNamed = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysNamed = ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday",];
        
function recordDate(){
    let tdate = new Date();
    let tmonth = monthsNamed[tdate.getMonth()];
    let tday = tdate.getDate();
    let tdayw = daysNamed[tdate.getDay()];
            
    finalDisplay.innerHTML = tdayw + " - " + tmonth + " " + tday + ", " + tdate.getFullYear();
}
