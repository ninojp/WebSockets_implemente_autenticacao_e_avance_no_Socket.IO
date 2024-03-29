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

### Aula 01 - Protegendo as senhas - Video 5

Nesta aula, foi identificado que as senhas dos usuários do AluraDocs estão desprotegidas e é necessário criptografá-las. Foi criada uma função chamada criarHashESalSenha() que recebe a senha digitada pelo usuário e gera um "sal" e uma "hash" para a senha. Essa função foi implementada no arquivo usuariosDb.js e utilizada no momento do cadastro do usuário, onde a senha é substituída pela "hash" e pelo "sal". Foram feitos testes para verificar se as senhas estão sendo criptografadas corretamente e os registros antigos com senhas desprotegidas foram excluídos. A próxima etapa será implementar a funcionalidade de login para os amigos da Juliana se cadastrarem no AluraDocs.

### Aula 01 Conclussão - Nesta aula, você aprendeu como

Cadastrar um novo usuário no banco de dados:

Para implementar o sistema de usuários no Alura Docs, primeiro precisamos ser capazes de cadastrá-los. Para isso, obtemos o nome e a senha digitados no formulário de cadastro e enviamos ao servidor. No servidor, conseguimos guardar essas informações no banco de dados.
Proteger as senhas dos usuários:

Para fornecer uma maior proteção às senhas dos usuários, usamos funções do módulo crypto do NodeJS para criptografar essas informações. Para isso, utilizamos a função randomBytes para criar um novo “sal” e a função scryptSync para criar uma hash a partir do sal e da senha. Em seguida, armazenamos a hash e o sal no banco de dados, pois precisamos dessas duas informações para realizar a autenticação da senha posteriormente.

## Aula 02 - Implementando Login

### Aula 02 - Enviando dados de login - Video 1

Na aula "Implementando login", foi discutido o uso de WebSockets nas páginas de login e cadastro, mesmo que não seja necessário para comunicação bidirecional em tempo real. Foi mostrado como implementar a funcionalidade de login, utilizando o mesmo código do formulário de cadastro, com algumas alterações. Foi explicado como obter os dados do formulário e emitir a autenticação do usuário para o servidor. Também foi mencionado que é necessário autenticar o usuário no backend, utilizando as informações do usuário obtidas do banco de dados. Por fim, foi explicado como lidar com a promise retornada pela função de busca do usuário.

### Aula 02 - Autenticando usuários - Video 2

Nesta aula, foi implementada a funcionalidade de login. Os dados digitados no formulário foram capturados e exibidos no terminal integrado do VS Code. Em seguida, foi criada a função autenticarUsuario() para autenticar a senha do usuário. A função scryptSync() foi utilizada para criar uma hash de teste a partir da senha digitada, e a função timingSafeEqual() foi utilizada para comparar essa hash com a hash salva no banco de dados. O resultado da autenticação foi enviado para o front-end, onde foram exibidas mensagens de sucesso ou erro. Além disso, foi tratado o caso de usuário não encontrado e implementado o redirecionamento para a página inicial após o login bem-sucedido.

### Aula 02 - Gerando um JWT - Video 3

Nesta aula, aprendemos a implementar a autenticação de usuários no AluraDocs utilizando JWT. Geramos um token JWT no servidor assim que o usuário é autenticado, utilizando a biblioteca **jsonwebtoken**. Aprendemos a configurar o segredo do JWT utilizando a biblioteca **dotenv** e armazenando-o em uma variável de ambiente. Também corrigimos um erro relacionado ao payload do token, transformando-o em um objeto. Por fim, enviamos o token JWT para o front-end junto com o evento de autenticação bem-sucedida.

### Aula 02 - Para saber mais: [lidando com CORS](https://cursos.alura.com.br/course/websockets-implemente-autenticacao-avance-socket-io/task/119950)

Até agora na nossa aplicação, estamos utilizando o front-end e o back-end na mesma URL: http://localhost:3000. Isso porque o próprio servidor Node está disponibilizando as páginas HTML no navegador.

