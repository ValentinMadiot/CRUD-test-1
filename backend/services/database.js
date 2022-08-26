//*--------------------------------------------------------------------------------
//*--------------------------- BASE DE DONNEES MONGODB ----------------------------
//*--------------------------------------------------------------------------------

//* APPEL/IMPORT LIBRAIRIE MONGOOSE
const mongoose = require('mongoose')

//* VARIABLES D'ENVIRONEMENTS
const password = process.env.PASSWORD
const login = process.env.LOGIN

//* CONNEXTION A LA BASE DE DONNEE MONGODB
mongoose.connect(`mongodb+srv://${login}:${password}@cluster0.yx9hkki.mongodb.net/?retryWrites=true&w=majority`,)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Connexion à MongoDB échouée !', + error));

//* EXPORT
module.exports = mongoose