// Profile information.
// TODO Fetch info from the user
var user_name = "David Souza";
var user_description = "CS Student";
var user_phonenumber = "+65 12348765"
var user_nationality = "Mexican";
var user_languages = ["English", "Spanish", "Italian", "French"];
var user_interests = ["Sports", "Play the piano", "Science", "Raggaeton Music"];
var countries = [
	  ['Country', 'Popularity'],
  	  ['Default', 0],
      ['Germany', 1],
      ['Brazil', 1],
      ['Canada', 1],
      ['France', 1],
      ['RU', 2]
    ];

function loadUserInfo() {
	document.getElementById("user-name").innerHTML = user_name;
	document.getElementById("user-description").innerHTML = user_description;
	document.getElementById("user-phonenumber").innerHTML = user_phonenumber;
	document.getElementById("user-nationality").innerHTML = user_nationality;
	document.getElementById("user-languages").innerHTML = "";
	for (language of user_languages) {
		document.getElementById("user-languages").innerHTML += "- " + language;
	}
	document.getElementById("user-interests").innerHTML = "";
	for(interest of user_interests) {
		document.getElementById("user-interests").innerHTML += "- " + interest;
	}
	loadMap();
};

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
