import type { Dictionary } from './de';

// English texts. Must mirror the structure of de.ts.
export const en: Dictionary = {
  meta: {
    siteName: 'Life Science Valley Growth Fund',
    homeTitle: 'Home',
    description:
      'The Life Science Valley Growth Fund is an early-stage venture capital fund based in Göttingen, investing in life science start-ups in Lower Saxony, Germany.',
    skipLink: 'Skip to content',
  },

  header: {
    homeAria: 'Life Science Valley Growth Fund – Home',
    navAria: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langSwitchAria: 'Choose language',
  },

  nav: [
    { label: 'Investment Focus', id: 'investmentfokus' },
    { label: 'Focus Areas', id: 'inhaltsfokus' },
    { label: 'Team', id: 'team' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'News', id: 'neuigkeiten' },
    { label: 'Contact', id: 'kontakt' },
  ],

  hero: {
    title: 'The Life Science Valley Growth Fund',
    subtitle: 'Lower Saxony – an ideal place to invest in the life sciences',
    paragraphs: [
      'Welcome to the Life Science Valley Growth Fund, a new early-stage venture capital fund based in Göttingen, Lower Saxony.',
      'Our goal is to foster innovation in the regional life science ecosystem by providing promising start-ups and emerging companies with funding and resources.',
      'Our fund is actively seeking investment opportunities across a wide range of life science sectors, including biotechnology, medical technology and digital health.',
      'If you would like to learn more about our fund or pitch your idea, please get in touch. We look forward to working with you to shape the future of life science innovation in Lower Saxony and beyond.',
    ],
    cta: 'Learn more',
    imageAlt: 'Young plant shoot growing out of dark soil',
  },

  fonds: {
    title: 'Life Science Valley Growth Fund',
    text: 'Since its first closing in December 2022, the Life Science Valley Growth Fund has managed more than EUR 12 million. Our aim is not only to use this capital for initial investments, but also to support promising portfolio companies with follow-on growth across several financing rounds.',
    numberLocale: 'en-US',
    highlights: [
      {
        suffix: '+m',
        label: 'Euro fund size',
        title: 'Your partner',
        text: 'With strong founding investors such as Sartorius AG, the State of Lower Saxony and the University Medical Center Göttingen, the fund rests on a solid foundation for further growth.',
      },
      {
        suffix: '+',
        label: 'Years of experience',
        title: 'Professional and reliable',
        text: 'Every decision we make is aimed at increasing the value of our companies. Our role is to give life science entrepreneurs strategic support at board level while they remain in operational control.',
      },
      {
        suffix: '+',
        label: 'invaluable',
        title: 'Network',
        text: 'We draw on the industry expertise of our network both to connect with exciting start-ups and to evaluate, select and support them.',
      },
    ],
  },

  invest: {
    title: 'Investment Focus',
    subtitle: 'The early-stage fund for life science technology spin-offs in Lower Saxony',
    paragraphs: [
      'A fund based in Lower Saxony that unlocks the local commercial and entrepreneurial potential of excellent life science research and technologies.',
      'Supporting early-stage companies from Lower Saxony in BioTech, MedTech, Digital Health and Agriscience.',
      'Fostering successful company formation in technology-driven growth sectors.',
    ],
    focusTitle: 'We focus our investments on:',
    pillars: ['regional,', 'early-stage,', 'life science-driven'],
    closing:
      '… young companies that want to work with us to unlock the entrepreneurial potential of excellent life science research.',
    imageAlt: 'Daisy in a green meadow',
  },

  contentFocus: {
    eyebrow: 'The early-stage fund for life science technology spin-offs in Lower Saxony',
    titleLine1: 'A clear focus on the life sciences and',
    titleLine2: 'well-defined investment criteria as the basis for success',
    areasTitle: 'Life science companies in Lower Saxony, including:',
    areas: [
      'Biotechnological drug development and processes',
      'Novel key technologies in biomedicine, medical technology, diagnostics and molecular biology',
      '(Digital) life science tools for the development and production of active pharmaceutical ingredients and plant traits',
      '(Digital) tools to improve clinical processes',
      'Extended life sciences, e.g. agri-life sciences, human mobility solutions, etc.',
    ],
    criteria: [
      { title: 'Market', text: 'Demonstrable clinical demand (“unmet medical/clinical need”) or market demand' },
      { title: 'Team', text: 'Interdisciplinary, entrepreneurial team with strong scientific, technological and business expertise' },
      { title: 'Synergies', text: 'High potential for cooperation and collaboration between the start-up, relevant partners in the ecosystem and our fund team' },
      { title: 'Feasibility', text: 'Clearly defined development path to market readiness' },
      { title: 'Value Proposition', text: 'Sustainable differentiation from potential competitors, e.g. through protected IP' },
      { title: 'Fundability', text: 'Realistic financing of the further development path' },
    ],
  },

  news: {
    title: 'Latest News',
    readMore: 'Read more',
    back: 'Back to home page',
    pressPdf: 'Official press release (PDF, German)',
    imageAlt: 'Article image',
    items: [
      { date: 'August 2024', title: 'Digity secures EUR 1.4 million seed funding for its preventive exoskeleton ARTUS' },
      { date: 'June 2024', title: 'Cultimate Foods raises EUR 2.3 million in seed funding from leading biotech and foodtech investors to revolutionise the alternative meat industry' },
      { date: 'February 2023', title: 'New fund to support life science start-ups in Lower Saxony' },
    ],
  },

  team: {
    title: 'Long-standing experience in life science entrepreneurship',
    paragraphs: [
      'We understand the particular challenges life science start-ups face, and we want to support them at every stage of their growth.',
      'Our team of experienced investors and industry experts brings a wealth of knowledge and experience, which we actively use to help our portfolio companies succeed.',
    ],
    portraitAlt: 'Portrait of',
    members: [
      { role: 'Managing Director', focus: 'Fund development, investor network & fundraising' },
      { role: 'Managing Director', focus: 'Fund development, investor network & fundraising' },
      { role: 'Investment Associate', focus: 'Venture building, scientific due diligence & value creation' },
      { role: 'Controller (IHK)', focus: 'Expert in finance and controlling' },
    ],
  },

  portfolio: {
    title: 'Our Portfolio',
    sectors: [
      'Genetic engineering',
      'Bioprocessing / Enabling Technology',
      'Biotech',
      'Biotech',
      'Exoskeleton technology',
      'Food, Nutrition & Personal Care',
    ],
    descriptions: [
      [
        'Allogenetics develops novel gene therapies to improve organ transplantation.',
        'Its lead programme ALG-115 is applied once, ex vivo, to the donor organ and is designed to lower the organ’s immunogenicity by selectively reducing MHC class I and class II expression. The aim is to reduce rejection and the need for long-term immunosuppression, and thereby to improve transplant outcomes in the long run. The initial focus is on lung transplantation.',
      ],
      [
        'Onyx Biotech develops best-in-class algorithms and workflows that replace laborious experimental steps in high-tech drug development (for example in the purification of antibodies for cancer treatment) with intelligent simulations – with the aim of shortening development times for life-saving medicines. In doing so, Onyx Biotech addresses one of the biggest bottlenecks in the development of modern biologics, whose importance in medicine continues to grow.',
      ],
      ['AI-driven platform for the development of novel bispecific therapeutics.'],
      [
        'brainQr Therapeutics develops therapies for neurodegenerative diseases by selectively stabilising misfolded proteins. Its focus is on tau, a key protein in Alzheimer’s disease and more than 30 other disorders. The company was founded by Prof. Dr. Markus Zweckstetter and is based in Göttingen.',
      ],
      [
        'Digity GmbH is an exoskeleton technology company. Founded in 2023 as a spin-off of the University Medical Center Göttingen, Digity develops and manufactures innovative solutions that improve ergonomics and occupational safety across a range of industries. Its first product, ARTUS, is a passive exoskeleton designed specifically for the fingers and has already won several awards.',
      ],
      [
        'Cultimate Foods is a cellular agriculture company producing alternative fat for plant-based meat products. Unlike other fat alternatives, the company creates a unique lipid composition that delivers an authentic pork and beef flavour. To date, the company has raised more than EUR 3 million and is backed by the strong life science investors HTGF, b.value and the Life Science Valley Growth Fund, as well as the largest foodtech funds Big Idea Ventures, ProVeg International and Kale United.',
      ],
    ],
    detailsAria: 'More about',
    sectorLabel: 'Sector',
    contactPersonLabel: 'Contact person',
    contactLabel: 'Contact',
    websiteLabel: 'Website',
    pressLink: 'Read the press release on LinkedIn',
    newsTitle: 'Press releases & news',
    back: 'Back to portfolio',
    logoAlt: 'Logo of',
    imageAlt: 'Image of',
    joinTitle: 'Join our portfolio',
    joinParagraphs: [
      'Are you a life science founder looking for funding for your start-up?',
      'With us you will find not only financing know-how, but also industry-specific venture building expertise to help you turn your ideas into reality.',
      'Whether drug development and biotech, medtech and diagnostics, digital health or R&D tools: from seed to exit, we put our expertise to work for you as an active, value-adding partner.',
    ],
    contactLead: 'Get in touch at',
  },

  contact: {
    title: 'Contact',
    text: 'The Life Science Valley Growth Fund team is happy to answer any questions you may have.',
    cardTitle: 'Write to us',
    cardText: 'Whether it is a pitch, a question or an idea for a partnership: just send us an email and we will get back to you as soon as possible.',
    button: 'Send an email',
    mailSubject: 'Enquiry via lsv-ventures.de',
    phoneLabel: 'Phone',
  },

  footer: {
    privacy: 'Privacy Policy',
    imprint: 'Legal Notice',
    supportedBy: 'Financially supported by:',
  },
};
