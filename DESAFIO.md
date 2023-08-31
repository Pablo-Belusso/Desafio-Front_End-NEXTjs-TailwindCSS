# QUESTÕES:

## 1 - Qual foi a maior dificuldade que você enfrentou ao realizar o teste?

R: Foi a primeira vez que eu desenvolvi um site em NextJS e em TailwindCSS.
Apesar de já ter uma experiência com React JS e um pouco de Angular,
tive que me adaptar a estrutura de funcionamento de um projeto em Next.js.
Tive que pesquisar bastante sobre as classes utilitárias do Tailwind CSS
e o que elas significavam em CSS.

Mas a maior dificuldade foi em fazer a pesquisa na API ViaCep pelo logradouro.
No fim, o que ficou funcional foi a consulta pelo CEP.
A consulta pelo Logradouro não funcionou, apesar de eu pesquisar muito.

## 2 - Descreva a funcionalidade e o por quê da utilização das bibliotecas escolhidas por você para concluir o desafio.

R:
O projeto foi desenvolvido usando Next.js, uma estrutura (framework) de desenvolvimento React para renderização do lado do servidor (Server-side Rendering - SSR) e geração de páginas estáticas.
Também foi utilizado Typescript e o Tailwind CSS para estilização. Classes do Tailwind foram aplicadas diretamente nos elementos para estilizar o layout.

O projeto possui diversas páginas localizadas na pasta pages.
Cada arquivo .tsx dentro dessa pasta corresponde a uma rota acessível na aplicação.

        *** PRINCIPAIS PÁGINAS: ***

### index.tsx: A página index.tsx serve como a porta de entrada para o seu aplicativo. Ela exibe links que direcionam os usuários para diferentes páginas, como a página de clima, busca de CEP e contato. Os usuários podem navegar por essas páginas clicando nos links correspondentes.

-> Estrutura da Página: o componente HomePage renderiza uma estrutura com três seções principais: Header, main, e Footer.

-> Link para Páginas: dentro da seção main, existem três links que direcionam para diferentes páginas do aplicativo:

    - Link href="/clima": Link para a página de clima.
    - Link href="/busca-cep": Link para a página de busca de CEP.
    - Link href="/contato": Link para a página de contato.

-> Estilos dos Links: cada link é exibido como um botão estilizado usando a classe CSS btn e flexionado com flex items-center. Os links são apresentados como itens empilhados verticalmente usando a classe CSS space-y-12.

### clima.tsx: essa página exibe as informações do clima atual da cidade de Goiânia e permite que o usuário retorne à página inicial. Ela utiliza a API OpenWeatherMap para obter os dados do clima.

-> Funções, objetos e ferramentas usada na página:

- useState: o weather: Armazena os dados do clima. O loading: Controla o estado de carregamento enquanto os dados são buscados.

- useEffect: realiza uma requisição à API OpenWeatherMap para obter os dados do clima da cidade definida (neste caso, "Goiânia"). A chave de API é definida na variável apiKey. Os dados são armazenados em weather quando a requisição é bem-sucedida, e o estado de loading é alterado para false.

- kelvinToCelsius: converte temperatura de Kelvin para Celsius.

- Objeto weatherDescriptions: mapeia as descrições do clima retornadas pela API para descrições em Português.

- Renderização: exibe o nome da cidade e as informações sobre o clima, como a temperatura em Celsius e a descrição do clima. Se o carregamento estiver em andamento, exibe "Carregando...". Se a requisição à API falhar ou os dados do clima não estiverem disponíveis, exibe "Não foi possível obter os dados do clima."

- Botão "Voltar": um botão que redireciona de volta para a página inicial usando o componente Link do Next.js. O ícone FiArrowLeft é da biblioteca de ícones react-icons/fi e é usado para representar uma seta para a esquerda.

### busca-cep.tsx: oferece uma interface para os usuários pesquisarem informações de endereço usando um CEP ou logradouro. Ela permite que os usuários obtenham informações detalhadas sobre um endereço a partir de um CEP e também oferece opções de logradouro relacionadas. Porém a opção de busca pelo Logradouro (Rua ou avenida) não está funcionando. Foi a única parte do desafio que eu não consegui resolver.

- Componente BuscaCepPage: é uma função de componente React que define a lógica da página de busca de CEP.

- Estados e Variáveis:

  - cep e cepList são estados usados para armazenar os valores digitados pelo usuário para CEP e logradouro, respectivamente.
  - cepResult é o estado que guarda as informações do endereço correspondentes ao CEP pesquisado.
  - logradouro é o estado que guarda o valor digitado para o logradouro.
  - loading é o estado que indica se uma busca está em andamento.

- Função handleSearch: esta função é acionada quando o usuário clica no botão "Buscar". Ela realiza a busca de informações de endereço com base no CEP ou logradouro inserido pelo usuário. Primeiro, ela verifica se o CEP está preenchido e faz uma busca usando a API ViaCEP. Se um logradouro estiver preenchido, ele também faz uma busca usando a API ViaCEP para obter uma lista de CEPs relacionados ao logradouro. Os resultados da busca são armazenados nos estados cepResult e cepList, respectivamente.

