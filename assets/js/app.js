function Register() {
    var id = $("#id").val();
    var date = $("#date").val();
    var district = $("#district").val();
    var pwd = $("#pwd").val();
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
        beforeSend: function() {
            $(".submit").html(' <button type="button" class="btn btn-primary my-4">Bezig <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
        },
        success: function(response) {
            if (response == "exist") {
                Swal.fire({
                    title: 'ID Bestaat al',
                    text: 'Voer de correcte ID in',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "errorEmpty") {
                Swal.fire({
                    title: 'Vul alles in!',
                    text: 'Niet alles in ingevuld',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "fatalError") {
                Swal.fire({
                    title: 'Fatal Error',
                    text: 'Something is wrong',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "idError") {
                Swal.fire({
                    title: 'ID klopt niet',
                    text: 'ID dat u heeft ingevoerd klopt niet check als u 6 cijfers en 2 letters heb',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "success") {
                Swal.fire({
                    title: 'Successvol',
                    text: "U bent succesvol geregistreerd u kunt nu inloggen.",
                    icon: 'success',
                    showDenyButton: true,
                    confirmButtonColor: '#2e8b57',
                    confirmButtonText: 'Inloggen',
                    denyButtonText: 'Terug'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '../index.html'

                    } else if (result.isDenied) {
                        $(".submit").html(' <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
                $('#register-form').trigger("reset");
                $('#district').val(null).trigger('change');
            }

        }

    });
}