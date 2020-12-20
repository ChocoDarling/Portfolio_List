const contain = document.getElementById('contain');
const technicalDocumentArr = [
  {
    title: 'Movie Trailer',
    titleInfo:
      'YOUTUBE IFRAME, NAVER API를 이용하여 REACT로 제작한 영화 예고편 서비스',
    img: './img/201204-main.png',
    mockUp: 'monitor',
    url: 'http://ec2-3-34-130-217.ap-northeast-2.compute.amazonaws.com/',
    git: 'https://github.com/ChocoDarling/201204-SinglePortfolio.git',
    skillStack: [
      'nodejs',
      'react',
      'mongoDB',
      'nodejs/koa',
      'naver api',
      'youtube iframe api',
    ],
  },
  {
    title: '중고나라',
    titleInfo: 'MYSQL를 이용하여 NODEJS로 제작한 물품 판매 서비스',
    img: './img/201024-main.png',
    mockUp: 'monitor',
    url: 'http://ec2-15-164-251-148.ap-northeast-2.compute.amazonaws.com/',
    git: 'https://github.com/ChocoDarling/20201023_single-portfolio.git',
    skillStack: ['nodejs', 'mysql', 'nodejs/express'],
  },
  {
    title: 'Mobie',
    titleInfo: 'MYSQL를 이용하여 JAVASCRIPT로 제작한 영화 사이트',
    img: './img/201004-main.png',
    mockUp: 'phone',
    url: 'http://rudekrudgns.cafe24.com/',
    git: 'https://github.com/ChocoDarling/TeamPortfolio.git',
    skillStack: ['javasctipt', 'mysql', 'php'],
  },
];

technicalDocumentArr.forEach((v) => {
  const itemBox = document.createElement('div');
  itemBox.className = 'technical-document-item-box';
  contain.append(itemBox);

  const img = document.createElement('div');
  img.className = 'technical-document-item img';
  img.classList.add(v.mockUp);
  itemBox.append(img);

  let tempElem = document.createElement('img');
  tempElem.src = v.img;
  tempElem.alt = v.title;
  img.append(tempElem);

  const textList = document.createElement('div');
  textList.className = 'technical-document-item text-list';
  itemBox.append(textList);

  const title = document.createElement('div');
  title.style.flexDirection = 'column';
  title.style.alignItems = 'flex-start';
  title.style.borderBottom = 'flex-start';
  textList.append(title);

  tempElem = document.createElement('div');
  tempElem.className = 'technical-document-item title';
  tempElem.innerHTML = v.title;
  title.append(tempElem);

  tempElem = document.createElement('div');
  tempElem.className = 'technical-document-item title-info';
  tempElem.innerHTML = v.titleInfo;
  title.append(tempElem);

  let parent;

  tempElem = document.createElement('div');
  tempElem.className = 'technical-document-item url';
  textList.append(tempElem);
  parent = tempElem;
  tempElem = document.createElement('a');
  tempElem.innerHTML = v.url;
  tempElem.href = v.url;
  tempElem.target = '_blank';
  parent.append(tempElem);
  tempElem = document.createElement('div');
  tempElem.className = 'technical-document-item git';
  textList.append(tempElem);
  parent = tempElem;
  tempElem = document.createElement('a');
  tempElem.innerHTML = v.git;
  tempElem.href = v.git;
  tempElem.target = '_blank';
  parent.append(tempElem);
  tempElem = document.createElement('div');
  textList.append(tempElem);
  parent = tempElem;
  tempElem = document.createElement('a');
  tempElem.href = `./portfolio.html?${v.title}`;
  parent.append(tempElem);
  parent = tempElem;
  tempElem = document.createElement('div');
  tempElem.innerHTML = '기술 문서';
  parent.append(tempElem);
  tempElem = document.createElement('div');
  tempElem.className = 'technical-document-item skillStack';
  parent.append(tempElem);
  parent = tempElem;
  v.skillStack.forEach((stack) => {
    tempElem = document.createElement('div');
    tempElem.className = 'technical-document-item skillStack-inner';
    tempElem.innerHTML = stack;
    parent.append(tempElem);
  });
});

window.onscroll = () => {
  if (!location.search) {
    if (
      window.scrollY > 350 &&
      !document.getElementById('header').classList.contains('on')
    ) {
      document.getElementById('header').classList.add('on');
    } else if (
      window.scrollY < 350 &&
      document.getElementById('header').classList.contains('on')
    ) {
      document.getElementById('header').classList.remove('on');
    }
  }
};

// {
//   //실험코드
//   function randomColor() {
//     return parseInt(Math.random() * 255);
//   }
//   for (const v of [
//     ...document.getElementsByTagName('div'),
//     ...document.getElementsByTagName('a'),
//   ]) {
//     v.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.3)`;
//   }
//   console.log(document.getElementById('header').style.position);
// }
// function _onclick(e) {
//   console.log(e.target);
// }
