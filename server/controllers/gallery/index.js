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
    // 애초에 post가 받아지지 않는다 app.js에서 그냥 받아서 넘기는 식으로 해야겠다. 이 함수 폐쇄
    console.log(req.file);
    if (req.file === undefined) {
      console.log('실행됌');
      res.status(404).send('NOT OK')
    }

    console.log(req.file);
    // fs.readFile('../../img', (err, data)=>{
    //   if(err){
    //     console.log('err : ', err);
    //   }
    //   console.log('data : ', data);
    // }),
    const param = {
      'Bucket': 'ongin',
      'Key': 'test.png',
      'ACL': 'public-read', // 모든 사람들이 읽을 수 있기위해서 ACL는 권한이란 뜻임
      'Body': 'test',
      'ContentType': 'text'  // 파일이 어떤 자료형인지 알려주는 것 image/png
    }

    s3.upload(param, function (err, data) {
      if (err) {
        res.status(404).send('NOT OK');
        console.log('error : ', err);
        return ;
      }else{
        console.log('data : ', data);
        res.status(201).send('OKㅇㅂㅈㅇㅂㅈㅇㅂ');
      }
    });

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


