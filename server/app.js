const express = require('express')
const logger = require('morgan');
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2'; 
const ec2 = new AWS.EC2();
const s3 = new AWS.S3();
const cors = require('cors');

const fs = require('fs');


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

const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/galley');

const app = express();
const port = 3001

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
    최종 목표
    1. 갤러리(사계절) CRUD
    2. About CRUD
*/

/*
    22.01.05 수
    
    MVC 구조 만들 것
    그럴려면 Mysql사용해야함.

    To Do
    
    1. mysql 스키마 수기작성 (완료)
    2. 스키마에 따라 npx 로 모델 생성 (완료)(사계절 모델(테이블) 생성완료)
    3. 예를들어 이거 CRUD해달라고 요청이 들어온다. 
    4. Create는 aws-sdk와 fileread, FormData등을 사용해서 S3에 저장한다.
        => 클라이언트에서 파일업로드 기능 구현한후 서버에서 잘 들어오는지 확인 후 S3에 저장되는 기능 구현할 것
    5. Read는 S3에 있는 이미지들을 불러오기위해 aws-sdk를 사용한다. (이미지는 링크를 응답해준다.)
    6. Update는 S3에서 이미지들을 Create, Delete하는 방식으로 구현한다.
    7. Delete는 S3에서 이미지들을 Delete하는 방식으로 구현한다.

*/
app.post('/gallery/spring/create', upload.single('img'), (req,res)=>{

  /* 
    test.png로 들어가니까 fs.readFileSync 사용해서 FormData로 받아온 파일을 s3로 넣어줄 수 있도록 해보자
  */

  if (req.file === undefined) {
    console.log('실행됌');
    res.status(404).send('NOT OK');
    return;
  }

  const param = {
    'Bucket': 'ongin',
    'Key': 'test.png',
    'ACL': 'public-read', // 모든 사람들이 읽을 수 있기위해서 ACL는 권한이란 뜻임
    'Body': fs.readFileSync('./test.png'),
    'ContentType': 'image/png'  // 파일이 어떤 자료형인지 알려주는 것 image/png
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

  // console.log('req.file : ', req.file);
  // res.status(201).send('OK');
  return;
})

app.use('/', indexRouter);
app.use('/gallery', upload.array('img') ,galleryRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})