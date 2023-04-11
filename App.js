import weaviate from 'weaviate-ts-client'

const client = weaviate.client({
    scheme: 'https',
    host: 'localhost:8000'
});

const schemaGetter = async () => {return await client.schema.getter().do(); }

console.log(schemaGetter)
