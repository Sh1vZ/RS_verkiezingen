//BEGIN GLOBAL ERROR MESSAGES
function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("customFileLang").files[0]);

    oFReader.onload = function(oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
};

function PreviewImage1() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("customFileLang1").files[0]);

    oFReader.onload = function(oFREvent) {
        document.getElementById("uploadPreview1").src = oFREvent.target.result;
        $('#txt').html("");
    };
};

function existMessage() {
    Swal.fire({
        title: 'Ingevoerde gegevens bestaan al',
        text: 'Voer  iets anders in',
        icon: 'error',
        confirmButtonColor: '#2e8b57',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {

        }
    })
}

function emptyMessage() {
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
}

function imgMessage() {
    Swal.fire({
        title: 'Foto is niet goed!',
        text: 'Foto formaat is niet goed alleen jpeg,jpg en png ',
        icon: 'error',
        confirmButtonColor: '#2e8b57',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {

        }
    })
}

function fatalerrorMessage() {
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
}

function sqlerrorMessage() {
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
}

function errorInput() {
    Swal.fire({
        title: 'Ingevoerde gegevens kloppen niet',
        text: 'Ingevoerde gegevens mag geen nummer of speciaal character hebben',
        icon: 'error',
        confirmButtonColor: '#2e8b57',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {

        }
    })
}

//---END GLOBAL ERROR MESSAGES

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
                    allowOutsideClick: false,
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
                existMessage();
            } else if (response == "errorEmpty") {
                emptyMessage();
            } else if (response == "fatalError") {
                fatalerrorMessage()
            } else if (response == "sqlError") {
                sqlerrorMessage()
            } else if (response == "errorDistrict") {
                errorInput()
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
                emptyMessage()
            } else if (response == "fatalError") {
                fatalerrorMessage()
            } else if (response == "sqlError") {
                sqlerrorMessage()
            } else if (response == "errorDistrict") {
                errorInput()
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
                existMessage();
            }
        }
    })
}
//--- END DISTRICTEN

//BEGIN PARTIJEN
function fetchPartijen() {

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
            'url': '../assets/php/fetch-partijen.php'
        },
        'columns': [
            { data: 'ID_partij' },
            { data: 'Partijnaam' },
            { data: 'Partijafkorting' },
            { data: 'action' },
        ],
        "columnDefs": [
            { "orderable": false, "targets": [0, 3] }
        ]

    });
    $('#datatable').css("width", "100%");

}

function addPartij() {
    var partij = $("#partij").val();
    var afkorting = $("#afkorting").val();

    $.ajax({
        type: 'POST',
        url: '../assets/php/partijen-crud.php',
        data: {
            partij: partij,
            afkorting: afkorting,
            insertpartij: 1
        },
        beforeSend: function() {},
        success: function(response) {
            if (response == "exist") {
                existMessage()
            } else if (response == "errorEmpty") {
                emptyMessage();
            } else if (response == "fatalError") {
                fatalerrorMessage()
            } else if (response == "sqlError") {
                sqlerrorMessage()
            } else if (response == "errorPartij") {
                errorInput()
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
                $('#partij-form').trigger("reset");
                $('#datatable').DataTable().ajax.reload();

            }


        }
    })

}

function editPartij(e) {
    var id = e;
    $.ajax({
        type: 'POST',
        url: '../assets/php/fetch-single.php',
        data: {
            id: id,
            getPartij: 1
        },
        success: function(response) {
            $('#modalEdit').html(response);
            $('#modalEdit').modal('toggle');
        }
    })
}

function updatePartij(e) {
    var id = e;
    var partij = $("#partij-edit").val();
    var afkorting = $("#afkorting-edit").val();
    $.ajax({
        type: 'POST',
        url: '../assets/php/partijen-crud.php',
        data: {
            id: id,
            partij: partij,
            afkorting: afkorting,
            updatePartij: 1
        },
        success: function(response) {
            if (response == "errorEmpty") {
                emptyMessage()
            } else if (response == "fatalError") {
                fatalerrorMessage()
            } else if (response == "sqlError") {
                sqlerrorMessage()
            } else if (response == "errorPartij") {
                errorInput()
            } else if (response == "success") {
                Swal.fire({
                    title: 'Successvol',
                    text: "Partij succesvol Bijgewerkt",
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
                existMessage();
            }
        }
    })
}

function deletePartij(e) {
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
                url: '../assets/php/partijen-crud.php',
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
//--- END Partijen

// BEGIN KANDIDATEN

function fetchKandidaten() {
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
            'url': '../assets/php/fetch-kandidaten.php'
        },
        'columns': [
            { data: 'ID_kandidaten' },
            { data: 'image' },
            { data: 'acternaam' },
            { data: 'voornaam' },
            { data: 'partij' },
            { data: 'district' },
            { data: 'action' },
        ],
        "columnDefs": [
            { "orderable": false, "targets": [0, 1, 2, 3, 4, 5, 6] }
        ]

    });
    $('#datatable').css("width", "100%");

}

