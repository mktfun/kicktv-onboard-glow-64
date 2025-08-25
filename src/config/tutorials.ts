// Configuration for tutorial videos and download links by plan and device
export interface TutorialStep {
  step: number;
  title: string;
  description: string;
}

export interface TutorialConfig {
  videoUrl?: string;
  videoId?: string; // YouTube video ID for embedding
  downloadUrl?: string;
  additionalInfo?: string;
  steps: TutorialStep[];
}

export interface TutorialsByPlan {
  [plan: string]: {
    [device: string]: TutorialConfig;
  };
}

export const tutorialConfigs: TutorialsByPlan = {
  essencial: {
    tv: {
      videoUrl: 'https://www.youtube.com/watch?v=dO3Fe8Jnyaw',
      videoId: 'dO3Fe8Jnyaw',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em Smart TV',
      steps: [
        { step: 1, title: 'Acessar a Loja de Aplicativos', description: 'Na sua Smart TV (LG Content Store, Samsung Apps), navegue até a loja de aplicativos.' },
        { step: 2, title: 'Buscar por Aplicativos Compatíveis', description: 'Procure por aplicativos de IPTV genéricos que suportem listas M3U ou credenciais de login (ex: IPTV Smarters Pro, SS IPTV, Smart IPTV).' },
        { step: 3, title: 'Instalar o Aplicativo', description: 'Selecione o aplicativo de IPTV desejado e clique em "Instalar".' },
        { step: 4, title: 'Configurar Credenciais', description: 'Abra o aplicativo instalado e insira suas credenciais fornecidas pelo provedor (usuário, senha e URL do servidor).' },
        { step: 5, title: 'Carregar Conteúdo', description: 'Após a configuração, o aplicativo carregará o conteúdo, permitindo que você navegue pelos canais.' }
      ]
    },
    android: {
      videoUrl: 'https://www.youtube.com/watch?v=dO3Fe8Jnyaw',
      videoId: 'dO3Fe8Jnyaw',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em Android',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Vá em Configurações > Segurança > Fontes Desconhecidas e ative esta opção.' },
        { step: 2, title: 'Baixar o Aplicativo', description: 'Procure pelo arquivo APK do WPlay IPTV ou use um player de IPTV genérico como IPTV Smarters Pro.' },
        { step: 3, title: 'Instalar o Aplicativo', description: 'Use um gerenciador de arquivos para instalar o APK baixado.' },
        { step: 4, title: 'Inserir Credenciais', description: 'Abra o aplicativo e insira seu nome de usuário, senha e URL do servidor fornecidos pelo provedor.' },
        { step: 5, title: 'Começar a Assistir', description: 'Após inserir as credenciais corretas, o aplicativo carregará a lista de canais e você poderá assistir.' }
      ]
    },
    iphone: {
      videoUrl: 'https://www.youtube.com/watch?v=01yH0KWISuw',
      videoId: '01yH0KWISuw',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em iPhone',
      steps: [
        { step: 1, title: 'Baixar Player IPTV', description: 'Na App Store, procure por aplicativos como "IPTV Smarters Pro", "GSE Smart IPTV" ou "VLC Media Player".' },
        { step: 2, title: 'Instalar o Aplicativo', description: 'Instale o aplicativo de IPTV escolhido da App Store.' },
        { step: 3, title: 'Abrir e Configurar', description: 'Abra o aplicativo e selecione a opção de adicionar uma nova conexão ou playlist.' },
        { step: 4, title: 'Inserir Dados', description: 'Insira as credenciais fornecidas: nome de usuário, senha e URL do servidor.' },
        { step: 5, title: 'Carregar Conteúdo', description: 'Após a configuração, o aplicativo carregará os canais disponíveis para assistir.' }
      ]
    },
    mac: {
      videoUrl: 'https://www.youtube.com/watch?v=EzANWzJ-p9w',
      videoId: 'EzANWzJ-p9w',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em Mac',
      steps: [
        { step: 1, title: 'Baixar Player IPTV', description: 'Acesse a Mac App Store e procure por "IPTV", "VLC Media Player" ou "IINA".' },
        { step: 2, title: 'Instalar o Aplicativo', description: 'Instale o player de vídeo/IPTV escolhido.' },
        { step: 3, title: 'Configurar Conexão', description: 'Abra o aplicativo e procure por opções de "Adicionar Fonte" ou "Network Stream".' },
        { step: 4, title: 'Inserir URL/Credenciais', description: 'Insira a URL da playlist M3U ou as credenciais fornecidas pelo provedor.' },
        { step: 5, title: 'Assistir Conteúdo', description: 'Após carregar a playlist, navegue pelos canais disponíveis.' }
      ]
    },
    windows: {
      videoUrl: 'https://www.youtube.com/watch?v=rgolkSXrPgk',
      videoId: 'rgolkSXrPgk',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em Windows',
      steps: [
        { step: 1, title: 'Baixar Player IPTV', description: 'Baixe e instale um player como VLC Media Player, Kodi ou IPTV Smarters Pro para Windows.' },
        { step: 2, title: 'Instalar o Programa', description: 'Execute o instalador e siga as instruções de instalação.' },
        { step: 3, title: 'Abrir o Player', description: 'Inicie o aplicativo e procure por opções de "Media" > "Open Network Stream" ou similar.' },
        { step: 4, title: 'Configurar IPTV', description: 'Insira a URL da playlist M3U ou configure com usuário e senha fornecidos.' },
        { step: 5, title: 'Reproduzir Canais', description: 'Após carregar a configuração, você poderá navegar e assistir os canais.' }
      ]
    },
    chromecast: {
      videoUrl: 'https://www.youtube.com/watch?v=dO3Fe8Jnyaw',
      videoId: 'dO3Fe8Jnyaw',
      additionalInfo: 'Tutorial para uso do WPlay IPTV (Essencial) com Chromecast',
      steps: [
        { step: 1, title: 'Instalar App no Celular', description: 'No seu smartphone, instale um app de IPTV que suporte Chromecast (ex: IPTV Smarters Pro).' },
        { step: 2, title: 'Configurar IPTV', description: 'Configure o app com suas credenciais fornecidas pelo provedor.' },
        { step: 3, title: 'Conectar ao Chromecast', description: 'Certifique-se de que seu celular e Chromecast estão na mesma rede Wi-Fi.' },
        { step: 4, title: 'Transmitir Conteúdo', description: 'No app de IPTV, procure pelo ícone de Cast e selecione seu Chromecast.' },
        { step: 5, title: 'Assistir na TV', description: 'Escolha um canal no seu celular e ele será transmitido para a TV via Chromecast.' }
      ]
    },
    'android-tv': {
      videoUrl: 'https://www.youtube.com/watch?v=dO3Fe8Jnyaw',
      videoId: 'dO3Fe8Jnyaw',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em Android TV',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Vá em Configurações > Segurança & Restrições > Fontes Desconhecidas e ative.' },
        { step: 2, title: 'Instalar Downloader', description: 'Na Google Play Store da Android TV, instale o app "Downloader".' },
        { step: 3, title: 'Baixar App IPTV', description: 'Use o Downloader para baixar o APK do IPTV Smarters Pro ou outro player IPTV.' },
        { step: 4, title: 'Instalar Aplicativo', description: 'Instale o APK baixado seguindo as instruções na tela.' },
        { step: 5, title: 'Configurar e Usar', description: 'Abra o app instalado, insira suas credenciais e comece a assistir.' }
      ]
    },
    'tv-box': {
      videoUrl: 'https://www.youtube.com/watch?v=pWY2gW5k604',
      videoId: 'pWY2gW5k604',
      additionalInfo: 'Tutorial para instalação do WPlay IPTV (Essencial) em TV Box',
      steps: [
        { step: 1, title: 'Habilitar Instalação de APKs', description: 'Nas configurações da TV Box, ative "Fontes Desconhecidas" em Segurança.' },
        { step: 2, title: 'Baixar APK', description: 'Use o navegador da TV Box ou transfira o APK do WPlay/IPTV Smarters Pro via USB.' },
        { step: 3, title: 'Instalar Aplicativo', description: 'Use um gerenciador de arquivos para localizar e instalar o APK.' },
        { step: 4, title: 'Configurar Credenciais', description: 'Abra o app e insira usuário, senha e URL do servidor fornecidos.' },
        { step: 5, title: 'Assistir Conteúdo', description: 'Após configurar, navegue pelos canais disponíveis e comece a assistir.' }
      ]
    }
  },
  krator: {
    tv: {
      videoUrl: 'https://www.youtube.com/watch?v=LUW-P7XdBe4',
      videoId: 'LUW-P7XdBe4',
      additionalInfo: 'Tutorial para instalação do Krator+ em Smart TV',
      steps: [
        { step: 1, title: 'Acessar a Loja de Aplicativos', description: 'Na sua Smart TV, navegue até a loja de aplicativos (LG Content Store para LG, Samsung Apps para Samsung).' },
        { step: 2, title: 'Buscar o Krator+', description: 'Use a função de busca da loja para procurar por "Krator+".' },
        { step: 3, title: 'Instalar o Aplicativo', description: 'Se encontrado, selecione-o e clique em "Instalar". Siga as instruções na tela.' },
        { step: 4, title: 'Métodos Alternativos', description: 'Se não encontrar na loja, verificar o site oficial do Krator+ para métodos alternativos como sideloading via USB.' },
        { step: 5, title: 'Abrir o Aplicativo', description: 'Após a instalação, o ícone do Krator+ estará disponível na sua tela inicial ou lista de aplicativos.' }
      ]
    },
    android: {
      videoUrl: 'https://www.youtube.com/watch?v=NKx0h20weLg',
      videoId: 'NKx0h20weLg',
      additionalInfo: 'Tutorial para instalação do Krator+ em Android',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Vá em Configurações > Segurança (ou Privacidade e Segurança) > Fontes Desconhecidas e ative esta opção.' },
        { step: 2, title: 'Baixar o Arquivo APK', description: 'Abra o navegador e procure pelo arquivo APK do Krator+ de uma fonte confiável. Se baixado no computador, transfira via USB, nuvem ou e-mail.' },
        { step: 3, title: 'Localizar e Instalar o APK', description: 'Use um gerenciador de arquivos (como Files by Google) para encontrar o arquivo APK e toque nele para iniciar a instalação.' },
        { step: 4, title: 'Concluir a Instalação', description: 'Siga as instruções na tela, concedendo as permissões necessárias.' },
        { step: 5, title: 'Abrir o Aplicativo', description: 'Toque no ícone do Krator+ para abri-lo e começar a usar.' }
      ]
    },
    windows: {
      videoUrl: 'https://www.youtube.com/watch?v=LUW-P7XdBe4',
      videoId: 'LUW-P7XdBe4',
      additionalInfo: 'Tutorial para instalação do Krator+ em Windows',
      steps: [
        { step: 1, title: 'Verificar Disponibilidade', description: 'Verificar se existe uma versão do Krator+ para Windows ou usar emuladores Android como BlueStacks.' },
        { step: 2, title: 'Baixar Emulador', description: 'Se necessário, baixe e instale um emulador Android como BlueStacks ou NoxPlayer.' },
        { step: 3, title: 'Configurar Emulador', description: 'Configure o emulador seguindo as instruções de instalação.' },
        { step: 4, title: 'Instalar Krator+', description: 'Dentro do emulador, siga os passos de instalação para Android.' },
        { step: 5, title: 'Usar o Aplicativo', description: 'Execute o Krator+ dentro do emulador Android no Windows.' }
      ]
    },
    chromecast: {
      videoUrl: 'https://www.youtube.com/watch?v=NKx0h20weLg',
      videoId: 'NKx0h20weLg',
      additionalInfo: 'Tutorial para uso do Krator+ com Chromecast',
      steps: [
        { step: 1, title: 'Instalar no Celular', description: 'Primeiro instale o Krator+ no seu smartphone Android seguindo o tutorial para Android.' },
        { step: 2, title: 'Verificar Compatibilidade', description: 'Certifique-se de que o Krator+ suporta transmissão via Chromecast.' },
        { step: 3, title: 'Conectar à Mesma Rede', description: 'Conecte seu smartphone e Chromecast à mesma rede Wi-Fi.' },
        { step: 4, title: 'Transmitir Conteúdo', description: 'No app Krator+, procure pelo ícone de Cast e selecione seu Chromecast.' },
        { step: 5, title: 'Assistir na TV', description: 'O conteúdo do Krator+ será transmitido para sua TV via Chromecast.' }
      ]
    },
    'android-tv': {
      videoUrl: 'https://www.youtube.com/watch?v=Q5aYumbN58Q',
      videoId: 'Q5aYumbN58Q',
      additionalInfo: 'Tutorial para instalação do Krator+ em Android TV',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Vá em Configurações > Segurança > Fontes Desconhecidas e ative esta opção.' },
        { step: 2, title: 'Baixar o APK', description: 'Use o navegador da Android TV ou transfira o APK do Krator+ via USB.' },
        { step: 3, title: 'Instalar via Gerenciador', description: 'Use um gerenciador de arquivos para localizar e instalar o APK do Krator+.' },
        { step: 4, title: 'Concluir Instalação', description: 'Siga as instruções na tela e conceda as permissões necessárias.' },
        { step: 5, title: 'Abrir e Usar', description: 'Acesse o Krator+ pela lista de aplicativos da Android TV.' }
      ]
    },
    'tv-box': {
      videoUrl: 'https://www.youtube.com/watch?v=Q5aYumbN58Q',
      videoId: 'Q5aYumbN58Q',
      additionalInfo: 'Tutorial para instalação do Krator+ em TV Box',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Nas configurações da TV Box, ative "Fontes Desconhecidas" em Segurança.' },
        { step: 2, title: 'Baixar o APK', description: 'Use o navegador da TV Box ou transfira o arquivo APK do Krator+ via USB.' },
        { step: 3, title: 'Localizar Arquivo', description: 'Use um gerenciador de arquivos para encontrar o APK baixado/transferido.' },
        { step: 4, title: 'Instalar Aplicativo', description: 'Toque no arquivo APK para iniciar o processo de instalação.' },
        { step: 5, title: 'Finalizar e Usar', description: 'Após a instalação, o Krator+ aparecerá na tela inicial ou gaveta de aplicativos.' }
      ]
    }
    // Note: iPhone and Mac are not available for krator + plan
  },
  nexus: {
    tv: {
      videoUrl: 'https://www.youtube.com/watch?v=MCy4vFD_FQk',
      videoId: 'MCy4vFD_FQk',
      additionalInfo: 'Tutorial para instalação do Nexus TV em Smart TV',
      steps: [
        { step: 1, title: 'Verificar Compatibilidade', description: 'Verifique se sua Smart TV suporta instalação de aplicativos via sideloading ou se tem o Nexus TV disponível na loja.' },
        { step: 2, title: 'Método Alternativo', description: 'Se não disponível na loja, use um dispositivo Android conectado à TV (como TV Box ou Fire Stick).' },
        { step: 3, title: 'Usar Códigos Downloader', description: 'Em dispositivos compatíveis, use códigos como 1623741 no app Downloader.' },
        { step: 4, title: 'Instalação', description: 'Siga o processo de instalação via Downloader ou sideloading.' },
        { step: 5, title: 'Configurar Acesso', description: 'Após instalação, configure conforme instruções do provedor de serviços.' }
      ]
    },
    android: {
      videoUrl: 'https://www.youtube.com/watch?v=vsDcAw6Q-3w',
      videoId: 'vsDcAw6Q-3w',
      downloadUrl: 'https://tinyurl.com/23t35x6b',
      additionalInfo: 'Tutorial para instalação do Nexus TV em Android',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Vá em Configurações > Segurança > Fontes Desconhecidas e ative.' },
        { step: 2, title: 'Baixar via Link Direto', description: 'Use um dos links: https://tinyurl.com/23t35x6b ou https://cutt.ly/ErxTxO9e' },
        { step: 3, title: 'Método Downloader', description: 'Alternativamente, instale o app Downloader e use o código: 1623741' },
        { step: 4, title: 'Instalar APK', description: 'Localize o arquivo baixado e instale seguindo as instruções na tela.' },
        { step: 5, title: 'Abrir e Configurar', description: 'Abra o Nexus TV e configure conforme instruções do seu provedor.' }
      ]
    },
    windows: {
      videoUrl: 'https://www.youtube.com/watch?v=yTmKcLEc0JQ',
      videoId: 'yTmKcLEc0JQ',
      additionalInfo: 'Tutorial para instalação do Nexus TV em Windows',
      steps: [
        { step: 1, title: 'Instalar Emulador Android', description: 'Baixe e instale BlueStacks, NoxPlayer ou outro emulador Android para Windows.' },
        { step: 2, title: 'Configurar Emulador', description: 'Configure o emulador seguindo as instruções de instalação.' },
        { step: 3, title: 'Baixar Nexus TV', description: 'Dentro do emulador, baixe o Nexus TV usando os links ou códigos fornecidos.' },
        { step: 4, title: 'Instalar no Emulador', description: 'Instale o APK do Nexus TV dentro do ambiente Android emulado.' },
        { step: 5, title: 'Usar Aplicativo', description: 'Execute o Nexus TV dentro do emulador Android no Windows.' }
      ]
    },
    chromecast: {
      videoUrl: 'https://www.youtube.com/watch?v=MCy4vFD_FQk',
      videoId: 'MCy4vFD_FQk',
      additionalInfo: 'Tutorial para uso do Nexus TV com Chromecast',
      steps: [
        { step: 1, title: 'Instalar no Smartphone', description: 'Instale o Nexus TV no seu smartphone Android usando os métodos descritos.' },
        { step: 2, title: 'Verificar Suporte Cast', description: 'Verifique se o Nexus TV suporta transmissão via Chromecast.' },
        { step: 3, title: 'Conectar Dispositivos', description: 'Conecte smartphone e Chromecast à mesma rede Wi-Fi.' },
        { step: 4, title: 'Transmitir Conteúdo', description: 'No app, procure pelo ícone de Cast e selecione seu Chromecast.' },
        { step: 5, title: 'Assistir na TV', description: 'O conteúdo será transmitido do celular para a TV via Chromecast.' }
      ]
    },
    'android-tv': {
      videoUrl: 'https://www.youtube.com/watch?v=vsDcAw6Q-3w',
      videoId: 'vsDcAw6Q-3w',
      additionalInfo: 'Tutorial para instalação do Nexus TV em Android TV',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Vá em Configurações > Meu Fire TV > Opções do Desenvolvedor e ative "Aplicativos de Fontes Desconhecidas".' },
        { step: 2, title: 'Instalar Downloader', description: 'Instale o aplicativo Downloader da loja de aplicativos da Android TV.' },
        { step: 3, title: 'Usar Código Downloader', description: 'Abra o Downloader, digite o código 1623741 e pressione Go.' },
        { step: 4, title: 'Instalar Nexus TV', description: 'Após o download, siga as instruções para instalar o aplicativo.' },
        { step: 5, title: 'Configurar e Usar', description: 'Abra o Nexus TV e configure conforme instruções do provedor.' }
      ]
    },
    'tv-box': {
      videoUrl: 'https://www.youtube.com/watch?v=yTmKcLEc0JQ',
      videoId: 'yTmKcLEc0JQ',
      downloadUrl: 'https://cutt.ly/ErxTxO9e',
      additionalInfo: 'Tutorial para instalação do Nexus TV em TV Box',
      steps: [
        { step: 1, title: 'Habilitar Fontes Desconhecidas', description: 'Nas configurações da TV Box, ative "Fontes Desconhecidas" em Segurança.' },
        { step: 2, title: 'Baixar APK', description: 'Use o navegador para baixar via links diretos ou instale o Downloader app.' },
        { step: 3, title: 'Usar Downloader', description: 'Se usar Downloader, insira o código 1623741 para baixar automaticamente.' },
        { step: 4, title: 'Instalar Aplicativo', description: 'Localize o arquivo APK e instale seguindo as instruções.' },
        { step: 5, title: 'Finalizar Setup', description: 'Abra o Nexus TV e configure com as credenciais fornecidas.' }
      ]
    }
    // Note: iPhone and Mac are not available for Nexus plan
  },
  whot: {
    windows: {
      videoUrl: 'https://www.youtube.com/watch?v=3r_o3PBHe3E',
      videoId: '3r_o3PBHe3E',
      additionalInfo: 'Tutorial para acesso ao Whot no navegador Windows',
      steps: [
        { step: 1, title: 'Abrir Navegador', description: 'Abra seu navegador preferido (Chrome, Firefox, Edge) no Windows.' },
        { step: 2, title: 'Acessar o Site', description: 'Na barra de endereços, digite https://whot.me e pressione Enter.' },
        { step: 3, title: 'Fazer Login', description: 'Insira suas credenciais de login fornecidas pelo serviço Whot.' },
        { step: 4, title: 'Navegar no Conteúdo', description: 'Após o login, navegue pelo conteúdo disponível na plataforma.' },
        { step: 5, title: 'Assistir em Tela Cheia', description: 'Use o modo tela cheia do navegador para melhor experiência de visualização.' }
      ]
    },
    mac: {
      videoUrl: 'https://www.youtube.com/watch?v=eOYY5FdnT94',
      videoId: 'eOYY5FdnT94',
      additionalInfo: 'Tutorial para acesso ao Whot no navegador Mac',
      steps: [
        { step: 1, title: 'Abrir Safari ou Chrome', description: 'Abra o Safari, Chrome ou outro navegador de sua preferência no Mac.' },
        { step: 2, title: 'Acessar Whot.me', description: 'Digite https://whot.me na barra de endereços e pressione Enter.' },
        { step: 3, title: 'Inserir Credenciais', description: 'Faça login com seu nome de usuário e senha fornecidos pelo provedor.' },
        { step: 4, title: 'Explorar Conteúdo', description: 'Navegue pelos filmes, séries e canais disponíveis na plataforma.' },
        { step: 5, title: 'Otimizar Experiência', description: 'Use Command+F para tela cheia e ajuste qualidade conforme sua conexão.' }
      ]
    },
    android: {
      videoUrl: 'https://www.youtube.com/watch?v=DkBKLEQbMI4',
      videoId: 'DkBKLEQbMI4',
      additionalInfo: 'Tutorial para acesso ao Whot no navegador Android',
      steps: [
        { step: 1, title: 'Abrir Navegador Mobile', description: 'Abra o Chrome, Firefox ou navegador padrão do seu dispositivo Android.' },
        { step: 2, title: 'Navegar para Whot', description: 'Digite https://whot.me na barra de endereços.' },
        { step: 3, title: 'Fazer Login', description: 'Insira suas credenciais de acesso ao serviço Whot.' },
        { step: 4, title: 'Usar em Tela Cheia', description: 'Toque no ícone de tela cheia para melhor experiência de visualização.' },
        { step: 5, title: 'Casting (Opcional)', description: 'Se disponível, use a função de Cast para transmitir para TV via Chromecast.' }
      ]
    },
    iphone: {
      videoUrl: 'https://www.youtube.com/watch?v=eOYY5FdnT94',
      videoId: 'eOYY5FdnT94',
      additionalInfo: 'Tutorial para acesso ao Whot no navegador iPhone',
      steps: [
        { step: 1, title: 'Abrir Safari', description: 'Abra o Safari ou outro navegador instalado no seu iPhone.' },
        { step: 2, title: 'Acessar Site Whot', description: 'Digite https://whot.me na barra de endereços e toque em "Ir".' },
        { step: 3, title: 'Realizar Login', description: 'Insira seu usuário e senha fornecidos pelo provedor Whot.' },
        { step: 4, title: 'Assistir Conteúdo', description: 'Navegue pelo catálogo e selecione o conteúdo desejado.' },
        { step: 5, title: 'AirPlay (Opcional)', description: 'Use AirPlay para transmitir o conteúdo para Apple TV ou TVs compatíveis.' }
      ]
    }
    // Note: whot only works in browser, no app installation needed
  }
};

// Helper function to get tutorial config for a specific plan and device
export const getTutorialConfig = (plan: string, device: string): TutorialConfig | null => {
  return tutorialConfigs[plan]?.[device] || null;
};
