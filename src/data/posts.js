export const posts = [
  {
    id: 1,
    slug: 'introducao-vue',
    title: 'Introdução ao Vue.js 3',
    description: 'Aprenda os conceitos básicos do framework Vue.js e como começar seu primeiro projeto.',
    content: `
      <p>O Vue.js 3 é um framework progressivo para construção de interfaces de usuário. Ele é conhecido por sua simplicidade, flexibilidade e performance.</p>
      <p>Com o Vue, você pode criar desde pequenas interações até aplicações complexas de página única (SPA).</p>
      <h2>Principais vantagens do Vue.js</h2>
      <ul>
        <li>Fácil de aprender e começar</li>
        <li>Documentação completa e em português</li>
        <li>Reatividade poderosa</li>
        <li>Grande comunidade</li>
      </ul>
      <img src="/images/vue-logo.png" alt="Logo do Vue.js" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Experimente criar seu primeiro componente e veja como o Vue pode facilitar seu desenvolvimento!</p>
    `,
    images: ['/images/vue-logo.png'],
    category: 'Vue.js',
    date: '2024-03-15',
    author: {
      name: 'João Silva',
      avatar: '/avatars/joao.jpg'
    },
    likes: 42,
    comments: 12
  },
  {
    id: 2,
    slug: 'usando-vue-router',
    title: 'Dominando o Vue Router',
    description: 'Um guia completo sobre roteamento no Vue.js com Vue Router.',
    content: `
      <p>O Vue Router é a solução oficial de roteamento para aplicações Vue.js. Ele permite criar rotas dinâmicas, navegação entre páginas e até mesmo rotas protegidas.</p>
      <h2>Por que usar o Vue Router?</h2>
      <ul>
        <li>Facilita a navegação entre componentes</li>
        <li>Permite rotas aninhadas e dinâmicas</li>
        <li>Integração perfeita com Vue.js</li>
      </ul>
      <img src="/images/vue-router.png" alt="Vue Router" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Com o Vue Router, sua aplicação pode crescer de forma organizada e escalável.</p>
    `,
    images: ['/images/vue-router.png'],
    category: 'Vue.js',
    date: '2024-03-14',
    author: {
      name: 'Maria Santos',
      avatar: '/avatars/maria.jpg'
    },
    likes: 38,
    comments: 8
  },
  {
    id: 3,
    slug: 'entendendo-closures-javascript',
    title: 'Entendendo Closures em JavaScript',
    description: 'Descubra como funcionam closures e como usá-las no seu dia a dia.',
    content: `
      <p>Closures são um dos conceitos mais poderosos e importantes do JavaScript. Eles permitem que funções internas acessem variáveis do escopo externo mesmo após a execução da função externa.</p>
      <h2>O que é um Closure?</h2>
      <p>Um closure é formado quando uma função é declarada dentro de outra função e a função interna referencia variáveis da função externa.</p>
      <pre><code>function saudacao(nome) {
  return function() {
    console.log('Olá, ' + nome + '!');
  }
}
const olaJoao = saudacao('João');
olaJoao(); // Olá, João!
</code></pre>
      <img src="/images/js-closures.png" alt="Exemplo de Closure em JavaScript" style="max-width: 350px; margin: 2rem 0; display: block;">
      <h2>Por que usar Closures?</h2>
      <ul>
        <li>Permitem encapsular dados privados</li>
        <li>Facilitam a criação de funções de fábrica</li>
        <li>São base para muitos padrões avançados em JS</li>
      </ul>
      <p>Closures são amplamente utilizados em callbacks, funções de fábrica e módulos. Entender closures é fundamental para dominar JavaScript!</p>
    `,
    images: ['/images/js-closures.png'],
    category: 'JavaScript',
    date: '2024-03-10',
    author: {
      name: 'Lucas Andrade',
      avatar: '/avatars/lucas.jpg'
    },
    likes: 25,
    comments: 5
  },
  {
    id: 4,
    slug: 'hooks-essenciais-react',
    title: 'Hooks Essenciais do React',
    description: 'Conheça os hooks mais usados e como aplicá-los no seu projeto.',
    content: `
      <p>Os hooks revolucionaram a forma de criar componentes funcionais no React. Os mais usados são <b>useState</b> e <b>useEffect</b>, mas existem outros como <b>useContext</b>, <b>useMemo</b> e <b>useCallback</b>.</p>
      <h2>Exemplo de useState</h2>
      <pre><code>const [contador, setContador] = useState(0);
setContador(contador + 1);</code></pre>
      <h2>Exemplo de useEffect</h2>
      <pre><code>useEffect(() => {
  document.title = 'Você clicou ' + contador + ' vezes';
}, [contador]);</code></pre>
      <img src="/images/react-hooks.png" alt="Hooks React" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Hooks tornam o código mais limpo e reutilizável!</p>
    `,
    images: ['/images/react-hooks.png'],
    category: 'React',
    date: '2024-03-18',
    author: {
      name: 'João Silva',
      avatar: '/avatars/joao.jpg'
    },
    likes: 18,
    comments: 3
  },
  {
    id: 5,
    slug: 'react-router-navegacao',
    title: 'React Router: Navegação Moderna',
    description: 'Implemente navegação SPA com o React Router.',
    content: `
      <p>O <b>React Router</b> é a biblioteca padrão para navegação em aplicações React. Permite criar rotas dinâmicas, navegação entre páginas e parâmetros de URL.</p>
      <h2>Exemplo de uso</h2>
      <pre><code>import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
  </Routes>
</BrowserRouter></code></pre>
      <img src="/images/react-router.png" alt="React Router" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Com o React Router, sua aplicação SPA fica muito mais organizada!</p>
    `,
    images: ['/images/react-router.png'],
    category: 'React',
    date: '2024-03-17',
    author: {
      name: 'Maria Santos',
      avatar: '/avatars/maria.jpg'
    },
    likes: 12,
    comments: 2
  },
  {
    id: 6,
    slug: 'apis-rest-express',
    title: 'Criando APIs REST com Express',
    description: 'Aprenda a criar APIs robustas e escaláveis usando Express.',
    content: `
      <p>O <b>Express</b> é o framework mais popular para criar APIs REST com Node.js. Com ele, é fácil definir rotas, middlewares e tratar erros.</p>
      <h2>Exemplo básico</h2>
      <pre><code>const express = require('express');
const app = express();
app.get('/api', (req, res) => res.send('Olá API!'));
app.listen(3000);</code></pre>
      <img src="/images/node-express.png" alt="Express API" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Com poucas linhas você já tem uma API funcional!</p>
    `,
    images: ['/images/node-express.png'],
    category: 'Node.js',
    date: '2024-03-16',
    author: {
      name: 'Lucas Andrade',
      avatar: '/avatars/lucas.jpg'
    },
    likes: 22,
    comments: 4
  },
  {
    id: 7,
    slug: 'banco-dados-node',
    title: 'Trabalhando com Banco de Dados no Node.js',
    description: 'Dicas para conectar e manipular bancos de dados em aplicações Node.',
    content: `
      <p>Node.js permite integração fácil com bancos de dados SQL e NoSQL. Você pode usar bibliotecas como <b>mongoose</b> para MongoDB ou <b>sequelize</b> para MySQL/PostgreSQL.</p>
      <h2>Exemplo com MongoDB</h2>
      <pre><code>const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meubanco');</code></pre>
      <img src="/images/node-db.png" alt="Node.js Banco de Dados" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Escolha a biblioteca ideal para seu projeto e aproveite o melhor do Node!</p>
    `,
    images: ['/images/node-db.png'],
    category: 'Node.js',
    date: '2024-03-15',
    author: {
      name: 'João Silva',
      avatar: '/avatars/joao.jpg'
    },
    likes: 15,
    comments: 1
  },
  {
    id: 8,
    slug: 'automatizando-tarefas-python',
    title: 'Automatizando Tarefas com Python',
    description: 'Veja como o Python pode facilitar tarefas repetitivas do dia a dia.',
    content: `
      <p>Python é excelente para automação! Você pode automatizar tarefas como renomear arquivos, mover pastas e até enviar emails.</p>
      <h2>Exemplo de automação</h2>
      <pre><code>import os
for arquivo in os.listdir('.'):
    print(arquivo)</code></pre>
      <img src="/images/python-automacao.png" alt="Automação Python" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Automatize processos e ganhe produtividade com Python!</p>
    `,
    images: ['/images/python-automacao.png'],
    category: 'Python',
    date: '2024-03-14',
    author: {
      name: 'Maria Santos',
      avatar: '/avatars/maria.jpg'
    },
    likes: 20,
    comments: 2
  },
  {
    id: 9,
    slug: 'introducao-django',
    title: 'Introdução ao Django',
    description: 'Comece a desenvolver aplicações web com o framework Django.',
    content: `
      <p>O <b>Django</b> é um framework web poderoso e produtivo para Python. Com ele, você cria aplicações completas rapidamente.</p>
      <h2>Primeiros passos</h2>
      <pre><code>pip install django
django-admin startproject meu_projeto</code></pre>
      <img src="/images/python-django.png" alt="Django" style="max-width: 300px; margin: 2rem 0; display: block;">
      <p>Explore o Django e descubra como criar sites e APIs de forma rápida!</p>
    `,
    images: ['/images/python-django.png'],
    category: 'Python',
    date: '2024-03-13',
    author: {
      name: 'Lucas Andrade',
      avatar: '/avatars/lucas.jpg'
    },
    likes: 17,
    comments: 3
  }
];
