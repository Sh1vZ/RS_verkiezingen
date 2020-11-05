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
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
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
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
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
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "sqlError") {
                Swal.fire({
                    title: 'Database Error',
                    text: 'Something is wrong',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
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
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
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
                    denyButtonText: 'Terug',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '../index.php'
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

function Inloggen() {
    var id = $("#id").val();
    var pwd = $("#pwd").val();

    $.ajax({
        type: 'POST',
        url: './assets/php/login.php',
        data: {
            id: id,
            pwd: pwd,
            login: 1
        },
        beforeSend: function() {
            $(".submit").html(' <button type="button" class="btn btn-primary my-4">Bezig <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
        },
        success: function(response) {
            if (response == "errorEmpty") {
                Swal.fire({
                    title: 'Vul alles in!',
                    text: 'Niet alles in ingevuld',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Inloggen()" class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "fatalError") {
                Swal.fire({
                    title: 'Fatal Error',
                    text: 'Something is wrong',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Inloggen()"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "pwdError") {
                Swal.fire({
                    title: 'Password Error',
                    text: 'Uw ingevoerde password klopt niet',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Inloggen()"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "userError") {
                Swal.fire({
                    title: 'ID bestaat niet',
                    text: 'Uw ingevoerde ID Bestaat niet u moet het registreren',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    showDenyButton: true,
                    denyButtonText: 'Terug',
                    confirmButtonColor: '#2e8b57',
                    confirmButtonText: 'Registreren',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isDenied) {
                        $(".submit").html(' <button type="button" onclick=" Inloggen()"  class="btn btn-primary my-4">Registreer</button>')
                    } else if (result.isConfirmed) {
                        $('#login-form').trigger("reset");
                        window.location = './pages/register.php'
                    }
                })
            } else if (response == "sqlError") {
                Swal.fire({
                    title: 'Database Error',
                    text: 'Something is wrong',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Inloggen()"  class="btn btn-primary my-4">Registreer</button>')

                    }
                })
            } else if (response == "success") {
                let timerInterval
                Swal.fire({
                    title: 'U bent succesvol ingelogd',
                    html: 'U gaat nu naar de resultaten pagina',
                    timer: 1500,
                    timerProgressBar: true,
                    willOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = Swal.getTimerLeft()
                                }
                            }
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        window.location = './pages/dashboard-gebruiker.php'
                    }
                })
            } else if (response == "idError") {
                Swal.fire({
                    title: 'ID klopt niet',
                    text: 'ID dat u heeft ingevoerd klopt niet check als u 6 cijfers en 2 letters heb',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" Inloggen()"  class="btn btn-primary my-4">Registreer</button>')
                    }
                })
            }

        }
    });
}


function adminLogin() {
    var user = $("#username").val();
    var pwd = $("#pwd").val();

    $.ajax({
        type: 'POST',
        url: '../assets/php/login.php',
        data: {
            user: user,
            pwd: pwd,
            adminLogin: 1
        },
        beforeSend: function() {
            $(".submit").html(' <button type="button" class="btn btn-primary my-4">Bezig <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
        },
        success: function(response) {

            if (response == "errorEmpty") {
                Swal.fire({
                    title: 'Vul alles in!',
                    text: 'Niet alles in ingevuld',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" adminLogin()" class="btn btn-primary my-4">Inloggen</button>')
                    }
                });

            } else if (response == "pwdError") {
                Swal.fire({
                    title: 'Password Klopt niet',
                    text: 'Password klopt niet weer invoeren',
                    icon: 'error',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" adminLogin()" class="btn btn-primary my-4">Inloggen</button>')
                    }
                })
            } else if (response == "userError") {
                Swal.fire({
                    title: 'Account bestaat niet',
                    text: 'Account bestaat niet contact Super Admin',
                    icon: 'error',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $(".submit").html(' <button type="button" onclick=" adminLogin()" class="btn btn-primary my-4">Inloggen</button>')
                    }
                })
            } else if (response == "success") {
                let timerInterval
                Swal.fire({
                    title: 'U bent succesvol ingelogd',
                    html: 'U gaat nu naar de resultaten pagina',
                    timer: 1500,
                    timerProgressBar: true,
                    willOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = Swal.getTimerLeft()
                                }
                            }
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        window.location = './dashboard.php'
                    }
                })
            }

        }
    })
}