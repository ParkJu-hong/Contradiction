// Create
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const s3 = new AWS.S3();

const path = require('path');
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './img/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

module.exports = {
    spring: (req, res) => {
        /*
        s3.listObjects({ Bucket: 'ongin' })
            .on('success', function handlePage(response) {
                console.log('response : ', response.data.Name);
                for (let name in response.data.Contents) {
                    console.log('response.data.Contents[name].key : ', response.data.Contents[name].key);
                    // 파일의 이름만 가져오는 for문 코드임
                }
                if (response.hasNextPage()) {
                    response.nextPage().on('success', handlePage).send();
                }
            }).send();
        */
        /*
        s3.upload({
            'Bucket': 'ongin',
            'Key': 's3에 저장될 파일 이름을 key라고 함. 만약에 이미지 파일이라면 파일이름.png 임 저장할 파일이름',
            'ACL': 'public-read', // 모든 사람들이 읽을 수 있기위해서 ACL는 권한이란 뜻임
            'Body': fs.createReadStream('파일이름.png'),
            'ContentType': 'image/png'  // 파일이 어떤 자료형인지 알려주는 것
        }, function(err, data){
            console.log(err);
            console.log(data);
        })
        */
        res.status(200).send('OK');
    }
}