export const site = { name: 'JS INOX', city: 'Fortaleza — CE', ctaLabel: 'Conversar sobre uma necessidade' };
export const nav = [
  { label: 'Sobre a necessidade', href: '#sobre' },
  { label: 'Aplicações', href: '#solucoes' },
  { label: 'Como iniciar', href: '#como-funciona' },
  { label: 'Perguntas frequentes', href: '#faq' },
];
export const aspects = [
  ['Aplicação', 'Onde e como o item será utilizado.'],
  ['Local e unidade', 'Município, unidade e área em que está a necessidade.'],
  ['Medidas e referências', 'Medidas, desenho, fotos ou especificações, se disponíveis.'],
  ['Objetivo do pedido', 'O que a equipa pretende resolver com o pedido.'],
];
// Segmentos = foco comercial, não carteira de clientes.
export const segments = [
  { icon: 'store', title: 'Supermercados', text: 'Equipas que precisam conversar sobre uma necessidade numa unidade comercial.' },
  { icon: 'boxes', title: 'Atacarejos', text: 'Pedidos que podem ser descritos por aplicação, local e requisitos disponíveis.' },
  { icon: 'building', title: 'Grandes comércios', text: 'Responsáveis que precisam esclarecer o escopo de uma necessidade em inox.' },
  { icon: 'network', title: 'Redes empresariais', text: 'Demandas de várias unidades, informadas por local de aplicação.' },
];
// A categoria e o escopo de atendimento permanecem sujeitos a confirmação da empresa.
export const solutions = [
  { title: 'Estruturas e componentes em inox para áreas comerciais', image: { src: '/images/mesas-expositoras.webp', width: 1000, height: 403, alt: 'Exemplo visual de mesas expositoras em aço inox' }, text: 'Descreva a aplicação pretendida e a unidade. A disponibilidade de cada categoria, material, acabamento e etapa de execução deve ser confirmada pela JS Inox antes de qualquer proposta.' },
];
export const solutionsNotice = 'A apresentação de uma necessidade não confirma disponibilidade, fornecimento, orçamento, prazo ou execução.';
export const steps = [
  ['Partilhe a necessidade', 'Informe a aplicação, a unidade ou local, a quantidade aproximada e o que pretende resolver.'],
  ['Envie referências', 'Inclua medidas, desenho, fotos ou especificações, se disponíveis.'],
  ['Confirme o enquadramento', 'A categoria e o local precisam de ser confirmados com a JS Inox.'],
  ['Defina o próximo passo', 'Com informações suficientes e capacidade confirmada, a equipa poderá indicar como avançar.'],
];
// As imagens são referências visuais e não comprovam autoria, cliente, local ou escopo executado.
export const gallery = [
  { src: '/images/mesas-linha.webp', width: 1000, height: 900, alt: 'Imagem de referência de mesas expositoras em aço inox' },
  { src: '/images/mesas-corrimao.webp', width: 800, height: 1000, alt: 'Imagem de referência de mesa em aço inox com corrimão tubular' },
  { src: '/images/pia-bancadas.webp', width: 1000, height: 562, alt: 'Imagem de referência de pia e bancadas em aço inox' },
  { src: '/images/balcao-expositor.webp', width: 1000, height: 562, alt: 'Imagem de referência de balcão expositor com base em aço inox' },
];
export const projects: { title: string; text: string }[] = []; // Casos identificados apenas após confirmação e autorização.
export const faq = [
  ['A JS Inox atende todas as cidades da Região Metropolitana?', 'A cobertura deve ser confirmada conforme o município e o escopo. Informe a localização para verificar a disponibilidade.'],
  ['A empresa faz visita técnica?', 'Confirme com a equipa se visita, medição ou levantamento presencial está disponível para este pedido. Esses serviços não estão incluídos automaticamente numa consulta inicial.'],
  ['Posso iniciar a conversa sem desenho técnico?', 'Sim. Pode começar por informar a aplicação, o local e as medidas aproximadas ou referências disponíveis. A equipa poderá indicar se faltam dados para avaliar o pedido.'],
  ['A instalação está incluída?', 'A proposta deve indicar expressamente se fornecimento, instalação ou outros serviços fazem parte do escopo. Confirme por escrito antes de considerar qualquer etapa incluída.'],
  ['Qual é o prazo e a garantia?', 'Prazos e condições dependem do escopo e devem constar da proposta aprovada. Consulte a JS Inox para confirmar os termos aplicáveis.'],
];

// Número pendente de confirmação; manter como contacto provisório até validação pela empresa.
export const whatsapp = {
  number: '558589896928', display: '(85) 8989-6928',
  message: 'Olá, gostaria de conversar sobre uma necessidade de inox para uma área comercial.\nEmpresa:\nNome e contacto:\nMunicípio e unidade:\nAplicação e quantidade aproximada:\nMedidas, desenho ou fotos (se disponíveis):\nPrazo ou janela desejada:',
};
export const waLink = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
