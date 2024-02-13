const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um estilo de design de página da web",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários em JavaScript?",
      respostas: [
        "// Comentário",
        "<!-- Comentário -->",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de 'typeof' em JavaScript?",
      respostas: [
        "Determina o tipo de um valor",
        "Declara uma variável",
        "Realiza uma operação de adição",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um operador matemático",
        "Um valor fixo",
        "Um contêiner para armazenar dados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método para declarar uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "myFunction() = function",
        "declareFunction myFunction()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de selecionar um elemento pela sua ID em JavaScript?",
      respostas: [
        "getElementByName()",
        "getElementByClass()",
        "getElementById()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de '10' + 5 em JavaScript?",
      respostas: [
        "105",
        "15",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de 'console.log()' em JavaScript?",
      respostas: [
        "Registrar dados no console do navegador",
        "Criar um novo objeto",
        "Executar um loop",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma função matemática",
        "Uma coleção ordenada de valores",
        "Um operador lógico",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta 
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove() //remove a "resposta A"
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }