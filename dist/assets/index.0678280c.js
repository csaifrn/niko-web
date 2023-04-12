import{s as r,j as e,a as o,M as a}from"./index.aa26923c.js";r.a`
  font-family: 'Rubik';
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;const l=r.section`
  background-color: #0A090E;
  height: 100vh;
  width: 100vw;
`,d=r.section`
  margin: 2em 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  grid-gap: 1.25em;
`;r.footer`
  height: 4em;
  background: #191C24;
  position: absolute;
  bottom: 0;
  width: 100%;
  left:0;
`;r.span`
  color: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));

`;r.button`
  padding: 0.5em;
  width: 40%;
  background-color: #F3802D;
  border-radius: 0.5em;
  border: 1px solid #F3802D;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #B1B1B1;
  }
`;const s=r.a`
  text-decoration: none;
  width: 9.6875em;
  height: 8.375em;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  font-family: 'Rubik';
  &:hover {
    filter: brightness(0.9);
  }

`,g=r.figure`
    display: flex;
    width: 10em;
    height: 100%;
    background-color: ${n=>n.backgroundColor};
    align-items: center;
    justify-content: center;
`,h=r.img`
    width: 3.125em;
    height: 3.125em;
`,c=r.span`
    font-size: 24px;
    color: ${n=>n.backgroundColor};
`,t=r.strong`
    text-align: center;
`,m=r.div`
  padding-top: 0.5625em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 7px;
  background-color: #191C24;
  width: 100%;
`,i=n=>e(s,{href:n.link,children:[o(g,{backgroundColor:n.color,children:o(h,{src:n.srcImgIcon})}),e(m,{children:[e(t,{children:[o(c,{backgroundColor:"#43DB6D",children:"12"}),o("p",{children:"DISPON\xCDVEIS"})]}),e(t,{children:[o(c,{backgroundColor:"#FCDE42",children:"10"}),o("p",{children:"ANDAMENTO"})]}),e(t,{children:[o(c,{backgroundColor:"#F32D2D",children:"9"}),o("p",{children:"EM PAUSA"})]})]})]}),p=()=>e(l,{children:[o(a,{area:"/"}),e(d,{children:[o(i,{link:"/Recebidos",color:"#F32D2D",srcImgIcon:"./IconsFolder.svg"}),o(i,{link:"/Preparo",color:"#F3802D",srcImgIcon:"./IconsClean.svg"}),o(i,{link:"/Catalogacao",color:"#FCDE42",srcImgIcon:"./IconsBookmark.svg"}),o(i,{link:"/Digitalizacao",color:"#2D94F3",srcImgIcon:"./IconsScanner.svg"}),o(i,{link:"/Upload",color:"#9C2DF3",srcImgIcon:"./IconsUpload.svg"}),o(i,{link:"/Arquivamento",color:"#43DB6D",srcImgIcon:"./IconsArquiv.svg"})]})]});export{p as default};
