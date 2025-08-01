// Esta es la función que Netlify ejecutará cuando el ESP8266 la llame
exports.handler = async function(event, context) {
  // Aquí es donde pondrías la lógica para leer el estado del LED
  // Por ahora, simplemente devolvemos la cadena "ON"
  return {
    statusCode: 200,
    body: "ON"
  };
};