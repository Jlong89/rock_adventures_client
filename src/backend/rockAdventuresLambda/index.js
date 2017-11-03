var AWS = require('aws-sdk');
var es = require('elasticsearch');

AWS.config.region = 'us-west-2';

exports.esClient = require('elasticsearch').Client({
    hosts: [ 'https://search-climbing-yuphkji6xcbo66tc26rwornxie.us-west-2.es.amazonaws.com' ],
    connectionClass: require('http-aws-es')
});

exports.getPosts = function(json, context) {
    exports.esClient.search({
        index: 'test',
        type: 'post',
        _source: true
    }).then((response) => {
        const posts = response.hits.hits;
        context.succeed(posts);
    }).catch((err) => {
        context.fail(err);
    });
}
