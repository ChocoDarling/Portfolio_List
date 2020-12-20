const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = './PHList/PFListHTML.css';
document.body.appendChild(styleLink);

document.body.style.paddingBottom = '50px';

const PortfolioArr = [
  {
    img: './PHList/img/201204-main.png',
    title: 'Movie Trailer',
    url: 'http://ec2-3-34-130-217.ap-northeast-2.compute.amazonaws.com/',
  },
  {
    img: './PHList/img/201024-main.png',
    title: '중고나라',
    url: 'http://ec2-15-164-251-148.ap-northeast-2.compute.amazonaws.com/',
  },
  {
    img: './PHList/img/201004-main.png',
    title: 'Mobie',
    url: 'http://rudekrudgns.cafe24.com/',
  },
];

const portfolioList = document.createElement('div');
portfolioList.id = 'portfolio-list';
document.body.appendChild(portfolioList);

const portfolioListBox = document.createElement('div');
portfolioListBox.id = 'portfolio-list-box';
portfolioList.append(portfolioListBox);

let tempElem;
let tempParent;
PortfolioArr.forEach((v) => {
  tempElem = document.createElement('a');
  tempElem.href = v.url;
  tempElem.target = '_blank';
  portfolioListBox.append(tempElem);
  tempParent = tempElem;
  tempElem = document.createElement('div');
  tempElem.className = 'portfolio-list-item';
  tempElem.style.backgroundImage = `url(${v.img})`;
  tempParent.append(tempElem);
  tempParent = tempElem;
  tempElem = document.createElement('div');
  tempElem.className = 'portfolio-list-item-title';
  tempElem.innerHTML = v.title;
  tempParent.append(tempElem);
});

tempElem = document.createElement('div');
tempElem.id = 'portfolio-list-footer';
tempElem.onclick = (e) => {
  const classList = document.getElementById('portfolio-list-box').classList;
  if (classList.contains('on')) {
    classList.remove('on');
    e.target.classList.remove('on');
  } else {
    classList.add('on');
    e.target.classList.add('on');
  }
};
portfolioList.appendChild(tempElem);