- Renderização de Conteúdo: A seção main da página exibe os campos de entrada para CEP e logradouro, bem como o botão de busca. Durante a busca, o componente exibe a mensagem "Carregando...". Se houver resultados de CEP ou logradouro, eles são exibidos em elementos div. A lista de opções de logradouro é renderizada como uma lista de botões.

Links de Voltar: um link de voltar para a página inicial é fornecido, permitindo ao usuário retornar facilmente à página inicial.

Componentes Header e Footer: os componentes Header e Footer são renderizados antes e depois do conteúdo da página, respectivamente.

### contato.tsx: cria um formulário de contato com campos para nome, email, mensagem e seleção de arquivo PDF. Após o envio bem-sucedido, uma Snackbar é exibida no canto superior direito da página para confirmar o envio do arquivo.

- Componente ContatoPage: o componente ContatoPage é uma função de componente React que define a lógica da página de contato.

- Estados e Variáveis: nome, email, mensagem e arquivo são estados usados para armazenar as informações inseridas pelo usuário. isSnackbarOpen é um estado usado para controlar a exibição da Snackbar.

- Função handleSnackbarClose: fecha a Snackbar ao clicar no botão de fechar.

- Função handleCloseSnackbar: fecha a Snackbar ao clicar fora dela.

- Função handleFormSubmit: esta função é acionada quando o usuário envia o formulário. Ela obtém os dados do formulário usando FormData. Constrói um objeto a partir dos dados do formulário e exibe esses dados no console. Abre a Snackbar para exibir a mensagem de sucesso após o envio.

- Função handleFileChange: esta função é acionada quando o usuário seleciona um arquivo para enviar.Verifica se o arquivo é um arquivo PDF válido e o armazena no estado arquivo.

- Renderização de Conteúdo: O formulário de contato é exibido com campos para nome, email, mensagem e seleção de arquivo. Um botão "Enviar" envia o formulário. Uma Snackbar é exibida quando o arquivo é enviado com sucesso.

- Links de Voltar: um link de voltar para a página inicial é fornecido.

### Header.tsx: Componente de cabeçalho que aparece em todas as páginas. O componente Header é uma parte reutilizável da interface que fornece um cabeçalho consistente e estilizado para todas as páginas do aplicativo. Ele contém um título "DESAFIO FRONT-END" e utiliza estilos inline para controlar sua aparência. Esse componente ajuda a manter a consistência visual e a melhorar a experiência do usuário em todo o aplicativo.

- Componente Header (Função de Componente): o componente Header é uma função de componente React que define a aparência e o layout do cabeçalho.

- Estilos Inline: o cabeçalho possui estilos CSS definidos inline por meio dos objetos headerStyle e titleStyle.

  - headerStyle: Define os estilos do cabeçalho, como alinhamento, altura e cor de fundo.
  - titleStyle: Define os estilos do título, como cor, tamanho da fonte e peso da fonte.

- Renderização de Conteúdo: o conteúdo do cabeçalho é renderizado dentro de um elemento header (tag <header>). O título "DESAFIO FRONT-END" é renderizado dentro de um elemento h1 (tag <h1>) com os estilos definidos em titleStyle

### Footer.tsx: Componente de rodapé que aparece em todas as páginas.

- Componente Footer (Função de Componente): o componente Footer é uma função de componente React que define a aparência e o layout do rodapé.

- Estilos Inline: o rodapé possui estilos CSS definidos inline por meio do objeto footerStyle.

  - footerStyle: Define os estilos do rodapé, como cor de fundo, cor do texto, alinhamento e preenchimento.

- Renderização de Conteúdo: o conteúdo do rodapé é renderizado dentro de um elemento footer (tag <footer>).
  - Dois parágrafos (<p>) são renderizados dentro do rodapé:
    - O primeiro parágrafo contém um símbolo de direitos autorais e a informação "BelussoCode. Todos os direitos reservados."
    - O segundo parágrafo contém o texto "Desenvolvido por" e um link para o perfil do desenvolvedor no LinkedIn.
      - O link é renderizado dentro de um elemento a (tag <a>) com os estilos definidos em linkStyle.

Isso resume a estrutura e as principais funcionalidades do projeto. Ele utiliza React, Next.js, Tailwind CSS e MUI (Material-UI) para criar uma interface de usuário interativa e amigável.

## 3 - Como você se vê daqui a 5 anos?

R: Um desenvolvedor Senior.

## 4 - Caso você tenha dado um “Tchammmm!” na sua aplicação, descreva o que você fez, como isso irá melhorar a experiência do usuário.

R: Na página de contato eu adicionei um Snackbar ao navegador para confirmar o envio
dos dados do formulário para o console.
No geral, o Snackbar é uma ferramenta valiosa para melhorar a experiência do usuário, oferecendo feedback imediato e contextual de maneira não intrusiva. Ele ajuda a manter os usuários informados, engajados e confiantes ao interagir com seu aplicativo.
