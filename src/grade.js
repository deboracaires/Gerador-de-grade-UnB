let horarios = {
    segm1: "",
    segm2: "",
    segm3: "",
    segm4: "",
    segm5: "",
    segt1: "",
    segt2: "",
    segt3: "",
    segt4: "",
    segt5: "",
    term1: "",
    term2: "",
    term3: "",
    term4: "",
    term5: "",
    tert1: "",
    tert2: "",
    tert3: "",
    tert4: "",
    tert5: "",
    quam1: "",
    quam2: "",
    quam3: "",
    quam4: "",
    quam5: "",
    quat1: "",
    quat2: "",
    quat3: "",
    quat4: "",
    quat5: "",
    quim1: "",
    quim2: "",
    quim3: "",
    quim4: "",
    quim5: "",
    quit1: "",
    quit2: "",
    quit3: "",
    quit4: "",
    quit5: "",
    sexm1: "",
    sexm2: "",
    sexm3: "",
    sexm4: "",
    sexm5: "",
    sext1: "",
    sext2: "",
    sext3: "",
    sext4: "",
    sext5: "",
    sabm1: "",
    sabm2: "",
    sabm3: "",
    sabm4: "",
    sabm5: "",
    sabt1: "",
    sabt2: "",
    sabt3: "",
    sabt4: "",
    sabt5: "",
};

let disciplinasNaGrade = [];


function adicionaDisciplinaGrade(element) {
    let horarioClicado = element.parentNode.parentNode.querySelector("#horario").innerHTML;
    let nomeDisciplina = element.parentNode.parentNode.querySelector("#nomeDisciplina_table").innerHTML

    if(element.checked) {
        adicionarHorario(horarioClicado, nomeDisciplina)
    }else {
        removerHorario(horarioClicado)
    }
    
}

function filtrarHorarios(horarioClicado) {
    let aux = []
    let auxHorarios = []

    horarioClicado.split("").forEach(element => {
        
        if (element === "M" || element === "T") {
            let guide
            let tex
            element === "M" ? guide = 'm' : guide = 't'
            for (let i = 0; i < aux.length; i++) {
               if (aux[i] === '2') {
                    tex = `seg` + guide
               } else if (aux[i] === '3') {
                    tex = `ter` + guide
               } else if (aux[i] === '4') {
                    tex = `qua` + guide
               } else if (aux[i] === '5') {
                    tex = `qui` + guide
               } else if (aux[i] === '6') {
                    tex = `sex` + guide
               }
               auxHorarios.push(tex)
           }
           aux = []
       } else {
            aux.push(element)
       }      
    });
    return { aux, auxHorarios}
}

function adicionarHorario(horarioClicado, nomeDisciplina) {
    let { aux, auxHorarios } = filtrarHorarios(horarioClicado)

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < auxHorarios.length; j++) {
            let auxH = auxHorarios[j] + aux[i]
            horarios[auxH] = nomeDisciplina
        }
    }
    renderizarGrade()
}

function removerHorario(horarioClicado) {
    let { aux, auxHorarios } = filtrarHorarios(horarioClicado)

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < auxHorarios.length; j++) {
            let auxH = auxHorarios[j] + aux[i]
            horarios[auxH] = ""
        }
    }
    renderizarGrade()
}

