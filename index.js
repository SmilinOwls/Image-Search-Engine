import weaviate from 'weaviate-ts-client'
import {schemaConfig} from './config'

const client = weaviate.client({
    scheme: 'https',
    host: 'localhost:8000'
});

const schemaGetter = async () => {return await client.schema.getter().do(); }

const schemaClassCreator = async () => {return await client.schema.classCreator().withClass(schemaConfig).do()}


