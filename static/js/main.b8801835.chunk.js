(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{119:function(t,e){},120:function(t,e){},121:function(t,e){},122:function(t,e){},123:function(t,e){},129:function(t,e,n){},130:function(t,e,n){"use strict";n.r(e);var i,a,o,s,c,r,h,d,l,u,f,v,b,x,g=n(1),j=n.n(g),p=n(35),w=n.n(p),m=n(13),O=n(19),y=n(20),S=n(12),k=n(17),M=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},T=n(77),C=n(53),I=n.n(C),D=function(){function t(e,n,i,a){var o,s,c,r;Object(S.a)(this,t),this.x=void 0,this.y=void 0,this.prevx=void 0,this.prevy=void 0,this.visible=void 0,this.color=void 0,this.speed=void 0,this.simplex=void 0,this.canvas=void 0,this.createdTime=void 0,this.noise=void 0,this.x=e,this.y=n,this.prevx=e,this.prevy=n,this.visible=!0,this.color=(o=M(150,250),s=150,c=150,r=.25,"rgba(".concat(o,",").concat(s,",").concat(c,",").concat(r,")")),this.speed={x:M(-7,7),y:M(-7,7)},this.simplex=new T.a(a),I.a.seed(a),this.canvas=i,this.createdTime=(new Date).getMilliseconds()}return Object(k.a)(t,[{key:"walls",value:function(){this.prevx=this.x,this.prevy=this.y,(this.x<0||this.x>this.canvas.width||this.y<0||this.y>this.canvas.height)&&(this.visible=!1)}},{key:"draw",value:function(){var t,e,n=this,i=this.canvas.getContext("2d"),a=new Date;if(i){var o=.3*(a.getMilliseconds()-this.createdTime);this.color=(t=100,e=50,"hsl(".concat(o%360,", ").concat(t,"%, ").concat(e,"%)")),i.globalCompositeOperation="screen",i.beginPath(),i.moveTo(this.prevx,this.prevy),i.lineTo(this.x,this.y),i.strokeStyle=this.color,i.lineWidth=2,i.lineCap="butt",i.stroke()}requestAnimationFrame((function(){n.isVisible()&&(n.moveNoise(),n.draw(),n.walls())}))}},{key:"moveStraight",value:function(){this.x+=5*this.speed.x,this.y+=5*this.speed.y}},{key:"moveRandom",value:function(){this.speed.x+=M(-10,10),this.speed.y+=M(-10,10),this.x+=this.speed.x,this.y+=this.speed.y}},{key:"moveNoise",value:function(){var t=(new Date).getMilliseconds()-this.createdTime;this.speed.x+=2*I.a.perlin3(.005*this.x,.005*this.y,1e-4*t),this.speed.y+=2*I.a.perlin3(.005*this.y,.005*this.x,1e-4*t),this.x+=this.speed.x,this.y+=this.speed.y}},{key:"isVisible",value:function(){return this.visible}}]),t}(),z=function(){function t(e,n,i,a,o){Object(S.a)(this,t),this.x=void 0,this.y=void 0,this.canvas=void 0,this.createdTime=void 0,this.textOptions=void 0,this.index=void 0,this.imageObjShadow=new Image,this.imageObjWithShadow=new Image,this.imageDataShadows=void 0,this.x=n,this.y=i,this.textOptions=e,this.canvas=a,this.createdTime=(new Date).getMilliseconds(),this.imageDataShadows="",this.index=0,this.getShadowsImg();var s=a.getContext("2d");s&&s.clearRect(0,0,a.width,a.height)}return Object(k.a)(t,[{key:"setTextOptions",value:function(t){this.index=0,this.textOptions=t}},{key:"getText",value:function(){var t=this.index;return this.textOptions[t]}},{key:"nextTextOption",value:function(){this.index=(this.index+1)%this.textOptions.length}},{key:"drawText",value:function(){var t=this.canvas.getContext("2d");t&&(t.font="bold 70px Roboto",t.fillStyle="#FFFFFF",t.textAlign="center",t.textBaseline="middle",t.fillText(this.getText(),this.x,this.y))}},{key:"lineShadows",value:function(){return Math.floor(4*Math.random()+4)}},{key:"lineShadowsHeight",value:function(){for(var t=this.canvas.height,e=this.lineShadows(),n=[],i=0,a=0;a<e;a++)n[a]=Math.floor(Math.random()*(t/(e-1)-2+1)+2),t-=n[a],i+=n[a],n[e]=this.canvas.height-i;return n}},{key:"offset",value:function(){return.8*Math.floor(2*Math.random()+2)}},{key:"getShadowsImg",value:function(){var t=this.canvas.getContext("2d");t&&(t.save(),t.font="70px Roboto",t.textAlign="center",t.textBaseline="middle",t.globalCompositeOperation="destination-over",t.clearRect(0,0,this.canvas.width,this.canvas.height),t.fillStyle="#a3004a",t.fillText(this.getText(),this.x-2,this.y),t.fillStyle="#09c4de",t.fillText(this.getText(),this.x+2,this.y),t.restore()),this.imageDataShadows=this.canvas.toDataURL("image/png",1)}},{key:"timeBack",value:function(){return Math.floor(221*Math.random()+80)}},{key:"glitch",value:function(){var t=this.canvas.getContext("2d"),e=this,n="";this.imageObjShadow.onload=function(){if(t){t.clearRect(0,0,e.canvas.width,e.canvas.height);for(var i=e.lineShadowsHeight(),a=0,o=0;o<i.length;o++)t.drawImage(e.imageObjShadow,0,a,e.canvas.width,i[o],M(-2*e.offset(),2*e.offset()),a,e.canvas.width,i[o]),a+=i[o];e.drawText(),n=e.canvas.toDataURL("image/png",1),e.imageObjWithShadow.onload=function(){t.clearRect(0,0,e.canvas.width,e.canvas.height),t.drawImage(e.imageObjShadow,0,0,e.canvas.width,e.canvas.height/3+5,1,0,e.canvas.width,e.canvas.height/3+5),t.drawImage(e.imageObjShadow,0,e.canvas.height/3+5,e.canvas.width,e.canvas.height/3-5,0,e.canvas.height/3+5,e.canvas.width,e.canvas.height/3-5),t.drawImage(e.imageObjShadow,0,e.canvas.height/3*2,e.canvas.width,e.canvas.height/3,0,e.canvas.height/3*2,e.canvas.width,e.canvas.height/3)},e.imageObjWithShadow.src=n}},e.imageObjShadow.src=this.imageDataShadows,setTimeout((function(){var t=e.canvas.getContext("2d");e.imageObjWithShadow.onload=function(){if(t){t.clearRect(0,e.canvas.height/3*2,e.canvas.width,e.canvas.height/3);for(var n=e.lineShadowsHeight(),i=0,a=0;a<n.length;a++)t.drawImage(e.imageObjWithShadow,0,i,e.canvas.width,n[a],M(-2*e.offset(),2*e.offset()),i,e.canvas.width,n[a]),i+=n[a]}},e.imageObjWithShadow.src=n}),80),setTimeout((function(){var t=e.canvas.getContext("2d");t&&(t.clearRect(0,0,e.canvas.width,e.canvas.height),e.nextTextOption(),e.drawText())}),e.timeBack())}}]),t}(),F=n(46),R=n(54),E=n(5),W=y.a.div(i||(i=Object(O.a)(["\n    width: 100%;\n    background-color: black;\n    position: relative;\n"]))),L=y.a.div(a||(a=Object(O.a)(["\n    position: absolute;\n    top: ","px;\n    width: ","px;\n    background-color: rgba(0,0,0,0.8);\n    left: calc(50% - ","px);\n    border-radius: 4px;\n    border: 1px solid rgba(0,0,0,0.8);\n"])),(function(t){return t.top}),(function(t){return t.width}),(function(t){return t.width/2})),A=y.a.canvas(o||(o=Object(O.a)(["\n    margin: auto;\n"]))),B=function(){var t=Object(g.useRef)(null),e=Object(g.useRef)(null),n=Object(g.useRef)(null),i=Object(g.useState)(null),a=Object(m.a)(i,2),o=a[0],s=(a[1],800),c=function(t){(function(t,e){var n=e.getContext("2d");n&&n.clearRect(0,0,e.width,e.height);for(var i=[],a=0;a<t;a++){var o=e.width/2,s=e.height/2;i.push(new D(o,s,e,M(0,1e4)))}return i})(500,t).forEach((function(t){t.isVisible()&&(t.moveNoise(),t.draw(),t.walls())}))},r=function(t){n.current&&clearInterval(n.current);var e=setInterval((function(){document.hasFocus()&&c(t)}),7500);n.current=e};return Object(g.useEffect)((function(){return t.current&&e.current&&(window.addEventListener("resize",Object(F.debounce)((function(){if(t.current){var e=t.current.getContext("2d");e&&e.clearRect(0,0,t.current.width,t.current.height),t.current.width=document.body.clientWidth,t.current.height=s,r(t.current),c(t.current)}}),200)),r(t.current),c(t.current),document.fonts.onloadingdone=function(){e.current&&function(t){if(t.getContext("2d")){var e=new z(["asymons","Developer","Fullstack","Software","Engineer"],175,50,t,1);e.drawText(),setInterval((function(){document.hasFocus()&&(e.getShadowsImg(),e.glitch())}),2e3)}}(e.current)}),function(){o&&clearInterval(o)}}),[t.current,e.current]),Object(E.jsxs)(W,{style:{height:s},children:[Object(E.jsx)(A,{id:"main-canvas",ref:t,width:document.body.clientWidth,height:s,onClick:function(){t.current&&(c(t.current),r(t.current))}}),Object(E.jsx)(R.Transition,{items:!0,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},delay:200,config:R.config.molasses,children:function(t,n){var i=t.opacity;return Object(E.jsx)(R.animated.div,{style:{opacity:i.to({range:[0,1],output:[0,1]})},children:Object(E.jsx)(L,{top:355,width:350,children:Object(E.jsx)(A,{id:"text-canvas",ref:e,width:350,height:90})})})}})]})},N=n(64),H=n.p+"static/media/resume-2021-09-26.321d2f8b.pdf",P=y.a.div(s||(s=Object(O.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    background-color: #ED7D3A;\n    padding-top: 32px;\n"]))),U=y.a.div(c||(c=Object(O.a)(["\n    position: relative;\n"]))),q=y.a.a(r||(r=Object(O.a)(["\n    position: absolute;\n    bottom: 40px;\n    right: 10px;\n    background: black;\n    color: white;\n    padding: 10px;\n    z-index: 2;\n"]))),V=function(){var t,e,n=Object(g.useState)(!1),i=Object(m.a)(n,2),a=i[0],o=i[1],s=Object(g.useState)(null),c=Object(m.a)(s,2),r=(c[0],c[1]),h=Object(g.useState)(1),d=Object(m.a)(h,2),l=d[0],u=(d[1],function(t){return Math.min(t,1e3)}),f=Object(g.useState)(u(window.innerWidth)),v=Object(m.a)(f,2),b=v[0],x=v[1];return Object(g.useEffect)((function(){window.addEventListener("resize",Object(F.debounce)((function(){x(u(window.innerWidth))}),200))}),[]),Object(E.jsx)(P,{children:Object(E.jsxs)(U,{onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[Object(E.jsx)(q,{href:H,download:!0,style:{display:a?"block":"none"},children:"Download"}),Object(E.jsx)(N.a,{file:(t=window.location.href,e=H,"/"===t.charAt(t.length-1)&&"/"===e.charAt(0)&&(e=e.substr(1)),"".concat(t).concat(e)),onLoadSuccess:function(t){var e=t.numPages;r(e)},children:Object(E.jsx)(N.b,{pageNumber:l,width:b})})]})})},J=n.p+"static/media/profile-pic-2021-09-26.9ad8211a.jpg",_=n(134),G=n(135),K=y.a.div(h||(h=Object(O.a)(["\n    width: 100%;\n    height: 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: -1px;\n    background-color: rgba(0,0,0,0.3);\n    z-index: 2;\n    color: white;\n"]))),Q=y.a.div(d||(d=Object(O.a)(["\n    display: flex;\n    align-items: center;\n"]))),X=y.a.div(l||(l=Object(O.a)(["\n    margin-left: 10px;\n"]))),Y=y.a.div(u||(u=Object(O.a)(["\n    color: black;\n    font-size: 24px;\n    margin-bottom: 5px;\n"]))),Z=y.a.img(f||(f=Object(O.a)(["\n    width: 24px;\n    border-radius: 50%;\n"]))),$=[{title:"LINKEDIN",url:"https://www.linkedin.com/in/alessiosymons"},{title:"GITHUB",url:"https://github.com/asymons"},{title:"MEDIUM",url:"https://medium.com/@alessiosymons"}],tt=function(t){var e=t.fontSize,n=t.sectionMargin;return Object(E.jsxs)(Q,{style:{margin:void 0!==n?n:"0 20px"},children:[Object(E.jsx)(X,{children:Object(E.jsx)(Z,{src:J})}),Object(E.jsx)(X,{style:{fontWeight:600,fontSize:e},children:"Alessio Symons"})]})},et=function(){var t=Object(g.useState)(!1),e=Object(m.a)(t,2),n=e[0],i=e[1],a=function(){var t=Object(g.useState)([0,0]),e=Object(m.a)(t,2),n=e[0],i=e[1];return Object(g.useLayoutEffect)((function(){function t(){i([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),n}(),o=Object(m.a)(a,2),s=o[0];o[1];return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(K,{children:[s<=768?Object(E.jsx)(Q,{style:{marginLeft:20},children:Object(E.jsx)(G.a,{style:{fontSize:24,color:"white"},onClick:function(){return i(!0)}})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(tt,{fontSize:24}),Object(E.jsx)(Q,{style:{margin:"0 20px"},children:$.map((function(t){var e=t.title,n=t.url;return Object(E.jsx)(X,{children:Object(E.jsx)("a",{href:n,target:"_blank",children:e},e)})}))})]}),Object(E.jsx)(_.a,{title:Object(E.jsx)(tt,{sectionMargin:"0",fontSize:16}),placement:"left",onClose:function(){return i(!1)},visible:n,children:$.map((function(t){var e=t.title,n=t.url;return Object(E.jsx)(Y,{children:Object(E.jsx)("a",{href:n,target:"_blank",children:e},e)})}))})]})})},nt=n(90),it=y.a.div(v||(v=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #2D3047;\n    padding: 80px 20px;\n"]))),at=y.a.div(b||(b=Object(O.a)(["\n    margin-bottom: 20px;\n    color: white;\n    font-size: 32px;\n"]))),ot=y.a.button(x||(x=Object(O.a)(["\n  appearance: none;\n  background-color: #2ea44f;\n  border: 1px solid rgba(27, 31, 35, .15);\n  border-radius: 6px;\n  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 12px 16px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  white-space: nowrap;\n"]))),st=function(){return Object(E.jsxs)(it,{children:[Object(E.jsx)(at,{children:"Want to get in touch?"}),Object(E.jsx)(ot,{onClick:function(){Object(nt.a)({url:"https://calendly.com/alessiosymons"})},children:"Schedule a meeting"})]})},ct=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(et,{}),Object(E.jsx)(B,{}),Object(E.jsx)(V,{}),Object(E.jsx)(st,{})]})},rt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),o(t),s(t)}))};n(127),n(128),n(129);w.a.render(Object(E.jsx)(j.a.StrictMode,{children:Object(E.jsx)(ct,{})}),document.getElementById("root")),rt()},53:function(t,e){var n={};function i(t,e,n){this.x=t,this.y=e,this.z=n}i.prototype.dot2=function(t,e){return this.x*t+this.y*e},i.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n};var a=[new i(1,1,0),new i(-1,1,0),new i(1,-1,0),new i(-1,-1,0),new i(1,0,1),new i(-1,0,1),new i(1,0,-1),new i(-1,0,-1),new i(0,1,1),new i(0,-1,1),new i(0,1,-1),new i(0,-1,-1)],o=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],s=new Array(512),c=new Array(512);n.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=0;e<256;e++){var n;n=1&e?o[e]^255&t:o[e]^t>>8&255,s[e]=s[e+256]=n,c[e]=c[e+256]=a[n%12]}},n.seed(0);var r=.5*(Math.sqrt(3)-1),h=(3-Math.sqrt(3))/6,d=1/6;function l(t){return t*t*t*(t*(6*t-15)+10)}function u(t,e,n){return(1-n)*t+n*e}n.simplex2=function(t,e){var n,i,a=(t+e)*r,o=Math.floor(t+a),d=Math.floor(e+a),l=(o+d)*h,u=t-o+l,f=e-d+l;u>f?(n=1,i=0):(n=0,i=1);var v=u-n+h,b=f-i+h,x=u-1+2*h,g=f-1+2*h,j=c[(o&=255)+s[d&=255]],p=c[o+n+s[d+i]],w=c[o+1+s[d+1]],m=.5-u*u-f*f,O=.5-v*v-b*b,y=.5-x*x-g*g;return 70*((m<0?0:(m*=m)*m*j.dot2(u,f))+(O<0?0:(O*=O)*O*p.dot2(v,b))+(y<0?0:(y*=y)*y*w.dot2(x,g)))},n.simplex3=function(t,e,n){var i,a,o,r,h,l,u=.3333333333333333*(t+e+n),f=Math.floor(t+u),v=Math.floor(e+u),b=Math.floor(n+u),x=(f+v+b)*d,g=t-f+x,j=e-v+x,p=n-b+x;g>=j?j>=p?(i=1,a=0,o=0,r=1,h=1,l=0):g>=p?(i=1,a=0,o=0,r=1,h=0,l=1):(i=0,a=0,o=1,r=1,h=0,l=1):j<p?(i=0,a=0,o=1,r=0,h=1,l=1):g<p?(i=0,a=1,o=0,r=0,h=1,l=1):(i=0,a=1,o=0,r=1,h=1,l=0);var w=g-i+d,m=j-a+d,O=p-o+d,y=g-r+2*d,S=j-h+2*d,k=p-l+2*d,M=g-1+.5,T=j-1+.5,C=p-1+.5,I=c[(f&=255)+s[(v&=255)+s[b&=255]]],D=c[f+i+s[v+a+s[b+o]]],z=c[f+r+s[v+h+s[b+l]]],F=c[f+1+s[v+1+s[b+1]]],R=.6-g*g-j*j-p*p,E=.6-w*w-m*m-O*O,W=.6-y*y-S*S-k*k,L=.6-M*M-T*T-C*C;return 32*((R<0?0:(R*=R)*R*I.dot3(g,j,p))+(E<0?0:(E*=E)*E*D.dot3(w,m,O))+(W<0?0:(W*=W)*W*z.dot3(y,S,k))+(L<0?0:(L*=L)*L*F.dot3(M,T,C)))},n.perlin2=function(t,e){var n=Math.floor(t),i=Math.floor(e);t-=n,e-=i;var a=c[(n&=255)+s[i&=255]].dot2(t,e),o=c[n+s[i+1]].dot2(t,e-1),r=c[n+1+s[i]].dot2(t-1,e),h=c[n+1+s[i+1]].dot2(t-1,e-1),d=l(t);return u(u(a,r,d),u(o,h,d),l(e))},n.perlin3=function(t,e,n){var i=Math.floor(t),a=Math.floor(e),o=Math.floor(n);t-=i,e-=a,n-=o;var r=c[(i&=255)+s[(a&=255)+s[o&=255]]].dot3(t,e,n),h=c[i+s[a+s[o+1]]].dot3(t,e,n-1),d=c[i+s[a+1+s[o]]].dot3(t,e-1,n),f=c[i+s[a+1+s[o+1]]].dot3(t,e-1,n-1),v=c[i+1+s[a+s[o]]].dot3(t-1,e,n),b=c[i+1+s[a+s[o+1]]].dot3(t-1,e,n-1),x=c[i+1+s[a+1+s[o]]].dot3(t-1,e-1,n),g=c[i+1+s[a+1+s[o+1]]].dot3(t-1,e-1,n-1),j=l(t),p=l(e),w=l(n);return u(u(u(r,v,j),u(h,b,j),w),u(u(d,x,j),u(f,g,j),w),p)},t.exports=n}},[[130,1,2]]]);
//# sourceMappingURL=main.b8801835.chunk.js.map