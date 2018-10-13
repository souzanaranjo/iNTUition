var app = {};
// Profile information.
// TODO Fetch info from the user
var user_name = "David Souza";
var user_description = "CS Student";
var user_phonenumber = "+65 12348765"
var user_nationality = "Mexican";
var user_age = 22;
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
	document.getElementById("form_age").value = String(user_age);
	document.getElementById("form_nationality").value = user_nationality.toLowerCase();
	//document.getElementById("form_name").value = user_name;
}

function saveData() {
	user_name = document.getElementById("form_name").value;
	user_description = document.getElementById("form_description").value;
	user_phonenumber = document.getElementById("form_phonenumber").value;
	user_nationality = document.getElementById("form_nationality").value;
	user_age = document.getElementById("form_age").value;

	document.getElementById("user_name").innerHTML = user_name;
	document.getElementById("user_description").innerHTML = user_description;
	document.getElementById("user_phonenumber").innerHTML = user_phonenumber;
	document.getElementById("user_nationality").innerHTML = user_nationality;
	document.getElementById("user_age").innerHTML = String(user_age) + " years old";
}

var user_nationality_code = "mx";
var user_language_code = "gb";

var preferred_nationality;
var language

setTimeout(function () {
	loadUserInfo();
}, 2000);

function loadUserInfo() {
	console.log("puta");
	document.getElementById("user_name").innerHTML = user_name;
	document.getElementById("user_description").innerHTML = user_description;
	document.getElementById("user_phonenumber").innerHTML = user_phonenumber;
	document.getElementById("user_nationality").innerHTML = user_nationality;
	document.getElementById("user_age").innerHTML = String(user_age) + " years old";
	// document.getElementById("user_languages").innerHTML = "";
	// for (language of user_languages) {
	// 	document.getElementById("user_languages").innerHTML += "- " + language;
	// }
	// document.getElementById("user_interests").innerHTML = "";
	// for(interest of user_interests) {
	// 	document.getElementById("user_interests").innerHTML += "- " + interest;
	// }
	document.getElementById("number_of_countries").innerHTML = countries.length-2;

	// //Sort elements by second value.
	countries.sort(function(a,b){
    return b[1] - a[1];
	});
	//loadMap();
	showCountriesInTable(countries);
};

function showCountriesInTable(countries) {
	console.log("que pedo");
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


function showModalLoading() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() {
    modal.hide();
  }, 12000);
}

function changeCountry() {
	document.getElementById("user-language-filter").innerHTML = "" + user_languages[0];
	document.getElementById("user-language-flag").src = "images/flags/" + user_language_code + ".svg";
}

function loadFilters() {
	// load default filter parameters
	setTimeout(function () {
		document.getElementById("user-language-filter").innerHTML = "" + user_languages[0];
		document.getElementById("user-language-flag").src = "images/flags/" + user_language_code + ".svg";
		document.getElementById("user-nationality-filter").innerHTML = user_nationality;
		document.getElementById("user-nationality-flag").src = "images/flags/" + user_nationality_code + ".svg";
	}, 500);

	console.log("loadFilters() finished");
}

app.showFromObject = function () {
  ons.openActionSheet({
    // title: 'Share',
    cancelable: true,
    buttons: [
      'WhatsApp',
      'Twitter',
			'Facebook',
			'Copy link',
      {
        label: 'Cancel',
        icon: 'md-close'
      }
    ]
  }).then(function (index) { console.log('index: ', index) });
};


function loadSports() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.sports);
		data.sports.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-sports").innerHTML += newBox(element);
		});
	});
}

function loadEat() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.food);
		data.food.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-eat").innerHTML += newBox(element);
		});
	});
}

function loadTravel() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.food);
		data.food.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-travel").innerHTML += newBox(element);
		});
	});
}

function loadParty() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.party);
		data.party.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-party").innerHTML += newBox(element);
		});
	});
}



function newBox(activity) {
	return '<div class="box">' +
	'<p style="font-size: 30px" class="event-title">' + activity.type + '</p>' +
	// '<label class="event-description">Testing testing</label>' +
	'<span class="event-people">' + activity.maxP +' p.</span>' +
	'<label class="event-date">' + activity.time + '</label>' +
    '</div>';
}
