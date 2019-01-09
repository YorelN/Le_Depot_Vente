const schema = new t.GraphQLSchema({
  query: new t.GraphQLObjectType({
    name: 'Query',
    fields: {},
  }),
  mutation: new t.GraphQLObjectType({
    name: 'Mutation',
    fields: {},
  }),
});

export default schema;
