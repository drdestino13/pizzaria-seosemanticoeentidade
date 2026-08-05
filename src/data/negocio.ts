export const SITE = "https://pizzaria-seosemanticoeentidade.vercel.app";

export const NEGOCIO = {
  nome: "Pizzaria do Zé",
  bairro: "Vila Mariana",
  cidade: "São Paulo",
  estado: "SP",
  endereco: "Rua das Palmeiras, 120 — Vila Mariana, São Paulo/SP",
  telefone: "+55 11 4002-8922",
  telefoneExibicao: "(11) 4002-8922",
  horario: "Ter–Dom, 18h às 23h",
  dono: "José Ricardo Almeida (o Zé)",
};

export const SAME_AS = [
  "https://www.instagram.com/pizzariadoze.demo",
  "https://www.facebook.com/pizzariadoze.demo",
  "https://www.ifood.com.br/delivery/sao-paulo-sp/pizzaria-do-ze-demo",
  "https://www.google.com/maps/place/?q=place_id:demo-pizzaria-do-ze",
];

export function schemaGrafoBase() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${SITE}/#negocio`,
        name: NEGOCIO.nome,
        url: SITE,
        telephone: NEGOCIO.telefone,
        priceRange: "R$ R$",
        servesCuisine: "Pizza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua das Palmeiras, 120",
          addressLocality: NEGOCIO.cidade,
          addressRegion: NEGOCIO.estado,
          addressCountry: "BR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "18:00",
          closes: "23:00",
        },
        founder: { "@id": `${SITE}/sobre-o-ze/#pessoa` },
        sameAs: SAME_AS,
        menu: `${SITE}/cardapio/`,
      },
      {
        "@type": "Person",
        "@id": `${SITE}/sobre-o-ze/#pessoa`,
        name: NEGOCIO.dono,
        jobTitle: "Fundador e pizzaiolo",
        worksFor: { "@id": `${SITE}/#negocio` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#site`,
        url: SITE,
        name: NEGOCIO.nome,
        publisher: { "@id": `${SITE}/#negocio` },
      },
    ],
  };
}
