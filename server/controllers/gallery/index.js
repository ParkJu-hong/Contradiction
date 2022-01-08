// Create
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const s3 = new AWS.S3();
const fs = require('fs');

const path = require("path");

// Sequelize require하는 코드
const { spring : SPRINGModel } = require('../../models');
const models = require('../../models');

async function test(){
  return await SPRINGModel.findAll();
}

console.log('SPRINGModel : ', test().then((data)=> {
  return data;
}));
// console.log('models : ', models);


module.exports = {
  springCreate: (req, res) => {
    // Create하는 코드
    if (req.file === undefined) {
      console.log('실행됌');
      res.status(404).send('NOT OK');
      return;
    } else {
      setTimeout(() => {
        s3.upload({
          'Bucket': 'ongin',
          'Key': req.file.originalname,
          'ACL': 'public-read', // 모든 사람들이 읽을 수 있기위해서 ACL는 권한이란 뜻임
          'Body': fs.readFileSync(path.resolve(__dirname, 'img', req.file.filename)), 
          'ContentType': 'image/png'  
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
      }, 3000)
    }
  },
  springRead: (req, res) => {
    // READ 하는 코드
    /*
      MySQL에서 Sequelize로 model(table)도 같이 response해줄 것
      id title comment src
      src은 s3 images url넣어서 보내줄 것
    */
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


