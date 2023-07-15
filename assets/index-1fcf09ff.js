var Xp=Object.defineProperty;var qp=(s,t,e)=>t in s?Xp(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Su=(s,t,e)=>(qp(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="147",Nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$p=0,wu=1,Yp=2,Lf=1,jp=2,Vs=3,ys=0,Vn=1,Ui=2,Xi=0,hs=1,Tu=2,Eu=3,Au=4,Zp=5,ns=100,Jp=101,Kp=102,Cu=103,Pu=104,Qp=200,tm=201,em=202,nm=203,Df=204,Rf=205,im=206,rm=207,sm=208,om=209,am=210,lm=0,cm=1,um=2,ec=3,hm=4,fm=5,dm=6,pm=7,ka=0,mm=1,gm=2,Ti=0,_m=1,xm=2,vm=3,ym=4,bm=5,If=300,bs=301,Ms=302,nc=303,ic=304,Ua=306,rc=1e3,Zn=1001,sc=1002,cn=1003,Lu=1004,Du=1005,Fn=1006,Mm=1007,Ba=1008,wr=1009,Sm=1010,wm=1011,Of=1012,Tm=1013,ur=1014,hr=1015,lo=1016,Em=1017,Am=1018,fs=1020,Cm=1021,Pm=1022,Jn=1023,Lm=1024,Dm=1025,pr=1026,Ss=1027,Rm=1028,Im=1029,Om=1030,Fm=1031,zm=1033,Qa=33776,tl=33777,el=33778,nl=33779,Ru=35840,Iu=35841,Ou=35842,Fu=35843,Nm=36196,zu=37492,Nu=37496,ku=37808,Uu=37809,Bu=37810,Vu=37811,Gu=37812,Hu=37813,Wu=37814,Xu=37815,qu=37816,$u=37817,Yu=37818,ju=37819,Zu=37820,Ju=37821,Ku=36492,Tr=3e3,pe=3001,km=3200,Um=3201,Va=0,Bm=1,ti="srgb",co="srgb-linear",il=7680,Vm=519,Qu=35044,th="300 es",oc=1035;class Or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,eh=180/Math.PI;function Ds(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function Gm(s,t){return(s%t+t)%t}function sl(s,t,e){return(1-e)*s+e*t}function nh(s){return(s&s-1)===0&&s!==0}function ac(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Co(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(){Cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],_=i[6],y=i[1],x=i[4],v=i[7],M=i[2],E=i[5],A=i[8];return r[0]=o*m+a*y+l*M,r[3]=o*p+a*x+l*E,r[6]=o*_+a*v+l*A,r[1]=c*m+u*y+h*M,r[4]=c*p+u*x+h*E,r[7]=c*_+u*v+h*A,r[2]=f*m+d*y+g*M,r[5]=f*p+d*x+g*E,r[8]=f*_+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=h*m,t[1]=(i*c-u*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(u*e-i*l)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Cn;function Ff(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const al={[ti]:{[co]:mr},[co]:{[ti]:ha}},Je={legacyMode:!0,get workingColorSpace(){return co},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(al[t]&&al[t][e]!==void 0){const n=al[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pe={r:0,g:0,b:0},Xn={h:0,s:0,l:0},Po={h:0,s:0,l:0};function ll(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Lo(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Je.workingColorSpace){return this.r=t,this.g=e,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Je.workingColorSpace){if(t=Gm(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ll(o,r,t+1/3),this.g=ll(o,r,t),this.b=ll(o,r,t-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(t,e=ti){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Je.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Je.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Je.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Je.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=ti){const n=zf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Je.fromWorkingColorSpace(Lo(this,Pe),t),We(Pe.r*255,0,255)<<16^We(Pe.g*255,0,255)<<8^We(Pe.b*255,0,255)<<0}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Lo(this,Pe),e);const n=Pe.r,i=Pe.g,r=Pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lo(this,Pe),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ti){return Je.fromWorkingColorSpace(Lo(this,Pe),t),t!==ti?`color(${t} ${Pe.r} ${Pe.g} ${Pe.b})`:`rgb(${Pe.r*255|0},${Pe.g*255|0},${Pe.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Xn),Xn.h+=t,Xn.s+=e,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Po);const n=sl(Xn.h,Po.h,e),i=sl(Xn.s,Po.s,e),r=sl(Xn.l,Po.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}te.NAMES=zf;let Ur;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ur===void 0&&(Ur=uo("canvas")),Ur.width=t.width,Ur.height=t.height;const n=Ur.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=uo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class kf{constructor(t=null){this.isSource=!0,this.uuid=Ds(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cl(i[o].image)):r.push(cl(i[o]))}else r=cl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hm=0;class fn extends Or{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=Zn,i=Zn,r=Fn,o=Ba,a=Jn,l=wr,c=fn.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ds(),this.name="",this.source=new kf(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rc:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rc:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=If;fn.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,M=(_+1)/2,E=(u+f)/4,A=(h+m)/4,b=(g+p)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=A/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=b/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=b/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Er extends Or{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uf extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wm extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const _=l*f+c*d+u*g+h*m,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,_*y);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const v=a*y;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+m*v,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,u=l*n+a*e-r*i,h=l*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new F,ih=new Ar;class wo{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Qi.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Qi)}else n.boundingBox===null&&n.computeBoundingBox(),hl.copy(n.boundingBox),hl.applyMatrix4(t.matrixWorld),this.union(hl);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Do.subVectors(this.max,Is),Br.subVectors(t.a,Is),Vr.subVectors(t.b,Is),Gr.subVectors(t.c,Is),Di.subVectors(Vr,Br),Ri.subVectors(Gr,Vr),tr.subVectors(Br,Gr);let e=[0,-Di.z,Di.y,0,-Ri.z,Ri.y,0,-tr.z,tr.y,Di.z,0,-Di.x,Ri.z,0,-Ri.x,tr.z,0,-tr.x,-Di.y,Di.x,0,-Ri.y,Ri.x,0,-tr.y,tr.x,0];return!fl(e,Br,Vr,Gr,Do)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Br,Vr,Gr,Do))?!1:(Ro.crossVectors(Di,Ri),e=[Ro.x,Ro.y,Ro.z],fl(e,Br,Vr,Gr,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new F,new F,new F,new F,new F,new F,new F,new F],Qi=new F,hl=new wo,Br=new F,Vr=new F,Gr=new F,Di=new F,Ri=new F,tr=new F,Is=new F,Do=new F,Ro=new F,er=new F;function fl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){er.fromArray(s,r);const a=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),l=t.dot(er),c=e.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xm=new wo,Os=new F,dl=new F;class Vc{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(dl)),this.expandByPoint(Os.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new F,pl=new F,Io=new F,Ii=new F,ml=new F,Oo=new F,gl=new F;class Bf{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.direction).multiplyScalar(e).add(this.origin),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pl.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(pl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=Ii.dot(this.direction),l=-Ii.dot(Io),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Io).multiplyScalar(f).add(pl),d}intersectSphere(t,e){di.subVectors(t.center,this.origin);const n=di.dot(this.direction),i=di.dot(di)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,i,r){ml.subVectors(e,t),Oo.subVectors(n,t),gl.crossVectors(ml,Oo);let o=this.direction.dot(gl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const l=a*this.direction.dot(Oo.crossVectors(Ii,Oo));if(l<0)return null;const c=a*this.direction.dot(ml.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,l,c,u,h,f,d,g,m,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hr.setFromMatrixColumn(t,0).length(),r=1/Hr.setFromMatrixColumn(t,1).length(),o=1/Hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;e[0]=f+m*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;e[0]=f-m*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=m-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-m*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,$m)}lookAt(t,e,n){const i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(n,yn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(n,yn)),Oi.normalize(),Fo.crossVectors(yn,Oi),i[0]=Oi.x,i[4]=Fo.x,i[8]=yn.x,i[1]=Oi.y,i[5]=Fo.y,i[9]=yn.y,i[2]=Oi.z,i[6]=Fo.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],y=n[3],x=n[7],v=n[11],M=n[15],E=i[0],A=i[4],b=i[8],S=i[12],P=i[1],B=i[5],Y=i[9],W=i[13],O=i[2],k=i[6],X=i[10],N=i[14],R=i[3],$=i[7],T=i[11],z=i[15];return r[0]=o*E+a*P+l*O+c*R,r[4]=o*A+a*B+l*k+c*$,r[8]=o*b+a*Y+l*X+c*T,r[12]=o*S+a*W+l*N+c*z,r[1]=u*E+h*P+f*O+d*R,r[5]=u*A+h*B+f*k+d*$,r[9]=u*b+h*Y+f*X+d*T,r[13]=u*S+h*W+f*N+d*z,r[2]=g*E+m*P+p*O+_*R,r[6]=g*A+m*B+p*k+_*$,r[10]=g*b+m*Y+p*X+_*T,r[14]=g*S+m*W+p*N+_*z,r[3]=y*E+x*P+v*O+M*R,r[7]=y*A+x*B+v*k+M*$,r[11]=y*b+x*Y+v*X+M*T,r[15]=y*S+x*W+v*N+M*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],m=t[7],p=t[11],_=t[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+m*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],m=t[13],p=t[14],_=t[15],y=h*p*c-m*f*c+m*l*d-a*p*d-h*l*_+a*f*_,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*_-o*f*_,v=u*m*c-g*h*c+g*a*d-o*m*d-u*a*_+o*h*_,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,E=e*y+n*x+i*v+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(m*f*r-h*p*r-m*i*d+n*p*d+h*i*_-n*f*_)*A,t[2]=(a*p*r-m*l*r+m*i*c-n*p*c-a*i*_+n*l*_)*A,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*A,t[4]=x*A,t[5]=(u*p*r-g*f*r+g*i*d-e*p*d-u*i*_+e*f*_)*A,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*_-e*l*_)*A,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*A,t[8]=v*A,t[9]=(g*h*r-u*m*r-g*n*d+e*m*d+u*n*_-e*h*_)*A,t[10]=(o*m*r-g*a*r+g*n*c-e*m*c-o*n*_+e*a*_)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*A,t[12]=M*A,t[13]=(u*m*i-g*h*i+g*n*f-e*m*f-u*n*p+e*h*p)*A,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*p-e*a*p)*A,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,m=o*u,p=o*h,_=a*h,y=l*c,x=l*u,v=l*h,M=n.x,E=n.y,A=n.z;return i[0]=(1-(m+_))*M,i[1]=(d+v)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+_))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+x)*A,i[9]=(p-y)*A,i[10]=(1-(f+m))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Hr.set(i[0],i[1],i[2]).length();const o=Hr.set(i[4],i[5],i[6]).length(),a=Hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qn.copy(this);const c=1/r,u=1/o,h=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,l=1/(e-t),c=1/(n-i),u=1/(o-r),h=(e+t)*l,f=(n+i)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hr=new F,qn=new Se,qm=new F(0,0,0),$m=new F(1,1,1),Oi=new F,Fo=new F,yn=new F,rh=new Se,sh=new Ar;class To{constructor(t=0,e=0,n=0,i=To.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}To.DefaultOrder="XYZ";To.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ym=0;const oh=new F,Wr=new Ar,pi=new Se,zo=new F,Fs=new F,jm=new F,Zm=new Ar,ah=new F(1,0,0),lh=new F(0,1,0),ch=new F(0,0,1),Jm={type:"added"},uh={type:"removed"};class Ye extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const t=new F,e=new To,n=new Ar,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Cn}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DefaultMatrixWorldAutoUpdate,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zo.copy(t):zo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Fs,zo,this.up):pi.lookAt(zo,Fs,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Wr.setFromRotationMatrix(pi),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(uh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DefaultUp=new F(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.DefaultMatrixWorldAutoUpdate=!0;const $n=new F,mi=new F,_l=new F,gi=new F,Xr=new F,qr=new F,hh=new F,xl=new F,vl=new F,yl=new F;class yi{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$n.subVectors(t,e),i.cross($n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$n.subVectors(i,e),mi.subVectors(n,e),_l.subVectors(t,e);const o=$n.dot($n),a=$n.dot(mi),l=$n.dot(_l),c=mi.dot(mi),u=mi.dot(_l),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gi),l.set(0,0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l}static isFrontFacing(t,e,n,i){return $n.subVectors(n,e),mi.subVectors(t,e),$n.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),$n.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return yi.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Xr.subVectors(i,n),qr.subVectors(r,n),xl.subVectors(t,n);const l=Xr.dot(xl),c=qr.dot(xl);if(l<=0&&c<=0)return e.copy(n);vl.subVectors(t,i);const u=Xr.dot(vl),h=qr.dot(vl);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Xr,o);yl.subVectors(t,r);const d=Xr.dot(yl),g=qr.dot(yl);if(g>=0&&d<=g)return e.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(qr,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return hh.subVectors(r,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(hh,a);const _=1/(p+m+f);return o=m*_,a=f*_,e.copy(n).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Km=0;class Fr extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=hs,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Df,this.blendDst=Rf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ys&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sa extends Fr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new F,No=new ut;class si{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Qu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Co(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Co(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Co(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Co(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qu&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vf extends si{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gf extends si{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gn extends si{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qm=0;const Rn=new Se,bl=new Ye,$r=new F,bn=new wo,zs=new wo,Ie=new F;class Pi extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?Gf:Vf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Cn().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(bn.min,zs.min),bn.expandByPoint(Ie),Ie.addVectors(bn.max,zs.max),bn.expandByPoint(Ie)):(bn.expandByPoint(zs.min),bn.expandByPoint(zs.max))}bn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ie.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(t,c),Ie.add($r)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new F,u[P]=new F;const h=new F,f=new F,d=new F,g=new ut,m=new ut,p=new ut,_=new F,y=new F;function x(P,B,Y){h.fromArray(i,P*3),f.fromArray(i,B*3),d.fromArray(i,Y*3),g.fromArray(o,P*2),m.fromArray(o,B*2),p.fromArray(o,Y*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const W=1/(m.x*p.y-p.x*m.y);isFinite(W)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(W),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(W),c[P].add(_),c[B].add(_),c[Y].add(_),u[P].add(y),u[B].add(y),u[Y].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let P=0,B=v.length;P<B;++P){const Y=v[P],W=Y.start,O=Y.count;for(let k=W,X=W+O;k<X;k+=3)x(n[k+0],n[k+1],n[k+2])}const M=new F,E=new F,A=new F,b=new F;function S(P){A.fromArray(r,P*3),b.copy(A);const B=c[P];M.copy(B),M.sub(A.multiplyScalar(A.dot(B))).normalize(),E.crossVectors(b,B);const W=E.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=W}for(let P=0,B=v.length;P<B;++P){const Y=v[P],W=Y.start,O=Y.count;for(let k=W,X=W+O;k<X;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new si(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new Se,Yr=new Bf,Ml=new Vc,Fi=new F,zi=new F,Ni=new F,Sl=new F,wl=new F,Tl=new F,ko=new F,Uo=new F,Bo=new F,Vo=new ut,Go=new ut,Ho=new ut,El=new F,Wo=new F;class $e extends Ye{constructor(t=new Pi,e=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(r),t.ray.intersectsSphere(Ml)===!1)||(fh.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(fh),n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const _=d[m],y=i[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=x,E=v;M<E;M+=3){const A=a.getX(M),b=a.getX(M+1),S=a.getX(M+2);o=Xo(this,y,t,Yr,l,c,u,h,f,A,b,S),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,y=p;_<y;_+=3){const x=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);o=Xo(this,i,t,Yr,l,c,u,h,f,x,v,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const _=d[m],y=i[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=x,E=v;M<E;M+=3){const A=M,b=M+1,S=M+2;o=Xo(this,y,t,Yr,l,c,u,h,f,A,b,S),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=m,y=p;_<y;_+=3){const x=_,v=_+1,M=_+2;o=Xo(this,i,t,Yr,l,c,u,h,f,x,v,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function tg(s,t,e,n,i,r,o,a){let l;if(t.side===Vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side!==Ui,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:s}}function Xo(s,t,e,n,i,r,o,a,l,c,u,h){Fi.fromBufferAttribute(i,c),zi.fromBufferAttribute(i,u),Ni.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){ko.set(0,0,0),Uo.set(0,0,0),Bo.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const p=f[g],_=r[g];p!==0&&(Sl.fromBufferAttribute(_,c),wl.fromBufferAttribute(_,u),Tl.fromBufferAttribute(_,h),o?(ko.addScaledVector(Sl,p),Uo.addScaledVector(wl,p),Bo.addScaledVector(Tl,p)):(ko.addScaledVector(Sl.sub(Fi),p),Uo.addScaledVector(wl.sub(zi),p),Bo.addScaledVector(Tl.sub(Ni),p)))}Fi.add(ko),zi.add(Uo),Ni.add(Bo)}s.isSkinnedMesh&&(s.boneTransform(c,Fi),s.boneTransform(u,zi),s.boneTransform(h,Ni));const d=tg(s,t,e,n,Fi,zi,Ni,El);if(d){a&&(Vo.fromBufferAttribute(a,c),Go.fromBufferAttribute(a,u),Ho.fromBufferAttribute(a,h),d.uv=yi.getUV(El,Fi,zi,Ni,Vo,Go,Ho,new ut)),l&&(Vo.fromBufferAttribute(l,c),Go.fromBufferAttribute(l,u),Ho.fromBufferAttribute(l,h),d.uv2=yi.getUV(El,Fi,zi,Ni,Vo,Go,Ho,new ut));const g={a:c,b:u,c:h,normal:new F,materialIndex:0};yi.getNormal(Fi,zi,Ni,g.normal),d.face=g}return d}class Eo extends Pi{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(h,2));function g(m,p,_,y,x,v,M,E,A,b,S){const P=v/A,B=M/b,Y=v/2,W=M/2,O=E/2,k=A+1,X=b+1;let N=0,R=0;const $=new F;for(let T=0;T<X;T++){const z=T*B-W;for(let q=0;q<k;q++){const tt=q*P-Y;$[m]=tt*y,$[p]=z*x,$[_]=O,c.push($.x,$.y,$.z),$[m]=0,$[p]=0,$[_]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(q/A),h.push(1-T/b),N+=1}}for(let T=0;T<b;T++)for(let z=0;z<A;z++){const q=f+z+k*T,tt=f+z+k*(T+1),rt=f+(z+1)+k*(T+1),lt=f+(z+1)+k*T;l.push(q,tt,lt),l.push(tt,rt,lt),R+=6}a.addGroup(d,R,S),d+=R,f+=N}}static fromJSON(t){return new Eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(s){const t={};for(let e=0;e<s.length;e++){const n=ws(s[e]);for(const i in n)t[i]=n[i]}return t}function eg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hf(s){return s.getRenderTarget()===null&&s.outputEncoding===pe?ti:co}const ng={clone:ws,merge:tn};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Fr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=eg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wf extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Wf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const jr=-90,Zr=1;class sg extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new un(jr,Zr,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new un(jr,Zr,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new un(jr,Zr,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new un(jr,Zr,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new un(jr,Zr,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new un(jr,Zr,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Ti,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Xf extends fn{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class og extends Er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Eo(5,5,5),r=new Cr({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Xi});r.uniforms.tEquirect.value=e;const o=new $e(i,r),a=e.minFilter;return e.minFilter===Ba&&(e.minFilter=Fn),new sg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Al=new F,ag=new F,lg=new Cn;class rr{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Al.subVectors(n,e).cross(ag.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lg.getNormalMatrix(t),i=this.coplanarPoint(Al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Vc,qo=new F;class Hc{constructor(t=new rr,e=new rr,n=new rr,i=new rr,r=new rr,o=new rr){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],y=n[14],x=n[15];return e[0].setComponents(a-i,h-l,m-f,x-p).normalize(),e[1].setComponents(a+i,h+l,m+f,x+p).normalize(),e[2].setComponents(a+r,h+c,m+d,x+_).normalize(),e[3].setComponents(a-r,h-c,m-d,x-_).normalize(),e[4].setComponents(a-o,h-u,m-g,x-y).normalize(),e[5].setComponents(a+o,h+u,m+g,x+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Jr)}intersectsSprite(t){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(qo.x=i.normal.x>0?t.max.x:t.min.x,qo.y=i.normal.y>0?t.max.y:t.min.y,qo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function cg(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(e?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class gr extends Pi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const y=_*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-y,0),m.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const x=y+c*_,v=y+c*(_+1),M=y+1+c*(_+1),E=y+1+c*_;d.push(x,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(m,3)),this.setAttribute("uv",new Gn(p,2))}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}var ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg="vec3 transformed = vec3( position );",_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,vg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
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
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$g=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,Qg=`#if defined( USE_ENVMAP )
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,s_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
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
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,w_=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,n0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,i0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,r0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,s0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,o0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y0=`uniform float scale;
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
}`,b0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,P0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,F0=`#define TOON
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
}`,z0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,U0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,V0=`uniform vec3 diffuse;
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
}`,$t={alphamap_fragment:ug,alphamap_pars_fragment:hg,alphatest_fragment:fg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:xg,iridescence_fragment:vg,bumpmap_pars_fragment:yg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:wg,color_fragment:Tg,color_pars_fragment:Eg,color_pars_vertex:Ag,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Ig,emissivemap_fragment:Og,emissivemap_pars_fragment:Fg,encodings_fragment:zg,encodings_pars_fragment:Ng,envmap_fragment:kg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Bg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Hg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:$g,lightmap_fragment:Yg,lightmap_pars_fragment:jg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Kg,lights_toon_fragment:t_,lights_toon_pars_fragment:e_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:r_,lights_physical_pars_fragment:s_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:f_,map_fragment:d_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:x_,morphcolor_vertex:v_,morphnormal_vertex:y_,morphtarget_pars_vertex:b_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:w_,normal_pars_fragment:T_,normal_pars_vertex:E_,normal_vertex:A_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:R_,output_fragment:I_,packing:O_,premultiplied_alpha_fragment:F_,project_vertex:z_,dithering_fragment:N_,dithering_pars_fragment:k_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:G_,shadowmap_vertex:H_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:$_,skinnormal_vertex:Y_,specularmap_fragment:j_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:K_,transmission_fragment:Q_,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,uv2_pars_fragment:r0,uv2_pars_vertex:s0,uv2_vertex:o0,worldpos_vertex:a0,background_vert:l0,background_frag:c0,backgroundCube_vert:u0,backgroundCube_frag:h0,cube_vert:f0,cube_frag:d0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:y0,linedashed_frag:b0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:w0,meshlambert_frag:T0,meshmatcap_vert:E0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:R0,meshphysical_frag:I0,meshtoon_vert:O0,meshtoon_frag:F0,points_vert:z0,points_frag:N0,shadow_vert:k0,shadow_frag:U0,sprite_vert:B0,sprite_frag:V0},vt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Cn},uv2Transform:{value:new Cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}}},ni={basic:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:tn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:tn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:tn([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:tn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:tn([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:tn([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:tn([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:tn([vt.lights,vt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ni.physical={uniforms:tn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ut(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const $o={r:0,b:0,g:0};function G0(s,t,e,n,i,r,o){const a=new te(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const v=s.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ua)?(u===void 0&&(u=new $e(new Eo(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:ws(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $e(new gr(2,2),new Cr({name:"BackgroundMaterial",uniforms:ws(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){p.getRGB($o,Hf(s)),n.buffers.color.setClear($o.r,$o.g,$o.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function H0(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(O,k,X,N,R){let $=!1;if(o){const T=m(N,X,k);c!==T&&(c=T,d(c.object)),$=_(O,N,X,R),$&&y(O,N,X,R)}else{const T=k.wireframe===!0;(c.geometry!==N.id||c.program!==X.id||c.wireframe!==T)&&(c.geometry=N.id,c.program=X.id,c.wireframe=T,$=!0)}R!==null&&e.update(R,34963),($||u)&&(u=!1,b(O,k,X,N),R!==null&&s.bindBuffer(34963,e.get(R).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,k,X){const N=X.wireframe===!0;let R=a[O.id];R===void 0&&(R={},a[O.id]=R);let $=R[k.id];$===void 0&&($={},R[k.id]=$);let T=$[N];return T===void 0&&(T=p(f()),$[N]=T),T}function p(O){const k=[],X=[],N=[];for(let R=0;R<i;R++)k[R]=0,X[R]=0,N[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:N,object:O,attributes:{},index:null}}function _(O,k,X,N){const R=c.attributes,$=k.attributes;let T=0;const z=X.getAttributes();for(const q in z)if(z[q].location>=0){const rt=R[q];let lt=$[q];if(lt===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(lt=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(lt=O.instanceColor)),rt===void 0||rt.attribute!==lt||lt&&rt.data!==lt.data)return!0;T++}return c.attributesNum!==T||c.index!==N}function y(O,k,X,N){const R={},$=k.attributes;let T=0;const z=X.getAttributes();for(const q in z)if(z[q].location>=0){let rt=$[q];rt===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor));const lt={};lt.attribute=rt,rt&&rt.data&&(lt.data=rt.data),R[q]=lt,T++}c.attributes=R,c.attributesNum=T,c.index=N}function x(){const O=c.newAttributes;for(let k=0,X=O.length;k<X;k++)O[k]=0}function v(O){M(O,0)}function M(O,k){const X=c.newAttributes,N=c.enabledAttributes,R=c.attributeDivisors;X[O]=1,N[O]===0&&(s.enableVertexAttribArray(O),N[O]=1),R[O]!==k&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,k),R[O]=k)}function E(){const O=c.newAttributes,k=c.enabledAttributes;for(let X=0,N=k.length;X<N;X++)k[X]!==O[X]&&(s.disableVertexAttribArray(X),k[X]=0)}function A(O,k,X,N,R,$){n.isWebGL2===!0&&(X===5124||X===5125)?s.vertexAttribIPointer(O,k,X,R,$):s.vertexAttribPointer(O,k,X,N,R,$)}function b(O,k,X,N){if(n.isWebGL2===!1&&(O.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const R=N.attributes,$=X.getAttributes(),T=k.defaultAttributeValues;for(const z in $){const q=$[z];if(q.location>=0){let tt=R[z];if(tt===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(tt=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(tt=O.instanceColor)),tt!==void 0){const rt=tt.normalized,lt=tt.itemSize,K=e.get(tt);if(K===void 0)continue;const Tt=K.buffer,pt=K.type,Et=K.bytesPerElement;if(tt.isInterleavedBufferAttribute){const ft=tt.data,Ot=ft.stride,nt=tt.offset;if(ft.isInstancedInterleavedBuffer){for(let j=0;j<q.locationSize;j++)M(q.location+j,ft.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let j=0;j<q.locationSize;j++)v(q.location+j);s.bindBuffer(34962,Tt);for(let j=0;j<q.locationSize;j++)A(q.location+j,lt/q.locationSize,pt,rt,Ot*Et,(nt+lt/q.locationSize*j)*Et)}else{if(tt.isInstancedBufferAttribute){for(let ft=0;ft<q.locationSize;ft++)M(q.location+ft,tt.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<q.locationSize;ft++)v(q.location+ft);s.bindBuffer(34962,Tt);for(let ft=0;ft<q.locationSize;ft++)A(q.location+ft,lt/q.locationSize,pt,rt,lt*Et,lt/q.locationSize*ft*Et)}}else if(T!==void 0){const rt=T[z];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(q.location,rt);break;case 3:s.vertexAttrib3fv(q.location,rt);break;case 4:s.vertexAttrib4fv(q.location,rt);break;default:s.vertexAttrib1fv(q.location,rt)}}}}E()}function S(){Y();for(const O in a){const k=a[O];for(const X in k){const N=k[X];for(const R in N)g(N[R].object),delete N[R];delete k[X]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const k=a[O.id];for(const X in k){const N=k[X];for(const R in N)g(N[R].object),delete N[R];delete k[X]}delete a[O.id]}function B(O){for(const k in a){const X=a[k];if(X[O.id]===void 0)continue;const N=X[O.id];for(const R in N)g(N[R].object),delete N[R];delete X[O.id]}}function Y(){W(),u=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function W0(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function X0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),d=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),p=s.getParameter(36347),_=s.getParameter(36348),y=s.getParameter(36349),x=f>0,v=o||t.has("OES_texture_float"),M=x&&v,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:E}}function q0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new rr,a=new Cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,x=y*4;let v=_.clippingState||null;l.value=v,v=u(g,f,x,d);for(let M=0;M!==x;++M)v[M]=e[M];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,v=d;x!==m;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function $0(s){let t=new WeakMap;function e(o,a){return a===nc?o.mapping=bs:a===ic&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===nc||a===ic)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new og(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class $f extends Wf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,dh=[.125,.215,.35,.446,.526,.582],cr=20,Cl=new $f,ph=new te;let Pl=null;const sr=(1+Math.sqrt(5))/2,Kr=1/sr,mh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,sr,Kr),new F(0,sr,-Kr),new F(Kr,0,sr),new F(-Kr,0,sr),new F(sr,Kr,0),new F(-sr,Kr,0)];class gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Pl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl),t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:lo,format:Jn,encoding:Tr,depthBuffer:!1},i=_h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(r)),this._blurMaterial=j0(r,t,e)}return i}_compileMaterial(t){const e=new $e(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,i){const a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ph),u.toneMapping=Ti,u.autoClear=!1;const d=new Sa({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),g=new $e(new Eo,d);let m=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,m=!0):(d.color.copy(ph),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Yo(i,y*x,_>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bs||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=mh[(i-1)%mh.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $e(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cr-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):cr;p>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cr}`);const _=[];let y=0;for(let A=0;A<cr;++A){const b=A/m,S=Math.exp(-b*b/2);_.push(S),A===0?y+=S:A<p&&(y+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],M=3*v*(i>x-ss?i-x+ss:0),E=4*(this._cubeSize-v);Yo(e,M,E,3*v,2*v),l.setRenderTarget(e),l.render(h,Cl)}}function Y0(s){const t=[],e=[],n=[];let i=s;const r=s-ss+1+dh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ss?l=dh[o-s+ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,y=new Float32Array(m*g*d),x=new Float32Array(p*g*d),v=new Float32Array(_*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,b=E>2?0:-1,S=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];y.set(S,m*g*E),x.set(f,p*g*E);const P=[E,E,E,E,E,E];v.set(P,_*g*E)}const M=new Pi;M.setAttribute("position",new si(y,m)),M.setAttribute("uv",new si(x,p)),M.setAttribute("faceIndex",new si(v,_)),t.push(M),i>ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _h(s,t,e){const n=new Er(s,t,e);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function j0(s,t,e){const n=new Float32Array(cr),i=new F(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function xh(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function vh(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function Z0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===ic,u=l===bs||l===Ms;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new gh(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new gh(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function J0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K0(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)t.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let x=0,v=y.length;x<v;x+=3){const M=y[x+0],E=y[x+1],A=y[x+2];f.push(M,E,E,A,A,M)}}else{const y=g.array;m=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const M=x+0,E=x+1,A=x+2;f.push(M,E,E,A,A,M)}}const p=new(Ff(f)?Gf:Vf)(f,1);p.version=m;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Q0(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),e.update(d,r,1)}function h(f,d,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,f*l,g),e.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function tx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ex(s,t){return s[0]-t[0]}function nx(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ix(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new de,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let X=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let P=0;v===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let B=u.attributes.position.count*P,Y=1;B>t.maxTextureSize&&(Y=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const W=new Float32Array(B*Y*4*p),O=new Uf(W,B,Y,p);O.type=hr,O.needsUpdate=!0;const k=P*4;for(let N=0;N<p;N++){const R=A[N],$=b[N],T=S[N],z=B*Y*4*N;for(let q=0;q<R.count;q++){const tt=q*k;v===!0&&(o.fromBufferAttribute(R,q),W[z+tt+0]=o.x,W[z+tt+1]=o.y,W[z+tt+2]=o.z,W[z+tt+3]=0),M===!0&&(o.fromBufferAttribute($,q),W[z+tt+4]=o.x,W[z+tt+5]=o.y,W[z+tt+6]=o.z,W[z+tt+7]=0),E===!0&&(o.fromBufferAttribute(T,q),W[z+tt+8]=o.x,W[z+tt+9]=o.y,W[z+tt+10]=o.z,W[z+tt+11]=T.itemSize===4?o.w:1)}}_={count:p,texture:O,size:new ut(B,Y)},r.set(u,_),u.addEventListener("dispose",X)}let y=0;for(let v=0;v<d.length;v++)y+=d[v];const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let M=0;M<m;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<m;M++){const E=p[M];E[0]=M,E[1]=d[M]}p.sort(nx);for(let M=0;M<8;M++)M<m&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ex);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const E=a[M],A=E[0],b=E[1];A!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+M)!==_[A]&&u.setAttribute("morphTarget"+M,_[A]),y&&u.getAttribute("morphNormal"+M)!==y[A]&&u.setAttribute("morphNormal"+M,y[A]),i[M]=b,x+=b):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),y&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function rx(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Yf=new fn,jf=new Uf,Zf=new Wm,Jf=new Xf,yh=[],bh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),wh=new Float32Array(4);function Rs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=yh[i];if(r===void 0&&(r=new Float32Array(i),yh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ga(s,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ox(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function ax(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function lx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function cx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(De(e,n))return;wh.set(n),s.uniformMatrix2fv(this.addr,!1,wh),Re(e,n)}}function ux(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(De(e,n))return;Sh.set(n),s.uniformMatrix3fv(this.addr,!1,Sh),Re(e,n)}}function hx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(De(e,n))return;Mh.set(n),s.uniformMatrix4fv(this.addr,!1,Mh),Re(e,n)}}function fx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function dx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function px(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function mx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function gx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _x(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function vx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function yx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Yf,i)}function bx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zf,i)}function Mx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jf,i)}function Sx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jf,i)}function wx(s){switch(s){case 5126:return sx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Tx(s,t){s.uniform1fv(this.addr,t)}function Ex(s,t){const e=Rs(t,this.size,2);s.uniform2fv(this.addr,e)}function Ax(s,t){const e=Rs(t,this.size,3);s.uniform3fv(this.addr,e)}function Cx(s,t){const e=Rs(t,this.size,4);s.uniform4fv(this.addr,e)}function Px(s,t){const e=Rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lx(s,t){const e=Rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dx(s,t){const e=Rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rx(s,t){s.uniform1iv(this.addr,t)}function Ix(s,t){s.uniform2iv(this.addr,t)}function Ox(s,t){s.uniform3iv(this.addr,t)}function Fx(s,t){s.uniform4iv(this.addr,t)}function zx(s,t){s.uniform1uiv(this.addr,t)}function Nx(s,t){s.uniform2uiv(this.addr,t)}function kx(s,t){s.uniform3uiv(this.addr,t)}function Ux(s,t){s.uniform4uiv(this.addr,t)}function Bx(s,t,e){const n=this.cache,i=t.length,r=Ga(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Yf,r[o])}function Vx(s,t,e){const n=this.cache,i=t.length,r=Ga(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zf,r[o])}function Gx(s,t,e){const n=this.cache,i=t.length,r=Ga(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Jf,r[o])}function Hx(s,t,e){const n=this.cache,i=t.length,r=Ga(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||jf,r[o])}function Wx(s){switch(s){case 5126:return Tx;case 35664:return Ex;case 35665:return Ax;case 35666:return Cx;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Rx;case 35667:case 35671:return Ix;case 35668:case 35672:return Ox;case 35669:case 35673:return Fx;case 5125:return zx;case 36294:return Nx;case 36295:return kx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}class Xx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=wx(e.type)}}class qx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Wx(e.type)}}class $x{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function Th(s,t){s.seq.push(t),s.map[t.id]=t}function Yx(s,t,e){const n=s.name,i=n.length;for(Ll.lastIndex=0;;){const r=Ll.exec(n),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Th(e,c===void 0?new Xx(a,s,t):new qx(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new $x(a),Th(e,h)),e=h}}}class fa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Yx(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Eh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let jx=0;function Zx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jx(s){switch(s){case Tr:return["Linear","( value )"];case pe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ah(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zx(s.getShaderSource(t),o)}else return i}function Kx(s,t){const e=Jx(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qx(s,t){let e;switch(t){case _m:e="Linear";break;case xm:e="Reinhard";break;case vm:e="OptimizedCineon";break;case ym:e="ACESFilmic";break;case bm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function ev(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nv(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Gs(s){return s!==""}function Ch(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(s){return s.replace(iv,rv)}function rv(s,t){const e=$t[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return lc(e)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(s){return s.replace(sv,ov)}function ov(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function av(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vs&&(t="SHADOWMAP_TYPE_VSM"),t}function lv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case Ms:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function uv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ka:t="ENVMAP_BLENDING_MULTIPLY";break;case mm:t="ENVMAP_BLENDING_MIX";break;case gm:t="ENVMAP_BLENDING_ADD";break}return t}function hv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=av(e),c=lv(e),u=cv(e),h=uv(e),f=hv(e),d=e.isWebGL2?"":tv(e),g=ev(r),m=i.createProgram();let p,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(p=[Dh(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),_=[d,Dh(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.encodings_pars_fragment,Kx("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=lc(o),o=Ch(o,e),o=Ph(o,e),a=lc(a),a=Ch(a,e),a=Ph(a,e),o=Lh(o),a=Lh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+p+o,v=y+_+a,M=Eh(i,35633,x),E=Eh(i,35632,v);if(i.attachShader(m,M),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(E).trim();let Y=!0,W=!0;if(i.getProgramParameter(m,35714)===!1){Y=!1;const O=Ah(i,M,"vertex"),k=Ah(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+O+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||B==="")&&(W=!1);W&&(this.diagnostics={runnable:Y,programLog:S,vertexShader:{log:P,prefix:p},fragmentShader:{log:B,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new fa(i,m)),A};let b;return this.getAttributes=function(){return b===void 0&&(b=nv(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=jx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let dv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mv(t),e.set(t,n)),n}}class mv{constructor(t){this.id=dv++,this.code=t,this.usedTimes=0}}function gv(s,t,e,n,i,r,o){const a=new Gc,l=new pv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,S,P,B,Y){const W=B.fog,O=Y.geometry,k=b.isMeshStandardMaterial?B.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),N=X&&X.mapping===Ua?X.image.height:null,R=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,T=$!==void 0?$.length:0;let z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let q,tt,rt,lt;if(R){const Ot=ni[R];q=Ot.vertexShader,tt=Ot.fragmentShader}else q=b.vertexShader,tt=b.fragmentShader,l.update(b),rt=l.getVertexShaderID(b),lt=l.getFragmentShaderID(b);const K=s.getRenderTarget(),Tt=b.alphaTest>0,pt=b.clearcoat>0,Et=b.iridescence>0;return{isWebGL2:u,shaderID:R,shaderName:b.type,vertexShader:q,fragmentShader:tt,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:K===null?s.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:Tr,map:!!b.map,matcap:!!b.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:N,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Bm,tangentSpaceNormalMap:b.normalMapType===Va,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===pe,clearcoat:pt,clearcoatMap:pt&&!!b.clearcoatMap,clearcoatRoughnessMap:pt&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:pt&&!!b.clearcoatNormalMap,iridescence:Et,iridescenceMap:Et&&!!b.iridescenceMap,iridescenceThicknessMap:Et&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===hs,alphaMap:!!b.alphaMap,alphaTest:Tt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!W,useFog:b.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:Ti,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ui,flipSided:b.side===Vn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(_(S,b),y(S,b),S.push(s.outputEncoding)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputEncoding),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.combine),b.push(S.vertexUvs),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),b.push(a.mask)}function x(b){const S=g[b.type];let P;if(S){const B=ni[S];P=ng.clone(B.uniforms)}else P=b.uniforms;return P}function v(b,S){let P;for(let B=0,Y=c.length;B<Y;B++){const W=c[B];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new fv(s,S,b,r),c.push(P)),P}function M(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function _v(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ih(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,m,p){let _=s[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},s[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),t++,_}function a(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):e.push(_)}function l(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||xv),n.length>1&&n.sort(f||Rh),i.length>1&&i.sort(f||Rh)}function u(){for(let h=t,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function vv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ih,s.set(n,[o])):i>=r.length?(o=new Ih,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new te};break;case"SpotLight":e={position:new F,direction:new F,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function bv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Mv=0;function Sv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wv(s,t){const e=new yv,n=bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,o=new Se,a=new Se;function l(u,h){let f=0,d=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,p=0,_=0,y=0,x=0,v=0,M=0,E=0,A=0,b=0;u.sort(Sv);const S=h!==!0?Math.PI:1;for(let B=0,Y=u.length;B<Y;B++){const W=u[B],O=W.color,k=W.intensity,X=W.distance,N=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)f+=O.r*k*S,d+=O.g*k*S,g+=O.b*k*S;else if(W.isLightProbe)for(let R=0;R<9;R++)i.probe[R].addScaledVector(W.sh.coefficients[R],k);else if(W.isDirectionalLight){const R=e.get(W);if(R.color.copy(W.color).multiplyScalar(W.intensity*S),W.castShadow){const $=W.shadow,T=n.get(W);T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,i.directionalShadow[m]=T,i.directionalShadowMap[m]=N,i.directionalShadowMatrix[m]=W.shadow.matrix,v++}i.directional[m]=R,m++}else if(W.isSpotLight){const R=e.get(W);R.position.setFromMatrixPosition(W.matrixWorld),R.color.copy(O).multiplyScalar(k*S),R.distance=X,R.coneCos=Math.cos(W.angle),R.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),R.decay=W.decay,i.spot[_]=R;const $=W.shadow;if(W.map&&(i.spotLightMap[A]=W.map,A++,$.updateMatrices(W),W.castShadow&&b++),i.spotLightMatrix[_]=$.matrix,W.castShadow){const T=n.get(W);T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,i.spotShadow[_]=T,i.spotShadowMap[_]=N,E++}_++}else if(W.isRectAreaLight){const R=e.get(W);R.color.copy(O).multiplyScalar(k),R.halfWidth.set(W.width*.5,0,0),R.halfHeight.set(0,W.height*.5,0),i.rectArea[y]=R,y++}else if(W.isPointLight){const R=e.get(W);if(R.color.copy(W.color).multiplyScalar(W.intensity*S),R.distance=W.distance,R.decay=W.decay,W.castShadow){const $=W.shadow,T=n.get(W);T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,T.shadowCameraNear=$.camera.near,T.shadowCameraFar=$.camera.far,i.pointShadow[p]=T,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=W.shadow.matrix,M++}i.point[p]=R,p++}else if(W.isHemisphereLight){const R=e.get(W);R.skyColor.copy(W.color).multiplyScalar(k*S),R.groundColor.copy(W.groundColor).multiplyScalar(k*S),i.hemi[x]=R,x++}}y>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==x||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=x,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=A,i.version=Mv++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Oh(s,t){const e=new wv(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tv(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Oh(s,t),e.set(r,[l])):o>=a.length?(l=new Oh(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ev extends Fr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Av extends Fr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
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
}`;function Lv(s,t,e){let n=new Hc;const i=new ut,r=new ut,o=new de,a=new Ev({depthPacking:Um}),l=new Av,c={},u=e.maxTextureSize,h={0:Vn,1:ys,2:Ui},f=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Cv,fragmentShader:Pv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pi;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new $e(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf,this.render=function(v,M,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const A=s.getRenderTarget(),b=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Xi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let B=0,Y=v.length;B<Y;B++){const W=v[B],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const k=O.getFrameExtents();if(i.multiply(k),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,O.mapSize.y=r.y)),O.map===null){const N=this.type!==Vs?{minFilter:cn,magFilter:cn}:{};O.map=new Er(i.x,i.y,N),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const X=O.getViewportCount();for(let N=0;N<X;N++){const R=O.getViewport(N);o.set(r.x*R.x,r.y*R.y,r.x*R.z,r.y*R.w),P.viewport(o),O.updateMatrices(W,N),n=O.getFrustum(),x(M,E,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Vs&&_(O,E),O.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(A,b,S)};function _(v,M){const E=t.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Er(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(M,null,E,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(M,null,E,d,m,null)}function y(v,M,E,A,b,S){let P=null;const B=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(B!==void 0?P=B:P=E.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Y=P.uuid,W=M.uuid;let O=c[Y];O===void 0&&(O={},c[Y]=O);let k=O[W];k===void 0&&(k=P.clone(),O[W]=k),P=k}return P.visible=M.visible,P.wireframe=M.wireframe,S===Vs?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=A,P.farDistance=b),P}function x(v,M,E,A,b){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===Vs)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const B=t.update(v),Y=v.material;if(Array.isArray(Y)){const W=B.groups;for(let O=0,k=W.length;O<k;O++){const X=W[O],N=Y[X.materialIndex];if(N&&N.visible){const R=y(v,N,A,E.near,E.far,b);s.renderBufferDirect(E,null,B,R,v,X)}}}else if(Y.visible){const W=y(v,Y,A,E.near,E.far,b);s.renderBufferDirect(E,null,B,W,v,null)}}const P=v.children;for(let B=0,Y=P.length;B<Y;B++)x(P[B],M,E,A,b)}}function Dv(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const et=new de;let at=null;const _t=new de(0,0,0,0);return{setMask:function(wt){at!==wt&&!I&&(s.colorMask(wt,wt,wt,wt),at=wt)},setLocked:function(wt){I=wt},setClear:function(wt,Yt,he,ue,Nt){Nt===!0&&(wt*=ue,Yt*=ue,he*=ue),et.set(wt,Yt,he,ue),_t.equals(et)===!1&&(s.clearColor(wt,Yt,he,ue),_t.copy(et))},reset:function(){I=!1,at=null,_t.set(-1,0,0,0)}}}function r(){let I=!1,et=null,at=null,_t=null;return{setTest:function(wt){wt?Tt(2929):pt(2929)},setMask:function(wt){et!==wt&&!I&&(s.depthMask(wt),et=wt)},setFunc:function(wt){if(at!==wt){switch(wt){case lm:s.depthFunc(512);break;case cm:s.depthFunc(519);break;case um:s.depthFunc(513);break;case ec:s.depthFunc(515);break;case hm:s.depthFunc(514);break;case fm:s.depthFunc(518);break;case dm:s.depthFunc(516);break;case pm:s.depthFunc(517);break;default:s.depthFunc(515)}at=wt}},setLocked:function(wt){I=wt},setClear:function(wt){_t!==wt&&(s.clearDepth(wt),_t=wt)},reset:function(){I=!1,et=null,at=null,_t=null}}}function o(){let I=!1,et=null,at=null,_t=null,wt=null,Yt=null,he=null,ue=null,Nt=null;return{setTest:function(yt){I||(yt?Tt(2960):pt(2960))},setMask:function(yt){et!==yt&&!I&&(s.stencilMask(yt),et=yt)},setFunc:function(yt,Xt,re){(at!==yt||_t!==Xt||wt!==re)&&(s.stencilFunc(yt,Xt,re),at=yt,_t=Xt,wt=re)},setOp:function(yt,Xt,re){(Yt!==yt||he!==Xt||ue!==re)&&(s.stencilOp(yt,Xt,re),Yt=yt,he=Xt,ue=re)},setLocked:function(yt){I=yt},setClear:function(yt){Nt!==yt&&(s.clearStencil(yt),Nt=yt)},reset:function(){I=!1,et=null,at=null,_t=null,wt=null,Yt=null,he=null,ue=null,Nt=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,y=null,x=null,v=null,M=null,E=null,A=null,b=null,S=!1,P=null,B=null,Y=null,W=null,O=null;const k=s.getParameter(35661);let X=!1,N=0;const R=s.getParameter(7938);R.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(R)[1]),X=N>=1):R.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),X=N>=2);let $=null,T={};const z=s.getParameter(3088),q=s.getParameter(2978),tt=new de().fromArray(z),rt=new de().fromArray(q);function lt(I,et,at){const _t=new Uint8Array(4),wt=s.createTexture();s.bindTexture(I,wt),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Yt=0;Yt<at;Yt++)s.texImage2D(et+Yt,0,6408,1,1,0,6408,5121,_t);return wt}const K={};K[3553]=lt(3553,3553,1),K[34067]=lt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Tt(2929),l.setFunc(ec),ct(!1),V(wu),Tt(2884),ot(Xi);function Tt(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function pt(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Et(I,et){return d[I]!==et?(s.bindFramebuffer(I,et),d[I]=et,n&&(I===36009&&(d[36160]=et),I===36160&&(d[36009]=et)),!0):!1}function ft(I,et){let at=m,_t=!1;if(I)if(at=g.get(et),at===void 0&&(at=[],g.set(et,at)),I.isWebGLMultipleRenderTargets){const wt=I.texture;if(at.length!==wt.length||at[0]!==36064){for(let Yt=0,he=wt.length;Yt<he;Yt++)at[Yt]=36064+Yt;at.length=wt.length,_t=!0}}else at[0]!==36064&&(at[0]=36064,_t=!0);else at[0]!==1029&&(at[0]=1029,_t=!0);_t&&(e.isWebGL2?s.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Ot(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const nt={[ns]:32774,[Jp]:32778,[Kp]:32779};if(n)nt[Cu]=32775,nt[Pu]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(nt[Cu]=I.MIN_EXT,nt[Pu]=I.MAX_EXT)}const j={[Qp]:0,[tm]:1,[em]:768,[Df]:770,[am]:776,[sm]:774,[im]:772,[nm]:769,[Rf]:771,[om]:775,[rm]:773};function ot(I,et,at,_t,wt,Yt,he,ue){if(I===Xi){_===!0&&(pt(3042),_=!1);return}if(_===!1&&(Tt(3042),_=!0),I!==Zp){if(I!==y||ue!==S){if((x!==ns||E!==ns)&&(s.blendEquation(32774),x=ns,E=ns),ue)switch(I){case hs:s.blendFuncSeparate(1,771,1,771);break;case Tu:s.blendFunc(1,1);break;case Eu:s.blendFuncSeparate(0,769,0,1);break;case Au:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:s.blendFuncSeparate(770,771,1,771);break;case Tu:s.blendFunc(770,1);break;case Eu:s.blendFuncSeparate(0,769,0,1);break;case Au:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,A=null,b=null,y=I,S=ue}return}wt=wt||et,Yt=Yt||at,he=he||_t,(et!==x||wt!==E)&&(s.blendEquationSeparate(nt[et],nt[wt]),x=et,E=wt),(at!==v||_t!==M||Yt!==A||he!==b)&&(s.blendFuncSeparate(j[at],j[_t],j[Yt],j[he]),v=at,M=_t,A=Yt,b=he),y=I,S=!1}function gt(I,et){I.side===Ui?pt(2884):Tt(2884);let at=I.side===Vn;et&&(at=!at),ct(at),I.blending===hs&&I.transparent===!1?ot(Xi):ot(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const _t=I.stencilWrite;c.setTest(_t),_t&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Tt(32926):pt(32926)}function ct(I){P!==I&&(I?s.frontFace(2304):s.frontFace(2305),P=I)}function V(I){I!==$p?(Tt(2884),I!==B&&(I===wu?s.cullFace(1029):I===Yp?s.cullFace(1028):s.cullFace(1032))):pt(2884),B=I}function At(I){I!==Y&&(X&&s.lineWidth(I),Y=I)}function Dt(I,et,at){I?(Tt(32823),(W!==et||O!==at)&&(s.polygonOffset(et,at),W=et,O=at)):pt(32823)}function ne(I){I?Tt(3089):pt(3089)}function zt(I){I===void 0&&(I=33984+k-1),$!==I&&(s.activeTexture(I),$=I)}function L(I,et,at){at===void 0&&($===null?at=33984+k-1:at=$);let _t=T[at];_t===void 0&&(_t={type:void 0,texture:void 0},T[at]=_t),(_t.type!==I||_t.texture!==et)&&($!==at&&(s.activeTexture(at),$=at),s.bindTexture(I,et||K[I]),_t.type=I,_t.texture=et)}function w(){const I=T[$];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){tt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function Pt(I){rt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function Ht(I,et){let at=h.get(et);at===void 0&&(at=new WeakMap,h.set(et,at));let _t=at.get(I);_t===void 0&&(_t=s.getUniformBlockIndex(et,I.name),at.set(I,_t))}function Wt(I,et){const _t=h.get(et).get(I);u.get(I)!==_t&&(s.uniformBlockBinding(et,_t,I.__bindingPointIndex),u.set(I,_t))}function Jt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},$=null,T={},d={},g=new WeakMap,m=[],p=null,_=!1,y=null,x=null,v=null,M=null,E=null,A=null,b=null,S=!1,P=null,B=null,Y=null,W=null,O=null,tt.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Tt,disable:pt,bindFramebuffer:Et,drawBuffers:ft,useProgram:Ot,setBlending:ot,setMaterial:gt,setFlipSided:ct,setCullFace:V,setLineWidth:At,setPolygonOffset:Dt,setScissorTest:ne,activeTexture:zt,bindTexture:L,unbindTexture:w,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:mt,texImage3D:xt,updateUBOMapping:Ht,uniformBlockBinding:Wt,texStorage2D:H,texStorage3D:dt,texSubImage2D:st,texSubImage3D:ht,compressedTexSubImage2D:Rt,compressedTexSubImage3D:D,scissor:Lt,viewport:Pt,reset:Jt}}function Rv(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,w){return _?new OffscreenCanvas(L,w):uo("canvas")}function x(L,w,J,it){let st=1;if((L.width>it||L.height>it)&&(st=it/Math.max(L.width,L.height)),st<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ht=w?ac:Math.floor,Rt=ht(st*L.width),D=ht(st*L.height);m===void 0&&(m=y(Rt,D));const H=J?y(Rt,D):m;return H.width=Rt,H.height=D,H.getContext("2d").drawImage(L,0,0,Rt,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Rt+"x"+D+")."),H}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return nh(L.width)&&nh(L.height)}function M(L){return a?!1:L.wrapS!==Zn||L.wrapT!==Zn||L.minFilter!==cn&&L.minFilter!==Fn}function E(L,w){return L.generateMipmaps&&w&&L.minFilter!==cn&&L.minFilter!==Fn}function A(L){s.generateMipmap(L)}function b(L,w,J,it,st=!1){if(a===!1)return w;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=w;return w===6403&&(J===5126&&(ht=33326),J===5131&&(ht=33325),J===5121&&(ht=33321)),w===33319&&(J===5126&&(ht=33328),J===5131&&(ht=33327),J===5121&&(ht=33323)),w===6408&&(J===5126&&(ht=34836),J===5131&&(ht=34842),J===5121&&(ht=it===pe&&st===!1?35907:32856),J===32819&&(ht=32854),J===32820&&(ht=32855)),(ht===33325||ht===33326||ht===33327||ht===33328||ht===34842||ht===34836)&&t.get("EXT_color_buffer_float"),ht}function S(L,w,J){return E(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==Fn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function P(L){return L===cn||L===Lu||L===Du?9728:9729}function B(L){const w=L.target;w.removeEventListener("dispose",B),W(w),w.isVideoTexture&&g.delete(w)}function Y(L){const w=L.target;w.removeEventListener("dispose",Y),k(w)}function W(L){const w=n.get(L);if(w.__webglInit===void 0)return;const J=L.source,it=p.get(J);if(it){const st=it[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&O(L),Object.keys(it).length===0&&p.delete(J)}n.remove(L)}function O(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const J=L.source,it=p.get(J);delete it[w.__cacheKey],o.memory.textures--}function k(L){const w=L.texture,J=n.get(L),it=n.get(w);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)s.deleteFramebuffer(J.__webglFramebuffer[st]),J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[st]);else{if(s.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let st=0;st<J.__webglColorRenderbuffer.length;st++)J.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[st]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let st=0,ht=w.length;st<ht;st++){const Rt=n.get(w[st]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),o.memory.textures--),n.remove(w[st])}n.remove(w),n.remove(L)}let X=0;function N(){X=0}function R(){const L=X;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),X+=1,L}function $(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function T(L,w){const J=n.get(L);if(L.isVideoTexture&&ne(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const it=L.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(J,L,w);return}}e.bindTexture(3553,J.__webglTexture,33984+w)}function z(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){pt(J,L,w);return}e.bindTexture(35866,J.__webglTexture,33984+w)}function q(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){pt(J,L,w);return}e.bindTexture(32879,J.__webglTexture,33984+w)}function tt(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Et(J,L,w);return}e.bindTexture(34067,J.__webglTexture,33984+w)}const rt={[rc]:10497,[Zn]:33071,[sc]:33648},lt={[cn]:9728,[Lu]:9984,[Du]:9986,[Fn]:9729,[Mm]:9985,[Ba]:9987};function K(L,w,J){if(J?(s.texParameteri(L,10242,rt[w.wrapS]),s.texParameteri(L,10243,rt[w.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,rt[w.wrapR]),s.texParameteri(L,10240,lt[w.magFilter]),s.texParameteri(L,10241,lt[w.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(w.wrapS!==Zn||w.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,P(w.magFilter)),s.texParameteri(L,10241,P(w.minFilter)),w.minFilter!==cn&&w.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(w.type===hr&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===lo&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(L,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Tt(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",B));const it=w.source;let st=p.get(it);st===void 0&&(st={},p.set(it,st));const ht=$(w);if(ht!==L.__cacheKey){st[ht]===void 0&&(st[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),st[ht].usedTimes++;const Rt=st[L.__cacheKey];Rt!==void 0&&(st[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&O(w)),L.__cacheKey=ht,L.__webglTexture=st[ht].texture}return J}function pt(L,w,J){let it=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=35866),w.isData3DTexture&&(it=32879);const st=Tt(L,w),ht=w.source;e.bindTexture(it,L.__webglTexture,33984+J);const Rt=n.get(ht);if(ht.version!==Rt.__version||st===!0){e.activeTexture(33984+J),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const D=M(w)&&v(w.image)===!1;let H=x(w.image,D,!1,u);H=zt(w,H);const dt=v(H)||a,mt=r.convert(w.format,w.encoding);let xt=r.convert(w.type),Lt=b(w.internalFormat,mt,xt,w.encoding,w.isVideoTexture);K(it,w,dt);let Pt;const Ht=w.mipmaps,Wt=a&&w.isVideoTexture!==!0,Jt=Rt.__version===void 0||st===!0,I=S(w,H,dt);if(w.isDepthTexture)Lt=6402,a?w.type===hr?Lt=36012:w.type===ur?Lt=33190:w.type===fs?Lt=35056:Lt=33189:w.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pr&&Lt===6402&&w.type!==Of&&w.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ur,xt=r.convert(w.type)),w.format===Ss&&Lt===6402&&(Lt=34041,w.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=fs,xt=r.convert(w.type))),Jt&&(Wt?e.texStorage2D(3553,1,Lt,H.width,H.height):e.texImage2D(3553,0,Lt,H.width,H.height,0,mt,xt,null));else if(w.isDataTexture)if(Ht.length>0&&dt){Wt&&Jt&&e.texStorage2D(3553,I,Lt,Ht[0].width,Ht[0].height);for(let et=0,at=Ht.length;et<at;et++)Pt=Ht[et],Wt?e.texSubImage2D(3553,et,0,0,Pt.width,Pt.height,mt,xt,Pt.data):e.texImage2D(3553,et,Lt,Pt.width,Pt.height,0,mt,xt,Pt.data);w.generateMipmaps=!1}else Wt?(Jt&&e.texStorage2D(3553,I,Lt,H.width,H.height),e.texSubImage2D(3553,0,0,0,H.width,H.height,mt,xt,H.data)):e.texImage2D(3553,0,Lt,H.width,H.height,0,mt,xt,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&Jt&&e.texStorage3D(35866,I,Lt,Ht[0].width,Ht[0].height,H.depth);for(let et=0,at=Ht.length;et<at;et++)Pt=Ht[et],w.format!==Jn?mt!==null?Wt?e.compressedTexSubImage3D(35866,et,0,0,0,Pt.width,Pt.height,H.depth,mt,Pt.data,0,0):e.compressedTexImage3D(35866,et,Lt,Pt.width,Pt.height,H.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(35866,et,0,0,0,Pt.width,Pt.height,H.depth,mt,xt,Pt.data):e.texImage3D(35866,et,Lt,Pt.width,Pt.height,H.depth,0,mt,xt,Pt.data)}else{Wt&&Jt&&e.texStorage2D(3553,I,Lt,Ht[0].width,Ht[0].height);for(let et=0,at=Ht.length;et<at;et++)Pt=Ht[et],w.format!==Jn?mt!==null?Wt?e.compressedTexSubImage2D(3553,et,0,0,Pt.width,Pt.height,mt,Pt.data):e.compressedTexImage2D(3553,et,Lt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(3553,et,0,0,Pt.width,Pt.height,mt,xt,Pt.data):e.texImage2D(3553,et,Lt,Pt.width,Pt.height,0,mt,xt,Pt.data)}else if(w.isDataArrayTexture)Wt?(Jt&&e.texStorage3D(35866,I,Lt,H.width,H.height,H.depth),e.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,mt,xt,H.data)):e.texImage3D(35866,0,Lt,H.width,H.height,H.depth,0,mt,xt,H.data);else if(w.isData3DTexture)Wt?(Jt&&e.texStorage3D(32879,I,Lt,H.width,H.height,H.depth),e.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,mt,xt,H.data)):e.texImage3D(32879,0,Lt,H.width,H.height,H.depth,0,mt,xt,H.data);else if(w.isFramebufferTexture){if(Jt)if(Wt)e.texStorage2D(3553,I,Lt,H.width,H.height);else{let et=H.width,at=H.height;for(let _t=0;_t<I;_t++)e.texImage2D(3553,_t,Lt,et,at,0,mt,xt,null),et>>=1,at>>=1}}else if(Ht.length>0&&dt){Wt&&Jt&&e.texStorage2D(3553,I,Lt,Ht[0].width,Ht[0].height);for(let et=0,at=Ht.length;et<at;et++)Pt=Ht[et],Wt?e.texSubImage2D(3553,et,0,0,mt,xt,Pt):e.texImage2D(3553,et,Lt,mt,xt,Pt);w.generateMipmaps=!1}else Wt?(Jt&&e.texStorage2D(3553,I,Lt,H.width,H.height),e.texSubImage2D(3553,0,0,0,mt,xt,H)):e.texImage2D(3553,0,Lt,mt,xt,H);E(w,dt)&&A(it),Rt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Et(L,w,J){if(w.image.length!==6)return;const it=Tt(L,w),st=w.source;e.bindTexture(34067,L.__webglTexture,33984+J);const ht=n.get(st);if(st.version!==ht.__version||it===!0){e.activeTexture(33984+J),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const Rt=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,H=[];for(let et=0;et<6;et++)!Rt&&!D?H[et]=x(w.image[et],!1,!0,c):H[et]=D?w.image[et].image:w.image[et],H[et]=zt(w,H[et]);const dt=H[0],mt=v(dt)||a,xt=r.convert(w.format,w.encoding),Lt=r.convert(w.type),Pt=b(w.internalFormat,xt,Lt,w.encoding),Ht=a&&w.isVideoTexture!==!0,Wt=ht.__version===void 0||it===!0;let Jt=S(w,dt,mt);K(34067,w,mt);let I;if(Rt){Ht&&Wt&&e.texStorage2D(34067,Jt,Pt,dt.width,dt.height);for(let et=0;et<6;et++){I=H[et].mipmaps;for(let at=0;at<I.length;at++){const _t=I[at];w.format!==Jn?xt!==null?Ht?e.compressedTexSubImage2D(34069+et,at,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(34069+et,at,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?e.texSubImage2D(34069+et,at,0,0,_t.width,_t.height,xt,Lt,_t.data):e.texImage2D(34069+et,at,Pt,_t.width,_t.height,0,xt,Lt,_t.data)}}}else{I=w.mipmaps,Ht&&Wt&&(I.length>0&&Jt++,e.texStorage2D(34067,Jt,Pt,H[0].width,H[0].height));for(let et=0;et<6;et++)if(D){Ht?e.texSubImage2D(34069+et,0,0,0,H[et].width,H[et].height,xt,Lt,H[et].data):e.texImage2D(34069+et,0,Pt,H[et].width,H[et].height,0,xt,Lt,H[et].data);for(let at=0;at<I.length;at++){const wt=I[at].image[et].image;Ht?e.texSubImage2D(34069+et,at+1,0,0,wt.width,wt.height,xt,Lt,wt.data):e.texImage2D(34069+et,at+1,Pt,wt.width,wt.height,0,xt,Lt,wt.data)}}else{Ht?e.texSubImage2D(34069+et,0,0,0,xt,Lt,H[et]):e.texImage2D(34069+et,0,Pt,xt,Lt,H[et]);for(let at=0;at<I.length;at++){const _t=I[at];Ht?e.texSubImage2D(34069+et,at+1,0,0,xt,Lt,_t.image[et]):e.texImage2D(34069+et,at+1,Pt,xt,Lt,_t.image[et])}}}E(w,mt)&&A(34067),ht.__version=st.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ft(L,w,J,it,st){const ht=r.convert(J.format,J.encoding),Rt=r.convert(J.type),D=b(J.internalFormat,ht,Rt,J.encoding);n.get(w).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,D,w.width,w.height,w.depth,0,ht,Rt,null):e.texImage2D(st,0,D,w.width,w.height,0,ht,Rt,null)),e.bindFramebuffer(36160,L),Dt(w)?f.framebufferTexture2DMultisampleEXT(36160,it,st,n.get(J).__webglTexture,0,At(w)):(st===3553||st>=34069&&st<=34074)&&s.framebufferTexture2D(36160,it,st,n.get(J).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ot(L,w,J){if(s.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let it=33189;if(J||Dt(w)){const st=w.depthTexture;st&&st.isDepthTexture&&(st.type===hr?it=36012:st.type===ur&&(it=33190));const ht=At(w);Dt(w)?f.renderbufferStorageMultisampleEXT(36161,ht,it,w.width,w.height):s.renderbufferStorageMultisample(36161,ht,it,w.width,w.height)}else s.renderbufferStorage(36161,it,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){const it=At(w);J&&Dt(w)===!1?s.renderbufferStorageMultisample(36161,it,35056,w.width,w.height):Dt(w)?f.renderbufferStorageMultisampleEXT(36161,it,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let st=0;st<it.length;st++){const ht=it[st],Rt=r.convert(ht.format,ht.encoding),D=r.convert(ht.type),H=b(ht.internalFormat,Rt,D,ht.encoding),dt=At(w);J&&Dt(w)===!1?s.renderbufferStorageMultisample(36161,dt,H,w.width,w.height):Dt(w)?f.renderbufferStorageMultisampleEXT(36161,dt,H,w.width,w.height):s.renderbufferStorage(36161,H,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function nt(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),T(w.depthTexture,0);const it=n.get(w.depthTexture).__webglTexture,st=At(w);if(w.depthTexture.format===pr)Dt(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,st):s.framebufferTexture2D(36160,36096,3553,it,0);else if(w.depthTexture.format===Ss)Dt(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,st):s.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function j(L){const w=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,L)}else if(J){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=s.createRenderbuffer(),Ot(w.__webglDepthbuffer[it],L,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Ot(w.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function ot(L,w,J){const it=n.get(L);w!==void 0&&ft(it.__webglFramebuffer,L,L.texture,36064,3553),J!==void 0&&j(L)}function gt(L){const w=L.texture,J=n.get(L),it=n.get(w);L.addEventListener("dispose",Y),L.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=w.version,o.memory.textures++);const st=L.isWebGLCubeRenderTarget===!0,ht=L.isWebGLMultipleRenderTargets===!0,Rt=v(L)||a;if(st){J.__webglFramebuffer=[];for(let D=0;D<6;D++)J.__webglFramebuffer[D]=s.createFramebuffer()}else{if(J.__webglFramebuffer=s.createFramebuffer(),ht)if(i.drawBuffers){const D=L.texture;for(let H=0,dt=D.length;H<dt;H++){const mt=n.get(D[H]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Dt(L)===!1){const D=ht?w:[w];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let H=0;H<D.length;H++){const dt=D[H];J.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(36161,J.__webglColorRenderbuffer[H]);const mt=r.convert(dt.format,dt.encoding),xt=r.convert(dt.type),Lt=b(dt.internalFormat,mt,xt,dt.encoding,L.isXRRenderTarget===!0),Pt=At(L);s.renderbufferStorageMultisample(36161,Pt,Lt,L.width,L.height),s.framebufferRenderbuffer(36160,36064+H,36161,J.__webglColorRenderbuffer[H])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,it.__webglTexture),K(34067,w,Rt);for(let D=0;D<6;D++)ft(J.__webglFramebuffer[D],L,w,36064,34069+D);E(w,Rt)&&A(34067),e.unbindTexture()}else if(ht){const D=L.texture;for(let H=0,dt=D.length;H<dt;H++){const mt=D[H],xt=n.get(mt);e.bindTexture(3553,xt.__webglTexture),K(3553,mt,Rt),ft(J.__webglFramebuffer,L,mt,36064+H,3553),E(mt,Rt)&&A(3553)}e.unbindTexture()}else{let D=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?D=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(D,it.__webglTexture),K(D,w,Rt),ft(J.__webglFramebuffer,L,w,36064,D),E(w,Rt)&&A(D),e.unbindTexture()}L.depthBuffer&&j(L)}function ct(L){const w=v(L)||a,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let it=0,st=J.length;it<st;it++){const ht=J[it];if(E(ht,w)){const Rt=L.isWebGLCubeRenderTarget?34067:3553,D=n.get(ht).__webglTexture;e.bindTexture(Rt,D),A(Rt),e.unbindTexture()}}}function V(L){if(a&&L.samples>0&&Dt(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,it=L.height;let st=16384;const ht=[],Rt=L.stencilBuffer?33306:36096,D=n.get(L),H=L.isWebGLMultipleRenderTargets===!0;if(H)for(let dt=0;dt<w.length;dt++)e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+dt,36161,null),e.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+dt,3553,null,0);e.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,D.__webglFramebuffer);for(let dt=0;dt<w.length;dt++){ht.push(36064+dt),L.depthBuffer&&ht.push(Rt);const mt=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(mt===!1&&(L.depthBuffer&&(st|=256),L.stencilBuffer&&(st|=1024)),H&&s.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[dt]),mt===!0&&(s.invalidateFramebuffer(36008,[Rt]),s.invalidateFramebuffer(36009,[Rt])),H){const xt=n.get(w[dt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,xt,0)}s.blitFramebuffer(0,0,J,it,0,0,J,it,st,9728),d&&s.invalidateFramebuffer(36008,ht)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),H)for(let dt=0;dt<w.length;dt++){e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+dt,36161,D.__webglColorRenderbuffer[dt]);const mt=n.get(w[dt]).__webglTexture;e.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+dt,3553,mt,0)}e.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function At(L){return Math.min(h,L.samples)}function Dt(L){const w=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ne(L){const w=o.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function zt(L,w){const J=L.encoding,it=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===oc||J!==Tr&&(J===pe?a===!1?t.has("EXT_sRGB")===!0&&it===Jn?(L.format=oc,L.minFilter=Fn,L.generateMipmaps=!1):w=Nf.sRGBToLinear(w):(it!==Jn||st!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),w}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=T,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=tt,this.rebindTextures=ot,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Dt}function Iv(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===wr)return 5121;if(r===Em)return 32819;if(r===Am)return 32820;if(r===Sm)return 5120;if(r===wm)return 5122;if(r===Of)return 5123;if(r===Tm)return 5124;if(r===ur)return 5125;if(r===hr)return 5126;if(r===lo)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Cm)return 6406;if(r===Jn)return 6408;if(r===Lm)return 6409;if(r===Dm)return 6410;if(r===pr)return 6402;if(r===Ss)return 34041;if(r===Pm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===oc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Rm)return 6403;if(r===Im)return 36244;if(r===Om)return 33319;if(r===Fm)return 33320;if(r===zm)return 36249;if(r===Qa||r===tl||r===el||r===nl)if(o===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===el)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ru||r===Iu||r===Ou||r===Fu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ru)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Iu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ou)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zu||r===Nu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===zu)return o===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ku||r===Uu||r===Bu||r===Vu||r===Gu||r===Hu||r===Wu||r===Xu||r===qu||r===$u||r===Yu||r===ju||r===Zu||r===Ju)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ku)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$u)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ju)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zu)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ju)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ku)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ku)return o===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===fs?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ov extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mi extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fv={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class zv extends fn{constructor(t,e,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:pr,u!==pr&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pr&&(n=ur),n===void 0&&u===Ss&&(n=fs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1}}class Nv extends Or{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=e.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new Set,v=new Map,M=new un;M.layers.enable(1),M.viewport=new de;const E=new un;E.layers.enable(2),E.viewport=new de;const A=[M,E],b=new Ov;b.layers.enable(1),b.layers.enable(2);let S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=_[z];return q===void 0&&(q=new Dl,_[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=_[z];return q===void 0&&(q=new Dl,_[z]=q),q.getGripSpace()},this.getHand=function(z){let q=_[z];return q===void 0&&(q=new Dl,_[z]=q),q.getHandSpace()};function B(z){const q=y.indexOf(z.inputSource);if(q===-1)return;const tt=_[q];tt!==void 0&&tt.dispatchEvent({type:z.type,data:z.inputSource})}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",W);for(let z=0;z<_.length;z++){const q=y[z];q!==null&&(y[z]=null,_[z].disconnect(q))}S=null,P=null,t.setRenderTarget(m),f=null,h=null,u=null,i=null,p=null,T.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:f}),p=new Er(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:wr,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,tt=null,rt=null;g.depth&&(rt=g.stencil?35056:33190,q=g.stencil?Ss:pr,tt=g.stencil?fs:ur);const lt={colorFormat:32856,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(lt),i.updateRenderState({layers:[h]}),p=new Er(h.textureWidth,h.textureHeight,{format:Jn,type:wr,depthTexture:new zv(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const K=t.properties.get(p);K.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),T.setContext(i),T.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(z){for(let q=0;q<z.removed.length;q++){const tt=z.removed[q],rt=y.indexOf(tt);rt>=0&&(y[rt]=null,_[rt].disconnect(tt))}for(let q=0;q<z.added.length;q++){const tt=z.added[q];let rt=y.indexOf(tt);if(rt===-1){for(let K=0;K<_.length;K++)if(K>=y.length){y.push(tt),rt=K;break}else if(y[K]===null){y[K]=tt,rt=K;break}if(rt===-1)break}const lt=_[rt];lt&&lt.connect(tt)}}const O=new F,k=new F;function X(z,q,tt){O.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(tt.matrixWorld);const rt=O.distanceTo(k),lt=q.projectionMatrix.elements,K=tt.projectionMatrix.elements,Tt=lt[14]/(lt[10]-1),pt=lt[14]/(lt[10]+1),Et=(lt[9]+1)/lt[5],ft=(lt[9]-1)/lt[5],Ot=(lt[8]-1)/lt[0],nt=(K[8]+1)/K[0],j=Tt*Ot,ot=Tt*nt,gt=rt/(-Ot+nt),ct=gt*-Ot;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ct),z.translateZ(gt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const V=Tt+gt,At=pt+gt,Dt=j-ct,ne=ot+(rt-ct),zt=Et*pt/At*V,L=ft*pt/At*V;z.projectionMatrix.makePerspective(Dt,ne,zt,L,V,At)}function N(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;b.near=E.near=M.near=z.near,b.far=E.far=M.far=z.far,(S!==b.near||P!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,P=b.far);const q=z.parent,tt=b.cameras;N(b,q);for(let lt=0;lt<tt.length;lt++)N(tt[lt],q);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),z.matrix.copy(b.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const rt=z.children;for(let lt=0,K=rt.length;lt<K;lt++)rt[lt].updateMatrixWorld(!0);tt.length===2?X(b,M,E):b.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.getPlanes=function(){return x};let R=null;function $(z,q){if(c=q.getViewerPose(l||o),d=q,c!==null){const tt=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let rt=!1;tt.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let lt=0;lt<tt.length;lt++){const K=tt[lt];let Tt=null;if(f!==null)Tt=f.getViewport(K);else{const Et=u.getViewSubImage(h,K);Tt=Et.viewport,lt===0&&(t.setRenderTargetTextures(p,Et.colorTexture,h.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(p))}let pt=A[lt];pt===void 0&&(pt=new un,pt.layers.enable(lt),pt.viewport=new de,A[lt]=pt),pt.matrix.fromArray(K.transform.matrix),pt.projectionMatrix.fromArray(K.projectionMatrix),pt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),lt===0&&b.matrix.copy(pt.matrix),rt===!0&&b.cameras.push(pt)}}for(let tt=0;tt<_.length;tt++){const rt=y[tt],lt=_[tt];rt!==null&&lt!==void 0&&lt.update(rt,q,l||o)}if(R&&R(z,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let tt=null;for(const rt of x)q.detectedPlanes.has(rt)||(tt===null&&(tt=[]),tt.push(rt));if(tt!==null)for(const rt of tt)x.delete(rt),v.delete(rt),n.dispatchEvent({type:"planeremoved",data:rt});for(const rt of q.detectedPlanes)if(!x.has(rt))x.add(rt),v.set(rt,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:rt});else{const lt=v.get(rt);rt.lastChangedTime>lt&&(v.set(rt,rt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:rt}))}}d=null}const T=new qf;T.setAnimationLoop($),this.setAnimationLoop=function(z){R=z},this.dispose=function(){}}}function kv(s,t){function e(m,p){p.color.getRGB(m.fogColor.value,Hf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Vn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Vn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Vn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Uv(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",p));const M=x.program;n.updateUBOMapping(y,M);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const x=h();y.__bindingPointIndex=x;const v=s.createBuffer(),M=y.__size,E=y.usage;return s.bindBuffer(35345,v),s.bufferData(35345,M,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,M=y.__cache;s.bindBuffer(35345,x);for(let E=0,A=v.length;E<A;E++){const b=v[E];if(d(b,E,M)===!0){const S=b.value,P=b.__offset;typeof S=="number"?(b.__data[0]=S,s.bufferSubData(35345,P,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):S.toArray(b.__data),s.bufferSubData(35345,P,b.__data))}}s.bindBuffer(35345,null)}function d(y,x,v){const M=y.value;if(v[x]===void 0)return typeof M=="number"?v[x]=M:v[x]=M.clone(),!0;if(typeof M=="number"){if(v[x]!==M)return v[x]=M,!0}else{const E=v[x];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(y){const x=y.uniforms;let v=0;const M=16;let E=0;for(let A=0,b=x.length;A<b;A++){const S=x[A],P=m(S);if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,A>0){E=v%M;const B=M-E;E!==0&&B-P.boundary<0&&(v+=M-E,S.__offset=v)}v+=P.storage}return E=v%M,E>0&&(v+=M-E),y.__size=v,y.__cache={},this}function m(y){const x=y.value,v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Bv(){const s=uo("canvas");return s.style.display="block",s}function Xc(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:Bv(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tr,this.physicallyCorrectLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const m=this;let p=!1,_=0,y=0,x=null,v=-1,M=null;const E=new de,A=new de;let b=null,S=t.width,P=t.height,B=1,Y=null,W=null;const O=new de(0,0,S,P),k=new de(0,0,S,P);let X=!1;const N=new Hc;let R=!1,$=!1,T=null;const z=new Se,q=new ut,tt=new F,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return x===null?B:1}let K=e;function Tt(C,U){for(let Z=0;Z<C.length;Z++){const G=C[Z],Q=t.getContext(G,U);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),K===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),K=Tt(U,C),K===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,Et,ft,Ot,nt,j,ot,gt,ct,V,At,Dt,ne,zt,L,w,J,it,st,ht,Rt,D,H,dt;function mt(){pt=new J0(K),Et=new X0(K,pt,s),pt.init(Et),D=new Iv(K,pt,Et),ft=new Dv(K,pt,Et),Ot=new tx,nt=new _v,j=new Rv(K,pt,ft,nt,Et,D,Ot),ot=new $0(m),gt=new Z0(m),ct=new cg(K,Et),H=new H0(K,pt,ct,Et),V=new K0(K,ct,Ot,H),At=new rx(K,V,ct,Ot),st=new ix(K,Et,j),w=new q0(nt),Dt=new gv(m,ot,gt,pt,Et,H,w),ne=new kv(m,nt),zt=new vv,L=new Tv(pt,Et),it=new G0(m,ot,gt,ft,At,u,o),J=new Lv(m,At,Et),dt=new Uv(K,Ot,Et,ft),ht=new W0(K,pt,Ot,Et),Rt=new Q0(K,pt,Ot,Et),Ot.programs=Dt.programs,m.capabilities=Et,m.extensions=pt,m.properties=nt,m.renderLists=zt,m.shadowMap=J,m.state=ft,m.info=Ot}mt();const xt=new Nv(m,K);this.xr=xt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(S,P,!1))},this.getSize=function(C){return C.set(S,P)},this.setSize=function(C,U,Z){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=C,P=U,t.width=Math.floor(C*B),t.height=Math.floor(U*B),Z!==!1&&(t.style.width=C+"px",t.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(S*B,P*B).floor()},this.setDrawingBufferSize=function(C,U,Z){S=C,P=U,B=Z,t.width=Math.floor(C*Z),t.height=Math.floor(U*Z),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,U,Z,G){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,U,Z,G),ft.viewport(E.copy(O).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(k)},this.setScissor=function(C,U,Z,G){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,U,Z,G),ft.scissor(A.copy(k).multiplyScalar(B).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(C){ft.setScissorTest(X=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(C=!0,U=!0,Z=!0){let G=0;C&&(G|=16384),U&&(G|=256),Z&&(G|=1024),K.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),zt.dispose(),L.dispose(),nt.dispose(),ot.dispose(),gt.dispose(),At.dispose(),H.dispose(),dt.dispose(),Dt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",_t),xt.removeEventListener("sessionend",wt),T&&(T.dispose(),T=null),Yt.stop()};function Lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Ot.autoReset,U=J.enabled,Z=J.autoUpdate,G=J.needsUpdate,Q=J.type;mt(),Ot.autoReset=C,J.enabled=U,J.autoUpdate=Z,J.needsUpdate=G,J.type=Q}function Ht(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){const U=C.target;U.removeEventListener("dispose",Wt),Jt(U)}function Jt(C){I(C),nt.remove(C)}function I(C){const U=nt.get(C).programs;U!==void 0&&(U.forEach(function(Z){Dt.releaseProgram(Z)}),C.isShaderMaterial&&Dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,Z,G,Q,bt){U===null&&(U=rt);const Mt=Q.isMesh&&Q.matrixWorld.determinant()<0,kt=ie(C,U,Z,G,Q);ft.setMaterial(G,Mt);let It=Z.index,Vt=1;G.wireframe===!0&&(It=V.getWireframeAttribute(Z),Vt=2);const Gt=Z.drawRange,Bt=Z.attributes.position;let jt=Gt.start*Vt,ae=(Gt.start+Gt.count)*Vt;bt!==null&&(jt=Math.max(jt,bt.start*Vt),ae=Math.min(ae,(bt.start+bt.count)*Vt)),It!==null?(jt=Math.max(jt,0),ae=Math.min(ae,It.count)):Bt!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,Bt.count));const Ne=ae-jt;if(Ne<0||Ne===1/0)return;H.setup(Q,G,kt,Z,It);let Dn,Kt=ht;if(It!==null&&(Dn=ct.get(It),Kt=Rt,Kt.setIndex(Dn)),Q.isMesh)G.wireframe===!0?(ft.setLineWidth(G.wireframeLinewidth*lt()),Kt.setMode(1)):Kt.setMode(4);else if(Q.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*lt()),Q.isLineSegments?Kt.setMode(1):Q.isLineLoop?Kt.setMode(2):Kt.setMode(3)}else Q.isPoints?Kt.setMode(0):Q.isSprite&&Kt.setMode(4);if(Q.isInstancedMesh)Kt.renderInstances(jt,Ne,Q.count);else if(Z.isInstancedBufferGeometry){const Ft=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,an=Math.min(Z.instanceCount,Ft);Kt.renderInstances(jt,Ne,an)}else Kt.render(jt,Ne)},this.compile=function(C,U){function Z(G,Q,bt){G.transparent===!0&&G.side===Ui?(G.side=Vn,G.needsUpdate=!0,re(G,Q,bt),G.side=ys,G.needsUpdate=!0,re(G,Q,bt),G.side=Ui):re(G,Q,bt)}f=L.get(C),f.init(),g.push(f),C.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(m.physicallyCorrectLights),C.traverse(function(G){const Q=G.material;if(Q)if(Array.isArray(Q))for(let bt=0;bt<Q.length;bt++){const Mt=Q[bt];Z(Mt,C,G)}else Z(Q,C,G)}),g.pop(),f=null};let et=null;function at(C){et&&et(C)}function _t(){Yt.stop()}function wt(){Yt.start()}const Yt=new qf;Yt.setAnimationLoop(at),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(C){et=C,xt.setAnimationLoop(C),C===null?Yt.stop():Yt.start()},xt.addEventListener("sessionstart",_t),xt.addEventListener("sessionend",wt),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(U),U=xt.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,U,x),f=L.get(C,g.length),f.init(),g.push(f),z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),N.setFromProjectionMatrix(z),$=this.localClippingEnabled,R=w.init(this.clippingPlanes,$,U),h=zt.get(C,d.length),h.init(),d.push(h),he(C,U,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(Y,W),R===!0&&w.beginShadows();const Z=f.state.shadowsArray;if(J.render(Z,C,U),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(h,C),f.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const G=U.cameras;for(let Q=0,bt=G.length;Q<bt;Q++){const Mt=G[Q];ue(h,C,Mt,Mt.viewport)}}else ue(h,C,U);x!==null&&(j.updateMultisampleRenderTarget(x),j.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(m,C,U),H.resetDefaultState(),v=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function he(C,U,Z,G){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||N.intersectsSprite(C)){G&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(z);const Mt=At.update(C),kt=C.material;kt.visible&&h.push(C,Mt,kt,Z,tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ot.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ot.render.frame),!C.frustumCulled||N.intersectsObject(C))){G&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(z);const Mt=At.update(C),kt=C.material;if(Array.isArray(kt)){const It=Mt.groups;for(let Vt=0,Gt=It.length;Vt<Gt;Vt++){const Bt=It[Vt],jt=kt[Bt.materialIndex];jt&&jt.visible&&h.push(C,Mt,jt,Z,tt.z,Bt)}}else kt.visible&&h.push(C,Mt,kt,Z,tt.z,null)}}const bt=C.children;for(let Mt=0,kt=bt.length;Mt<kt;Mt++)he(bt[Mt],U,Z,G)}function ue(C,U,Z,G){const Q=C.opaque,bt=C.transmissive,Mt=C.transparent;f.setupLightsView(Z),bt.length>0&&Nt(Q,U,Z),G&&ft.viewport(E.copy(G)),Q.length>0&&yt(Q,U,Z),bt.length>0&&yt(bt,U,Z),Mt.length>0&&yt(Mt,U,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Nt(C,U,Z){const G=Et.isWebGL2;T===null&&(T=new Er(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?lo:wr,minFilter:Ba,samples:G&&r===!0?4:0})),m.getDrawingBufferSize(q),G?T.setSize(q.x,q.y):T.setSize(ac(q.x),ac(q.y));const Q=m.getRenderTarget();m.setRenderTarget(T),m.clear();const bt=m.toneMapping;m.toneMapping=Ti,yt(C,U,Z),m.toneMapping=bt,j.updateMultisampleRenderTarget(T),j.updateRenderTargetMipmap(T),m.setRenderTarget(Q)}function yt(C,U,Z){const G=U.isScene===!0?U.overrideMaterial:null;for(let Q=0,bt=C.length;Q<bt;Q++){const Mt=C[Q],kt=Mt.object,It=Mt.geometry,Vt=G===null?Mt.material:G,Gt=Mt.group;kt.layers.test(Z.layers)&&Xt(kt,U,Z,It,Vt,Gt)}}function Xt(C,U,Z,G,Q,bt){C.onBeforeRender(m,U,Z,G,Q,bt),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(m,U,Z,G,C,bt),Q.transparent===!0&&Q.side===Ui?(Q.side=Vn,Q.needsUpdate=!0,m.renderBufferDirect(Z,U,G,Q,C,bt),Q.side=ys,Q.needsUpdate=!0,m.renderBufferDirect(Z,U,G,Q,C,bt),Q.side=Ui):m.renderBufferDirect(Z,U,G,Q,C,bt),C.onAfterRender(m,U,Z,G,Q,bt)}function re(C,U,Z){U.isScene!==!0&&(U=rt);const G=nt.get(C),Q=f.state.lights,bt=f.state.shadowsArray,Mt=Q.state.version,kt=Dt.getParameters(C,Q.state,bt,U,Z),It=Dt.getProgramCacheKey(kt);let Vt=G.programs;G.environment=C.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(C.isMeshStandardMaterial?gt:ot).get(C.envMap||G.environment),Vt===void 0&&(C.addEventListener("dispose",Wt),Vt=new Map,G.programs=Vt);let Gt=Vt.get(It);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===Mt)return St(C,kt),Gt}else kt.uniforms=Dt.getUniforms(C),C.onBuild(Z,kt,m),C.onBeforeCompile(kt,m),Gt=Dt.acquireProgram(kt,It),Vt.set(It,Gt),G.uniforms=kt.uniforms;const Bt=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Bt.clippingPlanes=w.uniform),St(C,kt),G.needsLights=qt(C),G.lightsStateVersion=Mt,G.needsLights&&(Bt.ambientLightColor.value=Q.state.ambient,Bt.lightProbe.value=Q.state.probe,Bt.directionalLights.value=Q.state.directional,Bt.directionalLightShadows.value=Q.state.directionalShadow,Bt.spotLights.value=Q.state.spot,Bt.spotLightShadows.value=Q.state.spotShadow,Bt.rectAreaLights.value=Q.state.rectArea,Bt.ltc_1.value=Q.state.rectAreaLTC1,Bt.ltc_2.value=Q.state.rectAreaLTC2,Bt.pointLights.value=Q.state.point,Bt.pointLightShadows.value=Q.state.pointShadow,Bt.hemisphereLights.value=Q.state.hemi,Bt.directionalShadowMap.value=Q.state.directionalShadowMap,Bt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Bt.spotShadowMap.value=Q.state.spotShadowMap,Bt.spotLightMatrix.value=Q.state.spotLightMatrix,Bt.spotLightMap.value=Q.state.spotLightMap,Bt.pointShadowMap.value=Q.state.pointShadowMap,Bt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const jt=Gt.getUniforms(),ae=fa.seqWithValue(jt.seq,Bt);return G.currentProgram=Gt,G.uniformsList=ae,Gt}function St(C,U){const Z=nt.get(C);Z.outputEncoding=U.outputEncoding,Z.instancing=U.instancing,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function ie(C,U,Z,G,Q){U.isScene!==!0&&(U=rt),j.resetTextureUnits();const bt=U.fog,Mt=G.isMeshStandardMaterial?U.environment:null,kt=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Tr,It=(G.isMeshStandardMaterial?gt:ot).get(G.envMap||Mt),Vt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Gt=!!G.normalMap&&!!Z.attributes.tangent,Bt=!!Z.morphAttributes.position,jt=!!Z.morphAttributes.normal,ae=!!Z.morphAttributes.color,Ne=G.toneMapped?m.toneMapping:Ti,Dn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=Dn!==void 0?Dn.length:0,Ft=nt.get(G),an=f.state.lights;if(R===!0&&($===!0||C!==M)){const xn=C===M&&G.id===v;w.setState(G,C,xn)}let ve=!1;G.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==an.state.version||Ft.outputEncoding!==kt||Q.isInstancedMesh&&Ft.instancing===!1||!Q.isInstancedMesh&&Ft.instancing===!0||Q.isSkinnedMesh&&Ft.skinning===!1||!Q.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==It||G.fog===!0&&Ft.fog!==bt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==w.numPlanes||Ft.numIntersection!==w.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==Gt||Ft.morphTargets!==Bt||Ft.morphNormals!==jt||Ft.morphColors!==ae||Ft.toneMapping!==Ne||Et.isWebGL2===!0&&Ft.morphTargetsCount!==Kt)&&(ve=!0):(ve=!0,Ft.__version=G.version);let Qn=Ft.currentProgram;ve===!0&&(Qn=re(G,U,Q));let Li=!1,Ve=!1,hi=!1;const we=Qn.getUniforms(),_n=Ft.uniforms;if(ft.useProgram(Qn.program)&&(Li=!0,Ve=!0,hi=!0),G.id!==v&&(v=G.id,Ve=!0),Li||M!==C){if(we.setValue(K,"projectionMatrix",C.projectionMatrix),Et.logarithmicDepthBuffer&&we.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Ve=!0,hi=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const xn=we.map.cameraPosition;xn!==void 0&&xn.setValue(K,tt.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&we.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||Q.isSkinnedMesh)&&we.setValue(K,"viewMatrix",C.matrixWorldInverse)}if(Q.isSkinnedMesh){we.setOptional(K,Q,"bindMatrix"),we.setOptional(K,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(Et.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),we.setValue(K,"boneTexture",xn.boneTexture,j),we.setValue(K,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ja=Z.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0&&Et.isWebGL2===!0)&&st.update(Q,Z,G,Qn),(Ve||Ft.receiveShadow!==Q.receiveShadow)&&(Ft.receiveShadow=Q.receiveShadow,we.setValue(K,"receiveShadow",Q.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_n.envMap.value=It,_n.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Ve&&(we.setValue(K,"toneMappingExposure",m.toneMappingExposure),Ft.needsLights&&Ut(_n,hi),bt&&G.fog===!0&&ne.refreshFogUniforms(_n,bt),ne.refreshMaterialUniforms(_n,G,B,P,T),fa.upload(K,Ft.uniformsList,_n,j)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fa.upload(K,Ft.uniformsList,_n,j),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&we.setValue(K,"center",Q.center),we.setValue(K,"modelViewMatrix",Q.modelViewMatrix),we.setValue(K,"normalMatrix",Q.normalMatrix),we.setValue(K,"modelMatrix",Q.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let Ka=0,Wp=xn.length;Ka<Wp;Ka++)if(Et.isWebGL2){const Mu=xn[Ka];dt.update(Mu,Qn),dt.bind(Mu,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function Ut(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function qt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,U,Z){nt.get(C.texture).__webglTexture=U,nt.get(C.depthTexture).__webglTexture=Z;const G=nt.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,U){const Z=nt.get(C);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,Z=0){x=C,_=U,y=Z;let G=!0,Q=null,bt=!1,Mt=!1;if(C){const It=nt.get(C);It.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(36160,null),G=!1):It.__webglFramebuffer===void 0?j.setupRenderTarget(C):It.__hasExternalTextures&&j.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);const Gt=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Q=Gt[U],bt=!0):Et.isWebGL2&&C.samples>0&&j.useMultisampledRTT(C)===!1?Q=nt.get(C).__webglMultisampledFramebuffer:Q=Gt,E.copy(C.viewport),A.copy(C.scissor),b=C.scissorTest}else E.copy(O).multiplyScalar(B).floor(),A.copy(k).multiplyScalar(B).floor(),b=X;if(ft.bindFramebuffer(36160,Q)&&Et.drawBuffers&&G&&ft.drawBuffers(C,Q),ft.viewport(E),ft.scissor(A),ft.setScissorTest(b),bt){const It=nt.get(C.texture);K.framebufferTexture2D(36160,36064,34069+U,It.__webglTexture,Z)}else if(Mt){const It=nt.get(C.texture),Vt=U||0;K.framebufferTextureLayer(36160,36064,It.__webglTexture,Z||0,Vt)}v=-1},this.readRenderTargetPixels=function(C,U,Z,G,Q,bt,Mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(kt=kt[Mt]),kt){ft.bindFramebuffer(36160,kt);try{const It=C.texture,Vt=It.format,Gt=It.type;if(Vt!==Jn&&D.convert(Vt)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Gt===lo&&(pt.has("EXT_color_buffer_half_float")||Et.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Gt!==wr&&D.convert(Gt)!==K.getParameter(35738)&&!(Gt===hr&&(Et.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-G&&Z>=0&&Z<=C.height-Q&&K.readPixels(U,Z,G,Q,D.convert(Vt),D.convert(Gt),bt)}finally{const It=x!==null?nt.get(x).__webglFramebuffer:null;ft.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(C,U,Z=0){const G=Math.pow(2,-Z),Q=Math.floor(U.image.width*G),bt=Math.floor(U.image.height*G);j.setTexture2D(U,0),K.copyTexSubImage2D(3553,Z,0,0,C.x,C.y,Q,bt),ft.unbindTexture()},this.copyTextureToTexture=function(C,U,Z,G=0){const Q=U.image.width,bt=U.image.height,Mt=D.convert(Z.format),kt=D.convert(Z.type);j.setTexture2D(Z,0),K.pixelStorei(37440,Z.flipY),K.pixelStorei(37441,Z.premultiplyAlpha),K.pixelStorei(3317,Z.unpackAlignment),U.isDataTexture?K.texSubImage2D(3553,G,C.x,C.y,Q,bt,Mt,kt,U.image.data):U.isCompressedTexture?K.compressedTexSubImage2D(3553,G,C.x,C.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):K.texSubImage2D(3553,G,C.x,C.y,Mt,kt,U.image),G===0&&Z.generateMipmaps&&K.generateMipmap(3553),ft.unbindTexture()},this.copyTextureToTexture3D=function(C,U,Z,G,Q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=C.max.x-C.min.x+1,Mt=C.max.y-C.min.y+1,kt=C.max.z-C.min.z+1,It=D.convert(G.format),Vt=D.convert(G.type);let Gt;if(G.isData3DTexture)j.setTexture3D(G,0),Gt=32879;else if(G.isDataArrayTexture)j.setTexture2DArray(G,0),Gt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,G.flipY),K.pixelStorei(37441,G.premultiplyAlpha),K.pixelStorei(3317,G.unpackAlignment);const Bt=K.getParameter(3314),jt=K.getParameter(32878),ae=K.getParameter(3316),Ne=K.getParameter(3315),Dn=K.getParameter(32877),Kt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;K.pixelStorei(3314,Kt.width),K.pixelStorei(32878,Kt.height),K.pixelStorei(3316,C.min.x),K.pixelStorei(3315,C.min.y),K.pixelStorei(32877,C.min.z),Z.isDataTexture||Z.isData3DTexture?K.texSubImage3D(Gt,Q,U.x,U.y,U.z,bt,Mt,kt,It,Vt,Kt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Gt,Q,U.x,U.y,U.z,bt,Mt,kt,It,Kt.data)):K.texSubImage3D(Gt,Q,U.x,U.y,U.z,bt,Mt,kt,It,Vt,Kt),K.pixelStorei(3314,Bt),K.pixelStorei(32878,jt),K.pixelStorei(3316,ae),K.pixelStorei(3315,Ne),K.pixelStorei(32877,Dn),Q===0&&G.generateMipmaps&&K.generateMipmap(Gt),ft.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),ft.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,ft.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Vv extends Xc{}Vv.prototype.isWebGL1Renderer=!0;class qc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Kf extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ut:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,i=[],r=[],o=[],a=new F,l=new Se;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(We(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(We(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $c extends ui{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ut,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gv extends $c{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const jo=new F,Rl=new Yc,Il=new Yc,Ol=new Yc;class Hv extends ui{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(jo.subVectors(i[0],i[1]).add(i[0]),c=jo);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(jo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=jo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Rl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),Il.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),Ol.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Il.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ol.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Rl.calc(l),Il.calc(l),Ol.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Wv(s,t){const e=1-s;return e*e*t}function Xv(s,t){return 2*(1-s)*s*t}function qv(s,t){return s*s*t}function Ys(s,t,e,n){return Wv(s,t)+Xv(s,e)+qv(s,n)}function $v(s,t){const e=1-s;return e*e*e*t}function Yv(s,t){const e=1-s;return 3*e*e*s*t}function jv(s,t){return 3*(1-s)*s*s*t}function Zv(s,t){return s*s*s*t}function js(s,t,e,n,i){return $v(s,t)+Yv(s,e)+jv(s,n)+Zv(s,i)}class Qf extends ui{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,i.x,r.x,o.x,a.x),js(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jv extends ui{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,i.x,r.x,o.x,a.x),js(t,i.y,r.y,o.y,a.y),js(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jc extends ui{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ut;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kv extends ui{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends ui{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,i.x,r.x,o.x),Ys(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qv extends ui{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,i.x,r.x,o.x),Ys(t,i.y,r.y,o.y),Ys(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Fh(a,l.x,c.x,u.x,h.x),Fh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var nd=Object.freeze({__proto__:null,ArcCurve:Gv,CatmullRomCurve3:Hv,CubicBezierCurve:Qf,CubicBezierCurve3:Jv,EllipseCurve:$c,LineCurve:jc,LineCurve3:Kv,QuadraticBezierCurve:td,QuadraticBezierCurve3:Qv,SplineCurve:ed});class ty extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new jc(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new nd[i.type]().fromJSON(i))}return this}}class cc extends ty{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new td(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Qf(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ed(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new $c(t,e,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zc extends Pi{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Gn(r,3)),this.setAttribute("normal",new Gn(r.slice(),3)),this.setAttribute("uv",new Gn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new F,v=new F,M=new F;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],M),l(x,v,M,y)}function l(y,x,v,M){const E=M+1,A=[];for(let b=0;b<=E;b++){A[b]=[];const S=y.clone().lerp(v,b/E),P=x.clone().lerp(v,b/E),B=E-b;for(let Y=0;Y<=B;Y++)Y===0&&b===E?A[b][Y]=S:A[b][Y]=S.clone().lerp(P,Y/B)}for(let b=0;b<E;b++)for(let S=0;S<2*(E-b)-1;S++){const P=Math.floor(S/2);S%2===0?(f(A[b][P+1]),f(A[b+1][P]),f(A[b][P])):(f(A[b][P+1]),f(A[b+1][P+1]),f(A[b+1][P]))}}function c(y){const x=new F;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const y=new F;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=p(y)/2/Math.PI+.5,M=_(y)/Math.PI+.5;o.push(v,1-M)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],M=o[y+4],E=Math.max(x,v,M),A=Math.min(x,v,M);E>.9&&A<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new F,x=new F,v=new F,M=new F,E=new ut,A=new ut,b=new ut;for(let S=0,P=0;S<r.length;S+=9,P+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),b.set(o[P+4],o[P+5]),M.copy(y).add(x).add(v).divideScalar(3);const B=p(M);m(E,P+0,y,B),m(A,P+2,x,B),m(b,P+4,v,B)}}function m(y,x,v,M){M<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=M/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(t){return new Zc(t.vertices,t.indices,t.radius,t.details)}}class Zs extends cc{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new cc().fromJSON(i))}return this}}const ey={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=id(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=oy(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let g=e;g<i;g+=e)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ho(r,o,e,a,l,d,0),o}};function id(s,t,e,n,i){let r,o;if(i===_y(s,t,e,n)>0)for(r=t;r<e;r+=n)o=zh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=zh(r,s[r],s[r+1],o);return o&&Ha(o,o.next)&&(po(o),o=o.next),o}function Pr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ha(e,e.next)||_e(e.prev,e,e.next)===0)){if(po(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(s,t,e,n,i,r,o){if(!s)return;!o&&r&&hy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?iy(s,n,i,r):ny(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),po(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=ry(Pr(s),t,e),ho(s,t,e,n,i,r,2)):o===2&&sy(s,t,e,n,i,r):ho(Pr(s),t,e,n,i,r,1);break}}}function ny(s){const t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&os(i,a,r,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function iy(s,t,e,n){const i=s.prev,r=s,o=s.next;if(_e(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,_=uc(d,g,t,e,n),y=uc(m,p,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=_&&v&&v.z<=y;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&os(a,u,l,h,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&os(a,u,l,h,c,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&os(a,u,l,h,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&os(a,u,l,h,c,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ry(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ha(i,r)&&rd(i,n,n.next,r)&&fo(i,r)&&fo(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),po(n),po(n.next),n=s=r),n=n.next}while(n!==s);return Pr(n)}function sy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&py(o,a)){let l=sd(o,a);o=Pr(o,o.next),l=Pr(l,l.next),ho(o,t,e,n,i,r,0),ho(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function oy(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=id(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(dy(c));for(i.sort(ay),r=0;r<i.length;r++)e=ly(i[r],e);return e}function ay(s,t){return s.x-t.x}function ly(s,t){const e=cy(s,t);if(!e)return t;const n=sd(e,s);return Pr(n,n.next),Pr(e,e.next)}function cy(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),fo(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&uy(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function uy(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function hy(s,t,e,n){let i=s;do i.z===0&&(i.z=uc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,fy(i)}function fy(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function uc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function dy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function os(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function py(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!my(s,t)&&(fo(s,t)&&fo(t,s)&&gy(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||Ha(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ha(s,t){return s.x===t.x&&s.y===t.y}function rd(s,t,e,n){const i=Jo(_e(s,t,e)),r=Jo(_e(s,t,n)),o=Jo(_e(e,n,s)),a=Jo(_e(e,n,t));return!!(i!==r&&o!==a||i===0&&Zo(s,e,t)||r===0&&Zo(s,n,t)||o===0&&Zo(e,s,n)||a===0&&Zo(e,t,n))}function Zo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jo(s){return s>0?1:s<0?-1:0}function my(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function fo(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function gy(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function sd(s,t){const e=new hc(s.i,s.x,s.y),n=new hc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zh(s,t,e,n){const i=new hc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function po(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _y(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ds{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ds.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Nh(t),kh(n,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,kh(n,e[l]);const a=ey.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function kh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Wa extends Pi{constructor(t=new Zs([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Gn(i,3)),this.setAttribute("uv",new Gn(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:xy;let x,v=!1,M,E,A,b;_&&(x=_.getSpacedPoints(u),v=!0,f=!1,M=_.computeFrenetFrames(u,!1),E=new F,A=new F,b=new F),f||(p=0,d=0,g=0,m=0);const S=a.extractPoints(c);let P=S.shape;const B=S.holes;if(!ds.isClockWise(P)){P=P.reverse();for(let nt=0,j=B.length;nt<j;nt++){const ot=B[nt];ds.isClockWise(ot)&&(B[nt]=ot.reverse())}}const W=ds.triangulateShape(P,B),O=P;for(let nt=0,j=B.length;nt<j;nt++){const ot=B[nt];P=P.concat(ot)}function k(nt,j,ot){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(ot).add(nt)}const X=P.length,N=W.length;function R(nt,j,ot){let gt,ct,V;const At=nt.x-j.x,Dt=nt.y-j.y,ne=ot.x-nt.x,zt=ot.y-nt.y,L=At*At+Dt*Dt,w=At*zt-Dt*ne;if(Math.abs(w)>Number.EPSILON){const J=Math.sqrt(L),it=Math.sqrt(ne*ne+zt*zt),st=j.x-Dt/J,ht=j.y+At/J,Rt=ot.x-zt/it,D=ot.y+ne/it,H=((Rt-st)*zt-(D-ht)*ne)/(At*zt-Dt*ne);gt=st+At*H-nt.x,ct=ht+Dt*H-nt.y;const dt=gt*gt+ct*ct;if(dt<=2)return new ut(gt,ct);V=Math.sqrt(dt/2)}else{let J=!1;At>Number.EPSILON?ne>Number.EPSILON&&(J=!0):At<-Number.EPSILON?ne<-Number.EPSILON&&(J=!0):Math.sign(Dt)===Math.sign(zt)&&(J=!0),J?(gt=-Dt,ct=At,V=Math.sqrt(L)):(gt=At,ct=Dt,V=Math.sqrt(L/2))}return new ut(gt/V,ct/V)}const $=[];for(let nt=0,j=O.length,ot=j-1,gt=nt+1;nt<j;nt++,ot++,gt++)ot===j&&(ot=0),gt===j&&(gt=0),$[nt]=R(O[nt],O[ot],O[gt]);const T=[];let z,q=$.concat();for(let nt=0,j=B.length;nt<j;nt++){const ot=B[nt];z=[];for(let gt=0,ct=ot.length,V=ct-1,At=gt+1;gt<ct;gt++,V++,At++)V===ct&&(V=0),At===ct&&(At=0),z[gt]=R(ot[gt],ot[V],ot[At]);T.push(z),q=q.concat(z)}for(let nt=0;nt<p;nt++){const j=nt/p,ot=d*Math.cos(j*Math.PI/2),gt=g*Math.sin(j*Math.PI/2)+m;for(let ct=0,V=O.length;ct<V;ct++){const At=k(O[ct],$[ct],gt);Tt(At.x,At.y,-ot)}for(let ct=0,V=B.length;ct<V;ct++){const At=B[ct];z=T[ct];for(let Dt=0,ne=At.length;Dt<ne;Dt++){const zt=k(At[Dt],z[Dt],gt);Tt(zt.x,zt.y,-ot)}}}const tt=g+m;for(let nt=0;nt<X;nt++){const j=f?k(P[nt],q[nt],tt):P[nt];v?(A.copy(M.normals[0]).multiplyScalar(j.x),E.copy(M.binormals[0]).multiplyScalar(j.y),b.copy(x[0]).add(A).add(E),Tt(b.x,b.y,b.z)):Tt(j.x,j.y,0)}for(let nt=1;nt<=u;nt++)for(let j=0;j<X;j++){const ot=f?k(P[j],q[j],tt):P[j];v?(A.copy(M.normals[nt]).multiplyScalar(ot.x),E.copy(M.binormals[nt]).multiplyScalar(ot.y),b.copy(x[nt]).add(A).add(E),Tt(b.x,b.y,b.z)):Tt(ot.x,ot.y,h/u*nt)}for(let nt=p-1;nt>=0;nt--){const j=nt/p,ot=d*Math.cos(j*Math.PI/2),gt=g*Math.sin(j*Math.PI/2)+m;for(let ct=0,V=O.length;ct<V;ct++){const At=k(O[ct],$[ct],gt);Tt(At.x,At.y,h+ot)}for(let ct=0,V=B.length;ct<V;ct++){const At=B[ct];z=T[ct];for(let Dt=0,ne=At.length;Dt<ne;Dt++){const zt=k(At[Dt],z[Dt],gt);v?Tt(zt.x,zt.y+x[u-1].y,x[u-1].x+ot):Tt(zt.x,zt.y,h+ot)}}}rt(),lt();function rt(){const nt=i.length/3;if(f){let j=0,ot=X*j;for(let gt=0;gt<N;gt++){const ct=W[gt];pt(ct[2]+ot,ct[1]+ot,ct[0]+ot)}j=u+p*2,ot=X*j;for(let gt=0;gt<N;gt++){const ct=W[gt];pt(ct[0]+ot,ct[1]+ot,ct[2]+ot)}}else{for(let j=0;j<N;j++){const ot=W[j];pt(ot[2],ot[1],ot[0])}for(let j=0;j<N;j++){const ot=W[j];pt(ot[0]+X*u,ot[1]+X*u,ot[2]+X*u)}}n.addGroup(nt,i.length/3-nt,0)}function lt(){const nt=i.length/3;let j=0;K(O,j),j+=O.length;for(let ot=0,gt=B.length;ot<gt;ot++){const ct=B[ot];K(ct,j),j+=ct.length}n.addGroup(nt,i.length/3-nt,1)}function K(nt,j){let ot=nt.length;for(;--ot>=0;){const gt=ot;let ct=ot-1;ct<0&&(ct=nt.length-1);for(let V=0,At=u+p*2;V<At;V++){const Dt=X*V,ne=X*(V+1),zt=j+gt+Dt,L=j+ct+Dt,w=j+ct+ne,J=j+gt+ne;Et(zt,L,w,J)}}}function Tt(nt,j,ot){l.push(nt),l.push(j),l.push(ot)}function pt(nt,j,ot){ft(nt),ft(j),ft(ot);const gt=i.length/3,ct=y.generateTopUV(n,i,gt-3,gt-2,gt-1);Ot(ct[0]),Ot(ct[1]),Ot(ct[2])}function Et(nt,j,ot,gt){ft(nt),ft(j),ft(gt),ft(j),ft(ot),ft(gt);const ct=i.length/3,V=y.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);Ot(V[0]),Ot(V[1]),Ot(V[3]),Ot(V[1]),Ot(V[2]),Ot(V[3])}function ft(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function Ot(nt){r.push(nt.x),r.push(nt.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vy(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new nd[i.type]().fromJSON(i)),new Wa(n,t.options)}}const xy={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],m=t[r*3],p=t[r*3+1],_=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-h),new ut(f,1-g),new ut(m,1-_)]:[new ut(a,1-l),new ut(u,1-h),new ut(d,1-g),new ut(p,1-_)]}};function vy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wa extends Zc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wa(t.radius,t.detail)}}class Uh extends Fr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yy extends Fr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fc extends Fr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ta={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class by{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const My=new by;class Xa{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const _i={};class Sy extends Error{constructor(t,e){super(t),this.response=e}}class wy extends Xa{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ta.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(_i[t]!==void 0){_i[t].push({onLoad:e,onProgress:n,onError:i});return}_i[t]=[],_i[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){y();function y(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{m+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let E=0,A=u.length;E<A;E++){const b=u[E];b.onProgress&&b.onProgress(M)}_.enqueue(v),y()}})}}});return new Response(p)}else throw new Sy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ta.add(t,c);const u=_i[t];delete _i[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=_i[t];if(u===void 0)throw this.manager.itemError(t),c;delete _i[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ty extends Xa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ta.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=uo("img");function l(){u(),Ta.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class od extends Xa{constructor(t){super(t)}load(t,e,n,i){const r=new fn,o=new Ty(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ad extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Fl=new Se,Bh=new F,Vh=new F;class ld{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gh=new Se,Ns=new F,zl=new F;class Ey extends ld{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),zl.copy(n.position),zl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zl),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class Ay extends ad{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cy extends ld{constructor(){super(new $f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cd extends ad{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new Cy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ud{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hh(){return(typeof performance>"u"?Date:performance).now()}class hd{constructor(t,e,n=0,i=1/0){this.ray=new Bf(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return dc(t,this,n,e),n.sort(Wh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)dc(t[i],this,n,e);return n.sort(Wh),n}}function Wh(s,t){return s.distance-t.distance}function dc(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)dc(i[r],t,e,!0)}}class Xh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py{constructor(){this.type="ShapePath",this.color=new te,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new cc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const y=[];for(let x=0,v=_.length;x<v;x++){const M=_[x],E=new Zs;E.curves=M.curves,y.push(E)}return y}function n(_,y){const x=y.length;let v=!1;for(let M=x-1,E=0;E<x;M=E++){let A=y[M],b=y[E],S=b.x-A.x,P=b.y-A.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(A=y[E],S=-S,b=y[M],P=-P),_.y<A.y||_.y>b.y)continue;if(_.y===A.y){if(_.x===A.x)return!0}else{const B=P*(_.x-A.x)-S*(_.y-A.y);if(B===0)return!0;if(B<0)continue;v=!v}}else{if(_.y!==A.y)continue;if(b.x<=_.x&&_.x<=A.x||A.x<=_.x&&_.x<=b.x)return!0}}return v}const i=ds.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Zs,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],g=0,m;f[g]=void 0,d[g]=[];for(let _=0,y=r.length;_<y;_++)a=r[_],m=a.getPoints(),o=i(m),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Zs,p:m},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:m[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,y=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const M=d[x];for(let E=0;E<M.length;E++){const A=M[E];let b=!0;for(let S=0;S<f.length;S++)n(A.p,f[S].p)&&(x!==S&&y++,b?(b=!1,h[S].push(A)):_=!0);b&&h[x].push(A)}}y>0&&_===!1&&(d=h)}let p;for(let _=0,y=f.length;_<y;_++){l=f[_].s,c.push(l),p=d[_];for(let x=0,v=p.length;x<v;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const qh={type:"change"},Nl={type:"start"},$h={type:"end"};class fd extends Or{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",zt),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qh),n.update(),r=i.NONE},this.update=function(){const D=new F,H=new Ar().setFromUnitVectors(t.up,new F(0,1,0)),dt=H.clone().invert(),mt=new F,xt=new Ar,Lt=2*Math.PI;return function(){const Ht=n.object.position;D.copy(Ht).sub(n.target),D.applyQuaternion(H),a.setFromVector3(D),n.autoRotate&&r===i.NONE&&S(A()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Wt=n.minAzimuthAngle,Jt=n.maxAzimuthAngle;return isFinite(Wt)&&isFinite(Jt)&&(Wt<-Math.PI?Wt+=Lt:Wt>Math.PI&&(Wt-=Lt),Jt<-Math.PI?Jt+=Lt:Jt>Math.PI&&(Jt-=Lt),Wt<=Jt?a.theta=Math.max(Wt,Math.min(Jt,a.theta)):a.theta=a.theta>(Wt+Jt)/2?Math.max(Wt,a.theta):Math.min(Jt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(a),D.applyQuaternion(dt),Ht.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||mt.distanceToSquared(n.object.position)>o||8*(1-xt.dot(n.object.quaternion))>o?(n.dispatchEvent(qh),mt.copy(n.object.position),xt.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",ot),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",gt),n.domElement.removeEventListener("pointerup",ct),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",zt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Xh,l=new Xh;let c=1;const u=new F;let h=!1;const f=new ut,d=new ut,g=new ut,m=new ut,p=new ut,_=new ut,y=new ut,x=new ut,v=new ut,M=[],E={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function S(D){l.theta-=D}function P(D){l.phi-=D}const B=function(){const D=new F;return function(dt,mt){D.setFromMatrixColumn(mt,0),D.multiplyScalar(-dt),u.add(D)}}(),Y=function(){const D=new F;return function(dt,mt){n.screenSpacePanning===!0?D.setFromMatrixColumn(mt,1):(D.setFromMatrixColumn(mt,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(dt),u.add(D)}}(),W=function(){const D=new F;return function(dt,mt){const xt=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;D.copy(Lt).sub(n.target);let Pt=D.length();Pt*=Math.tan(n.object.fov/2*Math.PI/180),B(2*dt*Pt/xt.clientHeight,n.object.matrix),Y(2*mt*Pt/xt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(dt*(n.object.right-n.object.left)/n.object.zoom/xt.clientWidth,n.object.matrix),Y(mt*(n.object.top-n.object.bottom)/n.object.zoom/xt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(D){f.set(D.clientX,D.clientY)}function N(D){y.set(D.clientX,D.clientY)}function R(D){m.set(D.clientX,D.clientY)}function $(D){d.set(D.clientX,D.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;S(2*Math.PI*g.x/H.clientHeight),P(2*Math.PI*g.y/H.clientHeight),f.copy(d),n.update()}function T(D){x.set(D.clientX,D.clientY),v.subVectors(x,y),v.y>0?O(b()):v.y<0&&k(b()),y.copy(x),n.update()}function z(D){p.set(D.clientX,D.clientY),_.subVectors(p,m).multiplyScalar(n.panSpeed),W(_.x,_.y),m.copy(p),n.update()}function q(D){D.deltaY<0?k(b()):D.deltaY>0&&O(b()),n.update()}function tt(D){let H=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),H=!0;break}H&&(D.preventDefault(),n.update())}function rt(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),H=.5*(M[0].pageY+M[1].pageY);f.set(D,H)}}function lt(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),H=.5*(M[0].pageY+M[1].pageY);m.set(D,H)}}function K(){const D=M[0].pageX-M[1].pageX,H=M[0].pageY-M[1].pageY,dt=Math.sqrt(D*D+H*H);y.set(0,dt)}function Tt(){n.enableZoom&&K(),n.enablePan&&lt()}function pt(){n.enableZoom&&K(),n.enableRotate&&rt()}function Et(D){if(M.length==1)d.set(D.pageX,D.pageY);else{const dt=Rt(D),mt=.5*(D.pageX+dt.x),xt=.5*(D.pageY+dt.y);d.set(mt,xt)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;S(2*Math.PI*g.x/H.clientHeight),P(2*Math.PI*g.y/H.clientHeight),f.copy(d)}function ft(D){if(M.length===1)p.set(D.pageX,D.pageY);else{const H=Rt(D),dt=.5*(D.pageX+H.x),mt=.5*(D.pageY+H.y);p.set(dt,mt)}_.subVectors(p,m).multiplyScalar(n.panSpeed),W(_.x,_.y),m.copy(p)}function Ot(D){const H=Rt(D),dt=D.pageX-H.x,mt=D.pageY-H.y,xt=Math.sqrt(dt*dt+mt*mt);x.set(0,xt),v.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),O(v.y),y.copy(x)}function nt(D){n.enableZoom&&Ot(D),n.enablePan&&ft(D)}function j(D){n.enableZoom&&Ot(D),n.enableRotate&&Et(D)}function ot(D){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",gt),n.domElement.addEventListener("pointerup",ct)),it(D),D.pointerType==="touch"?L(D):At(D))}function gt(D){n.enabled!==!1&&(D.pointerType==="touch"?w(D):Dt(D))}function ct(D){st(D),M.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",gt),n.domElement.removeEventListener("pointerup",ct)),n.dispatchEvent($h),r=i.NONE}function V(D){st(D)}function At(D){let H;switch(D.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case Nr.DOLLY:if(n.enableZoom===!1)return;N(D),r=i.DOLLY;break;case Nr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;R(D),r=i.PAN}else{if(n.enableRotate===!1)return;X(D),r=i.ROTATE}break;case Nr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;X(D),r=i.ROTATE}else{if(n.enablePan===!1)return;R(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Nl)}function Dt(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(D);break;case i.DOLLY:if(n.enableZoom===!1)return;T(D);break;case i.PAN:if(n.enablePan===!1)return;z(D);break}}function ne(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(Nl),q(D),n.dispatchEvent($h))}function zt(D){n.enabled===!1||n.enablePan===!1||tt(D)}function L(D){switch(ht(D),M.length){case 1:switch(n.touches.ONE){case kr.ROTATE:if(n.enableRotate===!1)return;rt(),r=i.TOUCH_ROTATE;break;case kr.PAN:if(n.enablePan===!1)return;lt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case kr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(),r=i.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Nl)}function w(D){switch(ht(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Et(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ft(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(D),n.update();break;default:r=i.NONE}}function J(D){n.enabled!==!1&&D.preventDefault()}function it(D){M.push(D)}function st(D){delete E[D.pointerId];for(let H=0;H<M.length;H++)if(M[H].pointerId==D.pointerId){M.splice(H,1);return}}function ht(D){let H=E[D.pointerId];H===void 0&&(H=new ut,E[D.pointerId]=H),H.set(D.pageX,D.pageY)}function Rt(D){const H=D.pointerId===M[0].pointerId?M[1]:M[0];return E[H.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",ot),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}function xi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function dd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ts={duration:.5,overwrite:!1,delay:0},Jc,je,ye,kn=1e8,ce=1/kn,pc=Math.PI*2,Ly=pc/4,Dy=0,pd=Math.sqrt,Ry=Math.cos,Iy=Math.sin,ze=function(t){return typeof t=="string"},be=function(t){return typeof t=="function"},Ai=function(t){return typeof t=="number"},Kc=function(t){return typeof t>"u"},ci=function(t){return typeof t=="object"},dn=function(t){return t!==!1},Qc=function(){return typeof window<"u"},Ko=function(t){return be(t)||ze(t)},md=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ze=Array.isArray,mc=/(?:-?\.?\d|\.)+/gi,gd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_d=/[+-]=-?[.\d]+/,xd=/[^,'"\[\]\s]+/gi,Oy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ge,On,gc,tu,Ln={},Ea={},vd,yd=function(t){return(Ea=Lr(t,Ln))&&gn},eu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Aa=function(t,e){return!e&&console.warn(t)},bd=function(t,e){return t&&(Ln[t]=e)&&Ea&&(Ea[t]=e)||Ln},mo=function(){return 0},Fy={suppressEvents:!0,isStart:!0,kill:!1},da={suppressEvents:!0,kill:!1},zy={suppressEvents:!0},nu={},qi=[],_c={},Md,Tn={},Ul={},Yh=30,pa=[],iu="",ru=function(t){var e=t[0],n,i;if(ci(e)||be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=pa.length;i--&&!pa[i].targetTest(e););n=pa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new qd(t[i],n)))||t.splice(i,1);return t},_r=function(t){return t._gsap||ru(Un(t))[0]._gsap},Sd=function(t,e,n){return(n=t[e])&&be(n)?t[e]():Kc(n)&&t.getAttribute&&t.getAttribute(e)||n},pn=function(t,e){return(t=t.split(",")).forEach(e)||t},Me=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ny=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ca=function(){var t=qi.length,e=qi.slice(0),n,i;for(_c={},qi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wd=function(t,e,n,i){qi.length&&!je&&Ca(),t.render(e,n,i||je&&e<0&&(t._initted||t._startAt)),qi.length&&!je&&Ca()},Td=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xd).length<2?e:ze(t)?t.trim():t},Ed=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ky=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Lr=function(t,e){for(var n in e)t[n]=e[n];return t},jh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ci(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Pa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Js=function(t){var e=t.parent||ge,n=t.keyframes?ky(Ze(t.keyframes)):Wn;if(dn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Uy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ad=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},qa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ji=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},By=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xc=function(t,e,n,i){return t._startAt&&(je?t._startAt.revert(da):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Vy=function s(t){return!t||t._ts&&s(t.parent)},Zh=function(t){return t._repeat?Es(t._tTime,t=t.duration()+t._rDelay)*t:0},Es=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},La=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},$a=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},Ya=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),$a(t),n._dirty||xr(n,t)),t},Cd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=La(t.rawTime(),e),(!e._dur||Ao(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),xr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},ii=function(t,e,n,i){return e.parent&&ji(e),e._start=Ue((Ai(n)?n:n||t!==ge?In(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ad(t,e,"_first","_last",t._sort?"_start":0),vc(e)||(t._recent=e),i||Cd(t,e),t._ts<0&&Ya(t,t._tTime),t},Pd=function(t,e){return(Ln.ScrollTrigger||eu("scrollTrigger",e))&&Ln.ScrollTrigger.create(e,t)},Ld=function(t,e,n,i,r){if(ou(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Md!==En.frame)return qi.push(t),t._lazy=[r,i],1},Gy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},vc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Hy=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Gy(t)&&!(!t._initted&&vc(t))||(t._ts<0||t._dp._ts<0)&&!vc(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Ao(0,t._tDur,e),u=Es(l,a),t._yoyo&&u&1&&(o=1-o),u!==Es(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||je||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&Ld(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&xc(t,e,n,!0),t._onUpdate&&!n&&Bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ji(t,1),!n&&!je&&(Bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},As=function(t,e,n,i){var r=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ue(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Ya(t,t._tTime=t._tDur*a),t.parent&&$a(t),n||xr(t.parent,t),t},Jh=function(t){return t instanceof hn?xr(t):As(t,t._dur)},Xy={_start:0,endTime:mo,totalDuration:mo},In=function s(t,e,n){var i=t.labels,r=t._recent||Xy,o=t.duration()>=kn?r.endTime(!1):t._dur,a,l,c;return ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ze(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ks=function(t,e,n){var i=Ai(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ae(e[0],o,e[r+1])},Ki=function(t,e){return t||t===0?e(t):e},Ao=function(t,e,n){return n<t?t:n>e?e:n},qe=function(t,e){return!ze(t)||!(e=Oy.exec(t))?"":e[1]},qy=function(t,e,n){return Ki(n,function(i){return Ao(t,e,i)})},yc=[].slice,Dd=function(t,e){return t&&ci(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ci(t[0]))&&!t.nodeType&&t!==On},$y=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ze(i)&&!e||Dd(i,1)?(r=n).push.apply(r,Un(i)):n.push(i)})||n},Un=function(t,e,n){return ye&&!e&&ye.selector?ye.selector(t):ze(t)&&!n&&(gc||!Cs())?yc.call((e||tu).querySelectorAll(t),0):Ze(t)?$y(t,n):Dd(t)?yc.call(t,0):t?[t]:[]},bc=function(t){return t=Un(t)[0]||Aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Un(e,n.querySelectorAll?n:n===t?Aa("Invalid scope")||tu.createElement("div"):t)}},Rd=function(t){return t.sort(function(){return .5-Math.random()})},Id=function(t){if(be(t))return t;var e=ci(t)?t:{each:t},n=vr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return ze(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var m=(g||e).length,p=o[m],_,y,x,v,M,E,A,b,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,kn])[1],!S){for(A=-kn;A<(A=g[S++].getBoundingClientRect().left)&&S<m;);S--}for(p=o[m]=[],_=l?Math.min(S,m)*u-.5:i%S,y=S===kn?0:l?m*h/S-.5:i/S|0,A=0,b=kn,E=0;E<m;E++)x=E%S-_,v=y-(E/S|0),p[E]=M=c?Math.abs(c==="y"?v:x):pd(x*x+v*v),M>A&&(A=M),M<b&&(b=M);i==="random"&&Rd(p),p.max=A-b,p.min=b,p.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(i==="edges"?-1:1),p.b=m<0?r-m:r,p.u=qe(e.amount||e.each)||0,n=n&&m<0?Hd(n):n}return m=(p[f]-p.min)/p.max||0,Ue(p.b+(n?n(m):m)*p.v)+p.u}},Mc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ai(n)?0:qe(n))}},Od=function(t,e){var n=Ze(t),i,r;return!n&&ci(t)&&(i=n=t.radius||kn,t.values?(t=Un(t.values),(r=!Ai(t[0]))&&(i*=i)):t=Mc(t.increment)),Ki(e,n?be(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=kn,u=0,h=t.length,f,d;h--;)r?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,r||u===o||Ai(o)?u:u+qe(o)}:Mc(t))},Fd=function(t,e,n,i){return Ki(Ze(t)?!e:n===!0?!!(n=0):!i,function(){return Ze(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Yy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},jy=function(t,e){return function(n){return t(parseFloat(n))+(e||qe(n))}},Zy=function(t,e,n){return Nd(t,e,0,1,n)},zd=function(t,e,n){return Ki(n,function(i){return t[~~e(i)]})},Jy=function s(t,e,n){var i=e-t;return Ze(t)?zd(t,s(0,t.length),e):Ki(n,function(r){return(i+(r-t)%i)%i+t})},Ky=function s(t,e,n){var i=e-t,r=i*2;return Ze(t)?zd(t,s(0,t.length-1),e):Ki(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},go=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?xd:mc),n+=t.substr(e,i-e)+Fd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Nd=function(t,e,n,i,r){var o=e-t,a=i-n;return Ki(r,function(l){return n+((l-t)/o*a||0)})},Qy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var o=ze(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ze(t)&&!Ze(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(s(t[c-1],t[c]));h--,r=function(g){g*=h;var m=Math.min(f,~~g);return u[m](g-m)},n=e}else i||(t=Lr(Ze(t)?[]:{},t));if(!u){for(l in e)su.call(a,t,l,"get",e[l]);r=function(g){return cu(g,a)||(o?t.p:t)}}}return Ki(n,r)},Kh=function(t,e,n){var i=t.labels,r=kn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Bn=function(t,e,n){var i=t.vars,r=i[e],o=ye,a=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&qi.length&&Ca(),a&&(ye=a),u=l?r.apply(c,l):r.call(c),ye=o,u},Hs=function(t){return ji(t),t.scrollTrigger&&t.scrollTrigger.kill(!!je),t.progress()<1&&Bn(t,"onInterrupt"),t},ls,kd=[],Ud=function(t){if(Qc()&&t){t=!t.name&&t.default||t;var e=t.name,n=be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:mo,render:cu,add:su,kill:mb,modifier:pb,rawVars:0},o={targetTest:0,get:0,getSetter:lu,aliases:{},register:0};if(Cs(),t!==i){if(Tn[e])return;Wn(i,Wn(Pa(t,r),o)),Lr(i.prototype,Lr(r,Pa(t,o))),Tn[i.prop=e]=i,t.targetTest&&(pa.push(i),nu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}bd(e,i),t.register&&t.register(gn,i,mn)}else t&&kd.push(t)},le=255,Ws={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},Bl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},Bd=function(t,e,n){var i=t?Ai(t)?[t>>16,t>>8&le,t&le]:0:Ws.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ws[t])i=Ws[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(mc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Bl(l+1/3,r,o),i[1]=Bl(l,r,o),i[2]=Bl(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(gd),n&&i.length<4&&(i[3]=1),i}else i=t.match(mc)||Ws.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/le,o=i[1]/le,a=i[2]/le,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Vd=function(t){var e=[],n=[],i=-1;return t.split($i).forEach(function(r){var o=r.match(as)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Qh=function(t,e,n){var i="",r=(t+i).match($i),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=Bd(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Vd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace($i,"1").split(as),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split($i),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},$i=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ws)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),tb=/hsl[a]?\(/,Gd=function(t){var e=t.join(" "),n;if($i.lastIndex=0,$i.test(e))return n=tb.test(e),t[1]=Qh(t[1],n),t[0]=Qh(t[0],n,Vd(t[1])),!0},_o,En=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function m(p){var _=s()-i,y=p===!0,x,v,M,E;if(_>t&&(n+=_-e),i+=_,M=i-n,x=M-o,(x>0||y)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=x+(x>=r?4:r-x),v=1),y||(l=c(m)),v)for(d=0;d<a.length;d++)a[d](M,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){vd&&(!gc&&Qc()&&(On=gc=window,tu=On.document||{},Ln.gsap=gn,(On.gsapVersions||(On.gsapVersions=[])).push(gn.version),yd(Ea||On.GreenSockGlobals||!On.gsap&&On||{}),u=On.requestAnimationFrame,kd.forEach(Ud)),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},_o=1,g(2))},sleep:function(){(u?On.cancelAnimationFrame:clearTimeout)(l),_o=0,c=mo},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,_,y){var x=_?function(v,M,E,A){p(v,M,E,A),h.remove(x)}:p;return h.remove(p),a[y?"unshift":"push"](x),Cs(),x},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},h}(),Cs=function(){return!_o&&En.wake()},oe={},eb=/^[\d.\-M][\d.\-,\s]/,nb=/["']/g,ib=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(nb,"").trim():+c,i=l.substr(a+1).trim();return e},rb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},sb=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ib(e[1])]:rb(t).split(",").map(Td)):oe._CE&&eb.test(t)?oe._CE("",t):n},Hd=function(t){return function(e){return 1-t(1-e)}},Wd=function s(t,e){for(var n=t._first,i;n;)n instanceof hn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},vr=function(t,e){return t&&(be(t)?t:oe[t]||sb(t))||e},zr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return pn(t,function(a){oe[a]=Ln[a]=r,oe[o=a.toLowerCase()]=n;for(var l in r)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=r[l]}),r},Xd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Vl=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/pc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Iy((u-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Xd(a);return r=pc/r,l.config=function(c,u){return s(t,c,u)},l},Gl=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Xd(n);return i.config=function(r){return s(t,r)},i};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;zr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;zr("Elastic",Vl("in"),Vl("out"),Vl());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};zr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);zr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});zr("Circ",function(s){return-(pd(1-s*s)-1)});zr("Sine",function(s){return s===1?1:-Ry(s*Ly)+1});zr("Back",Gl("in"),Gl("out"),Gl());oe.SteppedEase=oe.steps=Ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ce;return function(a){return((i*Ao(0,o,a)|0)+r)*n}}};Ts.ease=oe["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return iu+=s+","+s+"Params,"});var qd=function(t,e){this.id=Dy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sd,this.set=e?e.getSetter:lu},xo=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,As(this,+e.duration,1,1),this.data=e.data,ye&&(this._ctx=ye,ye.data.push(this)),_o||En.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,As(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Cs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ya(this,n),!r._dp||r.parent||Cd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Es(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?La(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(Ao(-Math.abs(this._delay),this._tDur,i),!0),$a(this),By(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ii(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?La(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zy);var i=je;return je=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),je=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(In(this,n),dn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,dn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ce)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=be(n)?n:Ed,a=function(){var c=i.then;i.then=null,be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Hs(this)},s}();Wn(xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var hn=function(s){dd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),ge&&ii(n.parent||ge,xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Pd(xi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Ks(0,arguments,this),this},e.from=function(i,r,o){return Ks(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Ks(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Js(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ae(i,r,In(this,o),1),this},e.call=function(i,r,o){return ii(this,Ae.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ae(i,o,In(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Js(o).immediateRender=dn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},e.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,Js(a).immediateRender=dn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ue(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,m,p,_,y,x,v,M,E,A;if(this!==ge&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Ue(u%p),u===l?(m=this._repeat,f=c):(m=~~(u/p),m&&m===u/p&&(f=c,m--),f>c&&(f=c)),M=Es(this._tTime,p),!a&&this._tTime&&M!==m&&this._tTime-M*p-this._dur<=0&&(M=m),E&&m&1&&(f=c-f,A=1),m!==M&&!this._lock){var b=E&&M&1,S=b===(E&&m&1);if(m<M&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ue(m*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Wd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Wy(this,Ue(a),Ue(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!m&&(Bn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-ce);break}}d=g}else{d=this._last;for(var P=i<0?i:f;d;){if(g=d._prev,(d._act||P<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,r,o||je&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=P?-ce:ce);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-ce)._zTime=f>=a?1:-1,this._ts))return this._start=v,$a(this),this.render(i,r,o);this._onUpdate&&!r&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Bn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ai(r)||(r=In(this,r,i)),!(i instanceof xo)){if(Ze(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ze(i))return this.addLabel(i,r);if(be(i))i=Ae.delayedCall(0,i);else return this}return this!==i?ii(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ae?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return ze(i)?this.removeLabel(i):be(i)?this.killTweensOf(i):(qa(this,i),i===this._recent&&(this._recent=this._last),xr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(En.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=In(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ae.delayedCall(0,r||mo,o);return a.data="isPause",this._hasPause=1,ii(this,a,In(this,i))},e.removePause=function(i){var r=this._first;for(i=In(this,i);r;)r._start===i&&r.data==="isPause"&&ji(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Bi!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Un(i),l=this._first,c=Ai(r),u;l;)l instanceof Ae?Ny(l._targets,a)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=In(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ae.to(o,Wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ce,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&As(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Wn({startAt:{time:In(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Kh(this,In(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Kh(this,In(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return xr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=kn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ii(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;As(o,o===ge&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ge._ts&&(wd(ge,La(i,ge)),Md=En.frame),En.frame>=Yh){Yh+=Pn.autoSleep||120;var r=ge._first;if((!r||!r._ts)&&Pn.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},t}(xo);Wn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ob=function(t,e,n,i,r,o,a){var l=new mn(this._pt,t,e,0,1,Kd,null,r),c=0,u=0,h,f,d,g,m,p,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=go(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(kl)||[];h=kl.exec(i);)g=h[0],m=i.substring(c,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:p,c:g.charAt(1)==="="?ps(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=kl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(_d.test(i)||_)&&(l.e=0),this._pt=l,l},su=function(t,e,n,i,r,o,a,l,c,u){be(i)&&(i=i(r||0,t,o));var h=t[e],f=n!=="get"?n:be(h)?c?t[e.indexOf("set")||!be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=be(h)?c?hb:Zd:au,g;if(ze(i)&&(~i.indexOf("random(")&&(i=go(i)),i.charAt(1)==="="&&(g=ps(f,i)+(qe(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Sc)return!isNaN(f*i)&&i!==""?(g=new mn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?db:Jd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&eu(e,i),ob.call(this,t,e,f,i,d,l||Pn.stringFilter,c))},ab=function(t,e,n,i,r){if(be(t)&&(t=Qs(t,r,e,n,i)),!ci(t)||t.style&&t.nodeType||Ze(t)||md(t))return ze(t)?Qs(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Qs(t[a],r,e,n,i);return o},$d=function(t,e,n,i,r,o){var a,l,c,u;if(Tn[t]&&(a=new Tn[t]).init(r,a.rawVars?e[t]:ab(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new mn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==ls))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Bi,Sc,ou=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,m=i.autoRevert,p=t._dur,_=t._startAt,y=t._targets,x=t.parent,v=x&&x.data==="nested"?x.vars.targets:y,M=t._overwrite==="auto"&&!Jc,E=t.timeline,A,b,S,P,B,Y,W,O,k,X,N,R,$;if(E&&(!g||!r)&&(r="none"),t._ease=vr(r,Ts.ease),t._yEase=d?Hd(vr(d===!0?r:d,Ts.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(O=y[0]?_r(y[0]).harness:0,R=O&&i[O.prop],A=Pa(i,nu),_&&(_._zTime<0&&_.progress(1),e<0&&f&&a&&!m?_.render(-1,!0):_.revert(f&&p?da:Fy),_._lazy=0),o){if(ji(t._startAt=Ae.set(y,Wn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&dn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je||!a&&!m)&&t._startAt.revert(da),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!_){if(e&&(a=!1),S=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&dn(l),immediateRender:a,stagger:0,parent:x},A),R&&(S[O.prop]=R),ji(t._startAt=Ae.set(y,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je?t._startAt.revert(da):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&dn(l)||l&&!p,b=0;b<y.length;b++){if(B=y[b],W=B._gsap||ru(y)[b]._gsap,t._ptLookup[b]=X={},_c[W.id]&&qi.length&&Ca(),N=v===y?b:v.indexOf(B),O&&(k=new O).init(B,R||A,t,N,v)!==!1&&(t._pt=P=new mn(t._pt,B,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(T){X[T]=P}),k.priority&&(Y=1)),!O||R)for(S in A)Tn[S]&&(k=$d(S,A,t,N,B,v))?k.priority&&(Y=1):X[S]=P=su.call(t,B,S,"get",A[S],N,v,0,i.stringFilter);t._op&&t._op[b]&&t.kill(B,t._op[b]),M&&t._pt&&(Bi=t,ge.killTweensOf(B,X,t.globalTime(e)),$=!t.parent,Bi=0),t._pt&&l&&(_c[W.id]=1)}Y&&Qd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,g&&e<=0&&E.render(kn,!0,!0)},lb=function(t,e,n,i,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Sc=1,t.vars[e]="+=0",ou(t,a),Sc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Me(n)+qe(u.e)),u.b&&(u.b=c.s+qe(u.b))},cb=function(t,e){var n=t[0]?_r(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Lr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ub=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Ze(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Qs=function(t,e,n,i,r){return be(t)?t.call(e,n,i,r):ze(t)&&~t.indexOf("random(")?go(t):t},Yd=iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jd={};pn(Yd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return jd[s]=1});var Ae=function(s){dd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Js(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,y=i.parent||ge,x=(Ze(n)||md(n)?Ai(n[0]):"length"in i)?[n]:Un(n),v,M,E,A,b,S,P,B;if(a._targets=x.length?ru(x):Aa("GSAP target "+n+" not found. https://greensock.com",!Pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ko(c)||Ko(u)){if(i=a.vars,v=a.timeline=new hn({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=xi(a),v._start=0,f||Ko(c)||Ko(u)){if(A=x.length,P=f&&Id(f),ci(f))for(b in f)~Yd.indexOf(b)&&(B||(B={}),B[b]=f[b]);for(M=0;M<A;M++)E=Pa(i,jd),E.stagger=0,_&&(E.yoyoEase=_),B&&Lr(E,B),S=x[M],E.duration=+Qs(c,xi(a),M,S,x),E.delay=(+Qs(u,xi(a),M,S,x)||0)-a._delay,!f&&A===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(S,E,P?P(M,S,x):0),v._ease=oe.none;v.duration()?c=u=0:a.timeline=0}else if(g){Js(Wn(v.vars.defaults,{ease:"none"})),v._ease=vr(g.ease||i.ease||"none");var Y=0,W,O,k;if(Ze(g))g.forEach(function(X){return v.to(x,X,">")}),v.duration();else{E={};for(b in g)b==="ease"||b==="easeEach"||ub(b,g[b],E,g.easeEach);for(b in E)for(W=E[b].sort(function(X,N){return X.t-N.t}),Y=0,M=0;M<W.length;M++)O=W[M],k={ease:O.e,duration:(O.t-(M?W[M-1].t:0))/100*c},k[b]=O.v,v.to(x,k,Y),Y+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Jc&&(Bi=xi(a),ge.killTweensOf(x),Bi=0),ii(y,xi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ue(y._time)&&dn(h)&&Vy(xi(a))&&y.data!=="nested")&&(a._tTime=-ce,a.render(Math.max(0,-u)||0)),p&&Pd(xi(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ce&&!u?l:i<ce?0:i,f,d,g,m,p,_,y,x,v;if(!c)Hy(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,o);if(f=Ue(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),p=Es(this._tTime,m),f===a&&!o&&this._initted)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Wd(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Ue(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ld(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&!g&&(Bn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:!f&&_?-ce:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&xc(this,i,r,o),Bn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Bn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&xc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ji(this,1),!r&&!(u&&!a)&&(h||a||_)&&(Bn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a){_o||En.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ou(this,l),c=this._ease(l/this._dur),lb(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):(Ya(this,0),this.parent||Ad(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bi&&Bi.vars.overwrite!==!0)._first||Hs(this),this.parent&&o!==this.timeline.totalDuration()&&As(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Un(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,m,p,_;if((!r||r==="all")&&Uy(a,l))return r==="all"&&(this._pt=0),Hs(this);for(h=this._op=this._op||[],r!=="all"&&(ze(r)&&(m={},pn(r,function(y){return m[y]=1}),r=m),r=cb(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(h[_]=r,g=f,d={}):(d=h[_]=h[_]||{},g=r);for(m in g)p=f&&f[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&qa(this,p,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&Hs(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ks(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Ks(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return ge.killTweensOf(i,r,o)},t}(xo);Wn(Ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(s){Ae[s]=function(){var t=new hn,e=yc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var au=function(t,e,n){return t[e]=n},Zd=function(t,e,n){return t[e](n)},hb=function(t,e,n,i){return t[e](i.fp,n)},fb=function(t,e,n){return t.setAttribute(e,n)},lu=function(t,e){return be(t[e])?Zd:Kc(t[e])&&t.setAttribute?fb:au},Jd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},db=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Kd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},cu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pb=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},mb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?qa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Qd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},mn=function(){function s(e,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Jd,this.d=l||this,this.set=c||au,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gb,this.m=n,this.mt=r,this.tween=i},s}();pn(iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return nu[s]=1});Ln.TweenMax=Ln.TweenLite=Ae;Ln.TimelineLite=Ln.TimelineMax=hn;ge=new hn({sortChildren:!1,defaults:Ts,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=Gd;var yr=[],ma={},_b=[],tf=0,xb=0,Hl=function(t){return(ma[t]||_b).map(function(e){return e()})},wc=function(){var t=Date.now(),e=[];t-tf>2&&(Hl("matchMediaInit"),yr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=On.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Hl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),tf=t,Hl("matchMedia"))},tp=function(){function s(e,n){this.selector=n&&bc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xb++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){be(n)&&(r=i,i=n,n=be);var o=this,a=function(){var c=ye,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=bc(r)),ye=o,h=i.apply(o,arguments),be(h)&&o._r.push(h),ye=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===be?a(o):n?o[n]=a:a},t.ignore=function(n){var i=ye;ye=null,n(this),ye=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ae&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ae)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=yr.length;a--;)yr[a].id===this.id&&yr.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),vb=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){ci(n)||(n={matches:n});var o=new tp(0,r||this.scope),a=o.conditions={},l,c,u;ye&&!o.selector&&(o.selector=ye.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=On.matchMedia(n[c]),l&&(yr.indexOf(o)<0&&yr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(wc):l.addEventListener("change",wc)));return u&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Da={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ud(i)})},timeline:function(t){return new hn(t)},getTweensOf:function(t,e){return ge.getTweensOf(t,e)},getProperty:function(t,e,n,i){ze(t)&&(t=Un(t)[0]);var r=_r(t||{}).get,o=n?Ed:Td;return n==="native"&&(n=""),t&&(e?o((Tn[e]&&Tn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Tn[a]&&Tn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Un(t),t.length>1){var i=t.map(function(u){return gn.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var o=Tn[e],a=_r(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;ls._pt=0,h.init(t,n?u+n:u,ls,0,[t]),h.render(1,h),ls._pt&&cu(1,ls)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=gn.to(t,Lr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(e,l,c,u)};return o.tween=r,o},isTweening:function(t){return ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vr(t.ease,Ts.ease)),jh(Ts,t||{})},config:function(t){return jh(Pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Tn[a]&&!Ln[a]&&Aa(e+" effect requires "+a+" plugin.")}),Ul[e]=function(a,l,c){return n(Un(a),Wn(l||{},r),c)},o&&(hn.prototype[e]=function(a,l,c){return this.add(Ul[e](a,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=vr(e)},parseEase:function(t,e){return arguments.length?vr(t,e):oe},getById:function(t){return ge.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new hn(t),i,r;for(n.smoothChildTiming=dn(t.smoothChildTiming),ge.remove(n),n._dp=0,n._time=n._tTime=ge._time,i=ge._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ae&&i.vars.onComplete===i._targets[0]))&&ii(n,i,i._start-i._delay),i=r;return ii(ge,n,0),n},context:function(t,e){return t?new tp(t,e):ye},matchMedia:function(t){return new vb(t)},matchMediaRefresh:function(){return yr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||wc()},addEventListener:function(t,e){var n=ma[t]||(ma[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ma[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Jy,wrapYoyo:Ky,distribute:Id,random:Fd,snap:Od,normalize:Zy,getUnit:qe,clamp:qy,splitColor:Bd,toArray:Un,selector:bc,mapRange:Nd,pipe:Yy,unitize:jy,interpolate:Qy,shuffle:Rd},install:yd,effects:Ul,ticker:En,updateRoot:hn.updateRoot,plugins:Tn,globalTimeline:ge,core:{PropTween:mn,globals:bd,Tween:Ae,Timeline:hn,Animation:xo,getCache:_r,_removeLinkedListItem:qa,reverting:function(){return je},context:function(t){return t&&ye&&(ye.data.push(t),t._ctx=ye),ye},suppressOverwrites:function(t){return Jc=t}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Da[s]=Ae[s]});En.add(hn.updateRoot);ls=Da.to({},{duration:0});var yb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bb=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=yb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Wl=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ze(r)&&(l={},pn(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}bb(a,r)}}}},gn=Da.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wl("roundProps",Mc),Wl("modifiers"),Wl("snap",Od))||Da;Ae.version=hn.version=gn.version="3.12.2";vd=1;Qc()&&Cs();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ef,Vi,ms,uu,fr,nf,hu,Mb=function(){return typeof window<"u"},Ci={},or=180/Math.PI,gs=Math.PI/180,Qr=Math.atan2,rf=1e8,fu=/([A-Z])/g,Sb=/(left|right|width|margin|padding|x)/i,wb=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Tb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Eb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ab=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ep=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},np=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Cb=function(t,e,n){return t.style[e]=n},Pb=function(t,e,n){return t.style.setProperty(e,n)},Lb=function(t,e,n){return t._gsap[e]=n},Db=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Rb=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Ib=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},xe="transform",Kn=xe+"Origin",Ob=function s(t,e){var n=this,i=this.target,r=i.style;if(t in Ci&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=vi(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:vi(i,t);else return ri.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(xe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=xe}(r||e)&&this.props.push(t,e,r[t])},ip=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Fb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(fu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=hu(),(!r||!r.isStart)&&!n[xe]&&(ip(n),i.uncache=1)}},rp=function(t,e){var n={target:t,props:[],revert:Fb,save:Ob};return t._gsap||gn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},sp,Ec=function(t,e){var n=Vi.createElementNS?Vi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vi.createElement(t);return n.style?n:Vi.createElement(t)},oi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(fu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Ps(e)||e,1)||""},sf="O,Moz,ms,Ms,Webkit".split(","),Ps=function(t,e,n){var i=e||fr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(sf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?sf[o]:"")+t},Ac=function(){Mb()&&window.document&&(ef=window,Vi=ef.document,ms=Vi.documentElement,fr=Ec("div")||{style:{}},Ec("div"),xe=Ps(xe),Kn=xe+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sp=!!Ps("perspective"),hu=gn.core.reverting,uu=1)},Xl=function s(t){var e=Ec("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(ms.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ms.removeChild(e),this.style.cssText=r,o},of=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},op=function(t){var e;try{e=t.getBBox()}catch{e=Xl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Xl||(e=Xl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+of(t,["x","cx","x1"])||0,y:+of(t,["y","cy","y1"])||0,width:0,height:0}:e},ap=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&op(t))},vo=function(t,e){if(e){var n=t.style;e in Ci&&e!==Kn&&(e=xe),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(fu,"-$1").toLowerCase())):n.removeAttribute(e)}},Gi=function(t,e,n,i,r,o){var a=new mn(t._pt,e,n,0,1,o?np:ep);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},af={deg:1,rad:1,turn:1},zb={grid:1,flex:1},Zi=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=fr.style,l=Sb.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,m,p,_;return i===o||!r||af[i]||af[o]?r:(o!=="px"&&!f&&(r=s(t,e,n,"px")),_=t.getCTM&&ap(t),(d||o==="%")&&(Ci[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[u],Me(d?r/g*h:r/100*g)):(a[l?"width":"height"]=h+(f?o:i),m=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===Vi||!m.appendChild)&&(m=Vi.body),p=m._gsap,p&&d&&p.width&&l&&p.time===En.time&&!p.uncache?Me(r/p.width*h):((d||o==="%")&&!zb[oi(m,"display")]&&(a.position=oi(t,"position")),m===t&&(a.position="static"),m.appendChild(fr),g=fr[u],m.removeChild(fr),a.position="absolute",l&&d&&(p=_r(m),p.time=En.time,p.width=m[u]),Me(f?g*r/h:g&&r?h/g*r:0))))},vi=function(t,e,n,i){var r;return uu||Ac(),e in ri&&e!=="transform"&&(e=ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ci[e]&&e!=="transform"?(r=bo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ia(oi(t,Kn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ra[e]&&Ra[e](t,e,n)||oi(t,e)||Sd(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zi(t,e,r,n)+n:r},Nb=function(t,e,n,i){if(!n||n==="none"){var r=Ps(e,t,1),o=r&&oi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new mn(this._pt,t.style,e,0,1,Kd),l=0,c=0,u,h,f,d,g,m,p,_,y,x,v,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=oi(t,e)||i,t.style[e]=n),u=[n,i],Gd(u),n=u[0],i=u[1],f=n.match(as)||[],M=i.match(as)||[],M.length){for(;h=as.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(m=f[c++]||"")&&(d=parseFloat(m)||0,v=m.substr((d+"").length),p.charAt(1)==="="&&(p=ps(d,p)+v),_=parseFloat(p),x=p.substr((_+"").length),l=as.lastIndex-x.length,x||(x=x||Pn.units[e]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=Zi(t,e,m,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:_-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?np:ep;return _d.test(i)&&(a.e=0),this._pt=a,a},lf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=lf[n]||n,e[1]=lf[i]||i,e.join(" ")},Ub=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ci[a]&&(l=1,a=a==="transformOrigin"?Kn:xe),vo(n,a);l&&(vo(n,xe),o&&(o.svg&&n.removeAttribute("transform"),bo(n,1),o.uncache=1,ip(i)))}},Ra={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new mn(t._pt,e,n,0,0,Ub);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},yo=[1,0,0,1,0,0],lp={},cp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},cf=function(t){var e=oi(t,xe);return cp(e)?yo:e.substr(7).match(gd).map(Me)},du=function(t,e){var n=t._gsap||_r(t),i=t.style,r=cf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?yo:r):(r===yo&&!t.offsetParent&&t!==ms&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ms.appendChild(t)),r=cf(t),l?i.display=l:vo(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ms.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Cc=function(t,e,n,i,r,o){var a=t._gsap,l=r||du(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],m=l[2],p=l[3],_=l[4],y=l[5],x=e.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,A,b,S;n?l!==yo&&(A=d*p-g*m)&&(b=v*(p/A)+M*(-m/A)+(m*y-p*_)/A,S=v*(-g/A)+M*(d/A)-(d*y-g*_)/A,v=b,M=S):(E=op(t),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&a.smooth?(_=v-c,y=M-u,a.xOffset=h+(_*d+y*m)-_,a.yOffset=f+(_*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Kn]="0px 0px",o&&(Gi(o,a,"xOrigin",c,v),Gi(o,a,"yOrigin",u,M),Gi(o,a,"xOffset",h,a.xOffset),Gi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},bo=function(t,e){var n=t._gsap||new qd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=oi(t,Kn)||"0",u,h,f,d,g,m,p,_,y,x,v,M,E,A,b,S,P,B,Y,W,O,k,X,N,R,$,T,z,q,tt,rt,lt;return u=h=f=m=p=_=y=x=v=0,d=g=1,n.svg=!!(t.getCTM&&ap(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xe]!=="none"?l[xe]:"")),i.scale=i.rotate=i.translate="none"),A=du(t,n.svg),n.svg&&(n.uncache?(R=t.getBBox(),c=n.xOrigin-R.x+"px "+(n.yOrigin-R.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),Cc(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==yo&&(B=A[0],Y=A[1],W=A[2],O=A[3],u=k=A[4],h=X=A[5],A.length===6?(d=Math.sqrt(B*B+Y*Y),g=Math.sqrt(O*O+W*W),m=B||Y?Qr(Y,B)*or:0,y=W||O?Qr(W,O)*or+m:0,y&&(g*=Math.abs(Math.cos(y*gs))),n.svg&&(u-=M-(M*B+E*W),h-=E-(M*Y+E*O))):(lt=A[6],tt=A[7],T=A[8],z=A[9],q=A[10],rt=A[11],u=A[12],h=A[13],f=A[14],b=Qr(lt,q),p=b*or,b&&(S=Math.cos(-b),P=Math.sin(-b),N=k*S+T*P,R=X*S+z*P,$=lt*S+q*P,T=k*-P+T*S,z=X*-P+z*S,q=lt*-P+q*S,rt=tt*-P+rt*S,k=N,X=R,lt=$),b=Qr(-W,q),_=b*or,b&&(S=Math.cos(-b),P=Math.sin(-b),N=B*S-T*P,R=Y*S-z*P,$=W*S-q*P,rt=O*P+rt*S,B=N,Y=R,W=$),b=Qr(Y,B),m=b*or,b&&(S=Math.cos(b),P=Math.sin(b),N=B*S+Y*P,R=k*S+X*P,Y=Y*S-B*P,X=X*S-k*P,B=N,k=R),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,_=180-_),d=Me(Math.sqrt(B*B+Y*Y+W*W)),g=Me(Math.sqrt(X*X+lt*lt)),b=Qr(k,X),y=Math.abs(b)>2e-4?b*or:0,v=rt?1/(rt<0?-rt:rt):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!cp(oi(t,xe)),N&&t.setAttribute("transform",N))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Me(d),n.scaleY=Me(g),n.rotation=Me(m)+a,n.rotationX=Me(p)+a,n.rotationY=Me(_)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Kn]=Ia(c)),n.xOffset=n.yOffset=0,n.force3D=Pn.force3D,n.renderTransform=n.svg?Vb:sp?up:Bb,n.uncache=0,n},Ia=function(t){return(t=t.split(" "))[0]+" "+t[1]},ql=function(t,e,n){var i=qe(e);return Me(parseFloat(e)+parseFloat(Zi(t,"x",n+"px",i)))+i},Bb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,up(t,e)},nr="0deg",ks="0px",ir=") ",up=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,_=n.force3D,y=n.target,x=n.zOrigin,v="",M=_==="auto"&&t&&t!==1||_===!0;if(x&&(h!==nr||u!==nr)){var E=parseFloat(u)*gs,A=Math.sin(E),b=Math.cos(E),S;E=parseFloat(h)*gs,S=Math.cos(E),o=ql(y,o,A*S*-x),a=ql(y,a,-Math.sin(E)*-x),l=ql(y,l,b*S*-x+x)}p!==ks&&(v+="perspective("+p+ir),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||o!==ks||a!==ks||l!==ks)&&(v+=l!==ks||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ir),c!==nr&&(v+="rotate("+c+ir),u!==nr&&(v+="rotateY("+u+ir),h!==nr&&(v+="rotateX("+h+ir),(f!==nr||d!==nr)&&(v+="skew("+f+", "+d+ir),(g!==1||m!==1)&&(v+="scale("+g+", "+m+ir),y.style[xe]=v||"translate(0, 0)"},Vb=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,_=n.yOffset,y=n.forceCSS,x=parseFloat(o),v=parseFloat(a),M,E,A,b,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=gs,c*=gs,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=gs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,b*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,E*=S)),M=Me(M),E=Me(E),A=Me(A),b=Me(b)):(M=h,b=f,E=A=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Zi(d,"x",o,"px"),v=Zi(d,"y",a,"px")),(g||m||p||_)&&(x=Me(x+g-(g*M+m*A)+p),v=Me(v+m-(g*E+m*b)+_)),(i||r)&&(S=d.getBBox(),x=Me(x+i/100*S.width),v=Me(v+r/100*S.height)),S="matrix("+M+","+E+","+A+","+b+","+x+","+v+")",d.setAttribute("transform",S),y&&(d.style[xe]=S)},Gb=function(t,e,n,i,r){var o=360,a=ze(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?or:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*rf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*rf)%o-~~(c/o)*o)),t._pt=f=new mn(t._pt,e,n,i,c,Tb),f.e=u,f.u="deg",t._props.push(n),f},uf=function(t,e){for(var n in e)t[n]=e[n];return t},Hb=function(t,e,n){var i=uf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[xe]=e,a=bo(n,1),vo(n,xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xe],o[xe]=e,a=bo(n,1),o[xe]=c);for(l in Ci)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=qe(c),g=qe(u),h=d!==g?Zi(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new mn(t._pt,a,l,h,f-h,Tc),t._pt.u=g||0,t._props.push(l));uf(a,i)};pn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ra[t>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return vi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,m){return d[g]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,d,h)}});var hp={name:"css",register:Ac,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,g,m,p,_,y,x,v,M,E,A,b;uu||Ac(),this.styles=this.styles||rp(t),b=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(u=e[m],!(Tn[m]&&$d(m,e,n,i,t,r)))){if(d=typeof u,g=Ra[m],d==="function"&&(u=u.call(n,i,t,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=go(u)),g)g(this,t,m,u,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(m)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=qe(c),_=qe(u)),_?p!==_&&(c=Zi(t,m,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,m),o.push(m),b.push(m,0,a[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,t,r):l[m],ze(c)&&~c.indexOf("random(")&&(c=go(c)),qe(c+"")||(c+=Pn.units[m]||qe(vi(t,m))||""),(c+"").charAt(1)==="="&&(c=vi(t,m))):c=vi(t,m),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),m in ri&&(m==="autoAlpha"&&(f===1&&vi(t,"visibility")==="hidden"&&h&&(f=0),b.push("visibility",0,a.visibility),Gi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=ri[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Ci,x){if(this.styles.save(m),v||(M=t._gsap,M.renderTransform&&!e.parseTransform||bo(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new mn(this._pt,a,xe,0,1,M.renderTransform,M,0,-1),v.dep=1),m==="scale")this._pt=new mn(this._pt,M,"scaleY",M.scaleY,(y?ps(M.scaleY,y+h):h)-M.scaleY||0,Tc),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(Kn,0,a[Kn]),u=kb(u),M.svg?Cc(t,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Gi(this,M,"zOrigin",M.zOrigin,_),Gi(this,a,m,Ia(c),Ia(u)));continue}else if(m==="svgOrigin"){Cc(t,u,1,E,0,this);continue}else if(m in lp){Gb(this,M,m,f,y?ps(f,y+u):u);continue}else if(m==="smoothOrigin"){Gi(this,M,"smooth",M.smooth,u);continue}else if(m==="force3D"){M[m]=u;continue}else if(m==="transform"){Hb(this,u,t);continue}}else m in a||(m=Ps(m)||m);if(x||(h||h===0)&&(f||f===0)&&!wb.test(u)&&m in a)p=(c+"").substr((f+"").length),h||(h=0),_=qe(u)||(m in Pn.units?Pn.units[m]:p),p!==_&&(f=Zi(t,m,c,_)),this._pt=new mn(this._pt,x?M:a,m,f,(y?ps(f,y+h):h)-f,!x&&(_==="px"||m==="zIndex")&&e.autoRound!==!1?Ab:Tc),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Eb);else if(m in a)Nb.call(this,t,m,c,y?y+u:u);else if(m in t)this.add(t,m,c||t[m],y?y+u:u,i,r);else if(m!=="parseTransform"){eu(m,u);continue}x||(m in a?b.push(m,0,a[m]):b.push(m,1,c||t[m])),o.push(m)}}A&&Qd(this)},render:function(t,e){if(e.tween._time||!hu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:vi,aliases:ri,getSetter:function(t,e,n){var i=ri[e];return i&&i.indexOf(",")<0&&(e=i),e in Ci&&e!==Kn&&(t._gsap.x||vi(t,"x"))?n&&nf===n?e==="scale"?Db:Lb:(nf=n||{})&&(e==="scale"?Rb:Ib):t.style&&!Kc(t.style[e])?Cb:~e.indexOf("-")?Pb:lu(t,e)},core:{_removeProperty:vo,_getMatrix:du}};gn.utils.checkPrefix=Ps;gn.core.getStyleSaver=rp;(function(s,t,e,n){var i=pn(s+","+t+","+e,function(r){Ci[r]=1});pn(t,function(r){Pn.units[r]="deg",lp[r]=1}),ri[i[13]]=s+","+t,pn(n,function(r){var o=r.split(":");ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Pn.units[s]="px"});gn.registerPlugin(hp);var Xe=gn.registerPlugin(hp)||gn;Xe.core.Tween;class fp extends Wa{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}class Wb{constructor({cubeR:t,skeleR:e,texture:n,index:i,planetRadius:r,font:o,data:a}){this.radius=t,this.texture=n,this.index=i/60-1,this.radian=i*(Math.PI/180),this.planetRadius=r,this.font=o,this.data=a,this.isClick=!1;const l=()=>{const g=new wa(t),m=new fc({color:65535,emissive:13408767,transparent:!0}),p=new $e(g,m);return p.name="cube",p.userData={index:this.index},p},c=()=>{const g=new wa(e),m=new Sa({wireframe:!0,transparent:!0,opacity:.2,color:11184810}),p=new $e(g,m);return p.name="skeletone",p.userData={index:this.index},p},u=()=>{const g=new gr(t,t*.75,10,10),m=new Sa({map:n,transparent:!1}),p=new $e(g,m);return p.name="picture",p},h=g=>{const m=new fp(g,{font:o,size:.5,height:.1,bevelEnabled:!0,bevelSegments:5,bevelSize:.01,bevelThickness:.02});m.computeBoundingBox(),m.center();const p=new fc({color:3407837,emissive:13434743});return new $e(m,p)};this.cube=l(),this.skeletone=c(),this.picture=u(),this.picture.visible=!1,this.picture.rotation.set(-4.5,-.3,2.8);let f=this.index-3;f<0&&(f+=this.data.data.length),this.showIndex=f+1,this.numberText=h(this.showIndex.toString()),this.titleText=h(this.data.data[this.index].title),this.titleText.scale.set(.2,.2,.2),this.titleText.rotation.set(2.081,-.655,2.928),this.numberText.rotation.set(1.642,-1.308,-3.274),this.numberText.visible=!1,this.titleText.visible=!1,this.planet=new Mi,this.planet.name="planet",this.planet.userData={dataIndex:this.index},this.planet.add(this.cube,this.skeletone,this.picture,this.numberText,this.titleText),this.planet.position.set(r*Math.cos(this.radian),r*Math.sin(this.radian),0);const d=Xe.timeline({id:`${this.index}`});this.hover=d}animation(t){this.hover.isActive()&&this.hover.clear(!0),t==="big"?this.hover.to(this.skeletone.scale,{x:0,y:0,z:0,duration:.5},"<").to(this.cube.scale,{x:1.8,y:1.8,z:1.8,duration:.4},"<").to(this.cube.material,{opacity:.4,duration:.4},"<").to(this.numberText.scale,{x:1,y:1,z:1,duration:.3},"<").to(this.numberText.position,{x:.871,y:-.244,z:-.767,duration:.3},"<").to(this.titleText.scale,{x:.2,y:.2,z:.2,duration:.3},"<").to(this.titleText.position,{x:-.049,y:-.325,z:.205,duration:.3,onStart:()=>{this.numberText.visible=!0,this.titleText.visible=!0}},"<").to(this.picture.scale,{x:2.3,y:2.3,z:2.3,duration:.3,onStart:()=>{this.picture.visible=!0},onComplete:()=>{this.hover.clear(!0)}},"<"):this.hover.to(this.skeletone.scale,{x:1,y:1,z:1,duration:.5},"<").to(this.cube.scale,{x:1,y:1,z:1,duration:.4},"<").to(this.cube.material,{opacity:1,duration:.4},"<").to(this.numberText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.numberText.position,{x:this.planet.position.x,y:this.planet.position.y,z:this.planet.position.z,duration:.3},"<").to(this.titleText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.titleText.position,{x:this.planet.position.x,y:this.planet.position.y,z:this.planet.position.z,duration:.3,onStart:()=>{this.numberText.visible=!1,this.titleText.visible=!1}},"<").to(this.picture.scale,{x:1,y:1,z:1,duration:.3,onComplete:()=>{this.picture.visible=!1,this.hover.clear(!0)}},"<")}update(t){this.cube.rotation.x=t*.8,this.cube.rotation.y=t*.8,this.skeletone.rotation.x=t*1.3,this.skeletone.rotation.y=t*1.3,!this.hover.isActive()&&!this.picture.visible&&this.skeletone.scale.x!==1&&this.skeletone.scale.set(1,1,1)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class ai{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ai.nextNameID=ai.nextNameID||0,this.$name.id=`lil-gui-name-${++ai.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Xb extends ai{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pc(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const qb={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Pc,toHexString:Pc},Mo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},$b={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const n=Mo.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Mo.toHexString(i)}},Yb={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=Mo.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Mo.toHexString(i)}},jb=[qb,Mo,$b,Yb];function Zb(s){return jb.find(t=>t.match(s))}class Jb extends ai{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Zb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Pc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $l extends ai{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Kb extends ai{constructor(t,e,n,i,r,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,l,c,u,h;const f=5,d=y=>{a=y.clientX,l=c=y.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",m)},g=y=>{if(o){const x=y.clientX-a,v=y.clientY-l;Math.abs(v)>f?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>f&&m()}if(!o){const x=y.clientY-c;h-=x*this._step*this._arrowKeyMultiplier(y),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=y.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",m)},p=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(_,y,x,v,M)=>(_-y)/(x-y)*(M-v)+v,e=_=>{const y=this.$slider.getBoundingClientRect();let x=t(_,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=_=>{this._setDraggingStyle(!0),e(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{e(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),e(_.touches[0].clientX),o=!1},u=_=>{_.touches.length>1||(this._hasScrollBar?(a=_.touches[0].clientX,l=_.touches[0].clientY,o=!0):c(_),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=_=>{if(o){const y=_.touches[0].clientX-a,x=_.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(_):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else _.preventDefault(),e(_.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let m;const p=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const x=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qb extends ai{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class tM extends ai{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const eM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function nM(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let hf=!1;class pu{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!hf&&a&&(nM(eM),hf=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new Qb(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Kb(this,t,e,n,i,r);case"boolean":return new Xb(this,t,e);case"string":return new tM(this,t,e);case"function":return new $l(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Jb(this,t,e,n)}addFolder(t){const e=new pu({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof $l||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof $l)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const dp=pu;class pp{constructor({about:t}){switch(this.data=[],t){case"carrer":{this.data=[{title:"CLES to Vue",img:"s1.jpg",date:["202202","202208"],Languege:["JavaScript"],UIFrameWork:["Vue2.X","ag-grid"],company:["Samsung S1","Companion System"],detail:["Samsung 에스원 파견 Project","CLES 사이트 리뉴얼 개발 (에스원 사내 업무 사이트)","서비스 중단된 tmax의 top에서 vue로 리뉴얼"],pitch:["대부분이 대용량 데이터 조회 페이지였고 페이지 마다 다르게 동작하는 CRUD 버튼 요구했기에 대용량 데이터 표출 용이하며 커스텀 용이한 ag-grid를 사용","공통 component 사용하여 사업장 마다 공통된 페이지를 빠르게 작업"],role:["공통 component 개발 및 교육","고객사와 소통","기존 Page 분석 및 리뉴얼 기획 참여"]},{title:"SmartSearch",img:"s1.jpg",subtitle:"SmartSearch-AdminSite Renewal",company:["Companion System","Samsung S1"],date:["202006","202202"],Languege:["Vue2.x","TypeScript"],detail:["Samsung 에스원 파견 Project","Smart검색 Admin-Site 익스플로 서비스 종료로 인해 Vue로 리뉴얼 개발"],pitch:["회사 고유 ui framework인 active ui를 base로 개발한 프로젝트"],role:["기존 개발 소스, 화면 분석","리뉴얼 화면 기획 및 기획서 작성","개발, 테스트, 배포 완료"]},{title:"TAD-Admin",img:"s1.jpg",company:["Samsung S1","Companion System"],date:["202006","202009"],Languege:["JavaScript"],UIFrameWork:["Vue2.X","vuetify"],detail:["Samsung 에스원 파견 Project","TAD 관리자 사이트 개발(얼굴 인증 사진 관리용 사이트)"],pitch:["vuetify로 대중적인 디자인 구성","얼굴 인증 사진 data 조회"],role:["리뉴얼 화면 기획 및 기획서 작성","개발, 테스트, 배포 완료"]},{title:"Active UI",img:"companion.png",company:["Samsung S1","Companion System"],date:["202009","202011"],Languege:["TypeScript"],UIFrameWork:["Vue2.X","devextreame"],detail:["Samsung 에스원 파견 Project","회사 고유 UI Framework 솔루션"],pitch:["사용자들의 편리한 이용과 활용도를 위해 typescript로 개발","data 조회에 용이","Grid Data를 to excel or from excel 기능 기본 옵션"],role:["Component 개발","테스트"]},{title:"MCC-Admin",img:"s1.jpg",subtitle:"모바일 보안 카메라 AdminSite",company:["Samsung S1","Companion System"],date:["202009","202102"],Languege:["TypeScript"],UIFrameWork:["Vue2.X","devextreame"],detail:["Samsung 에스원 파견 Project","모바일 보안 카메라 관리자 사이트 개발"],pitch:["회사 내 자체 UI 솔루션 기반으로 개발"],role:["Site 개발","테스트","배포 완료"]},{title:"SM-c++",img:"s1.jpg",subtitle:"SmartSearch & V3 ",company:["Samsung S1","Companion System"],date:["202006","202202"],Languege:["C++"],detail:["Samsung 에스원 파견 Project","smartsearch - 인증 확률을 다양한 옵션을 통해 조절하여 검색을 빠르게 처리해 인증 속도를 높여주는 시스템","v3 - 이미지 프로세싱 기술을 사용하여 저장된 사진으로 얼굴 인증을 하는 시스템"],pitch:["시스템 내 마스크 인증 사용 옵션 추가 개발","마스크 인증의 옵션 확률을 다르게"],role:["마스크 사용 인증 옵션과 온도 체크 옵션에 따른 출입 기계와의 상호 통신 부분 개발","중국 및 여러 사업장에 배포 후 현재 운영 중"]}];break}case"project":{this.data=[{title:"KakakoBank Clone",date:["202305","202305"],Languege:["Javascript","HTML","CSS"],img:"cloneKakao.png",company:["Alone"],subtitle:"https://minji-baek.github.io/kakaoBank-page-clone/",detail:["독학하여 만들어보는 Toy Project","KakakoBank Clone Base","이직 준비 중인 포토폴리오 느낌으로 내용을 꾸밈"],pitch:["자주 사용되는 slider library도 직접 만들어보며 libaray에 의존하지 않는 연습을 해봄","자주 사용되는 design cloning"],role:["Site 개발","테스트","배포 완료"]},{title:"Next-level-page",date:["202305","202305"],Languege:["Javascript","HTML","CSS"],company:["Alone"],img:"activePage.png",subtitle:"https://minji-baek.github.io/next-level-page/",detail:["독학하여 만들어보는 Toy Project","터득한 animation, parallax-scrolling, css를 활용하고 또 다른 기법들을 사용한 interactive page"],pitch:["자주 사용되는 design cloning","scrolling 뿐만 아니라 mouse move와 object들 간의 parallax 기법도 활용하여 더욱 활용도 높은 기능의 기반이 될 것"],role:["Site 개발","테스트","배포 완료"]},{title:"Flying-Bird",date:["202306","202306"],Languege:["Javascript","HTML","CSS"],company:["Alone"],img:"2Dgame.png",subtitle:"https://minji-baek.github.io/mouse-click-game/",detail:["독학하여 만들어보는 Toy Project","Canvas를 활용하여 mouse click event 만으로 만든 간단한 2D game"],pitch:["tiled라는 programe 통해 직접 tile asset을 만들어 보고 illustrator로 직접 제목 png를 만듬"],role:["Site 개발","테스트","배포 완료"]},{title:"Canvas-Portfolio",date:["202306","202306"],Languege:["React","HTML","CSS","Jsx"],company:["Alone"],img:"CanvasVerportfolio.png",subtitle:"https://minji-baek.github.io/canvas-practice-projects/",detail:["독학하여 만들어보는 Toy Project","Canvas, React, Matter.js를 활용하여 2D Portpolio 를 개발"],pitch:["상단의 erasing 형식의 사진 show","하단의 CountDown, firework, confetti 등 2d effect","중단의 matter.js 물리엔진 구현"],role:["Site 개발","테스트","배포 완료"]}];break}}}}class mp extends Xa{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new wy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new iM(t)}}class iM{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=rM(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function rM(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=sM(u,i,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function sM(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new Py;let a,l,c,u,h,f,d,g;if(r.o){const m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,_=m.length;p<_;)switch(m[p++]){case"m":a=m[p++]*t+e,l=m[p++]*t+n,o.moveTo(a,l);break;case"l":a=m[p++]*t+e,l=m[p++]*t+n,o.lineTo(a,l);break;case"q":c=m[p++]*t+e,u=m[p++]*t+n,h=m[p++]*t+e,f=m[p++]*t+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=m[p++]*t+e,u=m[p++]*t+n,h=m[p++]*t+e,f=m[p++]*t+n,d=m[p++]*t+e,g=m[p++]*t+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:r.ha*t,path:o}}function ff(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function oM(s,t,e){return t&&ff(s.prototype,t),e&&ff(s,e),s}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be,Lc,An,Hi,Wi,_s,gp,ar,to,_p,Si,Yn,xp,vp=function(){return Be||typeof window<"u"&&(Be=window.gsap)&&Be.registerPlugin&&Be},yp=1,cs=[],Qt=[],li=[],eo=Date.now,Dc=function(t,e){return e},aM=function(){var t=to.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Qt),i.push.apply(i,li),Qt=n,li=i,Dc=function(o,a){return e[o](a)}},Yi=function(t,e){return~li.indexOf(t)&&li[li.indexOf(t)+1][e]},no=function(t){return!!~_p.indexOf(t)},Qe=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Qo="scrollLeft",ta="scrollTop",Rc=function(){return Si&&Si.isPressed||Qt.cache++},Oa=function(t,e){var n=function i(r){if(r||r===0){yp&&(An.history.scrollRestoration="manual");var o=Si&&Si.isPressed;r=i.v=Math.round(r)||(Si&&Si.iOS?1:0),t(r),i.cacheID=Qt.cache,o&&Dc("ss",r)}else(e||Qt.cache!==i.cacheID||Dc("ref"))&&(i.cacheID=Qt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},sn={s:Qo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Oa(function(s){return arguments.length?An.scrollTo(s,Le.sc()):An.pageXOffset||Hi[Qo]||Wi[Qo]||_s[Qo]||0})},Le={s:ta,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:sn,sc:Oa(function(s){return arguments.length?An.scrollTo(sn.sc(),s):An.pageYOffset||Hi[ta]||Wi[ta]||_s[ta]||0})},ln=function(t,e){return(e&&e._ctx&&e._ctx.selector||Be.utils.toArray)(t)[0]||(typeof t=="string"&&Be.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ji=function(t,e){var n=e.s,i=e.sc;no(t)&&(t=Hi.scrollingElement||Wi);var r=Qt.indexOf(t),o=i===Le.sc?1:2;!~r&&(r=Qt.push(t)-1),Qt[r+o]||Qe(t,"scroll",Rc);var a=Qt[r+o],l=a||(Qt[r+o]=Oa(Yi(t,n),!0)||(no(t)?i:Oa(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Be.getProperty(t,"scrollBehavior")==="smooth"),l},Ic=function(t,e,n){var i=t,r=t,o=eo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,m){var p=eo();m||p-o>l?(r=i,i=g,a=o,o=p):n?i+=g:i=r+(g-r)/(p-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(g){var m=a,p=r,_=eo();return(g||g===0)&&g!==i&&u(g),o===a||_-a>c?0:(i+(n?p:-p))/((n?_:o)-m)*1e3};return{update:u,reset:h,getVelocity:f}},Us=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},df=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},bp=function(){to=Be.core.globals().ScrollTrigger,to&&to.core&&aM()},Mp=function(t){return Be=t||vp(),Be&&typeof document<"u"&&document.body&&(An=window,Hi=document,Wi=Hi.documentElement,_s=Hi.body,_p=[An,Hi,Wi,_s],Be.utils.clamp,xp=Be.core.context||function(){},ar="onpointerenter"in _s?"pointer":"mouse",gp=Ce.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yn=Ce.eventTypes=("ontouchstart"in Wi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yp=0},500),bp(),Lc=1),Lc};sn.op=Le;Qt.cache=0;var Ce=function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Lc||Mp(Be)||console.warn("Please gsap.registerPlugin(Observer)"),to||bp();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,m=n.event,p=n.onDragStart,_=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,M=n.onRight,E=n.onLeft,A=n.onUp,b=n.onDown,S=n.onChangeX,P=n.onChangeY,B=n.onChange,Y=n.onToggleX,W=n.onToggleY,O=n.onHover,k=n.onHoverEnd,X=n.onMove,N=n.ignoreCheck,R=n.isNormalizer,$=n.onGestureStart,T=n.onGestureEnd,z=n.onWheel,q=n.onEnable,tt=n.onDisable,rt=n.onClick,lt=n.scrollSpeed,K=n.capture,Tt=n.allowClicks,pt=n.lockAxis,Et=n.onLockAxis;this.target=a=ln(a)||Wi,this.vars=n,d&&(d=Be.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,lt=lt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(An.getComputedStyle(_s).lineHeight)||22);var ft,Ot,nt,j,ot,gt,ct,V=this,At=0,Dt=0,ne=Ji(a,sn),zt=Ji(a,Le),L=ne(),w=zt(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Yn[0]==="pointerdown",it=no(a),st=a.ownerDocument||Hi,ht=[0,0,0],Rt=[0,0,0],D=0,H=function(){return D=eo()},dt=function(yt,Xt){return(V.event=yt)&&d&&~d.indexOf(yt.target)||Xt&&J&&yt.pointerType!=="touch"||N&&N(yt,Xt)},mt=function(){V._vx.reset(),V._vy.reset(),Ot.pause(),h&&h(V)},xt=function(){var yt=V.deltaX=df(ht),Xt=V.deltaY=df(Rt),re=Math.abs(yt)>=i,St=Math.abs(Xt)>=i;B&&(re||St)&&B(V,yt,Xt,ht,Rt),re&&(M&&V.deltaX>0&&M(V),E&&V.deltaX<0&&E(V),S&&S(V),Y&&V.deltaX<0!=At<0&&Y(V),At=V.deltaX,ht[0]=ht[1]=ht[2]=0),St&&(b&&V.deltaY>0&&b(V),A&&V.deltaY<0&&A(V),P&&P(V),W&&V.deltaY<0!=Dt<0&&W(V),Dt=V.deltaY,Rt[0]=Rt[1]=Rt[2]=0),(j||nt)&&(X&&X(V),nt&&(y(V),nt=!1),j=!1),gt&&!(gt=!1)&&Et&&Et(V),ot&&(z(V),ot=!1),ft=0},Lt=function(yt,Xt,re){ht[re]+=yt,Rt[re]+=Xt,V._vx.update(yt),V._vy.update(Xt),c?ft||(ft=requestAnimationFrame(xt)):xt()},Pt=function(yt,Xt){pt&&!ct&&(V.axis=ct=Math.abs(yt)>Math.abs(Xt)?"x":"y",gt=!0),ct!=="y"&&(ht[2]+=yt,V._vx.update(yt,!0)),ct!=="x"&&(Rt[2]+=Xt,V._vy.update(Xt,!0)),c?ft||(ft=requestAnimationFrame(xt)):xt()},Ht=function(yt){if(!dt(yt,1)){yt=Us(yt,u);var Xt=yt.clientX,re=yt.clientY,St=Xt-V.x,ie=re-V.y,Ut=V.isDragging;V.x=Xt,V.y=re,(Ut||Math.abs(V.startX-Xt)>=r||Math.abs(V.startY-re)>=r)&&(y&&(nt=!0),Ut||(V.isDragging=!0),Pt(St,ie),Ut||p&&p(V))}},Wt=V.onPress=function(Nt){dt(Nt,1)||Nt&&Nt.button||(V.axis=ct=null,Ot.pause(),V.isPressed=!0,Nt=Us(Nt),At=Dt=0,V.startX=V.x=Nt.clientX,V.startY=V.y=Nt.clientY,V._vx.reset(),V._vy.reset(),Qe(R?a:st,Yn[1],Ht,u,!0),V.deltaX=V.deltaY=0,x&&x(V))},Jt=V.onRelease=function(Nt){if(!dt(Nt,1)){Ke(R?a:st,Yn[1],Ht,!0);var yt=!isNaN(V.y-V.startY),Xt=V.isDragging&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),re=Us(Nt);!Xt&&yt&&(V._vx.reset(),V._vy.reset(),u&&Tt&&Be.delayedCall(.08,function(){if(eo()-D>300&&!Nt.defaultPrevented){if(Nt.target.click)Nt.target.click();else if(st.createEvent){var St=st.createEvent("MouseEvents");St.initMouseEvent("click",!0,!0,An,1,re.screenX,re.screenY,re.clientX,re.clientY,!1,!1,!1,!1,0,null),Nt.target.dispatchEvent(St)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&!R&&Ot.restart(!0),_&&Xt&&_(V),v&&v(V,Xt)}},I=function(yt){return yt.touches&&yt.touches.length>1&&(V.isGesturing=!0)&&$(yt,V.isDragging)},et=function(){return(V.isGesturing=!1)||T(V)},at=function(yt){if(!dt(yt)){var Xt=ne(),re=zt();Lt((Xt-L)*lt,(re-w)*lt,1),L=Xt,w=re,h&&Ot.restart(!0)}},_t=function(yt){if(!dt(yt)){yt=Us(yt,u),z&&(ot=!0);var Xt=(yt.deltaMode===1?l:yt.deltaMode===2?An.innerHeight:1)*g;Lt(yt.deltaX*Xt,yt.deltaY*Xt,0),h&&!R&&Ot.restart(!0)}},wt=function(yt){if(!dt(yt)){var Xt=yt.clientX,re=yt.clientY,St=Xt-V.x,ie=re-V.y;V.x=Xt,V.y=re,j=!0,(St||ie)&&Pt(St,ie)}},Yt=function(yt){V.event=yt,O(V)},he=function(yt){V.event=yt,k(V)},ue=function(yt){return dt(yt)||Us(yt,u)&&rt(V)};Ot=V._dc=Be.delayedCall(f||.25,mt).pause(),V.deltaX=V.deltaY=0,V._vx=Ic(0,50,!0),V._vy=Ic(0,50,!0),V.scrollX=ne,V.scrollY=zt,V.isDragging=V.isGesturing=V.isPressed=!1,xp(this),V.enable=function(Nt){return V.isEnabled||(Qe(it?st:a,"scroll",Rc),o.indexOf("scroll")>=0&&Qe(it?st:a,"scroll",at,u,K),o.indexOf("wheel")>=0&&Qe(a,"wheel",_t,u,K),(o.indexOf("touch")>=0&&gp||o.indexOf("pointer")>=0)&&(Qe(a,Yn[0],Wt,u,K),Qe(st,Yn[2],Jt),Qe(st,Yn[3],Jt),Tt&&Qe(a,"click",H,!1,!0),rt&&Qe(a,"click",ue),$&&Qe(st,"gesturestart",I),T&&Qe(st,"gestureend",et),O&&Qe(a,ar+"enter",Yt),k&&Qe(a,ar+"leave",he),X&&Qe(a,ar+"move",wt)),V.isEnabled=!0,Nt&&Nt.type&&Wt(Nt),q&&q(V)),V},V.disable=function(){V.isEnabled&&(cs.filter(function(Nt){return Nt!==V&&no(Nt.target)}).length||Ke(it?st:a,"scroll",Rc),V.isPressed&&(V._vx.reset(),V._vy.reset(),Ke(R?a:st,Yn[1],Ht,!0)),Ke(it?st:a,"scroll",at,K),Ke(a,"wheel",_t,K),Ke(a,Yn[0],Wt,K),Ke(st,Yn[2],Jt),Ke(st,Yn[3],Jt),Ke(a,"click",H,!0),Ke(a,"click",ue),Ke(st,"gesturestart",I),Ke(st,"gestureend",et),Ke(a,ar+"enter",Yt),Ke(a,ar+"leave",he),Ke(a,ar+"move",wt),V.isEnabled=V.isPressed=V.isDragging=!1,tt&&tt(V))},V.kill=V.revert=function(){V.disable();var Nt=cs.indexOf(V);Nt>=0&&cs.splice(Nt,1),Si===V&&(Si=0)},cs.push(V),R&&no(a)&&(Si=V),V.enable(m)},oM(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Ce.version="3.12.2";Ce.create=function(s){return new Ce(s)};Ce.register=Mp;Ce.getAll=function(){return cs.slice()};Ce.getById=function(s){return cs.filter(function(t){return t.vars.id===s})[0]};vp()&&Be.registerPlugin(Ce);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ct,is,se,me,jn,fe,Sp,Fa,za,us,ga,ea,He,ja,Oc,en,pf,mf,rs,wp,Yl,Tp,Mn,Ep,Ap,Cp,ki,Fc,mu,xs,gu,jl,na=1,rn=Date.now,Zl=rn(),Hn=0,Xs=0,gf=function(t,e,n){var i=wn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},_f=function(t,e){return e&&(!wn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},lM=function s(){return Xs&&requestAnimationFrame(s)},xf=function(){return ja=1},vf=function(){return ja=0},ei=function(t){return t},qs=function(t){return Math.round(t*1e5)/1e5||0},Pp=function(){return typeof window<"u"},Lp=function(){return Ct||Pp()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},Dr=function(t){return!!~Sp.indexOf(t)},Dp=function(t){return(t==="Height"?gu:se["inner"+t])||jn["client"+t]||fe["client"+t]},Rp=function(t){return Yi(t,"getBoundingClientRect")||(Dr(t)?function(){return Ma.width=se.innerWidth,Ma.height=gu,Ma}:function(){return bi(t)})},cM=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Yi(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Dp(r):t["client"+r])||0}},uM=function(t,e){return!e||~li.indexOf(t)?Rp(t):function(){return Ma}},wi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Yi(t,n))?o()-Rp(t)()[r]:Dr(t)?(jn[n]||fe[n])-Dp(i):t[n]-t["offset"+i])},ia=function(t,e){for(var n=0;n<rs.length;n+=3)(!e||~e.indexOf(rs[n+1]))&&t(rs[n],rs[n+1],rs[n+2])},wn=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},_a=function(t){return typeof t=="number"},lr=function(t){return typeof t=="object"},Bs=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Jl=function(t,e){if(t.enabled){var n=e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ts=Math.abs,Ip="left",Op="top",_u="right",xu="bottom",br="width",Mr="height",io="Right",ro="Left",so="Top",oo="Bottom",Ee="padding",zn="margin",Ls="Width",vu="Height",ke="px",Nn=function(t){return se.getComputedStyle(t)},hM=function(t){var e=Nn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},yf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bi=function(t,e){var n=e&&Nn(t)[Oc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},zc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Fp=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},fM=function(t){return function(e){return Ct.utils.snap(Fp(t),e)}},yu=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},dM=function(t){return function(e,n){return yu(Fp(t))(e,n.direction)}},ra=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},Fe=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},Oe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},sa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},bf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},oa={toggleActions:"play",anticipatePin:0},Na={top:0,left:0,center:.5,bottom:1,right:1},xa=function(t,e){if(wn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Na?Na[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},aa=function(t,e,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=me.createElement("div"),m=Dr(n)||Yi(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,_=m?fe:n,y=t.indexOf("start")!==-1,x=y?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&m?"fixed;":"absolute;"),(p||l||!m)&&(v+=(i===Le?_u:xu)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],va(g,0,i,y),g},va=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Ls]=1,r["border"+a+Ls]=0,r[n.p]=e+"px",Ct.set(t,r)},Zt=[],Nc={},So,Mf=function(){return rn()-Hn>34&&(So||(So=requestAnimationFrame(Ei)))},es=function(){(!Mn||!Mn.isPressed||Mn.startX>fe.clientWidth)&&(Qt.cache++,Mn?So||(So=requestAnimationFrame(Ei)):Ei(),Hn||Ir("scrollStart"),Hn=rn())},Kl=function(){Cp=se.innerWidth,Ap=se.innerHeight},$s=function(){Qt.cache++,!He&&!Tp&&!me.fullscreenElement&&!me.webkitFullscreenElement&&(!Ep||Cp!==se.innerWidth||Math.abs(se.innerHeight-Ap)>se.innerHeight*.25)&&Fa.restart(!0)},Rr={},pM=[],zp=function s(){return Oe(ee,"scrollEnd",s)||dr(!0)},Ir=function(t){return Rr[t]&&Rr[t].map(function(e){return e()})||pM},Sn=[],Np=function(t){for(var e=0;e<Sn.length;e+=5)(!t||Sn[e+4]&&Sn[e+4].query===t)&&(Sn[e].style.cssText=Sn[e+1],Sn[e].getBBox&&Sn[e].setAttribute("transform",Sn[e+2]||""),Sn[e+3].uncache=1)},bu=function(t,e){var n;for(en=0;en<Zt.length;en++)n=Zt[en],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));e&&Np(e),e||Ir("revert")},kp=function(t,e){Qt.cache++,(e||!nn)&&Qt.forEach(function(n){return on(n)&&n.cacheID++&&(n.rec=0)}),wn(t)&&(se.history.scrollRestoration=mu=t)},nn,Sr=0,Sf,mM=function(){if(Sf!==Sr){var t=Sf=Sr;requestAnimationFrame(function(){return t===Sr&&dr(!0)})}},Up=function(){fe.appendChild(xs),gu=xs.offsetHeight||se.innerHeight,fe.removeChild(xs)},dr=function(t,e){if(Hn&&!t){Fe(ee,"scrollEnd",zp);return}Up(),nn=ee.isRefreshing=!0,Qt.forEach(function(i){return on(i)&&++i.cacheID&&(i.rec=i())});var n=Ir("refreshInit");wp&&ee.sort(),e||bu(),Qt.forEach(function(i){on(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Zt.slice(0).forEach(function(i){return i.refresh()}),Zt.forEach(function(i,r){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),Zt.forEach(function(i){var r=wi(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qt.forEach(function(i){on(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kp(mu,1),Fa.pause(),Sr++,nn=2,Ei(2),Zt.forEach(function(i){return on(i.vars.onRefresh)&&i.vars.onRefresh(i)}),nn=ee.isRefreshing=!1,Ir("refresh")},kc=0,ya=1,ao,Ei=function(t){if(!nn||t===2){ee.isUpdating=!0,ao&&ao.update(0);var e=Zt.length,n=rn(),i=n-Zl>=50,r=e&&Zt[0].scroll();if(ya=kc>r?-1:1,nn||(kc=r),i&&(Hn&&!ja&&n-Hn>200&&(Hn=0,Ir("scrollEnd")),ga=Zl,Zl=n),ya<0){for(en=e;en-- >0;)Zt[en]&&Zt[en].update(0,i);ya=1}else for(en=0;en<e;en++)Zt[en]&&Zt[en].update(0,i);ee.isUpdating=!1}So=0},Uc=[Ip,Op,xu,_u,zn+oo,zn+io,zn+so,zn+ro,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ba=Uc.concat([br,Mr,"boxSizing","max"+Ls,"max"+vu,"position",zn,Ee,Ee+so,Ee+io,Ee+oo,Ee+ro]),gM=function(t,e,n){vs(n);var i=t._gsap;if(i.spacerIsNative)vs(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Ql=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Uc.length,o=e.style,a=t.style,l;r--;)l=Uc[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[xu]=a[_u]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[br]=zc(t,sn)+ke,o[Mr]=zc(t,Le)+ke,o[Ee]=a[zn]=a[Op]=a[Ip]="0",vs(i),a[br]=a["max"+Ls]=n[br],a[Mr]=a["max"+vu]=n[Mr],a[Ee]=n[Ee],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},_M=/([A-Z])/g,vs=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(_M,"-$1").toLowerCase())}},la=function(t){for(var e=ba.length,n=t.style,i=[],r=0;r<e;r++)i.push(ba[r],n[ba[r]]);return i.t=t,i},xM=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ma={left:0,top:0},wf=function(t,e,n,i,r,o,a,l,c,u,h,f,d,g){on(t)&&(t=t(l)),wn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?xa("0"+t.substr(3),n):0));var m=d?d.time():0,p,_,y;if(d&&d.seek(0),isNaN(t)||(t=+t),_a(t))d&&(t=Ct.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&va(a,n,i,!0);else{on(e)&&(e=e(l));var x=(t||"0").split(" "),v,M,E,A;y=ln(e,l)||fe,v=bi(y)||{},(!v||!v.left&&!v.top)&&Nn(y).display==="none"&&(A=y.style.display,y.style.display="block",v=bi(y),A?y.style.display=A:y.style.removeProperty("display")),M=xa(x[0],v[i.d]),E=xa(x[1]||"0",n),t=v[i.p]-c[i.p]-u+M+r-E,a&&va(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var b=t+n,S=o._isStart;p="scroll"+i.d2,va(o,b,i,S&&b>20||!S&&(h?Math.max(fe[p],jn[p]):o.parentNode[p])<=b+1),h&&(c=bi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ke))}return d&&y&&(p=bi(y),d.seek(f),_=bi(y),d._caScrollDist=p[i.p]-_[i.p],t=t/d._caScrollDist*f),d&&d.seek(m),d?t:Math.round(t)},vM=/(webkit|moz|length|cssText|inset)/i,Tf=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===fe){t._stOrig=r.cssText,a=Nn(t);for(o in a)!+o&&!vM.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},Bp=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},ca=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},Ef=function(t,e){var n=Ji(t,e),i="_scroll"+e.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var m=Bp(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.modifiers=g,g[i]=function(){return m(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Qt.cache++,Ei()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ct.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Fe(t,"wheel",n.wheelHandler),ee.isTouch&&Fe(t,"touchmove",n.wheelHandler),r},ee=function(){function s(e,n){is||s.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Fc(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xs){this.update=this.refresh=this.kill=ei;return}n=yf(wn(n)||_a(n)||n.nodeType?{trigger:n}:n,oa);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,m=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,y=r.onSnapComplete,x=r.once,v=r.snap,M=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,b=r.fastScrollEnd,S=r.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?sn:Le,B=!h&&h!==0,Y=ln(n.scroller||se),W=Ct.core.getCache(Y),O=Dr(Y),k=("pinType"in n?n.pinType:Yi(Y,"pinType")||O&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=B&&n.toggleActions.split(" "),R="markers"in n?n.markers:oa.markers,$=O?0:parseFloat(Nn(Y)["border"+P.p2+Ls])||0,T=this,z=n.onRefreshInit&&function(){return n.onRefreshInit(T)},q=cM(Y,O,P),tt=uM(Y,O),rt=0,lt=0,K=0,Tt=Ji(Y,P),pt,Et,ft,Ot,nt,j,ot,gt,ct,V,At,Dt,ne,zt,L,w,J,it,st,ht,Rt,D,H,dt,mt,xt,Lt,Pt,Ht,Wt,Jt,I,et,at,_t,wt,Yt,he,ue;if(T._startClamp=T._endClamp=!1,T._dir=P,p*=45,T.scroller=Y,T.scroll=A?A.time.bind(A):Tt,Ot=Tt(),T.vars=n,i=i||n.animation,"refreshPriority"in n&&(wp=1,n.refreshPriority===-9999&&(ao=T)),W.tweenScroll=W.tweenScroll||{top:Ef(Y,Le),left:Ef(Y,sn)},T.tweenTo=pt=W.tweenScroll[P.p],T.scrubDuration=function(St){et=_a(St)&&St,et?I?I.duration(St):I=Ct.to(i,{ease:"expo",totalProgress:"+=0",duration:et,paused:!0,onComplete:function(){return _&&_(T)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!T.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),T.animation=i.pause(),i.scrollTrigger=T,T.scrubDuration(h),Wt=0,l||(l=i.vars.id)),v&&((!lr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in fe.style&&Ct.set(O?[fe,jn]:Y,{scrollBehavior:"auto"}),Qt.forEach(function(St){return on(St)&&St.target===(O?me.scrollingElement||jn:Y)&&(St.smooth=!1)}),ft=on(v.snapTo)?v.snapTo:v.snapTo==="labels"?fM(i):v.snapTo==="labelsDirectional"?dM(i):v.directional!==!1?function(St,ie){return yu(v.snapTo)(St,rn()-lt<500?0:ie.direction)}:Ct.utils.snap(v.snapTo),at=v.duration||{min:.1,max:2},at=lr(at)?us(at.min,at.max):us(at,at),_t=Ct.delayedCall(v.delay||et/2||.1,function(){var St=Tt(),ie=rn()-lt<500,Ut=pt.tween;if((ie||Math.abs(T.getVelocity())<10)&&!Ut&&!ja&&rt!==St){var qt=(St-j)/zt,C=i&&!B?i.totalProgress():qt,U=ie?0:(C-Jt)/(rn()-ga)*1e3||0,Z=Ct.utils.clamp(-qt,1-qt,ts(U/2)*U/.185),G=qt+(v.inertia===!1?0:Z),Q=us(0,1,ft(G,T)),bt=Math.round(j+Q*zt),Mt=v,kt=Mt.onStart,It=Mt.onInterrupt,Vt=Mt.onComplete;if(St<=ot&&St>=j&&bt!==St){if(Ut&&!Ut._initted&&Ut.data<=ts(bt-St))return;v.inertia===!1&&(Z=Q-qt),pt(bt,{duration:at(ts(Math.max(ts(G-C),ts(Q-C))*.185/U/.05||0)),ease:v.ease||"power3",data:ts(bt-St),onInterrupt:function(){return _t.restart(!0)&&It&&It(T)},onComplete:function(){T.update(),rt=Tt(),Wt=Jt=i&&!B?i.totalProgress():T.progress,y&&y(T),Vt&&Vt(T)}},St,Z*zt,bt-St-Z*zt),kt&&kt(T,pt.tween)}}else T.isActive&&rt!==St&&_t.restart(!0)}).pause()),l&&(Nc[l]=T),f=T.trigger=ln(f||d!==!0&&d),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(T)),d=d===!0?f:ln(d),wn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===zn||(g=!g&&d.parentNode&&d.parentNode.style&&Nn(d.parentNode).display==="flex"?!1:Ee),T.pin=d,Et=Ct.core.getCache(d),Et.spacer?L=Et.pinState:(E&&(E=ln(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Et.spacerIsNative=!!E,E&&(Et.spacerState=la(E))),Et.spacer=it=E||me.createElement("div"),it.classList.add("pin-spacer"),l&&it.classList.add("pin-spacer-"+l),Et.pinState=L=la(d)),n.force3D!==!1&&Ct.set(d,{force3D:!0}),T.spacer=it=Et.spacer,Ht=Nn(d),dt=Ht[g+P.os2],ht=Ct.getProperty(d),Rt=Ct.quickSetter(d,P.a,ke),Ql(d,it,Ht),J=la(d)),R){Dt=lr(R)?yf(R,bf):bf,V=aa("scroller-start",l,Y,P,Dt,0),At=aa("scroller-end",l,Y,P,Dt,0,V),st=V["offset"+P.op.d2];var Nt=ln(Yi(Y,"content")||Y);gt=this.markerStart=aa("start",l,Nt,P,Dt,st,0,A),ct=this.markerEnd=aa("end",l,Nt,P,Dt,st,0,A),A&&(he=Ct.quickSetter([gt,ct],P.a,ke)),!k&&!(li.length&&Yi(Y,"fixedMarkers")===!0)&&(hM(O?fe:Y),Ct.set([V,At],{force3D:!0}),xt=Ct.quickSetter(V,P.a,ke),Pt=Ct.quickSetter(At,P.a,ke))}if(A){var yt=A.vars.onUpdate,Xt=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){T.update(0,0,1),yt&&yt.apply(A,Xt||[])})}if(T.previous=function(){return Zt[Zt.indexOf(T)-1]},T.next=function(){return Zt[Zt.indexOf(T)+1]},T.revert=function(St,ie){if(!ie)return T.kill(!0);var Ut=St!==!1||!T.enabled,qt=He;Ut!==T.isReverted&&(Ut&&(wt=Math.max(Tt(),T.scroll.rec||0),K=T.progress,Yt=i&&i.progress()),gt&&[gt,ct,V,At].forEach(function(C){return C.style.display=Ut?"none":"block"}),Ut&&(He=T,T.update(Ut)),d&&(!M||!T.isActive)&&(Ut?gM(d,it,L):Ql(d,it,Nn(d),mt)),Ut||T.update(Ut),He=qt,T.isReverted=Ut)},T.refresh=function(St,ie,Ut,qt){if(!((He||!T.enabled)&&!ie)){if(d&&St&&Hn){Fe(s,"scrollEnd",zp);return}!nn&&z&&z(T),He=T,pt.tween&&!Ut&&(pt.tween.kill(),pt.tween=0),I&&I.pause(),m&&i&&i.revert({kill:!1}).invalidate(),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var C=q(),U=tt(),Z=A?A.duration():wi(Y,P),G=zt<=.01,Q=0,bt=qt||0,Mt=lr(Ut)?Ut.end:n.end,kt=n.endTrigger||f,It=lr(Ut)?Ut.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Vt=T.pinnedContainer=n.pinnedContainer&&ln(n.pinnedContainer,T),Gt=f&&Math.max(0,Zt.indexOf(T))||0,Bt=Gt,jt,ae,Ne,Dn,Kt,Ft,an,ve,Qn,Li,Ve,hi,we;for(R&&lr(Ut)&&(hi=Ct.getProperty(V,P.p),we=Ct.getProperty(At,P.p));Bt--;)Ft=Zt[Bt],Ft.end||Ft.refresh(0,1)||(He=T),an=Ft.pin,an&&(an===f||an===d||an===Vt)&&!Ft.isReverted&&(Li||(Li=[]),Li.unshift(Ft),Ft.revert(!0,!0)),Ft!==Zt[Bt]&&(Gt--,Bt--);for(on(It)&&(It=It(T)),It=gf(It,"start",T),j=wf(It,f,C,P,Tt(),gt,V,T,U,$,k,Z,A,T._startClamp&&"_startClamp")||(d?-.001:0),on(Mt)&&(Mt=Mt(T)),wn(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(wn(It)?It.split(" ")[0]:"")+Mt:(Q=xa(Mt.substr(2),C),Mt=wn(It)?It:(A?Ct.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,j):j)+Q,kt=f)),Mt=gf(Mt,"end",T),ot=Math.max(j,wf(Mt||(kt?"100% 0":Z),kt,C,P,Tt()+Q,ct,At,T,U,$,k,Z,A,T._endClamp&&"_endClamp"))||-.001,Q=0,Bt=Gt;Bt--;)Ft=Zt[Bt],an=Ft.pin,an&&Ft.start-Ft._pinPush<=j&&!A&&Ft.end>0&&(jt=Ft.end-(T._startClamp?Math.max(0,Ft.start):Ft.start),(an===f&&Ft.start-Ft._pinPush<j||an===Vt)&&isNaN(It)&&(Q+=jt*(1-Ft.progress)),an===d&&(bt+=jt));if(j+=Q,ot+=Q,T._startClamp&&(T._startClamp+=Q),T._endClamp&&!nn&&(T._endClamp=ot||-.001,ot=Math.min(ot,wi(Y,P))),zt=ot-j||(j-=.01)&&.001,G&&(K=Ct.utils.clamp(0,1,Ct.utils.normalize(j,ot,wt))),T._pinPush=bt,gt&&Q&&(jt={},jt[P.a]="+="+Q,Vt&&(jt[P.p]="-="+Tt()),Ct.set([gt,ct],jt)),d)jt=Nn(d),Dn=P===Le,Ne=Tt(),D=parseFloat(ht(P.a))+bt,!Z&&ot>1&&(Ve=(O?me.scrollingElement||jn:Y).style,Ve={style:Ve,value:Ve["overflow"+P.a.toUpperCase()]},O&&Nn(fe)["overflow"+P.a.toUpperCase()]!=="scroll"&&(Ve.style["overflow"+P.a.toUpperCase()]="scroll")),Ql(d,it,jt),J=la(d),ae=bi(d,!0),ve=k&&Ji(Y,Dn?sn:Le)(),g&&(mt=[g+P.os2,zt+bt+ke],mt.t=it,Bt=g===Ee?zc(d,P)+zt+bt:0,Bt&&mt.push(P.d,Bt+ke),vs(mt),Vt&&Zt.forEach(function(_n){_n.pin===Vt&&_n.vars.pinSpacing!==!1&&(_n._subPinOffset=!0)}),k&&Tt(wt)),k&&(Kt={top:ae.top+(Dn?Ne-j:ve)+ke,left:ae.left+(Dn?ve:Ne-j)+ke,boxSizing:"border-box",position:"fixed"},Kt[br]=Kt["max"+Ls]=Math.ceil(ae.width)+ke,Kt[Mr]=Kt["max"+vu]=Math.ceil(ae.height)+ke,Kt[zn]=Kt[zn+so]=Kt[zn+io]=Kt[zn+oo]=Kt[zn+ro]="0",Kt[Ee]=jt[Ee],Kt[Ee+so]=jt[Ee+so],Kt[Ee+io]=jt[Ee+io],Kt[Ee+oo]=jt[Ee+oo],Kt[Ee+ro]=jt[Ee+ro],w=xM(L,Kt,M),nn&&Tt(0)),i?(Qn=i._initted,Yl(1),i.render(i.duration(),!0,!0),H=ht(P.a)-D+zt+bt,Lt=Math.abs(zt-H)>1,k&&Lt&&w.splice(w.length-2,2),i.render(0,!0,!0),Qn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yl(0)):H=zt,Ve&&(Ve.value?Ve.style["overflow"+P.a.toUpperCase()]=Ve.value:Ve.style.removeProperty("overflow-"+P.a));else if(f&&Tt()&&!A)for(ae=f.parentNode;ae&&ae!==fe;)ae._pinOffset&&(j-=ae._pinOffset,ot-=ae._pinOffset),ae=ae.parentNode;Li&&Li.forEach(function(_n){return _n.revert(!1,!0)}),T.start=j,T.end=ot,Ot=nt=nn?wt:Tt(),!A&&!nn&&(Ot<wt&&Tt(wt),T.scroll.rec=0),T.revert(!1,!0),lt=rn(),_t&&(rt=-1,_t.restart(!0)),He=0,i&&B&&(i._initted||Yt)&&i.progress()!==Yt&&i.progress(Yt||0,!0).render(i.time(),!0,!0),(G||K!==T.progress||A)&&(i&&!B&&i.totalProgress(A&&j<-.001&&!K?Ct.utils.normalize(j,ot,0):K,!0),T.progress=G||(Ot-j)/zt===K?0:K),d&&g&&(it._pinOffset=Math.round(T.progress*H)),I&&I.invalidate(),isNaN(hi)||(hi-=Ct.getProperty(V,P.p),we-=Ct.getProperty(At,P.p),ca(V,P,hi),ca(gt,P,hi-(qt||0)),ca(At,P,we),ca(ct,P,we-(qt||0))),G&&!nn&&T.update(),u&&!nn&&!ne&&(ne=!0,u(T),ne=!1)}},T.getVelocity=function(){return(Tt()-nt)/(rn()-ga)*1e3||0},T.endAnimation=function(){Bs(T.callbackAnimation),i&&(I?I.progress(1):i.paused()?B||Bs(i,T.direction<0,1):Bs(i,i.reversed()))},T.labelToScroll=function(St){return i&&i.labels&&(j||T.refresh()||j)+i.labels[St]/i.duration()*zt||0},T.getTrailing=function(St){var ie=Zt.indexOf(T),Ut=T.direction>0?Zt.slice(0,ie).reverse():Zt.slice(ie+1);return(wn(St)?Ut.filter(function(qt){return qt.vars.preventOverlaps===St}):Ut).filter(function(qt){return T.direction>0?qt.end<=j:qt.start>=ot})},T.update=function(St,ie,Ut){if(!(A&&!Ut&&!St)){var qt=nn===!0?wt:T.scroll(),C=St?0:(qt-j)/zt,U=C<0?0:C>1?1:C||0,Z=T.progress,G,Q,bt,Mt,kt,It,Vt,Gt;if(ie&&(nt=Ot,Ot=A?Tt():qt,v&&(Jt=Wt,Wt=i&&!B?i.totalProgress():U)),p&&!U&&d&&!He&&!na&&Hn&&j<qt+(qt-nt)/(rn()-ga)*p&&(U=1e-4),U!==Z&&T.enabled){if(G=T.isActive=!!U&&U<1,Q=!!Z&&Z<1,It=G!==Q,kt=It||!!U!=!!Z,T.direction=U>Z?1:-1,T.progress=U,kt&&!He&&(bt=U&&!Z?0:U===1?1:Z===1?2:3,B&&(Mt=!It&&N[bt+1]!=="none"&&N[bt+1]||N[bt],Gt=i&&(Mt==="complete"||Mt==="reset"||Mt in i))),S&&(It||Gt)&&(Gt||h||!i)&&(on(S)?S(T):T.getTrailing(S).forEach(function(Ne){return Ne.endAnimation()})),B||(I&&!He&&!na?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",U,i._tTime/i._tDur):(I.vars.totalProgress=U,I.invalidate().restart())):i&&i.totalProgress(U,!!(He&&(lt||St)))),d){if(St&&g&&(it.style[g+P.os2]=dt),!k)Rt(qs(D+H*U));else if(kt){if(Vt=!St&&U>Z&&ot+1>qt&&qt+1>=wi(Y,P),M)if(!St&&(G||Vt)){var Bt=bi(d,!0),jt=qt-j;Tf(d,fe,Bt.top+(P===Le?jt:0)+ke,Bt.left+(P===Le?0:jt)+ke)}else Tf(d,it);vs(G||Vt?w:J),Lt&&U<1&&G||Rt(D+(U===1&&!Vt?H:0))}}v&&!pt.tween&&!He&&!na&&_t.restart(!0),a&&(It||x&&U&&(U<1||!jl))&&za(a.targets).forEach(function(Ne){return Ne.classList[G||x?"add":"remove"](a.className)}),o&&!B&&!St&&o(T),kt&&!He?(B&&(Gt&&(Mt==="complete"?i.pause().totalProgress(1):Mt==="reset"?i.restart(!0).pause():Mt==="restart"?i.restart(!0):i[Mt]()),o&&o(T)),(It||!jl)&&(c&&It&&Jl(T,c),X[bt]&&Jl(T,X[bt]),x&&(U===1?T.kill(!1,1):X[bt]=0),It||(bt=U===1?1:3,X[bt]&&Jl(T,X[bt]))),b&&!G&&Math.abs(T.getVelocity())>(_a(b)?b:2500)&&(Bs(T.callbackAnimation),I?I.progress(1):Bs(i,Mt==="reverse"?1:!U,1))):B&&o&&!He&&o(T)}if(Pt){var ae=A?qt/A.duration()*(A._caScrollDist||0):qt;xt(ae+(V._isFlipped?1:0)),Pt(ae)}he&&he(-qt/A.duration()*(A._caScrollDist||0))}},T.enable=function(St,ie){T.enabled||(T.enabled=!0,Fe(Y,"resize",$s),O||Fe(Y,"scroll",es),z&&Fe(s,"refreshInit",z),St!==!1&&(T.progress=K=0,Ot=nt=rt=Tt()),ie!==!1&&T.refresh())},T.getTween=function(St){return St&&pt?pt.tween:I},T.setPositions=function(St,ie,Ut,qt){if(A){var C=A.scrollTrigger,U=A.duration(),Z=C.end-C.start;St=C.start+Z*St/U,ie=C.start+Z*ie/U}T.refresh(!1,!1,{start:_f(St,Ut&&!!T._startClamp),end:_f(ie,Ut&&!!T._endClamp)},qt),T.update()},T.adjustPinSpacing=function(St){if(mt&&St){var ie=mt.indexOf(P.d)+1;mt[ie]=parseFloat(mt[ie])+St+ke,mt[1]=parseFloat(mt[1])+St+ke,vs(mt)}},T.disable=function(St,ie){if(T.enabled&&(St!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,ie||I&&I.pause(),wt=0,Et&&(Et.uncache=1),z&&Oe(s,"refreshInit",z),_t&&(_t.pause(),pt.tween&&pt.tween.kill()&&(pt.tween=0)),!O)){for(var Ut=Zt.length;Ut--;)if(Zt[Ut].scroller===Y&&Zt[Ut]!==T)return;Oe(Y,"resize",$s),O||Oe(Y,"scroll",es)}},T.kill=function(St,ie){T.disable(St,ie),I&&!ie&&I.kill(),l&&delete Nc[l];var Ut=Zt.indexOf(T);Ut>=0&&Zt.splice(Ut,1),Ut===en&&ya>0&&en--,Ut=0,Zt.forEach(function(qt){return qt.scroller===T.scroller&&(Ut=1)}),Ut||nn||(T.scroll.rec=0),i&&(i.scrollTrigger=null,St&&i.revert({kill:!1}),ie||i.kill()),gt&&[gt,ct,V,At].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),ao===T&&(ao=0),d&&(Et&&(Et.uncache=1),Ut=0,Zt.forEach(function(qt){return qt.pin===d&&Ut++}),Ut||(Et.spacer=0)),n.onKill&&n.onKill(T)},Zt.push(T),T.enable(!1,!1),ue&&ue(T),i&&i.add&&!zt){var re=T.update;T.update=function(){T.update=re,j||ot||T.refresh()},Ct.delayedCall(.01,T.update),zt=.01,j=ot=0}else T.refresh();d&&mM()},s.register=function(n){return is||(Ct=n||Lp(),Pp()&&window.document&&s.enable(),is=Xs),is},s.defaults=function(n){if(n)for(var i in n)oa[i]=n[i];return oa},s.disable=function(n,i){Xs=0,Zt.forEach(function(o){return o[i?"kill":"disable"](n)}),Oe(se,"wheel",es),Oe(me,"scroll",es),clearInterval(ea),Oe(me,"touchcancel",ei),Oe(fe,"touchstart",ei),ra(Oe,me,"pointerdown,touchstart,mousedown",xf),ra(Oe,me,"pointerup,touchend,mouseup",vf),Fa.kill(),ia(Oe);for(var r=0;r<Qt.length;r+=3)sa(Oe,Qt[r],Qt[r+1]),sa(Oe,Qt[r],Qt[r+2])},s.enable=function(){if(se=window,me=document,jn=me.documentElement,fe=me.body,Ct&&(za=Ct.utils.toArray,us=Ct.utils.clamp,Fc=Ct.core.context||ei,Yl=Ct.core.suppressOverwrites||ei,mu=se.history.scrollRestoration||"auto",kc=se.pageYOffset,Ct.core.globals("ScrollTrigger",s),fe)){Xs=1,xs=document.createElement("div"),xs.style.height="100vh",xs.style.position="absolute",Up(),lM(),Ce.register(Ct),s.isTouch=Ce.isTouch,ki=Ce.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fe(se,"wheel",es),Sp=[se,me,jn,fe],Ct.matchMedia?(s.matchMedia=function(l){var c=Ct.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ct.addEventListener("matchMediaInit",function(){return bu()}),Ct.addEventListener("matchMediaRevert",function(){return Np()}),Ct.addEventListener("matchMedia",function(){dr(0,1),Ir("matchMedia")}),Ct.matchMedia("(orientation: portrait)",function(){return Kl(),Kl})):console.warn("Requires GSAP 3.11.0 or later"),Kl(),Fe(me,"scroll",es);var n=fe.style,i=n.borderTopStyle,r=Ct.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=bi(fe),Le.m=Math.round(o.top+Le.sc())||0,sn.m=Math.round(o.left+sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ea=setInterval(Mf,250),Ct.delayedCall(.5,function(){return na=0}),Fe(me,"touchcancel",ei),Fe(fe,"touchstart",ei),ra(Fe,me,"pointerdown,touchstart,mousedown",xf),ra(Fe,me,"pointerup,touchend,mouseup",vf),Oc=Ct.utils.checkPrefix("transform"),ba.push(Oc),is=rn(),Fa=Ct.delayedCall(.2,dr).pause(),rs=[me,"visibilitychange",function(){var l=se.innerWidth,c=se.innerHeight;me.hidden?(pf=l,mf=c):(pf!==l||mf!==c)&&$s()},me,"DOMContentLoaded",dr,se,"load",dr,se,"resize",$s],ia(Fe),Zt.forEach(function(l){return l.enable(0,1)}),a=0;a<Qt.length;a+=3)sa(Oe,Qt[a],Qt[a+1]),sa(Oe,Qt[a],Qt[a+2])}},s.config=function(n){"limitCallbacks"in n&&(jl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ea)||(ea=i)&&setInterval(Mf,i),"ignoreMobileResize"in n&&(Ep=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ia(Oe)||ia(Fe,n.autoRefreshEvents||"none"),Tp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=ln(n),o=Qt.indexOf(r),a=Dr(r);~o&&Qt.splice(o,a?6:2),i&&(a?li.unshift(se,i,fe,i,jn,i):li.unshift(r,i))},s.clearMatchMedia=function(n){Zt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(wn(n)?ln(n):n).getBoundingClientRect(),a=o[r?br:Mr]*i||0;return r?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},s.positionInViewport=function(n,i,r){wn(n)&&(n=ln(n));var o=n.getBoundingClientRect(),a=o[r?br:Mr],l=i==null?a/2:i in Na?Na[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},s.killAll=function(n){if(Zt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Rr.killAll||[];Rr={},i.forEach(function(r){return r()})}},s}();ee.version="3.12.2";ee.saveStyles=function(s){return s?za(s).forEach(function(t){if(t&&t.style){var e=Sn.indexOf(t);e>=0&&Sn.splice(e,5),Sn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),Fc())}}):Sn};ee.revert=function(s,t){return bu(!s,t)};ee.create=function(s,t){return new ee(s,t)};ee.refresh=function(s){return s?$s():(is||ee.register())&&dr(!0)};ee.update=function(s){return++Qt.cache&&Ei(s===!0?2:0)};ee.clearScrollMemory=kp;ee.maxScroll=function(s,t){return wi(s,t?sn:Le)};ee.getScrollFunc=function(s,t){return Ji(ln(s),t?sn:Le)};ee.getById=function(s){return Nc[s]};ee.getAll=function(){return Zt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ee.isScrolling=function(){return!!Hn};ee.snapDirectional=yu;ee.addEventListener=function(s,t){var e=Rr[s]||(Rr[s]=[]);~e.indexOf(t)||e.push(t)};ee.removeEventListener=function(s,t){var e=Rr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ee.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ct.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&on(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return on(r)&&(r=r(),Fe(ee,"refresh",function(){return r=t.batchMax()})),za(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ee.create(c))}),e};var Af=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},tc=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ce.isTouch?" pinch-zoom":""):"none",t===jn&&s(fe,e)},ua={auto:1,scroll:1},yM=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ct.core.getCache(r),a=rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==fe&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ua[(l=Nn(r)).overflowY]||ua[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Dr(r)&&(ua[(l=Nn(r)).overflowY]||ua[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Vp=function(t,e,n,i){return Ce.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&yM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Fe(me,Ce.eventTypes[0],Pf,!1,!0)},onDisable:function(){return Oe(me,Ce.eventTypes[0],Pf,!0)}})},bM=/(input|label|select|textarea)/i,Cf,Pf=function(t){var e=bM.test(t.target.tagName);(e||Cf)&&(t._gsapAllow=!0,Cf=e)},MM=function(t){lr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=ln(t.target)||jn,u=Ct.core.globals().ScrollSmoother,h=u&&u.get(),f=ki&&(t.content&&ln(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Ji(c,Le),g=Ji(c,sn),m=1,p=(Ce.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,_=0,y=on(i)?function(){return i(a)}:function(){return i||2.8},x,v,M=Vp(c,t.type,!0,r),E=function(){return v=!1},A=ei,b=ei,S=function(){l=wi(c,Le),b=us(ki?1:0,l),n&&(A=us(0,wi(c,sn))),x=Sr},P=function(){f._gsap.y=qs(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},B=function(){if(v){requestAnimationFrame(E);var R=qs(a.deltaY/2),$=b(d.v-R);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var T=qs((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",f._gsap.y=T+"px",d.cacheID=Qt.cache,Ei()}return!0}d.offset&&P(),v=!0},Y,W,O,k,X=function(){S(),Y.isActive()&&Y.vars.scrollY>l&&(d()>l?Y.progress(1)&&d(l):Y.resetTo("scrollY",l))};return f&&Ct.set(f,{y:"+=0"}),t.ignoreCheck=function(N){return ki&&N.type==="touchmove"&&B()||m>1.05&&N.type!=="touchstart"||a.isGesturing||N.touches&&N.touches.length>1},t.onPress=function(){v=!1;var N=m;m=qs((se.visualViewport&&se.visualViewport.scale||1)/p),Y.pause(),N!==m&&tc(c,m>1.01?!0:n?!1:"x"),W=g(),O=d(),S(),x=Sr},t.onRelease=t.onGestureStart=function(N,R){if(d.offset&&P(),!R)k.restart(!0);else{Qt.cache++;var $=y(),T,z;n&&(T=g(),z=T+$*.05*-N.velocityX/.227,$*=Af(g,T,z,wi(c,sn)),Y.vars.scrollX=A(z)),T=d(),z=T+$*.05*-N.velocityY/.227,$*=Af(d,T,z,wi(c,Le)),Y.vars.scrollY=b(z),Y.invalidate().duration($).play(.01),(ki&&Y.vars.scrollY>=l||T>=l-1)&&Ct.to({},{onUpdate:X,duration:$})}o&&o(N)},t.onWheel=function(){Y._ts&&Y.pause(),rn()-_>1e3&&(x=0,_=rn())},t.onChange=function(N,R,$,T,z){if(Sr!==x&&S(),R&&n&&g(A(T[2]===R?W+(N.startX-N.x):g()+R-T[1])),$){d.offset&&P();var q=z[2]===$,tt=q?O+N.startY-N.y:d()+$-z[1],rt=b(tt);q&&tt!==rt&&(O+=rt-tt),d(rt)}($||R)&&Ei()},t.onEnable=function(){tc(c,n?!1:"x"),ee.addEventListener("refresh",X),Fe(se,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},t.onDisable=function(){tc(c,!0),Oe(se,"resize",X),ee.removeEventListener("refresh",X),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ce(t),a.iOS=ki,ki&&!d()&&d(1),ki&&Ct.ticker.add(ei),k=a._dc,Y=Ct.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bp(d,d(),function(){return Y.pause()})},onUpdate:Ei,onComplete:k.vars.onComplete}),a};ee.sort=function(s){return Zt.sort(s||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};ee.observe=function(s){return new Ce(s)};ee.normalizeScroll=function(s){if(typeof s>"u")return Mn;if(s===!0&&Mn)return Mn.enable();if(s===!1)return Mn&&Mn.kill();var t=s instanceof Ce?s:MM(s);return Mn&&Mn.target===t.target&&Mn.kill(),Dr(t.target)&&(Mn=t),t};ee.core={_getVelocityProp:Ic,_inputObserver:Vp,_scrollers:Qt,_proxies:li,bridge:{ss:function(){Hn||Ir("scrollStart"),Hn=rn()},ref:function(){return He}}};Lp()&&Ct.registerPlugin(ee);function SM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gp={exports:{}};(function(s){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function r(l,c,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new i(u,h||l,f),g=e?e+c:c;return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g],d]:l._events[g].push(d):(l._events[g]=d,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new n:delete l._events[c]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)t.call(u,h)&&c.push(e?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=e?e+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,g=new Array(d);f<d;f++)g[f]=h[f].fn;return g},a.prototype.listenerCount=function(c){var u=e?e+c:c,h=this._events[u];return h?h.fn?1:h.length:0},a.prototype.emit=function(c,u,h,f,d,g){var m=e?e+c:c;if(!this._events[m])return!1;var p=this._events[m],_=arguments.length,y,x;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),_){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,h),!0;case 4:return p.fn.call(p.context,u,h,f),!0;case 5:return p.fn.call(p.context,u,h,f,d),!0;case 6:return p.fn.call(p.context,u,h,f,d,g),!0}for(x=1,y=new Array(_-1);x<_;x++)y[x-1]=arguments[x];p.fn.apply(p.context,y)}else{var v=p.length,M;for(x=0;x<v;x++)switch(p[x].once&&this.removeListener(c,p[x].fn,void 0,!0),_){case 1:p[x].fn.call(p[x].context);break;case 2:p[x].fn.call(p[x].context,u);break;case 3:p[x].fn.call(p[x].context,u,h);break;case 4:p[x].fn.call(p[x].context,u,h,f);break;default:if(!y)for(M=1,y=new Array(_-1);M<_;M++)y[M-1]=arguments[M];p[x].fn.apply(p[x].context,y)}}return!0},a.prototype.on=function(c,u,h){return r(this,c,u,h,!1)},a.prototype.once=function(c,u,h){return r(this,c,u,h,!0)},a.prototype.removeListener=function(c,u,h,f){var d=e?e+c:c;if(!this._events[d])return this;if(!u)return o(this,d),this;var g=this._events[d];if(g.fn)g.fn===u&&(!f||g.once)&&(!h||g.context===h)&&o(this,d);else{for(var m=0,p=[],_=g.length;m<_;m++)(g[m].fn!==u||f&&!g[m].once||h&&g[m].context!==h)&&p.push(g[m]);p.length?this._events[d]=p.length===1?p[0]:p:o(this,d)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=e?e+c:c,this._events[u]&&o(this,u)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,s.exports=a})(Gp);var wM=Gp.exports;const TM=SM(wM);class EM{constructor(){Su(this,"eventEmitter",new TM)}clearCarrerDescription(t){this.eventEmitter.emit("clearCarrerDescription",t)}onClearCarrerDescription(t){this.eventEmitter.on("clearCarrerDescription",t)}clearProDescription(){this.eventEmitter.emit("clearProDescription")}onClearProDescription(t){this.eventEmitter.on("clearProDescription",t)}initProject(){this.eventEmitter.emit("initProject")}onInitProject(t){this.eventEmitter.on("initProject",t)}destroyProject(){this.eventEmitter.emit("destroyProject")}onDestroyProject(t){this.eventEmitter.on("destroyProject",t)}initCarrer(){this.eventEmitter.emit("initCarrer")}onInitCarrer(t){this.eventEmitter.on("initCarrer",t)}destroyCarrer(){this.eventEmitter.emit("destroyCarrer")}onDestroyCarrer(t){this.eventEmitter.on("destroyCarrer",t)}initToy(){this.eventEmitter.emit("initToy")}onInitToy(t){this.eventEmitter.on("initToy",t)}destroyToy(){this.eventEmitter.emit("destroyToy")}onDestroyToy(t){this.eventEmitter.on("destroyToy",t)}initAbout(){this.eventEmitter.emit("initAbout")}onInitAbout(t){this.eventEmitter.on("initAbout",t)}destroyAbout(){this.eventEmitter.emit("destroyAbout")}onDestroyAbout(t){this.eventEmitter.on("destroyAbout",t)}}const Za=new EM,Hp=(s,t,e)=>{console.log(s);const n=a=>{const l=a[0].slice(0,4),c=a[0].slice(4,6),u=a[1].slice(0,4),h=a[1].slice(4,6);return`${l}.${c} ~ ${u}.${h}`},i=Za;document.querySelector("#description").removeAttribute("class","disable"),e==="carrer"?document.querySelector("#description").setAttribute("class","description"):document.querySelector("#description").setAttribute("class","description2"),document.querySelector(".description-title #title").textContent=s.title,s.subtitle&&(document.querySelector(".description-title #subtitle").textContent=s.subtitle),document.querySelector(".description-title-wrapper #description").textContent=s.detail.join(`\r
 `),document.querySelector(".description-column #date").textContent=n(s.date),document.querySelector(".description-column #tech").textContent=`${s.Languege.join(", ")} ${s.UIFrameWork?s.UIFrameWork.join(", "):" "} `,document.querySelector(".description-column #pitch").textContent=s.pitch.join(`\r
 `),document.querySelector(".description-column #company").textContent=s.company.join(", "),document.querySelector(".description-column #role").textContent=s.role.join(`\r
 `);const r=a=>{a&&(e==="carrer"?(document.querySelector("#description").removeAttribute("class","description"),document.querySelector("#description").setAttribute("class","description-end")):(document.querySelector("#description").removeAttribute("class","description2"),document.querySelector("#description").setAttribute("class","description-end2")),setTimeout(()=>{o(a)},1*1e3))};document.querySelector(".description-button").addEventListener("click",a=>r(a));const o=a=>{a&&(e==="carrer"?document.querySelector("#description").removeAttribute("class","description-end"):document.querySelector("#description").removeAttribute("class","description-end2"),document.querySelector("#description").setAttribute("class","disable"),e==="carrer"?i.clearCarrerDescription(t):i.clearProDescription())}};async function AM(){const s=Za,t=document.querySelector("#scroll");Xe.registerPlugin(ee);const e=document.querySelector("#canvas"),n=60,i=3,r=new Xc({antialias:!0,alpha:!0,canvas:e});r.setClearColor(3355443,1),r.shadowMap.enabled=!0;const o={width:window.innerWidth,height:window.innerHeight},a=new ud,l=new od,c=new mp;l.setPath("../../assets/projects/");const u=new Kf,h=new un(90,o.width/o.height,.1,100);h.position.set(-.073,-.017,3.689);const f=new fd(h,r.domElement);f.enableDamping=!0,f.maxAzimuthAngle=Math.PI/2,f.maxPolarAngle=Math.PI,f.enableZoom=!1,f.enablePan=!1,f.dampingFactor=.1,f.saveState();const d=new hd,g=new ut,m=new pp({about:"carrer"}),p=await c.loadAsync("../../assets/fonts/Gugi_Regular.json");let _=[],y=[];const x=Xe.timeline({id:"click",smoothChildTiming:!0,autoRemoveChildren:!0});let v="";const M=N=>{const R=new Mi;let $=[];for(let z=n;z<=360;z+=n){let q=new Wb({cubeR:.22,skeleR:.4,texture:l.load(m.data[z/60-1].img),index:z,planetRadius:i,font:p,data:m});R.name="renderPlanet",R.add(q.planet),$.push(q)}R.rotation.set(4.733,2.702,.49),u.add(R);const T=new cd(16777215,1);return T.castShadow=!0,u.add(T),y=$.flatMap((z,q)=>{const tt=document.createElement("div");return tt.className="scroll-planet",tt.id=`planet-${q}`,t.appendChild(tt),z.planet.position}),{plantArry:$}},E=()=>{o.width=window.innerWidth,o.height=window.innerHeight,h.aspect=o.width/o.height,h.updateProjectionMatrix(),r.setSize(o.width,o.height),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})};function A(N,R){g.x=(N.clientX/window.innerWidth-.5)*2,g.y=-(N.clientY/window.innerHeight-.5)*2,d.setFromCamera(g,h);const $=d.intersectObjects(u.children);if($.length>0){const T=$[0].object;if(T.parent.name==="planet"){if(R.filter(tt=>tt.planet.id===T.parent.id)[0].animation("big"),_.filter(tt=>tt.parent.id===T.parent.id).length>0)return;_.push(T)}}else _.length>0&&(_=[],R.forEach(T=>{T.isClick||T.animation("small")}))}function b(N,R){const $=d.intersectObjects(u.children);if($.length>0){const T=$[0].object;if(console.log("object",T),T.parent.name==="planet"){f.reset();let z=T.userData.index-3;z<0&&(z=z+R.length),console.log("isClick",z);const q=R.filter(tt=>tt.planet.id===T.parent.id);if(q[0].isClick)return;R.forEach(tt=>{tt.animation("small"),tt.isClick=!1}),q[0].isClick=!0,document.querySelector(`#${t.children[z].id}`).scrollIntoView({behavior:"smooth"}),q[0].animation("big"),document.querySelector("#warning-click").setAttribute("class","show")}}else P(R)}const S=N=>{for(let R=0;R<t.children.length;R++){const $=Xe.timeline({id:`#${t.children[R].id}`,scrollTrigger:{trigger:`#${t.children[R].id}`,start:"top top",end:"bottom top",ariaLabel:`#${t.children[R].id}`,scrub:!0}}),T=(R+1)%t.children.length;if(R===t.children.length-1)return;y.forEach((z,q)=>{let tt=(q+T)%N.length;tt===y.length&&(tt=0),$.to(N[tt].planet.position,{x:z.x,y:z.y,z:z.z,duration:3,onStart:()=>{f.reset()}},"<")})}},P=N=>{document.querySelector("#warning-click").removeAttribute("class","show"),N.forEach(R=>{R.animation("small"),R.isClick=!1})};function B(N){const R=d.intersectObjects(u.children);if(R.length>0&&!x.isActive()){const $=R[0].object;if($.parent.name==="planet"){let T=$.userData.index-3;T<0&&(T=T+N.length),Xe.to(f.object.position,{x:.13,z:3.2,duration:2,onComplete:()=>{Y($.userData.index,T)}})}}}const Y=(N,R)=>{document.querySelector("#warning-click").removeAttribute("class","show"),document.querySelector("header").setAttribute("class","disable"),Hp(m.data[N],R,"carrer"),document.querySelector("#scroll").setAttribute("class","disable"),cancelAnimationFrame(v)},W=N=>{const{plantArry:R}=N;window.addEventListener("resize",E),S(R),e.addEventListener("pointermove",T=>A(T,R)),s.onClearCarrerDescription(T=>{document.querySelector("#warning-click").setAttribute("class","show"),document.querySelector("#scroll").removeAttribute("class","disable"),document.querySelector("header").removeAttribute("class","disable"),O(R,T)}),e.addEventListener("pointerdown",T=>b(T,R)),e.addEventListener("dblclick",()=>B(R)),document.querySelector("#home").addEventListener("click",T=>{P(R),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})})},O=(N,R)=>{Xe.to(f.object.position,{x:f.position0.x,y:f.position0.y,z:f.position0.z,duration:2,onStart:()=>{document.querySelector(`#planet-${R}`).scrollIntoView()}}),k({plantArry:N})},k=N=>{const{plantArry:R}=N;R.forEach($=>$.update(a.getElapsedTime())),f.update(),r.render(u,h),v=requestAnimationFrame(()=>{k(N)})},X=async()=>{new dp().hide();const R=M();W(R),E(),k(R)};s.onDestroyCarrer(()=>{cancelAnimationFrame(v),r.dispose(),f.dispose(),document.querySelector("#home").removeEventListener("click",R=>{P(plantArry),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})})}),await X()}class CM{constructor({index:t,font:e,data:n}){this.index=t/90-1,this.radian=t*(Math.PI/180),this.font=e,this.data=n,this.isClick=!1;const i=()=>{const l=new Zs,c=-2.5,u=-5;l.moveTo(c+2.5,u+2.5),l.bezierCurveTo(c+2.5,u+2.5,c+2,u,c,u),l.bezierCurveTo(c-3,u,c-3,u+3.5,c-3,u+3.5),l.bezierCurveTo(c-3,u+5.5,c-1.5,u+7.7,c+2.5,u+9.5),l.bezierCurveTo(c+6,u+7.7,c+8,u+4.5,c+8,u+3.5),l.bezierCurveTo(c+8,u+3.5,c+8,u,c+5,u),l.bezierCurveTo(c+3.5,u,c+2.5,u+2.5,c+2.5,u+2.5);const h={steps:1,depth:3,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:1},f=new Wa(l,h),d=new yy({color:13408767,reflectivity:.2,fog:!0});this.material=d;const g=new $e(f,d);return g.name="heart",g.userData={index:this.index},g},r=l=>{const c=new fp(l,{font:e,size:.5,height:.1,bevelEnabled:!0,bevelSegments:5,bevelSize:.01,bevelThickness:.02});c.computeBoundingBox(),c.center();const u=new fc({color:13434743,fog:!0,reflectivity:.4});return new $e(c,u)};this.heart=i(),this.heart.scale.set(3,3,3),this.numberText=r((this.index+1).toString()),this.titleText=r(this.data.data[this.index].title),this.numberText.scale.set(0,0,0),this.titleText.scale.set(0,0,0),this.numberText.rotation.set(.89,0,0),this.numberText.visible=!1,this.titleText.visible=!1,this.planet=new Mi,this.planet.name="planet",this.planet.userData={dataIndex:this.index},this.planet.add(this.heart),this.planet.position.set(-8*3*Math.cos(this.radian),-8*3*Math.sin(this.radian),0),this.heart.rotation.set(0,0,Math.PI/2*this.index);const o=Xe.timeline({id:`${this.index}`,repeatDelay:.001});this.heartScaler=o;const a=Xe.timeline({id:`${this.index}`,smoothChildTiming:!0});this.hover=a}heartAnime(t){this.heartScaler.isActive()&&this.heartScaler.clear(!0),t==="hover"?this.heartScaler.to(this.heart.scale,{x:2.5,y:2.5,z:2.5,duration:.2,onStart:()=>{this.heart.material.color=new te(16737945),this.heart.material.needsUpdate=!0,this.heartScaler.repeat(1/0)}}).to(this.heart.scale,{x:3.2,y:3.2,z:3.2,duration:.2}).to(this.heart.scale,{x:2.8,y:2.8,z:2.8,duration:.2}).to(this.heart.scale,{x:3,y:3,z:3,duration:.2}):this.heartScaler.to(this.heart.scale,{x:3,y:3,z:3,duration:.3,onStart:()=>{this.heart.material.color=new te(13408767),this.heart.material.needsUpdate=!0},onComplete:()=>{this.heartScaler.clear(!0),this.heartScaler.repeat(0)}})}animation(t){this.hover.isActive()&&this.hover.clear(!0),t==="big"?this.hover.to(this.numberText.scale,{x:70,y:70,z:70,duration:.3},"<").to(this.numberText.position,{z:8,duration:.3},"<").to(this.titleText.scale,{x:22,y:22,z:22,duration:.3},"<").to(this.titleText.position,{z:1,duration:.3,onStart:()=>{this.heart.material.color=new te(16737945),this.heart.material.needsUpdate=!0,this.numberText.visible=!0,this.titleText.visible=!0},onComplete:()=>{this.hover.clear(!0)}},"<"):this.hover.to(this.numberText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.numberText.position,{z:-5,duration:.3},"<").to(this.titleText.scale,{x:0,y:0,z:0,duration:.3},"<").to(this.titleText.position,{z:-5,duration:.3,onStart:()=>{this.heart.material.color=new te(13408767),this.heart.material.needsUpdate=!0},onComplete:()=>{this.numberText.visible=!1,this.titleText.visible=!1,this.hover.clear(!0)}},"<")}update(t){this.heart.position.y=Math.sin(t*3),this.heart.position.x=Math.cos(t*2)}}class PM{constructor({params:t}){const e=()=>{const o=new gr(1e3,1e3,150,150),a=new Uh({color:t.waveColor,transparent:!0});return new $e(o,a)},n=()=>{const o=new gr(1200,900,150,150),a=new Uh({transparent:!1,map:t.texture});return new $e(o,a)};this.waveGeometry=new gr(1500,1500,150,150),this.wave=e(),this.image=n(),this.wave.receiveShadow=!0,this.wave.rotation.x=-Math.PI/3,this.image.rotation.x=-Math.PI/3,this.image.position.set(0,3,-39),this.waveHeight=2.5;const i=[];for(let o=0;o<this.waveGeometry.attributes.position.count;o++){const a=this.waveGeometry.attributes.position.getZ(o)+(Math.random()-.5)*this.waveHeight;this.waveGeometry.attributes.position.setZ(o,a),i.push(a)}this.wave.geometry=this.waveGeometry,this.initPositionZ=i;const r=Xe.timeline({id:`${this.wave.id}`});this.hover=r}update(t){const e=t.getElapsedTime();for(let n=0;n<this.waveGeometry.attributes.position.count;n++){const i=this.initPositionZ[n]+Math.sin(e*3+n**2)*this.waveHeight;this.waveGeometry.attributes.position.setZ(n,i)}this.waveGeometry.attributes.position.needsUpdate=!0}animation(t,e){this.hover.isActive()&&this.hover.clear(!0),t==="hover"?this.hover.to(this.wave.material,{opacity:.5,duration:.8,onStart:()=>{this.image.material.map=e.texture},onComplete:()=>{this.hover.clear(!0)}},"<"):this.hover.to(this.wave.material,{opacity:1,duration:.8,onComplete:()=>{this.hover.clear(!0)}})}}async function LM(){const s=Za;document.querySelector("#scroll"),Xe.registerPlugin(ee);const t=document.querySelector("#canvas"),e=new dp,n=new Xc({antialias:!0,alpha:!0,canvas:t});n.setClearColor(16777215,1),n.shadowMap.enabled=!0;const i={width:window.innerWidth,height:window.innerHeight},r=new ud,o=new od,a=new mp;o.setPath("../../assets/projects/");const l=new Kf;l.fog=new qc(15790320,.1,500);const c=new un(75,i.width/i.height,1,500);c.position.set(0,33,97);const u=new fd(c,n.domElement);u.enableDamping=!0,u.maxAzimuthAngle=Math.PI/2,u.maxPolarAngle=Math.PI,u.enableZoom=!1,u.enablePan=!1,u.enabled=!1,u.dampingFactor=.1,u.saveState();const h=new hd,f=new ut,d=new pp({about:"project"}),g=await a.loadAsync("../../assets/fonts/Gugi_Regular.json");let m=[];const p=Xe.timeline({id:"click",smoothChildTiming:!0,autoRemoveChildren:!0});let _="";const y=90,x={waveColor:"#00ffff",backgroundColor:"#ffffff",texture:o.load(d.data[0].img),fogColor:"#f0f0f0"},v=k=>{const X=new Mi;X.name="renderPlanet";const N=new Mi,R=new PM({params:x});l.add(R.wave,R.image);let $=[];for(let q=y;q<=360;q+=y){let tt=new CM({index:q,font:g,data:d});tt.numberText.position.set(0,100,8),tt.titleText.position.set(3,-51,2),X.add(tt.numberText,tt.titleText),N.add(tt.planet),$.push(tt)}X.add(N),X.rotation.x=-Math.PI/3,l.add(X);const T=new Ay(16777215,1);T.castShadow=!0,T.shadow.mapSize.width=1024,T.shadow.mapSize.height=1024,T.shadow.radius=10,T.position.set(15,30,15),l.add(T);const z=new cd(16777215,.8);return z.castShadow=!0,z.shadow.mapSize.width=1024,z.shadow.mapSize.height=1024,z.shadow.radius=10,z.position.set(-15,15,15),l.add(z),{plantArry:$,wave:R,heartGroup:N}},M=()=>{i.width=window.innerWidth,i.height=window.innerHeight,c.aspect=i.width/i.height,c.updateProjectionMatrix(),n.setSize(i.width,i.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.querySelector("#planet-0").scrollIntoView({behavior:"smooth"})};function E(k,X){f.x=(k.clientX/window.innerWidth-.5)*2,f.y=-(k.clientY/window.innerHeight-.5)*2,h.setFromCamera(f,c);const N=h.intersectObjects(l.children);if(N.length>0){const R=N[0].object;if(R.parent.name==="planet"){const $=X.filter(z=>z.planet.id===R.parent.id);if(x.texture=o.load(d.data[R.userData.index].img),$[0].heartAnime("hover"),m.filter(z=>z.parent.id===R.parent.id).length>0)return;m.push(R)}else m.length>0&&(m=[],X.forEach($=>{$.isClick||$.heartAnime()}))}}function A(k,X,N){f.x=(k.clientX/window.innerWidth-.5)*2,f.y=-(k.clientY/window.innerHeight-.5)*2;const R=h.intersectObjects(l.children);if(R.length>0){const $=R[0].object;if($.parent.name==="planet"){u.reset();let T=$.userData.index-3;T<0&&(T=T+X.length);const z=X.filter(q=>q.planet.id===$.parent.id);if(z[0].isClick)return;X.forEach(q=>{q.heartAnime(),q.animation("samll"),q.isClick=!1}),z[0].isClick=!0,N.animation("small"),z[0].animation("big"),z[0].heartAnime("hover"),N.animation("hover",x),document.querySelector("#warning-click").setAttribute("class","show")}else b(X,N)}}const b=(k,X)=>{document.querySelector("#warning-click").removeAttribute("class","show"),k.forEach(N=>{N.animation("small"),N.heartAnime(),X.animation(),N.isClick=!1})};function S(k,X){const N=h.intersectObjects(l.children);if(N.length>0&&!p.isActive()){const R=N[0].object;R.parent.name==="planet"&&(Xe.to(u.object.position,{y:25.67,z:16.59,duration:2,onStart:()=>{k.animation("small")},onComplete:()=>{P(R.userData.index,R.userData.index)}},"<"),Xe.to(X.rotation,{z:Math.PI*4,duration:2},"<"))}}const P=(k,X)=>{document.querySelector("#warning-click").removeAttribute("class","show"),document.querySelector("header").setAttribute("class","disable"),Hp(d.data[k],X,"project"),document.querySelector("#scroll").setAttribute("class","disable"),cancelAnimationFrame(_)},B=k=>{W(k),Xe.to(k.heartGroup.rotation,{z:-Math.PI*4,duration:2},"<"),Xe.to(u.object.position,{x:u.position0.x,y:u.position0.y,z:u.position0.z,duration:2,onComplete:()=>{k.wave.animation("hover",x)}},"<")},Y=k=>{const{plantArry:X,wave:N,heartGroup:R}=k;window.addEventListener("resize",M),t.addEventListener("pointermove",$=>E($,X)),s.onClearProDescription(()=>{document.querySelector("#warning-click").setAttribute("class","show"),document.querySelector("#scroll").removeAttribute("class","disable"),document.querySelector("header").removeAttribute("class","disable"),B(k)}),t.addEventListener("pointerdown",$=>A($,X,N)),t.addEventListener("dblclick",()=>S(N,R))},W=k=>{const{plantArry:X,wave:N,heartGroup:R}=k;X.forEach($=>$.update(r.getElapsedTime())),N.update(r),u.update(),n.render(l,c),_=requestAnimationFrame(()=>{W(k)})},O=async()=>{e.hide(),e.add(u.object.position,"x",-1e3,1e3,.01),e.add(u.object.position,"y",-1e3,1e3,.01),e.add(u.object.position,"z",-1e3,1e3,.01);const k=v();Y(k),M(),W(k)};s.onDestroyProject(()=>{cancelAnimationFrame(_),n.dispose(),u.dispose()}),await O()}function DM(){const s=Za;s.onInitProject(async()=>await LM()),s.onInitCarrer(async()=>await AM()),document.querySelectorAll("#right-buttons .button-in-header").forEach((e,n)=>{e.addEventListener("click",i=>{const r=document.getElementById("active-menu").textContent.toString();if(!(e.textContent===document.getElementById("active-menu").textContent&&n!==0))switch(document.getElementById("active-menu").removeAttribute("id"),e.setAttribute("id","active-menu"),n){case 0:{e.textContent==="CARRER"?(s.destroyCarrer(),s.initProject(),e.textContent="PROJECT"):(s.destroyProject(),s.initCarrer(),e.textContent="CARRER");break}case 1:{r==="CARRER"?s.destroyCarrer():r==="PROJECT"?s.destroyProject():s.destroyAbout(),s.initToy();break}case 2:{r==="CARRER"?s.destroyCarrer():r==="PROJECT"?s.destroyProject():s.destroyToy(),s.initAbout();break}}})}),document.querySelector("#home").addEventListener("click",e=>{document.querySelectorAll("#right-buttons .button-in-header").forEach((n,i)=>{const r=document.getElementById("active-menu").textContent.toString();i===0&&(document.getElementById("active-menu").removeAttribute("id"),n.setAttribute("id","active-menu"),r.includes("TOY")?s.destroyToy():r.includes("ABOUT")?s.destroyAbout():r==="PROJECT"&&s.destroyProject(),s.initCarrer())})}),window.addEventListener("load",()=>{s.initCarrer()})}DM();
