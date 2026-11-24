import type { Commerce } from '../types/commerce';

/**
 * Données fictives pour la première version.
 * Les noms sont inventés ; les adresses ne servent qu'à placer les marqueurs.
 */
export const MOCK_COMMERCES: Commerce[] = [
  {
    id: '1',
    name: 'Le Fournil des Pentes',
    category: 'alimentation',
    address: 'Montée de la Grande-Côte, Lyon 1er',
    position: { lat: 45.7705, lng: 4.8302 },
    description: 'Boulangerie au levain naturel.',
  },
  {
    id: '2',
    name: 'Primeur du Plateau',
    category: 'alimentation',
    address: 'Boulevard de la Croix-Rousse, Lyon 4e',
    position: { lat: 45.7754, lng: 4.8285 },
    description: 'Fruits et légumes de producteurs du Rhône.',
  },
  {
    id: '3',
    name: 'Fromagerie Saint-Antoine',
    category: 'alimentation',
    address: 'Quai Saint-Antoine, Lyon 2e',
    position: { lat: 45.7628, lng: 4.8298 },
  },
  {
    id: '4',
    name: 'Atelier Canut & Fil',
    category: 'mode',
    address: "Rue d'Austerlitz, Lyon 4e",
    position: { lat: 45.7731, lng: 4.8334 },
    description: 'Créations textiles en soie lyonnaise.',
  },
  {
    id: '5',
    name: 'Friperie Rive Gauche',
    category: 'mode',
    address: 'Grande Rue de la Guillotière, Lyon 7e',
    position: { lat: 45.7535, lng: 4.8461 },
  },
  {
    id: '6',
    name: 'Céramiques du Vieux Lyon',
    category: 'artisanat',
    address: 'Rue Saint-Jean, Lyon 5e',
    position: { lat: 45.7627, lng: 4.8273 },
    description: 'Poteries et céramiques façonnées sur place.',
  },
  {
    id: '7',
    name: "L'Établi de Monplaisir",
    category: 'artisanat',
    address: 'Avenue des Frères Lumière, Lyon 8e',
    position: { lat: 45.7449, lng: 4.8716 },
  },
  {
    id: '8',
    name: 'Le Bouchon des Traboules',
    category: 'restauration',
    address: 'Rue du Bœuf, Lyon 5e',
    position: { lat: 45.7646, lng: 4.8266 },
    description: 'Cuisine lyonnaise traditionnelle.',
  },
  {
    id: '9',
    name: 'Café de la Confluence',
    category: 'restauration',
    address: 'Cours Charlemagne, Lyon 2e',
    position: { lat: 45.7432, lng: 4.8187 },
  },
  {
    id: '10',
    name: 'Librairie des Brotteaux',
    category: 'culture',
    address: 'Rue Garibaldi, Lyon 6e',
    position: { lat: 45.7666, lng: 4.8516 },
    description: "Librairie indépendante et rencontres d'auteurs.",
  },
  {
    id: '11',
    name: 'Disques Part-Dieu',
    category: 'culture',
    address: 'Rue de la Villette, Lyon 3e',
    position: { lat: 45.7598, lng: 4.8601 },
  },
  {
    id: '12',
    name: 'Herboristerie de Saxe',
    category: 'bien-etre',
    address: 'Avenue Maréchal de Saxe, Lyon 3e',
    position: { lat: 45.7579, lng: 4.8444 },
    description: 'Plantes, tisanes et cosmétiques naturels.',
  },
];
