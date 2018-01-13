var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 89);
document.getElementById("the_date").innerHTML = tomorrow.toLocaleDateString("ru-RU",options);