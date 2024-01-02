
// Côté serveur on utilisera renderToPipeableStream pour le rendu côté serveur, particulièrement utile pour le Server-Side Rendering (SSR).



// Points Clés à Noter
// Transition Progressive : Ces nouvelles API permettent une transition progressive vers les nouvelles fonctionnalités de React 18, 
// comme le rendu concurrent.
// Compatibilité et Mise à Jour : Assurez-vous que votre projet et toutes les dépendances sont compatibles avec 
// React 18 avant de migrer vers ces nouvelles API.
// Server-Side Rendering (SSR) et Streaming : renderToPipeableStream offre des avantages significatifs pour SSR, 
// notamment un meilleur contrôle sur le streaming des réponses.
// Ces nouvelles API sont une partie essentielle des améliorations apportées par React 18, 
// offrant une plus grande flexibilité et de meilleures performances pour le rendu d'applications React

import { renderToPipeableStream } from 'react-dom/server';
import App from './App'; // Votre composant racine

// Un exemple de fonction de gestionnaire de requête
function handleRequest(req, res) {
  const stream = renderToPipeableStream(<App />);

  // Envoie les en-têtes de réponse
  res.setHeader('Content-Type', 'text/html');

  stream.pipe(res);
}