import { buildSchema } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Libro {
    titulo: String
    autor: String
  }

  type Query {
    libro: Libro
    libros: [Libro]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  // TODO: buscar un libro
  libro: () => {
    return { titulo: "PATRIA LIBRE, JUSTA Y SOBERANA", autor: "GSPONER; PINEIRO" };
  },

  libros: () => [
    { titulo: "FUERZAS ESPIRITUALES DEL PERONISTA", autor: "PP" },
    { titulo: "PATRIA LIBRE, JUSTA Y SOBERANA", autor: "GSPONER; PINEIRO" },
    { titulo: "LA MUJER, EL ESTADO Y LA REVOLUCION", autor: "GOLDMAN WENDY Z." }
  ]
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');