function renderizarGrade() {
    let htmlTable = `
        <h2 class="text-center mb-4">Grade Horária</h2>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class="text-center align-middle">Segunda-feira</th>
                        <th class="text-center align-middle">Terça-feira</th>
                        <th class="text-center align-middle">Quarta-feira</th>
                        <th class="text-center align-middle">Quinta-feira</th>
                        <th class="text-center align-middle">Sexta-feira</th>
                        <th class="text-center align-middle">Sábado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="5" class="text-center align-middle">M</th>
                        <td class="text-center align-middle">08:00</td>
                        <td class="text-center align-middle">${horarios.segm1}</td>
                        <td class="text-center align-middle">${horarios.term1}</td>
                        <td class="text-center align-middle">${horarios.quam1}</td>
                        <td class="text-center align-middle">${horarios.quim1}</td>
                        <td class="text-center align-middle">${horarios.sexm1}</td>
                        <td class="text-center align-middle">${horarios.sabm1}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">09:00</td>
                        <td class="text-center align-middle">${horarios.segm2}</td>
                        <td class="text-center align-middle">${horarios.term2}</td>
                        <td class="text-center align-middle">${horarios.quam2}</td>
                        <td class="text-center align-middle">${horarios.quim2}</td>
                        <td class="text-center align-middle">${horarios.sexm2}</td>
                        <td class="text-center align-middle">${horarios.sabm2}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">10:00</td>
                        <td class="text-center align-middle">${horarios.segm3}</td>
                        <td class="text-center align-middle">${horarios.term3}</td>
                        <td class="text-center align-middle">${horarios.quam3}</td>
                        <td class="text-center align-middle">${horarios.quim3}</td>
                        <td class="text-center align-middle">${horarios.sexm3}</td>
                        <td class="text-center align-middle">${horarios.sabm3}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">11:00</td>
                        <td class="text-center align-middle">${horarios.segm4}</td>
                        <td class="text-center align-middle">${horarios.term4}</td>
                        <td class="text-center align-middle">${horarios.quam4}</td>
                        <td class="text-center align-middle">${horarios.quim4}</td>
                        <td class="text-center align-middle">${horarios.sexm4}</td>
                        <td class="text-center align-middle">${horarios.sabm4}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">12:00</td>
                        <td class="text-center align-middle">${horarios.segm5}</td>
                        <td class="text-center align-middle">${horarios.term5}</td>
                        <td class="text-center align-middle">${horarios.quam5}</td>
                        <td class="text-center align-middle">${horarios.quim5}</td>
                        <td class="text-center align-middle">${horarios.sexm5}</td>
                        <td class="text-center align-middle">${horarios.sabm5}</td>
                    </tr>
                    <tr>
                        <th rowspan="5" class="text-center align-middle">T</th>
                        <td class="text-center align-middle">13:00</td>
                        <td class="text-center align-middle">${horarios.segt1}</td>
                        <td class="text-center align-middle">${horarios.tert1}</td>
                        <td class="text-center align-middle">${horarios.quat1}</td>
                        <td class="text-center align-middle">${horarios.quit1}</td>
                        <td class="text-center align-middle">${horarios.sext1}</td>
                        <td class="text-center align-middle">${horarios.sabt1}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">14:00</td>
                        <td class="text-center align-middle">${horarios.segt2}</td>
                        <td class="text-center align-middle">${horarios.tert2}</td>
                        <td class="text-center align-middle">${horarios.quat2}</td>
                        <td class="text-center align-middle">${horarios.quit2}</td>
                        <td class="text-center align-middle">${horarios.sext2}</td>
                        <td class="text-center align-middle">${horarios.sabt2}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">15:00</td>
                        <td class="text-center align-middle">${horarios.segt3}</td>
                        <td class="text-center align-middle">${horarios.tert3}</td>
                        <td class="text-center align-middle">${horarios.quat3}</td>
                        <td class="text-center align-middle">${horarios.quit3}</td>
                        <td class="text-center align-middle">${horarios.sext3}</td>
                        <td class="text-center align-middle">${horarios.sabt2}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">16:00</td>
                        <td class="text-center align-middle">${horarios.segt4}</td>
                        <td class="text-center align-middle">${horarios.tert4}</td>
                        <td class="text-center align-middle">${horarios.quat4}</td>
                        <td class="text-center align-middle">${horarios.quit4}</td>
                        <td class="text-center align-middle">${horarios.sext4}</td>
                        <td class="text-center align-middle">${horarios.sabt4}</td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle">17:00</td>
                        <td class="text-center align-middle">${horarios.segt5}</td>
                        <td class="text-center align-middle">${horarios.tert5}</td>
                        <td class="text-center align-middle">${horarios.quat5}</td>
                        <td class="text-center align-middle">${horarios.quit5}</td>
                        <td class="text-center align-middle">${horarios.sext5}</td>
                        <td class="text-center align-middle">${horarios.sabt5}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `

    document.querySelector(".grade").innerHTML = htmlTable
}