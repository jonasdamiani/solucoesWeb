function criaChat() {
    // vamos criar a div/component que engloba uma mensagem inteira
    const usernet = document.createElement("div");
    usernet.className =
      "usernet local"; /* aqui estamos definido as classes da div criada acima
                                            logo temos o seguinte resultado <div class="usernet local"> */
  
    /* a div criada a cima, para ser uma "mensagem completa" deve possuir dois elementos filhos dentro dela
       essa é a estrutura almejada:
       <div class="usernet local">
            <div class="user">Você diz:</div>
            <div class="userchat">Blablaaaa Bla</div>
        </div>
     */
  
    // primeiro vamos criar o "Você diz:"
    const voceDiz = document.createElement("div");
    voceDiz.className = "user"; // aqui definimos a classe
    voceDiz.innerText = "Você diz:"; // e aqui o valor da div, gerando assim <div class="user">Você diz:</div>
  
    // agora vamos cria a div com a mensagem em si <div class="userchat">Blablaaaa Bla</div>
    // primeiro pegamos o input para resgatar o valor digitado
    const inputChat = document.getElementById("chat");
  
    // depois criamos a div.userchat definimos sua classe e valor
    const nameChat = document.createElement("div");
    nameChat.className = "userchat";
    nameChat.innerText = inputChat.value;
  
    // agora iremos adicionar os sub elementos no componente de mensagem
    // primeiro puxamos o voceDiz para dentro da usernet
    usernet.appendChild(voceDiz);
  
    // e depois puxamos o nameChat também para dentro da usernet
    usernet.appendChild(nameChat);
  
    // agora iremos resgatar o painel de mensagens
    const messagesList = document.getElementById("messages-list");
  
    // e adicionar o componente completo o "usernet" já devidamente preenchido e configurado
    // dentro da div.messages-list fazendo que o mesmo seja mostrado em tela
    messagesList.appendChild(usernet);
  
    // limpando o campo após envio da mensagem
    inputChat.value = "";
  
    // rolando o painel de mensagens para a ultima mensagem adicionada
    gotoBottom("messages-list");
  }
  
  // função usada para descer a rolagem do painel de mensagens sempre para o final
  function gotoBottom(id) {
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
  
  const formSend = document.getElementById("send");
  formSend.addEventListener("submit", function (event) {
    event.preventDefault();
  
    criaChat();
  });
  
  window.addEventListener("load", function (event) {
    // rolando o painel de mensagens para a ultima mensagem adicionada
    gotoBottom("messages-list");
  });