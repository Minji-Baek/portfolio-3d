var kp=Object.defineProperty;var Up=(s,e,t)=>e in s?kp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var xu=(s,e,t)=>(Up(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="147",zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bp=0,vu=1,Gp=2,wf=1,Vp=2,Bs=3,vs=0,Bn=1,ki=2,Wi=0,us=1,yu=2,bu=3,Mu=4,Hp=5,ts=100,Wp=101,qp=102,Su=103,wu=104,Xp=200,Yp=201,jp=202,Zp=203,Tf=204,Ef=205,$p=206,Jp=207,Kp=208,Qp=209,em=210,tm=0,nm=1,im=2,Kl=3,rm=4,sm=5,om=6,am=7,za=0,lm=1,cm=2,wi=0,um=1,hm=2,fm=3,dm=4,pm=5,Cf=300,ys=301,bs=302,Ql=303,ec=304,Na=306,tc=1e3,Zn=1001,nc=1002,ln=1003,Tu=1004,Eu=1005,On=1006,mm=1007,ka=1008,Sr=1009,gm=1010,_m=1011,Af=1012,xm=1013,cr=1014,ur=1015,ao=1016,vm=1017,ym=1018,hs=1020,bm=1021,Mm=1022,$n=1023,Sm=1024,wm=1025,dr=1026,Ms=1027,Tm=1028,Em=1029,Cm=1030,Am=1031,Pm=1033,Ja=33776,Ka=33777,Qa=33778,el=33779,Cu=35840,Au=35841,Pu=35842,Lu=35843,Lm=36196,Du=37492,Ru=37496,Iu=37808,Ou=37809,Fu=37810,zu=37811,Nu=37812,ku=37813,Uu=37814,Bu=37815,Gu=37816,Vu=37817,Hu=37818,Wu=37819,qu=37820,Xu=37821,Yu=36492,wr=3e3,pt=3001,Dm=3200,Rm=3201,Ua=0,Im=1,ei="srgb",lo="srgb-linear",tl=7680,Om=519,ju=35044,Zu="300 es",ic=1035;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,$u=180/Math.PI;function Ls(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Wt(s,e,t){return Math.max(e,Math.min(t,s))}function Fm(s,e){return(s%e+e)%e}function il(s,e,t){return(1-t)*s+t*e}function Ju(s){return(s&s-1)===0&&s!==0}function rc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(){Cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],_=i[6],M=i[1],x=i[4],v=i[7],b=i[2],T=i[5],E=i[8];return r[0]=a*m+o*M+c*b,r[3]=a*p+o*x+c*T,r[6]=a*_+o*v+c*E,r[1]=l*m+u*M+h*b,r[4]=l*p+u*x+h*T,r[7]=l*_+u*v+h*E,r[2]=f*m+d*M+g*b,r[5]=f*p+d*x+g*T,r[8]=f*_+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*l-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(u*t-i*c)*m,e[5]=(i*r-o*t)*m,e[6]=d*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new Cn;function Pf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ca(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sl={[ei]:{[lo]:pr},[lo]:{[ei]:ca}},$t={legacyMode:!0,get workingColorSpace(){return lo},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(sl[e]&&sl[e][t]!==void 0){const n=sl[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={r:0,g:0,b:0},Wn={h:0,s:0,l:0},Co={h:0,s:0,l:0};function ol(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Ao(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$t.workingColorSpace){if(e=Fm(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ol(a,r,e+1/3),this.g=ol(a,r,e),this.b=ol(a,r,e-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(e,t=ei){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,$t.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,$t.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,$t.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,$t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ei){const n=Lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return $t.fromWorkingColorSpace(Ao(this,Pt),e),Wt(Pt.r*255,0,255)<<16^Wt(Pt.g*255,0,255)<<8^Wt(Pt.b*255,0,255)<<0}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.fromWorkingColorSpace(Ao(this,Pt),t);const n=Pt.r,i=Pt.g,r=Pt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ao(this,Pt),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=ei){return $t.fromWorkingColorSpace(Ao(this,Pt),e),e!==ei?`color(${e} ${Pt.r} ${Pt.g} ${Pt.b})`:`rgb(${Pt.r*255|0},${Pt.g*255|0},${Pt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Wn),Wn.h+=e,Wn.s+=t,Wn.l+=n,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Co);const n=il(Wn.h,Co.h,t),i=il(Wn.s,Co.s,t),r=il(Wn.l,Co.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=Lf;let kr;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=co("canvas")),kr.width=e.width,kr.height=e.height;const n=kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pr(t[n]/255)*255):t[n]=pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Rf{constructor(e=null){this.isSource=!0,this.uuid=Ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(al(i[a].image)):r.push(al(i[a]))}else r=al(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Df.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zm=0;class hn extends Ir{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Zn,i=Zn,r=On,a=ka,o=$n,c=Sr,l=hn.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ls(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tc:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tc:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Cf;hn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],m=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(d+1)/2,b=(_+1)/2,T=(u+f)/4,E=(h+m)/4,y=(g+p)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=E/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=y/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-m)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tr extends Ir{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class If extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nm extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||c!==f||l!==d||u!==g){let p=1-o;const _=c*f+l*d+u*g+h*m,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,_*M);p=Math.sin(p*T)/b,o=Math.sin(o*T)/b}const v=o*M;if(c=c*p+f*v,l=l*p+d*v,u=u*p+g*v,h=h*p+m*v,p===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-r*i,h=c*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=l*c+f*-r+u*-o-h*-a,this.y=u*c+f*-a+h*-r-l*-o,this.z=h*c+f*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new z,Ku=new Er;class Mo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Ki.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ki)}else n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox),cl.applyMatrix4(e.matrixWorld),this.union(cl);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Po.subVectors(this.max,Rs),Ur.subVectors(e.a,Rs),Br.subVectors(e.b,Rs),Gr.subVectors(e.c,Rs),Li.subVectors(Br,Ur),Di.subVectors(Gr,Br),Qi.subVectors(Ur,Gr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Qi.z,Qi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Qi.z,0,-Qi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Qi.y,Qi.x,0];return!ul(t,Ur,Br,Gr,Po)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Ur,Br,Gr,Po))?!1:(Lo.crossVectors(Li,Di),t=[Lo.x,Lo.y,Lo.z],ul(t,Ur,Br,Gr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ki.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new z,new z,new z,new z,new z,new z,new z,new z],Ki=new z,cl=new Mo,Ur=new z,Br=new z,Gr=new z,Li=new z,Di=new z,Qi=new z,Rs=new z,Po=new z,Lo=new z,er=new z;function ul(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){er.fromArray(s,r);const o=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),c=e.dot(er),l=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const km=new Mo,Is=new z,hl=new z;class Nc{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):km.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(hl)),this.expandByPoint(Is.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new z,fl=new z,Do=new z,Ri=new z,dl=new z,Ro=new z,pl=new z;class Of{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.direction).multiplyScalar(t).add(this.origin),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(fl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=Ri.dot(this.direction),c=-Ri.dot(Do),l=Ri.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Do).multiplyScalar(f).add(fl),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,r){dl.subVectors(t,e),Ro.subVectors(n,e),pl.crossVectors(dl,Ro);let a=this.direction.dot(pl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Ro.crossVectors(Ri,Ro));if(c<0)return null;const l=o*this.direction.dot(dl.cross(Ri));if(l<0||c+l>a)return null;const u=-o*Ri.dot(pl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,c,l,u,h,f,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,m=l*h;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,m=l*h;t[0]=f-m*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+m,t[1]=c*h,t[5]=m*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+m,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Bm)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ii.crossVectors(n,vn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ii.crossVectors(n,vn)),Ii.normalize(),Io.crossVectors(vn,Ii),i[0]=Ii.x,i[4]=Io.x,i[8]=vn.x,i[1]=Ii.y,i[5]=Io.y,i[9]=vn.y,i[2]=Ii.z,i[6]=Io.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],M=n[3],x=n[7],v=n[11],b=n[15],T=i[0],E=i[4],y=i[8],S=i[12],P=i[1],U=i[5],j=i[9],W=i[13],I=i[2],N=i[6],Y=i[10],q=i[14],F=i[3],B=i[7],C=i[11],O=i[15];return r[0]=a*T+o*P+c*I+l*F,r[4]=a*E+o*U+c*N+l*B,r[8]=a*y+o*j+c*Y+l*C,r[12]=a*S+o*W+c*q+l*O,r[1]=u*T+h*P+f*I+d*F,r[5]=u*E+h*U+f*N+d*B,r[9]=u*y+h*j+f*Y+d*C,r[13]=u*S+h*W+f*q+d*O,r[2]=g*T+m*P+p*I+_*F,r[6]=g*E+m*U+p*N+_*B,r[10]=g*y+m*j+p*Y+_*C,r[14]=g*S+m*W+p*q+_*O,r[3]=M*T+x*P+v*I+b*F,r[7]=M*E+x*U+v*N+b*B,r[11]=M*y+x*j+v*Y+b*C,r[15]=M*S+x*W+v*q+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+m*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+p*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+_*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],M=h*p*l-m*f*l+m*c*d-o*p*d-h*c*_+o*f*_,x=g*f*l-u*p*l-g*c*d+a*p*d+u*c*_-a*f*_,v=u*m*l-g*h*l+g*o*d-a*m*d-u*o*_+a*h*_,b=g*h*c-u*m*c-g*o*f+a*m*f+u*o*p-a*h*p,T=t*M+n*x+i*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(m*f*r-h*p*r-m*i*d+n*p*d+h*i*_-n*f*_)*E,e[2]=(o*p*r-m*c*r+m*i*l-n*p*l-o*i*_+n*c*_)*E,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*E,e[4]=x*E,e[5]=(u*p*r-g*f*r+g*i*d-t*p*d-u*i*_+t*f*_)*E,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*_-t*c*_)*E,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*E,e[8]=v*E,e[9]=(g*h*r-u*m*r-g*n*d+t*m*d+u*n*_-t*h*_)*E,e[10]=(a*m*r-g*o*r+g*n*l-t*m*l-a*n*_+t*o*_)*E,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*E,e[12]=b*E,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*p+t*h*p)*E,e[14]=(g*o*i-a*m*i-g*n*c+t*m*c+a*n*p-t*o*p)*E,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,m=a*u,p=a*h,_=o*h,M=c*l,x=c*u,v=c*h,b=n.x,T=n.y,E=n.z;return i[0]=(1-(m+_))*b,i[1]=(d+v)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+_))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(p-M)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vr.set(i[0],i[1],i[2]).length();const a=Vr.set(i[4],i[5],i[6]).length(),o=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const l=1/r,u=1/a,h=1/o;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),d=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-r),h=(t+e)*c,f=(n+i)*l,d=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new z,qn=new St,Um=new z(0,0,0),Bm=new z(1,1,1),Ii=new z,Io=new z,vn=new z,Qu=new St,eh=new Er;class So{constructor(e=0,t=0,n=0,i=So.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}So.DefaultOrder="XYZ";So.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gm=0;const th=new z,Hr=new Er,di=new St,Oo=new z,Os=new z,Vm=new z,Hm=new Er,nh=new z(1,0,0),ih=new z(0,1,0),rh=new z(0,0,1),Wm={type:"added"},sh={type:"removed"};class Yt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DefaultUp.clone();const e=new z,t=new So,n=new Er,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Cn}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Yt.DefaultMatrixWorldAutoUpdate,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Os,Oo,this.up):di.lookAt(Oo,Os,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(di),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Yt.DefaultUp=new z(0,1,0);Yt.DefaultMatrixAutoUpdate=!0;Yt.DefaultMatrixWorldAutoUpdate=!0;const Xn=new z,pi=new z,ml=new z,mi=new z,Wr=new z,qr=new z,oh=new z,gl=new z,_l=new z,xl=new z;class vi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),pi.subVectors(n,t),ml.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(pi),c=Xn.dot(ml),l=pi.dot(pi),u=pi.dot(ml),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,mi),c.set(0,0),c.addScaledVector(r,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),pi.subVectors(e,t),Xn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Xn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Wr.subVectors(i,n),qr.subVectors(r,n),gl.subVectors(e,n);const c=Wr.dot(gl),l=qr.dot(gl);if(c<=0&&l<=0)return t.copy(n);_l.subVectors(e,i);const u=Wr.dot(_l),h=qr.dot(_l);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Wr,a);xl.subVectors(e,r);const d=Wr.dot(xl),g=qr.dot(xl);if(g>=0&&d<=g)return t.copy(r);const m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(qr,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return oh.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(oh,o);const _=1/(p+m+f);return a=m*_,o=f*_,t.copy(n).addScaledVector(Wr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qm=0;class Or extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=us,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tf,this.blendDst=Ef,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new z,Fo=new ue;class si{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ju,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ff extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zf extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xm=0;const Dn=new St,vl=new Yt,Xr=new z,yn=new Mo,Fs=new Mo,It=new z;class Ai extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?zf:Ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Cn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(yn.min,Fs.min),yn.expandByPoint(It),It.addVectors(yn.max,Fs.max),yn.expandByPoint(It)):(yn.expandByPoint(Fs.min),yn.expandByPoint(Fs.max))}yn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)It.fromBufferAttribute(o,l),c&&(Xr.fromBufferAttribute(e,l),It.add(Xr)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<o;P++)l[P]=new z,u[P]=new z;const h=new z,f=new z,d=new z,g=new ue,m=new ue,p=new ue,_=new z,M=new z;function x(P,U,j){h.fromArray(i,P*3),f.fromArray(i,U*3),d.fromArray(i,j*3),g.fromArray(a,P*2),m.fromArray(a,U*2),p.fromArray(a,j*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const W=1/(m.x*p.y-p.x*m.y);isFinite(W)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(W),M.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(W),l[P].add(_),l[U].add(_),l[j].add(_),u[P].add(M),u[U].add(M),u[j].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let P=0,U=v.length;P<U;++P){const j=v[P],W=j.start,I=j.count;for(let N=W,Y=W+I;N<Y;N+=3)x(n[N+0],n[N+1],n[N+2])}const b=new z,T=new z,E=new z,y=new z;function S(P){E.fromArray(r,P*3),y.copy(E);const U=l[P];b.copy(U),b.sub(E.multiplyScalar(E.dot(U))).normalize(),T.crossVectors(y,U);const W=T.dot(u[P])<0?-1:1;c[P*4]=b.x,c[P*4+1]=b.y,c[P*4+2]=b.z,c[P*4+3]=W}for(let P=0,U=v.length;P<U;++P){const j=v[P],W=j.start,I=j.count;for(let N=W,Y=W+I;N<Y;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*u;for(let _=0;_<u;_++)f[g++]=l[d++]}return new si(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new St,Yr=new Of,yl=new Nc,Oi=new z,Fi=new z,zi=new z,bl=new z,Ml=new z,Sl=new z,zo=new z,No=new z,ko=new z,Uo=new ue,Bo=new ue,Go=new ue,wl=new z,Vo=new z;class Xt extends Yt{constructor(e=new Ai,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(r),e.ray.intersectsSphere(yl)===!1)||(ah.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(ah),n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const _=d[m],M=i[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=x,T=v;b<T;b+=3){const E=o.getX(b),y=o.getX(b+1),S=o.getX(b+2);a=Ho(this,M,e,Yr,c,l,u,h,f,E,y,S),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let _=m,M=p;_<M;_+=3){const x=o.getX(_),v=o.getX(_+1),b=o.getX(_+2);a=Ho(this,i,e,Yr,c,l,u,h,f,x,v,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const _=d[m],M=i[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let b=x,T=v;b<T;b+=3){const E=b,y=b+1,S=b+2;a=Ho(this,M,e,Yr,c,l,u,h,f,E,y,S),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let _=m,M=p;_<M;_+=3){const x=_,v=_+1,b=_+2;a=Ho(this,i,e,Yr,c,l,u,h,f,x,v,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Ym(s,e,t,n,i,r,a,o){let c;if(e.side===Bn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side!==ki,o),c===null)return null;Vo.copy(o),Vo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Vo);return l<t.near||l>t.far?null:{distance:l,point:Vo.clone(),object:s}}function Ho(s,e,t,n,i,r,a,o,c,l,u,h){Oi.fromBufferAttribute(i,l),Fi.fromBufferAttribute(i,u),zi.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){zo.set(0,0,0),No.set(0,0,0),ko.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const p=f[g],_=r[g];p!==0&&(bl.fromBufferAttribute(_,l),Ml.fromBufferAttribute(_,u),Sl.fromBufferAttribute(_,h),a?(zo.addScaledVector(bl,p),No.addScaledVector(Ml,p),ko.addScaledVector(Sl,p)):(zo.addScaledVector(bl.sub(Oi),p),No.addScaledVector(Ml.sub(Fi),p),ko.addScaledVector(Sl.sub(zi),p)))}Oi.add(zo),Fi.add(No),zi.add(ko)}s.isSkinnedMesh&&(s.boneTransform(l,Oi),s.boneTransform(u,Fi),s.boneTransform(h,zi));const d=Ym(s,e,t,n,Oi,Fi,zi,wl);if(d){o&&(Uo.fromBufferAttribute(o,l),Bo.fromBufferAttribute(o,u),Go.fromBufferAttribute(o,h),d.uv=vi.getUV(wl,Oi,Fi,zi,Uo,Bo,Go,new ue)),c&&(Uo.fromBufferAttribute(c,l),Bo.fromBufferAttribute(c,u),Go.fromBufferAttribute(c,h),d.uv2=vi.getUV(wl,Oi,Fi,zi,Uo,Bo,Go,new ue));const g={a:l,b:u,c:h,normal:new z,materialIndex:0};vi.getNormal(Oi,Fi,zi,g.normal),d.face=g}return d}class wo extends Ai{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Gn(l,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(h,2));function g(m,p,_,M,x,v,b,T,E,y,S){const P=v/E,U=b/y,j=v/2,W=b/2,I=T/2,N=E+1,Y=y+1;let q=0,F=0;const B=new z;for(let C=0;C<Y;C++){const O=C*U-W;for(let X=0;X<N;X++){const ie=X*P-j;B[m]=ie*M,B[p]=O*x,B[_]=I,l.push(B.x,B.y,B.z),B[m]=0,B[p]=0,B[_]=T>0?1:-1,u.push(B.x,B.y,B.z),h.push(X/E),h.push(1-C/y),q+=1}}for(let C=0;C<y;C++)for(let O=0;O<E;O++){const X=f+O+N*C,ie=f+O+N*(C+1),ne=f+(O+1)+N*(C+1),le=f+(O+1)+N*C;c.push(X,ie,le),c.push(ie,ne,le),F+=6}o.addGroup(d,F,S),d+=F,f+=q}}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=Ss(s[t]);for(const i in n)e[i]=n[i]}return e}function jm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nf(s){return s.getRenderTarget()===null&&s.outputEncoding===pt?ei:lo}const Zm={clone:Ss,merge:Qt};var $m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kf extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends kf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$u*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Zr=1;class Km extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new cn(jr,Zr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new cn(jr,Zr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new cn(jr,Zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new cn(jr,Zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new cn(jr,Zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new cn(jr,Zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=wi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Uf extends hn{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qm extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wo(5,5,5),r=new Cr({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Wi});r.uniforms.tEquirect.value=t;const a=new Xt(i,r),o=t.minFilter;return t.minFilter===ka&&(t.minFilter=On),new Km(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Tl=new z,eg=new z,tg=new Cn;class ir{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Tl.subVectors(n,t).cross(eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tg.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Nc,Wo=new z;class Uc{constructor(e=new ir,t=new ir,n=new ir,i=new ir,r=new ir,a=new ir){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(o-i,h-c,m-f,x-p).normalize(),t[1].setComponents(o+i,h+c,m+f,x+p).normalize(),t[2].setComponents(o+r,h+l,m+d,x+_).normalize(),t[3].setComponents(o-r,h-l,m-d,x-_).normalize(),t[4].setComponents(o-a,h-u,m-g,x-M).normalize(),t[5].setComponents(o+a,h+u,m+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wo.x=i.normal.x>0?e.max.x:e.min.x,Wo.y=i.normal.y>0?e.max.y:e.min.y,Wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ng(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,l),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class mr extends Ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const M=_*f-a;for(let x=0;x<l;x++){const v=x*h-r;g.push(v,-M,0),m.push(0,0,1),p.push(x/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let M=0;M<o;M++){const x=M+l*_,v=M+l*(_+1),b=M+1+l*(_+1),T=M+1+l*_;d.push(x,v,T),d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(m,3)),this.setAttribute("uv",new Gn(p,2))}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg="vec3 transformed = vec3( position );",ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,p_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,__=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,w_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,N_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,j_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Z_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,J_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,K_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Q_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,c0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,d0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,I0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ye={alphamap_fragment:ig,alphamap_pars_fragment:rg,alphatest_fragment:sg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,begin_vertex:cg,beginnormal_vertex:ug,bsdfs:hg,iridescence_fragment:fg,bumpmap_pars_fragment:dg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:_g,color_fragment:xg,color_pars_fragment:vg,color_pars_vertex:yg,color_vertex:bg,common:Mg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:wg,displacementmap_pars_vertex:Tg,displacementmap_vertex:Eg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Ag,encodings_fragment:Pg,encodings_pars_fragment:Lg,envmap_fragment:Dg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Ig,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Xg,envmap_vertex:Fg,fog_vertex:zg,fog_pars_vertex:Ng,fog_fragment:kg,fog_pars_fragment:Ug,gradientmap_pars_fragment:Bg,lightmap_fragment:Gg,lightmap_pars_fragment:Vg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Wg,lights_pars_begin:qg,lights_toon_fragment:Yg,lights_toon_pars_fragment:jg,lights_phong_fragment:Zg,lights_phong_pars_fragment:$g,lights_physical_fragment:Jg,lights_physical_pars_fragment:Kg,lights_fragment_begin:Qg,lights_fragment_maps:e_,lights_fragment_end:t_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:r_,logdepthbuf_vertex:s_,map_fragment:o_,map_pars_fragment:a_,map_particle_fragment:l_,map_particle_pars_fragment:c_,metalnessmap_fragment:u_,metalnessmap_pars_fragment:h_,morphcolor_vertex:f_,morphnormal_vertex:d_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:x_,normal_pars_vertex:v_,normal_vertex:y_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:w_,iridescence_pars_fragment:T_,output_fragment:E_,packing:C_,premultiplied_alpha_fragment:A_,project_vertex:P_,dithering_fragment:L_,dithering_pars_fragment:D_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:O_,shadowmap_pars_vertex:F_,shadowmap_vertex:z_,shadowmask_pars_fragment:N_,skinbase_vertex:k_,skinning_pars_vertex:U_,skinning_vertex:B_,skinnormal_vertex:G_,specularmap_fragment:V_,specularmap_pars_fragment:H_,tonemapping_fragment:W_,tonemapping_pars_fragment:q_,transmission_fragment:X_,transmission_pars_fragment:Y_,uv_pars_fragment:j_,uv_pars_vertex:Z_,uv_vertex:$_,uv2_pars_fragment:J_,uv2_pars_vertex:K_,uv2_vertex:Q_,worldpos_vertex:e0,background_vert:t0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:r0,cube_vert:s0,cube_frag:o0,depth_vert:a0,depth_frag:l0,distanceRGBA_vert:c0,distanceRGBA_frag:u0,equirect_vert:h0,equirect_frag:f0,linedashed_vert:d0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:v0,meshmatcap_frag:y0,meshnormal_vert:b0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:w0,meshphysical_vert:T0,meshphysical_frag:E0,meshtoon_vert:C0,meshtoon_frag:A0,points_vert:P0,points_frag:L0,shadow_vert:D0,shadow_frag:R0,sprite_vert:I0,sprite_frag:O0},ve={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Cn},uv2Transform:{value:new Cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}}},ni={basic:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Qt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Qt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Qt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Qt([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Qt([ve.lights,ve.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ni.physical={uniforms:Qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const qo={r:0,b:0,g:0};function F0(s,e,t,n,i,r,a){const o=new et(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(p,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=s.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?m(o,c):x&&x.isColor&&(m(x,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Na)?(u===void 0&&(u=new Xt(new wo(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:Ss(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xt(new mr(2,2),new Cr({name:"BackgroundMaterial",uniforms:Ss(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,_){p.getRGB(qo,Nf(s)),n.buffers.color.setClear(qo.r,qo.g,qo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function z0(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(I,N,Y,q,F){let B=!1;if(a){const C=m(q,Y,N);l!==C&&(l=C,d(l.object)),B=_(I,q,Y,F),B&&M(I,q,Y,F)}else{const C=N.wireframe===!0;(l.geometry!==q.id||l.program!==Y.id||l.wireframe!==C)&&(l.geometry=q.id,l.program=Y.id,l.wireframe=C,B=!0)}F!==null&&t.update(F,34963),(B||u)&&(u=!1,y(I,N,Y,q),F!==null&&s.bindBuffer(34963,t.get(F).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function m(I,N,Y){const q=Y.wireframe===!0;let F=o[I.id];F===void 0&&(F={},o[I.id]=F);let B=F[N.id];B===void 0&&(B={},F[N.id]=B);let C=B[q];return C===void 0&&(C=p(f()),B[q]=C),C}function p(I){const N=[],Y=[],q=[];for(let F=0;F<i;F++)N[F]=0,Y[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:q,object:I,attributes:{},index:null}}function _(I,N,Y,q){const F=l.attributes,B=N.attributes;let C=0;const O=Y.getAttributes();for(const X in O)if(O[X].location>=0){const ne=F[X];let le=B[X];if(le===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),ne===void 0||ne.attribute!==le||le&&ne.data!==le.data)return!0;C++}return l.attributesNum!==C||l.index!==q}function M(I,N,Y,q){const F={},B=N.attributes;let C=0;const O=Y.getAttributes();for(const X in O)if(O[X].location>=0){let ne=B[X];ne===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const le={};le.attribute=ne,ne&&ne.data&&(le.data=ne.data),F[X]=le,C++}l.attributes=F,l.attributesNum=C,l.index=q}function x(){const I=l.newAttributes;for(let N=0,Y=I.length;N<Y;N++)I[N]=0}function v(I){b(I,0)}function b(I,N){const Y=l.newAttributes,q=l.enabledAttributes,F=l.attributeDivisors;Y[I]=1,q[I]===0&&(s.enableVertexAttribArray(I),q[I]=1),F[I]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),F[I]=N)}function T(){const I=l.newAttributes,N=l.enabledAttributes;for(let Y=0,q=N.length;Y<q;Y++)N[Y]!==I[Y]&&(s.disableVertexAttribArray(Y),N[Y]=0)}function E(I,N,Y,q,F,B){n.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(I,N,Y,F,B):s.vertexAttribPointer(I,N,Y,q,F,B)}function y(I,N,Y,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const F=q.attributes,B=Y.getAttributes(),C=N.defaultAttributeValues;for(const O in B){const X=B[O];if(X.location>=0){let ie=F[O];if(ie===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){const ne=ie.normalized,le=ie.itemSize,K=t.get(ie);if(K===void 0)continue;const Te=K.buffer,pe=K.type,Ee=K.bytesPerElement;if(ie.isInterleavedBufferAttribute){const fe=ie.data,Oe=fe.stride,te=ie.offset;if(fe.isInstancedInterleavedBuffer){for(let Z=0;Z<X.locationSize;Z++)b(X.location+Z,fe.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Z=0;Z<X.locationSize;Z++)v(X.location+Z);s.bindBuffer(34962,Te);for(let Z=0;Z<X.locationSize;Z++)E(X.location+Z,le/X.locationSize,pe,ne,Oe*Ee,(te+le/X.locationSize*Z)*Ee)}else{if(ie.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)b(X.location+fe,ie.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let fe=0;fe<X.locationSize;fe++)v(X.location+fe);s.bindBuffer(34962,Te);for(let fe=0;fe<X.locationSize;fe++)E(X.location+fe,le/X.locationSize,pe,ne,le*Ee,le/X.locationSize*fe*Ee)}}else if(C!==void 0){const ne=C[O];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(X.location,ne);break;case 3:s.vertexAttrib3fv(X.location,ne);break;case 4:s.vertexAttrib4fv(X.location,ne);break;default:s.vertexAttrib1fv(X.location,ne)}}}}T()}function S(){j();for(const I in o){const N=o[I];for(const Y in N){const q=N[Y];for(const F in q)g(q[F].object),delete q[F];delete N[Y]}delete o[I]}}function P(I){if(o[I.id]===void 0)return;const N=o[I.id];for(const Y in N){const q=N[Y];for(const F in q)g(q[F].object),delete q[F];delete N[Y]}delete o[I.id]}function U(I){for(const N in o){const Y=o[N];if(Y[I.id]===void 0)continue;const q=Y[I.id];for(const F in q)g(q[F].object),delete q[F];delete Y[I.id]}}function j(){W(),u=!0,l!==c&&(l=c,d(l.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:j,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function N0(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function k0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),d=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),p=s.getParameter(36347),_=s.getParameter(36348),M=s.getParameter(36349),x=f>0,v=a||e.has("OES_texture_float"),b=x&&v,T=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:T}}function U0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ir,o=new Cn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,x=M*4;let v=_.clippingState||null;c.value=v,v=u(g,f,x,d);for(let b=0;b!==x;++b)v[b]=t[b];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const _=d+m*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,v=d;x!==m;++x,v+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function B0(s){let e=new WeakMap;function t(a,o){return o===Ql?a.mapping=ys:o===ec&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ql||o===ec)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Qm(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Gf extends kf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,lh=[.125,.215,.35,.446,.526,.582],lr=20,El=new Gf,ch=new et;let Cl=null;const rr=(1+Math.sqrt(5))/2,Jr=1/rr,uh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,rr,Jr),new z(0,rr,-Jr),new z(Jr,0,rr),new z(-Jr,0,rr),new z(rr,Jr,0),new z(-rr,Jr,0)];class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:ao,format:$n,encoding:wr,depthBuffer:!1},i=fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=V0(r,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,i){const o=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ch),u.toneMapping=wi,u.autoClear=!1;const d=new ba({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new Xt(new wo,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(ch),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):M===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const x=this._cubeSize;Xo(i,M*x,_>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ys||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Xo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,El)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=uh[(i-1)%uh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*lr-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):lr;p>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${lr}`);const _=[];let M=0;for(let E=0;E<lr;++E){const y=E/m,S=Math.exp(-y*y/2);_.push(S),E===0?M+=S:E<p&&(M+=2*S)}for(let E=0;E<_.length;E++)_[E]=_[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-rs?i-x+rs:0),T=4*(this._cubeSize-v);Xo(t,b,T,3*v,2*v),c.setRenderTarget(t),c.render(h,El)}}function G0(s){const e=[],t=[],n=[];let i=s;const r=s-rs+1+lh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-rs?c=lh[a-s+rs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,M=new Float32Array(m*g*d),x=new Float32Array(p*g*d),v=new Float32Array(_*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,y=T>2?0:-1,S=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];M.set(S,m*g*T),x.set(f,p*g*T);const P=[T,T,T,T,T,T];v.set(P,_*g*T)}const b=new Ai;b.setAttribute("position",new si(M,m)),b.setAttribute("uv",new si(x,p)),b.setAttribute("faceIndex",new si(v,_)),e.push(b),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fh(s,e,t){const n=new Tr(s,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function V0(s,e,t){const n=new Float32Array(lr),i=new z(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function dh(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ph(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ql||c===ec,u=c===ys||c===bs;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new hh(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new hh(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function W0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function q0(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const M=d.array;m=d.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],T=M[x+1],E=M[x+2];f.push(b,T,T,E,E,b)}}else{const M=g.array;m=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,T=x+1,E=x+2;f.push(b,T,T,E,E,b)}}const p=new(Pf(f)?zf:Ff)(f,1);p.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function X0(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*c),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,o,f*c,g),t.update(d,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Y0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function j0(s,e){return s[0]-e[0]}function Z0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function $0(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Y=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let P=0;v===!0&&(P=1),b===!0&&(P=2),T===!0&&(P=3);let U=u.attributes.position.count*P,j=1;U>e.maxTextureSize&&(j=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const W=new Float32Array(U*j*4*p),I=new If(W,U,j,p);I.type=ur,I.needsUpdate=!0;const N=P*4;for(let q=0;q<p;q++){const F=E[q],B=y[q],C=S[q],O=U*j*4*q;for(let X=0;X<F.count;X++){const ie=X*N;v===!0&&(a.fromBufferAttribute(F,X),W[O+ie+0]=a.x,W[O+ie+1]=a.y,W[O+ie+2]=a.z,W[O+ie+3]=0),b===!0&&(a.fromBufferAttribute(B,X),W[O+ie+4]=a.x,W[O+ie+5]=a.y,W[O+ie+6]=a.z,W[O+ie+7]=0),T===!0&&(a.fromBufferAttribute(C,X),W[O+ie+8]=a.x,W[O+ie+9]=a.y,W[O+ie+10]=a.z,W[O+ie+11]=C.itemSize===4?a.w:1)}}_={count:p,texture:I,size:new ue(U,j)},r.set(u,_),u.addEventListener("dispose",Y)}let M=0;for(let v=0;v<d.length;v++)M+=d[v];const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];n[u.id]=p}for(let b=0;b<m;b++){const T=p[b];T[0]=b,T[1]=d[b]}p.sort(Z0);for(let b=0;b<8;b++)b<m&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(j0);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const T=o[b],E=T[0],y=T[1];E!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+b)!==_[E]&&u.setAttribute("morphTarget"+b,_[E]),M&&u.getAttribute("morphNormal"+b)!==M[E]&&u.setAttribute("morphNormal"+b,M[E]),i[b]=y,x+=y):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),M&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function J0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Vf=new hn,Hf=new If,Wf=new Nm,qf=new Uf,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Ds(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=mh[i];if(r===void 0&&(r=new Float32Array(i),mh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ba(s,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function K0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function nx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Dt(t,n))return;vh.set(n),s.uniformMatrix2fv(this.addr,!1,vh),Rt(t,n)}}function ix(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Dt(t,n))return;xh.set(n),s.uniformMatrix3fv(this.addr,!1,xh),Rt(t,n)}}function rx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Dt(t,n))return;_h.set(n),s.uniformMatrix4fv(this.addr,!1,_h),Rt(t,n)}}function sx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function cx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Vf,i)}function px(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wf,i)}function mx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qf,i)}function gx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hf,i)}function _x(s){switch(s){case 5126:return K0;case 35664:return Q0;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return rx;case 5124:case 35670:return sx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return hx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function xx(s,e){s.uniform1fv(this.addr,e)}function vx(s,e){const t=Ds(e,this.size,2);s.uniform2fv(this.addr,t)}function yx(s,e){const t=Ds(e,this.size,3);s.uniform3fv(this.addr,t)}function bx(s,e){const t=Ds(e,this.size,4);s.uniform4fv(this.addr,t)}function Mx(s,e){const t=Ds(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sx(s,e){const t=Ds(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wx(s,e){const t=Ds(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tx(s,e){s.uniform1iv(this.addr,e)}function Ex(s,e){s.uniform2iv(this.addr,e)}function Cx(s,e){s.uniform3iv(this.addr,e)}function Ax(s,e){s.uniform4iv(this.addr,e)}function Px(s,e){s.uniform1uiv(this.addr,e)}function Lx(s,e){s.uniform2uiv(this.addr,e)}function Dx(s,e){s.uniform3uiv(this.addr,e)}function Rx(s,e){s.uniform4uiv(this.addr,e)}function Ix(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vf,r[a])}function Ox(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wf,r[a])}function Fx(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qf,r[a])}function zx(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hf,r[a])}function Nx(s){switch(s){case 5126:return xx;case 35664:return vx;case 35665:return yx;case 35666:return bx;case 35674:return Mx;case 35675:return Sx;case 35676:return wx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ex;case 35668:case 35672:return Cx;case 35669:case 35673:return Ax;case 5125:return Px;case 36294:return Lx;case 36295:return Dx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return zx}}class kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_x(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Nx(t.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function yh(s,e){s.seq.push(e),s.map[e.id]=e}function Gx(s,e,t){const n=s.name,i=n.length;for(Al.lastIndex=0;;){const r=Al.exec(n),a=Al.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yh(t,l===void 0?new kx(o,s,e):new Ux(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Bx(o),yh(t,h)),t=h}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Gx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function bh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Vx=0;function Hx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Wx(s){switch(s){case wr:return["Linear","( value )"];case pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Mh(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hx(s.getShaderSource(e),a)}else return i}function qx(s,e){const t=Wx(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xx(s,e){let t;switch(e){case um:t="Linear";break;case hm:t="Reinhard";break;case fm:t="OptimizedCineon";break;case dm:t="ACESFilmic";break;case pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function jx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Gs(s){return s!==""}function Sh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(s){return s.replace($x,Jx)}function Jx(s,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return sc(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(s){return s.replace(Kx,Qx)}function Qx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Eh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ev(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bs&&(e="SHADOWMAP_TYPE_VSM"),e}function tv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case bs:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function iv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case lm:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function rv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ev(t),l=tv(t),u=nv(t),h=iv(t),f=rv(t),d=t.isWebGL2?"":Yx(t),g=jx(r),m=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(p=[Eh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),_=[d,Eh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==wi?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,qx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=sc(a),a=Sh(a,t),a=wh(a,t),o=sc(o),o=Sh(o,t),o=wh(o,t),a=Th(a),o=Th(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+p+a,v=M+_+o,b=bh(i,35633,x),T=bh(i,35632,v);if(i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(T).trim();let j=!0,W=!0;if(i.getProgramParameter(m,35714)===!1){j=!1;const I=Mh(i,b,"vertex"),N=Mh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+I+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||U==="")&&(W=!1);W&&(this.diagnostics={runnable:j,programLog:S,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:_}})}i.deleteShader(b),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new ua(i,m)),E};let y;return this.getAttributes=function(){return y===void 0&&(y=Zx(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lv(e),t.set(e,n)),n}}class lv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function cv(s,e,t,n,i,r,a){const o=new kc,c=new av,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,S,P,U,j){const W=U.fog,I=j.geometry,N=y.isMeshStandardMaterial?U.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),q=Y&&Y.mapping===Na?Y.image.height:null,F=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const B=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,C=B!==void 0?B.length:0;let O=0;I.morphAttributes.position!==void 0&&(O=1),I.morphAttributes.normal!==void 0&&(O=2),I.morphAttributes.color!==void 0&&(O=3);let X,ie,ne,le;if(F){const Oe=ni[F];X=Oe.vertexShader,ie=Oe.fragmentShader}else X=y.vertexShader,ie=y.fragmentShader,c.update(y),ne=c.getVertexShaderID(y),le=c.getFragmentShaderID(y);const K=s.getRenderTarget(),Te=y.alphaTest>0,pe=y.clearcoat>0,Ee=y.iridescence>0;return{isWebGL2:u,shaderID:F,shaderName:y.type,vertexShader:X,fragmentShader:ie,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:K===null?s.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:wr,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Im,tangentSpaceNormalMap:y.normalMapType===Ua,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===pt,clearcoat:pe,clearcoatMap:pe&&!!y.clearcoatMap,clearcoatRoughnessMap:pe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!y.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!y.iridescenceMap,iridescenceThicknessMap:Ee&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===us,alphaMap:!!y.alphaMap,alphaTest:Te,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!W,useFog:y.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:O,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:wi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ki,flipSided:y.side===Bn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(_(S,y),M(S,y),S.push(s.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),y.push(o.mask)}function x(y){const S=g[y.type];let P;if(S){const U=ni[S];P=Zm.clone(U.uniforms)}else P=y.uniforms;return P}function v(y,S){let P;for(let U=0,j=l.length;U<j;U++){const W=l[U];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new sv(s,S,y,r),l.push(P)),P}function b(y){if(--y.usedTimes===0){const S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),y.destroy()}}function T(y){c.remove(y)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:E}}function uv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ch(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ah(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,m,p){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},s[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function o(h,f,d,g,m,p){const _=a(h,f,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function c(h,f,d,g,m,p){const _=a(h,f,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function l(h,f){t.length>1&&t.sort(h||hv),n.length>1&&n.sort(f||Ch),i.length>1&&i.sort(f||Ch)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function fv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ah,s.set(n,[a])):i>=r.length?(a=new Ah,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function dv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new et};break;case"SpotLight":t={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function pv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mv=0;function gv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _v(s,e){const t=new dv,n=pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new St,o=new St;function c(u,h){let f=0,d=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,p=0,_=0,M=0,x=0,v=0,b=0,T=0,E=0,y=0;u.sort(gv);const S=h!==!0?Math.PI:1;for(let U=0,j=u.length;U<j;U++){const W=u[U],I=W.color,N=W.intensity,Y=W.distance,q=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)f+=I.r*N*S,d+=I.g*N*S,g+=I.b*N*S;else if(W.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(W.sh.coefficients[F],N);else if(W.isDirectionalLight){const F=t.get(W);if(F.color.copy(W.color).multiplyScalar(W.intensity*S),W.castShadow){const B=W.shadow,C=n.get(W);C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=W.shadow.matrix,v++}i.directional[m]=F,m++}else if(W.isSpotLight){const F=t.get(W);F.position.setFromMatrixPosition(W.matrixWorld),F.color.copy(I).multiplyScalar(N*S),F.distance=Y,F.coneCos=Math.cos(W.angle),F.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),F.decay=W.decay,i.spot[_]=F;const B=W.shadow;if(W.map&&(i.spotLightMap[E]=W.map,E++,B.updateMatrices(W),W.castShadow&&y++),i.spotLightMatrix[_]=B.matrix,W.castShadow){const C=n.get(W);C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,i.spotShadow[_]=C,i.spotShadowMap[_]=q,T++}_++}else if(W.isRectAreaLight){const F=t.get(W);F.color.copy(I).multiplyScalar(N),F.halfWidth.set(W.width*.5,0,0),F.halfHeight.set(0,W.height*.5,0),i.rectArea[M]=F,M++}else if(W.isPointLight){const F=t.get(W);if(F.color.copy(W.color).multiplyScalar(W.intensity*S),F.distance=W.distance,F.decay=W.decay,W.castShadow){const B=W.shadow,C=n.get(W);C.shadowBias=B.bias,C.shadowNormalBias=B.normalBias,C.shadowRadius=B.radius,C.shadowMapSize=B.mapSize,C.shadowCameraNear=B.camera.near,C.shadowCameraFar=B.camera.far,i.pointShadow[p]=C,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=W.shadow.matrix,b++}i.point[p]=F,p++}else if(W.isHemisphereLight){const F=t.get(W);F.skyColor.copy(W.color).multiplyScalar(N*S),F.groundColor.copy(W.groundColor).multiplyScalar(N*S),i.hemi[x]=F,x++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==x||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==T||P.numSpotMaps!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+E-y,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=y,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=x,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=T,P.numSpotMaps=E,i.version=mv++)}function l(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const v=u[M];if(v.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function Ph(s,e){const t=new _v(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xv(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Ph(s,e),t.set(r,[c])):a>=o.length?(c=new Ph(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class vv extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yv extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sv(s,e,t){let n=new Uc;const i=new ue,r=new ue,a=new dt,o=new vv({depthPacking:Rm}),c=new yv,l={},u=t.maxTextureSize,h={0:Bn,1:vs,2:ki},f=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:bv,fragmentShader:Mv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf,this.render=function(v,b,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const E=s.getRenderTarget(),y=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Wi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,j=v.length;U<j;U++){const W=v[U],I=W.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const N=I.getFrameExtents();if(i.multiply(N),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/N.x),i.x=r.x*N.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/N.y),i.y=r.y*N.y,I.mapSize.y=r.y)),I.map===null){const q=this.type!==Bs?{minFilter:ln,magFilter:ln}:{};I.map=new Tr(i.x,i.y,q),I.map.texture.name=W.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const Y=I.getViewportCount();for(let q=0;q<Y;q++){const F=I.getViewport(q);a.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),P.viewport(a),I.updateMatrices(W,q),n=I.getFrustum(),x(b,T,I.camera,W,this.type)}I.isPointLightShadow!==!0&&this.type===Bs&&_(I,T),I.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(E,y,S)};function _(v,b){const T=e.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Tr(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(b,null,T,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(b,null,T,d,m,null)}function M(v,b,T,E,y,S){let P=null;const U=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0?P=U:P=T.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const j=P.uuid,W=b.uuid;let I=l[j];I===void 0&&(I={},l[j]=I);let N=I[W];N===void 0&&(N=P.clone(),I[W]=N),P=N}return P.visible=b.visible,P.wireframe=b.wireframe,S===Bs?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=E,P.farDistance=y),P}function x(v,b,T,E,y){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===Bs)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const U=e.update(v),j=v.material;if(Array.isArray(j)){const W=U.groups;for(let I=0,N=W.length;I<N;I++){const Y=W[I],q=j[Y.materialIndex];if(q&&q.visible){const F=M(v,q,E,T.near,T.far,y);s.renderBufferDirect(T,null,U,F,v,Y)}}}else if(j.visible){const W=M(v,j,E,T.near,T.far,y);s.renderBufferDirect(T,null,U,W,v,null)}}const P=v.children;for(let U=0,j=P.length;U<j;U++)x(P[U],b,T,E,y)}}function wv(s,e,t){const n=t.isWebGL2;function i(){let R=!1;const ee=new dt;let ae=null;const _e=new dt(0,0,0,0);return{setMask:function(we){ae!==we&&!R&&(s.colorMask(we,we,we,we),ae=we)},setLocked:function(we){R=we},setClear:function(we,je,ht,ut,Ne){Ne===!0&&(we*=ut,je*=ut,ht*=ut),ee.set(we,je,ht,ut),_e.equals(ee)===!1&&(s.clearColor(we,je,ht,ut),_e.copy(ee))},reset:function(){R=!1,ae=null,_e.set(-1,0,0,0)}}}function r(){let R=!1,ee=null,ae=null,_e=null;return{setTest:function(we){we?Te(2929):pe(2929)},setMask:function(we){ee!==we&&!R&&(s.depthMask(we),ee=we)},setFunc:function(we){if(ae!==we){switch(we){case tm:s.depthFunc(512);break;case nm:s.depthFunc(519);break;case im:s.depthFunc(513);break;case Kl:s.depthFunc(515);break;case rm:s.depthFunc(514);break;case sm:s.depthFunc(518);break;case om:s.depthFunc(516);break;case am:s.depthFunc(517);break;default:s.depthFunc(515)}ae=we}},setLocked:function(we){R=we},setClear:function(we){_e!==we&&(s.clearDepth(we),_e=we)},reset:function(){R=!1,ee=null,ae=null,_e=null}}}function a(){let R=!1,ee=null,ae=null,_e=null,we=null,je=null,ht=null,ut=null,Ne=null;return{setTest:function(ye){R||(ye?Te(2960):pe(2960))},setMask:function(ye){ee!==ye&&!R&&(s.stencilMask(ye),ee=ye)},setFunc:function(ye,qe,rt){(ae!==ye||_e!==qe||we!==rt)&&(s.stencilFunc(ye,qe,rt),ae=ye,_e=qe,we=rt)},setOp:function(ye,qe,rt){(je!==ye||ht!==qe||ut!==rt)&&(s.stencilOp(ye,qe,rt),je=ye,ht=qe,ut=rt)},setLocked:function(ye){R=ye},setClear:function(ye){Ne!==ye&&(s.clearStencil(ye),Ne=ye)},reset:function(){R=!1,ee=null,ae=null,_e=null,we=null,je=null,ht=null,ut=null,Ne=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,x=null,v=null,b=null,T=null,E=null,y=null,S=!1,P=null,U=null,j=null,W=null,I=null;const N=s.getParameter(35661);let Y=!1,q=0;const F=s.getParameter(7938);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=q>=2);let B=null,C={};const O=s.getParameter(3088),X=s.getParameter(2978),ie=new dt().fromArray(O),ne=new dt().fromArray(X);function le(R,ee,ae){const _e=new Uint8Array(4),we=s.createTexture();s.bindTexture(R,we),s.texParameteri(R,10241,9728),s.texParameteri(R,10240,9728);for(let je=0;je<ae;je++)s.texImage2D(ee+je,0,6408,1,1,0,6408,5121,_e);return we}const K={};K[3553]=le(3553,3553,1),K[34067]=le(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Te(2929),c.setFunc(Kl),ce(!1),G(vu),Te(2884),oe(Wi);function Te(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function pe(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function Ee(R,ee){return d[R]!==ee?(s.bindFramebuffer(R,ee),d[R]=ee,n&&(R===36009&&(d[36160]=ee),R===36160&&(d[36009]=ee)),!0):!1}function fe(R,ee){let ae=m,_e=!1;if(R)if(ae=g.get(ee),ae===void 0&&(ae=[],g.set(ee,ae)),R.isWebGLMultipleRenderTargets){const we=R.texture;if(ae.length!==we.length||ae[0]!==36064){for(let je=0,ht=we.length;je<ht;je++)ae[je]=36064+je;ae.length=we.length,_e=!0}}else ae[0]!==36064&&(ae[0]=36064,_e=!0);else ae[0]!==1029&&(ae[0]=1029,_e=!0);_e&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Oe(R){return p!==R?(s.useProgram(R),p=R,!0):!1}const te={[ts]:32774,[Wp]:32778,[qp]:32779};if(n)te[Su]=32775,te[wu]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(te[Su]=R.MIN_EXT,te[wu]=R.MAX_EXT)}const Z={[Xp]:0,[Yp]:1,[jp]:768,[Tf]:770,[em]:776,[Kp]:774,[$p]:772,[Zp]:769,[Ef]:771,[Qp]:775,[Jp]:773};function oe(R,ee,ae,_e,we,je,ht,ut){if(R===Wi){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(Te(3042),_=!0),R!==Hp){if(R!==M||ut!==S){if((x!==ts||T!==ts)&&(s.blendEquation(32774),x=ts,T=ts),ut)switch(R){case us:s.blendFuncSeparate(1,771,1,771);break;case yu:s.blendFunc(1,1);break;case bu:s.blendFuncSeparate(0,769,0,1);break;case Mu:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case us:s.blendFuncSeparate(770,771,1,771);break;case yu:s.blendFunc(770,1);break;case bu:s.blendFuncSeparate(0,769,0,1);break;case Mu:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,b=null,E=null,y=null,M=R,S=ut}return}we=we||ee,je=je||ae,ht=ht||_e,(ee!==x||we!==T)&&(s.blendEquationSeparate(te[ee],te[we]),x=ee,T=we),(ae!==v||_e!==b||je!==E||ht!==y)&&(s.blendFuncSeparate(Z[ae],Z[_e],Z[je],Z[ht]),v=ae,b=_e,E=je,y=ht),M=R,S=!1}function ge(R,ee){R.side===ki?pe(2884):Te(2884);let ae=R.side===Bn;ee&&(ae=!ae),ce(ae),R.blending===us&&R.transparent===!1?oe(Wi):oe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),o.setMask(R.colorWrite);const _e=R.stencilWrite;l.setTest(_e),_e&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),De(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Te(32926):pe(32926)}function ce(R){P!==R&&(R?s.frontFace(2304):s.frontFace(2305),P=R)}function G(R){R!==Bp?(Te(2884),R!==U&&(R===vu?s.cullFace(1029):R===Gp?s.cullFace(1028):s.cullFace(1032))):pe(2884),U=R}function Ce(R){R!==j&&(Y&&s.lineWidth(R),j=R)}function De(R,ee,ae){R?(Te(32823),(W!==ee||I!==ae)&&(s.polygonOffset(ee,ae),W=ee,I=ae)):pe(32823)}function tt(R){R?Te(3089):pe(3089)}function ze(R){R===void 0&&(R=33984+N-1),B!==R&&(s.activeTexture(R),B=R)}function L(R,ee,ae){ae===void 0&&(B===null?ae=33984+N-1:ae=B);let _e=C[ae];_e===void 0&&(_e={type:void 0,texture:void 0},C[ae]=_e),(_e.type!==R||_e.texture!==ee)&&(B!==ae&&(s.activeTexture(ae),B=ae),s.bindTexture(R,ee||K[R]),_e.type=R,_e.texture=ee)}function w(){const R=C[B];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(R){ie.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),ie.copy(R))}function Pe(R){ne.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),ne.copy(R))}function He(R,ee){let ae=h.get(ee);ae===void 0&&(ae=new WeakMap,h.set(ee,ae));let _e=ae.get(R);_e===void 0&&(_e=s.getUniformBlockIndex(ee,R.name),ae.set(R,_e))}function We(R,ee){const _e=h.get(ee).get(R);u.get(R)!==_e&&(s.uniformBlockBinding(ee,_e,R.__bindingPointIndex),u.set(R,_e))}function Je(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},B=null,C={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,x=null,v=null,b=null,T=null,E=null,y=null,S=!1,P=null,U=null,j=null,W=null,I=null,ie.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Te,disable:pe,bindFramebuffer:Ee,drawBuffers:fe,useProgram:Oe,setBlending:oe,setMaterial:ge,setFlipSided:ce,setCullFace:G,setLineWidth:Ce,setPolygonOffset:De,setScissorTest:tt,activeTexture:ze,bindTexture:L,unbindTexture:w,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:me,texImage3D:xe,updateUBOMapping:He,uniformBlockBinding:We,texStorage2D:H,texStorage3D:de,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:Re,compressedTexSubImage3D:D,scissor:Le,viewport:Pe,reset:Je}}function Tv(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return _?new OffscreenCanvas(L,w):co("canvas")}function x(L,w,J,re){let se=1;if((L.width>re||L.height>re)&&(se=re/Math.max(L.width,L.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const he=w?rc:Math.floor,Re=he(se*L.width),D=he(se*L.height);m===void 0&&(m=M(Re,D));const H=J?M(Re,D):m;return H.width=Re,H.height=D,H.getContext("2d").drawImage(L,0,0,Re,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Re+"x"+D+")."),H}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Ju(L.width)&&Ju(L.height)}function b(L){return o?!1:L.wrapS!==Zn||L.wrapT!==Zn||L.minFilter!==ln&&L.minFilter!==On}function T(L,w){return L.generateMipmaps&&w&&L.minFilter!==ln&&L.minFilter!==On}function E(L){s.generateMipmap(L)}function y(L,w,J,re,se=!1){if(o===!1)return w;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=w;return w===6403&&(J===5126&&(he=33326),J===5131&&(he=33325),J===5121&&(he=33321)),w===33319&&(J===5126&&(he=33328),J===5131&&(he=33327),J===5121&&(he=33323)),w===6408&&(J===5126&&(he=34836),J===5131&&(he=34842),J===5121&&(he=re===pt&&se===!1?35907:32856),J===32819&&(he=32854),J===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function S(L,w,J){return T(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function P(L){return L===ln||L===Tu||L===Eu?9728:9729}function U(L){const w=L.target;w.removeEventListener("dispose",U),W(w),w.isVideoTexture&&g.delete(w)}function j(L){const w=L.target;w.removeEventListener("dispose",j),N(w)}function W(L){const w=n.get(L);if(w.__webglInit===void 0)return;const J=L.source,re=p.get(J);if(re){const se=re[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&I(L),Object.keys(re).length===0&&p.delete(J)}n.remove(L)}function I(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const J=L.source,re=p.get(J);delete re[w.__cacheKey],a.memory.textures--}function N(L){const w=L.texture,J=n.get(L),re=n.get(w);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(J.__webglFramebuffer[se]),J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let se=0;se<J.__webglColorRenderbuffer.length;se++)J.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[se]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let se=0,he=w.length;se<he;se++){const Re=n.get(w[se]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),a.memory.textures--),n.remove(w[se])}n.remove(w),n.remove(L)}let Y=0;function q(){Y=0}function F(){const L=Y;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),Y+=1,L}function B(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function C(L,w){const J=n.get(L);if(L.isVideoTexture&&tt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const re=L.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,L,w);return}}t.bindTexture(3553,J.__webglTexture,33984+w)}function O(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,w);return}t.bindTexture(35866,J.__webglTexture,33984+w)}function X(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,w);return}t.bindTexture(32879,J.__webglTexture,33984+w)}function ie(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Ee(J,L,w);return}t.bindTexture(34067,J.__webglTexture,33984+w)}const ne={[tc]:10497,[Zn]:33071,[nc]:33648},le={[ln]:9728,[Tu]:9984,[Eu]:9986,[On]:9729,[mm]:9985,[ka]:9987};function K(L,w,J){if(J?(s.texParameteri(L,10242,ne[w.wrapS]),s.texParameteri(L,10243,ne[w.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,ne[w.wrapR]),s.texParameteri(L,10240,le[w.magFilter]),s.texParameteri(L,10241,le[w.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(w.wrapS!==Zn||w.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,P(w.magFilter)),s.texParameteri(L,10241,P(w.minFilter)),w.minFilter!==ln&&w.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.type===ur&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===ao&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(L,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Te(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",U));const re=w.source;let se=p.get(re);se===void 0&&(se={},p.set(re,se));const he=B(w);if(he!==L.__cacheKey){se[he]===void 0&&(se[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,J=!0),se[he].usedTimes++;const Re=se[L.__cacheKey];Re!==void 0&&(se[L.__cacheKey].usedTimes--,Re.usedTimes===0&&I(w)),L.__cacheKey=he,L.__webglTexture=se[he].texture}return J}function pe(L,w,J){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const se=Te(L,w),he=w.source;t.bindTexture(re,L.__webglTexture,33984+J);const Re=n.get(he);if(he.version!==Re.__version||se===!0){t.activeTexture(33984+J),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const D=b(w)&&v(w.image)===!1;let H=x(w.image,D,!1,u);H=ze(w,H);const de=v(H)||o,me=r.convert(w.format,w.encoding);let xe=r.convert(w.type),Le=y(w.internalFormat,me,xe,w.encoding,w.isVideoTexture);K(re,w,de);let Pe;const He=w.mipmaps,We=o&&w.isVideoTexture!==!0,Je=Re.__version===void 0||se===!0,R=S(w,H,de);if(w.isDepthTexture)Le=6402,o?w.type===ur?Le=36012:w.type===cr?Le=33190:w.type===hs?Le=35056:Le=33189:w.type===ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===dr&&Le===6402&&w.type!==Af&&w.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=cr,xe=r.convert(w.type)),w.format===Ms&&Le===6402&&(Le=34041,w.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=hs,xe=r.convert(w.type))),Je&&(We?t.texStorage2D(3553,1,Le,H.width,H.height):t.texImage2D(3553,0,Le,H.width,H.height,0,me,xe,null));else if(w.isDataTexture)if(He.length>0&&de){We&&Je&&t.texStorage2D(3553,R,Le,He[0].width,He[0].height);for(let ee=0,ae=He.length;ee<ae;ee++)Pe=He[ee],We?t.texSubImage2D(3553,ee,0,0,Pe.width,Pe.height,me,xe,Pe.data):t.texImage2D(3553,ee,Le,Pe.width,Pe.height,0,me,xe,Pe.data);w.generateMipmaps=!1}else We?(Je&&t.texStorage2D(3553,R,Le,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,me,xe,H.data)):t.texImage2D(3553,0,Le,H.width,H.height,0,me,xe,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&Je&&t.texStorage3D(35866,R,Le,He[0].width,He[0].height,H.depth);for(let ee=0,ae=He.length;ee<ae;ee++)Pe=He[ee],w.format!==$n?me!==null?We?t.compressedTexSubImage3D(35866,ee,0,0,0,Pe.width,Pe.height,H.depth,me,Pe.data,0,0):t.compressedTexImage3D(35866,ee,Le,Pe.width,Pe.height,H.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(35866,ee,0,0,0,Pe.width,Pe.height,H.depth,me,xe,Pe.data):t.texImage3D(35866,ee,Le,Pe.width,Pe.height,H.depth,0,me,xe,Pe.data)}else{We&&Je&&t.texStorage2D(3553,R,Le,He[0].width,He[0].height);for(let ee=0,ae=He.length;ee<ae;ee++)Pe=He[ee],w.format!==$n?me!==null?We?t.compressedTexSubImage2D(3553,ee,0,0,Pe.width,Pe.height,me,Pe.data):t.compressedTexImage2D(3553,ee,Le,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,ee,0,0,Pe.width,Pe.height,me,xe,Pe.data):t.texImage2D(3553,ee,Le,Pe.width,Pe.height,0,me,xe,Pe.data)}else if(w.isDataArrayTexture)We?(Je&&t.texStorage3D(35866,R,Le,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,me,xe,H.data)):t.texImage3D(35866,0,Le,H.width,H.height,H.depth,0,me,xe,H.data);else if(w.isData3DTexture)We?(Je&&t.texStorage3D(32879,R,Le,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,me,xe,H.data)):t.texImage3D(32879,0,Le,H.width,H.height,H.depth,0,me,xe,H.data);else if(w.isFramebufferTexture){if(Je)if(We)t.texStorage2D(3553,R,Le,H.width,H.height);else{let ee=H.width,ae=H.height;for(let _e=0;_e<R;_e++)t.texImage2D(3553,_e,Le,ee,ae,0,me,xe,null),ee>>=1,ae>>=1}}else if(He.length>0&&de){We&&Je&&t.texStorage2D(3553,R,Le,He[0].width,He[0].height);for(let ee=0,ae=He.length;ee<ae;ee++)Pe=He[ee],We?t.texSubImage2D(3553,ee,0,0,me,xe,Pe):t.texImage2D(3553,ee,Le,me,xe,Pe);w.generateMipmaps=!1}else We?(Je&&t.texStorage2D(3553,R,Le,H.width,H.height),t.texSubImage2D(3553,0,0,0,me,xe,H)):t.texImage2D(3553,0,Le,me,xe,H);T(w,de)&&E(re),Re.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ee(L,w,J){if(w.image.length!==6)return;const re=Te(L,w),se=w.source;t.bindTexture(34067,L.__webglTexture,33984+J);const he=n.get(se);if(se.version!==he.__version||re===!0){t.activeTexture(33984+J),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,H=[];for(let ee=0;ee<6;ee++)!Re&&!D?H[ee]=x(w.image[ee],!1,!0,l):H[ee]=D?w.image[ee].image:w.image[ee],H[ee]=ze(w,H[ee]);const de=H[0],me=v(de)||o,xe=r.convert(w.format,w.encoding),Le=r.convert(w.type),Pe=y(w.internalFormat,xe,Le,w.encoding),He=o&&w.isVideoTexture!==!0,We=he.__version===void 0||re===!0;let Je=S(w,de,me);K(34067,w,me);let R;if(Re){He&&We&&t.texStorage2D(34067,Je,Pe,de.width,de.height);for(let ee=0;ee<6;ee++){R=H[ee].mipmaps;for(let ae=0;ae<R.length;ae++){const _e=R[ae];w.format!==$n?xe!==null?He?t.compressedTexSubImage2D(34069+ee,ae,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(34069+ee,ae,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+ee,ae,0,0,_e.width,_e.height,xe,Le,_e.data):t.texImage2D(34069+ee,ae,Pe,_e.width,_e.height,0,xe,Le,_e.data)}}}else{R=w.mipmaps,He&&We&&(R.length>0&&Je++,t.texStorage2D(34067,Je,Pe,H[0].width,H[0].height));for(let ee=0;ee<6;ee++)if(D){He?t.texSubImage2D(34069+ee,0,0,0,H[ee].width,H[ee].height,xe,Le,H[ee].data):t.texImage2D(34069+ee,0,Pe,H[ee].width,H[ee].height,0,xe,Le,H[ee].data);for(let ae=0;ae<R.length;ae++){const we=R[ae].image[ee].image;He?t.texSubImage2D(34069+ee,ae+1,0,0,we.width,we.height,xe,Le,we.data):t.texImage2D(34069+ee,ae+1,Pe,we.width,we.height,0,xe,Le,we.data)}}else{He?t.texSubImage2D(34069+ee,0,0,0,xe,Le,H[ee]):t.texImage2D(34069+ee,0,Pe,xe,Le,H[ee]);for(let ae=0;ae<R.length;ae++){const _e=R[ae];He?t.texSubImage2D(34069+ee,ae+1,0,0,xe,Le,_e.image[ee]):t.texImage2D(34069+ee,ae+1,Pe,xe,Le,_e.image[ee])}}}T(w,me)&&E(34067),he.__version=se.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,J,re,se){const he=r.convert(J.format,J.encoding),Re=r.convert(J.type),D=y(J.internalFormat,he,Re,J.encoding);n.get(w).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,D,w.width,w.height,w.depth,0,he,Re,null):t.texImage2D(se,0,D,w.width,w.height,0,he,Re,null)),t.bindFramebuffer(36160,L),De(w)?f.framebufferTexture2DMultisampleEXT(36160,re,se,n.get(J).__webglTexture,0,Ce(w)):(se===3553||se>=34069&&se<=34074)&&s.framebufferTexture2D(36160,re,se,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(L,w,J){if(s.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(J||De(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===ur?re=36012:se.type===cr&&(re=33190));const he=Ce(w);De(w)?f.renderbufferStorageMultisampleEXT(36161,he,re,w.width,w.height):s.renderbufferStorageMultisample(36161,he,re,w.width,w.height)}else s.renderbufferStorage(36161,re,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){const re=Ce(w);J&&De(w)===!1?s.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):De(w)?f.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<re.length;se++){const he=re[se],Re=r.convert(he.format,he.encoding),D=r.convert(he.type),H=y(he.internalFormat,Re,D,he.encoding),de=Ce(w);J&&De(w)===!1?s.renderbufferStorageMultisample(36161,de,H,w.width,w.height):De(w)?f.renderbufferStorageMultisampleEXT(36161,de,H,w.width,w.height):s.renderbufferStorage(36161,H,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function te(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),C(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,se=Ce(w);if(w.depthTexture.format===dr)De(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,se):s.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===Ms)De(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,se):s.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Z(L){const w=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");te(w.__webglFramebuffer,L)}else if(J){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=s.createRenderbuffer(),Oe(w.__webglDepthbuffer[re],L,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Oe(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function oe(L,w,J){const re=n.get(L);w!==void 0&&fe(re.__webglFramebuffer,L,L.texture,36064,3553),J!==void 0&&Z(L)}function ge(L){const w=L.texture,J=n.get(L),re=n.get(w);L.addEventListener("dispose",j),L.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=w.version,a.memory.textures++);const se=L.isWebGLCubeRenderTarget===!0,he=L.isWebGLMultipleRenderTargets===!0,Re=v(L)||o;if(se){J.__webglFramebuffer=[];for(let D=0;D<6;D++)J.__webglFramebuffer[D]=s.createFramebuffer()}else{if(J.__webglFramebuffer=s.createFramebuffer(),he)if(i.drawBuffers){const D=L.texture;for(let H=0,de=D.length;H<de;H++){const me=n.get(D[H]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&De(L)===!1){const D=he?w:[w];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let H=0;H<D.length;H++){const de=D[H];J.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(36161,J.__webglColorRenderbuffer[H]);const me=r.convert(de.format,de.encoding),xe=r.convert(de.type),Le=y(de.internalFormat,me,xe,de.encoding,L.isXRRenderTarget===!0),Pe=Ce(L);s.renderbufferStorageMultisample(36161,Pe,Le,L.width,L.height),s.framebufferRenderbuffer(36160,36064+H,36161,J.__webglColorRenderbuffer[H])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,re.__webglTexture),K(34067,w,Re);for(let D=0;D<6;D++)fe(J.__webglFramebuffer[D],L,w,36064,34069+D);T(w,Re)&&E(34067),t.unbindTexture()}else if(he){const D=L.texture;for(let H=0,de=D.length;H<de;H++){const me=D[H],xe=n.get(me);t.bindTexture(3553,xe.__webglTexture),K(3553,me,Re),fe(J.__webglFramebuffer,L,me,36064+H,3553),T(me,Re)&&E(3553)}t.unbindTexture()}else{let D=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?D=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,re.__webglTexture),K(D,w,Re),fe(J.__webglFramebuffer,L,w,36064,D),T(w,Re)&&E(D),t.unbindTexture()}L.depthBuffer&&Z(L)}function ce(L){const w=v(L)||o,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let re=0,se=J.length;re<se;re++){const he=J[re];if(T(he,w)){const Re=L.isWebGLCubeRenderTarget?34067:3553,D=n.get(he).__webglTexture;t.bindTexture(Re,D),E(Re),t.unbindTexture()}}}function G(L){if(o&&L.samples>0&&De(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,re=L.height;let se=16384;const he=[],Re=L.stencilBuffer?33306:36096,D=n.get(L),H=L.isWebGLMultipleRenderTargets===!0;if(H)for(let de=0;de<w.length;de++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let de=0;de<w.length;de++){he.push(36064+de),L.depthBuffer&&he.push(Re);const me=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(me===!1&&(L.depthBuffer&&(se|=256),L.stencilBuffer&&(se|=1024)),H&&s.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[de]),me===!0&&(s.invalidateFramebuffer(36008,[Re]),s.invalidateFramebuffer(36009,[Re])),H){const xe=n.get(w[de]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,xe,0)}s.blitFramebuffer(0,0,J,re,0,0,J,re,se,9728),d&&s.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let de=0;de<w.length;de++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,D.__webglColorRenderbuffer[de]);const me=n.get(w[de]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,me,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function Ce(L){return Math.min(h,L.samples)}function De(L){const w=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tt(L){const w=a.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function ze(L,w){const J=L.encoding,re=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ic||J!==wr&&(J===pt?o===!1?e.has("EXT_sRGB")===!0&&re===$n?(L.format=ic,L.minFilter=On,L.generateMipmaps=!1):w=Df.sRGBToLinear(w):(re!==$n||se!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),w}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=C,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=ie,this.rebindTextures=oe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=De}function Ev(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Sr)return 5121;if(r===vm)return 32819;if(r===ym)return 32820;if(r===gm)return 5120;if(r===_m)return 5122;if(r===Af)return 5123;if(r===xm)return 5124;if(r===cr)return 5125;if(r===ur)return 5126;if(r===ao)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bm)return 6406;if(r===$n)return 6408;if(r===Sm)return 6409;if(r===wm)return 6410;if(r===dr)return 6402;if(r===Ms)return 34041;if(r===Mm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ic)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Tm)return 6403;if(r===Em)return 36244;if(r===Cm)return 33319;if(r===Am)return 33320;if(r===Pm)return 36249;if(r===Ja||r===Ka||r===Qa||r===el)if(a===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cu||r===Au||r===Pu||r===Lu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Au)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Du||r===Ru)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Du)return a===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ru)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Iu||r===Ou||r===Fu||r===zu||r===Nu||r===ku||r===Uu||r===Bu||r===Gu||r===Vu||r===Hu||r===Wu||r===qu||r===Xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Iu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ou)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ku)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xu)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Yu)return a===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===hs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Cv extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bi extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Av={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(l,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pv extends hn{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:dr,u!==dr&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===dr&&(n=cr),n===void 0&&u===Ms&&(n=hs),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1}}class Lv extends Ir{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=null,l=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],M=[],x=new Set,v=new Map,b=new cn;b.layers.enable(1),b.viewport=new dt;const T=new cn;T.layers.enable(2),T.viewport=new dt;const E=[b,T],y=new Cv;y.layers.enable(1),y.layers.enable(2);let S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=_[O];return X===void 0&&(X=new Pl,_[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=_[O];return X===void 0&&(X=new Pl,_[O]=X),X.getGripSpace()},this.getHand=function(O){let X=_[O];return X===void 0&&(X=new Pl,_[O]=X),X.getHandSpace()};function U(O){const X=M.indexOf(O.inputSource);if(X===-1)return;const ie=_[X];ie!==void 0&&ie.dispatchEvent({type:O.type,data:O.inputSource})}function j(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",W);for(let O=0;O<_.length;O++){const X=M[O];X!==null&&(M[O]=null,_[O].disconnect(X))}S=null,P=null,e.setRenderTarget(m),f=null,h=null,u=null,i=null,p=null,C.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",j),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),p=new Tr(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Sr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let X=null,ie=null,ne=null;g.depth&&(ne=g.stencil?35056:33190,X=g.stencil?Ms:dr,ie=g.stencil?hs:cr);const le={colorFormat:32856,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(le),i.updateRenderState({layers:[h]}),p=new Tr(h.textureWidth,h.textureHeight,{format:$n,type:Sr,depthTexture:new Pv(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const K=e.properties.get(p);K.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(o),C.setContext(i),C.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(O){for(let X=0;X<O.removed.length;X++){const ie=O.removed[X],ne=M.indexOf(ie);ne>=0&&(M[ne]=null,_[ne].disconnect(ie))}for(let X=0;X<O.added.length;X++){const ie=O.added[X];let ne=M.indexOf(ie);if(ne===-1){for(let K=0;K<_.length;K++)if(K>=M.length){M.push(ie),ne=K;break}else if(M[K]===null){M[K]=ie,ne=K;break}if(ne===-1)break}const le=_[ne];le&&le.connect(ie)}}const I=new z,N=new z;function Y(O,X,ie){I.setFromMatrixPosition(X.matrixWorld),N.setFromMatrixPosition(ie.matrixWorld);const ne=I.distanceTo(N),le=X.projectionMatrix.elements,K=ie.projectionMatrix.elements,Te=le[14]/(le[10]-1),pe=le[14]/(le[10]+1),Ee=(le[9]+1)/le[5],fe=(le[9]-1)/le[5],Oe=(le[8]-1)/le[0],te=(K[8]+1)/K[0],Z=Te*Oe,oe=Te*te,ge=ne/(-Oe+te),ce=ge*-Oe;X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ce),O.translateZ(ge),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const G=Te+ge,Ce=pe+ge,De=Z-ce,tt=oe+(ne-ce),ze=Ee*pe/Ce*G,L=fe*pe/Ce*G;O.projectionMatrix.makePerspective(De,tt,ze,L,G,Ce)}function q(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;y.near=T.near=b.near=O.near,y.far=T.far=b.far=O.far,(S!==y.near||P!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,P=y.far);const X=O.parent,ie=y.cameras;q(y,X);for(let le=0;le<ie.length;le++)q(ie[le],X);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),O.matrix.copy(y.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const ne=O.children;for(let le=0,K=ne.length;le<K;le++)ne[le].updateMatrixWorld(!0);ie.length===2?Y(y,b,T):y.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){h!==null&&(h.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.getPlanes=function(){return x};let F=null;function B(O,X){if(l=X.getViewerPose(c||a),d=X,l!==null){const ie=l.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ne=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let le=0;le<ie.length;le++){const K=ie[le];let Te=null;if(f!==null)Te=f.getViewport(K);else{const Ee=u.getViewSubImage(h,K);Te=Ee.viewport,le===0&&(e.setRenderTargetTextures(p,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(p))}let pe=E[le];pe===void 0&&(pe=new cn,pe.layers.enable(le),pe.viewport=new dt,E[le]=pe),pe.matrix.fromArray(K.transform.matrix),pe.projectionMatrix.fromArray(K.projectionMatrix),pe.viewport.set(Te.x,Te.y,Te.width,Te.height),le===0&&y.matrix.copy(pe.matrix),ne===!0&&y.cameras.push(pe)}}for(let ie=0;ie<_.length;ie++){const ne=M[ie],le=_[ie];ne!==null&&le!==void 0&&le.update(ne,X,c||a)}if(F&&F(O,X),X.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let ie=null;for(const ne of x)X.detectedPlanes.has(ne)||(ie===null&&(ie=[]),ie.push(ne));if(ie!==null)for(const ne of ie)x.delete(ne),v.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of X.detectedPlanes)if(!x.has(ne))x.add(ne),v.set(ne,X.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const le=v.get(ne);ne.lastChangedTime>le&&(v.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}d=null}const C=new Bf;C.setAnimationLoop(B),this.setAnimationLoop=function(O){F=O},this.dispose=function(){}}}function Dv(s,e){function t(m,p){p.color.getRGB(m.fogColor.value,Nf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Rv(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));const b=x.program;n.updateUBOMapping(M,b);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function u(M){const x=h();M.__bindingPointIndex=x;const v=s.createBuffer(),b=M.__size,T=M.usage;return s.bindBuffer(35345,v),s.bufferData(35345,b,T),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,v),v}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],v=M.uniforms,b=M.__cache;s.bindBuffer(35345,x);for(let T=0,E=v.length;T<E;T++){const y=v[T];if(d(y,T,b)===!0){const S=y.value,P=y.__offset;typeof S=="number"?(y.__data[0]=S,s.bufferSubData(35345,P,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):S.toArray(y.__data),s.bufferSubData(35345,P,y.__data))}}s.bindBuffer(35345,null)}function d(M,x,v){const b=M.value;if(v[x]===void 0)return typeof b=="number"?v[x]=b:v[x]=b.clone(),!0;if(typeof b=="number"){if(v[x]!==b)return v[x]=b,!0}else{const T=v[x];if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(M){const x=M.uniforms;let v=0;const b=16;let T=0;for(let E=0,y=x.length;E<y;E++){const S=x[E],P=m(S);if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,E>0){T=v%b;const U=b-T;T!==0&&U-P.boundary<0&&(v+=b-T,S.__offset=v)}v+=P.storage}return T=v%b,T>0&&(v+=b-T),M.__size=v,M.__cache={},this}function m(M){const x=M.value,v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(M){const x=M.target;x.removeEventListener("dispose",p);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:_}}function Iv(){const s=co("canvas");return s.style.display="block",s}function Gc(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Iv(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wr,this.physicallyCorrectLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const m=this;let p=!1,_=0,M=0,x=null,v=-1,b=null;const T=new dt,E=new dt;let y=null,S=e.width,P=e.height,U=1,j=null,W=null;const I=new dt(0,0,S,P),N=new dt(0,0,S,P);let Y=!1;const q=new Uc;let F=!1,B=!1,C=null;const O=new St,X=new ue,ie=new z,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return x===null?U:1}let K=t;function Te(A,k){for(let $=0;$<A.length;$++){const V=A[$],Q=e.getContext(V,k);if(Q!==null)return Q}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",He,!1),K===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),K=Te(k,A),K===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pe,Ee,fe,Oe,te,Z,oe,ge,ce,G,Ce,De,tt,ze,L,w,J,re,se,he,Re,D,H,de;function me(){pe=new W0(K),Ee=new k0(K,pe,s),pe.init(Ee),D=new Ev(K,pe,Ee),fe=new wv(K,pe,Ee),Oe=new Y0,te=new uv,Z=new Tv(K,pe,fe,te,Ee,D,Oe),oe=new B0(m),ge=new H0(m),ce=new ng(K,Ee),H=new z0(K,pe,ce,Ee),G=new q0(K,ce,Oe,H),Ce=new J0(K,G,ce,Oe),se=new $0(K,Ee,Z),w=new U0(te),De=new cv(m,oe,ge,pe,Ee,H,w),tt=new Dv(m,te),ze=new fv,L=new xv(pe,Ee),re=new F0(m,oe,ge,fe,Ce,u,a),J=new Sv(m,Ce,Ee),de=new Rv(K,Oe,Ee,fe),he=new N0(K,pe,Oe,Ee),Re=new X0(K,pe,Oe,Ee),Oe.programs=De.programs,m.capabilities=Ee,m.extensions=pe,m.properties=te,m.renderLists=ze,m.shadowMap=J,m.state=fe,m.info=Oe}me();const xe=new Lv(m,K);this.xr=xe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(S,P,!1))},this.getSize=function(A){return A.set(S,P)},this.setSize=function(A,k,$){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=A,P=k,e.width=Math.floor(A*U),e.height=Math.floor(k*U),$!==!1&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(S*U,P*U).floor()},this.setDrawingBufferSize=function(A,k,$){S=A,P=k,U=$,e.width=Math.floor(A*$),e.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,k,$,V){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,k,$,V),fe.viewport(T.copy(I).multiplyScalar(U).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,k,$,V){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,k,$,V),fe.scissor(E.copy(N).multiplyScalar(U).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(A){fe.setScissorTest(Y=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,k=!0,$=!0){let V=0;A&&(V|=16384),k&&(V|=256),$&&(V|=1024),K.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",He,!1),ze.dispose(),L.dispose(),te.dispose(),oe.dispose(),ge.dispose(),Ce.dispose(),H.dispose(),de.dispose(),De.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",_e),xe.removeEventListener("sessionend",we),C&&(C.dispose(),C=null),je.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Oe.autoReset,k=J.enabled,$=J.autoUpdate,V=J.needsUpdate,Q=J.type;me(),Oe.autoReset=A,J.enabled=k,J.autoUpdate=$,J.needsUpdate=V,J.type=Q}function He(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function We(A){const k=A.target;k.removeEventListener("dispose",We),Je(k)}function Je(A){R(A),te.remove(A)}function R(A){const k=te.get(A).programs;k!==void 0&&(k.forEach(function($){De.releaseProgram($)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,V,Q,be){k===null&&(k=ne);const Me=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=nt(A,k,$,V,Q);fe.setMaterial(V,Me);let Ie=$.index,Ge=1;V.wireframe===!0&&(Ie=G.getWireframeAttribute($),Ge=2);const Ve=$.drawRange,Be=$.attributes.position;let Ze=Ve.start*Ge,at=(Ve.start+Ve.count)*Ge;be!==null&&(Ze=Math.max(Ze,be.start*Ge),at=Math.min(at,(be.start+be.count)*Ge)),Ie!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Ie.count)):Be!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Be.count));const Nt=at-Ze;if(Nt<0||Nt===1/0)return;H.setup(Q,V,ke,$,Ie);let Ln,Ke=he;if(Ie!==null&&(Ln=ce.get(Ie),Ke=Re,Ke.setIndex(Ln)),Q.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*le()),Ke.setMode(1)):Ke.setMode(4);else if(Q.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),fe.setLineWidth(Fe*le()),Q.isLineSegments?Ke.setMode(1):Q.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else Q.isPoints?Ke.setMode(0):Q.isSprite&&Ke.setMode(4);if(Q.isInstancedMesh)Ke.renderInstances(Ze,Nt,Q.count);else if($.isInstancedBufferGeometry){const Fe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,on=Math.min($.instanceCount,Fe);Ke.renderInstances(Ze,Nt,on)}else Ke.render(Ze,Nt)},this.compile=function(A,k){function $(V,Q,be){V.transparent===!0&&V.side===ki?(V.side=Bn,V.needsUpdate=!0,rt(V,Q,be),V.side=vs,V.needsUpdate=!0,rt(V,Q,be),V.side=ki):rt(V,Q,be)}f=L.get(A),f.init(),g.push(f),A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(m.physicallyCorrectLights),A.traverse(function(V){const Q=V.material;if(Q)if(Array.isArray(Q))for(let be=0;be<Q.length;be++){const Me=Q[be];$(Me,A,V)}else $(Q,A,V)}),g.pop(),f=null};let ee=null;function ae(A){ee&&ee(A)}function _e(){je.stop()}function we(){je.start()}const je=new Bf;je.setAnimationLoop(ae),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){ee=A,xe.setAnimationLoop(A),A===null?je.stop():je.start()},xe.addEventListener("sessionstart",_e),xe.addEventListener("sessionend",we),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(k),k=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,k,x),f=L.get(A,g.length),f.init(),g.push(f),O.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(O),B=this.localClippingEnabled,F=w.init(this.clippingPlanes,B,k),h=ze.get(A,d.length),h.init(),d.push(h),ht(A,k,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(j,W),F===!0&&w.beginShadows();const $=f.state.shadowsArray;if(J.render($,A,k),F===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(h,A),f.setupLights(m.physicallyCorrectLights),k.isArrayCamera){const V=k.cameras;for(let Q=0,be=V.length;Q<be;Q++){const Me=V[Q];ut(h,A,Me,Me.viewport)}}else ut(h,A,k);x!==null&&(Z.updateMultisampleRenderTarget(x),Z.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(m,A,k),H.resetDefaultState(),v=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function ht(A,k,$,V){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){V&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(O);const Me=Ce.update(A),ke=A.material;ke.visible&&h.push(A,Me,ke,$,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Oe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Oe.render.frame),!A.frustumCulled||q.intersectsObject(A))){V&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(O);const Me=Ce.update(A),ke=A.material;if(Array.isArray(ke)){const Ie=Me.groups;for(let Ge=0,Ve=Ie.length;Ge<Ve;Ge++){const Be=Ie[Ge],Ze=ke[Be.materialIndex];Ze&&Ze.visible&&h.push(A,Me,Ze,$,ie.z,Be)}}else ke.visible&&h.push(A,Me,ke,$,ie.z,null)}}const be=A.children;for(let Me=0,ke=be.length;Me<ke;Me++)ht(be[Me],k,$,V)}function ut(A,k,$,V){const Q=A.opaque,be=A.transmissive,Me=A.transparent;f.setupLightsView($),be.length>0&&Ne(Q,k,$),V&&fe.viewport(T.copy(V)),Q.length>0&&ye(Q,k,$),be.length>0&&ye(be,k,$),Me.length>0&&ye(Me,k,$),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ne(A,k,$){const V=Ee.isWebGL2;C===null&&(C=new Tr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?ao:Sr,minFilter:ka,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(X),V?C.setSize(X.x,X.y):C.setSize(rc(X.x),rc(X.y));const Q=m.getRenderTarget();m.setRenderTarget(C),m.clear();const be=m.toneMapping;m.toneMapping=wi,ye(A,k,$),m.toneMapping=be,Z.updateMultisampleRenderTarget(C),Z.updateRenderTargetMipmap(C),m.setRenderTarget(Q)}function ye(A,k,$){const V=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,be=A.length;Q<be;Q++){const Me=A[Q],ke=Me.object,Ie=Me.geometry,Ge=V===null?Me.material:V,Ve=Me.group;ke.layers.test($.layers)&&qe(ke,k,$,Ie,Ge,Ve)}}function qe(A,k,$,V,Q,be){A.onBeforeRender(m,k,$,V,Q,be),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(m,k,$,V,A,be),Q.transparent===!0&&Q.side===ki?(Q.side=Bn,Q.needsUpdate=!0,m.renderBufferDirect($,k,V,Q,A,be),Q.side=vs,Q.needsUpdate=!0,m.renderBufferDirect($,k,V,Q,A,be),Q.side=ki):m.renderBufferDirect($,k,V,Q,A,be),A.onAfterRender(m,k,$,V,Q,be)}function rt(A,k,$){k.isScene!==!0&&(k=ne);const V=te.get(A),Q=f.state.lights,be=f.state.shadowsArray,Me=Q.state.version,ke=De.getParameters(A,Q.state,be,k,$),Ie=De.getProgramCacheKey(ke);let Ge=V.programs;V.environment=A.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(A.isMeshStandardMaterial?ge:oe).get(A.envMap||V.environment),Ge===void 0&&(A.addEventListener("dispose",We),Ge=new Map,V.programs=Ge);let Ve=Ge.get(Ie);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===Me)return Se(A,ke),Ve}else ke.uniforms=De.getUniforms(A),A.onBuild($,ke,m),A.onBeforeCompile(ke,m),Ve=De.acquireProgram(ke,Ie),Ge.set(Ie,Ve),V.uniforms=ke.uniforms;const Be=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=w.uniform),Se(A,ke),V.needsLights=Xe(A),V.lightsStateVersion=Me,V.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.directionalShadowMap.value=Q.state.directionalShadowMap,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotShadowMap.value=Q.state.spotShadowMap,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMap.value=Q.state.pointShadowMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Ze=Ve.getUniforms(),at=ua.seqWithValue(Ze.seq,Be);return V.currentProgram=Ve,V.uniformsList=at,Ve}function Se(A,k){const $=te.get(A);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function nt(A,k,$,V,Q){k.isScene!==!0&&(k=ne),Z.resetTextureUnits();const be=k.fog,Me=V.isMeshStandardMaterial?k.environment:null,ke=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:wr,Ie=(V.isMeshStandardMaterial?ge:oe).get(V.envMap||Me),Ge=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!V.normalMap&&!!$.attributes.tangent,Be=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,at=!!$.morphAttributes.color,Nt=V.toneMapped?m.toneMapping:wi,Ln=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=Ln!==void 0?Ln.length:0,Fe=te.get(V),on=f.state.lights;if(F===!0&&(B===!0||A!==b)){const _n=A===b&&V.id===v;w.setState(V,A,_n)}let vt=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==on.state.version||Fe.outputEncoding!==ke||Q.isInstancedMesh&&Fe.instancing===!1||!Q.isInstancedMesh&&Fe.instancing===!0||Q.isSkinnedMesh&&Fe.skinning===!1||!Q.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ie||V.fog===!0&&Fe.fog!==be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==w.numPlanes||Fe.numIntersection!==w.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==Ve||Fe.morphTargets!==Be||Fe.morphNormals!==Ze||Fe.morphColors!==at||Fe.toneMapping!==Nt||Ee.isWebGL2===!0&&Fe.morphTargetsCount!==Ke)&&(vt=!0):(vt=!0,Fe.__version=V.version);let Qn=Fe.currentProgram;vt===!0&&(Qn=rt(V,k,Q));let Pi=!1,Gt=!1,ui=!1;const wt=Qn.getUniforms(),gn=Fe.uniforms;if(fe.useProgram(Qn.program)&&(Pi=!0,Gt=!0,ui=!0),V.id!==v&&(v=V.id,Gt=!0),Pi||b!==A){if(wt.setValue(K,"projectionMatrix",A.projectionMatrix),Ee.logarithmicDepthBuffer&&wt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,Gt=!0,ui=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const _n=wt.map.cameraPosition;_n!==void 0&&_n.setValue(K,ie.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&wt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||Q.isSkinnedMesh)&&wt.setValue(K,"viewMatrix",A.matrixWorldInverse)}if(Q.isSkinnedMesh){wt.setOptional(K,Q,"bindMatrix"),wt.setOptional(K,Q,"bindMatrixInverse");const _n=Q.skeleton;_n&&(Ee.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),wt.setValue(K,"boneTexture",_n.boneTexture,Z),wt.setValue(K,"boneTextureSize",_n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Za=$.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0&&Ee.isWebGL2===!0)&&se.update(Q,$,V,Qn),(Gt||Fe.receiveShadow!==Q.receiveShadow)&&(Fe.receiveShadow=Q.receiveShadow,wt.setValue(K,"receiveShadow",Q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gn.envMap.value=Ie,gn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Gt&&(wt.setValue(K,"toneMappingExposure",m.toneMappingExposure),Fe.needsLights&&Ue(gn,ui),be&&V.fog===!0&&tt.refreshFogUniforms(gn,be),tt.refreshMaterialUniforms(gn,V,U,P,C),ua.upload(K,Fe.uniformsList,gn,Z)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ua.upload(K,Fe.uniformsList,gn,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&wt.setValue(K,"center",Q.center),wt.setValue(K,"modelViewMatrix",Q.modelViewMatrix),wt.setValue(K,"normalMatrix",Q.normalMatrix),wt.setValue(K,"modelMatrix",Q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const _n=V.uniformsGroups;for(let $a=0,Np=_n.length;$a<Np;$a++)if(Ee.isWebGL2){const _u=_n[$a];de.update(_u,Qn),de.bind(_u,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function Ue(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Xe(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,k,$){te.get(A.texture).__webglTexture=k,te.get(A.depthTexture).__webglTexture=$;const V=te.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=$===void 0,V.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const $=te.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){x=A,_=k,M=$;let V=!0,Q=null,be=!1,Me=!1;if(A){const Ie=te.get(A);Ie.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),V=!1):Ie.__webglFramebuffer===void 0?Z.setupRenderTarget(A):Ie.__hasExternalTextures&&Z.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Ve=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Q=Ve[k],be=!0):Ee.isWebGL2&&A.samples>0&&Z.useMultisampledRTT(A)===!1?Q=te.get(A).__webglMultisampledFramebuffer:Q=Ve,T.copy(A.viewport),E.copy(A.scissor),y=A.scissorTest}else T.copy(I).multiplyScalar(U).floor(),E.copy(N).multiplyScalar(U).floor(),y=Y;if(fe.bindFramebuffer(36160,Q)&&Ee.drawBuffers&&V&&fe.drawBuffers(A,Q),fe.viewport(T),fe.scissor(E),fe.setScissorTest(y),be){const Ie=te.get(A.texture);K.framebufferTexture2D(36160,36064,34069+k,Ie.__webglTexture,$)}else if(Me){const Ie=te.get(A.texture),Ge=k||0;K.framebufferTextureLayer(36160,36064,Ie.__webglTexture,$||0,Ge)}v=-1},this.readRenderTargetPixels=function(A,k,$,V,Q,be,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(ke=ke[Me]),ke){fe.bindFramebuffer(36160,ke);try{const Ie=A.texture,Ge=Ie.format,Ve=Ie.type;if(Ge!==$n&&D.convert(Ge)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ve===ao&&(pe.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Ve!==Sr&&D.convert(Ve)!==K.getParameter(35738)&&!(Ve===ur&&(Ee.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-V&&$>=0&&$<=A.height-Q&&K.readPixels(k,$,V,Q,D.convert(Ge),D.convert(Ve),be)}finally{const Ie=x!==null?te.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(A,k,$=0){const V=Math.pow(2,-$),Q=Math.floor(k.image.width*V),be=Math.floor(k.image.height*V);Z.setTexture2D(k,0),K.copyTexSubImage2D(3553,$,0,0,A.x,A.y,Q,be),fe.unbindTexture()},this.copyTextureToTexture=function(A,k,$,V=0){const Q=k.image.width,be=k.image.height,Me=D.convert($.format),ke=D.convert($.type);Z.setTexture2D($,0),K.pixelStorei(37440,$.flipY),K.pixelStorei(37441,$.premultiplyAlpha),K.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?K.texSubImage2D(3553,V,A.x,A.y,Q,be,Me,ke,k.image.data):k.isCompressedTexture?K.compressedTexSubImage2D(3553,V,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):K.texSubImage2D(3553,V,A.x,A.y,Me,ke,k.image),V===0&&$.generateMipmaps&&K.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(A,k,$,V,Q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,Ie=D.convert(V.format),Ge=D.convert(V.type);let Ve;if(V.isData3DTexture)Z.setTexture3D(V,0),Ve=32879;else if(V.isDataArrayTexture)Z.setTexture2DArray(V,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,V.flipY),K.pixelStorei(37441,V.premultiplyAlpha),K.pixelStorei(3317,V.unpackAlignment);const Be=K.getParameter(3314),Ze=K.getParameter(32878),at=K.getParameter(3316),Nt=K.getParameter(3315),Ln=K.getParameter(32877),Ke=$.isCompressedTexture?$.mipmaps[0]:$.image;K.pixelStorei(3314,Ke.width),K.pixelStorei(32878,Ke.height),K.pixelStorei(3316,A.min.x),K.pixelStorei(3315,A.min.y),K.pixelStorei(32877,A.min.z),$.isDataTexture||$.isData3DTexture?K.texSubImage3D(Ve,Q,k.x,k.y,k.z,be,Me,ke,Ie,Ge,Ke.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ve,Q,k.x,k.y,k.z,be,Me,ke,Ie,Ke.data)):K.texSubImage3D(Ve,Q,k.x,k.y,k.z,be,Me,ke,Ie,Ge,Ke),K.pixelStorei(3314,Be),K.pixelStorei(32878,Ze),K.pixelStorei(3316,at),K.pixelStorei(3315,Nt),K.pixelStorei(32877,Ln),Q===0&&V.generateMipmaps&&K.generateMipmap(Ve),fe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,fe.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ov extends Gc{}Ov.prototype.isWebGL1Renderer=!0;class Vc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new Vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Xf extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ue:new z);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,i=[],r=[],a=[],o=new z,c=new St;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new z)}r[0]=new z,a[0]=new z;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Wt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends ci{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new ue,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fv extends Hc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Yo=new z,Ll=new Wc,Dl=new Wc,Rl=new Wc;class zv extends ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Yo.subVectors(i[0],i[1]).add(i[0]),l=Yo);const h=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Ll.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,m,p),Dl.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,m,p),Rl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Dl.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Rl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Ll.calc(c),Dl.calc(c),Rl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lh(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Nv(s,e){const t=1-s;return t*t*e}function kv(s,e){return 2*(1-s)*s*e}function Uv(s,e){return s*s*e}function Ys(s,e,t,n){return Nv(s,e)+kv(s,t)+Uv(s,n)}function Bv(s,e){const t=1-s;return t*t*t*e}function Gv(s,e){const t=1-s;return 3*t*t*s*e}function Vv(s,e){return 3*(1-s)*s*s*e}function Hv(s,e){return s*s*s*e}function js(s,e,t,n,i){return Bv(s,e)+Gv(s,t)+Vv(s,n)+Hv(s,i)}class Yf extends ci{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(e,i.x,r.x,a.x,o.x),js(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wv extends ci{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(e,i.x,r.x,a.x,o.x),js(e,i.y,r.y,a.y,o.y),js(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qc extends ci{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ue;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qv extends ci{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jf extends ci{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,i.x,r.x,a.x),Ys(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xv extends ci{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,i.x,r.x,a.x),Ys(e,i.y,r.y,a.y),Ys(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Lh(o,c.x,l.x,u.x,h.x),Lh(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var $f=Object.freeze({__proto__:null,ArcCurve:Fv,CatmullRomCurve3:zv,CubicBezierCurve:Yf,CubicBezierCurve3:Wv,EllipseCurve:Hc,LineCurve:qc,LineCurve3:qv,QuadraticBezierCurve:jf,QuadraticBezierCurve3:Xv,SplineCurve:Zf});class Yv extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new qc(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new $f[i.type]().fromJSON(i))}return this}}class oc extends Yv{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qc(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new jf(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Yf(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Hc(e,t,n,i,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xc extends Ai{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Gn(r,3)),this.setAttribute("normal",new Gn(r.slice(),3)),this.setAttribute("uv",new Gn(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new z,v=new z,b=new z;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],v),d(t[T+2],b),c(x,v,b,M)}function c(M,x,v,b){const T=b+1,E=[];for(let y=0;y<=T;y++){E[y]=[];const S=M.clone().lerp(v,y/T),P=x.clone().lerp(v,y/T),U=T-y;for(let j=0;j<=U;j++)j===0&&y===T?E[y][j]=S:E[y][j]=S.clone().lerp(P,j/U)}for(let y=0;y<T;y++)for(let S=0;S<2*(T-y)-1;S++){const P=Math.floor(S/2);S%2===0?(f(E[y][P+1]),f(E[y+1][P]),f(E[y][P])):(f(E[y][P+1]),f(E[y+1][P+1]),f(E[y+1][P]))}}function l(M){const x=new z;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const M=new z;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=p(M)/2/Math.PI+.5,b=_(M)/Math.PI+.5;a.push(v,1-b)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){const x=a[M+0],v=a[M+2],b=a[M+4],T=Math.max(x,v,b),E=Math.min(x,v,b);T>.9&&E<.1&&(x<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){const v=M*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const M=new z,x=new z,v=new z,b=new z,T=new ue,E=new ue,y=new ue;for(let S=0,P=0;S<r.length;S+=9,P+=6){M.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[P+0],a[P+1]),E.set(a[P+2],a[P+3]),y.set(a[P+4],a[P+5]),b.copy(M).add(x).add(v).divideScalar(3);const U=p(b);m(T,P+0,M,U),m(E,P+2,x,U),m(y,P+4,v,U)}}function m(M,x,v,b){b<0&&M.x===1&&(a[x]=M.x-1),v.x===0&&v.z===0&&(a[x]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function _(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}static fromJSON(e){return new Xc(e.vertices,e.indices,e.radius,e.details)}}class Zs extends oc{constructor(e){super(e),this.uuid=Ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new oc().fromJSON(i))}return this}}const jv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Jf(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,d;if(n&&(r=Qv(s,e,r,t)),s.length>80*t){o=l=s[0],c=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return uo(r,a,t,o,c,d,0),a}};function Jf(s,e,t,n,i){let r,a;if(i===uy(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Dh(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Dh(r,s[r],s[r+1],a);return a&&Ga(a,a.next)&&(fo(a),a=a.next),a}function Ar(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ga(t,t.next)||_t(t.prev,t,t.next)===0)){if(fo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function uo(s,e,t,n,i,r,a){if(!s)return;!a&&r&&ry(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?$v(s,n,i,r):Zv(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),fo(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Jv(Ar(s),e,t),uo(s,e,t,n,i,r,2)):a===2&&Kv(s,e,t,n,i,r):uo(Ar(s),e,t,n,i,r,1);break}}}function Zv(s){const e=s.prev,t=s,n=s.next;if(_t(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=i<r?i<a?i:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ss(i,o,r,c,a,l,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $v(s,e,t,n){const i=s.prev,r=s,a=s.next;if(_t(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,u=i.y,h=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,m=o>c?o>l?o:l:c>l?c:l,p=u>h?u>f?u:f:h>f?h:f,_=ac(d,g,e,t,n),M=ac(m,p,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=_&&v&&v.z<=M;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&ss(o,u,c,h,l,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=p&&v!==i&&v!==a&&ss(o,u,c,h,l,f,v.x,v.y)&&_t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&ss(o,u,c,h,l,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=p&&v!==i&&v!==a&&ss(o,u,c,h,l,f,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Jv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ga(i,r)&&Kf(i,n,n.next,r)&&ho(i,r)&&ho(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),fo(n),fo(n.next),n=s=r),n=n.next}while(n!==s);return Ar(n)}function Kv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ay(a,o)){let c=Qf(a,o);a=Ar(a,a.next),c=Ar(c,c.next),uo(a,e,t,n,i,r,0),uo(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Qv(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Jf(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(oy(l));for(i.sort(ey),r=0;r<i.length;r++)t=ty(i[r],t);return t}function ey(s,e){return s.x-e.x}function ty(s,e){const t=ny(s,e);if(!t)return e;const n=Qf(t,s);return Ar(n,n.next),Ar(t,t.next)}function ny(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ss(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),ho(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&iy(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function iy(s,e){return _t(s.prev,s,e.prev)<0&&_t(e.next,s,s.next)<0}function ry(s,e,t,n){let i=s;do i.z===0&&(i.z=ac(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sy(i)}function sy(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function ac(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function oy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ss(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ay(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ly(s,e)&&(ho(s,e)&&ho(e,s)&&cy(s,e)&&(_t(s.prev,s,e.prev)||_t(s,e.prev,e))||Ga(s,e)&&_t(s.prev,s,s.next)>0&&_t(e.prev,e,e.next)>0)}function _t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ga(s,e){return s.x===e.x&&s.y===e.y}function Kf(s,e,t,n){const i=Zo(_t(s,e,t)),r=Zo(_t(s,e,n)),a=Zo(_t(t,n,s)),o=Zo(_t(t,n,e));return!!(i!==r&&a!==o||i===0&&jo(s,t,e)||r===0&&jo(s,n,e)||a===0&&jo(t,s,n)||o===0&&jo(t,e,n))}function jo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Zo(s){return s>0?1:s<0?-1:0}function ly(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Kf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ho(s,e){return _t(s.prev,s,s.next)<0?_t(s,e,s.next)>=0&&_t(s,s.prev,e)>=0:_t(s,e,s.prev)<0||_t(s,s.next,e)<0}function cy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Qf(s,e){const t=new lc(s.i,s.x,s.y),n=new lc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dh(s,e,t,n){const i=new lc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function lc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class fs{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return fs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Rh(e),Ih(n,e);let a=e.length;t.forEach(Rh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Ih(n,t[c]);const o=jv.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Rh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ih(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Va extends Ai{constructor(e=new Zs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Gn(i,3)),this.setAttribute("uv",new Gn(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:hy;let x,v=!1,b,T,E,y;_&&(x=_.getSpacedPoints(u),v=!0,f=!1,b=_.computeFrenetFrames(u,!1),T=new z,E=new z,y=new z),f||(p=0,d=0,g=0,m=0);const S=o.extractPoints(l);let P=S.shape;const U=S.holes;if(!fs.isClockWise(P)){P=P.reverse();for(let te=0,Z=U.length;te<Z;te++){const oe=U[te];fs.isClockWise(oe)&&(U[te]=oe.reverse())}}const W=fs.triangulateShape(P,U),I=P;for(let te=0,Z=U.length;te<Z;te++){const oe=U[te];P=P.concat(oe)}function N(te,Z,oe){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(oe).add(te)}const Y=P.length,q=W.length;function F(te,Z,oe){let ge,ce,G;const Ce=te.x-Z.x,De=te.y-Z.y,tt=oe.x-te.x,ze=oe.y-te.y,L=Ce*Ce+De*De,w=Ce*ze-De*tt;if(Math.abs(w)>Number.EPSILON){const J=Math.sqrt(L),re=Math.sqrt(tt*tt+ze*ze),se=Z.x-De/J,he=Z.y+Ce/J,Re=oe.x-ze/re,D=oe.y+tt/re,H=((Re-se)*ze-(D-he)*tt)/(Ce*ze-De*tt);ge=se+Ce*H-te.x,ce=he+De*H-te.y;const de=ge*ge+ce*ce;if(de<=2)return new ue(ge,ce);G=Math.sqrt(de/2)}else{let J=!1;Ce>Number.EPSILON?tt>Number.EPSILON&&(J=!0):Ce<-Number.EPSILON?tt<-Number.EPSILON&&(J=!0):Math.sign(De)===Math.sign(ze)&&(J=!0),J?(ge=-De,ce=Ce,G=Math.sqrt(L)):(ge=Ce,ce=De,G=Math.sqrt(L/2))}return new ue(ge/G,ce/G)}const B=[];for(let te=0,Z=I.length,oe=Z-1,ge=te+1;te<Z;te++,oe++,ge++)oe===Z&&(oe=0),ge===Z&&(ge=0),B[te]=F(I[te],I[oe],I[ge]);const C=[];let O,X=B.concat();for(let te=0,Z=U.length;te<Z;te++){const oe=U[te];O=[];for(let ge=0,ce=oe.length,G=ce-1,Ce=ge+1;ge<ce;ge++,G++,Ce++)G===ce&&(G=0),Ce===ce&&(Ce=0),O[ge]=F(oe[ge],oe[G],oe[Ce]);C.push(O),X=X.concat(O)}for(let te=0;te<p;te++){const Z=te/p,oe=d*Math.cos(Z*Math.PI/2),ge=g*Math.sin(Z*Math.PI/2)+m;for(let ce=0,G=I.length;ce<G;ce++){const Ce=N(I[ce],B[ce],ge);Te(Ce.x,Ce.y,-oe)}for(let ce=0,G=U.length;ce<G;ce++){const Ce=U[ce];O=C[ce];for(let De=0,tt=Ce.length;De<tt;De++){const ze=N(Ce[De],O[De],ge);Te(ze.x,ze.y,-oe)}}}const ie=g+m;for(let te=0;te<Y;te++){const Z=f?N(P[te],X[te],ie):P[te];v?(E.copy(b.normals[0]).multiplyScalar(Z.x),T.copy(b.binormals[0]).multiplyScalar(Z.y),y.copy(x[0]).add(E).add(T),Te(y.x,y.y,y.z)):Te(Z.x,Z.y,0)}for(let te=1;te<=u;te++)for(let Z=0;Z<Y;Z++){const oe=f?N(P[Z],X[Z],ie):P[Z];v?(E.copy(b.normals[te]).multiplyScalar(oe.x),T.copy(b.binormals[te]).multiplyScalar(oe.y),y.copy(x[te]).add(E).add(T),Te(y.x,y.y,y.z)):Te(oe.x,oe.y,h/u*te)}for(let te=p-1;te>=0;te--){const Z=te/p,oe=d*Math.cos(Z*Math.PI/2),ge=g*Math.sin(Z*Math.PI/2)+m;for(let ce=0,G=I.length;ce<G;ce++){const Ce=N(I[ce],B[ce],ge);Te(Ce.x,Ce.y,h+oe)}for(let ce=0,G=U.length;ce<G;ce++){const Ce=U[ce];O=C[ce];for(let De=0,tt=Ce.length;De<tt;De++){const ze=N(Ce[De],O[De],ge);v?Te(ze.x,ze.y+x[u-1].y,x[u-1].x+oe):Te(ze.x,ze.y,h+oe)}}}ne(),le();function ne(){const te=i.length/3;if(f){let Z=0,oe=Y*Z;for(let ge=0;ge<q;ge++){const ce=W[ge];pe(ce[2]+oe,ce[1]+oe,ce[0]+oe)}Z=u+p*2,oe=Y*Z;for(let ge=0;ge<q;ge++){const ce=W[ge];pe(ce[0]+oe,ce[1]+oe,ce[2]+oe)}}else{for(let Z=0;Z<q;Z++){const oe=W[Z];pe(oe[2],oe[1],oe[0])}for(let Z=0;Z<q;Z++){const oe=W[Z];pe(oe[0]+Y*u,oe[1]+Y*u,oe[2]+Y*u)}}n.addGroup(te,i.length/3-te,0)}function le(){const te=i.length/3;let Z=0;K(I,Z),Z+=I.length;for(let oe=0,ge=U.length;oe<ge;oe++){const ce=U[oe];K(ce,Z),Z+=ce.length}n.addGroup(te,i.length/3-te,1)}function K(te,Z){let oe=te.length;for(;--oe>=0;){const ge=oe;let ce=oe-1;ce<0&&(ce=te.length-1);for(let G=0,Ce=u+p*2;G<Ce;G++){const De=Y*G,tt=Y*(G+1),ze=Z+ge+De,L=Z+ce+De,w=Z+ce+tt,J=Z+ge+tt;Ee(ze,L,w,J)}}}function Te(te,Z,oe){c.push(te),c.push(Z),c.push(oe)}function pe(te,Z,oe){fe(te),fe(Z),fe(oe);const ge=i.length/3,ce=M.generateTopUV(n,i,ge-3,ge-2,ge-1);Oe(ce[0]),Oe(ce[1]),Oe(ce[2])}function Ee(te,Z,oe,ge){fe(te),fe(Z),fe(ge),fe(Z),fe(oe),fe(ge);const ce=i.length/3,G=M.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);Oe(G[0]),Oe(G[1]),Oe(G[3]),Oe(G[1]),Oe(G[2]),Oe(G[3])}function fe(te){i.push(c[te*3+0]),i.push(c[te*3+1]),i.push(c[te*3+2])}function Oe(te){r.push(te.x),r.push(te.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $f[i.type]().fromJSON(i)),new Va(n,e.options)}}const hy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ue(r,a),new ue(o,c),new ue(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],m=e[r*3],p=e[r*3+1],_=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ue(a,1-c),new ue(l,1-h),new ue(f,1-g),new ue(m,1-_)]:[new ue(o,1-c),new ue(u,1-h),new ue(d,1-g),new ue(p,1-_)]}};function fy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ma extends Xc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ma(e.radius,e.detail)}}class Oh extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dy extends Or{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cc extends Or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Sa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class py{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const my=new py;class Ha{constructor(e){this.manager=e!==void 0?e:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const gi={};class gy extends Error{constructor(e,t){super(e),this.response=t}}class _y extends Ha{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Sa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:i});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=gi[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{m+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let T=0,E=u.length;T<E;T++){const y=u[T];y.onProgress&&y.onProgress(b)}_.enqueue(v),M()}})}}});return new Response(p)}else throw new gy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Sa.add(e,l);const u=gi[e];delete gi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=gi[e];if(u===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xy extends Ha{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Sa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=co("img");function c(){u(),Sa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ed extends Ha{constructor(e){super(e)}load(e,t,n,i){const r=new hn,a=new xy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class td extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Il=new St,Fh=new z,zh=new z;class nd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nh=new St,zs=new z,Ol=new z;class vy extends nd{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(zs),Ol.copy(n.position),Ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ol),n.updateMatrixWorld(),i.makeTranslation(-zs.x,-zs.y,-zs.z),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class yy extends td{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class by extends nd{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class id extends td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DefaultUp),this.updateMatrix(),this.target=new Yt,this.shadow=new by}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kh(){return(typeof performance>"u"?Date:performance).now()}class sd{constructor(e,t,n=0,i=1/0){this.ray=new Of(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return uc(e,this,n,t),n.sort(Uh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)uc(e[i],this,n,t);return n.sort(Uh),n}}function Uh(s,e){return s.distance-e.distance}function uc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)uc(i[r],e,t,!0)}}class Bh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class My{constructor(){this.type="ShapePath",this.color=new et,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new oc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const M=[];for(let x=0,v=_.length;x<v;x++){const b=_[x],T=new Zs;T.curves=b.curves,M.push(T)}return M}function n(_,M){const x=M.length;let v=!1;for(let b=x-1,T=0;T<x;b=T++){let E=M[b],y=M[T],S=y.x-E.x,P=y.y-E.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(E=M[T],S=-S,y=M[b],P=-P),_.y<E.y||_.y>y.y)continue;if(_.y===E.y){if(_.x===E.x)return!0}else{const U=P*(_.x-E.x)-S*(_.y-E.y);if(U===0)return!0;if(U<0)continue;v=!v}}else{if(_.y!==E.y)continue;if(y.x<=_.x&&_.x<=E.x||E.x<=_.x&&_.x<=y.x)return!0}}return v}const i=fs.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new Zs,c.curves=o.curves,l.push(c),l;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,m;f[g]=void 0,d[g]=[];for(let _=0,M=r.length;_<M;_++)o=r[_],m=o.getPoints(),a=i(m),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Zs,p:m},f[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:m[0]});if(!f[0])return t(r);if(f.length>1){let _=!1,M=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const b=d[x];for(let T=0;T<b.length;T++){const E=b[T];let y=!0;for(let S=0;S<f.length;S++)n(E.p,f[S].p)&&(x!==S&&M++,y?(y=!1,h[S].push(E)):_=!0);y&&h[x].push(E)}}M>0&&_===!1&&(d=h)}let p;for(let _=0,M=f.length;_<M;_++){c=f[_].s,l.push(c),p=d[_];for(let x=0,v=p.length;x<v;x++)c.holes.push(p[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const Gh={type:"change"},Fl={type:"start"},Vh={type:"end"};class od extends Ir{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ze),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gh),n.update(),r=i.NONE},this.update=function(){const D=new z,H=new Er().setFromUnitVectors(e.up,new z(0,1,0)),de=H.clone().invert(),me=new z,xe=new Er,Le=2*Math.PI;return function(){const He=n.object.position;D.copy(He).sub(n.target),D.applyQuaternion(H),o.setFromVector3(D),n.autoRotate&&r===i.NONE&&S(E()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let We=n.minAzimuthAngle,Je=n.maxAzimuthAngle;return isFinite(We)&&isFinite(Je)&&(We<-Math.PI?We+=Le:We>Math.PI&&(We-=Le),Je<-Math.PI?Je+=Le:Je>Math.PI&&(Je-=Le),We<=Je?o.theta=Math.max(We,Math.min(Je,o.theta)):o.theta=o.theta>(We+Je)/2?Math.max(We,o.theta):Math.min(Je,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(o),D.applyQuaternion(de),He.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||me.distanceToSquared(n.object.position)>a||8*(1-xe.dot(n.object.quaternion))>a?(n.dispatchEvent(Gh),me.copy(n.object.position),xe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",ce),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ze)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Bh,c=new Bh;let l=1;const u=new z;let h=!1;const f=new ue,d=new ue,g=new ue,m=new ue,p=new ue,_=new ue,M=new ue,x=new ue,v=new ue,b=[],T={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function S(D){c.theta-=D}function P(D){c.phi-=D}const U=function(){const D=new z;return function(de,me){D.setFromMatrixColumn(me,0),D.multiplyScalar(-de),u.add(D)}}(),j=function(){const D=new z;return function(de,me){n.screenSpacePanning===!0?D.setFromMatrixColumn(me,1):(D.setFromMatrixColumn(me,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(de),u.add(D)}}(),W=function(){const D=new z;return function(de,me){const xe=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;D.copy(Le).sub(n.target);let Pe=D.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),U(2*de*Pe/xe.clientHeight,n.object.matrix),j(2*me*Pe/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(de*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),j(me*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(D){f.set(D.clientX,D.clientY)}function q(D){M.set(D.clientX,D.clientY)}function F(D){m.set(D.clientX,D.clientY)}function B(D){d.set(D.clientX,D.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;S(2*Math.PI*g.x/H.clientHeight),P(2*Math.PI*g.y/H.clientHeight),f.copy(d),n.update()}function C(D){x.set(D.clientX,D.clientY),v.subVectors(x,M),v.y>0?I(y()):v.y<0&&N(y()),M.copy(x),n.update()}function O(D){p.set(D.clientX,D.clientY),_.subVectors(p,m).multiplyScalar(n.panSpeed),W(_.x,_.y),m.copy(p),n.update()}function X(D){D.deltaY<0?N(y()):D.deltaY>0&&I(y()),n.update()}function ie(D){let H=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),H=!0;break}H&&(D.preventDefault(),n.update())}function ne(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),H=.5*(b[0].pageY+b[1].pageY);f.set(D,H)}}function le(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),H=.5*(b[0].pageY+b[1].pageY);m.set(D,H)}}function K(){const D=b[0].pageX-b[1].pageX,H=b[0].pageY-b[1].pageY,de=Math.sqrt(D*D+H*H);M.set(0,de)}function Te(){n.enableZoom&&K(),n.enablePan&&le()}function pe(){n.enableZoom&&K(),n.enableRotate&&ne()}function Ee(D){if(b.length==1)d.set(D.pageX,D.pageY);else{const de=Re(D),me=.5*(D.pageX+de.x),xe=.5*(D.pageY+de.y);d.set(me,xe)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;S(2*Math.PI*g.x/H.clientHeight),P(2*Math.PI*g.y/H.clientHeight),f.copy(d)}function fe(D){if(b.length===1)p.set(D.pageX,D.pageY);else{const H=Re(D),de=.5*(D.pageX+H.x),me=.5*(D.pageY+H.y);p.set(de,me)}_.subVectors(p,m).multiplyScalar(n.panSpeed),W(_.x,_.y),m.copy(p)}function Oe(D){const H=Re(D),de=D.pageX-H.x,me=D.pageY-H.y,xe=Math.sqrt(de*de+me*me);x.set(0,xe),v.set(0,Math.pow(x.y/M.y,n.zoomSpeed)),I(v.y),M.copy(x)}function te(D){n.enableZoom&&Oe(D),n.enablePan&&fe(D)}function Z(D){n.enableZoom&&Oe(D),n.enableRotate&&Ee(D)}function oe(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",ge),n.domElement.addEventListener("pointerup",ce)),re(D),D.pointerType==="touch"?L(D):Ce(D))}function ge(D){n.enabled!==!1&&(D.pointerType==="touch"?w(D):De(D))}function ce(D){se(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",ce)),n.dispatchEvent(Vh),r=i.NONE}function G(D){se(D)}function Ce(D){let H;switch(D.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case zr.DOLLY:if(n.enableZoom===!1)return;q(D),r=i.DOLLY;break;case zr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;F(D),r=i.PAN}else{if(n.enableRotate===!1)return;Y(D),r=i.ROTATE}break;case zr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;Y(D),r=i.ROTATE}else{if(n.enablePan===!1)return;F(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fl)}function De(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;B(D);break;case i.DOLLY:if(n.enableZoom===!1)return;C(D);break;case i.PAN:if(n.enablePan===!1)return;O(D);break}}function tt(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(Fl),X(D),n.dispatchEvent(Vh))}function ze(D){n.enabled===!1||n.enablePan===!1||ie(D)}function L(D){switch(he(D),b.length){case 1:switch(n.touches.ONE){case Nr.ROTATE:if(n.enableRotate===!1)return;ne(),r=i.TOUCH_ROTATE;break;case Nr.PAN:if(n.enablePan===!1)return;le(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),r=i.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fl)}function w(D){switch(he(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(D),n.update();break;default:r=i.NONE}}function J(D){n.enabled!==!1&&D.preventDefault()}function re(D){b.push(D)}function se(D){delete T[D.pointerId];for(let H=0;H<b.length;H++)if(b[H].pointerId==D.pointerId){b.splice(H,1);return}}function he(D){let H=T[D.pointerId];H===void 0&&(H=new ue,T[D.pointerId]=H),H.set(D.pageX,D.pageY)}function Re(D){const H=D.pointerId===b[0].pointerId?b[1]:b[0];return T[H.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",tt,{passive:!1}),this.update()}}function _i(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ad(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ws={duration:.5,overwrite:!1,delay:0},Yc,jt,yt,Nn=1e8,ct=1/Nn,hc=Math.PI*2,Sy=hc/4,wy=0,ld=Math.sqrt,Ty=Math.cos,Ey=Math.sin,zt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},Ei=function(e){return typeof e=="number"},jc=function(e){return typeof e>"u"},li=function(e){return typeof e=="object"},fn=function(e){return e!==!1},Zc=function(){return typeof window<"u"},$o=function(e){return bt(e)||zt(e)},cd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,fc=/(?:-?\.?\d|\.)+/gi,ud=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hd=/[+-]=-?[.\d]+/,fd=/[^,'"\[\]\s]+/gi,Cy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,In,dc,$c,Pn={},wa={},dd,pd=function(e){return(wa=Pr(e,Pn))&&mn},Jc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ta=function(e,t){return!t&&console.warn(e)},md=function(e,t){return e&&(Pn[e]=t)&&wa&&(wa[e]=t)||Pn},po=function(){return 0},Ay={suppressEvents:!0,isStart:!0,kill:!1},ha={suppressEvents:!0,kill:!1},Py={suppressEvents:!0},Kc={},qi=[],pc={},gd,wn={},Nl={},Hh=30,fa=[],Qc="",eu=function(e){var t=e[0],n,i;if(li(t)||bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fa.length;i--&&!fa[i].targetTest(t););n=fa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bd(e[i],n)))||e.splice(i,1);return e},gr=function(e){return e._gsap||eu(kn(e))[0]._gsap},_d=function(e,t,n){return(n=e[t])&&bt(n)?e[t]():jc(n)&&e.getAttribute&&e.getAttribute(t)||n},dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ly=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ea=function(){var e=qi.length,t=qi.slice(0),n,i;for(pc={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xd=function(e,t,n,i){qi.length&&!jt&&Ea(),e.render(t,n,i||jt&&t<0&&(e._initted||e._startAt)),qi.length&&!jt&&Ea()},vd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fd).length<2?t:zt(e)?e.trim():e},yd=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Pr=function(e,t){for(var n in t)e[n]=t[n];return e},Wh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=li(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ca=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$s=function(e){var t=e.parent||gt,n=e.keyframes?Dy(Zt(e.keyframes)):Hn;if(fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ry=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Wa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Iy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mc=function(e,t,n,i){return e._startAt&&(jt?e._startAt.revert(ha):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Oy=function s(e){return!e||e._ts&&s(e.parent)},qh=function(e){return e._repeat?Ts(e._tTime,e=e.duration()+e._rDelay)*e:0},Ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Aa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qa=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qa(e),n._dirty||_r(n,e)),e},Md=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Aa(e.rawTime(),t),(!t._dur||To(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),_r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},ii=function(e,t,n,i){return t.parent&&ji(t),t._start=Ut((Ei(n)?n:n||e!==gt?Rn(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bd(e,t,"_first","_last",e._sort?"_start":0),gc(t)||(e._recent=t),i||Md(e,t),e._ts<0&&Xa(e,e._tTime),e},Sd=function(e,t){return(Pn.ScrollTrigger||Jc("scrollTrigger",t))&&Pn.ScrollTrigger.create(t,e)},wd=function(e,t,n,i,r){if(nu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gd!==Tn.frame)return qi.push(e),e._lazy=[r,i],1},Fy=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},gc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zy=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Fy(e)&&!(!e._initted&&gc(e))||(e._ts<0||e._dp._ts<0)&&!gc(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=To(0,e._tDur,t),u=Ts(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ts(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||jt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&wd(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&mc(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ji(e,1),!n&&!jt&&(Un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ny=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Es=function(e,t,n,i){var r=e._repeat,a=Ut(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ut(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Xa(e,e._tTime=e._tDur*o),e.parent&&qa(e),n||_r(e.parent,e),e},Xh=function(e){return e instanceof un?_r(e):Es(e,e._dur)},ky={_start:0,endTime:po,totalDuration:po},Rn=function s(e,t,n){var i=e.labels,r=e._recent||ky,a=e.duration()>=Nn?r.endTime(!1):e._dur,o,c,l;return zt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Zt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Js=function(e,t,n){var i=Ei(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=fn(c.vars.inherit)&&c.parent;a.immediateRender=fn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ct(t[0],a,t[r+1])},Ji=function(e,t){return e||e===0?t(e):t},To=function(e,t,n){return n<e?e:n>t?t:n},qt=function(e,t){return!zt(e)||!(t=Cy.exec(e))?"":t[1]},Uy=function(e,t,n){return Ji(n,function(i){return To(e,t,i)})},_c=[].slice,Td=function(e,t){return e&&li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&li(e[0]))&&!e.nodeType&&e!==In},By=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return zt(i)&&!t||Td(i,1)?(r=n).push.apply(r,kn(i)):n.push(i)})||n},kn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):zt(e)&&!n&&(dc||!Cs())?_c.call((t||$c).querySelectorAll(e),0):Zt(e)?By(e,n):Td(e)?_c.call(e,0):e?[e]:[]},xc=function(e){return e=kn(e)[0]||Ta("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return kn(t,n.querySelectorAll?n:n===e?Ta("Invalid scope")||$c.createElement("div"):e)}},Ed=function(e){return e.sort(function(){return .5-Math.random()})},Cd=function(e){if(bt(e))return e;var t=li(e)?e:{each:e},n=xr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return zt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,d,g){var m=(g||t).length,p=a[m],_,M,x,v,b,T,E,y,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,Nn])[1],!S){for(E=-Nn;E<(E=g[S++].getBoundingClientRect().left)&&S<m;);S--}for(p=a[m]=[],_=c?Math.min(S,m)*u-.5:i%S,M=S===Nn?0:c?m*h/S-.5:i/S|0,E=0,y=Nn,T=0;T<m;T++)x=T%S-_,v=M-(T/S|0),p[T]=b=l?Math.abs(l==="y"?v:x):ld(x*x+v*v),b>E&&(E=b),b<y&&(y=b);i==="random"&&Ed(p),p.max=E-y,p.min=y,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:l?l==="y"?m/S:S:Math.max(S,m/S))||0)*(i==="edges"?-1:1),p.b=m<0?r-m:r,p.u=qt(t.amount||t.each)||0,n=n&&m<0?Nd(n):n}return m=(p[f]-p.min)/p.max||0,Ut(p.b+(n?n(m):m)*p.v)+p.u}},vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ei(n)?0:qt(n))}},Ad=function(e,t){var n=Zt(e),i,r;return!n&&li(e)&&(i=n=e.radius||Nn,e.values?(e=kn(e.values),(r=!Ei(e[0]))&&(i*=i)):e=vc(e.increment)),Ji(t,n?bt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Nn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||Ei(a)?u:u+qt(a)}:vc(e))},Pd=function(e,t,n,i){return Ji(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Gy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Vy=function(e,t){return function(n){return e(parseFloat(n))+(t||qt(n))}},Hy=function(e,t,n){return Dd(e,t,0,1,n)},Ld=function(e,t,n){return Ji(n,function(i){return e[~~t(i)]})},Wy=function s(e,t,n){var i=t-e;return Zt(e)?Ld(e,s(0,e.length),t):Ji(n,function(r){return(i+(r-e)%i)%i+e})},qy=function s(e,t,n){var i=t-e,r=i*2;return Zt(e)?Ld(e,s(0,e.length-1),t):Ji(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},mo=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?fd:fc),n+=e.substr(t,i-t)+Pd(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Dd=function(e,t,n,i,r){var a=t-e,o=i-n;return Ji(r,function(c){return n+((c-e)/a*o||0)})},Xy=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=zt(e),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(g){g*=h;var m=Math.min(f,~~g);return u[m](g-m)},n=t}else i||(e=Pr(Zt(e)?[]:{},e));if(!u){for(c in t)tu.call(o,e,c,"get",t[c]);r=function(g){return su(g,o)||(a?e.p:e)}}}return Ji(n,r)},Yh=function(e,t,n){var i=e.labels,r=Nn,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},Un=function(e,t,n){var i=e.vars,r=i[t],a=yt,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&qi.length&&Ea(),o&&(yt=o),u=c?r.apply(l,c):r.call(l),yt=a,u},Vs=function(e){return ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&Un(e,"onInterrupt"),e},as,Rd=[],Id=function(e){if(Zc()&&e){e=!e.name&&e.default||e;var t=e.name,n=bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:po,render:su,add:tu,kill:lb,modifier:ab,rawVars:0},a={targetTest:0,get:0,getSetter:ru,aliases:{},register:0};if(Cs(),e!==i){if(wn[t])return;Hn(i,Hn(Ca(e,r),a)),Pr(i.prototype,Pr(r,Ca(e,a))),wn[i.prop=t]=i,e.targetTest&&(fa.push(i),Kc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}md(t,i),e.register&&e.register(mn,i,pn)}else e&&Rd.push(e)},lt=255,Hs={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},kl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Od=function(e,t,n){var i=e?Ei(e)?[e>>16,e>>8&lt,e&lt]:0:Hs.black,r,a,o,c,l,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])i=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(fc),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=kl(c+1/3,r,a),i[1]=kl(c,r,a),i[2]=kl(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(ud),n&&i.length<4&&(i[3]=1),i}else i=e.match(fc)||Hs.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/lt,a=i[1]/lt,o=i[2]/lt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fd=function(e){var t=[],n=[],i=-1;return e.split(Xi).forEach(function(r){var a=r.match(os)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},jh=function(e,t,n){var i="",r=(e+i).match(Xi),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Od(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fd(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Xi,"1").split(os),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Xi),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},Xi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Yy=/hsl[a]?\(/,zd=function(e){var t=e.join(" "),n;if(Xi.lastIndex=0,Xi.test(t))return n=Yy.test(t),e[1]=jh(e[1],n),e[0]=jh(e[0],n,Fd(e[1])),!0},go,Tn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,f,d,g=function m(p){var _=s()-i,M=p===!0,x,v,b,T;if(_>e&&(n+=_-t),i+=_,b=i-n,x=b-a,(x>0||M)&&(T=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,a+=x+(x>=r?4:r-x),v=1),M||(c=l(m)),v)for(d=0;d<o.length;d++)o[d](b,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){dd&&(!dc&&Zc()&&(In=dc=window,$c=In.document||{},Pn.gsap=mn,(In.gsapVersions||(In.gsapVersions=[])).push(mn.version),pd(wa||In.GreenSockGlobals||!In.gsap&&In||{}),u=In.requestAnimationFrame,Rd.forEach(Id)),c&&h.sleep(),l=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},go=1,g(2))},sleep:function(){(u?In.cancelAnimationFrame:clearTimeout)(c),go=0,l=po},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,M){var x=_?function(v,b,T,E){p(v,b,T,E),h.remove(x)}:p;return h.remove(p),o[M?"unshift":"push"](x),Cs(),x},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},h}(),Cs=function(){return!go&&Tn.wake()},ot={},jy=/^[\d.\-M][\d.\-,\s]/,Zy=/["']/g,$y=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(Zy,"").trim():+l,i=c.substr(o+1).trim();return t},Jy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ky=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$y(t[1])]:Jy(e).split(",").map(vd)):ot._CE&&jy.test(e)?ot._CE("",e):n},Nd=function(e){return function(t){return 1-e(1-t)}},kd=function s(e,t){for(var n=e._first,i;n;)n instanceof un?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},xr=function(e,t){return e&&(bt(e)?e:ot[e]||Ky(e))||t},Fr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return dn(e,function(o){ot[o]=Pn[o]=r,ot[a=o.toLowerCase()]=n;for(var c in r)ot[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ot[o+"."+c]=r[c]}),r},Ud=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ul=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/hc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ey((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Ud(o);return r=hc/r,c.config=function(l,u){return s(e,l,u)},c},Bl=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ud(n);return i.config=function(r){return s(e,r)},i};dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Fr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Fr("Elastic",Ul("in"),Ul("out"),Ul());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Fr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Fr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Fr("Circ",function(s){return-(ld(1-s*s)-1)});Fr("Sine",function(s){return s===1?1:-Ty(s*Sy)+1});Fr("Back",Bl("in"),Bl("out"),Bl());ot.SteppedEase=ot.steps=Pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ct;return function(o){return((i*To(0,a,o)|0)+r)*n}}};ws.ease=ot["quad.out"];dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Qc+=s+","+s+"Params,"});var Bd=function(e,t){this.id=wy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_d,this.set=t?t.getSetter:ru},_o=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Es(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),go||Tn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Es(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Cs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Xa(this,n),!r._dp||r.parent||Md(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ts(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Aa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(To(-Math.abs(this._delay),this._tDur,i),!0),qa(this),Iy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ii(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Aa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Py);var i=jt;return jt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Rn(this,n),fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,fn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ct)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=bt(n)?n:yd,o=function(){var l=i.then;i.then=null,bt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Vs(this)},s}();Hn(_o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var un=function(s){ad(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=fn(n.sortChildren),gt&&ii(n.parent||gt,_i(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Sd(_i(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Js(0,arguments,this),this},t.from=function(i,r,a){return Js(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Js(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,$s(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ct(i,r,Rn(this,a),1),this},t.call=function(i,r,a){return ii(this,Ct.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Ct(i,a,Rn(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,$s(a).immediateRender=fn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,$s(o).immediateRender=fn(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,g,m,p,_,M,x,v,b,T,E;if(this!==gt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,x=this._ts,_=!x,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Ut(u%p),u===c?(m=this._repeat,f=l):(m=~~(u/p),m&&m===u/p&&(f=l,m--),f>l&&(f=l)),b=Ts(this._tTime,p),!o&&this._tTime&&b!==m&&this._tTime-b*p-this._dur<=0&&(b=m),T&&m&1&&(f=l-f,E=1),m!==b&&!this._lock){var y=T&&b&1,S=y===(T&&m&1);if(m<b&&(y=!y),o=y?0:u%l?l:u,this._lock=1,this.render(o||(E?0:Ut(m*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,o=y?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;kd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Ny(this,Ut(o),Ut(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!m&&(Un(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-ct);break}}d=g}else{d=this._last;for(var P=i<0?i:f;d;){if(g=d._prev,(d._act||P<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,r,a||jt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=P?-ct:ct);break}}d=g}}if(M&&!r&&(this.pause(),M.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=v,qa(this),this.render(i,r,a);this._onUpdate&&!r&&Un(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(Un(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ei(r)||(r=Rn(this,r,i)),!(i instanceof _o)){if(Zt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(zt(i))return this.addLabel(i,r);if(bt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?ii(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Nn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ct?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return zt(i)?this.removeLabel(i):bt(i)?this.killTweensOf(i):(Wa(this,i),i===this._recent&&(this._recent=this._last),_r(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Rn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Ct.delayedCall(0,r||po,a);return o.data="isPause",this._hasPause=1,ii(this,o,Rn(this,i))},t.removePause=function(i){var r=this._first;for(i=Rn(this,i);r;)r._start===i&&r.data==="isPause"&&ji(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Ui!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=kn(i),c=this._first,l=Ei(r),u;c;)c instanceof Ct?Ly(c._targets,o)&&(l?(!Ui||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Rn(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,g=Ct.to(a,Hn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Es(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Hn({startAt:{time:Rn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Yh(this,Rn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Yh(this,Rn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return _r(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_r(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=Nn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,ii(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Es(a,a===gt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(gt._ts&&(xd(gt,Aa(i,gt)),gd=Tn.frame),Tn.frame>=Hh){Hh+=An.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&An.autoSleep&&Tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Tn.sleep()}}},e}(_o);Hn(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qy=function(e,t,n,i,r,a,o){var c=new pn(this._pt,e,t,0,1,Xd,null,r),l=0,u=0,h,f,d,g,m,p,_,M;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=mo(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(zl)||[];h=zl.exec(i);)g=h[0],m=i.substring(l,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:m||u===1?m:",",s:p,c:g.charAt(1)==="="?ds(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},l=zl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(hd.test(i)||_)&&(c.e=0),this._pt=c,c},tu=function(e,t,n,i,r,a,o,c,l,u){bt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:bt(h)?l?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=bt(h)?l?rb:Wd:iu,g;if(zt(i)&&(~i.indexOf("random(")&&(i=mo(i)),i.charAt(1)==="="&&(g=ds(f,i)+(qt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||yc)return!isNaN(f*i)&&i!==""?(g=new pn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?ob:qd,0,d),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Jc(t,i),Qy.call(this,e,t,f,i,d,c||An.stringFilter,l))},eb=function(e,t,n,i,r){if(bt(e)&&(e=Ks(e,r,t,n,i)),!li(e)||e.style&&e.nodeType||Zt(e)||cd(e))return zt(e)?Ks(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Ks(e[o],r,t,n,i);return a},Gd=function(e,t,n,i,r,a){var o,c,l,u;if(wn[e]&&(o=new wn[e]).init(r,o.rawVars?t[e]:eb(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new pn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==as))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Ui,yc,nu=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,m=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:M,b=e._overwrite==="auto"&&!Yc,T=e.timeline,E,y,S,P,U,j,W,I,N,Y,q,F,B;if(T&&(!g||!r)&&(r="none"),e._ease=xr(r,ws.ease),e._yEase=d?Nd(xr(d===!0?r:d,ws.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(I=M[0]?gr(M[0]).harness:0,F=I&&i[I.prop],E=Ca(i,Kc),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!m?_.render(-1,!0):_.revert(f&&p?ha:Ay),_._lazy=0),a){if(ji(e._startAt=Ct.set(M,Hn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&fn(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!o&&!m)&&e._startAt.revert(ha),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(o=!1),S=Hn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&fn(c),immediateRender:o,stagger:0,parent:x},E),F&&(S[I.prop]=F),ji(e._startAt=Ct.set(M,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(ha):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,c=p&&fn(c)||c&&!p,y=0;y<M.length;y++){if(U=M[y],W=U._gsap||eu(M)[y]._gsap,e._ptLookup[y]=Y={},pc[W.id]&&qi.length&&Ea(),q=v===M?y:v.indexOf(U),I&&(N=new I).init(U,F||E,e,q,v)!==!1&&(e._pt=P=new pn(e._pt,U,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(C){Y[C]=P}),N.priority&&(j=1)),!I||F)for(S in E)wn[S]&&(N=Gd(S,E,e,q,U,v))?N.priority&&(j=1):Y[S]=P=tu.call(e,U,S,"get",E[S],q,v,0,i.stringFilter);e._op&&e._op[y]&&e.kill(U,e._op[y]),b&&e._pt&&(Ui=e,gt.killTweensOf(U,Y,e.globalTime(t)),B=!e.parent,Ui=0),e._pt&&c&&(pc[W.id]=1)}j&&Yd(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!B,g&&t<=0&&T.render(Nn,!0,!0)},tb=function(e,t,n,i,r,a,o){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return yc=1,e.vars[t]="+=0",nu(e,o),yc=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Mt(n)+qt(u.e)),u.b&&(u.b=l.s+qt(u.b))},nb=function(e,t){var n=e[0]?gr(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Pr({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},ib=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Zt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ks=function(e,t,n,i,r){return bt(e)?e.call(t,n,i,r):zt(e)&&~e.indexOf("random(")?mo(e):e},Vd=Qc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hd={};dn(Vd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Hd[s]=1});var Ct=function(s){ad(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:$s(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,m=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,M=i.parent||gt,x=(Zt(n)||cd(n)?Ei(n[0]):"length"in i)?[n]:kn(n),v,b,T,E,y,S,P,U;if(o._targets=x.length?eu(x):Ta("GSAP target "+n+" not found. https://greensock.com",!An.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||$o(l)||$o(u)){if(i=o.vars,v=o.timeline=new un({data:"nested",defaults:m||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=_i(o),v._start=0,f||$o(l)||$o(u)){if(E=x.length,P=f&&Cd(f),li(f))for(y in f)~Vd.indexOf(y)&&(U||(U={}),U[y]=f[y]);for(b=0;b<E;b++)T=Ca(i,Hd),T.stagger=0,_&&(T.yoyoEase=_),U&&Pr(T,U),S=x[b],T.duration=+Ks(l,_i(o),b,S,x),T.delay=(+Ks(u,_i(o),b,S,x)||0)-o._delay,!f&&E===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),v.to(S,T,P?P(b,S,x):0),v._ease=ot.none;v.duration()?l=u=0:o.timeline=0}else if(g){$s(Hn(v.vars.defaults,{ease:"none"})),v._ease=xr(g.ease||i.ease||"none");var j=0,W,I,N;if(Zt(g))g.forEach(function(Y){return v.to(x,Y,">")}),v.duration();else{T={};for(y in g)y==="ease"||y==="easeEach"||ib(y,g[y],T,g.easeEach);for(y in T)for(W=T[y].sort(function(Y,q){return Y.t-q.t}),j=0,b=0;b<W.length;b++)I=W[b],N={ease:I.e,duration:(I.t-(b?W[b-1].t:0))/100*l},N[y]=I.v,v.to(x,N,j),j+=N.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return d===!0&&!Yc&&(Ui=_i(o),gt.killTweensOf(x),Ui=0),ii(M,_i(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!g&&o._start===Ut(M._time)&&fn(h)&&Oy(_i(o))&&M.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),p&&Sd(_i(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-ct&&!u?c:i<ct?0:i,f,d,g,m,p,_,M,x,v;if(!l)zy(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,a);if(f=Ut(h%m),h===c?(g=this._repeat,f=l):(g=~~(h/m),g&&g===h/m&&(f=l,g--),f>l&&(f=l)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=l-f),p=Ts(this._tTime,m),f===o&&!a&&this._initted)return this._tTime=h,this;g!==p&&(x&&this._yEase&&kd(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(Ut(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(wd(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/l),this._from&&(this.ratio=M=1-M),f&&!o&&!r&&!g&&(Un(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:!f&&_?-ct:x._dur*x._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&mc(this,i,r,a),Un(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Un(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&mc(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ji(this,1),!r&&!(u&&!o)&&(h||o||_)&&(Un(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){go||Tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||nu(this,c),l=this._ease(c/this._dur),tb(this,i,r,a,o,l,c)?this.resetTo(i,r,a,o):(Xa(this,0),this.parent||bd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Vs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ui&&Ui.vars.overwrite!==!0)._first||Vs(this),this.parent&&a!==this.timeline.totalDuration()&&Es(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?kn(i):o,l=this._ptLookup,u=this._pt,h,f,d,g,m,p,_;if((!r||r==="all")&&Ry(o,c))return r==="all"&&(this._pt=0),Vs(this);for(h=this._op=this._op||[],r!=="all"&&(zt(r)&&(m={},dn(r,function(M){return m[M]=1}),r=m),r=nb(o,r)),_=o.length;_--;)if(~c.indexOf(o[_])){f=l[_],r==="all"?(h[_]=r,g=f,d={}):(d=h[_]=h[_]||{},g=r);for(m in g)p=f&&f[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&Wa(this,p,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&Vs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Js(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Js(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return gt.killTweensOf(i,r,a)},e}(_o);Hn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dn("staggerTo,staggerFrom,staggerFromTo",function(s){Ct[s]=function(){var e=new un,t=_c.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var iu=function(e,t,n){return e[t]=n},Wd=function(e,t,n){return e[t](n)},rb=function(e,t,n,i){return e[t](i.fp,n)},sb=function(e,t,n){return e.setAttribute(t,n)},ru=function(e,t){return bt(e[t])?Wd:jc(e[t])&&e.setAttribute?sb:iu},qd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ob=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},su=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ab=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},lb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},cb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},pn=function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||qd,this.d=c||this,this.set=l||iu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=cb,this.m=n,this.mt=r,this.tween=i},s}();dn(Qc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Kc[s]=1});Pn.TweenMax=Pn.TweenLite=Ct;Pn.TimelineLite=Pn.TimelineMax=un;gt=new un({sortChildren:!1,defaults:ws,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=zd;var vr=[],da={},ub=[],Zh=0,hb=0,Gl=function(e){return(da[e]||ub).map(function(t){return t()})},bc=function(){var e=Date.now(),t=[];e-Zh>2&&(Gl("matchMediaInit"),vr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=In.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),Gl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Zh=e,Gl("matchMedia"))},jd=function(){function s(t,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hb++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){bt(n)&&(r=i,i=n,n=bt);var a=this,o=function(){var l=yt,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=xc(r)),yt=a,h=i.apply(a,arguments),bt(h)&&a._r.push(h),yt=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===bt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ct&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return a.splice(a.indexOf(l),1)}))}),a.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Ct)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i)for(var o=vr.length;o--;)vr[o].id===this.id&&vr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),fb=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){li(n)||(n={matches:n});var a=new jd(0,r||this.scope),o=a.conditions={},c,l,u;yt&&!a.selector&&(a.selector=yt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=In.matchMedia(n[l]),c&&(vr.indexOf(a)<0&&vr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(bc):c.addEventListener("change",bc)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Pa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Id(i)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){zt(e)&&(e=kn(e)[0]);var r=gr(e||{}).get,a=n?yd:vd;return n==="native"&&(n=""),e&&(t?a((wn[t]&&wn[t].get||r)(e,t,n,i)):function(o,c,l){return a((wn[o]&&wn[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=kn(e),e.length>1){var i=e.map(function(u){return mn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=wn[t],o=gr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;as._pt=0,h.init(e,n?u+n:u,as,0,[e]),h.render(1,h),as._pt&&su(1,as)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=mn.to(e,Pr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xr(e.ease,ws.ease)),Wh(ws,e||{})},config:function(e){return Wh(An,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!wn[o]&&!Pn[o]&&Ta(t+" effect requires "+o+" plugin.")}),Nl[t]=function(o,c,l){return n(kn(o),Hn(c||{},r),l)},a&&(un.prototype[t]=function(o,c,l){return this.add(Nl[t](o,li(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ot[e]=xr(t)},parseEase:function(e,t){return arguments.length?xr(e,t):ot},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new un(e),i,r;for(n.smoothChildTiming=fn(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,i=gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&ii(n,i,i._start-i._delay),i=r;return ii(gt,n,0),n},context:function(e,t){return e?new jd(e,t):yt},matchMedia:function(e){return new fb(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bc()},addEventListener:function(e,t){var n=da[e]||(da[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=da[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Wy,wrapYoyo:qy,distribute:Cd,random:Pd,snap:Ad,normalize:Hy,getUnit:qt,clamp:Uy,splitColor:Od,toArray:kn,selector:xc,mapRange:Dd,pipe:Gy,unitize:Vy,interpolate:Xy,shuffle:Ed},install:pd,effects:Nl,ticker:Tn,updateRoot:un.updateRoot,plugins:wn,globalTimeline:gt,core:{PropTween:pn,globals:md,Tween:Ct,Timeline:un,Animation:_o,getCache:gr,_removeLinkedListItem:Wa,reverting:function(){return jt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return Yc=e}}};dn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Pa[s]=Ct[s]});Tn.add(un.updateRoot);as=Pa.to({},{duration:0});var db=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pb=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=db(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Vl=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(zt(r)&&(c={},dn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}pb(o,r)}}}},mn=Pa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vl("roundProps",vc),Vl("modifiers"),Vl("snap",Ad))||Pa;Ct.version=un.version=mn.version="3.12.2";dd=1;Zc()&&Cs();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $h,Bi,ps,ou,hr,Jh,au,mb=function(){return typeof window<"u"},Ci={},sr=180/Math.PI,ms=Math.PI/180,Kr=Math.atan2,Kh=1e8,lu=/([A-Z])/g,gb=/(left|right|width|margin|padding|x)/i,_b=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$d=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bb=function(e,t,n){return e.style[t]=n},Mb=function(e,t,n){return e.style.setProperty(t,n)},Sb=function(e,t,n){return e._gsap[t]=n},wb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tb=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Eb=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},xt="transform",Kn=xt+"Origin",Cb=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Ci&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=xi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:xi(i,e);else return ri.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(xt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=xt}(r||t)&&this.props.push(e,t,r[e])},Jd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ab=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(lu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=au(),(!r||!r.isStart)&&!n[xt]&&(Jd(n),i.uncache=1)}},Kd=function(e,t){var n={target:e,props:[],revert:Ab,save:Cb};return e._gsap||mn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Qd,Sc=function(e,t){var n=Bi.createElementNS?Bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bi.createElement(e);return n.style?n:Bi.createElement(e)},oi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,As(t)||t,1)||""},Qh="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,n){var i=t||hr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Qh[a]:"")+e},wc=function(){mb()&&window.document&&($h=window,Bi=$h.document,ps=Bi.documentElement,hr=Sc("div")||{style:{}},Sc("div"),xt=As(xt),Kn=xt+"Origin",hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qd=!!As("perspective"),au=mn.core.reverting,ou=1)},Hl=function s(e){var t=Sc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ps.removeChild(t),this.style.cssText=r,a},ef=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ep=function(e){var t;try{t=e.getBBox()}catch{t=Hl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hl||(t=Hl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ef(e,["x","cx","x1"])||0,y:+ef(e,["y","cy","y1"])||0,width:0,height:0}:t},tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ep(e))},xo=function(e,t){if(t){var n=e.style;t in Ci&&t!==Kn&&(t=xt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(lu,"-$1").toLowerCase())):n.removeAttribute(t)}},Gi=function(e,t,n,i,r,a){var o=new pn(e._pt,t,n,0,1,a?$d:Zd);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},tf={deg:1,rad:1,turn:1},Pb={grid:1,flex:1},Zi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=hr.style,c=gb.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,m,p,_;return i===a||!r||tf[i]||tf[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),_=e.getCTM&&tp(e),(d||a==="%")&&(Ci[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[c?"width":"height"]:e[u],Mt(d?r/g*h:r/100*g)):(o[c?"width":"height"]=h+(f?a:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Bi||!m.appendChild)&&(m=Bi.body),p=m._gsap,p&&d&&p.width&&c&&p.time===Tn.time&&!p.uncache?Mt(r/p.width*h):((d||a==="%")&&!Pb[oi(m,"display")]&&(o.position=oi(e,"position")),m===e&&(o.position="static"),m.appendChild(hr),g=hr[u],m.removeChild(hr),o.position="absolute",c&&d&&(p=gr(m),p.time=Tn.time,p.width=m[u]),Mt(f?g*r/h:g&&r?h/g*r:0))))},xi=function(e,t,n,i){var r;return ou||wc(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(r=yo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Da(oi(e,Kn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=La[t]&&La[t](e,t,n)||oi(e,t)||_d(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zi(e,t,r,n)+n:r},Lb=function(e,t,n,i){if(!n||n==="none"){var r=As(t,e,1),a=r&&oi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var o=new pn(this._pt,e.style,t,0,1,Xd),c=0,l=0,u,h,f,d,g,m,p,_,M,x,v,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=oi(e,t)||i,e.style[t]=n),u=[n,i],zd(u),n=u[0],i=u[1],f=n.match(os)||[],b=i.match(os)||[],b.length){for(;h=os.exec(i);)p=h[0],M=i.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(m=f[l++]||"")&&(d=parseFloat(m)||0,v=m.substr((d+"").length),p.charAt(1)==="="&&(p=ds(d,p)+v),_=parseFloat(p),x=p.substr((_+"").length),c=os.lastIndex-x.length,x||(x=x||An.units[t]||v,c===i.length&&(i+=x,o.e+=x)),v!==x&&(d=Zi(e,t,m,x)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?$d:Zd;return hd.test(i)&&(o.e=0),this._pt=o,o},nf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Db=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=nf[n]||n,t[1]=nf[i]||i,t.join(" ")},Rb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Ci[o]&&(c=1,o=o==="transformOrigin"?Kn:xt),xo(n,o);c&&(xo(n,xt),a&&(a.svg&&n.removeAttribute("transform"),yo(n,1),a.uncache=1,Jd(i)))}},La={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new pn(e._pt,t,n,0,0,Rb);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},vo=[1,0,0,1,0,0],np={},ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rf=function(e){var t=oi(e,xt);return ip(t)?vo:t.substr(7).match(ud).map(Mt)},cu=function(e,t){var n=e._gsap||gr(e),i=e.style,r=rf(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?vo:r):(r===vo&&!e.offsetParent&&e!==ps&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,ps.appendChild(e)),r=rf(e),c?i.display=c:xo(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ps.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Tc=function(e,t,n,i,r,a){var o=e._gsap,c=r||cu(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=c[0],g=c[1],m=c[2],p=c[3],_=c[4],M=c[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,T,E,y,S;n?c!==vo&&(E=d*p-g*m)&&(y=v*(p/E)+b*(-m/E)+(m*M-p*_)/E,S=v*(-g/E)+b*(d/E)-(d*M-g*_)/E,v=y,b=S):(T=ep(e),v=T.x+(~x[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(x[1]||x[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&o.smooth?(_=v-l,M=b-u,o.xOffset=h+(_*d+M*m)-_,o.yOffset=f+(_*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Kn]="0px 0px",a&&(Gi(a,o,"xOrigin",l,v),Gi(a,o,"yOrigin",u,b),Gi(a,o,"xOffset",h,o.xOffset),Gi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},yo=function(e,t){var n=e._gsap||new Bd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=oi(e,Kn)||"0",u,h,f,d,g,m,p,_,M,x,v,b,T,E,y,S,P,U,j,W,I,N,Y,q,F,B,C,O,X,ie,ne,le;return u=h=f=m=p=_=M=x=v=0,d=g=1,n.svg=!!(e.getCTM&&tp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[xt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[xt]!=="none"?c[xt]:"")),i.scale=i.rotate=i.translate="none"),E=cu(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),l=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Tc(e,q||l,!!q||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,T=n.yOrigin||0,E!==vo&&(U=E[0],j=E[1],W=E[2],I=E[3],u=N=E[4],h=Y=E[5],E.length===6?(d=Math.sqrt(U*U+j*j),g=Math.sqrt(I*I+W*W),m=U||j?Kr(j,U)*sr:0,M=W||I?Kr(W,I)*sr+m:0,M&&(g*=Math.abs(Math.cos(M*ms))),n.svg&&(u-=b-(b*U+T*W),h-=T-(b*j+T*I))):(le=E[6],ie=E[7],C=E[8],O=E[9],X=E[10],ne=E[11],u=E[12],h=E[13],f=E[14],y=Kr(le,X),p=y*sr,y&&(S=Math.cos(-y),P=Math.sin(-y),q=N*S+C*P,F=Y*S+O*P,B=le*S+X*P,C=N*-P+C*S,O=Y*-P+O*S,X=le*-P+X*S,ne=ie*-P+ne*S,N=q,Y=F,le=B),y=Kr(-W,X),_=y*sr,y&&(S=Math.cos(-y),P=Math.sin(-y),q=U*S-C*P,F=j*S-O*P,B=W*S-X*P,ne=I*P+ne*S,U=q,j=F,W=B),y=Kr(j,U),m=y*sr,y&&(S=Math.cos(y),P=Math.sin(y),q=U*S+j*P,F=N*S+Y*P,j=j*S-U*P,Y=Y*S-N*P,U=q,N=F),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,_=180-_),d=Mt(Math.sqrt(U*U+j*j+W*W)),g=Mt(Math.sqrt(Y*Y+le*le)),y=Kr(N,Y),M=Math.abs(y)>2e-4?y*sr:0,v=ne?1/(ne<0?-ne:ne):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ip(oi(e,xt)),q&&e.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Mt(d),n.scaleY=Mt(g),n.rotation=Mt(m)+o,n.rotationX=Mt(p)+o,n.rotationY=Mt(_)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Kn]=Da(l)),n.xOffset=n.yOffset=0,n.force3D=An.force3D,n.renderTransform=n.svg?Ob:Qd?rp:Ib,n.uncache=0,n},Da=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wl=function(e,t,n){var i=qt(t);return Mt(parseFloat(t)+parseFloat(Zi(e,"x",n+"px",i)))+i},Ib=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rp(e,t)},tr="0deg",Ns="0px",nr=") ",rp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,v="",b=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==tr||u!==tr)){var T=parseFloat(u)*ms,E=Math.sin(T),y=Math.cos(T),S;T=parseFloat(h)*ms,S=Math.cos(T),a=Wl(M,a,E*S*-x),o=Wl(M,o,-Math.sin(T)*-x),c=Wl(M,c,y*S*-x+x)}p!==Ns&&(v+="perspective("+p+nr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||a!==Ns||o!==Ns||c!==Ns)&&(v+=c!==Ns||b?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+nr),l!==tr&&(v+="rotate("+l+nr),u!==tr&&(v+="rotateY("+u+nr),h!==tr&&(v+="rotateX("+h+nr),(f!==tr||d!==tr)&&(v+="skew("+f+", "+d+nr),(g!==1||m!==1)&&(v+="scale("+g+", "+m+nr),M.style[xt]=v||"translate(0, 0)"},Ob=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(a),v=parseFloat(o),b,T,E,y,S;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ms,l*=ms,b=Math.cos(c)*h,T=Math.sin(c)*h,E=Math.sin(c-l)*-f,y=Math.cos(c-l)*f,l&&(u*=ms,S=Math.tan(l-u),S=Math.sqrt(1+S*S),E*=S,y*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,T*=S)),b=Mt(b),T=Mt(T),E=Mt(E),y=Mt(y)):(b=h,y=f,T=E=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Zi(d,"x",a,"px"),v=Zi(d,"y",o,"px")),(g||m||p||_)&&(x=Mt(x+g-(g*b+m*E)+p),v=Mt(v+m-(g*T+m*y)+_)),(i||r)&&(S=d.getBBox(),x=Mt(x+i/100*S.width),v=Mt(v+r/100*S.height)),S="matrix("+b+","+T+","+E+","+y+","+x+","+v+")",d.setAttribute("transform",S),M&&(d.style[xt]=S)},Fb=function(e,t,n,i,r){var a=360,o=zt(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?sr:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Kh)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Kh)%a-~~(l/a)*a)),e._pt=f=new pn(e._pt,t,n,i,l,xb),f.e=u,f.u="deg",e._props.push(n),f},sf=function(e,t){for(var n in t)e[n]=t[n];return e},zb=function(e,t,n){var i=sf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[xt]=t,o=yo(n,1),xo(n,xt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[xt],a[xt]=t,o=yo(n,1),a[xt]=l);for(c in Ci)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(d=qt(l),g=qt(u),h=d!==g?Zi(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new pn(e._pt,o,c,h,f-h,Mc),e._pt.u=g||0,e._props.push(c));sf(o,i)};dn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});La[e>1?"border"+s:s]=function(o,c,l,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return xi(o,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,m){return d[g]=f[m]=f[m]||f[(m-1)/2|0]}),o.init(c,d,h)}});var sp={name:"css",register:wc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,f,d,g,m,p,_,M,x,v,b,T,E,y;ou||wc(),this.styles=this.styles||Kd(e),y=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(wn[m]&&Gd(m,t,n,i,e,r)))){if(d=typeof u,g=La[m],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=mo(u)),g)g(this,e,m,u,n)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Xi.lastIndex=0,Xi.test(l)||(p=qt(l),_=qt(u)),_?p!==_&&(l=Zi(e,m,l,_)+_):p&&(u+=p),this.add(o,"setProperty",l,u,i,r,0,0,m),a.push(m),y.push(m,0,o[m]);else if(d!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,e,r):c[m],zt(l)&&~l.indexOf("random(")&&(l=mo(l)),qt(l+"")||(l+=An.units[m]||qt(xi(e,m))||""),(l+"").charAt(1)==="="&&(l=xi(e,m))):l=xi(e,m),f=parseFloat(l),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),m in ri&&(m==="autoAlpha"&&(f===1&&xi(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,o.visibility),Gi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=ri[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Ci,x){if(this.styles.save(m),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||yo(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new pn(this._pt,o,xt,0,1,b.renderTransform,b,0,-1),v.dep=1),m==="scale")this._pt=new pn(this._pt,b,"scaleY",b.scaleY,(M?ds(b.scaleY,M+h):h)-b.scaleY||0,Mc),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){y.push(Kn,0,o[Kn]),u=Db(u),b.svg?Tc(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&Gi(this,b,"zOrigin",b.zOrigin,_),Gi(this,o,m,Da(l),Da(u)));continue}else if(m==="svgOrigin"){Tc(e,u,1,T,0,this);continue}else if(m in np){Fb(this,b,m,f,M?ds(f,M+u):u);continue}else if(m==="smoothOrigin"){Gi(this,b,"smooth",b.smooth,u);continue}else if(m==="force3D"){b[m]=u;continue}else if(m==="transform"){zb(this,u,e);continue}}else m in o||(m=As(m)||m);if(x||(h||h===0)&&(f||f===0)&&!_b.test(u)&&m in o)p=(l+"").substr((f+"").length),h||(h=0),_=qt(u)||(m in An.units?An.units[m]:p),p!==_&&(f=Zi(e,m,l,_)),this._pt=new pn(this._pt,x?b:o,m,f,(M?ds(f,M+h):h)-f,!x&&(_==="px"||m==="zIndex")&&t.autoRound!==!1?yb:Mc),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=vb);else if(m in o)Lb.call(this,e,m,l,M?M+u:u);else if(m in e)this.add(e,m,l||e[m],M?M+u:u,i,r);else if(m!=="parseTransform"){Jc(m,u);continue}x||(m in o?y.push(m,0,o[m]):y.push(m,1,l||e[m])),a.push(m)}}E&&Yd(this)},render:function(e,t){if(t.tween._time||!au())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xi,aliases:ri,getSetter:function(e,t,n){var i=ri[t];return i&&i.indexOf(",")<0&&(t=i),t in Ci&&t!==Kn&&(e._gsap.x||xi(e,"x"))?n&&Jh===n?t==="scale"?wb:Sb:(Jh=n||{})&&(t==="scale"?Tb:Eb):e.style&&!jc(e.style[t])?bb:~t.indexOf("-")?Mb:ru(e,t)},core:{_removeProperty:xo,_getMatrix:cu}};mn.utils.checkPrefix=As;mn.core.getStyleSaver=Kd;(function(s,e,t,n){var i=dn(s+","+e+","+t,function(r){Ci[r]=1});dn(e,function(r){An.units[r]="deg",np[r]=1}),ri[i[13]]=s+","+e,dn(n,function(r){var a=r.split(":");ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){An.units[s]="px"});mn.registerPlugin(sp);var Jn=mn.registerPlugin(sp)||mn;Jn.core.Tween;class op extends Va{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class Nb{constructor({cubeR:e,skeleR:t,texture:n,index:i,planetRadius:r,font:a,data:o}){this.radius=e,this.texture=n,this.index=i/60-1,this.radian=i*(Math.PI/180),this.planetRadius=r,this.font=a,this.data=o,this.isClick=!1;const c=()=>{const g=new Ma(e),m=new cc({color:65535,emissive:13408767,transparent:!0}),p=new Xt(g,m);return p.name="cube",p.userData={index:this.index},p},l=()=>{const g=new Ma(t),m=new ba({wireframe:!0,transparent:!0,opacity:.2,color:11184810}),p=new Xt(g,m);return p.name="skeletone",p.userData={index:this.index},p},u=()=>{const g=new mr(e,e*.75,10,10),m=new ba({map:n,transparent:!1}),p=new Xt(g,m);return p.name="picture",p},h=g=>{const m=new op(g,{font:a,size:.5,height:.1,bevelEnabled:!0,bevelSegments:5,bevelSize:.01,bevelThickness:.02});m.computeBoundingBox(),m.center();const p=new cc({color:3407837,emissive:13434743});return new Xt(m,p)};this.cube=c(),this.skeletone=l(),this.picture=u(),this.picture.visible=!1,this.picture.rotation.set(-4.5,-.3,2.8);let f=this.index-3;f<0&&(f+=this.data.data.length),this.showIndex=f+1,this.numberText=h(this.showIndex.toString()),this.titleText=h(this.data.data[this.index].title),this.titleText.scale.set(.2,.2,.2),this.titleText.rotation.set(2.081,-.655,2.928),this.numberText.rotation.set(1.642,-1.308,-3.274),this.numberText.visible=!1,this.titleText.visible=!1,this.planet=new bi,this.planet.name="planet",this.planet.userData={dataIndex:this.index},this.planet.add(this.cube,this.skeletone,this.picture,this.numberText,this.titleText),this.planet.position.set(r*Math.cos(this.radian),r*Math.sin(this.radian),0);const d=Jn.timeline({id:`${this.index}`});this.hover=d}animation(e){this.hover.isActive()&&this.hover.clear(!0),e==="big"?this.hover.to(this.skeletone.scale,{x:0,y:0,z:0,duration:.5},"<").to(this.cube.scale,{x:1.8,y:1.8,z:1.8,duration:.4},"<").to(this.cube.material,{opacity:.4,duration:.4},"<").to(this.numberText.scale,{x:1,y:1,z:1,duration:.3},"<").to(this.numberText.position,{x:.871,y:-.244,z:-.767,duration:.3},"<").to(this.titleText.scale,{x:.2,y:.2,z:.2,duration:.3},"<").to(this.titleText.position,{x:-.049,y:-.325,z:.205,duration:.3,onStart:()=>{this.numberText.visible=!0,this.titleText.visible=!0}},"<").to(this.picture.scale,{x:2.3,y:2.3,z:2.3,duration:.3,onStart:()=>{this.picture.visible=!0},onComplete:()=>{this.hover.clear(!0)}},"<"):this.hover.to(this.skeletone.scale,{x:1,y:1,z:1,duration:.5},"<").to(this.cube.scale,{x:1,y:1,z:1,duration:.4},"<").to(this.cube.material,{opacity:1,duration:.4},"<").to(this.numberText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.numberText.position,{x:this.planet.position.x,y:this.planet.position.y,z:this.planet.position.z,duration:.3},"<").to(this.titleText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.titleText.position,{x:this.planet.position.x,y:this.planet.position.y,z:this.planet.position.z,duration:.3,onStart:()=>{this.numberText.visible=!1,this.titleText.visible=!1}},"<").to(this.picture.scale,{x:1,y:1,z:1,duration:.3,onComplete:()=>{this.picture.visible=!1,this.hover.clear(!0)}},"<")}update(e){this.cube.rotation.x=e*.8,this.cube.rotation.y=e*.8,this.skeletone.rotation.x=e*1.3,this.skeletone.rotation.y=e*1.3,!this.hover.isActive()&&!this.picture.visible&&this.skeletone.scale.x!==1&&this.skeletone.scale.set(1,1,1)}}class ap{constructor({about:e}){switch(this.data=[],this.type=e,e){case"carrer":{this.data=[{title:"CLES to Vue",img:"s1.jpg",date:["202202","202208"],Languege:["JavaScript"],UIFrameWork:["Vue2.X","ag-grid"],company:["Samsung S1","Companion System"],detail:["Samsung 에스원 파견 Project","CLES 사이트 리뉴얼 개발 (에스원 사내 업무 사이트)","서비스 중단된 tmax의 top에서 vue로 리뉴얼"],pitch:["대부분이 대용량 데이터 조회 페이지였고 페이지 마다 다르게 동작하는 CRUD 버튼 요구했기에 대용량 데이터 표출 용이하며 커스텀 용이한 ag-grid를 사용","공통 component 사용하여 사업장 마다 공통된 페이지를 빠르게 작업"],role:["공통 component 개발 및 교육","고객사와 소통","기존 Page 분석 및 리뉴얼 기획 참여"]},{title:"SmartSearch",img:"s1.jpg",subtitle:"SmartSearch-AdminSite Renewal",company:["Companion System","Samsung S1"],date:["202006","202202"],Languege:["Vue2.x","TypeScript"],detail:["Samsung 에스원 파견 Project","Smart검색 Admin-Site 익스플로 서비스 종료로 인해 Vue로 리뉴얼 개발"],pitch:["회사 고유 ui framework인 active ui를 base로 개발한 프로젝트"],role:["기존 개발 소스, 화면 분석","리뉴얼 화면 기획 및 기획서 작성","개발, 테스트, 배포 완료"]},{title:"TAD-Admin",img:"s1.jpg",company:["Samsung S1","Companion System"],date:["202006","202009"],Languege:["JavaScript"],UIFrameWork:["Vue2.X","vuetify"],detail:["Samsung 에스원 파견 Project","TAD 관리자 사이트 개발(얼굴 인증 사진 관리용 사이트)"],pitch:["vuetify로 대중적인 디자인 구성","얼굴 인증 사진 data 조회"],role:["리뉴얼 화면 기획 및 기획서 작성","개발, 테스트, 배포 완료"]},{title:"Active UI",img:"companion.png",company:["Samsung S1","Companion System"],date:["202009","202011"],Languege:["TypeScript"],UIFrameWork:["Vue2.X","devextreame"],detail:["Samsung 에스원 파견 Project","회사 고유 UI Framework 솔루션"],pitch:["사용자들의 편리한 이용과 활용도를 위해 typescript로 개발","data 조회에 용이","Grid Data를 to excel or from excel 기능 기본 옵션"],role:["Component 개발","테스트"]},{title:"MCC-Admin",img:"s1.jpg",subtitle:"모바일 보안 카메라 AdminSite",company:["Samsung S1","Companion System"],date:["202009","202102"],Languege:["TypeScript"],UIFrameWork:["Vue2.X","devextreame"],detail:["Samsung 에스원 파견 Project","모바일 보안 카메라 관리자 사이트 개발"],pitch:["회사 내 자체 UI 솔루션 기반으로 개발"],role:["Site 개발","테스트","배포 완료"]},{title:"SM-c++",img:"s1.jpg",subtitle:"SmartSearch & V3 ",company:["Samsung S1","Companion System"],date:["202006","202202"],Languege:["C++"],detail:["Samsung 에스원 파견 Project","SmartSearch - 인증 확률을 다양한 옵션을 통해 조절하여 검색을 빠르게 처리해 인증 속도를 높여주는 시스템","V3 - 이미지 프로세싱 기술을 사용하여 저장된 사진으로 얼굴 인증을 하는 시스템"],pitch:["시스템 내 마스크 인증 사용 옵션 추가 개발","마스크 인증의 옵션 확률을 다르게"],role:["마스크 사용 인증 옵션과 온도 체크 옵션에 따른 출입 기계와의 상호 통신 부분 개발","중국 및 여러 사업장에 배포 후 현재 운영 중"]}];break}case"project":{this.data=[{title:"KakakoBank Clone",date:["202305","202305"],Languege:["Javascript","HTML","CSS"],img:"cloneKakao.png",company:["Alone"],url:"https://minji-baek.github.io/kakaoBank-page-clone/",detail:["독학하여 만들어보는 Toy Project","KakakoBank Clone Base","이직 준비 중인 포토폴리오 느낌으로 내용을 꾸밈"],pitch:["자주 사용되는 slider library도 직접 만들어보며 libaray에 의존하지 않는 연습을 해봄","자주 사용되는 design cloning"],role:["Site 개발","테스트","배포 완료"]},{title:"Next-level-page",date:["202305","202305"],Languege:["Javascript","HTML","CSS"],company:["Alone"],img:"activePage.png",url:"https://minji-baek.github.io/next-level-page/",detail:["독학하여 만들어보는 Toy Project","터득한 animation, parallax-scrolling, css를 활용하고 또 다른 기법들을 사용한 interactive page"],pitch:["자주 사용되는 design cloning","scrolling 뿐만 아니라 mouse move와 object들 간의 parallax 기법도 활용하여 더욱 활용도 높은 기능의 기반이 될 것"],role:["Site 개발","테스트","배포 완료"]},{title:"Flying-Bird",date:["202306","202306"],Languege:["Javascript","HTML","CSS"],company:["Alone"],img:"2Dgame.png",url:"https://minji-baek.github.io/mouse-click-game/",detail:["독학하여 만들어보는 Toy Project","Canvas를 활용하여 mouse click event 만으로 만든 간단한 2D game"],pitch:["tiled라는 programe 통해 직접 tile asset을 만들어 보고 illustrator로 직접 제목 png를 만듬"],role:["Site 개발","테스트","배포 완료"]},{title:"Canvas-Portfolio",date:["202306","202306"],Languege:["React","HTML","CSS","Jsx"],company:["Alone"],img:"CanvasVerportfolio.png",url:"https://minji-baek.github.io/canvas-practice-projects/",detail:["독학하여 만들어보는 Toy Project","Canvas, React, Matter.js를 활용하여 2D Portpolio 를 개발"],pitch:["상단의 erasing 형식의 사진 show","하단의 CountDown, firework, confetti 등 2d effect","중단의 matter.js 물리엔진 구현"],role:["Site 개발","테스트","배포 완료"]}];break}}}}class lp extends Ha{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new _y(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const c=r.parse(JSON.parse(o));t&&t(c)},n,i)}parse(e){return new kb(e)}}class kb{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Ub(e,t,this.data);for(let r=0,a=i.length;r<a;r++)n.push(...i[r].toShapes());return n}}function Ub(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let o=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)o=0,c-=r;else{const h=Bb(u,i,o,c,t);o+=h.offsetX,a.push(h.path)}}return a}function Bb(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const a=new My;let o,c,l,u,h,f,d,g;if(r.o){const m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,_=m.length;p<_;)switch(m[p++]){case"m":o=m[p++]*e+t,c=m[p++]*e+n,a.moveTo(o,c);break;case"l":o=m[p++]*e+t,c=m[p++]*e+n,a.lineTo(o,c);break;case"q":l=m[p++]*e+t,u=m[p++]*e+n,h=m[p++]*e+t,f=m[p++]*e+n,a.quadraticCurveTo(h,f,l,u);break;case"b":l=m[p++]*e+t,u=m[p++]*e+n,h=m[p++]*e+t,f=m[p++]*e+n,d=m[p++]*e+t,g=m[p++]*e+n,a.bezierCurveTo(h,f,d,g,l,u);break}}return{offsetX:r.ha*e,path:a}}function of(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Gb(s,e,t){return e&&of(s.prototype,e),t&&of(s,t),s}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bt,Ec,En,Vi,Hi,gs,cp,or,Qs,up,Mi,Yn,hp,fp=function(){return Bt||typeof window<"u"&&(Bt=window.gsap)&&Bt.registerPlugin&&Bt},dp=1,ls=[],Qe=[],ai=[],eo=Date.now,Cc=function(e,t){return t},Vb=function(){var e=Qs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,ai),Qe=n,ai=i,Cc=function(a,o){return t[a](o)}},Yi=function(e,t){return~ai.indexOf(e)&&ai[ai.indexOf(e)+1][t]},to=function(e){return!!~up.indexOf(e)},Kt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Jo="scrollLeft",Ko="scrollTop",Ac=function(){return Mi&&Mi.isPressed||Qe.cache++},Ra=function(e,t){var n=function i(r){if(r||r===0){dp&&(En.history.scrollRestoration="manual");var a=Mi&&Mi.isPressed;r=i.v=Math.round(r)||(Mi&&Mi.iOS?1:0),e(r),i.cacheID=Qe.cache,a&&Cc("ss",r)}else(t||Qe.cache!==i.cacheID||Cc("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},rn={s:Jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ra(function(s){return arguments.length?En.scrollTo(s,Lt.sc()):En.pageXOffset||Vi[Jo]||Hi[Jo]||gs[Jo]||0})},Lt={s:Ko,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:rn,sc:Ra(function(s){return arguments.length?En.scrollTo(rn.sc(),s):En.pageYOffset||Vi[Ko]||Hi[Ko]||gs[Ko]||0})},an=function(e,t){return(t&&t._ctx&&t._ctx.selector||Bt.utils.toArray)(e)[0]||(typeof e=="string"&&Bt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$i=function(e,t){var n=t.s,i=t.sc;to(e)&&(e=Vi.scrollingElement||Hi);var r=Qe.indexOf(e),a=i===Lt.sc?1:2;!~r&&(r=Qe.push(e)-1),Qe[r+a]||Kt(e,"scroll",Ac);var o=Qe[r+a],c=o||(Qe[r+a]=Ra(Yi(e,n),!0)||(to(e)?i:Ra(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=Bt.getProperty(e,"scrollBehavior")==="smooth"),c},Pc=function(e,t,n){var i=e,r=e,a=eo(),o=a,c=t||50,l=Math.max(500,c*3),u=function(g,m){var p=eo();m||p-a>c?(r=i,i=g,o=a,a=p):n?i+=g:i=r+(g-r)/(p-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},f=function(g){var m=o,p=r,_=eo();return(g||g===0)&&g!==i&&u(g),a===o||_-o>l?0:(i+(n?p:-p))/((n?_:a)-m)*1e3};return{update:u,reset:h,getVelocity:f}},ks=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},af=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},pp=function(){Qs=Bt.core.globals().ScrollTrigger,Qs&&Qs.core&&Vb()},mp=function(e){return Bt=e||fp(),Bt&&typeof document<"u"&&document.body&&(En=window,Vi=document,Hi=Vi.documentElement,gs=Vi.body,up=[En,Vi,Hi,gs],Bt.utils.clamp,hp=Bt.core.context||function(){},or="onpointerenter"in gs?"pointer":"mouse",cp=At.isTouch=En.matchMedia&&En.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in En||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yn=At.eventTypes=("ontouchstart"in Hi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dp=0},500),pp(),Ec=1),Ec};rn.op=Lt;Qe.cache=0;var At=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Ec||mp(Bt)||console.warn("Please gsap.registerPlugin(Observer)"),Qs||pp();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,m=n.event,p=n.onDragStart,_=n.onDragEnd,M=n.onDrag,x=n.onPress,v=n.onRelease,b=n.onRight,T=n.onLeft,E=n.onUp,y=n.onDown,S=n.onChangeX,P=n.onChangeY,U=n.onChange,j=n.onToggleX,W=n.onToggleY,I=n.onHover,N=n.onHoverEnd,Y=n.onMove,q=n.ignoreCheck,F=n.isNormalizer,B=n.onGestureStart,C=n.onGestureEnd,O=n.onWheel,X=n.onEnable,ie=n.onDisable,ne=n.onClick,le=n.scrollSpeed,K=n.capture,Te=n.allowClicks,pe=n.lockAxis,Ee=n.onLockAxis;this.target=o=an(o)||Hi,this.vars=n,d&&(d=Bt.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,le=le||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(En.getComputedStyle(gs).lineHeight)||22);var fe,Oe,te,Z,oe,ge,ce,G=this,Ce=0,De=0,tt=$i(o,rn),ze=$i(o,Lt),L=tt(),w=ze(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Yn[0]==="pointerdown",re=to(o),se=o.ownerDocument||Vi,he=[0,0,0],Re=[0,0,0],D=0,H=function(){return D=eo()},de=function(ye,qe){return(G.event=ye)&&d&&~d.indexOf(ye.target)||qe&&J&&ye.pointerType!=="touch"||q&&q(ye,qe)},me=function(){G._vx.reset(),G._vy.reset(),Oe.pause(),h&&h(G)},xe=function(){var ye=G.deltaX=af(he),qe=G.deltaY=af(Re),rt=Math.abs(ye)>=i,Se=Math.abs(qe)>=i;U&&(rt||Se)&&U(G,ye,qe,he,Re),rt&&(b&&G.deltaX>0&&b(G),T&&G.deltaX<0&&T(G),S&&S(G),j&&G.deltaX<0!=Ce<0&&j(G),Ce=G.deltaX,he[0]=he[1]=he[2]=0),Se&&(y&&G.deltaY>0&&y(G),E&&G.deltaY<0&&E(G),P&&P(G),W&&G.deltaY<0!=De<0&&W(G),De=G.deltaY,Re[0]=Re[1]=Re[2]=0),(Z||te)&&(Y&&Y(G),te&&(M(G),te=!1),Z=!1),ge&&!(ge=!1)&&Ee&&Ee(G),oe&&(O(G),oe=!1),fe=0},Le=function(ye,qe,rt){he[rt]+=ye,Re[rt]+=qe,G._vx.update(ye),G._vy.update(qe),l?fe||(fe=requestAnimationFrame(xe)):xe()},Pe=function(ye,qe){pe&&!ce&&(G.axis=ce=Math.abs(ye)>Math.abs(qe)?"x":"y",ge=!0),ce!=="y"&&(he[2]+=ye,G._vx.update(ye,!0)),ce!=="x"&&(Re[2]+=qe,G._vy.update(qe,!0)),l?fe||(fe=requestAnimationFrame(xe)):xe()},He=function(ye){if(!de(ye,1)){ye=ks(ye,u);var qe=ye.clientX,rt=ye.clientY,Se=qe-G.x,nt=rt-G.y,Ue=G.isDragging;G.x=qe,G.y=rt,(Ue||Math.abs(G.startX-qe)>=r||Math.abs(G.startY-rt)>=r)&&(M&&(te=!0),Ue||(G.isDragging=!0),Pe(Se,nt),Ue||p&&p(G))}},We=G.onPress=function(Ne){de(Ne,1)||Ne&&Ne.button||(G.axis=ce=null,Oe.pause(),G.isPressed=!0,Ne=ks(Ne),Ce=De=0,G.startX=G.x=Ne.clientX,G.startY=G.y=Ne.clientY,G._vx.reset(),G._vy.reset(),Kt(F?o:se,Yn[1],He,u,!0),G.deltaX=G.deltaY=0,x&&x(G))},Je=G.onRelease=function(Ne){if(!de(Ne,1)){Jt(F?o:se,Yn[1],He,!0);var ye=!isNaN(G.y-G.startY),qe=G.isDragging&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),rt=ks(Ne);!qe&&ye&&(G._vx.reset(),G._vy.reset(),u&&Te&&Bt.delayedCall(.08,function(){if(eo()-D>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(se.createEvent){var Se=se.createEvent("MouseEvents");Se.initMouseEvent("click",!0,!0,En,1,rt.screenX,rt.screenY,rt.clientX,rt.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(Se)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&!F&&Oe.restart(!0),_&&qe&&_(G),v&&v(G,qe)}},R=function(ye){return ye.touches&&ye.touches.length>1&&(G.isGesturing=!0)&&B(ye,G.isDragging)},ee=function(){return(G.isGesturing=!1)||C(G)},ae=function(ye){if(!de(ye)){var qe=tt(),rt=ze();Le((qe-L)*le,(rt-w)*le,1),L=qe,w=rt,h&&Oe.restart(!0)}},_e=function(ye){if(!de(ye)){ye=ks(ye,u),O&&(oe=!0);var qe=(ye.deltaMode===1?c:ye.deltaMode===2?En.innerHeight:1)*g;Le(ye.deltaX*qe,ye.deltaY*qe,0),h&&!F&&Oe.restart(!0)}},we=function(ye){if(!de(ye)){var qe=ye.clientX,rt=ye.clientY,Se=qe-G.x,nt=rt-G.y;G.x=qe,G.y=rt,Z=!0,(Se||nt)&&Pe(Se,nt)}},je=function(ye){G.event=ye,I(G)},ht=function(ye){G.event=ye,N(G)},ut=function(ye){return de(ye)||ks(ye,u)&&ne(G)};Oe=G._dc=Bt.delayedCall(f||.25,me).pause(),G.deltaX=G.deltaY=0,G._vx=Pc(0,50,!0),G._vy=Pc(0,50,!0),G.scrollX=tt,G.scrollY=ze,G.isDragging=G.isGesturing=G.isPressed=!1,hp(this),G.enable=function(Ne){return G.isEnabled||(Kt(re?se:o,"scroll",Ac),a.indexOf("scroll")>=0&&Kt(re?se:o,"scroll",ae,u,K),a.indexOf("wheel")>=0&&Kt(o,"wheel",_e,u,K),(a.indexOf("touch")>=0&&cp||a.indexOf("pointer")>=0)&&(Kt(o,Yn[0],We,u,K),Kt(se,Yn[2],Je),Kt(se,Yn[3],Je),Te&&Kt(o,"click",H,!1,!0),ne&&Kt(o,"click",ut),B&&Kt(se,"gesturestart",R),C&&Kt(se,"gestureend",ee),I&&Kt(o,or+"enter",je),N&&Kt(o,or+"leave",ht),Y&&Kt(o,or+"move",we)),G.isEnabled=!0,Ne&&Ne.type&&We(Ne),X&&X(G)),G},G.disable=function(){G.isEnabled&&(ls.filter(function(Ne){return Ne!==G&&to(Ne.target)}).length||Jt(re?se:o,"scroll",Ac),G.isPressed&&(G._vx.reset(),G._vy.reset(),Jt(F?o:se,Yn[1],He,!0)),Jt(re?se:o,"scroll",ae,K),Jt(o,"wheel",_e,K),Jt(o,Yn[0],We,K),Jt(se,Yn[2],Je),Jt(se,Yn[3],Je),Jt(o,"click",H,!0),Jt(o,"click",ut),Jt(se,"gesturestart",R),Jt(se,"gestureend",ee),Jt(o,or+"enter",je),Jt(o,or+"leave",ht),Jt(o,or+"move",we),G.isEnabled=G.isPressed=G.isDragging=!1,ie&&ie(G))},G.kill=G.revert=function(){G.disable();var Ne=ls.indexOf(G);Ne>=0&&ls.splice(Ne,1),Mi===G&&(Mi=0)},ls.push(G),F&&to(o)&&(Mi=G),G.enable(m)},Gb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();At.version="3.12.2";At.create=function(s){return new At(s)};At.register=mp;At.getAll=function(){return ls.slice()};At.getById=function(s){return ls.filter(function(e){return e.vars.id===s})[0]};fp()&&Bt.registerPlugin(At);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,ns,st,mt,jn,ft,gp,Ia,Oa,cs,pa,Qo,Ht,Ya,Lc,en,lf,cf,is,_p,ql,xp,bn,vp,yp,bp,Ni,Dc,uu,_s,hu,Xl,ea=1,nn=Date.now,Yl=nn(),Vn=0,Ws=0,uf=function(e,t,n){var i=Sn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},hf=function(e,t){return t&&(!Sn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Hb=function s(){return Ws&&requestAnimationFrame(s)},ff=function(){return Ya=1},df=function(){return Ya=0},ti=function(e){return e},qs=function(e){return Math.round(e*1e5)/1e5||0},Mp=function(){return typeof window<"u"},Sp=function(){return Ae||Mp()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Lr=function(e){return!!~gp.indexOf(e)},wp=function(e){return(e==="Height"?hu:st["inner"+e])||jn["client"+e]||ft["client"+e]},Tp=function(e){return Yi(e,"getBoundingClientRect")||(Lr(e)?function(){return ya.width=st.innerWidth,ya.height=hu,ya}:function(){return yi(e)})},Wb=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Yi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?wp(r):e["client"+r])||0}},qb=function(e,t){return!t||~ai.indexOf(e)?Tp(e):function(){return ya}},Si=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Yi(e,n))?a()-Tp(e)()[r]:Lr(e)?(jn[n]||ft[n])-wp(i):e[n]-e["offset"+i])},ta=function(e,t){for(var n=0;n<is.length;n+=3)(!t||~t.indexOf(is[n+1]))&&e(is[n],is[n+1],is[n+2])},Sn=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},ma=function(e){return typeof e=="number"},ar=function(e){return typeof e=="object"},Us=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},jl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qr=Math.abs,Ep="left",Cp="top",fu="right",du="bottom",yr="width",br="height",no="Right",io="Left",ro="Top",so="Bottom",Et="padding",Fn="margin",Ps="Width",pu="Height",kt="px",zn=function(e){return st.getComputedStyle(e)},Xb=function(e){var t=zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},pf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yi=function(e,t){var n=t&&zn(e)[Lc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Rc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ap=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Yb=function(e){return function(t){return Ae.utils.snap(Ap(e),t)}},mu=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},jb=function(e){return function(t,n){return mu(Ap(e))(t,n.direction)}},na=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ft=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ot=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ia=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},mf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ra={toggleActions:"play",anticipatePin:0},Fa={top:0,left:0,center:.5,bottom:1,right:1},ga=function(e,t){if(Sn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Fa?Fa[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sa=function(e,t,n,i,r,a,o,c){var l=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=mt.createElement("div"),m=Lr(n)||Yi(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=m?ft:n,M=e.indexOf("start")!==-1,x=M?l:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||c)&&m?"fixed;":"absolute;"),(p||c||!m)&&(v+=(i===Lt?fu:du)+":"+(a+parseFloat(f))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],_a(g,0,i,M),g},_a=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ps]=1,r["border"+o+Ps]=0,r[n.p]=t+"px",Ae.set(e,r)},$e=[],Ic={},bo,gf=function(){return nn()-Vn>34&&(bo||(bo=requestAnimationFrame(Ti)))},es=function(){(!bn||!bn.isPressed||bn.startX>ft.clientWidth)&&(Qe.cache++,bn?bo||(bo=requestAnimationFrame(Ti)):Ti(),Vn||Rr("scrollStart"),Vn=nn())},Zl=function(){bp=st.innerWidth,yp=st.innerHeight},Xs=function(){Qe.cache++,!Ht&&!xp&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!vp||bp!==st.innerWidth||Math.abs(st.innerHeight-yp)>st.innerHeight*.25)&&Ia.restart(!0)},Dr={},Zb=[],Pp=function s(){return Ot(it,"scrollEnd",s)||fr(!0)},Rr=function(e){return Dr[e]&&Dr[e].map(function(t){return t()})||Zb},Mn=[],Lp=function(e){for(var t=0;t<Mn.length;t+=5)(!e||Mn[t+4]&&Mn[t+4].query===e)&&(Mn[t].style.cssText=Mn[t+1],Mn[t].getBBox&&Mn[t].setAttribute("transform",Mn[t+2]||""),Mn[t+3].uncache=1)},gu=function(e,t){var n;for(en=0;en<$e.length;en++)n=$e[en],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Lp(t),t||Rr("revert")},Dp=function(e,t){Qe.cache++,(t||!tn)&&Qe.forEach(function(n){return sn(n)&&n.cacheID++&&(n.rec=0)}),Sn(e)&&(st.history.scrollRestoration=uu=e)},tn,Mr=0,_f,$b=function(){if(_f!==Mr){var e=_f=Mr;requestAnimationFrame(function(){return e===Mr&&fr(!0)})}},Rp=function(){ft.appendChild(_s),hu=_s.offsetHeight||st.innerHeight,ft.removeChild(_s)},fr=function(e,t){if(Vn&&!e){Ft(it,"scrollEnd",Pp);return}Rp(),tn=it.isRefreshing=!0,Qe.forEach(function(i){return sn(i)&&++i.cacheID&&(i.rec=i())});var n=Rr("refreshInit");_p&&it.sort(),t||gu(),Qe.forEach(function(i){sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),$e.forEach(function(i,r){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),$e.forEach(function(i){var r=Si(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Dp(uu,1),Ia.pause(),Mr++,tn=2,Ti(2),$e.forEach(function(i){return sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),tn=it.isRefreshing=!1,Rr("refresh")},Oc=0,xa=1,oo,Ti=function(e){if(!tn||e===2){it.isUpdating=!0,oo&&oo.update(0);var t=$e.length,n=nn(),i=n-Yl>=50,r=t&&$e[0].scroll();if(xa=Oc>r?-1:1,tn||(Oc=r),i&&(Vn&&!Ya&&n-Vn>200&&(Vn=0,Rr("scrollEnd")),pa=Yl,Yl=n),xa<0){for(en=t;en-- >0;)$e[en]&&$e[en].update(0,i);xa=1}else for(en=0;en<t;en++)$e[en]&&$e[en].update(0,i);it.isUpdating=!1}bo=0},Fc=[Ep,Cp,du,fu,Fn+so,Fn+no,Fn+ro,Fn+io,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],va=Fc.concat([yr,br,"boxSizing","max"+Ps,"max"+pu,"position",Fn,Et,Et+ro,Et+no,Et+so,Et+io]),Jb=function(e,t,n){xs(n);var i=e._gsap;if(i.spacerIsNative)xs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},$l=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Fc.length,a=t.style,o=e.style,c;r--;)c=Fc[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[du]=o[fu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[yr]=Rc(e,rn)+kt,a[br]=Rc(e,Lt)+kt,a[Et]=o[Fn]=o[Cp]=o[Ep]="0",xs(i),o[yr]=o["max"+Ps]=n[yr],o[br]=o["max"+pu]=n[br],o[Et]=n[Et],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Kb=/([A-Z])/g,xs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(Kb,"-$1").toLowerCase())}},oa=function(e){for(var t=va.length,n=e.style,i=[],r=0;r<t;r++)i.push(va[r],n[va[r]]);return i.t=e,i},Qb=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ya={left:0,top:0},xf=function(e,t,n,i,r,a,o,c,l,u,h,f,d,g){sn(e)&&(e=e(c)),Sn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ga("0"+e.substr(3),n):0));var m=d?d.time():0,p,_,M;if(d&&d.seek(0),isNaN(e)||(e=+e),ma(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&_a(o,n,i,!0);else{sn(t)&&(t=t(c));var x=(e||"0").split(" "),v,b,T,E;M=an(t,c)||ft,v=yi(M)||{},(!v||!v.left&&!v.top)&&zn(M).display==="none"&&(E=M.style.display,M.style.display="block",v=yi(M),E?M.style.display=E:M.style.removeProperty("display")),b=ga(x[0],v[i.d]),T=ga(x[1]||"0",n),e=v[i.p]-l[i.p]-u+b+r-T,o&&_a(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(g&&(c[g]=e||-.001,e<0&&(e=0)),a){var y=e+n,S=a._isStart;p="scroll"+i.d2,_a(a,y,i,S&&y>20||!S&&(h?Math.max(ft[p],jn[p]):a.parentNode[p])<=y+1),h&&(l=yi(o),h&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+kt))}return d&&M&&(p=yi(M),d.seek(f),_=yi(M),d._caScrollDist=p[i.p]-_[i.p],e=e/d._caScrollDist*f),d&&d.seek(m),d?e:Math.round(e)},eM=/(webkit|moz|length|cssText|inset)/i,vf=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===ft){e._stOrig=r.cssText,o=zn(e);for(a in o)!+a&&!eM.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},Ip=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=a,a}},aa=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},yf=function(e,t){var n=$i(e,t),i="_scroll"+t.p2,r=function a(o,c,l,u,h){var f=a.tween,d=c.onComplete,g={};l=l||n();var m=Ip(n,l,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-l,f&&f.kill(),c[i]=o,c.modifiers=g,g[i]=function(){return m(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){Qe.cache++,Ti()},c.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Ae.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ft(e,"wheel",n.wheelHandler),it.isTouch&&Ft(e,"touchmove",n.wheelHandler),r},it=function(){function s(t,n){ns||s.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dc(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ws){this.update=this.refresh=this.kill=ti;return}n=pf(Sn(n)||ma(n)||n.nodeType?{trigger:n}:n,ra);var r=n,a=r.onUpdate,o=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,m=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,M=r.onSnapComplete,x=r.once,v=r.snap,b=r.pinReparent,T=r.pinSpacer,E=r.containerAnimation,y=r.fastScrollEnd,S=r.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?rn:Lt,U=!h&&h!==0,j=an(n.scroller||st),W=Ae.core.getCache(j),I=Lr(j),N=("pinType"in n?n.pinType:Yi(j,"pinType")||I&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=U&&n.toggleActions.split(" "),F="markers"in n?n.markers:ra.markers,B=I?0:parseFloat(zn(j)["border"+P.p2+Ps])||0,C=this,O=n.onRefreshInit&&function(){return n.onRefreshInit(C)},X=Wb(j,I,P),ie=qb(j,I),ne=0,le=0,K=0,Te=$i(j,P),pe,Ee,fe,Oe,te,Z,oe,ge,ce,G,Ce,De,tt,ze,L,w,J,re,se,he,Re,D,H,de,me,xe,Le,Pe,He,We,Je,R,ee,ae,_e,we,je,ht,ut;if(C._startClamp=C._endClamp=!1,C._dir=P,p*=45,C.scroller=j,C.scroll=E?E.time.bind(E):Te,Oe=Te(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(_p=1,n.refreshPriority===-9999&&(oo=C)),W.tweenScroll=W.tweenScroll||{top:yf(j,Lt),left:yf(j,rn)},C.tweenTo=pe=W.tweenScroll[P.p],C.scrubDuration=function(Se){ee=ma(Se)&&Se,ee?R?R.duration(Se):R=Ae.to(i,{ease:"expo",totalProgress:"+=0",duration:ee,paused:!0,onComplete:function(){return _&&_(C)}}):(R&&R.progress(1).kill(),R=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),We=0,c||(c=i.vars.id)),v&&((!ar(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ft.style&&Ae.set(I?[ft,jn]:j,{scrollBehavior:"auto"}),Qe.forEach(function(Se){return sn(Se)&&Se.target===(I?mt.scrollingElement||jn:j)&&(Se.smooth=!1)}),fe=sn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Yb(i):v.snapTo==="labelsDirectional"?jb(i):v.directional!==!1?function(Se,nt){return mu(v.snapTo)(Se,nn()-le<500?0:nt.direction)}:Ae.utils.snap(v.snapTo),ae=v.duration||{min:.1,max:2},ae=ar(ae)?cs(ae.min,ae.max):cs(ae,ae),_e=Ae.delayedCall(v.delay||ee/2||.1,function(){var Se=Te(),nt=nn()-le<500,Ue=pe.tween;if((nt||Math.abs(C.getVelocity())<10)&&!Ue&&!Ya&&ne!==Se){var Xe=(Se-Z)/ze,A=i&&!U?i.totalProgress():Xe,k=nt?0:(A-Je)/(nn()-pa)*1e3||0,$=Ae.utils.clamp(-Xe,1-Xe,Qr(k/2)*k/.185),V=Xe+(v.inertia===!1?0:$),Q=cs(0,1,fe(V,C)),be=Math.round(Z+Q*ze),Me=v,ke=Me.onStart,Ie=Me.onInterrupt,Ge=Me.onComplete;if(Se<=oe&&Se>=Z&&be!==Se){if(Ue&&!Ue._initted&&Ue.data<=Qr(be-Se))return;v.inertia===!1&&($=Q-Xe),pe(be,{duration:ae(Qr(Math.max(Qr(V-A),Qr(Q-A))*.185/k/.05||0)),ease:v.ease||"power3",data:Qr(be-Se),onInterrupt:function(){return _e.restart(!0)&&Ie&&Ie(C)},onComplete:function(){C.update(),ne=Te(),We=Je=i&&!U?i.totalProgress():C.progress,M&&M(C),Ge&&Ge(C)}},Se,$*ze,be-Se-$*ze),ke&&ke(C,pe.tween)}}else C.isActive&&ne!==Se&&_e.restart(!0)}).pause()),c&&(Ic[c]=C),f=C.trigger=an(f||d!==!0&&d),ut=f&&f._gsap&&f._gsap.stRevert,ut&&(ut=ut(C)),d=d===!0?f:an(d),Sn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===Fn||(g=!g&&d.parentNode&&d.parentNode.style&&zn(d.parentNode).display==="flex"?!1:Et),C.pin=d,Ee=Ae.core.getCache(d),Ee.spacer?L=Ee.pinState:(T&&(T=an(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ee.spacerIsNative=!!T,T&&(Ee.spacerState=oa(T))),Ee.spacer=re=T||mt.createElement("div"),re.classList.add("pin-spacer"),c&&re.classList.add("pin-spacer-"+c),Ee.pinState=L=oa(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),C.spacer=re=Ee.spacer,He=zn(d),de=He[g+P.os2],he=Ae.getProperty(d),Re=Ae.quickSetter(d,P.a,kt),$l(d,re,He),J=oa(d)),F){De=ar(F)?pf(F,mf):mf,G=sa("scroller-start",c,j,P,De,0),Ce=sa("scroller-end",c,j,P,De,0,G),se=G["offset"+P.op.d2];var Ne=an(Yi(j,"content")||j);ge=this.markerStart=sa("start",c,Ne,P,De,se,0,E),ce=this.markerEnd=sa("end",c,Ne,P,De,se,0,E),E&&(ht=Ae.quickSetter([ge,ce],P.a,kt)),!N&&!(ai.length&&Yi(j,"fixedMarkers")===!0)&&(Xb(I?ft:j),Ae.set([G,Ce],{force3D:!0}),xe=Ae.quickSetter(G,P.a,kt),Pe=Ae.quickSetter(Ce,P.a,kt))}if(E){var ye=E.vars.onUpdate,qe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),ye&&ye.apply(E,qe||[])})}if(C.previous=function(){return $e[$e.indexOf(C)-1]},C.next=function(){return $e[$e.indexOf(C)+1]},C.revert=function(Se,nt){if(!nt)return C.kill(!0);var Ue=Se!==!1||!C.enabled,Xe=Ht;Ue!==C.isReverted&&(Ue&&(we=Math.max(Te(),C.scroll.rec||0),K=C.progress,je=i&&i.progress()),ge&&[ge,ce,G,Ce].forEach(function(A){return A.style.display=Ue?"none":"block"}),Ue&&(Ht=C,C.update(Ue)),d&&(!b||!C.isActive)&&(Ue?Jb(d,re,L):$l(d,re,zn(d),me)),Ue||C.update(Ue),Ht=Xe,C.isReverted=Ue)},C.refresh=function(Se,nt,Ue,Xe){if(!((Ht||!C.enabled)&&!nt)){if(d&&Se&&Vn){Ft(s,"scrollEnd",Pp);return}!tn&&O&&O(C),Ht=C,pe.tween&&!Ue&&(pe.tween.kill(),pe.tween=0),R&&R.pause(),m&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var A=X(),k=ie(),$=E?E.duration():Si(j,P),V=ze<=.01,Q=0,be=Xe||0,Me=ar(Ue)?Ue.end:n.end,ke=n.endTrigger||f,Ie=ar(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Ge=C.pinnedContainer=n.pinnedContainer&&an(n.pinnedContainer,C),Ve=f&&Math.max(0,$e.indexOf(C))||0,Be=Ve,Ze,at,Nt,Ln,Ke,Fe,on,vt,Qn,Pi,Gt,ui,wt;for(F&&ar(Ue)&&(ui=Ae.getProperty(G,P.p),wt=Ae.getProperty(Ce,P.p));Be--;)Fe=$e[Be],Fe.end||Fe.refresh(0,1)||(Ht=C),on=Fe.pin,on&&(on===f||on===d||on===Ge)&&!Fe.isReverted&&(Pi||(Pi=[]),Pi.unshift(Fe),Fe.revert(!0,!0)),Fe!==$e[Be]&&(Ve--,Be--);for(sn(Ie)&&(Ie=Ie(C)),Ie=uf(Ie,"start",C),Z=xf(Ie,f,A,P,Te(),ge,G,C,k,B,N,$,E,C._startClamp&&"_startClamp")||(d?-.001:0),sn(Me)&&(Me=Me(C)),Sn(Me)&&!Me.indexOf("+=")&&(~Me.indexOf(" ")?Me=(Sn(Ie)?Ie.split(" ")[0]:"")+Me:(Q=ga(Me.substr(2),A),Me=Sn(Ie)?Ie:(E?Ae.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Z):Z)+Q,ke=f)),Me=uf(Me,"end",C),oe=Math.max(Z,xf(Me||(ke?"100% 0":$),ke,A,P,Te()+Q,ce,Ce,C,k,B,N,$,E,C._endClamp&&"_endClamp"))||-.001,Q=0,Be=Ve;Be--;)Fe=$e[Be],on=Fe.pin,on&&Fe.start-Fe._pinPush<=Z&&!E&&Fe.end>0&&(Ze=Fe.end-(C._startClamp?Math.max(0,Fe.start):Fe.start),(on===f&&Fe.start-Fe._pinPush<Z||on===Ge)&&isNaN(Ie)&&(Q+=Ze*(1-Fe.progress)),on===d&&(be+=Ze));if(Z+=Q,oe+=Q,C._startClamp&&(C._startClamp+=Q),C._endClamp&&!tn&&(C._endClamp=oe||-.001,oe=Math.min(oe,Si(j,P))),ze=oe-Z||(Z-=.01)&&.001,V&&(K=Ae.utils.clamp(0,1,Ae.utils.normalize(Z,oe,we))),C._pinPush=be,ge&&Q&&(Ze={},Ze[P.a]="+="+Q,Ge&&(Ze[P.p]="-="+Te()),Ae.set([ge,ce],Ze)),d)Ze=zn(d),Ln=P===Lt,Nt=Te(),D=parseFloat(he(P.a))+be,!$&&oe>1&&(Gt=(I?mt.scrollingElement||jn:j).style,Gt={style:Gt,value:Gt["overflow"+P.a.toUpperCase()]},I&&zn(ft)["overflow"+P.a.toUpperCase()]!=="scroll"&&(Gt.style["overflow"+P.a.toUpperCase()]="scroll")),$l(d,re,Ze),J=oa(d),at=yi(d,!0),vt=N&&$i(j,Ln?rn:Lt)(),g&&(me=[g+P.os2,ze+be+kt],me.t=re,Be=g===Et?Rc(d,P)+ze+be:0,Be&&me.push(P.d,Be+kt),xs(me),Ge&&$e.forEach(function(gn){gn.pin===Ge&&gn.vars.pinSpacing!==!1&&(gn._subPinOffset=!0)}),N&&Te(we)),N&&(Ke={top:at.top+(Ln?Nt-Z:vt)+kt,left:at.left+(Ln?vt:Nt-Z)+kt,boxSizing:"border-box",position:"fixed"},Ke[yr]=Ke["max"+Ps]=Math.ceil(at.width)+kt,Ke[br]=Ke["max"+pu]=Math.ceil(at.height)+kt,Ke[Fn]=Ke[Fn+ro]=Ke[Fn+no]=Ke[Fn+so]=Ke[Fn+io]="0",Ke[Et]=Ze[Et],Ke[Et+ro]=Ze[Et+ro],Ke[Et+no]=Ze[Et+no],Ke[Et+so]=Ze[Et+so],Ke[Et+io]=Ze[Et+io],w=Qb(L,Ke,b),tn&&Te(0)),i?(Qn=i._initted,ql(1),i.render(i.duration(),!0,!0),H=he(P.a)-D+ze+be,Le=Math.abs(ze-H)>1,N&&Le&&w.splice(w.length-2,2),i.render(0,!0,!0),Qn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ql(0)):H=ze,Gt&&(Gt.value?Gt.style["overflow"+P.a.toUpperCase()]=Gt.value:Gt.style.removeProperty("overflow-"+P.a));else if(f&&Te()&&!E)for(at=f.parentNode;at&&at!==ft;)at._pinOffset&&(Z-=at._pinOffset,oe-=at._pinOffset),at=at.parentNode;Pi&&Pi.forEach(function(gn){return gn.revert(!1,!0)}),C.start=Z,C.end=oe,Oe=te=tn?we:Te(),!E&&!tn&&(Oe<we&&Te(we),C.scroll.rec=0),C.revert(!1,!0),le=nn(),_e&&(ne=-1,_e.restart(!0)),Ht=0,i&&U&&(i._initted||je)&&i.progress()!==je&&i.progress(je||0,!0).render(i.time(),!0,!0),(V||K!==C.progress||E)&&(i&&!U&&i.totalProgress(E&&Z<-.001&&!K?Ae.utils.normalize(Z,oe,0):K,!0),C.progress=V||(Oe-Z)/ze===K?0:K),d&&g&&(re._pinOffset=Math.round(C.progress*H)),R&&R.invalidate(),isNaN(ui)||(ui-=Ae.getProperty(G,P.p),wt-=Ae.getProperty(Ce,P.p),aa(G,P,ui),aa(ge,P,ui-(Xe||0)),aa(Ce,P,wt),aa(ce,P,wt-(Xe||0))),V&&!tn&&C.update(),u&&!tn&&!tt&&(tt=!0,u(C),tt=!1)}},C.getVelocity=function(){return(Te()-te)/(nn()-pa)*1e3||0},C.endAnimation=function(){Us(C.callbackAnimation),i&&(R?R.progress(1):i.paused()?U||Us(i,C.direction<0,1):Us(i,i.reversed()))},C.labelToScroll=function(Se){return i&&i.labels&&(Z||C.refresh()||Z)+i.labels[Se]/i.duration()*ze||0},C.getTrailing=function(Se){var nt=$e.indexOf(C),Ue=C.direction>0?$e.slice(0,nt).reverse():$e.slice(nt+1);return(Sn(Se)?Ue.filter(function(Xe){return Xe.vars.preventOverlaps===Se}):Ue).filter(function(Xe){return C.direction>0?Xe.end<=Z:Xe.start>=oe})},C.update=function(Se,nt,Ue){if(!(E&&!Ue&&!Se)){var Xe=tn===!0?we:C.scroll(),A=Se?0:(Xe-Z)/ze,k=A<0?0:A>1?1:A||0,$=C.progress,V,Q,be,Me,ke,Ie,Ge,Ve;if(nt&&(te=Oe,Oe=E?Te():Xe,v&&(Je=We,We=i&&!U?i.totalProgress():k)),p&&!k&&d&&!Ht&&!ea&&Vn&&Z<Xe+(Xe-te)/(nn()-pa)*p&&(k=1e-4),k!==$&&C.enabled){if(V=C.isActive=!!k&&k<1,Q=!!$&&$<1,Ie=V!==Q,ke=Ie||!!k!=!!$,C.direction=k>$?1:-1,C.progress=k,ke&&!Ht&&(be=k&&!$?0:k===1?1:$===1?2:3,U&&(Me=!Ie&&q[be+1]!=="none"&&q[be+1]||q[be],Ve=i&&(Me==="complete"||Me==="reset"||Me in i))),S&&(Ie||Ve)&&(Ve||h||!i)&&(sn(S)?S(C):C.getTrailing(S).forEach(function(Nt){return Nt.endAnimation()})),U||(R&&!Ht&&!ea?(R._dp._time-R._start!==R._time&&R.render(R._dp._time-R._start),R.resetTo?R.resetTo("totalProgress",k,i._tTime/i._tDur):(R.vars.totalProgress=k,R.invalidate().restart())):i&&i.totalProgress(k,!!(Ht&&(le||Se)))),d){if(Se&&g&&(re.style[g+P.os2]=de),!N)Re(qs(D+H*k));else if(ke){if(Ge=!Se&&k>$&&oe+1>Xe&&Xe+1>=Si(j,P),b)if(!Se&&(V||Ge)){var Be=yi(d,!0),Ze=Xe-Z;vf(d,ft,Be.top+(P===Lt?Ze:0)+kt,Be.left+(P===Lt?0:Ze)+kt)}else vf(d,re);xs(V||Ge?w:J),Le&&k<1&&V||Re(D+(k===1&&!Ge?H:0))}}v&&!pe.tween&&!Ht&&!ea&&_e.restart(!0),o&&(Ie||x&&k&&(k<1||!Xl))&&Oa(o.targets).forEach(function(Nt){return Nt.classList[V||x?"add":"remove"](o.className)}),a&&!U&&!Se&&a(C),ke&&!Ht?(U&&(Ve&&(Me==="complete"?i.pause().totalProgress(1):Me==="reset"?i.restart(!0).pause():Me==="restart"?i.restart(!0):i[Me]()),a&&a(C)),(Ie||!Xl)&&(l&&Ie&&jl(C,l),Y[be]&&jl(C,Y[be]),x&&(k===1?C.kill(!1,1):Y[be]=0),Ie||(be=k===1?1:3,Y[be]&&jl(C,Y[be]))),y&&!V&&Math.abs(C.getVelocity())>(ma(y)?y:2500)&&(Us(C.callbackAnimation),R?R.progress(1):Us(i,Me==="reverse"?1:!k,1))):U&&a&&!Ht&&a(C)}if(Pe){var at=E?Xe/E.duration()*(E._caScrollDist||0):Xe;xe(at+(G._isFlipped?1:0)),Pe(at)}ht&&ht(-Xe/E.duration()*(E._caScrollDist||0))}},C.enable=function(Se,nt){C.enabled||(C.enabled=!0,Ft(j,"resize",Xs),I||Ft(j,"scroll",es),O&&Ft(s,"refreshInit",O),Se!==!1&&(C.progress=K=0,Oe=te=ne=Te()),nt!==!1&&C.refresh())},C.getTween=function(Se){return Se&&pe?pe.tween:R},C.setPositions=function(Se,nt,Ue,Xe){if(E){var A=E.scrollTrigger,k=E.duration(),$=A.end-A.start;Se=A.start+$*Se/k,nt=A.start+$*nt/k}C.refresh(!1,!1,{start:hf(Se,Ue&&!!C._startClamp),end:hf(nt,Ue&&!!C._endClamp)},Xe),C.update()},C.adjustPinSpacing=function(Se){if(me&&Se){var nt=me.indexOf(P.d)+1;me[nt]=parseFloat(me[nt])+Se+kt,me[1]=parseFloat(me[1])+Se+kt,xs(me)}},C.disable=function(Se,nt){if(C.enabled&&(Se!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,nt||R&&R.pause(),we=0,Ee&&(Ee.uncache=1),O&&Ot(s,"refreshInit",O),_e&&(_e.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!I)){for(var Ue=$e.length;Ue--;)if($e[Ue].scroller===j&&$e[Ue]!==C)return;Ot(j,"resize",Xs),I||Ot(j,"scroll",es)}},C.kill=function(Se,nt){C.disable(Se,nt),R&&!nt&&R.kill(),c&&delete Ic[c];var Ue=$e.indexOf(C);Ue>=0&&$e.splice(Ue,1),Ue===en&&xa>0&&en--,Ue=0,$e.forEach(function(Xe){return Xe.scroller===C.scroller&&(Ue=1)}),Ue||tn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),nt||i.kill()),ge&&[ge,ce,G,Ce].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),oo===C&&(oo=0),d&&(Ee&&(Ee.uncache=1),Ue=0,$e.forEach(function(Xe){return Xe.pin===d&&Ue++}),Ue||(Ee.spacer=0)),n.onKill&&n.onKill(C)},$e.push(C),C.enable(!1,!1),ut&&ut(C),i&&i.add&&!ze){var rt=C.update;C.update=function(){C.update=rt,Z||oe||C.refresh()},Ae.delayedCall(.01,C.update),ze=.01,Z=oe=0}else C.refresh();d&&$b()},s.register=function(n){return ns||(Ae=n||Sp(),Mp()&&window.document&&s.enable(),ns=Ws),ns},s.defaults=function(n){if(n)for(var i in n)ra[i]=n[i];return ra},s.disable=function(n,i){Ws=0,$e.forEach(function(a){return a[i?"kill":"disable"](n)}),Ot(st,"wheel",es),Ot(mt,"scroll",es),clearInterval(Qo),Ot(mt,"touchcancel",ti),Ot(ft,"touchstart",ti),na(Ot,mt,"pointerdown,touchstart,mousedown",ff),na(Ot,mt,"pointerup,touchend,mouseup",df),Ia.kill(),ta(Ot);for(var r=0;r<Qe.length;r+=3)ia(Ot,Qe[r],Qe[r+1]),ia(Ot,Qe[r],Qe[r+2])},s.enable=function(){if(st=window,mt=document,jn=mt.documentElement,ft=mt.body,Ae&&(Oa=Ae.utils.toArray,cs=Ae.utils.clamp,Dc=Ae.core.context||ti,ql=Ae.core.suppressOverwrites||ti,uu=st.history.scrollRestoration||"auto",Oc=st.pageYOffset,Ae.core.globals("ScrollTrigger",s),ft)){Ws=1,_s=document.createElement("div"),_s.style.height="100vh",_s.style.position="absolute",Rp(),Hb(),At.register(Ae),s.isTouch=At.isTouch,Ni=At.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft(st,"wheel",es),gp=[st,mt,jn,ft],Ae.matchMedia?(s.matchMedia=function(c){var l=Ae.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Ae.addEventListener("matchMediaInit",function(){return gu()}),Ae.addEventListener("matchMediaRevert",function(){return Lp()}),Ae.addEventListener("matchMedia",function(){fr(0,1),Rr("matchMedia")}),Ae.matchMedia("(orientation: portrait)",function(){return Zl(),Zl})):console.warn("Requires GSAP 3.11.0 or later"),Zl(),Ft(mt,"scroll",es);var n=ft.style,i=n.borderTopStyle,r=Ae.core.Animation.prototype,a,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=yi(ft),Lt.m=Math.round(a.top+Lt.sc())||0,rn.m=Math.round(a.left+rn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Qo=setInterval(gf,250),Ae.delayedCall(.5,function(){return ea=0}),Ft(mt,"touchcancel",ti),Ft(ft,"touchstart",ti),na(Ft,mt,"pointerdown,touchstart,mousedown",ff),na(Ft,mt,"pointerup,touchend,mouseup",df),Lc=Ae.utils.checkPrefix("transform"),va.push(Lc),ns=nn(),Ia=Ae.delayedCall(.2,fr).pause(),is=[mt,"visibilitychange",function(){var c=st.innerWidth,l=st.innerHeight;mt.hidden?(lf=c,cf=l):(lf!==c||cf!==l)&&Xs()},mt,"DOMContentLoaded",fr,st,"load",fr,st,"resize",Xs],ta(Ft),$e.forEach(function(c){return c.enable(0,1)}),o=0;o<Qe.length;o+=3)ia(Ot,Qe[o],Qe[o+1]),ia(Ot,Qe[o],Qe[o+2])}},s.config=function(n){"limitCallbacks"in n&&(Xl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Qo)||(Qo=i)&&setInterval(gf,i),"ignoreMobileResize"in n&&(vp=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ta(Ot)||ta(Ft,n.autoRefreshEvents||"none"),xp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=an(n),a=Qe.indexOf(r),o=Lr(r);~a&&Qe.splice(a,o?6:2),i&&(o?ai.unshift(st,i,ft,i,jn,i):ai.unshift(r,i))},s.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(Sn(n)?an(n):n).getBoundingClientRect(),o=a[r?yr:br]*i||0;return r?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},s.positionInViewport=function(n,i,r){Sn(n)&&(n=an(n));var a=n.getBoundingClientRect(),o=a[r?yr:br],c=i==null?o/2:i in Fa?Fa[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+c)/st.innerWidth:(a.top+c)/st.innerHeight},s.killAll=function(n){if($e.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Dr.killAll||[];Dr={},i.forEach(function(r){return r()})}},s}();it.version="3.12.2";it.saveStyles=function(s){return s?Oa(s).forEach(function(e){if(e&&e.style){var t=Mn.indexOf(e);t>=0&&Mn.splice(t,5),Mn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Dc())}}):Mn};it.revert=function(s,e){return gu(!s,e)};it.create=function(s,e){return new it(s,e)};it.refresh=function(s){return s?Xs():(ns||it.register())&&fr(!0)};it.update=function(s){return++Qe.cache&&Ti(s===!0?2:0)};it.clearScrollMemory=Dp;it.maxScroll=function(s,e){return Si(s,e?rn:Lt)};it.getScrollFunc=function(s,e){return $i(an(s),e?rn:Lt)};it.getById=function(s){return Ic[s]};it.getAll=function(){return $e.filter(function(s){return s.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Vn};it.snapDirectional=mu;it.addEventListener=function(s,e){var t=Dr[s]||(Dr[s]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(s,e){var t=Dr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(l,u){var h=[],f=[],d=Ae.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&sn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return sn(r)&&(r=r(),Ft(it,"refresh",function(){return r=e.batchMax()})),Oa(s).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(it.create(l))}),t};var bf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Jl=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(At.isTouch?" pinch-zoom":""):"none",e===jn&&s(ft,t)},la={auto:1,scroll:1},tM=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ae.core.getCache(r),o=nn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==ft&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(la[(c=zn(r)).overflowY]||la[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Lr(r)&&(la[(c=zn(r)).overflowY]||la[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Op=function(e,t,n,i){return At.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&tM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(mt,At.eventTypes[0],Sf,!1,!0)},onDisable:function(){return Ot(mt,At.eventTypes[0],Sf,!0)}})},nM=/(input|label|select|textarea)/i,Mf,Sf=function(e){var t=nM.test(e.target.tagName);(t||Mf)&&(e._gsapAllow=!0,Mf=t)},iM=function(e){ar(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,c,l=an(e.target)||jn,u=Ae.core.globals().ScrollSmoother,h=u&&u.get(),f=Ni&&(e.content&&an(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=$i(l,Lt),g=$i(l,rn),m=1,p=(At.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,_=0,M=sn(i)?function(){return i(o)}:function(){return i||2.8},x,v,b=Op(l,e.type,!0,r),T=function(){return v=!1},E=ti,y=ti,S=function(){c=Si(l,Lt),y=cs(Ni?1:0,c),n&&(E=cs(0,Si(l,rn))),x=Mr},P=function(){f._gsap.y=qs(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},U=function(){if(v){requestAnimationFrame(T);var F=qs(o.deltaY/2),B=y(d.v-F);if(f&&B!==d.v+d.offset){d.offset=B-d.v;var C=qs((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=Qe.cache,Ti()}return!0}d.offset&&P(),v=!0},j,W,I,N,Y=function(){S(),j.isActive()&&j.vars.scrollY>c&&(d()>c?j.progress(1)&&d(c):j.resetTo("scrollY",c))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(q){return Ni&&q.type==="touchmove"&&U()||m>1.05&&q.type!=="touchstart"||o.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){v=!1;var q=m;m=qs((st.visualViewport&&st.visualViewport.scale||1)/p),j.pause(),q!==m&&Jl(l,m>1.01?!0:n?!1:"x"),W=g(),I=d(),S(),x=Mr},e.onRelease=e.onGestureStart=function(q,F){if(d.offset&&P(),!F)N.restart(!0);else{Qe.cache++;var B=M(),C,O;n&&(C=g(),O=C+B*.05*-q.velocityX/.227,B*=bf(g,C,O,Si(l,rn)),j.vars.scrollX=E(O)),C=d(),O=C+B*.05*-q.velocityY/.227,B*=bf(d,C,O,Si(l,Lt)),j.vars.scrollY=y(O),j.invalidate().duration(B).play(.01),(Ni&&j.vars.scrollY>=c||C>=c-1)&&Ae.to({},{onUpdate:Y,duration:B})}a&&a(q)},e.onWheel=function(){j._ts&&j.pause(),nn()-_>1e3&&(x=0,_=nn())},e.onChange=function(q,F,B,C,O){if(Mr!==x&&S(),F&&n&&g(E(C[2]===F?W+(q.startX-q.x):g()+F-C[1])),B){d.offset&&P();var X=O[2]===B,ie=X?I+q.startY-q.y:d()+B-O[1],ne=y(ie);X&&ie!==ne&&(I+=ne-ie),d(ne)}(B||F)&&Ti()},e.onEnable=function(){Jl(l,n?!1:"x"),it.addEventListener("refresh",Y),Ft(st,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){Jl(l,!0),Ot(st,"resize",Y),it.removeEventListener("refresh",Y),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new At(e),o.iOS=Ni,Ni&&!d()&&d(1),Ni&&Ae.ticker.add(ti),N=o._dc,j=Ae.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ip(d,d(),function(){return j.pause()})},onUpdate:Ti,onComplete:N.vars.onComplete}),o};it.sort=function(s){return $e.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};it.observe=function(s){return new At(s)};it.normalizeScroll=function(s){if(typeof s>"u")return bn;if(s===!0&&bn)return bn.enable();if(s===!1)return bn&&bn.kill();var e=s instanceof At?s:iM(s);return bn&&bn.target===e.target&&bn.kill(),Lr(e.target)&&(bn=e),e};it.core={_getVelocityProp:Pc,_inputObserver:Op,_scrollers:Qe,_proxies:ai,bridge:{ss:function(){Vn||Rr("scrollStart"),Vn=nn()},ref:function(){return Ht}}};Sp()&&Ae.registerPlugin(it);function rM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fp={exports:{}};(function(s){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function r(c,l,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new i(u,h||c,f),g=t?t+l:l;return c._events[g]?c._events[g].fn?c._events[g]=[c._events[g],d]:c._events[g].push(d):(c._events[g]=d,c._eventsCount++),c}function a(c,l){--c._eventsCount===0?c._events=new n:delete c._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,h;if(this._eventsCount===0)return l;for(h in u=this._events)e.call(u,h)&&l.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=t?t+l:l,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,g=new Array(d);f<d;f++)g[f]=h[f].fn;return g},o.prototype.listenerCount=function(l){var u=t?t+l:l,h=this._events[u];return h?h.fn?1:h.length:0},o.prototype.emit=function(l,u,h,f,d,g){var m=t?t+l:l;if(!this._events[m])return!1;var p=this._events[m],_=arguments.length,M,x;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),_){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,h),!0;case 4:return p.fn.call(p.context,u,h,f),!0;case 5:return p.fn.call(p.context,u,h,f,d),!0;case 6:return p.fn.call(p.context,u,h,f,d,g),!0}for(x=1,M=new Array(_-1);x<_;x++)M[x-1]=arguments[x];p.fn.apply(p.context,M)}else{var v=p.length,b;for(x=0;x<v;x++)switch(p[x].once&&this.removeListener(l,p[x].fn,void 0,!0),_){case 1:p[x].fn.call(p[x].context);break;case 2:p[x].fn.call(p[x].context,u);break;case 3:p[x].fn.call(p[x].context,u,h);break;case 4:p[x].fn.call(p[x].context,u,h,f);break;default:if(!M)for(b=1,M=new Array(_-1);b<_;b++)M[b-1]=arguments[b];p[x].fn.apply(p[x].context,M)}}return!0},o.prototype.on=function(l,u,h){return r(this,l,u,h,!1)},o.prototype.once=function(l,u,h){return r(this,l,u,h,!0)},o.prototype.removeListener=function(l,u,h,f){var d=t?t+l:l;if(!this._events[d])return this;if(!u)return a(this,d),this;var g=this._events[d];if(g.fn)g.fn===u&&(!f||g.once)&&(!h||g.context===h)&&a(this,d);else{for(var m=0,p=[],_=g.length;m<_;m++)(g[m].fn!==u||f&&!g[m].once||h&&g[m].context!==h)&&p.push(g[m]);p.length?this._events[d]=p.length===1?p[0]:p:a(this,d)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=t?t+l:l,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,s.exports=o})(Fp);var sM=Fp.exports;const oM=rM(sM);class aM{constructor(){xu(this,"eventEmitter",new oM)}clearCarrerDescription(e){this.eventEmitter.emit("clearCarrerDescription",e)}onClearCarrerDescription(e){this.eventEmitter.on("clearCarrerDescription",e)}clearProDescription(){this.eventEmitter.emit("clearProDescription")}onClearProDescription(e){this.eventEmitter.on("clearProDescription",e)}initProject(){this.eventEmitter.emit("initProject")}onInitProject(e){this.eventEmitter.on("initProject",e)}destroyProject(){this.eventEmitter.emit("destroyProject")}onDestroyProject(e){this.eventEmitter.on("destroyProject",e)}initCarrer(){this.eventEmitter.emit("initCarrer")}onInitCarrer(e){this.eventEmitter.on("initCarrer",e)}destroyCarrer(){this.eventEmitter.emit("destroyCarrer")}onDestroyCarrer(e){this.eventEmitter.on("destroyCarrer",e)}initToy(){this.eventEmitter.emit("initToy")}onInitToy(e){this.eventEmitter.on("initToy",e)}destroyToy(){this.eventEmitter.emit("destroyToy")}onDestroyToy(e){this.eventEmitter.on("destroyToy",e)}initAbout(){this.eventEmitter.emit("initAbout")}onInitAbout(e){this.eventEmitter.on("initAbout",e)}destroyAbout(){this.eventEmitter.emit("destroyAbout")}onDestroyAbout(e){this.eventEmitter.on("destroyAbout",e)}}const ja=new aM,zp=(s,e,t)=>{const n=l=>{const u=l[0].slice(0,4),h=l[0].slice(4,6),f=l[1].slice(0,4),d=l[1].slice(4,6);return`${u}.${h} ~ ${f}.${d}`},i=ja,r=s.data[e],a=s.type;if(document.querySelector("#description").removeAttribute("class","disable"),a==="carrer"?document.querySelector("#description").setAttribute("class","description"):document.querySelector("#description").setAttribute("class","description2"),document.querySelector(".description-title #title").textContent=r.title,r.subtitle)document.querySelector(".description-title #subtitle").textContent=r.subtitle;else if(r.url){const l=document.createElement("a");l.setAttribute("href",r.url),l.setAttribute("target","_blank"),l.innerHTML=r.url,document.querySelector(".description-title #subtitle").appendChild(l)}document.querySelector(".description-title-wrapper #description").innerHTML=r.detail.join("<br /> "),document.querySelector(".description-column #date").innerHTML=n(r.date),document.querySelector(".description-column #tech").innerHTML=`${r.Languege.join(", ")} ${r.UIFrameWork?r.UIFrameWork.join(", "):" "} `,document.querySelector(".description-column #pitch").innerHTML=r.pitch.join("<br /> "),document.querySelector(".description-column #company").innerHTML=r.company.join(", "),document.querySelector(".description-column #role").innerHTML=r.role.join("<br /> ");const o=()=>{a==="carrer"?document.querySelector("#description").removeAttribute("class","description-end"):document.querySelector("#description").removeAttribute("class","description-end2"),document.querySelector("#description").setAttribute("class","disable"),a==="carrer"?i.clearCarrerDescription(t):i.clearProDescription()},c=()=>{if(a==="carrer")document.querySelector("#description").removeAttribute("class","description"),document.querySelector("#description").setAttribute("class","description-end");else{const l=document.querySelector(".description-title #subtitle").children;document.querySelector(".description-title #subtitle").removeChild(l[0]),document.querySelector("#description").removeAttribute("class","description2"),document.querySelector("#description").setAttribute("class","description-end2")}setTimeout(()=>{o(),document.querySelector(".description-button").removeEventListener("click",c)},1*1e3)};document.querySelector(".description-button").addEventListener("click",c)};async function lM(){const s=ja,e=document.querySelector("#scroll");Jn.registerPlugin(it);const t=document.querySelector("#canvas"),n=60,i=3,r=new Gc({antialias:!0,alpha:!0,canvas:t});r.setClearColor(3355443,1),r.shadowMap.enabled=!0;const a={width:window.innerWidth,height:window.innerHeight},o=new rd,c=new ed,l=new lp;c.setPath("./assets/projects/");const u=new Xf,h=new cn(90,a.width/a.height,.1,100);h.position.set(-.073,-.017,3.689);const f=new od(h,r.domElement);f.enableDamping=!0,f.maxAzimuthAngle=Math.PI/2,f.maxPolarAngle=Math.PI,f.enableZoom=!1,f.enablePan=!1,f.dampingFactor=.1,f.saveState();const d=new sd,g=new ue,m=new ap({about:"carrer"}),p=await l.loadAsync("./assets/fonts/Gugi_Regular.json");let _=[],M=[];const x=Jn.timeline({id:"click",smoothChildTiming:!0,autoRemoveChildren:!0});let v="";const b=()=>{const F=new bi;let B=[];for(let O=n;O<=360;O+=n){let X=new Nb({cubeR:.22,skeleR:.4,texture:c.load(m.data[O/60-1].img),index:O,planetRadius:i,font:p,data:m});F.name="renderPlanet",F.add(X.planet),B.push(X)}F.rotation.set(4.733,2.702,.49),u.add(F);const C=new id(16777215,1);return C.castShadow=!0,u.add(C),M=B.flatMap((O,X)=>{const ie=document.createElement("div");return ie.className="scroll-planet",ie.id=`planet-${X}`,e.appendChild(ie),O.planet.position}),{plantArry:B}},T=()=>{a.width=window.innerWidth,a.height=window.innerHeight,h.aspect=a.width/a.height,h.updateProjectionMatrix(),r.setSize(a.width,a.height),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})};function E(F,B){g.x=(F.clientX/window.innerWidth-.5)*2,g.y=-(F.clientY/window.innerHeight-.5)*2,d.setFromCamera(g,h);const C=d.intersectObjects(u.children);if(C.length>0){const O=C[0].object;if(O.parent.name==="planet"){if(B.filter(ne=>ne.planet.id===O.parent.id)[0].animation("big"),_.filter(ne=>ne.parent.id===O.parent.id).length>0)return;_.push(O)}}else _.length>0&&(_=[],B.forEach(O=>{O.isClick||O.animation("small")}))}function y(F,B){const C=d.intersectObjects(u.children);if(C.length>0){const O=C[0].object;if(O.parent.name==="planet"){f.reset();let X=O.userData.index-3;X<0&&(X=X+B.length);const ie=B.filter(ne=>ne.planet.id===O.parent.id);if(ie[0].isClick)return;B.forEach(ne=>{ne.animation("small"),ne.isClick=!1}),ie[0].isClick=!0,document.querySelector(`#${e.children[X].id}`).scrollIntoView({behavior:"smooth"}),ie[0].animation("big"),document.querySelector("#warning-click").setAttribute("class","show")}}else P(B)}const S=F=>{for(let B=0;B<e.children.length;B++){const C=Jn.timeline({id:`#${e.children[B].id}`,scrollTrigger:{trigger:`#${e.children[B].id}`,start:"top top",end:"bottom top",ariaLabel:`#${e.children[B].id}`,scrub:!0}}),O=(B+1)%e.children.length;if(B===e.children.length-1)return;M.forEach((X,ie)=>{let ne=(ie+O)%F.length;ne===M.length&&(ne=0),C.to(F[ne].planet.position,{x:X.x,y:X.y,z:X.z,duration:3,onStart:()=>{f.reset()}},"<")})}},P=F=>{document.querySelector("#warning-click").removeAttribute("class","show"),F.forEach(B=>{B.animation("small"),B.isClick=!1})};function U(F){const B=d.intersectObjects(u.children);if(B.length>0&&!x.isActive()){const C=B[0].object;if(C.parent.name==="planet"){let O=C.userData.index-3;O<0&&(O=O+F.length),Jn.to(f.object.position,{x:.13,z:3.2,duration:2,onComplete:()=>{j(C.userData.index,O)}})}}}const j=(F,B)=>{console.log("이것도 많이 도니?"),document.querySelector("#warning-click").removeAttribute("class","show"),document.querySelector("header").setAttribute("class","disable"),zp(m,F,B),document.querySelector("#scroll").setAttribute("class","disable"),cancelAnimationFrame(v)},W=F=>{const{plantArry:B}=F;window.addEventListener("resize",T),S(B),t.addEventListener("pointermove",O=>E(O,B)),s.onClearCarrerDescription(O=>{console.log("이게 왤케 많이 돕니까"),document.querySelector("#warning-click").setAttribute("class","show"),document.querySelector("#scroll").removeAttribute("class","disable"),document.querySelector("header").removeAttribute("class","disable"),I(O),N({plantArry:B})}),t.addEventListener("pointerdown",O=>y(O,B)),t.addEventListener("dblclick",()=>U(B)),document.querySelector("#home").addEventListener("click",O=>{P(B),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})})},I=F=>{console.log("이게 왤케 많이 돕니까222"),Jn.to(f.object.position,{x:f.position0.x,y:f.position0.y,z:f.position0.z,duration:2,onStart:()=>{document.querySelector(`#planet-${F}`).scrollIntoView()}})},N=F=>{const{plantArry:B}=F;B.forEach(C=>C.update(o.getElapsedTime())),f.update(),r.render(u,h),v=requestAnimationFrame(()=>{N(F)})},Y=async()=>{const F=b();W(F),T(),N(F)},q=()=>{cancelAnimationFrame(v),u.clear(),r.dispose(),f.dispose()};s.onDestroyCarrer(()=>{document.querySelector("#warning-click").removeAttribute("class","show"),q(),document.querySelector("#home").removeEventListener("click",B=>{P(plantArry),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})})}),await Y()}class cM{constructor({index:e,font:t,data:n}){this.index=e/90-1,this.radian=e*(Math.PI/180),this.font=t,this.data=n,this.isClick=!1;const i=()=>{const c=new Zs,l=-2.5,u=-5;c.moveTo(l+2.5,u+2.5),c.bezierCurveTo(l+2.5,u+2.5,l+2,u,l,u),c.bezierCurveTo(l-3,u,l-3,u+3.5,l-3,u+3.5),c.bezierCurveTo(l-3,u+5.5,l-1.5,u+7.7,l+2.5,u+9.5),c.bezierCurveTo(l+6,u+7.7,l+8,u+4.5,l+8,u+3.5),c.bezierCurveTo(l+8,u+3.5,l+8,u,l+5,u),c.bezierCurveTo(l+3.5,u,l+2.5,u+2.5,l+2.5,u+2.5);const h={steps:1,depth:3,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:1},f=new Va(c,h),d=new dy({color:13408767,reflectivity:.2,fog:!0});this.material=d;const g=new Xt(f,d);return g.name="heart",g.userData={index:this.index},g},r=c=>{const l=new op(c,{font:t,size:.5,height:.1,bevelEnabled:!0,bevelSegments:10,bevelSize:.025,bevelThickness:.04});l.computeBoundingBox(),l.center();const u=new cc({color:13434743,fog:!0,reflectivity:.4});return new Xt(l,u)};this.heart=i(),this.heart.scale.set(3,3,3),this.numberText=r((this.index+1).toString()),this.titleText=r(this.data.data[this.index].title),this.numberText.scale.set(0,0,0),this.titleText.scale.set(0,0,0),this.numberText.rotation.set(.89,0,0),this.numberText.visible=!1,this.titleText.visible=!1,this.planet=new bi,this.planet.name="planet",this.planet.userData={dataIndex:this.index},this.planet.add(this.heart),this.planet.position.set(-8*3*Math.cos(this.radian),-8*3*Math.sin(this.radian),0),this.heart.rotation.set(0,0,Math.PI/2*this.index);const a=Jn.timeline({id:`${this.index}`,repeatDelay:.001});this.heartScaler=a;const o=Jn.timeline({id:`${this.index}`,smoothChildTiming:!0});this.hover=o}heartAnime(e){this.heartScaler.isActive()&&this.heartScaler.clear(!0),e==="hover"?this.heartScaler.to(this.heart.scale,{x:2.5,y:2.5,z:2.5,duration:.2,onStart:()=>{this.heart.material.color=new et(16737945),this.heart.material.needsUpdate=!0,this.heartScaler.repeat(1/0)}}).to(this.heart.scale,{x:3.2,y:3.2,z:3.2,duration:.2}).to(this.heart.scale,{x:2.8,y:2.8,z:2.8,duration:.2}).to(this.heart.scale,{x:3,y:3,z:3,duration:.2}):this.heartScaler.to(this.heart.scale,{x:3,y:3,z:3,duration:.3,onStart:()=>{this.heart.material.color=new et(13408767),this.heart.material.needsUpdate=!0},onComplete:()=>{this.heartScaler.clear(!0),this.heartScaler.repeat(0)}})}animation(e){this.hover.isActive()&&this.hover.clear(!0),e==="big"?this.hover.to(this.numberText.scale,{x:70,y:70,z:70,duration:.3},"<").to(this.numberText.position,{z:8,duration:.3},"<").to(this.titleText.scale,{x:22,y:22,z:22,duration:.3},"<").to(this.titleText.position,{z:1,duration:.3,onStart:()=>{this.heart.material.color=new et(16737945),this.heart.material.needsUpdate=!0,this.numberText.visible=!0,this.titleText.visible=!0},onComplete:()=>{this.hover.clear(!0)}},"<"):this.hover.to(this.numberText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.numberText.position,{z:-5,duration:.3},"<").to(this.titleText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.titleText.position,{z:-5,duration:.3,onStart:()=>{this.heart.material.color=new et(13408767),this.heart.material.needsUpdate=!0},onComplete:()=>{this.numberText.visible=!1,this.titleText.visible=!1,this.hover.clear(!0)}},"<")}update(e){this.heart.position.y=Math.sin(e*3),this.heart.position.x=Math.cos(e*2)}}class uM{constructor({params:e}){const t=()=>{const a=new mr(1e3,1e3,150,150),o=new Oh({color:e.waveColor,transparent:!0});return new Xt(a,o)},n=()=>{const a=new mr(1200,900,150,150),o=new Oh({transparent:!1,map:e.texture});return new Xt(a,o)};this.waveGeometry=new mr(1500,1500,150,150),this.wave=t(),this.image=n(),this.wave.receiveShadow=!0,this.wave.rotation.x=-Math.PI/3,this.image.rotation.x=-Math.PI/3,this.image.position.set(0,3,-39),this.waveHeight=2.5;const i=[];for(let a=0;a<this.waveGeometry.attributes.position.count;a++){const o=this.waveGeometry.attributes.position.getZ(a)+(Math.random()-.5)*this.waveHeight;this.waveGeometry.attributes.position.setZ(a,o),i.push(o)}this.wave.geometry=this.waveGeometry,this.initPositionZ=i;const r=Jn.timeline({id:`${this.wave.id}`});this.hover=r}update(e){const t=e.getElapsedTime();for(let n=0;n<this.waveGeometry.attributes.position.count;n++){const i=this.initPositionZ[n]+Math.sin(t*3+n**2)*this.waveHeight;this.waveGeometry.attributes.position.setZ(n,i)}this.waveGeometry.attributes.position.needsUpdate=!0}animation(e,t){this.hover.isActive()&&this.hover.clear(!0),e==="hover"?this.hover.to(this.wave.material,{opacity:.5,duration:.8,onStart:()=>{this.image.material.map=t.texture},onComplete:()=>{this.hover.clear(!0)}},"<"):this.hover.to(this.wave.material,{opacity:1,duration:.8,onComplete:()=>{this.hover.clear(!0)}})}}async function hM(){const s=ja,e=document.querySelector("#canvas"),t=new Gc({antialias:!0,alpha:!0,canvas:e});t.setClearColor(16777215,1),t.shadowMap.enabled=!0;const n={width:window.innerWidth,height:window.innerHeight},i=new rd,r=new ed,a=new lp;r.setPath("./assets/projects/");const o=new Xf;o.fog=new Vc(15790320,.1,500);const c=new cn(75,n.width/n.height,1,500);c.position.set(0,33,97);const l=new od(c,t.domElement);l.enableDamping=!0,l.maxAzimuthAngle=Math.PI/2,l.maxPolarAngle=Math.PI,l.enableZoom=!1,l.enablePan=!1,l.enabled=!1,l.dampingFactor=.1,l.saveState();const u=new sd,h=new ue,f=new ap({about:"project"}),d=await a.loadAsync("./assets/fonts/Gugi_Regular.json");let g=[];const m=Jn.timeline({id:"rotation"});let p="";const _=90,M={waveColor:"#00ffff",backgroundColor:"#ffffff",texture:r.load(f.data[0].img),fogColor:"#f0f0f0"},x=()=>{const N=new bi;N.name="renderPlanet";const Y=new bi,q=new uM({params:M});o.add(q.wave,q.image);let F=[];for(let O=_;O<=360;O+=_){let X=new cM({index:O,font:d,data:f});X.numberText.position.set(0,100,8),X.titleText.position.set(3,-51,2),N.add(X.numberText,X.titleText),Y.add(X.planet),F.push(X)}N.add(Y),N.rotation.x=-Math.PI/3,o.add(N);const B=new yy(16777215,1);B.castShadow=!0,B.shadow.mapSize.width=1024,B.shadow.mapSize.height=1024,B.shadow.radius=10,B.position.set(15,30,15),o.add(B);const C=new id(16777215,.8);return C.castShadow=!0,C.shadow.mapSize.width=1024,C.shadow.mapSize.height=1024,C.shadow.radius=10,C.position.set(-15,15,15),o.add(C),{plantArry:F,wave:q,heartGroup:Y}},v=()=>{n.width=window.innerWidth,n.height=window.innerHeight,c.aspect=n.width/n.height,c.updateProjectionMatrix(),t.setSize(n.width,n.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})};function b(N,Y){h.x=(N.clientX/window.innerWidth-.5)*2,h.y=-(N.clientY/window.innerHeight-.5)*2,u.setFromCamera(h,c);const q=u.intersectObjects(o.children);if(q.length>0){const F=q[0].object;if(F.parent.name==="planet"){if(Y.filter(O=>O.planet.id===F.parent.id)[0].heartAnime("hover"),g.filter(O=>O.parent.id===F.parent.id).length>0)return;g.push(F)}else g.length>0&&(g=[],Y.forEach(B=>{B.isClick||B.heartAnime()}))}}function T(N,Y,q){h.x=(N.clientX/window.innerWidth-.5)*2,h.y=-(N.clientY/window.innerHeight-.5)*2;const F=u.intersectObjects(o.children);if(F.length>0&&!m.isActive()){const B=F[0].object;if(B.parent.name==="planet"){l.reset();let C=B.userData.index-3;C<0&&(C=C+Y.length);const O=Y.filter(X=>X.planet.id===B.parent.id);if(O[0].isClick)return;Y.forEach(X=>{X.heartAnime(),X.animation("samll"),X.isClick=!1}),O[0].isClick=!0,q.animation("small"),O[0].animation("big"),O[0].heartAnime("hover"),M.texture=r.load(f.data[B.userData.index].img),q.animation("hover",M),document.querySelector("#warning-click").setAttribute("class","show")}else E(Y,q)}}const E=(N,Y)=>{document.querySelector("#warning-click").removeAttribute("class","show"),N.forEach(q=>{q.animation("small"),q.heartAnime(),Y.animation(),q.isClick=!1})};function y(N,Y){const q=u.intersectObjects(o.children);if(q.length>0){const F=q[0].object;F.parent.name==="planet"&&m.to(l.object.position,{y:25.67,z:16.59,duration:2,onStart:()=>{N.animation("small")}},"<").to(Y.rotation,{z:Math.PI*4,duration:2,onComplete:()=>{S(F.userData.index),m.clear(!0)}},"<")}}const S=N=>{document.querySelector("#warning-click").removeAttribute("class","show"),document.querySelector("header").setAttribute("class","disable"),zp(f,N),document.querySelector("#scroll").setAttribute("class","disable"),cancelAnimationFrame(p)},P=N=>{m.to(N.heartGroup.rotation,{z:-Math.PI*4,duration:2},"<").to(l.object.position,{x:l.position0.x,y:l.position0.y,z:l.position0.z,duration:2,onComplete:()=>{N.wave.animation("hover",M),m.clear(!0)}},"<")},U=N=>{const{plantArry:Y,wave:q,heartGroup:F}=N;window.addEventListener("resize",v),e.addEventListener("pointermove",B=>b(B,Y)),s.onClearProDescription(()=>{document.querySelector("#warning-click").setAttribute("class","show"),document.querySelector("#scroll").removeAttribute("class","disable"),document.querySelector("header").removeAttribute("class","disable"),P(N),j(N)}),e.addEventListener("pointerdown",B=>T(B,Y,q)),e.addEventListener("dblclick",()=>y(q,F))},j=N=>{const{plantArry:Y,wave:q,heartGroup:F}=N;Y.forEach(B=>B.update(i.getElapsedTime())),q.update(i),l.update(),t.render(o,c),p=requestAnimationFrame(()=>{j(N)})},W=async()=>{const N=x();U(N),v(),j(N)},I=()=>{cancelAnimationFrame(p),o.clear(),t.dispose(),l.dispose()};s.onDestroyProject(()=>{document.querySelector("#warning-click").removeAttribute("class","show"),I()}),await W()}function fM(){const s=ja;s.onInitProject(async()=>await hM()),s.onInitCarrer(async()=>await lM()),document.querySelectorAll("#right-buttons .button-in-header").forEach((t,n)=>{t.addEventListener("click",i=>{const r=document.getElementById("active-menu").textContent.toString();if(!(t.textContent===document.getElementById("active-menu").textContent&&n!==0))switch(document.getElementById("active-menu").removeAttribute("id"),t.setAttribute("id","active-menu"),n){case 0:{t.textContent==="CARRER"?(s.destroyCarrer(),s.initProject(),t.textContent="PROJECT"):(s.destroyProject(),s.initCarrer(),t.textContent="CARRER");break}case 1:{r==="CARRER"?s.destroyCarrer():r==="PROJECT"?s.destroyProject():s.destroyAbout(),s.initToy();break}case 2:{r==="CARRER"?s.destroyCarrer():r==="PROJECT"?s.destroyProject():s.destroyToy(),s.initAbout();break}}})}),document.querySelector("#home").addEventListener("click",t=>{document.querySelectorAll("#right-buttons .button-in-header").forEach((n,i)=>{const r=document.getElementById("active-menu").textContent.toString();i===0&&(document.getElementById("active-menu").removeAttribute("id"),n.setAttribute("id","active-menu"),r.includes("TOY")?s.destroyToy():r.includes("ABOUT")?s.destroyAbout():r==="PROJECT"&&s.destroyProject(),s.initCarrer())})}),window.addEventListener("load",()=>{s.initCarrer()})}fM();
