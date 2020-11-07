//---BEGIN LOGIN REGISTER---
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
                        $(".submit").html(' <button type="button" onclick="Register()" name="register"  class="btn btn-primary my-4">Registreer</button>')

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

function Logout() {
    $.ajax({
        url: '../assets/php/logout.php?action=logout',
        success: function(data) {
            if (data = "success") {
                let timerInterval
                Swal.fire({
                    title: 'U bent succesvol uitgelogd',
                    html: 'U gaat terug naar de inlog pagina',
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
                        window.location = '../index.php'
                    }
                })
            }

        }
    });

}
//---END LOGIN REGISTER
//-----------------------//
//--- BEGIN DISTRICTEN
function fetchDistricten() {

    $('#datatable').DataTable({
        'processing': true,
        'serverSide': true,
        "responsive": true,
        'serverMethod': 'post',
        "scrollCollapse": false,
        'keys': !0,
        'select': {
            'style': "multi"
        },
        'language': {
            'paginate': {
                'previous': "<i class='fas fa-angle-left'>",
                'next': "<i class='fas fa-angle-right'>"
            },
            'processing': 'loading'
        },
        'ajax': {
            'url': '../assets/php/fetch-districten.php'
        },
        'columns': [
            { data: 'ID_district' },
            { data: 'districtnaam' },
            { data: 'action' },
        ],
        "columnDefs": [
            { "orderable": false, "targets": [2, 0] }
        ]

    });
    $('#datatable').css("width", "100%");

}

function deleteDistrict(e) {
    var id = e;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Bent u zeker?',
        text: "U kunt dit niet ongedaan maken!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ja, Verwijder het!',
        cancelButtonText: 'Annuleren!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: '../assets/php/districten-crud.php',
                data: {
                    id: id,
                    delete: 1
                },
                success: function(response) {
                    if (response == 'success') {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Verwijderd.',
                            'success'
                        )
                        $('#datatable').DataTable().ajax.reload();
                    }
                }
            })

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'alles is OK',
                'error'
            )
        }
    })
}

function addDistrict() {
    var district = $("#district-input").val();

    $.ajax({
        type: 'POST',
        url: '../assets/php/districten-crud.php',
        data: {
            district: district,
            insertdistrict: 1
        },
        beforeSend: function() {},
        success: function(response) {
            if (response == "exist") {
                Swal.fire({
                    title: 'District bestaat al',
                    text: 'Voer in iets anders',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {

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

                    }
                })
            } else if (response == "errorDistrict") {
                Swal.fire({
                    title: 'Ingevoerde district klopt niet',
                    text: 'Districtnaam mag geen nummers hebben',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {

                    }
                })
            } else if (response == "success") {
                Swal.fire({
                    title: 'Successvol',
                    text: "District succesvol ingevoerd",
                    icon: 'success',
                    showDenyButton: true,
                    confirmButtonColor: '#2e8b57',
                    confirmButtonText: 'Meer toevoegen?',
                    denyButtonText: 'Sluiten?',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        // window.location = '../index.php'
                    } else if (result.isDenied) {
                        $('#modal').modal('toggle');

                    }
                })
                $('#districten-form').trigger("reset");
                $('#datatable').DataTable().ajax.reload();

            }


        }
    })

}

function editDistrict(e) {
    var id = e;
    $.ajax({
        type: 'POST',
        url: '../assets/php/fetch-single.php',
        data: {
            id: id,
            getDistrict: 1
        },
        success: function(response) {
            $('#modalEdit').html(response);
            $('#modalEdit').modal('toggle');
        }
    })
}

function updateDistrict(e) {
    var id = e;
    var district = $("#district-edit").val();
    $.ajax({
        type: 'POST',
        url: '../assets/php/districten-crud.php',
        data: {
            id: id,
            district: district,
            updateDistrict: 1
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

                    }
                })
            } else if (response == "errorDistrict") {
                Swal.fire({
                    title: 'Ingevoerde district klopt niet',
                    text: 'Districtnaam mag geen nummers hebben',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {

                    }
                })
            } else if (response == "success") {
                Swal.fire({
                    title: 'Successvol',
                    text: "District succesvol Bijgewerkt",
                    icon: 'success',
                    confirmButtonColor: '#2e8b57',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $('#modalEdit').modal('toggle');
                    }
                })
                $('#districten-form-edit').trigger("reset");
                $('#datatable').DataTable().ajax.reload();

            } else if (response == 'exist') {
                Swal.fire({
                    title: 'ID Bestaat al',
                    text: 'Voer de correcte ID in',
                    icon: 'error',
                    confirmButtonColor: '#2e8b57',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {}
                })
            }
        }
    })
}