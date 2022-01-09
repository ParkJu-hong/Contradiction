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
  // const result = await SPRINGModel.findAll().then((data)=>{
  //   console.log('data : ', data);
  //   return;
  // });
  // await SPRINGModel.findOrCreate();
  // models.spring.create({
  //   title: 'test_title',
  //   comment: 'test_comment',
  //   src: 'test_src'
  // }).then((data) => {
  //   console.log('data : ', data);
  //   return;
  // })
  // return result;
  models.spring.destroy({
    where: {
      id: 1
    }
  }).then(console.log)
}

// console.log('SPRINGModel : ', test())


module.exports = {
  springCreate: (req, res) => {
    console.log('req.body.season : ', req.body.season);
    console.log('req.file', req.file)
    // Create하는 코드
    if (req.file === undefined) {
      console.log('실행됌');
      res.status(404).send('NOT OK');
      return;
    } else {
      setTimeout(() => {
        s3.upload({
          'Bucket': `ongin${req.body.season}`,
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
            models.spring.create({
              title: data.key,
              comment: 'dummy_comment',
              src: data.Location
            }).then((data) => {
              // console.log('data : ', data);
              return;
            })

            // 확인할려고 작성한 코드
            models.spring.findAll().then((data)=>{
              // console.log('models.spring.findAll() : ', data);
              return;
            })

            res.status(201).send('OKㅇㅂㅈㅇㅂㅈㅇㅂ');
          }
        });
      }, 3000)
    }
  },
  springRead: (req, res) => {
    // READ 하는 코드
    models.spring.findAll().then((data)=>{
      res.json(data);
      return;
    })
    .catch((error)=>{
      res.status(404).send('Here has nothing');
      return;
    })
  }
}

/*

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
*/


