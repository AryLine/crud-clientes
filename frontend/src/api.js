
const API = 'http://localhost:3333/clientes';

export async function requisicao(caminho = '', opcoes = {}) {
  const resposta = await fetch(`${API}${caminho}`, opcoes);

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || 'Erro na requisição.');
  }

  return {
    dados: Array.isArray(dados) ? dados : dados
  };
}
