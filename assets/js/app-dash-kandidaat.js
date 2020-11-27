$(document).ready(function () {
    $.ajax({
        url: "../assets/php/dashboard-kandidaat-data.php",
        method: "GET",
        success: function (data) {
            console.log(data);
            var Kandidaat = [];
            var stemmen1 = [];

            for (var i in data) {
                Kandidaat.push("Kandidaat " + data[i].achternaam + data[i].voornaam);
                stemmen1.push(data[i].aantalstemmen);
            }

            var chartdata1 = {
                labels: Kandidaat,
                datasets: [{
                    label: 'Aantal Stemmen',
                    backgroundColor: '#2dce89',
                    data: stemmen1,
                }]
            };

            var ctx1 = $("#Graph1");


            var barGraph = new Chart(ctx1, {
                type: 'bar',
                data: chartdata1
            });
        },

        error: function (data) {
            console.log(data);
        }
    });
});