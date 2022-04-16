$(document).ready(function () {

    $('form').submit(function (evento) {
        evento.preventDefault()

        let valorInput = $('#heroeValor').val()

        $.ajax({
            url: 'https://superheroapi.com/api.php/644414986697199/' + valorInput,
            success: function (data) {

                let img = data.image.url;
                let nombre = data.name;
                let conex = data.connections['group-affiliation'];
                let vida_public = data.biography.publisher;

                let job = data.work.occupation;
                let aparicion = data.biography['first-appearance'];
                let altura = data.appearance.height;
                let peso = data.appearance.weight
                let vida = data.biography.aliases;

                /* no puedo ingresar a las propiedades separadas con un - */

                /* ${result.biography['first-appearance'] */



                $('#tarjeta').html(`
                
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${img}" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">${nombre}</h1>
                                <p class="card-text"> Conexiones: ${conex}</p>
                                <p class="card-text">Publicado por: ${vida_public}</p>
                                <hr>
                                <p class="card-text">Ocupación: ${job}</p>
                                <hr>
                                <p class="card-text">Primera aparición: ${aparicion}</p>
                                <p class="card-text">Altura: ${altura}</p>
                                <hr>
                                <p class="card-text">Peso: ${peso}</p>
                                <hr>
                                <p class="card-text">Alianzas: ${vida}</p>
                                
                            </div>
                        </div>
                    </div>
                </div> `)

                

                let inteligencia = Number(data.powerstats.intelligence);
                let fuerza = Number (data.powerstats.strength);
                let velocidad = Number (data.powerstats.speed);
                let durabilidad = Number (data.powerstats.durability);
                let poder = Number (data.powerstats.power);
                let combate = Number (data.powerstats.combat);

                /* no se muestra la grafica aún mostrando los valores de correctamente en el console log del arreglo config*/

               /*  let config = {
                    theme: "light2",
                    animationEnabled: true,
                    title : {
                        text: `Estadisticas de poder para ${nombre}`
                    },
                    data : [{
                        type : "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}%",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}%",
                        dataPoint : [
                            { y: inteligencia, label: "Inteligencia" },
                            { y: fuerza, label: "Fuerza" },
                            { y: velocidad, label: "Velocidad" },
                            { y: durabilidad, label: "Durabilidad" },
                            { y: poder, label: "Poder" },
                            { y: combate, label: "Combate" },]}]} 

                        

                let chart = new CanvasJS.Chart('estadisticas', config);
                chart.render(); */

                const chart = new CanvasJS.Chart("estadisticas", {
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    animationEnabled: true,
                    title: {
                        text: `Estadisticas de poder para ${nombre}`
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}%",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}%",
                        dataPoints: [
                            { y: inteligencia, label: "Inteligencia" },
                            { y: fuerza, label: "Fuerza" },
                            { y: velocidad, label: "Velocidad" },
                            { y: durabilidad, label: "Durabilidad" },
                            { y: poder, label: "Poder" },
                            { y: combate, label: "Combate" }
                        ]
                    }]
                });

                chart.render();
                    
                /* let chart = new CanvasJS.Chart("chartContainer", {
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: `Estadisticas de poder para ${nombre}`
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}%",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}%",
                        dataPoints: [
                            { y: inteligencia, label: "Inteligencia" },
                            { y: fuerza, label: "Fuerza" },
                            { y: velocidad, label: "Velocidad" },
                            { y: durabilidad, label: "Durabilidad" },
                            { y: poder, label: "Poder" },
                            { y: combate, label: "Combate" }]}]});
                chart.render(); */ 

            }

        })

    })

})