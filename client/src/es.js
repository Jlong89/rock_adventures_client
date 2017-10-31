import AWS from 'aws-sdk';

const es = new AWS.ES({
    region: 'us-west-2'
});

export default es;