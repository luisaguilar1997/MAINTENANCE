const fs = require('fs');
const STATE_FILE = './state.txt';

exports.handler = async function(event, context) {
  // Maneja una solicitud POST para cambiar el estado
  if (event.httpMethod === 'POST') {
    const { state } = JSON.parse(event.body);
    if (state === 'ON' || state === 'OFF') {
      fs.writeFileSync(STATE_FILE, state);
      return { statusCode: 200, body: `State set to ${state}` };
    }
  }

  // Maneja una solicitud GET para leer el estado
  try {
    const currentState = fs.readFileSync(STATE_FILE, 'utf-8').trim();
    return {
      statusCode: 200,
      body: currentState
    };
  } catch (error) {
    // Si el archivo no existe, devuelve el estado por defecto "OFF"
    return {
      statusCode: 200,
      body: "OFF"
    };
  }
};
