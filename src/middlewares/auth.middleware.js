const validateToken = (req, res, next) => {
    //Validar que el token sea correcto
    const token = req.headers.authorization;
    console.log(token);
  };
  
  module.exports = {
    validateToken
  }