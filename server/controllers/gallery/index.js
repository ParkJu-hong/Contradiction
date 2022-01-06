// Create
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const s3 = new AWS.S3();
const fs = require('fs');


module.exports = {
  springCreate: (req, res) => {
    // CREATE 하는 코드
    // 404뜨는 이유는 파일이 제대로 전송이 안받아지는 것 같다
    // upload.array로 하는데 자꾸 req.file로 받아서 아무것도 없었던 거다. 멍청이..
    console.log(req.file);
    s3.upload({
      'Bucket': 'ongin',
      'Key': req.file.path,
      'ACL': 'public-read', // 모든 사람들이 읽을 수 있기위해서 ACL는 권한이란 뜻임
      'Body': fs.createReadStream(req.file.path),
      'ContentType': 'image/png'  // 파일이 어떤 자료형인지 알려주는 것
    }, function (err, data) {
      console.log('error : ', err);
      console.log('data : ', data);
    })
    if (req.file !== undefined) {
      res.status(201).send('OK')
    } else {
      res.status(404).send('NOT OK');
    }
  },
  springRead: (req, res) => {
    // READ 하는 코드
    const arrTemp = new Array();
    s3.listObjects({ Bucket: 'ongin' })
      .on('success', function handlePage(response) {

        const signedUrlExpireSeconds = 60 * 60

        for (let key in response.data.Contents) {

          const url = s3.getSignedUrl('getObject', {
            Bucket: 'ongin',
            Key: response.data.Contents[key].Key,
            Expires: signedUrlExpireSeconds
          })

          arrTemp.push(url);
          console.log('arrTemp : ', arrTemp);

        }
      }).send((err, data) => {
        if (arrTemp.length !== 0) {
          res.status(201).send(JSON.stringify({ arrTemp: arrTemp }));
        } else {
          console.log('arrTemp.length === 0 실행됌');
          res.status(404).send('not ok')
        }
      })
  }
}


