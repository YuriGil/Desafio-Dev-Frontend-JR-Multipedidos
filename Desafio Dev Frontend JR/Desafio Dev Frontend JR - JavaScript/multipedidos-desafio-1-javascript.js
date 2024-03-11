// Array de usuários
const users = [
    { nome: 'Alice', idade: 25, email: 'alice@example.com' },
    { nome: 'Bob', idade: 30, email: 'bob@example.com' },
    { nome: 'Charlie', idade: 35, email: 'charlie@example.com' }
  ];
  //Chamar a função de busca de valor
  var buscaValor = 'Alice';

  // Função para buscar usuário por valor
  function buscarUsuarioPorValor(arrayUsuarios, valor) {
    return new Promise((resolve, reject) => {
      for (const usuario of arrayUsuarios) {
        // Verifica se o valor existe em alguma propriedade do usuário
        if (Object.values(usuario).includes(valor)) {
          resolve(usuario); // Resolve a promise com o usuário encontrado
          return;
        }
      }
      // Se nenhum usuário for encontrado com o valor especificado
      reject(new Error('Nenhum usuário encontrado com o valor especificado'));
    });
  }
  
  // Utilização da promise para buscar usuário por email
  buscarUsuarioPorValor(users, buscaValor)
    .then(usuario => {
      console.log('Usuário encontrado:', usuario);
    })
    .catch(error => {
      console.error(error.message);
    });
  