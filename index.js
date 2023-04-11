import fs from 'fs'
import weaviate from 'weaviate-ts-client'

import schemaConfig from './config.js'

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaGetter = async () => {
    return await client.schema.getter()
        .do();
}

// create schema
const schemaClassCreator = async () => {
    return await client.schema.classCreator()
        .withClass(schemaConfig)
        .do()
}


// read an image
const img = fs.readFileSync('./image/stark.jpeg');

// convert img to base64
const b64 = Buffer.from(img).toString('base64')

// store the image
const storeImg = async () => {
    return await client.data.creator()
        .withClassName('QuoteCelebrity')
        .withProperties({
            image: b64,
            text: 'quote'
        })
        .do()
}

// test image
const test = Buffer.from(fs.readFileSync('./image/elon_musk.jpeg')).toString('base64');

const imageQuery = async () => {
    return await client.graphql.get()
        .withClassName('QuoteCelebrity')
        .withFields(['image'])
        .withNearImage({ image: test })
        .withLimit(1)
        .do()
}

// generate result and export it to a new image
const res = imageQuery.data.Get.QuoteCelebrity[0].image
fs.writeFileSync('./res.jpeg',res,'base64')