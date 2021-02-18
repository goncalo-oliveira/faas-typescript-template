import fastify from 'fastify'

const server = fastify()
const port = 9000

server.get( '/', async ( request, reply ) => {
  reply.type( 'application/json' )
    .code( 200 )

  return { hello: 'world' }
} )

server.listen( port, ( err, address ) => {
  if ( err ) {
    console.error( err )
    process.exit( 1 )
  }

  console.log( `[server] listening at ${address}` )
} )
