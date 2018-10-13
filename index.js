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
	// <tr>
 //        <td>John</td>
 //        <td>Doe</td>
 //      </tr>
 //      <tr>
 //        <td>Mary</td>
 //        <td>Moe</td>
 //      </tr>
 //      <tr>
 //        <td>July</td>
 //        <td>Dooley</td>
 //      </tr>
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
