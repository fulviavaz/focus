// Aqui começamos por selecionar os elementos que vamos precisar interagir no nosso código.
// Esta linha pega o botão de adicionar tarefa baseado na classe CSS.
const btnAdicionarTarefa = document.querySelector(".app__button--add-task");

// Da mesma forma, esta linha seleciona nosso formulário de adicionar tarefa.
const formAdicionarTarefa = document.querySelector(".app__form-add-task");

// E aqui, pegamos a área de texto onde o usuário digita a descrição da tarefa.
const textarea = document.querySelector(".app__form-textarea");

// Esta é a nossa lista (ou array) de tarefas. Ela começa vazia porque ainda não adicionamos nenhuma tarefa.
const tarefas = [];

// Agora, adicionamos um ouvinte de eventos ao botão. Quando o botão for clicado, esta função será executada.
btnAdicionarTarefa.addEventListener("click", () => {
  // Esta linha vai alternar a visibilidade do nosso formulário. Lembra da classe 'hidden' que esconde elementos?
  formAdicionarTarefa.classList.toggle("hidden");
});

// Aqui, estamos ouvindo o evento de 'submit' do nosso formulário.
// Esse evento ocorre quando tentamos enviar o formulário (geralmente, apertando o botão 'Enter' ou clicando em um botão de submit).
formAdicionarTarefa.addEventListener("submit", (evento) => {
  // Esta linha evita que a página recarregue (comportamento padrão de um formulário). Nós não queremos isso!
  evento.preventDefault();

  // Aqui, criamos um objeto tarefa com a descrição vinda da nossa textarea.
  const tarefa = {
    descricao: textarea.value,
  };

  // Depois, adicionamos essa tarefa ao nosso array de tarefas.
  tarefas.push(tarefa);

  // E, finalmente, armazenamos nossa lista de tarefas no localStorage.
  // Convertendo o array para uma string em formato JSON para poder armazenar.
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
});
