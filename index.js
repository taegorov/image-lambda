const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {

  console.log('event1', event.Records[0].s3.bucket);

  let bucketName = event.Records[0].s3.bucket.name;
  let srcKey = event.Records[0].s3.object.key;
  console.log('my key', srcKey);

  try {
    let bucket = await s3.getObject({ Bucket: bucketName, Key: 'image.json' }, (error, data) => {
      console.log('error or data', error, data);
    }).promise();
    let parsedData = JSON.parse(bucket.Body.toString());
    console.log('parsed data', parsedData);
    // if (!bucket.Body){
    const newImage = await s3.putObject({
      Bucket: bucketName,
      Key: `image.json`,
      Body: parsedData ? [...parsedData, { "test": "test" }] : [{ "test": "test" }]
    }).promise();
    console.log('myImage', newImage);
  }
  catch (error) {
    const newImage = await s3.putObject({
      Bucket: bucketName,
      Key: `image.json`,
      Body: '[{"test": "test"}]'
    }).promise();
  }

  const response = {

    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };

  return response;
};
