var Qo=Object.defineProperty;var ec=(i,e,t)=>e in i?Qo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var qe=(i,e,t)=>ec(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ft="srgb",fi="srgb-linear",Ar="linear",st="srgb";const Ws="300 es";class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xs=1234567;const Pi=Math.PI/180,Ni=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Rs(i,e){return(i%e+e)%e}function tc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nc(i,e,t){return i!==e?(t-i)/(e-i):0}function Di(i,e,t){return(1-t)*i+t*e}function ic(i,e,t,n){return Di(i,e,1-Math.exp(-t*n))}function rc(i,e=1){return e-Math.abs(Rs(i,e*2)-e)}function sc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ac(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function oc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cc(i,e){return i+Math.random()*(e-i)}function lc(i){return i*(.5-Math.random())}function uc(i){i!==void 0&&(Xs=i);let e=Xs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hc(i){return i*Pi}function dc(i){return i*Ni}function fc(i){return(i&i-1)===0&&i!==0}function pc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Br={DEG2RAD:Pi,RAD2DEG:Ni,generateUUID:zn,clamp:Ze,euclideanModulo:Rs,mapLinear:tc,inverseLerp:nc,lerp:Di,damp:ic,pingpong:rc,smoothstep:sc,smootherstep:ac,randInt:oc,randFloat:cc,randFloatSpread:lc,seededRandom:uc,degToRad:hc,radToDeg:dc,isPowerOfTwo:fc,ceilPowerOfTwo:pc,floorPowerOfTwo:mc,setQuaternionFromProperEuler:gc,normalize:Lt,denormalize:li};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(h!==_||c!==f||l!==p||u!==v){let m=1-o;const d=c*f+l*p+u*v+h*_,C=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),A=Math.atan2(b,d*C);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const g=o*C;if(c=c*m+f*g,l=l*m+p*g,u=u*m+v*g,h=h*m+_*g,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*h+c*p-l*f,e[t+1]=c*v+u*f+l*h-o*p,e[t+2]=l*v+u*p+o*f-c*h,e[t+3]=u*v-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h+f*p*v;break;case"YZX":this._x=f*u*h+l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h-f*p*v;break;case"XZY":this._x=f*u*h-l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ys.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ys.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new L,Ys=new Hi;class He{constructor(e,t,n,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],v=n[8],_=r[0],m=r[3],d=r[6],C=r[1],x=r[4],g=r[7],b=r[2],A=r[5],P=r[8];return s[0]=a*_+o*C+c*b,s[3]=a*m+o*x+c*A,s[6]=a*d+o*g+c*P,s[1]=l*_+u*C+h*b,s[4]=l*m+u*x+h*A,s[7]=l*d+u*g+h*P,s[2]=f*_+p*C+v*b,s[5]=f*m+p*x+v*A,s[8]=f*d+p*g+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,v=t*h+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new He;function lo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _c(){const i=Oi("canvas");return i.style.display="block",i}const $s={};function Bi(i){i in $s||($s[i]=!0,console.warn(i))}function vc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Zs=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ks=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xc(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ar:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Ar,toXYZ:Zs,fromXYZ:Ks,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Zs,fromXYZ:Ks,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const Qe=xc();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hn;class Sc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hn===void 0&&(Hn=Oi("canvas")),Hn.width=e.width,Hn.height=e.height;const r=Hn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Hn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yc=0;class Ps{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gr(r[a].image)):s.push(Gr(r[a]))}else s=Gr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mc=0;const Vr=new L;class bt extends gi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=bt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=zn(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vr).x}get height(){return this.source.getSize(Vr).y}get depth(){return this.source.getSize(Vr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=300;bt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],v=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,g=(p+1)/2,b=(d+1)/2,A=(u+f)/4,P=(h+_)/4,I=(v+m)/4;return x>g&&x>b?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=P/n):g>b?g<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),n=A/r,s=I/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=P/s,r=I/s),this.set(n,r,s,t),this}let C=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(h-_)/C,this.z=(f-u)/C,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ec extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new bt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uo extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ac extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),$i.subVectors(this.max,Si),qn.subVectors(e.a,Si),Wn.subVectors(e.b,Si),Xn.subVectors(e.c,Si),mn.subVectors(Wn,qn),gn.subVectors(Xn,Wn),Cn.subVectors(qn,Xn);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Cn.z,Cn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Cn.z,0,-Cn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Cn.y,Cn.x,0];return!Hr(t,qn,Wn,Xn,$i)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,qn,Wn,Xn,$i))?!1:(Zi.crossVectors(mn,gn),t=[Zi.x,Zi.y,Zi.z],Hr(t,qn,Wn,Xn,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new L,new L,new L,new L,new L,new L,new L,new L],$t=new L,Yi=new kn,qn=new L,Wn=new L,Xn=new L,mn=new L,gn=new L,Cn=new L,Si=new L,$i=new L,Zi=new L,Rn=new L;function Hr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const o=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),c=e.dot(Rn),l=t.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Tc=new kn,yi=new L,qr=new L;class _i{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(qr)),this.expandByPoint(yi.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const un=new L,Wr=new L,Ki=new L,_n=new L,Xr=new L,Ji=new L,Yr=new L;class Ds{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wr.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Wr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=_n.dot(this.direction),c=-_n.dot(Ki),l=_n.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*c-o,f=a*o-c,v=s*u,h>=0)if(f>=-v)if(f<=v){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wr).addScaledVector(Ki,f),p}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){Xr.subVectors(t,e),Ji.subVectors(n,e),Yr.crossVectors(Xr,Ji);let a=this.direction.dot(Yr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const c=o*this.direction.dot(Ji.crossVectors(_n,Ji));if(c<0)return null;const l=o*this.direction.dot(Xr.cross(_n));if(l<0||c+l>a)return null;const u=-o*_n.dot(Yr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,a,o,c,l,u,h,f,p,v,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,p,v,_,m)}set(e,t,n,r,s,a,o,c,l,u,h,f,p,v,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,v=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+v*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=v+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,v=l*u,_=l*h;t[0]=f+_*o,t[4]=v*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,v=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,v=o*u,_=o*h;t[0]=c*u,t[4]=v*l-p,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,v=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+v,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,p=a*l,v=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bc,e,wc)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),vn.crossVectors(n,zt),vn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),vn.crossVectors(n,zt)),vn.normalize(),ji.crossVectors(zt,vn),r[0]=vn.x,r[4]=ji.x,r[8]=zt.x,r[1]=vn.y,r[5]=ji.y,r[9]=zt.y,r[2]=vn.z,r[6]=ji.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],v=n[2],_=n[6],m=n[10],d=n[14],C=n[3],x=n[7],g=n[11],b=n[15],A=r[0],P=r[4],I=r[8],E=r[12],y=r[1],D=r[5],O=r[9],G=r[13],W=r[2],Y=r[6],X=r[10],ie=r[14],q=r[3],he=r[7],xe=r[11],fe=r[15];return s[0]=a*A+o*y+c*W+l*q,s[4]=a*P+o*D+c*Y+l*he,s[8]=a*I+o*O+c*X+l*xe,s[12]=a*E+o*G+c*ie+l*fe,s[1]=u*A+h*y+f*W+p*q,s[5]=u*P+h*D+f*Y+p*he,s[9]=u*I+h*O+f*X+p*xe,s[13]=u*E+h*G+f*ie+p*fe,s[2]=v*A+_*y+m*W+d*q,s[6]=v*P+_*D+m*Y+d*he,s[10]=v*I+_*O+m*X+d*xe,s[14]=v*E+_*G+m*ie+d*fe,s[3]=C*A+x*y+g*W+b*q,s[7]=C*P+x*D+g*Y+b*he,s[11]=C*I+x*O+g*X+b*xe,s[15]=C*E+x*G+g*ie+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*p-n*c*p)+_*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],C=h*m*l-_*f*l+_*c*p-o*m*p-h*c*d+o*f*d,x=v*f*l-u*m*l-v*c*p+a*m*p+u*c*d-a*f*d,g=u*_*l-v*h*l+v*o*p-a*_*p-u*o*d+a*h*d,b=v*h*c-u*_*c-v*o*f+a*_*f+u*o*m-a*h*m,A=t*C+n*x+r*g+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=C*P,e[1]=(_*f*s-h*m*s-_*r*p+n*m*p+h*r*d-n*f*d)*P,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*d+n*c*d)*P,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*p-n*c*p)*P,e[4]=x*P,e[5]=(u*m*s-v*f*s+v*r*p-t*m*p-u*r*d+t*f*d)*P,e[6]=(v*c*s-a*m*s-v*r*l+t*m*l+a*r*d-t*c*d)*P,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*p+t*c*p)*P,e[8]=g*P,e[9]=(v*h*s-u*_*s-v*n*p+t*_*p+u*n*d-t*h*d)*P,e[10]=(a*_*s-v*o*s+v*n*l-t*_*l-a*n*d+t*o*d)*P,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*p-t*o*p)*P,e[12]=b*P,e[13]=(u*_*r-v*h*r+v*n*f-t*_*f-u*n*m+t*h*m)*P,e[14]=(v*o*r-a*_*r-v*n*c+t*_*c+a*n*m-t*o*m)*P,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,v=s*h,_=a*u,m=a*h,d=o*h,C=c*l,x=c*u,g=c*h,b=n.x,A=n.y,P=n.z;return r[0]=(1-(_+d))*b,r[1]=(p+g)*b,r[2]=(v-x)*b,r[3]=0,r[4]=(p-g)*A,r[5]=(1-(f+d))*A,r[6]=(m+C)*A,r[7]=0,r[8]=(v+x)*P,r[9]=(m-C)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const a=Yn.set(r[4],r[5],r[6]).length(),o=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,u=1/a,h=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let v,_;if(c)v=s/(a-s),_=a*s/(a-s);else if(o===2e3)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,_;if(c)v=1/(a-s),_=a/(a-s);else if(o===2e3)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yn=new L,Zt=new ot,bc=new L(0,0,0),wc=new L(1,1,1),vn=new L,ji=new L,zt=new L,Js=new ot,js=new Hi;class tn{constructor(e=0,t=0,n=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return js.setFromEuler(this),this.setFromQuaternion(js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cc=0;const Qs=new L,$n=new Hi,hn=new ot,Qi=new L,Mi=new L,Rc=new L,Pc=new Hi,ea=new L(1,0,0),ta=new L(0,1,0),na=new L(0,0,1),ia={type:"added"},Dc={type:"removed"},Zn={type:"childadded",child:null},$r={type:"childremoved",child:null};class Mt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new tn,n=new Hi,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new He}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(ea,e)}rotateY(e){return this.rotateOnAxis(ta,e)}rotateZ(e){return this.rotateOnAxis(na,e)}translateOnAxis(e,t){return Qs.copy(e).applyQuaternion(this.quaternion),this.position.add(Qs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ea,e)}translateY(e){return this.translateOnAxis(ta,e)}translateZ(e){return this.translateOnAxis(na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Mi,Qi,this.up):hn.lookAt(Qi,Mi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(hn),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ia),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ia),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,Rc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Pc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,dn=new L,Zr=new L,fn=new L,Kn=new L,Jn=new L,ra=new L,Kr=new L,Jr=new L,jr=new L,Qr=new at,es=new at,ts=new at;class Qt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),dn.subVectors(n,t),Zr.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(dn),c=Kt.dot(Zr),l=dn.dot(dn),u=dn.dot(Zr),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,v=(a*u-o*c)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Qr.setScalar(0),es.setScalar(0),ts.setScalar(0),Qr.fromBufferAttribute(e,t),es.fromBufferAttribute(e,n),ts.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qr,s.x),a.addScaledVector(es,s.y),a.addScaledVector(ts,s.z),a}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),dn.subVectors(e,t),Kt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Kt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Kn.subVectors(r,n),Jn.subVectors(s,n),Kr.subVectors(e,n);const c=Kn.dot(Kr),l=Jn.dot(Kr);if(c<=0&&l<=0)return t.copy(n);Jr.subVectors(e,r);const u=Kn.dot(Jr),h=Jn.dot(Jr);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Kn,a);jr.subVectors(e,s);const p=Kn.dot(jr),v=Jn.dot(jr);if(v>=0&&p<=v)return t.copy(s);const _=p*l-c*v;if(_<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Jn,o);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return ra.subVectors(s,r),o=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(ra,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Kn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},er={h:0,s:0,l:0};function ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Rs(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ns(a,s,e+1/3),this.g=ns(a,s,e),this.b=ns(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=ho[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Qe.workingToColorSpace(Ct.copy(this),e),Math.round(Ze(Ct.r*255,0,255))*65536+Math.round(Ze(Ct.g*255,0,255))*256+Math.round(Ze(Ct.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Ft){Qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(er);const n=Di(xn.h,er.h,t),r=Di(xn.s,er.s,t),s=Di(xn.l,er.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ye;Ye.NAMES=ho;let Lc=0;class Gn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fo extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new L,tr=new ge;let Ic=0;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ic++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class po extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mo extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uc=0;const Wt=new ot,is=new Mt,jn=new L,kt=new kn,Ei=new kn,Tt=new L;class nn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lo(e)?mo:po)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(kt.min,Ei.min),kt.expandByPoint(Tt),Tt.addVectors(kt.max,Ei.max),kt.expandByPoint(Tt)):(kt.expandByPoint(Ei.min),kt.expandByPoint(Ei.max))}kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Tt.fromBufferAttribute(o,l),c&&(jn.fromBufferAttribute(e,l),Tt.add(jn)),r=Math.max(r,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new L,c[I]=new L;const l=new L,u=new L,h=new L,f=new ge,p=new ge,v=new ge,_=new L,m=new L;function d(I,E,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,y),u.sub(l),h.sub(l),p.sub(f),v.sub(f);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),o[I].add(_),o[E].add(_),o[y].add(_),c[I].add(m),c[E].add(m),c[y].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let I=0,E=C.length;I<E;++I){const y=C[I],D=y.start,O=y.count;for(let G=D,W=D+O;G<W;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new L,g=new L,b=new L,A=new L;function P(I){b.fromBufferAttribute(r,I),A.copy(b);const E=o[I];x.copy(E),x.sub(b.multiplyScalar(b.dot(E))).normalize(),g.crossVectors(A,E);const D=g.dot(c[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,D)}for(let I=0,E=C.length;I<E;++I){const y=C[I],D=y.start,O=y.count;for(let G=D,W=D+O;G<W;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,v=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let d=0;d<u;d++)f[v++]=l[p++]}return new en(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sa=new ot,Pn=new Ds,nr=new _i,aa=new L,ir=new L,rr=new L,sr=new L,rs=new L,ar=new L,oa=new L,or=new L;class ht extends Mt{constructor(e=new nn,t=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ar.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(rs.fromBufferAttribute(h,e),a?ar.addScaledVector(rs,u):ar.addScaledVector(rs.sub(t),u))}t.add(ar)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),Pn.copy(e.ray).recast(e.near),!(nr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(nr,aa)===null||Pn.origin.distanceToSquared(aa)>(e.far-e.near)**2))&&(sa.copy(s).invert(),Pn.copy(e.ray).applyMatrix4(sa),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const m=f[v],d=a[m.materialIndex],C=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=C,b=x;g<b;g+=3){const A=o.getX(g),P=o.getX(g+1),I=o.getX(g+2);r=cr(this,d,e,n,l,u,h,A,P,I),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const C=o.getX(m),x=o.getX(m+1),g=o.getX(m+2);r=cr(this,a,e,n,l,u,h,C,x,g),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const m=f[v],d=a[m.materialIndex],C=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=C,b=x;g<b;g+=3){const A=g,P=g+1,I=g+2;r=cr(this,d,e,n,l,u,h,A,P,I),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const C=m,x=m+1,g=m+2;r=cr(this,a,e,n,l,u,h,C,x,g),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fc(i,e,t,n,r,s,a,o){let c;if(e.side===1?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===0,o),c===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(or);return l<t.near||l>t.far?null:{distance:l,point:or.clone(),object:i}}function cr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,ir),i.getVertexPosition(c,rr),i.getVertexPosition(l,sr);const u=Fc(i,e,t,n,ir,rr,sr,oa);if(u){const h=new L;Qt.getBarycoord(oa,ir,rr,sr,h),r&&(u.uv=Qt.getInterpolatedAttribute(r,o,c,l,h,new ge)),s&&(u.uv1=Qt.getInterpolatedAttribute(s,o,c,l,h,new ge)),a&&(u.normal=Qt.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};Qt.getNormal(ir,rr,sr,f.normal),u.face=f,u.barycoord=h}return u}class Tn extends nn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function v(_,m,d,C,x,g,b,A,P,I,E){const y=g/P,D=b/I,O=g/2,G=b/2,W=A/2,Y=P+1,X=I+1;let ie=0,q=0;const he=new L;for(let xe=0;xe<X;xe++){const fe=xe*D-G;for(let Oe=0;Oe<Y;Oe++){const Ke=Oe*y-O;he[_]=Ke*C,he[m]=fe*x,he[d]=W,l.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[d]=A>0?1:-1,u.push(he.x,he.y,he.z),h.push(Oe/P),h.push(1-xe/I),ie+=1}}for(let xe=0;xe<I;xe++)for(let fe=0;fe<P;fe++){const Oe=f+fe+Y*xe,Ke=f+fe+Y*(xe+1),Xe=f+(fe+1)+Y*(xe+1),$e=f+(fe+1)+Y*xe;c.push(Oe,Ke,$e),c.push(Ke,Xe,$e),q+=6}o.addGroup(p,q,E),p+=q,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Nc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function go(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Oc={clone:pi,merge:It};var Bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Nc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _o extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new L,ca=new ge,la=new ge;class Vt extends _o{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ni*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,ca,la),t.subVectors(la,ca)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ei=1;class kc extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Qn,ei,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Qn,ei,e,t);s.layers=this.layers,this.add(s);const a=new Vt(Qn,ei,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Qn,ei,e,t);o.layers=this.layers,this.add(o);const c=new Vt(Qn,ei,e,t);c.layers=this.layers,this.add(c);const l=new Vt(Qn,ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class vo extends bt{constructor(e=[],t=301,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new ht(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new kc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class St extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vc={type:"move"};class ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;l.inputState.pinching&&f>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new Pr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xo extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hc extends bt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,u=1003,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua extends en{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ti=new ot,ha=new ot,lr=[],da=new kn,qc=new ot,Ai=new ht,Ti=new _i;class Wc extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,qc)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ti),da.copy(e.boundingBox).applyMatrix4(ti),this.boundingBox.union(da)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ti),Ti.copy(e.boundingSphere).applyMatrix4(ti),this.boundingSphere.union(Ti)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ti.copy(this.boundingSphere),Ti.applyMatrix4(n),e.ray.intersectsSphere(Ti)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ti),ha.multiplyMatrices(n,ti),Ai.matrixWorld=ha,Ai.raycast(e,lr);for(let a=0,o=lr.length;a<o;a++){const c=lr[a];c.instanceId=s,c.object=this,t.push(c)}lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hc(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const as=new L,Xc=new L,Yc=new He;class Mn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=as.subVectors(n,t).cross(Xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(as),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yc.getNormalMatrix(e),r=this.coplanarPoint(as).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new _i,$c=new ge(.5,.5),ur=new L;class Is{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],v=s[8],_=s[9],m=s[10],d=s[11],C=s[12],x=s[13],g=s[14],b=s[15];if(r[0].setComponents(l-a,p-u,d-v,b-C).normalize(),r[1].setComponents(l+a,p+u,d+v,b+C).normalize(),r[2].setComponents(l+o,p+h,d+_,b+x).normalize(),r[3].setComponents(l-o,p-h,d-_,b-x).normalize(),n)r[4].setComponents(c,f,m,g).normalize(),r[5].setComponents(l-c,p-f,d-m,b-g).normalize();else if(r[4].setComponents(l-c,p-f,d-m,b-g).normalize(),t===2e3)r[5].setComponents(l+c,p+f,d+m,b+g).normalize();else if(t===2001)r[5].setComponents(c,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){Dn.center.set(0,0,0);const t=$c.distanceTo(e.center);return Dn.radius=.7071067811865476+t,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ur.x=r.normal.x>0?e.max.x:e.min.x,ur.y=r.normal.y>0?e.max.y:e.min.y,ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class So extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tr=new L,br=new L,fa=new ot,bi=new Ds,hr=new _i,os=new L,pa=new L;class ys extends Mt{constructor(e=new nn,t=new So){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Tr.fromBufferAttribute(t,r-1),br.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Tr.distanceTo(br);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),hr.radius+=s,e.ray.intersectsSphere(hr)===!1)return;fa.copy(r).invert(),bi.copy(e.ray).applyMatrix4(fa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=p,m=v-1;_<m;_+=l){const d=u.getX(_),C=u.getX(_+1),x=dr(this,e,bi,c,d,C,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(p),d=dr(this,e,bi,c,_,m,v-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let _=p,m=v-1;_<m;_+=l){const d=dr(this,e,bi,c,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=dr(this,e,bi,c,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Tr.fromBufferAttribute(o,r),br.fromBufferAttribute(o,s),t.distanceSqToSegment(Tr,br,os,pa)>n)return;os.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(os);if(!(l<e.near||l>e.far))return{distance:l,point:pa.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Zc extends bt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends bt{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,u=1026,h=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mo extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dr extends nn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const _=[],m=n/2;let d=0;C(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(p,2));function C(){const g=new L,b=new L;let A=0;const P=(t-e)/n;for(let I=0;I<=s;I++){const E=[],y=I/s,D=y*(t-e)+e;for(let O=0;O<=r;O++){const G=O/r,W=G*c+o,Y=Math.sin(W),X=Math.cos(W);b.x=D*Y,b.y=-y*n+m,b.z=D*X,h.push(b.x,b.y,b.z),g.set(Y,P,X).normalize(),f.push(g.x,g.y,g.z),p.push(G,1-y),E.push(v++)}_.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const y=_[E][I],D=_[E+1][I],O=_[E+1][I+1],G=_[E][I+1];(e>0||E!==0)&&(u.push(y,D,G),A+=3),(t>0||E!==s-1)&&(u.push(D,O,G),A+=3)}l.addGroup(d,A,0),d+=A}function x(g){const b=v,A=new ge,P=new L;let I=0;const E=g===!0?e:t,y=g===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),v++;const D=v;for(let O=0;O<=r;O++){const W=O/r*c+o,Y=Math.cos(W),X=Math.sin(W);P.x=E*X,P.y=m*y,P.z=E*Y,h.push(P.x,P.y,P.z),f.push(0,y,0),A.x=Y*.5+.5,A.y=X*.5*y+.5,p.push(A.x,A.y),v++}for(let O=0;O<r;O++){const G=b+O,W=D+O;g===!0?u.push(W,W+1,G):u.push(W+1,W,G),I+=3}l.addGroup(d,I,g===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends Dr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ge:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,r=[],s=[],a=[],o=new L,c=new ot;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Us extends on{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ge){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kc extends Us{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fs(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const fr=new L,cs=new Fs,ls=new Fs,us=new Fs;class Jc extends on{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(fr.subVectors(r[0],r[1]).add(r[0]),l=fr);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(fr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=fr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),cs.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,v,_,m),ls.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,v,_,m),us.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,v,_,m)}else this.curveType==="catmullrom"&&(cs.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),ls.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),us.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(cs.calc(c),ls.calc(c),us.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ma(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function jc(i,e){const t=1-i;return t*t*e}function Qc(i,e){return 2*(1-i)*i*e}function el(i,e){return i*i*e}function Li(i,e,t,n){return jc(i,e)+Qc(i,t)+el(i,n)}function tl(i,e){const t=1-i;return t*t*t*e}function nl(i,e){const t=1-i;return 3*t*t*i*e}function il(i,e){return 3*(1-i)*i*i*e}function rl(i,e){return i*i*i*e}function Ii(i,e,t,n,r){return tl(i,e)+nl(i,t)+il(i,n)+rl(i,r)}class Eo extends on{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ii(e,r.x,s.x,a.x,o.x),Ii(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sl extends on{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ii(e,r.x,s.x,a.x,o.x),Ii(e,r.y,s.y,a.y,o.y),Ii(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ao extends on{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class al extends on{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class To extends on{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Li(e,r.x,s.x,a.x),Li(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ol extends on{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Li(e,r.x,s.x,a.x),Li(e,r.y,s.y,a.y),Li(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bo extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(ma(o,c.x,l.x,u.x,h.x),ma(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Ms=Object.freeze({__proto__:null,ArcCurve:Kc,CatmullRomCurve3:Jc,CubicBezierCurve:Eo,CubicBezierCurve3:sl,EllipseCurve:Us,LineCurve:Ao,LineCurve3:al,QuadraticBezierCurve:To,QuadraticBezierCurve3:ol,SplineCurve:bo});class cl extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ms[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Ms[r.type]().fromJSON(r))}return this}}class ga extends cl{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ao(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new To(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Eo(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new Us(e,t,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wo extends ga{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ga().fromJSON(r))}return this}}function ll(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Co(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=pl(i,e,s,t)),i.length>80*t){o=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){const p=i[f],v=i[f+1];p<o&&(o=p),v<c&&(c=v),p>u&&(u=p),v>h&&(h=v)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return zi(s,a,t,o,c,l,0),a}function Co(i,e,t,n,r){let s;if(r===Tl(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=_a(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=_a(a/n|0,i[a],i[a+1],s);return s&&mi(s,s.next)&&(Gi(s),s=s.next),s}function Bn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mi(t,t.next)||mt(t.prev,t,t.next)===0)){if(Gi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&xl(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?hl(i,n,r,s):ul(i)){e.push(c.i,i.i,l.i),Gi(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=dl(Bn(i),e),zi(i,e,t,n,r,s,2)):a===2&&fl(i,e,t,n,r,s):zi(Bn(i),e,t,n,r,s,1);break}}}function ul(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(r,s,a),h=Math.min(o,c,l),f=Math.max(r,s,a),p=Math.max(o,c,l);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=p&&Ci(r,o,s,c,a,l,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function hl(i,e,t,n){const r=i.prev,s=i,a=i.next;if(mt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,f=a.y,p=Math.min(o,c,l),v=Math.min(u,h,f),_=Math.max(o,c,l),m=Math.max(u,h,f),d=Es(p,v,e,t,n),C=Es(_,m,e,t,n);let x=i.prevZ,g=i.nextZ;for(;x&&x.z>=d&&g&&g.z<=C;){if(x.x>=p&&x.x<=_&&x.y>=v&&x.y<=m&&x!==r&&x!==a&&Ci(o,u,c,h,l,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=p&&g.x<=_&&g.y>=v&&g.y<=m&&g!==r&&g!==a&&Ci(o,u,c,h,l,f,g.x,g.y)&&mt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=v&&x.y<=m&&x!==r&&x!==a&&Ci(o,u,c,h,l,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=C;){if(g.x>=p&&g.x<=_&&g.y>=v&&g.y<=m&&g!==r&&g!==a&&Ci(o,u,c,h,l,f,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function dl(i,e){let t=i;do{const n=t.prev,r=t.next.next;!mi(n,r)&&Po(n,t,t.next,r)&&ki(n,r)&&ki(r,n)&&(e.push(n.i,t.i,r.i),Gi(t),Gi(t.next),t=i=r),t=t.next}while(t!==i);return Bn(t)}function fl(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ml(a,o)){let c=Do(a,o);a=Bn(a,a.next),c=Bn(c,c.next),zi(a,e,t,n,r,s,0),zi(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function pl(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=Co(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(yl(l))}r.sort(ml);for(let s=0;s<r.length;s++)t=gl(r[s],t);return t}function ml(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function gl(i,e){const t=_l(i,e);if(!t)return e;const n=Do(t,i);return Bn(n,n.next),Bn(t,t.next)}function _l(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(mi(i,t))return t;do{if(mi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ro(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);ki(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&vl(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function vl(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function xl(i,e,t,n){let r=i;do r.z===0&&(r.z=Es(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Sl(r)}function Sl(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Es(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yl(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ro(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ci(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Ro(i,e,t,n,r,s,a,o)}function Ml(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!El(i,e)&&(ki(i,e)&&ki(e,i)&&Al(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||mi(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mi(i,e){return i.x===e.x&&i.y===e.y}function Po(i,e,t,n){const r=mr(mt(i,e,t)),s=mr(mt(i,e,n)),a=mr(mt(t,n,i)),o=mr(mt(t,n,e));return!!(r!==s&&a!==o||r===0&&pr(i,t,e)||s===0&&pr(i,n,e)||a===0&&pr(t,i,n)||o===0&&pr(t,e,n))}function pr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mr(i){return i>0?1:i<0?-1:0}function El(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Po(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ki(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Al(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Do(i,e){const t=As(i.i,i.x,i.y),n=As(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function _a(i,e,t,n){const r=As(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Gi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function As(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tl(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class bl{static triangulate(e,t,n=2){return ll(e,t,n)}}class ui{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];va(e),xa(n,e);let a=e.length;t.forEach(va);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,xa(n,t[c]);const o=bl.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function va(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ns extends nn{constructor(e=new wo([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Nt(r,3)),this.setAttribute("uv",new Nt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:wl;let x,g=!1,b,A,P,I;d&&(x=d.getSpacedPoints(u),g=!0,f=!1,b=d.computeFrenetFrames(u,!1),A=new L,P=new L,I=new L),f||(m=0,p=0,v=0,_=0);const E=o.extractPoints(l);let y=E.shape;const D=E.holes;if(!ui.isClockWise(y)){y=y.reverse();for(let te=0,j=D.length;te<j;te++){const J=D[te];ui.isClockWise(J)&&(D[te]=J.reverse())}}function G(te){const J=10000000000000001e-36;let K=te[0];for(let pe=1;pe<=te.length;pe++){const se=pe%te.length,de=te[se],ze=de.x-K.x,Ne=de.y-K.y,T=ze*ze+Ne*Ne,S=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(K.x),Math.abs(K.y)),B=J*S*S;if(T<=B){te.splice(se,1),pe--;continue}K=de}}G(y),D.forEach(G);const W=D.length,Y=y;for(let te=0;te<W;te++){const j=D[te];y=y.concat(j)}function X(te,j,J){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(j,J)}const ie=y.length;function q(te,j,J){let K,pe,se;const de=te.x-j.x,ze=te.y-j.y,Ne=J.x-te.x,T=J.y-te.y,S=de*de+ze*ze,B=de*T-ze*Ne;if(Math.abs(B)>Number.EPSILON){const R=Math.sqrt(S),z=Math.sqrt(Ne*Ne+T*T),k=j.x-ze/R,le=j.y+de/R,$=J.x-T/z,ne=J.y+Ne/z,Se=(($-k)*T-(ne-le)*Ne)/(de*T-ze*Ne);K=k+de*Se-te.x,pe=le+ze*Se-te.y;const re=K*K+pe*pe;if(re<=2)return new ge(K,pe);se=Math.sqrt(re/2)}else{let R=!1;de>Number.EPSILON?Ne>Number.EPSILON&&(R=!0):de<-Number.EPSILON?Ne<-Number.EPSILON&&(R=!0):Math.sign(ze)===Math.sign(T)&&(R=!0),R?(K=-ze,pe=de,se=Math.sqrt(S)):(K=de,pe=ze,se=Math.sqrt(S/2))}return new ge(K/se,pe/se)}const he=[];for(let te=0,j=Y.length,J=j-1,K=te+1;te<j;te++,J++,K++)J===j&&(J=0),K===j&&(K=0),he[te]=q(Y[te],Y[J],Y[K]);const xe=[];let fe,Oe=he.concat();for(let te=0,j=W;te<j;te++){const J=D[te];fe=[];for(let K=0,pe=J.length,se=pe-1,de=K+1;K<pe;K++,se++,de++)se===pe&&(se=0),de===pe&&(de=0),fe[K]=q(J[K],J[se],J[de]);xe.push(fe),Oe=Oe.concat(fe)}let Ke;if(m===0)Ke=ui.triangulateShape(Y,D);else{const te=[],j=[];for(let J=0;J<m;J++){const K=J/m,pe=p*Math.cos(K*Math.PI/2),se=v*Math.sin(K*Math.PI/2)+_;for(let de=0,ze=Y.length;de<ze;de++){const Ne=X(Y[de],he[de],se);Ee(Ne.x,Ne.y,-pe),K===0&&te.push(Ne)}for(let de=0,ze=W;de<ze;de++){const Ne=D[de];fe=xe[de];const T=[];for(let S=0,B=Ne.length;S<B;S++){const R=X(Ne[S],fe[S],se);Ee(R.x,R.y,-pe),K===0&&T.push(R)}K===0&&j.push(T)}}Ke=ui.triangulateShape(te,j)}const Xe=Ke.length,$e=v+_;for(let te=0;te<ie;te++){const j=f?X(y[te],Oe[te],$e):y[te];g?(P.copy(b.normals[0]).multiplyScalar(j.x),A.copy(b.binormals[0]).multiplyScalar(j.y),I.copy(x[0]).add(P).add(A),Ee(I.x,I.y,I.z)):Ee(j.x,j.y,0)}for(let te=1;te<=u;te++)for(let j=0;j<ie;j++){const J=f?X(y[j],Oe[j],$e):y[j];g?(P.copy(b.normals[te]).multiplyScalar(J.x),A.copy(b.binormals[te]).multiplyScalar(J.y),I.copy(x[te]).add(P).add(A),Ee(I.x,I.y,I.z)):Ee(J.x,J.y,h/u*te)}for(let te=m-1;te>=0;te--){const j=te/m,J=p*Math.cos(j*Math.PI/2),K=v*Math.sin(j*Math.PI/2)+_;for(let pe=0,se=Y.length;pe<se;pe++){const de=X(Y[pe],he[pe],K);Ee(de.x,de.y,h+J)}for(let pe=0,se=D.length;pe<se;pe++){const de=D[pe];fe=xe[pe];for(let ze=0,Ne=de.length;ze<Ne;ze++){const T=X(de[ze],fe[ze],K);g?Ee(T.x,T.y+x[u-1].y,x[u-1].x+J):Ee(T.x,T.y,h+J)}}}Z(),Q();function Z(){const te=r.length/3;if(f){let j=0,J=ie*j;for(let K=0;K<Xe;K++){const pe=Ke[K];Ae(pe[2]+J,pe[1]+J,pe[0]+J)}j=u+m*2,J=ie*j;for(let K=0;K<Xe;K++){const pe=Ke[K];Ae(pe[0]+J,pe[1]+J,pe[2]+J)}}else{for(let j=0;j<Xe;j++){const J=Ke[j];Ae(J[2],J[1],J[0])}for(let j=0;j<Xe;j++){const J=Ke[j];Ae(J[0]+ie*u,J[1]+ie*u,J[2]+ie*u)}}n.addGroup(te,r.length/3-te,0)}function Q(){const te=r.length/3;let j=0;Me(Y,j),j+=Y.length;for(let J=0,K=D.length;J<K;J++){const pe=D[J];Me(pe,j),j+=pe.length}n.addGroup(te,r.length/3-te,1)}function Me(te,j){let J=te.length;for(;--J>=0;){const K=J;let pe=J-1;pe<0&&(pe=te.length-1);for(let se=0,de=u+m*2;se<de;se++){const ze=ie*se,Ne=ie*(se+1),T=j+K+ze,S=j+pe+ze,B=j+pe+Ne,R=j+K+Ne;ke(T,S,B,R)}}}function Ee(te,j,J){c.push(te),c.push(j),c.push(J)}function Ae(te,j,J){nt(te),nt(j),nt(J);const K=r.length/3,pe=C.generateTopUV(n,r,K-3,K-2,K-1);w(pe[0]),w(pe[1]),w(pe[2])}function ke(te,j,J,K){nt(te),nt(j),nt(K),nt(j),nt(J),nt(K);const pe=r.length/3,se=C.generateSideWallUV(n,r,pe-6,pe-3,pe-2,pe-1);w(se[0]),w(se[1]),w(se[3]),w(se[1]),w(se[2]),w(se[3])}function nt(te){r.push(c[te*3+0]),r.push(c[te*3+1]),r.push(c[te*3+2])}function w(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cl(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ms[r.type]().fromJSON(r)),new Ns(n,e.options)}}const wl={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new ge(s,a),new ge(o,c),new ge(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],p=e[r*3+1],v=e[r*3+2],_=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ge(a,1-c),new ge(l,1-h),new ge(f,1-v),new ge(_,1-d)]:[new ge(o,1-c),new ge(u,1-h),new ge(p,1-v),new ge(m,1-d)]}};function Cl(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qi extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],v=[],_=[],m=[];for(let d=0;d<u;d++){const C=d*f-a;for(let x=0;x<l;x++){const g=x*h-s;v.push(g,-C,0),_.push(0,0,1),m.push(x/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<o;C++){const x=C+l*d,g=C+l*(d+1),b=C+1+l*(d+1),A=C+1+l*d;p.push(x,g,A),p.push(g,b,A)}this.setIndex(p),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vi extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rl extends Gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pl extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dl extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ll{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],v=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Il=new Ll;class Os{constructor(e){this.manager=e!==void 0?e:Il,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni=new WeakMap;class Ul extends Os{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ni.get(a);h===void 0&&(h=[],ni.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=Oi("img");function c(){u(),t&&t(this);const h=ni.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}ni.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),hs.remove(`image:${e}`);const f=ni.get(this)||[];for(let p=0;p<f.length;p++){const v=f[p];v.onError&&v.onError(h)}ni.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Fl extends Os{constructor(e){super(e)}load(e,t,n,r){const s=new bt,a=new Ul(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Lr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Nl extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ds=new ot,Sa=new L,ya=new L;class Lo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sa),ya.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ya),t.updateMatrixWorld(),ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ma=new ot,wi=new L,fs=new L;class Ol extends Lo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(wi),fs.copy(n.position),fs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fs),n.updateMatrixWorld(),r.makeTranslation(-wi.x,-wi.y,-wi.z),Ma.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,n.coordinateSystem,n.reversedDepth)}}class Bl extends Lr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Io extends _o{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zl extends Lo{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ea extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new zl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kl extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gl extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Aa=new ot;class Uo{constructor(e,t,n=0,r=1/0){this.ray=new Ds(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Aa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Aa),this}intersectObject(e,t=!0,n=[]){return Ts(e,this,n,t),n.sort(Ta),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ts(e[r],this,n,t);return n.sort(Ta),n}}function Ta(i,e){return i.distance-e.distance}function Ts(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ts(s[a],e,t,!0)}}function ba(i,e,t,n){const r=Vl(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vl(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fo(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Hl(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],_=h[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ql=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wl=`#ifdef USE_ALPHAHASH
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
#endif`,Xl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$l=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kl=`#ifdef USE_AOMAP
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
#endif`,Jl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jl=`#ifdef USE_BATCHING
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
#endif`,Ql=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iu=`#ifdef USE_IRIDESCENCE
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
#endif`,ru=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fu=`#define PI 3.141592653589793
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
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,Vu=`struct PhysicalMaterial {
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
}`,Hu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qu=`#if defined( USE_POINTS_UV )
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
#endif`,eh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,th=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ih=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sh=`#ifdef USE_MORPHTARGETS
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
#endif`,ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ch=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dh=`#ifdef USE_NORMALMAP
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
#endif`,fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_h=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ah=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Th=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ch=`float getShadowMask() {
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
}`,Rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lh=`#ifdef USE_SKINNING
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
#endif`,Ih=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oh=`#ifdef USE_TRANSMISSION
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
#endif`,Bh=`#ifdef USE_TRANSMISSION
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
#endif`,zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qh=`uniform sampler2D t2D;
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
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`#include <common>
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
}`,Kh=`#if DEPTH_PACKING == 3200
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
}`,Jh=`#define DISTANCE
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
}`,jh=`#define DISTANCE
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
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`uniform float scale;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,rd=`uniform vec3 diffuse;
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
}`,sd=`#define LAMBERT
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
}`,ad=`#define LAMBERT
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
}`,od=`#define MATCAP
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
}`,cd=`#define MATCAP
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
}`,ld=`#define NORMAL
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
}`,ud=`#define NORMAL
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
}`,hd=`#define PHONG
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
}`,dd=`#define PHONG
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
}`,fd=`#define STANDARD
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
}`,pd=`#define STANDARD
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
}`,md=`#define TOON
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
}`,gd=`#define TOON
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
}`,_d=`uniform float size;
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
}`,vd=`uniform vec3 diffuse;
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
}`,xd=`#include <common>
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
}`,Sd=`uniform vec3 color;
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
}`,yd=`uniform float rotation;
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
}`,Md=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:ql,alphahash_pars_fragment:Wl,alphamap_fragment:Xl,alphamap_pars_fragment:Yl,alphatest_fragment:$l,alphatest_pars_fragment:Zl,aomap_fragment:Kl,aomap_pars_fragment:Jl,batching_pars_vertex:jl,batching_vertex:Ql,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:ru,clipping_planes_fragment:su,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:ou,clipping_planes_vertex:cu,color_fragment:lu,color_pars_fragment:uu,color_pars_vertex:hu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:xu,colorspace_fragment:Su,colorspace_pars_fragment:yu,envmap_fragment:Mu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Au,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:Nu,envmap_vertex:bu,fog_vertex:wu,fog_pars_vertex:Cu,fog_fragment:Ru,fog_pars_fragment:Pu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Lu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Uu,lights_pars_begin:Fu,lights_toon_fragment:Ou,lights_toon_pars_fragment:Bu,lights_phong_fragment:zu,lights_phong_pars_fragment:ku,lights_physical_fragment:Gu,lights_physical_pars_fragment:Vu,lights_fragment_begin:Hu,lights_fragment_maps:qu,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Zu,map_fragment:Ku,map_pars_fragment:Ju,map_particle_fragment:ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:eh,metalnessmap_pars_fragment:th,morphinstance_vertex:nh,morphcolor_vertex:ih,morphnormal_vertex:rh,morphtarget_pars_vertex:sh,morphtarget_vertex:ah,normal_fragment_begin:oh,normal_fragment_maps:ch,normal_pars_fragment:lh,normal_pars_vertex:uh,normal_vertex:hh,normalmap_pars_fragment:dh,clearcoat_normal_fragment_begin:fh,clearcoat_normal_fragment_maps:ph,clearcoat_pars_fragment:mh,iridescence_pars_fragment:gh,opaque_fragment:_h,packing:vh,premultiplied_alpha_fragment:xh,project_vertex:Sh,dithering_fragment:yh,dithering_pars_fragment:Mh,roughnessmap_fragment:Eh,roughnessmap_pars_fragment:Ah,shadowmap_pars_fragment:Th,shadowmap_pars_vertex:bh,shadowmap_vertex:wh,shadowmask_pars_fragment:Ch,skinbase_vertex:Rh,skinning_pars_vertex:Ph,skinning_vertex:Dh,skinnormal_vertex:Lh,specularmap_fragment:Ih,specularmap_pars_fragment:Uh,tonemapping_fragment:Fh,tonemapping_pars_fragment:Nh,transmission_fragment:Oh,transmission_pars_fragment:Bh,uv_pars_fragment:zh,uv_pars_vertex:kh,uv_vertex:Gh,worldpos_vertex:Vh,background_vert:Hh,background_frag:qh,backgroundCube_vert:Wh,backgroundCube_frag:Xh,cube_vert:Yh,cube_frag:$h,depth_vert:Zh,depth_frag:Kh,distanceRGBA_vert:Jh,distanceRGBA_frag:jh,equirect_vert:Qh,equirect_frag:ed,linedashed_vert:td,linedashed_frag:nd,meshbasic_vert:id,meshbasic_frag:rd,meshlambert_vert:sd,meshlambert_frag:ad,meshmatcap_vert:od,meshmatcap_frag:cd,meshnormal_vert:ld,meshnormal_frag:ud,meshphong_vert:hd,meshphong_frag:dd,meshphysical_vert:fd,meshphysical_frag:pd,meshtoon_vert:md,meshtoon_frag:gd,points_vert:_d,points_frag:vd,shadow_vert:xd,shadow_frag:Sd,sprite_vert:yd,sprite_frag:Md},ve={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},an={basic:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:It([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:It([ve.lights,ve.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};an.physical={uniforms:It([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const gr={r:0,b:0,g:0},Ln=new tn,Ed=new ot;function Ad(i,e,t,n,r,s,a){const o=new Ye(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function v(x){let g=x.isScene===!0?x.background:null;return g&&g.isTexture&&(g=(x.backgroundBlurriness>0?t:e).get(g)),g}function _(x){let g=!1;const b=v(x);b===null?d(o,c):b&&b.isColor&&(d(b,1),g=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,g){const b=v(g);b&&(b.isCubeTexture||b.mapping===306)?(u===void 0&&(u=new ht(new Tn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:pi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ln.copy(g.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ed.makeRotationFromEuler(Ln)),u.material.toneMapped=Qe.getTransfer(b.colorSpace)!==st,(h!==b||f!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ht(new qi(2,2),new An({name:"BackgroundMaterial",uniforms:pi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,g){x.getRGB(gr,go(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,g,a)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,g=1){o.set(x),c=g,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(o,c)},render:_,addToRenderList:m,dispose:C}}function Td(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(y,D,O,G,W){let Y=!1;const X=h(G,O,D);s!==X&&(s=X,l(s.object)),Y=p(y,G,O,W),Y&&v(y,G,O,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,g(y,D,O,G),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,O){const G=O.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[D.id];Y===void 0&&(Y={},W[D.id]=Y);let X=Y[G];return X===void 0&&(X=f(c()),Y[G]=X),X}function f(y){const D=[],O=[],G=[];for(let W=0;W<t;W++)D[W]=0,O[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,D,O,G){const W=s.attributes,Y=D.attributes;let X=0;const ie=O.getAttributes();for(const q in ie)if(ie[q].location>=0){const xe=W[q];let fe=Y[q];if(fe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),xe===void 0||xe.attribute!==fe||fe&&xe.data!==fe.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function v(y,D,O,G){const W={},Y=D.attributes;let X=0;const ie=O.getAttributes();for(const q in ie)if(ie[q].location>=0){let xe=Y[q];xe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const fe={};fe.attribute=xe,xe&&xe.data&&(fe.data=xe.data),W[q]=fe,X++}s.attributes=W,s.attributesNum=X,s.index=G}function _(){const y=s.newAttributes;for(let D=0,O=y.length;D<O;D++)y[D]=0}function m(y){d(y,0)}function d(y,D){const O=s.newAttributes,G=s.enabledAttributes,W=s.attributeDivisors;O[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),W[y]!==D&&(i.vertexAttribDivisor(y,D),W[y]=D)}function C(){const y=s.newAttributes,D=s.enabledAttributes;for(let O=0,G=D.length;O<G;O++)D[O]!==y[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function x(y,D,O,G,W,Y,X){X===!0?i.vertexAttribIPointer(y,D,O,W,Y):i.vertexAttribPointer(y,D,O,G,W,Y)}function g(y,D,O,G){_();const W=G.attributes,Y=O.getAttributes(),X=D.defaultAttributeValues;for(const ie in Y){const q=Y[ie];if(q.location>=0){let he=W[ie];if(he===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const xe=he.normalized,fe=he.itemSize,Oe=e.get(he);if(Oe===void 0)continue;const Ke=Oe.buffer,Xe=Oe.type,$e=Oe.bytesPerElement,Z=Xe===i.INT||Xe===i.UNSIGNED_INT||he.gpuType===1013;if(he.isInterleavedBufferAttribute){const Q=he.data,Me=Q.stride,Ee=he.offset;if(Q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<q.locationSize;Ae++)d(q.location+Ae,Q.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<q.locationSize;Ae++)m(q.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Ae=0;Ae<q.locationSize;Ae++)x(q.location+Ae,fe/q.locationSize,Xe,xe,Me*$e,(Ee+fe/q.locationSize*Ae)*$e,Z)}else{if(he.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)d(q.location+Q,he.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Q=0;Q<q.locationSize;Q++)x(q.location+Q,fe/q.locationSize,Xe,xe,fe*$e,fe/q.locationSize*Q*$e,Z)}}else if(X!==void 0){const xe=X[ie];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(q.location,xe);break;case 3:i.vertexAttrib3fv(q.location,xe);break;case 4:i.vertexAttrib4fv(q.location,xe);break;default:i.vertexAttrib1fv(q.location,xe)}}}}C()}function b(){I();for(const y in n){const D=n[y];for(const O in D){const G=D[O];for(const W in G)u(G[W].object),delete G[W];delete D[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const O in D){const G=D[O];for(const W in G)u(G[W].object),delete G[W];delete D[O]}delete n[y.id]}function P(y){for(const D in n){const O=n[D];if(O[y.id]===void 0)continue;const G=O[y.id];for(const W in G)u(G[W].object),delete G[W];delete O[y.id]}}function I(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:C}}function bd(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)a(l[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_]*f[_];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function wd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:C,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:b,maxSamples:A}}function Cd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mn,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const C=s?0:n,x=C*4;let g=d.clippingState||null;c.value=g,g=u(v,f,x,p);for(let b=0;b!==x;++b)g[b]=t[b];d.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,v){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,v!==!0||m===null){const d=p+_*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,g=p;x!==_;++x,g+=4)a.copy(h[x]).applyMatrix4(C,o),a.normal.toArray(m,g),m[g+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Rd(i){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const hi=4,wa=[.125,.215,.35,.446,.526,.582],Fn=20,ps=new Io,Ca=new Ye;let ms=null,gs=0,_s=0,vs=!1;const Un=(1+Math.sqrt(5))/2,ii=1/Un,Ra=[new L(-Un,ii,0),new L(Un,ii,0),new L(-ii,0,Un),new L(ii,0,Un),new L(0,Un,-ii),new L(0,Un,ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Pd=new L;class bs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Pd}=s;ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=La(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ms,gs,_s),this._renderer.xr.enabled=vs,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:fi,depthBuffer:!1},r=Pa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(s)),this._blurMaterial=Ld(s,e,t)}return r}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,n,r,s){const c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ca),h.toneMapping=0,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new fo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new ht(new Tn,_);let d=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,d=!0):(_.color.copy(Ca),d=!0);for(let x=0;x<6;x++){const g=x%3;g===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):g===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const b=this._cubeSize;_r(r,g*b,x>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=La()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Da());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ra[(r-s-1)%Ra.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ht(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const d=[];let C=0;for(let P=0;P<Fn;++P){const I=P/_,E=Math.exp(-I*I/2);d.push(E),P===0?C+=E:P<m&&(C+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const g=this._sizeLods[r],b=3*g*(r>x-hi?r-x+hi:0),A=4*(this._cubeSize-g);_r(t,b,A,3*g,2*g),c.setRenderTarget(t),c.render(h,ps)}}function Dd(i){const e=[],t=[],n=[];let r=i;const s=i-hi+1+wa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-hi?c=wa[a-i+hi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,_=3,m=2,d=1,C=new Float32Array(_*v*p),x=new Float32Array(m*v*p),g=new Float32Array(d*v*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,I=A>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];C.set(E,_*v*A),x.set(f,m*v*A);const y=[A,A,A,A,A,A];g.set(y,d*v*A)}const b=new nn;b.setAttribute("position",new en(C,_)),b.setAttribute("uv",new en(x,m)),b.setAttribute("faceIndex",new en(g,d)),e.push(b),r>hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pa(i,e,t){const n=new On(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ld(i,e,t){const n=new Float32Array(Fn),r=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Da(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function La(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return`

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
	`}function Id(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new bs(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new bs(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ud(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Fd(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,v=h.attributes.position;let _=0;if(p!==null){const C=p.array;_=p.version;for(let x=0,g=C.length;x<g;x+=3){const b=C[x+0],A=C[x+1],P=C[x+2];f.push(b,A,A,P,P,b)}}else if(v!==void 0){const C=v.array;_=v.version;for(let x=0,g=C.length/3-1;x<g;x+=3){const b=x+0,A=x+1,P=x+2;f.push(b,A,A,P,P,b)}}else return;const m=new(lo(f)?mo:po)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Nd(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function l(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,s,f*a,v),t.update(p,n,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,n,1)}function h(f,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,v);let d=0;for(let C=0;C<v;C++)d+=p[C]*_[C];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Od(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bd(i,e,t){const n=new WeakMap,r=new at;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),_===!0&&(x=3);let g=o.attributes.position.count*x,b=1;g>e.maxTextureSize&&(b=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const A=new Float32Array(g*b*4*h),P=new uo(A,g,b,h);P.type=1015,P.needsUpdate=!0;const I=x*4;for(let y=0;y<h;y++){const D=m[y],O=d[y],G=C[y],W=g*b*4*y;for(let Y=0;Y<D.count;Y++){const X=Y*I;p===!0&&(r.fromBufferAttribute(D,Y),A[W+X+0]=r.x,A[W+X+1]=r.y,A[W+X+2]=r.z,A[W+X+3]=0),v===!0&&(r.fromBufferAttribute(O,Y),A[W+X+4]=r.x,A[W+X+5]=r.y,A[W+X+6]=r.z,A[W+X+7]=0),_===!0&&(r.fromBufferAttribute(G,Y),A[W+X+8]=r.x,A[W+X+9]=r.y,A[W+X+10]=r.z,A[W+X+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new ge(g,b)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function zd(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const No=new bt,Ia=new yo(1,1),Oo=new uo,Bo=new Ac,zo=new vo,Ua=[],Fa=[],Na=new Float32Array(16),Oa=new Float32Array(9),Ba=new Float32Array(4);function vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ua[r];if(s===void 0&&(s=new Float32Array(r),Ua[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ir(i,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Ba.set(n),i.uniformMatrix2fv(this.addr,!1,Ba),At(t,n)}}function Wd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),At(t,n)}}function Xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Na.set(n),i.uniformMatrix4fv(this.addr,!1,Na),At(t,n)}}function Yd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function tf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ia.compareFunction=515,s=Ia):s=No,t.setTexture2D(e||s,r)}function nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bo,r)}function rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zo,r)}function sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Oo,r)}function af(i){switch(i){case 5126:return kd;case 35664:return Gd;case 35665:return Vd;case 35666:return Hd;case 35674:return qd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return Yd;case 35667:case 35671:return $d;case 35668:case 35672:return Zd;case 35669:case 35673:return Kd;case 5125:return Jd;case 36294:return jd;case 36295:return Qd;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return sf}}function of(i,e){i.uniform1fv(this.addr,e)}function cf(i,e){const t=vi(e,this.size,2);i.uniform2fv(this.addr,t)}function lf(i,e){const t=vi(e,this.size,3);i.uniform3fv(this.addr,t)}function uf(i,e){const t=vi(e,this.size,4);i.uniform4fv(this.addr,t)}function hf(i,e){const t=vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function df(i,e){const t=vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ff(i,e){const t=vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pf(i,e){i.uniform1iv(this.addr,e)}function mf(i,e){i.uniform2iv(this.addr,e)}function gf(i,e){i.uniform3iv(this.addr,e)}function _f(i,e){i.uniform4iv(this.addr,e)}function vf(i,e){i.uniform1uiv(this.addr,e)}function xf(i,e){i.uniform2uiv(this.addr,e)}function Sf(i,e){i.uniform3uiv(this.addr,e)}function yf(i,e){i.uniform4uiv(this.addr,e)}function Mf(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||No,s[a])}function Ef(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bo,s[a])}function Af(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zo,s[a])}function Tf(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Oo,s[a])}function bf(i){switch(i){case 5126:return of;case 35664:return cf;case 35665:return lf;case 35666:return uf;case 35674:return hf;case 35675:return df;case 35676:return ff;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return gf;case 35669:case 35673:return _f;case 5125:return vf;case 36294:return xf;case 36295:return Sf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Tf}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=af(t.type)}}class Cf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}}class Rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function za(i,e){i.seq.push(e),i.map[e.id]=e}function Pf(i,e,t){const n=i.name,r=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),a=xs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){za(t,l===void 0?new wf(o,i,e):new Cf(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Rf(o),za(t,h)),t=h}}}class yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Pf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Df=37297;let Lf=0;function If(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ga=new He;function Uf(i){Qe._getMatrix(Ga,Qe.workingColorSpace,i);const e=`mat3( ${Ga.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ar:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Va(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+If(i.getShaderSource(e),o)}else return s}function Ff(i,e){const t=Uf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nf(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new L;function Of(){Qe.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function zf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ri(i){return i!==""}function Ha(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(i){return i.replace(Gf,Hf)}const Vf=new Map;function Hf(i,e){let t=We[e];if(t===void 0){const n=Vf.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ws(t)}const qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wa(i){return i.replace(qf,Wf)}function Wf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xa(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Xf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Yf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $f(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Zf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jf(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Xf(t),l=Yf(t),u=$f(t),h=Zf(t),f=Kf(t),p=Bf(t),v=zf(s),_=r.createProgram();let m,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),d.length>0&&(d+=`
`)):(m=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),d=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?We.tonemapping_pars_fragment:"",t.toneMapping!==0?Nf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Ff("linearToOutputTexel",t.outputColorSpace),Of(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),a=ws(a),a=Ha(a,t),a=qa(a,t),o=ws(o),o=Ha(o,t),o=qa(o,t),a=Wa(a),o=Wa(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ws?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ws?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=C+m+a,g=C+d+o,b=ka(r,r.VERTEX_SHADER,x),A=ka(r,r.FRAGMENT_SHADER,g);r.attachShader(_,b),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(b)||"",W=r.getShaderInfoLog(A)||"",Y=O.trim(),X=G.trim(),ie=W.trim();let q=!0,he=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,A);else{const xe=Va(r,b,"vertex"),fe=Va(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+xe+`
`+fe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||ie==="")&&(he=!1);he&&(D.diagnostics={runnable:q,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:d}})}r.deleteShader(b),r.deleteShader(A),I=new yr(r,_),E=kf(r,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Df)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ep(e),t.set(e,n)),n}}class ep{constructor(e){this.id=jf++,this.code=e,this.usedTimes=0}}function tp(i,e,t,n,r,s,a){const o=new Ls,c=new Qf,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,D,O,G){const W=O.fog,Y=G.geometry,X=E.isMeshStandardMaterial?O.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),q=ie&&ie.mapping===306?ie.image.height:null,he=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=xe!==void 0?xe.length:0;let Oe=0;Y.morphAttributes.position!==void 0&&(Oe=1),Y.morphAttributes.normal!==void 0&&(Oe=2),Y.morphAttributes.color!==void 0&&(Oe=3);let Ke,Xe,$e,Z;if(he){const et=an[he];Ke=et.vertexShader,Xe=et.fragmentShader}else Ke=E.vertexShader,Xe=E.fragmentShader,c.update(E),$e=c.getVertexShaderID(E),Z=c.getFragmentShaderID(E);const Q=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ee=G.isInstancedMesh===!0,Ae=G.isBatchedMesh===!0,ke=!!E.map,nt=!!E.matcap,w=!!ie,te=!!E.aoMap,j=!!E.lightMap,J=!!E.bumpMap,K=!!E.normalMap,pe=!!E.displacementMap,se=!!E.emissiveMap,de=!!E.metalnessMap,ze=!!E.roughnessMap,Ne=E.anisotropy>0,T=E.clearcoat>0,S=E.dispersion>0,B=E.iridescence>0,R=E.sheen>0,z=E.transmission>0,k=Ne&&!!E.anisotropyMap,le=T&&!!E.clearcoatMap,$=T&&!!E.clearcoatNormalMap,ne=T&&!!E.clearcoatRoughnessMap,Se=B&&!!E.iridescenceMap,re=B&&!!E.iridescenceThicknessMap,ue=R&&!!E.sheenColorMap,De=R&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,_e=!!E.specularColorMap,Ve=!!E.specularIntensityMap,U=z&&!!E.transmissionMap,ce=z&&!!E.thicknessMap,me=!!E.gradientMap,we=!!E.alphaMap,ae=E.alphaTest>0,ee=!!E.alphaHash,Pe=!!E.extensions;let Ge=0;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const lt={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:Xe,defines:E.defines,customVertexShaderID:$e,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&G._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&G.instanceColor!==null,instancingMorph:Ee&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:fi,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:nt,envMap:w,envMapMode:w&&ie.mapping,envMapCubeUVHeight:q,aoMap:te,lightMap:j,bumpMap:J,normalMap:K,displacementMap:f&&pe,emissiveMap:se,normalMapObjectSpace:K&&E.normalMapType===1,normalMapTangentSpace:K&&E.normalMapType===0,metalnessMap:de,roughnessMap:ze,anisotropy:Ne,anisotropyMap:k,clearcoat:T,clearcoatMap:le,clearcoatNormalMap:$,clearcoatRoughnessMap:ne,dispersion:S,iridescence:B,iridescenceMap:Se,iridescenceThicknessMap:re,sheen:R,sheenColorMap:ue,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:_e,specularIntensityMap:Ve,transmission:z,transmissionMap:U,thicknessMap:ce,gradientMap:me,opaque:E.transparent===!1&&E.blending===1&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:ae,alphaHash:ee,combine:E.combine,mapUv:ke&&_(E.map.channel),aoMapUv:te&&_(E.aoMap.channel),lightMapUv:j&&_(E.lightMap.channel),bumpMapUv:J&&_(E.bumpMap.channel),normalMapUv:K&&_(E.normalMap.channel),displacementMapUv:pe&&_(E.displacementMap.channel),emissiveMapUv:se&&_(E.emissiveMap.channel),metalnessMapUv:de&&_(E.metalnessMap.channel),roughnessMapUv:ze&&_(E.roughnessMap.channel),anisotropyMapUv:k&&_(E.anisotropyMap.channel),clearcoatMapUv:le&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(E.sheenRoughnessMap.channel),specularMapUv:Ce&&_(E.specularMap.channel),specularColorMapUv:_e&&_(E.specularColorMap.channel),specularIntensityMapUv:Ve&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:ce&&_(E.thicknessMap.channel),alphaMapUv:we&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(K||Ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(ke||we),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===2,flipSided:E.side===1,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&E.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function d(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(C(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function C(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function g(E){const y=v[E.type];let D;if(y){const O=an[y];D=Oc.clone(O.uniforms)}else D=E.uniforms;return D}function b(E,y){let D;for(let O=0,G=u.length;O<G;O++){const W=u[O];if(W.cacheKey===y){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Jf(i,y,E,s),u.push(D)),D}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:b,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:I}}function np(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ya(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $a(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,v,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,v,_,m){const d=a(h,f,p,v,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(h,f,p,v,_,m){const d=a(h,f,p,v,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||ip),n.length>1&&n.sort(f||Ya),r.length>1&&r.sort(f||Ya)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function rp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new $a,i.set(n,[a])):r>=s.length?(a=new $a,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ap(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let op=0;function cp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lp(i){const e=new sp,t=ap(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new ot,a=new ot;function o(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,v=0,_=0,m=0,d=0,C=0,x=0,g=0,b=0,A=0,P=0;l.sort(cp);for(let E=0,y=l.length;E<y;E++){const D=l[E],O=D.color,G=D.intensity,W=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*G,h+=O.g*G,f+=O.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],G);P++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,q=t.get(D);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=D.shadow.matrix,C++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;const ie=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,ie.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=ie.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=Y,g++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(O).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ie=D.shadow,q=t.get(D);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,q.shadowCameraNear=ie.camera.near,q.shadowCameraFar=ie.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=D.shadow.matrix,x++}n.point[v]=X,v++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==C||I.numPointShadows!==x||I.numSpotShadows!==g||I.numSpotMaps!==b||I.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=g+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=p,I.pointLength=v,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=C,I.numPointShadows=x,I.numSpotShadows=g,I.numSpotMaps=b,I.numLightProbes=P,n.version=op++)}function c(l,u){let h=0,f=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const x=l[d];if(x.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),h++}else if(x.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const g=n.hemi[_];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Za(i){const e=new lp(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function up(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Za(i),e.set(r,[o])):s>=a.length?(o=new Za(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dp=`uniform sampler2D shadow_pass;
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
}`;function fp(i,e,t){let n=new Is;const r=new ge,s=new ge,a=new at,o=new Pl({depthPacking:3201}),c=new Dl,l={},u=t.maxTextureSize,h={0:1,1:0,2:2},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:hp,fragmentShader:dp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new nn;v.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ht(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=d!==3&&this.type===3,W=d===3&&this.type!==3;for(let Y=0,X=A.length;Y<X;Y++){const ie=A[Y],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const he=q.getFrameExtents();if(r.multiply(he),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,q.mapSize.y=s.y)),q.map===null||G===!0||W===!0){const fe=this.type!==3?{minFilter:1003,magFilter:1003}:{};q.map!==null&&q.map.dispose(),q.map=new On(r.x,r.y,fe),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const xe=q.getViewportCount();for(let fe=0;fe<xe;fe++){const Oe=q.getViewport(fe);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),O.viewport(a),q.updateMatrices(ie,fe),n=q.getFrustum(),g(P,I,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===3&&C(q,I),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,D)};function C(A,P){const I=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new On(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,p,_,null)}function x(A,P,I,E){let y=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=y.uuid,G=P.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let Y=W[G];Y===void 0&&(Y=y.clone(),W[G]=Y,P.addEventListener("dispose",b)),y=Y}if(y.visible=P.visible,y.wireframe=P.wireframe,E===3?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=I}return y}function g(A,P,I,E,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const G=e.update(A),W=A.material;if(Array.isArray(W)){const Y=G.groups;for(let X=0,ie=Y.length;X<ie;X++){const q=Y[X],he=W[q.materialIndex];if(he&&he.visible){const xe=x(A,he,E,y);A.onBeforeShadow(i,A,P,I,G,xe,q),i.renderBufferDirect(I,null,G,xe,A,q),A.onAfterShadow(i,A,P,I,G,xe,q)}}}else if(W.visible){const Y=x(A,W,E,y);A.onBeforeShadow(i,A,P,I,G,Y,null),i.renderBufferDirect(I,null,G,Y,A,null),A.onAfterShadow(i,A,P,I,G,Y,null)}}const O=A.children;for(let G=0,W=O.length;G<W;G++)g(O[G],P,I,E,y)}function b(A){A.target.removeEventListener("dispose",b);for(const I in l){const E=l[I],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const pp={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function mp(i,e){function t(){let U=!1;const ce=new at;let me=null;const we=new at(0,0,0,0);return{setMask:function(ae){me!==ae&&!U&&(i.colorMask(ae,ae,ae,ae),me=ae)},setLocked:function(ae){U=ae},setClear:function(ae,ee,Pe,Ge,lt){lt===!0&&(ae*=Ge,ee*=Ge,Pe*=Ge),ce.set(ae,ee,Pe,Ge),we.equals(ce)===!1&&(i.clearColor(ae,ee,Pe,Ge),we.copy(ce))},reset:function(){U=!1,me=null,we.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,me=null,we=null,ae=null;return{setReversed:function(ee){if(ce!==ee){const Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(ee){ee?Q(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ee){me!==ee&&!U&&(i.depthMask(ee),me=ee)},setFunc:function(ee){if(ce&&(ee=pp[ee]),we!==ee){switch(ee){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ae!==ee&&(ce&&(ee=1-ee),i.clearDepth(ee),ae=ee)},reset:function(){U=!1,me=null,we=null,ae=null,ce=!1}}}function r(){let U=!1,ce=null,me=null,we=null,ae=null,ee=null,Pe=null,Ge=null,lt=null;return{setTest:function(et){U||(et?Q(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(et){ce!==et&&!U&&(i.stencilMask(et),ce=et)},setFunc:function(et,cn,rn){(me!==et||we!==cn||ae!==rn)&&(i.stencilFunc(et,cn,rn),me=et,we=cn,ae=rn)},setOp:function(et,cn,rn){(ee!==et||Pe!==cn||Ge!==rn)&&(i.stencilOp(et,cn,rn),ee=et,Pe=cn,Ge=rn)},setLocked:function(et){U=et},setClear:function(et){lt!==et&&(i.clearStencil(et),lt=et)},reset:function(){U=!1,ce=null,me=null,we=null,ae=null,ee=null,Pe=null,Ge=null,lt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],v=null,_=!1,m=null,d=null,C=null,x=null,g=null,b=null,A=null,P=new Ye(0,0,0),I=0,E=!1,y=null,D=null,O=null,G=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ie>=2);let he=null,xe={};const fe=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Ke=new at().fromArray(fe),Xe=new at().fromArray(Oe);function $e(U,ce,me,we){const ae=new Uint8Array(4),ee=i.createTexture();i.bindTexture(U,ee),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<me;Pe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ee}const Z={};Z[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(3),J(!1),K(1),Q(i.CULL_FACE),te(0);function Q(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Me(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ee(U,ce){return h[U]!==ce?(i.bindFramebuffer(U,ce),h[U]=ce,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(U,ce){let me=p,we=!1;if(U){me=f.get(ce),me===void 0&&(me=[],f.set(ce,me));const ae=U.textures;if(me.length!==ae.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Pe=ae.length;ee<Pe;ee++)me[ee]=i.COLOR_ATTACHMENT0+ee;me.length=ae.length,we=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,we=!0);we&&i.drawBuffers(me)}function ke(U){return v!==U?(i.useProgram(U),v=U,!0):!1}const nt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};nt[103]=i.MIN,nt[104]=i.MAX;const w={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function te(U,ce,me,we,ae,ee,Pe,Ge,lt,et){if(U===0){_===!0&&(Me(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),U!==5){if(U!==m||et!==E){if((d!==100||g!==100)&&(i.blendEquation(i.FUNC_ADD),d=100,g=100),et)switch(U){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}C=null,x=null,b=null,A=null,P.set(0,0,0),I=0,m=U,E=et}return}ae=ae||ce,ee=ee||me,Pe=Pe||we,(ce!==d||ae!==g)&&(i.blendEquationSeparate(nt[ce],nt[ae]),d=ce,g=ae),(me!==C||we!==x||ee!==b||Pe!==A)&&(i.blendFuncSeparate(w[me],w[we],w[ee],w[Pe]),C=me,x=we,b=ee,A=Pe),(Ge.equals(P)===!1||lt!==I)&&(i.blendColor(Ge.r,Ge.g,Ge.b,lt),P.copy(Ge),I=lt),m=U,E=!1}function j(U,ce){U.side===2?Me(i.CULL_FACE):Q(i.CULL_FACE);let me=U.side===1;ce&&(me=!me),J(me),U.blending===1&&U.transparent===!1?te(0):te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const we=U.stencilWrite;o.setTest(we),we&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function K(U){U!==0?(Q(i.CULL_FACE),U!==D&&(U===1?i.cullFace(i.BACK):U===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),D=U}function pe(U){U!==O&&(X&&i.lineWidth(U),O=U)}function se(U,ce,me){U?(Q(i.POLYGON_OFFSET_FILL),(G!==ce||W!==me)&&(i.polygonOffset(ce,me),G=ce,W=me)):Me(i.POLYGON_OFFSET_FILL)}function de(U){U?Q(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ze(U){U===void 0&&(U=i.TEXTURE0+Y-1),he!==U&&(i.activeTexture(U),he=U)}function Ne(U,ce,me){me===void 0&&(he===null?me=i.TEXTURE0+Y-1:me=he);let we=xe[me];we===void 0&&(we={type:void 0,texture:void 0},xe[me]=we),(we.type!==U||we.texture!==ce)&&(he!==me&&(i.activeTexture(me),he=me),i.bindTexture(U,ce||Z[U]),we.type=U,we.texture=ce)}function T(){const U=xe[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){Ke.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function De(U){Xe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function Ce(U,ce){let me=l.get(ce);me===void 0&&(me=new WeakMap,l.set(ce,me));let we=me.get(U);we===void 0&&(we=i.getUniformBlockIndex(ce,U.name),me.set(U,we))}function _e(U,ce){const we=l.get(ce).get(U);c.get(ce)!==we&&(i.uniformBlockBinding(ce,we,U.__bindingPointIndex),c.set(ce,we))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,xe={},h={},f=new WeakMap,p=[],v=null,_=!1,m=null,d=null,C=null,x=null,g=null,b=null,A=null,P=new Ye(0,0,0),I=0,E=!1,y=null,D=null,O=null,G=null,W=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:Me,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:ke,setBlending:te,setMaterial:j,setFlipSided:J,setCullFace:K,setLineWidth:pe,setPolygonOffset:se,setScissorTest:de,activeTexture:ze,bindTexture:Ne,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Se,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:_e,texStorage2D:$,texStorage3D:ne,texSubImage2D:R,texSubImage3D:z,compressedTexSubImage2D:k,compressedTexSubImage3D:le,scissor:ue,viewport:De,reset:Ve}}function gp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return p?new OffscreenCanvas(T,S):Oi("canvas")}function _(T,S,B){let R=1;const z=Ne(T);if((z.width>B||z.height>B)&&(R=B/Math.max(z.width,z.height)),R<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(R*z.width),le=Math.floor(R*z.height);h===void 0&&(h=v(k,le));const $=S?v(k,le):h;return $.width=k,$.height=le,$.getContext("2d").drawImage(T,0,0,k,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+k+"x"+le+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,S,B,R,z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=S;if(S===i.RED&&(B===i.FLOAT&&(k=i.R32F),B===i.HALF_FLOAT&&(k=i.R16F),B===i.UNSIGNED_BYTE&&(k=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.R8UI),B===i.UNSIGNED_SHORT&&(k=i.R16UI),B===i.UNSIGNED_INT&&(k=i.R32UI),B===i.BYTE&&(k=i.R8I),B===i.SHORT&&(k=i.R16I),B===i.INT&&(k=i.R32I)),S===i.RG&&(B===i.FLOAT&&(k=i.RG32F),B===i.HALF_FLOAT&&(k=i.RG16F),B===i.UNSIGNED_BYTE&&(k=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RG8UI),B===i.UNSIGNED_SHORT&&(k=i.RG16UI),B===i.UNSIGNED_INT&&(k=i.RG32UI),B===i.BYTE&&(k=i.RG8I),B===i.SHORT&&(k=i.RG16I),B===i.INT&&(k=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGB8UI),B===i.UNSIGNED_SHORT&&(k=i.RGB16UI),B===i.UNSIGNED_INT&&(k=i.RGB32UI),B===i.BYTE&&(k=i.RGB8I),B===i.SHORT&&(k=i.RGB16I),B===i.INT&&(k=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),B===i.UNSIGNED_INT&&(k=i.RGBA32UI),B===i.BYTE&&(k=i.RGBA8I),B===i.SHORT&&(k=i.RGBA16I),B===i.INT&&(k=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),S===i.RGBA){const le=z?Ar:Qe.getTransfer(R);B===i.FLOAT&&(k=i.RGBA32F),B===i.HALF_FLOAT&&(k=i.RGBA16F),B===i.UNSIGNED_BYTE&&(k=le===st?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function g(T,S){let B;return T?S===null||S===1014||S===1020?B=i.DEPTH24_STENCIL8:S===1015?B=i.DEPTH32F_STENCIL8:S===1012&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?B=i.DEPTH_COMPONENT24:S===1015?B=i.DEPTH_COMPONENT32F:S===1012&&(B=i.DEPTH_COMPONENT16),B}function b(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){const S=T.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&u.delete(S)}function P(T){const S=T.target;S.removeEventListener("dispose",P),y(S)}function I(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,R=f.get(B);if(R){const z=R[S.__cacheKey];z.usedTimes--,z.usedTimes===0&&E(T),Object.keys(R).length===0&&f.delete(B)}n.remove(T)}function E(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const B=T.source,R=f.get(B);delete R[S.__cacheKey],a.memory.textures--}function y(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(S.__webglFramebuffer[R]))for(let z=0;z<S.__webglFramebuffer[R].length;z++)i.deleteFramebuffer(S.__webglFramebuffer[R][z]);else i.deleteFramebuffer(S.__webglFramebuffer[R]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[R])}else{if(Array.isArray(S.__webglFramebuffer))for(let R=0;R<S.__webglFramebuffer.length;R++)i.deleteFramebuffer(S.__webglFramebuffer[R]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let R=0;R<S.__webglColorRenderbuffer.length;R++)S.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[R]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let R=0,z=B.length;R<z;R++){const k=n.get(B[R]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(B[R])}n.remove(T)}let D=0;function O(){D=0}function G(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function W(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Y(T,S){const B=n.get(T);if(T.isVideoTexture&&de(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const R=T.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,T,S);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function X(T,S){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Z(B,T,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function ie(T,S){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Z(B,T,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function q(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Q(B,T,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const he={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},xe={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},fe={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Oe(T,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,he[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,xe[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));const R=S.source;let z=f.get(R);z===void 0&&(z={},f.set(R,z));const k=W(S);if(k!==T.__cacheKey){z[k]===void 0&&(z[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),z[k].usedTimes++;const le=z[T.__cacheKey];le!==void 0&&(z[T.__cacheKey].usedTimes--,le.usedTimes===0&&E(S)),T.__cacheKey=k,T.__webglTexture=z[k].texture}return B}function Xe(T,S,B){return Math.floor(Math.floor(T/B)/S)}function $e(T,S,B,R){const k=T.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,R,S.data);else{k.sort((re,ue)=>re.start-ue.start);let le=0;for(let re=1;re<k.length;re++){const ue=k[le],De=k[re],Ce=ue.start+ue.count,_e=Xe(De.start,S.width,4),Ve=Xe(ue.start,S.width,4);De.start<=Ce+1&&_e===Ve&&Xe(De.start+De.count-1,S.width,4)===_e?ue.count=Math.max(ue.count,De.start+De.count-ue.start):(++le,k[le]=De)}k.length=le+1;const $=i.getParameter(i.UNPACK_ROW_LENGTH),ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let re=0,ue=k.length;re<ue;re++){const De=k[re],Ce=Math.floor(De.start/4),_e=Math.ceil(De.count/4),Ve=Ce%S.width,U=Math.floor(Ce/S.width),ce=_e,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ve,U,ce,me,B,R,S.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,$),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Z(T,S,B){let R=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(R=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(R=i.TEXTURE_3D);const z=Ke(T,S),k=S.source;t.bindTexture(R,T.__webglTexture,i.TEXTURE0+B);const le=n.get(k);if(k.version!==le.__version||z===!0){t.activeTexture(i.TEXTURE0+B);const $=Qe.getPrimaries(Qe.workingColorSpace),ne=S.colorSpace===""?null:Qe.getPrimaries(S.colorSpace),Se=S.colorSpace===""||$===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let re=_(S.image,!1,r.maxTextureSize);re=ze(S,re);const ue=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Ce=x(S.internalFormat,ue,De,S.colorSpace,S.isVideoTexture);Oe(R,S);let _e;const Ve=S.mipmaps,U=S.isVideoTexture!==!0,ce=le.__version===void 0||z===!0,me=k.dataReady,we=b(S,re);if(S.isDepthTexture)Ce=g(S.format===1027,S.type),ce&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,ue,De,null));else if(S.isDataTexture)if(Ve.length>0){U&&ce&&t.texStorage2D(i.TEXTURE_2D,we,Ce,Ve[0].width,Ve[0].height);for(let ae=0,ee=Ve.length;ae<ee;ae++)_e=Ve[ae],U?me&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,ue,De,_e.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,_e.width,_e.height,0,ue,De,_e.data);S.generateMipmaps=!1}else U?(ce&&t.texStorage2D(i.TEXTURE_2D,we,Ce,re.width,re.height),me&&$e(S,re,ue,De)):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,ue,De,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ce,Ve[0].width,Ve[0].height,re.depth);for(let ae=0,ee=Ve.length;ae<ee;ae++)if(_e=Ve[ae],S.format!==1023)if(ue!==null)if(U){if(me)if(S.layerUpdates.size>0){const Pe=ba(_e.width,_e.height,S.format,S.type);for(const Ge of S.layerUpdates){const lt=_e.data.subarray(Ge*Pe/_e.data.BYTES_PER_ELEMENT,(Ge+1)*Pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ge,_e.width,_e.height,1,ue,lt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,re.depth,ue,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,re.depth,ue,De,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,_e.width,_e.height,re.depth,0,ue,De,_e.data)}else{U&&ce&&t.texStorage2D(i.TEXTURE_2D,we,Ce,Ve[0].width,Ve[0].height);for(let ae=0,ee=Ve.length;ae<ee;ae++)_e=Ve[ae],S.format!==1023?ue!==null?U?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,ue,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?me&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,ue,De,_e.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,_e.width,_e.height,0,ue,De,_e.data)}else if(S.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ce,re.width,re.height,re.depth),me)if(S.layerUpdates.size>0){const ae=ba(re.width,re.height,S.format,S.type);for(const ee of S.layerUpdates){const Pe=re.data.subarray(ee*ae/re.data.BYTES_PER_ELEMENT,(ee+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ue,De,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,De,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,ue,De,re.data);else if(S.isData3DTexture)U?(ce&&t.texStorage3D(i.TEXTURE_3D,we,Ce,re.width,re.height,re.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,De,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,ue,De,re.data);else if(S.isFramebufferTexture){if(ce)if(U)t.texStorage2D(i.TEXTURE_2D,we,Ce,re.width,re.height);else{let ae=re.width,ee=re.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ce,ae,ee,0,ue,De,null),ae>>=1,ee>>=1}}else if(Ve.length>0){if(U&&ce){const ae=Ne(Ve[0]);t.texStorage2D(i.TEXTURE_2D,we,Ce,ae.width,ae.height)}for(let ae=0,ee=Ve.length;ae<ee;ae++)_e=Ve[ae],U?me&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ue,De,_e):t.texImage2D(i.TEXTURE_2D,ae,Ce,ue,De,_e);S.generateMipmaps=!1}else if(U){if(ce){const ae=Ne(re);t.texStorage2D(i.TEXTURE_2D,we,Ce,ae.width,ae.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,De,re)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ue,De,re);m(S)&&d(R),le.__version=k.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Q(T,S,B){if(S.image.length!==6)return;const R=Ke(T,S),z=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const k=n.get(z);if(z.version!==k.__version||R===!0){t.activeTexture(i.TEXTURE0+B);const le=Qe.getPrimaries(Qe.workingColorSpace),$=S.colorSpace===""?null:Qe.getPrimaries(S.colorSpace),ne=S.colorSpace===""||le===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!Se&&!re?ue[ee]=_(S.image[ee],!0,r.maxCubemapSize):ue[ee]=re?S.image[ee].image:S.image[ee],ue[ee]=ze(S,ue[ee]);const De=ue[0],Ce=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),Ve=x(S.internalFormat,Ce,_e,S.colorSpace),U=S.isVideoTexture!==!0,ce=k.__version===void 0||R===!0,me=z.dataReady;let we=b(S,De);Oe(i.TEXTURE_CUBE_MAP,S);let ae;if(Se){U&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ve,De.width,De.height);for(let ee=0;ee<6;ee++){ae=ue[ee].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Ge=ae[Pe];S.format!==1023?Ce!==null?U?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ve,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ge.width,Ge.height,Ce,_e,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ve,Ge.width,Ge.height,0,Ce,_e,Ge.data)}}}else{if(ae=S.mipmaps,U&&ce){ae.length>0&&we++;const ee=Ne(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Ce,_e,ue[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,ue[ee].width,ue[ee].height,0,Ce,_e,ue[ee].data);for(let Pe=0;Pe<ae.length;Pe++){const lt=ae[Pe].image[ee].image;U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,lt.width,lt.height,Ce,_e,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ve,lt.width,lt.height,0,Ce,_e,lt.data)}}else{U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,_e,ue[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,Ce,_e,ue[ee]);for(let Pe=0;Pe<ae.length;Pe++){const Ge=ae[Pe];U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,Ce,_e,Ge.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ve,Ce,_e,Ge.image[ee])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),k.__version=z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Me(T,S,B,R,z,k){const le=s.convert(B.format,B.colorSpace),$=s.convert(B.type),ne=x(B.internalFormat,le,$,B.colorSpace),Se=n.get(S),re=n.get(B);if(re.__renderTarget=S,!Se.__hasExternalTextures){const ue=Math.max(1,S.width>>k),De=Math.max(1,S.height>>k);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,k,ne,ue,De,S.depth,0,le,$,null):t.texImage2D(z,k,ne,ue,De,0,le,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,z,re.__webglTexture,0,pe(S)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,R,z,re.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(T,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const R=S.depthTexture,z=R&&R.isDepthTexture?R.type:null,k=g(S.stencilBuffer,z),le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=pe(S);se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,k,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,k,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,k,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,T)}else{const R=S.textures;for(let z=0;z<R.length;z++){const k=R[z],le=s.convert(k.format,k.colorSpace),$=s.convert(k.type),ne=x(k.internalFormat,le,$,k.colorSpace),Se=pe(S);B&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ne,S.width,S.height):se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=n.get(S.depthTexture);R.__renderTarget=S,(!R.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const z=R.__webglTexture,k=pe(S);if(S.depthTexture.format===1026)se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(S.depthTexture.format===1027)se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function ke(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const R=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),R){const z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,R.removeEventListener("dispose",z)};R.addEventListener("dispose",z),S.__depthDisposeCallback=z}S.__boundDepthTexture=R}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const R=T.texture.mipmaps;R&&R.length>0?Ae(S.__webglFramebuffer[0],T):Ae(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[R]),S.__webglDepthbuffer[R]===void 0)S.__webglDepthbuffer[R]=i.createRenderbuffer(),Ee(S.__webglDepthbuffer[R],T,!1);else{const z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=S.__webglDepthbuffer[R];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,k)}}else{const R=T.texture.mipmaps;if(R&&R.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ee(S.__webglDepthbuffer,T,!1);else{const z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,S,B){const R=n.get(T);S!==void 0&&Me(R.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ke(T)}function w(T){const S=T.texture,B=n.get(T),R=n.get(S);T.addEventListener("dispose",P);const z=T.textures,k=T.isWebGLCubeRenderTarget===!0,le=z.length>1;if(le||(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=S.version,a.memory.textures++),k){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let ne=0;ne<S.mipmaps.length;ne++)B.__webglFramebuffer[$][ne]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(le)for(let $=0,ne=z.length;$<ne;$++){const Se=n.get(z[$]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&se(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<z.length;$++){const ne=z[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const Se=s.convert(ne.format,ne.colorSpace),re=s.convert(ne.type),ue=x(ne.internalFormat,Se,re,ne.colorSpace,T.isXRRenderTarget===!0),De=pe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Me(B.__webglFramebuffer[$][ne],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne);else Me(B.__webglFramebuffer[$],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let $=0,ne=z.length;$<ne;$++){const Se=z[$],re=n.get(Se);let ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),Oe(ue,Se),Me(B.__webglFramebuffer,T,Se,i.COLOR_ATTACHMENT0+$,ue,0),m(Se)&&d(ue)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,R.__webglTexture),Oe($,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Me(B.__webglFramebuffer[ne],T,S,i.COLOR_ATTACHMENT0,$,ne);else Me(B.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&d($),t.unbindTexture()}T.depthBuffer&&ke(T)}function te(T){const S=T.textures;for(let B=0,R=S.length;B<R;B++){const z=S[B];if(m(z)){const k=C(T),le=n.get(z).__webglTexture;t.bindTexture(k,le),d(k),t.unbindTexture()}}}const j=[],J=[];function K(T){if(T.samples>0){if(se(T)===!1){const S=T.textures,B=T.width,R=T.height;let z=i.COLOR_BUFFER_BIT;const k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(T),$=S.length>1;if($)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ne=T.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const re=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,B,R,0,0,B,R,z,i.NEAREST),c===!0&&(j.length=0,J.length=0,j.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(k),J.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const re=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function pe(T){return Math.min(r.maxSamples,T.samples)}function se(T){const S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(T){const S=a.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function ze(T,S){const B=T.colorSpace,R=T.format,z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==fi&&B!==""&&(Qe.getTransfer(B)===st?(R!==1023||z!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=q,this.rebindTextures=nt,this.setupRenderTarget=w,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=se}function _p(i,e){function t(n,r=""){let s;const a=Qe.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xp=`
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

}`;class Sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:vp,fragmentShader:xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yp extends gi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new Sp,d={},C=t.getContextAttributes();let x=null,g=null;const b=[],A=[],P=new ge;let I=null;const E=new Vt;E.viewport=new at;const y=new Vt;y.viewport=new at;const D=[E,y],O=new Gl;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=b[Z];return Q===void 0&&(Q=new ss,b[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=b[Z];return Q===void 0&&(Q=new ss,b[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=b[Z];return Q===void 0&&(Q=new ss,b[Z]=Q),Q.getHandSpace()};function Y(Z){const Q=A.indexOf(Z.inputSource);if(Q===-1)return;const Me=b[Q];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,l||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<b.length;Z++){const Q=A[Z];Q!==null&&(A[Z]=null,b[Z].disconnect(Q))}G=null,W=null,m.reset();for(const Z in d)delete d[Z];e.setRenderTarget(x),p=null,f=null,h=null,r=null,g=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ie),C.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ee=null,Ae=null;C.depth&&(Ae=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=C.stencil?1027:1026,Ee=C.stencil?1020:1014);const ke={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new On(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new yo(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new On(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let Q=0;Q<Z.removed.length;Q++){const Me=Z.removed[Q],Ee=A.indexOf(Me);Ee>=0&&(A[Ee]=null,b[Ee].disconnect(Me))}for(let Q=0;Q<Z.added.length;Q++){const Me=Z.added[Q];let Ee=A.indexOf(Me);if(Ee===-1){for(let ke=0;ke<b.length;ke++)if(ke>=A.length){A.push(Me),Ee=ke;break}else if(A[ke]===null){A[ke]=Me,Ee=ke;break}if(Ee===-1)break}const Ae=b[Ee];Ae&&Ae.connect(Me)}}const q=new L,he=new L;function xe(Z,Q,Me){q.setFromMatrixPosition(Q.matrixWorld),he.setFromMatrixPosition(Me.matrixWorld);const Ee=q.distanceTo(he),Ae=Q.projectionMatrix.elements,ke=Me.projectionMatrix.elements,nt=Ae[14]/(Ae[10]-1),w=Ae[14]/(Ae[10]+1),te=(Ae[9]+1)/Ae[5],j=(Ae[9]-1)/Ae[5],J=(Ae[8]-1)/Ae[0],K=(ke[8]+1)/ke[0],pe=nt*J,se=nt*K,de=Ee/(-J+K),ze=de*-J;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ze),Z.translateZ(de),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ne=nt+de,T=w+de,S=pe-ze,B=se+(Ee-ze),R=te*w/T*Ne,z=j*w/T*Ne;Z.projectionMatrix.makePerspective(S,B,R,z,Ne,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let Q=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),O.near=y.near=E.near=Q,O.far=y.far=E.far=Me,(G!==O.near||W!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,W=O.far),O.layers.mask=Z.layers.mask|6,E.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Ee=Z.parent,Ae=O.cameras;fe(O,Ee);for(let ke=0;ke<Ae.length;ke++)fe(Ae[ke],Ee);Ae.length===2?xe(O,E,y):O.projectionMatrix.copy(E.projectionMatrix),Oe(Z,O,Ee)};function Oe(Z,Q,Me){Me===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ni*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return d[Z]};let Ke=null;function Xe(Z,Q){if(u=Q.getViewerPose(l||a),v=Q,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let Ee=!1;Me.length!==O.cameras.length&&(O.cameras.length=0,Ee=!0);for(let w=0;w<Me.length;w++){const te=Me[w];let j=null;if(p!==null)j=p.getViewport(te);else{const K=h.getViewSubImage(f,te);j=K.viewport,w===0&&(e.setRenderTargetTextures(g,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(g))}let J=D[w];J===void 0&&(J=new Vt,J.layers.enable(w),J.viewport=new at,D[w]=J),J.matrix.fromArray(te.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(te.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(j.x,j.y,j.width,j.height),w===0&&(O.matrix.copy(J.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ee===!0&&O.cameras.push(J)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const w=h.getDepthInformation(Me[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let w=0;w<Me.length;w++){const te=Me[w].camera;if(te){let j=d[te];j||(j=new Mo,d[te]=j);const J=h.getCameraImage(te);j.sourceTexture=J}}}}for(let Me=0;Me<b.length;Me++){const Ee=A[Me],Ae=b[Me];Ee!==null&&Ae!==void 0&&Ae.update(Ee,Q,l||a)}Ke&&Ke(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const $e=new Fo;$e.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){Ke=Z},this.dispose=function(){}}}const In=new tn,Mp=new ot;function Ep(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,go(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,C,x,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,C,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const C=e.get(d),x=C.envMap,g=C.envMapRotation;x&&(m.envMap.value=x,In.copy(g),In.x*=-1,In.y*=-1,In.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),m.envMapRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(In)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,C,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*C,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,C){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const C=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ap(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,x){const g=x.program;n.uniformBlockBinding(C,g)}function l(C,x){let g=r[C.id];g===void 0&&(v(C),g=u(C),r[C.id]=g,C.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(C,b);const A=e.render.frame;s[C.id]!==A&&(f(C),s[C.id]=A)}function u(C){const x=h();C.__bindingPointIndex=x;const g=i.createBuffer(),b=C.__size,A=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,g),g}function h(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const x=r[C.id],g=C.uniforms,b=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,P=g.length;A<P;A++){const I=Array.isArray(g[A])?g[A]:[g[A]];for(let E=0,y=I.length;E<y;E++){const D=I[E];if(p(D,A,E,b)===!0){const O=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Y=0;Y<G.length;Y++){const X=G[Y],ie=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,x,g,b){const A=C.value,P=x+"_"+g;if(b[P]===void 0)return typeof A=="number"||typeof A=="boolean"?b[P]=A:b[P]=A.clone(),!0;{const I=b[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return b[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function v(C){const x=C.uniforms;let g=0;const b=16;for(let P=0,I=x.length;P<I;P++){const E=Array.isArray(x[P])?x[P]:[x[P]];for(let y=0,D=E.length;y<D;y++){const O=E[y],G=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Y=G.length;W<Y;W++){const X=G[W],ie=_(X),q=g%b,he=q%ie.boundary,xe=q+he;g+=he,xe!==0&&b-xe<ie.storage&&(g+=b-xe),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=g,g+=ie.storage}}}const A=g%b;return A>0&&(g+=b-A),C.__size=g,C.__cache={},this}function _(C){const x={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(x.boundary=4,x.storage=4):C.isVector2?(x.boundary=8,x.storage=8):C.isVector3||C.isColor?(x.boundary=16,x.storage=12):C.isVector4?(x.boundary=16,x.storage=16):C.isMatrix3?(x.boundary=48,x.storage=48):C.isMatrix4?(x.boundary=64,x.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),x}function m(C){const x=C.target;x.removeEventListener("dispose",m);const g=a.indexOf(x.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Tp{constructor(e={}){const{canvas:t=_c(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const C=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let b=!1;this._outputColorSpace=Ft;let A=0,P=0,I=null,E=-1,y=null;const D=new at,O=new at;let G=null;const W=new Ye(0);let Y=0,X=t.width,ie=t.height,q=1,he=null,xe=null;const fe=new at(0,0,X,ie),Oe=new at(0,0,X,ie);let Ke=!1;const Xe=new Is;let $e=!1,Z=!1;const Q=new ot,Me=new L,Ee=new at,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function nt(){return I===null?q:1}let w=n;function te(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ae,!1),w===null){const F="webgl2";if(w=te(F,M),w===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let j,J,K,pe,se,de,ze,Ne,T,S,B,R,z,k,le,$,ne,Se,re,ue,De,Ce,_e,Ve;function U(){j=new Ud(w),j.init(),Ce=new _p(w,j),J=new wd(w,j,e,Ce),K=new mp(w,j),J.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),pe=new Od(w),se=new np,de=new gp(w,j,K,se,J,Ce,pe),ze=new Rd(g),Ne=new Id(g),T=new Hl(w),_e=new Td(w,T),S=new Fd(w,T,pe,_e),B=new zd(w,S,T,pe),re=new Bd(w,J,de),$=new Cd(se),R=new tp(g,ze,Ne,j,J,_e,$),z=new Ep(g,se),k=new rp,le=new up(j),Se=new Ad(g,ze,Ne,K,B,p,c),ne=new fp(g,B,J),Ve=new Ap(w,pe,J,K),ue=new bd(w,j,pe),De=new Nd(w,j,pe),pe.programs=R.programs,g.capabilities=J,g.extensions=j,g.properties=se,g.renderLists=k,g.shadowMap=ne,g.state=K,g.info=pe}U();const ce=new yp(g,w);this.xr=ce,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=j.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=j.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(X,ie,!1))},this.getSize=function(M){return M.set(X,ie)},this.setSize=function(M,F,V=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,ie=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),V===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*q,ie*q).floor()},this.setDrawingBufferSize=function(M,F,V){X=M,ie=F,q=V,t.width=Math.floor(M*V),t.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(fe)},this.setViewport=function(M,F,V,H){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,F,V,H),K.viewport(D.copy(fe).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,F,V,H){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,F,V,H),K.scissor(O.copy(Oe).multiplyScalar(q).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){K.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){xe=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,V=!0){let H=0;if(M){let N=!1;if(I!==null){const oe=I.texture.format;N=oe===1033||oe===1031||oe===1029}if(N){const oe=I.texture.type,ye=oe===1009||oe===1014||oe===1012||oe===1020||oe===1017||oe===1018,Re=Se.getClearColor(),be=Se.getClearAlpha(),Fe=Re.r,Be=Re.g,Ie=Re.b;ye?(v[0]=Fe,v[1]=Be,v[2]=Ie,v[3]=be,w.clearBufferuiv(w.COLOR,0,v)):(_[0]=Fe,_[1]=Be,_[2]=Ie,_[3]=be,w.clearBufferiv(w.COLOR,0,_))}else H|=w.COLOR_BUFFER_BIT}F&&(H|=w.DEPTH_BUFFER_BIT),V&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Se.dispose(),k.dispose(),le.dispose(),se.dispose(),ze.dispose(),Ne.dispose(),B.dispose(),_e.dispose(),Ve.dispose(),R.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",rn),ce.removeEventListener("sessionend",zs),bn.stop()};function me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=pe.autoReset,F=ne.enabled,V=ne.autoUpdate,H=ne.needsUpdate,N=ne.type;U(),pe.autoReset=M,ne.enabled=F,ne.autoUpdate=V,ne.needsUpdate=H,ne.type=N}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ee(M){const F=M.target;F.removeEventListener("dispose",ee),Pe(F)}function Pe(M){Ge(M),se.remove(M)}function Ge(M){const F=se.get(M).programs;F!==void 0&&(F.forEach(function(V){R.releaseProgram(V)}),M.isShaderMaterial&&R.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,H,N,oe){F===null&&(F=Ae);const ye=N.isMesh&&N.matrixWorld.determinant()<0,Re=Yo(M,F,V,H,N);K.setMaterial(H,ye);let be=V.index,Fe=1;if(H.wireframe===!0){if(be=S.getWireframeAttribute(V),be===void 0)return;Fe=2}const Be=V.drawRange,Ie=V.attributes.position;let Je=Be.start*Fe,it=(Be.start+Be.count)*Fe;oe!==null&&(Je=Math.max(Je,oe.start*Fe),it=Math.min(it,(oe.start+oe.count)*Fe)),be!==null?(Je=Math.max(Je,0),it=Math.min(it,be.count)):Ie!=null&&(Je=Math.max(Je,0),it=Math.min(it,Ie.count));const gt=it-Je;if(gt<0||gt===1/0)return;_e.setup(N,H,Re,V,be);let ut,ct=ue;if(be!==null&&(ut=T.get(be),ct=De,ct.setIndex(ut)),N.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*nt()),ct.setMode(w.LINES)):ct.setMode(w.TRIANGLES);else if(N.isLine){let Ue=H.linewidth;Ue===void 0&&(Ue=1),K.setLineWidth(Ue*nt()),N.isLineSegments?ct.setMode(w.LINES):N.isLineLoop?ct.setMode(w.LINE_LOOP):ct.setMode(w.LINE_STRIP)}else N.isPoints?ct.setMode(w.POINTS):N.isSprite&&ct.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Bi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ue=N._multiDrawStarts,dt=N._multiDrawCounts,je=N._multiDrawCount,Ot=be?T.get(be).bytesPerElement:1,Vn=se.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<je;Bt++)Vn.setValue(w,"_gl_DrawID",Bt),ct.render(Ue[Bt]/Ot,dt[Bt])}else if(N.isInstancedMesh)ct.renderInstances(Je,gt,N.count);else if(V.isInstancedBufferGeometry){const Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,dt=Math.min(V.instanceCount,Ue);ct.renderInstances(Je,gt,dt)}else ct.render(Je,gt)};function lt(M,F,V){M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,Xi(M,F,V),M.side=0,M.needsUpdate=!0,Xi(M,F,V),M.side=2):Xi(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),d=le.get(V),d.init(F),x.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==V&&M.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let ye=0;ye<oe.length;ye++){const Re=oe[ye];lt(Re,V,N),H.add(Re)}else lt(oe,V,N),H.add(oe)}),d=x.pop(),H},this.compileAsync=function(M,F,V=null){const H=this.compile(M,F,V);return new Promise(N=>{function oe(){if(H.forEach(function(ye){se.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){N(M);return}setTimeout(oe,10)}j.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let et=null;function cn(M){et&&et(M)}function rn(){bn.stop()}function zs(){bn.start()}const bn=new Fo;bn.setAnimationLoop(cn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(M){et=M,ce.setAnimationLoop(M),M===null?bn.stop():bn.start()},ce.addEventListener("sessionstart",rn),ce.addEventListener("sessionend",zs),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,F,I),d=le.get(M,x.length),d.init(F),x.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xe.setFromProjectionMatrix(Q,2e3,F.reversedDepth),Z=this.localClippingEnabled,$e=$.init(this.clippingPlanes,Z),m=k.get(M,C.length),m.init(),C.push(m),ce.enabled===!0&&ce.isPresenting===!0){const oe=g.xr.getDepthSensingMesh();oe!==null&&Nr(oe,F,-1/0,g.sortObjects)}Nr(M,F,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(he,xe),ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ke&&Se.addToRenderList(m,M),this.info.render.frame++,$e===!0&&$.beginShadows();const V=d.state.shadowsArray;ne.render(V,M,F),$e===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(d.setupLights(),F.isArrayCamera){const oe=F.cameras;if(N.length>0)for(let ye=0,Re=oe.length;ye<Re;ye++){const be=oe[ye];Gs(H,N,M,be)}ke&&Se.render(M);for(let ye=0,Re=oe.length;ye<Re;ye++){const be=oe[ye];ks(m,M,be,be.viewport)}}else N.length>0&&Gs(H,N,M,F),ke&&Se.render(M),ks(m,M,F);I!==null&&P===0&&(de.updateMultisampleRenderTarget(I),de.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(g,M,F),_e.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(d=x[x.length-1],$e===!0&&$.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Nr(M,F,V,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Xe.intersectsSprite(M)){H&&Ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const ye=B.update(M),Re=M.material;Re.visible&&m.push(M,ye,Re,V,Ee.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Xe.intersectsObject(M))){const ye=B.update(M),Re=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ee.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ee.copy(ye.boundingSphere.center)),Ee.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(Re)){const be=ye.groups;for(let Fe=0,Be=be.length;Fe<Be;Fe++){const Ie=be[Fe],Je=Re[Ie.materialIndex];Je&&Je.visible&&m.push(M,ye,Je,V,Ee.z,Ie)}}else Re.visible&&m.push(M,ye,Re,V,Ee.z,null)}}const oe=M.children;for(let ye=0,Re=oe.length;ye<Re;ye++)Nr(oe[ye],F,V,H)}function ks(M,F,V,H){const N=M.opaque,oe=M.transmissive,ye=M.transparent;d.setupLightsView(V),$e===!0&&$.setGlobalState(g.clippingPlanes,V),H&&K.viewport(D.copy(H)),N.length>0&&Wi(N,F,V),oe.length>0&&Wi(oe,F,V),ye.length>0&&Wi(ye,F,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Gs(M,F,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new On(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const oe=d.state.transmissionRenderTarget[H.id],ye=H.viewport||D;oe.setSize(ye.z*g.transmissionResolutionScale,ye.w*g.transmissionResolutionScale);const Re=g.getRenderTarget(),be=g.getActiveCubeFace(),Fe=g.getActiveMipmapLevel();g.setRenderTarget(oe),g.getClearColor(W),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear(),ke&&Se.render(V);const Be=g.toneMapping;g.toneMapping=0;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),$e===!0&&$.setGlobalState(g.clippingPlanes,H),Wi(M,V,H),de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe),j.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let it=0,gt=F.length;it<gt;it++){const ut=F[it],ct=ut.object,Ue=ut.geometry,dt=ut.material,je=ut.group;if(dt.side===2&&ct.layers.test(H.layers)){const Ot=dt.side;dt.side=1,dt.needsUpdate=!0,Vs(ct,V,H,Ue,dt,je),dt.side=Ot,dt.needsUpdate=!0,Je=!0}}Je===!0&&(de.updateMultisampleRenderTarget(oe),de.updateRenderTargetMipmap(oe))}g.setRenderTarget(Re,be,Fe),g.setClearColor(W,Y),Ie!==void 0&&(H.viewport=Ie),g.toneMapping=Be}function Wi(M,F,V){const H=F.isScene===!0?F.overrideMaterial:null;for(let N=0,oe=M.length;N<oe;N++){const ye=M[N],Re=ye.object,be=ye.geometry,Fe=ye.group;let Be=ye.material;Be.allowOverride===!0&&H!==null&&(Be=H),Re.layers.test(V.layers)&&Vs(Re,F,V,be,Be,Fe)}}function Vs(M,F,V,H,N,oe){M.onBeforeRender(g,F,V,H,N,oe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(g,F,V,H,M,oe),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,g.renderBufferDirect(V,F,H,N,M,oe),N.side=0,N.needsUpdate=!0,g.renderBufferDirect(V,F,H,N,M,oe),N.side=2):g.renderBufferDirect(V,F,H,N,M,oe),M.onAfterRender(g,F,V,H,N,oe)}function Xi(M,F,V){F.isScene!==!0&&(F=Ae);const H=se.get(M),N=d.state.lights,oe=d.state.shadowsArray,ye=N.state.version,Re=R.getParameters(M,N.state,oe,F,V),be=R.getProgramCacheKey(Re);let Fe=H.programs;H.environment=M.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(M.isMeshStandardMaterial?Ne:ze).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",ee),Fe=new Map,H.programs=Fe);let Be=Fe.get(be);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===ye)return qs(M,Re),Be}else Re.uniforms=R.getUniforms(M),M.onBeforeCompile(Re,g),Be=R.acquireProgram(Re,be),Fe.set(be,Be),H.uniforms=Re.uniforms;const Ie=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=$.uniform),qs(M,Re),H.needsLights=Zo(M),H.lightsStateVersion=ye,H.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function Hs(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=yr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function qs(M,F){const V=se.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Yo(M,F,V,H,N){F.isScene!==!0&&(F=Ae),de.resetTextureUnits();const oe=F.fog,ye=H.isMeshStandardMaterial?F.environment:null,Re=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fi,be=(H.isMeshStandardMaterial?Ne:ze).get(H.envMap||ye),Fe=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,it=!!V.morphAttributes.color;let gt=0;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gt=g.toneMapping);const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=ut!==void 0?ut.length:0,Ue=se.get(H),dt=d.state.lights;if($e===!0&&(Z===!0||M!==y)){const Pt=M===y&&H.id===E;$.setState(H,M,Pt)}let je=!1;H.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==dt.state.version||Ue.outputColorSpace!==Re||N.isBatchedMesh&&Ue.batching===!1||!N.isBatchedMesh&&Ue.batching===!0||N.isBatchedMesh&&Ue.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ue.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ue.instancing===!1||!N.isInstancedMesh&&Ue.instancing===!0||N.isSkinnedMesh&&Ue.skinning===!1||!N.isSkinnedMesh&&Ue.skinning===!0||N.isInstancedMesh&&Ue.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ue.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ue.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ue.instancingMorph===!1&&N.morphTexture!==null||Ue.envMap!==be||H.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==$.numPlanes||Ue.numIntersection!==$.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==Be||Ue.morphTargets!==Ie||Ue.morphNormals!==Je||Ue.morphColors!==it||Ue.toneMapping!==gt||Ue.morphTargetsCount!==ct)&&(je=!0):(je=!0,Ue.__version=H.version);let Ot=Ue.currentProgram;je===!0&&(Ot=Xi(H,F,N));let Vn=!1,Bt=!1,xi=!1;const ft=Ot.getUniforms(),Ht=Ue.uniforms;if(K.useProgram(Ot.program)&&(Vn=!0,Bt=!0,xi=!0),H.id!==E&&(E=H.id,Bt=!0),Vn||y!==M){K.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(w,"projectionMatrix",M.projectionMatrix),ft.setValue(w,"viewMatrix",M.matrixWorldInverse);const Ut=ft.map.cameraPosition;Ut!==void 0&&Ut.setValue(w,Me.setFromMatrixPosition(M.matrixWorld)),J.logarithmicDepthBuffer&&ft.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Bt=!0,xi=!0)}if(N.isSkinnedMesh){ft.setOptional(w,N,"bindMatrix"),ft.setOptional(w,N,"bindMatrixInverse");const Pt=N.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(w,"boneTexture",Pt.boneTexture,de))}N.isBatchedMesh&&(ft.setOptional(w,N,"batchingTexture"),ft.setValue(w,"batchingTexture",N._matricesTexture,de),ft.setOptional(w,N,"batchingIdTexture"),ft.setValue(w,"batchingIdTexture",N._indirectTexture,de),ft.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ft.setValue(w,"batchingColorTexture",N._colorsTexture,de));const qt=V.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&re.update(N,V,Ot),(Bt||Ue.receiveShadow!==N.receiveShadow)&&(Ue.receiveShadow=N.receiveShadow,ft.setValue(w,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ht.envMap.value=be,Ht.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Ht.envMapIntensity.value=F.environmentIntensity),Bt&&(ft.setValue(w,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&$o(Ht,xi),oe&&H.fog===!0&&z.refreshFogUniforms(Ht,oe),z.refreshMaterialUniforms(Ht,H,q,ie,d.state.transmissionRenderTarget[M.id]),yr.upload(w,Hs(Ue),Ht,de)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(yr.upload(w,Hs(Ue),Ht,de),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(w,"center",N.center),ft.setValue(w,"modelViewMatrix",N.modelViewMatrix),ft.setValue(w,"normalMatrix",N.normalMatrix),ft.setValue(w,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let Ut=0,Or=Pt.length;Ut<Or;Ut++){const wn=Pt[Ut];Ve.update(wn,Ot),Ve.bind(wn,Ot)}}return Ot}function $o(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Zo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,F,V){const H=se.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),se.get(M.texture).__webglTexture=F,se.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const V=se.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Ko=w.createFramebuffer();this.setRenderTarget=function(M,F=0,V=0){I=M,A=F,P=V;let H=!0,N=null,oe=!1,ye=!1;if(M){const be=se.get(M);if(be.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)de.setupRenderTarget(M);else if(be.__hasExternalTextures)de.rebindTextures(M,se.get(M.texture).__webglTexture,se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ie=M.depthTexture;if(be.__boundDepthTexture!==Ie){if(Ie!==null&&se.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Be=se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?N=Be[F][V]:N=Be[F],oe=!0):M.samples>0&&de.useMultisampledRTT(M)===!1?N=se.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[V]:N=Be,D.copy(M.viewport),O.copy(M.scissor),G=M.scissorTest}else D.copy(fe).multiplyScalar(q).floor(),O.copy(Oe).multiplyScalar(q).floor(),G=Ke;if(V!==0&&(N=Ko),K.bindFramebuffer(w.FRAMEBUFFER,N)&&H&&K.drawBuffers(M,N),K.viewport(D),K.scissor(O),K.setScissorTest(G),oe){const be=se.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,V)}else if(ye){const be=F;for(let Fe=0;Fe<M.textures.length;Fe++){const Be=se.get(M.textures[Fe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,V,be)}}else if(M!==null&&V!==0){const be=se.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,be.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(M,F,V,H,N,oe,ye,Re=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){K.bindFramebuffer(w.FRAMEBUFFER,be);try{const Fe=M.textures[Re],Be=Fe.format,Ie=Fe.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&V>=0&&V<=M.height-N&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Re),w.readPixels(F,V,H,N,Ce.convert(Be),Ce.convert(Ie),oe))}finally{const Fe=I!==null?se.get(I).__webglFramebuffer:null;K.bindFramebuffer(w.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,F,V,H,N,oe,ye,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(F>=0&&F<=M.width-H&&V>=0&&V<=M.height-N){K.bindFramebuffer(w.FRAMEBUFFER,be);const Fe=M.textures[Re],Be=Fe.format,Ie=Fe.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Je),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Re),w.readPixels(F,V,H,N,Ce.convert(Be),Ce.convert(Ie),0);const it=I!==null?se.get(I).__webglFramebuffer:null;K.bindFramebuffer(w.FRAMEBUFFER,it);const gt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await vc(w,gt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Je),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(Je),w.deleteSync(gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,V=0){const H=Math.pow(2,-V),N=Math.floor(M.image.width*H),oe=Math.floor(M.image.height*H),ye=F!==null?F.x:0,Re=F!==null?F.y:0;de.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,ye,Re,N,oe),K.unbindTexture()};const Jo=w.createFramebuffer(),jo=w.createFramebuffer();this.copyTextureToTexture=function(M,F,V=null,H=null,N=0,oe=null){oe===null&&(N!==0?(Bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let ye,Re,be,Fe,Be,Ie,Je,it,gt;const ut=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(V!==null)ye=V.max.x-V.min.x,Re=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Be=V.min.y,Ie=V.isBox3?V.min.z:0;else{const qt=Math.pow(2,-N);ye=Math.floor(ut.width*qt),Re=Math.floor(ut.height*qt),M.isDataArrayTexture?be=ut.depth:M.isData3DTexture?be=Math.floor(ut.depth*qt):be=1,Fe=0,Be=0,Ie=0}H!==null?(Je=H.x,it=H.y,gt=H.z):(Je=0,it=0,gt=0);const ct=Ce.convert(F.format),Ue=Ce.convert(F.type);let dt;F.isData3DTexture?(de.setTexture3D(F,0),dt=w.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(de.setTexture2DArray(F,0),dt=w.TEXTURE_2D_ARRAY):(de.setTexture2D(F,0),dt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const je=w.getParameter(w.UNPACK_ROW_LENGTH),Ot=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Vn=w.getParameter(w.UNPACK_SKIP_PIXELS),Bt=w.getParameter(w.UNPACK_SKIP_ROWS),xi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ut.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ut.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Fe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Be),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie);const ft=M.isDataArrayTexture||M.isData3DTexture,Ht=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const qt=se.get(M),Pt=se.get(F),Ut=se.get(qt.__renderTarget),Or=se.get(Pt.__renderTarget);K.bindFramebuffer(w.READ_FRAMEBUFFER,Ut.__webglFramebuffer),K.bindFramebuffer(w.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let wn=0;wn<be;wn++)ft&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,se.get(M).__webglTexture,N,Ie+wn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,se.get(F).__webglTexture,oe,gt+wn)),w.blitFramebuffer(Fe,Be,ye,Re,Je,it,ye,Re,w.DEPTH_BUFFER_BIT,w.NEAREST);K.bindFramebuffer(w.READ_FRAMEBUFFER,null),K.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||se.has(M)){const qt=se.get(M),Pt=se.get(F);K.bindFramebuffer(w.READ_FRAMEBUFFER,Jo),K.bindFramebuffer(w.DRAW_FRAMEBUFFER,jo);for(let Ut=0;Ut<be;Ut++)ft?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,qt.__webglTexture,N,Ie+Ut):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,qt.__webglTexture,N),Ht?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pt.__webglTexture,oe,gt+Ut):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pt.__webglTexture,oe),N!==0?w.blitFramebuffer(Fe,Be,ye,Re,Je,it,ye,Re,w.COLOR_BUFFER_BIT,w.NEAREST):Ht?w.copyTexSubImage3D(dt,oe,Je,it,gt+Ut,Fe,Be,ye,Re):w.copyTexSubImage2D(dt,oe,Je,it,Fe,Be,ye,Re);K.bindFramebuffer(w.READ_FRAMEBUFFER,null),K.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ht?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(dt,oe,Je,it,gt,ye,Re,be,ct,Ue,ut.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(dt,oe,Je,it,gt,ye,Re,be,ct,ut.data):w.texSubImage3D(dt,oe,Je,it,gt,ye,Re,be,ct,Ue,ut):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,Je,it,ye,Re,ct,Ue,ut.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,Je,it,ut.width,ut.height,ct,ut.data):w.texSubImage2D(w.TEXTURE_2D,oe,Je,it,ye,Re,ct,Ue,ut);w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ot),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,xi),oe===0&&F.generateMipmaps&&w.generateMipmap(dt),K.unbindTexture()},this.initRenderTarget=function(M){se.get(M).__webglFramebuffer===void 0&&de.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?de.setTextureCube(M,0):M.isData3DTexture?de.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?de.setTexture2DArray(M,0):de.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,K.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class bp extends xo{constructor(){super();const e=new Tn;e.deleteAttribute("uv");const t=new Vi({side:1}),n=new Vi,r=new Bl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ht(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Wc(e,n,6),o=new Mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new ht(e,ri(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new ht(e,ri(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new ht(e,ri(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new ht(e,ri(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new ht(e,ri(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new ht(e,ri(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ri(i){return new Rl({color:0,emissive:16777215,emissiveIntensity:i})}function rt(i,e=0,t=.65){return new Vi({color:i,metalness:e,roughness:t})}function Le(i,e,t,n){const r=new ht(new Tn(...e),n);return r.position.set(...t),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Xt(i,e,t,n,r,s=24){const a=new ht(new Dr(e,e,t,s),r);return a.position.set(...n),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Rt(i,e,t,n,r){const s=new L(...e),a=new L(...t),o=Xt(i,n,s.distanceTo(a),s.clone().add(a).multiplyScalar(.5).toArray(),r,8);return o.quaternion.setFromUnitVectors(new L(0,1,0),a.sub(s).normalize()),o}class wp{constructor(e,t,n,r,s){this.host=e,this.scene=new xo,this.camera=new Vt(38,1,.1,160),this.root=new St,this.reduced=matchMedia("(prefers-reduced-motion: reduce)"),this.labels=[],this.callbacks=new Map,this.drags=new Map,this.skipClick=!1,this.lastHit=null,this.ray=new Uo,this.pointer=new ge,this.target=new L,this.frame=()=>{},this.draw=null,this.resized=()=>{},this.reserveRight=0,this.last=0,this.controller=new AbortController,this.viewWidth=20,this.content=null,this.contentMargin=.94,this.offset=new L,this.hover=null,this.disposed=!1,this.renderer=new Tp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.setAttribute("aria-hidden","true"),e.prepend(this.renderer.domElement),this.scene.background=new Ye(t),this.scene.fog=new Pr(t,36,85),this.scene.add(this.root),this.target.set(...r),this.camera.position.set(...n),this.camera.lookAt(this.target),this.viewWidth=s,this.offset.copy(this.camera.position).sub(this.target);const a=new bp,o=new bs(this.renderer);this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.45,a.dispose(),o.dispose();const c=new Nl(14149615,2370868,1.2);c.name="ambient",this.scene.add(c);const l=new Ea(16768426,3.5);l.name="key",l.position.set(-8,15,9),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.5,far:65}),l.shadow.bias=-5e-4,l.shadow.normalBias=.03,this.scene.add(l);const u=new Ea(8960969,1.3);u.name="fill",u.position.set(8,8,-10),this.scene.add(u);const h={signal:this.controller.signal};let f=null,p=0;const v=_=>{var m;return _.target===this.renderer.domElement?this.hit(_):((m=this.labels.find(d=>d.element===_.target))==null?void 0:m.object)??null};e.addEventListener("pointerdown",_=>{const m=v(_),d=m?this.drags.get(m):void 0;d&&(f={callback:d,x:_.clientX,y:_.clientY,acc:0,moved:!1},_.target.setPointerCapture(_.pointerId))},h),e.addEventListener("pointermove",_=>{if(f){f.acc+=_.clientX-f.x+(f.y-_.clientY),f.x=_.clientX,f.y=_.clientY;const m=Math.trunc(f.acc/3);m&&(f.callback(m),f.acc-=m*3,f.moved=!0);return}_.target===this.renderer.domElement&&(this.hover=this.hit(_),this.renderer.domElement.style.cursor=this.hover?"pointer":"default")},h),e.addEventListener("wheel",_=>{const m=v(_),d=m?this.drags.get(m):void 0;if(!d)return;_.preventDefault(),p-=_.deltaY;const C=Math.trunc(p/20);C&&(d(C),p-=C*20)},{signal:this.controller.signal,passive:!1}),e.addEventListener("pointerup",()=>{this.skipClick=(f==null?void 0:f.moved)??!1,f=null},h),e.addEventListener("pointercancel",()=>{f=null},h),this.renderer.domElement.addEventListener("click",_=>{var d;if(this.skipClick){this.skipClick=!1;return}const m=this.hit(_);m&&((d=this.callbacks.get(m))==null||d())},h),this.renderer.domElement.addEventListener("webglcontextlost",_=>{_.preventDefault(),this.renderer.setAnimationLoop(null),this.host.dispatchEvent(new CustomEvent("scene-lost"))},h),this.renderer.domElement.addEventListener("webglcontextrestored",()=>location.reload(),h),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),this.renderer.setAnimationLoop(_=>{const m=Math.min((_-this.last)/1e3||0,.05);this.last=_,!document.hidden&&(this.frame(m,_/1e3),this.project(),this.draw?this.draw():this.renderer.render(this.scene,this.camera))}),window.addEventListener("pagehide",()=>this.dispose(),{once:!0,signal:this.controller.signal})}fitTo(e,t=.96){this.content=e.map(n=>n.clone()),this.contentMargin=t,this.resize()}resize(){const e=this.host.clientWidth,t=Math.max(1,this.host.clientHeight),n=Math.max(1,e-Math.min(this.reserveRight,e/2));if(this.renderer.setSize(e,t),this.camera.aspect=n/t,n<e?this.camera.setViewOffset(n,t,0,0,e,t):this.camera.clearViewOffset(),this.content)this.frameContent();else{const r=this.camera.position.distanceTo(this.target);this.camera.fov=Br.radToDeg(2*Math.atan(Math.max(this.viewWidth/this.camera.aspect,12)/(r*2)))}this.camera.updateProjectionMatrix(),this.project(),this.resized(e,t)}frameContent(){const e=this.content,t=new L,n=new L;for(const r of e)n.add(r);n.divideScalar(e.length);for(let r=0;r<3;r++){this.target.copy(n),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld();let s=1/0,a=-1/0,o=1/0,c=-1/0;for(const p of e){t.copy(p).applyMatrix4(this.camera.matrixWorldInverse);const v=Math.max(.1,-t.z);s=Math.min(s,t.x/v),a=Math.max(a,t.x/v),o=Math.min(o,t.y/v),c=Math.max(c,t.y/v)}const l=Math.max(.02,(c-o)/2,(a-s)/2/this.camera.aspect);if(this.camera.fov=Br.clamp(Br.radToDeg(2*Math.atan(l/this.contentMargin)),8,80),r===2)break;const u=this.offset.length(),h=new L().setFromMatrixColumn(this.camera.matrixWorld,0),f=new L().setFromMatrixColumn(this.camera.matrixWorld,1);n.addScaledVector(h,(a+s)/2*u).addScaledVector(f,(c+o)/2*u)}}lighting(e,t,n,r){this.scene.getObjectByName("ambient").intensity=e,this.scene.getObjectByName("key").intensity=t,this.scene.getObjectByName("fill").intensity=n,this.scene.environmentIntensity=r}hit(e){var s;const t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const n=this.ray.intersectObjects([...this.callbacks.keys()],!0);this.lastHit=n[0]??null;let r=((s=n[0])==null?void 0:s.object)??null;for(;r&&!this.callbacks.has(r);)r=r.parent;return r}interact(e,t,n,r=[0,.6,0]){this.callbacks.set(e,n);const s=document.createElement("button");return s.type="button",s.className="object-label",s.textContent=t,s.title=t,s.setAttribute("aria-label",t),s.addEventListener("click",()=>{if(this.skipClick){this.skipClick=!1;return}n()}),this.host.append(s),s.addEventListener("focus",()=>s.classList.add("targeted")),s.addEventListener("blur",()=>s.classList.remove("targeted")),this.labels.push({element:s,object:e,offset:new L(...r)}),s}project(){this.scene.updateMatrixWorld(),this.camera.updateMatrixWorld();for(const e of this.labels){const t=e.object.localToWorld(e.offset.clone()).project(this.camera);e.element.style.left=`${(t.x+1)/2*100}%`,e.element.style.top=`${(1-t.y)/2*100}%`;let n=e.object.visible;e.object.traverseAncestors(r=>{n=n&&r.visible}),e.element.hidden=!n||t.z>1}}describeObjects(){const e=this.host.getBoundingClientRect();return this.labels.map(t=>{const n=t.object.getWorldPosition(new L).project(this.camera);return{name:t.element.textContent,x:e.left+(n.x+1)/2*e.width,y:e.top+(1-n.y)/2*e.height}})}dispose(){if(this.disposed)return;this.disposed=!0,this.renderer.setAnimationLoop(null),this.observer.disconnect(),this.controller.abort();const e=new Set,t=new Set,n=new Set;this.scene.traverse(r=>{if(r instanceof ht||r instanceof ys){e.add(r.geometry);for(const s of Array.isArray(r.material)?r.material:[r.material]){t.add(s);for(const a of Object.values(s))a instanceof bt&&n.add(a)}}}),e.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),this.environment.dispose(),this.renderer.dispose()}}const xt={schemaVersion:1,saveVersion:1,sourceCount:6,maxRequests:90,maxText:1600,maxNumber:1e6,maxFileBytes:5e5,maxSaveBytes:1e5,stepSeconds:1,frameMs:100,millisecondsPerSecond:1e3,revisionLimit:2,moneyPrecision:100,visual:{terminalDeckY:.42,laneMarkY:.455,serviceLaneX:10.2,sourceVesselX:-10,equipmentHeight:.65,liftHeight:2.6,carrySeconds:1.1,arcHeight:1.4,gateSeconds:.8,playbackRate:1500,lateLotX:.4,lateLotZ:5.7}},sn=i=>Math.round(i*xt.moneyPrecision)/xt.moneyPrecision;function ko(i,e){const t=[],n=new Map(i.zones.map(r=>[r.id,0]));Object.keys(e).some(r=>!i.sources.some(s=>s.id===r))&&t.push("The plan has an unknown source.");for(const r of i.sources){const s=e[r.id];if(!s){t.push(`Assign ${r.label}.`);continue}r.routes.find(o=>o.zoneId===s.zoneId)||t.push(`${r.label}: this destination is not eligible.`),i.retentionOptions.includes(s.days)||t.push(`${r.label}: select a valid retention policy.`),n.set(s.zoneId,(n.get(s.zoneId)??0)+r.volume)}for(const r of i.zones)(n.get(r.id)??0)>r.capacity&&t.push(`${r.label}: capacity exceeded (${n.get(r.id)} / ${r.capacity} ${i.unit}).`);return t}function Ui(i,e,t,n=[]){const r=ko(i,t);if(r.length)throw new Error(r.join(" "));const s=new Map(i.zones.map(_=>[_.id,Array(_.workers).fill(0)]));let a=0,o=0;const c=[],l=[];for(const _ of i.sources){const m=t[_.id],d=i.zones.find(x=>x.id===m.zoneId),C=_.routes.find(x=>x.zoneId===d.id);a+=_.volume*m.days*d.storagePerUnitDay,o+=_.volume*C.transferPerUnit,m.days<_.requiredDays&&c.push(_.id),C.access==="unknown"&&!n.includes(_.id)&&l.push(_.id)}const h=e.requests.map((_,m)=>{const d=i.sources.find(x=>x.id===_.sourceId),C=d.routes.find(x=>x.zoneId===t[d.id].zoneId);return{request:_,order:m,ready:Math.max(_.arrival,C.setupSeconds)}}).sort((_,m)=>_.ready-m.ready||_.request.arrival-m.request.arrival||_.order-m.order).map(({request:_,ready:m})=>{const d=i.sources.find(G=>G.id===_.sourceId),C=t[d.id],x=d.routes.find(G=>G.zoneId===C.zoneId),g=x.access==="unknown"&&n.includes(d.id)?x.verifiedAccess:x.access;let b="met";g==="denied"?b="access-denied":g==="unknown"?b="access-unknown":_.ageDays>C.days&&(b="expired");let A=_.arrival,P=_.arrival,I=0,E=0,y=0,D=0,O=0;if(b==="met"){const G=s.get(C.zoneId),W=G.indexOf(Math.min(...G));A=Math.max(m,G[W]),E=(x.prepareSeconds??0)*_.units,y=(x.prepareCost??0)*_.units,I=x.serviceSeconds*_.units,P=A+E+I,G[W]=P,D=_.units*x.queryCost,O=_.units*x.resultTransferCost,P-_.arrival>_.deadline&&(b="late")}return{id:_.id,sourceId:d.id,zoneId:C.zoneId,arrival:_.arrival,ready:m,start:A,finish:P,setupWait:I?m-_.arrival:0,queueWait:I?A-m:0,prepare:E,service:I,elapsed:P-_.arrival,deadline:_.deadline,critical:_.critical,cost:sn(D+O+y),prepareCost:sn(y),queryCost:sn(D),transferCost:sn(O),status:b}}).sort((_,m)=>_.arrival-m.arrival||_.id.localeCompare(m.id)),f=sn(h.reduce((_,m)=>_+m.queryCost,0)),p=sn(h.reduce((_,m)=>_+m.transferCost,0)),v=sn(h.reduce((_,m)=>_+m.prepareCost,0));return a=sn(a),o=sn(o),{requests:h,storageCost:a,placementTransferCost:o,queryCost:f,resultTransferCost:p,preparationCost:v,totalCost:sn(a+o+f+p+v),criticalMet:h.filter(_=>_.critical&&_.status==="met").length,criticalTotal:h.filter(_=>_.critical).length,met:h.filter(_=>_.status==="met").length,retentionFailures:c,unresolvedSources:l,end:Math.max(0,...h.map(_=>_.finish),...e.phases.map(_=>_.at))}}function Go(i,e){return e<i.arrival?"not released":e>=i.finish?i.status:e<i.ready?"placement wait":e<i.start?"queue":e<i.start+i.prepare?"preparing":"in service"}function Cp(i){return i.status==="access-unknown"?"Access was never checked, so this request stopped. Use Check access next time.":i.status==="access-denied"?"Access was denied. A faster area will not fix this. Pick another area.":i.status==="expired"?"The data it needed was already deleted. Keep this source longer.":`Took ${i.elapsed}s. Due in ${i.deadline}s. ${i.status==="met"?"On time.":"Late."}`}function Ka(i){const e=i.requests.reduce((t,n)=>n.elapsed>((t==null?void 0:t.elapsed)??-1)?n:t,null);return(e==null?void 0:e.sourceId)??""}const Rp=""+new URL("container-C1nDnXjD.jpg",import.meta.url).href,Ja=""+new URL("quay-CgfHSFqj.jpg",import.meta.url).href,Pp=""+new URL("water-CTphZUXz.jpg",import.meta.url).href,ja=""+new URL("asphalt-Bir9xYpZ.jpg",import.meta.url).href,_t=xt.visual;let Fi=14811266,Nn=16358684,Mr=28915,pt={darkest:792356,darker:3554372,dark:9870762,light:14015717,lightest:15791095};const yn=i=>parseInt(i.replace("#",""),16);function Dp(i){Fi=yn(i.primary),Nn=yn(i.secondary3d),Mr=yn(i.focus),pt={darkest:yn(i.greys.darkest),darker:yn(i.greys.darker),dark:yn(i.greys.dark),light:yn(i.greys.light),lightest:yn(i.greys.lightest)}}function si(i,e,t,n,r=.1,s=.7){const a=new Fl().load(i);return a.colorSpace=Ft,a.wrapS=a.wrapT=1e3,a.repeat.set(t,n),a.anisotropy=8,new Vi({color:e,map:a,metalness:r,roughness:s})}const Qa=i=>"#"+i.toString(16).padStart(6,"0");function Lp(){const i=document.createElement("canvas");i.width=256,i.height=4;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,256,0),n=Qa(Fi),r=Qa(Nn);t.addColorStop(0,n),t.addColorStop(.5,n),t.addColorStop(1,r),e.fillStyle=t,e.fillRect(0,0,256,4);const s=new Zc(i);return s.colorSpace=Ft,new Vi({color:16777215,map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.35,roughness:.4})}const eo=i=>1-Math.pow(1-Math.min(1,Math.max(0,i)),3),ai={x:1.5,z:12.5};class Ip{constructor(e,t,n){qe(this,"stage");qe(this,"containers",new Map);qe(this,"berthGroups",new Map);qe(this,"berths",new Map);qe(this,"barriers",new Map);qe(this,"glows",new Map);qe(this,"flagMesh");qe(this,"trucks",new Map);qe(this,"boats",new Map);qe(this,"ghosts",[]);qe(this,"routes",new St);qe(this,"cranes",[]);qe(this,"hooks",[]);qe(this,"sea");qe(this,"steel",rt(pt.darker,.6,.45));qe(this,"cream",rt(pt.lightest,.1,.5));qe(this,"yellow",rt(Mr,.3,.45));qe(this,"gradient",Lp());qe(this,"colors",[Mr,pt.darker,pt.light,1920657,pt.dark,5991296]);qe(this,"paints",new Map);qe(this,"tweens",new Map);qe(this,"landing",new Set);qe(this,"onLand",()=>{});qe(this,"truckStages",new Map);qe(this,"sourceLabels",new Map);qe(this,"berthLabels",new Map);qe(this,"routeKey","");qe(this,"gateLabel");qe(this,"gateBarrier");qe(this,"gateOpen",!1);qe(this,"gateProgress",0);qe(this,"lifted",null);qe(this,"lastQueueKey","");qe(this,"dragPosition",null);qe(this,"dragRay",new Uo);qe(this,"vessel",new St);qe(this,"buoy",null);qe(this,"seaLines",new St);qe(this,"clock",0);this.pack=t,this.emit=n,this.stage=new wp(e,13226975,[24,27,33],[-2,0,1],38),this.stage.scene.fog=new Pr(13226975,55,120),this.stage.lighting(.8,2.6,.8,.5),this.stage.scene.getObjectByName("key").color.set(16775154),this.stage.scene.getObjectByName("fill").color.set(10274047);const r=this.stage.root,s=_t.terminalDeckY,a=_t.laneMarkY;this.sea=Le(r,[140,.2,140],[0,-1,0],si(Pp,5796771,16,16,.1,.35));const o=rt(9417446,.1,.4);o.transparent=!0,o.opacity=.45,r.add(this.seaLines);for(let x=0;x<50;x++)Le(this.seaLines,[1+x%5,.012,.028],[-28+x%11*5.6,-.88,-24+Math.floor(x/11)*11],o);Le(r,[19.5,1.15,17],[2.4,-.28,-.3],si(Ja,pt.dark,4,1,0,.9)),Le(r,[19.7,.12,17.2],[2.4,.34,-.3],si(Ja,13884390,4,3.5,0,.9)),Le(r,[2.7,.04,17],[_t.serviceLaneX,s,-.3],si(ja,16777215,.5,3,0,.85)),Le(r,[13.8,.025,1.15],[3.25,a-.015,-7],si(ja,16777215,2.5,.25,0,.85));for(let x=-8;x<8;x+=1.5)Le(r,[.1,.014,.8],[_t.serviceLaneX,a,x],this.cream);for(let x=-2.7;x<9.7;x+=1.35)Le(r,[.75,.014,.09],[x,a,-7],this.cream);for(let x=-7;x<8;x+=1.2)Le(r,[.22,.015,.6],[-7.05,s+.01,x],this.yellow),Xt(r,.1,.25,[-7.1,s+.05,x],this.steel);for(let x=-6;x<12;x+=3)Le(r,[.018,.01,16.8],[x,s-.005,-.3],rt(pt.dark));for(const x of[-6.2,-3.8])Le(r,[.075,.05,15],[x,s+.08,-.3],this.steel);const c=this.vessel;c.position.set(_t.sourceVesselX,-.3,-.6),r.add(c);const l=new wo;l.moveTo(-1.65,-6.8),l.lineTo(1.65,-6.8),l.lineTo(1.65,5.5),l.quadraticCurveTo(1.65,7.2,0,8),l.quadraticCurveTo(-1.65,7.2,-1.65,5.5),l.closePath();const u=new ht(new Ns(l,{depth:1.3,bevelEnabled:!0,bevelSegments:2,bevelSize:.2,bevelThickness:.2,steps:1}),rt(pt.darkest,.5,.45));u.rotation.x=-Math.PI/2,u.position.y=-.15,c.add(u),Le(c,[3.38,.16,11.4],[0,.13,-.7],rt(pt.darker,.3)),Le(c,[2.7,.9,1.7],[0,1.45,5.8],this.cream),Le(c,[2.4,.65,1.6],[0,2.15,5.8],this.cream),Le(c,[2.2,.28,.07],[0,2.25,6.64],rt(1780285,.5,.15)),Xt(c,.3,.9,[.7,2.2,4.7],this.gradient),Rt(c,[0,2.4,5.8],[0,4,5.8],.045,this.steel),Rt(c,[-.7,3.5,5.8],[.7,3.5,5.8],.03,this.steel);for(const x of[-1,1])for(let g=-6;g<7;g++)Rt(c,[x*1.55,1.25,g],[x*1.55,1.6,g],.02,this.cream),g<6&&Rt(c,[x*1.55,1.6,g],[x*1.55,1.6,g+1],.015,this.cream);for(let x=-4.8;x<3;x+=2.2)Le(c,[2.45,.14,1.42],[0,1.02,x],rt(pt.dark,.4)),Le(c,[2.18,.12,1.2],[0,1.16,x],rt(5991296,.45));const h=[[-.9,0,-4.2],[5.6,0,-4.2],[-9.9,0,5.4],[5.6,0,3.7]];t.zones.forEach((x,g)=>{const b=h[g];if(this.berths.set(x.id,new L(...b)),x.kind==="offshore"){const y=new St;y.position.set(ai.x,-.3,ai.z),r.add(y),this.buoy=y;const D=Xt(y,.45,.4,[0,0,0],rt(Nn,.1,.45));Xt(D,.22,1.1,[0,.68,0],this.cream),Rt(D,[0,1.2,0],[0,2,0],.045,this.steel),Rt(D,[-.55,1.65,0],[.55,1.65,0],.035,this.steel),this.berthLabels.set(x.id,this.stage.interact(y,x.label,()=>this.emit({kind:"berth",id:x.id}),[0,2.2,0]));return}const A=new St;A.position.copy(this.berths.get(x.id)),r.add(A),this.berthGroups.set(x.id,A),Le(A,[5.4,.035,5.1],[0,s+.01,0],rt(x.kind==="landing"?16251388:pt.lightest,0,.8));for(const y of[-1,1])Le(A,[5.2,.025,.06],[0,s+.04,y*2.45],this.cream);for(let y=-1.7;y<2;y+=.75)Le(A,[.42,.014,.08],[y,s+.055,1.85],this.yellow);x.kind==="index"&&this.workBerth(A),x.kind==="restore"&&this.restoreYard(A),x.kind==="landing"&&this.landingYard(A);for(let y=0;y<x.workers;y++){const D=Xt(A,.055,1.1,[-2.3+y*.25,1,1.8],this.steel);Xt(D,.085,.12,[0,.6,0],this.yellow)}const P=Le(A,[5.3,.012,4.9],[0,s+.036,0],this.gradient.clone()),I=P.material;I.emissiveIntensity=0,I.transparent=!0,I.opacity=0,I.depthWrite=!1,P.castShadow=!1,this.glows.set(x.id,P);const E=new St;E.position.set(0,s,2.6),A.add(E);for(let y=-2.4;y<2.5;y+=.48)Le(E,[.42,.5,.06],[y,.3,0],rt(y%.96<.48?pt.darker:pt.lightest,.1,.6));E.visible=!1,this.barriers.set(x.id,E),this.berthLabels.set(x.id,this.stage.interact(A,x.label,()=>this.emit({kind:"berth",id:x.id}),[0,_t.equipmentHeight,2.4]))});const f=rt(15331061,.35,.4);for(const x of[-4,3]){const g=new St;g.position.set(-5,.5,x),r.add(g);for(const P of[-1,1]){Rt(g,[P*1.15,0,-.8],[P*.8,5.1,-.8],.1,f),Rt(g,[P*1.15,0,.8],[P*.8,5.1,.8],.1,f),Rt(g,[P*1.15,.7,-.8],[P*.8,4.9,.8],.05,f),Rt(g,[P*1.15,.7,.8],[P*.8,4.9,-.8],.05,f);for(const I of[-.8,.8]){const E=Xt(g,.2,.17,[P*1.15,.12,I],this.steel,12);E.rotation.z=Math.PI/2}}for(const P of[-1,1]){Rt(g,[-6,5.1,P*.65],[3,5.1,P*.65],.085,f),Rt(g,[-6,5.7,P*.65],[3,5.7,P*.65],.085,f);for(let I=-6;I<3;I++)Rt(g,[I,5.1,P*.65],[I+.8,5.7,P*.65],.035,f)}const b=new St;b.position.set(-2,5,0),g.add(b),Le(b,[1.1,.35,1.5],[0,0,0],this.steel);const A=new St;A.position.set(0,-2.1,0),b.add(A);for(const P of[-.45,.45])Rt(A,[P,2.1,0],[P,0,0],.012,this.steel);Le(A,[1.5,.1,1.1],[0,0,0],this.yellow),this.cranes.push(b),this.hooks.push(A)}t.sources.forEach((x,g)=>{const b=this.container(g);b.position.set(_t.sourceVesselX,1.2,-5.3+g*1.65),r.add(b),this.containers.set(x.id,b);const A=String(g+1).padStart(2,"0"),P=this.stage.interact(b,`${A} · ${x.label}`,()=>this.emit({kind:"source",id:x.id}),[g%2?1.55:-1.55,1.08,g%2?.16:-.16]);P.classList.add("source-label"),P.textContent=`${A} ${x.label}`,this.sourceLabels.set(x.id,P)}),r.add(this.routes),this.flagMesh=new St,this.flagMesh.visible=!1,r.add(this.flagMesh),Rt(this.flagMesh,[0,0,0],[0,1,0],.03,this.steel);const p=this.gradient.clone();p.side=2,p.emissiveIntensity=.6;const v=new ht(new qi(.55,.34),p);v.position.set(.3,.82,0),this.flagMesh.add(v);const _=new St;_.position.set(_t.serviceLaneX,.5,6.8),r.add(_),Le(_,[1.2,1.4,1.15],[-1.8,.7,0],this.cream),Le(_,[1.1,.5,.07],[-1.8,.9,.6],rt(1780285,.4,.2)),Le(_,[1.2,1.4,1.15],[1.8,.7,0],this.cream),this.gateBarrier=new St,this.gateBarrier.position.set(-1.8,1.1,0),_.add(this.gateBarrier);const m=Le(this.gateBarrier,[3.6,.14,.14],[1.8,0,0],this.gradient);for(let x=-1.3;x<1.5;x+=.5)Le(m,[.12,.15,.15],[x,0,0],this.cream);this.gateLabel=this.stage.interact(_,"Open gate",()=>this.emit({kind:"gate",id:""}),[0,2.7,.7]);const d=new St;d.position.set(_t.lateLotX+.95,s,_t.lateLotZ+.95),r.add(d),Le(d,[3.6,.03,3.9],[0,0,0],rt(16251388,0,.8));for(let x=-1.6;x<1.9;x+=.55)Le(d,[.32,.02,.06],[x,.02,-1.85],rt(Nn,0,.5));const C=this.stage.interact(d,"Late lot",()=>{},[0,2.3,-1.6]);C.classList.add("lot-label"),C.tabIndex=-1,C.setAttribute("aria-hidden","true"),this.stage.scene.add(new kl(15133941,.3)),this.wireDrag(e)}wireDrag(e){let t=!1;const n=this.stage.renderer.domElement,r=new Mn(new L(0,1,0),-.42),s=o=>{const c=n.getBoundingClientRect(),l=new ge((o.clientX-c.left)/c.width*2-1,-(o.clientY-c.top)/c.height*2+1);this.dragRay.setFromCamera(l,this.stage.camera);const u=new L;return this.dragRay.ray.intersectPlane(r,u)?u:null};n.addEventListener("pointerdown",o=>{if(!this.lifted)return;const c=this.containers.get(this.lifted);if(!c)return;const l=n.getBoundingClientRect(),u=new ge((o.clientX-l.left)/l.width*2-1,-(o.clientY-l.top)/l.height*2+1);this.dragRay.setFromCamera(u,this.stage.camera),this.dragRay.intersectObject(c,!0).length&&(t=!0,n.setPointerCapture(o.pointerId))}),n.addEventListener("pointermove",o=>{if(!t||!this.lifted)return;const c=s(o);c&&(this.dragPosition=c)});const a=o=>{if(!t)return;t=!1;const c=this.dragPosition??s(o);if(this.dragPosition=null,c&&this.lifted){let l=null,u=3.2;for(const[h,f]of this.berths){const p=Math.hypot(f.x-c.x,f.z-c.z);p<u&&(u=p,l=h)}l&&this.emit({kind:"berth",id:l})}};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",()=>{t=!1,this.dragPosition=null})}workBerth(e){Le(e,[4.7,1.35,1.25],[0,1.1,-2],rt(pt.lightest,.1,.5));const t=Le(e,[4.95,.1,1.6],[0,1.84,-2],rt(pt.darker,.5,.45));t.rotation.x=-.07;for(let n=-1.7;n<=1.8;n+=1.1){Le(e,[.8,1,.06],[n,.99,-1.34],this.steel);for(let r=0;r<7;r++)Le(e,[.76,.02,.03],[n,.58+r*.12,-1.3],rt(pt.dark,.6,.4))}for(const n of[-1,1])Le(e,[.16,.6,.16],[n*2.15,.72,.5],this.yellow),Xt(e,.12,.08,[n*1.2,.51,1.15],this.steel,12);Le(e,[1.45,.12,.8],[0,.62,.75],rt(pt.darker,.5,.4))}restoreYard(e){for(const t of[-1,1]){for(const n of[1.35,2.25]){Le(e,[.12,1.65,3.35],[t*n,1.25,.05],this.steel);for(let r=0;r<3;r++)Le(e,[.78,.06,3.18],[t*(n-.22),.62+r*.55,.05],this.yellow)}Rt(e,[t*2.4,2.2,-1.8],[t*2.4,2.2,1.9],.04,this.steel)}Le(e,[3.75,.1,3.8],[0,2.22,.05],rt(pt.darker,.5,.45));for(let t=-1.2;t<1.3;t+=1.2)Le(e,[.5,.014,2.9],[t,.5,.05],rt(pt.dark));Le(e,[.8,.48,.62],[0,.74,1.4],rt(pt.lightest,.2,.5));for(const t of[-1,1]){const n=Xt(e,.13,.08,[t*.34,.55,1.55],this.steel,10);n.rotation.z=Math.PI/2}}landingYard(e){for(const n of[-1,1])Le(e,[.08,.55,3.4],[n*.7,.78,.2],this.steel);for(let n=-1.3;n<1.9;n+=.23){const r=Xt(e,.065,1.4,[0,1.08,n],this.cream,12);r.rotation.z=Math.PI/2}Le(e,[1.8,.12,.8],[0,2.15,.2],this.yellow);for(const n of[-1,1])Le(e,[.12,1.6,.12],[n*.85,1.36,.2],this.yellow);const t=new ht(new wr(.72,1.1,4),rt(pt.dark,.4,.45));t.position.set(0,1.1,-1.55),t.rotation.y=Math.PI/4,t.castShadow=!0,t.receiveShadow=!0,e.add(t),Le(e,[1.1,.1,1.1],[0,.52,-1.55],this.steel);for(const n of[-1,1])Le(e,[.1,.58,.1],[n*.45,.78,-1.55],this.yellow)}container(e){const t=new St,n=si(Rp,this.colors[e%this.colors.length],2,1,.35,.55);n.emissive.set(Fi),n.emissiveIntensity=0,this.paints.set(this.pack.sources[e].id,n),Le(t,[2.25,.83,1.25],[0,.42,0],n);for(let r=-1;r<=1;r+=.17)for(const s of[-1,1])Le(t,[.042,.72,.03],[r,.43,s*.64],n);for(const r of[-1,1]){for(const s of[-1,1])Le(t,[.045,.7,.045],[r*1.15,.42,s*.33],this.cream);for(const s of[-1,1])Le(t,[.09,.08,.1],[r*1.13,.8,s*.59],this.steel)}return t}anchor(e,t=[0,1.4,0]){const n=e.localToWorld(new L(...t)).project(this.stage.camera);return{left:(n.x+1)/2*100,top:(1-n.y)/2*100}}containerAnchor(e,t=[0,1.3,0]){const n=this.containers.get(e);return n?this.anchor(n,t):null}setLifted(e){this.lifted=e;const t=e?this.pack.sources.find(n=>n.id===e):null;for(const n of this.pack.zones){const r=!t||n.kind==="offshore"||t.routes.some(o=>o.zoneId===n.id),s=this.barriers.get(n.id);s&&(s.visible=!!t&&!r);const a=this.berthLabels.get(n.id);if(a){const o=t&&!r?`${n.label}: ${t.label} cannot go here`:n.label;a.title=o,a.setAttribute("aria-label",o)}}}targetFor(e,t,n){const r=e.plan[t],s=this.pack.zones.find(l=>l.id===(r==null?void 0:r.zoneId));if(!r||!s||s.kind==="offshore"){const l=this.lifted===t;return{position:new L(_t.sourceVesselX,l?1.2+_t.liftHeight:1.2,-5.3+n*1.65),arc:!1}}const o=this.pack.sources.filter(l=>{var u;return((u=e.plan[l.id])==null?void 0:u.zoneId)===s.id}).findIndex(l=>l.id===t);return{position:this.berths.get(s.id).clone().add(new L((o%2-.5)*2.45,.5+Math.floor(o/4)*.9,Math.floor(o/2)%2*1.55)),arc:!0}}update(e,t,n){var l;const r=this.stage.reduced.matches;r||(this.clock+=n,this.vessel.position.y=-.3+Math.sin(this.clock*.4)*.035,this.vessel.rotation.z=Math.sin(this.clock*.33)*.012,this.vessel.rotation.x=Math.cos(this.clock*.27)*.007,this.buoy&&(this.buoy.position.y=-.3+Math.sin(this.clock*.9+1.4)*.07),this.seaLines.position.x=this.clock*.12%5.6,this.cranes.forEach((u,h)=>{u.position.x=e.mode==="committed"?-2+Math.sin(e.seconds*.06+h)*1.8:-2+Math.sin(this.clock*.08+h*2)*.5})),this.pack.sources.forEach((u,h)=>{const f=this.sourceLabels.get(u.id),p=this.paints.get(u.id),v=this.lifted===u.id?.55:0;p.emissiveIntensity+=(v-p.emissiveIntensity)*Math.min(1,n*8),f.textContent=`${String(h+1).padStart(2,"0")} ${u.label}`,f.setAttribute("aria-pressed",String(this.lifted===u.id));const _=this.containers.get(u.id);if(this.dragPosition&&this.lifted===u.id){_.position.set(this.dragPosition.x,_t.terminalDeckY+1.4,this.dragPosition.z),this.tweens.delete(u.id);return}const{position:m,arc:d}=this.targetFor(e,u.id,h);let C=this.tweens.get(u.id);(!C||C.to.distanceToSquared(m)>4e-4)&&(C={from:_.position.clone(),to:m.clone(),t:0,duration:r?.001:_t.carrySeconds,arc:d?_t.arcHeight:0},this.tweens.set(u.id,C)),C.t=Math.min(1,C.t+n/C.duration);const x=eo(C.t);_.position.lerpVectors(C.from,C.to,x),_.position.y+=Math.sin(x*Math.PI)*C.arc,C.t>=1&&this.landing.delete(u.id)&&this.onLand(u.id)});for(const u of this.pack.zones){if(u.kind==="offshore")continue;const h=this.glows.get(u.id);if(!h)continue;const f=this.lifted?this.pack.sources.find(_=>_.id===this.lifted).routes.some(_=>_.zoneId===u.id):!1,p=h.material,v=f?r?.75:.65+Math.sin(this.clock*3)*.12:0;p.opacity+=(v-p.opacity)*Math.min(1,n*6),p.emissiveIntensity=p.opacity*1.3}if(this.flagMesh&&(this.flagMesh.visible=!!e.flag,e.flag)){const u=this.containers.get(e.flag);u&&(this.flagMesh.position.copy(u.position),this.flagMesh.position.x-=1.3,this.flagMesh.position.y-=.5)}const s=`${this.lifted}:${JSON.stringify(e.plan)}`;if(s!==this.routeKey&&(this.routes.children.forEach(u=>{u instanceof ys&&(u.geometry.dispose(),u.material.dispose())}),this.routes.clear(),this.routeKey=s,this.lifted)){const u=this.pack.sources.find(p=>p.id===this.lifted),h=this.pack.sources.indexOf(u),f=e.plan[u.id];if(f){const p=this.berths.get(f.zoneId),v=[[_t.sourceVesselX,2.2,-5.3+h*1.65],[-6.8,1,-5.3+h*1.65],[p.x,1,p.z]];((l=this.pack.zones.find(C=>C.id===f.zoneId))==null?void 0:l.kind)==="offshore"&&v.push([_t.serviceLaneX,.7,5.5]);const _=new nn().setFromPoints(v.map(C=>new L(...C))),m=new Ye(Fi),d=new Ye(Nn);_.setAttribute("color",new Nt(v.flatMap((C,x)=>m.clone().lerp(d,x/(v.length-1)).toArray()),3)),this.routes.add(new ys(_,new So({vertexColors:!0})))}}const a=this.gateOpen?1:0;if(this.gateProgress+=(a-this.gateProgress)*Math.min(1,n*(r?40:4)),this.gateBarrier.rotation.z=-Math.PI/2.4*this.gateProgress,!t){this.trucks.forEach(u=>{u.visible=!1}),this.boats.forEach(u=>{u.visible=!1});return}const o=new Map;let c=0;t.requests.forEach((u,h)=>{const p=this.pack.zones.find(A=>A.id===u.zoneId).kind==="offshore";let v=this.trucks.get(u.id);if(!v){if(v=new St,this.stage.root.add(v),this.trucks.set(u.id,v),v.position.set(_t.serviceLaneX,p?-.3:.5,p?7.2:7.4),p)Le(v,[.55,.35,1.4],[0,.2,0],this.cream),Le(v,[.4,.3,.5],[0,.45,-.2],this.yellow);else{Le(v,[.6,.42,1.2],[0,.43,0],this.cream),Le(v,[.58,.45,.5],[0,.58,.78],this.yellow),Le(v,[.51,.2,.02],[0,.67,1.04],rt(1780285,.4,.2));for(const P of[-1,1])for(const I of[-.4,.72]){const E=Xt(v,.18,.1,[P*.33,.2,I],this.steel,10);E.rotation.z=Math.PI/2}}const A=this.pack.sources.find(P=>P.id===u.sourceId).label.split(" ")[0];this.stage.interact(v,A,()=>this.stage.host.dispatchEvent(new CustomEvent("request-selected",{detail:u.id})),[0,.95+h%3*.45,0])}const _=u.arrival<=e.seconds,m=this.berths.get(u.zoneId),d=Go(u,e.seconds),C=d==="access-denied"||d==="access-unknown"||d==="expired";let x=this.truckStages.get(u.id);x||(x={stage:"hidden",timer:0},this.truckStages.set(u.id,x)),d==="not released"?(x.stage="hidden",x.timer=0):d==="placement wait"?(x.stage="approach",x.timer=0):d==="queue"?(x.stage="queue",x.timer=0):d==="preparing"||d==="in service"?(x.stage="service",x.timer=0):d==="late"?x.stage="late-lot":C?x.stage!=="sign"&&x.stage!=="exit"&&x.stage!=="gone"?(x.stage="sign",x.timer=0):x.stage==="sign"?(x.timer+=n,x.timer>(r?.05:1.1)&&(x.stage="exit",x.timer=0)):x.stage==="exit"&&(x.timer+=n):d==="met"&&(x.stage!=="exit"&&x.stage!=="gone"?(x.stage="exit",x.timer=0):x.stage==="exit"&&(x.timer+=n)),x.stage==="exit"&&x.timer>(r?.05:1)&&(x.stage="gone");let g;switch(x.stage){case"approach":g=p?new L(-9,-.3,7.4):new L(_t.serviceLaneX,.5,m.z);break;case"queue":{const A=o.get(u.zoneId)??0;o.set(u.zoneId,A+1),g=p?new L(ai.x-A*.9,-.3,ai.z+1):new L(m.x+2.6+Math.floor(A/2)*.9,.5,m.z+1.6+A%2*.8);break}case"service":case"sign":g=p?new L(ai.x,-.3,ai.z):new L(m.x+2.3,.5,m.z+1);break;case"late-lot":{const A=c++;g=new L(_t.lateLotX+A%2*1.9,.5,_t.lateLotZ+Math.floor(A/2)*1.9);break}case"exit":case"gone":g=p?new L(-9,-.3,7.4):new L(_t.serviceLaneX,.5,9.6);break;default:g=v.position}v.visible=_&&x.stage!=="gone"&&x.stage!=="hidden";let b=this.tweens.get(`truck:${u.id}`);(!b||b.to.distanceToSquared(g)>4e-4)&&(b={from:v.position.clone(),to:g.clone(),t:0,duration:r?.001:.7,arc:0},this.tweens.set(`truck:${u.id}`,b)),b.t=Math.min(1,b.t+n/b.duration),v.position.lerpVectors(b.from,b.to,eo(b.t)),this.markSign(v,d,x.stage==="sign"||x.stage==="late-lot"||x.stage==="exit"&&C)}),this.trucks.forEach((u,h)=>{t.requests.some(f=>f.id===h)||(u.visible=!1)})}markSign(e,t,n){let r=e.getObjectByName("sign");if(!n){r&&(r.visible=!1);return}if(!r){const s=t==="late"?new Tn(.1,.3,.3):new wr(.22,.35,t==="access-denied"?8:3),a=t==="late"?Nn:t==="access-denied"?Fi:t==="access-unknown"?Mr:pt.dark,o=rt(a,0,.5);o.emissive.set(a),o.emissiveIntensity=.35,r=new ht(s,o),r.name="sign",r.position.set(0,1.1,0),e.add(r)}r.visible=!0}showGhosts(e){this.ghosts.forEach(t=>{this.stage.root.remove(t)}),this.ghosts=e.map(t=>{const n=new St;n.position.set(t.x,.55,t.z),this.stage.root.add(n);const r=Le(n,[.5,.05,.5],[0,0,0],rt(Nn,0,.6));return r.material.transparent=!0,r.material.opacity=.5,n})}clearGhosts(){this.ghosts.forEach(e=>this.stage.root.remove(e)),this.ghosts=[]}berthWorldXZ(e){const t=this.berths.get(e);return t?{x:t.x,z:t.z}:null}}const Ur=document.createElement("span");Ur.style.cssText="position:fixed;width:1rem;height:1rem;visibility:hidden;pointer-events:none";document.body.append(Ur);const Vo=new ResizeObserver(i=>document.body.classList.toggle("large-type",i[0].contentRect.width>25));Vo.observe(Ur);window.addEventListener("pagehide",()=>{Vo.disconnect(),Ur.remove()},{once:!0});function Te(i,e="",t=""){const n=document.createElement(i);return n.textContent=e,n.className=t,n}function Dt(i,e,t=""){const n=Te("button",i,t);return n.type="button",n.addEventListener("click",e),n}const Up="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYyLjMuMTAwAAAAAAAAAAAAAAD/+3DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAoAAA14AC4uLi4uLi4uLkVFRUVFRUVFRUVdXV1dXV1dXV1ddHR0dHR0dHR0dIuLi4uLi4uLi4uioqKioqKioqKiurq6urq6urq6utHR0dHR0dHR0dHo6Ojo6Ojo6Ojo/////////////wAAAABMYXZjNjIuMTEAAAAAAAAAAAAAAAAkBpAAAAAAAAANeJtir/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//twxAAADuEBEBTFgAJzQih3MNABpTtbXv3vx2DcCYjozgSBID2TygEABAAgCQsG8AAAgHBMVJY7yfaZLHeO8d5vbDQ3Nzd8Ghock0NGVy/Ybvhhoyv/9jKk0OM977/l7/+XvfcMZsZ///7GMp5oaBjNS4PwfB8/EYPyn1AgcrBCt/wffl3/ygY//B/a6RMtlINhxtmpRiNBDlKprGBb6orTs0Usp1MYArwFi0RgkcyRMFsBrE4M0R4smA0zo7zA8pOaGxqMGX0jrGy2oUTNMNwpDwHoO9BJNkUlqWzrKaR03KCzybVvZDbHudl8rNyTWky3e6z2yqtFZLnTdNNCv/09tPWmeNmJpSNJ80QNP//f/f1Gx5M0MGc6bPWz/////Xv///9BazhVOEQ1ZBAZXbEyh6C+kGCAKP/7csQIABFk71X89gAKYjHrIPYZuRTtTjs62I6EGEkELLYUJ6F2C0VXBfOX3KtrFB+fD2CyU3dOEpaIhYq8we3pA5dAJ8MtKHGFhwtcZSU5gsNJ8cIZKPaY4U0brZ9DiNRLLF1zl5n9vnQ/s9szMys28CdcDtS9XBzreR1f2I5m+n724R7WlyfGXacYng+/i4MAAAAgi2J85CDhUGSAllzOETcsikO4sCpIOg4Y7Y4BQNgnN17l2/fSOiWIigqIv3zhOltU/Oz+r7ESM0pz9X2+Yc/mPDwW1mCSRG+YRJEaMnYJmXB6bvhOoTaHTyoQts7pynl8/SAIW3Z+UoseIIOg+Xp52FpSomWz28LQa9ghfMf8EQLZ7uLw/UGu4z/IjUDKdPnXO+tJggLgBABsa1lo4vzlDBo1CNsx//twxAiA0d1XWwywy4oOJ+wQ8w7pvTCQBIBoHRiaxhUfKhOJzqETkAogaHE9YVVplg6LR0fZWesaUbea6gEdZlPklUry8ydgMUSSZ7GExS4Fo4jJrQeqjmNZznKPRznL0y/eeazzm2ajJ1L8u6k4fMfC5VNO9XA5ofKnou9Ub5NrnAoHL0nyY0qcLhVY8Wf8z/0oAYAAAEoCnP8eRJR1l9E8J2A6A5QJcFImWo/EWttEeDG1A5pubIh76Hpn05LDpZZJDPCAAlC4pA8Q1mZO/+9es7Su1qTQdNECFEaLq2x0TsuLQuUaMdssz6VJWVstuI6VhIun+IP5dl6X2FoDmhrKGxodypVim22P/B6qpHyF/5d+hndVIQqiDohrdBgnJbiX+BIEW4bQyS6WKkK1yYdJgUfc2plFY//7csQRABJZoVrMMRaKNK/pxYYaOlNSpxn2nO0vKsyobDNJmytOT2D4mjN3awVoyKXj1zsW1PVuxWhIfGk42lweG2PDIDGKOiTrGqorjWaLlWe/ri9r4eU5oaKlH/V9cNF71x8tsNVa42dfhYmGR4uD5D5Zg6rlqubptvi2fvh66fG2b8iQAUAqkB2aDkRBBzAFwnYT1aLJEyWAwBTQ070Mv9DkxJKSkE8dTnPrWwGC61bratZ9vCVSuv1r1QlsP378zJ7qVdt/vP210vE6yXQWVYta2vfWWvrSz+KmKqtanl21k7M2WPGAFIjvdH5///WtvdSbvkxrb+z9t5Wb8zzeMlSPQXuef7nHOlj9qhwl1AUmADAAAACTSAXpwmgJ+BWqDIZfGUBYl2Ja2J74Ol2KZDwuS0G/huCH//twxBOBkwWxRSy8tcpJLCehl644YfbedLT6kBGmKd/Epu1KSMI2GKW9PNznYs23rd/LHq9rGccRa5rXe4/1JCGVjGIVL13TM1a6/tS9G7Fr4znVovraN5HftHXQ+sR62xXFv/j/Vs+owXNe0+r30YOts4iplDI95lFqGMRSku1f/0/MPQUEAFAIOij7ICXgFqpqkBwrNxoZxFqPmvVdzi+IRH5SJag4tYhbjRPyGqtwJWFrERhu2yPbD2NRiQaN39SVqXR7SSaFGh2zqPTMCsNl1Jt7PK4xLKZRIMeOrR4sfcK31mt+1t7iPurc7KVu5u97HtJwlCKSqNRxfzUti65p9Oq5ZX8X1810etddSjU8sB0M3T3/wlUCQMZpxoIketeNC2AQVhQMCHMaQlfGVg5YyIYU4Rfdrv/7csQQAhKVYzQsJhpCCCSnHYeeOLsYSVncKjMFRrLCxK0l1wSOhrZ3dSLC7OpG2qD73aSMtvPrZOajbbMntkkkSLEspETqiIJ5AxCWMimlRSZ2odzhSNzx1JjtjiaK0aU6koxpGRNiJJl2s1U/WjdFaLKd2Wasqyv+9aqSk1IJGZiiEieq3/7w2c0oNGNJczqMJ0pH/JBLbfpja9nULhKcyuHY6+LImrs7h24qYqtaU9RyrNBhhiw9Vd7esanZouSYM1vm3wdDqto0S1YMWS1dyVi/Ff7bxGzhlCMG3Bxu14mfjUaf9G4vYx2Sp1nQ5H2NEUCgcYXVDKt928RQmZkSJEO6lhI8Jm///1oBCNAxQ97E8pA1qFCEDCDDklNXgMYQMEXImAkHdQdCNCSIZgPA5UizDTB6jAqk//twxBcAEvElJk0mWko/q+Slp6p528ULh+Hpt9m8VrlMxQ2eyrm5RASYU9Z//wrIB5MagoXpcu8p15nAlcm7IrCzTRSpE0AbhDnPoo6j7Vu9z6mWVS+kmgYzAmzRJSSNFrHDQQjGCXj6KbLQq62SfWVgkLE1gajv3EoK9Qb5sIAkTIY4BHzAoTdUllIB1DgEQM6ELZqUiT4OZjQ4VBvypgnk48RYa/9vT+y1+WY3qrmJiQIEonltQ3kU6oKlUQZr/+DNBuEchuU0lq6iubbSV3tmca1xbwMxV3SC3hnhYbfZzF/+d6hV/ewodV1Jum4MSBv4pu2N2ZCEEMGlmR9UnP/Usle6afmqpv1YiFxR9TdKcxoVPgQzBRAYBms2mgQiRMOGXOMQgfjBIodIqkVGjrkmjY1ANDiGtv/7csQVAxNI/xYN6wJCOCmijrUgAJW1wFMYIgSXONFZgQoahamfpKmVTLdVDs06W3uTtWKgkL5w7S5543Zqexz3YzcWXVKWls4xGW4O9IZmqOTGm4Z5dv6/942sNdzrdobUV5n+se/hvHHLHLX4Y1ZWpGQWQkarBl1gmMiK/9ncWIk///uBBIAiMerPEsM69GQ7wmQCBjNTZcbmmRVBUi7i2Zc6SDT2C4gKaCKSaC0Ysk+MESIaI8DhNTozo1wyiz548TBeUmYJjNEIk5xBZ0ThKroqSNzU2JoymZbHwVy65eRNE1umWjQzBAY2TyW7WSWjRX6zdBI+1NFFT9l1oIGQgiiyk1Lqpf9GkyvU338xdlnkVQgFmAAAAADAg/mM8Efi+ryrES1XSmVYtO/C56OVqEfh9HLnszJc//twxBMAEuHfGtmFgAnYn5zPsLAAdUlXwAyq82PHUjZ3yrB8uPsJRWTCV8V77i89Btbnf/rD7bLZSpcbPScrt/+4rZTEDZJyqVoued//+YZTGbK2U6UYlu1st////Z7Pqbqb301tNOsa2EWqNr////+99vfb373773///+k2kmwkSOCsig0AAABxuSxn3BgzQ83PNRS3rq1XBWFUFWKu1QEu6XJAKNwQQRSaoNwD4B8OkmnWtaampq7/2tRSc63EoEIBIAIEUt+Wtr3Od+2uWtbpEonQNweg9E485zq///hznOc50///t4cbGxsbAqGv4NA0DQd/9YKgqCoNKkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7csQeA8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",Fp=""+new URL("flag-right-D8Ujtn2t.mp3",import.meta.url).href,Np=""+new URL("flag-wrong-Cy1EqUSw.mp3",import.meta.url).href,Op=""+new URL("flag-BGmD8DuW.mp3",import.meta.url).href,Bp=""+new URL("gate-tm0b9ojR.mp3",import.meta.url).href,zp=""+new URL("lift-VlvlrlNC.mp3",import.meta.url).href,kp=""+new URL("retention-DsWcDGk_.mp3",import.meta.url).href,Gp=""+new URL("set-down-BFXg-_LW.mp3",import.meta.url).href,Vp=""+new URL("truck-late-DayEf6Yk.mp3",import.meta.url).href,Hp=""+new URL("truck-met-nODI51lk.mp3",import.meta.url).href,qp=""+new URL("turned-back-CB2Ebhdl.mp3",import.meta.url).href;function Wp({sfx:i={},beds:e={},gains:t={},storageKey:n="audio.muted"}={}){const r={master:.8,sfx:1,bed:.55,duck:.3,...t},s=window.__audioLog||(window.__audioLog=[]);let a=null,o,c,l,u=null,h=null,f=null;const p=new Map,v=new Map;let _=!1;try{_=localStorage.getItem(n)==="1"}catch{}const m=(g,b)=>fetch(b).then(A=>A.arrayBuffer()).then(A=>a.decodeAudioData(A)).then(A=>{p.set(g,A),g===h&&C()}).catch(A=>console.warn(`[audio] ${g} failed to load`,A));function d(){removeEventListener("pointerdown",d,!0),removeEventListener("keydown",d,!0),a=new(window.AudioContext||window.webkitAudioContext),o=a.createGain(),o.gain.value=_?0:r.master,o.connect(a.destination),c=a.createGain(),c.gain.value=r.sfx,c.connect(o),l=a.createGain(),l.gain.value=r.bed,l.connect(o),document.hidden&&a.suspend();for(const[g,b]of Object.entries({...i,...e}))m(g,b)}addEventListener("pointerdown",d,!0),addEventListener("keydown",d,!0),document.addEventListener("visibilitychange",()=>{a&&(document.hidden?a.suspend():a.resume())});function C(){if(u){try{u.stop()}catch{}u=null}const g=h&&p.get(h);g&&(u=a.createBufferSource(),u.buffer=g,u.loop=!0,u.connect(l),u.start())}const x={play(g,{gain:b=1,rate:A=1,overlap:P=!1}={}){s.push(g);const I=a&&p.get(g);if(!I||_||document.hidden)return;const E=a.currentTime,y=!P&&v.get(g);if(y){y.g.gain.setTargetAtTime(0,E,.01);try{y.src.stop(E+.05)}catch{}}const D=a.createBufferSource(),O=a.createGain();D.buffer=I,D.playbackRate.value=A,O.gain.value=b,D.connect(O).connect(c),D.start(),P||(v.set(g,{src:D,g:O}),D.onended=()=>{var G;((G=v.get(g))==null?void 0:G.src)===D&&v.delete(g)})},bed(g){g!==h&&(h=g,s.push("bed:"+g),a&&C())},duck(g=1500){if(!a)return;const b=a.currentTime,A=l.gain;A.cancelScheduledValues(b),A.setTargetAtTime(r.bed*r.duck,b,.08),A.setTargetAtTime(r.bed,b+g/1e3,.4)},setMuted(g){_=!!g;try{localStorage.setItem(n,_?"1":"0")}catch{}o&&o.gain.setTargetAtTime(_?0:r.master,a.currentTime,.03),f&&(f.textContent=_?"Sound off":"Sound on",f.setAttribute("aria-pressed",String(!_)))},get muted(){return _},get loaded(){return[...p.keys()]},mountToggle(g){if(g.tagName!=="BUTTON"){const b=document.createElement("button");b.type="button",g.appendChild(b),g=b}return f=g,g.addEventListener("click",()=>x.setMuted(!_)),x.setMuted(_),g}};return x}const Xp=Object.fromEntries(Object.entries(Object.assign({"./evidence.mp3":Up,"./flag-right.mp3":Fp,"./flag-wrong.mp3":Np,"./flag.mp3":Op,"./gate.mp3":Bp,"./lift.mp3":zp,"./retention.mp3":kp,"./set-down.mp3":Gp,"./truck-late.mp3":Vp,"./truck-met.mp3":Hp,"./turned-back.mp3":qp})).map(([i,e])=>[i.slice(2,-4),e])),Jt=Wp({sfx:Xp,storageKey:"port.muted"});Object.assign(window,{__dbg:{...window.__dbg,audio:Jt}});const Yp=1,$p="investigation",Zp="1.1.0",Kp="Store six data sources so urgent searches finish on time.",Jp="A security team needs six data sources stored before an investigation. Each truck is a search request with a deadline. Fast storage is small, and the budget is 230.",jp="Synthetic learning model. All costs, capacity, retention, timings, routes, and access results are fictional scenario assumptions. These zones are not Splunk storage tiers. No product feature or price claim is verified. Confirm the actual architecture, support, and permissions with a qualified reviewer.",Qp="Get every urgent truck served on time without going over budget.",em="volume units",tm=[7,30,90],nm=[{id:"work",label:"1 · Fast storage",kind:"index",capacity:7,workers:2,storagePerUnitDay:.3},{id:"stage",label:"2 · Restore yard",kind:"restore",capacity:12,workers:1,storagePerUnitDay:.06},{id:"origin",label:"3 · Leave at source",kind:"offshore",capacity:100,workers:1,storagePerUnitDay:.015},{id:"landing",label:"4 · Prepare on request",kind:"landing",capacity:12,workers:1,storagePerUnitDay:.02}],im=[{id:"identity",label:"Identity events",location:"Regional collector",description:"Small source with urgent incident requests. Each request needs one unit of service.",volume:2,requiredDays:30,routes:[{zoneId:"landing",setupSeconds:2,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:6,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: retain the raw source at low cost. Each request promotes a temporary working batch on the landing worker before service. Preparation costs 3 credits and 6 seconds per request unit. The batch is removed after service; no prepared copy is reused. This is not an actual Splunk feature claim."},{zoneId:"work",setupSeconds:4,transferPerUnit:2,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth can serve this source."},{zoneId:"stage",setupSeconds:12,transferPerUnit:1,serviceSeconds:7,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path is available."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:9,queryCost:.5,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin grants read access."}]},{id:"application",label:"Application events",location:"Service export",description:"Investigation requests need two units of service. A low unit cost can hide a long queue.",volume:3,requiredDays:30,routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:6,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: each request promotes a temporary working batch. Preparation and service use the same landing worker. Charge preparation for every request unit. No prepared copy is reused."},{zoneId:"work",setupSeconds:4,transferPerUnit:2,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth can serve this source."},{zoneId:"stage",setupSeconds:10,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path is available."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:8,queryCost:.5,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin grants read access."}]},{id:"trace",label:"Trace extracts",location:"Batch store",description:"Routine access can wait. This source has no offshore route in this exercise.",volume:2,requiredDays:30,routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:3,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: promote a working batch for each request. The raw source remains in the landing yard. Preparation costs apply even when earlier requests used this source."},{zoneId:"work",setupSeconds:6,transferPerUnit:3,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth accepts the extract."},{zoneId:"stage",setupSeconds:10,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path accepts the extract."}]},{id:"audit",label:"Audit history",location:"External history store",description:"Large source with rare historical requests in the first workload. Do not assume demand will stay rare.",volume:4,requiredDays:90,routes:[{zoneId:"landing",setupSeconds:4,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:4,prepareCost:3,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: low-cost raw retention has a later preparation cost. Each request promotes a temporary working batch, then discards that batch after service. Frequent requests repeat the preparation cost and occupy the single landing worker."},{zoneId:"work",setupSeconds:8,transferPerUnit:2,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work berth accepts the history."},{zoneId:"stage",setupSeconds:16,transferPerUnit:1,serviceSeconds:8,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore path accepts the history."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:8,queryCost:.5,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin grants read access."}]},{id:"partner",label:"Partner reference",location:"Partner-held store",description:"The source must stay at its origin in this scenario. Access is not yet confirmed. Request evidence before commitment.",volume:2,requiredDays:30,routes:[{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:5,queryCost:.5,resultTransferCost:2,access:"unknown",verifiedAccess:"allowed",evidence:"The fictional owner approves the required read operation. The source stays at origin. Each unit of returned results costs 2 credits."}]},{id:"archive",label:"Maintenance archive",location:"Offline export",description:"A long retention obligation remains even when requests are rare. Only the restore path is eligible.",volume:3,requiredDays:90,routes:[{zoneId:"stage",setupSeconds:14,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:.2,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore service accepts this export."}]}],rm={label:"Investigation shift",brief:"Identity and application requests are critical. Audit requests are rare. Inspect all request deadlines before you commit.",budget:230,phases:[{label:"Incident intake",at:0},{label:"Routine checks",at:30},{label:"Historical review",at:60}],requests:[{id:"login",label:"Investigate a login sequence",sourceId:"identity",phase:0,arrival:0,units:1,ageDays:7,deadline:12,critical:!0},{id:"fault",label:"Inspect application failure",sourceId:"application",phase:0,arrival:1,units:2,ageDays:7,deadline:12,critical:!0},{id:"sample",label:"Read a trace sample",sourceId:"trace",phase:0,arrival:4,units:1,ageDays:20,deadline:30,critical:!1},{id:"owner",label:"Check a partner reference",sourceId:"partner",phase:1,arrival:30,units:1,ageDays:10,deadline:20,critical:!0},{id:"follow",label:"Check related identity events",sourceId:"identity",phase:1,arrival:31,units:2,ageDays:25,deadline:12,critical:!0},{id:"history",label:"Read audit history",sourceId:"audit",phase:2,arrival:60,units:1,ageDays:70,deadline:35,critical:!1},{id:"repair",label:"Read an old maintenance record",sourceId:"archive",phase:2,arrival:60,units:1,ageDays:85,deadline:35,critical:!1}],referencePlan:{identity:{zoneId:"work",days:30},application:{zoneId:"work",days:30},trace:{zoneId:"stage",days:30},audit:{zoneId:"origin",days:90},partner:{zoneId:"origin",days:30},archive:{zoneId:"stage",days:90}}},sm={label:"Frequent history investigation",brief:"Audit history is now part of urgent investigation. Application work can wait. The source rules do not change. Use the new request schedule, not the previous result, to defend your plan.",budget:230,phases:[{label:"History incident",at:0},{label:"Repeated checks",at:30},{label:"Final evidence",at:60}],requests:[{id:"new-identity",label:"Check identity link",sourceId:"identity",phase:0,arrival:0,units:1,ageDays:7,deadline:12,critical:!0},{id:"new-audit",label:"Read urgent history",sourceId:"audit",phase:0,arrival:1,units:2,ageDays:75,deadline:12,critical:!0},{id:"new-app",label:"Read routine application events",sourceId:"application",phase:0,arrival:3,units:1,ageDays:20,deadline:35,critical:!1},{id:"new-history",label:"Test another history link",sourceId:"audit",phase:1,arrival:30,units:3,ageDays:80,deadline:10,critical:!0},{id:"new-partner",label:"Check partner mapping",sourceId:"partner",phase:1,arrival:31,units:1,ageDays:15,deadline:25,critical:!0},{id:"new-trace",label:"Read routine trace",sourceId:"trace",phase:1,arrival:32,units:1,ageDays:20,deadline:30,critical:!1},{id:"new-repeat",label:"Close the history investigation",sourceId:"audit",phase:2,arrival:60,units:2,ageDays:85,deadline:10,critical:!0},{id:"new-archive",label:"Read maintenance evidence",sourceId:"archive",phase:2,arrival:61,units:1,ageDays:85,deadline:35,critical:!1}],referencePlan:{identity:{zoneId:"work",days:30},application:{zoneId:"origin",days:30},trace:{zoneId:"stage",days:30},audit:{zoneId:"work",days:90},partner:{zoneId:"origin",days:30},archive:{zoneId:"stage",days:90}}},am={schemaVersion:Yp,id:$p,version:Zp,title:Kp,brief:Jp,trust:jp,objective:Qp,unit:em,retentionOptions:tm,zones:nm,sources:im,practice:rm,transfer:sm},om=1,cm="compliance",lm="1.1.0",um="Store six record sources so audit requests finish on time.",hm="A review team needs old records and proof of access. Each truck is a request with a deadline. Records deleted too early cannot come back.",dm="Synthetic learning model. All prices, routes, timings, and supported operations are fictional scenario assumptions, not verified Splunk features or prices. These are workflow zones, not actual product storage tiers. Obtain a product and architecture review before use in customer guidance.",fm="Serve every urgent truck on time, keep each record long enough, and stay in budget.",pm="volume units",mm=[7,30,90],gm=[{id:"work",label:"1 · Fast storage",kind:"index",capacity:6,workers:1,storagePerUnitDay:.2},{id:"stage",label:"2 · Restore yard",kind:"restore",capacity:15,workers:2,storagePerUnitDay:.04},{id:"origin",label:"3 · Leave at source",kind:"offshore",capacity:100,workers:1,storagePerUnitDay:.01},{id:"landing",label:"4 · Prepare on request",kind:"landing",capacity:10,workers:1,storagePerUnitDay:.015}],_m=[{id:"review",label:"Review records",location:"Evidence export",description:"Urgent review questions need old records. The source needs a 90-day policy.",volume:3,requiredDays:90,routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:5,prepareCost:4,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: each request promotes a temporary working batch. Preparation takes 5 seconds and 4 credits per request unit on the landing worker. The prepared batch is not retained or reused. This is not an actual Splunk operation claim."},{zoneId:"work",setupSeconds:5,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional review reader can use this path."},{zoneId:"stage",setupSeconds:15,transferPerUnit:1,serviceSeconds:7,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore reader can use this path."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:10,queryCost:.3,resultTransferCost:.5,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin reader is permitted."}]},{id:"policy",label:"Policy decisions",location:"Decision store",description:"The first review has urgent policy questions. Later policy requests can wait.",volume:2,requiredDays:90,routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:5,prepareCost:4,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: low-cost raw retention needs batch promotion for each request. Preparation and service share the landing worker. No prepared batch is reused."},{zoneId:"work",setupSeconds:4,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional policy reader is permitted."},{zoneId:"stage",setupSeconds:8,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore reader is permitted."}]},{id:"billing",label:"Billing extract",location:"Finance export",description:"There is no approved offshore reader. The work-berth reader is explicitly denied. The restore reader is approved.",volume:2,requiredDays:30,routes:[{zoneId:"work",setupSeconds:4,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"denied",verifiedAccess:"denied",evidence:"The fictional work-berth reader lacks finance permission. Placement eligibility does not grant read access."},{zoneId:"stage",setupSeconds:8,transferPerUnit:1,serviceSeconds:5,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional finance owner approves the restore reader."}]},{id:"change",label:"Change records",location:"Change history store",description:"Change history has routine demand at first. Its volume competes for the single work-berth worker.",volume:3,requiredDays:90,routes:[{zoneId:"landing",setupSeconds:3,transferPerUnit:.5,serviceSeconds:2,prepareSeconds:5,prepareCost:4,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fictional landing rule: promote each requested batch before service, then remove the batch. Raw records remain in the landing yard. Frequent demand repeats preparation time and cost."},{zoneId:"work",setupSeconds:5,transferPerUnit:1,serviceSeconds:2,queryCost:2,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional work-berth reader is approved."},{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:9,queryCost:.3,resultTransferCost:.5,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional origin reader is approved."}]},{id:"vendor",label:"Vendor attestation",location:"Vendor-held store",description:"The attestation must remain with its owner. The requested read permission is not yet known.",volume:1,requiredDays:90,routes:[{zoneId:"origin",setupSeconds:0,transferPerUnit:0,serviceSeconds:5,queryCost:.3,resultTransferCost:1,access:"unknown",verifiedAccess:"allowed",evidence:"The fictional vendor approves the specific attestation read. This says nothing about other operations or real products."}]},{id:"maintenance",label:"Maintenance records",location:"Scheduled export",description:"These records need long retention but have relaxed deadlines.",volume:3,requiredDays:90,routes:[{zoneId:"stage",setupSeconds:10,transferPerUnit:1,serviceSeconds:5,queryCost:1,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fictional restore reader is approved."}]}],vm={label:"Scheduled evidence review",brief:"Review and policy records have urgent deadlines. Retain the required history even if no request uses its oldest day.",budget:190,phases:[{label:"Review opening",at:0},{label:"Owner evidence",at:30},{label:"Historical records",at:60}],requests:[{id:"review-start",label:"Read the review record",sourceId:"review",phase:0,arrival:0,units:2,ageDays:80,deadline:14,critical:!0},{id:"policy-start",label:"Read the policy decision",sourceId:"policy",phase:0,arrival:1,units:1,ageDays:85,deadline:14,critical:!0},{id:"bill-start",label:"Read finance evidence",sourceId:"billing",phase:0,arrival:4,units:1,ageDays:20,deadline:30,critical:!1},{id:"vendor-read",label:"Read owner attestation",sourceId:"vendor",phase:1,arrival:30,units:1,ageDays:75,deadline:20,critical:!0},{id:"change-read",label:"Read change history",sourceId:"change",phase:1,arrival:31,units:1,ageDays:70,deadline:30,critical:!1},{id:"old-record",label:"Read maintenance history",sourceId:"maintenance",phase:2,arrival:60,units:2,ageDays:90,deadline:30,critical:!1}],referencePlan:{review:{zoneId:"work",days:90},policy:{zoneId:"work",days:90},billing:{zoneId:"stage",days:30},change:{zoneId:"origin",days:90},vendor:{zoneId:"origin",days:90},maintenance:{zoneId:"stage",days:90}}},xm={label:"Urgent change investigation",brief:"Change records now carry the urgent workload. Policy reads are routine. Recheck the single-worker queue before you commit.",budget:190,phases:[{label:"Urgent history",at:0},{label:"Repeated questions",at:30},{label:"Evidence closure",at:60}],requests:[{id:"new-review",label:"Read review evidence",sourceId:"review",phase:0,arrival:0,units:1,ageDays:85,deadline:14,critical:!0},{id:"new-change",label:"Read urgent change history",sourceId:"change",phase:0,arrival:1,units:2,ageDays:80,deadline:14,critical:!0},{id:"new-policy",label:"Read routine policy",sourceId:"policy",phase:0,arrival:3,units:1,ageDays:75,deadline:30,critical:!1},{id:"new-repeat",label:"Read another change record",sourceId:"change",phase:1,arrival:30,units:2,ageDays:85,deadline:10,critical:!0},{id:"new-vendor",label:"Read vendor evidence",sourceId:"vendor",phase:1,arrival:31,units:1,ageDays:80,deadline:20,critical:!0},{id:"new-finance",label:"Read finance extract",sourceId:"billing",phase:2,arrival:60,units:1,ageDays:25,deadline:20,critical:!1},{id:"new-maintenance",label:"Read maintenance record",sourceId:"maintenance",phase:2,arrival:61,units:1,ageDays:90,deadline:30,critical:!1}],referencePlan:{review:{zoneId:"work",days:90},policy:{zoneId:"stage",days:90},billing:{zoneId:"stage",days:30},change:{zoneId:"work",days:90},vendor:{zoneId:"origin",days:90},maintenance:{zoneId:"stage",days:90}}},Sm={schemaVersion:om,id:cm,version:lm,title:um,brief:hm,trust:dm,objective:fm,unit:pm,retentionOptions:mm,zones:gm,sources:_m,practice:vm,transfer:xm},ym=1,Mm="warehouse",Em="1.0.0",Am="Place six stock groups so urgent orders ship on time.",Tm="A parts warehouse has six stock groups to place. Each truck is an order with a deadline. The fast-pick floor holds only a few pallets.",bm="All stock, rates, storage periods, fees, access checks, and service times are fictional. Holding days represent stock availability. This pack is not guidance for a real warehouse.",wm="Ship every urgent order on time without going over budget.",Cm="pallets",Rm=[7,30,90],Pm=[{id:"pick",label:"1 · Fast-pick floor",kind:"index",capacity:5,workers:1,storagePerUnitDay:.12},{id:"reserve",label:"2 · Reserve stock",kind:"restore",capacity:10,workers:2,storagePerUnitDay:.03},{id:"supplier",label:"3 · Ship from supplier",kind:"offshore",capacity:40,workers:1,storagePerUnitDay:.01}],Dm=[{id:"kits",label:"Repair kits",location:"Receiving dock",description:"Small urgent orders. Each service unit represents one order batch.",volume:1,requiredDays:7,routes:[{zoneId:"pick",setupSeconds:2,transferPerUnit:3,serviceSeconds:2,queryCost:3,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"The fast-pick team is permitted to handle the kits."},{zoneId:"reserve",setupSeconds:8,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"The reserve team is permitted to handle the kits."}]},{id:"bolts",label:"Packaged bolts",location:"Receiving dock",description:"Urgent in the first shift. Later orders can wait for reserve picking.",volume:2,requiredDays:30,routes:[{zoneId:"pick",setupSeconds:3,transferPerUnit:3,serviceSeconds:2,queryCost:3,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fast-pick handling is approved."},{zoneId:"reserve",setupSeconds:7,transferPerUnit:1,serviceSeconds:5,queryCost:1,resultTransferCost:1,access:"allowed",verifiedAccess:"allowed",evidence:"Reserve handling is approved."}]},{id:"parts",label:"Machine parts",location:"Reserve intake",description:"Heavy parts cannot use the fast-pick floor in this exercise.",volume:2,requiredDays:30,routes:[{zoneId:"reserve",setupSeconds:9,transferPerUnit:1,serviceSeconds:7,queryCost:1,resultTransferCost:2,access:"allowed",verifiedAccess:"allowed",evidence:"The reserve equipment supports these parts."}]},{id:"seals",label:"Bulk seals",location:"Supplier depot",description:"The first shift has one routine order. A later service campaign can change demand.",volume:4,requiredDays:30,routes:[{zoneId:"pick",setupSeconds:5,transferPerUnit:3,serviceSeconds:2,queryCost:3,resultTransferCost:0,access:"allowed",verifiedAccess:"allowed",evidence:"Fast-pick handling is approved."},{zoneId:"reserve",setupSeconds:10,transferPerUnit:1,serviceSeconds:8,queryCost:1,resultTransferCost:2,access:"allowed",verifiedAccess:"allowed",evidence:"Reserve handling is approved."},{zoneId:"supplier",setupSeconds:0,transferPerUnit:0,serviceSeconds:11,queryCost:.5,resultTransferCost:4,access:"allowed",verifiedAccess:"allowed",evidence:"The supplier accepts direct orders. Delivery fees apply to each order unit."}]},{id:"custom",label:"Custom couplings",location:"Supplier workshop",description:"Stock must stay at the supplier. Direct-order permission is not yet confirmed.",volume:1,requiredDays:7,routes:[{zoneId:"supplier",setupSeconds:0,transferPerUnit:0,serviceSeconds:7,queryCost:.5,resultTransferCost:5,access:"unknown",verifiedAccess:"allowed",evidence:"The supplier approves direct fulfillment for these couplings. Each order unit has a 5-credit delivery fee."}]},{id:"panels",label:"Spare panels",location:"Reserve intake",description:"Keep these panels available for 90 days. The reserve area is the only permitted destination.",volume:3,requiredDays:90,routes:[{zoneId:"reserve",setupSeconds:10,transferPerUnit:1,serviceSeconds:6,queryCost:1,resultTransferCost:2,access:"allowed",verifiedAccess:"allowed",evidence:"Reserve equipment supports these panels."}]}],Lm={label:"Repair shift",brief:"Kits and bolts have urgent orders. Keep spare panels available even if the request stream is quiet.",budget:100,phases:[{label:"Opening orders",at:0},{label:"Direct orders",at:30},{label:"Reserve orders",at:60}],requests:[{id:"kit-order",label:"Dispatch repair kits",sourceId:"kits",phase:0,arrival:0,units:1,ageDays:5,deadline:10,critical:!0},{id:"bolt-order",label:"Dispatch bolts",sourceId:"bolts",phase:0,arrival:1,units:2,ageDays:20,deadline:10,critical:!0},{id:"part-order",label:"Dispatch machine parts",sourceId:"parts",phase:0,arrival:4,units:1,ageDays:20,deadline:25,critical:!1},{id:"custom-order",label:"Confirm custom order",sourceId:"custom",phase:1,arrival:30,units:1,ageDays:5,deadline:20,critical:!0},{id:"seal-order",label:"Dispatch bulk seals",sourceId:"seals",phase:1,arrival:31,units:1,ageDays:20,deadline:30,critical:!1},{id:"panel-order",label:"Dispatch a spare panel",sourceId:"panels",phase:2,arrival:60,units:1,ageDays:85,deadline:20,critical:!1}],referencePlan:{kits:{zoneId:"pick",days:7},bolts:{zoneId:"pick",days:30},parts:{zoneId:"reserve",days:30},seals:{zoneId:"supplier",days:30},custom:{zoneId:"supplier",days:7},panels:{zoneId:"reserve",days:90}}},Im={label:"Seal replacement campaign",brief:"Bulk seals now have repeated urgent orders. Bolts are routine. Keep the same five-pallet fast-pick limit.",budget:100,phases:[{label:"Campaign opening",at:0},{label:"Repeat dispatch",at:30},{label:"Campaign close",at:60}],requests:[{id:"new-kit",label:"Dispatch urgent kit",sourceId:"kits",phase:0,arrival:0,units:1,ageDays:5,deadline:12,critical:!0},{id:"new-seal",label:"Dispatch campaign seals",sourceId:"seals",phase:0,arrival:1,units:2,ageDays:20,deadline:12,critical:!0},{id:"new-bolt",label:"Dispatch routine bolts",sourceId:"bolts",phase:0,arrival:3,units:1,ageDays:25,deadline:25,critical:!1},{id:"new-repeat",label:"Dispatch another seal batch",sourceId:"seals",phase:1,arrival:30,units:3,ageDays:25,deadline:10,critical:!0},{id:"new-custom",label:"Confirm custom fulfillment",sourceId:"custom",phase:1,arrival:31,units:1,ageDays:7,deadline:20,critical:!0},{id:"new-part",label:"Dispatch routine machine parts",sourceId:"parts",phase:1,arrival:32,units:1,ageDays:25,deadline:25,critical:!1},{id:"new-panel",label:"Dispatch a spare panel",sourceId:"panels",phase:2,arrival:60,units:1,ageDays:90,deadline:20,critical:!1}],referencePlan:{kits:{zoneId:"pick",days:7},bolts:{zoneId:"reserve",days:30},parts:{zoneId:"reserve",days:30},seals:{zoneId:"pick",days:30},custom:{zoneId:"supplier",days:7},panels:{zoneId:"reserve",days:90}}},Um={schemaVersion:ym,id:Mm,version:Em,title:Am,brief:Tm,trust:bm,objective:wm,unit:Cm,retentionOptions:Rm,zones:Pm,sources:Dm,practice:Lm,transfer:Im};function Fm(i,e,t){if(!e[t])throw new Error(`[${i}] default pack "${t}" is not registered`);return function(r){const s=r||t,a=e[s];return a?{theme:a,requestedPack:s,activePack:s}:(console.warn(`[${i}] pack "${s}" not available, using "${t}"`),{theme:e[t],requestedPack:s,activePack:t})}}const Nm={colors:{primary:"#e20082",secondary:"#f6931d",secondary3d:"#f99d1c",focus:"#0070f3",greys:{darkest:"#0c1724",darker:"#363c44",dark:"#969daa",light:"#d5dce5",lightest:"#f0f3f7"}}},Om=Fm("port-theme",{default:Nm},"default"),Bm=["primary","secondary","secondary3d","focus"];function tt(i,e){throw new Error(`${i}: ${e}`)}function jt(i,e){return(!i||typeof i!="object"||Array.isArray(i))&&tt(e,"expected an object."),i}function Yt(i,e){(typeof i!="string"||!i.trim()||i.length>xt.maxText)&&tt(e,`use 1–${xt.maxText} text characters.`)}function Gt(i,e,t=0){(typeof i!="number"||!Number.isFinite(i)||i<t||i>xt.maxNumber)&&tt(e,`use a finite number from ${t} to ${xt.maxNumber}.`)}function xr(i,e,t=0){Gt(i,e,t),Number.isInteger(i)||tt(e,"use a whole number.")}function oi(i,e,t,n){return(!Array.isArray(i)||i.length<t||i.length>n)&&tt(e,`use ${t}–${n} items.`),i}function Sr(i,e){Yt(i,e),(!/^[a-z][a-z0-9-]{0,63}$/.test(i)||["constructor","prototype"].includes(i))&&tt(e,"use a short lower-case ID with letters, numbers, and hyphens.")}function ci(i,e){new Set(i).size!==i.length&&tt(e,"duplicate values are not allowed.")}function Ho(i,e,t=!0){const n=jt(i,"plan");for(const[s,a]of Object.entries(n)){e.sources.some(c=>c.id===s)||tt("plan",`unknown source ${s}.`);const o=jt(a,`plan.${s}`);Yt(o.zoneId,"plan.zoneId"),Gt(o.days,"plan.days",1),e.sources.find(c=>c.id===s).routes.some(c=>c.zoneId===o.zoneId)||tt("plan","ineligible route."),e.retentionOptions.includes(o.days)||tt("plan","invalid retention policy.")}const r=n;if(t){const s=ko(e,r);s.length&&tt("plan",s.join(" "))}return structuredClone(r)}function to(i){const e=jt(i,"pack");e.schemaVersion!==xt.schemaVersion&&tt("schemaVersion","this engine requires version 1."),Sr(e.id,"id");for(const a of["version","title","brief","trust","objective","unit"])Yt(e[a],a);const t=oi(e.retentionOptions,"retentionOptions",1,8);t.forEach(a=>xr(a,"retentionOptions",1)),ci(t,"retentionOptions");const n=oi(e.zones,"zones",3,4).map((a,o)=>{const c=jt(a,`zones.${o}`);return Sr(c.id,"zone.id"),Yt(c.label,"zone.label"),["index","restore","offshore","landing"].includes(String(c.kind))||tt("zone.kind","expected index, restore, offshore, or landing."),Gt(c.capacity,"zone.capacity",1),xr(c.workers,"zone.workers",1),c.workers>16&&tt("zone.workers","use at most 16 workers."),Gt(c.storagePerUnitDay,"zone.storagePerUnitDay"),c});ci(n.map(a=>a.id),"zone IDs"),ci(n.map(a=>a.kind),"zone kinds"),["index","restore","offshore"].every(a=>n.some(o=>o.kind===a))||tt("zones","include index, restore, and offshore. Landing is an optional fourth zone.");const r=oi(e.sources,"sources",xt.sourceCount,xt.sourceCount).map((a,o)=>{const c=jt(a,`sources.${o}`);Sr(c.id,"source.id");for(const u of["label","description","location"])Yt(c[u],`source.${u}`);Gt(c.volume,"source.volume",1),xr(c.requiredDays,"source.requiredDays",1),t.some(u=>u>=c.requiredDays)||tt("source.requiredDays","no retention option can meet this requirement.");const l=oi(c.routes,"source.routes",1,4).map(u=>{const h=jt(u,"route"),f=n.find(p=>p.id===h.zoneId);f||tt("route.zoneId","unknown destination.");for(const p of["setupSeconds","transferPerUnit","queryCost","resultTransferCost"])Gt(h[p],`route.${p}`);return Gt(h.serviceSeconds,"route.serviceSeconds",.1),["allowed","denied","unknown"].includes(String(h.access))||tt("route.access","invalid access state."),["allowed","denied"].includes(String(h.verifiedAccess))||tt("route.verifiedAccess","invalid evidence result."),h.access!=="unknown"&&h.access!==h.verifiedAccess&&tt("route","known access must match its evidence result."),Yt(h.evidence,"route.evidence"),f.kind==="landing"?(Gt(h.prepareSeconds,"route.prepareSeconds",.1),Gt(h.prepareCost,"route.prepareCost")):(h.prepareSeconds!==void 0&&h.prepareSeconds!==0||h.prepareCost!==void 0&&h.prepareCost!==0)&&tt("route","only landing routes can prepare a working batch."),f.kind==="offshore"&&(h.transferPerUnit!==0||h.setupSeconds!==0)&&tt("route","offshore queries must not relocate a source. Use result transfer cost for query results."),h});return ci(l.map(u=>u.zoneId),"source route IDs"),c});ci(r.map(a=>a.id),"source IDs");for(const a of["practice","transfer"]){const o=jt(e[a],a);Yt(o.label,`${a}.label`),Yt(o.brief,`${a}.brief`),Gt(o.budget,`${a}.budget`);const c=oi(o.phases,`${a}.phases`,3,3).map(u=>{const h=jt(u,"phase");return Yt(h.label,"phase.label"),Gt(h.at,"phase.at"),h});(c[0].at!==0||c.some((u,h)=>h>0&&u.at<=c[h-1].at))&&tt("phases","start at zero and use increasing release times.");const l=oi(o.requests,`${a}.requests`,0,xt.maxRequests).map(u=>{const h=jt(u,"request");Sr(h.id,"request.id"),Yt(h.label,"request.label"),r.some(v=>v.id===h.sourceId)||tt("request.sourceId","unknown source."),xr(h.phase,"request.phase"),h.phase>=c.length&&tt("request.phase","unknown phase.");for(const v of["arrival","ageDays","deadline"])Gt(h[v],`request.${v}`);Gt(h.units,"request.units",.1),typeof h.critical!="boolean"&&tt("request.critical","expected true or false.");const f=c[h.phase],p=c[h.phase+1];return(h.arrival<f.at||p&&h.arrival>=p.at)&&tt("request.arrival","arrival must be inside its phase."),h});ci(l.map(u=>u.id),`${a} request IDs`)}if(e.theme!==void 0){const a=jt(e.theme,"theme");if(a.pack!==void 0&&Yt(a.pack,"theme.pack"),a.colors!==void 0){const o=jt(a.colors,"theme.colors");for(const[c,l]of Object.entries(o))Bm.includes(c)||tt("theme.colors",`unknown color name ${c}.`),Yt(l,`theme.colors.${c}`)}}const s=structuredClone(e);for(const a of[s.practice,s.transfer]){Ho(a.referencePlan,s);const o=Ui(s,a,a.referencePlan,s.sources.map(c=>c.id));(o.criticalMet!==o.criticalTotal||o.retentionFailures.length||o.totalCost>a.budget)&&tt("referencePlan",`${a.label} has no demonstrated successful plan. Check deadlines, access, capacity, retention, and budget.`)}return s}function qo(i,e){return e==="transfer"?i.transfer:i.practice}const zm=[am,Sm,Um];function km(i,e){if(i!==void 0){const r=to(i);if(e&&e!==r.id)throw new Error(`The custom pack ID is ${r.id}, not ${e}. Remove the scenario parameter or use the matching ID.`);return r}const t=e??"investigation",n=zm.find(r=>r.id===t);if(!n)throw new Error(`Unknown scenario: ${t}. Use investigation, compliance, or warehouse, or load a valid JSON pack.`);return to(n)}function no(i){return{round:"initial",mode:"planning",plan:{},verified:[],flag:"",selectedSource:i.sources[0].id,selectedRequest:"",phase:-1,seconds:0,history:[]}}function Cr(i,e){return qo(i,e.round)}function En(i,e){var n;const t=Cr(i,e);return e.phase<0?0:((n=t.phases[e.phase+1])==null?void 0:n.at)??Ui(i,t,e.plan,e.verified).end}function io(i,e,t){if(!Number.isFinite(t)||t<0)throw new Error("Time must be a finite, non-negative number of milliseconds.");if(e.mode!=="committed"||e.phase<0)return e;const n=structuredClone(e),r=En(i,e);return n.seconds=Math.min(r,e.seconds+t/xt.millisecondsPerSecond),n.phase===Cr(i,e).phases.length-1&&n.seconds>=r&&(n.mode="finished"),n}function Er(i,e=i.plan){var n;const t=(n=i.history[0])==null?void 0:n.plan;return!t||i.round!=="revision"?0:Object.keys(t).filter(r=>{var s,a;return t[r].zoneId!==((s=e[r])==null?void 0:s.zoneId)||t[r].days!==((a=e[r])==null?void 0:a.days)}).length}function Gm(i){return structuredClone({round:i.round,plan:i.plan,verified:i.verified,flag:i.flag})}function Vm(i,e){if(e.mode!=="finished"||e.round==="transfer")throw new Error("Finish the current shift first.");const t=structuredClone(e);return t.history.push(Gm(e)),t.round=e.round==="initial"?"revision":"transfer",t.mode="planning",t.phase=-1,t.seconds=0,t.flag="",t.selectedRequest="",Fr(t,i)}function vt(i,e){if(!i)throw new Error(`Saved state: ${e}`)}function Wo(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function ro(i,e,t){return vt(Wo(i),"invalid run record."),vt(["initial","revision","transfer"].includes(String(i.round)),"invalid round."),Ho(i.plan,e,t),vt(Array.isArray(i.verified)&&new Set(i.verified).size===i.verified.length&&i.verified.every(n=>e.sources.some(r=>r.id===n)),"invalid access evidence."),vt(i.flag===""||e.sources.some(n=>n.id===i.flag),"unknown flag."),t&&vt(i.flag!==""||e.sources.length===0,"committed run needs a flag."),i}function Fr(i,e){vt(Wo(i),"expected an object."),vt(["planning","committed","finished"].includes(String(i.mode)),"invalid mode."),ro(i,e,i.mode!=="planning"),vt(e.sources.some(s=>s.id===i.selectedSource),"unknown selected source.");const t=qo(e,String(i.round));vt(i.selectedRequest===""||t.requests.some(s=>s.id===i.selectedRequest),"unknown selected request."),vt(Number.isInteger(i.phase)&&Number(i.phase)>=-1&&Number(i.phase)<t.phases.length,"invalid release phase."),vt(typeof i.seconds=="number"&&Number.isFinite(i.seconds)&&i.seconds>=0,"invalid clock."),vt(Array.isArray(i.history)&&i.history.length<=2,"invalid history.");const n=i.round==="initial"?0:i.round==="revision"?1:2;vt(i.history.length===n,"round does not match the history."),i.history.forEach((s,a)=>{const o=ro(s,e,!0);vt(o.round===(a===0?"initial":"revision"),"invalid history order.")});const r=i;if(r.history.length===2){const s=r.history[0].plan,a=r.history[1].plan;vt(e.sources.filter(o=>s[o.id].zoneId!==a[o.id].zoneId||s[o.id].days!==a[o.id].days).length<=xt.revisionLimit,"saved revision changed too many sources.")}return vt(Er(r)<=xt.revisionLimit,"too many revised sources."),r.mode==="planning"?vt(r.seconds===0&&r.phase===-1,"a draft cannot have released requests."):(vt(r.flag!==""||e.sources.length===0,"committed run needs a flag."),vt(r.seconds<=En(e,r),"clock is beyond the request gate."),r.phase<0?vt(r.seconds===0,"closed gate has an active clock."):vt(r.seconds>=t.phases[r.phase].at,"clock is before the released phase."),r.mode==="finished"&&vt(r.phase===t.phases.length-1&&r.seconds===En(e,r),"unfinished run marked complete.")),structuredClone(r)}function Xo(i){let e=2166136261;for(const t of JSON.stringify(i))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0).toString(16)}const Rr=i=>`port:v${xt.saveVersion}:${i.id}`;function Hm(i,e){return JSON.stringify({saveVersion:xt.saveVersion,packId:i.id,packVersion:i.version,contentStamp:Xo(i),state:Fr(e,i)},null,2)}function qm(i,e){if(i.length>xt.maxSaveBytes)throw new Error("The saved file is too large.");const t=JSON.parse(i);if(!t||t.saveVersion!==xt.saveVersion||t.packId!==e.id||t.packVersion!==e.version||t.contentStamp!==Xo(e))throw new Error("The saved state has a different pack, content version, or save format. Export it before you restart.");return Fr(t.state,e)}function Wm(i,e){const t=i.getItem(Rr(e));return t===null?null:qm(t,e)}function Xm(i,e,t){i.setItem(Rr(e),Hm(e,t))}const so=64e3;function Cs(i,e=0){if(!i||e>20)return null;try{const t=i.API_1484_11;if(t)return t;const n=i.parent&&i.parent!==i?i.parent:null;return Cs(n,e+1)??(e===0?Cs(i.opener??null,1):null)}catch{return null}}const ao={connected:!1,resumeData:()=>null,save:()=>{},finish:()=>{}};function Ym(){const i=typeof window>"u"?null:Cs(window);if(!i||i.Initialize("")!=="true")return ao;const e=Date.now();let t=!1,n=!1;const r=(l,u)=>{i.SetValue(l,u)},s=i.GetValue("cmi.entry"),a=i.GetValue("cmi.suspend_data"),o=s==="resume"&&a?a:null;r("cmi.exit","suspend"),r("cmi.completion_status","incomplete"),i.Commit("");const c=()=>{t||(t=!0,r("cmi.session_time",Zm(Date.now()-e)),i.Commit(""),i.Terminate(""))};return window.addEventListener("pagehide",c),{connected:!0,resumeData:()=>o,save(l){t||(r("cmi.exit","suspend"),r("cmi.suspend_data",l.length>so?l.slice(0,so):l),i.Commit(""))},finish(l={}){if(!(t||n)){if(n=!0,r("cmi.completion_status","completed"),l.score!==void 0&&l.max!==void 0){const u=l.min??0,h=l.max-u;r("cmi.score.min",String(u)),r("cmi.score.max",String(l.max)),r("cmi.score.raw",String(l.score)),h>0&&r("cmi.score.scaled",String($m((l.score-u)/h,-1,1)))}l.passed!==void 0&&r("cmi.success_status",l.passed?"passed":"failed"),r("cmi.exit","normal"),r("cmi.suspend_data",""),i.Commit("")}}}}function $m(i,e,t){return i<e?e:i>t?t:i}function Zm(i){const e=Math.max(0,Math.round(i/1e3)),t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return`PT${t>0?`${t}H`:""}${n>0?`${n}M`:""}${r}S`}const Ss=document.querySelector("#app");var oo,co;try{let i=function(){fe.hidden=!0,D="none",O=""},e=function(R,z){D=R,O=z,fe.hidden=!1,s()},t=function(){I=null,w.setLifted(null),E=[],y=-1},n=function(){let R=0;for(const[z,k]of Object.entries(g.plan)){const le=d.sources.find(Se=>Se.id===z),$=d.zones.find(Se=>Se.id===k.zoneId),ne=le.routes.find(Se=>Se.zoneId===k.zoneId);R+=le.volume*k.days*$.storagePerUnitDay+le.volume*ne.transferPerUnit}return Math.round(R*100)/100},r=function(){if(g.mode==="finished")return g.round==="transfer"?"Done. Your results are on the left.":g.round==="initial"?"Shift over. Read your results, then click Change plan.":"Shift over. Read your results, then click Next shift.";if(g.mode==="committed")return g.seconds<En(d,g)?b?"Trucks are arriving. Click one to see its times.":"Paused. Click Play to continue.":g.phase>=Ee().phases.length-1?"Last wave. The shift is ending.":`Wave ${g.phase+2} is waiting. Click Open gate.`;const R=d.sources.filter(k=>g.plan[k.id]).length;if(R<d.sources.length)return`Click a container, then click a storage area. ${R} of ${d.sources.length} placed.`;const z=g.round==="revision"?` You can move ${xt.revisionLimit-Er(g)} more.`:g.round==="transfer"?" New requests this shift.":"";return g.flag?`Click Open gate to start the shift.${z}`:`Open the container you expect to wait longest. Click Mark longest wait.${z}`},s=function(){if(fe.replaceChildren(),D==="source"){const R=d.sources.find($=>$.id===O);if(!R){i();return}const z=g.plan[R.id],k=Ee().requests.filter($=>$.sourceId===R.id),le=R.routes.some($=>$.access==="unknown")&&!g.verified.includes(R.id);if(fe.append(Dt("Close",()=>{i()},"fold"),Te("p",R.location,"eyebrow"),Te("h2",R.label),Te("p",`Size: ${R.volume} ${d.unit}. Must keep: ${R.requiredDays} days.`,"manifest-facts")),k.length){const $=Te("div","","request-facts");$.append(Te("p","Requests this shift","eyebrow")),k.forEach(ne=>$.append(Te("p",`${ne.critical?"Urgent":"Routine"}: ${ne.label}. Due in ${ne.deadline}s. Needs data ${ne.ageDays} days old.`,"request-line"))),fe.append($)}else fe.append(Te("p","No requests this shift."));if(le){const $=Dt("Check access",()=>{$.disabled=!0;const ne=Te("span","","courier");fe.insertBefore(ne,$),requestAnimationFrame(()=>ne.classList.add("arrived")),setTimeout(()=>ke(()=>{g.verified.push(R.id),Jt.play("evidence")}),550)});fe.append(Te("p","Access not checked yet."),$)}if(z){const $=d.zones.find(ne=>ne.id===z.zoneId);if(fe.append(Te("p",`Stored at: ${$.label.replace(/^\d+ · /,"")}.`)),g.mode==="planning"&&$.kind!=="offshore"){const ne=Te("div","","retention-pills");d.retentionOptions.forEach(Se=>ne.append(Dt(`${Se}d`,()=>ke(()=>{const re=structuredClone(g.plan);re[R.id].days=Se,g.plan=re,Jt.play("retention",{gain:.5})}),Se===z.days?"primary":""))),fe.append(Te("p","Days to keep","eyebrow"),ne)}}else g.mode==="planning"&&fe.append(Te("p","Not placed yet. Click a storage area."));g.mode==="planning"&&fe.append(g.flag===R.id?Te("p","Marked as longest wait.","marked"):Dt("Mark longest wait",()=>{ke(()=>{g.flag=R.id}),Jt.play("flag",{gain:.5}),d.sources.every($=>g.plan[$.id])&&Q(`Marked: ${R.label}. Click Open gate to start.`)}))}else if(D==="request"){const R=A==null?void 0:A.requests.find(z=>z.id===O);if(!R){i();return}if(fe.append(Dt("Close",()=>{i()},"fold"),Te("p","Request","eyebrow"),Te("h2",Ee().requests.find(z=>z.id===O).label)),R.finish<=g.seconds){const z=Te("div","","delay-chain");for(const[k,le]of[["Setup",R.setupWait],["Line",R.queueWait],["Prepare",R.prepare],["Search",R.service]]){const $=Te("div");$.append(Te("strong",`${le}s`),Te("span",String(k))),z.append($)}fe.append(z,Te("p",Cp(R)))}else fe.append(Te("p","Still in progress."))}},a=function(R){return R.requests.filter(z=>z.status==="late").map(z=>w.berthWorldXZ(z.zoneId)).filter(z=>!!z)},o=function(R){const z=Ee().requests.find($=>$.id===R.id).label;if(R.status==="access-denied")return[z,"Access denied"];if(R.status==="access-unknown")return[z,"Access not checked"];if(R.status==="expired")return[z,"Data already deleted"];const le=[["setup",R.setupWait],["waiting in line",R.queueWait],["preparing",R.prepare],["search",R.service]].reduce(($,ne)=>ne[1]>$[1]?ne:$);return[z,`Took ${R.elapsed}s. Due in ${R.deadline}s. Most time: ${le[0]}${le[0]==="preparing"?` in ${nt(R.zoneId)}`:""}.`]},c=function(){if(!A)return;Xe.hidden=!1;const R=Ka(A),z=g.flag===R,k=A.criticalTotal-A.criticalMet,le=A.totalCost>Ee().budget,$=[["Urgent on time",`${A.criticalMet} of ${A.criticalTotal}`,k>0],["All on time",`${A.met} of ${A.requests.length}`,!1],["Budget used",`${A.totalCost} of ${Ee().budget}`,le],...A.retentionFailures.length?[["Kept too few days",`${A.retentionFailures.length} source${A.retentionFailures.length===1?"":"s"}`,!0]]:[],["Longest wait",Me(R),!1],["Your guess",`${Me(g.flag)} (${z?"right":"wrong"})`,!z]],ne=Te("dl","","result-rows");$.forEach(([ue,De,Ce])=>ne.append(Te("dt",ue),Te("dd",De,Ce?"bad":"")));const Se=k===0?le?"On time, over budget":"All urgent trucks on time":`${k} urgent truck${k===1?"":"s"} failed${le?", over budget":""}`;Xe.replaceChildren(Te("h2",Se),ne);const re=A.requests.filter(ue=>ue.critical&&ue.status!=="met");if(re.length){const ue=Te("dl","","result-rows stacked");re.forEach(De=>{const[Ce,_e]=o(De);ue.append(Te("dt",Ce),Te("dd",_e,"bad"))}),Xe.append(Te("p","Failed urgent trucks","eyebrow"),ue)}if(g.round==="transfer"){const ue=g.history[0],De=Ui(d,Cr(d,{round:"initial"}),ue.plan,ue.verified);Xe.append(Te("p",`Shift 1: ${De.criticalMet} of ${De.criticalTotal} urgent on time. Shift 3: ${A.criticalMet} of ${A.criticalTotal}.`,"takeaway"))}if(g.round!=="transfer"){const ue=xt.revisionLimit-Er(g);Xe.append(Dt(g.round==="initial"?`Change plan (${ue} moves)`:"Next shift",()=>{const De=A;g=Vm(d,g),A=null,b=!1,t(),i(),w.clearGhosts(),g.round==="revision"&&w.showGhosts(a(De)),Q(g.round==="revision"?"Same trucks again. Move up to two containers.":"New requests. Move any container you like."),Ae(),v()},"primary"))}else Xe.append(Dt("Play again",()=>{g=no(d),A=null,b=!1,t(),i(),w.clearGhosts(),q.hidden=!1,Ae(),v()},"primary"))},l=function(R){if(g.mode!=="planning"){e("source",R);return}I=R,w.setLifted(R),E=d.sources.find(z=>z.id===R).routes.map(z=>z.zoneId),y=-1,Jt.play("lift",{gain:.35}),e("source",R),Q(`Click a storage area for ${Me(R)}.`)},u=function(R){if(g.mode!=="planning"||!I)return;const z=I;ke(()=>{var $;const k=d.sources.find(ne=>ne.id===z);if(!k.routes.some(ne=>ne.zoneId===R))throw new Error("That container cannot go there. Try another area.");const le=structuredClone(g.plan);if(le[k.id]={zoneId:R,days:(($=le[k.id])==null?void 0:$.days)??d.retentionOptions.find(ne=>ne>=k.requiredDays)??d.retentionOptions.at(-1)},Er(g,le)>xt.revisionLimit)throw new Error("You can move only two containers this shift.");g.plan=le,w.landing.add(k.id)}),t(),e("source",z)},h=function(){if(g.mode==="planning"){ke(()=>{if(!d.sources.every(R=>g.plan[R.id]))throw new Error("Place every container first.");if(!g.flag)throw new Error("First click Mark longest wait on one container.");g=Fr({...g,mode:"committed"},d),A=Ui(d,Ee(),g.plan,g.verified),g.phase=0,b=!0,Jt.play("gate")}),A&&(w.clearGhosts(),t(),i(),Q("Trucks are arriving. Click one to see its times."));return}g.mode==="committed"&&ke(()=>{if(g.seconds<En(d,g))throw new Error("Wait for this wave to finish.");if(g.phase>=Ee().phases.length-1)throw new Error("Every wave has started.");g.phase++,b=!0,Jt.play("gate"),Q(`Wave ${g.phase+1} is arriving.`)})},f=function(){if(G=!G,$e.hidden=!G,G){const R=Te("ol");p().forEach(z=>R.append(Te("li",z))),$e.replaceChildren(Dt("Close",f,"fold"),Te("h2","Help"),Te("p",d.objective),R,Te("h3","Keyboard"),Te("p","Tab to a label and press Enter to click it. After you pick a container, Left and Right arrows move between storage areas. Esc closes a panel."))}},p=function(){return["Click a container on the ship to see its requests.","Click a numbered storage area to put it there. Set the days to keep in the panel.","In the panel of the container you expect to wait longest, click Mark longest wait.","Click Open gate to send in trucks. Click it again for each new wave.","Click a truck to see where its time went."]},v=function(){w.gateLabel.textContent=g.mode==="finished"?"Shift over":g.mode==="committed"&&g.seconds<En(d,g)?"Gate open":"Open gate";const R=A?A.totalCost:n();xe.replaceChildren(Te("span",`Shift ${g.round==="initial"?1:g.round==="revision"?2:3} of 3`,"eyebrow"),Te("strong",`${Math.floor(g.seconds)}s`),_(),Te("span",`Budget used: ${R} of ${Ee().budget}`,"gauge-label")),Oe.hidden=g.mode!=="committed",te.textContent=b?"Pause":"Play",D!=="none"&&s(),g.mode==="finished"?c():Xe.hidden=!0,Q(r())},_=function(){const R=A?A.totalCost:n(),z=Te("div","","gauge"),k=Te("div","",R>Ee().budget?"gauge-fill over":"gauge-fill");return k.style.width=`${Math.min(100,R/Ee().budget*100)}%`,z.append(k),z},m=function(R){const z=g.seconds,k=g.mode==="finished";if(g=io(d,g,R),!A)return;A!==T&&(T=A,S=new Set(A.requests.filter(ne=>z>0&&ne.finish<=z).map(ne=>ne.id)));const le=A.requests.filter(ne=>!S.has(ne.id)&&ne.finish<=g.seconds);le.forEach(ne=>S.add(ne.id));const $=performance.now();le.length&&$-Ne>350&&(Ne=$,Jt.play(le.some(ne=>ne.status!=="met"&&ne.status!=="late")?"turned-back":le.some(ne=>ne.status==="late")?"truck-late":"truck-met")),!k&&g.mode==="finished"&&(Jt.play(g.flag===Ka(A)?"flag-right":"flag-wrong"),g.round==="transfer"&&!Y&&(Y=!0,W.connected&&W.finish({score:A.criticalTotal?Math.round(A.criticalMet/A.criticalTotal*100):100,max:100})))};const d=km(window.__ENGINE_CONTENT__,new URLSearchParams(location.search).get("scenario")),{theme:C}=Om((oo=d.theme)==null?void 0:oo.pack),x={...C.colors,...(co=d.theme)==null?void 0:co.colors};Dp(x),document.documentElement.style.setProperty("--splunk-gradient",`radial-gradient(circle at left top, ${x.primary}, ${x.primary} 50%, ${x.secondary})`),document.documentElement.style.setProperty("--splunk-line",`linear-gradient(90deg, ${x.primary}, ${x.primary} 45%, ${x.secondary})`);let g=no(d),b=!1,A=null,P=1,I=null,E=[],y=-1,D="none",O="",G=!1;const W=Ym();let Y=!1,X=!1;const ie=Te("div","","terminal"),q=Te("section","","intro"),he=Te("p","","instruction");he.setAttribute("role","status");const xe=Te("div","","hud"),fe=Te("section","","tag");fe.hidden=!0;const Oe=Te("div","","run-controls");Oe.hidden=!0;const Ke=Te("div","","corner-controls"),Xe=Te("section","","summary");Xe.hidden=!0;const $e=Te("section","","help-panel");$e.hidden=!0;const Z=Te("div","","left-column");Z.append(fe,Xe),Ss.replaceChildren(ie,he,xe,Z,Oe,Ke,$e,q);const Q=R=>{he.textContent=R},Me=R=>{var z;return((z=d.sources.find(k=>k.id===R))==null?void 0:z.label)??R},Ee=()=>Cr(d,g),Ae=()=>{try{Xm(localStorage,d,g)}catch{Q("Could not save progress in this browser.")}},ke=R=>{try{R(),Ae(),v()}catch(z){Q(z.message)}},nt=R=>{var z;return(((z=d.zones.find(k=>k.id===R))==null?void 0:z.label)??"").replace(/^\d+ · /,"").toLowerCase()};let w;try{w=new Ip(ie,d,R=>{R.kind==="source"?l(R.id):R.kind==="berth"?u(R.id):h()})}catch{throw Ss.replaceChildren(Te("h1","The Port could not load"),Te("p","This browser could not start the 3D view.")),new Error("terminal unavailable")}w.onLand=()=>Jt.play("set-down",{gain:.5}),ie.addEventListener("request-selected",R=>e("request",R.detail)),ie.addEventListener("scene-lost",()=>{b=!1,Q("The 3D view stopped. Reload the page.")});const te=Dt("Pause",()=>{b=!b,v()}),j=Dt("1x",()=>{P=P===1?2:P===2?4:1,j.textContent=`${P}x`}),J=Dt("Skip 5s",()=>ke(()=>{b=!1,g=io(d,g,5e3)}));Oe.append(te,j,J);const K=Jt.mountToggle(Dt("Sound on",()=>{})),pe=Dt("Help",f),se=Dt("Start over",()=>{X=!0;try{localStorage.removeItem(Rr(d))}catch{}location.reload()});Ke.append(K,pe,se);const de=Te("div","","intro-card"),ze=Te("ol");p().forEach(R=>ze.append(Te("li",R))),de.append(Te("h1","The Port"),Te("p",d.title,"subtitle"),Te("h2","The situation"),Te("p",d.brief),Te("h2","Your goal"),Te("p",d.objective),Te("h2","What to do"),ze,Dt("Start",()=>{q.hidden=!0,v()},"primary")),q.append(de),window.addEventListener("keydown",R=>{var z;if(R.key==="Escape"){G?f():fe.hidden?I&&t():i();return}!I||!E.length||(R.key==="ArrowRight"||R.key==="ArrowLeft")&&(y=(y+(R.key==="ArrowRight"?1:-1)+E.length)%E.length,(z=w.berthLabels.get(E[y]))==null||z.focus(),R.preventDefault())});let Ne=0,T=null,S=new Set;w.stage.frame=R=>{b&&(m(R*xt.visual.playbackRate*P),g.seconds>=En(d,g)&&(b=!1,Ae()),v()),w.gateOpen=g.mode==="committed"&&g.phase>=0&&g.seconds<En(d,g),w.update(g,A,R)},window.advanceTime=R=>{m(R),v(),w.update(g,A,1),Ae()},window.render_game_to_text=()=>JSON.stringify({engine:"port",renderer:"threejs",state:g,running:b,lifted:I,tagKind:D,tagId:O,objects:w.stage.describeObjects(),containers:d.sources.map(R=>({id:R.id,...w.anchor(w.containers.get(R.id),[0,.4,0])})),trucks:A?A.requests.filter(R=>w.trucks.has(R.id)).map(R=>({id:R.id,...w.anchor(w.trucks.get(R.id),[0,1,0])})):[],requests:A==null?void 0:A.requests.filter(R=>R.arrival<=g.seconds).map(R=>({...R,current:Go(R,g.seconds)})),drawCalls:w.stage.renderer.info.render.calls}),window.addEventListener("pagehide",()=>{X||Ae()});let B=!1;try{const R=Wm(localStorage,d);R&&(g=R,B=!0,g.mode!=="planning"&&(A=Ui(d,Ee(),g.plan,g.verified)))}catch{try{localStorage.removeItem(Rr(d))}catch{}}q.hidden=B||Object.keys(g.plan).length>0,v()}catch(i){i.message!=="terminal unavailable"&&Ss.replaceChildren(Te("h1","The Port could not load"),Te("p",i.message))}