E se estivéssemos lidando com front-end e back-end de forma mais separada? Por exemplo, se tivéssemos uma aplicação construída em React que rodasse na porta 5000, enquanto nosso servidor está rodando na porta 3000?

Se você já se deparou com situações assim antes, talvez tenha pensado que iria lidar com [Cross-Origin Resource Sharing (CORS)](https://www.alura.com.br/artigos/como-resolver-erro-de-cross-origin-resource-sharing), e é exatamente isso! Vamos simular essa situação?...

### Aula 02 Conclussão - Nesta aula, você aprendeu como

Autenticar um usuário ao verificar a senha digitada no formulário de login:

Para verificar se a senha digitada está correta, precisamos de algumas informações do usuário no banco de dados, que são: o sal e a hash criados no momento de cadastro. Ao combinar a senha digitada com o sal do banco de dados, verificamos se o resultado é igual à hash armazenada no banco de dados. Em caso positivo, o usuário é autenticado com sucesso.
Gerar um JWT quando um usuário é autenticado com sucesso:

O JWT (JSON Web Token) servirá como o crachá do usuário autenticado. No futuro, quando a pessoa for acessar áreas restritas do sistema, ela irá apenas apresentar seu crachá, ao invés de fornecer seu usuário e senha a cada nova tentativa de acesso.

## Aula 03 - Controlando Acessos

### Aula 03 - Guardando JWT nos cookies - Video 1

Nesta aula, aprendemos a gerar um token JWT para autenticar os usuários do AluraDocs e como armazenar esse token no front-end utilizando cookies. Criamos funções para definir, obter e remover cookies. Também implementamos um evento de clique no botão Logout que remove o cookie, exibe um alerta de sucesso e redireciona o usuário para a página de login.

### Aula 03 - Middlewares do Socket.IO - Video 2

Nesta aula, aprendemos a restringir áreas do AluraDocs utilizando middlewares. Utilizamos o arquivo "socket.back.js" para registrar um middleware que verifica se o cliente tem autorização para acessar o servidor. Ao passar um erro como parâmetro da função "next()", cortamos a conexão do socket com o servidor, negando o acesso. No front-end, capturamos esse erro e redirecionamos o usuário para a página de login. Também aprendemos a registrar mais de um middleware sequencialmente e a organizar os middlewares em um arquivo separado. Por fim, importamos a função "autorizarUsuario" de um arquivo externo e concedemos o acesso ao usuário. Na próxima aula, iremos implementar a autorização de acesso com base no tokenJwt.

### Aula 03 - Autorizando usuários - Video 3

Nesta aula, aprendemos sobre o uso de funções Middlewares para conceder ou negar o acesso de um usuário no servidor. Foi explicado como verificar o tokenJwt para decidir se o acesso será liberado ou negado. A transcrição também mostrou como enviar as informações do Jwt do front-end para o back-end, utilizando a função io. Em seguida, foi ensinado como capturar o tokenJwt no back-end e imprimir seu valor no terminal do VSCode. Foi mencionado o uso da biblioteca JSON Web Token para verificar a validade do token. Por fim, foi abordado o problema de registrar a função middleware para todas as páginas do sistema e a solução será apresentada na próxima aula.

### Aula 03 - Utilizando namespaces - Video 4

Nesta aula, aprendemos a utilizar namespaces para separar os clientes e aplicar middlewares específicos em cada um. Registramos um middleware no servidor e ajustamos o código para registrar o middleware no namespace "/usuarios". Também utilizamos o namespace "/usuarios" ao conectar o cliente na página principal e restringimos o acesso à página de documentos ao conectar o cliente no namespace "/usuarios".

### Aula 03 Conclussão - Nesta aula, você aprendeu como

Guardar o token JWT nos cookies do navegador:

Quando o usuário é autenticado com sucesso no lado do servidor, enviamos de volta o token JWT para o cliente. Em seguida, do lado do cliente, guardamos o token JWT nos cookies do navegador. Assim, quando o usuário precisar entrar em alguma página restrita do Alura Docs futuramente, poderemos resgatar o token JWT armazenado no navegador e enviá-lo para o servidor, para que o usuário possa ser autorizado a acessar a página.
Registrar middlewares no servidor:

Um middleware é um intermediador entre o cliente e o servidor, e no caso do Socket.IO, é responsável por permitir ou negar a tentativa de conexão. Sendo assim, é o recurso ideal a ser utilizado para verificar a autenticidade de um usuário que deseja acessar uma área restrita de um sistema. Além disso, podemos registrar vários middlewares no servidor, e eles serão executados sequencialmente.
Criar e utilizar namespaces para agrupar conexões:

Os namespaces do Socket.IO permitem que as conexões possam ser agrupadas separadamente: cada namespace possui seus próprios eventos, salas e middlewares. Assim, somos capazes de agrupar as funcionalidades dos documentos em um namespace específico chamado usuarios, por exemplo, e registrar um middleware nesse namespace. Dessa forma, os clientes que tentarem acessar esse namespace irão passar pelo middleware registrado.

## Aula 04 - Usuários Online

### Aula 04 - Lidando com entrada de usuário - Video 1

Nesta aula, finalizamos o ciclo de cadastro, login e controle de acesso dos usuários. Implementamos a funcionalidade de mostrar quem está em cada documento, utilizando o nome de usuário do token JWT. Criamos um middleware no servidor que verifica o token e emite um evento para o front-end com o payload do token. No front-end, escutamos esse evento e acessamos o nome do usuário. Em seguida, enviamos o nome do usuário juntamente com o nome do documento para o servidor, que trata essa informação e retorna o texto do documento. Verificamos que o nome do usuário é recebido com sucesso no servidor.

### Aula 04 - Registrando conexões dos documentos - Video 2

Nesta aula, aprendemos como enviar o nome do usuário conectado para outros clientes que também estão conectados em um determinado documento. Para isso, criamos uma lista no back-end que armazena as conexões dos usuários em cada documento. Implementamos a função adicionarConexao() que adiciona uma nova conexão à lista. Também criamos a função obterUsuariosDocumento() que retorna os usuários que estão em um determinado documento. Testamos a funcionalidade com dois navegadores diferentes e verificamos que a lista de usuários conectados é atualizada corretamente. Agora estamos prontos para enviar essa informação para o front-end quando solicitado.

### Aula 04 - Atualizando usuários conectados - Video 3

Nesta aula, aprendemos a registrar os usuários que estão entrando em um documento e exibir uma lista atualizada no terminal. Também vimos como enviar essa informação de volta para o front-end, atualizando a interface e colocando os nomes na lista de usuários conectados. Implementamos a função "atualizarInterfaceUsuarios" no front-end, que manipula o HTML e atualiza a lista de usuários conectados dinamicamente. Utilizamos o evento "usuarios_no_documento" para enviar essa informação para todos os usuários no documento. No entanto, há um problema de duplicação de entradas que será resolvido na próxima aula.

### Aula 04 Conclussão - Nesta aula, você aprendeu como

Retornar o payload do token para o cliente:

Além de verificar a autenticidade do token JWT, o servidor é capaz de decodificá-lo e enviar seu payload de volta para o cliente, caso seja necessário. No nosso caso, na página de documento, enviamos de volta para o cliente um objeto com o nome do usuário. Assim, no front-end, podemos utilizar essa informação à vontade: podemos exibir o nome do usuário na tela, ou então, no nosso caso, emitir um evento de volta para o servidor, informando o nome do usuário que entrou no documento.
Registrar conexões dos documentos no servidor:

Fizemos uma lista local no Node.JS que registra qual usuário entrou em qual documento. Ao armazenar essas informações, podemos enviá-las de volta para novos usuários que entrarem em um determinado documento para, em seguida, atualizar a interface no front-end com a lista de usuários conectados no documento.

## Aula 05 - Finalizandoa Aplicação

### Aula 05 - Eventos para clientes específicos - Video 1

Nesta aula, aprendemos a tratar a entrada de usuários em um documento no AluraDocs. Foi introduzido o evento "disconnect" do Socket.IO, que é emitido sempre que um socket é desconectado. Aprendemos como utilizar esse evento para identificar quando um usuário sai de um documento e atualizar a lista de usuários conectados. Também foi explicado como registrar esse evento apenas para os sockets que entraram em um documento específico. Além disso, foi sugerido agrupar os ouvintes de outros eventos, como "texto_editor" e "excluir_documento", dentro do ouvinte do evento "selecionar_documento" para melhor organização do código.

### Aula 05 - Atualizando saída na lista local - Video 2

Nesta aula, aprendemos a detectar quando um usuário sai de um documento e a remover a conexão correspondente. Implementamos a função de remover conexão, que recebe como parâmetros o nome do documento e o nome do usuário. Utilizamos o método findIndex() para obter o índice da conexão a ser removida e o método splice() para remover a conexão da lista. Atualizamos a lista de usuários no front-end após remover a conexão, emitindo a lista atualizada para os clientes interessados. Identificamos a necessidade de permitir que o usuário entre em um documento em apenas uma aba por vez, deixando essa implementação para a próxima aula.

### Aula 05 - Guardando informações no socket - Video 3

Nesta aula, foi abordado o último caso a ser tratado no AluraDocs, que é quando um usuário entra em abas diferentes de um mesmo documento e o nome aparece duplicado na lista de usuários conectados. Para resolver esse problema, foi implementada a função encontrarConexao() que verifica se a conexão já existe antes de adicioná-la. Além disso, foi introduzido o uso da propriedade socket.data para guardar informações no próprio socket, evitando a remoção incorreta de conexões.

- É possível armazenar em socket.data quaisquer dados desejados, para que eles possam ser resgatados posteriormente, conforme a necessidade.  
No nosso caso, guardamos em socket.data o nome do usuário e do documento que ele entrou. Assim, quando o usuário sair, podemos remover a conexão correspondente da lista local de conexões.

- As informações guardadas em socket.data são perdidas se o socket for desconectado do servidor.  
Quando um cliente é desconectado do servidor, o socket criado entre eles deixa de existir, junto com todas as suas propriedades. Assim, faz sentido guardar em socket.data as informações que precisam ser utilizadas em uma única página, e apenas enquanto o cliente estiver conectado nela.

- Os sockets no lado do back-end ainda possuem uma outra propriedade que tem a ver com a nossa situação, que é a socket.rooms. Ela pode ser utilizada em conjunto com o evento disconnecting para descobrirmos de qual sala um determinado socket está saindo.  
Entretanto, essa propriedade retorna apenas o id do socket junto com o nome da sala que ele está saindo. Dessa forma, ainda precisaríamos recorrer à abordagem de guardar o id do socket na lista local de conexões. Por esse motivo, não vi necessidade de utilizar esse recurso no nosso caso, pois já tínhamos acesso ao id do socket dentro do evento disconnect.

### Aula 05 Conclusão - Nesta aula, você aprendeu como

Lidar com a saída de um usuário de um documento:

Quando isso acontece, podemos utilizar o nome do usuário e do documento para remover a conexão correspondente da lista local de conexões. Assim, podemos enviar a lista atualizada de usuários conectados ao documento e manter a interface do front-end sempre atualizada com os dados do servidor.
Guardar informações em socket.data:

O Socket.IO disponibiliza essa propriedade para vincularmos informações a um determinado socket. Assim, podemos resgatar essas informações posteriormente, de acordo com nossa necessidade.

### Aula 05 Conclusão - Video 4

Nesta aula, aprendemos a aplicar o fluxo de cadastro, login e armazenamento de JWT na prática, controlar acessos utilizando middlewares do Socket.IO, controlar informações localmente através do uso da propriedade socket.data e criar uma lista local para controlar as conexões dos documentos.
