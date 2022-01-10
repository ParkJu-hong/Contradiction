// Create
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const s3 = new AWS.S3();
const fs = require('fs');

const path = require("path");

// Sequelize require하는 코드
const { spring: SPRINGModel } = require('../../models');
const models = require('../../models');


async function test() {
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
            if (req.body.season === 'spring') {
              models.spring.create({
                title: '',
                comment: '',
                src: data.Location
              }).then((data) => {
                // console.log('data : ', data);
                return;
              })
            } else if (req.body.season === 'summer') {
              models.summer.create({
                title: '',
                comment: '',
                src: data.Location
              }).then((data) => {
                // console.log('data : ', data);
                return;
              })
            } else if (req.body.season === 'autumn') {
              models.autumn.create({
                title: '',
                comment: '',
                src: data.Location
              }).then((data) => {
                // console.log('data : ', data);
                return;
              })
            } else if (req.body.season === 'winter') {
              models.winter.create({
                title: '',
                comment: '',
                src: data.Location
              }).then((data) => {
                // console.log('data : ', data);
                return;
              })
            } else if (req.body.season === 'point') {
              models.winter.create({
                title: '',
                comment: '',
                src: data.Location
              }).then((data) => {
                // console.log('data : ', data);
                return;
              })
            }

            // 확인할려고 작성한 코드
            // models.spring.findAll().then((data) => {
            //   // console.log('models.spring.findAll() : ', data);
            //   return;
            // })

            res.status(201).send('OK GOOD created ');
          }
        });
      }, 3000)
    }
  },
  springRead: (req, res) => {
    // READ 하는 코드
    // http://localhost:3001/gallery/summer/read?season=계절이름
    console.log('req.params : ', req.params);
    console.log('req.query : ', req.query.season);

    if (req.query.season !== 'spring'
      && req.query.season !== 'summer'
      && req.query.season !== 'autumn'
      && req.query.season !== 'winter'
      && req.query.season !== 'point') {

      res.status(400).send('NOT FOUND');
      return;

    }

    if (req.query.season === 'spring') {
      models.spring.findAll().then((data) => {
        res.json(data);
        return;
      })
        .catch((error) => {
          res.status(404).send('Here has nothing');
          return;
        })
    } else if (req.query.season === 'summer') {
      models.summer.findAll().then((data) => {
        res.json(data);
        return;
      })
        .catch((error) => {
          res.status(404).send('Here has nothing');
          return;
        })
    } else if (req.query.season === 'autumn') {
      models.autumn.findAll().then((data) => {
        res.json(data);
        return;
      })
        .catch((error) => {
          res.status(404).send('Here has nothing');
          return;
        })
    } else if (req.query.season === 'winter') {
      models.winter.findAll().then((data) => {
        res.json(data);
        return;
      })
        .catch((error) => {
          res.status(404).send('Here has nothing');
          return;
        })
    } else if (req.query.season === 'point') {
      models.point.findAll().then((data) => {
        res.json(data);
        return;
      })
        .catch((error) => {
          res.status(404).send('Here has nothing');
          return;
        })
    }
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


