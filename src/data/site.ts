// Sprachunabhängige Daten (Bilder, Namen, Zahlen, Kontakt).
// Texte stehen in src/i18n/de.ts und src/i18n/en.ts – Reihenfolge der Listen muss übereinstimmen.
import marco from '../assets/images/team/marco-janezic.jpg';
import sven from '../assets/images/team/sven-wagner.jpg';
import naomi from '../assets/images/team/naomi-kramer.jpg';
import gabriele from '../assets/images/team/gabriele-burgstaller.jpg';

import allogenetics from '../assets/images/portfolio/allogenetics.png';
import onyx from '../assets/images/portfolio/onyx-biotech.jpg';
import stealth from '../assets/images/portfolio/stealth-startup.png';
import brainqr from '../assets/images/portfolio/brainqr.jpg';
import digity from '../assets/images/portfolio/digity.jpg';
import cultimate from '../assets/images/portfolio/cultimate-foods.jpg';

import allogeneticsFeatured from '../assets/images/portfolio/detail/allogenetics-featured.png';
import allogeneticsLogo from '../assets/images/portfolio/detail/allogenetics-logo.png';
import onyxFeatured from '../assets/images/portfolio/detail/onyx-featured.jpg';
import onyxLogo from '../assets/images/portfolio/detail/onyx-logo.png';
import brainqrFeatured from '../assets/images/portfolio/detail/brainqr-featured.jpg';
import digityLogo from '../assets/images/portfolio/detail/digity-logo.jpg';
import cultimateLogo from '../assets/images/portfolio/detail/cultimate-logo.png';
import digityFeatured from '../assets/images/news/digity-team-investoren.jpg';
import cultimateFeatured from '../assets/images/news/cultimate-foods.jpg';

import iconMarkt from '../assets/images/icons/lsv-icon-markt.svg';
import iconTeam from '../assets/images/icons/lsv-icon-team.svg';
import iconSynergie from '../assets/images/icons/lsv-icon-wertvolle-synergie.svg';
import iconUmsetzbarkeit from '../assets/images/icons/lsv-icon-umsetzbarkeit.svg';
import iconValue from '../assets/images/icons/lsv-icon-individuelle-unterstuetzung.svg';
import iconFinanzen from '../assets/images/icons/lsv-icon-finanzielle-foerderung.svg';

import nbank from '../assets/images/partner/nbank.png';
import sartorius from '../assets/images/partner/sartorius.png';
import umg from '../assets/images/partner/umg.png';

export const company = {
  name: 'Life Science Valley Ventures Management GmbH',
  street: 'Annastraße 27',
  zipCity: '37075 Göttingen',
  country: { de: 'Deutschland', en: 'Germany' },
  phone: '0551 28879209',
  phoneIntlDisplay: '+49 551 28879209',
  phoneIntl: '+4955128879209',
  email: 'info@lsv-ventures.de',
};

/** Kennzahlen im Fonds-Abschnitt (Texte: fonds.highlights). */
export const highlightData = [
  { value: 12, icon: 'handshake' },
  { value: 30, icon: 'refresh' },
  { value: 999999999999, icon: 'network' },
] as const;

/** Icons der Investmentkriterien (Texte: contentFocus.criteria). */
export const criteriaIcons = [iconMarkt, iconTeam, iconSynergie, iconUmsetzbarkeit, iconValue, iconFinanzen];

/** Team (Texte: team.members). */
export const teamData = [
  { name: 'Marco Janezic', image: marco },
  { name: 'Dr. Sven Wagner', image: sven },
  { name: 'Naomi Kramer', image: naomi },
  { name: 'Gabriele Burgstaller', image: gabriele },
];

/** Ansprechpartnerin für alle Portfolio-Unternehmen (laut alter Seite). */
export const portfolioContact = { name: 'Naomi Maureen Kramer', role: 'Investment Manager' };

/**
 * Portfolio (Texte: portfolio.sectors und portfolio.companies – gleiche Reihenfolge).
 * image = Kachel auf der Startseite, featured = großes Bild der Detailseite, logo = Logo in der Seitenleiste.
 * featuredFit 'contain' für Logos/Grafiken, die nicht beschnitten werden dürfen.
 */
export const portfolioData = [
  {
    slug: 'allogenetics-gmbh',
    name: 'Allogenetics GmbH',
    image: allogenetics,
    featured: allogeneticsFeatured,
    featuredFit: 'contain',
    logo: allogeneticsLogo,
    address: 'Feodor-Lynen-Str. 5, 30625 Hannover',
    email: 'naomi.kramer@lsv-ventures.de',
    website: 'https://www.allogenetics.com',
    pressLink: 'https://www.linkedin.com/posts/allogenetics_pre-series-a-pr-activity-7503377380015771648-KuGx',
  },
  {
    slug: 'onyx-biotech',
    name: 'Onyx Biotech',
    image: onyx,
    featured: onyxFeatured,
    featuredFit: 'cover',
    logo: onyxLogo,
    address: 'Zeisigstr. 38, 85591 Vaterstetten',
    email: 'info@onyx-biotech.com',
    website: 'https://www.onyx-biotech.com',
  },
  {
    slug: 'stealth-startup',
    name: 'Stealth Startup',
    image: stealth,
    featured: stealth,
    featuredFit: 'contain',
    logo: undefined,
    email: 'naomi.kramer@lsv-ventures.de',
  },
  {
    slug: 'brainqr-therapeutics',
    name: 'brainQr Therapeutics',
    image: brainqr,
    featured: brainqrFeatured,
    featuredFit: 'cover',
    logo: undefined,
    address: 'Von-Siebold-Str. 3a, 37075 Göttingen',
    email: 'info@brainqrtherapeutics.com',
    website: 'https://brainqrtherapeutics.com',
  },
  {
    slug: 'digity-gmbh',
    name: 'Digity GmbH',
    image: digity,
    featured: digityFeatured,
    featuredFit: 'cover',
    logo: digityLogo,
    address: 'Karl-Grüneklee-Str. 22, 37077 Göttingen',
    email: 'viola.bartels@digity.de',
    website: 'https://www.digity.de',
  },
  {
    slug: 'cultimate-foods',
    name: 'Cultimate Foods',
    image: cultimate,
    featured: cultimateFeatured,
    featuredFit: 'cover',
    logo: cultimateLogo,
    address: 'Goethestr. 5, 10623 Berlin',
    email: 'hello@cultimatefoods.com',
    website: 'https://www.cultimatefoods.com',
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  image: ImageMetadata;
  featured: ImageMetadata;
  featuredFit: 'cover' | 'contain';
  logo: ImageMetadata | undefined;
  address?: string;
  email: string;
  website?: string;
  pressLink?: string;
}[];

export const supporters = [
  { name: 'NBank', image: nbank, height: 40 },
  { name: 'Sartorius', image: sartorius, height: 76 },
  { name: 'Universitätsmedizin Göttingen', image: umg, height: 76 },
];
