//*--------------------------------------------------------------------------------
//*---------------------------------- LIBRAIRIE -----------------------------------
//*--------------------------------------------------------------------------------

//* APPEL/IMPORT DOTENV
const dotenv = require('dotenv')

//* DECLARATION DE DOTENV
dotenv.config()

//* APPEL/IMPORT EXPRESS
const express = require('express')

//* DECLARER APP
const app = express()

//* APPEL/IMPORT CORS
const cors = require('cors')

//* LIBRAIRIE BODY-PARSER OBSOLETE
// const bodyparser = require('body-parser')

//* IMPORT DES FONCTIONS
const {createProduct, getProducts, getProduct, updateProduct, deleteProduct} = require('./models/Product')

//* DECLARER LE PORT
const port = 3000

//* LIRE & INDIQUER LE PORT QUI EST LU
app.listen(port, () => {console.log("Server listening on port " + port);})

//*--------------------------------------------------------------------------------
//*---------------------------------- MIDDLEWARE ----------------------------------
//*--------------------------------------------------------------------------------

//* UTILISATION DE CORS
app.use(cors())

//* UTILISATION DE EXPRESS
app.use(express.json())

//*--------------------------------------------------------------------------------
//*------------------------------------ ROUTES ------------------------------------
//*--------------------------------------------------------------------------------

//!================================================================================

//* GET /api/products => RETOURNE TOUS LES PRODUITS 

//=================================================================================
//? METHODE .THEN & .CATCH 
//=================================================================================
app.get("/api/products", (req, res) => {
  getProducts(req.body)
    .then((products) => res.send({ products: products }))
    .catch((error) => console.error("Error: ", error))
})

//=================================================================================
//? METHODE ASYNC & AWAIT + TRY & CATCH
//=================================================================================
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await getProducts()
//     return res.send({ products: products })
//   } catch (error) {
//     console.error("Error: ", error)
//   }
// })

//!================================================================================

//* GET /api/products/:id => RETOURNE UN PRODUIT AVEC SON ID

//=================================================================================
//? METHODE .THEN & .CATCH 
//=================================================================================
app.get("/api/products/:id", (req, res) => {
  // ==============================================================
  const productId = req.params.id // const {productId} = req.params
  // ==============================================================
  getProduct(productId)
    .then((product) => res.send({ product: product }))
    .catch((error) => console.error("Error: ", error))
})

//=================================================================================
//? METHODE ASYNC & AWAIT + TRY & CATCH
//=================================================================================
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     // =================================================
//     const productId = req.params.id // const {productId} = req.params
//     // =================================================
//     const product = await getProduct(productId)
//     res.send({product: product})
//   } catch (error) {
//     console.error("Error: ", error)
//   }
// })

//!================================================================================

//* POST /api/products => CREER UN PRODUIT DANS LA BASE DE DONNEES

//=================================================================================
//? METHODE .THEN & .CATCH 
//=================================================================================
app.post("/api/products", (req, res) => {
  createProduct(req.body)
    .then((newProduct) => res.send({ product: newProduct }))
    .catch((error) => console.error("Error: ", error))
})

//=================================================================================
//? METHODE ASYNC & AWAIT + TRY & CATCH
//=================================================================================
// app.post("/api/products", async (req, res) => {
//   try {
//    const newProduct = await createProduct(req.body)
//    res.send({ product: newProduct })
//   } catch (error) {
//     console.error("Error: ", error)
//   }
// })

//!================================================================================

//* PUT /api/products/:id => MODIFIER UN PRODUIT

//=================================================================================
//? METHODE .THEN & .CATCH 
//=================================================================================
app.put("/api/products/:id", (req, res) => {
  const product = req.params.id // const {product} = req.params
  updateProduct(product, req.body)
    .then(() => res.send({ message: 'Modified!' }))
    .catch((error) => console.error("Error: ", error))
})

//=================================================================================
//? METHODE ASYNC & AWAIT + TRY & CATCH
//=================================================================================
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const id = req.params.id
//     const product = await updateProduct(id, req.body)
//     // console.log('product:', product);
//     res.send({ message: 'Modified!' })
//   } catch(error) {
//     console.log("Error: ", error)
//   }
// })

//!================================================================================

//* DELETE /api/products => SUPPRIMER UN PRODUIT

//=================================================================================
//? METHODE .THEN & .CATCH 
//=================================================================================
app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id // const {product} = req.params
  deleteProduct(productId)
    .then(() => {
      return res.send({ message: 'Deleted!' })
    })
    .catch((error) => console.error("Error: ", error))
})

//=================================================================================
//? METHODE ASYNC & AWAIT + TRY & CATCH
//=================================================================================
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const product = await deleteProduct(req.params.id)
//     // console.log("result", product);
//     res.send({ message: 'Deleted!' })
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// })