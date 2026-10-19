(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="180",Ru=0,Jl=1,Cu=2,Lh=1,Dh=2,zn=3,si=0,Fe=1,Bn=2,ei=0,as=1,jl=2,Kl=3,Ql=4,Pu=5,xi=100,Lu=101,Du=102,Iu=103,Uu=104,Nu=200,Fu=201,Ou=202,zu=203,wa=204,Ta=205,Bu=206,Vu=207,ku=208,Hu=209,Gu=210,Wu=211,Xu=212,$u=213,qu=214,Ra=0,Ca=1,Pa=2,fs=3,La=4,Da=5,Ia=6,Ua=7,El=0,Yu=1,Zu=2,ni=0,Ju=1,ju=2,Ku=3,Ih=4,Qu=5,td=6,ed=7,Uh=300,ps=301,ms=302,Na=303,Fa=304,bo=306,_o=1e3,vi=1001,Oa=1002,en=1003,nd=1004,Sr=1005,Mn=1006,Lo=1007,Mi=1008,An=1009,Nh=1010,Fh=1011,er=1012,Al=1013,Ei=1014,Sn=1015,fr=1016,wl=1017,Tl=1018,nr=1020,Oh=35902,zh=35899,Bh=1021,Vh=1022,gn=1023,ir=1026,sr=1027,Rl=1028,Cl=1029,kh=1030,Pl=1031,Ll=1033,oo=33776,ao=33777,lo=33778,co=33779,za=35840,Ba=35841,Va=35842,ka=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37808,$a=37809,qa=37810,Ya=37811,Za=37812,Ja=37813,ja=37814,Ka=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,hl=36285,ul=36286,id=3200,sd=3201,Dl=0,rd=1,ti="",Ge="srgb",gs="srgb-linear",xo="linear",ae="srgb",Ii=7680,tc=519,od=512,ad=513,ld=514,Hh=515,cd=516,hd=517,ud=518,dd=519,ec=35044,nc="300 es",bn=2e3,yo=2001;let vs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}};const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const js=Math.PI/180,rr=180/Math.PI;function Ms(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function Il(s,t){return(s%t+t)%t}function fd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function pd(s,t,e){return s!==t?(e-s)/(t-s):0}function Ks(s,t,e){return(1-e)*s+e*t}function md(s,t,e,n){return Ks(s,t,1-Math.exp(-e*n))}function gd(s,t=1){return t-Math.abs(Il(s,t*2)-t)}function _d(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function xd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vd(s,t){return s+Math.random()*(t-s)}function Md(s){return s*(.5-Math.random())}function Sd(s){s!==void 0&&(ic=s);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(s){return s*js}function Ed(s){return s*rr}function Ad(s){return(s&s-1)===0&&s!==0}function wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Td(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*c,h*u,h*f,a*l);break;case"YZY":s.set(h*f,a*c,h*u,a*l);break;case"ZXZ":s.set(h*u,h*f,a*c,a*l);break;case"XZX":s.set(a*c,h*g,h*d,a*l);break;case"YXY":s.set(h*d,a*c,h*g,a*l);break;case"ZYZ":s.set(h*g,h*d,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ss(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ho={DEG2RAD:js,RAD2DEG:rr,generateUUID:Ms,clamp:Kt,euclideanModulo:Il,mapLinear:fd,inverseLerp:pd,lerp:Ks,damp:md,pingpong:gd,smoothstep:_d,smootherstep:xd,randInt:yd,randFloat:vd,randFloatSpread:Md,seededRandom:Sd,degToRad:bd,radToDeg:Ed,isPowerOfTwo:Ad,ceilPowerOfTwo:wd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:Rd,normalize:Ue,denormalize:ss};let jt=class Gh{constructor(t=0,e=0){Gh.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let h=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||h!==f||l!==d||c!==g){let m=1-a;const p=h*f+l*d+c*g+u*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*E);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const y=a*E;if(h=h*m+f*y,l=l*m+d*y,c=c*m+g*y,u=u*m+_*y,m===1-a){const R=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=R,l*=R,c*=R,u*=R}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],h=n[i+1],l=n[i+2],c=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+c*u+h*d-l*f,t[e+1]=h*g+c*f+l*u-a*d,t[e+2]=l*g+c*d+a*f-h*u,t[e+3]=c*g-a*u-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),f=h(n/2),d=h(i/2),g=h(r/2);switch(o){case"XYZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"YZX":this._x=f*c*u+l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u-f*d*g;break;case"XZY":this._x=f*c*u-l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-h)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(c-h)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(h+c)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=n*c+o*a+i*l-r*h,this._y=i*c+o*h+r*a-n*l,this._z=r*c+o*l+n*h-i*a,this._w=o*c-n*a-i*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class Wh{constructor(t=0,e=0,n=0){Wh.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+h*l+o*u-a*c,this.y=n+h*c+a*l-r*u,this.z=i+h*u+r*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Do=new z,sc=new pr;let Jt=class Xh{constructor(t,e,n,i,r,o,a,h,l){Xh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,l)}set(t,e,n,i,r,o,a,h,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],c=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],S=i[4],y=i[7],R=i[2],w=i[5],C=i[8];return r[0]=o*_+a*E+h*R,r[3]=o*m+a*S+h*w,r[6]=o*p+a*y+h*C,r[1]=l*_+c*E+u*R,r[4]=l*m+c*S+u*w,r[7]=l*p+c*y+u*C,r[2]=f*_+d*E+g*R,r[5]=f*m+d*S+g*w,r[8]=f*p+d*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-n*r*c+n*a*h+i*r*l-i*o*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,f=a*h-c*r,d=l*r-o*h,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(c*e-i*h)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*h-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-i*l,i*h,-i*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Io=new Jt;function $h(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cd(){const s=or("canvas");return s.style.display="block",s}const rc={};function ar(s){s in rc||(rc[s]=!0,console.warn(s))}function Pd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const oc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const s={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?xo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gs]:{primaries:t,whitePoint:n,transfer:xo,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),s}const ie=Ld();function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ui,Dd=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=or("canvas")),Ui.width=t.width,Ui.height=t.height;const i=Ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Id=0,Ul=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uo(i[o].image)):r.push(Uo(i[o]))}else r=Uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;const No=new z;let $e=class uo extends vs{constructor(t=uo.DEFAULT_IMAGE,e=uo.DEFAULT_MAPPING,n=vi,i=vi,r=Mn,o=Mi,a=gn,h=An,l=uo.DEFAULT_ANISOTROPY,c=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ms(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Uh;$e.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],d=h[5],g=h[9],_=h[2],m=h[6],p=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(d+1)/2,R=(p+1)/2,w=(c+f)/4,C=(u+_)/4,I=(g+m)/4;return S>y&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=C/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=I/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-c)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends vs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new $e(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ul(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Nd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qh extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ri=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Er.subVectors(this.max,Is),Ni.subVectors(t.a,Is),Fi.subVectors(t.b,Is),Oi.subVectors(t.c,Is),Gn.subVectors(Fi,Ni),Wn.subVectors(Oi,Fi),ai.subVectors(Ni,Oi);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!Fo(e,Ni,Fi,Oi,Er)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,Ni,Fi,Oi,Er))?!1:(Ar.crossVectors(Gn,Wn),e=[Ar.x,Ar.y,Ar.z],Fo(e,Ni,Fi,Oi,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}};const Pn=[new z,new z,new z,new z,new z,new z,new z,new z],hn=new z,br=new Ri,Ni=new z,Fi=new z,Oi=new z,Gn=new z,Wn=new z,ai=new z,Is=new z,Er=new z,Ar=new z,li=new z;function Fo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){li.fromArray(s,r);const a=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),h=t.dot(li),l=e.dot(li),c=n.dot(li);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const Od=new Ri,Us=new z,Oo=new z;let Ss=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Oo)),this.expandByPoint(Us.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Ln=new z,zo=new z,wr=new z,Xn=new z,Bo=new z,Tr=new z,Vo=new z;class Nl{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zo.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Xn.dot(this.direction),h=-Xn.dot(wr),l=Xn.lengthSq(),c=Math.abs(1-o*o);let u,f,d,g;if(c>0)if(u=o*h-a,f=o*a-h,g=r*c,u>=0)if(f>=-g)if(f<=g){const _=1/c;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*h)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-h),r),d=-u*u+f*(f+2*h)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-h),r),d=f*(f+2*h)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-h),r),d=-u*u+f*(f+2*h)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(wr,f),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){Bo.subVectors(e,t),Tr.subVectors(n,t),Vo.crossVectors(Bo,Tr);let o=this.direction.dot(Vo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);const h=a*this.direction.dot(Tr.crossVectors(Xn,Tr));if(h<0)return null;const l=a*this.direction.dot(Bo.cross(Xn));if(l<0||h+l>o)return null;const c=-a*Xn.dot(Vo);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let ue=class dl{constructor(t,e,n,i,r,o,a,h,l,c,u,f,d,g,_,m){dl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,l,c,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,h,l,c,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*c,d=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*h,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*c,d=h*u,g=l*c,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*c,d=h*u,g=l*c,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*c,d=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=g*l-d,e[8]=f*l+_,e[1]=h*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*h,d=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+_,e[5]=o*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*c,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Bd)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),$n.crossVectors(n,Ze),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),$n.crossVectors(n,Ze)),$n.normalize(),Rr.crossVectors(Ze,$n),i[0]=$n.x,i[4]=Rr.x,i[8]=Ze.x,i[1]=$n.y,i[5]=Rr.y,i[9]=Ze.y,i[2]=$n.z,i[6]=Rr.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],c=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],S=n[7],y=n[11],R=n[15],w=i[0],C=i[4],I=i[8],b=i[12],M=i[1],P=i[5],B=i[9],G=i[13],$=i[2],N=i[6],V=i[10],Z=i[14],W=i[3],X=i[7],et=i[11],ct=i[15];return r[0]=o*w+a*M+h*$+l*W,r[4]=o*C+a*P+h*N+l*X,r[8]=o*I+a*B+h*V+l*et,r[12]=o*b+a*G+h*Z+l*ct,r[1]=c*w+u*M+f*$+d*W,r[5]=c*C+u*P+f*N+d*X,r[9]=c*I+u*B+f*V+d*et,r[13]=c*b+u*G+f*Z+d*ct,r[2]=g*w+_*M+m*$+p*W,r[6]=g*C+_*P+m*N+p*X,r[10]=g*I+_*B+m*V+p*et,r[14]=g*b+_*G+m*Z+p*ct,r[3]=E*w+S*M+y*$+R*W,r[7]=E*C+S*P+y*N+R*X,r[11]=E*I+S*B+y*V+R*et,r[15]=E*b+S*G+y*Z+R*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*h*u-i*l*u-r*a*f+n*l*f+i*a*d-n*h*d)+_*(+e*h*d-e*l*f+r*o*f-i*o*d+i*l*c-r*h*c)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*c-n*l*c)+p*(-i*a*c-e*h*u+e*a*f+i*o*u-n*o*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*f*l+_*h*d-a*m*d-u*h*p+a*f*p,S=g*f*l-c*m*l-g*h*d+o*m*d+c*h*p-o*f*p,y=c*_*l-g*u*l+g*a*d-o*_*d-c*a*p+o*u*p,R=g*u*h-c*_*h-g*a*f+o*_*f+c*a*m-o*u*m,w=e*E+n*S+i*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=E*C,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(a*m*r-_*h*r+_*i*l-n*m*l-a*i*p+n*h*p)*C,t[3]=(u*h*r-a*f*r-u*i*l+n*f*l+a*i*d-n*h*d)*C,t[4]=S*C,t[5]=(c*m*r-g*f*r+g*i*d-e*m*d-c*i*p+e*f*p)*C,t[6]=(g*h*r-o*m*r-g*i*l+e*m*l+o*i*p-e*h*p)*C,t[7]=(o*f*r-c*h*r+c*i*l-e*f*l-o*i*d+e*h*d)*C,t[8]=y*C,t[9]=(g*u*r-c*_*r-g*n*d+e*_*d+c*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(c*a*r-o*u*r-c*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=R*C,t[13]=(c*_*i-g*u*i+g*n*f-e*_*f-c*n*m+e*u*m)*C,t[14]=(g*a*i-o*_*i-g*n*h+e*_*h+o*n*m-e*a*m)*C,t[15]=(o*u*i-c*a*i+c*n*h-e*u*h-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,c=r*a;return this.set(l*o+n,l*a-i*h,l*h+i*a,0,l*a+i*h,c*a+n,c*h-i*o,0,l*h-i*a,c*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,c=o+o,u=a+a,f=r*l,d=r*c,g=r*u,_=o*c,m=o*u,p=a*u,E=h*l,S=h*c,y=h*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+y)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+p))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+S)*C,i[9]=(m-E)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const l=1/r,c=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=bn,h=!1){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(h)g=r/(o-r),_=o*r/(o-r);else if(a===bn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===yo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=bn,h=!1){const l=this.elements,c=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(h)g=1/(o-r),_=o/(o-r);else if(a===bn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===yo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const zi=new z,un=new ue,zd=new z(0,0,0),Bd=new z(1,1,1),$n=new z,Rr=new z,Ze=new z,lc=new ue,cc=new pr;let Hn=class Yh{constructor(t=0,e=0,n=0,i=Yh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],h=i[1],l=i[5],c=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";let Fl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0;const hc=new z,Bi=new pr,Dn=new ue,Cr=new z,Ns=new z,kd=new z,Hd=new pr,uc=new z(1,0,0),dc=new z(0,1,0),fc=new z(0,0,1),pc={type:"added"},Gd={type:"removed"},Vi={type:"childadded",child:null},ko={type:"childremoved",child:null};let Oe=class fo extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fo.DEFAULT_UP.clone();const t=new z,e=new Hn,n=new pr,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=fo.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ns,Cr,this.up):Dn.lookAt(Cr,Ns,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}};Oe.DEFAULT_UP=new z(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new z,In=new z,Ho=new z,Un=new z,ki=new z,Hi=new z,mc=new z,Go=new z,Wo=new z,Xo=new z,$o=new le,qo=new le,Yo=new le;class mn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){dn.subVectors(i,e),In.subVectors(n,e),Ho.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(In),h=dn.dot(Ho),l=In.dot(In),c=In.dot(Ho),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*h-a*c)*f,g=(o*c-a*h)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,r,o,a,h){return this.getBarycoord(t,e,n,i,Un)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Un.x),h.addScaledVector(o,Un.y),h.addScaledVector(a,Un.z),h)}static getInterpolatedAttribute(t,e,n,i,r,o){return $o.setScalar(0),qo.setScalar(0),Yo.setScalar(0),$o.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(qo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),In.subVectors(t,e),dn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ki.subVectors(i,n),Hi.subVectors(r,n),Go.subVectors(t,n);const h=ki.dot(Go),l=Hi.dot(Go);if(h<=0&&l<=0)return e.copy(n);Wo.subVectors(t,i);const c=ki.dot(Wo),u=Hi.dot(Wo);if(c>=0&&u<=c)return e.copy(i);const f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(n).addScaledVector(ki,o);Xo.subVectors(t,r);const d=ki.dot(Xo),g=Hi.dot(Xo);if(g>=0&&d<=g)return e.copy(r);const _=d*l-h*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hi,a);const m=c*g-d*u;if(m<=0&&u-c>=0&&d-g>=0)return mc.subVectors(r,i),a=(u-c)/(u-c+(d-g)),e.copy(i).addScaledVector(mc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ki,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Zo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Il(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zo(o,r,t+1/3),this.g=Zo(o,r,t),this.b=Zo(o,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ie.workingToColorSpace(Pe.copy(this),t),Math.round(Kt(Pe.r*255,0,255))*65536+Math.round(Kt(Pe.g*255,0,255))*256+Math.round(Kt(Pe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,r=Pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let h,l;const c=(a+o)/2;if(a===o)h=0,l=0;else{const u=o-a;switch(l=c<=.5?u/(o+a):u/(2-o-a),o){case n:h=(i-r)/u+(i<r?6:0);break;case i:h=(r-n)/u+2;break;case r:h=(n-i)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ge){ie.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Pr);const n=Ks(qn.h,Pr.h,e),i=Ks(qn.s,Pr.s,e),r=Ks(qn.l,Pr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Qt;Qt.NAMES=Zh;let Wd=0;class Ci extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=as,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ta,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lr extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new z,Lr=new jt;let Xd=0,_n=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ec&&(t.usage=this.usage),t}},Jh=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}},jh=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ve=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=0;const on=new ue,Jo=new Oe,Gi=new z,Je=new Ri,Fs=new Ri,Ee=new z;let wn=class Kh extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?jh:Jh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Je.min,Fs.min),Je.expandByPoint(Ee),Ee.addVectors(Je.max,Fs.max),Je.expandByPoint(Ee)):(Je.expandByPoint(Fs.min),Je.expandByPoint(Fs.max))}Je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Ee.fromBufferAttribute(a,l),h&&(Gi.fromBufferAttribute(t,l),Ee.add(Gi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let I=0;I<n.count;I++)a[I]=new z,h[I]=new z;const l=new z,c=new z,u=new z,f=new jt,d=new jt,g=new jt,_=new z,m=new z;function p(I,b,M){l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),c.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(P),a[I].add(_),a[b].add(_),a[M].add(_),h[I].add(m),h[b].add(m),h[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,b=E.length;I<b;++I){const M=E[I],P=M.start,B=M.count;for(let G=P,$=P+B;G<$;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new z,y=new z,R=new z,w=new z;function C(I){R.fromBufferAttribute(i,I),w.copy(R);const b=a[I];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(w,b);const P=y.dot(h[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,b=E.length;I<b;++I){const M=E[I],P=M.start,B=M.count;for(let G=P,$=P+B;G<$;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,a=new z,h=new z,l=new z,c=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(c),h.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,h){const l=a.array,c=a.itemSize,u=a.normalized,f=new l.constructor(h.length*c);let d=0,g=0;for(let _=0,m=h.length;_<m;_++){a.isInterleavedBufferAttribute?d=h[_]*a.data.stride+a.offset:d=h[_]*c;for(let p=0;p<c;p++)f[g++]=l[d++]}return new _n(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kh,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],l=t(h,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const f=l[c],d=t(f,n);h.push(d)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const i={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];c.push(d.toJSON(t.data))}c.length>0&&(i[h]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const gc=new ue,ci=new Nl,Dr=new Ss,_c=new z,Ir=new z,Ur=new z,Nr=new z,jo=new z,Fr=new z,xc=new z,Or=new z;class te extends Oe{constructor(t=new wn,e=new lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=a[h],u=r[h];c!==0&&(jo.fromBufferAttribute(u,t),o?Fr.addScaledVector(jo,c):Fr.addScaledVector(jo.sub(e),c))}e.add(Fr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Dr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Dr,_c)===null||ci.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(gc.copy(r).invert(),ci.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,R=S;y<R;y+=3){const w=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);i=zr(this,p,t,n,l,c,u,w,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=zr(this,o,t,n,l,c,u,E,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,R=S;y<R;y+=3){const w=y,C=y+1,I=y+2;i=zr(this,p,t,n,l,c,u,w,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(h.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,y=m+2;i=zr(this,o,t,n,l,c,u,E,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function qd(s,t,e,n,i,r,o,a){let h;if(t.side===Fe?h=n.intersectTriangle(o,r,i,!0,a):h=n.intersectTriangle(i,r,o,t.side===si,a),h===null)return null;Or.copy(a),Or.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Or);return l<e.near||l>e.far?null:{distance:l,point:Or.clone(),object:s}}function zr(s,t,e,n,i,r,o,a,h,l){s.getVertexPosition(a,Ir),s.getVertexPosition(h,Ur),s.getVertexPosition(l,Nr);const c=qd(s,t,e,n,Ir,Ur,Nr,xc);if(c){const u=new z;mn.getBarycoord(xc,Ir,Ur,Nr,u),i&&(c.uv=mn.getInterpolatedAttribute(i,a,h,l,u,new jt)),r&&(c.uv1=mn.getInterpolatedAttribute(r,a,h,l,u,new jt)),o&&(c.normal=mn.getInterpolatedAttribute(o,a,h,l,u,new z),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:h,c:l,normal:new z,materialIndex:0};mn.getNormal(Ir,Ur,Nr,f.normal),c.face=f,c.barycoord=u}return c}class Pi extends wn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],c=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2));function g(_,m,p,E,S,y,R,w,C,I,b){const M=y/C,P=R/I,B=y/2,G=R/2,$=w/2,N=C+1,V=I+1;let Z=0,W=0;const X=new z;for(let et=0;et<V;et++){const ct=et*P-G;for(let Ut=0;Ut<N;Ut++){const Vt=Ut*M-B;X[_]=Vt*E,X[m]=ct*S,X[p]=$,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=w>0?1:-1,c.push(X.x,X.y,X.z),u.push(Ut/C),u.push(1-et/I),Z+=1}}for(let et=0;et<I;et++)for(let ct=0;ct<C;ct++){const Ut=f+ct+N*et,Vt=f+ct+N*(et+1),Nt=f+(ct+1)+N*(et+1),Yt=f+(ct+1)+N*et;h.push(Ut,Vt,Yt),h.push(Vt,Nt,Yt),W+=6}a.addGroup(d,W,b),d+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){const t={};for(let e=0;e<s.length;e++){const n=_s(s[e]);for(const i in n)t[i]=n[i]}return t}function Yd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Zd={clone:_s,merge:Ne};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tu extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new z,yc=new jt,vc=new jt;class tn extends tu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,yc,vc),e.subVectors(vc,yc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/h,e-=o.offsetY*n/l,i*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Kd extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Wi,Xi,t,e);i.layers=this.layers,this.add(i);const r=new tn(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new tn(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new tn(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const h=new tn(Wi,Xi,t,e);h.layers=this.layers,this.add(h);const l=new tn(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,h]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,h),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eu extends $e{constructor(t=[],e=ps,n,i,r,o,a,h,l,c){super(t,e,n,i,r,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qd extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new eu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ei});r.uniforms.tEquirect.value=e;const o=new te(i,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Mn),new Kd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class we extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tf={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return a!==null&&(a.visible=i!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Eo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new Eo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nu extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ef extends $e{constructor(t=null,e=1,n=1,i,r,o,a,h,l=en,c=en,u,f){super(null,o,a,h,l,c,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends _n{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new ue,Sc=new ue,Br=[],bc=new Ri,nf=new ue,Os=new te,zs=new Ss;class sf extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),bc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(bc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),zs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$i),Sc.multiplyMatrices(n,$i),Os.matrixWorld=Sc,Os.raycast(t,Br);for(let o=0,a=Br.length;o<a;o++){const h=Br[o];h.instanceId=r,h.object=this,e.push(h)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ef(new Float32Array(i*this.count),i,this.count,Rl,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,h=i*t;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qo=new z,rf=new z,of=new Jt;class Kn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qo.subVectors(n,e).cross(rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||of.getNormalMatrix(t),i=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Ss,af=new jt(.5,.5),Vr=new z;class Ol{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],S=r[13],y=r[14],R=r[15];if(i[0].setComponents(l-o,d-c,p-g,R-E).normalize(),i[1].setComponents(l+o,d+c,p+g,R+E).normalize(),i[2].setComponents(l+a,d+u,p+_,R+S).normalize(),i[3].setComponents(l-a,d-u,p-_,R-S).normalize(),n)i[4].setComponents(h,f,m,y).normalize(),i[5].setComponents(l-h,d-f,p-m,R-y).normalize();else if(i[4].setComponents(l-h,d-f,p-m,R-y).normalize(),e===bn)i[5].setComponents(l+h,d+f,p+m,R+y).normalize();else if(e===yo)i[5].setComponents(h,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);const e=af.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lf extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new z,Mo=new z,Ec=new ue,Bs=new Nl,kr=new Ss,ta=new z,Ac=new z;class iu extends Oe{constructor(t=new wn,e=new lf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)vo.fromBufferAttribute(e,i-1),Mo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=vo.distanceTo(Mo);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Ec.copy(i).invert(),Bs.copy(t.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=c.getX(_),E=c.getX(_+1),S=Hr(this,t,Bs,h,p,E,_);S&&e.push(S)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(d),p=Hr(this,t,Bs,h,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=Hr(this,t,Bs,h,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Hr(this,t,Bs,h,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(vo.fromBufferAttribute(a,i),Mo.fromBufferAttribute(a,r),e.distanceSqToSegment(vo,Mo,ta,Ac)>n)return;ta.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:Ac.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class cf extends $e{constructor(t,e,n,i,r,o,a,h,l){super(t,e,n,i,r,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class su extends $e{constructor(t,e,n=Ei,i,r,o,a=en,h=en,l,c=ir,u=1){if(c!==ir&&c!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,h,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ul(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ru extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bs extends wn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};const l=this;i=Math.floor(i),r=Math.floor(r);const c=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(d,2));function E(){const y=new z,R=new z;let w=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const b=[],M=I/r,P=M*(e-t)+t;for(let B=0;B<=i;B++){const G=B/i,$=G*h+a,N=Math.sin($),V=Math.cos($);R.x=P*N,R.y=-M*n+m,R.z=P*V,u.push(R.x,R.y,R.z),y.set(N,C,V).normalize(),f.push(y.x,y.y,y.z),d.push(G,1-M),b.push(g++)}_.push(b)}for(let I=0;I<i;I++)for(let b=0;b<r;b++){const M=_[b][I],P=_[b+1][I],B=_[b+1][I+1],G=_[b][I+1];(t>0||b!==0)&&(c.push(M,P,G),w+=3),(e>0||b!==r-1)&&(c.push(P,B,G),w+=3)}l.addGroup(p,w,0),p+=w}function S(y){const R=g,w=new jt,C=new z;let I=0;const b=y===!0?t:e,M=y===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let B=0;B<=i;B++){const $=B/i*h+a,N=Math.cos($),V=Math.sin($);C.x=b*V,C.y=m*M,C.z=b*N,u.push(C.x,C.y,C.z),f.push(0,M,0),w.x=N*.5+.5,w.y=V*.5*M+.5,d.push(w.x,w.y),g++}for(let B=0;B<i;B++){const G=R+B,$=P+B;y===!0?c.push($,$+1,G):c.push($+1,$,G),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ao extends wn{constructor(t=[new jt(0,-.5),new jt(.5,0),new jt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Kt(i,0,Math.PI*2);const r=[],o=[],a=[],h=[],l=[],c=1/e,u=new z,f=new jt,d=new z,g=new z,_=new z;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),h.push(d.x,d.y,d.z),_.copy(g)}for(let E=0;E<=e;E++){const S=n+E*c*i,y=Math.sin(S),R=Math.cos(S);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),f.x=E/e,f.y=w/(t.length-1),a.push(f.x,f.y);const C=h[3*w+0]*y,I=h[3*w+1],b=h[3*w+0]*R;l.push(C,I,b)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const y=S+E*t.length,R=y,w=y+t.length,C=y+t.length+1,I=y+1;r.push(R,w,I),r.push(C,I,w)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("uv",new ve(a,2)),this.setAttribute("normal",new ve(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.points,t.segments,t.phiStart,t.phiLength)}}class Es extends wn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(i),l=a+1,c=h+1,u=t/a,f=e/h,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const E=p*f-o;for(let S=0;S<l;S++){const y=S*u-r;g.push(y,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let E=0;E<a;E++){const S=E+l*p,y=E+l*(p+1),R=E+1+l*(p+1),w=E+1+l*p;d.push(S,y,w),d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.widthSegments,t.heightSegments)}}class cr extends wn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+a,Math.PI);let l=0;const c=[],u=new z,f=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&h===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+y,1-S),E.push(l++)}c.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const S=c[p][E+1],y=c[p][E],R=c[p+1][E],w=c[p+1][E+1];(p!==0||o>0)&&d.push(S,y,w),(p!==n-1||h<Math.PI)&&d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zl extends wn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],h=[],l=[],c=new z,u=new z,f=new z;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),f.subVectors(u,c).normalize(),h.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,E=(i+1)*d+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Me extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hf extends Ci{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uf extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class df extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ea={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ff{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pf=new ff;class Bl{constructor(t){this.manager=t!==void 0?t:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi=new WeakMap;class mf extends Bl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ea.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=qi.get(o);u===void 0&&(u=[],qi.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=or("img");function h(){c(),e&&e(this);const u=qi.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}qi.delete(this),r.manager.itemEnd(t)}function l(u){c(),i&&i(u),ea.remove(`image:${t}`);const f=qi.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}qi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",h,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ea.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class gf extends Bl{constructor(t){super(t)}load(t,e,n,i){const r=new $e,o=new mf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Vl extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _f extends Vl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new ue,wc=new z,Tc=new z;class ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rc=new ue,Vs=new z,ia=new z;class xf extends ou{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),i.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,n.coordinateSystem,n.reversedDepth)}}class Ys extends Vl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class au extends tu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,h=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yf extends ou{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cc extends Vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new yf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vf extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Pc=new ue;class Mf{constructor(t,e,n=0,i=1/0){this.ray=new Nl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(Lc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)fl(t[i],this,n,e);return n.sort(Lc),n}}function Lc(s,t){return s.distance-t.distance}function fl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)fl(r[o],t,e,!0)}}function Dc(s,t,e,n){const i=Sf(n);switch(e){case Bh:return s*t;case Rl:return s*t/i.components*i.byteLength;case Cl:return s*t/i.components*i.byteLength;case kh:return s*t*2/i.components*i.byteLength;case Pl:return s*t*2/i.components*i.byteLength;case Vh:return s*t*3/i.components*i.byteLength;case gn:return s*t*4/i.components*i.byteLength;case Ll:return s*t*4/i.components*i.byteLength;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(s,16)*Math.max(t,8)/4;case za:case Va:return Math.max(s,8)*Math.max(t,8)/2;case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sf(s){switch(s){case An:case Nh:return{byteLength:1,components:1};case er:case Fh:case fr:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case Ei:case Al:case Sn:return{byteLength:4,components:1};case Oh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bf(s){const t=new WeakMap;function e(a,h){const l=a.array,c=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,l,c),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,h,l){const c=h.array,u=h.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,c);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(s.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:i,remove:r,update:o}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
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
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,bp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ip=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Bm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Ef,alphahash_pars_fragment:Af,alphamap_fragment:wf,alphamap_pars_fragment:Tf,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:If,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Ff,iridescence_fragment:Of,bumpmap_pars_fragment:zf,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:$f,common:qf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:jf,emissivemap_fragment:Kf,emissivemap_pars_fragment:Qf,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:op,fog_vertex:ap,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:xp,lights_phong_fragment:yp,lights_phong_pars_fragment:vp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:Ap,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:zp,morphtarget_pars_vertex:Bp,morphtarget_vertex:Vp,normal_fragment_begin:kp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Jp,opaque_fragment:jp,packing:Kp,premultiplied_alpha_fragment:Qp,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:om,shadowmap_vertex:am,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:_m,transmission_pars_fragment:xm,uv_pars_fragment:ym,uv_pars_vertex:vm,uv_vertex:Mm,worldpos_vertex:Sm,background_vert:bm,background_frag:Em,backgroundCube_vert:Am,backgroundCube_frag:wm,cube_vert:Tm,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Im,equirect_frag:Um,linedashed_vert:Nm,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:zm,meshlambert_vert:Bm,meshlambert_frag:Vm,meshmatcap_vert:km,meshmatcap_frag:Hm,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:$m,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:jm,points_frag:Km,shadow_vert:Qm,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},vn={basic:{uniforms:Ne([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ne([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ne([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ne([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ne([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ne([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ne([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ne([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ne([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ne([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ne([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ne([St.common,St.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ne([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};vn.physical={uniforms:Ne([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Gr={r:0,b:0,g:0},ui=new Hn,ig=new ue;function sg(s,t,e,n,i,r,o){const a=new Qt(0);let h=r===!0?0:1,l,c,u=null,f=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const R=g(S);R===null?p(a,h):R&&R.isColor&&(p(R,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===bo)?(c===void 0&&(c=new te(new Pi(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:_s(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ui.copy(y.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ui)),c.material.toneMapped=ie.getTransfer(R.colorSpace)!==ae,(u!==R||f!==R.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new te(new Es(2,2),new ri({name:"BackgroundMaterial",uniforms:_s(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(R.colorSpace)!==ae,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Gr,Qh(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,y,o)}function E(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),h=y,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(S){h=S,p(a,h)},render:_,addToRenderList:m,dispose:E}}function rg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,P,B,G,$){let N=!1;const V=u(G,B,P);r!==V&&(r=V,l(r.object)),N=d(M,G,B,$),N&&g(M,G,B,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(M,P,B,G),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function c(M){return s.deleteVertexArray(M)}function u(M,P,B){const G=B.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let N=$[P.id];N===void 0&&(N={},$[P.id]=N);let V=N[G];return V===void 0&&(V=f(h()),N[G]=V),V}function f(M){const P=[],B=[],G=[];for(let $=0;$<e;$++)P[$]=0,B[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:G,object:M,attributes:{},index:null}}function d(M,P,B,G){const $=r.attributes,N=P.attributes;let V=0;const Z=B.getAttributes();for(const W in Z)if(Z[W].location>=0){const et=$[W];let ct=N[W];if(ct===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;V++}return r.attributesNum!==V||r.index!==G}function g(M,P,B,G){const $={},N=P.attributes;let V=0;const Z=B.getAttributes();for(const W in Z)if(Z[W].location>=0){let et=N[W];et===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),$[W]=ct,V++}r.attributes=$,r.attributesNum=V,r.index=G}function _(){const M=r.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const B=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;B[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),$[M]!==P&&(s.vertexAttribDivisor(M,P),$[M]=P)}function E(){const M=r.newAttributes,P=r.enabledAttributes;for(let B=0,G=P.length;B<G;B++)P[B]!==M[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function S(M,P,B,G,$,N,V){V===!0?s.vertexAttribIPointer(M,P,B,$,N):s.vertexAttribPointer(M,P,B,G,$,N)}function y(M,P,B,G){_();const $=G.attributes,N=B.getAttributes(),V=P.defaultAttributeValues;for(const Z in N){const W=N[Z];if(W.location>=0){let X=$[Z];if(X===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const et=X.normalized,ct=X.itemSize,Ut=t.get(X);if(Ut===void 0)continue;const Vt=Ut.buffer,Nt=Ut.type,Yt=Ut.bytesPerElement,K=Nt===s.INT||Nt===s.UNSIGNED_INT||X.gpuType===Al;if(X.isInterleavedBufferAttribute){const j=X.data,vt=j.stride,Ct=X.offset;if(j.isInstancedInterleavedBuffer){for(let Et=0;Et<W.locationSize;Et++)p(W.location+Et,j.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Et=0;Et<W.locationSize;Et++)m(W.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let Et=0;Et<W.locationSize;Et++)S(W.location+Et,ct/W.locationSize,Nt,et,vt*Yt,(Ct+ct/W.locationSize*Et)*Yt,K)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)p(W.location+j,X.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let j=0;j<W.locationSize;j++)S(W.location+j,ct/W.locationSize,Nt,et,ct*Yt,ct/W.locationSize*j*Yt,K)}}else if(V!==void 0){const et=V[Z];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(W.location,et);break;case 3:s.vertexAttrib3fv(W.location,et);break;case 4:s.vertexAttrib4fv(W.location,et);break;default:s.vertexAttrib1fv(W.location,et)}}}}E()}function R(){I();for(const M in n){const P=n[M];for(const B in P){const G=P[B];for(const $ in G)c(G[$].object),delete G[$];delete P[B]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const B in P){const G=P[B];for(const $ in G)c(G[$].object),delete G[$];delete P[B]}delete n[M.id]}function C(M){for(const P in n){const B=n[P];if(B[M.id]===void 0)continue;const G=B[M.id];for(const $ in G)c(G[$].object),delete G[$];delete B[M.id]}}function I(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function og(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];e.update(d,n,1)}function h(l,c,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function ag(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==gn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==An&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!I)}function h(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function lg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Kn,a=new Jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?c(null):l();else{const E=r?0:n,S=E*4;let y=p.clippingState||null;h.value=y,y=c(g,f,S,d);for(let R=0;R!==S;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==_;++S,y+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function cg(s){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=ps:a===Fa&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===Fa)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new Qd(h.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const rs=4,Ic=[.125,.215,.35,.446,.526,.582],yi=20,sa=new au,Uc=new Qt;let ra=null,oa=0,aa=0,la=!1;const _i=(1+Math.sqrt(5))/2,Yi=1/_i,Nc=[new z(-_i,Yi,0),new z(_i,Yi,0),new z(-Yi,0,_i),new z(Yi,0,_i),new z(0,_i,-Yi),new z(0,_i,Yi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],hg=new z;class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=hg}=r;ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,i,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=la,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:fr,format:gn,colorSpace:gs,depthBuffer:!1},i=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,i,r){const h=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=ni,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new lr({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new te(new Pi,_);let p=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,p=!0):(_.color.copy(Uc),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(h.up.set(0,l[S],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+c[S],r.y,r.z)):y===1?(h.up.set(0,0,l[S]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+c[S],r.z)):(h.up.set(0,l[S],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+c[S]));const R=this._cubeSize;Wr(i,y*R,S>2?R:0,R,R),u.setRenderTarget(i),p&&u.render(m,h),u.render(t,h)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ps||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;Wr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(i-r-1)%Nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new te(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*yi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let E=0;for(let C=0;C<yi;++C){const I=C/_,b=Math.exp(-I*I/2);p.push(b),C===0?E+=b:C<m&&(E+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[i],R=3*y*(i>S-rs?i-S+rs:0),w=4*(this._cubeSize-y);Wr(e,R,w,3*y,2*y),h.setRenderTarget(e),h.render(u,sa)}}function ug(s){const t=[],e=[],n=[];let i=s;const r=s-rs+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let h=1/a;o>s-rs?h=Ic[o-s+rs-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),S=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,I=w>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];E.set(b,_*g*w),S.set(f,m*g*w);const M=[w,w,w,w,w,w];y.set(M,p*g*w)}const R=new wn;R.setAttribute("position",new _n(E,_)),R.setAttribute("uv",new _n(S,m)),R.setAttribute("faceIndex",new _n(y,p)),t.push(R),i>rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(s,t,e){const n=new Ai(s,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dg(s,t,e){const n=new Float32Array(yi),i=new z(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Oc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function zc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function fg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===Na||h===Fa,c=h===ps||h===ms;if(l||c){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new pl(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||c&&d&&i(d)?(e===null&&(e=new pl(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let h=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let S=0,y=E.length;S<y;S+=3){const R=E[S+0],w=E[S+1],C=E[S+2];f.push(R,w,w,C,C,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,y=E.length/3-1;S<y;S+=3){const R=S+0,w=S+1,C=S+2;f.push(R,w,w,C,C,R)}}else return;const m=new($h(f)?jh:Jh)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:c}}function gg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function c(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function _g(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xg(s,t,e){const n=new WeakMap,i=new le;function r(o,a,h){const l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*R*4*u),C=new qh(w,y,R,u);C.type=Sn,C.needsUpdate=!0;const I=S*4;for(let M=0;M<u;M++){const P=m[M],B=p[M],G=E[M],$=y*R*4*M;for(let N=0;N<P.count;N++){const V=N*I;d===!0&&(i.fromBufferAttribute(P,N),w[$+V+0]=i.x,w[$+V+1]=i.y,w[$+V+2]=i.z,w[$+V+3]=0),g===!0&&(i.fromBufferAttribute(B,N),w[$+V+4]=i.x,w[$+V+5]=i.y,w[$+V+6]=i.z,w[$+V+7]=0),_===!0&&(i.fromBufferAttribute(G,N),w[$+V+8]=i.x,w[$+V+9]=i.y,w[$+V+10]=i.z,w[$+V+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new jt(y,R)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",g),h.getUniforms().setValue(s,"morphTargetInfluences",l)}h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function yg(s,t,e,n){let i=new WeakMap;function r(h){const l=n.render.frame,c=h.geometry,u=t.get(h,c);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),i.get(h)!==l&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const cu=new $e,Bc=new su(1,1),hu=new qh,uu=new Fd,du=new eu,Vc=[],kc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function As(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Vc[i];if(r===void 0&&(r=new Float32Array(i),Vc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wo(s,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function Sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function Eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),be(e,n)}}function Ag(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),be(e,n)}}function wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Hc.set(n),s.uniformMatrix4fv(this.addr,!1,Hc),be(e,n)}}function Tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function Cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function Pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function Lg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function Ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function Ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function Ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bc.compareFunction=Hh,r=Bc):r=cu,e.setTexture2D(t||r,i)}function Fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||uu,i)}function Og(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||du,i)}function zg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hu,i)}function Bg(s){switch(s){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return Ag;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return zg}}function Vg(s,t){s.uniform1fv(this.addr,t)}function kg(s,t){const e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function Hg(s,t){const e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function Gg(s,t){const e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function Wg(s,t){const e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xg(s,t){const e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $g(s,t){const e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function qg(s,t){s.uniform1iv(this.addr,t)}function Yg(s,t){s.uniform2iv(this.addr,t)}function Zg(s,t){s.uniform3iv(this.addr,t)}function Jg(s,t){s.uniform4iv(this.addr,t)}function jg(s,t){s.uniform1uiv(this.addr,t)}function Kg(s,t){s.uniform2uiv(this.addr,t)}function Qg(s,t){s.uniform3uiv(this.addr,t)}function t0(s,t){s.uniform4uiv(this.addr,t)}function e0(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cu,r[o])}function n0(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||uu,r[o])}function i0(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||du,r[o])}function s0(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hu,r[o])}function r0(s){switch(s){case 5126:return Vg;case 35664:return kg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return $g;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return jg;case 36294:return Kg;case 36295:return Qg;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}class o0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Xc(s,t){s.seq.push(t),s.map[t.id]=t}function c0(s,t,e){const n=s.name,i=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===i){Xc(e,l===void 0?new o0(a,s,t):new a0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new l0(a),Xc(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);c0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function $c(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const h0=37297;let u0=0;function d0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qc=new Jt;function f0(s){ie._getMatrix(qc,ie.workingColorSpace,s);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case xo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Yc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+d0(s.getShaderSource(t),a)}else return r}function p0(s,t){const e=f0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function m0(s,t){let e;switch(t){case Ju:e="Linear";break;case ju:e="Reinhard";break;case Ku:e="Cineon";break;case Ih:e="ACESFilmic";break;case td:e="AgX";break;case ed:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new z;function g0(){ie.getLuminanceCoefficients(Xr);const s=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function x0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zs(s){return s!==""}function Zc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(s){return s.replace(v0,S0)}const M0=new Map;function S0(s,t){let e=Zt[t];if(e===void 0){const n=M0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ml(e)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(s){return s.replace(b0,E0)}function E0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function A0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function w0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function R0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case El:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function C0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function P0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=A0(e),l=w0(e),c=T0(e),u=R0(e),f=C0(e),d=_0(e),g=x0(r),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ni?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,p0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=ml(o),o=Zc(o,e),o=Jc(o,e),a=ml(a),a=Zc(a,e),a=Jc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,y=E+p+a,R=$c(i,i.VERTEX_SHADER,S),w=$c(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(R)||"",$=i.getShaderInfoLog(w)||"",N=B.trim(),V=G.trim(),Z=$.trim();let W=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,w);else{const et=Yc(i,R,"vertex"),ct=Yc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+et+`
`+ct)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(V===""||Z==="")&&(X=!1);X&&(P.diagnostics={runnable:W,programLog:N,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(R),i.deleteShader(w),I=new po(i,_),b=y0(i,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,h0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let L0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new I0(t),e.set(t,n)),n}}class I0{constructor(t){this.id=L0++,this.code=t,this.usedTimes=0}}function U0(s,t,e,n,i,r,o){const a=new Fl,h=new D0,l=new Set,c=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,B,G){const $=B.fog,N=G.geometry,V=b.isMeshStandardMaterial?B.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),W=Z&&Z.mapping===bo?Z.image.height:null,X=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=et!==void 0?et.length:0;let Ut=0;N.morphAttributes.position!==void 0&&(Ut=1),N.morphAttributes.normal!==void 0&&(Ut=2),N.morphAttributes.color!==void 0&&(Ut=3);let Vt,Nt,Yt,K;if(X){const ee=vn[X];Vt=ee.vertexShader,Nt=ee.fragmentShader}else Vt=b.vertexShader,Nt=b.fragmentShader,h.update(b),Yt=h.getVertexShaderID(b),K=h.getFragmentShaderID(b);const j=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Ct=G.isInstancedMesh===!0,Et=G.isBatchedMesh===!0,qt=!!b.map,re=!!b.matcap,L=!!Z,rt=!!b.aoMap,tt=!!b.lightMap,it=!!b.bumpMap,nt=!!b.normalMap,gt=!!b.displacementMap,ht=!!b.emissiveMap,_t=!!b.metalnessMap,Gt=!!b.roughnessMap,Ht=b.anisotropy>0,T=b.clearcoat>0,v=b.dispersion>0,H=b.iridescence>0,q=b.sheen>0,at=b.transmission>0,Y=Ht&&!!b.anisotropyMap,Lt=T&&!!b.clearcoatMap,mt=T&&!!b.clearcoatNormalMap,Pt=T&&!!b.clearcoatRoughnessMap,At=H&&!!b.iridescenceMap,ut=H&&!!b.iridescenceThicknessMap,bt=q&&!!b.sheenColorMap,Ot=q&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,Mt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,O=at&&!!b.transmissionMap,ft=at&&!!b.thicknessMap,xt=!!b.gradientMap,wt=!!b.alphaMap,st=b.alphaTest>0,Q=!!b.alphaHash,Rt=!!b.extensions;let Xt=ni;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const oe={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:Vt,fragmentShader:Nt,defines:b.defines,customVertexShaderID:Yt,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Et,batchingColor:Et&&G._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&G.instanceColor!==null,instancingMorph:Ct&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gs,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:re,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:W,aoMap:rt,lightMap:tt,bumpMap:it,normalMap:nt,displacementMap:f&&gt,emissiveMap:ht,normalMapObjectSpace:nt&&b.normalMapType===rd,normalMapTangentSpace:nt&&b.normalMapType===Dl,metalnessMap:_t,roughnessMap:Gt,anisotropy:Ht,anisotropyMap:Y,clearcoat:T,clearcoatMap:Lt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Pt,dispersion:v,iridescence:H,iridescenceMap:At,iridescenceThicknessMap:ut,sheen:q,sheenColorMap:bt,sheenRoughnessMap:Ot,specularMap:Dt,specularColorMap:Mt,specularIntensityMap:Wt,transmission:at,transmissionMap:O,thicknessMap:ft,gradientMap:xt,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:wt,alphaTest:st,alphaHash:Q,combine:b.combine,mapUv:qt&&_(b.map.channel),aoMapUv:rt&&_(b.aoMap.channel),lightMapUv:tt&&_(b.lightMap.channel),bumpMapUv:it&&_(b.bumpMap.channel),normalMapUv:nt&&_(b.normalMap.channel),displacementMapUv:gt&&_(b.displacementMap.channel),emissiveMapUv:ht&&_(b.emissiveMap.channel),metalnessMapUv:_t&&_(b.metalnessMap.channel),roughnessMapUv:Gt&&_(b.roughnessMap.channel),anisotropyMapUv:Y&&_(b.anisotropyMap.channel),clearcoatMapUv:Lt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(b.sheenRoughnessMap.channel),specularMapUv:Dt&&_(b.specularMap.channel),specularColorMapUv:Mt&&_(b.specularColorMap.channel),specularIntensityMapUv:Wt&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:ft&&_(b.thicknessMap.channel),alphaMapUv:wt&&_(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(nt||Ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!N.attributes.uv&&(qt||wt),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:G.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bn,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(E(M,b),S(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const M=g[b.type];let P;if(M){const B=vn[M];P=Zd.clone(B.uniforms)}else P=b.uniforms;return P}function R(b,M){let P;for(let B=0,G=c.length;B<G;B++){const $=c[B];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new P0(s,M,b,r),c.push(P)),P}function w(b){if(--b.usedTimes===0){const M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function C(b){h.remove(b)}function I(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:I}}function N0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,h){s.get(o)[a]=h}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function F0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function th(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function h(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||F0),n.length>1&&n.sort(f||Qc),i.length>1&&i.sort(f||Qc)}function c(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:h,finish:c,sort:l}}function O0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new th,s.set(n,[o])):i>=r.length?(o=new th,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function z0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Qt};break;case"SpotLight":e={position:new z,direction:new z,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function B0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let V0=0;function k0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function H0(s){const t=new z0,e=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,r=new ue,o=new ue;function a(l){let c=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,S=0,y=0,R=0,w=0,C=0;l.sort(k0);for(let b=0,M=l.length;b<M;b++){const P=l[b],B=P.color,G=P.intensity,$=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=B.r*G,u+=B.g*G,f+=B.b*G;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],G);C++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(G),V.distance=$,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const Z=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=N,y++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(B).multiplyScalar(G),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Z=P.shadow,W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(G),V.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=C,n.version=V0++)}function h(l,c){let u=0,f=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:h,state:n}}function eh(s){const t=new H0(s),e=[],n=[];function i(c){l.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function h(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function G0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new eh(s),t.set(i,[a])):r>=o.length?(a=new eh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`;function $0(s,t,e){let n=new Ol;const i=new jt,r=new jt,o=new le,a=new uf({depthPacking:sd}),h=new df,l={},c=e.maxTextureSize,u={[si]:Fe,[Fe]:si,[Bn]:Bn},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ei),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==zn&&this.type===zn,$=p===zn&&this.type!==zn;for(let N=0,V=w.length;N<V;N++){const Z=w[N],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||G===!0||$===!0){const ct=this.type!==zn?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new Ai(i.x,i.y,ct),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const et=W.getViewportCount();for(let ct=0;ct<et;ct++){const Ut=W.getViewport(ct);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),B.viewport(o),W.updateMatrices(Z,ct),n=W.getFrustum(),y(C,I,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&E(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,P)};function E(w,C){const I=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,I,d,_,null)}function S(w,C,I,b){let M=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?h:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=M.uuid,G=C.uuid;let $=l[B];$===void 0&&($={},l[B]=$);let N=$[G];N===void 0&&(N=M.clone(),$[G]=N,C.addEventListener("dispose",R)),M=N}if(M.visible=C.visible,M.wireframe=C.wireframe,b===zn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=I}return M}function y(w,C,I,b,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const G=t.update(w),$=w.material;if(Array.isArray($)){const N=G.groups;for(let V=0,Z=N.length;V<Z;V++){const W=N[V],X=$[W.materialIndex];if(X&&X.visible){const et=S(w,X,b,M);w.onBeforeShadow(s,w,C,I,G,et,W),s.renderBufferDirect(I,null,G,et,w,W),w.onAfterShadow(s,w,C,I,G,et,W)}}}else if($.visible){const N=S(w,$,b,M);w.onBeforeShadow(s,w,C,I,G,N,null),s.renderBufferDirect(I,null,G,N,w,null),w.onAfterShadow(s,w,C,I,G,N,null)}}const B=w.children;for(let G=0,$=B.length;G<$;G++)y(B[G],C,I,b,M)}function R(w){w.target.removeEventListener("dispose",R);for(const I in l){const b=l[I],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const q0={[Ra]:Ca,[Pa]:Ia,[La]:Ua,[fs]:Da,[Ca]:Ra,[Ia]:Pa,[Ua]:La,[Da]:fs};function Y0(s,t){function e(){let O=!1;const ft=new le;let xt=null;const wt=new le(0,0,0,0);return{setMask:function(st){xt!==st&&!O&&(s.colorMask(st,st,st,st),xt=st)},setLocked:function(st){O=st},setClear:function(st,Q,Rt,Xt,oe){oe===!0&&(st*=Xt,Q*=Xt,Rt*=Xt),ft.set(st,Q,Rt,Xt),wt.equals(ft)===!1&&(s.clearColor(st,Q,Rt,Xt),wt.copy(ft))},reset:function(){O=!1,xt=null,wt.set(-1,0,0,0)}}}function n(){let O=!1,ft=!1,xt=null,wt=null,st=null;return{setReversed:function(Q){if(ft!==Q){const Rt=t.get("EXT_clip_control");Q?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ft=Q;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return ft},setTest:function(Q){Q?j(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(Q){xt!==Q&&!O&&(s.depthMask(Q),xt=Q)},setFunc:function(Q){if(ft&&(Q=q0[Q]),wt!==Q){switch(Q){case Ra:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case fs:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=Q}},setLocked:function(Q){O=Q},setClear:function(Q){st!==Q&&(ft&&(Q=1-Q),s.clearDepth(Q),st=Q)},reset:function(){O=!1,xt=null,wt=null,st=null,ft=!1}}}function i(){let O=!1,ft=null,xt=null,wt=null,st=null,Q=null,Rt=null,Xt=null,oe=null;return{setTest:function(ee){O||(ee?j(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!O&&(s.stencilMask(ee),ft=ee)},setFunc:function(ee,nn,ze){(xt!==ee||wt!==nn||st!==ze)&&(s.stencilFunc(ee,nn,ze),xt=ee,wt=nn,st=ze)},setOp:function(ee,nn,ze){(Q!==ee||Rt!==nn||Xt!==ze)&&(s.stencilOp(ee,nn,ze),Q=ee,Rt=nn,Xt=ze)},setLocked:function(ee){O=ee},setClear:function(ee){oe!==ee&&(s.clearStencil(ee),oe=ee)},reset:function(){O=!1,ft=null,xt=null,wt=null,st=null,Q=null,Rt=null,Xt=null,oe=null}}}const r=new e,o=new n,a=new i,h=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,y=null,R=null,w=null,C=new Qt(0,0,0),I=0,b=!1,M=null,P=null,B=null,G=null,$=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Z>=2);let X=null,et={};const ct=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Vt=new le().fromArray(ct),Nt=new le().fromArray(Ut);function Yt(O,ft,xt,wt){const st=new Uint8Array(4),Q=s.createTexture();s.bindTexture(O,Q),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<xt;Rt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(ft+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return Q}const K={};K[s.TEXTURE_2D]=Yt(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(fs),it(!1),nt(Jl),j(s.CULL_FACE),rt(ei);function j(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function vt(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Ct(O,ft){return u[O]!==ft?(s.bindFramebuffer(O,ft),u[O]=ft,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Et(O,ft){let xt=d,wt=!1;if(O){xt=f.get(ft),xt===void 0&&(xt=[],f.set(ft,xt));const st=O.textures;if(xt.length!==st.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Rt=st.length;Q<Rt;Q++)xt[Q]=s.COLOR_ATTACHMENT0+Q;xt.length=st.length,wt=!0}}else xt[0]!==s.BACK&&(xt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(xt)}function qt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const re={[xi]:s.FUNC_ADD,[Lu]:s.FUNC_SUBTRACT,[Du]:s.FUNC_REVERSE_SUBTRACT};re[Iu]=s.MIN,re[Uu]=s.MAX;const L={[Nu]:s.ZERO,[Fu]:s.ONE,[Ou]:s.SRC_COLOR,[wa]:s.SRC_ALPHA,[Gu]:s.SRC_ALPHA_SATURATE,[ku]:s.DST_COLOR,[Bu]:s.DST_ALPHA,[zu]:s.ONE_MINUS_SRC_COLOR,[Ta]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[Vu]:s.ONE_MINUS_DST_ALPHA,[Wu]:s.CONSTANT_COLOR,[Xu]:s.ONE_MINUS_CONSTANT_COLOR,[$u]:s.CONSTANT_ALPHA,[qu]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(O,ft,xt,wt,st,Q,Rt,Xt,oe,ee){if(O===ei){_===!0&&(vt(s.BLEND),_=!1);return}if(_===!1&&(j(s.BLEND),_=!0),O!==Pu){if(O!==m||ee!==b){if((p!==xi||y!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,y=xi),ee)switch(O){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jl:s.blendFunc(s.ONE,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ql:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,S=null,R=null,w=null,C.set(0,0,0),I=0,m=O,b=ee}return}st=st||ft,Q=Q||xt,Rt=Rt||wt,(ft!==p||st!==y)&&(s.blendEquationSeparate(re[ft],re[st]),p=ft,y=st),(xt!==E||wt!==S||Q!==R||Rt!==w)&&(s.blendFuncSeparate(L[xt],L[wt],L[Q],L[Rt]),E=xt,S=wt,R=Q,w=Rt),(Xt.equals(C)===!1||oe!==I)&&(s.blendColor(Xt.r,Xt.g,Xt.b,oe),C.copy(Xt),I=oe),m=O,b=!1}function tt(O,ft){O.side===Bn?vt(s.CULL_FACE):j(s.CULL_FACE);let xt=O.side===Fe;ft&&(xt=!xt),it(xt),O.blending===as&&O.transparent===!1?rt(ei):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const wt=O.stencilWrite;a.setTest(wt),wt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}function nt(O){O!==Ru?(j(s.CULL_FACE),O!==P&&(O===Jl?s.cullFace(s.BACK):O===Cu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),P=O}function gt(O){O!==B&&(V&&s.lineWidth(O),B=O)}function ht(O,ft,xt){O?(j(s.POLYGON_OFFSET_FILL),(G!==ft||$!==xt)&&(s.polygonOffset(ft,xt),G=ft,$=xt)):vt(s.POLYGON_OFFSET_FILL)}function _t(O){O?j(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function Gt(O){O===void 0&&(O=s.TEXTURE0+N-1),X!==O&&(s.activeTexture(O),X=O)}function Ht(O,ft,xt){xt===void 0&&(X===null?xt=s.TEXTURE0+N-1:xt=X);let wt=et[xt];wt===void 0&&(wt={type:void 0,texture:void 0},et[xt]=wt),(wt.type!==O||wt.texture!==ft)&&(X!==xt&&(s.activeTexture(xt),X=xt),s.bindTexture(O,ft||K[O]),wt.type=O,wt.texture=ft)}function T(){const O=et[X];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(O){Vt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Vt.copy(O))}function Ot(O){Nt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Nt.copy(O))}function Dt(O,ft){let xt=l.get(ft);xt===void 0&&(xt=new WeakMap,l.set(ft,xt));let wt=xt.get(O);wt===void 0&&(wt=s.getUniformBlockIndex(ft,O.name),xt.set(O,wt))}function Mt(O,ft){const wt=l.get(ft).get(O);h.get(ft)!==wt&&(s.uniformBlockBinding(ft,wt,O.__bindingPointIndex),h.set(ft,wt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},X=null,et={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,y=null,R=null,w=null,C=new Qt(0,0,0),I=0,b=!1,M=null,P=null,B=null,G=null,$=null,Vt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:vt,bindFramebuffer:Ct,drawBuffers:Et,useProgram:qt,setBlending:rt,setMaterial:tt,setFlipSided:it,setCullFace:nt,setLineWidth:gt,setPolygonOffset:ht,setScissorTest:_t,activeTexture:Gt,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:At,texImage3D:ut,updateUBOMapping:Dt,uniformBlockBinding:Mt,texStorage2D:mt,texStorage3D:Pt,texSubImage2D:q,texSubImage3D:at,compressedTexSubImage2D:Y,compressedTexSubImage3D:Lt,scissor:bt,viewport:Ot,reset:Wt}}function Z0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,c=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return d?new OffscreenCanvas(T,v):or("canvas")}function _(T,v,H){let q=1;const at=Ht(T);if((at.width>H||at.height>H)&&(q=H/Math.max(at.width,at.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*at.width),Lt=Math.floor(q*at.height);u===void 0&&(u=g(Y,Lt));const mt=v?g(Y,Lt):u;return mt.width=Y,mt.height=Lt,mt.getContext("2d").drawImage(T,0,0,Y,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Y+"x"+Lt+")."),mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,v,H,q,at=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=v;if(v===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),v===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),v===s.RGBA){const Lt=at?xo:ie.getTransfer(q);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=Lt===ae?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(T,v){let H;return T?v===null||v===Ei||v===nr?H=s.DEPTH24_STENCIL8:v===Sn?H=s.DEPTH32F_STENCIL8:v===er&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===nr?H=s.DEPTH_COMPONENT24:v===Sn?H=s.DEPTH_COMPONENT32F:v===er&&(H=s.DEPTH_COMPONENT16),H}function R(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==Mn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),I(v),v.isVideoTexture&&c.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),M(v)}function I(T){const v=n.get(T);if(v.__webglInit===void 0)return;const H=T.source,q=f.get(H);if(q){const at=q[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(H)}n.remove(T)}function b(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const H=T.source,q=f.get(H);delete q[v.__cacheKey],o.memory.textures--}function M(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let at=0;at<v.__webglFramebuffer[q].length;at++)s.deleteFramebuffer(v.__webglFramebuffer[q][at]);else s.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)s.deleteFramebuffer(v.__webglFramebuffer[q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=T.textures;for(let q=0,at=H.length;q<at;q++){const Y=n.get(H[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(T)}let P=0;function B(){P=0}function G(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function $(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function N(T,v){const H=n.get(T);if(T.isVideoTexture&&_t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,T,v);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function V(T,v){const H=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){K(H,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function Z(T,v){const H=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){K(H,T,v);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function W(T,v){const H=n.get(T);if(T.version>0&&H.__version!==T.version){j(H,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}const X={[_o]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},et={[en]:s.NEAREST,[nd]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Lo]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},ct={[od]:s.NEVER,[dd]:s.ALWAYS,[ad]:s.LESS,[Hh]:s.LEQUAL,[ld]:s.EQUAL,[ud]:s.GEQUAL,[cd]:s.GREATER,[hd]:s.NOTEQUAL};function Ut(T,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Mn||v.magFilter===Lo||v.magFilter===Sr||v.magFilter===Mi||v.minFilter===Mn||v.minFilter===Lo||v.minFilter===Sr||v.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,X[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,X[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,X[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,et[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==Sr&&v.minFilter!==Mi||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(T,v){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const q=v.source;let at=f.get(q);at===void 0&&(at={},f.set(q,at));const Y=$(v);if(Y!==T.__cacheKey){at[Y]===void 0&&(at[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[Y].usedTimes++;const Lt=at[T.__cacheKey];Lt!==void 0&&(at[T.__cacheKey].usedTimes--,Lt.usedTimes===0&&b(v)),T.__cacheKey=Y,T.__webglTexture=at[Y].texture}return H}function Nt(T,v,H){return Math.floor(Math.floor(T/H)/v)}function Yt(T,v,H,q){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,H,q,v.data);else{Y.sort((ut,bt)=>ut.start-bt.start);let Lt=0;for(let ut=1;ut<Y.length;ut++){const bt=Y[Lt],Ot=Y[ut],Dt=bt.start+bt.count,Mt=Nt(Ot.start,v.width,4),Wt=Nt(bt.start,v.width,4);Ot.start<=Dt+1&&Mt===Wt&&Nt(Ot.start+Ot.count-1,v.width,4)===Mt?bt.count=Math.max(bt.count,Ot.start+Ot.count-bt.start):(++Lt,Y[Lt]=Ot)}Y.length=Lt+1;const mt=s.getParameter(s.UNPACK_ROW_LENGTH),Pt=s.getParameter(s.UNPACK_SKIP_PIXELS),At=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ut=0,bt=Y.length;ut<bt;ut++){const Ot=Y[ut],Dt=Math.floor(Ot.start/4),Mt=Math.ceil(Ot.count/4),Wt=Dt%v.width,O=Math.floor(Dt/v.width),ft=Mt,xt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Wt,O,ft,xt,H,q,v.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,mt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,At)}}function K(T,v,H){let q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=s.TEXTURE_3D);const at=Vt(T,v),Y=v.source;e.bindTexture(q,T.__webglTexture,s.TEXTURE0+H);const Lt=n.get(Y);if(Y.version!==Lt.__version||at===!0){e.activeTexture(s.TEXTURE0+H);const mt=ie.getPrimaries(ie.workingColorSpace),Pt=v.colorSpace===ti?null:ie.getPrimaries(v.colorSpace),At=v.colorSpace===ti||mt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ut=_(v.image,!1,i.maxTextureSize);ut=Gt(v,ut);const bt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type);let Dt=S(v.internalFormat,bt,Ot,v.colorSpace,v.isVideoTexture);Ut(q,v);let Mt;const Wt=v.mipmaps,O=v.isVideoTexture!==!0,ft=Lt.__version===void 0||at===!0,xt=Y.dataReady,wt=R(v,ut);if(v.isDepthTexture)Dt=y(v.format===sr,v.type),ft&&(O?e.texStorage2D(s.TEXTURE_2D,1,Dt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Dt,ut.width,ut.height,0,bt,Ot,null));else if(v.isDataTexture)if(Wt.length>0){O&&ft&&e.texStorage2D(s.TEXTURE_2D,wt,Dt,Wt[0].width,Wt[0].height);for(let st=0,Q=Wt.length;st<Q;st++)Mt=Wt[st],O?xt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Mt.width,Mt.height,bt,Ot,Mt.data):e.texImage2D(s.TEXTURE_2D,st,Dt,Mt.width,Mt.height,0,bt,Ot,Mt.data);v.generateMipmaps=!1}else O?(ft&&e.texStorage2D(s.TEXTURE_2D,wt,Dt,ut.width,ut.height),xt&&Yt(v,ut,bt,Ot)):e.texImage2D(s.TEXTURE_2D,0,Dt,ut.width,ut.height,0,bt,Ot,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){O&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Dt,Wt[0].width,Wt[0].height,ut.depth);for(let st=0,Q=Wt.length;st<Q;st++)if(Mt=Wt[st],v.format!==gn)if(bt!==null)if(O){if(xt)if(v.layerUpdates.size>0){const Rt=Dc(Mt.width,Mt.height,v.format,v.type);for(const Xt of v.layerUpdates){const oe=Mt.data.subarray(Xt*Rt/Mt.data.BYTES_PER_ELEMENT,(Xt+1)*Rt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Xt,Mt.width,Mt.height,1,bt,oe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Mt.width,Mt.height,ut.depth,bt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Dt,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Mt.width,Mt.height,ut.depth,bt,Ot,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Dt,Mt.width,Mt.height,ut.depth,0,bt,Ot,Mt.data)}else{O&&ft&&e.texStorage2D(s.TEXTURE_2D,wt,Dt,Wt[0].width,Wt[0].height);for(let st=0,Q=Wt.length;st<Q;st++)Mt=Wt[st],v.format!==gn?bt!==null?O?xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?xt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Mt.width,Mt.height,bt,Ot,Mt.data):e.texImage2D(s.TEXTURE_2D,st,Dt,Mt.width,Mt.height,0,bt,Ot,Mt.data)}else if(v.isDataArrayTexture)if(O){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Dt,ut.width,ut.height,ut.depth),xt)if(v.layerUpdates.size>0){const st=Dc(ut.width,ut.height,v.format,v.type);for(const Q of v.layerUpdates){const Rt=ut.data.subarray(Q*st/ut.data.BYTES_PER_ELEMENT,(Q+1)*st/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ut.width,ut.height,1,bt,Ot,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,Ot,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,ut.width,ut.height,ut.depth,0,bt,Ot,ut.data);else if(v.isData3DTexture)O?(ft&&e.texStorage3D(s.TEXTURE_3D,wt,Dt,ut.width,ut.height,ut.depth),xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,Ot,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,ut.width,ut.height,ut.depth,0,bt,Ot,ut.data);else if(v.isFramebufferTexture){if(ft)if(O)e.texStorage2D(s.TEXTURE_2D,wt,Dt,ut.width,ut.height);else{let st=ut.width,Q=ut.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Dt,st,Q,0,bt,Ot,null),st>>=1,Q>>=1}}else if(Wt.length>0){if(O&&ft){const st=Ht(Wt[0]);e.texStorage2D(s.TEXTURE_2D,wt,Dt,st.width,st.height)}for(let st=0,Q=Wt.length;st<Q;st++)Mt=Wt[st],O?xt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,bt,Ot,Mt):e.texImage2D(s.TEXTURE_2D,st,Dt,bt,Ot,Mt);v.generateMipmaps=!1}else if(O){if(ft){const st=Ht(ut);e.texStorage2D(s.TEXTURE_2D,wt,Dt,st.width,st.height)}xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Ot,ut)}else e.texImage2D(s.TEXTURE_2D,0,Dt,bt,Ot,ut);m(v)&&p(q),Lt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function j(T,v,H){if(v.image.length!==6)return;const q=Vt(T,v),at=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+H);const Y=n.get(at);if(at.version!==Y.__version||q===!0){e.activeTexture(s.TEXTURE0+H);const Lt=ie.getPrimaries(ie.workingColorSpace),mt=v.colorSpace===ti?null:ie.getPrimaries(v.colorSpace),Pt=v.colorSpace===ti||Lt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,ut=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let Q=0;Q<6;Q++)!At&&!ut?bt[Q]=_(v.image[Q],!0,i.maxCubemapSize):bt[Q]=ut?v.image[Q].image:v.image[Q],bt[Q]=Gt(v,bt[Q]);const Ot=bt[0],Dt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Wt=S(v.internalFormat,Dt,Mt,v.colorSpace),O=v.isVideoTexture!==!0,ft=Y.__version===void 0||q===!0,xt=at.dataReady;let wt=R(v,Ot);Ut(s.TEXTURE_CUBE_MAP,v);let st;if(At){O&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Wt,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){st=bt[Q].mipmaps;for(let Rt=0;Rt<st.length;Rt++){const Xt=st[Rt];v.format!==gn?Dt!==null?O?xt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,Xt.width,Xt.height,Dt,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Wt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,Xt.width,Xt.height,Dt,Mt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Wt,Xt.width,Xt.height,0,Dt,Mt,Xt.data)}}}else{if(st=v.mipmaps,O&&ft){st.length>0&&wt++;const Q=Ht(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ut){O?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,bt[Q].width,bt[Q].height,Dt,Mt,bt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,bt[Q].width,bt[Q].height,0,Dt,Mt,bt[Q].data);for(let Rt=0;Rt<st.length;Rt++){const oe=st[Rt].image[Q].image;O?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,oe.width,oe.height,Dt,Mt,oe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Wt,oe.width,oe.height,0,Dt,Mt,oe.data)}}else{O?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,Mt,bt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,Dt,Mt,bt[Q]);for(let Rt=0;Rt<st.length;Rt++){const Xt=st[Rt];O?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,Dt,Mt,Xt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Wt,Dt,Mt,Xt.image[Q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),Y.__version=at.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function vt(T,v,H,q,at,Y){const Lt=r.convert(H.format,H.colorSpace),mt=r.convert(H.type),Pt=S(H.internalFormat,Lt,mt,H.colorSpace),At=n.get(v),ut=n.get(H);if(ut.__renderTarget=v,!At.__hasExternalTextures){const bt=Math.max(1,v.width>>Y),Ot=Math.max(1,v.height>>Y);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,Y,Pt,bt,Ot,v.depth,0,Lt,mt,null):e.texImage2D(at,Y,Pt,bt,Ot,0,Lt,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),ht(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,at,ut.__webglTexture,0,gt(v)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,at,ut.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(T,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const q=v.depthTexture,at=q&&q.isDepthTexture?q.type:null,Y=y(v.stencilBuffer,at),Lt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=gt(v);ht(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Y,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Y,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,T)}else{const q=v.textures;for(let at=0;at<q.length;at++){const Y=q[at],Lt=r.convert(Y.format,Y.colorSpace),mt=r.convert(Y.type),Pt=S(Y.internalFormat,Lt,mt,Y.colorSpace),At=gt(v);H&&ht(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Pt,v.width,v.height):ht(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,Pt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);const at=q.__webglTexture,Y=gt(v);if(v.depthTexture.format===ir)ht(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(v.depthTexture.format===sr)ht(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function qt(T){const v=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",at)};q.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=q}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Et(v.__webglFramebuffer[0],T):Et(v.__webglFramebuffer,T)}else if(H){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=s.createRenderbuffer(),Ct(v.__webglDepthbuffer[q],T,!1);else{const at=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ct(v.__webglDepthbuffer,T,!1);else{const at=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,v,H){const q=n.get(T);v!==void 0&&vt(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&qt(T)}function L(T){const v=T.texture,H=n.get(T),q=n.get(v);T.addEventListener("dispose",C);const at=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=v.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)H.__webglFramebuffer[mt][Pt]=s.createFramebuffer()}else H.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<v.mipmaps.length;mt++)H.__webglFramebuffer[mt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let mt=0,Pt=at.length;mt<Pt;mt++){const At=n.get(at[mt]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&ht(T)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){const Pt=at[mt];H.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);const At=r.convert(Pt.format,Pt.colorSpace),ut=r.convert(Pt.type),bt=S(Pt.internalFormat,At,ut,Pt.colorSpace,T.isXRRenderTarget===!0),Ot=gt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,bt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,v);for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)vt(H.__webglFramebuffer[mt][Pt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt);else vt(H.__webglFramebuffer[mt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,Pt=at.length;mt<Pt;mt++){const At=at[mt],ut=n.get(At);let bt=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(bt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,ut.__webglTexture),Ut(bt,At),vt(H.__webglFramebuffer,T,At,s.COLOR_ATTACHMENT0+mt,bt,0),m(At)&&p(bt)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(mt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,q.__webglTexture),Ut(mt,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)vt(H.__webglFramebuffer[Pt],T,v,s.COLOR_ATTACHMENT0,mt,Pt);else vt(H.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,mt,0);m(v)&&p(mt),e.unbindTexture()}T.depthBuffer&&qt(T)}function rt(T){const v=T.textures;for(let H=0,q=v.length;H<q;H++){const at=v[H];if(m(at)){const Y=E(T),Lt=n.get(at).__webglTexture;e.bindTexture(Y,Lt),p(Y),e.unbindTexture()}}}const tt=[],it=[];function nt(T){if(T.samples>0){if(ht(T)===!1){const v=T.textures,H=T.width,q=T.height;let at=s.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(T),mt=v.length>1;if(mt)for(let At=0;At<v.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Pt=T.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const ut=n.get(v[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,H,q,0,0,H,q,at,s.NEAREST),h===!0&&(tt.length=0,it.length=0,tt.push(s.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push(Y),it.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<v.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const ut=n.get(v[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&h){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function gt(T){return Math.min(i.maxSamples,T.samples)}function ht(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _t(T){const v=o.render.frame;c.get(T)!==v&&(c.set(T,v),T.update())}function Gt(T,v){const H=T.colorSpace,q=T.format,at=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==gs&&H!==ti&&(ie.getTransfer(H)===ae?(q!==gn||at!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=re,this.setupRenderTarget=L,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ht}function J0(s,t){function e(n,i=ti){let r;const o=ie.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===wl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return s.BYTE;if(n===Fh)return s.SHORT;if(n===er)return s.UNSIGNED_SHORT;if(n===Al)return s.INT;if(n===Ei)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===fr)return s.HALF_FLOAT;if(n===Bh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===gn)return s.RGBA;if(n===ir)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===Rl)return s.RED;if(n===Cl)return s.RED_INTEGER;if(n===kh)return s.RG;if(n===Pl)return s.RG_INTEGER;if(n===Ll)return s.RGBA_INTEGER;if(n===oo||n===ao||n===lo||n===co)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ba||n===Va||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===$a||n===qa||n===Ya||n===Za||n===Ja||n===ja||n===Ka||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`;class Q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ru(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:j0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t_ extends vs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",h=1,l=null,c=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Q0,p={},E=e.getContextAttributes();let S=null,y=null;const R=[],w=[],C=new jt;let I=null;const b=new tn;b.viewport=new le;const M=new tn;M.viewport=new le;const P=[b,M],B=new vf;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=R[K];return j===void 0&&(j=new Ko,R[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=R[K];return j===void 0&&(j=new Ko,R[K]=j),j.getGripSpace()},this.getHand=function(K){let j=R[K];return j===void 0&&(j=new Ko,R[K]=j),j.getHandSpace()};function N(K){const j=w.indexOf(K.inputSource);if(j===-1)return;const vt=R[j];vt!==void 0&&(vt.update(K.inputSource,K.frame,l||o),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Z);for(let K=0;K<R.length;K++){const j=w[K];j!==null&&(w[K]=null,R[K].disconnect(j))}G=null,$=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(S),d=null,f=null,u=null,i=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ct=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=E.stencil?sr:ir,Ct=E.stencil?nr:Ei);const qt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(qt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ai(f.textureWidth,f.textureHeight,{format:gn,type:An,depthTexture:new su(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ai(d.framebufferWidth,d.framebufferHeight,{format:gn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let j=0;j<K.removed.length;j++){const vt=K.removed[j],Ct=w.indexOf(vt);Ct>=0&&(w[Ct]=null,R[Ct].disconnect(vt))}for(let j=0;j<K.added.length;j++){const vt=K.added[j];let Ct=w.indexOf(vt);if(Ct===-1){for(let qt=0;qt<R.length;qt++)if(qt>=w.length){w.push(vt),Ct=qt;break}else if(w[qt]===null){w[qt]=vt,Ct=qt;break}if(Ct===-1)break}const Et=R[Ct];Et&&Et.connect(vt)}}const W=new z,X=new z;function et(K,j,vt){W.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(vt.matrixWorld);const Ct=W.distanceTo(X),Et=j.projectionMatrix.elements,qt=vt.projectionMatrix.elements,re=Et[14]/(Et[10]-1),L=Et[14]/(Et[10]+1),rt=(Et[9]+1)/Et[5],tt=(Et[9]-1)/Et[5],it=(Et[8]-1)/Et[0],nt=(qt[8]+1)/qt[0],gt=re*it,ht=re*nt,_t=Ct/(-it+nt),Gt=_t*-it;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Gt),K.translateZ(_t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ht=re+_t,T=L+_t,v=gt-Gt,H=ht+(Ct-Gt),q=rt*L/T*Ht,at=tt*L/T*Ht;K.projectionMatrix.makePerspective(v,H,q,at,Ht,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ct(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,vt=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),B.near=M.near=b.near=j,B.far=M.far=b.far=vt,(G!==B.near||$!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,$=B.far),B.layers.mask=K.layers.mask|6,b.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;const Ct=K.parent,Et=B.cameras;ct(B,Ct);for(let qt=0;qt<Et.length;qt++)ct(Et[qt],Ct);Et.length===2?et(B,b,M):B.projectionMatrix.copy(b.projectionMatrix),Ut(K,B,Ct)};function Ut(K,j,vt){vt===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(K){h=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let Vt=null;function Nt(K,j){if(c=j.getViewerPose(l||o),g=j,c!==null){const vt=c.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ct=!1;vt.length!==B.cameras.length&&(B.cameras.length=0,Ct=!0);for(let L=0;L<vt.length;L++){const rt=vt[L];let tt=null;if(d!==null)tt=d.getViewport(rt);else{const nt=u.getViewSubImage(f,rt);tt=nt.viewport,L===0&&(t.setRenderTargetTextures(y,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(y))}let it=P[L];it===void 0&&(it=new tn,it.layers.enable(L),it.viewport=new le,P[L]=it),it.matrix.fromArray(rt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(rt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(tt.x,tt.y,tt.width,tt.height),L===0&&(B.matrix.copy(it.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ct===!0&&B.cameras.push(it)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(vt[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<vt.length;L++){const rt=vt[L].camera;if(rt){let tt=p[rt];tt||(tt=new ru,p[rt]=tt);const it=u.getCameraImage(rt);tt.sourceTexture=it}}}}for(let vt=0;vt<R.length;vt++){const Ct=w[vt],Et=R[vt];Ct!==null&&Et!==void 0&&Et.update(Ct,j,l||o)}Vt&&Vt(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Yt=new lu;Yt.setAnimationLoop(Nt),this.setAnimationLoop=function(K){Vt=K},this.dispose=function(){}}}const di=new Hn,e_=new ue;function n_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?h(m,p,E,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),S=E.envMap,y=E.envMapRotation;S&&(m.envMap.value=S,di.copy(y),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function i_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,S){const y=S.program;n.uniformBlockBinding(E,y)}function l(E,S){let y=i[E.id];y===void 0&&(g(E),y=c(E),i[E.id]=y,E.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(E,R);const w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function c(E){const S=u();E.__bindingPointIndex=S;const y=s.createBuffer(),R=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=i[E.id],y=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,C=y.length;w<C;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,M=I.length;b<M;b++){const P=I[b];if(d(P,w,b,R)===!0){const B=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let N=0;N<G.length;N++){const V=G[N],Z=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,B+$,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,S,y,R){const w=E.value,C=S+"_"+y;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const I=R[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(E){const S=E.uniforms;let y=0;const R=16;for(let C=0,I=S.length;C<I;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,P=b.length;M<P;M++){const B=b[M],G=Array.isArray(B.value)?B.value:[B.value];for(let $=0,N=G.length;$<N;$++){const V=G[$],Z=_(V),W=y%R,X=W%Z.boundary,et=W+X;y+=X,et!==0&&R-et<Z.storage&&(y+=R-et),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Z.storage}}}const w=y%R;return w>0&&(y+=R-w),E.__size=y,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:h,update:l,dispose:p}}class s_{constructor(t={}){const{canvas:e=Cd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=Ge;let w=0,C=0,I=null,b=-1,M=null;const P=new le,B=new le;let G=null;const $=new Qt(0);let N=0,V=e.width,Z=e.height,W=1,X=null,et=null;const ct=new le(0,0,V,Z),Ut=new le(0,0,V,Z);let Vt=!1;const Nt=new Ol;let Yt=!1,K=!1;const j=new ue,vt=new z,Ct=new le,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function re(){return I===null?W:1}let L=n;function rt(x,A){return e.getContext(x,A)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",st,!1),L===null){const A="webgl2";if(L=rt(A,x),L===null)throw rt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let tt,it,nt,gt,ht,_t,Gt,Ht,T,v,H,q,at,Y,Lt,mt,Pt,At,ut,bt,Ot,Dt,Mt,Wt;function O(){tt=new pg(L),tt.init(),Dt=new J0(L,tt),it=new ag(L,tt,t,Dt),nt=new Y0(L,tt),it.reversedDepthBuffer&&f&&nt.buffers.depth.setReversed(!0),gt=new _g(L),ht=new N0,_t=new Z0(L,tt,nt,ht,it,Dt,gt),Gt=new cg(y),Ht=new fg(y),T=new bf(L),Mt=new rg(L,T),v=new mg(L,T,gt,Mt),H=new yg(L,v,T,gt),ut=new xg(L,it,_t),mt=new lg(ht),q=new U0(y,Gt,Ht,tt,it,Mt,mt),at=new n_(y,ht),Y=new O0,Lt=new G0(tt),At=new sg(y,Gt,Ht,nt,H,d,h),Pt=new $0(y,H,it),Wt=new i_(L,gt,it,nt),bt=new og(L,tt,gt),Ot=new gg(L,tt,gt),gt.programs=q.programs,y.capabilities=it,y.extensions=tt,y.properties=ht,y.renderLists=Y,y.shadowMap=Pt,y.state=nt,y.info=gt}O();const ft=new t_(y,L);this.xr=ft,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=tt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=tt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(V,Z,!1))},this.getSize=function(x){return x.set(V,Z)},this.setSize=function(x,A,U=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,Z=A,e.width=Math.floor(x*W),e.height=Math.floor(A*W),U===!0&&(e.style.width=x+"px",e.style.height=A+"px"),this.setViewport(0,0,x,A)},this.getDrawingBufferSize=function(x){return x.set(V*W,Z*W).floor()},this.setDrawingBufferSize=function(x,A,U){V=x,Z=A,W=U,e.width=Math.floor(x*U),e.height=Math.floor(A*U),this.setViewport(0,0,x,A)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(ct)},this.setViewport=function(x,A,U,F){x.isVector4?ct.set(x.x,x.y,x.z,x.w):ct.set(x,A,U,F),nt.viewport(P.copy(ct).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Ut)},this.setScissor=function(x,A,U,F){x.isVector4?Ut.set(x.x,x.y,x.z,x.w):Ut.set(x,A,U,F),nt.scissor(B.copy(Ut).multiplyScalar(W).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(x){nt.setScissorTest(Vt=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){et=x},this.getClearColor=function(x){return x.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(x=!0,A=!0,U=!0){let F=0;if(x){let D=!1;if(I!==null){const J=I.texture.format;D=J===Ll||J===Pl||J===Cl}if(D){const J=I.texture.type,ot=J===An||J===Ei||J===er||J===nr||J===wl||J===Tl,yt=At.getClearColor(),pt=At.getClearAlpha(),Tt=yt.r,Ft=yt.g,It=yt.b;ot?(g[0]=Tt,g[1]=Ft,g[2]=It,g[3]=pt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Tt,_[1]=Ft,_[2]=It,_[3]=pt,L.clearBufferiv(L.COLOR,0,_))}else F|=L.COLOR_BUFFER_BIT}A&&(F|=L.DEPTH_BUFFER_BIT),U&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),At.dispose(),Y.dispose(),Lt.dispose(),ht.dispose(),Gt.dispose(),Ht.dispose(),H.dispose(),Mt.dispose(),Wt.dispose(),q.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ze),ft.removeEventListener("sessionend",yn),Rn.stop()};function xt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=gt.autoReset,A=Pt.enabled,U=Pt.autoUpdate,F=Pt.needsUpdate,D=Pt.type;O(),gt.autoReset=x,Pt.enabled=A,Pt.autoUpdate=U,Pt.needsUpdate=F,Pt.type=D}function st(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Q(x){const A=x.target;A.removeEventListener("dispose",Q),Rt(A)}function Rt(x){Xt(x),ht.remove(x)}function Xt(x){const A=ht.get(x).programs;A!==void 0&&(A.forEach(function(U){q.releaseProgram(U)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,A,U,F,D,J){A===null&&(A=Et);const ot=D.isMesh&&D.matrixWorld.determinant()<0,yt=vr(x,A,U,F,D);nt.setMaterial(F,ot);let pt=U.index,Tt=1;if(F.wireframe===!0){if(pt=v.getWireframeAttribute(U),pt===void 0)return;Tt=2}const Ft=U.drawRange,It=U.attributes.position;let $t=Ft.start*Tt,se=(Ft.start+Ft.count)*Tt;J!==null&&($t=Math.max($t,J.start*Tt),se=Math.min(se,(J.start+J.count)*Tt)),pt!==null?($t=Math.max($t,0),se=Math.min(se,pt.count)):It!=null&&($t=Math.max($t,0),se=Math.min(se,It.count));const ge=se-$t;if(ge<0||ge===1/0)return;Mt.setup(D,F,yt,U,pt);let he,ce=bt;if(pt!==null&&(he=T.get(pt),ce=Ot,ce.setIndex(he)),D.isMesh)F.wireframe===!0?(nt.setLineWidth(F.wireframeLinewidth*re()),ce.setMode(L.LINES)):ce.setMode(L.TRIANGLES);else if(D.isLine){let zt=F.linewidth;zt===void 0&&(zt=1),nt.setLineWidth(zt*re()),D.isLineSegments?ce.setMode(L.LINES):D.isLineLoop?ce.setMode(L.LINE_LOOP):ce.setMode(L.LINE_STRIP)}else D.isPoints?ce.setMode(L.POINTS):D.isSprite&&ce.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const zt=D._multiDrawStarts,de=D._multiDrawCounts,ne=D._multiDrawCount,qe=pt?T.get(pt).bytesPerElement:1,Di=ht.get(F).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)Di.setValue(L,"_gl_DrawID",Ye),ce.render(zt[Ye]/qe,de[Ye])}else if(D.isInstancedMesh)ce.renderInstances($t,ge,D.count);else if(U.isInstancedBufferGeometry){const zt=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,de=Math.min(U.instanceCount,zt);ce.renderInstances($t,ge,de)}else ce.render($t,ge)};function oe(x,A,U){x.transparent===!0&&x.side===Bn&&x.forceSinglePass===!1?(x.side=Fe,x.needsUpdate=!0,Cn(x,A,U),x.side=si,x.needsUpdate=!0,Cn(x,A,U),x.side=Bn):Cn(x,A,U)}this.compile=function(x,A,U=null){U===null&&(U=x),p=Lt.get(U),p.init(A),S.push(p),U.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),x!==U&&x.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const F=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let ot=0;ot<J.length;ot++){const yt=J[ot];oe(yt,U,D),F.add(yt)}else oe(J,U,D),F.add(J)}),p=S.pop(),F},this.compileAsync=function(x,A,U=null){const F=this.compile(x,A,U);return new Promise(D=>{function J(){if(F.forEach(function(ot){ht.get(ot).currentProgram.isReady()&&F.delete(ot)}),F.size===0){D(x);return}setTimeout(J,10)}tt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let ee=null;function nn(x){ee&&ee(x)}function ze(){Rn.stop()}function yn(){Rn.start()}const Rn=new lu;Rn.setAnimationLoop(nn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(x){ee=x,ft.setAnimationLoop(x),x===null?Rn.stop():Rn.start()},ft.addEventListener("sessionstart",ze),ft.addEventListener("sessionend",yn),this.render=function(x,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(A),A=ft.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,A,I),p=Lt.get(x,S.length),p.init(A),S.push(p),j.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),Nt.setFromProjectionMatrix(j,bn,A.reversedDepth),K=this.localClippingEnabled,Yt=mt.init(this.clippingPlanes,K),m=Y.get(x,E.length),m.init(),E.push(m),ft.enabled===!0&&ft.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&Ts(J,A,-1/0,y.sortObjects)}Ts(x,A,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,et),qt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,qt&&At.addToRenderList(m,x),this.info.render.frame++,Yt===!0&&mt.beginShadows();const U=p.state.shadowsArray;Pt.render(U,x,A),Yt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=m.opaque,D=m.transmissive;if(p.setupLights(),A.isArrayCamera){const J=A.cameras;if(D.length>0)for(let ot=0,yt=J.length;ot<yt;ot++){const pt=J[ot];yr(F,D,x,pt)}qt&&At.render(x);for(let ot=0,yt=J.length;ot<yt;ot++){const pt=J[ot];xr(m,x,pt,pt.viewport)}}else D.length>0&&yr(F,D,x,A),qt&&At.render(x),xr(m,x,A);I!==null&&C===0&&(_t.updateMultisampleRenderTarget(I),_t.updateRenderTargetMipmap(I)),x.isScene===!0&&x.onAfterRender(y,x,A),Mt.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Yt===!0&&mt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ts(x,A,U,F){if(x.visible===!1)return;if(x.layers.test(A.layers)){if(x.isGroup)U=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(A);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Nt.intersectsSprite(x)){F&&Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(j);const ot=H.update(x),yt=x.material;yt.visible&&m.push(x,ot,yt,U,Ct.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Nt.intersectsObject(x))){const ot=H.update(x),yt=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ct.copy(x.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ct.copy(ot.boundingSphere.center)),Ct.applyMatrix4(x.matrixWorld).applyMatrix4(j)),Array.isArray(yt)){const pt=ot.groups;for(let Tt=0,Ft=pt.length;Tt<Ft;Tt++){const It=pt[Tt],$t=yt[It.materialIndex];$t&&$t.visible&&m.push(x,ot,$t,U,Ct.z,It)}}else yt.visible&&m.push(x,ot,yt,U,Ct.z,null)}}const J=x.children;for(let ot=0,yt=J.length;ot<yt;ot++)Ts(J[ot],A,U,F)}function xr(x,A,U,F){const D=x.opaque,J=x.transmissive,ot=x.transparent;p.setupLightsView(U),Yt===!0&&mt.setGlobalState(y.clippingPlanes,U),F&&nt.viewport(P.copy(F)),D.length>0&&Re(D,A,U),J.length>0&&Re(J,A,U),ot.length>0&&Re(ot,A,U),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function yr(x,A,U,F){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Ai(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?fr:An,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const J=p.state.transmissionRenderTarget[F.id],ot=F.viewport||P;J.setSize(ot.z*y.transmissionResolutionScale,ot.w*y.transmissionResolutionScale);const yt=y.getRenderTarget(),pt=y.getActiveCubeFace(),Tt=y.getActiveMipmapLevel();y.setRenderTarget(J),y.getClearColor($),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),qt&&At.render(U);const Ft=y.toneMapping;y.toneMapping=ni;const It=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),Yt===!0&&mt.setGlobalState(y.clippingPlanes,F),Re(x,U,F),_t.updateMultisampleRenderTarget(J),_t.updateRenderTargetMipmap(J),tt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let se=0,ge=A.length;se<ge;se++){const he=A[se],ce=he.object,zt=he.geometry,de=he.material,ne=he.group;if(de.side===Bn&&ce.layers.test(F.layers)){const qe=de.side;de.side=Fe,de.needsUpdate=!0,Li(ce,U,F,zt,de,ne),de.side=qe,de.needsUpdate=!0,$t=!0}}$t===!0&&(_t.updateMultisampleRenderTarget(J),_t.updateRenderTargetMipmap(J))}y.setRenderTarget(yt,pt,Tt),y.setClearColor($,N),It!==void 0&&(F.viewport=It),y.toneMapping=Ft}function Re(x,A,U){const F=A.isScene===!0?A.overrideMaterial:null;for(let D=0,J=x.length;D<J;D++){const ot=x[D],yt=ot.object,pt=ot.geometry,Tt=ot.group;let Ft=ot.material;Ft.allowOverride===!0&&F!==null&&(Ft=F),yt.layers.test(U.layers)&&Li(yt,A,U,pt,Ft,Tt)}}function Li(x,A,U,F,D,J){x.onBeforeRender(y,A,U,F,D,J),x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(y,A,U,F,x,J),D.transparent===!0&&D.side===Bn&&D.forceSinglePass===!1?(D.side=Fe,D.needsUpdate=!0,y.renderBufferDirect(U,A,F,D,x,J),D.side=si,D.needsUpdate=!0,y.renderBufferDirect(U,A,F,D,x,J),D.side=Bn):y.renderBufferDirect(U,A,F,D,x,J),x.onAfterRender(y,A,U,F,D,J)}function Cn(x,A,U){A.isScene!==!0&&(A=Et);const F=ht.get(x),D=p.state.lights,J=p.state.shadowsArray,ot=D.state.version,yt=q.getParameters(x,D.state,J,A,U),pt=q.getProgramCacheKey(yt);let Tt=F.programs;F.environment=x.isMeshStandardMaterial?A.environment:null,F.fog=A.fog,F.envMap=(x.isMeshStandardMaterial?Ht:Gt).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?A.environmentRotation:x.envMapRotation,Tt===void 0&&(x.addEventListener("dispose",Q),Tt=new Map,F.programs=Tt);let Ft=Tt.get(pt);if(Ft!==void 0){if(F.currentProgram===Ft&&F.lightsStateVersion===ot)return Cs(x,yt),Ft}else yt.uniforms=q.getUniforms(x),x.onBeforeCompile(yt,y),Ft=q.acquireProgram(yt,pt),Tt.set(pt,Ft),F.uniforms=yt.uniforms;const It=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(It.clippingPlanes=mt.uniform),Cs(x,yt),F.needsLights=Co(x),F.lightsStateVersion=ot,F.needsLights&&(It.ambientLightColor.value=D.state.ambient,It.lightProbe.value=D.state.probe,It.directionalLights.value=D.state.directional,It.directionalLightShadows.value=D.state.directionalShadow,It.spotLights.value=D.state.spot,It.spotLightShadows.value=D.state.spotShadow,It.rectAreaLights.value=D.state.rectArea,It.ltc_1.value=D.state.rectAreaLTC1,It.ltc_2.value=D.state.rectAreaLTC2,It.pointLights.value=D.state.point,It.pointLightShadows.value=D.state.pointShadow,It.hemisphereLights.value=D.state.hemi,It.directionalShadowMap.value=D.state.directionalShadowMap,It.directionalShadowMatrix.value=D.state.directionalShadowMatrix,It.spotShadowMap.value=D.state.spotShadowMap,It.spotLightMatrix.value=D.state.spotLightMatrix,It.spotLightMap.value=D.state.spotLightMap,It.pointShadowMap.value=D.state.pointShadowMap,It.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ft,F.uniformsList=null,Ft}function Rs(x){if(x.uniformsList===null){const A=x.currentProgram.getUniforms();x.uniformsList=po.seqWithValue(A.seq,x.uniforms)}return x.uniformsList}function Cs(x,A){const U=ht.get(x);U.outputColorSpace=A.outputColorSpace,U.batching=A.batching,U.batchingColor=A.batchingColor,U.instancing=A.instancing,U.instancingColor=A.instancingColor,U.instancingMorph=A.instancingMorph,U.skinning=A.skinning,U.morphTargets=A.morphTargets,U.morphNormals=A.morphNormals,U.morphColors=A.morphColors,U.morphTargetsCount=A.morphTargetsCount,U.numClippingPlanes=A.numClippingPlanes,U.numIntersection=A.numClipIntersection,U.vertexAlphas=A.vertexAlphas,U.vertexTangents=A.vertexTangents,U.toneMapping=A.toneMapping}function vr(x,A,U,F,D){A.isScene!==!0&&(A=Et),_t.resetTextureUnits();const J=A.fog,ot=F.isMeshStandardMaterial?A.environment:null,yt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:gs,pt=(F.isMeshStandardMaterial?Ht:Gt).get(F.envMap||ot),Tt=F.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ft=!!U.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),It=!!U.morphAttributes.position,$t=!!U.morphAttributes.normal,se=!!U.morphAttributes.color;let ge=ni;F.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ge=y.toneMapping);const he=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ce=he!==void 0?he.length:0,zt=ht.get(F),de=p.state.lights;if(Yt===!0&&(K===!0||x!==M)){const Ie=x===M&&F.id===b;mt.setState(F,x,Ie)}let ne=!1;F.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==de.state.version||zt.outputColorSpace!==yt||D.isBatchedMesh&&zt.batching===!1||!D.isBatchedMesh&&zt.batching===!0||D.isBatchedMesh&&zt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&zt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&zt.instancing===!1||!D.isInstancedMesh&&zt.instancing===!0||D.isSkinnedMesh&&zt.skinning===!1||!D.isSkinnedMesh&&zt.skinning===!0||D.isInstancedMesh&&zt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&zt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&zt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&zt.instancingMorph===!1&&D.morphTexture!==null||zt.envMap!==pt||F.fog===!0&&zt.fog!==J||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==mt.numPlanes||zt.numIntersection!==mt.numIntersection)||zt.vertexAlphas!==Tt||zt.vertexTangents!==Ft||zt.morphTargets!==It||zt.morphNormals!==$t||zt.morphColors!==se||zt.toneMapping!==ge||zt.morphTargetsCount!==ce)&&(ne=!0):(ne=!0,zt.__version=F.version);let qe=zt.currentProgram;ne===!0&&(qe=Cn(F,A,D));let Di=!1,Ye=!1,Ds=!1;const fe=qe.getUniforms(),sn=zt.uniforms;if(nt.useProgram(qe.program)&&(Di=!0,Ye=!0,Ds=!0),F.id!==b&&(b=F.id,Ye=!0),Di||M!==x){nt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),fe.setValue(L,"projectionMatrix",x.projectionMatrix),fe.setValue(L,"viewMatrix",x.matrixWorldInverse);const Be=fe.map.cameraPosition;Be!==void 0&&Be.setValue(L,vt.setFromMatrixPosition(x.matrixWorld)),it.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&fe.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ye=!0,Ds=!0)}if(D.isSkinnedMesh){fe.setOptional(L,D,"bindMatrix"),fe.setOptional(L,D,"bindMatrixInverse");const Ie=D.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),fe.setValue(L,"boneTexture",Ie.boneTexture,_t))}D.isBatchedMesh&&(fe.setOptional(L,D,"batchingTexture"),fe.setValue(L,"batchingTexture",D._matricesTexture,_t),fe.setOptional(L,D,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",D._indirectTexture,_t),fe.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",D._colorsTexture,_t));const rn=U.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ut.update(D,U,qe),(Ye||zt.receiveShadow!==D.receiveShadow)&&(zt.receiveShadow=D.receiveShadow,fe.setValue(L,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(sn.envMap.value=pt,sn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&A.environment!==null&&(sn.envMapIntensity.value=A.environmentIntensity),Ye&&(fe.setValue(L,"toneMappingExposure",y.toneMappingExposure),zt.needsLights&&Mr(sn,Ds),J&&F.fog===!0&&at.refreshFogUniforms(sn,J),at.refreshMaterialUniforms(sn,F,W,Z,p.state.transmissionRenderTarget[x.id]),po.upload(L,Rs(zt),sn,_t)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(po.upload(L,Rs(zt),sn,_t),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&fe.setValue(L,"center",D.center),fe.setValue(L,"modelViewMatrix",D.modelViewMatrix),fe.setValue(L,"normalMatrix",D.normalMatrix),fe.setValue(L,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ie=F.uniformsGroups;for(let Be=0,Po=Ie.length;Be<Po;Be++){const oi=Ie[Be];Wt.update(oi,qe),Wt.bind(oi,qe)}}return qe}function Mr(x,A){x.ambientLightColor.needsUpdate=A,x.lightProbe.needsUpdate=A,x.directionalLights.needsUpdate=A,x.directionalLightShadows.needsUpdate=A,x.pointLights.needsUpdate=A,x.pointLightShadows.needsUpdate=A,x.spotLights.needsUpdate=A,x.spotLightShadows.needsUpdate=A,x.rectAreaLights.needsUpdate=A,x.hemisphereLights.needsUpdate=A}function Co(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(x,A,U){const F=ht.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),ht.get(x.texture).__webglTexture=A,ht.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:U,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,A){const U=ht.get(x);U.__webglFramebuffer=A,U.__useDefaultFramebuffer=A===void 0};const Ps=L.createFramebuffer();this.setRenderTarget=function(x,A=0,U=0){I=x,w=A,C=U;let F=!0,D=null,J=!1,ot=!1;if(x){const pt=ht.get(x);if(pt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(L.FRAMEBUFFER,null),F=!1;else if(pt.__webglFramebuffer===void 0)_t.setupRenderTarget(x);else if(pt.__hasExternalTextures)_t.rebindTextures(x,ht.get(x.texture).__webglTexture,ht.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const It=x.depthTexture;if(pt.__boundDepthTexture!==It){if(It!==null&&ht.has(It)&&(x.width!==It.image.width||x.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(x)}}const Tt=x.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);const Ft=ht.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ft[A])?D=Ft[A][U]:D=Ft[A],J=!0):x.samples>0&&_t.useMultisampledRTT(x)===!1?D=ht.get(x).__webglMultisampledFramebuffer:Array.isArray(Ft)?D=Ft[U]:D=Ft,P.copy(x.viewport),B.copy(x.scissor),G=x.scissorTest}else P.copy(ct).multiplyScalar(W).floor(),B.copy(Ut).multiplyScalar(W).floor(),G=Vt;if(U!==0&&(D=Ps),nt.bindFramebuffer(L.FRAMEBUFFER,D)&&F&&nt.drawBuffers(x,D),nt.viewport(P),nt.scissor(B),nt.setScissorTest(G),J){const pt=ht.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+A,pt.__webglTexture,U)}else if(ot){const pt=A;for(let Tt=0;Tt<x.textures.length;Tt++){const Ft=ht.get(x.textures[Tt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Tt,Ft.__webglTexture,U,pt)}}else if(x!==null&&U!==0){const pt=ht.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,U)}b=-1},this.readRenderTargetPixels=function(x,A,U,F,D,J,ot,yt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=ht.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){nt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const Tt=x.textures[yt],Ft=Tt.format,It=Tt.type;if(!it.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=x.width-F&&U>=0&&U<=x.height-D&&(x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt),L.readPixels(A,U,F,D,Dt.convert(Ft),Dt.convert(It),J))}finally{const Tt=I!==null?ht.get(I).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(x,A,U,F,D,J,ot,yt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=ht.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt)if(A>=0&&A<=x.width-F&&U>=0&&U<=x.height-D){nt.bindFramebuffer(L.FRAMEBUFFER,pt);const Tt=x.textures[yt],Ft=Tt.format,It=Tt.type;if(!it.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt),L.readPixels(A,U,F,D,Dt.convert(Ft),Dt.convert(It),0);const se=I!==null?ht.get(I).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,se);const ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pd(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer($t),L.deleteSync(ge),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,A=null,U=0){const F=Math.pow(2,-U),D=Math.floor(x.image.width*F),J=Math.floor(x.image.height*F),ot=A!==null?A.x:0,yt=A!==null?A.y:0;_t.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,U,0,0,ot,yt,D,J),nt.unbindTexture()};const Ls=L.createFramebuffer(),k=L.createFramebuffer();this.copyTextureToTexture=function(x,A,U=null,F=null,D=0,J=null){J===null&&(D!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=D,D=0):J=0);let ot,yt,pt,Tt,Ft,It,$t,se,ge;const he=x.isCompressedTexture?x.mipmaps[J]:x.image;if(U!==null)ot=U.max.x-U.min.x,yt=U.max.y-U.min.y,pt=U.isBox3?U.max.z-U.min.z:1,Tt=U.min.x,Ft=U.min.y,It=U.isBox3?U.min.z:0;else{const rn=Math.pow(2,-D);ot=Math.floor(he.width*rn),yt=Math.floor(he.height*rn),x.isDataArrayTexture?pt=he.depth:x.isData3DTexture?pt=Math.floor(he.depth*rn):pt=1,Tt=0,Ft=0,It=0}F!==null?($t=F.x,se=F.y,ge=F.z):($t=0,se=0,ge=0);const ce=Dt.convert(A.format),zt=Dt.convert(A.type);let de;A.isData3DTexture?(_t.setTexture3D(A,0),de=L.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(_t.setTexture2DArray(A,0),de=L.TEXTURE_2D_ARRAY):(_t.setTexture2D(A,0),de=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,A.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,A.unpackAlignment);const ne=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Di=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),Ds=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,he.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const fe=x.isDataArrayTexture||x.isData3DTexture,sn=A.isDataArrayTexture||A.isData3DTexture;if(x.isDepthTexture){const rn=ht.get(x),Ie=ht.get(A),Be=ht.get(rn.__renderTarget),Po=ht.get(Ie.__renderTarget);nt.bindFramebuffer(L.READ_FRAMEBUFFER,Be.__webglFramebuffer),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Po.__webglFramebuffer);for(let oi=0;oi<pt;oi++)fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(x).__webglTexture,D,It+oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(A).__webglTexture,J,ge+oi)),L.blitFramebuffer(Tt,Ft,ot,yt,$t,se,ot,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(D!==0||x.isRenderTargetTexture||ht.has(x)){const rn=ht.get(x),Ie=ht.get(A);nt.bindFramebuffer(L.READ_FRAMEBUFFER,Ls),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let Be=0;Be<pt;Be++)fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,D,It+Be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,D),sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,J,ge+Be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,J),D!==0?L.blitFramebuffer(Tt,Ft,ot,yt,$t,se,ot,yt,L.COLOR_BUFFER_BIT,L.NEAREST):sn?L.copyTexSubImage3D(de,J,$t,se,ge+Be,Tt,Ft,ot,yt):L.copyTexSubImage2D(de,J,$t,se,Tt,Ft,ot,yt);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else sn?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(de,J,$t,se,ge,ot,yt,pt,ce,zt,he.data):A.isCompressedArrayTexture?L.compressedTexSubImage3D(de,J,$t,se,ge,ot,yt,pt,ce,he.data):L.texSubImage3D(de,J,$t,se,ge,ot,yt,pt,ce,zt,he):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,$t,se,ot,yt,ce,zt,he.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,$t,se,he.width,he.height,ce,he.data):L.texSubImage2D(L.TEXTURE_2D,J,$t,se,ot,yt,ce,zt,he);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Di),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ds),J===0&&A.generateMipmaps&&L.generateMipmap(de),nt.unbindTexture()},this.initRenderTarget=function(x){ht.get(x).__webglFramebuffer===void 0&&_t.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?_t.setTextureCube(x,0):x.isData3DTexture?_t.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?_t.setTexture2DArray(x,0):_t.setTexture2D(x,0),nt.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,nt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class r_ extends nu{constructor(){super();const t=new Pi;t.deleteAttribute("uv");const e=new Me({side:Fe}),n=new Me,i=new Ys(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new te(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new sf(t,n,6),a=new Oe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const h=new te(t,Zi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const l=new te(t,Zi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const c=new te(t,Zi(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const u=new te(t,Zi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new te(t,Zi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new te(t,Zi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Zi(s){return new hf({color:0,emissive:16777215,emissiveIntensity:s})}function _e(s,t=0,e=.65){return new Me({color:s,metalness:t,roughness:e})}function Bt(s,t,e,n){const i=new te(new Pi(...t),n);return i.position.set(...e),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}function We(s,t,e,n,i,r=24){const o=new te(new bs(t,t,e,r),i);return o.position.set(...n),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function nh(s,t,e,n,i){const r=new z(...t),o=new z(...e),a=We(s,n,r.distanceTo(o),r.clone().add(o).multiplyScalar(.5).toArray(),i,8);return a.quaternion.setFromUnitVectors(new z(0,1,0),o.sub(r).normalize()),a}function ih(s){s.traverse(t=>{(t instanceof te||t instanceof iu)&&t.geometry.dispose()}),s.clear()}class o_{constructor(t,e,n,i,r){this.host=t,this.scene=new nu,this.camera=new tn(38,1,.1,160),this.root=new we,this.reduced=matchMedia("(prefers-reduced-motion: reduce)"),this.labels=[],this.callbacks=new Map,this.drags=new Map,this.skipClick=!1,this.lastHit=null,this.ray=new Mf,this.pointer=new jt,this.target=new z,this.frame=()=>{},this.draw=null,this.resized=()=>{},this.reserveRight=0,this.last=0,this.controller=new AbortController,this.viewWidth=20,this.content=null,this.contentMargin=.94,this.offset=new z,this.hover=null,this.disposed=!1,this.renderer=new s_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dh,this.renderer.toneMapping=Ih,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.setAttribute("aria-hidden","true"),t.prepend(this.renderer.domElement),this.scene.background=new Qt(e),this.scene.fog=new Eo(e,36,85),this.scene.add(this.root),this.target.set(...i),this.camera.position.set(...n),this.camera.lookAt(this.target),this.viewWidth=r,this.offset.copy(this.camera.position).sub(this.target);const o=new r_,a=new pl(this.renderer);this.environment=a.fromScene(o,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.45,o.dispose(),a.dispose();const h=new _f(14149615,2370868,1.2);h.name="ambient",this.scene.add(h);const l=new Cc(16768426,3.5);l.name="key",l.position.set(-8,15,9),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.5,far:65}),l.shadow.bias=-5e-4,l.shadow.normalBias=.03,this.scene.add(l);const c=new Cc(8960969,1.3);c.name="fill",c.position.set(8,8,-10),this.scene.add(c);const u={signal:this.controller.signal};let f=null,d=0;const g=_=>_.target===this.renderer.domElement?this.hit(_):this.labels.find(m=>m.element===_.target)?.object??null;t.addEventListener("pointerdown",_=>{const m=g(_),p=m?this.drags.get(m):void 0;p&&(f={callback:p,x:_.clientX,y:_.clientY,acc:0,moved:!1},_.target.setPointerCapture(_.pointerId))},u),t.addEventListener("pointermove",_=>{if(f){f.acc+=_.clientX-f.x+(f.y-_.clientY),f.x=_.clientX,f.y=_.clientY;const m=Math.trunc(f.acc/3);m&&(f.callback(m),f.acc-=m*3,f.moved=!0);return}_.target===this.renderer.domElement&&(this.hover=this.hit(_),this.renderer.domElement.style.cursor=this.hover?"pointer":"default")},u),t.addEventListener("wheel",_=>{const m=g(_),p=m?this.drags.get(m):void 0;if(!p)return;_.preventDefault(),d-=_.deltaY;const E=Math.trunc(d/20);E&&(p(E),d-=E*20)},{signal:this.controller.signal,passive:!1}),t.addEventListener("pointerup",()=>{this.skipClick=f?.moved??!1,f=null},u),t.addEventListener("pointercancel",()=>{f=null},u),this.renderer.domElement.addEventListener("click",_=>{if(this.skipClick){this.skipClick=!1;return}const m=this.hit(_);m&&this.callbacks.get(m)?.()},u),this.renderer.domElement.addEventListener("webglcontextlost",_=>{_.preventDefault(),this.renderer.setAnimationLoop(null),this.host.dispatchEvent(new CustomEvent("scene-lost"))},u),this.renderer.domElement.addEventListener("webglcontextrestored",()=>location.reload(),u),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize(),this.renderer.setAnimationLoop(_=>{const m=Math.min((_-this.last)/1e3||0,.05);this.last=_,!document.hidden&&(this.frame(m,_/1e3),this.project(),this.draw?this.draw():this.renderer.render(this.scene,this.camera))}),window.addEventListener("pagehide",()=>this.dispose(),{once:!0,signal:this.controller.signal})}fitTo(t,e=.96){this.content=t.map(n=>n.clone()),this.contentMargin=e,this.resize()}resize(){const t=this.host.clientWidth,e=Math.max(1,this.host.clientHeight),n=Math.max(1,t-Math.min(this.reserveRight,t/2));if(this.renderer.setSize(t,e),this.camera.aspect=n/e,n<t?this.camera.setViewOffset(n,e,0,0,t,e):this.camera.clearViewOffset(),this.content)this.frameContent();else{const i=this.camera.position.distanceTo(this.target);this.camera.fov=ho.radToDeg(2*Math.atan(Math.max(this.viewWidth/this.camera.aspect,12)/(i*2)))}this.camera.updateProjectionMatrix(),this.project(),this.resized(t,e)}frameContent(){const t=this.content,e=new z,n=new z;for(const i of t)n.add(i);n.divideScalar(t.length);for(let i=0;i<3;i++){this.target.copy(n),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld();let r=1/0,o=-1/0,a=1/0,h=-1/0;for(const d of t){e.copy(d).applyMatrix4(this.camera.matrixWorldInverse);const g=Math.max(.1,-e.z);r=Math.min(r,e.x/g),o=Math.max(o,e.x/g),a=Math.min(a,e.y/g),h=Math.max(h,e.y/g)}const l=Math.max(.02,(h-a)/2,(o-r)/2/this.camera.aspect);if(this.camera.fov=ho.clamp(ho.radToDeg(2*Math.atan(l/this.contentMargin)),8,80),i===2)break;const c=this.offset.length(),u=new z().setFromMatrixColumn(this.camera.matrixWorld,0),f=new z().setFromMatrixColumn(this.camera.matrixWorld,1);n.addScaledVector(u,(o+r)/2*c).addScaledVector(f,(h+a)/2*c)}}lighting(t,e,n,i){this.scene.getObjectByName("ambient").intensity=t,this.scene.getObjectByName("key").intensity=e,this.scene.getObjectByName("fill").intensity=n,this.scene.environmentIntensity=i}hit(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const n=this.ray.intersectObjects([...this.callbacks.keys()],!0);this.lastHit=n[0]??null;let i=n[0]?.object??null;for(;i&&!this.callbacks.has(i);)i=i.parent;return i}interact(t,e,n,i=[0,.6,0]){this.callbacks.set(t,n);const r=document.createElement("button");return r.type="button",r.className="object-label",r.textContent=e,r.title=e,r.setAttribute("aria-label",e),r.addEventListener("click",()=>{if(this.skipClick){this.skipClick=!1;return}n()}),this.host.append(r),r.addEventListener("focus",()=>r.classList.add("targeted")),r.addEventListener("blur",()=>r.classList.remove("targeted")),this.labels.push({element:r,object:t,offset:new z(...i)}),r}project(){this.scene.updateMatrixWorld(),this.camera.updateMatrixWorld();for(const t of this.labels){const e=t.object.localToWorld(t.offset.clone()).project(this.camera);t.element.style.left=`${(e.x+1)/2*100}%`,t.element.style.top=`${(1-e.y)/2*100}%`;let n=t.object.visible;t.object.traverseAncestors(i=>{n=n&&i.visible}),t.element.hidden=!n||e.z>1}}describeObjects(){const t=this.host.getBoundingClientRect();return this.labels.map(e=>{const n=e.object.getWorldPosition(new z).project(this.camera);return{name:e.element.textContent,x:t.left+(n.x+1)/2*t.width,y:t.top+(1-n.y)/2*t.height}})}dispose(){if(this.disposed)return;this.disposed=!0,this.renderer.setAnimationLoop(null),this.observer.disconnect(),this.controller.abort();const t=new Set,e=new Set,n=new Set;this.scene.traverse(i=>{if(i instanceof te||i instanceof iu){t.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){e.add(r);for(const o of Object.values(r))o instanceof $e&&n.add(o)}}}),t.forEach(i=>i.dispose()),e.forEach(i=>i.dispose()),n.forEach(i=>i.dispose()),this.environment.dispose(),this.renderer.dispose()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="180",pu=300,sh=1e3,$r=1001,rh=1002,a_=1006,l_=1008,c_=1009,h_=1015,u_=1023,d_="",oh=35044,qr=2e3,ah=2001;class Hl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function mr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function pe(s,t,e){return Math.max(t,Math.min(e,s))}function ks(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let h=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||h!==f||l!==d||c!==g){let m=1-a;const p=h*f+l*d+c*g+u*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*E);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const y=a*E;if(h=h*m+f*y,l=l*m+d*y,c=c*m+g*y,u=u*m+_*y,m===1-a){const R=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=R,l*=R,c*=R,u*=R}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],h=n[i+1],l=n[i+2],c=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+c*u+h*d-l*f,t[e+1]=h*g+c*f+l*u-a*d,t[e+2]=l*g+c*d+a*f-h*u,t[e+3]=c*g-a*u-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),f=h(n/2),d=h(i/2),g=h(r/2);switch(o){case"XYZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"YZX":this._x=f*c*u+l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u-f*d*g;break;case"XZY":this._x=f*c*u-l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-h)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(c-h)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(h+c)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=n*c+o*a+i*l-r*h,this._y=i*c+o*h+r*a-n*l,this._z=r*c+o*l+n*h-i*a,this._w=o*c-n*a-i*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class dt{constructor(t=0,e=0,n=0){dt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+h*l+o*u-a*c,this.y=n+h*c+a*l-r*u,this.z=i+h*u+r*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new dt,lh=new gr;class ws{constructor(t,e,n,i,r,o,a,h,l){ws.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,l)}set(t,e,n,i,r,o,a,h,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],c=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],S=i[4],y=i[7],R=i[2],w=i[5],C=i[8];return r[0]=o*_+a*E+h*R,r[3]=o*m+a*S+h*w,r[6]=o*p+a*y+h*C,r[1]=l*_+c*E+u*R,r[4]=l*m+c*S+u*w,r[7]=l*p+c*y+u*C,r[2]=f*_+d*E+g*R,r[5]=f*m+d*S+g*w,r[8]=f*p+d*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-n*r*c+n*a*h+i*r*l-i*o*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,f=a*h-c*r,d=l*r-o*h,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(c*e-i*h)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*h-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-i*l,i*h,-i*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new ws;function f_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ch(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}let Ji;class p_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=ch("canvas")),Ji.width=t.width,Ji.height=t.height;const i=Ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ch("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=da(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(da(e[n]/255)*255):e[n]=da(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m_=0;class g_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=mr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fa(i[o].image)):r.push(fa(i[o]))}else r=fa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?p_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let __=0;const pa=new dt;class Si extends Hl{constructor(t=Si.DEFAULT_IMAGE,e=Si.DEFAULT_MAPPING,n=$r,i=$r,r=a_,o=l_,a=u_,h=c_,l=Si.DEFAULT_ANISOTROPY,c=d_){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=mr(),this.name="",this.source=new g_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ws,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sh:t.x=t.x-Math.floor(t.x);break;case $r:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sh:t.y=t.y-Math.floor(t.y);break;case $r:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=pu;Si.DEFAULT_ANISOTROPY=1;class _r{constructor(t=new dt(1/0,1/0,1/0),e=new dt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Zr.subVectors(this.max,Hs),ji.subVectors(t.a,Hs),Ki.subVectors(t.b,Hs),Qi.subVectors(t.c,Hs),Zn.subVectors(Ki,ji),Jn.subVectors(Qi,Ki),fi.subVectors(ji,Qi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!ma(e,ji,Ki,Qi,Zr)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,ji,Ki,Qi,Zr))?!1:(Jr.crossVectors(Zn,Jn),e=[Jr.x,Jr.y,Jr.z],ma(e,ji,Ki,Qi,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new dt,new dt,new dt,new dt,new dt,new dt,new dt,new dt],fn=new dt,Yr=new _r,ji=new dt,Ki=new dt,Qi=new dt,Zn=new dt,Jn=new dt,fi=new dt,Hs=new dt,Zr=new dt,Jr=new dt,pi=new dt;function ma(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),h=t.dot(pi),l=e.dot(pi),c=n.dot(pi);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const x_=new _r,Gs=new dt,ga=new dt;class y_{constructor(t=new dt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):x_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(ga)),this.expandByPoint(Gs.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}class xn{constructor(t,e,n,i,r,o,a,h,l,c,u,f,d,g,_,m){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,l,c,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,h,l,c,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*c,d=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*h,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*c,d=h*u,g=l*c,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*c,d=h*u,g=l*c,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*c,d=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=g*l-d,e[8]=f*l+_,e[1]=h*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*h,d=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+_,e[5]=o*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*c,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v_,t,M_)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),jn.crossVectors(n,je),jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),jn.crossVectors(n,je)),jn.normalize(),jr.crossVectors(je,jn),i[0]=jn.x,i[4]=jr.x,i[8]=je.x,i[1]=jn.y,i[5]=jr.y,i[9]=je.y,i[2]=jn.z,i[6]=jr.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],c=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],S=n[7],y=n[11],R=n[15],w=i[0],C=i[4],I=i[8],b=i[12],M=i[1],P=i[5],B=i[9],G=i[13],$=i[2],N=i[6],V=i[10],Z=i[14],W=i[3],X=i[7],et=i[11],ct=i[15];return r[0]=o*w+a*M+h*$+l*W,r[4]=o*C+a*P+h*N+l*X,r[8]=o*I+a*B+h*V+l*et,r[12]=o*b+a*G+h*Z+l*ct,r[1]=c*w+u*M+f*$+d*W,r[5]=c*C+u*P+f*N+d*X,r[9]=c*I+u*B+f*V+d*et,r[13]=c*b+u*G+f*Z+d*ct,r[2]=g*w+_*M+m*$+p*W,r[6]=g*C+_*P+m*N+p*X,r[10]=g*I+_*B+m*V+p*et,r[14]=g*b+_*G+m*Z+p*ct,r[3]=E*w+S*M+y*$+R*W,r[7]=E*C+S*P+y*N+R*X,r[11]=E*I+S*B+y*V+R*et,r[15]=E*b+S*G+y*Z+R*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*h*u-i*l*u-r*a*f+n*l*f+i*a*d-n*h*d)+_*(+e*h*d-e*l*f+r*o*f-i*o*d+i*l*c-r*h*c)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*c-n*l*c)+p*(-i*a*c-e*h*u+e*a*f+i*o*u-n*o*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*f*l+_*h*d-a*m*d-u*h*p+a*f*p,S=g*f*l-c*m*l-g*h*d+o*m*d+c*h*p-o*f*p,y=c*_*l-g*u*l+g*a*d-o*_*d-c*a*p+o*u*p,R=g*u*h-c*_*h-g*a*f+o*_*f+c*a*m-o*u*m,w=e*E+n*S+i*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=E*C,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(a*m*r-_*h*r+_*i*l-n*m*l-a*i*p+n*h*p)*C,t[3]=(u*h*r-a*f*r-u*i*l+n*f*l+a*i*d-n*h*d)*C,t[4]=S*C,t[5]=(c*m*r-g*f*r+g*i*d-e*m*d-c*i*p+e*f*p)*C,t[6]=(g*h*r-o*m*r-g*i*l+e*m*l+o*i*p-e*h*p)*C,t[7]=(o*f*r-c*h*r+c*i*l-e*f*l-o*i*d+e*h*d)*C,t[8]=y*C,t[9]=(g*u*r-c*_*r-g*n*d+e*_*d+c*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(c*a*r-o*u*r-c*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=R*C,t[13]=(c*_*i-g*u*i+g*n*f-e*_*f-c*n*m+e*u*m)*C,t[14]=(g*a*i-o*_*i-g*n*h+e*_*h+o*n*m-e*a*m)*C,t[15]=(o*u*i-c*a*i+c*n*h-e*u*h-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,c=r*a;return this.set(l*o+n,l*a-i*h,l*h+i*a,0,l*a+i*h,c*a+n,c*h-i*o,0,l*h-i*a,c*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,c=o+o,u=a+a,f=r*l,d=r*c,g=r*u,_=o*c,m=o*u,p=a*u,E=h*l,S=h*c,y=h*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+y)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+p))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+S)*C,i[9]=(m-E)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ts.set(i[0],i[1],i[2]).length();const o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const l=1/r,c=1/o,u=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=qr,h=!1){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(h)g=r/(o-r),_=o*r/(o-r);else if(a===qr)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ah)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=qr,h=!1){const l=this.elements,c=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(h)g=1/(o-r),_=o/(o-r);else if(a===qr)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ah)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new dt,pn=new xn,v_=new dt(0,0,0),M_=new dt(1,1,1),jn=new dt,jr=new dt,je=new dt,hh=new xn,uh=new gr;class To{constructor(t=0,e=0,n=0,i=To.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],h=i[1],l=i[5],c=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}To.DEFAULT_ORDER="XYZ";class S_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let b_=0;const dh=new dt,es=new gr,Fn=new xn,Kr=new dt,Ws=new dt,E_=new dt,A_=new gr,fh=new dt(1,0,0),ph=new dt(0,1,0),mh=new dt(0,0,1),gh={type:"added"},w_={type:"removed"},ns={type:"childadded",child:null},_a={type:"childremoved",child:null};class ii extends Hl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new dt,e=new To,n=new gr,i=new dt(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xn},normalMatrix:{value:new ws}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(ph,t)}rotateZ(t){return this.rotateOnAxis(mh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(ph,t)}translateZ(t){return this.translateOnAxis(mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ws,Kr,this.up):Fn.lookAt(Kr,Ws,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Fn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gh),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(w_),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,E_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,A_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ii.DEFAULT_UP=new dt(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ye=new dt,Qr=new kt;let T_=0;class cs{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=h_,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}}class R_ extends cs{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class C_ extends cs{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class gl extends cs{constructor(t,e,n){super(new Float32Array(t),e,n)}}let P_=0;const an=new xn,xa=new ii,is=new dt,Ke=new _r,Xs=new _r,Ae=new dt;class Gl extends Hl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(f_(t)?C_:R_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ws().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gl(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new dt(-1/0,-1/0,-1/0),new dt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new y_);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new dt,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ke.min,Xs.min),Ke.expandByPoint(Ae),Ae.addVectors(Ke.max,Xs.max),Ke.expandByPoint(Ae)):(Ke.expandByPoint(Xs.min),Ke.expandByPoint(Xs.max))}Ke.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Ae.fromBufferAttribute(a,l),h&&(is.fromBufferAttribute(t,l),Ae.add(is)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cs(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let I=0;I<n.count;I++)a[I]=new dt,h[I]=new dt;const l=new dt,c=new dt,u=new dt,f=new kt,d=new kt,g=new kt,_=new dt,m=new dt;function p(I,b,M){l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),c.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(P),a[I].add(_),a[b].add(_),a[M].add(_),h[I].add(m),h[b].add(m),h[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,b=E.length;I<b;++I){const M=E[I],P=M.start,B=M.count;for(let G=P,$=P+B;G<$;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new dt,y=new dt,R=new dt,w=new dt;function C(I){R.fromBufferAttribute(i,I),w.copy(R);const b=a[I];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(w,b);const P=y.dot(h[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,b=E.length;I<b;++I){const M=E[I],P=M.start,B=M.count;for(let G=P,$=P+B;G<$;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cs(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new dt,r=new dt,o=new dt,a=new dt,h=new dt,l=new dt,c=new dt,u=new dt;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(c),h.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,h){const l=a.array,c=a.itemSize,u=a.normalized,f=new l.constructor(h.length*c);let d=0,g=0;for(let _=0,m=h.length;_<m;_++){a.isInterleavedBufferAttribute?d=h[_]*a.data.stride+a.offset:d=h[_]*c;for(let p=0;p<c;p++)f[g++]=l[d++]}return new cs(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gl,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],l=t(h,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const f=l[c],d=t(f,n);h.push(d)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const i={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];c.push(d.toJSON(t.data))}c.length>0&&(i[h]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,h=r-1,l;for(;a<=h;)if(i=Math.floor(a+(h-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)h=i-1;else{h=i;break}if(i=h,n[i]===o)return i/(r-1);const c=n[i],f=n[i+1]-c,d=(o-c)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),h=e||(o.isVector2?new kt:new dt);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new dt,i=[],r=[],o=[],a=new dt,h=new xn;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new dt)}r[0]=new dt,o[0]=new dt;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(h.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(pe(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(h.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wl extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e=new kt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,d=l-this.aY;h=f*c-d*u+this.aX,l=f*u+d*c+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class L_ extends Wl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let s=0,t=0,e=0,n=0;function i(r,o,a,h){s=r,t=a,e=-3*r+3*o-2*a-h,n=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,l){i(o,a,l*(a-r),l*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,l,c,u){let f=(o-r)/l-(a-r)/(l+c)+(a-o)/c,d=(a-o)/c-(h-o)/(c+u)+(h-a)/u;f*=c,d*=c,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const to=new dt,ya=new Xl,va=new Xl,Ma=new Xl;class D_ extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new dt){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let l,c;this.closed||a>0?l=i[(a-1)%r]:(to.subVectors(i[0],i[1]).add(i[0]),l=to);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?c=i[(a+2)%r]:(to.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=to),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ya.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,g,_,m),va.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,g,_,m),Ma.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),va.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),Ma.initCatmullRom(l.z,u.z,f.z,c.z,this.tension));return n.set(ya.calc(h),va.calc(h),Ma.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _h(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,h=s*a;return(2*e-2*n+r+o)*h+(-3*e+3*n-2*r-o)*a+r*s+e}function I_(s,t){const e=1-s;return e*e*t}function U_(s,t){return 2*(1-s)*s*t}function N_(s,t){return s*s*t}function Qs(s,t,e,n){return I_(s,t)+U_(s,e)+N_(s,n)}function F_(s,t){const e=1-s;return e*e*e*t}function O_(s,t){const e=1-s;return 3*e*e*s*t}function z_(s,t){return 3*(1-s)*s*s*t}function B_(s,t){return s*s*s*t}function tr(s,t,e,n,i){return F_(s,t)+O_(s,e)+z_(s,n)+B_(s,i)}class mu extends Tn{constructor(t=new kt,e=new kt,n=new kt,i=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new kt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,i.x,r.x,o.x,a.x),tr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V_ extends Tn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,i.x,r.x,o.x,a.x),tr(t,i.y,r.y,o.y,a.y),tr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gu extends Tn{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class k_ extends Tn{constructor(t=new dt,e=new dt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Tn{constructor(t=new kt,e=new kt,n=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new kt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,i.x,r.x,o.x),Qs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H_ extends Tn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,i.x,r.x,o.x),Qs(t,i.y,r.y,o.y),Qs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,h=i[o===0?o:o-1],l=i[o],c=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(_h(a,h.x,l.x,c.x,u.x),_h(a,h.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new kt().fromArray(i))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:L_,CatmullRomCurve3:D_,CubicBezierCurve:mu,CubicBezierCurve3:V_,EllipseCurve:Wl,LineCurve:gu,LineCurve3:k_,QuadraticBezierCurve:_u,QuadraticBezierCurve3:H_,SplineCurve:xu});class G_ extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],h=a.getLength(),l=h===0?0:1-o/h;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let l=0;l<h.length;l++){const c=h[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new _l[i.type]().fromJSON(i))}return this}}class xh extends G_{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gu(this.currentPoint.clone(),new kt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new _u(this.currentPoint.clone(),new kt(t,e),new kt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new mu(this.currentPoint.clone(),new kt(t,e),new kt(n,i),new kt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,o,a,h),this}absellipse(t,e,n,i,r,o,a,h){const l=new Wl(t,e,n,i,r,o,a,h);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yu extends xh{constructor(t){super(t),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new xh().fromJSON(i))}return this}}function W_(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=vu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,h,l;if(n&&(r=Z_(s,t,r,e)),s.length>80*e){a=1/0,h=1/0;let c=-1/0,u=-1/0;for(let f=e;f<i;f+=e){const d=s[f],g=s[f+1];d<a&&(a=d),g<h&&(h=g),d>c&&(c=d),g>u&&(u=g)}l=Math.max(c-a,u-h),l=l!==0?32767/l:0}return hr(r,o,e,a,h,l,0),o}function vu(s,t,e,n,i){let r;if(i===ox(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=yh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yh(o/n|0,s[o],s[o+1],r);return r&&xs(r,r.next)&&(dr(r),r=r.next),r}function wi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xs(e,e.next)||me(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&tx(s,n,i,r);let a=s;for(;s.prev!==s.next;){const h=s.prev,l=s.next;if(r?$_(s,n,i,r):X_(s)){t.push(h.i,s.i,l.i),dr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=q_(wi(s),t),hr(s,t,e,n,i,r,2)):o===2&&Y_(s,t,e,n,i,r):hr(wi(s),t,e,n,i,r,1);break}}}function X_(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,h=e.y,l=n.y,c=Math.min(i,r,o),u=Math.min(a,h,l),f=Math.max(i,r,o),d=Math.max(a,h,l);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=u&&g.y<=d&&Js(i,a,r,h,o,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(me(i,r,o)>=0)return!1;const a=i.x,h=r.x,l=o.x,c=i.y,u=r.y,f=o.y,d=Math.min(a,h,l),g=Math.min(c,u,f),_=Math.max(a,h,l),m=Math.max(c,u,f),p=xl(d,g,t,e,n),E=xl(_,m,t,e,n);let S=s.prevZ,y=s.nextZ;for(;S&&S.z>=p&&y&&y.z<=E;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Js(a,c,h,u,l,f,S.x,S.y)&&me(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Js(a,c,h,u,l,f,y.x,y.y)&&me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Js(a,c,h,u,l,f,S.x,S.y)&&me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=E;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Js(a,c,h,u,l,f,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function q_(s,t){let e=s;do{const n=e.prev,i=e.next.next;!xs(n,i)&&Su(n,e,e.next,i)&&ur(n,i)&&ur(i,n)&&(t.push(n.i,e.i,i.i),dr(e),dr(e.next),e=s=i),e=e.next}while(e!==s);return wi(e)}function Y_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ix(o,a)){let h=bu(o,a);o=wi(o,o.next),h=wi(h,h.next),hr(o,t,e,n,i,r,0),hr(h,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Z_(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,h=r<o-1?t[r+1]*n:s.length,l=vu(s,a,h,n,!1);l===l.next&&(l.steiner=!0),i.push(nx(l))}i.sort(J_);for(let r=0;r<i.length;r++)e=j_(i[r],e);return e}function J_(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function j_(s,t){const e=K_(s,t);if(!e)return t;const n=bu(e,s);return wi(n,n.next),wi(e,e.next)}function K_(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(xs(s,e))return e;do{if(xs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,h=o.x,l=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=h&&n!==e.x&&Mu(i<l?n:r,i,h,l,i<l?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);ur(e,s)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&Q_(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function Q_(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function tx(s,t,e,n){let i=s;do i.z===0&&(i.z=xl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ex(i)}function ex(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let h=e;for(;a>0||h>0&&o;)a!==0&&(h===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,h--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function xl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function nx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Mu(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Js(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Mu(s,t,e,n,i,r,o,a)}function ix(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!sx(s,t)&&(ur(s,t)&&ur(t,s)&&rx(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||xs(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xs(s,t){return s.x===t.x&&s.y===t.y}function Su(s,t,e,n){const i=no(me(s,t,e)),r=no(me(s,t,n)),o=no(me(e,n,s)),a=no(me(e,n,t));return!!(i!==r&&o!==a||i===0&&eo(s,e,t)||r===0&&eo(s,n,t)||o===0&&eo(e,s,n)||a===0&&eo(e,t,n))}function eo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function no(s){return s>0?1:s<0?-1:0}function sx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ur(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function rx(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function bu(s,t){const e=yl(s.i,s.x,s.y),n=yl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yh(s,t,e,n){const i=yl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function dr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function yl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ox(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ax{static triangulate(t,e,n=2){return W_(t,e,n)}}class os{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];vh(t),Mh(n,t);let o=t.length;e.forEach(vh);for(let h=0;h<e.length;h++)i.push(o),o+=e[h].length,Mh(n,e[h]);const a=ax.triangulate(n,i);for(let h=0;h<a.length;h+=3)r.push(a.slice(h,h+3));return r}}function vh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Mh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class $l extends Gl{constructor(t=new yu([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,h=t.length;a<h;a++){const l=t[a];o(l)}this.setAttribute("position",new gl(i,3)),this.setAttribute("uv",new gl(r,2)),this.computeVertexNormals();function o(a){const h=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:lx;let S,y=!1,R,w,C,I;p&&(S=p.getSpacedPoints(c),y=!0,f=!1,R=p.computeFrenetFrames(c,!1),w=new dt,C=new dt,I=new dt),f||(m=0,d=0,g=0,_=0);const b=a.extractPoints(l);let M=b.shape;const P=b.holes;if(!os.isClockWise(M)){M=M.reverse();for(let rt=0,tt=P.length;rt<tt;rt++){const it=P[rt];os.isClockWise(it)&&(P[rt]=it.reverse())}}function G(rt){const it=10000000000000001e-36;let nt=rt[0];for(let gt=1;gt<=rt.length;gt++){const ht=gt%rt.length,_t=rt[ht],Gt=_t.x-nt.x,Ht=_t.y-nt.y,T=Gt*Gt+Ht*Ht,v=Math.max(Math.abs(_t.x),Math.abs(_t.y),Math.abs(nt.x),Math.abs(nt.y)),H=it*v*v;if(T<=H){rt.splice(ht,1),gt--;continue}nt=_t}}G(M),P.forEach(G);const $=P.length,N=M;for(let rt=0;rt<$;rt++){const tt=P[rt];M=M.concat(tt)}function V(rt,tt,it){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(tt,it)}const Z=M.length;function W(rt,tt,it){let nt,gt,ht;const _t=rt.x-tt.x,Gt=rt.y-tt.y,Ht=it.x-rt.x,T=it.y-rt.y,v=_t*_t+Gt*Gt,H=_t*T-Gt*Ht;if(Math.abs(H)>Number.EPSILON){const q=Math.sqrt(v),at=Math.sqrt(Ht*Ht+T*T),Y=tt.x-Gt/q,Lt=tt.y+_t/q,mt=it.x-T/at,Pt=it.y+Ht/at,At=((mt-Y)*T-(Pt-Lt)*Ht)/(_t*T-Gt*Ht);nt=Y+_t*At-rt.x,gt=Lt+Gt*At-rt.y;const ut=nt*nt+gt*gt;if(ut<=2)return new kt(nt,gt);ht=Math.sqrt(ut/2)}else{let q=!1;_t>Number.EPSILON?Ht>Number.EPSILON&&(q=!0):_t<-Number.EPSILON?Ht<-Number.EPSILON&&(q=!0):Math.sign(Gt)===Math.sign(T)&&(q=!0),q?(nt=-Gt,gt=_t,ht=Math.sqrt(v)):(nt=_t,gt=Gt,ht=Math.sqrt(v/2))}return new kt(nt/ht,gt/ht)}const X=[];for(let rt=0,tt=N.length,it=tt-1,nt=rt+1;rt<tt;rt++,it++,nt++)it===tt&&(it=0),nt===tt&&(nt=0),X[rt]=W(N[rt],N[it],N[nt]);const et=[];let ct,Ut=X.concat();for(let rt=0,tt=$;rt<tt;rt++){const it=P[rt];ct=[];for(let nt=0,gt=it.length,ht=gt-1,_t=nt+1;nt<gt;nt++,ht++,_t++)ht===gt&&(ht=0),_t===gt&&(_t=0),ct[nt]=W(it[nt],it[ht],it[_t]);et.push(ct),Ut=Ut.concat(ct)}let Vt;if(m===0)Vt=os.triangulateShape(N,P);else{const rt=[],tt=[];for(let it=0;it<m;it++){const nt=it/m,gt=d*Math.cos(nt*Math.PI/2),ht=g*Math.sin(nt*Math.PI/2)+_;for(let _t=0,Gt=N.length;_t<Gt;_t++){const Ht=V(N[_t],X[_t],ht);Ct(Ht.x,Ht.y,-gt),nt===0&&rt.push(Ht)}for(let _t=0,Gt=$;_t<Gt;_t++){const Ht=P[_t];ct=et[_t];const T=[];for(let v=0,H=Ht.length;v<H;v++){const q=V(Ht[v],ct[v],ht);Ct(q.x,q.y,-gt),nt===0&&T.push(q)}nt===0&&tt.push(T)}}Vt=os.triangulateShape(rt,tt)}const Nt=Vt.length,Yt=g+_;for(let rt=0;rt<Z;rt++){const tt=f?V(M[rt],Ut[rt],Yt):M[rt];y?(C.copy(R.normals[0]).multiplyScalar(tt.x),w.copy(R.binormals[0]).multiplyScalar(tt.y),I.copy(S[0]).add(C).add(w),Ct(I.x,I.y,I.z)):Ct(tt.x,tt.y,0)}for(let rt=1;rt<=c;rt++)for(let tt=0;tt<Z;tt++){const it=f?V(M[tt],Ut[tt],Yt):M[tt];y?(C.copy(R.normals[rt]).multiplyScalar(it.x),w.copy(R.binormals[rt]).multiplyScalar(it.y),I.copy(S[rt]).add(C).add(w),Ct(I.x,I.y,I.z)):Ct(it.x,it.y,u/c*rt)}for(let rt=m-1;rt>=0;rt--){const tt=rt/m,it=d*Math.cos(tt*Math.PI/2),nt=g*Math.sin(tt*Math.PI/2)+_;for(let gt=0,ht=N.length;gt<ht;gt++){const _t=V(N[gt],X[gt],nt);Ct(_t.x,_t.y,u+it)}for(let gt=0,ht=P.length;gt<ht;gt++){const _t=P[gt];ct=et[gt];for(let Gt=0,Ht=_t.length;Gt<Ht;Gt++){const T=V(_t[Gt],ct[Gt],nt);y?Ct(T.x,T.y+S[c-1].y,S[c-1].x+it):Ct(T.x,T.y,u+it)}}}K(),j();function K(){const rt=i.length/3;if(f){let tt=0,it=Z*tt;for(let nt=0;nt<Nt;nt++){const gt=Vt[nt];Et(gt[2]+it,gt[1]+it,gt[0]+it)}tt=c+m*2,it=Z*tt;for(let nt=0;nt<Nt;nt++){const gt=Vt[nt];Et(gt[0]+it,gt[1]+it,gt[2]+it)}}else{for(let tt=0;tt<Nt;tt++){const it=Vt[tt];Et(it[2],it[1],it[0])}for(let tt=0;tt<Nt;tt++){const it=Vt[tt];Et(it[0]+Z*c,it[1]+Z*c,it[2]+Z*c)}}n.addGroup(rt,i.length/3-rt,0)}function j(){const rt=i.length/3;let tt=0;vt(N,tt),tt+=N.length;for(let it=0,nt=P.length;it<nt;it++){const gt=P[it];vt(gt,tt),tt+=gt.length}n.addGroup(rt,i.length/3-rt,1)}function vt(rt,tt){let it=rt.length;for(;--it>=0;){const nt=it;let gt=it-1;gt<0&&(gt=rt.length-1);for(let ht=0,_t=c+m*2;ht<_t;ht++){const Gt=Z*ht,Ht=Z*(ht+1),T=tt+nt+Gt,v=tt+gt+Gt,H=tt+gt+Ht,q=tt+nt+Ht;qt(T,v,H,q)}}}function Ct(rt,tt,it){h.push(rt),h.push(tt),h.push(it)}function Et(rt,tt,it){re(rt),re(tt),re(it);const nt=i.length/3,gt=E.generateTopUV(n,i,nt-3,nt-2,nt-1);L(gt[0]),L(gt[1]),L(gt[2])}function qt(rt,tt,it,nt){re(rt),re(tt),re(nt),re(tt),re(it),re(nt);const gt=i.length/3,ht=E.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);L(ht[0]),L(ht[1]),L(ht[3]),L(ht[1]),L(ht[2]),L(ht[3])}function re(rt){i.push(h[rt*3+0]),i.push(h[rt*3+1]),i.push(h[rt*3+2])}function L(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new _l[i.type]().fromJSON(i)),new $l(n,t.options)}}const lx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],h=t[n*3+1],l=t[i*3],c=t[i*3+1];return[new kt(r,o),new kt(a,h),new kt(l,c)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],h=t[e*3+2],l=t[n*3],c=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-l)?[new kt(o,1-h),new kt(l,1-u),new kt(f,1-g),new kt(_,1-p)]:[new kt(a,1-h),new kt(c,1-u),new kt(d,1-g),new kt(m,1-p)]}};function cx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);function mo(s){return{engineers:Array.from({length:s.engineers},()=>null),switches:Object.fromEntries(s.displays.map(t=>[t.id,"unset"]))}}function hx(s,t){return s.engineers.filter(e=>e===t).length}function vl(s,t,e,n=s.runHours){const i=hx(t,e.id),r=i*s.runHours,o=e.state==="blocked",a=o?0:e.fixHours,h=!o&&a>0,l=h&&r>=a?Math.ceil(a/i):null,c=l!==null&&n>=l,u=e.state==="running",f=u||c,d=c||u&&!h?e.fields.slice():u?e.fields.filter(m=>!e.missing.includes(m)):[],g=l!==null?r-a:h?0:r,_=h&&l===null?a-r:0;return{id:e.id,engineers:i,hours:r,needed:a,blocked:o,fixed:c,fixHour:l,idle:g,short:_,runningBefore:u,running:f,sending:d}}function ql(s,t,e=s.runHours){const n=s.cars.map(f=>vl(s,t,f,e)),i=f=>n.find(d=>d.id===f.car)?.sending.includes(f.field)??!1,r=s.displays.map(f=>{const d=f.needs.filter(g=>!i(g));return{id:f.id,lit:d.length===0,missing:d}}),o=f=>t.switches[f]??"unset",a=r.filter(f=>f.lit&&o(f.id)==="yes").map(f=>f.id),h=r.filter(f=>!f.lit&&o(f.id)==="yes").map(f=>f.id),l=r.filter(f=>f.lit&&o(f.id)==="no").map(f=>f.id),c=r.filter(f=>f.lit).length,u=c>=s.win.displaysLit&&h.length<=s.win.promisedNotShown&&l.length<=s.win.shownNotPromised;return{cars:n,displays:r,running:n.filter(f=>f.running).length,lit:c,allSet:s.displays.every(f=>o(f.id)!=="unset"),kept:a,promisedNotShown:h,shownNotPromised:l,won:u}}const Vn={car:2.4,display:.7,row:.4};function hs(s,t){const e=s.cars.filter(a=>t.cars.find(h=>h.id===a.id).running),n=Object.fromEntries(e.map((a,h)=>[a.id,h*Vn.car])),i=e.length*Vn.car+.5,r=Object.fromEntries(s.displays.map((a,h)=>[a.id,i+h*Vn.display])),o=i+s.displays.length*Vn.display+.4;return{departs:n,resolves:r,board:o,done:o+5*Vn.row+.8}}function ux(s,t,e){if(!t[e])throw new Error(`[${s}] default pack "${e}" is not registered`);return function(i){const r=i||e,o=t[r];return o?{theme:o,requestedPack:r,activePack:r}:(console.warn(`[${s}] pack "${r}" not available, using "${e}"`),{theme:t[e],requestedPack:r,activePack:e})}}const dx={asphalt:4869974,garage:13617853,team:[2842255,12106946,3963466,8007482,13214002,6048378],displayAmber:16757575,brokenPromiseRed:11740702},fx=ux("pit-lane-theme",{"night-pit-garage":dx},"night-pit-garage");function $s(s){return parseInt(s.replace("#",""),16)}function So(s){return`#${s.toString(16).padStart(6,"0")}`}function Eu(s){const t=s.theme??{},{theme:e}=fx(t.pack),n=t.colors??{};return{asphalt:n.asphalt?$s(n.asphalt):e.asphalt,garage:n.garage?$s(n.garage):e.garage,team:n.team?e.team.map(()=>$s(n.team)):e.team,displayAmber:n["display-amber"]?$s(n["display-amber"]):e.displayAmber,brokenPromiseRed:n["broken-promise-red"]?$s(n["broken-promise-red"]):e.brokenPromiseRed}}const Sh=new URL(""+new URL("garage-floor-yNqrHmc8.png",import.meta.url).href,import.meta.url).href,px=new URL(""+new URL("pit-wall-CJzn_PmX.png",import.meta.url).href,import.meta.url).href,mx=new URL(""+new URL("car-paint-B8Ow-8Qb.png",import.meta.url).href,import.meta.url).href,gx=new URL(""+new URL("tyre-rubber-BzMQQal0.png",import.meta.url).href,import.meta.url).href,_x=new URL(""+new URL("tool-metal-Izx3-vBT.png",import.meta.url).href,import.meta.url).href;function us(s,t){const e=new gf().load(s);return e.colorSpace=Ge,e.wrapS=e.wrapT=_o,e.repeat.set(t,t),e.anisotropy=4,e}const xx=us(mx,1.6),yx=us(gx,1.4),Ml=us(_x,1.5),bh=s=>new Me({color:s,map:xx,metalness:.45,roughness:.22}),ke=4.2,mi=-2.6,On=3.2,He=5.6,ln=1.2,Eh=5.2,vx=s=>`Bay ${s.bay} · ${s.name}`;function qs(s,t,e,n,i=.05){const r=new yu;r.moveTo(t[0][0],t[0][1]);for(const[h,l]of t.slice(1))r.lineTo(h,l);for(const[h,l]of t.slice().reverse())r.lineTo(-h,l);r.closePath();const o=new $l(r,{depth:e-i*2,bevelEnabled:!0,bevelSize:i,bevelThickness:i,bevelSegments:2,curveSegments:6});o.rotateX(-Math.PI/2),o.translate(0,i,0),o.computeVertexNormals();const a=new te(o,n);return a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function io(s,t,e,n,i,r,o,a=22){const h=new bs(t,e,n,a,1,!1);h.rotateX(Math.PI/2),h.scale(r[0],r[1],1);const l=new te(h,o);return l.position.set(...i),l.castShadow=!0,l.receiveShadow=!0,s.add(l),l}function Sa(s,t,e,n,i,r,o=.46){const a=new bs(t,t,e,20,1,!0,-o/2,o);a.rotateX(Math.PI/2),a.scale(i[0],i[1],1);const h=new te(a,r);return h.position.set(...n),s.add(h),h}const cn=.37,ba=.34;function so(s,t,e,n,i=1){const r=new we;r.position.set(...t),s.add(r),r.scale.x=i;const o=ba/2,a=cn-.022,h=[[.24,-o],[.32,-o],[cn-.02,-.12],[cn,-.08],[a,-.055],[cn,-.03],[a,-.005],[cn,.02],[a,.045],[cn,.07],[cn-.02,.12],[.32,o],[.24,o]].map(([f,d])=>new jt(f,d)),l=new te(new Ao(h,28),e);l.geometry.rotateZ(Math.PI/2),l.castShadow=!0,l.receiveShadow=!0,r.add(l);const c=We(r,.245,ba-.04,[0,0,0],n,24);c.rotation.z=Math.PI/2;const u=We(r,.06,ba+.04,[0,0,0],_e(13214002,.9,.3),8);return u.rotation.z=Math.PI/2,r}function Mx(s,t,e){const n=new we;s.add(n);const i=_e(856083,.25,.38),r=_e(1777445,.5,.35),o=new Me({color:1184791,map:yx,metalness:.04,roughness:.92}),a=new Me({color:12173254,map:Ml,metalness:.9,roughness:.26});qs(n,[[.62,-1.95],[.68,-.6],[.68,1.4],[.5,2.15]],.07,i,.03).position.y=.08,io(n,.26,.34,1.9,[0,.33,-.75],[1.5,.62],t),io(n,.34,.18,1.5,[0,.33,1.05],[1.35,.6],t);const h=[[.02,0],[.07,.05],[.09,.22],[.13,.6],[.17,1.1],[.2,1.5],[.22,1.7]].map(([d,g])=>new jt(d,g)),l=new te(new Ao(h,20),t);l.geometry.rotateX(Math.PI/2),l.geometry.scale(1.05,.72,1),l.position.set(0,.38,-2.6),l.rotation.x=-.05,l.castShadow=!0,n.add(l),qs(n,[[1,-.34],[1,.3]],.05,t,.02).position.set(0,.14,-2.72),qs(n,[[.98,-.2],[.98,.16]],.05,i,.02).position.set(0,.26,-2.86);for(const d of[-1,1])Bt(n,[.04,.34,.78],[d*1,.26,-2.76],i).rotation.z=d*.05,Bt(n,[.05,.07,.78],[d*1,.42,-2.76],e).rotation.z=d*.05,Bt(n,[.44,.03,.22],[d*.56,.31,-2.9],i);io(n,.23,.23,.9,[0,.5,-.8],[1.1,.42],i,18),Bt(n,[.56,.2,.24],[0,.56,-.25],i);const c=new te(new zl(.4,.032,8,24,Math.PI),r);c.rotation.set(Math.PI/2,0,0),c.scale.set(1.05,.7,1),c.position.set(0,.56,-.8),c.castShadow=!0,n.add(c),Bt(n,[.05,.16,.46],[0,.6,-1.22],r);const u=new te(new bs(.13,.2,1.5,18),t);u.geometry.rotateX(Math.PI/2),u.geometry.scale(1,.95,1),u.position.set(0,.62,.55),u.castShadow=!0,n.add(u),We(n,.1,.14,[0,.68,-.22],i,16).rotation.x=Math.PI/2;for(const d of[-1,1]){io(n,.26,.1,2,[d*.62,.26,.55],[1.12,.52],t);const g=We(n,.18,.07,[d*.62,.26,-.42],i,16);g.rotation.x=Math.PI/2,g.scale.set(1.12,1,.52),Sa(n,.27,1.9,[d*.62,.26,.55],[1.12,.52],e,.4).rotation.z=d*.6}for(const d of[-1,1])Bt(n,[.06,.52,.13],[d*.22,.82,2.05],i);qs(n,[[.66,-.24],[.66,.24]],.05,t,.02).position.set(0,1.06,2.05),qs(n,[[.66,-.15],[.66,.15]],.05,i,.02).position.set(0,.94,2.18);for(const d of[-1,1])Bt(n,[.04,.5,.64],[d*.66,.94,2.08],e);for(const d of[-1,1])Bt(n,[.3,.22,.46],[d*.34,.18,2.1],i);We(n,.09,.24,[0,.3,2.26],_e(2830134,.8,.35),12).rotation.x=Math.PI/2,Sa(n,.225,1.7,[0,.38,-2.6],[1.05,.72],e,.32).rotation.x=-.05,Sa(n,.205,1.5,[0,.62,.55],[1,.95],e,.32);const f=[so(n,[-.86,cn,-1.72],o,a,.92),so(n,[.86,cn,-1.72],o,a,.92),so(n,[-.9,cn,1.55],o,a,1),so(n,[.9,cn,1.55],o,a,1)];for(const d of[-1,1])for(const[g,_]of[[-1.72,.5],[1.55,.46]]){const m=Bt(n,[_,.06,.3],[d*(.86-_/2),cn-.06,g],i);m.castShadow=!1}return n.traverse(d=>{!(d instanceof te)||!d.castShadow||(d.geometry.computeBoundingSphere(),(d.geometry.boundingSphere?.radius??0)<.5&&(d.castShadow=!1))}),{group:n,wheels:f}}function Sx(s,t){const e=new we;s.add(e);const n=_e(1909288,.3,.45),i=_e(15921384,0,.7);for(const o of[-1,1])Bt(e,[.2,.78,.24],[o*.14,.39,0],n),Bt(e,[.24,.12,.34],[o*.14,.06,.04],_e(1053205,.2,.8)),Bt(e,[.15,.52,.18],[o*.34,1.14,.02],t);Bt(e,[.5,.58,.3],[0,1.12,0],t),Bt(e,[.52,.09,.32],[0,1.16,0],i),Bt(e,[.7,.17,.28],[0,1.42,0],t),We(e,.09,.12,[0,1.55,0],n,10);const r=new te(new cr(.23,20,16),t);return r.position.set(0,1.74,0),r.castShadow=!0,e.add(r),Bt(e,[.34,.13,.18],[0,1.72,.16],_e(921878,.5,.2)),e}class gi{constructor(t,e,n,i,r,o){this.pixels=r,this.background=o,this.canvas.width=r,this.canvas.height=Math.round(r*n/e),this.texture=new cf(this.canvas),this.texture.colorSpace=Ge,this.mesh=new te(new Es(e,n),new lr({map:this.texture,toneMapped:!1,transparent:!0})),this.mesh.position.set(...i),t.add(this.mesh),this.paint([])}canvas=document.createElement("canvas");texture;mesh;key="";paint(t,e=this.background){const n=JSON.stringify([t,e]);if(n===this.key)return;this.key=n;const i=this.canvas.getContext("2d"),{width:r,height:o}=this.canvas;i.clearRect(0,0,r,o),i.fillStyle=e,i.fillRect(0,0,r,o);const a=d=>`${d.weight??500} ${d.size}px Display, "Arial Narrow", Arial, sans-serif`,h=r-24,l=t.flatMap(d=>{i.font=a(d);const g=[];for(const _ of d.text.split(" ")){const m=g.length?`${g.at(-1)} ${_}`:_;g.length&&i.measureText(m).width<=h?g[g.length-1]=m:g.push(_)}return g.map(_=>({...d,text:_}))}),c=l.reduce((d,g)=>d+g.size*1.2,0),u=Math.min(1,(o-10)/c);let f=(o-c*u)/2;i.textAlign="center",i.textBaseline="top";for(const d of l){const g=d.size*u;i.font=a({...d,size:g}),i.fillStyle=d.color;let _=d.text;for(;i.measureText(_).width>h&&_.length>4;)_=`${_.slice(0,-2).trimEnd()}…`;i.fillText(_,r/2,f),f+=g*1.2}this.texture.needsUpdate=!0}}class bx{constructor(t,e){this.callbacks=e,this.stage=new o_(t,461328,[0,7.8,19],[0,2.4,-1.2],31),this.stage.lighting(.62,.62,.46,.48),this.stage.scene.fog=new Eo(461328,36,70);const n=this.stage.scene.getObjectByName("key");n.position.set(6,14,12),n.color.set(12571647),n.shadow.mapSize.set(1024,1024),this.stage.scene.add(this.cables);const i=this.stage.host,r=c=>{const u=this.engineers.findIndex(g=>g.label===c.target);if(u>=0)return u;if(c.target!==this.stage.renderer.domElement)return-1;const f=this.stage.renderer.domElement.getBoundingClientRect();this.stage.pointer.set((c.clientX-f.left)/f.width*2-1,-(c.clientY-f.top)/f.height*2+1),this.stage.ray.setFromCamera(this.stage.pointer,this.stage.camera);const d=this.stage.ray.intersectObjects(this.engineers.map(g=>g.group),!0)[0];return d?this.engineers.findIndex(g=>{let _=d.object;for(;_&&_!==g.group;)_=_.parent;return _===g.group}):-1},o=this.stage.project.bind(this.stage);this.stage.project=()=>{o(),this.layoutLabels()};const a=new Kn(new z(0,1,0),0),h=c=>{const u=this.stage.renderer.domElement.getBoundingClientRect();this.stage.pointer.set((c.clientX-u.left)/u.width*2-1,-(c.clientY-u.top)/u.height*2+1),this.stage.ray.setFromCamera(this.stage.pointer,this.stage.camera);const f=this.stage.ray.intersectObjects(this.bays.flatMap(m=>[m.group,m.floor]),!0)[0],d=f?this.bays.find(m=>{let p=f.object;for(;p&&p!==m.group&&p!==m.floor;)p=p.parent;return!!p}):void 0,g=f?f.point:this.stage.ray.ray.intersectPlane(a,new z);if(!g)return null;if(d)return{point:g,bay:d.car.id,bench:!1};if(g.z>On)return{point:g,bay:null,bench:!0};const _=this.bays.find(m=>Math.abs(m.x-g.x)<=ke/2);return{point:g,bay:_?.car.id??null,bench:!1}};i.addEventListener("pointerdown",c=>{if(!this.unlocked)return;const u=r(c);u<0||(this.dragging={index:u,moved:!1,bay:null,bench:!1},c.target.setPointerCapture(c.pointerId))}),i.addEventListener("pointermove",c=>{if(!this.dragging)return;const u=h(c);if(!u)return;const f=this.engineers[this.dragging.index];f.drag=new z(u.point.x,0,Math.max(-1.5,Math.min(6,u.point.z))),this.dragging.moved=!0,this.dragging.bench=u.bench,u.bay!==this.dragging.bay&&(this.dragging.bay=u.bay,this.callbacks.hover(this.dragging.index,u.bay))});const l=()=>{if(!this.dragging)return;const{index:c,moved:u,bay:f,bench:d}=this.dragging;this.engineers[c].drag=null,this.dragging=null,this.callbacks.hover(-1,null),u&&(this.stage.skipClick=!0,(f||d)&&(this.callbacks.place(c,f),this.onDrop()))};i.addEventListener("pointerup",l),i.addEventListener("pointercancel",l),i.addEventListener("pointerleave",()=>{this.stage.hover=null}),window.addEventListener("keydown",c=>{document.activeElement&&document.activeElement!==document.body||(c.key==="ArrowLeft"?this.pan-=2:c.key==="ArrowRight"&&(this.pan+=2))})}stage;pack=null;theme;bays=[];panels=[];engineers=[];releaseLamp;releaseLabel;releaseLight;releasePost;clockHand;clockLabel;clockGroup;clockPlate;score;scoreLabel;scoreGroup;cables=new we;cableKey="";cableBorn=0;onDrop=()=>{};onStart=()=>{};onResolve=()=>{};onDepart=()=>{};started=new Set;lit=new Set;departed=new Set;pan=0;unlocked=!1;snap=!0;snapNext(){this.snap=!0}dragging=null;asphalt=new Me({color:4869974,map:us(Sh,9),metalness:.12,roughness:.82});concrete=new Me({color:11118238,map:us(Sh,1.6),metalness:.1,roughness:.74});wall=new Me({color:13617853,map:us(px,3),metalness:0,roughness:.92});steel=new Me({color:9278619,map:Ml,metalness:.78,roughness:.34});orange=_e(14243868,.1,.55);dark=_e(1711394,.3,.6);paleLine=_e(14275256,0,.5);wornLine=_e(9275511,0,.7);lampOn=new Me({color:4177754,emissive:3120968,emissiveIntensity:.9});lampOff=_e(5593696,.2,.5);lampWait=new Me({color:9080726,emissive:5922662,emissiveIntensity:.2});cableOn=new Me({color:16761963,emissive:16751150,emissiveIntensity:2.4,transparent:!0});cableOff=new Me({color:7765382,emissive:3883337,emissiveIntensity:.5,transparent:!0});zoneIdle=new lr({color:14243868,transparent:!0,opacity:.18,depthWrite:!1});zoneHot=new lr({color:16757575,transparent:!0,opacity:.55,depthWrite:!1});bayX(t,e){return(t-(e-1)/2)*ke}exitX(){return this.pack?this.pack.cars.length*ke/2+1.6:10}build(t){this.pack=t,this.theme=Eu(t),this.asphalt.color.set(this.theme.asphalt),this.wall.color.set(this.theme.garage),this.zoneHot.color.set(this.theme.displayAmber);const e=this.stage,n=e.root;for(const m of e.labels)m.element.remove();e.labels.length=0,e.callbacks.clear(),e.drags.clear(),ih(n),this.clearCables(),this.bays=[],this.panels=[],this.engineers=[],this.started.clear(),this.lit.clear(),this.departed.clear();const i=t.cars.length,r=i*ke+1.2,o=r/2+1.8;Bt(n,[r+60,.2,44],[0,-.1,16],this.asphalt);for(let m=-r/2-12;m<r/2+6;m+=2.6)Bt(n,[1.4,.01,.12],[m,.005,7.4],this.paleLine);Bt(n,[r+6,.01,.14],[0,.006,-.05],this.paleLine),Bt(n,[r+20,.01,.16],[0,.006,On+2],this.paleLine);for(let m=-r/2-8;m<r/2+8;m+=3.2)Bt(n,[1.8,.01,.1],[m,.006,On+4.2],this.wornLine);Bt(n,[4.4,.2,30],[this.exitX()+1.1,-.11,-8],this.asphalt),Bt(n,[r,5,.3],[0,2.5,-5.6],this.wall),Bt(n,[r+.6,.35,6.4],[0,4.95,-2.5],_e(12170408,.1,.8)),Bt(n,[r+.6,.9,.3],[0,4.6,.1],_e(2830134,.3,.6));const a=t.displays.length;for(const m of[-1,1])Bt(n,[.4,He+1,.4],[m*o,(He+1)/2,ln],this.steel);Bt(n,[o*2,.5,.5],[0,He,ln],this.steel),Bt(n,[o*2,.12,.9],[0,He+.3,ln],_e(2830134,.3,.6));const h=new Me({color:7039330,map:Ml,metalness:.3,roughness:.8});Bt(n,[o*2+.8,2.6,.5],[0,He+4.2,ln-.7],h),Bt(n,[o*2+1.4,.5,1.1],[0,He+5.6,ln-.5],this.steel);for(let m=-o+2.2;m<=o-2.2;m+=3.6){const p=Bt(n,[2.6,.12,.34],[m,He+2.8,ln-.3],new Me({color:16777215,emissive:14674431,emissiveIntensity:1.1}));p.castShadow=!1}for(const m of[-1,1]){const p=new Ys(14674431,12,15,2);p.position.set(m*o/2,He+3.2,ln+.8),n.add(p)}const l=-o+5.6,c=o-3.2,u=Math.min(Eh+.6,(c-l)/a),f=Math.min(Eh,u-.4),d=(l+c)/2-(a-1)/2*u;t.displays.forEach((m,p)=>{const E=(l+c)/2+(p-(a-1)/2)*u,S=new we;S.position.set(E,He+1.55,ln),n.add(S),Bt(S,[f,2.2,.3],[0,0,0],this.dark);const y=Bt(S,[f-.3,1.9,.04],[0,0,.16],new Me({color:723463,emissive:16751150,emissiveIntensity:.09,roughness:.35}));y.castShadow=!1;const R=new gi(S,f-.3,1.9,[0,0,.19],1024,"rgba(0,0,0,0)"),w=new Ys(this.theme.displayAmber,0,10,2);w.position.set(0,-.4,1.4),S.add(w);const C=m.needs.map((M,P)=>{const B=We(S,.13,.1,[(P-(m.needs.length-1)/2)*.5,-1.22,.18],this.lampOff,14);return B.rotation.x=Math.PI/2,B.castShadow=!1,{need:M,mesh:B}}),I=new gi(S,2.6,.46,[0,-2.05,.9],560,"rgba(20,22,26,.92)");I.mesh.visible=!1;const b=e.interact(S,m.name,()=>this.callbacks.touch("display",m.id),[0,1.6,.3]);this.panels.push({display:m,group:S,face:R,glow:y,lamp:w,markers:C,tag:I,label:b,x:E})}),t.cars.forEach((m,p)=>{const E=this.bayX(p,i),S=Bt(n,[ke-.4,.06,5.4],[E,.03,mi],this.concrete);for(const et of[-1,1])Bt(n,[.3,4.8,5.6],[E+et*(ke/2-.05),2.4,-2.7],this.wall);const y=new Ys(14674431,30,8.5,2);y.position.set(E,4.2,-2),n.add(y);const R=Bt(n,[1.8,.1,.4],[E,4.7,-2],new Me({color:16777215,emissive:14674431,emissiveIntensity:1.4}));R.castShadow=!1;const w=new te(new Es(ke-.5,5.2),this.zoneIdle);w.rotation.x=-Math.PI/2,w.position.set(E,.07,mi),w.visible=!1,n.add(w);const C=new we;C.position.set(E,0,mi),n.add(C);const I=new we;C.add(I);const b=this.theme.team[p%this.theme.team.length],M=bh(b),P=bh(15854816),{wheels:B}=Mx(I,M,P);I.rotation.y=Math.PI;const G=[-1.95,2].map(et=>{const ct=new we;ct.position.set(0,0,et),C.add(ct),Bt(ct,[1.5,.13,.34],[0,.07,0],this.orange);for(const Ut of[-1,1]){const Vt=Bt(ct,[.16,.52,.22],[Ut*.62,.3,0],this.orange);Vt.rotation.x=.12}Bt(ct,[1.5,.12,.5],[0,.55,.02],this.steel);for(const Ut of[-1,1])We(ct,.07,.16,[Ut*.72,.08,0],this.dark,10).rotation.z=Math.PI/2;return ct}),$=Bt(n,[.78,.78,.2],[E,2.95,.42],this.dark),N=new te(new cr(.26,18,14),this.lampOff);N.position.set(0,0,.14),$.add(N);const V=Bt($,[.46,.46,.1],[0,0,.1],this.lampOff);V.castShadow=!1;let Z=null;if(m.state==="blocked"){Z=Bt(n,[ke-.5,.34,.16],[E,2.5,.5],_e(9341568,.3,.7));for(let et=-1.5;et<=1.5;et+=.75)Bt(Z,[.38,.34,.03],[et,0,.09],_e(14263361,0,.6));for(const et of[-1,1])We(n,.07,2.5,[E+et*(ke/2-.35),1.25,.5],this.steel,10)}const W=Bt(n,[ke-.55,1.05,.12],[E,4.05,.36],this.dark);new gi(W,ke-.75,.95,[0,0,.07],860,"#0f1318").paint([{text:`${m.bay} · ${m.name}`,size:108,color:"#efe9dc",weight:700}]);const X=e.interact(C,vx(m),()=>this.callbacks.touch("car",m.id),[0,.2,4.2]);X.classList.add("below"),this.bays.push({car:m,group:C,floor:S,rig:I,wheels:B,jacks:G,lamp:N,lampShape:V,zone:w,door:Z,label:X,x:E})}),Bt(n,[t.engineers*3+.6,.12,.55],[0,.5,On+2.6],_e(7031338,0,.8));for(const m of[-1,1])Bt(n,[.12,.5,.5],[m*(t.engineers*1.5+.2),.25,On+2.6],this.steel);for(let m=0;m<t.engineers;m++){const p=new we;n.add(p),Sx(p,this.orange),new gi(p,.44,.44,[0,1.16,.18],160,"rgba(0,0,0,0)").paint([{text:String(m+1),size:120,color:"#14181d",weight:700}]);const E=e.interact(p,`Engineer ${m+1}`,()=>this.callbacks.touch("engineer",String(m)),[1.1,1.25,0]);E.classList.add("side");const S=e.labels.at(-1).offset;E.addEventListener("keydown",y=>{const R=y.key==="ArrowLeft"?"left":y.key==="ArrowRight"?"right":y.key==="ArrowUp"?"bench":null;R&&(y.preventDefault(),this.callbacks.nudge(m,R))}),this.engineers.push({group:p,label:E,offset:S,drag:null})}this.releasePost=new we,this.releasePost.position.set(this.exitX()-2.6,0,On+.6),n.add(this.releasePost),We(this.releasePost,.1,3.2,[0,1.6,0],this.steel,10),Bt(this.releasePost,[.7,1.2,.55],[0,3.6,0],this.dark),this.releaseLamp=new te(new cr(.24,18,14),new Me({color:3808274,emissive:14243868,emissiveIntensity:0})),this.releaseLamp.position.set(0,3.65,.32),this.releasePost.add(this.releaseLamp),this.releaseLight=new Ys(6094714,0,9,2),this.releaseLight.position.set(0,3.6,1.2),this.releasePost.add(this.releaseLight);const g=Bt(this.releasePost,[2.7,1.5,.12],[0,2.3,.12],this.dark);new gi(g,2.55,1.35,[0,0,.08],620,"#0f1318").paint([{text:"Run the plan",size:104,color:"#ffd79a",weight:700}]),this.releaseLabel=e.interact(this.releasePost,"Run the plan",()=>this.callbacks.release(),[0,4.4,.3]),this.clockGroup=new we,this.clockGroup.position.set(o-2.3,He+1.55,ln),n.add(this.clockGroup),We(this.clockGroup,.95,.22,[0,0,0],this.dark,32).rotation.x=Math.PI/2,We(this.clockGroup,.84,.02,[0,0,.12],_e(15327951,0,.8),32).rotation.x=Math.PI/2;for(let m=0;m<t.runHours;m++){const p=m/t.runHours*Math.PI*2;Bt(this.clockGroup,[.06,.18,.03],[Math.sin(p)*.7,Math.cos(p)*.7,.14],this.dark).rotation.z=-p}this.clockHand=new we,this.clockHand.position.set(0,0,.16),this.clockGroup.add(this.clockHand),Bt(this.clockHand,[.07,.7,.03],[0,.32,0],_e(this.theme.brokenPromiseRed,0,.6)),this.clockPlate=new gi(this.clockGroup,3.1,.62,[-.5,1.62,.1],700,"rgba(20,22,26,.92)"),this.clockLabel=e.interact(this.clockGroup,"Clock",()=>this.callbacks.touch("clock",""),[-1.7,1.15,.2]),this.clockLabel.classList.add("side-left"),this.clockLabel.addEventListener("keydown",m=>{[" ","ArrowRight"].includes(m.key)&&(m.preventDefault(),this.callbacks.clockKey(m.key))}),this.scoreGroup=new we,this.scoreGroup.position.set(Math.min(-o+3.5,d-f/2-2.15),He+1.5,ln),n.add(this.scoreGroup),Bt(this.scoreGroup,[3.7,2.5,.3],[0,0,0],this.dark),this.score=new gi(this.scoreGroup,3.45,2.2,[0,0,.17],680,"#0d130f"),this.scoreLabel=e.interact(this.scoreGroup,"Scoreboard",()=>this.callbacks.touch("score",""),[0,1.7,.2]);const _=n.children[0];e.drags.set(_,m=>{this.pan-=m*.05}),e.callbacks.set(_,()=>this.callbacks.touch("car","")),this.pan=0}clearCables(){ih(this.cables)}sendingNow(t,e){const{pack:n,outcome:i,session:r}=t,o=i.cars.find(c=>c.id===e.car),a=n.cars.find(c=>c.id===e.car);return(r.time>=n.runHours&&r.roll>=(hs(n,i).departs[e.car]??1/0)+Vn.car*.5?o.sending:a.state==="running"?a.fields.filter(c=>!a.missing.includes(c)):[]).includes(e.field)}drawCables(t){const{pack:e,selection:n}=t,i=n&&(n.kind==="car"||n.kind==="display")?n:null,r=i?`${i.kind}:${i.id}|${e.displays.map(h=>h.needs.map(l=>this.sendingNow(t,l)?1:0).join("")).join("|")}`:"";if(r===this.cableKey||(this.cableKey=r,this.clearCables(),this.cableBorn=performance.now(),!i))return;const o=e.displays.flatMap(h=>h.needs.filter(l=>i.kind==="display"?h.id===i.id:l.car===i.id).map(l=>({display:h,need:l}))),a=new Map;for(const{display:h,need:l}of o){const c=this.bays.find(S=>S.car.id===l.car),u=this.panels.find(S=>S.display.id===h.id),f=this.sendingNow(t,l),d=a.get(l.car)??0;a.set(l.car,d+1);const g=c.x+.5+d*.4,_=He-.1-d*.34,m=ln+1.9,p=[[g,1.4,mi+1.6],[g,1.4,m],[g,_,m],[u.x,_,m],[u.x,He+1,m],[u.x,He+1,ln+.2]],E=f?this.cableOn:this.cableOff;for(let S=0;S<p.length-1;S++){const y=new z(...p[S]),R=new z(...p[S+1]);if(f)nh(this.cables,y.toArray(),R.toArray(),.062,E);else{const w=y.distanceTo(R),C=R.clone().sub(y).normalize();for(let I=0;I<w;I+=.78)nh(this.cables,y.clone().add(C.clone().multiplyScalar(I)).toArray(),y.clone().add(C.clone().multiplyScalar(Math.min(w,I+.46))).toArray(),.062,E)}}for(const S of p)We(this.cables,.095,.07,S,E,12)}}update(t,e){const{pack:n,session:i,outcome:r}=t;this.pack!==n&&(this.build(n),this.snap=!0);const o=this.stage.reduced.matches,a=this.snap;this.snap=!1;const h=(N,V)=>o||a?V:ho.damp(N,V,7,e),l=i.sealed&&!i.recorded,c=i.sealed&&i.time>=n.runHours,u=hs(n,r),f=performance.now()/1e3;this.unlocked=["own","revision","transfer"].includes(i.phase)&&!i.sealed;const d=this.stage.host.clientWidth<640,g=d?ke*3.1:Math.max(27,n.cars.length*ke+7.6),_=this.stage;_.viewWidth!==g&&(_.viewWidth=g,this.stage.resize());const m=d?n.cars.length*ke/2+3:0;this.pan=Math.max(-m,Math.min(m,this.pan));const p=g/Math.max(.4,this.stage.host.clientWidth/Math.max(1,this.stage.host.clientHeight)),E=Math.max(0,Math.min(1.6,p-16.6)),S=Math.min(.8,Math.max(0,16.6-p)*.2);this.stage.camera.position.y=h(this.stage.camera.position.y,7.5+E*.62),this.stage.target.y=h(this.stage.target.y,3.2-E*.46+S),this.stage.camera.position.x=h(this.stage.camera.position.x,this.pan),this.stage.target.x=this.stage.camera.position.x,this.stage.camera.lookAt(this.stage.target);const y=this.stage.hover,R=this.dragging?.bay??null;let w=0;for(const N of this.bays){const V=r.cars.find(j=>j.id===N.car.id),Z=i.sealed?i.time:0,W=V.fixHour!==null&&Z>=V.fixHour,X=V.runningBefore||W;i.sealed&&W&&!this.started.has(N.car.id)&&(this.started.add(N.car.id),this.onStart());const et=u.departs[N.car.id],ct=c&&et!==void 0?Math.max(0,Math.min(1,(i.roll-et)/Vn.car)):0,Ut=et!==void 0?w++:0;ct>0&&!this.departed.has(N.car.id)&&(this.departed.add(N.car.id),this.onDepart());let Vt=N.x,Nt=mi,Yt=0;if(ct>0){const j=this.exitX()+.4,vt=Math.min(1,ct/.25),Ct=Math.min(1,Math.max(0,(ct-.25)/.5)),Et=Math.max(0,(ct-.75)/.25);Nt=mi+(On-mi)*vt-(On+.8+Ut*2.9)*Et,Vt=N.x+(j-N.x)*Ct,Yt=Math.PI/2*Math.min(1,Ct*3)+Math.PI/2*Math.min(1,Et*3)}N.group.position.x=h(N.group.position.x,Vt),N.group.position.z=h(N.group.position.z,Nt),N.group.rotation.y=h(N.group.rotation.y,Yt),N.rig.position.y=h(N.rig.position.y,X?0:.46);for(const j of N.jacks)j.scale.y=h(j.scale.y,X?.16:1),j.visible=j.scale.y>.2;if(ct>0&&ct<1&&!o)for(const j of N.wheels)j.rotation.x-=e*9;N.lamp.material=X?this.lampOn:V.blocked?this.lampWait:this.lampOff,N.lamp.visible=X,N.lampShape.visible=!X,N.lampShape.material=V.blocked?this.lampWait:this.lampOff,N.zone.visible=!!this.dragging,N.zone.material=R===N.car.id?this.zoneHot:this.zoneIdle;const K=t.selection?.kind==="car"&&t.selection.id===N.car.id;N.label.classList.toggle("selected",K),N.label.classList.toggle("hover",y===N.group||y===N.rig)}n.displays.forEach((N,V)=>{const Z=this.panels[V],W=r.displays.find(vt=>vt.id===N.id),X=c&&i.roll>=u.resolves[N.id],et=X&&W.lit,ct=Z.glow.material;ct.emissiveIntensity=h(ct.emissiveIntensity,et?1.2+(o?0:Math.sin(f*3)*.04):X?.02:.09),Z.lamp.intensity=h(Z.lamp.intensity,et?20:0);const Ut=t.plan.switches[N.id]??"unset",Vt=X&&Ut==="yes"&&!W.lit,Nt=X&&Ut==="no"&&W.lit;X&&!this.lit.has(N.id)&&(this.lit.add(N.id),this.onResolve(W.lit,Vt||Nt));const Yt=Vt?"#fff":Nt||et?"#1a1206":"#dfe3e8",K={text:N.name,size:92,color:Yt,weight:700};Z.face.paint(X?[K,{text:W.lit?"Live":"Dark",size:130,color:Vt?"#fff":Nt||et?"#1a1206":"#c9ccd2",weight:700}]:[K],Vt?So(this.theme.brokenPromiseRed):Nt?"#d9a441":et?So(this.theme.displayAmber):"rgba(10,12,15,.82)");for(const vt of Z.markers)vt.mesh.material=this.sendingNow(t,vt.need)?this.lampOn:this.lampOff;const j=!!t.lastStop&&!i.sealed;Z.tag.mesh.visible=j,j&&Z.tag.paint([{text:`Last run: ${t.lastStop.includes(N.id)?"live":"dark"}`,size:64,color:"#c9ccd2"}]),Z.label.classList.toggle("selected",t.selection?.kind==="display"&&t.selection.id===N.id),Z.label.classList.toggle("hover",y===Z.group)});const C=new Map,I=-(n.engineers-1)*1.5;this.engineers.forEach((N,V)=>{const Z=t.plan.engineers[V];let W,X=0;if(N.drag)W=N.drag;else if(Z){const Vt=this.bays.find(Nt=>Nt.car.id===Z);X=C.get(Z)??0,C.set(Z,X+1),W=new z(Vt.x+(X?1.15:-1.15),0,1.3)}else W=new z(I+V*3,0,On+2),X=0;const et=Z||N.drag;N.offset.set(et&&X?1.15:-1.15,1.25,.4),N.label.classList.toggle("side",!(et&&X)),N.label.classList.toggle("side-left",!!(et&&X)),N.group.position.x=h(N.group.position.x,W.x),N.group.position.z=h(N.group.position.z,W.z),N.group.position.y=N.drag?.3:o?0:Math.sin(f*1.7+V)*.012;const ct=Z?r.cars.find(Vt=>Vt.id===Z):null,Ut=l&&ct&&!c&&ct.fixHour!==null&&i.time<ct.fixHour;N.group.rotation.z=Ut&&!o?Math.sin(f*6+V)*.08:0,N.label.classList.toggle("locked",!this.unlocked),N.label.classList.toggle("grab",this.unlocked),N.label.classList.toggle("selected",t.selection?.kind==="engineer"&&t.selection.id===String(V)),N.label.classList.toggle("hover",y===N.group)});const b=!i.sealed&&r.allSet&&["own","revision","transfer"].includes(i.phase),M=this.releaseLamp.material;M.emissive.set(i.sealed?4177754:14243868),M.emissiveIntensity=h(M.emissiveIntensity,i.sealed?2.2:b?1.3+(o?0:Math.sin(f*4)*.3):0),this.releaseLight.color.set(i.sealed?6094714:16747066),this.releaseLight.intensity=h(this.releaseLight.intensity,i.sealed?12:b?6:0),this.releaseLabel.classList.toggle("ready",b),this.releaseLabel.classList.toggle("hover",y===this.releasePost),this.clockHand.rotation.z=h(this.clockHand.rotation.z,-(i.sealed?i.time:0)/n.runHours*Math.PI*2);const P=n.runHours-(i.sealed?Math.floor(i.time):0);this.clockPlate.paint([{text:c?"Work is over":`${P} of ${n.runHours} hours left`,size:104,color:c?"#ffd79a":"#dfe3e8"}]),this.clockLabel.classList.toggle("hover",y===this.clockGroup),this.scoreLabel.classList.toggle("hover",y===this.scoreGroup);const B=["Cars running","Detections live","Promises kept"],G=[`Cars running ${r.running} of ${n.cars.length}`,`Detections live ${r.lit} of ${n.displays.length}`,`Promises kept ${r.kept.length}`],$=["#9fe3ad","#ffd79a","#9fe3ad"];if(this.score.paint(t.scoreRows?B.map((N,V)=>V<t.scoreRows?{text:G[V],size:84,color:$[V]}:{text:N,size:84,color:"#465248"}):[{text:"Scores appear after the run.",size:78,color:"#8fa093"}]),this.scoreLabel.classList.toggle("selected",t.selection?.kind==="score"),this.drawCables(t),o)this.cableOn.opacity=this.cableOff.opacity=1;else{const N=Math.min(1,(performance.now()-this.cableBorn)/400);this.cableOn.opacity=this.cableOff.opacity=N}}layoutLabels(){const t=this.stage.host,e=t.clientWidth,n=t.clientHeight;if(!e||!n)return;const i=8,r=5,o=[];for(const a of this.stage.labels){if(a.element.hidden)continue;const h=parseFloat(a.element.style.left)/100*e;if(!Number.isFinite(h)||h<-60||h>e+60){a.element.hidden=!0;continue}const l=a.element.getBoundingClientRect();if(!l.width)continue;const c=parseFloat(a.element.style.top)/100*n-l.height/2;o.push({element:a.element,x:h-l.width/2,y:c,w:l.width,h:l.height,from:c})}for(const a of o)a.x=Math.max(i,Math.min(e-a.w-i,a.x)),a.y=Math.max(i,Math.min(n-a.h-i,a.y));for(let a=0;a<3;a++){o.sort((h,l)=>h.y-l.y);for(let h=0;h<o.length;h++)for(let l=h+1;l<o.length;l++){const c=o[h],u=o[l];u.x>c.x+c.w+r||c.x>u.x+u.w+r||u.y<c.y+c.h+r&&(u.y=Math.min(n-u.h-i,c.y+c.h+r))}}for(const a of o)a.element.style.left=`${a.x+a.w/2}px`,a.element.style.top=`${a.y+a.h/2}px`,a.element.classList.toggle("nolead",Math.abs(a.y-a.from)>22)}labelFor(t){return t?t.kind==="car"?this.bays.find(e=>e.car.id===t.id)?.label??null:t.kind==="display"?this.panels.find(e=>e.display.id===t.id)?.label??null:t.kind==="engineer"?this.engineers[Number(t.id)]?.label??null:t.kind==="release"?this.releaseLabel:t.kind==="clock"?this.clockLabel:this.scoreLabel:null}}const Ro=document.createElement("span");Ro.style.cssText="position:fixed;width:1rem;height:1rem;visibility:hidden;pointer-events:none";document.body.append(Ro);const Au=new ResizeObserver(s=>document.body.classList.toggle("large-type",s[0].contentRect.width>25));Au.observe(Ro);window.addEventListener("pagehide",()=>{Au.disconnect(),Ro.remove()},{once:!0});function lt(s,t="",e=""){const n=document.createElement(s);return n.textContent=t,n.className=e,n}function De(s,t,e=""){const n=lt("button",s,e);return n.type="button",n.addEventListener("click",t),n}function Ex({sfx:s={},beds:t={},gains:e={},storageKey:n="audio.muted"}={}){const i={master:.8,sfx:1,bed:.55,duck:.3,...e},r=window.__audioLog||=[];let o=null,a,h,l,c=null,u=null,f=null;const d=new Map,g=new Map;let _=!1;try{_=localStorage.getItem(n)==="1"}catch{}const m=(y,R)=>fetch(R).then(w=>w.arrayBuffer()).then(w=>o.decodeAudioData(w)).then(w=>{d.set(y,w),y===u&&E()}).catch(w=>console.warn(`[audio] ${y} failed to load`,w));function p(){removeEventListener("pointerdown",p,!0),removeEventListener("keydown",p,!0),o=new(window.AudioContext||window.webkitAudioContext),a=o.createGain(),a.gain.value=_?0:i.master,a.connect(o.destination),h=o.createGain(),h.gain.value=i.sfx,h.connect(a),l=o.createGain(),l.gain.value=i.bed,l.connect(a),document.hidden&&o.suspend();for(const[y,R]of Object.entries({...s,...t}))m(y,R)}addEventListener("pointerdown",p,!0),addEventListener("keydown",p,!0),document.addEventListener("visibilitychange",()=>{o&&(document.hidden?o.suspend():o.resume())});function E(){if(c){try{c.stop()}catch{}c=null}const y=u&&d.get(u);y&&(c=o.createBufferSource(),c.buffer=y,c.loop=!0,c.connect(l),c.start())}const S={play(y,{gain:R=1,rate:w=1,overlap:C=!1}={}){r.push(y);const I=o&&d.get(y);if(!I||_||document.hidden)return;const b=o.currentTime,M=!C&&g.get(y);if(M){M.g.gain.setTargetAtTime(0,b,.01);try{M.src.stop(b+.05)}catch{}}const P=o.createBufferSource(),B=o.createGain();P.buffer=I,P.playbackRate.value=w,B.gain.value=R,P.connect(B).connect(h),P.start(),C||(g.set(y,{src:P,g:B}),P.onended=()=>{g.get(y)?.src===P&&g.delete(y)})},bed(y){y!==u&&(u=y,r.push("bed:"+y),o&&E())},duck(y=1500){if(!o)return;const R=o.currentTime,w=l.gain;w.cancelScheduledValues(R),w.setTargetAtTime(i.bed*i.duck,R,.08),w.setTargetAtTime(i.bed,R+y/1e3,.4)},setMuted(y){_=!!y;try{localStorage.setItem(n,_?"1":"0")}catch{}a&&a.gain.setTargetAtTime(_?0:i.master,o.currentTime,.03),f&&(f.textContent=_?"Sound off":"Sound on",f.setAttribute("aria-pressed",String(!_)))},get muted(){return _},get loaded(){return[...d.keys()]},mountToggle(y){if(y.tagName!=="BUTTON"){const R=document.createElement("button");R.type="button",y.appendChild(R),y=R}return f=y,y.addEventListener("click",()=>S.setMuted(!_)),S.setMuted(_),y}};return S}const Ax=""+new URL("touch-car-Rbx_fWGG.mp3",import.meta.url).href,wx=""+new URL("touch-display-B6SrIWyM.mp3",import.meta.url).href,Tx="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYyLjMuMTAwAAAAAAAAAAAAAAD/+3DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAsAAA6xACoqKioqKioqKj8/Pz8/Pz8/P1VVVVVVVVVVVWpqampqampqan9/f39/f39/f5WVlZWVlZWVlaqqqqqqqqqqqsDAwMDAwMDAwNXV1dXV1dXV1erq6urq6urq6v///////////wAAAABMYXZjNjIuMTEAAAAAAAAAAAAAAAAkBpEAAAAAAAAOsV8GrPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//twxAAAChwpUFSRADMSMqw3MPACEQH10YrJ3kAUFERQSMQyEPMAEDQfD4jB9QIYIAg4HDn1h8uD78Hz6gwUBA5+XB8/UD7+oEAwsEDn8Hwfy4P5QH3lDkoCDhOCCwfPlwfeIHAgAAQmUmk7I220221pJIKzG3qWkDSBZic4rVi8bdGQNUXewNFIGlSZcYIkxBUl9APEUUwwGQuKPZh6EQhhVhxAa5dS2TAskMQkXYDaSxWsjAaylVMJaguLexrD1QtysUjzLE1MJLlPezJFU8sjI1pto1DzAYWKWHG+DrrqSP8UkePomZ8TRYV5GRq348TDc2a223zDWd5Oi2MY3ZKTf1+82/mt9fyum2v/38Me7Mm5X0T//T+WHHxXrkkzR//JJ22fvNPH7QoBEPjPHAQfO0OKgY4wUf/7csQHABCVhUw9pYAaADGp6ZQKuCipoqPiAY6j2K8RWHhFG9KvgMGo2Eod7RkFahJPkMSDp2n5RqNQMzMxJRVd3k8r3Q+swNVkDrHUQirh7L6kmwdSRUOZPUs9SC3FsqbVuZbD66fe8ufNU6Kkwce6XfZ1Kp5h0V///P18V////+6P7jp3///+43x0AAyAIgGKF10ZwMGbGpzRuc3JQaGWwJxv87jeMka8yqtATnyKX1pPhEd3JfeuiJPEknDsgWmCQ+hYcc6Eoz0LdDkVqKKDofe1a+K/1qpqrPNe140fc97VZJcxcXUSIKjTWgC2HjYi8uHe8ak/rMrZjf/0uUYiEMjo3yzeLGIYw7UwY1DA4xkfOjGDHHUoKTJRwFAaJ4VEjDwAs6YoDw2QAEMUyKSLCw0esu4zmRYs//twxBcD08WFOA2xU8pVMabBtK6wjMfT9SUGDl91D8yOiutZhsvJsK1bOReu1fkeFKh8c9UvLJKpq0pjz2x+Pk93iTX6M2YegzMlTkxJPy3Wdu6w+QVvA8u1jTMscTlDSQnH5V5+6zazvqMTUdxivZf6E4tioRs5NPFBrfO7GlRJASJjioADDAzU06dOkCyAMGkpKkqiCA8u+YMBtQhDuvMsKxKUMGclrM7IIrannlp5yQzEaTg5YqXeMMrvqcNfsYsWjYZmw4YLGq2CSpGcWDyFtAQqi4pN2jCUs/GauvccbnyYznXzYSWQ4VHVQHV8pihE2S0mIm01aWyn98//VcVug/d99//O6ZoxQcyVHub//EO5YD59zdx9CgaYAjI1ms4EsMYgIUtMlArrTETlbM5NV1H2krdZQ//7csQPA9IRjzQNMbPCZLHmQZSisXkMZWqe6/BdMXkJQQjoyglLnqYaObkTttxzr+z1d1hq/0Zlg8LZYbTbkFMabWOKxhZ6nl5jnN78U7M3m/ROUtirkKJEaP5NQuUUkroE5Mu6dRutatfrXN83X601e1BnNXOmzrcyKTP63QV0hVTWkgdSPIC5Z2Kg7Y7jxCWCjmuEhDcy4BYDLhsPuMDaSpjBszLnymYJlMjgh+IW8lHD6QhRnmUCqNoQCRlRpB0hgQFFRPE0iFHOo2BWPGyw2K1MoGpSFDOA+LFwPukye0pL5J976XlMrLYpGZGPISOSH1je2riMGbHoXAQidem85on7//nuWRL/mf/SGq7FUYy2MuduZ6/0AaA4iokRJFUCBAAgSBElIjggY4MCiQuLUoJaZEFJheTW//twxAyAEfWHOMwk+QpDsiZhpi342vrfgBgj+xeHvmqGcf6LRZ87UgpeU0uf2612H2xNnqsdgaNTcikMmGQ00RPhieyISzDZbC1tO3FKiMoVGGkBWeS1LJTx3612k7NWink7e0VQXKdZbBQiaUMHhce6TJ9Ea6fq6sc7+v98+jndX9bv2MC4LyLLqUghAAAAAIG1MiIqd4CpynO2sENhpoCg+XFxk9pW1qXioxTg1iNbR2jEwuwLZ9dqEbw65Q+fltm1Nde341K+jt2SnGucjWGfLRKSctotGmEuoVDg6rWlhizVuvOVTa/cUrtVbdk1UiLIpMMDM67T0HXMTsO8/C3/bc1bUR////u6Wzx5Znu/b7Fnd23B8fn11Sz1BAABUlGTTCAMY1UGFmTtLXYp+aaXJJY0VhruuP/7csQOAdIZkS6tJXPCTzBlQYY2ebFs5bHssZ61BIoAO5RtCH12EcqRItQygWVjsVlczYoV2rRrDCyDd1NTSUGDE52I8mgUVUg8sycyXh/24TucJXKzVJlZlMIQuw9mUxqtqbYa0/tjc17fio/iJUbB3/+v/2TMRSQ/Sf3x/cQ1jEK4aCpKn4cgeNIjFeJHXDzsHhtrrXGUsTwa/C3Vfh34RDcvmaHduSWS2sHYRKxkxbaImtoPvP4iUXZYcocdVZOQV7SrCrPBIZHIp3JI6CQljzz1YYEAPqCw8wpNnNmLfOXPNnn5mZTPTU/0gQqibE91SkJUZOdY2MmSZnrN26zVfQa59RkpvV+kifutFJGy+pSlUHoos4OEJ2Y3GWUYuDoAkY8p3GJvcv+ZVIyBYdp6jykGks7jblrv//twxA4BEt2RLAwxU8IXsiXxhLZ4h+W24U70+IBb9DQ8pf4RAsnHcUA0GBLTw1SHB/G4vlWVDy7MbVnuqlO0+oQMapTo/WMDyUwuJEBLc2BU9TbU6bMzvwTevQ37RBQWIaEavXsBQbHoPGQeuT0G8hJl5j+e5hU+fR//MI2mlDFU1L/ZnZmMQZg3grJ9BqSKAIQgABNAMQ2kgbYcOJKiWo9DpF1l/QTDMnd6zBUCwTIK9TOdiqSqIFpHTM9RXB6pCYNRZ+ZnSf6jUvG0xTFKDQqXJWxrZpaqo6UD2msjbU7+eP+19v78rcx6UWVF5NfyKCM+eUbrerUyP+t2l5K/6/6nupRym3+kWuXUVKGkQUEiSSZSBx0ICAGCIhqSIaJXm7EQNEhIrAAjPxdfj0JBRBt3sgCjfRwNkP/7csQRgVFBhyatpa/KQrHkQaSquJldJR6AkcXeaLPumKbb9G6L1OG9Ksbi1eqRXSYUfJJhCJQdtAy3MQB86VKGInE4tMuIu3Tbqu0weXWJGx0sL1BIR46MiVmjJJXW0wNVpKdL7UTV3RTftb6KCtB0X/r6O1aYRItz3hcz644Tc05UFuDFngCDRUSGR5Z2NCR4NStWbGvJ3WrPK1qhf2kponOTbjSmWWmEdNwScw/s4ptxhkpdnpP+LQJZqkzmzxpZMCJzZWsFgbwoskQs3jD5Ztx+s3L7sfKTdkIjErrWFSrOWB6HGhCS5jLWyypTh/63//QgHanG//HxhuhUuh5iPzryRbNGYOgmq5MiAU1RkAAHapCWAwNrkeVQWmvN04tGoHnXKfOWS2NTtqK2mHU5aXeMVmufQnEX//twxBaATumDIy0ZUYIMsOMGtLABY43PnLOQZq+seh8mIdC2JJxFuWy3ZSCclCpA5tM9zLsbzD0YoRHOaVVrBVJlNLOhd3o6KTH7U62nnT2T/69Yv/TanVGY8B0EJMVQaZacRCZIkD9pxx6so8hVSTGTuo25v/GH5lucNnxBiAT5x2mqZNLFSc+rasemk2n+3OOtbsSzaa1ZzyiJxNqzjx2Ej7lk1x9Ha0xYx8ubKN1XcO7mP4mD5auxQ2dbbUNC+TyXtf/xcHf938/rfox///9fslE/X/8zx7Vqp66oXP1wgtUAQABRhkAAAAA1/Y75ERJDwhkZjGgGnSdBPEoVdeuHpdW51T0uzUzhJY4lotdsr3DjSUcnogzMyVz+hoYF4yCZDMcmvy62lfaLhzLRkyczMzMj0ynu4//7csQrABoJ9xc5pgABpTBdt54gAY4Y+uMmXTn5mZmW317jESpW/Z6yGerUJcZTM7O2mWFjl2/WU5evZWnLS46qtOWl0zMzMzMzdhZy999ilh5KK9YsOmVpi0uMmTkcY0TVazMzMzM7C7My4vXvrFlF699YscXr/WLKTMzMzMrWlx0ytOWlx0ytOWlx0ytOQAAGG5WYXHwbwhQ/kmENAWQMI4VCxK6NGt/Woo2pSlLUpRJStUpfKX6lCgLhQES2pZWQxqlfQ1SgIpSl//MZkM8pSt+pSqAgJUMYxit//8xjPKUpjGMZ5Sm1KFAQEB//1KAgLhQEBNCglUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//twxCCDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",Rx=""+new URL("switch-D92eHHe2.mp3",import.meta.url).href,Cx=""+new URL("release-RUV25EWu.mp3",import.meta.url).href,Px=""+new URL("hour-s5yyHggV.mp3",import.meta.url).href,Lx=""+new URL("fix-done-B_4ZbEGN.mp3",import.meta.url).href,Dx=""+new URL("roll-out-Wv_9EtP0.mp3",import.meta.url).href,Ix=""+new URL("live-Cm9KpLT-.mp3",import.meta.url).href,Ux=""+new URL("dark-CJqEIWB1.mp3",import.meta.url).href,Nx=""+new URL("call-wrong-Tub-okHH.mp3",import.meta.url).href,Fx=""+new URL("scoreboard-B9CfbntH.mp3",import.meta.url).href,Ox="security-pov",zx="Proof of value, security team",Bx="a regional bank's security team",Vx=4,kx=3,Hx=1,Gx=!0,Wx=[{id:"domain-auth",bay:1,name:"Domain auth logs",state:"stopped",fields:["user","src_ip","result"],fault:"The forwarder service on both domain controllers stopped after a patch. Restart it and confirm events arrive.",fixHours:1},{id:"firewall",bay:2,name:"Firewall logs",state:"running",fields:["src_host","dest_ip","dest_port","action"],fault:""},{id:"vpn",bay:3,name:"VPN logs",state:"blocked",fields:["user","src_ip","session"],fault:"The VPN appliance cannot reach the forwarder because port 514 is closed between them.",owner:"the bank's network team"},{id:"web-proxy",bay:4,name:"Web proxy logs",state:"stopped",fields:["src_host","url","category"],fault:"A proxy upgrade changed the log format and every field extraction is broken. Rewrite the extractions and check each field.",fixHours:6},{id:"endpoint",bay:5,name:"Endpoint agents",state:"stopped",fields:["host","process","file_hash"],fault:"The agents send to the old indexer address. Fix the output on the deployment server and confirm.",fixHours:2}],Xx=[{id:"brute-force",name:"Brute-force logins across VPN and domain",needs:[{car:"domain-auth",field:"user"},{car:"domain-auth",field:"src_ip"},{car:"vpn",field:"src_ip"}]},{id:"malware",name:"Malware download traced from proxy to laptop",needs:[{car:"web-proxy",field:"url"},{car:"web-proxy",field:"src_host"},{car:"endpoint",field:"file_hash"},{car:"endpoint",field:"host"}]},{id:"blocked-outbound",name:"Blocked outbound connections by laptop",needs:[{car:"firewall",field:"src_host"},{car:"firewall",field:"action"},{car:"endpoint",field:"host"}]}],$x={displaysLit:2,promisedNotShown:0,shownNotPromised:0},qx={id:Ox,title:zx,customer:Bx,runHours:Vx,engineers:kx,revisions:Hx,synthetic:Gx,cars:Wx,displays:Xx,win:$x},Yx="transfer-phishing",Zx="Proof of value, phishing case",Jx="a logistics company's security team",jx=4,Kx=2,Qx=0,ty=!0,ey=[{id:"cloud-audit",bay:1,name:"Cloud audit logs",state:"running",fields:["user","src_ip","country","action"],fault:""},{id:"email-gateway",bay:2,name:"Email gateway logs",state:"running",fields:["sender","recipient","url","action"],missing:["recipient"],fault:"The gateway export template leaves the recipient out. Change the template with the customer's email admin and confirm the field arrives.",fixHours:3},{id:"dns",bay:3,name:"DNS resolver logs",state:"stopped",fields:["host","query","answer"],fault:"No forwarder on the resolver pair. Install, configure and confirm.",fixHours:5},{id:"badge",bay:4,name:"Badge door system",state:"blocked",fields:["badge_id","door","direction"],fault:"The badge system has no export yet.",owner:"the badge vendor, who has to enable the export"}],ny=[{id:"new-country",name:"Console logins from a new country",needs:[{car:"cloud-audit",field:"user"},{car:"cloud-audit",field:"country"}]},{id:"phishing",name:"Phishing email to the user who clicked",needs:[{car:"email-gateway",field:"recipient"},{car:"email-gateway",field:"url"},{car:"cloud-audit",field:"user"}]},{id:"badged-out",name:"DNS lookups from a badged-out laptop",needs:[{car:"dns",field:"query"},{car:"dns",field:"host"},{car:"badge",field:"badge_id"}]}],iy={displaysLit:2,promisedNotShown:0,shownNotPromised:0},sy={id:Yx,title:Zx,customer:Jx,runHours:jx,engineers:Kx,revisions:Qx,synthetic:ty,cars:ey,displays:ny,win:iy};class Xe extends Error{}const Te={text:400,name:120,cars:12,displays:8,fields:12,needs:12,engineers:8,hours:24,revisions:3};function Ti(s,t){if(!s||typeof s!="object"||Array.isArray(s))throw new Xe(`${t}: expected an object.`);return s}function En(s,t,e=Te.text,n=!1){if(typeof s!="string"||!n&&!s.trim()||s.length>e)throw new Xe(`${t}: expected text of ${n?0:1} to ${e} characters.`);return s}function Qn(s,t,e,n){if(typeof s!="number"||!Number.isSafeInteger(s)||s<e||s>n)throw new Xe(`${t}: expected a whole number from ${e} to ${n}.`);return s}function ys(s,t,e,n){if(!Array.isArray(s)||s.length<e||s.length>n)throw new Xe(`${t}: expected ${e} to ${n} items.`);return s}function bi(s,t){const e=En(s,t,40);if(!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(e))throw new Xe(`${t}: use letters, numbers, hyphens, or underscores.`);return e}function ds(s,t){if(new Set(s).size!==s.length)throw new Xe(`${t}: values must be unique.`)}function ry(s,t){const e=Ti(s,t),n=En(e.state,`${t}.state`,10);if(!["stopped","running","blocked"].includes(n))throw new Xe(`${t}.state: expected stopped, running, or blocked.`);const i=ys(e.fields,`${t}.fields`,1,Te.fields).map((h,l)=>bi(h,`${t}.fields[${l}]`));ds(i,`${t}.fields`);const r=e.missing===void 0?[]:ys(e.missing,`${t}.missing`,0,Te.fields).map((h,l)=>bi(h,`${t}.missing[${l}]`));if(r.some(h=>!i.includes(h))||r.length&&n!=="running")throw new Xe(`${t}.missing: only a running car can be missing fields, and each must be one of its fields.`);const o=e.fixHours===void 0?0:Qn(e.fixHours,`${t}.fixHours`,0,Te.hours);if(n==="stopped"&&o<1)throw new Xe(`${t}.fixHours: a stopped car needs at least 1 hour.`);if(n==="running"&&o>0!=r.length>0)throw new Xe(`${t}: a running car has fixHours exactly when it is missing fields.`);const a=e.owner===void 0?"":En(e.owner,`${t}.owner`,Te.name);if(n==="blocked"&&!a)throw new Xe(`${t}.owner: a blocked car names who it waits on.`);return{id:bi(e.id,`${t}.id`),bay:Qn(e.bay,`${t}.bay`,1,Te.cars),name:En(e.name,`${t}.name`,Te.name),state:n,fields:i,missing:r,fault:En(e.fault,`${t}.fault`,Te.text,!0),fixHours:o,owner:a}}function oy(s,t,e){const n=Ti(s,t),i=ys(n.needs,`${t}.needs`,1,Te.needs).map((r,o)=>{const a=Ti(r,`${t}.needs[${o}]`),h=bi(a.car,`${t}.needs[${o}].car`),l=bi(a.field,`${t}.needs[${o}].field`),c=e.find(u=>u.id===h);if(!c||!c.fields.includes(l))throw new Xe(`${t}.needs[${o}]: ${h}.${l} is not a field of any car.`);return{car:h,field:l}});return ds(i.map(r=>`${r.car}.${r.field}`),`${t}.needs`),{id:bi(n.id,`${t}.id`),name:En(n.name,`${t}.name`,Te.name),needs:i}}const Ah=["asphalt","garage","team","display-amber","broken-promise-red"];function ay(s,t){if(s===void 0)return;const e=Ti(s,t),n=e.pack===void 0?void 0:En(e.pack,`${t}.pack`,40),i=e.colors===void 0?void 0:Ti(e.colors,`${t}.colors`),r=i&&Object.fromEntries(Object.entries(i).map(([o,a])=>{if(!Ah.includes(o))throw new Xe(`${t}.colors: "${o}" is not a themed role (${Ah.join(", ")}).`);return[o,En(a,`${t}.colors.${o}`,9)]}));return{pack:n,colors:r}}function ly(s){const t=Ti(s,"pack");if(t.synthetic!==!0)throw new Xe("pack.synthetic: every pack must declare synthetic: true.");const e=ys(t.cars,"cars",1,Te.cars).map((o,a)=>ry(o,`cars[${a}]`)).sort((o,a)=>o.bay-a.bay);ds(e.map(o=>o.id),"cars"),ds(e.map(o=>String(o.bay)),"cars.bay");const n=ys(t.displays,"displays",1,Te.displays).map((o,a)=>oy(o,`displays[${a}]`,e));ds(n.map(o=>o.id),"displays");const i=Qn(t.engineers,"engineers",1,Te.engineers),r=Ti(t.win,"win");return{id:bi(t.id,"pack.id"),title:En(t.title,"pack.title",Te.name),customer:En(t.customer,"pack.customer",Te.name),runHours:Qn(t.runHours,"runHours",1,Te.hours),engineers:i,revisions:Qn(t.revisions,"revisions",0,Te.revisions),cars:e,displays:n,win:{displaysLit:Qn(r.displaysLit,"win.displaysLit",0,n.length),promisedNotShown:Qn(r.promisedNotShown,"win.promisedNotShown",0,n.length),shownNotPromised:Qn(r.shownNotPromised,"win.shownNotPromised",0,n.length)},synthetic:!0,theme:ay(t.theme,"pack.theme")}}function wh(s){s&&typeof s=="object"&&Array.isArray(s.packs)&&(s=s.packs);const t=(Array.isArray(s)?ys(s,"packs",1,2):[s]).map(ly);return ds(t.map(e=>e.id),"packs"),t}function cy(s,t){return wh(t?s:[qx,sy])}const Yl=2;function Ea(s){return{phase:"intro",plan:mo(s),sealed:!1,paused:!1,time:0,roll:0,recorded:!1,history:[]}}function Zl(s,t){return t.phase==="transfer"||t.phase==="end"&&s.length>1?s[s.length-1]:s[0]}const hy=["own","revision","transfer"];function Qe(s){return hy.includes(s.phase)&&!s.sealed}function uy(s,t,e){if(!Qe(s))throw new Error("The plan is locked.");const n=s.plan.engineers.slice();return n[t]=e,{...s,plan:{...s.plan,engineers:n}}}function dy(s,t,e){if(!Qe(s))throw new Error("The plan is locked.");return{...s,plan:{...s.plan,switches:{...s.plan.switches,[t]:e}}}}function fy(s,t){if(s.sealed||!Qe(s))throw new Error("There is nothing to run.");if(!ql(t,s.plan).allSet)throw new Error("Answer yes or no on every detection first.");return{...s,sealed:!0,paused:!1,time:0,roll:0,recorded:!1}}function py(s,t,e,n,i=1){if(!Number.isFinite(e)||e<0)throw new RangeError("Time must be finite and positive.");if(!s.sealed||s.recorded)return s;let r=s.time,o=s.roll;const a=t.runHours-r,h=e/n;h<=a?r+=h:(r=t.runHours,o+=(h-a)*n*i);const l=ql(t,s.plan),c=hs(t,l).done,u={...s,time:r,roll:Math.min(o,c)};return u.roll>=c&&(u.recorded=!0,u.history=[...s.history,{phase:s.phase,plan:s.plan,lit:l.displays.filter(f=>f.lit).map(f=>f.id),kept:l.kept.length,promisedNotShown:l.promisedNotShown.length,shownNotPromised:l.shownNotPromised.length,won:l.won}]),u}function go(s){return s.history.filter(t=>t.phase==="own"||t.phase==="revision")}function wu(s,t){const e=go(s);return s.phase==="own"&&s.recorded&&!e.at(-1)?.won&&e.length<=t.revisions}function Aa(s,t,e){const n=Zl(t,s);if(!s.recorded)throw new Error("The run has not finished.");const i={sealed:!1,paused:!1,time:0,roll:0,recorded:!1};if(e==="own")return{...s,...i,phase:e,plan:mo(n)};if(e==="revision"){if(!wu(s,n))throw new Error("No revision is open.");return{...s,...i,phase:e,plan:{...mo(n),switches:{...s.plan.switches}}}}if(e==="transfer"){if(t.length<2)throw new Error("No transfer case.");return{...s,...i,phase:e,plan:mo(t[t.length-1])}}if(e==="end")return{...s,phase:e};throw new Error("Not a next step.")}function Th(s,t){if(!s||typeof s!="object")return!1;const{engineers:e,switches:n}=s;return Array.isArray(e)&&e.length===t.engineers&&e.every(i=>i===null||t.cars.some(r=>r.id===i))&&!!n&&typeof n=="object"&&t.displays.every(i=>["unset","yes","no"].includes(n[i.id]))}function ro(s){return`pit-lane:v${Yl}:${s.map(t=>t.id).join("+")}`}function Tu(s){let t=2166136261;for(const e of JSON.stringify(s))t=Math.imul(t^e.charCodeAt(0),16777619);return(t>>>0).toString(16)}function my(s,t){return JSON.stringify({version:Yl,contentStamp:Tu(s),session:t})}function gy(s,t){const e=JSON.parse(s);if(e.version!==Yl||e.contentStamp!==Tu(t))throw new Error("Different content.");const n=e.session;if(!["intro","own","revision","transfer","end"].includes(n.phase))throw new Error("Bad phase.");const i=Zl(t,n);if(!Th(n.plan,i)||!Array.isArray(n.history)||!n.history.every(r=>Th(r.plan,r.phase==="transfer"?t[t.length-1]:t[0])&&Array.isArray(r.lit)))throw new Error("Bad plan.");for(const r of["time","roll"])if(typeof n[r]!="number"||!Number.isFinite(n[r]))throw new Error("Bad number.");if(n.time<0||n.time>i.runHours||n.roll<0)throw new Error("Bad clock.");return{phase:n.phase,plan:n.plan,sealed:!!n.sealed,paused:!!n.paused,time:n.time,roll:n.roll,recorded:!!n.recorded,history:n.history}}const Rh=64e3;function Sl(s,t=0){if(!s||t>20)return null;try{const e=s.API_1484_11;if(e)return e;const n=s.parent&&s.parent!==s?s.parent:null;return Sl(n,t+1)??(t===0?Sl(s.opener??null,1):null)}catch{return null}}const Ch={connected:!1,resumeData:()=>null,save:()=>{},finish:()=>{}};function _y(){const s=typeof window>"u"?null:Sl(window);if(!s||s.Initialize("")!=="true")return Ch;const t=Date.now();let e=!1,n=!1;const i=(l,c)=>{s.SetValue(l,c)},r=s.GetValue("cmi.entry"),o=s.GetValue("cmi.suspend_data"),a=r==="resume"&&o?o:null;i("cmi.exit","suspend"),i("cmi.completion_status","incomplete"),s.Commit("");const h=()=>{e||(e=!0,i("cmi.session_time",yy(Date.now()-t)),s.Commit(""),s.Terminate(""))};return window.addEventListener("pagehide",h),{connected:!0,resumeData:()=>a,save(l){e||(i("cmi.exit","suspend"),i("cmi.suspend_data",l.length>Rh?l.slice(0,Rh):l),s.Commit(""))},finish(l={}){if(!(e||n)){if(n=!0,i("cmi.completion_status","completed"),l.score!==void 0&&l.max!==void 0){const c=l.min??0,u=l.max-c;i("cmi.score.min",String(c)),i("cmi.score.max",String(l.max)),i("cmi.score.raw",String(l.score)),u>0&&i("cmi.score.scaled",String(xy((l.score-c)/u,-1,1)))}l.passed!==void 0&&i("cmi.success_status",l.passed?"passed":"failed"),i("cmi.exit","normal"),i("cmi.suspend_data",""),s.Commit("")}}}}function xy(s,t,e){return s<t?t:s>e?e:s}function yy(s){const t=Math.max(0,Math.round(s/1e3)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=t%60;return`PT${e>0?`${e}H`:""}${n>0?`${n}M`:""}${i}S`}const Ph=document.querySelector("#app");try{let s=function(k,x){const A=vl(X(),x,k),U=c.sealed?c.time:null,F=U!==null&&A.fixHour!==null&&U>=A.fixHour;if(A.blocked)return[k.fault,`Only ${k.owner} can fix this. Engineers here do nothing.`,"Status: not running."];const D=[];return A.needed===0?["Nothing to fix. Status: running.",...A.engineers?["Engineers here do nothing."]:[]]:(D.push(k.fault),k.state==="running"&&D.push(`Running, but missing ${K(k.missing)}.`),U!==null&&A.engineers&&!F&&A.fixHour!==null?D.push(`Fix: ${Math.min(A.needed,Math.floor(U)*A.engineers)} of ${Nt(A.needed,"hour")} done.`):A.engineers?D.push(`Fix needs ${Nt(A.needed,"hour")}. Assigned: ${Nt(A.hours,"hour")} (${A.fixHour!==null?`${A.idle} spare`:`${A.short} short`}).`):D.push(`Fix needs ${Nt(A.needed,"hour")}. Nobody assigned.`),k.state!=="running"?D.push(F?"Status: running.":"Status: not running."):F&&D.push("Status: running, all fields sending."),D)},t=function(){const k=JSON.stringify([u,qt(),c.sealed,c.time,c.roll,c.phase,Qe(c)]);if(b.dataset.key===k)return;if(b.dataset.key=k,b.hidden=!u,!u){b.replaceChildren();return}const x=De("Close",it,"close"),A=[],U=Qe(c);if(u.kind==="car"){const F=ct(u.id);A.push(lt("h2",F.name),lt("p",`Bay ${F.bay}`,"small")),A.push(...s(F,qt()).filter(Boolean).map(J=>lt("p",J)));const D=nt(F);A.push(lt("p",D.length?`Feeds: ${D.map(J=>J.name).join("; ")}.`:"Feeds: no detection."))}else if(u.kind==="display"){const F=Ut(u.id);A.push(lt("h2",F.name),lt("p","Needs","small"));const D=lt("ul");gt(F).forEach(J=>D.append(lt("li",J))),A.push(D),A.push(...Gt(F.id).map(J=>lt("p",J,"reveal"))),vt(F.id)||A.push(lt("p",v(F.id)))}else if(u.kind==="engineer"){const F=Number(u.id),D=qt().engineers[F];A.push(lt("h2",`Engineer ${F+1}`),lt("p",D?`Working on: ${ct(D).name} (bay ${ct(D).bay}).`:"Working on: nothing."),lt("p",`Gives ${Nt(X().runHours,"hour")} to one car.`)),U&&A.push(lt("p","Drag the engineer onto a car.","small"))}else if(u.kind==="release")A.push(lt("h2","Run the plan"),lt("p",c.sealed?"The plan is locked.":"Click it when your engineers are placed."));else if(u.kind==="clock"){const F=X().runHours,D=Math.min(F,Math.floor(c.sealed?c.time:0));if(A.push(lt("h2","Clock"),lt("p",`Hour ${D} of ${F}.${j()?" Work is over.":c.paused?" Paused.":""}`)),c.sealed&&!j()){const J=lt("div","","row");J.append(De(c.paused?"Resume":"Pause",()=>wt(" ")),De("Next hour",()=>wt("ArrowRight"))),A.push(J)}}else{const F=at().slice(0,Et());if(A.push(lt("h2","Scoreboard")),Ct()&&A.push(lt("p",c.history.at(-1)?.won?"Goal met.":"Goal not met.","reveal")),A.push(...(F.length?F:["Scores appear after the run."]).map(D=>lt("p",D))),Ct()){const D=q();D.length&&A.push(lt("h3","Why it stayed dark"),...D.map(J=>lt("p",J))),A.push(lt("h3","At the meeting"),...H().map(J=>lt("p",J)))}}b.replaceChildren(x,...A)},e=function(){const k=X().engineers,x=c.plan.engineers.filter(Boolean).length,A="Click a display or a car for details. Drag an engineer onto a car.";if(!N.hidden)return[`Click ${Rt.textContent}.`,[]];if(!V.hidden)return["Answer yes or no for each detection, then click Start the run.",[]];if(c.phase==="end")return["Done. Click Play again to start over.",[]];if(Ct()){const U=c.history.at(-1)?.won,F=l.length>1&&c.phase!=="transfer"?"Next customer":"See results",D=[F,c.phase==="transfer"?yr:xr];return!U&&c.phase!=="transfer"&&wu(c,X())?["Check the scoreboard. Try again, or move on.",[["Try again",()=>tt(()=>{c=Aa(c,l,"revision"),u=null})],[F,D[1]]]]:[`Check the scoreboard, then click ${F}.`,[D]]}return c.sealed?[j()?"Work is over. Watch which detections come up live.":"The 4 hours are running.",[]]:c.phase==="transfer"&&!x?[`New customer: ${X().customer}. Same goal, ${k} engineers, one try. Drag an engineer onto a car.`,[]]:c.phase==="revision"&&!x?[`Second try. Each display shows its last result. ${A}`,[]]:x?x<k?[`${x} of ${k} engineers placed. Place the rest, or click Run the plan.`,[]]:["All engineers placed. Click Run the plan.",[]]:[A,[]]},n=function(){if(!c.sealed)return;const k=et(),x=c.time;for(const A of k.cars)A.fixHour!==null&&x>=A.fixHour&&!Re.has(`fix:${A.id}`)&&(Re.add(`fix:${A.id}`),rt(`Hour ${A.fixHour}. ${ct(A.id).name} is running.`));j()&&!Re.has("over")&&(Re.add("over"),rt(`Hour ${X().runHours}. Work is over.`));for(const A of X().displays)vt(A.id)&&!Re.has(`display:${A.id}`)&&(Re.add(`display:${A.id}`),rt(`${A.name}. ${Gt(A.id).join(" ")}`));Et()>0&&!Re.has("score")&&(Re.add("score"),u={kind:"score",id:""}),c.recorded&&!Re.has("board")&&(Re.add("board"),rt(Y().join(" ")))},i=function(){const k=et(),x=qt();return{cars:X().cars.map(A=>{const U=vl(X(),x,A);return{id:A.id,bay:A.bay,name:A.name,running:U.runningBefore||c.sealed&&U.fixed&&c.time>=(U.fixHour??1/0)?"Running":"Not running",fault:A.state==="blocked"?`${A.fault} Waits on ${A.owner}.`:A.fault||"Nothing to fix.",needed:U.blocked?"Hours do nothing":String(U.needed),engineers:U.engineers,hours:U.hours,balance:U.blocked?`${U.hours} idle`:U.fixHour!==null?`${U.idle} idle`:U.short?`${U.short} short`:U.engineers?`${U.idle} idle`:"",feeds:nt(A).map(F=>Vt(F.id)).join(", ")||"none"}}),displays:X().displays.map(A=>({id:A.id,name:A.name,needs:gt(A).join(" "),switch:T(c.plan.switches[A.id]),state:Gt(A.id).join(" ")||(vt(A.id)?"":"Shown after the run")}))}},r=function(){const k=i(),x=JSON.stringify(k)+Qe(c);if(C.dataset.key===x)return;C.dataset.key=x;const A=ot=>{const yt=lt("tr");yt.append(...ot.map(Tt=>lt("th",Tt)));const pt=lt("thead");return pt.append(yt),pt},U=lt("table");U.append(lt("caption","Cars"),A(["Bay","Car","Status","Fault","Hours needed","Engineers here","Idle or short","Feeds"]));const F=lt("tbody");for(const ot of k.cars){const yt=lt("tr"),pt=De(`${Nt(ot.engineers,"engineer")}, ${ot.hours} hours`,()=>{},"count");pt.addEventListener("keydown",Tt=>{if(!["ArrowUp","ArrowDown"].includes(Tt.key))return;Tt.preventDefault();const Ft=c.plan.engineers.findIndex($t=>$t===null),It=c.plan.engineers.findIndex($t=>$t===ot.id);Tt.key==="ArrowUp"&&Ft>=0?Dt(Ft,ot.id):Tt.key==="ArrowDown"&&It>=0&&Dt(It,null)}),pt.disabled=!Qe(c),yt.append(lt("td",String(ot.bay)),lt("td",ot.name),lt("td",ot.running),lt("td",ot.fault),lt("td",ot.needed),lt("td"),lt("td",ot.balance),lt("td",ot.feeds)),yt.children[5].append(pt),F.append(yt)}U.append(F);const D=lt("table");D.append(lt("caption","Detections"),A(["Detection","Needs","Promised","Result"]));const J=lt("tbody");for(const ot of k.displays){const yt=lt("tr"),pt=De(ot.switch,()=>Wt(ot.id,c.plan.switches[ot.id]==="yes"?"no":"yes"),"count");pt.addEventListener("keydown",Tt=>{Tt.key==="ArrowUp"&&(Tt.preventDefault(),Wt(ot.id,"yes")),Tt.key==="ArrowDown"&&(Tt.preventDefault(),Wt(ot.id,"no"))}),pt.disabled=!Qe(c),yt.append(lt("td",ot.name),lt("td",ot.needs),lt("td"),lt("td",ot.state)),yt.children[2].append(pt),J.append(yt)}D.append(J),C.replaceChildren(lt("h2","List view"),lt("p","On an engineer count, Up adds one and Down removes one. On a detection, click to switch yes and no.","small"),U,D,De("Close list",()=>{C.hidden=!0,yn.setAttribute("aria-expanded","false"),yn.focus()}))},o=function(){const k=c.history.filter(pt=>pt.phase==="transfer").at(-1),A=go(c).slice().sort((pt,Tt)=>Tt.lit.length-pt.lit.length||pt.promisedNotShown-Tt.promisedNotShown)[0],U=l[l.length-1],F=lt("div","","sheet");W.replaceChildren(F);const D=lt("table","","result-table"),J=lt("tr");["Customer","Detections live","Promised but dark","Worked but not promised"].forEach(pt=>J.append(lt("th",pt))),D.append(J);const ot=(pt,Tt,Ft,It,$t)=>{const se=lt("tr");se.append(lt("td",pt),lt("td",`${Tt} of ${Ft}`),lt("td",String(It),It?"bad":""),lt("td",String($t),$t?"bad":"")),D.append(se)};A&&ot(`${Yt(l[0].customer)} (best try)`,A.lit.length,l[0].displays.length,A.promisedNotShown,A.shownNotPromised),k&&ot("Second customer",k.lit.length,U.displays.length,k.promisedNotShown,k.shownNotPromised);const yt="Count readiness by detections, not by cars. Put hours where a promised detection finishes. Tell the customer which ones will not be ready.";F.append(lt("h2",[A,k].filter(Boolean).every(pt=>pt.won)?"Goal met with every customer":`Goal met with ${[A,k].filter(pt=>pt?.won).length} of ${[A,k].filter(Boolean).length} customers`),D,lt("p",yt,"takeaway"),De("Play again",Pt,"primary")),W.hidden&&(W.hidden=!1,rt(yt),W.querySelector("button").focus({preventScroll:!0}))},a=function(){if(!V.hidden){if(Rs!==X().id){Rs=X().id,Li.length=0;const k=X().displays.map(A=>{const U=lt("div","","ask");U.append(lt("p",A.name));const F=lt("div","","row");for(const D of["yes","no"]){const J=De(T(D),()=>Wt(A.id,D));J.setAttribute("aria-label",`${T(D)}, ${A.name}`),Li.push({id:A.id,value:D,control:J}),F.append(J)}return U.append(F),U});Cn=De("Start the run",ft,"primary");const x=lt("div","","row");x.append(Cn,De("Back",xt)),Z.replaceChildren(lt("h2","Which detections will work?"),lt("p","The customer will test each one. Answer yes for each one you promise will work."),...k,x)}for(const k of Li)k.control.setAttribute("aria-pressed",String(c.plan.switches[k.id]===k.value));Cn&&(Cn.disabled=!et().allSet)}},h=function(){Co(),M.hidden=!N.hidden,S.classList.toggle("dim",!N.hidden),Rt.textContent=c.phase==="intro"?"Start":"Close",oe.hidden=c.phase==="intro";const k=At();for(const U of bt())U.inert=k;`${c.phase}:${c.sealed}`!==vr&&(vr=`${c.phase}:${c.sealed}`,st?.snapNext());const[x,A]=e();if(Ts(x,A),c.phase==="end"?o():W.hidden=!0,k!==At())for(const U of bt())U.inert=At();n(),t(),a(),C.hidden||r(),st?.update(Cs(),0)};const l=cy(window.__ENGINE_CONTENT__,Object.hasOwn(window,"__ENGINE_CONTENT__"));let c=Ea(l[0]),u=null,f=null;const d=Ex({sfx:{"touch-car":Ax,"touch-display":wx,drop:Tx,switch:Rx,release:Cx,hour:Px,"fix-done":Lx,"roll-out":Dx,live:Ix,dark:Ux,"call-wrong":Nx,scoreboard:Fx},storageKey:"pit-lane.muted"});window.__dbg={audio:d};const g=matchMedia("(prefers-reduced-motion: reduce)"),_=()=>g.matches?1:3,m=()=>g.matches?5:1,p=_y();let E=!1;const S=lt("header","","top"),y=lt("h1","The Pit Lane"),R=lt("div","","utility");S.append(y,R);const w=lt("div","","frame"),C=lt("section","","list");C.hidden=!0,C.setAttribute("aria-label","List view");const I=lt("div","","lane"),b=lt("aside","","details");b.hidden=!0,b.setAttribute("aria-label","Details"),b.tabIndex=-1,w.append(I,b,C);const M=lt("section","","guide");M.setAttribute("aria-label","What to do now");const P=lt("p","","instruction");P.id="instruction";const B=lt("div","","guide-actions"),G=lt("p","","status");G.setAttribute("role","status"),M.append(P,B,G);const $=lt("div","","sr-only");$.setAttribute("aria-live","polite");const N=lt("section","","overlay intro"),V=lt("section","","overlay promise");V.hidden=!0,V.setAttribute("aria-label","What you are promising");const Z=lt("div","","sheet");V.append(Z);const W=lt("section","","overlay end");W.hidden=!0,Ph.replaceChildren(S,w,M,N,V,W,$);const X=()=>Zl(l,c),et=()=>ql(X(),c.plan),ct=k=>X().cars.find(x=>x.id===k),Ut=k=>X().displays.find(x=>x.id===k),Vt=k=>Ut(k).name,Nt=(k,x)=>`${k} ${x}${k===1?"":"s"}`,Yt=k=>k.charAt(0).toUpperCase()+k.slice(1),K=k=>k.length<=1?k.join(""):`${k.slice(0,-1).join(", ")} and ${k.at(-1)}`,j=()=>c.sealed&&c.time>=X().runHours,vt=k=>j()&&c.roll>=hs(X(),et()).resolves[k],Ct=()=>c.sealed&&c.recorded,Et=()=>{if(!j())return 0;const k=hs(X(),et()).board;return Math.max(0,Math.min(5,Math.floor((c.roll-k)/Vn.row)+1))},qt=()=>{if(!f||c.sealed)return c.plan;const k=c.plan.engineers.slice();return k[f.index]=f.carId,{...c.plan,engineers:k}};let re=!1;const L=()=>{try{localStorage.setItem(ro(l),my(l,c)),re=!1}catch{re||(G.textContent="Could not save progress in this browser."),re=!0}},rt=k=>{$.textContent="",setTimeout(()=>{$.textContent=k},50)},tt=k=>{try{k(),L(),h()}catch(x){G.textContent=x.message}},it=()=>{const k=st?.labelFor(u);u=null,h(),k?.focus({preventScroll:!0})},nt=k=>X().displays.filter(x=>x.needs.some(A=>A.car===k.id)),gt=k=>k.needs.map(x=>`${x.field} from ${ct(x.car).name}: ${ht(x)?"sending":"missing"}`),ht=k=>{const x=ct(k.car),A=et().cars.find(F=>F.id===k.car);return j()&&c.roll>=(hs(X(),et()).departs[k.car]??1/0)+Vn.car*.5?A.sending.includes(k.field):x.state==="running"&&!x.missing.includes(k.field)},_t=k=>{const x=et().displays.find(A=>A.id===k).missing[0];return x?` Missing: ${x.field} from ${ct(x.car).name}.`:""},Gt=k=>{const x=[],A=c.plan.switches[k],U=et().displays.find(F=>F.id===k).lit;return vt(k)?(x.push(U?"Result: live.":`Result: dark.${_t(k)}`),A==="yes"&&!U&&x.push("You promised it. It did not work."),A==="no"&&U&&x.push("You said no. It worked anyway.")):Ht()&&x.push(`Last run: ${Ht().includes(k)?"live":"dark"}.`),x},Ht=()=>c.phase==="revision"&&!c.sealed?go(c).at(-1)?.lit??null:null,T=k=>k==="yes"?"Yes":k==="no"?"No":"Not answered",v=k=>{const x=c.plan.switches[k];return x==="unset"?"Promised: not answered yet.":x==="yes"?"Promised: yes.":"Promised: no."},H=()=>{const k=et(),x=X().displays.filter(U=>c.plan.switches[U.id]==="yes").map(U=>U.name),A=X().displays.filter(U=>k.displays.find(F=>F.id===U.id).lit).map(U=>U.name);return[`You promised: ${x.length?x.join(", "):"none"}.`,`The customer saw: ${A.length?A.join(", "):"none"}.`,...k.promisedNotShown.map(U=>`Promised but dark: ${Ut(U).name}.`),...k.shownNotPromised.map(U=>`Worked but not promised: ${Ut(U).name}.`)]},q=()=>{const k=et();return X().displays.filter(x=>!k.displays.find(A=>A.id===x.id).lit).flatMap(x=>{const A=k.displays.find(D=>D.id===x.id).missing,U=[...new Set(A.map(D=>D.car))].map(D=>k.cars.find(J=>J.id===D)),F=U.find(D=>D.blocked);if(F){const D=ct(F.id);return[`${x.name}: ${D.name} waits on ${D.owner}.`]}return U.length!==1||U[0].short===0?[]:[`${x.name}: ${ct(U[0].id).name} got ${U[0].hours} of ${Nt(U[0].needed,"hour")}.`]})},at=()=>{const k=et();return[`Cars running: ${k.running} of ${X().cars.length}`,`Detections live: ${k.lit} of ${X().displays.length}`,`Promises kept: ${k.kept.length}`,`Promised but dark: ${k.promisedNotShown.length}`,`Worked but not promised: ${k.shownNotPromised.length}`]},Y=()=>{const k=at().slice(0,Et());return Ct()?[...k,...q(),...H()]:k.length?k:["Scores appear after the run."]},Lt=()=>tt(()=>{N.hidden=!0,c.phase==="intro"&&(c={...c,phase:"own",plan:Ea(l[0]).plan})}),mt=()=>{N.hidden=!1,ze(),V.hidden=!0,C.hidden=!0,h(),Q.querySelector(".primary").focus({preventScroll:!0})},Pt=()=>{try{localStorage.removeItem(ro(l))}catch{}c=Ea(l[0]),u=null,p.connected||(E=!1),W.hidden=!0,V.hidden=!0,N.hidden=!1,C.hidden=!0,h()},At=()=>!N.hidden||!W.hidden||!V.hidden,ut=document.querySelector(".skip"),bt=()=>[S,w,M,...ut?[ut]:[]],Ot=(k,x)=>tt(()=>{if(At())return;if(k==="car"&&!x){u=null;return}const A=u&&u.kind===k&&u.id===x;u=A?null:{kind:k,id:x},!A&&(k==="car"||k==="display")&&x&&d.play(k==="car"?"touch-car":"touch-display",{gain:.7})}),Dt=(k,x,A=!0)=>tt(()=>{Qe(c)&&(c=uy(c,k,x),A&&d.play("drop",{gain:.8}),u=x?{kind:"car",id:x}:{kind:"engineer",id:String(k)})}),Mt=(k,x)=>{if(!Qe(c))return;const A=X().cars,U=c.plan.engineers[k],F=U?A.findIndex(J=>J.id===U)+1:0,D=x==="bench"?0:Math.max(0,Math.min(A.length,F+(x==="right"?1:-1)));Dt(k,D?A[D-1].id:null,!1)},Wt=(k,x)=>tt(()=>{Qe(c)&&(c.plan.switches[k]!==x&&d.play("switch",{gain:.7}),c=dy(c,k,x))}),O=()=>{if(!At()){if(!Qe(c)){Ot("release","");return}u=null,st?.labelFor({kind:"release",id:""})?.blur(),V.hidden=!1,h(),Z.querySelector("button")?.focus({preventScroll:!0})}},ft=()=>tt(()=>{!Qe(c)||!et().allSet||(c=fy(c,X()),u=null,V.hidden=!0,d.play("release"),st?.started.clear(),st?.lit.clear(),st?.departed.clear(),Re.clear(),st?.snapNext(),rt("The plan is locked. The 4 hours are running."))}),xt=()=>{V.hidden=!0,h(),st?.labelFor({kind:"release",id:""})?.focus({preventScroll:!0})},wt=k=>{if(At()||!c.sealed||c.recorded||j())return;if(k===" "){c={...c,paused:!c.paused},L(),h();return}const x=c.paused;c={...c,paused:!1},Ps(_()),x&&!c.recorded&&(c={...c,paused:!0},L(),h())};let st=null;try{st=new bx(I,{touch:Ot,place:Dt,hover:(k,x)=>{f=k<0?null:{index:k,carId:x},h()},nudge:Mt,release:O,clockKey:wt}),st.onStart=()=>d.play("fix-done"),st.onDepart=()=>d.play("roll-out",{gain:.8}),st.onResolve=(k,x)=>{d.play(k?"live":"dark"),x&&setTimeout(()=>d.play("call-wrong"),450)}}catch{G.textContent="The 3D view could not start. Use List view.",document.body.classList.add("no-webgl"),C.hidden=!1}I.addEventListener("scene-lost",()=>{G.textContent="The 3D view stopped. Reload the page.",document.body.classList.add("no-webgl")});const Q=lt("div","","sheet");N.append(Q);const Rt=De("Start",Lt,"primary"),Xt=lt("ol");Xt.append(lt("li","Click a display to see which data sources it needs."),lt("li","Click a car to see what is broken and how many hours it needs."),lt("li",`Drag an engineer onto a car to give it ${Nt(X().runHours,"hour")}.`),lt("li","Click Run the plan. Answer yes or no for each detection, then click Start the run."),lt("li","Watch which detections come up live."));const oe=lt("p","Keyboard: Tab to an engineer. Left and Right arrows move them between bays. Up sends them to the bench. During a run, Space pauses and Right arrow skips an hour. Esc closes a panel.","small keys");Q.append(lt("h2","The Pit Lane"),lt("p","Fix data sources before a proof-of-value results meeting.","subtitle"),lt("h3","The situation"),lt("p",`${Yt(X().customer)} will test ${Nt(X().displays.length,"detection")} at a results meeting. Each car is a data source that feeds them. Some are broken. You have ${Nt(X().engineers,"engineer")} with ${Nt(X().runHours,"hour")} each.`),lt("h3","Your goal"),lt("p",`Get at least ${Nt(X().win.displaysLit,"detection")} working, and tell them which ones will work.`),lt("h3","What to do"),Xt,oe);const ee=lt("div","","foot"),nn=lt("p","More below.","more");ee.append(nn,Rt),Q.append(ee);const ze=()=>{nn.hidden=Q.scrollHeight-Q.scrollTop-Q.clientHeight<8};Q.addEventListener("scroll",ze),new ResizeObserver(ze).observe(Q);const yn=De("List view",()=>{C.hidden=!C.hidden,yn.setAttribute("aria-expanded",String(!C.hidden)),h()});yn.setAttribute("aria-expanded","false");const Rn=d.mountToggle(De("Sound on",()=>{}));R.append(De("Help",mt),yn,Rn,De("Restart",Pt));const Ts=(k,x=[])=>{P.textContent!==k&&(P.textContent=k);const A=x.map(([U])=>U).join("|");B.dataset.key!==A&&(B.dataset.key=A,B.replaceChildren(...x.map(([U,F])=>De(U,F,"primary")))),B.hidden=!x.length},xr=()=>tt(()=>{c=Aa(c,l,l.length>1?"transfer":"end"),u=null}),yr=()=>tt(()=>{const x=go(c).slice().sort((U,F)=>F.lit.length-U.lit.length||U.promisedNotShown-F.promisedNotShown)[0],A=c.history.filter(U=>U.phase==="transfer").at(-1);if(c=Aa(c,l,"end"),u=null,!E){E=!0;const U=[x&&{record:x,total:l[0].displays.length},A&&{record:A,total:l[l.length-1].displays.length}].filter(ot=>!!ot),F=U.reduce((ot,yt)=>ot+yt.record.lit.length,0),D=U.reduce((ot,yt)=>ot+yt.total,0),J=U.every(ot=>ot.record.won);p.connected&&p.finish({score:D?Math.round(F/D*100):100,max:100,passed:J})}}),Re=new Set,Li=[];let Cn=null,Rs="";const Cs=()=>({pack:X(),session:c,outcome:et(),selection:u,plan:qt(),lastStop:Ht(),scoreRows:Et()});let vr="",Mr="";const Co=()=>{const k=JSON.stringify(X().theme??null);if(Mr===k)return;Mr=k;const x=Eu(X());document.documentElement.style.setProperty("--amber",So(x.displayAmber)),document.documentElement.style.setProperty("--red",So(x.brokenPromiseRed))},Ps=(k,x=!0)=>{if(!c.sealed||c.recorded||c.paused)return;const A=Math.floor(c.time),U=Et();c=py(c,X(),k,_(),m()),Math.floor(c.time)>A&&c.time<=X().runHours&&d.play("hour",{gain:.4}),U===0&&Et()>0&&d.play("scoreboard"),x&&(L(),h())};let Ls=0;st&&(st.stage.frame=k=>{Ls+=k;const x=Ls>=.1;x&&(Ls=0);const A=c.recorded;c.sealed&&!c.recorded&&!c.paused&&Ps(k,x),!A&&c.recorded&&(L(),h()),st?.update(Cs(),k)}),window.advanceTime=k=>{if(!Number.isFinite(k)||k<0)throw Error("Time must be finite and positive.");Ps(k/1e3),L(),h()},window.render_game_to_text=()=>JSON.stringify({engine:"pit-lane",renderer:st?"threejs":"none",phase:c.phase,time:c.time,roll:c.roll,sealed:c.sealed,paused:c.paused,recorded:c.recorded,pack:X().id,introVisible:!N.hidden,promiseVisible:!V.hidden,endVisible:!W.hidden,instruction:P.textContent,actions:[...B.querySelectorAll("button")].map(k=>k.textContent),selection:u,panel:b.hidden?null:[...b.querySelectorAll("h2,h3,p")].map(k=>k.textContent).join(" "),controls:{engineers:c.plan.engineers,switches:c.plan.switches,released:c.sealed},outcome:(({running:k,lit:x,kept:A,promisedNotShown:U,shownNotPromised:F,won:D,allSet:J})=>({running:k,lit:x,kept:A,promisedNotShown:U,shownNotPromised:F,won:D,allSet:J}))(et()),displays:et().displays,scoreboard:Y(),rows:i(),history:c.history,labels:st?.stage.labels.map(k=>({name:k.element.textContent,hidden:k.element.hidden,rect:(({left:x,top:A,width:U,height:F})=>({left:x,top:A,width:U,height:F}))(k.element.getBoundingClientRect())})),objects:st?.stage.describeObjects(),drawCalls:st?.stage.renderer.info.render.calls}),window.addEventListener("pagehide",()=>{L()}),window.addEventListener("keydown",k=>{if(!N.hidden&&k.key==="Tab"){k.preventDefault(),Q.querySelector("button").focus({preventScroll:!0});return}if(k.key==="Escape"){if(!V.hidden){xt();return}if(!N.hidden&&c.phase!=="intro"){Lt();return}if(!C.hidden){C.hidden=!0,yn.setAttribute("aria-expanded","false"),yn.focus();return}u&&it()}});try{const k=localStorage.getItem(ro(l));if(k){const x=gy(k,l);x.phase!=="intro"&&(c=x,N.hidden=!0)}}catch{try{localStorage.removeItem(ro(l))}catch{}}h(),N.hidden||Q.querySelector("button").focus({preventScroll:!0})}catch(s){Ph.replaceChildren(lt("h1","The Pit Lane could not load"),lt("p",s.message))}
