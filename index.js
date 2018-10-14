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
var tempjson;
var tempName;
var tempDate;
var tempLocation;
var tempTime;

function addEvent() {
	tempName = document.getElementById("event_name").value;
	tempLocation = document.getElementById("event_location").value;
	tempTime = document.getElementById("event_time").value;
	tempDate = document.getElementById("event_date").value;

	document.getElementById("upcoming_events").innerHTML +=
	'<div class="card-format" style="height: 100px; padding: 1px 0 0 0;">'
    + '<div class="card next-event" style="text-align: center">'
    + '<h2 class="card__title">' + tempName + " at " + tempLocation + '</h2>'
    + '<div class="card__content">'
    + '<p>' + tempTime + " " + tempDate + '</p>'
    + '</div></div></div>';

}

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
var language;


setTimeout(function () {
	showModal();
}, 1000);

setTimeout(function () {
	loadUserInfo();
}, 2000);

function loadUserInfo() {
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
function loadSports() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.sports);
		data.sports.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-sports").innerHTML += newBox(element);
		});
	});
}

function loadEvents() {
	$.getJSON("Activities.json").done(function(data) {
	console.log(data.sports);
	document.getElementById("upcoming_events").innerHTML +=
	'<div class="card-format" style="height: 100px; padding: 1px 0 0 0;">'
    + '<div class="card next-event" style="text-align: center">'
    + '<h2 class="card__title">' + data.sports[0].type + " at " + data.sports[0].location + '</h2>'
    + '<div class="card__content">'
    + '<p>' + data.sports[0].time + '</p>'
    + '</div></div></div>';

    document.getElementById("past_events").innerHTML +=
	'<div class="card-format" style="height: 100px; padding: 1px 0 0 0;">'
    + '<div class="card past-event" style="text-align: center">'
    + '<h2 class="card__title">' + data.food[0].type + " at " + data.food[0].location + '</h2>'
    + '<div class="card__content">'
    + '<p>' + data.food[0].time + '</p>'
    + '</div></div></div>';

    document.getElementById("past_events").innerHTML +=
	'<div class="card-format" style="height: 100px; padding: 1px 0 0 0;">'
    + '<div class="card past-event" style="text-align: center">'
    + '<h2 class="card__title">' + data.party[0].type + " at " + data.party[0].location + '</h2>'
    + '<div class="card__content">'
    + '<p>' + data.party[0].time + '</p>'
    + '</div></div></div>';
    });
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
			'Copy link',
			'Export to calendar',
      {
        label: 'Cancel',
        icon: 'md-close'
      }
    ]
  }).then(function (index) {
		console.log('index: ', index);
		if (index === 3) {
			cal = ics();
	    cal.addEvent('Tennis', 'Event for 4 people. Created by Hola App.', 'NTU', '10/15/2018 8:30 pm', '10/15/2018 9:30 pm');
	    cal.addEvent('Football', 'Event for 16 people. Created by Hola App.', 'NTU', '10/16/2018 4:30 pm', '10/16/2018 5:30 pm');
	    cal.addEvent('Ping Pong', 'Event for 2 people. Created by Hola App.', 'NTU', '10/15/2018 6:30 pm', '10/15/2018 7:00 pm');
			cal.addEvent('Volleyball', 'Event for 12 people. Created by Hola App.', 'NTU', '10/17/2018 9:00 am', '10/17/2018 11:00 am');
			cal.addEvent('Squash', 'Event for 4 people. Created by Hola App.!', 'NTU', '10/17/2018 7:30 pm', '10/17/2018 9:00 pm');
			cal.addEvent('Cricket', 'Event for 22 people. Created by Hola App.', 'NTU', '10/20/2018 7:30 pm', '10/20/2018 10:00 pm');
			// cal.download();
			window.open("calendar.ics");
		}

	});
};


function loadSports() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.sports);
		var i = 0;
		data.sports.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-sports").innerHTML += newSportsBox(element, i);

			i++;
		});
	});
}

function loadEat() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.food);
		var i = 0;
		data.food.forEach(function (element) {
			console.log(element);

			document.getElementById("container-box-eat").innerHTML += newFoodBox(element, i);

			i++;
		});
	});
}

