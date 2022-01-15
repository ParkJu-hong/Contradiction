# 👨‍💻 프로젝트 소개
<hr>
포토그래퍼 지망생의 포트폴리오용 웹 사이트입니다.

<hr>
# Skills
## FrontEnd
#### React, ReactHooks, React-Router-Dom, React-Redux, axios, React-Responsive, React-Motion, Styled-Components, XMLHttpRequest, FormData

## Backend
####  node.js, MySQL, Sequelize, multer, aws-sdk

<hr>

## 프론트엔드
사진에 집중할 수 있도록 심플한 UI를 집중하였습니다. 또한 React Component를 적극 활용하여 이미지를 렌더링
하는 데에 있어 코드를 최소화, 보기쉽게 구현하려 노력하였습니다.

React-Responsive, React-Motion, Styled-Components등으로 페이지가 넘어갈때마다 부드러운 느낌을
주도록 하였습니다.

## 백엔드
1인 프로젝트라 프론트와 백엔드를 같이 풀스택으로 담당하는데 어려움이 많았지만 웹 개발을 조금이나마 이해하는데
좋은 경험이 되었던 것 같습니다.

GitHubPage로 동적 웹 호스팅을 하고 보니 EC2에 배포한 서버가 http라 https에서 http로는 요청을 할 수
없기때문에 EC2를 https로 배포해야하는 상황이 생겼습니다. 도메인을 사서 AWS에서 도메인 검증인증을 받고 ACA와
Route 53, ALB을 사용하여 https로 배포하려 노력했으나 제가 산 도메인이 국내도메인이여서 그런지 네임서버가 할당되도
제대로 동작되지 않는 것을 볼 수 있었습니다.

AWS 쪽의 문제라면 설정을 바꾸고 뭐 다른 접근을 해볼 수 있을텐데 그런 것이 아니니 이 정도면 충분한 것 같아 더 이상
고민할 필요는 없다고 판단하게 되었습니다.

문제 관련 블로깅한 주소 [https://velog.io/@juho00ng/ERROR-DNSPROBEFINISHEDNXDOMAIN](https://velog.io/@juho00ng/ERROR-DNSPROBEFINISHEDNXDOMAIN)

그래도 구현한 서버를 API를 정리해보았습니다.

# 💁 API
EndPoint => http://ec2-13-124-170-23.ap-northeast-2.compute.amazonaws.com
데이터포맷 => JSON

### [GET] /gallery/read?season=
season Parameter는 gallery 카테고리별로 spring, summer, autumn, winter, point로
데이터를 받아볼 수 있습니다.

ex) http://ec2-13-124-170-23.ap-northeast-2.compute.amazonaws.com/gallery/read?season=summer

```js
[
    {
        "id": 1,
        "title": "",
        "comment": "",
        "src": "https://onginsummer.s3.ap-northeast-2.amazonaws.com/1%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.jpg",
        "createdAt": "2022-01-11T22:50:28.000Z",
        "updatedAt": "2022-01-11T22:50:28.000Z"
    }
]
```

### [POST] /gallery/create
server가 받는 req.file이 undefined가 아니여야한다. 또한 FormData를 POST할때
req.file.season이 spring인지 summer, autumn, winter, point인지에 따라 어느 데이터베이스에
저장되는 지 결정되므로 FormData에 season이란 key로 계절이름을 value로 넣기를 권장합니다.

ex)

```js
const xhr = new XMLHttpRequest();
const fd = new FormData();

fd.append('img', imgFile);
fd.append('season', season);

xhr.onload = function () {
    console.log('순차적으로 바뀌는 xhr.status : ', xhr.status);
    if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText);
    } else {
        console.error(xhr.responseText);
    }
}
xhr.open('POST', `ec2-13-124-170-23.ap-northeast-2.compute.amazonaws.com:80/gallery/create`)
xhr.send(fd);
```
