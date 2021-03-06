var AWS = require('aws-sdk');
var es = require('elasticsearch');

AWS.config.region = 'us-west-2';

exports.esClient = require('elasticsearch').Client({
    hosts: [ 'https://search-climbing-yuphkji6xcbo66tc26rwornxie.us-west-2.es.amazonaws.com' ],
    connectionClass: require('http-aws-es')
});

exports.getPosts = function(json, context) {
    const { size, from } = json;
    exports.esClient.search({
        index: 'test2',
        type: 'mockpost',
        sort: 'submissionDate',
        size: size,
        from: from,
        _source: true
    }).then((response) => {
        const posts = response.hits.hits;
        context.succeed(posts);
    }).catch((err) => {
        context.fail(err);
    });
}