function loadParty() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.party);
		var i = 0;
		data.party.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-travel").innerHTML += newPartyBox(element, i);
			i++;
		});
	});
}

function loadTravel() {
	$.getJSON("Activities.json").done(function(data) {
		console.log(data.food);
		var i = 0;
		data.food.forEach(function (element) {
			console.log(element);
			document.getElementById("container-box-party").innerHTML += newTravelBox(element, i);
			i++;
		});
	});
}

function fetchDataOnCard(data, type) {
	document.getElementById("card_title").innerHTML = data.type;
	document.getElementById("card_location").innerHTML = "Location: " + data.location;
	document.getElementById("card_time").innerHTML = "Time: " + data.time;
	document.getElementById("card_capacity").innerHTML = "Max " + data.maxP + " people";
	switch (type) {
		case 0:
			document.getElementById("card_image").innerHTML = '<img class="activity-card card-img-top" src="images/categories/sports2.jpg" alt="Card image cap">';
			break;
		case 1:
			document.getElementById("card_image").innerHTML = '<img class="activity-card card-img-top" src="images/categories/food2.jpg" alt="Card image cap">';
			break;
		case 2:
			document.getElementById("card_image").innerHTML = '<img class="activity-card card-img-top" src="images/categories/party.jpg" alt="Card image cap">';
			break;
		case 3:
			document.getElementById("card_image").innerHTML = '<img class="activity-card card-img-top" src="images/categories/travel.jpg" alt="Card image cap">';
			break;
	}
}

function openActivityCard(data, type) {
	fn.pushPage({'id': 'activityCard.html', 'title': 'Details'}, 'default');
	setTimeout(function() { fetchDataOnCard(data,type) }, 300);

}

function hola(index, category) {
	$.getJSON("Activities.json").done(function(data) {
		switch(category) {
		    case 0:
		    	openActivityCard(data.sports[index], category);
		        break;
		    case 1:
		        openActivityCard(data.food[index], category);
		        break;
		    case 2:
		        openActivityCard(data.party[index], category);
		        break;
		    default:
		        openActivityCard(data.party[index], category);
		        break;
			}
		});

}

function newSportsBox(activity, index) {
	return '<div class="box" onclick="hola('+ index + ', 0)" style="background-position: center;background-repeat: no-repeat;' +
	'background-size: cover;background-image: linear-gradient('+
      'rgba(0, 0, 0, 0.1),'+
      'rgba(0, 0, 0, 0.1)'+
    '),url(images/categories/sports/' + activity.type + '.jpg)">' +
	// return '<ons-card style="height: 187px">' +
	'<div class="box-title">' + activity.type + "</div>" +
	// '<p style="font-size: 30px" class="event-title">' + activity.type + '</p>' +
	// '<label class="event-description">Testing testing</label>' +
	'<div class="box-content">' +
	'<label class="event-people">' +'<ons-icon style="margin-right: 5px" icon="fa-users"></ons-icon>' + activity.maxP + '</label><br>' +
	'<label class="event-date">  <ons-icon style="margin-right: 5px" icon="fa-clock"></ons-icon>   '
	+ activity.time + '</label>' + '</div>' //+ '</ons-card>';// +
    +'</div>';
}

function newFoodBox(activity, index) {
	return '<div class="box" onclick="hola('+ index + ', 1)" style="background-position: center;background-repeat: no-repeat;' +
	'background-size: cover;background-image: linear-gradient('+
      'rgba(0, 0, 0, 0.1),'+
      'rgba(0, 0, 0, 0.1)'+
    '),url(images/categories/food/' + activity.type + '.jpg)">' +
	// return '<ons-card style="height: 187px">' +
	'<div class="box-title">' + activity.type + "</div>" +
	// '<p style="font-size: 30px" class="event-title">' + activity.type + '</p>' +
	// '<label class="event-description">Testing testing</label>' +
	'<div class="box-content">' +
	'<label class="event-people">' +'<ons-icon style="margin-right: 5px" icon="fa-users"></ons-icon>' + activity.maxP + '</label><br>' +
	'<label class="event-date">  <ons-icon style="margin-right: 5px" icon="fa-clock"></ons-icon>   '
	+ activity.time + '</label>' + '</div>' //+ '</ons-card>';// +
    +'</div>';
}


