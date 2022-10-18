const http = require('http');
const produto = require('./acoes/produto');
const cliente = require('./acoes/cliente');
const router = require('./router');

const host = 'localhost';
const port = 8000

// funcao que vai ser executada sempre que houver alguma requisicao por parte do cliente
function execucao (pedido, resposta) {
    //definindo o tipo de conteudo da resposta, para json
    resposta.setHeader('Content-Type', 'application/Json');

    let conteudo = router(pedido.url);

    resposta.end(JSON.stringify(conteudo));
    }
    
// criando o servidor e definindo a funcao que ficara sendo executada
const server = http.createServer(execucao);

// subindo o servidor para ficar escutando as requisições
server.listen(port, host, () => {
    console.log(`servidor rodando no endereco http://${host}:${port}`)
});
