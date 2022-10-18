function listar() {
    return "listar Produtos"; 
}
function cadastrar() {
    return "Cadastrar Produtos"; 
}
function editar() {
    return "Editar Produtos"; 
}
function excluir() {
    return "Excluir Produtos"; 
}

module.exports = {
    listar: listar,
    cadastrar: cadastrar,
    editar: editar,
    excluir:excluir,
}