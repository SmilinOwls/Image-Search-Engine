const schemaConfig = {
    'class': 'Meme',
    'vectorizer': 'img2vec-neural',
    'vectorIndexType': 'hnsw',
    'moduleConfig': {
        'img2vec-neural': {
            'imageFields': [
                'image'
            ]
        }
    },
    'properties': [
        {
            'name': 'image',
            'dateType': ['blob']
        },
        {
            'name': 'text',
            'dataType' : ['string']
        }
    ]
}

export default schemaConfig;

