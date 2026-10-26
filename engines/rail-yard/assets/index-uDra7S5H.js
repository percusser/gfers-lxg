(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="180",dh=0,Qo=1,fh=2,yc=1,Ec=2,Hn=3,ci=0,Jt=1,Xn=2,oi=0,tr=1,Fa=2,el=3,tl=4,ph=5,vi=100,mh=101,gh=102,_h=103,vh=104,xh=200,Mh=201,Sh=202,yh=203,ka=204,Oa=205,Eh=206,bh=207,wh=208,Ah=209,Th=210,Rh=211,Ch=212,Ph=213,Lh=214,Ba=0,za=1,Ha=2,rr=3,Va=4,Ga=5,Wa=6,Xa=7,Po=0,Dh=1,Ih=2,li=0,Uh=1,Nh=2,Fh=3,bc=4,kh=5,Oh=6,Bh=7,wc=300,sr=301,ar=302,$a=303,qa=304,Xs=306,Ns=1e3,Mi=1001,Fs=1002,ln=1003,zh=1004,jr=1005,Cn=1006,Js=1007,Si=1008,In=1009,Ac=1010,Tc=1011,Fr=1012,Lo=1013,Ei=1014,Pn=1015,Gr=1016,Do=1017,Io=1018,kr=1020,Rc=35902,Cc=35899,Pc=1021,Lc=1022,Sn=1023,Or=1026,Br=1027,Uo=1028,No=1029,Dc=1030,Fo=1031,ko=1033,Cs=33776,Ps=33777,Ls=33778,Ds=33779,Ya=35840,ja=35841,Ka=35842,Za=35843,Ja=36196,Qa=37492,eo=37496,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,go=36492,_o=36494,vo=36495,xo=36283,Mo=36284,So=36285,yo=36286,Hh=3200,Vh=3201,Oo=0,Gh=1,ai="",Ot="srgb",or="srgb-linear",ks="linear",ct="srgb",Ui=7680,nl=519,Wh=512,Xh=513,$h=514,Ic=515,qh=516,Yh=517,jh=518,Kh=519,il=35044,rl="300 es",Ln=2e3,Os=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const nr=Math.PI/180,zr=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Bo(i,e){return(i%e+e)%e}function Zh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Jh(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function Qh(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function eu(i,e=1){return e-Math.abs(Bo(i,e*2)-e)}function tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ru(i,e){return i+Math.random()*(e-i)}function su(i){return i*(.5-Math.random())}function au(i){i!==void 0&&(sl=i);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ou(i){return i*nr}function lu(i){return i*zr}function cu(i){return(i&i-1)===0&&i!==0}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function du(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*v,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*v,o*l);break;case"ZYZ":i.set(c*v,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qs={DEG2RAD:nr,RAD2DEG:zr,generateUUID:ur,clamp:Ze,euclideanModulo:Bo,mapLinear:Zh,inverseLerp:Jh,lerp:Dr,damp:Qh,pingpong:eu,smoothstep:tu,smootherstep:nu,randInt:iu,randFloat:ru,randFloatSpread:su,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:Kt,denormalize:Ji};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],f=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==v){let m=1-o;const p=c*d+l*f+h*v+u*g,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const T=Math.sqrt(w),y=Math.atan2(T,p*b);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T}const _=o*b;if(c=c*m+d*_,l=l*m+f*_,h=h*m+v*_,u=u*m+g*_,m===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+h*u+c*f-l*d,e[t+1]=c*v+h*d+l*u-o*f,e[t+2]=l*v+h*f+o*d-c*u,e[t+3]=h*v-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),f=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*v,this._y=l*f*u-d*h*v,this._z=l*h*v+d*f*u,this._w=l*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+l*f*v,this._y=l*f*u-d*h*v,this._z=l*h*v-d*f*u,this._w=l*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-l*f*v,this._y=l*f*u+d*h*v,this._z=l*h*v+d*f*u,this._w=l*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-l*f*v,this._y=l*f*u+d*h*v,this._z=l*h*v-d*f*u,this._w=l*h*u+d*f*v;break;case"YZX":this._x=d*h*u+l*f*v,this._y=l*f*u+d*h*v,this._z=l*h*v-d*f*u,this._w=l*h*u-d*f*v;break;case"XZY":this._x=d*h*u-l*f*v,this._y=l*f*u-d*h*v,this._z=l*h*v+d*f*u,this._w=l*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new U,al=new Wr;class Xe{constructor(e,t,n,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],g=r[0],m=r[3],p=r[6],b=r[1],w=r[4],_=r[7],T=r[2],y=r[5],R=r[8];return s[0]=a*g+o*b+c*T,s[3]=a*m+o*w+c*y,s[6]=a*p+o*_+c*R,s[1]=l*g+h*b+u*T,s[4]=l*m+h*w+u*y,s[7]=l*p+h*_+u*R,s[2]=d*g+f*b+v*T,s[5]=d*m+f*w+v*y,s[8]=d*p+f*_+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,v=t*u+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(r*l-h*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Xe;function Uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=Hr("canvas");return i.style.display="block",i}const ol={};function Vr(i){i in ol||(ol[i]=!0,console.warn(i))}function pu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ll=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mu(){const i={enabled:!0,workingColorSpace:or,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?ks:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[or]:{primaries:e,whitePoint:n,transfer:ks,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const it=mu();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class gu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Hr("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _u=0;class zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;const ia=new U;class Bt extends hr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Mi,r=Mi,s=Cn,a=Si,o=Sn,c=In,l=Bt.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ur(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=wc;Bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],v=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,_=(f+1)/2,T=(p+1)/2,y=(h+d)/4,R=(u+g)/4,P=(v+m)/4;return w>_&&w>T?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=y/n,s=R/n):_>T?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=y/r,s=P/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=P/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(u-g)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends hr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Bt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nc extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Zr.subVectors(this.max,xr),Fi.subVectors(e.a,xr),ki.subVectors(e.b,xr),Oi.subVectors(e.c,xr),Kn.subVectors(ki,Fi),Zn.subVectors(Oi,ki),ui.subVectors(Fi,Oi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-ui.z,ui.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,ui.z,0,-ui.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-ui.y,ui.x,0];return!ra(t,Fi,ki,Oi,Zr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Fi,ki,Oi,Zr))?!1:(Jr.crossVectors(Kn,Zn),t=[Jr.x,Jr.y,Jr.z],ra(t,Fi,ki,Oi,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,Kr=new wi,Fi=new U,ki=new U,Oi=new U,Kn=new U,Zn=new U,ui=new U,xr=new U,Zr=new U,Jr=new U,di=new U;function ra(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Su=new wi,Mr=new U,sa=new U;class dr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Su.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(sa)),this.expandByPoint(Mr.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new U,aa=new U,Qr=new U,Jn=new U,oa=new U,es=new U,la=new U;class Ho{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){aa.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=Jn.dot(this.direction),c=-Jn.dot(Qr),l=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,v;if(h>0)if(u=a*c-o,d=a*o-c,v=s*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=v?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(aa).addScaledVector(Qr,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){oa.subVectors(t,e),es.subVectors(n,e),la.crossVectors(oa,es);let a=this.direction.dot(la),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const c=o*this.direction.dot(es.crossVectors(Jn,es));if(c<0)return null;const l=o*this.direction.dot(oa.cross(Jn));if(l<0||c+l>a)return null;const h=-o*Jn.dot(la);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,r,s,a,o,c,l,h,u,d,f,v,g,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,f,v,g,m)}set(e,t,n,r,s,a,o,c,l,h,u,d,f,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,v=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+v*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=v+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,v=l*h,g=l*u;t[0]=d+g*o,t[4]=v*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,v=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,v=o*h,g=o*u;t[0]=c*h,t[4]=v*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,v=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=v*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+v,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,v=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-v,t[2]=v*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yu,e,Eu)}lookAt(e,t,n){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Qn.crossVectors(n,rn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Qn.crossVectors(n,rn)),Qn.normalize(),ts.crossVectors(rn,Qn),r[0]=Qn.x,r[4]=ts.x,r[8]=rn.x,r[1]=Qn.y,r[5]=ts.y,r[9]=rn.y,r[2]=Qn.z,r[6]=ts.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],b=n[3],w=n[7],_=n[11],T=n[15],y=r[0],R=r[4],P=r[8],M=r[12],x=r[1],A=r[5],D=r[9],O=r[13],I=r[2],z=r[6],V=r[10],q=r[14],G=r[3],Q=r[7],oe=r[11],le=r[15];return s[0]=a*y+o*x+c*I+l*G,s[4]=a*R+o*A+c*z+l*Q,s[8]=a*P+o*D+c*V+l*oe,s[12]=a*M+o*O+c*q+l*le,s[1]=h*y+u*x+d*I+f*G,s[5]=h*R+u*A+d*z+f*Q,s[9]=h*P+u*D+d*V+f*oe,s[13]=h*M+u*O+d*q+f*le,s[2]=v*y+g*x+m*I+p*G,s[6]=v*R+g*A+m*z+p*Q,s[10]=v*P+g*D+m*V+p*oe,s[14]=v*M+g*O+m*q+p*le,s[3]=b*y+w*x+_*I+T*G,s[7]=b*R+w*A+_*z+T*Q,s[11]=b*P+w*D+_*V+T*oe,s[15]=b*M+w*O+_*q+T*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*f-n*c*f)+g*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],b=u*m*l-g*d*l+g*c*f-o*m*f-u*c*p+o*d*p,w=v*d*l-h*m*l-v*c*f+a*m*f+h*c*p-a*d*p,_=h*g*l-v*u*l+v*o*f-a*g*f-h*o*p+a*u*p,T=v*u*c-h*g*c-v*o*d+a*g*d+h*o*m-a*u*m,y=t*b+n*w+r*_+s*T;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/y;return e[0]=b*R,e[1]=(g*d*s-u*m*s-g*r*f+n*m*f+u*r*p-n*d*p)*R,e[2]=(o*m*s-g*c*s+g*r*l-n*m*l-o*r*p+n*c*p)*R,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*f-n*c*f)*R,e[4]=w*R,e[5]=(h*m*s-v*d*s+v*r*f-t*m*f-h*r*p+t*d*p)*R,e[6]=(v*c*s-a*m*s-v*r*l+t*m*l+a*r*p-t*c*p)*R,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*f+t*c*f)*R,e[8]=_*R,e[9]=(v*u*s-h*g*s-v*n*f+t*g*f+h*n*p-t*u*p)*R,e[10]=(a*g*s-v*o*s+v*n*l-t*g*l-a*n*p+t*o*p)*R,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=T*R,e[13]=(h*g*r-v*u*r+v*n*d-t*g*d-h*n*m+t*u*m)*R,e[14]=(v*o*r-a*g*r-v*n*c+t*g*c+a*n*m-t*o*m)*R,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,v=s*u,g=a*h,m=a*u,p=o*u,b=c*l,w=c*h,_=c*u,T=n.x,y=n.y,R=n.z;return r[0]=(1-(g+p))*T,r[1]=(f+_)*T,r[2]=(v-w)*T,r[3]=0,r[4]=(f-_)*y,r[5]=(1-(d+p))*y,r[6]=(m+b)*y,r[7]=0,r[8]=(v+w)*R,r[9]=(m-b)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const l=1/s,h=1/a,u=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Ln,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let v,g;if(c)v=s/(a-s),g=a*s/(a-s);else if(o===Ln)v=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Os)v=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ln,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let v,g;if(c)v=1/(a-s),g=a/(a-s);else if(o===Ln)v=-2/(a-s),g=-(a+s)/(a-s);else if(o===Os)v=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new U,xn=new ut,yu=new U(0,0,0),Eu=new U(1,1,1),Qn=new U,ts=new U,rn=new U,hl=new ut,ul=new Wr;class yn{constructor(e=0,t=0,n=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const dl=new U,zi=new Wr,kn=new ut,ns=new U,Sr=new U,wu=new U,Au=new Wr,fl=new U(1,0,0),pl=new U(0,1,0),ml=new U(0,0,1),gl={type:"added"},Tu={type:"removed"},Hi={type:"childadded",child:null},ca={type:"childremoved",child:null};class wt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new yn,n=new Wr,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Xe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(pl,e)}rotateZ(e){return this.rotateOnAxis(ml,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(pl,e)}translateZ(e){return this.translateOnAxis(ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Sr,ns,this.up):kn.lookAt(ns,Sr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(kn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new U(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new U,On=new U,ha=new U,Bn=new U,Vi=new U,Gi=new U,_l=new U,ua=new U,da=new U,fa=new U,pa=new ht,ma=new ht,ga=new ht;class pn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mn.subVectors(r,t),On.subVectors(n,t),ha.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(On),c=Mn.dot(ha),l=On.dot(On),h=On.dot(ha),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,v=(a*h-o*c)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pa,s.x),a.addScaledVector(ma,s.y),a.addScaledVector(ga,s.z),a}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),On.subVectors(e,t),Mn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Vi.subVectors(r,n),Gi.subVectors(s,n),ua.subVectors(e,n);const c=Vi.dot(ua),l=Gi.dot(ua);if(c<=0&&l<=0)return t.copy(n);da.subVectors(e,r);const h=Vi.dot(da),u=Gi.dot(da);if(h>=0&&u<=h)return t.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vi,a);fa.subVectors(e,s);const f=Vi.dot(fa),v=Gi.dot(fa);if(v>=0&&f<=v)return t.copy(s);const g=f*l-c*v;if(g<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Gi,o);const m=h*v-f*u;if(m<=0&&u-h>=0&&f-v>=0)return _l.subVectors(s,r),o=(u-h)/(u-h+(f-v)),t.copy(r).addScaledVector(_l,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},is={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Bo(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_a(a,s,e+1/3),this.g=_a(a,s,e),this.b=_a(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return it.workingToColorSpace(Yt.copy(this),e),Math.round(Ze(Yt.r*255,0,255))*65536+Math.round(Ze(Yt.g*255,0,255))*256+Math.round(Ze(Yt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ot){it.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(is);const n=Dr(ei.h,is.h,t),r=Dr(ei.s,is.s,t),s=Dr(ei.l,is.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ge;Ge.NAMES=Fc;let Ru=0;class Ai extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=tr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Oa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ri extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,rs=new Je;let Cu=0;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}}class kc extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oc extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pu=0;const un=new ut,va=new wt,Wi=new U,sn=new wi,yr=new wi,kt=new U;class En extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uc(e)?Oc:kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(sn.min,yr.min),sn.expandByPoint(kt),kt.addVectors(sn.max,yr.max),sn.expandByPoint(kt)):(sn.expandByPoint(yr.min),sn.expandByPoint(yr.max))}sn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)kt.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(e,l),kt.add(Wi)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new U,c[P]=new U;const l=new U,h=new U,u=new U,d=new Je,f=new Je,v=new Je,g=new U,m=new U;function p(P,M,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),v.fromBufferAttribute(s,x),h.sub(l),u.sub(l),f.sub(d),v.sub(d);const A=1/(f.x*v.y-v.x*f.y);isFinite(A)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(A),o[P].add(g),o[M].add(g),o[x].add(g),c[P].add(m),c[M].add(m),c[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,M=b.length;P<M;++P){const x=b[P],A=x.start,D=x.count;for(let O=A,I=A+D;O<I;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new U,_=new U,T=new U,y=new U;function R(P){T.fromBufferAttribute(r,P),y.copy(T);const M=o[P];w.copy(M),w.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(y,M);const A=_.dot(c[P])<0?-1:1;a.setXYZW(P,w.x,w.y,w.z,A)}for(let P=0,M=b.length;P<M;++P){const x=b[P],A=x.start,D=x.count;for(let O=A,I=A+D;O<I;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[v++]=l[f++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new ut,fi=new Ho,ss=new dr,xl=new U,as=new U,os=new U,ls=new U,xa=new U,cs=new U,Ml=new U,hs=new U;class Ke extends wt{constructor(e=new En,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(xa.fromBufferAttribute(u,e),a?cs.addScaledVector(xa,h):cs.addScaledVector(xa.sub(t),h))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(ss.containsPoint(fi.origin)===!1&&(fi.intersectSphere(ss,xl)===null||fi.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(vl.copy(s).invert(),fi.copy(e.ray).applyMatrix4(vl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,T=w;_<T;_+=3){const y=o.getX(_),R=o.getX(_+1),P=o.getX(_+2);r=us(this,p,e,n,l,h,u,y,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);r=us(this,a,e,n,l,h,u,b,w,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,T=w;_<T;_+=3){const y=_,R=_+1,P=_+2;r=us(this,p,e,n,l,h,u,y,R,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const b=m,w=m+1,_=m+2;r=us(this,a,e,n,l,h,u,b,w,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Lu(i,e,t,n,r,s,a,o){let c;if(e.side===Jt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ci,o),c===null)return null;hs.copy(o),hs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(hs);return l<t.near||l>t.far?null:{distance:l,point:hs.clone(),object:i}}function us(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,as),i.getVertexPosition(c,os),i.getVertexPosition(l,ls);const h=Lu(i,e,t,n,as,os,ls,Ml);if(h){const u=new U;pn.getBarycoord(Ml,as,os,ls,u),r&&(h.uv=pn.getInterpolatedAttribute(r,o,c,l,u,new Je)),s&&(h.uv1=pn.getInterpolatedAttribute(s,o,c,l,u,new Je)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};pn.getNormal(as,os,ls,d.normal),h.face=d,h.barycoord=u}return h}class gn extends En{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(u,2));function v(g,m,p,b,w,_,T,y,R,P,M){const x=_/R,A=T/P,D=_/2,O=T/2,I=y/2,z=R+1,V=P+1;let q=0,G=0;const Q=new U;for(let oe=0;oe<V;oe++){const le=oe*A-O;for(let _e=0;_e<z;_e++){const Le=_e*x-D;Q[g]=Le*b,Q[m]=le*w,Q[p]=I,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=y>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(_e/R),u.push(1-oe/P),q+=1}}for(let oe=0;oe<P;oe++)for(let le=0;le<R;le++){const _e=d+le+z*oe,Le=d+le+z*(oe+1),Ne=d+(le+1)+z*(oe+1),De=d+(le+1)+z*oe;c.push(_e,Le,De),c.push(Le,Ne,De),G+=6}o.addGroup(f,G,M),f+=G,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Du(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Iu={clone:lr,merge:Zt};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new U,Sl=new Je,yl=new Je;class on extends zc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,yl),t.subVectors(yl,Sl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,$i=1;class Fu extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Xi,$i,e,t);r.layers=this.layers,this.add(r);const s=new on(Xi,$i,e,t);s.layers=this.layers,this.add(s);const a=new on(Xi,$i,e,t);a.layers=this.layers,this.add(a);const o=new on(Xi,$i,e,t);o.layers=this.layers,this.add(o);const c=new on(Xi,$i,e,t);c.layers=this.layers,this.add(c);const l=new on(Xi,$i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Hc extends Bt{constructor(e=[],t=sr,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ku extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gn(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:oi});s.uniforms.tEquirect.value=t;const a=new Ke(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Cn),new Fu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Dt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ou={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;l.inputState.pinching&&d>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new $s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vc extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bu extends Bt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=ln,h=ln,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends mn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new ut,bl=new ut,ds=[],wl=new wi,zu=new ut,Er=new Ke,br=new dr;class Ir extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,zu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),wl.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),br.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qi),bl.multiplyMatrices(n,qi),Er.matrixWorld=bl,Er.raycast(e,ds);for(let a=0,o=ds.length;a<o;a++){const c=ds[a];c.instanceId=s,c.object=this,t.push(c)}ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bu(new Float32Array(r*this.count),r,this.count,Uo,Pn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sa=new U,Hu=new U,Vu=new Xe;class si{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Sa.subVectors(n,t).cross(Hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vu.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new dr,Gu=new Je(.5,.5),fs=new U;class Go{constructor(e=new si,t=new si,n=new si,r=new si,s=new si,a=new si){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],v=s[8],g=s[9],m=s[10],p=s[11],b=s[12],w=s[13],_=s[14],T=s[15];if(r[0].setComponents(l-a,f-h,p-v,T-b).normalize(),r[1].setComponents(l+a,f+h,p+v,T+b).normalize(),r[2].setComponents(l+o,f+u,p+g,T+w).normalize(),r[3].setComponents(l-o,f-u,p-g,T-w).normalize(),n)r[4].setComponents(c,d,m,_).normalize(),r[5].setComponents(l-c,f-d,p-m,T-_).normalize();else if(r[4].setComponents(l-c,f-d,p-m,T-_).normalize(),t===Ln)r[5].setComponents(l+c,f+d,p+m,T+_).normalize();else if(t===Os)r[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=Gu.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gc extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bs=new U,zs=new U,Al=new ut,wr=new Ho,ps=new dr,ya=new U,Tl=new U;class Wc extends wt{constructor(e=new En,t=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Bs.fromBufferAttribute(t,r-1),zs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bs.distanceTo(zs);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;Al.copy(r).invert(),wr.copy(e.ray).applyMatrix4(Al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let g=f,m=v-1;g<m;g+=l){const p=h.getX(g),b=h.getX(g+1),w=ms(this,e,wr,c,p,b,g);w&&t.push(w)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(f),p=ms(this,e,wr,c,g,m,v-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let g=f,m=v-1;g<m;g+=l){const p=ms(this,e,wr,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=ms(this,e,wr,c,v-1,f,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ms(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Bs.fromBufferAttribute(o,r),zs.fromBufferAttribute(o,s),t.distanceSqToSegment(Bs,zs,ya,Tl)>n)return;ya.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ya);if(!(l<e.near||l>e.far))return{distance:l,point:Tl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Rl=new U,Cl=new U;class Wu extends Wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Rl.fromBufferAttribute(t,r),Cl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rl.distanceTo(Cl);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hs extends Bt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xc extends Bt{constructor(e,t,n=Ei,r,s,a,o=ln,c=ln,l,h=Or,u=1){if(h!==Or&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $c extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cr extends En{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let v=0;const g=[],m=n/2;let p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new cn(u,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(f,2));function b(){const _=new U,T=new U;let y=0;const R=(t-e)/n;for(let P=0;P<=s;P++){const M=[],x=P/s,A=x*(t-e)+e;for(let D=0;D<=r;D++){const O=D/r,I=O*c+o,z=Math.sin(I),V=Math.cos(I);T.x=A*z,T.y=-x*n+m,T.z=A*V,u.push(T.x,T.y,T.z),_.set(z,R,V).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-x),M.push(v++)}g.push(M)}for(let P=0;P<r;P++)for(let M=0;M<s;M++){const x=g[M][P],A=g[M+1][P],D=g[M+1][P+1],O=g[M][P+1];(e>0||M!==0)&&(h.push(x,A,O),y+=3),(t>0||M!==s-1)&&(h.push(A,D,O),y+=3)}l.addGroup(p,y,0),p+=y}function w(_){const T=v,y=new Je,R=new U;let P=0;const M=_===!0?e:t,x=_===!0?1:-1;for(let D=1;D<=r;D++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),v++;const A=v;for(let D=0;D<=r;D++){const I=D/r*c+o,z=Math.cos(I),V=Math.sin(I);R.x=M*V,R.y=m*x,R.z=M*z,u.push(R.x,R.y,R.z),d.push(0,x,0),y.x=z*.5+.5,y.y=V*.5*x+.5,f.push(y.x,y.y),v++}for(let D=0;D<r;D++){const O=T+D,I=A+D;_===!0?h.push(I,I+1,O):h.push(I+1,I,O),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const gs=new U,_s=new U,Ea=new U,vs=new pn;class Xu extends En{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(nr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let v=0;v<c;v+=3){a?(l[0]=a.getX(v),l[1]=a.getX(v+1),l[2]=a.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:g,b:m,c:p}=vs;if(g.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),vs.getNormal(Ea),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const w=(b+1)%3,_=u[b],T=u[w],y=vs[h[b]],R=vs[h[w]],P=`${_}_${T}`,M=`${T}_${_}`;M in d&&d[M]?(Ea.dot(d[M].normal)<=s&&(f.push(y.x,y.y,y.z),f.push(R.x,R.y,R.z)),d[M]=null):P in d||(d[P]={index0:l[b],index1:l[w],normal:Ea.clone()})}}for(const v in d)if(d[v]){const{index0:g,index1:m}=d[v];gs.fromBufferAttribute(o,g),_s.fromBufferAttribute(o,m),f.push(gs.x,gs.y,gs.z),f.push(_s.x,_s.y,_s.z)}this.setAttribute("position",new cn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class fn extends En{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let w=0;w<l;w++){const _=w*u-s;v.push(_,-b,0),g.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const w=b+l*p,_=b+l*(p+1),T=b+1+l*(p+1),y=b+1+l*p;f.push(w,_,y),f.push(_,T,y)}this.setIndex(f),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}class an extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $u extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qu extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yu extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ju extends Gc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const ba={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ku{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],v=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const qc=new Ku;class Wo{constructor(e){this.manager=e!==void 0?e:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi=new WeakMap;class Zu extends Wo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ba.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Yi.get(a);u===void 0&&(u=[],Yi.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=Hr("img");function c(){h(),t&&t(this);const u=Yi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Yi.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),ba.remove(`image:${e}`);const d=Yi.get(this)||[];for(let f=0;f<d.length;f++){const v=d[f];v.onError&&v.onError(u)}Yi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ba.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Yc extends Wo{constructor(e){super(e)}load(e,t,n,r){const s=new Bt,a=new Zu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Xo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ju extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new ut,Pl=new U,Ll=new U;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pl),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dl=new ut,Ar=new U,Aa=new U;class Qu extends jc{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),Aa.copy(n.position),Aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Aa),n.updateMatrixWorld(),r.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,n.coordinateSystem,n.reversedDepth)}}class ed extends Xo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Qu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kc extends zc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class td extends jc{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Il extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new td}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nd extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ul=new ut;class Zc{constructor(e,t,n=0,r=1/0){this.ray=new Ho(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(e,t=!0,n=[]){return Eo(e,this,n,t),n.sort(Nl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Eo(e[r],this,n,t);return n.sort(Nl),n}}function Nl(i,e){return i.distance-e.distance}function Eo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Eo(s[a],e,t,!0)}}function Fl(i,e,t,n){const r=id(n);switch(t){case Pc:return i*e;case Uo:return i*e/r.components*r.byteLength;case No:return i*e/r.components*r.byteLength;case Dc:return i*e*2/r.components*r.byteLength;case Fo:return i*e*2/r.components*r.byteLength;case Lc:return i*e*3/r.components*r.byteLength;case Sn:return i*e*4/r.components*r.byteLength;case ko:return i*e*4/r.components*r.byteLength;case Cs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:case Za:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ka:return Math.max(i,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case go:case _o:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function id(i){switch(i){case In:case Ac:return{byteLength:1,components:1};case Fr:case Tc:case Gr:return{byteLength:2,components:1};case Do:case Io:return{byteLength:2,components:4};case Ei:case Lo:case Pn:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rd(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){const v=u[d],g=u[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){const g=u[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
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
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$f=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,pp=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bp=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Rp=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:sd,alphahash_pars_fragment:ad,alphamap_fragment:od,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:hd,aomap_fragment:ud,aomap_pars_fragment:dd,batching_pars_vertex:fd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:_d,iridescence_fragment:vd,bumpmap_pars_fragment:xd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Ed,color_fragment:bd,color_pars_fragment:wd,color_pars_vertex:Ad,color_vertex:Td,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Dd,emissivemap_fragment:Id,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:kd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Zd,envmap_vertex:Hd,fog_vertex:Vd,fog_pars_vertex:Gd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:jd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:ef,lights_phong_pars_fragment:tf,lights_physical_fragment:nf,lights_physical_pars_fragment:rf,lights_fragment_begin:sf,lights_fragment_maps:af,lights_fragment_end:of,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:uf,map_fragment:df,map_pars_fragment:ff,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:_f,morphinstance_vertex:vf,morphcolor_vertex:xf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:yf,normal_fragment_begin:Ef,normal_fragment_maps:bf,normal_pars_fragment:wf,normal_pars_vertex:Af,normal_vertex:Tf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:If,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:kf,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Gf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:$f,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:jf,specularmap_pars_fragment:Kf,tonemapping_fragment:Zf,tonemapping_pars_fragment:Jf,transmission_fragment:Qf,transmission_pars_fragment:ep,uv_pars_fragment:tp,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:rp,background_vert:sp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:dp,distanceRGBA_vert:fp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:_p,linedashed_frag:vp,meshbasic_vert:xp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:yp,meshmatcap_vert:Ep,meshmatcap_frag:bp,meshnormal_vert:wp,meshnormal_frag:Ap,meshphong_vert:Tp,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Lp,meshtoon_frag:Dp,points_vert:Ip,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:kp,sprite_frag:Op},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Rn={basic:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Rn.physical={uniforms:Zt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const xs={r:0,b:0,g:0},mi=new yn,Bp=new ut;function zp(i,e,t,n,r,s,a){const o=new Ge(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function v(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function g(w){let _=!1;const T=v(w);T===null?p(o,c):T&&T.isColor&&(p(T,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===Xs)?(h===void 0&&(h=new Ke(new gn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:lr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mi.copy(_.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(mi)),h.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ke(new fn(2,2),new hi({name:"BackgroundMaterial",uniforms:lr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,_){w.getRGB(xs,Bc(i)),n.buffers.color.setClear(xs.r,xs.g,xs.b,_,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:g,addToRenderList:m,dispose:b}}function Hp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(x,A,D,O,I){let z=!1;const V=u(O,D,A);s!==V&&(s=V,l(s.object)),z=f(x,O,D,I),z&&v(x,O,D,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,_(x,A,D,O),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,A,D){const O=D.wireframe===!0;let I=n[x.id];I===void 0&&(I={},n[x.id]=I);let z=I[A.id];z===void 0&&(z={},I[A.id]=z);let V=z[O];return V===void 0&&(V=d(c()),z[O]=V),V}function d(x){const A=[],D=[],O=[];for(let I=0;I<t;I++)A[I]=0,D[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,A,D,O){const I=s.attributes,z=A.attributes;let V=0;const q=D.getAttributes();for(const G in q)if(q[G].location>=0){const oe=I[G];let le=z[G];if(le===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function v(x,A,D,O){const I={},z=A.attributes;let V=0;const q=D.getAttributes();for(const G in q)if(q[G].location>=0){let oe=z[G];oe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));const le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),I[G]=le,V++}s.attributes=I,s.attributesNum=V,s.index=O}function g(){const x=s.newAttributes;for(let A=0,D=x.length;A<D;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const D=s.newAttributes,O=s.enabledAttributes,I=s.attributeDivisors;D[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),I[x]!==A&&(i.vertexAttribDivisor(x,A),I[x]=A)}function b(){const x=s.newAttributes,A=s.enabledAttributes;for(let D=0,O=A.length;D<O;D++)A[D]!==x[D]&&(i.disableVertexAttribArray(D),A[D]=0)}function w(x,A,D,O,I,z,V){V===!0?i.vertexAttribIPointer(x,A,D,I,z):i.vertexAttribPointer(x,A,D,O,I,z)}function _(x,A,D,O){g();const I=O.attributes,z=D.getAttributes(),V=A.defaultAttributeValues;for(const q in z){const G=z[q];if(G.location>=0){let Q=I[q];if(Q===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const oe=Q.normalized,le=Q.itemSize,_e=e.get(Q);if(_e===void 0)continue;const Le=_e.buffer,Ne=_e.type,De=_e.bytesPerElement,K=Ne===i.INT||Ne===i.UNSIGNED_INT||Q.gpuType===Lo;if(Q.isInterleavedBufferAttribute){const J=Q.data,be=J.stride,we=Q.offset;if(J.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)p(G.location+de,J.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let de=0;de<G.locationSize;de++)w(G.location+de,le/G.locationSize,Ne,oe,be*De,(we+le/G.locationSize*de)*De,K)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,Q.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let J=0;J<G.locationSize;J++)w(G.location+J,le/G.locationSize,Ne,oe,le*De,le/G.locationSize*J*De,K)}}else if(V!==void 0){const oe=V[q];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(G.location,oe);break;case 3:i.vertexAttrib3fv(G.location,oe);break;case 4:i.vertexAttrib4fv(G.location,oe);break;default:i.vertexAttrib1fv(G.location,oe)}}}}b()}function T(){P();for(const x in n){const A=n[x];for(const D in A){const O=A[D];for(const I in O)h(O[I].object),delete O[I];delete A[D]}delete n[x]}}function y(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const D in A){const O=A[D];for(const I in O)h(O[I].object),delete O[I];delete A[D]}delete n[x.id]}function R(x){for(const A in n){const D=n[A];if(D[x.id]===void 0)continue;const O=D[x.id];for(const I in O)h(O[I].object),delete O[I];delete D[x.id]}}function P(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Vp(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<l.length;v++)a(l[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Gp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:T,maxSamples:y}}function Wp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new si,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||v===null||v.length===0||s&&!m)s?h(null):l();else{const b=s?0:n,w=b*4;let _=p.clippingState||null;c.value=_,_=h(v,d,w,f);for(let T=0;T!==w;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const p=f+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==g;++w,_+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Xp(i){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=sr:o===qa&&(a.mapping=ar),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===qa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ku(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Qi=4,kl=[.125,.215,.35,.446,.526,.582],xi=20,Ta=new Kc,Ol=new Ge;let Ra=null,Ca=0,Pa=0,La=!1;const _i=(1+Math.sqrt(5))/2,ji=1/_i,Bl=[new U(-_i,ji,0),new U(_i,ji,0),new U(-ji,0,_i),new U(ji,0,_i),new U(0,_i,-ji),new U(0,_i,ji),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],$p=new U;class bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=$p}=s;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=La,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Gr,format:Sn,colorSpace:or,depthBuffer:!1},r=zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(s)),this._blurMaterial=Yp(s,e,t)}return r}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,r,s){const c=new on(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ol),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new ri({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),m=new Ke(new gn,g);let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Ol),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):_===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));const T=this._cubeSize;Ms(r,_*T,w>2?T:0,T,T),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bl[(r-s-1)%Bl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),g=s/v,m=isFinite(s)?1+Math.floor(h*g):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let b=0;for(let R=0;R<xi;++R){const P=R/g,M=Math.exp(-P*P/2);p.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-n;const _=this._sizeLods[r],T=3*_*(r>w-Qi?r-w+Qi:0),y=4*(this._cubeSize-_);Ms(t,T,y,3*_,2*_),c.setRenderTarget(t),c.render(u,Ta)}}function qp(i){const e=[],t=[],n=[];let r=i;const s=i-Qi+1+kl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Qi?c=kl[a-i+Qi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,g=3,m=2,p=1,b=new Float32Array(g*v*f),w=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let y=0;y<f;y++){const R=y%3*2/3-1,P=y>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];b.set(M,g*v*y),w.set(d,m*v*y);const x=[y,y,y,y,y,y];_.set(x,p*v*y)}const T=new En;T.setAttribute("position",new mn(b,g)),T.setAttribute("uv",new mn(w,m)),T.setAttribute("faceIndex",new mn(_,p)),e.push(T),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zl(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yp(i,e,t){const n=new Float32Array(xi),r=new U(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$o(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Hl(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Vl(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function jp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===$a||c===qa,h=c===sr||c===ar;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new bo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Vr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Zp(i,e,t,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,v=u.attributes.position;let g=0;if(f!==null){const b=f.array;g=f.version;for(let w=0,_=b.length;w<_;w+=3){const T=b[w+0],y=b[w+1],R=b[w+2];d.push(T,y,y,R,R,T)}}else if(v!==void 0){const b=v.array;g=v.version;for(let w=0,_=b.length/3-1;w<_;w+=3){const T=w+0,y=w+1,R=w+2;d.push(T,y,y,R,R,T)}}else return;const m=new(Uc(d)?Oc:kc)(d,1);m.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Jp(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,s,d*a,v),t.update(f,n,v))}function h(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function u(d,f,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=f[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function em(i,e,t){const n=new WeakMap,r=new ht;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let _=o.attributes.position.count*w,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const y=new Float32Array(_*T*4*u),R=new Nc(y,_,T,u);R.type=Pn,R.needsUpdate=!0;const P=w*4;for(let x=0;x<u;x++){const A=m[x],D=p[x],O=b[x],I=_*T*4*x;for(let z=0;z<A.count;z++){const V=z*P;f===!0&&(r.fromBufferAttribute(A,z),y[I+V+0]=r.x,y[I+V+1]=r.y,y[I+V+2]=r.z,y[I+V+3]=0),v===!0&&(r.fromBufferAttribute(D,z),y[I+V+4]=r.x,y[I+V+5]=r.y,y[I+V+6]=r.z,y[I+V+7]=0),g===!0&&(r.fromBufferAttribute(O,z),y[I+V+8]=r.x,y[I+V+9]=r.y,y[I+V+10]=r.z,y[I+V+11]=O.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new Je(_,T)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];const v=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function tm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Qc=new Bt,Gl=new Xc(1,1),eh=new Nc,th=new Mu,nh=new Hc,Wl=[],Xl=[],$l=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),Ut(t,n)}}function om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),Ut(t,n)}}function lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Ut(t,n)}}function cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function _m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=Ic,s=Gl):s=Qc,t.setTexture2D(e||s,r)}function vm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||th,r)}function xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nh,r)}function Mm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||eh,r)}function Sm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return rm;case 35666:return sm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}function ym(i,e){i.uniform1fv(this.addr,e)}function Em(i,e){const t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function bm(i,e){const t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function wm(i,e){const t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Am(i,e){const t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tm(i,e){const t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rm(i,e){const t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cm(i,e){i.uniform1iv(this.addr,e)}function Pm(i,e){i.uniform2iv(this.addr,e)}function Lm(i,e){i.uniform3iv(this.addr,e)}function Dm(i,e){i.uniform4iv(this.addr,e)}function Im(i,e){i.uniform1uiv(this.addr,e)}function Um(i,e){i.uniform2uiv(this.addr,e)}function Nm(i,e){i.uniform3uiv(this.addr,e)}function Fm(i,e){i.uniform4uiv(this.addr,e)}function km(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qc,s[a])}function Om(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||th,s[a])}function Bm(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nh,s[a])}function zm(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||eh,s[a])}function Hm(i){switch(i){case 5126:return ym;case 35664:return Em;case 35665:return bm;case 35666:return wm;case 35674:return Am;case 35675:return Tm;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}class Vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sm(t.type)}}class Gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hm(t.type)}}class Wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function jl(i,e){i.seq.push(e),i.map[e.id]=e}function Xm(i,e,t){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),a=Da.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jl(t,l===void 0?new Vm(o,i,e):new Gm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Wm(o),jl(t,u)),t=u}}}class Is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Xm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $m=37297;let qm=0;function Ym(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zl=new Xe;function jm(i){it._getMatrix(Zl,it.workingColorSpace,i);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case ks:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ym(i.getShaderSource(e),o)}else return s}function Km(i,e){const t=jm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zm(i,e){let t;switch(e){case Uh:t="Linear";break;case Nh:t="Reinhard";break;case Fh:t="Cineon";break;case bc:t="ACESFilmic";break;case Oh:t="AgX";break;case Bh:t="Neutral";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new U;function Jm(){it.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function eg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Lr(i){return i!==""}function Ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(i){return i.replace(ng,rg)}const ig=new Map;function rg(i,e){let t=qe[e];if(t===void 0){const n=ig.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(i){return i.replace(sg,ag)}function ag(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function og(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function lg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case ar:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function hg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Ih:e="ENVMAP_BLENDING_ADD";break}return e}function ug(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=og(t),l=lg(t),h=cg(t),u=hg(t),d=ug(t),f=Qm(t),v=eg(s),g=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?qe.tonemapping_pars_fragment:"",t.toneMapping!==li?Zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),Jm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=wo(a),a=Ql(a,t),a=ec(a,t),o=wo(o),o=Ql(o,t),o=ec(o,t),a=tc(a),o=tc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,_=b+p+o,T=Kl(r,r.VERTEX_SHADER,w),y=Kl(r,r.FRAGMENT_SHADER,_);r.attachShader(g,T),r.attachShader(g,y),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(A){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(y)||"",z=D.trim(),V=O.trim(),q=I.trim();let G=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,T,y);else{const oe=Jl(r,T,"vertex"),le=Jl(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+oe+`
`+le)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||q==="")&&(Q=!1);Q&&(A.diagnostics={runnable:G,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(T),r.deleteShader(y),P=new Is(r,g),M=tg(r,g)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,$m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=y,this}let fg=0;class pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mg(e),t.set(e,n)),n}}class mg{constructor(e){this.id=fg++,this.code=e,this.usedTimes=0}}function gg(i,e,t,n,r,s,a){const o=new Vo,c=new pg,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,A,D,O){const I=D.fog,z=O.geometry,V=M.isMeshStandardMaterial?D.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),G=q&&q.mapping===Xs?q.image.height:null,Q=v[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=oe!==void 0?oe.length:0;let _e=0;z.morphAttributes.position!==void 0&&(_e=1),z.morphAttributes.normal!==void 0&&(_e=2),z.morphAttributes.color!==void 0&&(_e=3);let Le,Ne,De,K;if(Q){const je=Rn[Q];Le=je.vertexShader,Ne=je.fragmentShader}else Le=M.vertexShader,Ne=M.fragmentShader,c.update(M),De=c.getVertexShaderID(M),K=c.getFragmentShaderID(M);const J=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),we=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,Be=!!M.map,Rt=!!M.matcap,L=!!q,ft=!!M.aoMap,Ve=!!M.lightMap,Ie=!!M.bumpMap,xe=!!M.normalMap,ot=!!M.displacementMap,Se=!!M.emissiveMap,We=!!M.metalnessMap,St=!!M.roughnessMap,_t=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,H=M.iridescence>0,j=M.sheen>0,ee=M.transmission>0,Y=_t&&!!M.anisotropyMap,Ce=C&&!!M.clearcoatMap,ae=C&&!!M.clearcoatNormalMap,Re=C&&!!M.clearcoatRoughnessMap,ye=H&&!!M.iridescenceMap,ie=H&&!!M.iridescenceThicknessMap,ge=j&&!!M.sheenColorMap,Oe=j&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,he=!!M.specularColorMap,ze=!!M.specularIntensityMap,N=ee&&!!M.transmissionMap,ne=ee&&!!M.thicknessMap,ce=!!M.gradientMap,Ee=!!M.alphaMap,re=M.alphaTest>0,Z=!!M.alphaHash,Te=!!M.extensions;let He=li;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=i.toneMapping);const rt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Le,fragmentShader:Ne,defines:M.defines,customVertexShaderID:De,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:de,batchingColor:de&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:or,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:Rt,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:G,aoMap:ft,lightMap:Ve,bumpMap:Ie,normalMap:xe,displacementMap:d&&ot,emissiveMap:Se,normalMapObjectSpace:xe&&M.normalMapType===Gh,normalMapTangentSpace:xe&&M.normalMapType===Oo,metalnessMap:We,roughnessMap:St,anisotropy:_t,anisotropyMap:Y,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Re,dispersion:S,iridescence:H,iridescenceMap:ye,iridescenceThicknessMap:ie,sheen:j,sheenColorMap:ge,sheenRoughnessMap:Oe,specularMap:Ae,specularColorMap:he,specularIntensityMap:ze,transmission:ee,transmissionMap:N,thicknessMap:ne,gradientMap:ce,opaque:M.transparent===!1&&M.blending===tr&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:re,alphaHash:Z,combine:M.combine,mapUv:Be&&g(M.map.channel),aoMapUv:ft&&g(M.aoMap.channel),lightMapUv:Ve&&g(M.lightMap.channel),bumpMapUv:Ie&&g(M.bumpMap.channel),normalMapUv:xe&&g(M.normalMap.channel),displacementMapUv:ot&&g(M.displacementMap.channel),emissiveMapUv:Se&&g(M.emissiveMap.channel),metalnessMapUv:We&&g(M.metalnessMap.channel),roughnessMapUv:St&&g(M.roughnessMap.channel),anisotropyMapUv:Y&&g(M.anisotropyMap.channel),clearcoatMapUv:Ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(M.sheenRoughnessMap.channel),specularMapUv:Ae&&g(M.specularMap.channel),specularColorMapUv:he&&g(M.specularColorMap.channel),specularIntensityMapUv:ze&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:ne&&g(M.thicknessMap.channel),alphaMapUv:Ee&&g(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||_t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Be||Ee),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:_e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)x.push(A),x.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(b(x,M),w(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function w(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const x=v[M.type];let A;if(x){const D=Rn[x];A=Iu.clone(D.uniforms)}else A=M.uniforms;return A}function T(M,x){let A;for(let D=0,O=h.length;D<O;D++){const I=h[D];if(I.cacheKey===x){A=I,++A.usedTimes;break}}return A===void 0&&(A=new dg(i,x,M,s),h.push(A)),A}function y(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:y,releaseShaderCache:R,programs:h,dispose:P}}function _g(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ic(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,d,f,v,g,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,v,g,m){const p=a(u,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,d,f,v,g,m){const p=a(u,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||vg),n.length>1&&n.sort(d||ic),r.length>1&&r.sort(d||ic)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function xg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new rc,i.set(n,[a])):r>=s.length?(a=new rc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yg=0;function Eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bg(i){const e=new Mg,t=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const r=new U,s=new ut,a=new ut;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,b=0,w=0,_=0,T=0,y=0,R=0;l.sort(Eg);for(let M=0,x=l.length;M<x;M++){const A=l[M],D=A.color,O=A.intensity,I=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],O);R++}else if(A.isDirectionalLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const q=A.shadow,G=t.get(A);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=V,f++}else if(A.isSpotLight){const V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(D).multiplyScalar(O),V.distance=I,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[g]=V;const q=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,q.updateMatrices(A),A.castShadow&&y++),n.spotLightMatrix[g]=q.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=z,_++}g++}else if(A.isRectAreaLight){const V=e.get(A);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const q=A.shadow,G=t.get(A);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=z,n.pointShadowMatrix[v]=A.shadow.matrix,w++}n.point[v]=V,v++}else if(A.isHemisphereLight){const V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(O),V.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=_+T-y,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,P.directionalLength=f,P.pointLength=v,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=R,n.version=yg++)}function c(l,h){let u=0,d=0,f=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const w=l[p];if(w.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function sc(i){const e=new bg(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function wg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sc(i),e.set(r,[o])):s>=a.length?(o=new sc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Rg(i,e,t){let n=new Go;const r=new Je,s=new Je,a=new ht,o=new qu({depthPacking:Vh}),c=new Yu,l={},h=t.maxTextureSize,u={[ci]:Jt,[Jt]:ci,[Xn]:Xn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Ag,fragmentShader:Tg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new En;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let p=this.type;this.render=function(y,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==Hn&&this.type===Hn,I=p===Hn&&this.type!==Hn;for(let z=0,V=y.length;z<V;z++){const q=y[z],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Q=G.getFrameExtents();if(r.multiply(Q),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,G.mapSize.y=s.y)),G.map===null||O===!0||I===!0){const le=this.type!==Hn?{minFilter:ln,magFilter:ln}:{};G.map!==null&&G.map.dispose(),G.map=new bi(r.x,r.y,le),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const oe=G.getViewportCount();for(let le=0;le<oe;le++){const _e=G.getViewport(le);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),D.viewport(a),G.updateMatrices(q,le),n=G.getFrustum(),_(R,P,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&b(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,A)};function b(y,R){const P=e.update(g);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new bi(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,g,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,P,f,g,null)}function w(y,R,P,M){let x=null;const A=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)x=A;else if(x=P.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=x.uuid,O=R.uuid;let I=l[D];I===void 0&&(I={},l[D]=I);let z=I[O];z===void 0&&(z=x.clone(),I[O]=z,R.addEventListener("dispose",T)),x=z}if(x.visible=R.visible,x.wireframe=R.wireframe,M===Hn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=P}return x}function _(y,R,P,M,x){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Hn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const O=e.update(y),I=y.material;if(Array.isArray(I)){const z=O.groups;for(let V=0,q=z.length;V<q;V++){const G=z[V],Q=I[G.materialIndex];if(Q&&Q.visible){const oe=w(y,Q,M,x);y.onBeforeShadow(i,y,R,P,O,oe,G),i.renderBufferDirect(P,null,O,oe,y,G),y.onAfterShadow(i,y,R,P,O,oe,G)}}}else if(I.visible){const z=w(y,I,M,x);y.onBeforeShadow(i,y,R,P,O,z,null),i.renderBufferDirect(P,null,O,z,y,null),y.onAfterShadow(i,y,R,P,O,z,null)}}const D=y.children;for(let O=0,I=D.length;O<I;O++)_(D[O],R,P,M,x)}function T(y){y.target.removeEventListener("dispose",T);for(const P in l){const M=l[P],x=y.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Cg={[Ba]:za,[Ha]:Wa,[Va]:Xa,[rr]:Ga,[za]:Ba,[Wa]:Ha,[Xa]:Va,[Ga]:rr};function Pg(i,e){function t(){let N=!1;const ne=new ht;let ce=null;const Ee=new ht(0,0,0,0);return{setMask:function(re){ce!==re&&!N&&(i.colorMask(re,re,re,re),ce=re)},setLocked:function(re){N=re},setClear:function(re,Z,Te,He,rt){rt===!0&&(re*=He,Z*=He,Te*=He),ne.set(re,Z,Te,He),Ee.equals(ne)===!1&&(i.clearColor(re,Z,Te,He),Ee.copy(ne))},reset:function(){N=!1,ce=null,Ee.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,ce=null,Ee=null,re=null;return{setReversed:function(Z){if(ne!==Z){const Te=e.get("EXT_clip_control");Z?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ne=Z;const He=re;re=null,this.setClear(He)}},getReversed:function(){return ne},setTest:function(Z){Z?J(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Z){ce!==Z&&!N&&(i.depthMask(Z),ce=Z)},setFunc:function(Z){if(ne&&(Z=Cg[Z]),Ee!==Z){switch(Z){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Z}},setLocked:function(Z){N=Z},setClear:function(Z){re!==Z&&(ne&&(Z=1-Z),i.clearDepth(Z),re=Z)},reset:function(){N=!1,ce=null,Ee=null,re=null,ne=!1}}}function r(){let N=!1,ne=null,ce=null,Ee=null,re=null,Z=null,Te=null,He=null,rt=null;return{setTest:function(je){N||(je?J(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!N&&(i.stencilMask(je),ne=je)},setFunc:function(je,hn,tn){(ce!==je||Ee!==hn||re!==tn)&&(i.stencilFunc(je,hn,tn),ce=je,Ee=hn,re=tn)},setOp:function(je,hn,tn){(Z!==je||Te!==hn||He!==tn)&&(i.stencilOp(je,hn,tn),Z=je,Te=hn,He=tn)},setLocked:function(je){N=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){N=!1,ne=null,ce=null,Ee=null,re=null,Z=null,Te=null,He=null,rt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,b=null,w=null,_=null,T=null,y=null,R=new Ge(0,0,0),P=0,M=!1,x=null,A=null,D=null,O=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let Q=null,oe={};const le=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Le=new ht().fromArray(le),Ne=new ht().fromArray(_e);function De(N,ne,ce,Ee){const re=new Uint8Array(4),Z=i.createTexture();i.bindTexture(N,Z),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<ce;Te++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ne+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Z}const K={};K[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(rr),Ie(!1),xe(Qo),J(i.CULL_FACE),ft(oi);function J(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function be(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function we(N,ne){return u[N]!==ne?(i.bindFramebuffer(N,ne),u[N]=ne,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function de(N,ne){let ce=f,Ee=!1;if(N){ce=d.get(ne),ce===void 0&&(ce=[],d.set(ne,ce));const re=N.textures;if(ce.length!==re.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Te=re.length;Z<Te;Z++)ce[Z]=i.COLOR_ATTACHMENT0+Z;ce.length=re.length,Ee=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ce)}function Be(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const Rt={[vi]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};Rt[_h]=i.MIN,Rt[vh]=i.MAX;const L={[xh]:i.ZERO,[Mh]:i.ONE,[Sh]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[wh]:i.DST_COLOR,[Eh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Ah]:i.ONE_MINUS_DST_COLOR,[bh]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Lh]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(N,ne,ce,Ee,re,Z,Te,He,rt,je){if(N===oi){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),N!==ph){if(N!==m||je!==M){if((p!==vi||_!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,_=vi),je)switch(N){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,w=null,T=null,y=null,R.set(0,0,0),P=0,m=N,M=je}return}re=re||ne,Z=Z||ce,Te=Te||Ee,(ne!==p||re!==_)&&(i.blendEquationSeparate(Rt[ne],Rt[re]),p=ne,_=re),(ce!==b||Ee!==w||Z!==T||Te!==y)&&(i.blendFuncSeparate(L[ce],L[Ee],L[Z],L[Te]),b=ce,w=Ee,T=Z,y=Te),(He.equals(R)===!1||rt!==P)&&(i.blendColor(He.r,He.g,He.b,rt),R.copy(He),P=rt),m=N,M=!1}function Ve(N,ne){N.side===Xn?be(i.CULL_FACE):J(i.CULL_FACE);let ce=N.side===Jt;ne&&(ce=!ce),Ie(ce),N.blending===tr&&N.transparent===!1?ft(oi):ft(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ee=N.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function xe(N){N!==dh?(J(i.CULL_FACE),N!==A&&(N===Qo?i.cullFace(i.BACK):N===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),A=N}function ot(N){N!==D&&(V&&i.lineWidth(N),D=N)}function Se(N,ne,ce){N?(J(i.POLYGON_OFFSET_FILL),(O!==ne||I!==ce)&&(i.polygonOffset(ne,ce),O=ne,I=ce)):be(i.POLYGON_OFFSET_FILL)}function We(N){N?J(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function St(N){N===void 0&&(N=i.TEXTURE0+z-1),Q!==N&&(i.activeTexture(N),Q=N)}function _t(N,ne,ce){ce===void 0&&(Q===null?ce=i.TEXTURE0+z-1:ce=Q);let Ee=oe[ce];Ee===void 0&&(Ee={type:void 0,texture:void 0},oe[ce]=Ee),(Ee.type!==N||Ee.texture!==ne)&&(Q!==ce&&(i.activeTexture(ce),Q=ce),i.bindTexture(N,ne||K[N]),Ee.type=N,Ee.texture=ne)}function C(){const N=oe[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function Oe(N){Ne.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ne.copy(N))}function Ae(N,ne){let ce=l.get(ne);ce===void 0&&(ce=new WeakMap,l.set(ne,ce));let Ee=ce.get(N);Ee===void 0&&(Ee=i.getUniformBlockIndex(ne,N.name),ce.set(N,Ee))}function he(N,ne){const Ee=l.get(ne).get(N);c.get(ne)!==Ee&&(i.uniformBlockBinding(ne,Ee,N.__bindingPointIndex),c.set(ne,Ee))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,oe={},u={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,b=null,w=null,_=null,T=null,y=null,R=new Ge(0,0,0),P=0,M=!1,x=null,A=null,D=null,O=null,I=null,Le.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:be,bindFramebuffer:we,drawBuffers:de,useProgram:Be,setBlending:ft,setMaterial:Ve,setFlipSided:Ie,setCullFace:xe,setLineWidth:ot,setPolygonOffset:Se,setScissorTest:We,activeTexture:St,bindTexture:_t,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:ye,texImage3D:ie,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:Re,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:ge,viewport:Oe,reset:ze}}function Lg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return f?new OffscreenCanvas(C,S):Hr("canvas")}function g(C,S,H){let j=1;const ee=_t(C);if((ee.width>H||ee.height>H)&&(j=H/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(j*ee.width),Ce=Math.floor(j*ee.height);u===void 0&&(u=v(Y,Ce));const ae=S?v(Y,Ce):u;return ae.width=Y,ae.height=Ce,ae.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ce+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,S,H,j,ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),S===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),S===i.RGBA){const Ce=ee?ks:it.getTransfer(j);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=Ce===ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(C,S){let H;return C?S===null||S===Ei||S===kr?H=i.DEPTH24_STENCIL8:S===Pn?H=i.DEPTH32F_STENCIL8:S===Fr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===kr?H=i.DEPTH_COMPONENT24:S===Pn?H=i.DEPTH_COMPONENT32F:S===Fr&&(H=i.DEPTH_COMPONENT16),H}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function y(C){const S=C.target;S.removeEventListener("dispose",y),P(S),S.isVideoTexture&&h.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),x(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const H=C.source,j=d.get(H);if(j){const ee=j[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(C),Object.keys(j).length===0&&d.delete(H)}n.remove(C)}function M(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const H=C.source,j=d.get(H);delete j[S.__cacheKey],a.memory.textures--}function x(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ee=0;ee<S.__webglFramebuffer[j].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[j][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=C.textures;for(let j=0,ee=H.length;j<ee;j++){const Y=n.get(H[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(C)}let A=0;function D(){A=0}function O(){const C=A;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),A+=1,C}function I(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function z(C,S){const H=n.get(C);if(C.isVideoTexture&&We(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,C,S);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function V(C,S){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){K(H,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function q(C,S){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){K(H,C,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function G(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const Q={[Ns]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},oe={[ln]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Js]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},le={[Wh]:i.NEVER,[Kh]:i.ALWAYS,[Xh]:i.LESS,[Ic]:i.LEQUAL,[$h]:i.EQUAL,[jh]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function _e(C,S){if(S.type===Pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===Js||S.magFilter===jr||S.magFilter===Si||S.minFilter===Cn||S.minFilter===Js||S.minFilter===jr||S.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==jr&&S.minFilter!==Si||S.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Le(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",y));const j=S.source;let ee=d.get(j);ee===void 0&&(ee={},d.set(j,ee));const Y=I(S);if(Y!==C.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[Y].usedTimes++;const Ce=ee[C.__cacheKey];Ce!==void 0&&(ee[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(S)),C.__cacheKey=Y,C.__webglTexture=ee[Y].texture}return H}function Ne(C,S,H){return Math.floor(Math.floor(C/H)/S)}function De(C,S,H,j){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,j,S.data);else{Y.sort((ie,ge)=>ie.start-ge.start);let Ce=0;for(let ie=1;ie<Y.length;ie++){const ge=Y[Ce],Oe=Y[ie],Ae=ge.start+ge.count,he=Ne(Oe.start,S.width,4),ze=Ne(ge.start,S.width,4);Oe.start<=Ae+1&&he===ze&&Ne(Oe.start+Oe.count-1,S.width,4)===he?ge.count=Math.max(ge.count,Oe.start+Oe.count-ge.start):(++Ce,Y[Ce]=Oe)}Y.length=Ce+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ge=Y.length;ie<ge;ie++){const Oe=Y[ie],Ae=Math.floor(Oe.start/4),he=Math.ceil(Oe.count/4),ze=Ae%S.width,N=Math.floor(Ae/S.width),ne=he,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ze,N,ne,ce,H,j,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function K(C,S,H){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const ee=Le(C,S),Y=S.source;t.bindTexture(j,C.__webglTexture,i.TEXTURE0+H);const Ce=n.get(Y);if(Y.version!==Ce.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const ae=it.getPrimaries(it.workingColorSpace),Re=S.colorSpace===ai?null:it.getPrimaries(S.colorSpace),ye=S.colorSpace===ai||ae===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ie=g(S.image,!1,r.maxTextureSize);ie=St(S,ie);const ge=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type);let Ae=w(S.internalFormat,ge,Oe,S.colorSpace,S.isVideoTexture);_e(j,S);let he;const ze=S.mipmaps,N=S.isVideoTexture!==!0,ne=Ce.__version===void 0||ee===!0,ce=Y.dataReady,Ee=T(S,ie);if(S.isDepthTexture)Ae=_(S.format===Br,S.type),ne&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,ge,Oe,null));else if(S.isDataTexture)if(ze.length>0){N&&ne&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ze[0].width,ze[0].height);for(let re=0,Z=ze.length;re<Z;re++)he=ze[re],N?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,he.width,he.height,ge,Oe,he.data):t.texImage2D(i.TEXTURE_2D,re,Ae,he.width,he.height,0,ge,Oe,he.data);S.generateMipmaps=!1}else N?(ne&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ie.width,ie.height),ce&&De(S,ie,ge,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,ge,Oe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ae,ze[0].width,ze[0].height,ie.depth);for(let re=0,Z=ze.length;re<Z;re++)if(he=ze[re],S.format!==Sn)if(ge!==null)if(N){if(ce)if(S.layerUpdates.size>0){const Te=Fl(he.width,he.height,S.format,S.type);for(const He of S.layerUpdates){const rt=he.data.subarray(He*Te/he.data.BYTES_PER_ELEMENT,(He+1)*Te/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,He,he.width,he.height,1,ge,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,ie.depth,ge,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ae,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,ie.depth,ge,Oe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ae,he.width,he.height,ie.depth,0,ge,Oe,he.data)}else{N&&ne&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ze[0].width,ze[0].height);for(let re=0,Z=ze.length;re<Z;re++)he=ze[re],S.format!==Sn?ge!==null?N?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,he.width,he.height,ge,he.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ae,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,he.width,he.height,ge,Oe,he.data):t.texImage2D(i.TEXTURE_2D,re,Ae,he.width,he.height,0,ge,Oe,he.data)}else if(S.isDataArrayTexture)if(N){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ae,ie.width,ie.height,ie.depth),ce)if(S.layerUpdates.size>0){const re=Fl(ie.width,ie.height,S.format,S.type);for(const Z of S.layerUpdates){const Te=ie.data.subarray(Z*re/ie.data.BYTES_PER_ELEMENT,(Z+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ge,Oe,Te)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Oe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,ge,Oe,ie.data);else if(S.isData3DTexture)N?(ne&&t.texStorage3D(i.TEXTURE_3D,Ee,Ae,ie.width,ie.height,ie.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Oe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,ge,Oe,ie.data);else if(S.isFramebufferTexture){if(ne)if(N)t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ie.width,ie.height);else{let re=ie.width,Z=ie.height;for(let Te=0;Te<Ee;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ae,re,Z,0,ge,Oe,null),re>>=1,Z>>=1}}else if(ze.length>0){if(N&&ne){const re=_t(ze[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ae,re.width,re.height)}for(let re=0,Z=ze.length;re<Z;re++)he=ze[re],N?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge,Oe,he):t.texImage2D(i.TEXTURE_2D,re,Ae,ge,Oe,he);S.generateMipmaps=!1}else if(N){if(ne){const re=_t(ie);t.texStorage2D(i.TEXTURE_2D,Ee,Ae,re.width,re.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Oe,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ge,Oe,ie);m(S)&&p(j),Ce.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function J(C,S,H){if(S.image.length!==6)return;const j=Le(C,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const Y=n.get(ee);if(ee.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+H);const Ce=it.getPrimaries(it.workingColorSpace),ae=S.colorSpace===ai?null:it.getPrimaries(S.colorSpace),Re=S.colorSpace===ai||Ce===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!ye&&!ie?ge[Z]=g(S.image[Z],!0,r.maxCubemapSize):ge[Z]=ie?S.image[Z].image:S.image[Z],ge[Z]=St(S,ge[Z]);const Oe=ge[0],Ae=s.convert(S.format,S.colorSpace),he=s.convert(S.type),ze=w(S.internalFormat,Ae,he,S.colorSpace),N=S.isVideoTexture!==!0,ne=Y.__version===void 0||j===!0,ce=ee.dataReady;let Ee=T(S,Oe);_e(i.TEXTURE_CUBE_MAP,S);let re;if(ye){N&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ze,Oe.width,Oe.height);for(let Z=0;Z<6;Z++){re=ge[Z].mipmaps;for(let Te=0;Te<re.length;Te++){const He=re[Te];S.format!==Sn?Ae!==null?N?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,0,0,He.width,He.height,Ae,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,ze,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,0,0,He.width,He.height,Ae,he,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,ze,He.width,He.height,0,Ae,he,He.data)}}}else{if(re=S.mipmaps,N&&ne){re.length>0&&Ee++;const Z=_t(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){N?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Ae,he,ge[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ge[Z].width,ge[Z].height,0,Ae,he,ge[Z].data);for(let Te=0;Te<re.length;Te++){const rt=re[Te].image[Z].image;N?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,0,0,rt.width,rt.height,Ae,he,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,ze,rt.width,rt.height,0,Ae,he,rt.data)}}else{N?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,he,ge[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ae,he,ge[Z]);for(let Te=0;Te<re.length;Te++){const He=re[Te];N?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,0,0,Ae,he,He.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,ze,Ae,he,He.image[Z])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function be(C,S,H,j,ee,Y){const Ce=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),Re=w(H.internalFormat,Ce,ae,H.colorSpace),ye=n.get(S),ie=n.get(H);if(ie.__renderTarget=S,!ye.__hasExternalTextures){const ge=Math.max(1,S.width>>Y),Oe=Math.max(1,S.height>>Y);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,Re,ge,Oe,S.depth,0,Ce,ae,null):t.texImage2D(ee,Y,Re,ge,Oe,0,Ce,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ee,ie.__webglTexture,0,ot(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ee,ie.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(C,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Y=_(S.stencilBuffer,ee),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=ot(S);Se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Y,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,C)}else{const j=S.textures;for(let ee=0;ee<j.length;ee++){const Y=j[ee],Ce=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),Re=w(Y.internalFormat,Ce,ae,Y.colorSpace),ye=ot(S);H&&Se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Re,S.width,S.height):Se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const ee=j.__webglTexture,Y=ot(S);if(S.depthTexture.format===Or)Se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Br)Se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Be(C){const S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const j=C.texture.mipmaps;j&&j.length>0?de(S.__webglFramebuffer[0],C):de(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),we(S.__webglDepthbuffer[j],C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),we(S.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(C,S,H){const j=n.get(C);S!==void 0&&be(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Be(C)}function L(C){const S=C.texture,H=n.get(C),j=n.get(S);C.addEventListener("dispose",R);const ee=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let Re=0;Re<S.mipmaps.length;Re++)H.__webglFramebuffer[ae][Re]=i.createFramebuffer()}else H.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)H.__webglFramebuffer[ae]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ae=0,Re=ee.length;ae<Re;ae++){const ye=n.get(ee[ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Se(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const Re=ee[ae];H.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);const ye=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),ge=w(Re.internalFormat,ye,ie,Re.colorSpace,C.isXRRenderTarget===!0),Oe=ot(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ge,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),we(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),_e(i.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)be(H.__webglFramebuffer[ae][Re],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re);else be(H.__webglFramebuffer[ae],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,Re=ee.length;ae<Re;ae++){const ye=ee[ae],ie=n.get(ye);let ge=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ie.__webglTexture),_e(ge,ye),be(H.__webglFramebuffer,C,ye,i.COLOR_ATTACHMENT0+ae,ge,0),m(ye)&&p(ge)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),_e(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)be(H.__webglFramebuffer[Re],C,S,i.COLOR_ATTACHMENT0,ae,Re);else be(H.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}C.depthBuffer&&Be(C)}function ft(C){const S=C.textures;for(let H=0,j=S.length;H<j;H++){const ee=S[H];if(m(ee)){const Y=b(C),Ce=n.get(ee).__webglTexture;t.bindTexture(Y,Ce),p(Y),t.unbindTexture()}}}const Ve=[],Ie=[];function xe(C){if(C.samples>0){if(Se(C)===!1){const S=C.textures,H=C.width,j=C.height;let ee=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(C),ae=S.length>1;if(ae)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const ie=n.get(S[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,ee,i.NEAREST),c===!0&&(Ve.length=0,Ie.length=0,Ve.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ve.push(Y),Ie.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const ie=n.get(S[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ot(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function St(C,S){const H=C.colorSpace,j=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==or&&H!==ai&&(it.getTransfer(H)===ct?(j!==Sn||ee!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function _t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Rt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Se}function Dg(i,e){function t(n,r=ai){let s;const a=it.getTransfer(r);if(n===In)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Gr)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Or)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Dc)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===Cs||n===Ps||n===Ls||n===Ds)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===ja||n===Ka||n===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ja||n===Qa)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===to)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===_o||n===vo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===go)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===Mo||n===So||n===yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:Ig,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends hr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,v=null;const g=typeof XRWebGLBinding<"u",m=new Ng,p={},b=t.getContextAttributes();let w=null,_=null;const T=[],y=[],R=new Je;let P=null;const M=new on;M.viewport=new ht;const x=new on;x.viewport=new ht;const A=[M,x],D=new nd;let O=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=T[K];return J===void 0&&(J=new Ma,T[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=T[K];return J===void 0&&(J=new Ma,T[K]=J),J.getGripSpace()},this.getHand=function(K){let J=T[K];return J===void 0&&(J=new Ma,T[K]=J),J.getHandSpace()};function z(K){const J=y.indexOf(K.inputSource);if(J===-1)return;const be=T[J];be!==void 0&&(be.update(K.inputSource,K.frame,l||a),be.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",q);for(let K=0;K<T.length;K++){const J=y[K];J!==null&&(y[K]=null,T[K].disconnect(J))}O=null,I=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(w),f=null,d=null,u=null,r=null,_=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,we=null,de=null;b.depth&&(de=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=b.stencil?Br:Or,we=b.stencil?kr:Ei);const Be={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new bi(d.textureWidth,d.textureHeight,{format:Sn,type:In,depthTexture:new Xc(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new bi(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(K){for(let J=0;J<K.removed.length;J++){const be=K.removed[J],we=y.indexOf(be);we>=0&&(y[we]=null,T[we].disconnect(be))}for(let J=0;J<K.added.length;J++){const be=K.added[J];let we=y.indexOf(be);if(we===-1){for(let Be=0;Be<T.length;Be++)if(Be>=y.length){y.push(be),we=Be;break}else if(y[Be]===null){y[Be]=be,we=Be;break}if(we===-1)break}const de=T[we];de&&de.connect(be)}}const G=new U,Q=new U;function oe(K,J,be){G.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const we=G.distanceTo(Q),de=J.projectionMatrix.elements,Be=be.projectionMatrix.elements,Rt=de[14]/(de[10]-1),L=de[14]/(de[10]+1),ft=(de[9]+1)/de[5],Ve=(de[9]-1)/de[5],Ie=(de[8]-1)/de[0],xe=(Be[8]+1)/Be[0],ot=Rt*Ie,Se=Rt*xe,We=we/(-Ie+xe),St=We*-Ie;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),de[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=Rt+We,C=L+We,S=ot-St,H=Se+(we-St),j=ft*L/C*_t,ee=Ve*L/C*_t;K.projectionMatrix.makePerspective(S,H,j,ee,_t,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let J=K.near,be=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(be=m.depthFar)),D.near=x.near=M.near=J,D.far=x.far=M.far=be,(O!==D.near||I!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,I=D.far),D.layers.mask=K.layers.mask|6,M.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;const we=K.parent,de=D.cameras;le(D,we);for(let Be=0;Be<de.length;Be++)le(de[Be],we);de.length===2?oe(D,M,x):D.projectionMatrix.copy(M.projectionMatrix),_e(K,D,we)};function _e(K,J,be){be===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let Le=null;function Ne(K,J){if(h=J.getViewerPose(l||a),v=J,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let we=!1;be.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let L=0;L<be.length;L++){const ft=be[L];let Ve=null;if(f!==null)Ve=f.getViewport(ft);else{const xe=u.getViewSubImage(d,ft);Ve=xe.viewport,L===0&&(e.setRenderTargetTextures(_,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(_))}let Ie=A[L];Ie===void 0&&(Ie=new on,Ie.layers.enable(L),Ie.viewport=new ht,A[L]=Ie),Ie.matrix.fromArray(ft.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ft.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),L===0&&(D.matrix.copy(Ie.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(Ie)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const L=u.getDepthInformation(be[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(de&&de.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<be.length;L++){const ft=be[L].camera;if(ft){let Ve=p[ft];Ve||(Ve=new $c,p[ft]=Ve);const Ie=u.getCameraImage(ft);Ve.sourceTexture=Ie}}}}for(let be=0;be<T.length;be++){const we=y[be],de=T[be];we!==null&&de!==void 0&&de.update(we,J,l||a)}Le&&Le(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const De=new Jc;De.setAnimationLoop(Ne),this.setAnimationLoop=function(K){Le=K},this.dispose=function(){}}}const gi=new yn,kg=new ut;function Og(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(gi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Bg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){const _=w.program;n.uniformBlockBinding(b,_)}function l(b,w){let _=r[b.id];_===void 0&&(v(b),_=h(b),r[b.id]=_,b.addEventListener("dispose",m));const T=w.program;n.updateUBOMapping(b,T);const y=e.render.frame;s[b.id]!==y&&(d(b),s[b.id]=y)}function h(b){const w=u();b.__bindingPointIndex=w;const _=i.createBuffer(),T=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=r[b.id],_=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,R=_.length;y<R;y++){const P=Array.isArray(_[y])?_[y]:[_[y]];for(let M=0,x=P.length;M<x;M++){const A=P[M];if(f(A,y,M,T)===!0){const D=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let I=0;for(let z=0;z<O.length;z++){const V=O[z],q=g(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+I,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,_,T){const y=b.value,R=w+"_"+_;if(T[R]===void 0)return typeof y=="number"||typeof y=="boolean"?T[R]=y:T[R]=y.clone(),!0;{const P=T[R];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return T[R]=y,!0}else if(P.equals(y)===!1)return P.copy(y),!0}return!1}function v(b){const w=b.uniforms;let _=0;const T=16;for(let R=0,P=w.length;R<P;R++){const M=Array.isArray(w[R])?w[R]:[w[R]];for(let x=0,A=M.length;x<A;x++){const D=M[x],O=Array.isArray(D.value)?D.value:[D.value];for(let I=0,z=O.length;I<z;I++){const V=O[I],q=g(V),G=_%T,Q=G%q.boundary,oe=G+Q;_+=Q,oe!==0&&T-oe<q.storage&&(_+=T-oe),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=q.storage}}}const y=_%T;return y>0&&(_+=T-y),b.__size=_,b.__cache={},this}function g(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const _=a.indexOf(w.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class zg{constructor(e={}){const{canvas:t=fu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Ot;let y=0,R=0,P=null,M=-1,x=null;const A=new ht,D=new ht;let O=null;const I=new Ge(0);let z=0,V=t.width,q=t.height,G=1,Q=null,oe=null;const le=new ht(0,0,V,q),_e=new ht(0,0,V,q);let Le=!1;const Ne=new Go;let De=!1,K=!1;const J=new ut,be=new U,we=new ht,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Rt(){return P===null?G:1}let L=n;function ft(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",re,!1),L===null){const k="webgl2";if(L=ft(k,E),L===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Ie,xe,ot,Se,We,St,_t,C,S,H,j,ee,Y,Ce,ae,Re,ye,ie,ge,Oe,Ae,he,ze;function N(){Ve=new Kp(L),Ve.init(),Ae=new Dg(L,Ve),Ie=new Gp(L,Ve,e,Ae),xe=new Pg(L,Ve),Ie.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),ot=new Qp(L),Se=new _g,We=new Lg(L,Ve,xe,Se,Ie,Ae,ot),St=new Xp(_),_t=new jp(_),C=new rd(L),he=new Hp(L,C),S=new Zp(L,C,ot,he),H=new tm(L,S,C,ot),ie=new em(L,Ie,We),ae=new Wp(Se),j=new gg(_,St,_t,Ve,Ie,he,ae),ee=new Og(_,Se),Y=new xg,Ce=new wg(Ve),ye=new zp(_,St,_t,xe,H,f,c),Re=new Rg(_,H,Ie),ze=new Bg(L,ot,Ie,xe),ge=new Vp(L,Ve,ot),Oe=new Jp(L,Ve,ot),ot.programs=j.programs,_.capabilities=Ie,_.extensions=Ve,_.properties=Se,_.renderLists=Y,_.shadowMap=Re,_.state=xe,_.info=ot}N();const ne=new Fg(_,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(V,q,!1))},this.getSize=function(E){return E.set(V,q)},this.setSize=function(E,k,X=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,q=k,t.width=Math.floor(E*G),t.height=Math.floor(k*G),X===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(V*G,q*G).floor()},this.setDrawingBufferSize=function(E,k,X){V=E,q=k,G=X,t.width=Math.floor(E*X),t.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,k,X,$){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,k,X,$),xe.viewport(A.copy(le).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(_e)},this.setScissor=function(E,k,X,$){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,k,X,$),xe.scissor(D.copy(_e).multiplyScalar(G).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){xe.setScissorTest(Le=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,X=!0){let $=0;if(E){let B=!1;if(P!==null){const se=P.texture.format;B=se===ko||se===Fo||se===No}if(B){const se=P.texture.type,fe=se===In||se===Ei||se===Fr||se===kr||se===Do||se===Io,ve=ye.getClearColor(),pe=ye.getClearAlpha(),Fe=ve.r,ke=ve.g,Pe=ve.b;fe?(v[0]=Fe,v[1]=ke,v[2]=Pe,v[3]=pe,L.clearBufferuiv(L.COLOR,0,v)):(g[0]=Fe,g[1]=ke,g[2]=Pe,g[3]=pe,L.clearBufferiv(L.COLOR,0,g))}else $|=L.COLOR_BUFFER_BIT}k&&($|=L.DEPTH_BUFFER_BIT),X&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ye.dispose(),Y.dispose(),Ce.dispose(),Se.dispose(),St.dispose(),_t.dispose(),H.dispose(),he.dispose(),ze.dispose(),j.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",tn),ne.removeEventListener("sessionend",Xr),Un.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=ot.autoReset,k=Re.enabled,X=Re.autoUpdate,$=Re.needsUpdate,B=Re.type;N(),ot.autoReset=E,Re.enabled=k,Re.autoUpdate=X,Re.needsUpdate=$,Re.type=B}function re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){const k=E.target;k.removeEventListener("dispose",Z),Te(k)}function Te(E){He(E),Se.remove(E)}function He(E){const k=Se.get(E).programs;k!==void 0&&(k.forEach(function(X){j.releaseProgram(X)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,$,B,se){k===null&&(k=de);const fe=B.isMesh&&B.matrixWorld.determinant()<0,ve=$r(E,k,X,$,B);xe.setMaterial($,fe);let pe=X.index,Fe=1;if($.wireframe===!0){if(pe=S.getWireframeAttribute(X),pe===void 0)return;Fe=2}const ke=X.drawRange,Pe=X.attributes.position;let Ye=ke.start*Fe,Qe=(ke.start+ke.count)*Fe;se!==null&&(Ye=Math.max(Ye,se.start*Fe),Qe=Math.min(Qe,(se.start+se.count)*Fe)),pe!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,pe.count)):Pe!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Pe.count));const dt=Qe-Ye;if(dt<0||dt===1/0)return;he.setup(B,$,ve,X,pe);let lt,st=ge;if(pe!==null&&(lt=C.get(pe),st=Oe,st.setIndex(lt)),B.isMesh)$.wireframe===!0?(xe.setLineWidth($.wireframeLinewidth*Rt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(B.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),xe.setLineWidth(Ue*Rt()),B.isLineSegments?st.setMode(L.LINES):B.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else B.isPoints?st.setMode(L.POINTS):B.isSprite&&st.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,at=B._multiDrawCounts,et=B._multiDrawCount,Wt=pe?C.get(pe).bytesPerElement:1,Yn=Se.get($).currentProgram.getUniforms();for(let zt=0;zt<et;zt++)Yn.setValue(L,"_gl_DrawID",zt),st.render(Ue[zt]/Wt,at[zt])}else if(B.isInstancedMesh)st.renderInstances(Ye,dt,B.count);else if(X.isInstancedBufferGeometry){const Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,at=Math.min(X.instanceCount,Ue);st.renderInstances(Ye,dt,at)}else st.render(Ye,dt)};function rt(E,k,X){E.transparent===!0&&E.side===Xn&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,Ci(E,k,X),E.side=ci,E.needsUpdate=!0,Ci(E,k,X),E.side=Xn):Ci(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),p=Ce.get(X),p.init(k),w.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const $=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const se=B.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ve=se[fe];rt(ve,X,B),$.add(ve)}else rt(se,X,B),$.add(se)}),p=w.pop(),$},this.compileAsync=function(E,k,X=null){const $=this.compile(E,k,X);return new Promise(B=>{function se(){if($.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&$.delete(fe)}),$.size===0){B(E);return}setTimeout(se,10)}Ve.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let je=null;function hn(E){je&&je(E)}function tn(){Un.stop()}function Xr(){Un.start()}const Un=new Jc;Un.setAnimationLoop(hn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(E){je=E,ne.setAnimationLoop(E),E===null?Un.stop():Un.start()},ne.addEventListener("sessionstart",tn),ne.addEventListener("sessionend",Xr),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,P),p=Ce.get(E,w.length),p.init(k),w.push(p),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ne.setFromProjectionMatrix(J,Ln,k.reversedDepth),K=this.localClippingEnabled,De=ae.init(this.clippingPlanes,K),m=Y.get(E,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Ti(se,k,-1/0,_.sortObjects)}Ti(E,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,oe),Be=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Be&&ye.addToRenderList(m,E),this.info.render.frame++,De===!0&&ae.beginShadows();const X=p.state.shadowsArray;Re.render(X,E,k),De===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const se=k.cameras;if(B.length>0)for(let fe=0,ve=se.length;fe<ve;fe++){const pe=se[fe];pr($,B,E,pe)}Be&&ye.render(E);for(let fe=0,ve=se.length;fe<ve;fe++){const pe=se[fe];Ri(m,E,pe,pe.viewport)}}else B.length>0&&pr($,B,E,k),Be&&ye.render(E),Ri(m,E,k);P!==null&&R===0&&(We.updateMultisampleRenderTarget(P),We.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,k),he.resetDefaultState(),M=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],De===!0&&ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ti(E,k,X,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ne.intersectsSprite(E)){$&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const fe=H.update(E),ve=E.material;ve.visible&&m.push(E,fe,ve,X,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ne.intersectsObject(E))){const fe=H.update(E),ve=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),we.copy(fe.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(J)),Array.isArray(ve)){const pe=fe.groups;for(let Fe=0,ke=pe.length;Fe<ke;Fe++){const Pe=pe[Fe],Ye=ve[Pe.materialIndex];Ye&&Ye.visible&&m.push(E,fe,Ye,X,we.z,Pe)}}else ve.visible&&m.push(E,fe,ve,X,we.z,null)}}const se=E.children;for(let fe=0,ve=se.length;fe<ve;fe++)Ti(se[fe],k,X,$)}function Ri(E,k,X,$){const B=E.opaque,se=E.transmissive,fe=E.transparent;p.setupLightsView(X),De===!0&&ae.setGlobalState(_.clippingPlanes,X),$&&xe.viewport(A.copy($)),B.length>0&&qn(B,k,X),se.length>0&&qn(se,k,X),fe.length>0&&qn(fe,k,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function pr(E,k,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new bi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Gr:In,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const se=p.state.transmissionRenderTarget[$.id],fe=$.viewport||A;se.setSize(fe.z*_.transmissionResolutionScale,fe.w*_.transmissionResolutionScale);const ve=_.getRenderTarget(),pe=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(se),_.getClearColor(I),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),Be&&ye.render(X);const ke=_.toneMapping;_.toneMapping=li;const Pe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),De===!0&&ae.setGlobalState(_.clippingPlanes,$),qn(E,X,$),We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Qe=0,dt=k.length;Qe<dt;Qe++){const lt=k[Qe],st=lt.object,Ue=lt.geometry,at=lt.material,et=lt.group;if(at.side===Xn&&st.layers.test($.layers)){const Wt=at.side;at.side=Jt,at.needsUpdate=!0,mr(st,X,$,Ue,at,et),at.side=Wt,at.needsUpdate=!0,Ye=!0}}Ye===!0&&(We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se))}_.setRenderTarget(ve,pe,Fe),_.setClearColor(I,z),Pe!==void 0&&($.viewport=Pe),_.toneMapping=ke}function qn(E,k,X){const $=k.isScene===!0?k.overrideMaterial:null;for(let B=0,se=E.length;B<se;B++){const fe=E[B],ve=fe.object,pe=fe.geometry,Fe=fe.group;let ke=fe.material;ke.allowOverride===!0&&$!==null&&(ke=$),ve.layers.test(X.layers)&&mr(ve,k,X,pe,ke,Fe)}}function mr(E,k,X,$,B,se){E.onBeforeRender(_,k,X,$,B,se),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,k,X,$,E,se),B.transparent===!0&&B.side===Xn&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,_.renderBufferDirect(X,k,$,B,E,se),B.side=ci,B.needsUpdate=!0,_.renderBufferDirect(X,k,$,B,E,se),B.side=Xn):_.renderBufferDirect(X,k,$,B,E,se),E.onAfterRender(_,k,X,$,B,se)}function Ci(E,k,X){k.isScene!==!0&&(k=de);const $=Se.get(E),B=p.state.lights,se=p.state.shadowsArray,fe=B.state.version,ve=j.getParameters(E,B.state,se,k,X),pe=j.getProgramCacheKey(ve);let Fe=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?_t:St).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Z),Fe=new Map,$.programs=Fe);let ke=Fe.get(pe);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===fe)return Pi(E,ve),ke}else ve.uniforms=j.getUniforms(E),E.onBeforeCompile(ve,_),ke=j.acquireProgram(ve,pe),Fe.set(pe,ke),$.uniforms=ve.uniforms;const Pe=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=ae.uniform),Pi(E,ve),$.needsLights=js(E),$.lightsStateVersion=fe,$.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function nn(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Is.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Pi(E,k){const X=Se.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function $r(E,k,X,$,B){k.isScene!==!0&&(k=de),We.resetTextureUnits();const se=k.fog,fe=$.isMeshStandardMaterial?k.environment:null,ve=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:or,pe=($.isMeshStandardMaterial?_t:St).get($.envMap||fe),Fe=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!X.morphAttributes.position,Ye=!!X.morphAttributes.normal,Qe=!!X.morphAttributes.color;let dt=li;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=_.toneMapping);const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=lt!==void 0?lt.length:0,Ue=Se.get($),at=p.state.lights;if(De===!0&&(K===!0||E!==x)){const F=E===x&&$.id===M;ae.setState($,E,F)}let et=!1;$.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==at.state.version||Ue.outputColorSpace!==ve||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==pe||$.fog===!0&&Ue.fog!==se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ae.numPlanes||Ue.numIntersection!==ae.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==ke||Ue.morphTargets!==Pe||Ue.morphNormals!==Ye||Ue.morphColors!==Qe||Ue.toneMapping!==dt||Ue.morphTargetsCount!==st)&&(et=!0):(et=!0,Ue.__version=$.version);let Wt=Ue.currentProgram;et===!0&&(Wt=Ci($,k,B));let Yn=!1,zt=!1,_n=!1;const pt=Wt.getUniforms(),Ht=Ue.uniforms;if(xe.useProgram(Wt.program)&&(Yn=!0,zt=!0,_n=!0),$.id!==M&&(M=$.id,zt=!0),Yn||x!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",E.projectionMatrix),pt.setValue(L,"viewMatrix",E.matrixWorldInverse);const W=pt.map.cameraPosition;W!==void 0&&W.setValue(L,be.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,zt=!0,_n=!0)}if(B.isSkinnedMesh){pt.setOptional(L,B,"bindMatrix"),pt.setOptional(L,B,"bindMatrixInverse");const F=B.skeleton;F&&(F.boneTexture===null&&F.computeBoneTexture(),pt.setValue(L,"boneTexture",F.boneTexture,We))}B.isBatchedMesh&&(pt.setOptional(L,B,"batchingTexture"),pt.setValue(L,"batchingTexture",B._matricesTexture,We),pt.setOptional(L,B,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",B._indirectTexture,We),pt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",B._colorsTexture,We));const Xt=X.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&ie.update(B,X,Wt),(zt||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,pt.setValue(L,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ht.envMap.value=pe,Ht.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Ht.envMapIntensity.value=k.environmentIntensity),zt&&(pt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&qr(Ht,_n),se&&$.fog===!0&&ee.refreshFogUniforms(Ht,se),ee.refreshMaterialUniforms(Ht,$,G,q,p.state.transmissionRenderTarget[E.id]),Is.upload(L,nn(Ue),Ht,We)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Is.upload(L,nn(Ue),Ht,We),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(L,"center",B.center),pt.setValue(L,"modelViewMatrix",B.modelViewMatrix),pt.setValue(L,"normalMatrix",B.normalMatrix),pt.setValue(L,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const F=$.uniformsGroups;for(let W=0,ue=F.length;W<ue;W++){const Me=F[W];ze.update(Me,Wt),ze.bind(Me,Wt)}}return Wt}function qr(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function js(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,X){const $=Se.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Se.get(E.texture).__webglTexture=k,Se.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const X=Se.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const yt=L.createFramebuffer();this.setRenderTarget=function(E,k=0,X=0){P=E,y=k,R=X;let $=!0,B=null,se=!1,fe=!1;if(E){const pe=Se.get(E);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(pe.__hasExternalTextures)We.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(pe.__boundDepthTexture!==Pe){if(Pe!==null&&Se.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const ke=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?B=ke[k][X]:B=ke[k],se=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?B=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[X]:B=ke,A.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else A.copy(le).multiplyScalar(G).floor(),D.copy(_e).multiplyScalar(G).floor(),O=Le;if(X!==0&&(B=yt),xe.bindFramebuffer(L.FRAMEBUFFER,B)&&$&&xe.drawBuffers(E,B),xe.viewport(A),xe.scissor(D),xe.setScissorTest(O),se){const pe=Se.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,X)}else if(fe){const pe=k;for(let Fe=0;Fe<E.textures.length;Fe++){const ke=Se.get(E.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,X,pe)}}else if(E!==null&&X!==0){const pe=Se.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(E,k,X,$,B,se,fe,ve=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe){xe.bindFramebuffer(L.FRAMEBUFFER,pe);try{const Fe=E.textures[ve],ke=Fe.format,Pe=Fe.type;if(!Ie.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&X>=0&&X<=E.height-B&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(k,X,$,B,Ae.convert(ke),Ae.convert(Pe),se))}finally{const Fe=P!==null?Se.get(P).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,$,B,se,fe,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe)if(k>=0&&k<=E.width-$&&X>=0&&X<=E.height-B){xe.bindFramebuffer(L.FRAMEBUFFER,pe);const Fe=E.textures[ve],ke=Fe.format,Pe=Fe.type;if(!Ie.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(k,X,$,B,Ae.convert(ke),Ae.convert(Pe),0);const Qe=P!==null?Se.get(P).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Qe);const dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pu(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Ye),L.deleteSync(dt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,X=0){const $=Math.pow(2,-X),B=Math.floor(E.image.width*$),se=Math.floor(E.image.height*$),fe=k!==null?k.x:0,ve=k!==null?k.y:0;We.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,fe,ve,B,se),xe.unbindTexture()};const Li=L.createFramebuffer(),gr=L.createFramebuffer();this.copyTextureToTexture=function(E,k,X=null,$=null,B=0,se=null){se===null&&(B!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=B,B=0):se=0);let fe,ve,pe,Fe,ke,Pe,Ye,Qe,dt;const lt=E.isCompressedTexture?E.mipmaps[se]:E.image;if(X!==null)fe=X.max.x-X.min.x,ve=X.max.y-X.min.y,pe=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,ke=X.min.y,Pe=X.isBox3?X.min.z:0;else{const Xt=Math.pow(2,-B);fe=Math.floor(lt.width*Xt),ve=Math.floor(lt.height*Xt),E.isDataArrayTexture?pe=lt.depth:E.isData3DTexture?pe=Math.floor(lt.depth*Xt):pe=1,Fe=0,ke=0,Pe=0}$!==null?(Ye=$.x,Qe=$.y,dt=$.z):(Ye=0,Qe=0,dt=0);const st=Ae.convert(k.format),Ue=Ae.convert(k.type);let at;k.isData3DTexture?(We.setTexture3D(k,0),at=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(We.setTexture2DArray(k,0),at=L.TEXTURE_2D_ARRAY):(We.setTexture2D(k,0),at=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),Wt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=L.getParameter(L.UNPACK_SKIP_PIXELS),zt=L.getParameter(L.UNPACK_SKIP_ROWS),_n=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);const pt=E.isDataArrayTexture||E.isData3DTexture,Ht=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Xt=Se.get(E),F=Se.get(k),W=Se.get(Xt.__renderTarget),ue=Se.get(F.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,W.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Me=0;Me<pe;Me++)pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,B,Pe+Me),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,se,dt+Me)),L.blitFramebuffer(Fe,ke,fe,ve,Ye,Qe,fe,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||Se.has(E)){const Xt=Se.get(E),F=Se.get(k);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Li),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,gr);for(let W=0;W<pe;W++)pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,B,Pe+W):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,B),Ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.__webglTexture,se,dt+W):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,F.__webglTexture,se),B!==0?L.blitFramebuffer(Fe,ke,fe,ve,Ye,Qe,fe,ve,L.COLOR_BUFFER_BIT,L.NEAREST):Ht?L.copyTexSubImage3D(at,se,Ye,Qe,dt+W,Fe,ke,fe,ve):L.copyTexSubImage2D(at,se,Ye,Qe,Fe,ke,fe,ve);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ht?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(at,se,Ye,Qe,dt,fe,ve,pe,st,Ue,lt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(at,se,Ye,Qe,dt,fe,ve,pe,st,lt.data):L.texSubImage3D(at,se,Ye,Qe,dt,fe,ve,pe,st,Ue,lt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,Ye,Qe,fe,ve,st,Ue,lt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,Ye,Qe,lt.width,lt.height,st,lt.data):L.texSubImage2D(L.TEXTURE_2D,se,Ye,Qe,fe,ve,st,Ue,lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),se===0&&k.generateMipmaps&&L.generateMipmap(at),xe.unbindTexture()},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){y=0,R=0,P=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Hg extends Vc{constructor(){super();const e=new gn;e.deleteAttribute("uv");const t=new an({side:Jt}),n=new an,r=new ed(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ke(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ir(e,n,6),o=new wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Ke(e,Ki(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Ke(e,Ki(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Ke(e,Ki(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ke(e,Ki(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Ke(e,Ki(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Ke(e,Ki(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ki(i){return new $u({color:0,emissive:16777215,emissiveIntensity:i})}function wn(i,e=0,t=.65){return new an({color:i,metalness:e,roughness:t})}function An(i,e,t,n=.4,r=.7){const s=new Yc().load(e);return s.colorSpace=Ot,s.wrapS=s.wrapT=Ns,s.repeat.set(t,t),new an({color:i,map:s,metalness:n,roughness:r})}function tt(i,e,t,n){const r=new Ke(new gn(...e),n);return r.position.set(...t),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Vt(i,e,t,n,r,s=24){const a=new Ke(new cr(e,e,t,s),r);return a.position.set(...n),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Zi(i,e,t,n,r){const s=new U(...e),a=new U(...t),o=Vt(i,n,s.distanceTo(a),s.clone().add(a).multiplyScalar(.5).toArray(),r,8);return o.quaternion.setFromUnitVectors(new U(0,1,0),a.sub(s).normalize()),o}class Vg{constructor(e,t,n,r,s){this.host=e,this.scene=new Vc,this.camera=new on(38,1,.1,160),this.root=new Dt,this.reduced=matchMedia("(prefers-reduced-motion: reduce)"),this.labels=[],this.callbacks=new Map,this.drags=new Map,this.skipClick=!1,this.lastHit=null,this.ray=new Zc,this.pointer=new Je,this.target=new U,this.frame=()=>{},this.draw=null,this.resized=()=>{},this.reserveRight=0,this.reserveBottom=0,this.last=0,this.controller=new AbortController,this.viewWidth=20,this.content=null,this.contentMargin=.94,this.offset=new U,this.hover=null,this.disposed=!1,this.renderer=new zg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ec,this.renderer.toneMapping=bc,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.setAttribute("aria-hidden","true"),e.prepend(this.renderer.domElement),this.scene.background=new Ge(t),this.scene.fog=new $s(t,36,85),this.scene.add(this.root),this.target.set(...r),this.camera.position.set(...n),this.camera.lookAt(this.target),this.viewWidth=s,this.offset.copy(this.camera.position).sub(this.target);const a=new Hg,o=new bo(this.renderer);this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.45,a.dispose(),o.dispose();const c=new Ju(14149615,2370868,1.2);c.name="ambient",this.scene.add(c);const l=new Il(16768426,3.5);l.name="key",l.position.set(-8,15,9),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.5,far:65}),l.shadow.bias=-5e-4,l.shadow.normalBias=.03,this.scene.add(l);const h=new Il(8960969,1.3);h.name="fill",h.position.set(8,8,-10),this.scene.add(h);const u={signal:this.controller.signal};let d=null,f=0;const v=g=>g.target===this.renderer.domElement?this.hit(g):this.labels.find(m=>m.element===g.target)?.object??null;e.addEventListener("pointerdown",g=>{const m=v(g),p=m?this.drags.get(m):void 0;p&&(d={callback:p,x:g.clientX,y:g.clientY,acc:0,moved:!1},g.target.setPointerCapture(g.pointerId))},u),e.addEventListener("pointermove",g=>{if(d){d.acc+=g.clientX-d.x+(d.y-g.clientY),d.x=g.clientX,d.y=g.clientY;const m=Math.trunc(d.acc/3);m&&(d.callback(m),d.acc-=m*3,d.moved=!0);return}g.target===this.renderer.domElement&&(this.hover=this.hit(g),this.renderer.domElement.style.cursor=this.hover?"pointer":"default")},u),e.addEventListener("wheel",g=>{const m=v(g),p=m?this.drags.get(m):void 0;if(!p)return;g.preventDefault(),f-=g.deltaY;const b=Math.trunc(f/20);b&&(p(b),f-=b*20)},{signal:this.controller.signal,passive:!1}),e.addEventListener("pointerup",()=>{this.skipClick=d?.moved??!1,d=null},u),e.addEventListener("pointercancel",()=>{d=null},u),this.renderer.domElement.addEventListener("click",g=>{if(this.skipClick){this.skipClick=!1;return}const m=this.hit(g);m&&this.callbacks.get(m)?.()},u),this.renderer.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),this.renderer.setAnimationLoop(null),this.host.dispatchEvent(new CustomEvent("scene-lost"))},u),this.renderer.domElement.addEventListener("webglcontextrestored",()=>location.reload(),u),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),this.renderer.setAnimationLoop(g=>{const m=Math.min((g-this.last)/1e3||0,.05);this.last=g,!document.hidden&&(this.frame(m,g/1e3),this.project(),this.draw?this.draw():this.renderer.render(this.scene,this.camera))}),window.addEventListener("pagehide",()=>this.dispose(),{once:!0,signal:this.controller.signal})}fitTo(e,t=.96){this.content=e.map(n=>n.clone()),this.contentMargin=t,this.resize()}resize(){const e=this.host.clientWidth,t=Math.max(1,this.host.clientHeight),n=Math.max(1,e-Math.min(this.reserveRight,e/2)),r=Math.max(1,t-Math.max(0,Math.min(this.reserveBottom,t-120)));if(this.renderer.setSize(e,t),this.camera.aspect=n/r,n<e||r<t?this.camera.setViewOffset(n,r,0,0,e,t):this.camera.clearViewOffset(),this.content)this.frameContent();else{const s=this.camera.position.distanceTo(this.target);this.camera.fov=Qs.radToDeg(2*Math.atan(Math.max(this.viewWidth/this.camera.aspect,12)/(s*2)))}this.camera.updateProjectionMatrix(),this.project(),this.resized(e,t)}frameContent(){const e=this.content,t=new U,n=new U;for(const r of e)n.add(r);n.divideScalar(e.length);for(let r=0;r<3;r++){this.target.copy(n),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld();let s=1/0,a=-1/0,o=1/0,c=-1/0;for(const f of e){t.copy(f).applyMatrix4(this.camera.matrixWorldInverse);const v=Math.max(.1,-t.z);s=Math.min(s,t.x/v),a=Math.max(a,t.x/v),o=Math.min(o,t.y/v),c=Math.max(c,t.y/v)}const l=Math.max(.02,(c-o)/2,(a-s)/2/this.camera.aspect);if(this.camera.fov=Qs.clamp(Qs.radToDeg(2*Math.atan(l/this.contentMargin)),8,80),r===2)break;const h=this.offset.length(),u=new U().setFromMatrixColumn(this.camera.matrixWorld,0),d=new U().setFromMatrixColumn(this.camera.matrixWorld,1);n.addScaledVector(u,(a+s)/2*h).addScaledVector(d,(c+o)/2*h)}}lighting(e,t,n,r){this.scene.getObjectByName("ambient").intensity=e,this.scene.getObjectByName("key").intensity=t,this.scene.getObjectByName("fill").intensity=n,this.scene.environmentIntensity=r}hit(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const n=this.ray.intersectObjects([...this.callbacks.keys()],!0);this.lastHit=n[0]??null;let r=n[0]?.object??null;for(;r&&!this.callbacks.has(r);)r=r.parent;return r}interact(e,t,n,r=[0,.6,0]){this.callbacks.set(e,n);const s=document.createElement("button");return s.type="button",s.className="object-label",s.textContent=t,s.title=t,s.setAttribute("aria-label",t),s.addEventListener("click",()=>{if(this.skipClick){this.skipClick=!1;return}n()}),this.host.append(s),s.addEventListener("focus",()=>s.classList.add("targeted")),s.addEventListener("blur",()=>s.classList.remove("targeted")),this.labels.push({element:s,object:e,offset:new U(...r)}),s}project(){this.scene.updateMatrixWorld(),this.camera.updateMatrixWorld();for(const e of this.labels){const t=e.object.localToWorld(e.offset.clone()).project(this.camera);e.element.style.left=`${(t.x+1)/2*100}%`,e.element.style.top=`${(1-t.y)/2*100}%`;let n=e.object.visible;e.object.traverseAncestors(r=>{n=n&&r.visible}),e.element.hidden=!n||t.z>1}}describeObjects(){const e=this.host.getBoundingClientRect();return this.labels.map(t=>{const n=t.object.getWorldPosition(new U).project(this.camera);return{name:t.element.textContent,x:e.left+(n.x+1)/2*e.width,y:e.top+(1-n.y)/2*e.height}})}dispose(){if(this.disposed)return;this.disposed=!0,this.renderer.setAnimationLoop(null),this.observer.disconnect(),this.controller.abort();const e=new Set,t=new Set,n=new Set;this.scene.traverse(r=>{if(r instanceof Ke||r instanceof Wc){e.add(r.geometry);for(const s of Array.isArray(r.material)?r.material:[r.material]){t.add(s);for(const a of Object.values(s))a instanceof Bt&&n.add(a)}}}),e.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),this.environment.dispose(),this.renderer.dispose()}}const Tr=new U;function dn(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Tr.copy(e),Tr[n]=0,Tr.normalize();const l=.5*a/(a+o),h=1-Tr.angleTo(i)/c;return Math.sign(Tr[t])===1?h*l:o/(a+o)+l+l*(1-h)}class qo extends gn{constructor(e=1,t=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new U,l=new U,h=new U(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,v=u.length/6,g=new U,m=.5/a;for(let p=0,b=0;p<u.length;p+=3,b+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*s,u[p+1]=h.y*Math.sign(c.y)+l.y*s,u[p+2]=h.z*Math.sign(c.z)+l.z*s,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/v)){case 0:g.set(1,0,0),f[b+0]=dn(g,l,"z","y",s,n),f[b+1]=1-dn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),f[b+0]=1-dn(g,l,"z","y",s,n),f[b+1]=1-dn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),f[b+0]=1-dn(g,l,"x","z",s,e),f[b+1]=dn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),f[b+0]=1-dn(g,l,"x","z",s,e),f[b+1]=1-dn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),f[b+0]=1-dn(g,l,"x","y",s,e),f[b+1]=1-dn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),f[b+0]=dn(g,l,"x","y",s,e),f[b+1]=1-dn(g,l,"y","x",s,t);break}}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.segments,e.radius)}}function Yo(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new En;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let v=0;v<f.count;++v)u.push(f.getX(v)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in s){const u=ac(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const v=ac(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(v)}}return c}function ac(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new mn(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let v=0;v<t;v++){const g=h.getComponent(d,v);o.setComponent(d+u,v,g)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const Ur=(i,e)=>i.families.find(t=>t.id===e),Gn=(i,e)=>i.find(t=>t.family===e);function Gg(i,e){const t=Array.from({length:i.rebuild},(r,s)=>e.start+s),n=e.coupled?Array.from({length:i.check},(r,s)=>e.start+i.rebuild+s):[];return{rebuild:t,check:n}}function Vs(i,e,t){return i.weeks-e.rebuild-(t?e.check:0)+1}function Wg(i,e,t,n){const r=Gn(t,n.id),s=e.contractEndWeek,a=r.start+n.rebuild,o=a+n.check-1,c=r.coupled&&o<=s,l=c?o+1:1/0,h=r.coupled?o:a-1,u=[],d=[];for(let f=s+1;f<=i.weeks;f++)f<a?u.push(f):f<l&&d.push(f);return{family:n,placement:r,rebuiltFrom:a,checkValid:c,validatedFrom:l,lastWeek:h,uncoveredWeeks:u,uncheckedWeeks:d}}function Xg(i,e,t){const n=i.contractEndWeek;return t.week<=n?{attack:t,caught:!0,reason:"old-rules"}:e.validatedFrom<=t.week?{attack:t,caught:!0,reason:"checked"}:e.rebuiltFrom<=t.week?t.simple?{attack:t,caught:!0,reason:"converted-clean"}:{attack:t,caught:!1,reason:e.placement.coupled?"check-past-end":"unchecked-rework"}:{attack:t,caught:!1,reason:"not-arrived"}}function $g(i,e,t){const n=new Array(i.weeks+1).fill(0);for(const r of e.families){const{rebuild:s,check:a}=Gg(r,Gn(t,r.id));for(const o of[...s,...a])o<=i.weeks&&n[o]++}return n}function Wn(i,e,t){const n=e.families.map(o=>Wg(i,e,t,o)),r=e.attacks.map(o=>Xg(e,n.find(c=>c.family.id===o.family),o)),s=$g(i,e,t),a=s.map((o,c)=>o>i.crew?c:0).filter(Boolean);return{families:n,attacks:r,caught:r.filter(o=>o.caught).length,total:r.length,crew:s,overCrew:a,finishWeek:Math.max(...n.map(o=>o.lastWeek))}}const ih=(i,e,t)=>`Week ${i} has ${e} families. The team can work on ${t}. Move a train.`;function Ao(i,e,t){const n=Wn(i,e,t),r=[];for(const s of n.overCrew)r.push({kind:"crew",week:s,count:n.crew[s]});for(const s of n.families)s.placement.coupled&&!s.checkValid&&r.push({kind:"check-past-end",family:s.family});return r}function qg(i,e,t,n,r){const s=Ur(e,n);return t.map(a=>a.family!==n?a:{...a,start:Math.max(1,Math.min(Vs(i,s,a.coupled),a.start+r))})}function Yg(i,e,t,n){const r=Ur(e,n);return t.map(s=>s.family!==n?s:{...s,coupled:!s.coupled,start:Math.min(s.start,Vs(i,r,!s.coupled))})}function jg(i){return i.families.filter(e=>i.attacks.some(t=>t.family===e.id&&!t.simple&&t.week>i.contractEndWeek)).map(e=>e.id)}function Kg(i,e,t){if(!e[t])throw new Error(`[${i}] default pack "${t}" is not registered`);return function(r){const s=r||t,a=e[s];return a?{theme:a,requestedPack:s,activePack:s}:(console.warn(`[${i}] pack "${s}" not available, using "${t}"`),{theme:e[t],requestedPack:s,activePack:t})}}const Zg={ballast:16052974,"dusk-sky":14278370,"rebuild-car":14262346,"check-car":15394524,"attack-train":1250069},Jg={default:Zg},Qg=Kg("rail-yard",Jg,"default");function e0(i){const{theme:e}=Qg(i?.pack),t={...e};for(const[n,r]of Object.entries(i?.colors??{}))r&&(t[n]=new Ge(r).getHex());return t}const t0=new URL(""+new URL("ballast-light-D4FbRYRU.jpg",import.meta.url).href,import.meta.url).href,n0=new URL(""+new URL("ground-grass-C0HUq12T.jpg",import.meta.url).href,import.meta.url).href,i0=new URL(""+new URL("gantry-paint-CU7pZVAu.jpg",import.meta.url).href,import.meta.url).href,r0=new URL(""+new URL("horizon-CKFboMUk.jpg",import.meta.url).href,import.meta.url).href,s0=new URL(""+new URL("rail-steel-BT4FAMX5.png",import.meta.url).href,import.meta.url).href,a0=new URL(""+new URL("sleeper-timber-Cxhjn-lA.png",import.meta.url).href,import.meta.url).href,o0=new URL(""+new URL("engine-steel-DHemsNEy.png",import.meta.url).href,import.meta.url).href,l0=new URL(""+new URL("car-amber-BYtQhSAl.png",import.meta.url).href,import.meta.url).href,c0=new URL(""+new URL("car-white-BbNDutbq.png",import.meta.url).href,import.meta.url).href,h0=new URL(""+new URL("gantry-steel-Nrh8IZlw.png",import.meta.url).href,import.meta.url).href,u0=new URL(""+new URL("signal-brick-BgBB2_Xx.png",import.meta.url).href,import.meta.url).href,Tt=1.6,d0=3.8,oc=13.4,ni=-11.6,At=i=>(i-7.5)*Tt,zn=i=>(i-2)*d0,lc=i=>At(1)-Tt/2+i*Tt;function Vn(i,e,t){const n=e>=i.week-1,r=t?.15:.9,s=n?Math.min(1,(e-(i.week-1))/r):0;return{entered:n,progress:s,settled:n&&s>=1}}const Us=["Family","Rules","Broken in rebuild","Rebuild weeks","Comparison weeks","Incidents last year"],rh=i=>i.map(e=>[e.label,String(e.rules),String(e.rework),String(e.rebuild),String(e.check),String(e.incidentsLastYear)]);function Rr(i,e,t,n,r=.035){const s=new Ke(new qo(e[0],e[1],e[2],2,r),n);return s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Ia(i,e,t,n,r,s){const a=new cr(t,t,e,22,1,!1,-Math.PI/2,Math.PI);a.rotateZ(Math.PI/2),a.rotateX(-Math.PI/2);const o=new Ke(a,s);return o.scale.set(1,n/t,1),o.position.set(...r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function cc(i){i.updateMatrixWorld(!0);const e=i.matrixWorld.clone().invert(),t=[];i.traverse(a=>{a instanceof Ke&&!(a instanceof Ir)&&a.renderOrder===0&&a.visible&&t.push(a)});const n=new Map,r=(a,o,c,l)=>{const h=`${a.uuid}|${o}|${c}`;n.has(h)||n.set(h,{surface:a,cast:o,receive:c,pieces:[]}),n.get(h).pieces.push(l)};for(const a of t){const o=a.geometry.clone().applyMatrix4(e.clone().multiply(a.matrixWorld));if(Array.isArray(a.material)){const c=o.getIndex();for(const l of o.groups){const h=o.clone();h.clearGroups(),h.setIndex(Array.from(c.array.slice(l.start,l.start+l.count))),r(a.material[l.materialIndex??0],a.castShadow,a.receiveShadow,h)}o.dispose()}else r(a.material,a.castShadow,a.receiveShadow,o)}const s=[];for(const{surface:a,cast:o,receive:c,pieces:l}of n.values()){const h=Yo(l);if(l.forEach(d=>d.dispose()),!h)return;const u=new Ke(h,a);u.castShadow=o,u.receiveShadow=c,s.push(u)}for(const a of t)a.removeFromParent(),a.geometry.dispose();i.add(...s)}function f0(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");e.fillStyle="#1b1d1f",e.fillRect(0,0,128,128),e.translate(64,64),e.strokeStyle="#8d9298",e.lineWidth=7,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.lineWidth=5,e.strokeStyle="#6e7378";for(let n=0;n<10;n++){const r=n/10*Math.PI*2;e.beginPath(),e.moveTo(Math.cos(r)*14,Math.sin(r)*14),e.lineTo(Math.cos(r)*50,Math.sin(r)*50),e.stroke()}e.fillStyle="#a7acb1",e.beginPath(),e.arc(0,0,16,0,Math.PI*2),e.fill(),e.fillStyle="#4a4e52",e.beginPath(),e.arc(0,0,7,0,Math.PI*2),e.fill();const t=new Hs(i);return t.colorSpace=Ot,t}function hc(i){const e=document.createElement("canvas");e.width=512,e.height=112;const t=e.getContext("2d");t.clearRect(0,0,512,112),t.fillStyle="#1d1712",t.textAlign="center",t.textBaseline="middle",t.font='700 92px Display,"Arial Narrow",Arial,sans-serif',t.fillText(i,256,60,490);const n=new Hs(e);return n.colorSpace=Ot,n.anisotropy=8,{texture:n,repaint:()=>{t.clearRect(0,0,512,112),t.fillText(i,256,60,490),n.needsUpdate=!0}}}const ys=24;function p0(i){if(i.rules<=ys)return{crates:i.rules,tagged:i.rework};const e=i.rework>0?Math.max(1,Math.ceil(i.rework*ys/i.rules)):0;return{crates:ys,tagged:Math.min(ys,e)}}const gt={x:-2.6,z:12.4,y:.3,width:9.8,height:0,type:.37},yi={title:1.35,head:2.3,row:1.3,pad:.55},m0=i=>gt.type*(yi.title+yi.head+yi.row*i+yi.pad);function g0(i){const e=i.toUpperCase().split(" ");if(e.length<2)return e;let t=[e.join(" ")],n=1/0;for(let r=1;r<e.length;r++){const s=[e.slice(0,r).join(" "),e.slice(r).join(" ")],a=Math.max(...s.map(o=>o.length));a<n&&(n=a,t=s)}return t}const _0=i=>i.incidentsLastYear===1?"INCIDENT":"INCIDENTS",v0=i=>[`${i.rules} RULES · ${i.rework} BROKEN IN REBUILD`,`${i.incidentsLastYear} ${_0(i)} LAST YEAR`];function x0(){const i=new gn(1.08,.24,1.08);i.translate(0,.55,0);const e=new gn(.95,.08,.16);return e.rotateY(.6),e.translate(0,1.02,0),Yo([i,e])}const uc=(i,e)=>`${i} OF ${e}`,Qt={y:2.15,board:4.3,chip:2.1,h:.55},dc=13,Ua=-16,M0=Tt-.04,Es=1.6,bs=2.55,ws=2.7,Cr=5.1;class fc{constructor(e,t=1.6){this.strength=t,this.material=new an({color:1710618,emissive:e,emissiveIntensity:t,roughness:.4}),this.target.set(e)}material;target=new Ge;set(e){this.target.set(e)}tick(e){this.material.emissive.lerp(this.target,e)}}const ii={red:16726572,green:3790444,unlit:1973274},Lt={ground:"#173a66",legend:"#2c4f7c",edge:"#0b1f3a",stop:"#c2410c",expected:"#fbeff5",held:"#ffd36b",chip:"#7a1f3d",chipOn:"#1f6b43",chipLate:"#8a1c12"},As={broken:13772316,fixed:3124821},S0=16,Et={plain:"#ffffff",warm:"#ffd36b",red:"#ffb3a8",green:"#a8f0c0",gray:"#c8d4e4",pink:"#c2185b"};class y0{constructor(e,t,n){this.pack=t,this.callbacks=n;const r=e0(t.theme);this.amberSkin=An(r["rebuild-car"],l0,1,.35,.6),this.whiteSkin=An(r["check-car"],c0,1,.25,.7),this.black=wn(r["attack-train"],.35,.7),this.stage=new Vg(e,r["dusk-sky"],[6,31,21],[-.6,.6,-.2],30.2),this.stage.lighting(1.25,3.1,1.1,.7);const s=this.stage.scene.getObjectByName("key");s.position.set(14,22,12),s.color.set(16773596),Object.assign(s.shadow.camera,{left:-20,right:20,top:20,bottom:-20}),s.shadow.camera.updateProjectionMatrix();const a=this.stage.scene.getObjectByName("fill");a.position.set(-10,10,-14),a.color.set(12375792),this.stage.scene.getObjectByName("ambient").color.set(15003899),this.stage.scene.fog=new $s(r["dusk-sky"],45,120);const o=this.stage.root,c=tt(o,[31,.3,30.4],[0,-.15,.6],An(r.ballast,t0,14,.02,.95));c.receiveShadow=!0;const l=new Ke(new fn(400,400),An(15921126,n0,70,0,1));l.rotation.x=-Math.PI/2,l.position.y=-.31,l.receiveShadow=!0,o.add(l),this.backdrop=this.buildBackdrop();const h=t.cases[0].families,u=new Ir(new gn(.18,.1,.68),this.timber,h.length*2*80);let d=0;const f=new wt;h.forEach((x,A)=>{const D=zn(A);for(const O of[.55,-.55]){for(const I of[-.2,.2])tt(o,[27,.06,.04],[0,.07,D+O+I],this.rail),tt(o,[27,.035,.085],[0,.115,D+O+I],this.rail);for(let I=-13.4;I<=13.4;I+=.42)f.position.set(I,.03,D+O),f.updateMatrix(),u.setMatrixAt(d++,f.matrix)}for(const O of[.55,-.55])for(const I of[-13.7,13.7])tt(o,[.34,.5,.9],[I,.3,D+O],this.brick)}),u.count=d,u.receiveShadow=!0,o.add(u),this.teamSign=this.sign(o,`THE TEAM CAN WORK ON ${t.crew} FAMILIES AT A TIME`,8.4,.72,[At(4),Cr,ni],Lt.ground,Et.warm,1,1);const v=At(1)-Tt/2-ws/2;this.sign(o,["WEEK","TEAM BUSY"],ws,Es,[v,bs,ni],Lt.legend,[Et.gray,Et.gray],2,1,[.55,.45]);for(const x of[v-ws/2+.3,...Array.from({length:t.weeks},(A,D)=>At(D+1))])Vt(o,.06,bs-Es/2+.1,[x,(bs-Es/2+.1)/2,ni-.05],this.gantrySteel,10);for(let x=1;x<=t.weeks;x++)this.weekSigns[x]=this.sign(o,[String(x),uc(0,t.crew)],M0,Es,[At(x),bs,ni],Lt.ground,[Et.plain,Et.gray],2,1,[.55,.45]),this.weekText[x]="";const g=new Dt;o.add(g);const m=An(16777215,i0,1,.25,.55),p=new an({color:2755850,emissive:16726564,emissiveIntensity:1.8,roughness:.35}),b=[zn(0)-1.6,zn(t.cases[0].families.length-1)+1.5],w=4.3,_=3.5;for(const x of b){tt(g,[1.3,.22,.7],[0,.11,x],wn(13223098,0,.9));for(const A of[-.42,.42])Zi(g,[A,.2,x],[A*.35,w+.1,x],.085,m);for(let A=.7;A<w-.3;A+=.95)Zi(g,[-.4*(1-A/w*.65),A,x],[.4*(1-(A+.95)/w*.65),A+.95,x],.04,m)}for(const x of[-.22,.22]){for(const D of[w,_])Zi(g,[x,D,b[0]],[x,D,b[1]],.07,m);let A=!0;for(let D=b[0];D<b[1]-.1;D+=.9,A=!A)Zi(g,[x,A?_:w,D],[x,A?w:_,Math.min(b[1],D+.9)],.035,m)}for(let x=b[0];x<=b[1];x+=1.8)Zi(g,[-.22,w,x],[.22,w,x],.035,m);t.cases[0].families.forEach((x,A)=>{const D=zn(A)+.55;tt(g,[.05,.5,.05],[0,_-.25,D],this.chassis);const O=Rr(g,[.3,.42,.3],[0,_-.66,D],this.chassis,.05);O.castShadow=!1;const I=Vt(g,.1,.05,[.16,_-.62,D],p,14);I.rotation.z=Math.PI/2,I.castShadow=!1}),this.gantry={group:g,targetX:At(t.cases[0].contractEndWeek)+Tt/2},g.position.x=this.gantry.targetX,Zi(g,[0,w,b[0]],[0,Cr-.3,ni+.05],.05,m),this.gantrySign=this.sign(g,`${t.legacyProductName.toUpperCase()} SWITCHES OFF AFTER WEEK ${t.cases[0].contractEndWeek}`,7.2,.72,[0,Cr,ni+.1],Lt.stop,"#ffffff",1,1);const T=zn(Math.max(...t.cases.map(x=>x.families.length))-1);this.lever=new Dt,this.lever.position.set(-9.4,0,T+3),o.add(this.lever),tt(this.lever,[.8,.62,.6],[0,.31,0],this.brick),tt(this.lever,[.9,.08,.7],[0,.64,0],this.chassis),this.leverHandle=new Dt,this.leverHandle.position.set(0,.66,0),this.lever.add(this.leverHandle),Vt(this.leverHandle,.055,1.1,[0,.55,0],this.rail,8),Vt(this.leverHandle,.12,.24,[0,1.1,0],wn(11740702,.1,.5),10),this.leverLamp=new fc(ii.red,2.2),Vt(this.lever,.11,.09,[.33,.7,.18],this.leverLamp.material,12),this.leverLabel=this.stage.interact(this.lever,"Run the plan",n.pullLever,[0,3.4,0]),this.leverLabel.classList.add("control-label"),this.stage.callbacks.set(this.leverHandle,n.pullLever),this.leverSign=this.sign(this.lever,"RUN THE PLAN",2.1,.5,[0,2.1,0],"#5c1a15","#ffe3d6"),gt.z=T+6.5,gt.height=m0(Math.max(...t.cases.map(x=>x.families.length))),this.familyBoard=new Dt,this.familyBoard.position.set(gt.x,0,gt.z),o.add(this.familyBoard);for(const x of[-9.8/2+.5,gt.width/2-.5])Vt(this.familyBoard,.07,gt.y,[x,gt.y/2,0],this.gantrySteel,10);this.buildFamilyBoard(t.cases[0].families),this.familyBoardLabel=this.stage.interact(this.familyBoard,"Family board",n.openFamilyBoard,[0,gt.y+gt.height+.4,0]),this.familyBoardLabel.classList.add("control-label"),this.familyBoardLabel.setAttribute("aria-label","Family board. Opens every family's numbers as a table."),this.nowLine=new Dt,o.add(this.nowLine),tt(this.nowLine,[.07,.06,18],[0,.12,-.1],new ri({color:16773572}));const y=new Ke(new fn(1.1,18),new ri({color:16766346,transparent:!0,opacity:.16,blending:Fa,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.set(0,.04,-.1),this.nowLine.add(y),this.nowLine.position.x=lc(0),h.forEach((x,A)=>this.buildTrain(x,A));const R=zn(h.length-1)+.9,P=zn(0)-.9;this.stage.resized=()=>this.fitBackdrop(),this.stage.fitTo([...[P,R].flatMap(x=>[new U(-14.2,1.9,x),new U(14,1.6,x)]),new U(At(1)-Tt/2-ws,Cr+1.3,ni),new U(At(t.weeks)+Tt/2,Cr+1.3,ni),this.lever.position.clone().add(new U(0,2.4,.3)),...[-1,1].flatMap(x=>[0,gt.height].map(A=>new U(gt.x+x*gt.width/2,gt.y+A,gt.z)))],.98),this.face();const M=this.stage.project.bind(this.stage);this.stage.project=()=>{M(),this.clampTags()},document.fonts?.ready.then(()=>{for(const x of this.painters)x()}),this.wireDrag(e)}stage;trains=[];attacks=[];attackCase="";gantry;busyText=[];weekSigns=[];weekText=[];teamSign;teamText="";teamPlaced=!1;familyBoard;familyBoardRows=[];familyBoardLabel;boardMesh;boardFont=0;boardCanvasHeight=1;lever;leverHandle;leverLabel;leverLamp;leverSign;leverText="";nowLine;gantrySign;gantryWeek=0;gantryHold=null;billboards=[];plates=[];backdrop;muted=!1;painters=[];hoverFamily="";wasRunning=!1;plan=[];drag=null;gantrySteel=An(13160146,h0,2,.75,.42);rail=An(10397356,s0,3,.6,.45);timber=An(6968128,a0,1,.05,.92);brick=An(10119768,u0,1,.05,.9);engineSkin=An(11126474,o0,1,.45,.55);amberSkin;whiteSkin;rebuildWord=hc("REBUILD");compareWord=hc("COMPARE");rebuildPaint=new an({map:this.rebuildWord.texture,transparent:!0,roughness:.7,depthWrite:!1});comparePaint=new an({map:this.compareWord.texture,transparent:!0,roughness:.7,depthWrite:!1});crateWood=wn(12159573,.05,.8);ghost=new ri({color:16507886,transparent:!0,opacity:.42,depthWrite:!0,fog:!1});outlineInk=new ju({color:14162794,dashSize:.14,gapSize:.07,fog:!1});glass=new an({color:857111,metalness:.2,roughness:.12,emissive:1055778,emissiveIntensity:.8});tyre=wn(2303530,.5,.55);wheelFace=new an({map:f0(),metalness:.6,roughness:.5});chassis=wn(2828844,.6,.6);rod=wn(7370364,.85,.28);soot=wn(1513498,.3,.85);roof=wn(5593699,.14,.88);headlight=new an({color:2829094,emissive:16769704,emissiveIntensity:2.4,roughness:.3});black;blackTrim=wn(2302503,.4,.65);locked=!0;readoutText="";wireDrag(e){const t=this.stage.renderer.domElement;e.addEventListener("pointerdown",a=>{if(this.locked||a.target!==t)return;const o=this.stage.hit(a),c=o&&this.trains.find(l=>l.group===o||l.engine===o||l.coupling===o);!c||o===c.coupling||(this.drag={train:c,x0:a.clientX,dx:0,startWeek:Gn(this.plan,c.family.id).start,moved:!1},this.hoverFamily=c.family.id,t.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{const o=this.drag;if(!o)return;o.dx=a.clientX-o.x0,Math.abs(o.dx)>3&&(o.moved=!0);const c=Math.round(o.dx/this.pixelsPerWeek(o.train.group.position.z)),l=Gn(this.plan,o.train.family.id),h=Math.max(1,Math.min(Vs(this.pack,o.train.family,l.coupled),o.startWeek+c)),u=Math.sign(h-l.start);for(let d=l.start;d!==h;d+=u)this.callbacks.moveTrain(o.train.family.id,u)});const n=()=>{this.drag&&(this.stage.skipClick=this.drag.moved,this.drag=null)};e.addEventListener("pointerup",n);let r=null;e.addEventListener("pointerdown",a=>{r=a.target===t?this.stage.hit(a):null},!0),t.addEventListener("click",a=>{this.stage.hit(a)!==r&&a.stopImmediatePropagation()},!0);const s=()=>{this.drag||(this.stage.hover=null)};e.addEventListener("pointerleave",s),e.addEventListener("pointermove",a=>{a.target!==t&&s()}),e.addEventListener("pointercancel",n)}ready(){const e=new Promise(t=>{const n=qc,r=n.onLoad;n.onLoad=()=>{r?.(),t()}});return Promise.all([e,document.fonts?.ready??Promise.resolve()]).then(()=>{})}buildBackdrop(){const e=new Yc().load(r0);e.colorSpace=Ot,e.wrapS=Fs;const t=new Ke(new fn(1,1),new ri({map:e,fog:!1,toneMapped:!1}));return t.position.z=Ua,t.renderOrder=-1,this.stage.scene.add(t),t}fitBackdrop(){const e=this.stage.camera;e.updateMatrixWorld();const t=new si(new U(0,0,1),-Ua),n=new Zc,r=new U;let s=6,a=-40,o=40;for(const u of[-1,1])n.setFromCamera(new Je(u,1),e),n.ray.intersectPlane(t,r)&&(s=Math.max(2,r.y),u<0?a=Math.min(a,r.x):o=Math.max(o,r.x));const c=Math.max(8,s*2.1),l=(o-a)*1.2;this.backdrop.scale.set(l,c,1),this.backdrop.position.set((a+o)/2,c/2-.35,Ua);const h=this.backdrop.material.map;h.repeat.x=l/(c*1.5),h.offset.x=.5-h.repeat.x/2}detach(e){const t=this.billboards.indexOf(e);t>=0&&this.billboards.splice(t,1);const n=this.plates.findIndex(r=>r.mesh===e);n>=0&&this.plates.splice(n,1)}face(){for(const e of this.billboards)e.quaternion.copy(this.stage.camera.quaternion);this.sizePlates()}sizePlates(){const e=this.stage.host.clientHeight;if(!e)return;const t=e/(2*Math.tan(this.stage.camera.fov*Math.PI/360)),n=this.stage.camera.getWorldPosition(new U),r=new U;for(const s of this.plates){const a=s.mesh.getWorldPosition(r).distanceTo(n),o=s.glyph*t/Math.max(.001,a);s.mesh.scale.setScalar(Math.min(s.cap,Math.max(1,(s.min??S0)/Math.max(.001,o))))}}sign(e,t,n,r,s,a=Lt.ground,o=Et.plain,c=Array.isArray(t)?t.length:1,l=1.35,h){const u=document.createElement("canvas");u.width=Math.round(n*190),u.height=Math.round(r*190);const d=new Hs(u);d.colorSpace=Ot,d.anisotropy=8;const f=new ri({map:d,transparent:!0,toneMapped:!1,fog:!1,depthWrite:!1,depthTest:!1}),v=new Ke(new fn(n,r),f);v.position.set(...s),v.renderOrder=3,e.add(v);let g=t,m=o,p=a;const b=(T,y=m,R=p)=>{g=T,m=y,p=R;const P=Array.isArray(T)?T:[T],M=u.getContext("2d"),x=u.width,A=u.height;M.clearRect(0,0,x,A),M.fillStyle=R,M.fillRect(0,0,x,A),M.strokeStyle=Lt.edge,M.lineWidth=Math.max(3,Math.min(x,A)*.06),M.strokeRect(0,0,x,A),M.strokeStyle="#ffffff40",M.lineWidth=2,M.strokeRect(Math.min(x,A)*.07,Math.min(x,A)*.07,x-Math.min(x,A)*.14,A-Math.min(x,A)*.14),M.textAlign="center",M.textBaseline="middle";const D=h&&h.length===P.length?h:P.map(()=>1/P.length),O=D.reduce((z,V)=>z+V,0);let I=0;P.forEach((z,V)=>{const q=A*D[V]/O;M.fillStyle=Array.isArray(y)?y[V]??y[0]:y,M.font=`700 ${Math.round(P.length===1?A*.56:q*.66)}px Display,"Arial Narrow",Arial,sans-serif`;const G=I+q*.54;if(I+=q,typeof z=="string"){M.fillText(z,x/2,G,x*.92);return}const Q=z.map(([Le])=>M.measureText(Le).width),oe=Q.reduce((Le,Ne)=>Le+Ne,0),le=Math.min(1,x*.92/Math.max(1,oe));M.save(),M.translate(x/2-oe*le/2,G),M.scale(le,1),M.textAlign="left";let _e=0;z.forEach(([Le,Ne],De)=>{M.fillStyle=Ne,M.fillText(Le,_e,0),_e+=Q[De]}),M.restore(),M.textAlign="center"}),d.needsUpdate=!0};b(t);const w=T=>{Math.abs(T-n)<.001||(n=T,u.width=Math.round(n*190),v.geometry.dispose(),v.geometry=new fn(n,r),d.dispose(),b(g,m,p))};this.painters.push(()=>b(g,m,p)),this.billboards.push(v);const _=h&&h.length===c?Math.min(...h)/h.reduce((T,y)=>T+y,0):1/c;return this.plates.push({mesh:v,glyph:c===1?r*.56:r*_*.66,cap:l}),{mesh:v,material:f,paint:b,fit:w}}buildFamilyBoard(e){const t=rh(e);if(this.familyBoardRows=t,this.boardMesh){const w=this.billboards.indexOf(this.boardMesh);w>=0&&this.billboards.splice(w,1),this.boardMesh.removeFromParent()}const n=190,r=Math.round(gt.width*n),s=Math.round(gt.height*n),a=document.createElement("canvas");a.width=r,a.height=s;const o=new Hs(a);o.colorSpace=Ot,o.anisotropy=8;const c=new ri({map:o,transparent:!0,toneMapped:!1,fog:!1,depthWrite:!1,depthTest:!1}),l=new Ke(new fn(gt.width,gt.height),c);l.position.set(0,gt.y+gt.height/2,0),l.renderOrder=3,this.familyBoard.add(l),this.boardMesh=l,this.billboards.push(l);const h=Math.round(gt.type*n),u=h*.6,d=r-u*2,f=h*yi.title,v=h*yi.head,g=h*yi.row,m=Us.map(g0);this.boardFont=h,this.boardCanvasHeight=s;const p=`700 ${h}px Display,"Arial Narrow",Arial,sans-serif`,b=()=>{const w=a.getContext("2d");w.clearRect(0,0,r,s),w.fillStyle=Lt.ground,w.fillRect(0,0,r,s),w.strokeStyle=Lt.edge,w.lineWidth=10,w.strokeRect(0,0,r,s),w.textBaseline="middle",w.font=p;const _=Us.map((M,x)=>Math.max(...m[x].map(A=>w.measureText(A).width),...t.map(A=>w.measureText(x===0?A[x].toUpperCase():A[x]).width))+h*.5),T=Math.max(0,d-_.reduce((M,x)=>M+x,0))/_.length;let y=u;const R=_.map(M=>{const x=M+T,A=y;return y+=x,{left:A,width:x}}),P=M=>M===0?R[0].left+h*.2:R[M].left+R[M].width/2;w.fillStyle=Et.warm,w.textAlign="center",w.fillText("FAMILY BOARD",r/2,f*.55,r-u*2),w.fillStyle=Et.gray,m.forEach((M,x)=>{w.textAlign=x===0?"left":"center",M.forEach((A,D)=>w.fillText(A,P(x),f+v*(M.length===1?.5:D?.72:.28),R[x].width-h*.2))}),w.strokeStyle="#6f8db5",w.lineWidth=3,w.beginPath(),w.moveTo(u,f+v),w.lineTo(r-u,f+v),w.stroke(),t.forEach((M,x)=>{const A=f+v+g*(x+.55);M.forEach((D,O)=>{w.textAlign=O===0?"left":"center",w.fillStyle=O===2&&D!=="0"?Et.red:Et.plain,w.fillText(O===0?D.toUpperCase():D,P(O),A,R[O].width-h*.2)})}),o.needsUpdate=!0};b(),this.painters.push(b)}boardTypePixels(){return this.boardCapPixels()/.7}boardCapPixels(){const e=new U(0,gt.height/2,0),t=new U(0,-gt.height/2,0);return this.boardMesh.localToWorld(e),this.boardMesh.localToWorld(t),e.project(this.stage.camera),t.project(this.stage.camera),Math.abs(e.y-t.y)/2*this.stage.host.clientHeight*(this.boardFont/this.boardCanvasHeight)*.7}evidence(){return{board:[Us,...this.familyBoardRows],boardCapPixels:Math.round(this.boardCapPixels()*10)/10,boardTypePixels:Math.round(this.boardTypePixels()*10)/10,boards:this.trains.map(e=>e.boardText.split("|")[0]),busy:this.busyText.slice(1),expected:this.attacks.map(e=>e.signText.split("|")[0]),tags:Object.fromEntries(this.trains.map(e=>[e.family.id,e.family.rework?e.tagsFixed?"green":"red":"none"]))}}shadowFrom(e,...t){e.traverse(n=>{n instanceof Ke&&(n.castShadow=!1)});for(const n of t)n.castShadow=!0}wheel(e,t,n){const r=new Ke(new cr(t,t,.11,20),[this.tyre,this.wheelFace,this.wheelFace]);return r.rotation.x=Math.PI/2,r.position.set(...n),r.castShadow=!0,e.add(r),r}bogie(e,t,n=.21){const r=new Dt;r.position.x=t,e.add(r);const s=n+.1;for(const a of[-.4,.4]){tt(r,[.86,.09,.05],[0,s+.17,a],this.chassis);for(const o of[-.28,.28])tt(r,[.15,.15,.07],[o,s,a],this.chassis)}for(const a of[-.28,.28])for(const o of[-.33,.33])this.wheel(r,n,[a,s,o]);return tt(r,[.3,.14,.52],[0,s+.22,0],this.chassis),r}buffers(e,t,n,r){const s=Math.sign(t);tt(e,[.08,.3,.92],[t,n,0],r),tt(e,[.12,.1,.1],[t+s*.06,n-.08,0],this.chassis);for(const a of[-.29,.29]){const o=Vt(e,.045,.1,[t+s*.06,n,a],this.chassis,8);o.rotation.z=Math.PI/2;const c=Vt(e,.085,.05,[t+s*.12,n,a],this.rail,14);c.rotation.z=Math.PI/2}}wagon(e,t,n,r,s=!0){const a=new Dt;a.position.x=t,e.add(a);for(const c of[-.36,.36])tt(a,[1.5,.11,.07],[0,.6,c],this.chassis);tt(a,[1.44,.06,.64],[0,.615,0],this.chassis);const o=Rr(a,[1.4,.6,.72],[0,.92,0],n);for(const c of[-.375,.375]){for(const l of[-.52,-.18,.18,.52])tt(a,[.085,.58,.06],[l,.92,c],n);for(const l of[-.675,.675])tt(a,[.06,.63,.075],[l,.92,c],this.chassis);tt(a,[1.38,.05,.05],[0,1.06,c],this.chassis)}for(const c of[-.365,.365])tt(a,[1.46,.045,.06],[0,1.19,c],this.chassis);for(const c of[-.705,.705]){tt(a,[.03,.54,.64],[c,.9,0],this.soot),tt(a,[.035,.56,.03],[c*1.02,.9,0],this.chassis);for(const l of[-.22,.22])tt(a,[.04,.05,.18],[c*1.02,1.04,l],this.chassis)}if(s&&Ia(a,1.44,.37,.13,[0,1.21,0],this.roof),this.buffers(a,-.72,.6,this.chassis),this.buffers(a,.72,.6,this.chassis),r){const c=new Ke(new fn(1,.22),r);c.position.set(0,.82,.415),c.renderOrder=1,a.add(c)}return this.bogie(a,-.45),this.bogie(a,.45),this.shadowFrom(a,o),cc(a),a}locomotive(e,t,n){const r=new Dt;e.add(r),tt(r,[1.96,.14,.84],[0,.6,0],this.chassis),tt(r,[2.04,.05,1.02],[0,.68,0],n),this.buffers(r,-1,.6,this.chassis),this.buffers(r,1,.6,this.chassis);const s=Rr(r,[.9,.46,.76],[.3,.96,0],t,.05),a=Rr(r,[.26,.34,.66],[.87,.9,0],t,.05);Ia(r,.92,.39,.1,[.3,1.19,0],t),Vt(r,.07,.36,[.18,1.4,0],this.soot,16);const o=new Ke(new cr(.125,.075,.1,18),this.soot);o.position.set(.18,1.62,0),o.castShadow=!0,r.add(o);for(const u of[.48,.62])tt(r,[.08,.08,.5],[u,1.32,0],this.soot);for(const u of[-.385,.385])tt(r,[.46,.26,.02],[.42,.96,u],this.soot);const c=Rr(r,[.7,.72,.88],[-.6,1.07,0],t,.045);for(const u of[-.445,.445]){tt(r,[.5,.32,.02],[-.6,1.2,u*.9],this.glass);for(const d of[-.185,.185])tt(r,[.56,.045,.03],[-.6,1.2+d,u],n);for(const d of[-.28,.28])tt(r,[.045,.41,.03],[-.6+d,1.2,u],n)}tt(r,[.02,.32,.66],[-.955,1.2,0],this.glass),tt(r,[.02,.32,.58],[-.245,1.2,0],this.glass),Ia(r,.76,.46,.17,[-.6,1.43,0],this.roof);const l=Vt(r,.075,.05,[1.01,1.02,0],this.headlight,14);l.rotation.z=Math.PI/2;const h=Vt(r,.06,.05,[-.98,1.3,0],this.headlight,12);h.rotation.z=Math.PI/2;for(const u of[-.46,.46])Vt(r,.022,.56,[-.99,.92,u],this.rail,6);for(const u of[-.44,.44])tt(r,[.34,.05,.18],[-.78,.42,u],this.chassis);this.bogie(r,-.55,.23),this.bogie(r,.55,.23);for(const u of[-.46,.46]){tt(r,[1.18,.105,.065],[0,.33,u],this.rod);for(const d of[-.55,.55]){const f=Vt(r,.062,.09,[d,.33,u],this.chassis,12);f.rotation.x=Math.PI/2}}return this.shadowFrom(r,s,c,a),cc(r),r}buildTrain(e,t){const n=this.stage.root,r=zn(t)+.55,s=new Dt;s.position.set(At(1),0,r),n.add(s);const a=new Dt;a.position.x=-Tt*1.18,s.add(a),this.locomotive(a,this.engineSkin,this.blackTrim);const o=v0(e),c=new Dt;c.position.set(a.position.x-1.05,Qt.y,0),s.add(c);const l=this.sign(c,e.label.toUpperCase(),Qt.board,Qt.h,[Qt.board/2,0,0],Lt.ground,Et.plain,1,1),h=this.sign(c,"",Qt.board,Qt.h,[Qt.board/2,0,0],Lt.held,"#1b1405",1,1);h.mesh.visible=!1;const u=this.sign(c,"COMPARE OFF",Qt.chip,Qt.h,[Qt.board+Qt.chip/2,0,0],Lt.chip,"#ffffff",1,1);u.mesh.renderOrder=5;for(const A of[l,h,u])this.detach(A.mesh);this.billboards.push(c),this.plates.push({mesh:c,glyph:Qt.h*.56,cap:2,min:dc});const d=[];for(let A=1;A<=e.rebuild;A++){const D=this.amberSkin.clone();d.push({node:this.wagon(s,(A-1)*Tt,D,this.rebuildPaint,!1),glow:D,week:A,check:!1})}for(let A=1;A<=e.check;A++){const D=this.whiteSkin.clone();d.push({node:this.wagon(s,(e.rebuild+A-1)*Tt,D,this.comparePaint),glow:D,week:e.rebuild+A,check:!0})}const{crates:f,tagged:v}=p0(e),g=new gn(1,1,1);g.translate(0,.5,0);const m=new Ir(g,this.crateWood,f);m.castShadow=!0,m.receiveShadow=!0;const p=new an({color:As.broken,emissive:As.broken,emissiveIntensity:.35,roughness:.5}),b=v?new Ir(x0(),p,v):null,w=new wt;let _=0,T=0;for(let A=0;A<e.rebuild;A++){const D=Math.floor(f*(A+1)/e.rebuild)-Math.floor(f*A/e.rebuild),O=Math.max(1,Math.ceil(D/5)),I=Math.max(1,Math.ceil(D/O)),z={x:1.26/I,z:.6/O},V={x:z.x*.84,z:z.z*.84,y:Math.min(.3,Math.max(.16,z.x*.9))};for(let q=0;q<D;q++,_++){const G=q%I,Q=Math.floor(q/I);w.position.set(A*Tt-.63+z.x*(G+.5),1.225,-.3+z.z*(Q+.5)),w.scale.set(V.x,V.y,V.z),w.updateMatrix(),m.setMatrixAt(_,w.matrix),Math.floor((_+1)*v/f)>Math.floor(_*v/f)&&b&&b.setMatrixAt(T++,w.matrix)}}s.add(m),b&&(b.castShadow=!1,s.add(b));const y=new Dt;y.position.set((e.rebuild-1)*Tt+Tt/2,0,0),s.add(y),tt(y,[.46,.22,.34],[0,.36,0],this.chassis);const R=Vt(y,.07,.95,[0,.82,0],this.rail,10),P=new an({color:11740702,metalness:.1,roughness:.5,emissive:0,emissiveIntensity:1.6});Vt(R,.17,.26,[0,.46,0],P,12),this.stage.callbacks.set(u.mesh,()=>this.callbacks.toggleCoupling(e.id));const M=this.stage.interact(a,e.label,()=>this.callbacks.openPlate(e.id),[2.8,1.35,.6]);M.classList.add("engine-label","control-label"),M.addEventListener("keydown",A=>{const D=A.key==="ArrowRight"?1:A.key==="ArrowLeft"?-1:0;!D||this.locked||(A.preventDefault(),A.stopPropagation(),this.callbacks.moveTrain(e.id,D))});const x=this.stage.interact(y,`${e.label} comparison switch`,()=>this.callbacks.toggleCoupling(e.id),[0,2.35,0]);x.classList.add("coupling-label","control-label");for(const A of[M,x]){for(const D of["pointerenter","focus"])A.addEventListener(D,()=>{this.hoverFamily=e.id});for(const D of["pointerleave","blur"])A.addEventListener(D,()=>{this.hoverFamily===e.id&&(this.hoverFamily="")})}this.stage.callbacks.set(s,()=>this.callbacks.openPlate(e.id)),this.trains.push({family:e,group:s,engine:a,coupling:y,couplingHandle:R,couplingKnob:P,cars:d,board:l,switchSign:u,readout:h,crates:m,tags:b,tagMaterial:p,tag:c,tagX:c.position.x,engineLabel:M,couplingLabel:x,boardText:"",switchText:"",plateText:o,readoutText:"",tagsFixed:!1})}pixelsPerWeek(e){const t=new U(At(1),0,e).project(this.stage.camera),n=new U(At(2),0,e).project(this.stage.camera);return Math.max(8,Math.abs(n.x-t.x)/2*this.stage.host.clientWidth)}buildAttacks(e){for(const t of this.attacks){this.stage.callbacks.delete(t.group),this.stage.callbacks.delete(t.anchor);const n=this.stage.labels.findIndex(a=>a.element===t.label);n>=0&&this.stage.labels.splice(n,1);const r=this.plates.findIndex(a=>a.mesh===t.sign.mesh);r>=0&&this.plates.splice(r,1);const s=this.billboards.indexOf(t.sign.mesh);s>=0&&this.billboards.splice(s,1),t.label.remove(),t.group.removeFromParent()}this.attacks=e.attacks.map(t=>{const n=e.families.findIndex(v=>v.id===t.family),r=new Dt;r.position.set(At(t.week),0,zn(n)-.55),this.stage.root.add(r);const s=new Dt;s.position.x=-1.05,r.add(s),s.rotation.y=Math.PI,this.locomotive(s,this.black,this.blackTrim);const a=this.wagon(r,1.05,this.black,null),o=new fc(ii.red,2.4);Vt(a,.13,.16,[0,1.42,0],o.material,12);const c=[];r.traverse(v=>{v instanceof Ke&&c.push([v,v.material])});const l=this.outline(r),h=this.sign(r,`EXPECTED · WEEK ${t.week}`,2.9,.52,[.7,1.02,0],Lt.expected,Et.pink,1,2.2);h.mesh.renderOrder=4;const u=this.plates.find(v=>v.mesh===h.mesh);u&&(u.min=dc);const d=new wt;d.position.set(1.05,1.02,0),d.visible=!1,r.add(d);const f=this.stage.interact(d,"See why",()=>this.callbacks.openAttack(t.id),[0,.9,0]);return f.classList.add("attack-label"),this.stage.callbacks.set(r,()=>this.callbacks.openAttack(t.id)),{attack:t,group:r,anchor:d,label:f,sign:h,lamp:o,signText:"",skins:c,outline:l,ghost:!1,signSpot:!1}}),this.attackCase=e.id,this.buildFamilyBoard(e.families)}setGhost(e,t){if(e.ghost!==t){e.ghost=t;for(const[n,r]of e.skins)n.material=t?this.ghost:r,n.castShadow=!t&&r!==this.ghost;e.outline.visible=t}}outline(e){e.updateMatrixWorld(!0);const t=e.matrixWorld.clone().invert(),n=[];e.traverse(s=>{if(!(s instanceof Ke)||s.material===this.wheelFace)return;const a=new Xu(s.geometry,28);a.applyMatrix4(t.clone().multiply(s.matrixWorld)),n.push(a)});const r=new Wu(Yo(n),this.outlineInk);return r.computeLineDistances(),r.visible=!1,e.add(r),r}update(e,t,n,r){t.id!==this.attackCase&&this.buildAttacks(t),this.plan=e.plan;const s=this.stage.reduced.matches,a=s?1:Math.min(1,r*9),o=s?1:Math.min(1,r*5),c=t.contractEndWeek,l=e.time,h=e.started;h!==this.wasRunning&&(this.wasRunning=h,this.stage.hover=null);const u=document.activeElement instanceof HTMLElement&&document.activeElement.classList.contains("object-label"),d=this.muted||u?null:this.stage.hover,f=h&&l>=this.pack.weeks;this.locked=e.started&&!(e.phase==="plan"&&f),this.locked&&this.drag&&(this.drag=null);const v=this.gantryHold??c;this.gantry.targetX=At(v)+Tt/2,this.gantry.group.position.x+=(this.gantry.targetX-this.gantry.group.position.x)*a,this.nowLine.position.x=lc(l),this.nowLine.visible=h&&!f,this.leverHandle.rotation.x+=((h?.95:0)-this.leverHandle.rotation.x)*a,this.setLabel(this.leverLabel,"Run the plan",h&&!f?"Run the plan. The weeks are running.":f?"Run the plan. The run is over.":`Run the plan. Plays the ${this.pack.weeks} weeks.`),this.leverLamp.set(f?ii.unlit:h?ii.green:ii.red),this.leverLamp.tick(o);const g=!h&&!n.overCrew.length,m=g?"lit":"dark";this.leverText!==m&&(this.leverText=m,this.leverSign.paint("RUN THE PLAN",g?"#ffffff":"#c9b9be",g?"#d0245f":"#5b4a52"));const p=this.gantry.group.position.x>At((this.pack.weeks+1)/2)?At(1)-Tt/2+4.3:At(this.pack.weeks)+Tt/2-4.3;this.teamSign.mesh.position.x+=(p-this.teamSign.mesh.position.x)*(this.teamPlaced?a:1),this.teamPlaced=!0,this.gantryWeek!==v&&(this.gantryWeek=v,this.gantrySign.paint(`${this.pack.legacyProductName.toUpperCase()} SWITCHES OFF AFTER WEEK ${v}`));const b=new Set;if(this.hoverFamily&&!this.locked){const y=this.trains.find(R=>R.family.id===this.hoverFamily);if(y){const R=Gn(e.plan,y.family.id),P=y.family.rebuild+(R.coupled?y.family.check:0);for(let M=R.start;M<R.start+P;M++)b.add(M)}}const w=this.drag?Gn(e.plan,this.drag.train.family.id).start:0;for(let y=1;y<=this.pack.weeks;y++){const R=n.crew[y],P=R>this.pack.crew;this.busyText[y]=uc(R,this.pack.crew);const M=y===w,x=`${R}|${P}|${M}`;this.weekText[y]!==x&&(this.weekText[y]=x,this.weekSigns[y].paint([String(y),this.busyText[y]],M?["#1b1405","#1b1405"]:P?["#ffffff","#ffffff"]:[Et.plain,R?Et.plain:Et.gray],M?Lt.held:P?"#b3261e":Lt.ground)),this.weekSigns[y].material.color.lerp(new Ge(b.has(y)&&!P&&y!==w?16769702:16777215),o)}const _=n.overCrew,T=_.length?`WEEK${_.length>1?"S":""} ${_.length>1?_.slice(0,-1).join(", ")+" AND "+_.at(-1):_[0]}: ${Math.max(..._.map(y=>n.crew[y]))} FAMILIES, THE TEAM CAN ONLY WORK ON ${this.pack.crew}`:`THE TEAM CAN WORK ON ${this.pack.crew} FAMILIES AT A TIME`;this.teamText!==T&&(this.teamText=T,this.teamSign.paint(T,_.length?Et.red:Et.warm)),this.readoutText="";for(const y of this.trains){const R=Gn(e.plan,y.family.id),P=n.families.find(_e=>_e.family.id===y.family.id),M=this.drag?.train===y;if(M){const _e=this.pixelsPerWeek(y.group.position.z),Le=At(this.drag.startWeek)+this.drag.dx/_e*Tt;y.group.position.x=Math.max(At(1),Math.min(At(Vs(this.pack,y.family,R.coupled)),Le))}else y.group.position.x+=(At(R.start)-y.group.position.x)*a;const x=P.rebuiltFrom>this.pack.weeks?`LIVE AFTER WEEK ${this.pack.weeks}`:`LIVE WEEK ${P.rebuiltFrom}`,A=P.checkValid?`COMPARED BY WEEK ${P.validatedFrom}`:R.coupled?"TOO LATE TO COMPARE":"NOT COMPARED";if(M){const _e=`STARTS WEEK ${R.start} · ${x} · ${A}`;this.readoutText=_e,y.readoutText!==_e&&(y.readoutText=_e,y.readout.paint(`STARTS WEEK ${R.start} · ${x}`))}y.readout.mesh.visible=M,y.board.mesh.visible=!M;const D=h&&l>=P.rebuiltFrom-1,O=P.checkValid&&(!h||l>=P.validatedFrom-1),I=!h||!D?x:O?"LIVE, COMPARED":"LIVE, NOT COMPARED",z=`${y.family.label.toUpperCase()} · ${I}|${h}`;if(y.boardText!==z){y.boardText=z;const _e=!h||!D?Et.gray:O?Et.green:Et.warm;y.board.paint([[[`${y.family.label.toUpperCase()}  `,Et.plain],[I,_e]]])}const V=R.coupled?P.checkValid?"COMPARE ON":"TOO LATE TO COMPARE":"COMPARE OFF";y.switchText!==V&&(y.switchText=V,y.switchSign.paint(V,"#ffffff",R.coupled?P.checkValid?Lt.chipOn:Lt.chipLate:Lt.chip)),this.placeTag(y,R.coupled,a),y.couplingHandle.rotation.z+=((R.coupled?0:-.9)-y.couplingHandle.rotation.z)*a;const q=h&&P.checkValid&&l>=P.validatedFrom-1;q!==y.tagsFixed&&(y.tagsFixed=q);const G=new Ge(q?As.fixed:As.broken);y.tagMaterial.color.lerp(G,o),y.tagMaterial.emissive.lerp(G,o);for(const _e of y.cars){const Le=R.start+_e.week-1;_e.check&&(_e.node.visible=R.coupled,_e.glow.color.lerp(new Ge(R.coupled&&!P.checkValid?7237230:15394524),o));const Ne=h&&l>=Le-.5&&_e.node.visible;_e.glow.emissive.lerp(new Ge(Ne?_e.check?6974042:9065488:0),o)}const Q=this.locked?"Click for details":"Drag to move. Click for details";this.setLabel(y.engineLabel,this.locked?"Details":"Drag or click",`${y.family.label}. Starts week ${R.start}. ${Q}.${this.locked?"":" Left and Right arrows move it one week."}`);const oe=R.coupled?"Remove comparison":"Add comparison";this.setLabel(y.couplingLabel,oe,`${y.family.label} comparison switch. ${V.toLowerCase()}. ${oe}.`);const le=d===y.coupling||document.activeElement===y.couplingLabel;this.show(y.engineLabel,!M&&(d===y.group||d===y.engine)),this.show(y.couplingLabel,d===y.coupling),y.couplingKnob.emissive.lerp(new Ge(le&&!this.locked?16743004:0),o)}for(const y of this.attacks){const R=Vn(y.attack,l,s),P=!h||!R.entered;this.setGhost(y,P),y.anchor.visible=R.settled&&h;const M=n.attacks.find(z=>z.attack.id===y.attack.id),x=At(y.attack.week),A=s?R.progress:1-Math.pow(1-R.progress,3);y.group.position.x=P?x:oc+(x-oc)*A;const D=P?"expected":R.settled?M.caught?"caught":"missed":"arriving",O=`${P?`EXPECTED · WEEK ${y.attack.week}`:`${y.attack.short.toUpperCase()} · ${R.settled?M.caught?"CAUGHT":"MISSED":`WEEK ${y.attack.week}`}`}|${D}`;y.signText!==O&&(y.signText=O,y.sign.fit(P?2.9:4.6),y.sign.paint(O.split("|")[0],P?Et.pink:"#ffffff",P?Lt.expected:R.settled?M.caught?Lt.chipOn:"#b3261e":"#3a2a33")),y.sign.mesh.visible=P||R.settled,y.lamp.set(!P&&R.settled?M.caught?ii.green:ii.red:ii.unlit),y.lamp.tick(o);const I=n.families.find(z=>z.family.id===y.attack.family).family.label;this.setLabel(y.label,"See why",`${y.attack.short}, week ${y.attack.week}, ${I} family, ${M.caught?"caught":"missed"}. Click to see why.`),this.show(y.label,d===y.group&&R.settled&&h)}this.show(this.leverLabel,d===this.lever||d===this.leverHandle),this.show(this.familyBoardLabel,d===this.familyBoard),this.face(),this.placeAttackSigns(e.plan,a)}placeAttackSigns(e,t){const n=this.stage.host.clientWidth,r=this.stage.host.clientHeight;if(!n||!r||!this.attacks.length)return;const s=this.stage.camera;s.updateMatrixWorld(),this.stage.root.updateMatrixWorld(!0);const a=new U,o=_=>(_.project(s),[(_.x+1)/2*n,(1-_.y)/2*r]),c=_=>{let T=1/0,y=1/0,R=-1/0,P=-1/0;for(const M of _){const[x,A]=o(M);T=Math.min(T,x),R=Math.max(R,x),y=Math.min(y,A),P=Math.max(P,A)}return[T,y,R,P]},l=(_,T=_.matrixWorld)=>{const{width:y,height:R}=_.geometry.parameters;return c([[-1,-1],[1,-1],[1,1],[-1,1]].map(([P,M])=>a.set(P*y/2,M*R/2,0).applyMatrix4(T).clone()))},h=_=>{for(let T=_;T;T=T.parent)if(!T.visible)return!1;return!0},u=new Set(this.attacks.map(_=>_.sign.mesh)),d=[];for(const _ of this.billboards)u.has(_)||_.traverse(T=>{T instanceof Ke&&T.geometry instanceof fn&&h(T)&&d.push(T)});const f=d.map(_=>l(_)),v=[];for(const _ of this.trains){const T=_.family.rebuild+(Gn(e,_.family.id).coupled?_.family.check:0),{x:y,z:R}=_.group.position;for(let P=-1;P<T;P++){const M=y+(P-.5)*Tt,x=M+Tt;v.push(c([M,x].flatMap(A=>[0,1.75].flatMap(D=>[R-.5,R+.5].map(O=>new U(A,D,O))))))}}const g=4,m=(_,T,y=g)=>Math.max(0,Math.min(_[2],T[2])-Math.max(_[0],T[0])+y)*Math.max(0,Math.min(_[3],T[3])-Math.max(_[1],T[1])+y),p=[];for(let _=0;_<=10;_++)for(const T of _?[-_*.8,_*.8]:[0])for(const y of[1.6,-.15,2.45,-.95])p.push([.7+T,y]);const b=new ut,w=new U;for(const _ of this.attacks){const T=_.sign.mesh;if(!T.visible||!h(_.group))continue;const y=T.geometry.parameters.height*T.scale.y/2,R=D=>D+(D>0?y:-y);let P=p[0],M=1/0,x=null;for(const D of p){w.set(D[0],R(D[1]),0).applyMatrix4(_.group.matrixWorld),b.compose(w,T.quaternion,T.scale);const O=l(T,b);let I=0;for(const q of f)I+=m(O,q);I+=(O[2]-O[0])*(O[3]-O[1])-m(O,[0,3.9*16,n-this.stage.reserveRight,r],0);let z=0;for(const q of v)z+=m(O,q,0);const V=I*100+z*10+Math.abs(D[0]-.7)+Math.abs(D[1]-1.6)*.2;if(V<M&&(M=V,P=D,x=O),I===0&&z===0)break}const A=_.signSpot?t:1;T.position.x+=(P[0]-T.position.x)*A,T.position.y+=(R(P[1])-T.position.y)*A,_.signSpot=!0,x&&f.push(x)}}placeTag(e,t,n){const r=(Qt.board+Qt.chip)*e.tag.scale.x,s=e.family.rebuild+(t?e.family.check:0),a=e.engine.position.x-1.05,o=(s-1)*Tt+.75,c=e.group.position.x,l=this.attacks.filter(d=>d.attack.family===e.family.id).map(d=>[d.group.position.x-2.1-c,d.group.position.x+1.85-c]);let h=a,u=1/0;for(let d=a;d<=Math.max(a,o-r)+1e-6;d+=.2){let f=0;for(const[g,m]of l)f+=Math.max(0,Math.min(m,d+r)-Math.max(g,d));const v=f*10+(d-a)*.05;v<u-1e-6&&(u=v,h=d)}e.tagX=h,e.tag.position.x+=(h-e.tag.position.x)*n}clampTags(){const e=this.stage.host.clientHeight;if(e)for(const{element:t}of this.stage.labels){if(!t.classList.contains("shown")&&!t.classList.contains("targeted"))continue;const n=(3.9*16+t.offsetHeight/2)/e*100;parseFloat(t.style.top)<n&&(t.style.top=`${n}%`)}}show(e,t){e.classList.toggle("shown",t&&!this.muted)}setLabel(e,t,n){e.dataset.text!==t+n&&(e.dataset.text=t+n,e.textContent=t,e.setAttribute("aria-label",n),e.title=n)}}const Ys=document.createElement("span");Ys.style.cssText="position:fixed;width:1rem;height:1rem;visibility:hidden;pointer-events:none";document.body.append(Ys);const sh=new ResizeObserver(i=>document.body.classList.toggle("large-type",i[0].contentRect.width>25));sh.observe(Ys);window.addEventListener("pagehide",()=>{sh.disconnect(),Ys.remove()},{once:!0});function te(i,e="",t=""){const n=document.createElement(i);return n.textContent=e,n.className=t,n}function bt(i,e,t=""){const n=te("button",i,t);return n.type="button",n.addEventListener("click",e),n}const E0=""+new URL("caught-H_oJYQvl.mp3",import.meta.url).href,b0="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYyLjMuMTAwAAAAAAAAAAAAAAD/+3DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAsAAA6xACoqKioqKioqKj8/Pz8/Pz8/P1VVVVVVVVVVVWpqampqampqan9/f39/f39/f5WVlZWVlZWVlaqqqqqqqqqqqsDAwMDAwMDAwNXV1dXV1dXV1erq6urq6urq6v///////////wAAAABMYXZjNjIuMTEAAAAAAAAAAAAAAAAkApoAAAAAAAAOsfnZ80AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//twxAAADiElDLQ0AAKIpen3MvACBAwFcDAxZohfXd30Fxe0FBQyhcGgNDKd3v5d749ET5e93e/+nd30RKhERE/d3v///5d0REksXPt3d3eyAaAAwA4fsHAKAWB5QoDQGgNDJFxc/d3d3uCxcHz6gTD8EHVAg4oCByXBBwPn/g//+UOf/h/eb3XfWx+zVZmEAAEBlvXSCkw824EJkFOgWvpW5gdBGHwoG5ScJ8yywFjZB0QwkcYvBezxHEhd9uj8Yw65JlQqmVDkIZG12sMZf02OBnUFHKDFjqtZSTL25kqp7TvJsyYx2QnCo8fer7ra7Gq9zy4s10///zaJTf18w4yv3F1ej+6dWo/////6Pn+///+sTvC4QKM/l33eEGkFOOJd////5ouq12+//1jd2skbJIARCIJudP/7csQIABJdZ3G49oAaTCEnu57wACGJu8Y6HMjaNgnsuFZDMlhmC6CAFoI8iSI9A4B9E3FiJwSJTKIy0i+YAGMMAZCNkuyJiUyacJBaRFNDg93Wk6Juaj3NzMlzREkS8tqlLozfTy8STpJLP/nX+aLN3U+iTRyj5/opm9NM3W9Ny6OI2WiZImT7//WZlPoIUU6fMR+9fjlSzxEK6oACAACiK4lqlJyjCWnqhjIhylIQgpJWVSq6fb34hq15NHnRqletz7GO+tvGNvbQsZ1Bi4z/BriVlx86zZintGtrONXqs2qp2hEsn23O2KDn6fG6jVolrNmDdZLcq2x3uuf9usQzTPF6EuJcSMDWA1U8DCHUd6hmqdepR0Ja/g0dx73dgoIgaWAQVBVvX1A1iZiWejICAAABhQqAnCjl//twxAeAEHmHPeehUcpxISf6nvAAWqQU2b7giUi0qBUK1sveAyUg0silWx7zumXZBkz8EKfzum7velQkIYHlH25AoKChmDgQDgoWL3xJARpT9zj0GwaMyIYxnY8jcYAUAGxLC7IgMEo9IipwiCAaEvXvf////nJLGnmlX51Zz2Ro8Jic4IPCum/pXqUgnNA6QCl8n4AjP4QwmB/Gaq8l4c8sCuDCJSfyjsj06kFWYo3lysHEnVawGitKBGtqvo3OTHV9pga1pDW5vbniZOddPvqTWosCErI7QtqnMkJ8zMTOZJYGZfNI9UIUUejGh6KUiiQiI+OVTEIO81TVf33u2//4Op2EfQkwSAEOAOR6glIvTrc9H4uy+LtgoP/8uH4IH9P/WD4XuzuomlmGhDdTiVQIDABFYWECJv/7csQJgBKVh2349YACTK+o+56wAeX9r1HiEoDrRahgZE3esrKxgA4DslnVT6pPEBIfR3E6alh8mFZubRD6fzaZ+yY6a5j44mjyxPTS+Llv/ew0NGHF2jv3XF2Se/l7+DJn2WANjYc4vyUPI6W///+sfYbFkF6Fb0jztyis/3Xs//+8+VmxYOwfM0VJ46Dp91NlU7rzwJJDoQIZCGCAAdqBAYidOZfkmpEkoW9NK5cG7VyVxiamiMw1A4Xkg4wzQzd13DkrtrekU+pl8ku211Nve9A4aI8vk6O0mjyPpNOF8m5ubp5ktD02nSQbjuBOBBFEPI6S1H/fFeUmYfx5BHBAHSbEI5zmIn2M9zv/c5ztyRs6////9qJqdbSUVEOPHnX/7jYdw7h3HWE4eyZmMAAAAAMHpACsuNgZ//twxAgAkdlfP+Y9vko6K2c497Z5DwUFbToRVAyLJYH7is3Q6XXgPkx67EuOnz2mZ8zOPTMH67MF1uVtPTsD1q2aMl5Zeme+uWuSXcbn7xziPmZiOptUMRmvFmJUeWab/e1e/Pzi1LopzGEgg7AskxzE4pk0cTj1JEeNv+jv9v/62qdI0Ol1ZEf6HUFbYnQIcKPxZRxgmZRAACEVVgtiEb2nzBg7Og4nkqTVavVcSlGPeIbGzlsLAp30T0rf0177xredy3u/f7Thxs5bzLXlRBV6vQxQMkdiYzrVd9Q/2o0IqvphnjnOo38PbAo37+Bp2bgmiGkkT6HwomImPr1UZ+HQdDiQcfivCsAcglAwhiOIFcBtjuGAPLa3/////pO5simVrOqZiCQJwCAJ2BiNAhhlsykMh6hkWP/7csQLABJVm1/nofmCQrLstJQ++PSa9nk399wNZh43TW/S/p8TVxlnkYP+fl5PtKd/vRLeE//LF0rp3uETTTmKLLkff//wkuhg5A8oseQHhDjiy3REr/30TMl///QOA8qEUUp3EABQRQbiEBDOIehlQ98choOi+FwenOdbnD3SGr3xKCWMKrRCoYFYhjpPqPdW2220TjQAAeaIEZhqai4ljFA9V2+Pji08uCIRGyVRpXGrvtbWGv+UZRUYHMHWtRfDXKw0//KlNI9Vhr9Zh1iyQ5CQRSr//+1NhmGiw0VHB0H0iqByazNytf+zLSq3//lHKrWriqsHQdgBREBsfAhyFoSujSVUMvqHKdDVS3Rq43K6N5LJ00Vwlj9V0ZjTriellWaGlnlBGAAAE5Qggx/XMhLwgjx+tiGs//twxAuAUCWlRcesU8pyK6XQ9j35R0ohjenNVtbYWYuLJHCetZ7RNpu91+7b8nGw5jzVY4uyZp3bIP3/xKJSaOhh62V8qUfa+bhowJ97t27k62qurJ7igoCEYCDhQIOcy1K1jGmDGorcrfR8vQU7GVSDmOy0ZW/0MK+j/wrFRJjqbrAFcTZf3A0lsgx4suWZafMrCsy0ZW145dmt8EJWSVLT0K22smMU1mv9+CEIyqo9CC5C0yYkkxdz4iEWgOk2KsNH8hRB0Wn2MWmdinkjPcVkfwm+LCLISyiW2xVe1viLXp1wcrSl9YycnDY5S+mSilWwqZDpabxb/5+80jbbn0Z7qnr/////mv/rEjeWBUm5FDY+o8m34r3ysYIKQyNwIAA8WBgfKw3C+FqMmkg6sugdQta9Q0zG4v/7csQOgFAFXyVmPL5J8TQjYYWOeRx72Tb69tb2r212c+Xeh669x6vf+9ne2eKZrvdnTJiijah/em8zZ1JGzbUsyeJdGrAnr/vH3WSDR5Gvbj0BkEhYeYqDyJ+TRYk4kPVjf/b0DxhFBUagw3hV0P8prL/vqiJI/QqqwAOn6FhUunnU5OzFmfvVp6xzK1FN42LFbPGuFmPfah5qknbayzzoP3DYeze2Y43tlEbSbSiMXTYsxIR1ogmlqh9HONNWSd9BoYyzddtPI25JnF3txJsRtOGZ/Su1fYdKT2ed1KZ+7jLnAonY1Uv+//b/8s+H9XUgt+L1ABJQADIyYc3HYeYtW3DMqfoLrIx1kZPFInmjaA9YxpNgxkFIEzTjaxbe96zEpMZ63rZ2L3MyHp1NcRjwdD4g+a3/+gje//twxCKADdkRFwykw4LXIiTqmaABm2K8vWZr7eQ7PD13/353d1xoZAbZUlMtYpJw8ketGJdwfIwq5KT0LPiIq/GkATFAABzQTjRChonV0MqMNU269/H8jEU6qog4ppAkojCaBbRXEght/3LcSkhiMUmOf58/Onlb/w/K43GJZZp9YVLsPyyGHIchyGsORFJQ4aJ6l9axcsw2zwDOzINjhRjgKiYQX0L4RFYcCAjCAC5CODcTElzKkzJkUF2OM7bImI6kTZ3J8NYUkoSoQALsAgwyg4IP0Dd3KKoEyZcyYsKgDKBAoUM8eM4WCCDd3XyqWMD+PZWYfJjMs1djNlVygkAAAACJW1iDZXVUrgEuBDKYc4x94aczzUrVymoIyPzwlXI8DKD/bTwLoGSxnNdOHWryFl4SSiRJ2v/7csQiABhlmUP5h4ACXCztPx7wArCEq1OTvJjgVS5rHQuYyDwNBqziuI7A4y/BsI1gmkqqn7OSBXnY4rSiJurj5mrz9Pdzi5vlnYoFt9JoWBJAPgjmj/1iBgC0Gll/emXyRHMT4WFn////7mjv///+f0bWf/vx6f/////////f+v///qJ6KvENoV7nm0SPA////8yzM7PEwqohoqJXGgiCAiEQVopZ1y2ggwFdbFebUAogTUZnLYYqKOb4UYpCEMS5WYbNV6xnOo1baM+1/2983tavzBgwseuq2u/bEIVSzn0fQYP//7OZDezsjytXz7dnyu///9Nb8CIhiyr//8QsPn3////MTDxzpEfx8bxnFq1r8///////+Ipzres9/m+t6jwPjb3B7BoSqttbveQqgAAAAkACEc1y//twxAcATxlbM7yDAAneLGAAJieIDnN5WrJVVsiic881HzMz8Y5H+kjYqv+2wS71Vb62Z15zTqokzkQDBYSRRmq/pI4GRmf9r7WtVeZ8zjUaRCWdSTadpwsBbMyyR2vktVVrTPfzJGXmfVeZ8vnOBgoUEowipsnXYm0m5BR3//AEjoDIKCoR//o5UeZWcpioh2//mCgxAouxgoNlDNojJDdZ631o+eiUKiWUD5a02pOolzy1h8skoHSMxPJf/+8ajZKAwOjIPCMcNLLkqRKRI3eSbEorTZl9Qlkm4TxpWt////+Suk0AmAKDxRGw9mQFFGvV/USCpKpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",w0=""+new URL("lever-CJjkXikX.mp3",import.meta.url).href,A0=""+new URL("missed-BEAIvG93.mp3",import.meta.url).href,T0=""+new URL("new-round-BK4nuQR8.mp3",import.meta.url).href,R0=""+new URL("plate-CMDidtkC.mp3",import.meta.url).href,C0=""+new URL("run-end-OWrom0qL.mp3",import.meta.url).href,P0=""+new URL("shunt-DEwhsw-Z.mp3",import.meta.url).href,L0=""+new URL("sting-defeat-CW8pn3Nn.mp3",import.meta.url).href,D0=""+new URL("sting-victory-qx58Ty0W.mp3",import.meta.url).href,I0=.25,U0=.4,N0=i=>I0*i*i;function F0({sfx:i={},beds:e={},loops:t={},gains:n={},storageKey:r="audio.muted",autoDuck:s=!1,volume:a=U0}={}){const o={master:.8,sfx:1,bed:.55,duck:.3,...n},c=window.__audioLog||=[];let l=null,h,u,d,f=null,v=null,g=null;const m=new Map,p=new Map;let b=!1,w=0,_=!1,T=0;try{b=localStorage.getItem(r)==="1"}catch{}try{const I=parseFloat(localStorage.getItem(r+".volume"));I>=0&&I<=1&&(a=I)}catch{}const y=()=>b?0:o.master*N0(a),R=(I,z,V=3)=>fetch(z).then(q=>{if(!q.ok)throw new Error(`HTTP ${q.status}`);return q.arrayBuffer()}).then(q=>l.decodeAudioData(q)).then(q=>{m.set(I,q),I===v&&A()}).catch(q=>V>1?new Promise(G=>setTimeout(G,800)).then(()=>R(I,z,V-1)):console.warn(`[audio] ${I} failed to load`,q)),P=["pointerdown","pointerup","click","keydown","touchend"];let M=!1;function x(){if(!l){l=new(window.AudioContext||window.webkitAudioContext),h=l.createGain(),h.gain.value=y(),h.connect(l.destination),u=l.createGain(),u.gain.value=o.sfx,u.connect(h),d=l.createGain(),d.gain.value=o.bed,d.connect(h),l.onstatechange=()=>{l.state==="running"&&v&&!f&&A()};for(const[I,z]of Object.entries({...i,...e}))R(I,z)}l.state!=="running"&&(l.resume().catch(()=>{}),M||setTimeout(()=>{l.state!=="running"&&!document.hidden&&!M&&(M=!0,console.warn(`[audio] the AudioContext is still ${l.state} after a click or key press; the next click or key press tries again`))},1e3))}for(const I of P)addEventListener(I,x,!0);document.addEventListener("visibilitychange",()=>{l&&(document.hidden||l.resume().catch(()=>{}))});function A(){if(f){try{f.stop()}catch{}f=null}const I=v&&m.get(v);I&&(f=l.createBufferSource(),f.buffer=I,f.loop=!0,t[v]&&([f.loopStart,f.loopEnd]=t[v]),f.connect(d),f.start())}function D(I,z){const V=l.currentTime,q=Math.max(w,V+I/1e3),G=d.gain;w=q,G.cancelScheduledValues(V),G.setTargetAtTime(o.bed*o.duck,V,z),G.setTargetAtTime(o.bed,q,.15)}const O={play(I,{gain:z=1,rate:V=1,overlap:q=!1}={}){c.push(I);const G=l&&m.get(I);if(!G||b||document.hidden)return;const Q=l.currentTime,oe=!q&&p.get(I);if(oe){oe.g.gain.setTargetAtTime(0,Q,.01);try{oe.src.stop(Q+.05)}catch{}}const le=l.createBufferSource(),_e=l.createGain();le.buffer=G,le.playbackRate.value=V,_e.gain.value=z,le.connect(_e).connect(u),le.start(),s&&f&&D(Math.min(G.duration/V,1.2)*1e3,.02),q||(p.set(I,{src:le,g:_e}),le.onended=()=>{p.get(I)?.src===le&&p.delete(I)})},bed(I){_||I===v||(v=I,c.push("bed:"+I),l&&A())},duck(I=1500){if(!l||_)return;const z=l.currentTime,V=d.gain;w=Math.max(w,z+I/1e3),V.cancelScheduledValues(z),V.setTargetAtTime(o.bed*o.duck,z,.08),V.setTargetAtTime(o.bed,w,.4)},finish(I){if(!_){if(_=!0,v=null,c.push("finish:"+I),l&&f){const z=l.currentTime,V=d.gain,q=f;V.cancelScheduledValues(z),V.setValueAtTime(V.value,z),V.linearRampToValueAtTime(0,z+.4),setTimeout(()=>{try{q.stop()}catch{}f===q&&(f=null)},450)}T=setTimeout(()=>{T=0,O.play("sting-"+I)},400)}},reset(){if(T&&(clearTimeout(T),T=0),_=!1,v=null,c.push("reset"),f){try{f.stop()}catch{}f=null}if(l){const I=l.currentTime;d.gain.cancelScheduledValues(I),d.gain.setValueAtTime(o.bed,I)}},setMuted(I){b=!!I;try{localStorage.setItem(r,b?"1":"0")}catch{}h&&h.gain.setTargetAtTime(y(),l.currentTime,.03),g&&(g.textContent=b?"Sound off":"Sound on",g.setAttribute("aria-pressed",String(!b)))},get muted(){return b},setVolume(I){a=Math.max(0,Math.min(1,+I||0));try{localStorage.setItem(r+".volume",String(a))}catch{}h&&h.gain.setTargetAtTime(y(),l.currentTime,.03)},get volume(){return a},get debug(){return l?{master:h.gain.value,sfx:u.gain.value,bed:d.gain.value,bedPlaying:!!f,state:l.state}:null},get loaded(){return[...m.keys()]},mountToggle(I){if(I.tagName!=="BUTTON"){const z=document.createElement("button");z.type="button",I.appendChild(z),I=z}return g=I,I.addEventListener("click",()=>O.setMuted(!b)),O.setMuted(b),I}};return(window.__audioInstances||=[]).push(O),O}const k0=""+new URL("bed-music-DgZ_rVif.mp3",import.meta.url).href,O0=Object.fromEntries(Object.entries(Object.assign({"./caught.mp3":E0,"./couple.mp3":b0,"./lever.mp3":w0,"./missed.mp3":A0,"./new-round.mp3":T0,"./plate.mp3":R0,"./run-end.mp3":C0,"./shunt.mp3":P0,"./sting-defeat.mp3":L0,"./sting-victory.mp3":D0})).map(([i,e])=>[i.slice(2,-4),e])),jt=F0({sfx:O0,beds:{music:k0},gains:{bed:.275},storageKey:"rail-yard.muted"});Object.assign(window,{__dbg:{...window.__dbg,audio:jt}});const pc=new Map;function B0(i,e=45){const t=performance.now();return t-(pc.get(i)??-1/0)<e?!1:(pc.set(i,t),jt.play(i),!0)}const z0=1,H0="siem-rule-migration",V0="1.0.0",G0="Old SIEM to Splunk rule migration",W0="Calder Health",X0="old SIEM",$0="Splunk",q0="Compare the families with broken rules while the old SIEM is still on. If there is not enough time, skip the comparison for the family with the fewest incidents.",Y0=14,j0=2,K0={allAttacksCaught:!0},Z0=[{id:"contract-week-9",title:"Old SIEM to Splunk, old SIEM switches off after week 9",contractEndWeek:9,note:"The old SIEM switches off after week 9.",families:[{id:"identity",label:"Identity",rules:12,rework:5,rebuild:3,check:2,incidentsLastYear:7},{id:"endpoint",label:"Endpoint",rules:10,rework:4,rebuild:3,check:2,incidentsLastYear:5},{id:"email",label:"Email",rules:6,rework:0,rebuild:2,check:1,incidentsLastYear:4},{id:"cloud",label:"Cloud",rules:8,rework:3,rebuild:2,check:2,incidentsLastYear:2},{id:"network",label:"Network",rules:5,rework:0,rebuild:2,check:1,incidentsLastYear:1}],draft:[{family:"identity",start:1,coupled:!1},{family:"endpoint",start:1,coupled:!1},{family:"email",start:4,coupled:!1},{family:"cloud",start:4,coupled:!1},{family:"network",start:6,coupled:!1}],attacks:[{id:"a3-email",week:3,family:"email",simple:!0,label:"Phishing wave",short:"Phishing wave",rule:"Known bad sender"},{id:"a11-identity",week:11,family:"identity",simple:!1,label:"Credential stuffing on a service account",short:"Credential stuffing",rule:"Failed sign-ins then success, same account"},{id:"a12-endpoint",week:12,family:"endpoint",simple:!1,label:"Malware on a laptop",short:"Malware on a laptop",rule:"Script host spawned from an office document"},{id:"a12-network",week:12,family:"network",simple:!0,label:"DNS beacon",short:"DNS beacon",rule:"Repeated lookups to one new domain"},{id:"a13-email",week:13,family:"email",simple:!0,label:"Phishing link",short:"Phishing link",rule:"Known bad link"},{id:"a14-cloud",week:14,family:"cloud",simple:!1,label:"Mailbox forwarding to an outside address",short:"Mailbox forwarding",rule:"New forwarding rule then external send"}]},{id:"contract-week-7",title:"Same customer, old SIEM now switches off after week 7",contractEndWeek:7,note:"The same customer. The old SIEM now switches off after week 7.",families:[{id:"identity",label:"Identity",rules:12,rework:5,rebuild:3,check:2,incidentsLastYear:7},{id:"endpoint",label:"Endpoint",rules:10,rework:4,rebuild:3,check:2,incidentsLastYear:5},{id:"email",label:"Email",rules:6,rework:0,rebuild:2,check:1,incidentsLastYear:4},{id:"cloud",label:"Cloud",rules:8,rework:3,rebuild:2,check:2,incidentsLastYear:2},{id:"network",label:"Network",rules:5,rework:0,rebuild:2,check:1,incidentsLastYear:1}],draft:[{family:"identity",start:1,coupled:!1},{family:"endpoint",start:1,coupled:!1},{family:"email",start:4,coupled:!1},{family:"cloud",start:4,coupled:!1},{family:"network",start:6,coupled:!1}],attacks:[{id:"b5-endpoint",week:5,family:"endpoint",simple:!1,label:"Ransomware staging",short:"Ransomware staging",rule:"Volume shadow copy deletion"},{id:"b8-email",week:8,family:"email",simple:!0,label:"Phishing link",short:"Phishing link",rule:"Known bad link"},{id:"b8-network",week:8,family:"network",simple:!0,label:"DNS beacon",short:"DNS beacon",rule:"Repeated lookups to one new domain"},{id:"b9-identity",week:9,family:"identity",simple:!1,label:"Password spray from one address",short:"Password spray",rule:"Many accounts, one source, short window"},{id:"b10-endpoint",week:10,family:"endpoint",simple:!1,label:"Malware on a laptop",short:"Malware on a laptop",rule:"Script host spawned from an office document"},{id:"b13-cloud",week:13,family:"cloud",simple:!0,label:"Sign-in from a new country",short:"Sign-in from a new country",rule:"Impossible travel"}]}],J0=[{id:"o1",text:"Given a rule migration with a fixed week when the old SIEM switches off, the learner can schedule a comparison for each family with broken rules that ends before that week.",mistakes:["Runs the customer's plan, which compares nothing before the old SIEM switches off.","Adds a comparison that ends after the switch-off week, so there is nothing left to compare against."]},{id:"o2",text:"Given more comparisons than the team can run before an earlier switch-off, the learner can choose to leave the family with the fewest incidents uncompared.",mistakes:["Puts three families in work in one week, so the plan cannot run.","Drops the comparison for the family with the most incidents last year."]},{id:"o3",text:"Given families whose rules converted with nothing broken, the learner can let them go live without a comparison and give the team's weeks to the broken families.",mistakes:["Adds a comparison to every family and runs out of team weeks before the switch-off."]}],Q0={o1:["/cases/0/families/0","/cases/0/families/1","/cases/0/families/3"],o2:["/cases/1/families/3","/cases/1/families/0"],o3:["/cases/0/families/2","/cases/0/families/4"]},e_={schemaVersion:z0,id:H0,version:V0,title:G0,customer:W0,legacyProductName:X0,newProductName:$0,takeaway:q0,weeks:Y0,crew:j0,win:K0,cases:Z0,objectives:J0,objectiveMap:Q0};class Gt extends Error{}function Dn(i,e){if(!i||typeof i!="object"||Array.isArray(i))throw new Gt(`${e}: expected an object.`);return i}function en(i,e,t=1200){if(typeof i!="string"||!i.trim()||i.length>t)throw new Gt(`${e}: expected text of 1 to ${t} characters.`);return i}function Tn(i,e,t,n){if(typeof i!="number"||!Number.isSafeInteger(i)||i<t||i>n)throw new Gt(`${e}: expected a whole number from ${t} to ${n}.`);return i}function Gs(i,e,t,n){if(!Array.isArray(i)||i.length<t||i.length>n)throw new Gt(`${e}: expected ${t} to ${n} items.`);return i}function er(i,e){const t=en(i,e,80);if(!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(t))throw new Gt(`${e}: use letters, numbers, hyphens, or underscores.`);return t}function Ws(i,e){if(new Set(i).size!==i.length)throw new Gt(`${e}: IDs must be unique.`)}function To(i,e,t,n){const r=Gs(i,e,n.families.length,n.families.length).map((s,a)=>{const o=Dn(s,`${e}[${a}]`),c=er(o.family,`${e}[${a}].family`),l=n.families.find(d=>d.id===c);if(!l)throw new Gt(`${e}[${a}]: unknown family ${c}.`);const h=o.coupled;if(typeof h!="boolean")throw new Gt(`${e}[${a}].coupled: expected true or false.`);const u=Tn(o.start,`${e}[${a}].start`,1,t.weeks-l.rebuild-(h?l.check:0)+1);return{family:c,start:u,coupled:h}});return Ws(r.map(s=>s.family),e),r}function t_(i,e,t,n){const r=Dn(i,e),s=Gs(r.families,`${e}.families`,1,8).map((d,f)=>{const v=Dn(d,`${e}.families[${f}]`),g=`${e}.families[${f}]`,m=Tn(v.rules,`${g}.rules`,1,999),p=Tn(v.rebuild,`${g}.rebuild`,1,t);return{id:er(v.id,`${g}.id`),label:en(v.label,`${g}.label`,40),rules:m,rework:Tn(v.rework,`${g}.rework`,0,m),rebuild:p,check:Tn(v.check,`${g}.check`,1,t-p),incidentsLastYear:Tn(v.incidentsLastYear,`${g}.incidentsLastYear`,0,999)}});Ws(s.map(d=>d.id),`${e}.families`);const a=Tn(r.contractEndWeek,`${e}.contractEndWeek`,1,t-1),o={families:s},c=To(r.draft,`${e}.draft`,{weeks:t},o),l=Gs(r.attacks,`${e}.attacks`,1,12).map((d,f)=>{const v=Dn(d,`${e}.attacks[${f}]`),g=`${e}.attacks[${f}]`,m=er(v.family,`${g}.family`);if(!s.some(p=>p.id===m))throw new Gt(`${g}: unknown family ${m}.`);if(typeof v.simple!="boolean")throw new Gt(`${g}.simple: expected true or false.`);return{id:er(v.id,`${g}.id`),week:Tn(v.week,`${g}.week`,1,t),family:m,simple:v.simple,label:en(v.label,`${g}.label`,80),short:en(v.short,`${g}.short`,28),rule:en(v.rule,`${g}.rule`,120)}});Ws(l.map(d=>d.id),`${e}.attacks`);const h={id:er(r.id,`${e}.id`),title:en(r.title,`${e}.title`,160),contractEndWeek:a,note:en(r.note,`${e}.note`,300),families:s,draft:c,attacks:l};if(Wn({weeks:t,crew:n},h,c).overCrew.length)throw new Gt(`${e}.draft: the draft needs more than ${n} crew in one week.`);return h}function n_(i){const e=Dn(i,"pack");if(e.schemaVersion!==1)throw new Gt("pack.schemaVersion: only version 1 is supported.");const t=Tn(e.weeks,"pack.weeks",4,30),n=Tn(e.crew,"pack.crew",1,6),r=Gs(e.cases,"pack.cases",2,2).map((h,u)=>t_(h,`pack.cases[${u}]`,t,n));Ws(r.map(h=>h.id),"pack.cases");let s;if(e.theme!==void 0){const h=Dn(e.theme,"pack.theme");h.pack!==void 0&&en(h.pack,"pack.theme.pack",40),h.colors!==void 0&&Dn(h.colors,"pack.theme.colors"),s=h}const a={schemaVersion:1,id:er(e.id,"pack.id"),version:en(e.version,"pack.version",40),title:en(e.title,"pack.title",160),customer:en(e.customer,"pack.customer",60),legacyProductName:en(e.legacyProductName,"pack.legacyProductName",60),newProductName:en(e.newProductName,"pack.newProductName",60),takeaway:en(e.takeaway,"pack.takeaway",400),weeks:t,crew:n,cases:r,theme:s};if(Dn(e.win,"pack.win").allAttacksCaught!==!0)throw new Gt("pack.win.allAttacksCaught: must be true.");if(Wn(a,r[0],r[0].draft).attacks.every(h=>h.caught))throw new Gt("pack.cases[0].draft: the customer's plan must miss at least one attack, or there is nothing to improve.");const c=/\b(timetable|draft|crew|rework|converted|uncovered|watching|vans?|break|breaks)\b/i,l=[["pack.takeaway",a.takeaway],...r.flatMap((h,u)=>[...h.families.map((d,f)=>[`pack.cases[${u}].families[${f}].label`,d.label]),...h.attacks.flatMap((d,f)=>["label","short","rule"].map(v=>[`pack.cases[${u}].attacks[${f}].${v}`,d[v]]))])];for(const[h,u]of l){const d=u.match(c);if(d)throw new Gt(`${h}: "${d[0]}" is not in the word list. Say "plan", "broken in the rebuild" or "no rules running" (README "Words").`)}if(new TextEncoder().encode(JSON.stringify(a)).length>25e4)throw new Gt("pack: validated content must fit within 250000 UTF-8 JSON bytes.");return a}function i_(i,e){const t=n_(e?i:e_);if(t.cases.length!==2)throw new Gt("The pack needs a training case and a transfer case.");return t}const ah=(i,e)=>e.phase==="transfer"?i.cases[1]:i.cases[0],Nr=(i,e)=>e.started&&e.time>=i.weeks,r_=i=>!i.started;function mc(i){return{phase:"plan",started:!1,time:0,plan:i.cases[0].draft.map(e=>({...e})),trainingPlan:null,revisionPlan:null}}function s_(i,e){if(e.started)return e;const t=Ao(i,ah(i,e),e.plan).find(n=>n.kind==="crew");if(t)throw new Error(ih(t.week,t.count,i.crew));return{...e,started:!0,time:0}}function a_(i,e,t){if(!Number.isFinite(t)||t<0)throw new RangeError("Advance time must be zero or positive.");return!e.started||e.time>=i.weeks?e:{...e,time:Math.min(i.weeks,e.time+t)}}function gc(i,e){if(e.phase!=="plan"||!Nr(i,e))throw new Error("Run the plan first.");return{...e,phase:"revision",started:!1,time:0,trainingPlan:e.plan}}function o_(i,e){if(!["plan","revision"].includes(e.phase)||!Nr(i,e))throw new Error("Run the plan first.");const t={...e,phase:"transfer",started:!1,time:0};return e.phase==="plan"?t.trainingPlan=e.plan:t.revisionPlan=e.plan,t}function l_(i,e){if(!r_(i))throw new Error("The plan is running. Trains unlock when it ends.");return{...i,plan:e}}const jo=1,Ts=i=>`rail-yard:v${jo}:${i.id}`;function oh(i){let e=2166136261;for(const t of JSON.stringify(i))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0).toString(16)}function c_(i,e){return JSON.stringify({version:jo,contentStamp:oh(i),session:e})}function h_(i,e){if(i.length>1e6)throw new Error("The save is too large.");const t=Dn(JSON.parse(i),"save");if(t.version!==jo||t.contentStamp!==oh(e))throw new Error("This save uses a different content pack.");const n=Dn(t.session,"session"),r=n.phase;if(r!=="plan"&&r!=="revision"&&r!=="transfer")throw new Error("The saved phase is not valid.");if(typeof n.started!="boolean")throw new Error("The saved lever state is not valid.");const s=n.time;if(typeof s!="number"||!Number.isFinite(s)||s<0||s>e.weeks||!n.started&&s!==0)throw new Error("The saved week is not valid.");const a=r==="transfer"?e.cases[1]:e.cases[0],o=(l,h)=>l===null?null:To(l,h,e,a),c={phase:r,started:n.started,time:s,plan:To(n.plan,"plan",e,a),trainingPlan:o(n.trainingPlan,"trainingPlan"),revisionPlan:o(n.revisionPlan,"revisionPlan")};if((r==="revision"||r==="transfer")&&!c.trainingPlan)throw new Error("The saved session skipped the first run.");if(r!=="transfer"&&c.revisionPlan)throw new Error("The saved revision is out of order.");return c}const lh=(i,e)=>i.families.find(t=>t.family.id===e),u_=i=>i.charAt(0).toUpperCase()+i.slice(1),ch=(i,e)=>e.rebuiltFrom>i.weeks?`after week ${i.weeks}`:`week ${e.rebuiltFrom}`;function d_(i,e,t,n){const r=lh(t,n.attack.family),s=r.family,a=i.legacyProductName,o=i.newProductName,c=e.contractEndWeek,l=n.attack.week;switch(n.reason){case"old-rules":return`The ${a} was still on in week ${l}. It switches off after week ${c}. It caught the attack.`;case"checked":return`${s.label} went live on ${o} in week ${r.rebuiltFrom}. `+(s.rework?`The comparison found and fixed its ${s.rework} broken rules by week ${r.validatedFrom}.`:`The comparison showed by week ${r.validatedFrom} that all ${s.rules} rules work.`)+` This attack came in week ${l}.`;case"converted-clean":return`${s.label} went live on ${o} in week ${r.rebuiltFrom}. It was ${r.placement.coupled?"too late to compare":"not compared"}. `+(s.rework?`${s.rework} of its ${s.rules} rules are broken in the rebuild. This attack's rule was not one of them.`:`None of its ${s.rules} rules are broken in the rebuild.`);case"unchecked-rework":return`${s.label} went live on ${o} in week ${r.rebuiltFrom}. It was not compared. The family board shows ${s.rework} of its ${s.rules} rules are broken in the rebuild. This attack needed one of them.`;case"check-past-end":return`${s.label}'s comparison ended in week ${r.lastWeek}. The ${a} switched off after week ${c}, so there was nothing to compare against. Its ${s.rework} broken rules were not fixed.`;case"not-arrived":return(r.rebuiltFrom>i.weeks?`${s.label} was not live on ${o} by week ${i.weeks}.`:`${s.label} went live on ${o} in week ${r.rebuiltFrom}.`)+` The ${a} switched off after week ${c}. This attack came in week ${l}, and no rules were running for ${s.label}.`}}function hh(i,e,t){const n=lh(e,t.attack.family),r=n.family;switch(t.reason){case"old-rules":return`${u_(i.legacyProductName)} still on`;case"checked":return`${r.label} live and compared`;case"converted-clean":return`${r.label} live, rule not broken`;case"unchecked-rework":return`${r.label} live, ${r.rework} broken rules not compared`;case"check-past-end":return`${r.label} too late to compare`;case"not-arrived":return`${r.label} not live until ${ch(i,n)}`}}function f_(i,e,t,n){const r=[],s=a=>a.replace(/^(Week \d+: )(\w)/,(o,c,l)=>c+l.toUpperCase());for(const a of t.families){if(!a.checkValid||a.validatedFrom-1!==n)continue;const o=a.family;r.push({text:o.rework?`Week ${n}: ${o.label} compared. Its ${o.rework} broken rules were found and fixed.`:`Week ${n}: ${o.label} compared. All ${o.rules} rules work.`})}for(const a of t.attacks.filter(o=>o.attack.week===n))r.push({text:s(`Week ${n}: ${a.attack.short} ${a.caught?"caught":"missed"}. ${hh(i,t,a)}.`),attack:a.attack.id});return n===e.contractEndWeek&&r.push({text:s(`Week ${n}: ${i.legacyProductName} switched off.`)}),r}const _c=64e3;function Ro(i,e=0){if(!i||e>20)return null;try{const t=i.API_1484_11;if(t)return t;const n=i.parent&&i.parent!==i?i.parent:null;return Ro(n,e+1)??(e===0?Ro(i.opener??null,1):null)}catch{return null}}const vc={connected:!1,resumeData:()=>null,save:()=>{},finish:()=>{},reload:()=>{},record:()=>{},progress:()=>{}},Na="scorm.started";function p_(){try{return typeof sessionStorage>"u"?null:sessionStorage}catch{return null}}function m_(){const i=typeof window>"u"?null:Ro(window);if(!i)return vc;const e=i.Initialize("")==="true",t=!e&&i.GetLastError()==="103";if(!e&&!t)return vc;const n=p_(),r=t?Number(n?.getItem(Na)):NaN,s=Number.isFinite(r)&&r>0?r:Date.now();try{n?.removeItem(Na)}catch{}let a=!1,o=!1,c=i.GetValue("cmi.completion_status")==="completed";const l=(b,w)=>i.SetValue(b,w)==="true";let h=Number(i.GetValue("cmi.interactions._count"))||0,u=!1;const d=i.GetValue("cmi.entry"),f=i.GetValue("cmi.suspend_data"),v=(t||d==="resume")&&f?f:null;c||(l("cmi.exit","suspend"),l("cmi.completion_status","incomplete"),i.Commit(""));const g=()=>{if(!a){if(a=!0,o){i.Commit("");return}l("cmi.session_time",Mc(Date.now()-s)),i.Commit(""),i.Terminate("")}};window.addEventListener("pagehide",g);let m=!1;const p=()=>{m||(m=!0,setTimeout(()=>{m=!1,!a&&(window.removeEventListener("pagehide",g),window.addEventListener("pagehide",g))}))};return p(),{connected:!0,resumeData:()=>v,save(b){a||(c||l("cmi.exit","suspend"),l("cmi.suspend_data",b.length>_c?b.slice(0,_c):b),i.Commit(""),p())},finish(b={}){if(!(a||c)){if(c=!0,l("cmi.completion_status","completed"),b.score!==void 0&&b.max!==void 0){const w=b.min??0,_=b.max-w;l("cmi.score.min",String(w)),l("cmi.score.max",String(b.max)),l("cmi.score.raw",String(b.score)),_>0&&l("cmi.score.scaled",String(xc((b.score-w)/_,-1,1)))}b.passed!==void 0&&l("cmi.success_status",b.passed?"passed":"failed"),l("cmi.exit","normal"),l("cmi.suspend_data",""),i.Commit("")}},reload(){if(!a){o=!0;try{n?.setItem(Na,String(s))}catch{}}},record(b){if(a||u)return;const w=`cmi.interactions.${h}.`;if(!l(`${w}id`,uh(b.id,4e3))){u=!0;return}h++;const _=Rs(b.response),T=b.anyCorrect?.length?Rs(b.anyCorrect).map(y=>[y]):b.correct===void 0?[]:[Rs(b.correct)];l(`${w}type`,"choice"),l(`${w}timestamp`,new Date().toISOString().replace(/\.\d+Z$/,"Z")),Rs(b.objectives??[]).forEach((y,R)=>l(`${w}objectives.${R}.id`,y)),T.forEach((y,R)=>l(`${w}correct_responses.${R}.pattern`,y.join("[,]"))),l(`${w}learner_response`,_.join("[,]")),l(`${w}result`,b.result??(T.length?T.some(y=>g_(_,y))?"correct":"incorrect":"neutral")),b.latencyMs!==void 0&&Number.isFinite(b.latencyMs)&&l(`${w}latency`,Mc(b.latencyMs,!0)),b.description&&l(`${w}description`,b.description.replace(/\s+/g," ").trim().slice(0,250)),i.Commit("")},progress({location:b,measure:w}){a||(b!==void 0&&l("cmi.location",b.slice(0,1e3)),w!==void 0&&Number.isFinite(w)&&l("cmi.progress_measure",String(c?1:Math.round(xc(w,0,1)*1e3)/1e3)),i.Commit(""))}}}function uh(i,e=250){return(i.trim().replace(/[^A-Za-z0-9._~:\/-]+/g,"-").replace(/^-+|-+$/g,"")||"none").slice(0,e)}function Rs(i){return[...new Set((typeof i=="string"?[i]:i).map(e=>uh(e)))]}function g_(i,e){return i.length===e.length&&i.every(t=>e.includes(t))}function xc(i,e,t){return i<e?e:i>t?t:i}function Mc(i,e=!1){const t=Math.max(0,e?Math.round(i/10)/100:Math.round(i/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),s=Math.round(t%60*100)/100;return`PT${n>0?`${n}H`:""}${r>0?`${r}M`:""}${s}S`}function __(i,e){return i.connected?i.resumeData():localStorage.getItem(e)}function v_(i,e,t){i.connected?i.save(t):localStorage.setItem(e,t)}function Sc(i,e){localStorage.removeItem(e),i.connected&&i.save("")}const Pr=document.querySelector("#app");try{let i=function(F){const W=[];for(const ue of F.families){const Me=[];ue.uncoveredWeeks.length&&Me.push(`${Rt(ue.uncoveredWeeks.length,"week")} with no rules running`),!ue.checkValid&&ue.family.rework>0&&Me.push(`${ue.family.rework} broken rules not compared`),Me.length&&W.push([ue.family.label,Me.join(". ")])}return W},e=function(){const F=de(),W=Wn(g,m,m.draft),ue=JSON.stringify(_.plan)!==JSON.stringify(m.draft),Me=F.caught===F.total;return{win:Me,headline:Me?`All ${F.total} attacks caught`:`Caught ${F.caught} of ${F.total}`,lines:Me?["No attack got through."]:[],attacks:F.attacks.slice().sort(Z).map($e=>re(F,$e)),log:n(),moreNotes:i(F),notes:[...ue?[["Customer's plan",`Caught ${W.caught} of ${W.total}`]]:[]]}},t=function(){const F=de(),W=Wn(g,m,m.draft),ue=Wn(g,m,_.revisionPlan??_.trainingPlan??m.draft);return{win:F.caught===F.total,headline:`Round 3: caught ${F.caught} of ${F.total}`,takeaway:g.takeaway,attacks:F.attacks.slice().sort(Z).map(Me=>re(F,Me)),log:n(),moreNotes:i(F),notes:[["Customer's plan",`Caught ${W.caught} of ${W.total} (${b} off after week ${m.contractEndWeek})`],["Your earlier plan",`Caught ${ue.caught} of ${W.total} (${b} off after week ${m.contractEndWeek})`]]}},n=function(){if(!_.started)return[];const F=de(),W=_.time,ue=[];for(let Me=1;Me<=g.weeks;Me++)for(const $e of f_(g,we(),F,Me)){const nt=$e.attack&&F.attacks.find(mt=>mt.attack.id===$e.attack).attack;(nt?Vn(nt,W,y.matches).settled:W>=Me)&&ue.push($e.text)}return ue},r=function(){const F=n().slice(-3),W=F.join(`
`);J.hidden=!F.length,W!==Te&&(Te=W,J.replaceChildren(...F.map(ue=>te("li",ue))))},s=function(){nn.hidden=!1,ye(),$r.focus({preventScroll:!0})},a=function(F=!0){nn.hidden=!0,ye(),F&&et.focus({preventScroll:!0})},o=function(){!_.started||Be()||(T=!1,Ht(g.weeks-_.time,!0))},c=function(){!_.started||Be()||(T=!1,Ht(Math.floor(_.time+1e-6)+1-_.time,!0))},l=function(){const F=de(),W=_.time,ue=_.started,Me=ne(),$e=F.families.map(nt=>{const mt=nt.placement,$t=[];for(let vt=1;vt<=g.weeks;vt++){const Pt=vt>=mt.start&&vt<nt.rebuiltFrom,xt=mt.coupled&&vt>=nt.rebuiltFrom&&vt<=nt.lastWeek,Mt=vt<=Me&&!(ue&&W>=Me),Nt=vt>=nt.rebuiltFrom&&(!ue||W>=nt.rebuiltFrom-1),Ft=nt.checkValid&&vt>=nt.validatedFrom&&(!ue||W>=nt.validatedFrom-1);$t.push(Pt?"rebuild":xt?nt.checkValid?"compare":"too late to compare":Nt?Ft?"live, compared":"live, not compared":Mt?b:"no rules running")}return[nt.family.label,`Starts week ${mt.start}`,mt.coupled?"Compare on":"Compare off",...$t]});for(const nt of F.attacks){const mt=Vn(nt.attack,W,y.matches);!ue||!mt.entered||$e.push([`Week ${nt.attack.week}`,Ur(we(),nt.attack.family).label,nt.attack.short,mt.settled?nt.caught?"caught":"missed":"arriving"])}return $e},h=function(){const F=JSON.stringify([l(),ne(),_.phase,_.started]);if(F===zt&&Ne.childElementCount)return;zt=F;const W=document.activeElement,ue=W&&Ne.contains(W)?[...Ne.querySelectorAll("button")].indexOf(W):-1,Me=te("table"),$e=te("tr");$e.append(te("th","Family"),te("th","Start"),te("th","Comparison"));for(let xt=1;xt<=g.weeks;xt++)$e.append(te("th",String(xt)));Me.append($e);const nt=l();we().families.forEach((xt,Mt)=>{const Nt=te("tr"),Ft=nt[Mt],_r=te("td","","start-cell"),bn=(Di,Ii)=>{const Ks=bt(Ii,()=>Ri(xt.id,Di));return Ks.addEventListener("keydown",Zs=>{const Jo=Zs.key==="ArrowRight"?1:Zs.key==="ArrowLeft"?-1:0;Jo&&(Zs.preventDefault(),Ri(xt.id,Jo))}),Ks.setAttribute("aria-label",`${xt.label} ${Ft[1].toLowerCase()}. ${Ii}.`),Ks},jn=te("div","","start-row");jn.append(bn(-1,"Earlier"),te("span",Ft[1],"start-week"),bn(1,"Later")),_r.append(jn);const vr=bt(Ft[2],()=>pr(xt.id));vr.setAttribute("aria-label",`${xt.label} comparison, ${Ft[2].toLowerCase()}. Click to switch.`);const Yr=te("td");Yr.append(vr);const Ko=te("th","","name-cell"),Zo=bt(xt.label,()=>tn(xt.id));Zo.setAttribute("aria-label",`Details for the ${xt.label} family`),Ko.append(Zo),Nt.append(Ko,_r,Yr,...Ft.slice(3).map(Di=>{const Ii=te("td","",Wt[Di]??"");return Ii.append(te("span",Di,"sr-only")),Ii.title=Yn[Di]??Di,Ii})),Me.append(Nt)});for(const xt of nt.slice(we().families.length)){const Mt=te("tr","","attack-row"),Nt=te("td",xt.join(" · "));Nt.colSpan=g.weeks+3,Mt.append(Nt),Me.append(Mt)}const mt=te("div","","table-wrap");mt.append(Me);const $t=bt("Run the plan",qn,"primary"),vt=te("ul","","cell-key");for(const[xt,Mt]of Object.entries(Wt)){const Nt=te("li"),Ft=te("span","",`swatch ${Mt}`);Ft.setAttribute("aria-hidden","true"),Nt.append(Ft,te("span",xt)),vt.append(Nt)}const Pt=te("div","","list-actions");Pt.append($t,bt("Close list",()=>{ke(!1),Pe.focus(),f()})),Ne.replaceChildren(te("h2","Plan"),te("p",`Each cell is one week. The ${b} switches off after week ${ne()}. Click a family name for details.`,"note"),vt,mt,Pt),ue>=0&&Ne.querySelectorAll("button")[ue]?.focus({preventScroll:!0})},u=function(){const F=Math.max(1,Math.ceil(_.time));if(!De.hidden)return ve?"Click Close to go back.":"Click Start.";if(!Le.hidden)return"Click Close when you are done reading.";if(!Q.hidden&&H!=="loose")return ee;if(_.started){const Me=de();if(Be()){const $e=`Caught ${Me.caught} of ${Me.total}.`;return _.phase==="plan"?`${$e} Click an attack to see why. Then move a train to change the plan for round 2${Qe.hidden?"":", or click Results"}.`:_.phase==="revision"?`${$e} Click an attack to see why, or ${Qe.hidden?"click Go to round 3":"click Results, then Go to round 3"}.`:`${$e} Click an attack to see why.`}return T?`Week ${F} of ${g.weeks}.`:`Paused at week ${F}. Click Resume.`}const W=JSON.stringify(_.plan)===JSON.stringify(_.phase==="transfer"?_.revisionPlan??_.trainingPlan:m.draft);if(_.phase==="transfer"&&W)return`Round 3. The ${b} now switches off after week ${ne()}. Run the plan as it is, or change it first.`;const ue=Ao(g,we(),_.plan);if(ue.length){const Me=ue[0];return Me.kind==="crew"?ih(Me.week,Me.count,g.crew):`${Me.family.label}'s comparison ends after week ${ne()}, too late to compare. Move the train earlier, or remove the comparison.`}return _.phase==="plan"&&W?P()||!Ne.hidden?`Which families need a comparison before the ${b} switches off? Use Earlier, Later and Compare, then click Run the plan.`:`Which families need a comparison before the ${b} switches off? Move trains, then click Run the plan.`:"When the plan is ready, click Run the plan."},d=function(){const F=de(),W=F.attacks.filter($e=>$e.caught&&Vn($e.attack,_.time,y.matches).settled).length,ue=_.started?[`Round ${Ie()} of 3`,`Week ${Math.max(1,Math.ceil(_.time))} of ${g.weeks}`,`Caught ${W} of ${F.total}`]:[`Round ${Ie()} of 3`,`${F.total} attacks in ${g.weeks} weeks`],Me=_.started?"":He();return Me&&ue.push(Me),ue.join(" · ")},f=function(){const F=_.started&&!Be();if(at.hidden=!F,lt.textContent=T?"Pause":"Resume",Be()){const ue=_.phase==="transfer"?t():e(),Me=JSON.stringify(ue),$e="Click Close to look at the attacks.";_.phase==="plan"?ie(ue,[["Change the plan and run again (round 2)",Ci],["Skip to round 3",mr]],"side","Change the plan for round 2, skip to round 3, or click an attack in the yard to see why.",Me,!0):_.phase==="revision"?ie(ue,[["Go to round 3",mr]],"side","Click Go to round 3, or click an attack in the yard to see why.",Me,!0):(ie(ue,[],"side","Click an attack in the yard to see why.",Me,!0),le.classList.add("end"))}else if(_.phase==="transfer"&&!_.started){const ue=m.contractEndWeek-ne();ie({headline:"Round 3 of 3",attacks:[],notes:[],lines:[`The ${b} now switches off after week ${ne()}${ue>0?`, ${ft(ue,"week")} sooner`:""}.`,`All ${L[de().total]??de().total} attacks are new this time.`,`Your round-${_.revisionPlan?2:1} plan is on the tracks.`,"Run it as it is, or change it first. This round runs once."]},[],"modal","Click Close to see the yard.","round3",!0),Qe.hidden=!0,le.classList.remove("end")}else ie(null),le.classList.remove("end");yt&&(yt.gantryHold=_.phase==="transfer"&&!_.started&&C!=="round3"?m.contractEndWeek:null),dt.hidden=!De.hidden||_.started;const W=de().overCrew.length>0;dt.disabled=W,q.textContent=u(),dt.title=W?q.textContent:"",r(),O.textContent=d(),Ne.hidden||h(),yt&&(yt.muted=!De.hidden||!Q.hidden&&H==="modal"),J.hidden=J.hidden||!Q.hidden&&H==="side",Pr.classList.toggle("plate-beside-list",!Le.hidden&&!Ne.hidden&&!P()),yt?.update(_,we(),de(),0)},v=function(){if(_.time===0){_n.clear();return}const F=de().attacks.filter(W=>!_n.has(W.attack.id)&&Vn(W.attack,_.time,y.matches).settled);F.forEach(W=>_n.add(W.attack.id)),F.length&&jt.play(F.every(W=>W.caught)?"caught":"missed")};const g=i_(window.__ENGINE_CONTENT__,Object.hasOwn(window,"__ENGINE_CONTENT__")),m=g.cases[0],p=g.customer,b=g.legacyProductName,w=g.newProductName;let _=mc(g),T=!1;const y=matchMedia("(prefers-reduced-motion: reduce)"),R=matchMedia("(max-width:700px)"),P=()=>R.matches,M=matchMedia("(max-height:560px)"),x=te("div","","yard"),A=te("header","","mast"),D=te("div","","brand"),O=te("p","","meter");D.append(te("h1","The Rail Yard"),O);const I=te("div","","utility");A.append(D,I);const z=te("section","","control-region");z.setAttribute("aria-label","What to do now");const V=te("div","","guide"),q=te("p","","instruction");q.setAttribute("role","status"),q.id="instruction",V.append(q);const G=te("p","","status");G.setAttribute("role","status"),z.append(V,G);const Q=te("section","","overlay");Q.hidden=!0,Q.setAttribute("role","dialog"),Q.setAttribute("aria-label","What happened"),Q.tabIndex=-1;const oe=te("div","","overlay-card"),le=te("div","","detail");le.hidden=!0,le.tabIndex=0,le.setAttribute("role","region"),le.setAttribute("aria-label","Results");const _e=te("div","","guide-actions");_e.hidden=!0,oe.append(le,_e),Q.append(oe);const Le=te("aside","","plate");Le.hidden=!0,Le.setAttribute("role","dialog"),Le.setAttribute("aria-label","Details"),Le.tabIndex=-1;const Ne=te("section","","list-view");Ne.hidden=!0,Ne.setAttribute("aria-label","Plan as a list");const De=te("section","","intro");De.setAttribute("role","dialog"),De.setAttribute("aria-modal","true"),De.setAttribute("aria-label","The Rail Yard");const K=te("div","","area"),J=te("ol","","run-log");J.setAttribute("aria-label","What happened"),J.setAttribute("aria-live","polite"),J.hidden=!0,K.append(x,A,J,Le,Ne),Pr.replaceChildren(De,K,Q,z);const be=()=>K.style.setProperty("--mast-h",`${A.offsetHeight}px`);new ResizeObserver(be).observe(A),be();const we=()=>ah(g,_),de=()=>Wn(g,we(),_.plan),Be=()=>Nr(g,_),Rt=(F,W)=>`${F} ${W}${F===1?"":"s"}`,L=["zero","one","two","three","four","five","six","seven","eight","nine","ten"],ft=(F,W)=>`${L[F]??F} ${W}${F===1?"":"s"}`,Ve=(F,W)=>F.families.find(ue=>ue.family.id===W),Ie=()=>_.phase==="plan"?1:_.phase==="revision"?2:3,xe=m_();let ot=!1,Se=Date.now(),We="";const St=()=>{const F=`Round ${Ie()} of 3, ${we().title}${_.started?Be()?", results":", running":""}`,W=(Ie()-1+(Be()?1:0))/3;F+W!==We&&(We=F+W,xe.progress({location:F,measure:W}))},_t=()=>{const F=de(),W=we(),ue=_.plan.filter(Me=>Me.coupled).map(Me=>Me.family);xe.record({id:`${W.id}.round-${Ie()}`,description:`Round ${Ie()}: which families get a comparison with the ${b} before it switches off after week ${W.contractEndWeek}?`,response:ue.length?ue:"none",correct:jg(W),result:F.caught===F.total?"correct":"incorrect",latencyMs:Date.now()-Se})};let C="",S=null,H="modal",j="",ee="",Y="",Ce="",ae=!1,Re=!1;const ye=()=>{const F=!De.hidden,W=!nn.hidden;K.inert=F||W,z.inert=F||W,Ne.inert=F||W,Q.inert=F||W,De.inert=W,document.querySelector(".skip")?.toggleAttribute("inert",F),x.inert=F||W||!Ne.hidden||!Q.hidden&&H==="modal"},ie=(F,W=[],ue="modal",Me="",$e=JSON.stringify(F),nt=!W.length)=>{ue==="side"&&P()&&(ue=M.matches?"modal":"loose"),H=ue,ee=Me,Q.classList.toggle("loose",ue==="loose"),Q.classList.toggle("side",ue==="side"),j=F?[F.headline,F.takeaway??"",...F.lines??[],...F.attacks.map(Pt=>Pt.join(" ")),...F.notes.map(Pt=>Pt.join(": ")),...(F.moreNotes??[]).map(Pt=>Pt.join(": "))].join(" "):"";const mt=[];if($e!==Y&&(Y=$e,ae=!1),oe.classList.toggle("win",!!F?.win),F){const Pt=te("h2",F.headline);Pt.tabIndex=-1,mt.push(Pt),F.takeaway&&mt.push(te("p",F.takeaway,"card-line takeaway"));for(const Mt of F.lines??[])mt.push(te("p",Mt,"card-line"));if(F.attacks.length){const Mt=F.attacks.filter(bn=>bn[2]==="Missed"),Nt=ae?F.attacks:Mt,Ft=te("table","","result-table"),_r=te("tr");["Week","Attack","Result","Why"].forEach(bn=>_r.append(te("th",bn))),Ft.append(_r);for(const bn of Nt){const jn=te("tr");bn.forEach((vr,Yr)=>jn.append(te("td",vr,Yr===2?vr==="Caught"?"caught":"missed":""))),Ft.append(jn)}if(Nt.length&&mt.push(Ft),Mt.length<F.attacks.length||Mt.length&&F.moreNotes?.length){const bn=Mt.length<F.attacks.length?`Show all ${F.attacks.length}`:"Show family notes",jn=bt(ae?"Show less":bn,()=>{ae=!ae,Re=!0,f()},"result-toggle");jn.setAttribute("aria-expanded",String(ae)),mt.push(jn)}}const xt=[...F.notes,...ae?F.moreNotes??[]:[]];if(xt.length){const Mt=te("dl","","result-notes");for(const[Nt,Ft]of xt)Mt.append(te("dt",Nt),te("dd",Ft));mt.push(Mt)}if(F.log?.length){const Mt=te("ul","","run-log-list");for(const Ft of F.log)Mt.append(te("li",Ft));const Nt=te("details","","result-log");Nt.append(te("summary","What happened, week by week"),Mt),mt.push(Nt)}}le.replaceChildren(...mt),Re&&(Re=!1,le.querySelector(".result-toggle")?.focus({preventScroll:!0})),_e.replaceChildren(...W.map(([Pt,xt],Mt)=>bt(Pt,xt,Mt?"":"primary"))),S=null,j&&nt&&(S=()=>{C=$e,f()},_e.append(bt("Close",()=>S?.(),W.length?"":"primary"))),_e.hidden=!_e.childElementCount;const $t=!!j&&$e!==C&&Ne.hidden;Qe.hidden=!j||$t||!Ne.hidden;const vt=$t&&(Q.hidden||$e!==Ce);Ce=$t?$e:"",le.hidden=Q.hidden=!$t,Oe($t&&ue==="side"),ye(),vt&&ue!=="loose"&&(_e.querySelector("button")??le.querySelector("h2")??Q).focus({preventScroll:!0})};let ge=-1;const Oe=F=>{const W=F&&!P()?Math.round(Q.getBoundingClientRect().width||0)+24:0;Pr.classList.toggle("side-open",F&&!P()),!(!yt||W===ge)&&(ge=W,yt.stage.reserveRight=W,yt.stage.resize())},Ae=F=>{G.textContent=F===q.textContent?"":F};let he=!1;const ze=()=>{if(De.hidden)try{v_(xe,Ts(g),c_(g,_)),he&&(he=!1,Ae(""))}catch{he||Ae("This browser is not saving progress."),he=!0}},N=F=>{try{F(),ze(),he||Ae(""),f(),St()}catch(W){Ae(W.message)}},ne=()=>we().contractEndWeek,ce=F=>ch(g,F),Ee=(F,W)=>d_(g,we(),F,W),re=(F,W)=>[String(W.attack.week),W.attack.short,W.caught?"Caught":"Missed",hh(g,F,W)],Z=(F,W)=>F.attack.week-W.attack.week;let Te="";const He=()=>_.phase==="revision"?`Round 1: caught ${Wn(g,m,_.trainingPlan).caught} of ${m.attacks.length}`:"";let rt=null;const je=()=>{Le.hidden||(Le.hidden=!0,rt?.focus({preventScroll:!0}),rt=null,f())},hn=(F,W)=>{rt=document.activeElement;const ue=te("dl");for(const[Me,$e]of W)ue.append(te("dt",Me),te("dd",$e));Le.replaceChildren(te("h2",F),ue,bt("Close",je)),Le.hidden=!1,Le.focus({preventScroll:!0}),f(),jt.play("plate")},tn=F=>{const W=Ur(we(),F),ue=Ve(de(),F),Me=Gn(_.plan,F),$e=ue.checkValid?`Yes. All rules work from week ${ue.validatedFrom}.`:Me.coupled?`Too late to compare. The ${b} switches off after week ${ne()}.`:"No.";hn(W.label,[["Rules",String(W.rules)],["Broken in rebuild",W.rework?`${W.rework}. Only a comparison with the ${b} shows which ones.`:"None."],["Rebuild",`${Rt(W.rebuild,"week")} (orange cars)`],["Comparison",`${Rt(W.check,"week")} (white cars)`],["Incidents last year",String(W.incidentsLastYear)],["Starts",`Week ${Me.start}`],[`Live on ${w}`,ce(ue).replace(/^week/,"Week").replace(/^after/,"After")],["Compared",$e]])},Xr=()=>{rt=document.activeElement;const F=te("table","","board-table"),W=te("thead"),ue=te("tr"),Me=te("tbody");Us.forEach($e=>{const nt=te("th",$e);nt.setAttribute("scope","col"),ue.append(nt)}),W.append(ue),F.append(W,Me);for(const $e of rh(we().families)){const nt=te("tr");$e.forEach((mt,$t)=>{const vt=te($t?"td":"th",mt,$t===2&&mt!=="0"?"broken":"");$t||vt.setAttribute("scope","row"),nt.append(vt)}),Me.append(nt)}Le.replaceChildren(te("h2","Family board"),F,te("p",`Only a comparison with the ${b} shows which rules are broken. The ${b} must still be on.`,"note"),bt("Close",je)),Le.hidden=!1,Le.focus({preventScroll:!0}),f(),jt.play("plate")},Un=F=>{const W=de(),ue=W.attacks.find(Me=>Me.attack.id===F);Vn(ue.attack,_.time,y.matches).settled&&hn(`Week ${ue.attack.week}: ${ue.attack.label}`,[["Family",Ur(we(),ue.attack.family).label],["Rule needed",ue.attack.rule],["Result",ue.caught?"Caught":"Missed"],["Why",Ee(W,ue)]])},Ti=(F,W)=>N(()=>{if(_.phase==="plan"&&Be()&&(_=gc(g,_),Se=Date.now()),_.phase==="revision"&&Be())throw new Error("Round 2 is over. Click Results, then Go to round 3.");const ue=F(_.plan);JSON.stringify(ue)!==JSON.stringify(_.plan)&&W(),_=l_(_,ue),je()}),Ri=(F,W)=>Ti(ue=>qg(g,we(),ue,F,W),()=>B0("shunt")),pr=F=>Ti(W=>Yg(g,we(),W,F),()=>jt.play("couple")),qn=()=>N(()=>{if(_.started){if(Be()&&_.phase==="plan")throw new Error("The run is over. Move a train to try again.");return}_=s_(g,_),T=!0,je(),_n.clear(),_t(),jt.play("lever"),x.focus({preventScroll:!0})}),mr=()=>N(()=>{_=o_(g,_),Se=Date.now(),jt.play("new-round")}),Ci=()=>N(()=>{_=gc(g,_),Se=Date.now(),jt.play("new-round"),x.focus({preventScroll:!0})}),nn=te("section","","confirm");nn.hidden=!0,nn.setAttribute("role","alertdialog"),nn.setAttribute("aria-modal","true"),nn.setAttribute("aria-label","Restart");const Pi=te("div","","overlay-card");Pi.tabIndex=-1;const $r=bt("Cancel",()=>a()),qr=te("div","","guide-actions");qr.append(bt("Restart",()=>{a(!1),js()},"primary"),$r),Pi.append(te("h2","Restart from the briefing?"),te("p","This clears your plans and results for all three rounds.","card-line"),qr),nn.append(Pi),Pr.append(nn);const js=()=>N(()=>{_=mc(g),T=!1,C="",ve=!1,ot=!1,jt.reset(),je(),ke(!1),Fe();try{Sc(xe,Ts(g))}catch{}jt.play("new-round")});let yt=null;try{yt=new y0(x,g,{openPlate:tn,moveTrain:Ri,toggleCoupling:pr,pullLever:qn,openAttack:Un,openFamilyBoard:Xr})}catch{Ae("The 3D view could not start. Click List view, or reload the page."),document.body.classList.add("no-webgl")}const Li=document.getElementById("boot"),gr=()=>{!Li||Li.classList.contains("done")||(Li.classList.add("done"),setTimeout(()=>Li.remove(),400))};yt?(yt.ready().then(()=>requestAnimationFrame(()=>requestAnimationFrame(gr))),setTimeout(gr,2e4)):gr(),x.addEventListener("scene-lost",()=>{T=!1,Ae("The 3D view stopped. Reload the page."),document.body.classList.add("no-webgl")});const E=te("div","","overlay-card");E.tabIndex=-1;const k=te("div","","intro-body");k.tabIndex=0,k.setAttribute("role","region"),k.setAttribute("aria-label","Briefing"),De.append(E),E.append(te("h2","The Rail Yard"),te("p",`Move detection rules from an ${b} to ${w}.`,"intro-subtitle"),k);const X=m.families.reduce((F,W)=>F+W.rules,0),$=te("ol"),B=te("p","Keyboard: press Tab to go to a train. Press Left or Right arrow to move it one week. During a run, press Space to pause, Right arrow to go one week, and End to skip to the end. Press Esc to close a panel.","intro-keys");B.hidden=!0,$.append(te("li","Read the family board at the yard entrance, bottom left."),te("li","Drag a train to change the week its rebuild starts."),te("li","To add a comparison (white cars), click Compare off on the train's sign."),te("li","Click Run the plan."),te("li","Click an attack to see why it was caught or missed."));const se=te("div","","intro-col"),fe=te("div","","intro-col");k.append(se,fe),se.append(te("h3","The situation"),te("p",`${p} is moving ${X} detection rules from their ${b} to ${w}. Each train in the yard is one family of rules. The ${b} switches off after week ${m.contractEndWeek}.`),te("p",`Some rules are broken in the rebuild. Only a comparison with the ${b} shows which ones, so the comparison must end by week ${m.contractEndWeek}. The team can work on ${g.crew} families at a time.`),te("h3","Your goal"),te("p",`Catch all ${m.attacks.length} attacks. Each pink outlined car on the back rails is an attack. It stands at the week that last year's pattern says it will come.`)),fe.append(te("h3","What to do"),$,B);let ve=!1;x.tabIndex=-1;const pe=bt("Start",()=>N(()=>{!ve&&!_.started&&(Se=Date.now()),ve=!0,De.hidden=!0,ye(),jt.bed("music"),x.focus({preventScroll:!0})}),"primary");E.append(pe);const Fe=()=>{De.hidden=!1,pe.textContent=ve?"Close":"Start",B.hidden=!ve,ye(),E.focus({preventScroll:!0}),f()};document.addEventListener("focusin",F=>{De.hidden||De.contains(F.target)||pe.focus({preventScroll:!0})});const ke=F=>{Ne.hidden=!F,zt="",ye(),Pe.setAttribute("aria-expanded",String(F))},Pe=bt("List view",()=>{ke(Ne.hidden),f(),Ne.hidden||Ne.querySelector("button")?.focus()},"list-primary");Pe.setAttribute("aria-expanded","false");const Ye=jt.mountToggle(bt("Sound on",()=>{})),Qe=bt("Results",()=>{C="",f()}),dt=bt("Run the plan",qn,"primary run-button");Qe.hidden=!0;const lt=bt("Pause",()=>{T=!T,f()}),st=bt("Next week",()=>c()),Ue=bt("Skip to the end",()=>o()),at=te("div","","run-controls");at.setAttribute("role","group"),at.setAttribute("aria-label","Run controls"),at.append(lt,st,Ue);const et=bt("Restart",()=>s());I.append(dt,at,Qe,Pe,Ye,bt("Help",()=>Fe()),et);const Wt={[b]:"old",rebuild:"rebuild",compare:"check","too late to compare":"no-compare","live, compared":"checked","live, not compared":"unchecked","no rules running":"dark"},Yn={[b]:`The ${b} is still on this week.`,rebuild:`A rebuild week. The team works on this family. The team can work on ${g.crew} families at a time.`,compare:`A comparison week with the ${b}. The team works on this family. The team can work on ${g.crew} families at a time.`,"too late to compare":`The ${b} is off, so there is nothing to compare against.`,"live, compared":`Live on ${w} and compared with the ${b}.`,"live, not compared":`Live on ${w}. Not compared with the ${b}.`,"no rules running":"No rules are running for this family this week."};let zt="";const _n=new Set,pt=.5,Ht=(F,W=!0)=>{const ue=Be();_=a_(g,_,F);const Me=Be()&&!ue;if(Be()&&(T=!1,W=!0),Me&&_.phase==="transfer"&&!ot){ot=!0;const $e=de(),nt=[_.trainingPlan??m.draft,_.revisionPlan??_.trainingPlan??m.draft].map(vt=>Wn(g,m,vt)),mt=$e.caught+nt.reduce((vt,Pt)=>vt+Pt.caught,0),$t=$e.total+nt.reduce((vt,Pt)=>vt+Pt.total,0);xe.connected&&xe.finish({score:Math.round(mt/$t*100),max:100,passed:$e.caught===$e.total})}W&&(v(),Me&&(_.phase==="transfer"?jt.finish(de().caught===de().total?"victory":"defeat"):jt.play("run-end")),ze(),f(),Me&&St())};let Xt=0;yt&&(yt.stage.frame=F=>{if(T){Xt+=F;const W=Xt>=.1;W&&(Xt=0),Ht(F*pt,W)}yt?.update(_,we(),de(),F)}),window.advanceTime=F=>{if(!Number.isFinite(F)||F<0)throw Error("Time must be finite and positive.");Ht(F/1e3*pt),ze()},window.render_game_to_text=()=>{const F=de();return JSON.stringify({engine:"rail-yard",renderer:yt?"threejs":"none",phase:_.phase,started:_.started,time:_.time,running:T,introVisible:!De.hidden,plateOpen:!Le.hidden,listOpen:!Ne.hidden,guide:q.textContent,runLog:n(),detail:le.hidden?"":j,status:G.textContent,contractEndWeek:ne(),plan:_.plan,controls:{lever:yt?.leverLabel.textContent??"",trains:F.families.map(W=>({family:W.family.id,start:W.placement.start,coupled:W.placement.coupled,rebuiltFrom:W.rebuiltFrom,checkValid:W.checkValid,lastWeek:W.lastWeek}))},crew:F.crew.slice(1),problems:Ao(g,we(),_.plan),caught:F.attacks.filter(W=>W.caught&&Vn(W.attack,_.time,y.matches).settled).length,attacks:F.attacks.map(W=>({id:W.attack.id,week:W.attack.week,family:W.attack.family,caught:W.caught,reason:W.reason,...Vn(W.attack,_.time,y.matches)})),listRows:l(),objects:yt?.stage.describeObjects(),evidence:yt?.evidence(),readout:yt?.readoutText??"",drawCalls:yt?.stage.renderer.info.render.calls})},window.addEventListener("pagehide",()=>{ze()}),R.addEventListener("change",()=>f()),M.addEventListener("change",()=>f()),window.addEventListener("keydown",F=>{if(!De.hidden&&F.key==="Tab"){const W=document.activeElement;if(W===k&&!F.shiftKey){F.preventDefault(),pe.focus({preventScroll:!0});return}if(W===pe&&F.shiftKey){F.preventDefault(),k.focus({preventScroll:!0});return}if(W===pe||W===k){F.preventDefault(),(W===pe?k:pe).focus({preventScroll:!0});return}F.preventDefault(),k.focus({preventScroll:!0});return}if(!nn.hidden){F.key==="Escape"&&a();return}if(F.key==="Escape"){if(!De.hidden){pe.click();return}if(!Le.hidden){je();return}if(!Q.hidden&&S){S();return}Ne.hidden||(ke(!1),Pe.focus(),f());return}!De.hidden||!_.started||Be()||(F.key===" "&&!(F.target instanceof HTMLButtonElement&&!F.target.classList.contains("object-label"))&&(F.preventDefault(),T=!T,f()),F.key==="ArrowRight"&&!F.defaultPrevented&&(F.preventDefault(),c()),F.key==="End"&&(F.preventDefault(),o()))});try{const F=__(xe,Ts(g));F&&(_=h_(F,g),De.hidden=!0,ve=!0,T=_.started&&!Nr(g,_),Nr(g,_)||jt.bed("music"),de().attacks.forEach(W=>{Vn(W.attack,_.time,y.matches).settled&&_n.add(W.attack.id)}))}catch{try{Sc(xe,Ts(g))}catch{}}ye(),De.hidden||E.focus({preventScroll:!0}),f(),St()}catch(i){document.getElementById("boot")?.remove(),Pr.replaceChildren(te("h1","The Rail Yard could not load"),te("p",i.message))}
