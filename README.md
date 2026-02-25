# CyberAI MA — Plateforme Nationale de Renseignement en Cybersécurité
### Créateur & Concepteur : Salim Elghazoui | Dev & Solutions Digitales 🇲🇦

---

## 🛡️ À Propos du Projet
**CyberAI MA** est la première plateforme marocaine dédiée au **Threat Intelligence** (renseignement sur les menaces) propulsée par l'Intelligence Artificielle. Elle est conçue spécifiquement pour les SOCs (Security Operations Centers), les chercheurs en cybersécurité, et les entreprises souveraines au Maroc.

Ce projet n'est pas qu'une simple interface : c'est le **bureau virtuel** d'un analyste cybersécurité moderne, où la collaboration sur les vulnérabilités rencontre l'analyse locale automatisée par IA.

---

## 📈 La Stratégie Globale

Notre stratégie repose sur trois piliers fondamentaux : **Souveraineté, Action Locale et Monétisation (SaaS).**

### 1. Positionnement & Audience
- **Cible B2B (Entreprises & Banques)** : Responsables de la Sécurité des Systèmes d'Information (RSSI), directeurs de SOCs bancaires (CIH, Attijari, BMCE) et opérateurs télécoms limités par des solutions non-marocaines.
- **Cible B2C / Chercheurs** : Pentesters, étudiants en cybersécurité, passionnés du domaine souhaitant un accès à des bases de données locales.
- **Valeur Unique** : Au lieu de dépendre d'outils américains globaux, CyberAI MA contextualise les attaques (fraude locale, ransomwares visant la région MENA) et centralise les Directives Nationales (DGSSI).

### 2. Stratégie de Monétisation (Modèle SaaS)
La plateforme utilise un modèle **Freemium** avec un funnel de conversion direct intégré :
- **🟢 Accès Gratuit (Communauté)** : Feed d'actualité de base, chat limité avec l'IA.
- **🟡 Plan SOC Analyst (299 MAD/mois)** : Accès à 100 requêtes d'analyse par jour, flux d'IoCs en temps réel.
- **🔴 Plan CISO Enterprise (999 MAD/mois)** : L'offre phare. IA illimitée, alertes Zero-Day par SMS, accès direct à l'API et conformité avec les directives de la DGSSI.

L'intégration d'un **Paiement en Ligne B2B** directement dans l'interface (via l'onglet "UPGRADE PRO 🔓") fluidifie l'acquisition, donne confiance et transforme les visiteurs curieux en abonnés premium récurrents.

### 3. Stratégie de l'Architecture & Expérience Utilisateur
- **Pôle Threat Intel** : Le flux d'actualités affiche en temps réel les codes de PoC d'exploits, les alertes spécifiques, etc.
- **Pôle Premium (Paiement)** : Une interface esthétiquement rassurante avec le choix des plans. Le parcours de conversion est optimisé pour les décisionnaires techniques.
- **Pôle Base de Données** : Donne un accès exclusif à des fuites DarkWeb régionalisées (après paiement de l'option Pro).
- **Pôle IA de Cyber-défense** : Un assistant qui réagit comme un Terminal de Commandes pour traduire la menace, désassembler les malwares ou générer des règles YARA pour bloquer les attaques.

---

## 🛠️ Stack Technique

- **Frontend** : HTML5 sémantique, CSS3 (Vanilla avec variables CSS et Grid Layout).
- **Design System** : "Cyberpunk Minimaliste". Palette sombre (Noir / Bleu néon / Vert Terminal / Or) pour attirer visuellement les professionnels tout en valorisant l'interface comme un "SaaS Premium" à haute valeur ajoutée.
- **Composants JS** : Vanilla JS (ES6+), sans lourd framework pour garantir une légèreté exceptionnelle et une conformité maximale pour des environnements réseau stricts.
- **Moteur IA** : Connexion à l'API Anthropic (Claude 3.5) customisée avec des prompts système orientés "Cybersécurité au Maroc".

---

## 🚀 Installation & Lancement Rapide

**Option 1 — Lancement avec Serveur Local (Recommandé)**
```bash
# Python
python -m http.server 3000

# Node.js
npx serve .
```
Rendez-vous sur [http://localhost:3000](http://localhost:3000)

**Option 2 — Ouverture Directe**
Double-cliquez simplement sur `index.html`.

---

## 🔮 Roadmap
1. **MVP (Terminé)** : Interface de l'analyste, base Cyberpunk, Threat Feed.
2. **Monétisation & Conversion (Achevé)** : Implémentation de la logique tarifaire "Premium", du design de la page d'upgrade, et d'un simulateur de paiement par carte.
3. **Phase 2 (À venir)** : Remplacement des fausses bases de données par des connecteurs réels d'API Threat Intel (OSINT framework, VirusTotal, AbuseIPDB).

---

*Conçu & Développé avec précision pour l'écosystème Cyber Marocain — CyberAI MA © 2026*
