import express from 'express';

const app = express();
const listenPort = 9000;

app.get( '/', ( req, res ) => {
  res.send( 'Hello world' );
});

app.listen( listenPort, () => {
  console.log( `[server] Listening on http://localhost:${listenPort}...` );
});
