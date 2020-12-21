document.title = decodeURI(location.search.replace('?', ''));
document.getElementById('title').innerHTML = document.title;
const contain = document.getElementById('contain');
const techList = document.getElementById('tech-list');
const template = document.getElementById('template');
let tempElement;
switch (document.title) {
  case 'Movie Trailer':
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'React';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'nodejs';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'mongoDB';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'naver api';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'youtube iframe api';
    techList.append(tempElement);
    document.getElementById('img-back').className = 'monitor';
    document.querySelector('#img-back img').src = './img/201204-main.png';
    document.querySelector('#img-back img').alt = document.title;
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '내용 | ';
    tempElement.querySelector('.input').innerHTML =
      'YOUTUBE IFRAME, NAVER API를 이용하여 REACT로 제작한 영화 예고편 서비스';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '작업기간 | ';
    tempElement.querySelector('.input').innerHTML = '10일';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '인원 | ';
    tempElement.querySelector('.input').innerHTML = '1인';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '구현 페이지 | ';
    tempElement.querySelector('.input').innerHTML = '메인, 로그인, 회원가입';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '작업 내용 | ';
    tempElement.querySelector(
      '.input',
    ).innerHTML = `styled-components 라이브러리를 이용한 스타일링<br>
    Youtube Iframe API를 이용한 유튜브 영상 구현<br>
    Redux 라이브러리를 이용한 로그인 관리<br>
    NAVER API를 이용해 포스터 출력<br>
    AXIOS 라이브러리를 이용한 비동기 로드 적용<br>
    공통 요소 컴포넌트화
    `;
    contain.append(tempElement);
    break;

  case '중고나라':
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'nodejs';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'mySQL';
    techList.append(tempElement);
    document.getElementById('img-back').className = 'monitor';
    document.querySelector('#img-back img').src = './img/201024-main.png';
    document.querySelector('#img-back img').alt = document.title;
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '내용 | ';
    tempElement.querySelector('.input').innerHTML =
      'MYSQL를 이용하여 NODEJS로 제작한 물품 판매 서비스';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '작업기간 | ';
    tempElement.querySelector('.input').innerHTML = '2주';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '인원 | ';
    tempElement.querySelector('.input').innerHTML = '1인';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '구현 페이지 | ';
    tempElement.querySelector('.input').innerHTML =
      '메인, 로그인, 회원가입, 상품등록, 상품정보, 개인정보';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '작업 내용 | ';
    tempElement.querySelector('.input').innerHTML = `nunjucks를 이용한 제작<br>
    mySQL을 이용한 정보 저장, 연결<br>
    base64를 이용한 이미지 생성, 저장<br>
    bcrypt를 이용한 암호화
    `;
    contain.append(tempElement);
    break;

  case 'Mobie':
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'javascript';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'mySQL';
    techList.append(tempElement);
    tempElement = document.createElement('div');
    tempElement.innerHTML = 'php';
    techList.append(tempElement);
    document.getElementById('img-back').className = 'phone';
    document.querySelector('#img-back img').src = './img/201004-main.png';
    document.querySelector('#img-back img').alt = document.title;
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '내용 | ';
    tempElement.querySelector('.input').innerHTML =
      'MYSQL를 이용하여 JAVASCRIPT로 제작한 영화 사이트';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '작업기간 | ';
    tempElement.querySelector('.input').innerHTML = '2주';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '인원 | ';
    tempElement.querySelector('.input').innerHTML = '3인';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '구현 페이지 | ';
    tempElement.querySelector('.input').innerHTML =
      '메인, 로그인, 회원가입, 영화정보, 영화관람, 영화예매, 좌석선택';
    contain.append(tempElement);
    tempElement = template.cloneNode(true);
    tempElement.removeAttribute('id');
    tempElement.querySelector('.title').innerHTML = '작업 내용 | ';
    tempElement.querySelector(
      '.input',
    ).innerHTML = `php를 이용해 mySQL 쿼리 호출<br>
    mySQL을 이용한 정보 관리
    `;
    contain.append(tempElement);
    break;

  default:
    break;
}
