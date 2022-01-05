const express = require('express')
const logger = require('morgan');
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2'; 
const ec2 = new AWS.EC2();

const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/galley');

const app = express();
const port = 3001

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
    2. 스키마에 따라 npx 로 모델 생성 (사계절 모델(테이블) 생성완료)
    3. 예를들어 이거 CRUD해달라고 요청이 들어온다.
    4. Create는 aws-sdk와 fileread, FormData등을 사용해서 S3에 저장한다.
    5. Read는 S3에 있는 이미지들을 불러오기위해 aws-sdk를 사용한다. (이미지는 링크를 응답해준다.)
    6. Update는 S3에서 이미지들을 Create, Delete하는 방식으로 구현한다.
    7. Delete는 S3에서 이미지들을 Delete하는 방식으로 구현한다.

*/

// app.get('/test', (req, res) => {
//   ec2.describeInstances({}, function(err, data){
//     console.log(err)
//     console.log(data);
//     res.json(data);
//   })
// })
app.use('/', indexRouter);
app.use('/gallery', galleryRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})