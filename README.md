# OpenFaaS TypeScript Functions

This project offers templates for OpenFaaS that make use of Node and TypeScript. All templates use Node 14 and of-watchdog so you can have full control over the HTTP context.

## Installing the template

Just pull the template with the faas CLI.

```bash
faas-cli template pull https://github.com/goncalo-oliveira/faas-typescript-template
```

## Using the template

You can choose between [Express](https://expressjs.com/) and [Fastify](https://www.fastify.io/). The template `typescript` will generate a function based on Express and `typescript-fastify` will generate a function based on Fastify.

```bash
faas-cli new --lang typescript-fastify <function-name>
```

A file named `function.ts` is generated when you create a new function with either template. Here's how the fastify-based function looks like:

``` typescript
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
```
