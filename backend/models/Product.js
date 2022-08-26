//*--------------------------------------------------------------------------------
//*---------------------------------- LIBRAIRIE -----------------------------------
//*--------------------------------------------------------------------------------

//* APPEL/IMPORT MONGOOSE
const mongoose = require('../services/database')

//*--------------------------------------------------------------------------------
//*------------------------------- SCHEMA MONGOOSE --------------------------------
//*--------------------------------------------------------------------------------

//* CREER SCHEMA
const productSchema = mongoose.Schema ({
  name: String,
  description: String,
  price: Number,
  inStock: Boolean,
})

//* CREER LE MODELE A EXPORTER
const Product = mongoose.model('product', productSchema)


//*--------------------------------------------------------------------------------
//*---------------------------------- FONCTIONS -----------------------------------
//*--------------------------------------------------------------------------------

//* CREER PRODUIT
// METHODE DESTRUCTURE => MANIERE PLUS PROPRE DE CODER
function createProduct(obj) {
const { description, inStock, name, price } = obj
const product = new Product ({
  description: description, // On peut garder qu'une seule des deux valeurs pour ne pas se repéter
  inStock: inStock,
  name: name,
  price: price
})
  // METHODE CLASSIQUE => MANIERE PLUS REPETITIVE
  // const description = obj.description
  // const inStock = obj.inStock
  // const name = obj.name
  // const price = obj.price
  // const product = new schema ({
  //   description: obj.description,
  //   inStock: obj.inStock,
  //   name: obj.name,
  //   price: obj.price
  // })
  //* RETOURNE LA SAUVEGARDE DU PRODUIT CREE
  return product.save()
}

//* RECUPERER TOUS LES PRODUITS
function getProducts () {
  return Product.find({})
}

//* RECUPERER PRODUIT AVEC SON ID
function getProduct(id) {
  return Product.findById(id)
}

//* MODIFIER PRODUIT
function updateProduct(_id, newValues) {
  return Product.replaceOne({ _id }, { ...newValues, _id }) // ...newValues => RECUPERE TOUTE LES DONNEES DU PRODUIT
}

//* SUPPRIMER PRODUIT
function deleteProduct(_id) {
  return Product.deleteOne({ _id })
}

//* EXPORT DES FONCTION
module.exports = {createProduct, getProducts, getProduct, updateProduct, deleteProduct}