# Curso Alura WebSockets: implemente autenticação e avance no Socket.IO

## Aula 01 - Cadastrando usuários

### Aula 01 - Apresentação - Video 1

Nesta aula, o instrutor Antonio Evaldo continua o projeto AluraDocs, implementando um sistema de cadastro e login de usuários. Ele mostra como realizar o login com um usuário já cadastrado, autenticar o usuário e redirecioná-lo para a página inicial logada. Também explica como fazer o logout e controlar o acesso à página inicial. Serão abordados temas como cadastro e autenticação de usuários com Socket.IO, fluxo de login, armazenamento de JWT, implementação de middlewares para controle de acesso, uso de namespaces e controle de informações dos sockets no servidor. É necessário ter feito o curso anterior de WebSockets e o curso de Node.js com criptografia e tokens JWT.

### Aula 01 - Refatorando o projeto - Video 2

Nesta aula, trabalhamos em uma versão aprimorada do AluraDocs com novas funcionalidades solicitadas pelas usuárias Eduarda e Juliana. Preparamos o ambiente instalando as dependências e verificando se o projeto estava rodando no navegador. Organizamos os arquivos HTML em pastas específicas dentro da pasta "public" para cada página do projeto. Também criamos uma nova pasta chamada "db" dentro da pasta "servidor" para armazenar os arquivos relacionados ao banco de dados. Implementamos uma refatoração para separar as funcionalidades em arquivos específicos para cada página HTML, como a página inicial e a página de um documento específico. Exportamos e importamos as funções necessárias para que as funcionalidades sejam executadas corretamente. Ao final, verificamos se as funcionalidades estavam funcionando corretamente no navegador.

### Aula 01 - Enviando dados de cadastro - Video 3

Nesta aula, aprendemos a implementar a parte de cadastro do AluraDocs. Foi mostrado como acessar os campos de texto do formulário no front-end usando JavaScript e como enviar esses dados para o servidor utilizando o Socket.IO. Também criamos arquivos separados para lidar com as funcionalidades de cadastro no front-end e registrar os eventos relacionados ao cadastro no back-end. Os dados digitados nos campos de usuário e senha foram enviados para o servidor e exibidos no console para verificar a comunicação entre front-end e back-end. Além disso, renomeamos os nomes dos arquivos para reduzir o tamanho dos caminhos de importação.

### Aula 01 - Cadastrando no banco de dados - Video 4

Nesta aula do curso "WebSockets: implemente autenticação e avance no Socket.IO", aprendemos a cadastrar uma pessoa usuária no banco de dados MongoDB. Criamos uma nova coleção chamada "usuarios" no MongoDB Atlas e obtivemos acesso a ela no VSCode. Implementamos a função cadastrarUsuario() que insere um novo registro na coleção de usuários e adicionamos a verificação de duplicidade de usuários antes de realizar o cadastro. Por fim, implementamos o feedback para o usuário, exibindo mensagens de sucesso ou erro no cadastro.

### Aula 01 -  - Video 5