window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').right.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
  document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};

// Code related to map.


miArreglo = [
  	  ['Country', 'Popularity'],
      ['Germany', 700],
      ['Brazil', 700],
      ['Canada', 700],
      ['France', 700],
      ['RU', 700]
    ];
    // miArreglo.concat([['Mexico', 700]]);

google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyCPkWmUcfyfhk6qY9AlRnxfutGMI_nYtRA'
      });
		
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
      	miArreglo.concat([["United States", 700]]);
        var data = google.visualization.arrayToDataTable(miArreglo);
        var options = {};
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }