var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 89);
document.getElementById("the_date").innerHTML = tomorrow.toLocaleDateString("ru-RU",options);

var options1 = {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
document.getElementById("updated").innerHTML = '(' + today.toLocaleDateString("ru-RU",options1) + ')';
