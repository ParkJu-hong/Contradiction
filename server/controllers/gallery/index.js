// Create
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const s3 = new AWS.S3();
const fs = require('fs');


module.exports = {
  springCreate: (req, res) => {

    /* 
  test.png로 들어가니까 fs.readFileSync 사용해서 FormData로 받아온 파일을 s3로 넣어줄 수 있도록 해보자
    */

    if (req.file === undefined) {
      console.log('실행됌');
      res.status(404).send('NOT OK');
      return;
    }else{
        s3.upload({
          'Bucket': 'ongin',
          'Key': '1641546113202.jpeg',
          'ACL': 'public-read', // 모든 사람들이 읽을 수 있기위해서 ACL는 권한이란 뜻임
          'Body': fs.readFileSync(`./img/1641546113202.jpeg/`), //./img/test.png' ./img/${req.file.filename}
          'ContentType': 'image/png'  // 파일이 어떤 자료형인지 알려주는 것 image/png
        }, function (err, data) {
          if (err) {
            res.status(404).send('NOT OK');
            console.log('error : ', err);
            return;
          } else {
            console.log('data : ', data);
            res.status(201).send('OKㅇㅂㅈㅇㅂㅈㅇㅂ');
          }
        });
    }

    
    return;
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