function newPartyBox(activity, index) {
	return '<div class="box" onclick="hola('+ index + ', 2)" style="background-position: center;background-repeat: no-repeat;' +
	'background-size: cover;background-image: linear-gradient('+
      'rgba(0, 0, 0, 0.1),'+
      'rgba(0, 0, 0, 0.1)'+
    '),url(images/categories/party/' + activity.type + '.jpg)">' +
	// return '<ons-card style="height: 187px">' +
	'<div class="box-title">' + activity.type + "</div>" +
	// '<p style="font-size: 30px" class="event-title">' + activity.type + '</p>' +
	// '<label class="event-description">Testing testing</label>' +
	'<div class="box-content">' +
	'<label class="event-people">' +'<ons-icon style="margin-right: 5px" icon="fa-users"></ons-icon>' + activity.maxP + '</label><br>' +
	'<label class="event-date">  <ons-icon style="margin-right: 5px" icon="fa-clock"></ons-icon>   '
	+ activity.time + '</label>' + '</div>' //+ '</ons-card>';// +
    +'</div>';
}

function newTravelBox(activity, index) {
	return '<div class="box" onclick="hola('+ index + ', 3)" style="background-position: center;background-repeat: no-repeat;' +
	'background-size: cover;background-image: linear-gradient('+
      'rgba(0, 0, 0, 0.1),'+
      'rgba(0, 0, 0, 0.1)'+
    '),url(images/categories/travel/' + activity.type + '.jpg)">' +
	// return '<ons-card style="height: 187px">' +
	'<div class="box-title">' + activity.type + "</div>" +
	// '<p style="font-size: 30px" class="event-title">' + activity.type + '</p>' +
	// '<label class="event-description">Testing testing</label>' +
	'<div class="box-content">' +
	'<label class="event-people">' +'<ons-icon style="margin-right: 5px" icon="fa-users"></ons-icon>' + activity.maxP + '</label><br>' +
	'<label class="event-date">  <ons-icon style="margin-right: 5px" icon="fa-clock"></ons-icon>   '
	+ activity.time + '</label>' + '</div>' //+ '</ons-card>';// +
    +'</div>';
}

function showModal() {
  var modal = document.querySelector('ons-modal');
	modal.show();
	document.querySelector("#appTabbar").hide();
}

function hideModal() {
	var modal = document.querySelector('ons-modal');
	modal.hide();
	document.querySelector("#appTabbar").show();
}

function showLogin() {
	var modal = document.querySelector('#initial-modal');
	modal.innerHTML =
	'<ons-page>' +
  '		<div class="background" style="background-color: #0f2944;"></div>'+
	'<div style="text-align: center">'+
	'<img style="margin-top: 50%;" src="images/image-2.png" alt="HOLA" height="120px"/>'+
		// '<br>' +
		'<p style="text-align: center"><ons-input id="username" modifier="underbar" placeholder="Username" float></ons-input>' +
	    '</p><p style="text-align: center">' +
			'<ons-input id="password" modifier="underbar" type="password" placeholder="Password" float></ons-input>'+
	   '</p>' +
		 '<p style="margin-top: 30px; text-align: center;"><ons-button modifier="quiet" onclick="hideModal()">Log in</ons-button></p>'+
		 '</div>'+
	'</ons-page>';
}

function showSignup() {
	var modal = document.querySelector('#initial-modal');
	modal.innerHTML =
	'<ons-page>' +
  '		<div class="background" style="background-color: #0f2944;"></div>'+
	'<div style="text-align: center">'+
	'<img style="margin-top: 50%;" src="images/image-2.png" alt="HOLA" height="120px"/>'+
		// '<br>' +
		'<p style="text-align: center"><ons-input id="username" modifier="underbar" placeholder="Username" float></ons-input>' +
	    '</p><p style="text-align: center">' +
			'<ons-input id="password" modifier="underbar" type="password" placeholder="Password" float></ons-input>'+
	   '</p>' +
		 '<p style="margin-top: 30px; text-align: center;"><ons-button modifier="quiet" onclick="hideModal()">Sign up</ons-button></p>'+
		 '</div>'+
	'</ons-page>';
}
