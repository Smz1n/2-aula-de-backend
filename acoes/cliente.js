function listar() {
    return [
        {
            id: 1,
            nome: "Chiquim"
        },
        {
            id: 2,
            nome: "Maria"
        }

    ]
}
function cadastrar() {
    return "Cadastrar cliente";
}
function editar() {
    return "Editar cliente";
}
function excluir() {
    return "Excluir cliente";
}

module.exports = {
    listar: listar,
    cadastrar: cadastrar,
    editar: editar,
    excluir: excluir,
}