// this is the code I added to my Lambda Function on AWS:
const AWS = require('aws-sdk');
const s3 = new AWS.S3();


exports.handler = async (event) => {

  console.log(event.Records[0].s3.bucket.name);
  console.log(event.Records[0].s3);

  // name for the S3 bucket
  let bucketName = event.Records[0].s3.bucket.name;
  // name of the file associated with the event (uploaded image name)
  let srcKey = event.Records[0].s3.object.key;

  const newImage = await s3.putObject({
    Bucket: bucketName,
    Key: `test.json`,
    Body: '{"test": "test"}'
  }).promise();

  console.log(newImage);

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
