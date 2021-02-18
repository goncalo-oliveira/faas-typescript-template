import express from 'express'
import func from './function'

const server = express();
const listenPort = 9000;

func.configure( server )
    .listen( listenPort, () => {
        console.log( `[server] listening at http://localhost:${listenPort}` );
    } );
