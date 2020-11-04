function Register() {
    var id = $("#id").val();
    var date = $("#date").val();
    var district = $("#district").val();
    var pwd = $("#pwd").val();
    if (id == "" || date == "" || district == "" || pwd == "") {
        Swal.fire({
            title: 'Vul alles in!',
            text: 'Niet alles in ingevuld',
            icon: 'error',
            confirmButtonColor: '#2e8b57'
        });

    } else {
        $.ajax({
            type: 'POST',
            url: '../assets/php/register-gebruiker.php',
            data: {
                id: id,
                date: date,
                district: district,
                pwd: pwd,
                register: 1
            },
            success: function(response) {
                if (response == "exist") {
                    Swal.fire(
                        'ID Bestaat al',
                        'Voer de correcte Id in',
                        'error'
                    );
                }
                if (response == "success") {
                    Swal.fire({
                        title: 'Successvol',
                        text: "U bent succesvol geregistreerd u kunt nu inloggen.",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#2e8b57',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Inloggen'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = '../index.html'

                        }
                    })
                    $('#register-form').trigger("reset");
                    $('#district').val(null).trigger('change');
                }

            }
        });
    }
}