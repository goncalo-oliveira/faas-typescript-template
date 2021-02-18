import { Express } from 'express'

class Function {
    public configure( server: Express ) {
        server.get( '/', ( req, res ) => {
            res.send( 'Hello world' );
        } )

        return ( server )
    }
}

export default new Function()
