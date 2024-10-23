// Função para carregar a lista de usuários do LocalStorage e exibir na tela
function carregarUsuarios() {
    const listaUsuarios = document.getElementById('usuarios-lista');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de recarregar

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.forEach((usuario) => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome} - ${usuario.email}`;
        listaUsuarios.appendChild(li);
    });
}

// Função para salvar um novo usuário
function salvarUsuario(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const novoUsuario = { nome, email };

    // Recupera a lista de usuários e adiciona o novo
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    carregarUsuarios(); // Atualiza a lista com o novo cadastro

    // Limpa os campos do formulário
    document.getElementById('cadastro-form').reset();
}

// Adiciona o evento de submissão ao formulário
document.getElementById('cadastro-form').addEventListener('submit', salvarUsuario);

// Carrega os usuários ao abrir a página
carregarUsuarios();
