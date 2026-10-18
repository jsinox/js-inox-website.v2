export const site = { name: 'JS INOX', city: 'Fortaleza — CE', ctaLabel: 'Apresentar minha demanda' };
export const nav = [
  { label: 'Sobre', href: '#sobre' }, { label: 'Soluções', href: '#solucoes' },
  { label: 'Como funciona', href: '#como-funciona' }, { label: 'Avaliação de demanda', href: '#avaliacao-de-demanda' },
];
export const aspects = [
  ['Contexto operacional', 'Empresa, unidade e rotina em que a solução será usada.'],
  ['Necessidade e aplicação', 'O que precisa ser atendido e onde será aplicado.'],
  ['Informações técnicas disponíveis', 'Medidas, requisitos e referências que a equipe já tem.'],
  ['Definição do próximo passo', 'A continuidade depende da avaliação e da confirmação operacional.'],
];
// Segmentos = foco comercial, não carteira de clientes.
export const segments = [
  { icon: 'store', title: 'Supermercados', text: 'Operações com áreas de preparo, atendimento e exposição que precisam de soluções em inox.' },
  { icon: 'boxes', title: 'Atacarejos', text: 'Ambientes de grande circulação, em que a aplicação e o contexto operacional orientam a avaliação.' },
  { icon: 'building', title: 'Grandes comércios', text: 'Unidades comerciais que precisam descrever a necessidade antes de definir a continuidade.' },
  { icon: 'network', title: 'Redes empresariais', text: 'Demandas de várias unidades, informadas por local de aplicação.' },
];
// CONDICIONAL: itens divulgados no Instagram, pendentes de aprovação do cliente. Andaimes/escoras/plataformas: bloqueado.
export const solutions = [
  { title: 'Inox para operações comerciais', image: { src: '/images/mesas-expositoras.webp', width: 1000, height: 403, alt: 'Mesas expositoras em aço inox' }, text: 'Aplicações que podem ser apresentadas: bancadas, pias, tanques, coifas e outras soluções sob medida em aço inox.' },
  { title: 'Estruturas e soluções metálicas', image: { src: '/images/expositor-escalonado.webp', width: 900, height: 1200, alt: 'Expositor escalonado em aço inox' }, text: 'Aplicações que podem ser apresentadas: corrimãos, guarda-corpos, escadas, coberturas e estruturas de sustentação, portões.' },
  { title: 'Projetos sob medida', image: { src: '/images/mesa-com-tela.webp', width: 900, height: 850, alt: 'Mesa expositora em aço inox com divisórias e tela' }, text: 'Conte a necessidade da sua operação para uma avaliação inicial da aplicação e dos requisitos.' },
];
export const solutionsNotice = 'Apresentar uma aplicação não garante fornecimento, orçamento, prazo ou execução. Cada demanda passa por avaliação.';
export const steps = [
  ['Apresente a demanda', 'Compartilhe o contexto da empresa, da unidade e da necessidade.'],
  ['Organize as informações', 'Reúna os dados disponíveis sobre aplicação, ambiente e requisitos.'],
  ['Avaliação inicial', 'As informações serão consideradas para verificar a aderência e identificar eventuais lacunas.'],
  ['Definição do próximo passo', 'A continuidade dependerá da avaliação e da confirmação operacional.'],
];
// Imagens fornecidas pela JS INOX (recortadas, sem letreiros de terceiros). Pendente: confirmar autoria e autorização de uso.
export const gallery = [
  { src: '/images/mesas-linha.webp', width: 1000, height: 900, alt: 'Mesas expositoras em aço inox lado a lado' },
  { src: '/images/mesas-corrimao.webp', width: 800, height: 1000, alt: 'Mesa em aço inox com corrimão tubular' },
  { src: '/images/pia-bancadas.webp', width: 1000, height: 562, alt: 'Pia e bancadas em aço inox' },
  { src: '/images/balcao-expositor.webp', width: 1000, height: 562, alt: 'Balcão expositor com base em aço inox' },
];
export const projects: { title: string; text: string }[] = []; // cases autorizados (nome, resultado) — só após aprovação
export const faq = [
  ['A JS INOX trabalha com projetos sob medida?', 'A JS INOX apresenta soluções em aço inox e projetos sob medida. A adequação de cada demanda é verificada na avaliação inicial.'],
  ['Quais informações são necessárias para apresentar uma demanda?', 'Empresa, unidade ou local de aplicação, a necessidade e os dados técnicos que você já tiver.'],
  ['A avaliação inicial confirma a execução do projeto?', 'Não. O envio da demanda não garante orçamento, visita, prazo, aceitação ou execução.'],
  ['Como são definidos medidas e requisitos?', 'Dependem da aplicação e das informações apresentadas, e são tratados na continuidade da avaliação.'],
  ['É possível apresentar demandas de diferentes unidades?', 'Informe a cidade e a unidade de cada demanda. A continuidade depende da confirmação operacional.'],
  ['Como são confirmadas as condições e os próximos passos?', 'Após a avaliação inicial, mediante confirmação operacional.'],
];

// Canal real de contato. Conferir o número: 8 dígitos após o DDD (pode faltar o 9 inicial do celular).
export const whatsapp = {
  number: '558589896928', display: '(85) 8989-6928',
  message: 'Olá, gostaria de apresentar uma demanda em aço inox.\nEmpresa:\nUnidade ou local de aplicação:\nNecessidade:\nDados técnicos disponíveis:',
};
export const waLink = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;