$("#form-kandidaat").on('submit', (function(e) {
    e.preventDefault();
    $.ajax({
        url: "../assets/php/kandidaten-insert.php",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function() {},
        success: function(response) {
            if (response == 'success') {
                Swal.fire({
                    title: 'Successvol',
                    text: "Kandidaat succesvol ingevoerd",
                    icon: 'success',
                    showDenyButton: true,
                    confirmButtonColor: '#2e8b57',
                    confirmButtonText: 'Meer toevoegen?',
                    denyButtonText: 'Sluiten?',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        $('#form-kandidaat').trigger("reset");
                        $('#district').val(null).trigger('change');
                        $('#partij').val(null).trigger('change');
                        $('#uploadPreview').attr('src', '');;
                    } else if (result.isDenied) {
                        $('#form-kandidaat').trigger("reset");
                        $('#district').val(null).trigger('change');
                        $('#partij').val(null).trigger('change');
                        $('#uploadPreview').attr('src', '');;
                        $('#modal').modal('toggle');

                    }
                })
                $('#form-kandidaat').trigger("reset");
                $('#datatable').DataTable().ajax.reload();

            } else if (response == "errorEmpty") {
                emptyMessage();
            } else if (response == "errorImage") {
                imgMessage();
            } else if (response == "errorEmpty") {
                emptyMessage();
            } else if (response == "errorPartij") {
                errorInput();
            }
        },
    });
}));



$("#form-kandidaat-edit").on('submit', (function(e) {
    e.preventDefault();
    $.ajax({
        url: "../assets/php/kandidaten-update.php",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function() {},
        success: function(response) {
            if (response == 'success') {
                Swal.fire({
                    title: 'Successvol',
                    text: "Kandidaat succesvol Bijgewerkt",
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
            } else if (response == "errorEmpty") {
                emptyMessage();
            } else if (response == "errorImage") {
                imgMessage();
            } else if (response == "errorEmpty") {
                emptyMessage();
            } else if (response == "errorPartij") {
                errorInput();
            }
        },
    });
}));




function deleteKandidaat(e) {

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
                url: '../assets/php/kandidaten-crud.php',
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

function editKandidaat(e) {
    var id = e;
    $.ajax({
        type: 'POST',
        url: '../assets/php/fetch-single.php',
        data: {
            id: id,
            getKandidaat: 1
        },
        success: function(response) {
            $('#modalEdit').html(response);
            $('#modalEdit').modal('toggle');
        }
    })
}

function fetchStem(e) {
    var district = e;
    var partijStem = $("#partij-stem").val();

    $.ajax({
        type: 'POST',
        url: '../assets/php/fetch-stem.php',
        data: {
            district: district,
            partijStem: partijStem,
            fetchStem: 1
        },
        success: function(response) {

            $('#kandidatenTabel').html(response);
        }
    })
}

function Stemmen(e, l) {
    var kandidaat = e;
    var idb = l;
    var anaam = $("#anaam").html();
    var vnaam = $("#vnaam").html();
    var partij = $("#pnaam").html();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Bent u zeker?',
        text: `U gaat stemmen op ${vnaam+" "+ anaam} van partij ${partij}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ja, Stem!',
        cancelButtonText: 'Annuleren!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'POST',
                url: '../assets/php/burger-stemmen.php',
                data: {
                    kandidaat: kandidaat,
                    idb: idb,
                    stemmen: 1
                },
                success: function(response) {
                    if (response == 'success') {
                        let timerInterval
                        Swal.fire({
                            title: 'U heeft succesvol Getemd',
                            html: 'U gaat nu naar de resultaten pagina',
                            timer: 2500,
                            allowOutsideClick: false,
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
                                window.location = './dashboard-gebruiker.php'
                            }
                        })
                    } else if (response == 'sqlError') {
                        sqlerrorMessage();
                    }
                }
            })

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Niet Stemmen',
                'U heeft niet gestemd',
                'info'
            )
        }
    })
}