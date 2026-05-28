const poke = ["https://i.pinimg.com/736x/05/3f/50/053f50fe48cbc691148b89906c37ddb1.jpg",
  "https://i.pinimg.com/1200x/96/79/85/967985ca22b2b00b485eca2bd47295d2.jpg",
  "https://i.pinimg.com/736x/b8/35/40/b8354083a722fe508db7647231cbfbe1.jpg",
  "https://i.pinimg.com/736x/a0/49/6b/a0496b6dae9a472b09d94fe175e6c8bd.jpg",
  "https://i.pinimg.com/736x/e5/33/49/e53349854de2486596a3c8c8897157d7.jpg",
  "https://i.pinimg.com/1200x/0a/1e/f3/0a1ef36bdb8d126be3cd2e0ce9da8e24.jpg",
  "https://i.pinimg.com/736x/b0/40/20/b04020fbab6a67d9c944f468f3ac68d4.jpg",
  "https://i.pinimg.com/1200x/3d/27/06/3d27067755a32b42b957b63ea2ba0eda.jpg",
  "https://i.pinimg.com/736x/fd/3d/16/fd3d1653114623f483251ed8533c8cd1.jpg",
  "https://i.pinimg.com/736x/91/50/74/915074ed5c29bfdfe5c20e78032c9306.jpg"
];


let word = '';
for(let i = 0;i<6;i++){
  let a = Math.floor(Math.random()*10);
  word += `
    <div class="child">
      <img src=${poke[a]} alt="">
    </div>
  `;
  console.log(a);
}
document.querySelector('.main').innerHTML = word;