// Agregamos la librería 'node-fetch' para hacer solicitudes HTTP
const fetch = require('node-fetch');

// ¡Aquí debes colocar la ID de tu bin!
const BIN_ID = '688d0e76f7e7a370d1f1c5e6'; 
// ¡Aquí debes colocar tu clave maestra!
const MASTER_KEY = '$2a$10$mmPA7NFXjIYMwfDk1hm7me1ABuHom5h31ImQ70AOijc5PNwQ1KaQK'; 
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

exports.handler = async function(event, context) {
  // Maneja una solicitud POST para cambiar el estado
  if (event.httpMethod === 'POST') {
    const { state } = JSON.parse(event.body);
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': MASTER_KEY
      },
      body: JSON.stringify({ state: state })
    });
    return { statusCode: 200, body: `State set to ${state}` };
  }

  // Maneja una solicitud GET para leer el estado
  const response = await fetch(BIN_URL, {
    headers: { 'X-Master-Key': MASTER_KEY }
  });
  const data = await response.json();
  return {
    statusCode: 200,
    body: data.record.state
  };
};
