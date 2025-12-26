export type RouteName = keyof typeof routes;
type TopPageData = Record<RouteName, { title: string; description: string }>;

// type Routes = typeof routes[keyof typeof routes];


//----------------------------------------------------------

// not pure function | WARN !!!

export function isRoute(value: unknown): value is RouteName {
  return Object.keys(routes).find((route) => route === value) ? true : false;
}

//----------------------------------------------------------

export const routes = {
  catalog: "/nos-catalogues",
  contact: "/contactez-nous",
  promos: "/les-promos-du-moment",
} as const satisfies Record<string, string>; // as const permet de transformer toutes les variables internes à un objet en variable immuable

export const topPageData = {
  catalog: {
    title: "nos catalogues",
    description:
      "Parcourez nos catalogues et découvrez nos sélections de fournitures, outillage et matériel, adaptés à chaque situation rencontrée au quotidien dans votre travail, Vous y retrouverez également de nombreuses informations sur les normes en vigueur et des conseils d'utilisation",
  },
  contact: {
    title: "contactez-nous",
    description: "Contactez-nous vite !",
  },
  promos: {
    title: "les promos",
    description: "Nos promos du moment !",
  },
} satisfies TopPageData;

