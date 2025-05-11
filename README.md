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

Ce projet est un exercice de type _Fullstack Quiz_ visant à tester vos compétences en développement d’une API REST avec Node.js, Express et MongoDB.  
L’objectif : créer un backend capable de gérer un catalogue de produits via les opérations CRUD.

Une application frontend fournie permet de tester automatiquement l’API, en affichant un mot secret une fois tous les tests validés.

## <br /> <a name="technologies">⚙️ Technologies</a>

- **Backend** : Node.js, Express
- **Base de données** : MongoDB (via Mongoose)
- **Langage** : JavaScript

## <br /> <a name="fonctionnalités">🎯 Fonctionnalités</a>

&nbsp;&nbsp;&nbsp; ✅ &nbsp; Création de produit <br />
&nbsp;&nbsp;&nbsp; 📄 &nbsp; Lecture d’un ou plusieurs produits <br />
&nbsp;&nbsp;&nbsp; ✏️ &nbsp; Mise à jour d’un produit <br />
&nbsp;&nbsp;&nbsp; ❌ &nbsp; Suppression d’un produit <br />
&nbsp;&nbsp;&nbsp; 🔐 &nbsp; API REST conforme aux spécifications requises pour test automatique <br />

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

- 🛠️ **[Git](https://git-scm.com/)**
- 🔧 **[Node.js](https://nodejs.org/fr/)**
- 📦 **[npm](https://www.npmjs.com/)**
- 🍃 **[MongoDB](https://www.mongodb.com/)** (Atlas ou local)

### 📥 Clonage

```bash
git clone https://github.com/ValentinMadiot/CRUD-Test-1
cd CRUD-Test-1
```

### 📦 Installation des dépendances

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

### 🔧 Configuration de l'environnement

Dans le dossier backend, renommer le fichier .env.example en .env :

```bash
mv .env.example .env
```

Ajoutez l'URI MongoDB dans le fichier .env :

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

### ▶️ Lancement du serveur

### Backend

```bash
npm start
```

Backend disponible sur : `http://localhost:3000`

### Frontend

```bash
npm start
```

Frontend disponible sur : `http://localhost:4200`

## <br /> <a name="utilisation">🧪 Utilisation & Tests</a>

1. Lancez votre serveur API avec `npm start` dans le dossier backend
2. Lancez l'application frontend avec `npm start` dans le dossier frontend
3. Indiquez le port utilisé par votre API (par défaut : `3000`)
4. Cliquez sur **TEST ROUTES** pour lancer les tests
5. Tous les tests doivent passer pour révéler le mot secret
