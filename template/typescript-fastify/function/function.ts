import { FastifyInstance } from 'fastify'

class Function {
    public configure( server: FastifyInstance ) {
        server.get( '/', async ( request, reply ) => {
            reply.type( 'application/json' )
                .code( 200 )
      
            return { message: 'Hello World!' }
        } )

        return ( server );
    }
}

export default new Function()
