# ๐จโ๐ป ํ๋ก์ ํธ ์๊ฐ
<hr>
ํฌํ ๊ทธ๋ํผ ์ง๋ง์์ ํฌํธํด๋ฆฌ์ค์ฉ ์น ์ฌ์ดํธ์๋๋ค.

<hr>

# Skills
## FrontEnd
#### React, ReactHooks, React-Router-Dom, React-Redux, axios, React-Responsive, React-Motion, Styled-Components, XMLHttpRequest, FormData

## Backend
####  node.js, MySQL, Sequelize, multer, aws-sdk

<hr>

## ํ๋ก ํธ์๋
์ฌ์ง์ ์ง์คํ  ์ ์๋๋ก ์ฌํํ UI๋ฅผ ์ง์คํ์์ต๋๋ค. ๋ํ React Component๋ฅผ ์ ๊ทน ํ์ฉํ์ฌ ์ด๋ฏธ์ง๋ฅผ ๋ ๋๋ง
ํ๋ ๋ฐ์ ์์ด ์ฝ๋๋ฅผ ์ต์ํ, ๋ณด๊ธฐ์ฝ๊ฒ ๊ตฌํํ๋ ค ๋ธ๋ ฅํ์์ต๋๋ค.

React-Responsive, React-Motion, Styled-Components๋ฑ์ผ๋ก ํ์ด์ง๊ฐ ๋์ด๊ฐ๋๋ง๋ค ๋ถ๋๋ฌ์ด ๋๋์
์ฃผ๋๋ก ํ์์ต๋๋ค.

## ๋ฐฑ์๋
1์ธ ํ๋ก์ ํธ๋ผ ํ๋ก ํธ์ ๋ฐฑ์๋๋ฅผ ๊ฐ์ด ํ์คํ์ผ๋ก ๋ด๋นํ๋๋ฐ ์ด๋ ค์์ด ๋ง์์ง๋ง ์น ๊ฐ๋ฐ์ ์กฐ๊ธ์ด๋๋ง ์ดํดํ๋๋ฐ
์ข์ ๊ฒฝํ์ด ๋์๋ ๊ฒ ๊ฐ์ต๋๋ค.

GitHubPage๋ก ๋์  ์น ํธ์คํ์ ํ๊ณ  ๋ณด๋ EC2์ ๋ฐฐํฌํ ์๋ฒ๊ฐ http๋ผ https์์ http๋ก๋ ์์ฒญ์ ํ  ์
์๊ธฐ๋๋ฌธ์ EC2๋ฅผ https๋ก ๋ฐฐํฌํด์ผํ๋ ์ํฉ์ด ์๊ฒผ์ต๋๋ค. ๋๋ฉ์ธ์ ์ฌ์ AWS์์ ๋๋ฉ์ธ ๊ฒ์ฆ์ธ์ฆ์ ๋ฐ๊ณ  ACA์
Route 53, ALB์ ์ฌ์ฉํ์ฌ https๋ก ๋ฐฐํฌํ๋ ค ๋ธ๋ ฅํ์ผ๋ ์ ๊ฐ ์ฐ ๋๋ฉ์ธ์ด ๊ตญ๋ด๋๋ฉ์ธ์ด์ฌ์ ๊ทธ๋ฐ์ง ๋ค์์๋ฒ๊ฐ ํ ๋น๋๋
์ ๋๋ก ๋์๋์ง ์๋ ๊ฒ์ ๋ณผ ์ ์์์ต๋๋ค.

AWS ์ชฝ์ ๋ฌธ์ ๋ผ๋ฉด ์ค์ ์ ๋ฐ๊พธ๊ณ  ๋ญ ๋ค๋ฅธ ์ ๊ทผ์ ํด๋ณผ ์ ์์ํ๋ฐ ๊ทธ๋ฐ ๊ฒ์ด ์๋๋ ์ด ์ ๋๋ฉด ์ถฉ๋ถํ ๊ฒ ๊ฐ์ ๋ ์ด์
๊ณ ๋ฏผํ  ํ์๋ ์๋ค๊ณ  ํ๋จํ๊ฒ ๋์์ต๋๋ค.

๋ฌธ์  ๊ด๋ จ ๋ธ๋ก๊นํ ์ฃผ์ [https://velog.io/@juho00ng/ERROR-DNSPROBEFINISHEDNXDOMAIN](https://velog.io/@juho00ng/ERROR-DNSPROBEFINISHEDNXDOMAIN)

๊ทธ๋๋ ๊ตฌํํ ์๋ฒ๋ฅผ API๋ฅผ ์ ๋ฆฌํด๋ณด์์ต๋๋ค.

# ๐ API
EndPoint => http://ec2-13-124-170-23.ap-northeast-2.compute.amazonaws.com
๋ฐ์ดํฐํฌ๋งท => JSON

### [GET] /gallery/read?season=
season Parameter๋ gallery ์นดํ๊ณ ๋ฆฌ๋ณ๋ก spring, summer, autumn, winter, point๋ก
๋ฐ์ดํฐ๋ฅผ ๋ฐ์๋ณผ ์ ์์ต๋๋ค.

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
server๊ฐ ๋ฐ๋ req.file์ด undefined๊ฐ ์๋์ฌ์ผํ๋ค. ๋ํ FormData๋ฅผ POSTํ ๋
req.file.season์ด spring์ธ์ง summer, autumn, winter, point์ธ์ง์ ๋ฐ๋ผ ์ด๋ ๋ฐ์ดํฐ๋ฒ ์ด์ค์
์ ์ฅ๋๋ ์ง ๊ฒฐ์ ๋๋ฏ๋ก FormData์ season์ด๋ key๋ก ๊ณ์ ์ด๋ฆ์ value๋ก ๋ฃ๊ธฐ๋ฅผ ๊ถ์ฅํฉ๋๋ค.

ex)

```js
const xhr = new XMLHttpRequest();
const fd = new FormData();

fd.append('img', imgFile);
fd.append('season', season);

xhr.onload = function () {
    console.log('์์ฐจ์ ์ผ๋ก ๋ฐ๋๋ xhr.status : ', xhr.status);
    if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText);
    } else {
        console.error(xhr.responseText);
    }
}
xhr.open('POST', `ec2-13-124-170-23.ap-northeast-2.compute.amazonaws.com:80/gallery/create`)
xhr.send(fd);
```
