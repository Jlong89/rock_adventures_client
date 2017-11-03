import es from 'elasticsearch';

function getEsClient() {
    const esClient = es.Client({
        hosts: [ 'https://search-climbing-yuphkji6xcbo66tc26rwornxie.us-west-2.es.amazonaws.com' ],
        connectionClass: require('http-aws-es')
      });
    return esClient;
}

const esService = {
    getEsClient: getEsClient
};

export default esService;