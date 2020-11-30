$(document).ready(function() {

    $.ajax({
        url: "../assets/php/dashboard-partij-data.php",
        method: "GET",
        success: function(data) {
            var partij = [];
            var stemmen = [];

            for (var i in data) {
                partij.push("Partij " + data[i].Partijafkorting);
                stemmen.push(data[i].aantalstemmen);
            }

            var chartdata = {
                labels: partij,
                datasets: [{
                    label: 'Aantal Stemmen',
                    backgroundColor: '#2dce89',
                    data: stemmen,
                }]
            };

            var ctx = $("#Graph");


            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata
            });

        },

        error: function(data) {
            console.log(data);
        }
    });
});

function getChart(e) {
    $('#oChart').remove();
    $('#charte').append('<canvas id="oChart"></canvas>');

    $.ajax({
        url: "../assets/php/dashboard-districtstem-data.php?id=" + e,
        method: "GET",
        success: function(data) {
            var partij = [];
            var stemmen = [];

            for (var i in data) {
                partij.push("Partij " + data[i].Partijnaam);
                stemmen.push(data[i].aantalstemmen);
            }

            var chartdata = {
                labels: partij,
                datasets: [{
                    label: 'Aantal Stemmen',
                    backgroundColor: '#2dce89',
                    data: stemmen,
                }]
            };

            var ctx = $("#oChart");

            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata
            });
            let txt = $("#district option:selected").text();
            $('#txt').html(txt);
        },

        error: function(data) {}
    });
}