
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/RS_verkiezingen/assets/php/dashboard-partij-data.php",
        method: "GET",
        success: function (data) {
            console.log(data);
            var partij = [];
            var stemmen = [];

            for (var i in data) {
                partij.push("Partij " + data[i].Partijnaam);
                stemmen.push(data[i].aantalstemmen);
            }

            var chartdata = {
                labels: partij,
                datasets: [
                    {
                        label: 'stemmen',
                        backgroundColor: 'rgba(200, 200, 200, 0.75)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: stemmen,
                    }
                ]
            };

            var ctx = $("#chart-bars");


            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata
            });
        },

        error: function (data) {
            console.log(data);
        }
    });
});