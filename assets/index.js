document.addEventListener("DOMContentLoaded", function () {
  // Seleção de elementos
  const btnSubscribe = document.querySelector('.btn');
  const form = document.getElementById('subscribeForm');  // Formulário
  const emailInput = document.getElementById('email');    // Campo de e-mail
  const messageDiv = document.getElementById('resultados');  // Div para mostrar os resultados

  // Função para mostrar os resultados
  function mostrarResultado(nome, email) {
    messageDiv.innerHTML = `
      <h2>Inscrição realizada com sucesso!</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
  }

  // Evento de submit do formulário de inscrição
  form.addEventListener('submit', function (e) {
    e.preventDefault();  // Impede o envio do formulário para evitar recarregar a página

    const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';  // Nome
    const email = emailInput.value.trim();  // E-mail

    // Verifica se todos os campos foram preenchidos
    if (name && email) {
      mostrarResultado(name, email);  // Exibe a mensagem de sucesso
      form.reset();  // Limpa os campos do formulário
    } else {
      messageDiv.innerHTML = 'Por favor, preencha todos os campos.';  // Mensagem de erro caso algum campo esteja vazio
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Seleção de elementos
  const btnSubscribe = document.querySelector('.btn');
  const form = document.getElementById('subscribeForm');
  const emailInput = document.getElementById('email');
  const messageDiv = document.getElementById('resultados');

  // Função para mostrar resultados
  function mostrarResultado(titulo, descricao, link) {
    messageDiv.innerHTML = `
      <h2>${titulo}</h2>
      <p>${descricao}</p>
      <a href="${link}" target="_blank">Acessar curso</a>
    `;
  }

  // Evento de clique nos links de cursos
  const cursosLinks = [
    { link: 'a[href="https://www.musicca.com/pt/piano"]', titulo: "Piano Popular", descricao: "Curso online de piano.", url: "https://www.musicca.com/pt/piano" },
    { link: 'a[href="#"]', titulo: "Teoria Musical", descricao: "Curso básico de teoria musical.", url: "#" },
    { link: 'a[href="https://www.cifraclub.com.br/aprenda/sax/"]', titulo: "Sax Alto", descricao: "Aprenda saxofone alto.", url: "https://www.cifraclub.com.br/aprenda/sax/" },
    { link: 'a[href="https://www.musicca.com/pt/bateria"]', titulo: "Bateria", descricao: "Curso de bateria online.", url: "https://www.musicca.com/pt/bateria" },
  ];

  cursosLinks.forEach(({ link, titulo, descricao, url }) => {
    const cursoLink = document.querySelector(link);
    if (cursoLink) {
      cursoLink.addEventListener("click", function (event) {
        event.preventDefault();
        mostrarResultado(titulo, descricao, url);
      });
    }
  });

  // Evento de submit do formulário de inscrição
  form.addEventListener('submit', function (e) {
    e.preventDefault();  // Impede o envio do formulário

    const email = emailInput.value.trim();

    // Verifica se o campo de email foi preenchido
    if (email) {
      messageDiv.innerHTML = `Inscrição realizada com sucesso!<br>Email: ${email}`; 
      form.reset();  // Limpa os campos do formulário
    } else {
      messageDiv.innerHTML = 'Por favor, preencha o campo de e-mail.';  // Mensagem de erro
    }
  });

  // Função para exibir o alert de "Em desenvolvimento"
  function emDesenvolvimento(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    alert('Esta seção está em desenvolvimento.');
  }

  // Adicionando o evento de clique aos links
  document.getElementById('cursos').addEventListener('click', emDesenvolvimento);
  document.getElementById('eventos').addEventListener('click', emDesenvolvimento);
  document.getElementById('contato').addEventListener('click', emDesenvolvimento);
});
