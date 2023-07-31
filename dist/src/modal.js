let htmlModal = `
<div class="modal fade" id="modalAdicionarDisciplina" tabindex="-1" role="dialog" aria-labelledby="modalAdicionarDisciplinaLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- Cabeçalho do modal -->
            <div class="modal-header">
                <h5 class="modal-title" id="modalAdicionarDisciplinaLabel">Adicionar Disciplina</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <!-- Corpo do modal -->
            <div class="modal-body">
                <!-- Formulário para adicionar disciplina -->
                <form id="adicionarDisciplina">
                    <div class="form-group">
                        <label for="nomeDisciplina">Nome da Disciplina</label>
                        <input type="text" class="form-control" id="nomeDisciplina" placeholder="Digite o nome da disciplina" required>
                    </div>
                    <div class="form-group">
                        <label for="siglaDisciplina">Sigla</label>
                        <input type="text" class="form-control" id="siglaDisciplina" placeholder="Digite a sigla da disciplina" required>
                    </div>
                    <div class="form-group">
                        <label for="nomeProfessor">Nome do professor</label>
                        <input type="text" class="form-control" id="nomeProfessor" placeholder="Digite o nome do professor" required>
                    </div>
                    <div class="form-group">
                        <label for="horariosDisciplina">Horários</label>
                        <input type="text" class="form-control" id="horariosDisciplina" placeholder="Digite os horários da disciplina" required>
                        <span>Exemplo: 24T23 </span>
                    </div>
                    <!-- Botão para salvar a disciplina -->
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </form>
            </div>
        </div>
    </div>
</div>
`
document.querySelector("body").innerHTML += htmlModal

let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", function() {
    $("#modalAdicionarDisciplina").modal("show");
});

let formAdicionarDisciplina = document.getElementById("adicionarDisciplina");


formAdicionarDisciplina.addEventListener("submit", function(e) {
    e.preventDefault();

    let nomeDisciplina = document.getElementById("nomeDisciplina").value;
    let siglaDisciplina = document.getElementById("siglaDisciplina").value;
    let nomeProfessor = document.getElementById("nomeProfessor").value;
    let horariosDisciplina = document.getElementById("horariosDisciplina").value;

    let tableBody = document.querySelector("tbody")
    tableBody.innerHTML += `
        <tr>
            <td >${nomeDisciplina}</td>
            <td id="nomeDisciplina_table" >${siglaDisciplina}</td>
            <td> ${nomeProfessor}</td>
            <td id="horario">${horariosDisciplina}</td>
            <td><input type="checkbox" onclick="adicionaDisciplinaGrade(this)" id="mostrarDisciplina"></input> </td>
        </tr>
    `;
    document.getElementById("nomeDisciplina").value = "";
    document.getElementById("siglaDisciplina").value = "";
    document.getElementById("nomeProfessor").value = "";
    document.getElementById("horariosDisciplina").value = "";

    $("#modalAdicionarDisciplina").modal("hide");
  });