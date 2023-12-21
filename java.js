

function calcular()  { //a

    let horas = document.getElementById("horas").value
    let categoria = document.getElementById("categoria").value
    let horas_trabajadas
    let tarifas = [12000, 17000, 22000]
    var imagen = document.getElementById("ima")



    if (horas >= 41 )  { //b D1
 
        let sobrantes = horas - 40
        let hora_sobrante = horas - sobrantes

        if (categoria == 1) { //d D2
            horas_trabajadas = hora_sobrante * tarifas[0]
            horas_extras = (tarifas[0] * 1.25) * sobrantes

        }

        else if (categoria == 2) { //e D3
            horas_trabajadas = hora_sobrante * tarifas[1]
            horas_extras = (tarifas[1] * 1.25) * sobrantes

        }


        else { //f
            horas_trabajadas = hora_sobrante * tarifas[2]
            horas_extras = (tarifas[2] * 1.25) * sobrantes

        }

        let horas_pagar = horas_trabajadas + horas_extras

        const valorMonetario = horas_pagar.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }); // formato de moneda en pesos colombianos


        document.getElementById("respuesta").innerText = ` ${valorMonetario}`


    } else { //c 



        if (categoria == 1) { //g D4
            horas_trabajadas = horas * tarifas[0]

        }


        else if (categoria == 2) { //h D5
            horas_trabajadas = horas * tarifas[1]

        }


        else { //i 
            horas_trabajadas = horas * tarifas[2]
        }


        const valorMonetario = horas_trabajadas.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }); // formato de moneda en pesos colombianos

        document.getElementById("respuesta").innerText = ` ${valorMonetario}`

    }



    imagen.classList.remove("billete_in");
    imagen.classList.add("billete");
    setTimeout(() => {
        imagen.classList.remove("billete");
        imagen.classList.add("billete_in");
    }, 1000);

}





