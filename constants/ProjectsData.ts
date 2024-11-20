export interface ProjectTypes {
  id: number;
  title: { [key: string]: string }; // Las traducciones del título por idioma
  description: { [key: string]: string }; // Las traducciones de la descripción por idioma
  image?: string;
  languages: string[];
  webLink: string;
  button: { [key: string]: string }; // Traducción del texto del botón por idioma
}

export const ProjectsData: ProjectTypes[] = [
  {
    id: 1,
    title: {
      es: "FACTUCASH",
      en: "FACTUCASH",
      ru: "ФАТКЮКЕШ",
      de: "FATUCASH",
    },
    description: {
      es: "Aplicación web para facturación electrónica en Ecuador, diseñada para facilitar la generación y gestión de facturas y proformas de manera ágil y segura. La plataforma también cuenta con una API integrada que permite automatizar procesos y conectarse fácilmente con otros sistemas, mejorando la eficiencia de las operaciones comerciales.",
      en: "Web application for electronic invoicing in Ecuador, designed to facilitate the generation and management of invoices and proformas quickly and securely. The platform also includes an integrated API that automates processes and connects easily with other systems, improving the efficiency of business operations.",
      ru: "Веб-приложение для электронного выставления счетов в Эквадоре, предназначенное для упрощения генерации и управления счетами и проформами быстро и безопасно. Платформа также включает интегрированный API, который автоматизирует процессы и легко соединяется с другими системами, улучшая эффективность бизнес-операций.",
      de: "Webanwendung für die elektronische Rechnungsstellung in Ecuador, die die schnelle und sichere Erstellung und Verwaltung von Rechnungen und Proformarechnungen erleichtert. Die Plattform enthält auch eine integrierte API, die Prozesse automatisiert und eine einfache Verbindung mit anderen Systemen ermöglicht, wodurch die Effizienz der Geschäftsprozesse verbessert wird.",
    },
    languages: [
      "TypeScript",
      "TypeORM",
      "Vuejs3",
      "Quasar",
      "Nestjs",
      "PostgreSQL",
    ],
    image: "/projects/factucash.svg",
    webLink: "https://facturacion.rednuevaconexion.net/login",
    button: {
      es: "Ir a la página",
      en: "Go to the page",
      ru: "Перейти на страницу",
      de: "Zur Seite gehen",
    },
  },
  {
    id: 2,
    title: {
      es: "ISPMAX",
      en: "ISPMAX",
      ru: "ИСМАКС",
      de: "ISPMAX",
    },
    description: {
      es: "Aplicación web diseñada para proveedores de servicios de internet, tanto a nivel nacional como internacional, que ofrece una alternativa eficiente y robusta frente a sistemas extranjeros limitados. Nuestra plataforma optimiza la gestión y operación de redes, adaptándose a las necesidades específicas del mercado local y global, brindando flexibilidad, escalabilidad y soporte especializado.",
      en: "Web application designed for internet service providers, both nationally and internationally, offering an efficient and robust alternative to limited foreign systems. Our platform optimizes network management and operations, adapting to the specific needs of the local and global market, providing flexibility, scalability, and specialized support.",
      ru: "Веб-приложение, предназначенное для поставщиков интернет-услуг, как на национальном, так и на международном уровне, предлагающее эффективную и надежную альтернативу ограниченным иностранным системам. Наша платформа оптимизирует управление сетью и операциями, адаптируясь к специфическим потребностям локального и глобального рынка, обеспечивая гибкость, масштабируемость и специализированную поддержку.",
      de: "Webanwendung, die für Internetdienstanbieter entwickelt wurde, sowohl auf nationaler als auch internationaler Ebene, und eine effiziente und robuste Alternative zu begrenzten ausländischen Systemen bietet. Unsere Plattform optimiert das Netzwerkmanagement und den Betrieb, indem sie sich an die spezifischen Bedürfnisse des lokalen und globalen Marktes anpasst und Flexibilität, Skalierbarkeit und spezialisierte Unterstützung bietet.",
    },
    languages: [
      "TypeScript",
      "TypeORM",
      "Vuejs3",
      "Quasar",
      "Nestjs",
      "PostgreSQL",
    ],
    image: "/projects/isp.svg",
    webLink: "https://isp.rednuevaconexion.net/login",
    button: {
      es: "Ir a la página",
      en: "Go to the page",
      ru: "Перейти на страницу",
      de: "Zur Seite gehen",
    },
  },
  {
    id: 3,
    title: {
      es: "CENTINELA",
      en: "CENTINELA",
      ru: "ЦЕНТИНЕЛА",
      de: "CENTINELA",
    },
    description: {
      es: "Aplicación web para el control de DNS en tiempo real",
      en: "Web application for real-time DNS control",
      ru: "Веб-приложение для контроля DNS в реальном времени",
      de: "Webanwendung zur Echtzeit-DNS-Steuerung",
    },
    languages: [
      "TypeScript",
      "TypeORM",
      "Reactjs",
      "MaterialUI",
      "Nestjs",
      "PostgreSQL",
      "Tanstack Query",
    ],
    image: "/projects/centinela.svg",
    webLink: "https://centinela.inter-ecuador.com/",
    button: {
      es: "Ir a la página",
      en: "Go to the page",
      ru: "Перейти на страницу",
      de: "Zur Seite gehen",
    },
  },
];
