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

/** Portfolio (Texte: portfolio.sectors). */
export const portfolioData = [
  { name: 'Allogenetics GmbH', image: allogenetics },
  { name: 'Onyx Biotech', image: onyx },
  { name: 'Stealth Startup', image: stealth },
  { name: 'brainQr Therapeutics', image: brainqr },
  { name: 'Digity GmbH', image: digity },
  { name: 'Cultimate Foods', image: cultimate },
];

export const supporters = [
  { name: 'NBank', image: nbank, height: 40 },
  { name: 'Sartorius', image: sartorius, height: 76 },
  { name: 'Universitätsmedizin Göttingen', image: umg, height: 76 },
];
