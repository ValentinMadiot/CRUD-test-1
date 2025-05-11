//*--------------------------------------------------------------------------------
//*--------------------------- BASE DE DONNEES MONGODB ----------------------------
//*--------------------------------------------------------------------------------

//* APPEL/IMPORT LIBRAIRIE MONGOOSE
const mongoose = require("mongoose");

//* VARIABLES D'ENVIRONEMENTS
// const password = process.env.PASSWORD;
// const login = process.env.LOGIN;
const uri = process.env.MONGODB_URI;

//* CONNEXTION A LA BASE DE DONNEE MONGODB
mongoose
  // .connect(`mongodb+srv://${login}:${password}@cluster0.zmfxcnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .connect(uri)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.error("Connexion à MongoDB échouée !", +error));

//* EXPORT
module.exports = mongoose;
