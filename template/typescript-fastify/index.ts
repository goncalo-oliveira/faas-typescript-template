import fastify from 'fastify'
import func from './function'

const server = fastify()
const listenPort = 9000

const start = async () => {
    try {
        await func.configure( server )
            .listen( listenPort, '0.0.0.0' )
    
        console.log( `[server] listening at http://0.0.0.0:${listenPort}` )
    
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()
