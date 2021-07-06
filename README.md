# image-lambda

In your README.md include:

> a description of how to use your lambda.

To use my lambda to add a file from a key of `test.json` and a body of `test: test` to something else, just change these lines in my index.js:

```js
    Key: `test.json`,
    Body: '{"test": "test"}'
```

> a description of any issues you encountered during deployment of this lambda.

The main issues I ran into were:

- Region issues. My Lambda defaulted to Ohio, but I remembered to change my Bucket to Oregon. That caused issues with setting up a trigger, so I had to start over with the Lambda
- Not configuring my S3 test file to use my Bucket's name and ARM
- When I set up my Lambda again with the correct region, I forgot to add the Role, so I ran into permissions issues

> a link to your images.json file

https://s3.console.aws.amazon.com/s3/buckets/taegorovbucket?region=us-west-2&tab=objects
