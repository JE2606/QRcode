// VARIABLE PARA TOMAR LOS ELEMENTOS DEL ESPACION DONDE ESTARA EL QR
let qrdiv = document.getElementById('imgQR'),

// VARIABLE PARA TOMAR LO QUE PASE EN EL BOTON
    btnConvertir = document.getElementById('convertir');

    // CODIGO PARA GENERAR EL QR DE LA LIBRERIA GENERADORA DEL QR
    const qrcode = new QRCode(imgQR,{
    })

// FUNCION PARA ACCION DE CREAR EL QR
function crearQR(){
    // VARIABLE DE LA FUNCION PARA TOMAR LO QUE PASE EN EL INPUT
    let texto = document.getElementById('text');
    // ESTILO PARA EL ESPACIO DONDE SE GENERE EL QR
    document.querySelector("#imgQR").style.display = "none";
    // EVENTO PARA EL BOTON AL HACER CLICK 
    btnConvertir.addEventListener('click', e => {
        // SI EL INPUT ESTA VACIO, HACER:
        if(!texto.value){
            // CODIGO PARA LA ALERTA
            Swal.fire({
                title: 'ADVERTENCIA!',
                text: 'Ingrese algún texto o algna URL para continuar.',
                icon: 'warning',
                confirmButtonText: 'Entendido',
                padding: '3%',
                timer: 5000,
                timerProgressBar: true,

                customClass: {
                    popup: 'popup-class',
                },

                confirmButtonColor: '#f17f67',

            })
            // ESTILO EN CASO DE QUE EL INPUT ESTE VACIO  
            document.querySelector("#imgQR").style.display = "none";
            texto.focus();
            return;
            // SI EL INPUT TIENE ALGUN ELEMENTO
        } else{
            // ESTILO SI SE GENERA EL QR
            document.querySelector("#imgQR").style.display = "block";
            // CODIGO GENERADOR DEL QR DE LA LIBRERIA 
            qrcode.makeCode(texto.value);
        }
    })

}
// LLAMADO DE LA FUNCION
crearQR()