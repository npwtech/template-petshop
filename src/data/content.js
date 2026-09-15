// ============================================================
// CONTEÚDO — troque nomes, textos, preços e imagens aqui.
// As imagens usam URLs do Unsplash (licença livre de uso).
// Para o site final do cliente, troque pelos arquivos reais
// dentro de /public/images e ajuste os caminhos.
// ============================================================

export const brand = {
  name: 'Seu Petshop',
  short: 'Seu Petshop',
  whatsapp: 'https://wa.me/5500000000000',
  phone: '(00) 00000-0000',
  instagram: '@seupetshop',
  address: 'Rua das Acácias, 482 — Jardim das Flores',
  city: 'Sua Cidade — UF',
  hours: [
    ['Seg – Sex', '09h às 19h'],
    ['Sábado', '09h às 17h'],
    ['Domingo', 'Fechado'],
  ],
};

export const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#localizacao' },
];

export const heroImage =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1800&q=80';

export const services = [
  {
    id: 'banho-tosa',
    title: 'Banho & Tosa',
    text: 'Cuidados completos para deixar seu pet limpo, cheiroso e confortável, com produtos hipoalergênicos.',
    image:
      'https://images.unsplash.com/photo-1611173622933-91942d394b04?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'pet-shop',
    title: 'Pet Shop',
    text: 'Rações, petiscos, brinquedos e acessórios das melhores marcas.',
    image:
      'https://images.unsplash.com/photo-1733451629195-a253141eb37c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cuidados',
    title: 'Cuidados',
    text: 'Produtos de higiene e bem-estar selecionados para cada fase da vida do seu pet.',
    image:
      'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'entrega',
    title: 'Entrega',
    text: 'Consulte disponibilidade de entrega na sua região e receba tudo em casa.',
    image:
      'https://images.unsplash.com/photo-1774790479490-dbf0f3a7fb60?auto=format&fit=crop&w=900&q=80',
  },
];

export const groomingServices = [
  'Banho completo',
  'Tosa higiênica',
  'Tosa na tesoura',
  'Hidratação',
  'Desembolo',
  'Corte de unhas',
];

export const products = [
  {
    id: 'racao-golden',
    name: 'Ração Golden Adultos 15kg',
    category: 'Ração',
    price: 'A partir de R$ 189,90',
    image:
      'https://images.unsplash.com/photo-1764249453850-faace6e57444?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'racao-premier',
    name: 'Ração Premier Filhotes 12kg',
    category: 'Ração',
    price: 'A partir de R$ 219,90',
    image:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'petisco-bifinho',
    name: 'Bifinho Natural 500g',
    category: 'Petisco',
    price: 'A partir de R$ 24,90',
    image:
      'https://images.unsplash.com/photo-1741942732547-45a0d0c2b99a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'brinquedo-corda',
    name: 'Kit Brinquedos de Corda',
    category: 'Acessório',
    price: 'A partir de R$ 39,90',
    image:
      'https://images.unsplash.com/photo-1723296014357-808b32c57d98?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cama-pet',
    name: 'Cama Pet Premium P/M',
    category: 'Acessório',
    price: 'A partir de R$ 149,90',
    image:
      'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coleira-guia',
    name: 'Coleira + Guia Ajustável',
    category: 'Acessório',
    price: 'A partir de R$ 59,90',
    image:
      'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=900&q=80',
  },
];

export const differentiators = [
  {
    title: 'Atendimento personalizado',
    text: 'Cada pet é recebido pelo nome, com atenção ao temperamento e às necessidades específicas dele.',
  },
  {
    title: 'Produtos de qualidade',
    text: 'Selecionamos marcas confiáveis, testadas e aprovadas por quem entende do assunto: os próprios pets.',
  },
  {
    title: 'Profissionais especializados',
    text: 'Equipe treinada em bem-estar animal, técnicas de tosa e manejo de diferentes portes e raças.',
  },
  {
    title: 'Ambiente seguro',
    text: 'Espaço pensado para reduzir o estresse do seu pet, com higienização constante.',
  },
  {
    title: 'Atendimento próximo',
    text: 'Bairro, WhatsApp e conversa direta — sem burocracia entre você e quem cuida do seu melhor amigo.',
  },
  {
    title: 'Fácil acesso',
    text: 'Localização de fácil chegada, com opções de estacionamento nas proximidades.',
  },
];

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?auto=format&fit=crop&w=900&q=80',
    alt: 'Cachorro tomando banho',
    big: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?auto=format&fit=crop&w=700&q=80',
    alt: 'Tosa feita com cuidado e atenção',
  },
  {
    src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80',
    alt: 'Gato feliz e bem tratado',
  },
  {
    src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=700&q=80',
    alt: 'Cachorro feliz depois da tosa',
  },
  {
    src: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?auto=format&fit=crop&w=900&q=80',
    alt: 'Carinho no dia a dia com os pets',
    big: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1692906456160-385d805be646?auto=format&fit=crop&w=700&q=80',
    alt: 'Equipe cuidando da alimentação dos pets',
  },
];

export const testimonials = [
  {
    name: 'Marina Costa',
    pet: 'tutora da Mel',
    rating: 5,
    text: 'Sempre levo meu cachorro aqui. Atendimento excelente e ele sai sempre tranquilo, sem estresse.',
  },
  {
    name: 'Felipe Andrade',
    pet: 'tutor do Thor',
    rating: 5,
    text: 'Minha cachorrinha voltou do banho linda! O carinho da equipe faz toda a diferença.',
  },
  {
    name: 'Juliana Prado',
    pet: 'tutora da Nina',
    rating: 5,
    text: 'Loja completa, preço justo e um atendimento que parece de amigos de longa data.',
  },
  {
    name: 'Rodrigo Lemos',
    pet: 'tutor do Bidu',
    rating: 5,
    text: 'Levo meu gato há dois anos e nunca tive um problema sequer. Recomendo de olhos fechados.',
  },
];

export const about = {
  image:
    'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
  years: '12',
  text:
    'Há 12 anos cuidando dos pets da região, oferecendo produtos, serviços e um atendimento tão próximo que parece de família — porque, para nós, é exatamente isso que ela é.',
};
