// Profile information.
// TODO Fetch info from the user
var user_name = "David Souza";
var user_description = "CS Student";
var user_phonenumber = "+65 12348765"
var user_nationality = "Mexican";
var user_languages = ["English", "Spanish", "Italian", "French"];
var user_interests = ["Sports", "Play the piano", "Science", "Raggaeton Music"];
var countries = [
	  ['Country', 'Number of friends'],
  	  ['Default', 0],
      ['Germany', 3],
      ['Brazil', 1],
      ['Canada', 1],
      ['France', 1],
      ['RU', 2]
];
var user_gender = "Male"

function getEditInfo() {
	document.getElementById("form_name").value = user_name;
	document.getElementById("form_description").value = user_description;
	document.getElementById("form_phonenumber").value = user_phonenumber;
	document.getElementById("form_nationality").value = user_nationality.toLowerCase();
	//document.getElementById("form_name").value = user_name;
}

function saveData() {
	user_name = document.getElementById("form_name").value;
	user_description = document.getElementById("form_description").value;
	user_phonenumber = document.getElementById("form_phonenumber").value;
	user_nationality = document.getElementById("form_nationality").value;

	document.getElementById("user_name").innerHTML = user_name;
	document.getElementById("user_description").innerHTML = user_description;
	document.getElementById("user_phonenumber").innerHTML = user_phonenumber;
	document.getElementById("user_nationality").innerHTML = user_nationality;
}
function loadUserInfo() {
	document.getElementById("user_name").innerHTML = user_name;
	document.getElementById("user_description").innerHTML = user_description;
	document.getElementById("user_phonenumber").innerHTML = user_phonenumber;
	document.getElementById("user_nationality").innerHTML = user_nationality;
	document.getElementById("user_languages").innerHTML = "";
	for (language of user_languages) {
		document.getElementById("user_languages").innerHTML += "- " + language;
	}
	document.getElementById("user_interests").innerHTML = "";
	for(interest of user_interests) {
		document.getElementById("user_interests").innerHTML += "- " + interest;
	}
	document.getElementById("number_of_countries").innerHTML = countries.length-2;

	// dummyArray = countries; 
	// dummyArray = dummyArray.splice(2);
	// //Sort elements by second value.
	countries.sort(function(a,b){
    return b[1] - a[1];
	});
	//loadMap();
	showCountriesInTable(countries);
};

function showCountriesInTable(countries) {
 	console.log(countries);
 	var i = countries.length-2;
	while (i > 0) {
		document.getElementById("countriestable").innerHTML = '<tr><td>' + countries[i][0] + '</td><td>'
		+ countries[i][1] + '</td></tr>' + document.getElementById("countriestable").innerHTML;
		i--;
	}
}

function loadMap() {
	google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyCPkWmUcfyfhk6qY9AlRnxfutGMI_nYtRA'
      });
		
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(countries);
        var options = {};
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
}

// End of code related to map
