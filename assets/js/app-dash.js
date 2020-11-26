$(document).ready(function() {
    $.ajax({
        url: "../assets/php/dashboard-partij-data.php",
        method: "GET",
        success: function(data) {
            console.log(data);
            var partij = [];
            var stemmen = [];

            for (var i in data) {
                partij.push("Partij " + data[i].Partijnaam);
                stemmen.push(data[i].aantalstemmen);
            }

            var chartdata = {
                labels: partij,
                datasets: [{
                    label: 'stemmen',
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