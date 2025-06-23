<br /> 
<h3 align="center">🛒 CRUD Test 1 &nbsp; – &nbsp; Projet Scolaire</h3>

## <br /> 📌 Sommaire

&nbsp;&nbsp;&nbsp; 🎨 &nbsp; [**Introduction**](#introduction)<br />
&nbsp;&nbsp;&nbsp; ⚙️ &nbsp; [**Technologies**](#technologies)<br />
&nbsp;&nbsp;&nbsp; 🎯 &nbsp; [**Fonctionnalités**](#fonctionnalités)<br />
&nbsp;&nbsp;&nbsp; 🧱 &nbsp; [**Schéma & Routes**](#schéma)<br />
&nbsp;&nbsp;&nbsp; 🚀 &nbsp; [**Installation**](#installation)<br />
&nbsp;&nbsp;&nbsp; 🧪 &nbsp; [**Utilisation & Tests**](#utilisation)<br />

## <br /> <a name="introduction">🎨 Introduction</a>

Ce projet est un exercice **Fullstack** conçu pour tester la maîtrise des opérations **CRUD** à travers la création d’une **API REST**.

Il permet la gestion d’un catalogue de produits à l’aide de **Node.js**, **Express** et **MongoDB**, via un backend structuré.

Une interface frontend intégrée permet de tester automatiquement les routes et d’obtenir un mot secret une fois tous les tests réussis.

## <br /> <a name="technologies">⚙️ Technologies</a>

- **Backend** : Node.js, Express
- **Base de données** : MongoDB (Mongoose)
- **Langage** : JavaScript

## <br /> <a name="fonctionnalités">🎯 Fonctionnalités</a>

- Création de produit
- Lecture d’un ou plusieurs produits
- Mise à jour d’un produit
- Suppression d’un produit
- API REST conforme aux spécifications des tests automatiques

## <br /> <a name="schéma">🧱 Schéma & Routes</a>

### 🔧 Schéma Mongoose attendu

```js
mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
```

### 🔌 Endpoints requis

- **GET** `/api/products`  
  Retourne tous les produits sous la forme :

  ```json
  { "products": [ ... ] }
  ```

- **GET** `/api/products/:id`  
  Retourne le produit correspondant à l’ID :

  ```json
  { "product": { ... } }
  ```

- **POST** `/api/products`  
  Corps de requête attendu :

  ```json
  {
    "name": "Nom",
    "description": "Description",
    "price": 99.99,
    "inStock": true
  }
  ```

  Retourne le produit nouvellement créé (avec `_id`) :

  ```json
  { "product": { ... } }
  ```

- **PUT** `/api/products/:id`  
  Met à jour un produit existant.  
  Corps attendu :

  ```json
  {
    "name": "Nom",
    "description": "Description modifiée",
    "price": 120.0,
    "inStock": false
  }
  ```

  Réponse :

  ```json
  { "message": "Modified!" }
  ```

- **DELETE** `/api/products/:id`  
  Supprime le produit correspondant à l’ID.  
  Réponse :
  ```json
  { "message": "Deleted!" }
  ```

## <br /> <a name="installation">🚀 Installation</a>

### ✅ Prérequis

- [Git](https://git-scm.com/) &nbsp;—&nbsp; Système de gestion de versions
- [Node.js](https://nodejs.org/fr) &nbsp;—&nbsp; Exécuteur local de scripts JavaScript
- [npm](https://www.npmjs.com/) &nbsp;—&nbsp; Gestionnaire de paquets JavaScript
- [MongoDB](https://www.mongodb.com/) — Base de données NoSQL
- [Google Chrome](https://www.google.com/) &nbsp;—&nbsp; Navigateur moderne
- [Visual Studio Code](https://code.visualstudio.com/) &nbsp;—&nbsp; Éditeur de code
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) &nbsp;—&nbsp; Extension VS Code

### 📥 Cloner le projet

```bash
git clone https://github.com/ValentinMadiot/CRUD-Test-1
cd CRUD-Test-1
```

### 🔧 Configuration de l'environnement

Renommer `.env.exemple` en `.env`

Ajoutez les variables d’environnement dans le fichier `.env` :

```bash
# Database MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

### ▶️ Lancer le projet

### Backend

```bash
cd backend
npm install
npm start
```

Backend disponible sur : `http://localhost:8080`

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend disponible sur : `http://localhost:8081`

## <br /> <a name="utilisation">🧪 Utilisation & Tests</a>

1. Lancez votre serveur API avec `npm start` dans le dossier backend
2. Lancez l'application frontend avec `npm start` dans le dossier frontend
3. Indiquez le port utilisé par votre API (par défaut : `8080`)
4. Cliquez sur **TEST ROUTES** pour démarrer la vérification
5. Tous les tests doivent réussir pour révéler le mot secret
