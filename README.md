# Player de Musica MVC com SPA

<h3>Descrição:</h3>
<p>Site focado em reprodução músicas.</p>

<h3>Tecnologias Utilizadas</h3>
<ul>
  <h4>Backend</h4>
  <li>Node</li>
</ul>
<ul>
  <h4>Frontend</h4>
  <li>React.js</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>
    No arquivo <code>app.js</code> é o arquivo principal do servidor backend, onde está configurado as rotas e o servidor do Express.
  </li>
  <li>
    Em <code>Controllers/musicController.js</code> é o controlador da aplicação responsável com as requisições das músicas.
  </li>
  <li>
    Já no caminho <code>Models/music.js</code> ele é responsável pela manipulação dos dados das músicas, onde aqui está carregando os metadados das músicas.
  </li>
</ul>

<h3>Frontend(View)</h3>
<ul>
  <li>
    Em <code>src/App.jsx</code> é o componente principal da aplicação frontend, é nesse arquivo onde ele está renderizando os players de musica e consumindo os dados do backend
  </li>
</ul>


<h3>Como executar o projeto</h3>

<h4>Backend</h4>
<ul>
  <li>No diretório <code>backend</code>, execute o codigo no terminal <code>npm install</code> para realizar a instalação das dependências</li>
  <li>Logo após instalar as dependências execute o codigo <code>npm run start</code> para que o servidor se inicie</li>
</ul>

<h4>Frontend</h4>
<ul>
  <li>No diretório <code>frontend</code>, execute o codigo no terminal <code>npm install</code> para realizar a instalação das dependências</li>
  <li>Logo após instalar as dependências execute o codigo <code>npm run dev</code> para iniciar o servidor frontend</li>

  <li>Acesse a aplicação agora a partir de qualquer navegador pelo endereço <code>http://localhost:5173/</code></li>
</ul>

