(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new Set(`a an and as at but by for from in into nor of on or per the to vs via with`.split(` `));function t(t){let n=t.trim().split(/\s+/);return n.map((t,r)=>{if(/\p{Lu}/u.test(t.slice(1)))return t.replace(/(\p{L})(['’])([ST])(\W*)$/u,(e,t,n,r,i)=>t+n+r.toLowerCase()+i);let i=t.toLowerCase(),a=r===0||r===n.length-1,o=r>0&&/[:.!?]$/.test(n[r-1]);return!a&&!o&&e.has(i.replace(/[^\p{L}]/gu,``))?i:i.replace(/^(['"‘“(]*)(\p{L})/u,(e,t,n)=>t+n.toUpperCase()).replace(/([-/])(\p{L})/gu,(e,t,n)=>t+n.toUpperCase())}).join(` `)}var n=new Set([`United States`,`United Kingdom`,`Netherlands`,`Philippines`,`Bahamas`,`Maldives`,`Czech Republic`,`Dominican Republic`,`Central African Republic`,`Democratic Republic of the Congo`,`Republic of the Congo`,`United Arab Emirates`,`Solomon Islands`,`Marshall Islands`,`Comoros`,`Seychelles`]);function r(e){return n.has(e)?`The ${e}`:e}function i(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var a=e=>`https://en.wikipedia.org/wiki/${encodeURIComponent(e.replace(/ /g,`_`))}`;function o(e){return e===void 0?``:Math.round(e).toLocaleString(`en-US`)}function s(e){return e?e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e8?0:1)}M`:e>=1e3?`${Math.round(e/1e3)}K`:String(e):``}function c(e,t=Date.now()){if(!e)return``;let n=Math.max(0,(t-new Date(e).getTime())/1e3);return n<45?`just now`:n<3600?`${Math.round(n/60)}m ago`:n<86400?`${Math.round(n/3600)}h ago`:`${Math.round(n/86400)}d ago`}function l(e){return e?new Date(e.length===10?`${e}T12:00:00Z`:e).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`,timeZone:`UTC`}):``}function u(e){return Math.ceil((new Date(`${e}T00:00:00Z`).getTime()-Date.now())/864e5)}function d(e){let t=u(e);return t<0?`${-t}d ago`:t===0?`today`:t===1?`tomorrow`:t<60?`in ${t} days`:t<730?`in ${Math.round(t/30.4)} months`:`in ${Math.round(t/365)} years`}var f=`https://raw.githubusercontent.com/KenLinz/politiview/data`.replace(/\/$/,``),p=e=>`/politiview/${e.replace(/^\/+/,``)}`,m=()=>`${f}/state.json`;function h(e){let t=p(`data/${e}`);return fetch(`${f}/${e}`).then(e=>e.ok?e:fetch(t)).catch(()=>fetch(t))}var g=(e,t,n)=>`https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default/2004-08-01/GoogleMapsCompatible_Level8/${e}/${n}/${t}.jpeg`,_=(e,t,n)=>`https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/${e}/${n}/${t}.jpg`,v=e=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(e)}?width=220`,y=1e3,b=1001,x=1002,S=1003,C=1004,w=1005,T=1006,E=1007,D=1008,O=1009,k=1010,A=1011,j=1012,M=1013,N=1014,ee=1015,te=1016,ne=1017,re=1018,ie=1020,ae=35902,oe=35899,P=1021,se=1022,ce=1023,F=1026,le=1027,ue=1028,de=1029,fe=1030,pe=1031,me=1033,he=33776,ge=33777,_e=33778,ve=33779,ye=35840,be=35841,xe=35842,Se=35843,Ce=36196,we=37492,Te=37496,Ee=37488,De=37489,Oe=37490,ke=37491,Ae=37808,je=37809,Me=37810,Ne=37811,I=37812,Pe=37813,Fe=37814,Ie=37815,L=37816,Le=37817,R=37818,z=37819,Re=37820,ze=37821,Be=36492,Ve=36494,He=36495,Ue=36283,We=36284,Ge=36285,Ke=36286,qe=2300,Je=2301,Ye=2302,Xe=2303,Ze=2400,Qe=2401,$e=2402,et=3200,tt=`srgb`,nt=`srgb-linear`,rt=`linear`,it=`srgb`,at=7680,ot=35044,st=35048,ct=`300 es`,lt=2e3;function ut(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ft(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function pt(){let e=ft(`canvas`);return e.style.display=`block`,e}var mt={};function ht(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function gt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=gt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=gt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function _t(...e){let t=e.join(` `);t in mt||(mt[t]=!0,B(...e))}function vt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var yt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},bt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},xt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),St=Math.PI/180,Ct=180/Math.PI;function wt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[e&255]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+`-`+xt[t&255]+xt[t>>8&255]+`-`+xt[t>>16&15|64]+xt[t>>24&255]+`-`+xt[n&63|128]+xt[n>>8&255]+`-`+xt[n>>16&255]+xt[n>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function Tt(e,t,n){return Math.max(t,Math.min(n,e))}function Et(e,t){return(e%t+t)%t}function Dt(e,t,n){return(1-n)*e+n*t}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function At(e,t){if(t.constructor===Float32Array)return e;let n=kt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function jt(e,t){if(t.constructor===Float32Array)return e;let n=kt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Mt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new H,Ft=new Nt,U=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return _t(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return _t(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return _t(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new U,Lt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:nt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?rt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[nt]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:t,whitePoint:r,transfer:it,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=ft(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ft(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=wt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new H,Xt=class e extends bt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=b,i=b,a=T,o=D,s=ce,c=O,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=wt(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case y:e.x-=Math.floor(e.x);break;case b:e.x=e.x<0?0:1;break;case x:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case y:e.y-=Math.floor(e.y);break;case b:e.y=e.y<0?0:1;break;case x:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends bt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:T,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Xt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:T,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=S,this.minFilter=S,this.wrapR=b,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=S,this.minFilter=S,this.wrapR=b,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=lt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=lt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new H,an=new nn,on=new H(0,0,0),sn=new H(1,1,1),cn=new H,ln=new H,un=new H,dn=new nn,fn=new Nt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Tt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hn=0,gn=new H,_n=new Nt,vn=new nn,yn=new H,bn=new H,xn=new H,Sn=new Nt,Cn=new H(1,0,0),wn=new H(0,1,0),Tn=new H(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends bt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=wt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new pn,r=new Nt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new U}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new H(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Rn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=Et(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=tt){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Pn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Bt.workingToColorSpace(zn.copy(this),e),Math.round(Tt(zn.r*255,0,255))*65536+Math.round(Tt(zn.g*255,0,255))*256+Math.round(Tt(zn.b*255,0,255))}getHexString(e=tt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(zn.copy(this),t);let n=zn.r,r=zn.g,i=zn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=tt){Bt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,r=zn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=Dt(Fn.h,In.h,t),r=Dt(Fn.s,In.s,t),i=Dt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new Rn;Rn.NAMES=Pn;var Bn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H,Zn=new Zt,Qn=new Zt,$n=new Zt,er=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Vn.subVectors(r,t),Hn.subVectors(n,t),Un.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Hn),s=Vn.dot(Un),c=Hn.dot(Hn),l=Hn.dot(Un),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Wn.x),s.addScaledVector(a,Wn.y),s.addScaledVector(o,Wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Zn.setScalar(0),Qn.setScalar(0),$n.setScalar(0),Zn.fromBufferAttribute(e,t),Qn.fromBufferAttribute(e,n),$n.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zn,i.x),a.addScaledVector(Qn,i.y),a.addScaledVector($n,i.z),a}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),Hn.subVectors(e,t),Vn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Gn.subVectors(r,n),Kn.subVectors(i,n),Jn.subVectors(e,n);let s=Gn.dot(Jn),c=Kn.dot(Jn);if(s<=0&&c<=0)return t.copy(n);Yn.subVectors(e,r);let l=Gn.dot(Yn),u=Kn.dot(Yn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Gn,a);Xn.subVectors(e,i);let f=Gn.dot(Xn),p=Kn.dot(Xn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Gn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,rr):rr.fromBufferAttribute(r,t),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fr.subVectors(this.max,dr),ar.subVectors(e.a,dr),or.subVectors(e.b,dr),sr.subVectors(e.c,dr),cr.subVectors(or,ar),lr.subVectors(sr,or),ur.subVectors(ar,sr);let t=[0,-cr.z,cr.y,0,-lr.z,lr.y,0,-ur.z,ur.y,cr.z,0,-cr.x,lr.z,0,-lr.x,ur.z,0,-ur.x,-cr.y,cr.x,0,-lr.y,lr.x,0,-ur.y,ur.x,0];return!hr(t,ar,or,sr,fr)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,ar,or,sr,fr))?!1:(pr.crossVectors(cr,lr),t=[pr.x,pr.y,pr.z],hr(t,ar,or,sr,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new H,new H,new H,new H,new H,new H,new H,new H],rr=new H,ir=new tr,ar=new H,or=new H,sr=new H,cr=new H,lr=new H,ur=new H,dr=new H,fr=new H,pr=new H,mr=new H;function hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mr.fromArray(e,a);let o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),s=t.dot(mr),c=n.dot(mr),l=r.dot(mr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var gr=new H,_r=new Mt,vr=0,yr=class extends bt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ot,this.updateRanges=[],this.gpuType=ee,this.version=0,this._normalizationScale=e===void 0?void 0:kt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?jt(e,this.array):Math.round(e*t)}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sr=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=new tr,wr=new H,Tr=new H,Er=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Cr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Tr)),this.expandByPoint(wr.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dr=0,Or=new nn,kr=new An,Ar=new H,jr=new tr,Mr=new tr,Nr=new H,Pr=class e extends bt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=wt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ut(e)?xr:br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,n){return Or.makeTranslation(e,t,n),this.applyMatrix4(Or),this}scale(e,t,n){return Or.makeScale(e,t,n),this.applyMatrix4(Or),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Sr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(this.boundingBox.min,jr.min),this.boundingBox.expandByPoint(Nr),Nr.addVectors(this.boundingBox.max,jr.max),this.boundingBox.expandByPoint(Nr)):(this.boundingBox.expandByPoint(jr.min),this.boundingBox.expandByPoint(jr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(jr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(jr.min,Mr.min),jr.expandByPoint(Nr),Nr.addVectors(jr.max,Mr.max),jr.expandByPoint(Nr)):(jr.expandByPoint(Mr.min),jr.expandByPoint(Mr.max))}jr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nr.fromBufferAttribute(a,t),o&&(Ar.fromBufferAttribute(e,t),Nr.add(Ar)),r=Math.max(r,n.distanceToSquared(Nr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new yr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new Mt,p=new Mt,m=new Mt,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nr.fromBufferAttribute(e,t),Nr.normalize(),e.setXYZ(t,Nr.x,Nr.y,Nr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fr=new H,Ir=new H,Lr=new U,Rr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fr.subVectors(n,t).cross(Ir.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lr.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zr=0,Br=class extends bt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=wt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=at,this.stencilZFail=at,this.stencilZPass=at,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Rr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Mt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=new H,Hr=new H,Ur=new H,Wr=new H,Gr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Hr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Wr.dot(this.direction),s=-Wr.dot(Ur),c=Wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hr).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),r=Vr.dot(Vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,ne=1/w,re=T-ee*D,ie=E-te*D,ae=O-ee*A,oe=k-te*A,P=j-ee*N,se=M-te*N,ce=P*oe-se*ae,F=re*se-ie*P,le=ae*ie-oe*re;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=ne*(ce*D+F*A+le*N);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kr=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Rn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qr=new nn,Jr=new Gr,Yr=new Er,Xr=new H,Zr=new H,Qr=new H,$r=new H,ei=new H,ti=new H,ni=new H,ri=new H,ii=class extends An{constructor(e=new Pr,t=new Kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ei.fromBufferAttribute(s,e),a?ti.addScaledVector(ei,r):ti.addScaledVector(ei.sub(t),r))}t.add(ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Jr.copy(e.ray).recast(e.near),Yr.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Yr,Xr)===null||Jr.origin.distanceToSquared(Xr)>(e.far-e.near)**2)||(qr.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(qr),(n.boundingBox===null||Jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=oi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=oi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=oi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=oi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ai(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ri.copy(s),ri.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ri);return l<n.near||l>n.far?null:{distance:l,point:ri.clone(),object:e}}function oi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Zr),e.getVertexPosition(c,Qr),e.getVertexPosition(l,$r);let u=ai(e,t,n,r,Zr,Qr,$r,ni);if(u){let e=new H;er.getBarycoord(ni,Zr,Qr,$r,e),i&&(u.uv=er.getInterpolatedAttribute(i,s,c,l,e,new Mt)),a&&(u.uv1=er.getInterpolatedAttribute(a,s,c,l,e,new Mt)),o&&(u.normal=er.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};er.getNormal(Zr,Qr,$r,t.normal),u.face=t,u.barycoord=e}return u}var si=class extends Xt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=S,l=S,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ci=class extends yr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},li=new Er,ui=new Mt(.5,.5),di=new H,fi=class{constructor(e=new Rr,t=new Rr,n=new Rr,r=new Rr,i=new Rr,a=new Rr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=lt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476+ui.distanceTo(e.center),li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(di.x=r.normal.x>0?e.max.x:e.min.x,di.y=r.normal.y>0?e.max.y:e.min.y,di.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(di)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pi=new nn,mi=class e{constructor(){this.coordinateSystem=lt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];pi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new fi),n[e].setFromProjectionMatrix(pi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new fi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},hi=class extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Rn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gi=new nn,_i=new Gr,vi=new Er,yi=new H,bi=class extends An{constructor(e=new Pr,t=new hi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vi.copy(n.boundingSphere),vi.applyMatrix4(r),vi.radius+=i,e.ray.intersectsSphere(vi)===!1)return;gi.copy(r).invert(),_i.copy(e.ray).applyMatrix4(gi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);yi.fromBufferAttribute(l,n),xi(yi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)yi.fromBufferAttribute(l,a),xi(yi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xi(e,t,n,r,i,a,o){let s=_i.distanceSqToPoint(e);if(s<n){let n=new H;_i.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Si=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ci=class extends Xt{constructor(e,t,n=N,r,i,a,o=S,s=S,c,l=F,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wi=class extends Ci{constructor(e,t=N,n=301,r,i,a=S,o=S,s,c=F){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ti=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class e extends Pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Di=class e extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oi=class e extends Pr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new Mt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Sr(s,3)),this.setAttribute(`normal`,new Sr(c,3)),this.setAttribute(`uv`,new Sr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ki=class e extends Pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ai(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Mi(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Mi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ji(e){let t={};for(let n=0;n<e.length;n++){let r=Ai(e[n]);for(let e in r)t[e]=r[e]}return t}function Mi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ni(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Pi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Fi={clone:Ai,merge:ji},Ii=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Li=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ri=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ii,this.fragmentShader=Li,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Ni(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Rn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zi=class extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Bi=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=et,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vi=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ui(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Gi=class extends Wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ze,endingEnd:Ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qe:i=e,o=2*t-n;break;case $e:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Qe:a=e,s=2*n-t;break;case $e:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ki=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},qi=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ji=class extends Wi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Zi(n,t,g,y,r);i[p]=Yi(x,o,_,b,m)}return i}};function Yi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Xi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Zi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Yi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Xi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Qi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Hi(t,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hi(e.times,Array),values:Hi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ui(e.settings)&&(n.settings={inTangents:Hi(e.settings.inTangents,Array),outTangents:Hi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ji(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qe:t=this.InterpolantFactoryMethodDiscrete;break;case Je:t=this.InterpolantFactoryMethodLinear;break;case Ye:t=this.InterpolantFactoryMethodSmooth;break;case Xe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qe;case this.InterpolantFactoryMethodLinear:return Je;case this.InterpolantFactoryMethodSmooth:return Ye;case this.InterpolantFactoryMethodBezier:return Xe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ui(this.settings)&&($i(this.settings.inTangents,e),$i(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ui(this.settings)&&(ea(this.settings.inTangents,e),ea(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&dt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ye,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ui(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function $i(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function ea(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Qi.prototype.ValueTypeName=``,Qi.prototype.TimeBufferType=Float32Array,Qi.prototype.ValueBufferType=Float32Array,Qi.prototype.DefaultInterpolation=Je;var ta=class extends Qi{constructor(e,t,n){super(e,t,n)}};ta.prototype.ValueTypeName=`bool`,ta.prototype.ValueBufferType=Array,ta.prototype.DefaultInterpolation=qe,ta.prototype.InterpolantFactoryMethodLinear=void 0,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};na.prototype.ValueTypeName=`color`;var ra=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ra.prototype.ValueTypeName=`number`;var ia=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},aa=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName=`quaternion`,aa.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends Qi{constructor(e,t,n){super(e,t,n)}};oa.prototype.ValueTypeName=`string`,oa.prototype.ValueBufferType=Array,oa.prototype.DefaultInterpolation=qe,oa.prototype.InterpolantFactoryMethodLinear=void 0,oa.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};sa.prototype.ValueTypeName=`vector`;var ca={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(la(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!la(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function la(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var ua=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},da=class{constructor(e){this.manager=e===void 0?ua:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};da.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var fa=new WeakMap,pa=class extends da{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ca.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=fa.get(a);e===void 0&&(e=[],fa.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=ft(`img`);function s(){l(),t&&t(this);let n=fa.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}fa.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),ca.remove(`image:${e}`);let n=fa.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}fa.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ca.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},ma=class extends da{constructor(e){super(e)}load(e,t,n,r){let i=new Xt,a=new pa(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ha=new H,ga=new Nt,_a=new H,va=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=lt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ga,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ga,_a.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ha,ga,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ga,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ya=new H,ba=new Mt,xa=new Mt,Sa=class extends va{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(St*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ct*2*Math.atan(Math.tan(St*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ya.x,ya.y).multiplyScalar(-e/ya.z),ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ya.x,ya.y).multiplyScalar(-e/ya.z)}getViewSize(e,t){return this.getViewBounds(e,ba,xa),t.subVectors(xa,ba)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(St*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ca=class extends va{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wa=class extends Pr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ta=-90,Ea=1,Da=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Sa(Ta,Ea,e,t);r.layers=this.layers,this.add(r);let i=new Sa(Ta,Ea,e,t);i.layers=this.layers,this.add(i);let a=new Sa(Ta,Ea,e,t);a.layers=this.layers,this.add(a);let o=new Sa(Ta,Ea,e,t);o.layers=this.layers,this.add(o);let s=new Sa(Ta,Ea,e,t);s.layers=this.layers,this.add(s);let c=new Sa(Ta,Ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oa=class extends Sa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ka=`\\[\\]\\.:\\/`,Aa=RegExp(`[\\[\\]\\.:\\/]`,`g`),ja=`[^\\[\\]\\.:\\/]`,Ma=`[^`+ka.replace(`\\.`,``)+`]`,Na=`((?:WC+[\\/:])*)`.replace(`WC`,ja),Pa=`(WCOD+)?`.replace(`WCOD`,Ma),Fa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ja),Ia=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ja),La=RegExp(`^`+Na+Pa+Fa+Ia+`$`),Ra=[`material`,`materials`,`bones`,`map`],za=class{constructor(e,t,n){let r=n||Ba.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ba=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Aa,``)}static parseTrackName(e){let t=La.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ra.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ba.Composite=za,Ba.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ba.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ba.prototype.GetterByBindingType=[Ba.prototype._getValue_direct,Ba.prototype._getValue_array,Ba.prototype._getValue_arrayElement,Ba.prototype._getValue_toArray],Ba.prototype.SetterByBindingTypeAndVersioning=[[Ba.prototype._setValue_direct,Ba.prototype._setValue_direct_setNeedsUpdate,Ba.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ba.prototype._setValue_array,Ba.prototype._setValue_array_setNeedsUpdate,Ba.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ba.prototype._setValue_arrayElement,Ba.prototype._setValue_arrayElement_setNeedsUpdate,Ba.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ba.prototype._setValue_fromArray,Ba.prototype._setValue_fromArray_setNeedsUpdate,Ba.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Va(e,t,n,r){let i=Ha(r);switch(n){case P:return e*t;case ue:return e*t/i.components*i.byteLength;case de:return e*t/i.components*i.byteLength;case fe:return e*t*2/i.components*i.byteLength;case pe:return e*t*2/i.components*i.byteLength;case se:return e*t*3/i.components*i.byteLength;case ce:return e*t*4/i.components*i.byteLength;case me:return e*t*4/i.components*i.byteLength;case he:case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case be:case Se:return Math.max(e,16)*Math.max(t,8)/4;case ye:case xe:return Math.max(e,8)*Math.max(t,8)/2;case Ce:case we:case Ee:case De:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Te:case Oe:case ke:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case je:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case I:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Pe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case z:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Re:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ze:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Be:case Ve:case He:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ue:case We:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ge:case Ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ha(e){switch(e){case O:case k:return{byteLength:1,components:1};case j:case A:case te:return{byteLength:2,components:1};case ne:case re:return{byteLength:2,components:4};case N:case M:case ee:return{byteLength:4,components:1};case ae:case oe:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ua(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Wa(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ga={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},W={common:{diffuse:{value:new Rn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new Rn(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Ka={basic:{uniforms:ji([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:Ga.meshbasic_vert,fragmentShader:Ga.meshbasic_frag},lambert:{uniforms:ji([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new Rn(0)},envMapIntensity:{value:1}}]),vertexShader:Ga.meshlambert_vert,fragmentShader:Ga.meshlambert_frag},phong:{uniforms:ji([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new Rn(0)},specular:{value:new Rn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ga.meshphong_vert,fragmentShader:Ga.meshphong_frag},standard:{uniforms:ji([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new Rn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ga.meshphysical_vert,fragmentShader:Ga.meshphysical_frag},toon:{uniforms:ji([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new Rn(0)}}]),vertexShader:Ga.meshtoon_vert,fragmentShader:Ga.meshtoon_frag},matcap:{uniforms:ji([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:Ga.meshmatcap_vert,fragmentShader:Ga.meshmatcap_frag},points:{uniforms:ji([W.points,W.fog]),vertexShader:Ga.points_vert,fragmentShader:Ga.points_frag},dashed:{uniforms:ji([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ga.linedashed_vert,fragmentShader:Ga.linedashed_frag},depth:{uniforms:ji([W.common,W.displacementmap]),vertexShader:Ga.depth_vert,fragmentShader:Ga.depth_frag},normal:{uniforms:ji([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:Ga.meshnormal_vert,fragmentShader:Ga.meshnormal_frag},sprite:{uniforms:ji([W.sprite,W.fog]),vertexShader:Ga.sprite_vert,fragmentShader:Ga.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ga.background_vert,fragmentShader:Ga.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:Ga.backgroundCube_vert,fragmentShader:Ga.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ga.cube_vert,fragmentShader:Ga.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ga.equirect_vert,fragmentShader:Ga.equirect_frag},distance:{uniforms:ji([W.common,W.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ga.distance_vert,fragmentShader:Ga.distance_frag},shadow:{uniforms:ji([W.lights,W.fog,{color:{value:new Rn(0)},opacity:{value:1}}]),vertexShader:Ga.shadow_vert,fragmentShader:Ga.shadow_frag}};Ka.physical={uniforms:ji([Ka.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new Rn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new Rn(0)},specularColor:{value:new Rn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Ga.meshphysical_vert,fragmentShader:Ga.meshphysical_frag};var qa={r:0,b:0,g:0},Ja=new nn,Ya=new U;Ya.set(-1,0,0,0,1,0,0,0,1);function Xa(e,t,n,r,i,a){let o=new Rn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ii(new Ei(1,1,1),new Ri({name:`BackgroundCubeMaterial`,uniforms:Ai(Ka.backgroundCube.uniforms),vertexShader:Ka.backgroundCube.vertexShader,fragmentShader:Ka.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ja.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ya),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==it,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ii(new Di(2,2),new Ri({name:`BackgroundMaterial`,uniforms:Ai(Ka.background.uniforms),vertexShader:Ka.background.vertexShader,fragmentShader:Ka.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==it,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qa,Pi(e)),n.buffers.color.setClear(qa.r,qa.g,qa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Za(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $a(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&B(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function eo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var to=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Si(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),i=new Ri({name:`CubemapFromEquirect`,uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ii(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=T),new Da(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},no=256,ro=3,io=20,ao=256,oo=16,so=3,co=new H,lo=new Rn,uo=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Da(1,10,null),this._boxMesh=new ii(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=co}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(lo));let h=new Da(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(no,Ot(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?no:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=fo(e,!1,!1),n=Math.log2(e)-ro;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_o()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mo(),this._integrationMaterial=ho());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/oo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-so)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ao*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=go());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function fo(e,t,n){return new to(e,{minFilter:D,generateMipmaps:t,type:te,colorSpace:nt,depthBuffer:n})}function po(e,t,n){return new Ri({name:e,uniforms:t,vertexShader:Ga.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return po(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ao}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ho(){return po(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:oo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function go(){return po(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${io}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _o(){return po(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vo(){return po(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new to(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new uo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new uo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function bo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&_t(`WebGLRenderer: `+e+` extension not supported.`),t}}}function xo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?xr:br)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function So(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Co(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function wo(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=ee,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Mt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function To(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Eo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Do(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Pr;u.setAttribute(`position`,new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Sr([0,2,0,0,2,0],2));let d=new zi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ii(u,d),p=new Ca(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new $t(t,n,{type:te,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:te,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ci(t,n),a===!0&&(l.format=le,l.type=ie)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Bt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Eo[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Oo=new Xt,ko=new Ci(1,1),Ao=new wi(1),jo=new en,Mo=new tn,No=new Si,Po=[],Fo=[],Io=new Float32Array(16),Lo=new Float32Array(9),Ro=new Float32Array(4);function zo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Po[i];if(a===void 0&&(a=new Float32Array(i),Po[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Bo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Vo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ho(e,t){let n=Fo[t];n===void 0&&(n=new Int32Array(t),Fo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Uo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bo(n,t))return;e.uniform2fv(this.addr,t),Vo(n,t)}}function Go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Bo(n,t))return;e.uniform3fv(this.addr,t),Vo(n,t)}}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bo(n,t))return;e.uniform4fv(this.addr,t),Vo(n,t)}}function qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Vo(n,t)}else{if(Bo(n,r))return;Ro.set(r),e.uniformMatrix2fv(this.addr,!1,Ro),Vo(n,r)}}function Jo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Vo(n,t)}else{if(Bo(n,r))return;Lo.set(r),e.uniformMatrix3fv(this.addr,!1,Lo),Vo(n,r)}}function Yo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Vo(n,t)}else{if(Bo(n,r))return;Io.set(r),e.uniformMatrix4fv(this.addr,!1,Io),Vo(n,r)}}function Xo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bo(n,t))return;e.uniform2iv(this.addr,t),Vo(n,t)}}function Qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bo(n,t))return;e.uniform3iv(this.addr,t),Vo(n,t)}}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bo(n,t))return;e.uniform4iv(this.addr,t),Vo(n,t)}}function es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bo(n,t))return;e.uniform2uiv(this.addr,t),Vo(n,t)}}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bo(n,t))return;e.uniform3uiv(this.addr,t),Vo(n,t)}}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bo(n,t))return;e.uniform4uiv(this.addr,t),Vo(n,t)}}function is(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function as(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?is(ko):Oo,n.setTexture2D(t||a,i)}function os(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Mo,i)}function ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?is(Ao):No,n.setTextureCube(t||a,i)}function cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||jo,i)}function ls(e){switch(e){case 5126:return Uo;case 35664:return Wo;case 35665:return Go;case 35666:return Ko;case 35674:return qo;case 35675:return Jo;case 35676:return Yo;case 5124:case 35670:return Xo;case 35667:case 35671:return Zo;case 35668:case 35672:return Qo;case 35669:case 35673:return $o;case 5125:return es;case 36294:return ts;case 36295:return ns;case 36296:return rs;case 35678:case 36198:case 36298:case 36306:case 35682:return as;case 35679:case 36299:case 36307:return os;case 35680:case 36300:case 36308:case 36293:return ss;case 36289:case 36303:case 36311:case 36292:return cs}}function us(e,t){e.uniform1fv(this.addr,t)}function ds(e,t){let n=zo(t,this.size,2);e.uniform2fv(this.addr,n)}function fs(e,t){let n=zo(t,this.size,3);e.uniform3fv(this.addr,n)}function ps(e,t){let n=zo(t,this.size,4);e.uniform4fv(this.addr,n)}function ms(e,t){let n=zo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hs(e,t){let n=zo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gs(e,t){let n=zo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _s(e,t){e.uniform1iv(this.addr,t)}function vs(e,t){e.uniform2iv(this.addr,t)}function ys(e,t){e.uniform3iv(this.addr,t)}function bs(e,t){e.uniform4iv(this.addr,t)}function xs(e,t){e.uniform1uiv(this.addr,t)}function Ss(e,t){e.uniform2uiv(this.addr,t)}function Cs(e,t){e.uniform3uiv(this.addr,t)}function ws(e,t){e.uniform4uiv(this.addr,t)}function Ts(e,t,n){let r=this.cache,i=t.length,a=Ho(n,i);Bo(r,a)||(e.uniform1iv(this.addr,a),Vo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?is(ko):Oo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Es(e,t,n){let r=this.cache,i=t.length,a=Ho(n,i);Bo(r,a)||(e.uniform1iv(this.addr,a),Vo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Mo,a[e])}function Ds(e,t,n){let r=this.cache,i=t.length,a=Ho(n,i);Bo(r,a)||(e.uniform1iv(this.addr,a),Vo(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?is(Ao):No;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Os(e,t,n){let r=this.cache,i=t.length,a=Ho(n,i);Bo(r,a)||(e.uniform1iv(this.addr,a),Vo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||jo,a[e])}function ks(e){switch(e){case 5126:return us;case 35664:return ds;case 35665:return fs;case 35666:return ps;case 35674:return ms;case 35675:return hs;case 35676:return gs;case 5124:case 35670:return _s;case 35667:case 35671:return vs;case 35668:case 35672:return ys;case 35669:case 35673:return bs;case 5125:return xs;case 36294:return Ss;case 36295:return Cs;case 36296:return ws;case 35678:case 36198:case 36298:case 36306:case 35682:return Ts;case 35679:case 36299:case 36307:return Es;case 35680:case 36300:case 36308:case 36293:return Ds;case 36289:case 36303:case 36311:case 36292:return Os}}var As=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ls(t.type)}},js=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ks(t.type)}},Ms=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ns=/(\w+)(\])?(\[|\.)?/g;function Ps(e,t){e.seq.push(t),e.map[t.id]=t}function Fs(e,t,n){let r=e.name,i=r.length;for(Ns.lastIndex=0;;){let a=Ns.exec(r),o=Ns.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ps(n,l===void 0?new As(s,e,t):new js(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ms(s),Ps(n,e)),n=e}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Fs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ls(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Rs=37297,zs=0;function Bs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Vs=new U;function Hs(e){Bt._getMatrix(Vs,Bt.workingColorSpace,e);let t=`mat3( ${Vs.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case rt:return[t,`LinearTransferOETF`];case it:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Us(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Bs(e.getShaderSource(t),r)}return i}function Ws(e,t){let n=Hs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Gs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ks(e,t){let n=Gs[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var qs=new H;function Js(){return Bt.getLuminanceCoefficients(qs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${qs.x.toFixed(4)}, ${qs.y.toFixed(4)}, ${qs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ys(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Qs).join(`
`)}function Xs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Zs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Qs(e){return e!==``}function $s(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ec(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tc=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(e){return e.replace(tc,rc)}function rc(e,t){let n=Ga[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return nc(n)}var ic=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(e){return e.replace(ic,oc)}function oc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function sc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var cc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function lc(e){return cc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var uc={302:`ENVMAP_MODE_REFRACTION`};function dc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:uc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var fc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function pc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:fc[e.combine]||`ENVMAP_BLENDING_NONE`}function mc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=lc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=dc(n),d=pc(n),f=Ys(n),p=Xs(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Qs).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Qs).join(`
`),g.length>0&&(g+=`
`)):(h=[sc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Qs).join(`
`),g=[sc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ga.tonemapping_pars_fragment,n.toneMapping===0?``:Ks(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ga.colorspace_pars_fragment,Ws(`linearToOutputTexel`,n.outputColorSpace),Js(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Qs).join(`
`)),o=nc(o),o=$s(o,n),o=ec(o,n),s=nc(s),s=$s(s,n),s=ec(s,n),o=ac(o),s=ac(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Ls(i,i.VERTEX_SHADER,v),x=Ls(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Us(i,b,`vertex`),n=Us(i,x,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Is(i,m),w=Zs(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Rs)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zs++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var hc=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _c(e),t.set(e,n)),n}},_c=class{constructor(e){this.id=hc++,this.code=e,this.usedTimes=0}};function vc(e){return e===1030||e===37490||e===36285}function yc(e,t,n,r,i,a){let o=new mn,s=new gc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ka[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,te=!!i.matcap,ne=!!b,re=ne&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,P=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=ue&&!!i.anisotropyMap,ye=de&&!!i.clearcoatMap,be=de&&!!i.clearcoatNormalMap,xe=de&&!!i.clearcoatRoughnessMap,Se=fe&&!!i.diffuseRoughnessMap,Ce=he&&!!i.iridescenceMap,we=he&&!!i.iridescenceThicknessMap,Te=ge&&!!i.sheenColorMap,Ee=ge&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=_e&&!!i.transmissionMap,je=_e&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,I=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let L=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:te,envMap:ne,envMapMode:ne&&b.mapping,envMapPMREM:re,envMapMaxLod:re?L.length-1:null,envMapSize:re?L[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:P,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:P&&i.normalMapType===1,normalMapTangentSpace:P&&i.normalMapType===0,packedNormalMap:P&&i.normalMapType===0&&vc(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:ve,clearcoat:de,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:fe,diffuseRoughnessMap:Se,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:_e,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:I,alphaHash:Pe,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:P&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:F&&p(i.metalnessMap.channel),roughnessMapUv:le&&p(i.roughnessMap.channel),anisotropyMapUv:ve&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ce&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:De&&p(i.specularMap.channel),specularColorMapUv:Oe&&p(i.specularColorMap.channel),specularIntensityMapUv:ke&&p(i.specularIntensityMap.channel),transmissionMapUv:Ae&&p(i.transmissionMap.channel),thicknessMapUv:je&&p(i.thicknessMap.channel),alphaMapUv:Ne&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(P||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&P===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ka[t];n=Fi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new mc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function bc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function xc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||xc),r.length>1&&r.sort(t||Sc),i.length>1&&i.sort(t||Sc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function wc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Cc,e.set(t,[i])):n>=r.length?(i=new Cc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Tc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new Rn};break;case`SpotLight`:n={position:new H,direction:new H,color:new Rn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new Rn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new Rn,groundColor:new Rn};break;case`RectAreaLight`:n={color:new Rn,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ec(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Dc=0;function Oc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function kc(e){let t=new Tc,n=Ec(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Oc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Dc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ac(e){let t=new kc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function jc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ac(e),t.set(n,[a])):r>=i.length?(a=new Ac(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Fc=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ic=new nn,Lc=new H,Rc=new H;function zc(e,t,n){let r=new fi,i=new Mt,a=new Mt,o=new Zt,s=new Bi,c=new Vi,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Mc,fragmentShader:Nc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Pr;m.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ii(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new $t(i.x,i.y,{format:fe,type:te,minFilter:T,magFilter:T,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ci(i.x,i.y,ee),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=F,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=S,d.map.depthTexture.magFilter=S}else l.isPointLight?(d.map=new to(i.x),d.map.depthTexture=new wi(i.x,N)):(d.map=new $t(i.x,i.y),d.map.depthTexture=new Ci(i.x,i.y,N)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=F,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=T,d.map.depthTexture.magFilter=T):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=S,d.map.depthTexture.magFilter=S);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Lc.setFromMatrixPosition(l.matrixWorld),e.position.copy(Lc),Rc.copy(e.position),Rc.add(Pc[t]),e.up.copy(Fc[t]),e.lookAt(Rc),e.updateMatrixWorld(),n.makeTranslation(-Lc.x,-Lc.y,-Lc.z),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ic,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:fe,type:te}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bc(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=yt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Rn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Zt().fromArray(ie),P=new Zt().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(N&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function Ce(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function L(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function R(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Rn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:I,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:R,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Ie,viewport:L,reset:z}}function Vc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):ft(`canvas`)}function v(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?rt:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function N(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function te(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function ne(e){ie(e.target)}function re(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,ne),te(e),P(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function ae(e){e.removeEventListener(`dispose`,re),te(e),ce(e)}function oe(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}m.clear(),d.clear()}function P(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&se(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function se(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ce(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ie(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let F=0;function ue(){F=0}function de(){return F}function fe(e){F=e}function pe(){let e=F;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),F+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,i){let a=r.get(t);if(t.isVideoTexture&&Le(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ye={[y]:e.REPEAT,[b]:e.CLAMP_TO_EDGE,[x]:e.MIRRORED_REPEAT},be={[S]:e.NEAREST,[C]:e.NEAREST_MIPMAP_NEAREST,[w]:e.NEAREST_MIPMAP_LINEAR,[T]:e.LINEAR,[E]:e.LINEAR_MIPMAP_NEAREST,[D]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ye[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ye[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ye[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,be[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,be[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,xe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne),ee(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=me(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&se(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=we(n.start,r.width,4),c=we(t.start,r.width,4);n.start<=i+1&&a===c&&we(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ee(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=o.colorSpace===``?null:Bt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=R(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=j(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);Se(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,y=f.__version===void 0||l===!0,b=u.dataReady,x=N(o,t);if(o.isDepthTexture)m=M(o.format===le,o.type),y&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&y&&n.texStorage2D(e.TEXTURE_2D,x,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(y&&n.texStorage2D(e.TEXTURE_2D,x,m,t.width,t.height),b&&Te(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&y&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(b){if(o.layerUpdates.size>0){let t=Va(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?b&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&y&&n.texStorage2D(e.TEXTURE_2D,x,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?b&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(y&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,m,t.width,t.height,t.depth),b){if(o.layerUpdates.size>0){let i=Va(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(y&&n.texStorage3D(e.TEXTURE_3D,x,m,t.width,t.height,t.depth),b&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(y){if(_)n.texStorage2D(e.TEXTURE_2D,x,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<x;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&y){let t=z(g[0]);n.texStorage2D(e.TEXTURE_2D,x,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(y){let r=z(t);n.texStorage2D(e.TEXTURE_2D,x,m,r.width,r.height)}b&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function De(t,o,s){if(o.image.length!==6)return;let c=Ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Bt.getPrimaries(Bt.workingColorSpace),r=o.colorSpace===``?null:Bt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=R(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),y=j(o.internalFormat,g,_,o.normalized,o.colorSpace),b=o.isVideoTexture!==!0,x=u.__version===void 0||c===!0,S=l.dataReady,C=N(o,h);Se(e.TEXTURE_CUBE_MAP,o);let w;if(o.isDepthTexture){if(y=M(o.format===le,o.type),x){if(b)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,y,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,h.width,h.height,0,g,_,null)}}else if(f){b&&x&&n.texStorage2D(e.TEXTURE_CUBE_MAP,C,y,h.width,h.height);for(let t=0;t<6;t++){w=m[t].mipmaps;for(let r=0;r<w.length;r++){let i=w[r];o.format===1023?b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?S&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,i.data)}}}else{if(w=o.mipmaps,b&&x){w.length>0&&C++;let t=z(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,C,y,t.width,t.height)}for(let t=0;t<6;t++)if(p){b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<w.length;r++){let i=w[r].image[t].image;b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,i.width,i.height,0,g,_,i.data)}}else{b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,g,_,m[t]);for(let r=0;r<w.length;r++){let i=w[r];b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ie(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=M(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ve(i.depthTexture,0):he(i.depthTexture,0);let u=c.__webglTexture,d=Ie(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ae(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(i.__webglFramebuffer[0],t,0):Ae(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ke(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,i){let a=r.get(t);n!==void 0&&Oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&je(t)}function Ne(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,re),ee(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&L(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Se(c,a),Oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Se(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&je(t)}function I(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Pe=[];function Fe(t){if(t.samples>0){if(L(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Pe.length=0,Pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Pe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(i.maxSamples,e.samples)}function L(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Le(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function R(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=L,this.dispose=oe}function Hc(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Uc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wc=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ti(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ri({vertexShader:Uc,fragmentShader:Wc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kc=class extends bt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Gc,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Mt,C=null,w=null,T=new Sa;T.viewport=new Zt;let E=new Sa;E.viewport=new Zt;let D=[T,E],k=new Oa,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Nn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Nn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Nn,b[e]=t),t.getHandSpace()};function M(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}A=null,j=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?le:F,a=_.stencil?ie:N);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $t(d.textureWidth,d.textureHeight,{format:ce,type:O,depthTexture:new Ci(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $t(f.framebufferWidth,f.framebufferHeight,{format:ce,type:O,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=E.near=T.near=t,k.far=E.far=T.far=n,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far),k.layers.mask=e.layers.mask|6,T.layers.mask=k.layers.mask&-5,E.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ne(k,i);for(let e=0;e<a.length;e++)ne(a[e],i);k.projectionMatrix.copy(T.projectionMatrix),k.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,k,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Sa,o.layers.enable(n),o.viewport=new Zt,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ti,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new Ua;P.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},qc=new nn,Jc=new U;Jc.set(-1,0,0,0,1,0,0,0,1);function Yc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Pi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(qc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Jc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Xc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Zc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qc=null;function $c(){return Qc===null&&(Qc=new si(Zc,16,16,fe,te),Qc.name=`DFG_LUT`,Qc.minFilter=T,Qc.magFilter=T,Qc.wrapS=b,Qc.wrapT=b,Qc.generateMipmaps=!1,Qc.needsUpdate=!0),Qc}var el=class{constructor(e={}){let{canvas:t=pt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=O}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([me,pe,de]),g=new Set([O,N,j,ie,ne,re]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,k=null,A=null,M=null,ee=null;this._outputColorSpace=tt;let ae=0,oe=0,P=null,se=-1,ce=null,F=new Zt,le=new Zt,ue=null,fe=new Rn(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Zt(0,0,ge,_e),Se=new Zt(0,0,ge,_e),Ce=!1,we=new fi,Te=new mi,Ee=!1,De=!1,Oe=new nn,ke=new H,Ae=new Zt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ve:1}let I=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,L,Le,R,z,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),I===null){let t=`webgl2`;if(I=Pe(t,e),I===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),V(`WebGLRenderer: `+e.message),e}function nt(){Fe=new bo(I),Fe.init(),Qe=new Hc(I,Fe),Ie=new $a(I,Fe,e,Qe),L=new Bc(I,Fe),Ie.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),A=I.createFramebuffer(),M=I.createFramebuffer(),ee=I.createFramebuffer(),Le=new Co(I),R=new bc,z=new Vc(I,Fe,L,R,Ie,Qe,Le),Re=new yo(T),ze=new Wa(I),$e=new Za(I,ze),Be=new xo(I,ze,Le,$e),Ve=new To(I,Be,ze,$e,Le),Ye=new wo(I,Ie,z),Ke=new eo(R),He=new yc(T,Re,Fe,Ie,$e,Ke),Ue=new Yc(T,R),We=new wc,Ge=new jc(Fe),Je=new Xa(T,Re,L,Ve,p,s),qe=new zc(T,Ve,Ie),et=new Xc(I,Le,Ie,L),Xe=new Qa(I,Fe,Le),Ze=new So(I,Fe,Le),Le.programs=He.programs,T.capabilities=Ie,T.extensions=Fe,T.properties=R,T.renderLists=We,T.shadowMap=qe,T.state=L,T.info=Le}m!==1009&&(w=new Do(m,t.width,t.height,o,r,i));let rt=new Kc(T,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){rt.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(F.copy(xe).multiplyScalar(Ne()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(le.copy(Se).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=h.has(t)}if(e){let e=P.texture.type,t=g.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferiv(I.COLOR,0,v))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Je.dispose(),We.dispose(),Ge.dispose(),z.dispose(),R.dispose(),Re.dispose(),Ve.dispose(),Be.dispose(),$e.dispose(),et.dispose(),He.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,gt),rt.removeEventListener(`sessionend`,_t),yt.stop()};function it(e){e.preventDefault(),ht(`WebGLRenderer: Context Lost.`),E=!0}function at(){ht(`WebGLRenderer: Context Restored.`),E=!1;let e=Le.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;nt(),Le.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function ot(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){ut(e),R.remove(e)}function ut(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=ze.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){k!==null&&e.isNodeMaterial&&k.setObject(r,e),Ee===!0&&Ke.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),k!==null&&k.renderStart(e,t,n),x=Ge.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),k!==null&&k.updateLights(x.state.lightsArray),De=this.localClippingEnabled,Ee=Ke.init(this.clippingPlanes,De),Ee===!0&&Ke.setGlobalState(this.clippingPlanes,t),k!==null&&qe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),x=C.pop(),k!==null&&k.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function mt(e){ft&&ft(e)}function gt(){yt.stop()}function _t(){yt.start()}let yt=new Ua;yt.setAnimationLoop(mt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ft=e,rt.setAnimationLoop(e),e===null?yt.stop():yt.start()},rt.addEventListener(`sessionstart`,gt),rt.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;k!==null&&k.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=w!==null&&(P===null||n)&&w.begin(T,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,P),x=Ge.get(e,C.length),x.init(t),x.state.textureUnits=z.getTextureUnits(),C.push(x),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):we.setFromProjectionMatrix(Oe,lt,t.reversedDepth),De=this.localClippingEnabled,Ee=Ke.init(this.clippingPlanes,De),b=We.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,T.sortObjects)}bt(e,t,0,T.sortObjects),b.finish(),k!==null&&k.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ye,be),Me=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Me&&Je.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ke.beginShadows();let i=x.state.shadowsArray;if(qe.render(i,e,t),Ee===!0&&Ke.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Me&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(b,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Me&&Je.render(e),xt(b,e,t)}P!==null&&oe===0&&(z.updateMultisampleRenderTarget(P),z.updateRenderTargetMipmap(P)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),$e.resetDefaultState(),se=-1,ce=null,C.pop(),C.length>0?(x=C[C.length-1],z.setTextureUnits(x.state.textureUnits),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,k!==null&&k.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ve.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&b.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,n),r&&L.viewport(F.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?te:O,minFilter:D,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(fe),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),Me&&Je.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,r),Ct(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(fe,he),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){k!==null&&i.isNodeMaterial&&k.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Tt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Et(e,t,n){t.isScene!==!0&&(t=je);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=He.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,s),e.onBeforeCompile(s,T),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Tt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Dt(e,t,n,r,i){let a=R.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Et(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Is.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=je),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?T.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),b=x.state.lights;if(Ee===!0&&(De===!0||e!==ce)){let t=e===ce&&r.id===se;Ke.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Tt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Dt(r,t,i,s,h):Et(r,t,i),k&&r.isNodeMaterial&&k.onUpdateProgram(r,w,v));let E=!1,D=!1,O=!1,A=w.getUniforms(),j=v.uniforms;if(L.useProgram(w.program)&&(E=!0,D=!0,O=!0),r.id!==se&&(se=r.id,D=!0),E||ce!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(I,`projectionMatrix`,e.projectionMatrix),A.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(I,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&A.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,D=!0,O=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(I,`sunShadowMap`,b.state.sunShadowMap,z),b.state.directionalShadowMap.length>0&&A.setValue(I,`directionalShadowMap`,b.state.directionalShadowMap,z),b.state.spotShadowMap.length>0&&A.setValue(I,`spotShadowMap`,b.state.spotShadowMap,z),b.state.pointShadowMap.length>0&&A.setValue(I,`pointShadowMap`,b.state.pointShadowMap,z)),i.isSkinnedMesh){A.setOptional(I,i,`bindMatrix`),A.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(A.setOptional(I,i,`batchingTexture`),A.setValue(I,`batchingTexture`,i._matricesTexture,z),A.setOptional(I,i,`batchingIdTexture`),A.setValue(I,`batchingIdTexture`,i._indirectTexture,z),A.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Ye.update(i,n,w),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=$c()),D){if(A.setValue(I,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&jt(j,O),a&&r.fog===!0&&Ue.refreshFogUniforms(j,a),Ue.refreshMaterialUniforms(j,r,ve,_e,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Is.upload(I,Ot(v),j,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Is.upload(I,Ot(v),j,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(I,`center`,i.center),A.setValue(I,`modelViewMatrix`,i.modelViewMatrix),A.setValue(I,`normalMatrix`,i.normalMatrix),A.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,w),et.bind(n,w)}}return w}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,L.viewport(F),L.scissor(le),L.setScissorTest(ue),se=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else F.copy(xe).multiplyScalar(ve).floor(),le.copy(Se).multiplyScalar(ve).floor(),ue=Ce;if(n!==0&&(r=A),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(F),L.scissor(le),L.setScissorTest(ue),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}se=-1};function Nt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vt(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,M),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,ee);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){ae=0,oe=0,P=null,L.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return lt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},tl=new Set([`USA`,`CHN`,`IND`,`RUS`,`BRA`,`JPN`,`DEU`,`GBR`,`FRA`,`ITA`,`CAN`,`AUS`,`KOR`,`MEX`,`IDN`,`TUR`,`SAU`,`ZAF`,`ARG`,`NGA`,`IRN`,`PAK`,`EGY`,`ESP`]);function nl(e){let t=1+(8-new Date(Date.UTC(e,10,1)).getUTCDay())%7;return Date.UTC(e,10,t+1)}var rl=10368e6;function il(e=Date.now()){let t=new Date(e).getUTCFullYear(),n=t%2==0?t:t-1;return e>=nl(n)-rl?n:n-2}function al(e=il(),t=Date.now()){return t>=nl(e)-rl&&t<Date.UTC(e+1,0,3)}var ol=e=>e%4==2?`The Midterms`:`The US Elections`,sl=e=>((e-2024)/2%3+3)%3+1,cl=Object.values({"01":{code:`AL`,name:`Alabama`,ev:9},"02":{code:`AK`,name:`Alaska`,ev:3},"04":{code:`AZ`,name:`Arizona`,ev:11},"05":{code:`AR`,name:`Arkansas`,ev:6},"06":{code:`CA`,name:`California`,ev:54},"08":{code:`CO`,name:`Colorado`,ev:10},"09":{code:`CT`,name:`Connecticut`,ev:7},10:{code:`DE`,name:`Delaware`,ev:3},11:{code:`DC`,name:`District of Columbia`,ev:3,delegate:!0},12:{code:`FL`,name:`Florida`,ev:30},13:{code:`GA`,name:`Georgia`,ev:16},15:{code:`HI`,name:`Hawaii`,ev:4},16:{code:`ID`,name:`Idaho`,ev:4},17:{code:`IL`,name:`Illinois`,ev:19},18:{code:`IN`,name:`Indiana`,ev:11},19:{code:`IA`,name:`Iowa`,ev:6},20:{code:`KS`,name:`Kansas`,ev:6},21:{code:`KY`,name:`Kentucky`,ev:8},22:{code:`LA`,name:`Louisiana`,ev:8},23:{code:`ME`,name:`Maine`,ev:4},24:{code:`MD`,name:`Maryland`,ev:10},25:{code:`MA`,name:`Massachusetts`,ev:11},26:{code:`MI`,name:`Michigan`,ev:15},27:{code:`MN`,name:`Minnesota`,ev:10},28:{code:`MS`,name:`Mississippi`,ev:6},29:{code:`MO`,name:`Missouri`,ev:10},30:{code:`MT`,name:`Montana`,ev:4},31:{code:`NE`,name:`Nebraska`,ev:5},32:{code:`NV`,name:`Nevada`,ev:6},33:{code:`NH`,name:`New Hampshire`,ev:4},34:{code:`NJ`,name:`New Jersey`,ev:14},35:{code:`NM`,name:`New Mexico`,ev:5},36:{code:`NY`,name:`New York`,ev:28},37:{code:`NC`,name:`North Carolina`,ev:16},38:{code:`ND`,name:`North Dakota`,ev:3},39:{code:`OH`,name:`Ohio`,ev:17},40:{code:`OK`,name:`Oklahoma`,ev:7},41:{code:`OR`,name:`Oregon`,ev:8},42:{code:`PA`,name:`Pennsylvania`,ev:19},44:{code:`RI`,name:`Rhode Island`,ev:4},45:{code:`SC`,name:`South Carolina`,ev:9},46:{code:`SD`,name:`South Dakota`,ev:3},47:{code:`TN`,name:`Tennessee`,ev:11},48:{code:`TX`,name:`Texas`,ev:40},49:{code:`UT`,name:`Utah`,ev:6},50:{code:`VT`,name:`Vermont`,ev:3},51:{code:`VA`,name:`Virginia`,ev:13},53:{code:`WA`,name:`Washington`,ev:12},54:{code:`WV`,name:`West Virginia`,ev:4},55:{code:`WI`,name:`Wisconsin`,ev:10},56:{code:`WY`,name:`Wyoming`,ev:3},60:{code:`AS`,name:`American Samoa`,ev:0,delegate:!0},66:{code:`GU`,name:`Guam`,ev:0,delegate:!0},69:{code:`MP`,name:`Northern Mariana Islands`,ev:0,delegate:!0},72:{code:`PR`,name:`Puerto Rico`,ev:0,delegate:!0},78:{code:`VI`,name:`U.S. Virgin Islands`,ev:0,delegate:!0}}),ll=Object.fromEntries(cl.map(e=>[e.code,e]));Object.fromEntries(cl.map(e=>[e.name,e]));function ul(e){let t=(e??``).toLowerCase();return/democrat|\bdem\b|\bdfl\b|^d$/.test(t)?`D`:/republican|\brep\b|^r$/.test(t)?`R`:/libertarian|\blib\b/.test(t)?`L`:/green|\bgre\b/.test(t)?`G`:/independent|nonpartisan|no party|unaffiliated|\bind\b|^i$/.test(t)?`I`:`O`}var G=new class{races=new Map;news=[];buzz={countries:{},world:[]};trust;chambers=null;usCycle={year:il(),live:al()};events=[];sources=[];worldElections=[];version=null;serverTime=0;connected=!1;world;admin1;us;usCounty=null;usHistory=null;notes={};selection=null;listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}emit(e,t){for(let n of this.listeners.get(e)??[])n(t)}select(e){this.selection=e,this.emit(`selection`)}applySnapshot(e){this.serverTime=new Date(e.serverTime).getTime(),e.usCycle&&(this.usCycle=e.usCycle),this.races=new Map(Object.entries(e.races)),this.chambers=e.chambers,this.events=e.events,this.sources=e.sources,this.worldElections=e.worldElections,this.version??=e.version,this.news=e.news??[],this.buzz=e.buzz??this.buzz,this.trust=e.trust??this.trust,this.emit(`news`),this.emit(`races`,{changed:[...this.races.values()],initial:!0}),this.emit(`sources`),this.emit(`world`),this.emit(`event`)}applyMessage(e){switch(e.type){case`races`:e.reset&&this.races.clear(),e.usCycle&&(this.usCycle=e.usCycle);for(let t of e.races)this.races.set(t.id,t);this.chambers=e.chambers,this.emit(`races`,{changed:e.races,initial:!1});break;case`event`:this.events.unshift(e.event),this.events.length=Math.min(this.events.length,200),this.emit(`event`,e.event);break;case`sources`:this.sources=e.sources,this.emit(`sources`);break;case`world`:this.worldElections=e.worldElections,this.emit(`world`);break;case`version`:this.emit(`version`,e.version);break;case`news`:this.news=e.stories,this.emit(`news`);break;case`buzz`:this.buzz=e.buzz,this.emit(`buzz`)}}},K={byCountry:{},world:{},ipu:{}};function dl(e,t){if(!e?.length||t<e[0][0])return-1;let n=-1;for(let[r,i]of e){if(r>t)break;n=i}return n}var fl={stroll:0,cheer:1,march:2,argue:3,trudge:4,still:5,run:6},pl={change:{label:`Hungry For Change`,color:`#f4b62c`,gesture:fl.cheer,speed:1,meaning:`People have been voting out those in power.`},fired:{label:`Fired Up`,color:`#8ee04e`,gesture:fl.cheer,speed:1.35,meaning:`More people are turning out to vote than before.`},steady:{label:`Steady`,color:`#39d6c0`,gesture:fl.stroll,speed:.8,meaning:`Nothing unusual: people are carrying on without big swings.`},divided:{label:`Split Down The Middle`,color:`#5f93ff`,second:`#ff6f9f`,gesture:fl.argue,speed:1,meaning:`The last vote was close, or regions pull in opposite directions.`},weary:{label:`Tuning Out`,color:`#9db0cb`,gesture:fl.trudge,speed:.7,meaning:`Fewer people are bothering to vote.`},protest:{label:`Out In The Streets`,color:`#ff5560`,gesture:fl.march,speed:1.1,meaning:`Protests are in the news right now.`},upheaval:{label:`In Upheaval`,color:`#e85be0`,gesture:fl.run,speed:1.3,meaning:`A sudden crisis over who holds power is in the news.`},unclear:{label:`Hard To Tell`,color:`#59606b`,gesture:fl.still,speed:.5,meaning:`Votes here aren't free or fair, so they can't show how people feel.`}},ml=[`change`,`fired`,`steady`,`divided`,`weary`,`protest`,`upheaval`,`unclear`],hl=864e5,gl=e=>{let t=e?Date.parse(e):NaN;return Number.isFinite(t)?(Date.now()-t)/(365.25*hl):1/0},_l=null;function vl(e){if(!_l){_l=new Map;for(let e of Object.keys(G.admin1)){let t=e.split(`-`)[0];_l.has(t)||_l.set(t,[]),_l.get(t).push(e)}}return _l.get(e)??[]}var yl=new Map;function bl(){yl=new Map}function xl(e){let t=yl.get(e.key);if(t)return t;let n=Sl(e);return yl.set(e.key,n),n}function Sl(e){let t=K.byCountry[e.key],n=Rl(e),r=n===`liberal`||n===`electoral`||n===`hybrid`&&(t?.q?.elections??0)>=.4,i=G.news.filter(t=>t.countries[0]===e.key&&Date.now()-Date.parse(t.lastSeen)<2*hl),a=i.find(e=>e.kind===`upheaval`);if(a)return{mood:`upheaval`,strength:1,reasons:[`In The News: ${a.title}`]};let o=i.find(e=>e.kind===`protest`);if(o)return{mood:`protest`,strength:.9,reasons:[`In The News: ${o.title}`]};let s=i.find(e=>/\b(resign\w*|impeach\w*|oust\w*|removed|steps? down|stepped down)\b/i.test(e.sources[0]?.title??e.title)&&/\b(president|prime minister|chancellor|premier|government)\b/i.test(e.sources[0]?.title??e.title));if(s)return{mood:`upheaval`,strength:.9,reasons:[`In The News: ${s.title}`]};if(n===`unknown`)return{mood:`unclear`,strength:.3,reasons:[`We Don't Have A Rating For How Votes Work Here, So We Can't Estimate The Mood`]};if(!r)return{mood:`unclear`,strength:.3,reasons:[`Votes Here Aren't A Free, Fair Contest, So They Can't Show How People Feel`]};let c={change:0,fired:0,divided:0,weary:0},l=[],u=(e,t,n)=>{c[e]+=t,l.push([t,n])};if(e.key===`USA`&&Date.now()<nl(G.usCycle.year)+31536e6){let e=[...G.races.values()].filter(e=>e.flip&&e.status===`called`).length;e>=5&&u(`change`,3.5,`${e} House, Senate And Governor Seats Changed Hands In ${ol(G.usCycle.year)}`)}gl((e.exec===`hog`?e.hog:e.hos)?.since)<1.5&&u(`change`,2,`A New Leader Took Office Recently`);let d=e.lastLegislative;if(d&&gl(d.date)<4){let t=d.parties.filter(e=>e.seats!==void 0&&e.seatsBefore!==void 0).map(e=>({p:e,d:(e.seats??0)-(e.seatsBefore??0)})),n=d.parties.reduce((e,t)=>e+(t.seats??0),0)||1,r=[...t].sort((e,t)=>t.d-e.d)[0];r&&r.d/n>=.08&&e.key!==`USA`&&u(`change`,2,`The ${r.p.name} Gained ${r.d} Seats At The Last Vote`)}let f=[e.lastExecutive,d].filter(Boolean).sort((e,t)=>Date.parse(t.date)-Date.parse(e.date))[0];if(f&&gl(f.date)<4){let e=f.parties.map(e=>e.pct??0).filter(Boolean).sort((e,t)=>t-e);e.length>=2&&e[0]-e[1]<1.5&&e[0]>25?u(`divided`,3,`The Last National Vote Was Razor-Thin`):e.length>=2&&e[0]-e[1]<4&&e[0]>25&&u(`divided`,2,`The Last National Vote Was Close`)}if(e.score){let t=vl(e.key).map(e=>G.admin1[e]?.score).filter(e=>!!e);if(t.length>=4){let n=t.filter(t=>Math.sign(t)!==Math.sign(e.score)).length/t.length;n>=.6?u(`divided`,1.5,`Most Regions Are Run By The Other Side From The National Government`):n>=.4&&u(`divided`,1.5,`Regions Are Split Between Both Sides`)}}let p=t?.t;if(p?.length&&gl(`${p[p.length-1][0]}-06-01`)<6){let e=p[p.length-1][1],t=p.length>=2?p[p.length-2][1]:null;t!==null&&e-t>=4&&u(`fired`,2.2,`Turnout Rose To ${e.toFixed(0)}% At The Last Vote`),t!==null&&t-e>=5&&u(`weary`,2,`Turnout Fell To ${e.toFixed(0)}% At The Last Vote`),e<50&&u(`weary`,2,`Fewer Than Half Of Registered Voters Turned Out`)}if((G.buzz.countries[e.key]??[]).filter(e=>/\b(election|elections|vote|voting|ballot|parliament|president|minister|government|referendum|strike|protest|tax|taxes|budget|congress|senate)\b/i.test(`${e.t} ${e.about??``}`)).length>=2&&u(`fired`,1.7,`People Here Are Searching For Politics And Government News Right Now`),t?.e!==void 0&&t.e10!==void 0){let e=t.e-t.e10;e<=-.1?l.push([.5,`Elections And Free Speech Have Weakened Over Ten Years`]):e>=.1&&l.push([.5,`Elections And Free Speech Have Strengthened Over Ten Years`])}let m=l.sort((e,t)=>t[0]-e[0]).map(e=>e[1]),h=Object.keys(c).sort((e,t)=>c[t]-c[e])[0];return c[h]<1.5?{mood:`steady`,strength:.4,reasons:m.length?m:[`No Big Swings In Recent Votes Or Turnout`]}:{mood:h,strength:Math.min(1,c[h]/4),reasons:m}}var Cl=Math.PI/180;function wl(e,t,n=1,r=new H){let i=t*Cl,a=e*Cl;return r.set(Math.cos(i)*Math.sin(a)*n,Math.sin(i)*n,Math.cos(i)*Math.cos(a)*n)}function Tl(e){let t=e.clone().normalize();return[Math.atan2(t.x,t.z)/Cl,Math.asin(t.y)/Cl]}var El=(e,t,n)=>Math.max(t,Math.min(n,e)),Dl=(e,t,n)=>e+(t-e)*n;function Ol(e){let t=e.replace(`#`,``);return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255]}var q={D:`#2f7fed`,R:`#e5383b`,I:`#e7b33d`,L:`#d9c343`,G:`#3fae5a`,O:`#a79bc2`},kl={D:`Democratic`,R:`Republican`,I:`Independent`,L:`Libertarian`,G:`Green`,O:`Other`},Al={farleft:`#3d2bb5`,left:`#2b62e0`,centreleft:`#62a0ef`,centre:`#e4dfc9`,centreright:`#f0937f`,right:`#e23d36`,farright:`#8f1527`,np:`#8a93a0`,na:`#59616c`},jl=`#f3cf7a`,J=e=>Ol(e),Ml=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],Nl=[[-3,J(Al.farleft)],[-2,J(Al.left)],[-1,J(Al.centreleft)],[0,J(Al.centre)],[1,J(Al.centreright)],[2,J(Al.right)],[3,J(Al.farright)]];function Pl(e){let t=Math.max(-3,Math.min(3,e));for(let e=0;e<Nl.length-1;e++){let[n,r]=Nl[e],[i,a]=Nl[e+1];if(t<=i)return Ml(r,a,(t-n)/(i-n))}return Nl[Nl.length-1][1]}var Fl=e=>`rgb(${Math.round(e[0]*255)} ${Math.round(e[1]*255)} ${Math.round(e[2]*255)})`,Y={liberal:{label:`Full Democracy`,color:`#5a78f0`,meaning:`People choose their leaders in fair elections, and courts and a free press can check those leaders.`},electoral:{label:`Democracy With Gaps`,color:`#1fa3ae`,meaning:`People really do choose their leaders, but some protections for rights or fair competition are weaker.`},hybrid:{label:`Votes, But Not A Fair Contest`,color:`#c4821a`,meaning:`Elections are held, but those in power tilt the playing field so much that the result is rarely in doubt.`},oneparty:{label:`One-Party Rule`,color:`#e0474c`,meaning:`One party runs the country, and no other party can truly compete for power.`},monarchy:{label:`Rule By A Royal Family`,color:`#a06ff0`,meaning:`A king or ruling family holds real power, rather than just a ceremonial role.`},military:{label:`Military Rule`,color:`#6f9a2a`,meaning:`The armed forces took power and run the government.`},religious:{label:`Religious Rule`,color:`#c068cf`,meaning:`Religious authorities hold final power over the government.`},closed:{label:`No Real Vote`,color:`#d5457f`,meaning:`No genuine national vote decides who leads.`},unknown:{label:`Not Rated`,color:`#8a93a0`,meaning:`V-Dem, the research group behind these labels, doesn't cover this place, so we don't label how its elections work. Other ratings may be on its How Well page.`}},Il=[`liberal`,`electoral`,`hybrid`,`closed`,`monarchy`,`oneparty`,`religious`,`military`],Ll={map:{}};function Rl(e){if(!e)return`unknown`;let t=Ll.map[e.key];if(t)return t;switch(e.regime?.code){case 3:return`liberal`;case 2:return`electoral`;case 1:return`hybrid`;case 0:return`closed`;default:return`unknown`}}var zl=e=>![`liberal`,`electoral`,`unknown`].includes(e);function Bl(e,t){if(!e)return{color:J(Y.unknown.color),has:!1};if(t===`power`){let t=Rl(e);return{color:J(Y[t].color),has:t!==`unknown`}}if(t===`mood`)return{color:J(pl[xl(e).mood].color),has:!0};if(t===`next`){let t=e.next?.[0];if(!t)return{color:J(`#8a93a0`),has:!1};let n=(new Date(t.date).getTime()-Date.now())/864e5;return{color:Ml(J(`#7c6a3a`),J(`#ffd166`),Math.max(0,1-n/400)),has:!0}}return e.key===`USA`?{color:J(q.R),has:!0}:e.bloc===`na`?{color:J(Al.na),has:!1}:e.bloc===`np`?{color:J(Al.np),has:!0}:{color:e.score===void 0?J(Al[e.bloc]):Pl(e.score),has:!0}}function Vl(e){let t=G.admin1[e.k];return!t||t.bloc===`na`?{color:J(Al.na),has:!1}:t.bloc===`np`?{color:J(Al.np),has:!0}:{color:t.score===void 0?J(Al[t.bloc]):Pl(t.score),has:!0}}function Hl(e){let t={D:0,R:0,other:0,total:0,pending:0};for(let n of G.races.values()){if(n.office!==`house`||n.state!==e)continue;t.total++;let r=n.status===`called`&&n.winnerParty;r||t.pending++;let i=r?n.winnerParty:n.holder;i===`D`?t.D++:i===`R`?t.R++:t.other++}return t}function Ul(e){let t=G.races.get(`S:${e}`),n=[];for(let r of G.us.senators[e]??[]){let i=sl(G.usCycle.year),a=!(G.us.senators[e]??[]).some(e=>e.class===i)&&r.rank===`junior`;if(t&&(r.class===i||a)&&t){let e=t.status===`called`&&t.winnerParty;n.push({name:e?t.winnerName??r.name:r.name,party:e?t.winnerParty:r.party,up:!0,race:t})}else n.push({name:r.name,party:r.party,up:!1})}return n}var Wl=e=>e===`D`||e===`I`?`L`:e===`R`?`R`:`N`;function Gl(e){let t=Ul(e),n=Hl(e),r=J(q.D),i=J(q.R),a=t.map(e=>Wl(e.party)),o=t.length?a.every(e=>e===`L`)?`D`:a.every(e=>e===`R`)?`R`:`split`:`none`,s=n.total?n.D>n.R?`D`:n.R>n.D?`R`:`even`:`none`,c=o===`D`?r:o===`R`?i:o===`split`?Ml(r,i,.5):J(Al.na),l=!1;(o===`D`&&s===`R`||o===`R`&&s===`D`)&&(l=!0,c=Ml(c,s===`D`?r:i,.34));let u=t.some(e=>e.race&&e.race.status!==`called`)||(G.races.get(`G:${e}`)?.status??``)===`contested`;return{color:c,live:u,senate:o,house:s,conflicted:l}}function Kl(e){let t=e.candidates.filter(e=>(e.pct??0)>0||(e.votes??0)>0);if(t.length<2)return null;let n=[...t].sort((e,t)=>(t.pct??0)-(e.pct??0));return{party:n[0].party,pct:n[0].pct??0,margin:(n[0].pct??0)-(n[1].pct??0)}}function ql(e){if(!e)return{color:J(Al.na),alpha:.06,live:!1};if(e.status===`called`&&e.winnerParty)return{color:J(q[e.winnerParty]),alpha:e.flip?.34:.26,live:!1};let t=Kl(e);return t?{color:Ml(J(q[t.party]),[1,1,1],.25),alpha:.2,live:!0}:e.status===`contested`?{color:J(jl),alpha:.16,live:!0}:{color:e.holder?J(q[e.holder]):J(Al.na),alpha:.08,live:!1}}var Jl=`#3d424d`,Yl=[`#5a78f0`,`#c4821a`,`#a06ff0`,`#2aa3ab`];function Xl(e){let t=parseInt(e.replace(`#`,``),16);return Number.isNaN(t)?e:(t>>16&255)+(t>>8&255)+(t&255)<150?`#69707e`:e}var Zl=(e,t)=>Xl(e.color??(e.bloc&&e.bloc!==`na`?Al[e.bloc]:Yl[t%Yl.length]));function Ql(e,t){if(!e)return null;let n=e.parties.filter(e=>(e.seats??0)>0).sort((e,t)=>(t.seats??0)-(e.seats??0));if(!n.length)return null;let r=e.totalSeats??n.reduce((e,t)=>e+(t.seats??0),0),i=n.slice(0,3).map((e,t)=>({color:Zl(e,t),share:(e.seats??0)/r,label:`${e.name}: ${e.seats} Seats`})),a=1-i.reduce((e,t)=>e+t.share,0);return a>.005&&i.push({color:Jl,share:a,label:`Others`}),{name:t,words:n[0].seats===r?`All ${r} Seats: ${n[0].name}`:`${n[0].name} ${/(ists|ents|ives|ans|ats)$/.test(n[0].name)?`Are`:`Is`} Largest, With ${n[0].seats} Of ${r} Seats`,slices:i}}function $l(e){return Xl((e.exec===`hog`?e.hog:e.hos)?.color??e.color??(e.bloc===`na`?void 0:Al[e.bloc])??Y[Rl(e)].color)}function eu(e,t){let n=e.exec===`hog`?e.hog:e.hos;return n?{name:t??(e.exec===`hog`?e.hogTitle:e.hosTitle)??`Runs The Government`,words:`${n.name}${n.party?`, ${n.party}`:``}`,slices:[{color:$l(e),share:1,label:n.name}]}:null}var tu=[`D`,`I`,`L`,`G`,`O`,`R`];function nu(e,t,n){let r=tu.reduce((e,n)=>e+(t[n]??0),0);if(!r)return null;let i=[];for(let e of[`D`,`I`])t[e]&&i.push({color:q[e],share:t[e]/n,label:`${kl[e]}: ${t[e]}`});let a=Math.max(0,1-r/n);return a>.002&&i.push({color:Jl,share:a,label:`Not Yet Decided`}),t.R&&i.push({color:q.R,share:t.R/n,label:`${kl.R}: ${t.R}`}),{name:e,words:tu.filter(e=>t[e]).map(e=>`${t[e]} ${kl[e]}`).join(`, `),slices:i.slice(0,4)}}function ru(e){let t=G.worldElections.find(e=>e.country===`USA`&&/president/i.test(e.title)&&(e.phase===`counting`||e.phase===`voting`||e.phase===`decided`&&Date.now()-Date.parse(e.date)<648e7)&&(e.parties??[]).some(e=>e.pct));if(t){let e=(t.parties??[]).filter(e=>e.pct).sort((e,t)=>(t.pct??0)-(e.pct??0)).slice(0,2),n=e.map(e=>({color:q[ul(e.name)],share:(e.pct??0)/100,label:`${e.leader??e.name}: ${e.pct}%`})),r=1-n.reduce((e,t)=>e+t.share,0);return r>.005&&n.splice(1,0,{color:Jl,share:r,label:`Others`}),{name:`President`,words:e.map(e=>`${e.leader??e.name} ${e.pct}%`).join(`, `),slices:n}}let n=e.hos;return n?{name:`President`,words:`${n.name}${n.party?`, ${n.party}`:``}`,slices:[{color:q[ul(n.party??``)],share:1,label:n.name}]}:null}function iu(e){let t=[ru(e)],n=G.chambers?.senate;if(n){let e=Object.keys(n.reported).length>0,r=e?{...n.reported}:{...n.notUp};if(!e)for(let e of G.races.values())e.office===`senate`&&e.holder&&(r[e.holder]=(r[e.holder]??0)+1);t.push(nu(`Senate`,r,n.total))}let r=G.chambers?.house;if(r){let e={};if(Object.keys(r.reported).length)Object.assign(e,r.reported);else for(let t of G.races.values())t.office===`house`&&t.holder&&(e[t.holder]=(e[t.holder]??0)+1);t.push(nu(`House`,e,r.total))}return t.filter(e=>!!e)}function au(e){return e.key===`USA`?iu(e):[eu(e),Ql(e.lastUpper,`Upper House`),Ql(e.lastLegislative,e.legislatureName??`Parliament`)].filter(e=>!!e)}function ou(e){let t=[],n=G.us.president[e];if(n?.total){let e=n.dem/n.total,r=n.rep/n.total;t.push({name:`2024 President`,words:`${n.dem>n.rep?`Democrats`:`Republicans`} Won The State, ${Math.round(Math.max(e,r)*100)}%`,slices:[{color:q.D,share:e,label:`Democrats: ${Math.round(e*100)}%`},{color:Jl,share:Math.max(0,1-e-r),label:`Others`},{color:q.R,share:r,label:`Republicans: ${Math.round(r*100)}%`}]})}let r=Ul(e);if(r.length){let e={};for(let t of r)e[t.party]=(e[t.party]??0)+1;let n=nu(`Senate`,e,r.length);n&&t.push({...n,words:r.map(e=>`${e.name} (${kl[e.party]}${e.up&&e.race?.status===`called`?e.race.basis===`wikipedia`?`, Reported Winner`:`, Newly Elected`:``})`).join(`, `)})}let i=Hl(e);if(i.total){let e=nu(`House`,{D:i.D,R:i.R,O:i.other},i.total);e&&t.push(e)}return t}function su(e,t){let n=G.admin1[e];if(!n)return[];let r=n.color??(n.bloc&&n.bloc!==`na`?Al[n.bloc]:void 0);if(!r)return[];let i=G.world.countries[t],a=i?eu(i,`National Government`):null,o={name:`Regional Leader`,words:`${n.leader??`Not Recorded`}${n.party?`, ${n.party}`:``}`,slices:[{color:Xl(r),share:1,label:n.leader??``}]};return a?[a,o]:[o]}function cu(e){if(e<=1)return[{inner:0,outer:.84}];let t=.04,n=(.84-t*(e-1))/e;return Array.from({length:e},(r,i)=>{let a=.84-i*(n+t);return{inner:i===e-1?0:a-n,outer:a}})}function lu(e){let t=48/.92;return`<svg class="ring-pic" viewBox="0 0 96 96" width="96" height="96" aria-hidden="true"><circle cx="48" cy="48" r="48" fill="rgba(6,8,12,0.6)"/>${e.map((n,r)=>{let a=cu(e.length)[r],o=a.inner*t,s=a.outer*t,c=(o+s)/2,l=s-o,u=2*Math.PI*c,d=0;return n.slices.map(e=>{let t=e.share*u,n=`<circle cx="48" cy="48" r="${c.toFixed(2)}" fill="none" stroke="${i(e.color)}" stroke-width="${l.toFixed(2)}" stroke-dasharray="${Math.max(0,t-.6).toFixed(2)} ${(u-t+.6).toFixed(2)}" stroke-dashoffset="${(-d).toFixed(2)}" transform="rotate(-90 48 48)"><title>${i(e.label)}</title></circle>`;return d+=t,n}).join(``)}).join(``)}</svg>`}function uu(e){if(!e.length)return``;let t=t=>e.length===1?`The Whole Chart`:t===0?`Outer Ring`:t===e.length-1?`Inner Ring`:`Middle Ring`;return`<div class="ring-key">${lu(e)}<div class="rk-lines">${e.map((e,n)=>`<div class="rk-line"><small>${t(n)}</small><b>${i(e.name)}</b><span>${i(e.words)}</span></div>`).join(``)}</div></div>`}var du=class{value;target;velocity=0;k=0;c=0;constructor(e=0,t=.4,n=1){this.value=e,this.target=e,this.configure(t,n)}configure(e,t=1){let n=2*Math.PI/e;return this.k=n*n,this.c=2*t*n,this}snap(e){return this.value=this.target=e,this.velocity=0,this}get settled(){return Math.abs(this.value-this.target)<1e-4&&Math.abs(this.velocity)<.001}step(e){let t=Math.min(e,.1);for(;t>0;){let e=Math.min(t,1/240),n=-this.k*(this.value-this.target)-this.c*this.velocity;this.velocity+=n*e,this.value+=this.velocity*e,t-=e}return this.value}};function fu(e,t,n=44){let r=new du(0,e,t);r.target=1;let i=1/240,a=[],o=0,s=0;for(;o<4&&s<24;)r.step(i),a.push(r.value),o+=i,s=Math.abs(r.value-1)<.0015&&Math.abs(r.velocity)<.01?s+1:0;let c=[];for(let e=0;e<=n;e++){let t=a[Math.min(a.length-1,Math.round(e/n*(a.length-1)))];c.push(t.toFixed(3))}return c[0]=`0`,c[c.length-1]=`1`,{easing:`linear(${c.join(`, `)})`,ms:Math.round(o*1e3)}}function pu(){let e=document.documentElement,t=CSS.supports(`transition-timing-function`,`linear(0, 1)`),n=(n,r,i,a)=>{let{easing:o,ms:s}=fu(r,i);e.style.setProperty(`--ease-${n}`,t?o:a),e.style.setProperty(`--dur-${n}`,`${s}ms`)};n(`glide`,.5,1,`cubic-bezier(0.22, 1, 0.36, 1)`),n(`pop`,.42,.74,`cubic-bezier(0.2, 1.3, 0.35, 1)`),n(`snap`,.24,1,`cubic-bezier(0.25, 1, 0.5, 1)`)}var mu=()=>window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,hu=1400,gu=4,_u=`
  uniform vec2 uRes;
  uniform vec3 uCam;
  uniform float uOpacity;
  in vec3 iDir;
  in vec4 iShape;  // radius in pixels, how far it has swept open, where the winning mark is (or below zero), brightness
  in vec4 iCuts;   // where each slice ends, going clockwise from the top
  in vec3 iC0;
  in vec3 iC1;
  in vec3 iC2;
  in vec3 iC3;
  in vec4 iRing;
  in vec3 iBand;  // where this ring starts and ends, as a share of the chart, and whether it carries the dark backing
  out vec2 vP;
  out float vAlpha;
  flat out vec2 vSweep;
  flat out vec4 vCuts;
  flat out vec3 vC0;
  flat out vec3 vC1;
  flat out vec3 vC2;
  flat out vec3 vC3;
  flat out vec4 vRing;
  flat out vec3 vBand;
  void main() {
    vP = position.xy * 1.08;
    vCuts = iCuts;
    vC0 = iC0; vC1 = iC1; vC2 = iC2; vC3 = iC3;
    vRing = iRing;
    vBand = iBand;
    vSweep = iShape.yz;
    vec3 toCam = normalize(uCam);
    float horizon = 1.0 / max(length(uCam), 1.0001);
    float facing = dot(iDir, toCam);
    vAlpha = smoothstep(horizon, horizon + (1.0 - horizon) * 0.2, facing) * uOpacity * iShape.w;
    if (vAlpha < 0.004 || iShape.x < 0.5) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    vec4 c = projectionMatrix * viewMatrix * vec4(iDir, 1.0);
    c.xy += position.xy * 1.08 * iShape.x / uRes * 2.0 * c.w;
    gl_Position = c;
  }
`,vu=`
  precision highp float;
  uniform float uHole;
  in vec2 vP;
  in float vAlpha;
  flat in vec2 vSweep;
  flat in vec4 vCuts;
  flat in vec3 vC0;
  flat in vec3 vC1;
  flat in vec3 vC2;
  flat in vec3 vC3;
  flat in vec4 vRing;
  flat in vec3 vBand;
  out vec4 fragColor;
  const float TAU = 6.2831853;
  void main() {
    float r = length(vP);
    float aa = fwidth(r) * 1.2;
    if (r > 1.0 + aa * 2.0) discard;
    float a = fract(atan(vP.x, vP.y) / TAU);

    vec3 col = vC0;
    if (a > vCuts.x) col = vC1;
    if (a > vCuts.y) col = vC2;
    if (a > vCuts.z) col = vC3;

    // A thin dark gap between slices, the same width all the way out from the middle.
    float edge = min(min(abs(a - vCuts.x), abs(a - vCuts.y)), abs(a - vCuts.z));
    edge = min(edge, min(a, 1.0 - a));
    float gap = smoothstep(0.0, 0.016 / max(r, 0.15), edge);
    float hasSlices = step(vCuts.x, 0.999);
    col *= mix(1.0, mix(0.2, 1.0, gap), hasSlices);

    // Soft lighting, so it reads as a token sitting on the map and not a flat sticker.
    col *= mix(1.1, 0.84, r * r);
    col += vec3(0.1) * smoothstep(0.1, 0.9, vP.y) * (1.0 - r * 0.4);

    // It opens by sweeping around the clock, with an empty track waiting behind.
    float swept = 1.0 - smoothstep(vSweep.x - 0.012, vSweep.x + 0.012, a);
    col = mix(vec3(0.1, 0.11, 0.13), col, swept);

    // A chart with several rings has them nested from the outside in. A chart with just one can be hollowed out by the rings style.
    float holeAt = vBand.x > 0.001 ? vBand.x : (vBand.y > 0.83 ? uHole : 0.0);
    float disc = 1.0 - smoothstep(vBand.y - aa, vBand.y + aa, r);
    float hole = smoothstep(holeAt - aa, holeAt + aa, r);
    float rim = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, r)) * smoothstep(0.86 - aa, 0.86 + aa, r) * vBand.z;

    // The dark backing keeps every chart readable, over deserts and snow alike.
    vec3 out_ = vec3(0.03, 0.04, 0.05);
    float alpha = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, r)) * 0.72 * vBand.z;
    out_ = mix(out_, col, disc * hole);
    alpha = max(alpha * mix(1.0, 0.82, (1.0 - hole) * step(0.01, holeAt)), disc * hole);
    out_ = mix(out_, vRing.rgb, rim * vRing.a);
    alpha = max(alpha, rim * vRing.a);

    // The winning mark: a white tick across the band, wherever a majority would reach.
    if (vSweep.y >= 0.0) {
      float d = abs(fract(a - vSweep.y + 0.5) - 0.5);
      float tick = (1.0 - smoothstep(0.012, 0.02, d)) * smoothstep(0.4, 0.5, r) * (1.0 - smoothstep(1.0, 1.02, r));
      out_ = mix(out_, vec3(1.0), tick);
      alpha = max(alpha, tick);
    }
    fragColor = vec4(out_, alpha * vAlpha);
  }
`,yu=class{globe;geo=new wa;iDir=new Float32Array(hu*3);iShape=new Float32Array(hu*4);iCuts=new Float32Array(hu*4);iC=Array.from({length:gu},()=>new Float32Array(hu*3));iRing=new Float32Array(hu*4);iBand=new Float32Array(hu*3);dirty=!0;lastCount=0;attrs;mat;pies=new Map;hole=new du(0,.5,1);fade=new du(1,.5,1);mesh;spots=[];spotsAt=0;constructor(e){this.globe=e,this.geo.setAttribute(`position`,new yr(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),this.geo.setIndex([0,1,2,0,2,3]);let t=(e,t,n)=>{let r=new ci(t,n);return r.setUsage(st),this.geo.setAttribute(e,r),r};this.attrs=[t(`iDir`,this.iDir,3),t(`iShape`,this.iShape,4),t(`iCuts`,this.iCuts,4),...this.iC.map((e,n)=>t(`iC${n}`,e,3)),t(`iRing`,this.iRing,4),t(`iBand`,this.iBand,3)],this.geo.instanceCount=0,this.mat=new Ri({glslVersion:ct,vertexShader:_u,fragmentShader:vu,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new Mt(1,1)},uCam:e.shared.uCam,uOpacity:{value:1},uHole:{value:0}}}),this.mesh=new ii(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=21,e.scene.add(this.mesh)}setHollow(e){this.hole.target=e?.56:0}show(e){this.fade.target=+!!e}set(e){this.dirty=!0;for(let e of this.pies.values())e.alive=!1;for(let t of e){let e=this.pies.get(t.key);e||(e={item:t,scale:new du(0,.5,.68),sweep:new du(0,.8,1),cuts:[],alive:!0,wait:t.wait??0},this.pies.set(t.key,e)),e.item=t,e.alive=!0}}pulse(e,t){let n=this.pies.get(e);n&&(n.scale.velocity+=t?5:2.5)}radiusOf(e){let t=this.pies.get(e);return t?this.pixels(t):0}spotNear(e,t,n=0){let r=performance.now();if(r-this.spotsAt>150){this.spotsAt=r,this.spots.length=0;for(let e of this.pies.values()){if(!e.alive)continue;let t=this.globe.project(e.item.dir);t&&this.spots.push({x:t.x,y:t.y,r:this.pixels(e)})}}for(let r of this.spots)if(Math.abs(e-r.x)<r.r+n&&Math.abs(t-r.y)<r.r+7)return r;return null}pixels(e){let{w:t,h:n}=this.globe.size,r=Math.min(t,n)/2,i=e.item.radiusRad/this.globe.cam.viewAngle()*r*.62,a=Math.max(.62,Math.min(1,r/380));return Math.max(e.item.minPx,Math.min(e.item.maxPx,i))*a*Math.max(0,e.scale.value)}update(e){this.hole.step(e),this.fade.step(e);let t=this.mat.uniforms;t.uHole.value=Math.max(0,this.hole.value),t.uOpacity.value=Math.max(0,Math.min(1,this.fade.value)),this.mesh.visible=t.uOpacity.value>.005,t.uRes.value.set(this.globe.size.w,this.globe.size.h);let n=1-Math.exp(-e*6),r=0;for(let[t,i]of this.pies){if(i.wait>0?i.wait-=e:(i.scale.target=+!!i.alive,i.sweep.target=i.alive?1:i.sweep.value),i.scale.step(e),i.sweep.step(e),!i.alive&&i.scale.value<.02){this.pies.delete(t);continue}let a=i.item,o=a.bands?.length?a.bands:[a.slices],s=o.length>1?.04:0,c=(.84-s*(o.length-1))/o.length,l=this.pixels(i);o.forEach((e,t)=>{if(r>=hu)return;let u=i.cuts[t]??=[0,0,0,1],d=0;for(let t=0;t<gu;t++){d+=e[t]?.share??0;let r=t===3||t>=e.length-1?1:Math.min(1,d);Math.abs(r-u[t])>5e-4&&(this.dirty=!0),u[t]+=(r-u[t])*n}let f=.84-t*(c+s),p=t===0;this.iDir.set([a.dir.x,a.dir.y,a.dir.z],r*3);let m=Math.max(0,Math.min(1.04,(i.sweep.value*(1+t*.32)-t*.32)*1.04));(Math.abs(this.iShape[r*4]-l)>.02||Math.abs(this.iShape[r*4+1]-m)>.001)&&(this.dirty=!0),this.iShape.set([l,m,p?a.tick??-1:-1,a.brightness??1],r*4),this.iCuts.set(u,r*4);for(let t=0;t<gu;t++){let n=e[Math.min(t,e.length-1)]?.color??[.5,.5,.5];this.iC[t].set(n,r*3)}this.iRing.set(p&&a.ring?[a.ring[0],a.ring[1],a.ring[2],.95]:[0,0,0,0],r*4),this.iBand.set([t===o.length-1?0:f-c,f,+!!p],r*3),r++})}if(this.geo.instanceCount=r,r!==this.lastCount&&(this.dirty=!0),this.lastCount=r,this.dirty)for(let e of this.attrs)e.needsUpdate=!0;this.dirty=!1}},bu=`ge-vote-style`,xu=[.24,.26,.3],Su=[.95,.76,.3],Cu=[1,1,1],wu=e=>Math.max(e[0],e[1],e[2])<.28?[e[0]+.32,e[1]+.32,e[2]+.32]:e,Tu=e=>e.map(e=>e.slices.map(e=>({color:J(e.color),share:e.share}))),Eu=e=>e.map(e=>`${e.name}: ${e.words}`).join(`. `),Du=[.93,.74,.3],Ou=900,ku=.0088,Au=14,ju=2,Mu={0:1,1:.6,2:.72},Nu=[`#5a78f0`,`#c4821a`,`#a06ff0`,`#2aa3ab`],Pu=`
  uniform float uUnit;
  uniform vec3 uCam;
  in vec3 iDir;
  in vec3 iOff;   // east along the ground, north along the ground, and lift straight up
  in vec3 iSize;  // footprint, footprint, height
  in vec4 iColor;
  in float iGlow;
  out vec3 vColor;
  out float vAlpha, vShade, vH, vTop, vGlow;
  void main() {
    vColor = iColor.rgb;
    vAlpha = iColor.a;
    vGlow = iGlow;
    vH = position.z;
    vTop = normal.z;
    vShade = 1.0;
    // Well past the horizon there's nothing to see. Just past it, a tall stick can still poke up over the edge
    // of the planet, and the planet itself hides the part below, as it would in real life.
    if (dot(iDir, normalize(uCam)) < 0.05 || iSize.z <= 0.002) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    // Each stick grows straight out of the ground at its place, built on the planet's own surface directions.
    vec3 up = iDir;
    vec3 east = normalize(cross(vec3(0.0, 1.0, 0.0), up));
    vec3 north = cross(up, east);
    vec3 p = up + (east * (iOff.x + position.x * iSize.x) + north * (iOff.y + position.y * iSize.y) + up * (iOff.z + position.z * iSize.z)) * uUnit;
    vec3 n = east * normal.x + north * normal.y + up * normal.z;
    vec3 V = normalize(uCam - p);
    // Lit from over the viewer's shoulder, so one side of each stick is always brighter than the next.
    vec3 L = normalize(V + east * 0.55 + north * 0.35);
    vShade = 0.46 + 0.74 * max(dot(n, L), 0.0);
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }
`,Fu=`
  precision highp float;
  in vec3 vColor;
  in float vAlpha, vShade, vH, vTop, vGlow;
  out vec4 fragColor;
  void main() {
    // Dark where it comes out of the ground and bright at the tip, so it looks rooted in the planet.
    vec3 c = vColor * vShade * mix(0.5, 1.2, smoothstep(0.0, 0.85, vH));
    // A light top, and a thin bright rim where the top meets the sides, so each stick reads as solid.
    c = mix(c, mix(vColor, vec3(1.0), 0.38), step(0.5, vTop));
    c += vec3(0.18) * smoothstep(0.97, 1.0, vH) * (1.0 - step(0.5, vTop));
    c = mix(c, vec3(1.0), vGlow * 0.55);
    fragColor = vec4(c, vAlpha);
  }
`,Iu=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Lu=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uK;
  in vec2 vUv;
  out vec4 fragColor;
  void main() {
    float r = length(vUv - 0.5) * 2.0;
    float band = smoothstep(uK - 0.18, uK - 0.01, r) * smoothstep(uK + 0.015, uK - 0.01, r);
    fragColor = vec4(mix(uColor, vec3(1.0), 0.4), band * (1.0 - uK) * 0.5);
  }
`,Ru=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`);function zu(e){let t=Math.ceil((new Date(`${e.slice(0,10)}T00:00:00Z`).getTime()-Date.now())/864e5);return t<=0?`Voting Today`:t===1?`Votes Tomorrow`:t<7?`Votes This Week`:t<14?`Votes Next Week`:t<31?`Votes This Month`:`Votes Soon`}var Bu=class{globe;fronts=[];tier=0;overlay=null;onCalled=null;style=`pie`;pies;focusCountry=null;focusState=null;closest=!1;enteredAt=0;tagged=new Set;pieces=new Map;geo;unit={value:.02};iDir=new Float32Array(Ou*3);iOff=new Float32Array(Ou*3);iSize=new Float32Array(Ou*3);iColor=new Float32Array(Ou*4);iGlow=new Float32Array(Ou);attrs;ripples=[];lastVotes=new Map;lastStatus=new Map;tmp=new H;quat=new Nt;zAxis=new H(0,0,1);seeded=!1;dirty=!0;tagBox=document.createElement(`div`);tags=new Map;constructor(e){this.globe=e;let t=e.shared,n=new Ei(1,1,1);n.translate(0,0,.5);let r=new wa;r.setAttribute(`position`,n.getAttribute(`position`)),r.setAttribute(`normal`,n.getAttribute(`normal`)),r.setIndex(n.getIndex());let i=(e,t,n)=>{let i=new ci(t,n);return i.setUsage(st),r.setAttribute(e,i),i};this.attrs=[i(`iDir`,this.iDir,3),i(`iOff`,this.iOff,3),i(`iSize`,this.iSize,3),i(`iColor`,this.iColor,4),i(`iGlow`,this.iGlow,1)],r.instanceCount=0,this.geo=r;let a=new ii(r,new Ri({glslVersion:ct,vertexShader:Pu,fragmentShader:Fu,transparent:!0,depthTest:!0,depthWrite:!0,uniforms:{uUnit:this.unit,uCam:t.uCam}}));a.frustumCulled=!1,a.renderOrder=21,e.scene.add(a),this.tagBox.id=`front-tags`,document.body.append(this.tagBox),this.pies=new yu(e);try{let e=localStorage.getItem(bu);(e===`pie`||e===`ring`||e===`stick`)&&(this.style=e)}catch{}this.pies.setHollow(this.style===`ring`);let o=new Oi(1e-4,1,72,1);for(let t=0;t<10;t++){let t=new ii(o,new Ri({glslVersion:ct,vertexShader:Iu,fragmentShader:Lu,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uColor:{value:new H(1,1,1)},uK:{value:0}}}));t.visible=!1,t.renderOrder=19,e.scene.add(t),this.ripples.push({mesh:t,born:0,life:2.4,active:!1})}}resize(e,t){}setLevel(e,t=null,n=null){let r=e<=1?0:e===2?1:2;(r!==this.tier||t!==this.focusCountry||n!==this.focusState)&&(r!==2&&(this.closest=!1,this.enteredAt=0),this.tier=r,this.focusCountry=t,this.focusState=n,this.rebuild())}setStyle(e){this.style=e,this.pies.setHollow(e===`ring`);try{localStorage.setItem(bu,e)}catch{}this.rebuild()}chartSpot(e){let t=this.fronts.find(t=>t.id===e);if(!t)return null;let n=this.globe.project(wl(t.lon,t.lat,1,this.tmp)),r=this.pies.radiusOf(e);return n&&r>2?{x:n.x,y:n.y,r}:null}frontAt(e,t){if(this.overlay)return;let n,r=1/0;for(let i of this.fronts){if(!this.visibleLevel(i))continue;let a=this.globe.project(wl(i.lon,i.lat,1,this.tmp));if(!a)continue;let o=this.style===`stick`?16:Math.max(10,this.pies.radiusOf(i.id)),s=Math.hypot(a.x-e,a.y-t);s<o&&s<r&&(n=i,r=s)}return n}pieNear(e,t,n=0){return this.style===`stick`?null:this.pies.spotNear(e,t,n)}hasTag(e){return this.tagged.has(e)}setOverlay(e){this.overlay=e,this.rebuild()}sync(){let e=[];e.push(...this.usFronts()),e.push(...this.worldFronts()),e.push(...this.powerFronts(e)),this.fronts=e,this.rebuild();for(let e of G.races.values()){let t=e.candidates.reduce((e,t)=>e+(t.votes??0),0),n=this.lastVotes.get(e.id)??0,r=this.lastStatus.get(e.id);this.seeded&&(t>n&&this.pulse(e,!1),e.status===`called`&&r&&r!==`called`&&(this.pulse(e,!0),this.onCalled?.(e))),this.lastVotes.set(e.id,t),this.lastStatus.set(e.id,e.status)}this.seeded=G.races.size>0}usFronts(){let e=[],t=G.chambers,n=[...G.races.values()],r=J(q.D),i=J(q.R),a=n.filter(e=>e.status!==`called`);if(!n.length)return e;let o=t?.house,s=G.usCycle.live&&a.length>0,c=G.world?.countries.USA;if(o){let t=o.reported.D??o.seatLevel.D??0,n=o.reported.R??o.seatLevel.R??0,a=t+n,l=o.toWin*1.22;e.push({id:`US`,level:0,title:`United States`,lon:-98,lat:39.5,radiusRad:.28,sides:[{label:`Democrats`,color:r,share:a?t/a:.5,party:`D`},{label:`Republicans`,color:i,share:a?n/a:.5,party:`R`}],bars:[{color:r,value:t/l,label:`Democrats: ${t} House seats`},{color:i,value:n/l,label:`Republicans: ${n} House seats`}],line:o.toWin/l,pie:[{color:r,share:t/o.total},{color:xu,share:Math.max(0,1-a/o.total)},{color:i,share:n/o.total}],bands:c?Tu(au(c)):void 0,progress:El(a/o.total,0,1),hasCount:a>0,activity:1,select:`country:USA`,sub:c?Eu(au(c)):`House: ${t} D, ${n} R`,phase:s?`live`:`done`})}let l=new Map;for(let e of n)l.has(e.state)||l.set(e.state,[]),l.get(e.state).push(e);let u=e=>Math.sqrt(e/52);for(let[t,n]of l){let a=n.filter(e=>e.status!==`called`),o=this.globe.usStateIndex.get(t),c=o===void 0?void 0:this.globe.layers.admin1?.meta[o];if(!c)continue;let l=0,d=0;for(let e of n){let t=e.status===`called`?e.winnerParty:[...e.candidates].sort((e,t)=>(t.pct??0)-(e.pct??0)).find(e=>e.pct)?.party;t===`D`?l++:t===`R`&&d++}let f=l+d;e.push({id:`ST:${t}`,level:1,title:ll[t]?.name??t,lon:c.c[0],lat:c.c[1],radiusRad:El(c.r*Cl*.7,.02,.2),sides:[{label:`D`,color:r,share:f?l/f:.5,party:`D`},{label:`R`,color:i,share:f?d/f:.5,party:`R`}],bars:[{color:r,value:u(l),label:`Democrats ahead or elected in ${l} of ${n.length}`},{color:i,value:u(d),label:`Republicans ahead or elected in ${d} of ${n.length}`}],pie:[{color:r,share:l/n.length},{color:xu,share:Math.max(0,1-f/n.length)},{color:i,share:d/n.length}],bands:Tu(ou(t)),progress:(n.length-a.length)/n.length,hasCount:f>0,activity:El(a.length/8,.2,1),select:`state:${t}`,sub:Eu(ou(t)),phase:s&&a.length?`live`:`done`})}let d=this.globe.layers.uscd;for(let t of n){if(t.office!==`house`||!d)continue;let n=t.candidates.filter(e=>(e.pct??0)>0),r=t.status===`called`,i=d.byKey.get(t.seat);if(i===void 0)continue;let a=d.meta[i],o=[...n].sort((e,t)=>(t.pct??0)-(e.pct??0)).slice(0,2),s=o.length===2,c=s?(o[0].pct??0)+(o[1].pct??0):1;e.push({id:t.id,level:2,title:t.seat,lon:a.c[0],lat:a.c[1],radiusRad:El(a.r*Cl*.7,.004,.06),sides:s?[{label:o[0].name,color:J(q[o[0].party]),share:(o[0].pct??0)/c,party:o[0].party},{label:o[1].name,color:J(q[o[1].party]),share:(o[1].pct??0)/c,party:o[1].party}]:[{label:``,color:Du,share:.5},{label:``,color:Du,share:.5}],bars:s?o.map(e=>({color:J(q[e.party]),value:(e.pct??0)/62,label:`${e.name}: ${e.pct}%`})):[{color:Du,value:.22,label:`No count in the feeds yet`}],pie:s?[...o.map(e=>({color:J(q[e.party]),share:(e.pct??0)/100})),{color:xu,share:Math.max(0,1-c/100)}]:r&&t.winnerParty?[{color:J(q[t.winnerParty]),share:1}]:[{color:xu,share:1}],progress:t.reporting?.pct===void 0?null:t.reporting.pct/100,hasCount:s,activity:.7,select:`seat:${t.seat}`,sub:s?`${o[0].name} ${o[0].pct}%, ${o[1].name} ${o[1].pct}%`:`No count in the feeds yet`,race:t,phase:r?`done`:`live`})}return e}worldFronts(){let e=[],t=new Set,n=new Set,r=this.globe.layers.countries;for(let i of[...G.worldElections].sort((e,t)=>e.date.localeCompare(t.date))){if(i.country===`USA`||i.dependency||!r)continue;let a=(new Date(i.date).getTime()-Date.now())/864e5;if(a>365||a<-45)continue;let o=`${i.country}:${i.date}`;if(t.has(o))continue;t.add(o);let s=!n.has(i.country);n.add(i.country);let c=r.byKey.get(i.country);if(c===void 0)continue;let l=r.meta[c],u=(i.parties??[]).filter(e=>e.name),d=(i.phase===`counting`||i.phase===`decided`)&&u.some(e=>e.pct),f=[...u].sort((e,t)=>(t.pct??t.seats??0)-(e.pct??e.seats??0)).slice(0,2),p=e=>{let t=f[e];return J(t?.color??(t?.bloc?Al[t.bloc]:e?`#f3a06b`:`#7fb2f0`))},m=(f[0]?.pct??0)+(f[1]?.pct??0),h=d?[...u].filter(e=>e.pct).sort((e,t)=>(t.pct??0)-(e.pct??0)).slice(0,4).map((e,t)=>({color:J(e.color??(e.bloc&&e.bloc!==`na`?Al[e.bloc]:Nu[t])),value:(e.pct??0)/62,label:`${e.name}: ${e.pct}%`})):[{color:Du,value:.25+.55*(1-El(a/365,0,1))**2,label:`${i.countryName} votes soon`}],g=(e,t)=>{let n=e.filter(e=>t(e)>0).sort((e,n)=>t(n)-t(e)),r=d?100:n.reduce((e,n)=>e+t(n),0)||1,i=n.slice(0,3).map((e,n)=>({color:wu(J(e.color??(e.bloc&&e.bloc!==`na`?Al[e.bloc]:Nu[n]))),share:t(e)/r})),a=1-i.reduce((e,t)=>e+t.share,0);return a>.005&&i.push({color:xu,share:a}),i},_=e=>e.seats??e.seatsBefore??0,v=d?g(u,e=>e.pct??0):g(u,_);v.length||(v=g(G.world?.countries[i.country]?.lastLegislative?.parties??[],_));let y=G.world?.countries[i.country],b=s&&!d&&y&&tl.has(i.country)?au(y):null;e.push({...b&&b.length>1?{bands:Tu(b)}:{},pie:s?v.length?v:[{color:xu,share:1}]:[],id:i.id,level:0,title:i.countryName,lon:l.c[0],lat:l.c[1],radiusRad:El(l.r*Cl*.7,.02,.2),sides:[{label:f[0]?.name??``,color:d?p(0):Du,share:d&&m?(f[0]?.pct??0)/m:.5},{label:f[1]?.name??``,color:d?p(1):Du,share:d&&m?(f[1]?.pct??0)/m:.5}],bars:s?h:[],progress:null,hasCount:!!d,activity:i.phase===`upcoming`?.14:.8,select:`election:${i.id}`,sub:i.title,election:i,phase:i.phase===`upcoming`?`upcoming`:i.phase===`decided`?`done`:`live`})}return e}powerFronts(e){let t=this.globe.layers.countries;if(!t||!G.world)return[];let n=new Set(e.flatMap(e=>e.level===0&&e.pie.length?[e.election?.country??(e.id===`US`?`USA`:``)]:[])),r=[];for(let e of tl){if(n.has(e))continue;let i=G.world.countries[e],a=t.byKey.get(e);if(!i||a===void 0)continue;let o=au(i);if(!o.length)continue;let s=t.meta[a];r.push({id:`P:${e}`,level:0,title:i.name,lon:s.c[0],lat:s.c[1],radiusRad:El(s.r*Cl*.7,.02,.2),sides:[],bars:[],pie:Tu(o)[0],bands:Tu(o),progress:null,hasCount:!1,activity:.1,select:`country:${e}`,sub:Eu(o),phase:`done`})}return r}visibleLevel(e){return e.election?this.tier===0||e.election.country===this.focusCountry:e.level===this.tier?e.level!==2||!this.focusState?!0:this.closest&&this.style!==`stick`?!1:e.race?.state===this.focusState:!1}frontForRace(e){let t=this.tier===0?`US`:this.tier===1||e.office!==`house`?`ST:${e.state}`:e.id;return this.fronts.find(e=>e.id===t)}pulse(e,t){let n=this.frontForRace(e);if(!n)return;let r=t&&e.winnerParty?J(q[e.winnerParty]):n.bars[0]?.color??Du;this.ripple(n.lon,n.lat,Math.max(n.radiusRad*(t?1.8:1.1),.02),r),this.pies.pulse(n.id,t),n.bars.forEach((e,r)=>{let i=this.pieces.get(`${n.id}:${r}`);i&&(i.h.velocity+=t?26:12,i.glow=t?1:.6)})}ripple(e,t,n,r){let i=this.ripples.find(e=>!e.active);i&&(i.active=!0,i.born=this.globe.time,i.mesh.visible=!0,i.mesh.scale.setScalar(n),wl(e,t,1.0004,this.tmp),i.mesh.position.copy(this.tmp),i.mesh.quaternion.copy(this.quat.setFromUnitVectors(this.zAxis,this.tmp.clone().normalize())),i.mesh.material.uniforms.uColor.value.set(r[0],r[1],r[2]))}rebuild(){for(let e of this.pieces.values())e.alive=!1;let e=(e,t,n,r,i,a,o,s,c,l)=>{let u=this.pieces.get(e);u||(u={dir:t.clone(),across:n,lift:r,footprint:i,depth:a,color:o,alpha:s,h:new du(0,.85,.62),glow:0,alive:!0,wait:l,want:c},this.pieces.set(e,u)),u.dir.copy(t),u.across=n,u.lift=r,u.footprint=i,u.depth=a,u.color=o,u.alpha=s,u.alive=!0,u.want=c},t=new H,n=this.style===`stick`;this.pies.show(!n);let r=[];if(!n){if(this.overlay){let e=this.globe.layers.countries;for(let t of this.overlay){let n=e?.meta[e.byKey.get(t.key)??-1];r.push({key:`o:${t.key}`,dir:wl(t.lon,t.lat,1,new H),radiusRad:(n?.r??2)*Cl,minPx:6.5,maxPx:17,slices:[{color:t.color,share:Math.min(1,t.value)},{color:xu,share:Math.max(0,1-t.value)}],wait:Math.random()*.5})}}else{for(let e of this.fronts){if(!this.visibleLevel(e)||!e.pie.length)continue;let t=e.pie.length===1&&e.pie[0].color===xu?{minPx:5,maxPx:7}:e.id===`US`?{minPx:30,maxPx:44}:e.bands&&e.level===0?{minPx:18,maxPx:40}:e.level===0?{minPx:15,maxPx:30}:e.level===1?{minPx:14,maxPx:30}:{minPx:10,maxPx:22};r.push({key:e.id,dir:wl(e.lon,e.lat,1,new H),radiusRad:e.radiusRad,...t,slices:e.pie,...e.bands?{bands:e.bands}:{},ring:e.phase===`upcoming`?Su:e.phase===`live`&&e.level<2?Cu:void 0,tick:e.id===`US`&&e.phase===`live`?.5:void 0})}let e=this.globe.layers.admin1;if(this.tier>=1&&this.focusCountry&&this.focusCountry!==`USA`&&e&&G.admin1)for(let t of e.meta){if(t.x?.cc!==this.focusCountry)continue;let e=su(t.k,this.focusCountry);if(!e.length)continue;let n=Tu(e);r.push({key:`R:${t.k}`,dir:wl(t.c[0],t.c[1],1,new H),radiusRad:El(t.r*Cl*.7,.012,.16),minPx:11,maxPx:26,slices:n[0],bands:n})}let t=this.globe.layers.uscounty;if(this.closest&&this.focusState&&t&&G.usCounty){let e=J(q.D),n=J(q.R);for(let i of t.meta){if(i.x?.state!==this.focusState)continue;let t=G.usCounty[i.k];if(!t)continue;let[a,o,s]=t;r.push({key:`county:${i.k}`,dir:wl(i.c[0],i.c[1],1,new H),radiusRad:i.r*Cl,minPx:6,maxPx:14,slices:[{color:e,share:o/s},{color:xu,share:Math.max(0,1-(o+a)/s)},{color:n,share:a/s}]})}}}}if(this.pies.set(r),n){if(this.overlay)for(let n of this.overlay)wl(n.lon,n.lat,1,t),e(`o:${n.key}`,t,0,0,1.5,1.5,n.color,1,Math.max(.05,n.value)*Au,Math.random()*.6);else for(let n of this.fronts){if(!this.visibleLevel(n)||!n.bars.length)continue;let r=Mu[n.level];wl(n.lon,n.lat,1,t);let i=n.bars.length,a=2.4*r;n.bars.forEach((o,s)=>{e(`${n.id}:${s}`,t,(s-(i-1)/2)*a,0,ju*r,ju*r,o.color,1,Math.max(.06,o.value)*Au*r,s*.09)}),n.line!==void 0&&e(`${n.id}:line`,t,0,n.line*Au*r,i*a+1.2,2.1*r,[1,1,1],.45,.14,.3)}}for(let e of this.pieces.values())e.alive||(e.want=0);this.dirty=!0,this.buildTags()}buildTags(){let e=new Set;if(this.tagged.clear(),!this.overlay&&this.tier===0)for(let t of this.fronts){if(t.level!==0||!t.pie.length||!t.bars.length||t.phase===`done`||t.election&&new Date(t.election.date).getTime()>Date.now()+3888e6)continue;e.add(t.id),this.tagged.add(t.election?.country??`USA`);let n=this.tags.get(t.id);if(!n){let e=document.createElement(`div`);e.className=`front-tag`,this.tagBox.append(e),n={el:e,at:new H,h:0,w:0},this.tags.set(t.id,n)}wl(t.lon,t.lat,1,n.at),n.h=Math.max(...t.bars.map(e=>e.value),t.line??0)*Au;let r=t.phase===`live`?`Counting Now`:t.election?zu(t.election.date):``;n.w=Math.max(t.title.length*6.2,r.length*5.2)+6;let i=`<b>${Ru(t.title)}</b><small>${r}</small>`;n.el.innerHTML!==i&&(n.el.innerHTML=i)}for(let[t,n]of this.tags)e.has(t)||(n.el.remove(),this.tags.delete(t))}update(e,t){if(this.unit.value=this.globe.cam.alt*ku,this.tier===2){let e=this.globe.cam.viewAngle();this.enteredAt||=e;let t=e<this.enteredAt*(this.closest?.72:.62);t!==this.closest&&(this.closest=t,this.rebuild())}let n=0,r=this.dirty;for(let[t,i]of this.pieces)i.wait>0?(i.wait-=e,r=!0):i.h.target=i.want,i.h.step(e),i.h.settled||(r=!0),i.glow>0&&(i.glow=Math.max(0,i.glow-e*.9),r=!0),!i.alive&&i.h.value<.02&&i.h.settled?(this.pieces.delete(t),r=!0):n>=Ou||(this.iDir.set([i.dir.x,i.dir.y,i.dir.z],n*3),this.iOff.set([i.across,0,i.lift],n*3),this.iSize.set([i.footprint,i.depth,Math.max(0,i.h.value)],n*3),this.iColor.set([i.color[0],i.color[1],i.color[2],i.alpha],n*4),this.iGlow[n]=i.glow,n++);if(this.geo.instanceCount=n,r){for(let e of this.attrs)e.needsUpdate=!0;this.dirty=!1}this.pies.update(e);let i=[];for(let[e,t]of this.tags){let n=this.style===`stick`,r=this.globe.project(n?this.tmp.copy(t.at).multiplyScalar(1+(t.h+.6)*this.unit.value):t.at);if(r){let a=n?4:this.pies.radiusOf(e)+3,o=r.y-a,s=i.some(e=>Math.abs(e.x-r.x)<(e.w+t.w)/2&&Math.abs(e.y-o)<26);s||i.push({x:r.x,y:o,w:t.w}),t.el.style.transform=`translate3d(${r.x.toFixed(1)}px, ${o.toFixed(1)}px, 0) translate(-50%, -100%)`,t.el.classList.toggle(`on`,!s)}else t.el.classList.remove(`on`)}for(let e of this.ripples){if(!e.active)continue;let n=(t-e.born)/e.life;n>=1?(e.active=!1,e.mesh.visible=!1):e.mesh.material.uniforms.uK.value=Math.max(.02,1-(1-n)**2.4)}}},Vu=60*Cl,Hu=.2,Uu=.2,Wu=.1,Gu=.26,Ku=class{globe;level=0;country=null;region=null;seat=null;lens=`power`;overview=!1;locked=!1;onChange=null;candidateCountry=null;candidateSince=0;candidateRegion=null;candidateRegionSince=0;lastCheck=0;pickBusy=!1;hit={countries:null,admin1:null,uscd:null,uscounty:null};waves=[];center=new H;regionsOfCountry=[];seatsOfState=[];countiesOfState=[];shownRegionsFor=null;shownSeatsFor=null;byCountry=new Map;spotlit=new Set;spotColor=null;painter=null;constructor(e){this.globe=e}indexRegions(){this.globe.layers.admin1?.meta.forEach((e,t)=>{let n=String(e.x?.cc??``);this.byCountry.has(n)||this.byCountry.set(n,[]),this.byCountry.get(n).push(t)})}startWave(e,t,n,r){let i=this.globe.layers[e];if(!i)return;wl(t,n,1,this.center);let a=Math.max(r*.42,.006);this.waves=this.waves.filter(t=>t.mesh!==e);let o=r*1.25+a*1.6,s=new du(0,1.15,1);s.target=o,i.setWave(this.center,0,a),this.waves.push({mesh:e,spring:s,soft:a})}paintCountry(e,t){let n=this.globe.layers.countries,r=n.meta[e],i=G.world.countries[r.k],{color:a,has:o}=Bl(i,this.lens),s=!!i&&i.key===`USA`&&[...G.races.values()].some(e=>e.status===`contested`);n.set(e,a[0],a[1],a[2],o?Hu:.05,s?.5:0,.75,+!!t)}setOverview(e){if(this.overview=e,this.repaint(),e){let e=this.globe.layers.countries,t=this.globe.cam;wl(t.lon,t.lat,1,this.center);let n=new du(0,1.7,1);n.target=Math.PI+.5,e.setWave(this.center,0,.4),this.waves=this.waves.filter(e=>e.mesh!==`countries`),this.waves.push({mesh:`countries`,spring:n,soft:.4})}}setLens(e){this.lens=e,this.painter||(this.overview=e!==`power`),this.repaint()}setPainter(e){if(!this.globe.layers.countries)return;let t=this.painter;if(this.painter=e,this.overview=!!e||this.lens!==`power`,e&&!t&&this.country!==null&&this.commitCountry(null),e){this.level=0;let e=this.globe.cam;wl(e.lon,e.lat,1,this.center)}this.repaint()}setSpotlight(e,t){let n=this.globe.layers.countries;if(!n)return;let r=new Set;for(let t of e??[]){let e=n.byKey.get(t);e!==void 0&&r.add(e)}if(!this.overview)for(let e of this.spotlit)!r.has(e)&&e!==this.country&&n.clear(e);this.spotlit=r,this.spotColor=t??null,this.paintSpotlight()}paintSpotlight(){let e=this.globe.layers.countries;if(e&&!this.overview)for(let t of this.spotlit){if(t===this.country)continue;let n=Bl(G.world.countries[e.meta[t].k],`power`).color,r=this.spotColor?J(this.spotColor):n;e.set(t,r[0],r[1],r[2],Gu,0,.6,0)}}repaint(){let e=this.globe.layers.countries;e&&(this.painter?e.meta.forEach((t,n)=>{let r=this.painter(t.k);r?e.set(n,r.color[0],r.color[1],r.color[2],r.alpha,0,r.lines??.3,0):e.clear(n)}):this.overview?e.meta.forEach((t,n)=>{let{color:r,has:i}=Bl(G.world.countries[t.k],this.lens);e.set(n,r[0],r[1],r[2],i?Hu*.9:.03,0,.32,1)}):(e.meta.forEach((t,n)=>{n!==this.country&&!this.spotlit.has(n)&&e.clear(n)}),this.paintSpotlight()),this.country!==null&&!this.overview&&this.paintCountry(this.country,!0),this.paintRegions(),this.paintSeats())}paintRegions(){let e=this.globe.layers.admin1,t=this.globe.layers.countries;if(!e||!t)return;let n=this.level>=2&&this.country!==null?this.country:null;if(this.shownRegionsFor!==null&&this.shownRegionsFor!==n){for(let t of this.regionsOfCountry)e.clear(t);this.regionsOfCountry=[]}let r=n!==null&&this.shownRegionsFor!==n;if(this.shownRegionsFor=n,n===null)return;let i=t.meta[n];this.regionsOfCountry=this.byCountry.get(i.k)??[];for(let t of this.regionsOfCountry){let n=e.meta[t],r=t===this.region,a,o,s=!1;if(i.k===`USA`){let e=String(n.x?.iso??``).replace(`US-`,``);if(!ll[e])continue;let t=Gl(e);a=t.color,o=t.senate!==`none`,s=t.live}else({color:a,has:o}=Vl(n));let c=this.level===3&&r,l=o?c?.02:r?Uu:Wu:0;e.set(t,a[0],a[1],a[2],l,s&&r?.45:0,r?.8:.34,1)}r&&this.startWave(`admin1`,this.globe.cam.lon,this.globe.cam.lat,Math.max(i.r*Cl,this.globe.cam.viewAngle()*1.3)),this.paintCountryBehindRegions()}paintCountryBehindRegions(){let e=this.globe.layers.countries;if(!e||this.country===null||this.overview)return;let{color:t,has:n}=Bl(G.world.countries[e.meta[this.country].k],this.lens),r=this.level>=2?.05:n?Hu:.05;e.set(this.country,t[0],t[1],t[2],r,0,this.level>=2?.5:.75,1)}paintSeats(){let{uscd:e,uscounty:t,admin1:n}=this.globe.layers;if(!e||!t||!n)return;let r=this.level===3&&this.region!==null?String(n.meta[this.region].x?.iso??``).replace(`US-`,``):null;if(this.shownSeatsFor!==null&&this.shownSeatsFor!==r){for(let t of this.seatsOfState)e.clear(t);for(let e of this.countiesOfState)t.clear(e);this.seatsOfState=[],this.countiesOfState=[]}let i=r!==null&&this.shownSeatsFor!==r;if(this.shownSeatsFor=r,r){i&&(e.meta.forEach((e,t)=>{e.x?.state===r&&this.seatsOfState.push(t)}),t.meta.forEach((e,t)=>{e.x?.state===r&&this.countiesOfState.push(t)}));for(let t of this.seatsOfState){let n=ql(G.races.get(`H:${e.meta[t].k}`)),r=t===this.seat;e.set(t,n.color[0],n.color[1],n.color[2],r?Math.min(.42,n.alpha*1.45):n.alpha,n.live?.6:0,r?.9:.55,1)}for(let e of this.countiesOfState)t.set(e,0,0,0,0,0,.5,1);if(i&&this.region!==null){let e=n.meta[this.region];this.startWave(`uscd`,e.c[0],e.c[1],Math.max(e.r*Cl*1.2,.03)),this.startWave(`uscounty`,e.c[0],e.c[1],Math.max(e.r*Cl*1.2,.03))}}}commitCountry(e){if(e===this.country)return;let t=this.globe.layers.countries;if(this.country!==null&&!this.overview&&t.clear(this.country),this.country=e,this.region=null,this.seat=null,this.candidateRegion=null,e!==null&&!this.overview){let n=t.meta[e];this.paintCountry(e,!0),this.startWave(`countries`,n.c[0],n.c[1],Math.max(n.r*Cl,.03))}this.paintRegions(),this.paintSeats(),this.emit()}emit(){this.onChange?.({level:this.level,country:this.country,region:this.region,seat:this.seat})}focusCountryByKey(e){let t=this.globe.layers.countries?.byKey.get(e);t!==void 0&&this.commitCountry(t)}update(e,t){for(let t of this.waves)t.spring.step(e),this.globe.layers[t.mesh]?.setWaveRadius(t.spring.value);this.waves=this.waves.filter(e=>!e.spring.settled);let n=performance.now();if(n-this.lastCheck<120)return;this.lastCheck=n,this.pickBusy||(this.pickBusy=!0,this.globe.pickAll(t.x,t.y).then(e=>{this.hit=e}).catch(()=>void 0).finally(()=>{this.pickBusy=!1}));let r=this.globe.cam,i=r.viewAngle(),a=r.isDragging||r.isFlying||r.speed>i*.9,o=this.globe.layers.countries,s=this.globe.layers.admin1,c=this.level;if(c=i>Vu*(this.level===0?1:1.12)?0:Math.max(this.level,1),c===0){!this.locked&&this.country!==null&&this.commitCountry(null),this.level!==0&&!this.locked&&(this.level=0,this.region=null,this.seat=null,this.paintRegions(),this.paintSeats(),this.emit());return}if(a)return;let l=this.hit.countries;if(!this.locked){let e=l===null?null:o.meta[l],t=e&&e.r*Cl>i*.05?l:null;t!==this.candidateCountry&&(this.candidateCountry=t,this.candidateSince=n),t!==this.country&&n-this.candidateSince>170&&this.commitCountry(t)}if(this.country===null){this.level!==1&&(this.level=1,this.emit());return}let u=o.meta[this.country],d=u.r*Cl,f=Math.min(Math.max(d*.8,2.4*Cl),15*Cl),p=!!s&&i<f*(this.level>=2?1.12:1)&&(this.byCountry.get(u.k)?.length??0)>1,m=p?2:1;if(p){let e=this.hit.admin1,t=e!==null&&s.meta[e].x?.cc===u.k?e:null;if(t!==this.candidateRegion&&(this.candidateRegion=t,this.candidateRegionSince=n),t!==this.region&&n-this.candidateRegionSince>150&&(this.region=t,this.seat=null,this.paintRegions(),this.emit()),u.k===`USA`&&this.region!==null){let e=s.meta[this.region];if(i<Math.min(Math.max(e.r*Cl*.75,1.1*Cl),4.2*Cl)*(this.level===3?1.12:1)){m=3;let t=this.globe.layers.uscd,n=this.hit.uscd,r=t&&n!==null&&t.meta[n].x?.state===String(e.x?.iso??``).replace(`US-`,``)?n:null;r!==this.seat&&(this.seat=r,this.level===3&&(this.paintSeats(),this.emit()))}}}m!==this.level&&(this.level=m,m<2&&(this.region=null),m<3&&(this.seat=null),this.paintRegions(),this.paintSeats(),this.paintCountryBehindRegions(),this.emit())}},qu=`pv-lang`,Ju={en:`English`,es:`Español`},Yu=[`aria-label`,`title`,`placeholder`,`data-tip`,`alt`];function Xu(){try{let e=localStorage.getItem(qu);if(e&&Ju[e])return e}catch{}return`en`}function Zu(e){try{localStorage.setItem(qu,e)}catch{}location.reload()}function Qu(){try{if(localStorage.getItem(qu))return null}catch{return null}let e=navigator.language?.slice(0,2);return e&&e!==`en`&&Ju[e]?e:null}async function $u(e){let t=Xu();if(document.documentElement.lang=t,t===`en`)return;let n=await fetch(p(`data/i18n/${t}.json`)).then(e=>e.json()).catch(()=>null);if(!n)return;let r=new Map(Object.entries(n.strings)),i=n.patterns.map(([e,t])=>[new RegExp(e),t]),a=new Set,o=()=>{if(a.size)return;let n=new Intl.DisplayNames([t],{type:`region`});for(let t of e())if(t.iso2&&!r.has(t.name))try{let e=n.of(t.iso2.toUpperCase());e&&(r.set(t.name,e),a.add(t.name))}catch{}},s=e=>{let t=r.get(e);if(t!==void 0)return t;for(let[t,n]of i)if(t.test(e))return e.replace(t,(e,...t)=>n.replace(/\$(\d)/g,(e,n)=>{let i=t[Number(n)-1];return r.get(i)??i}));return null},c=e=>{let t=e.nodeValue??``,n=t.trim();if(!n||n.length>900)return;let r=s(n);r!==null&&r!==n&&(e.nodeValue=t.replace(n,r))},l=e=>{for(let t of Yu){let n=e.getAttribute(t);if(!n)continue;let r=s(n.trim());r!==null&&r!==n&&e.setAttribute(t,r)}},u=e=>{if(e.nodeType===Node.TEXT_NODE){c(e);return}if(e.nodeType!==Node.ELEMENT_NODE)return;let t=e;if(t.tagName!==`SCRIPT`&&t.tagName!==`STYLE`){l(t);for(let e of t.childNodes)u(e)}};o(),u(document.body),new MutationObserver(e=>{o();for(let t of e)if(t.type===`characterData`)c(t.target);else if(t.type===`attributes`)l(t.target);else for(let e of t.addedNodes)u(e)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:Yu})}var ed=`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`,td=[];function nd(e){let t=[];for(let n=e;n.parentElement;n=n.parentElement)for(let e of n.parentElement.children)e===n||!(e instanceof HTMLElement)||e.inert||e.hasAttribute(`aria-live`)||e.tagName===`SCRIPT`||(e.inert=!0,t.push(e));return t}var rd=e=>e.getClientRects().length>0&&getComputedStyle(e).visibility!==`hidden`,id=e=>[...e.querySelectorAll(ed)].filter(rd);function ad(e,t=!1){if(td.some(t=>t.el===e))return;let n=document.activeElement;td.push({el:e,back:n,shut:t?nd(e):[]}),e.tabIndex=-1,e.style.transitionProperty=`opacity, transform`,e.style.visibility=`visible`;let r=()=>{td.some(t=>t.el===e)&&!e.contains(document.activeElement)&&e.focus({preventScroll:!0})};r(),setTimeout(r,60),setTimeout(r,320)}var od=()=>td.length>0;function sd(e){let t=td.findIndex(t=>t.el===e);if(t<0)return;let[{back:n,shut:r}]=td.splice(t,1);for(let e of r)e.inert=!1;e.style.transitionProperty=``,e.style.visibility=``,n&&document.contains(n)&&rd(n)?n.focus({preventScroll:!0}):document.getElementById(`globe`)?.focus({preventScroll:!0})}window.addEventListener(`keydown`,e=>{if(e.key!==`Tab`)return;let t=td[td.length-1];if(!t)return;let n=id(t.el);if(!n.length){e.preventDefault(),t.el.focus();return}let r=n[0],i=n[n.length-1],a=document.activeElement;!t.el.contains(a)||a===t.el?(e.preventDefault(),(e.shiftKey?i:r).focus()):e.shiftKey&&a===r?(e.preventDefault(),i.focus()):!e.shiftKey&&a===i&&(e.preventDefault(),r.focus())});function cd(e){let t=document.getElementById(`announcer`);t&&(t.textContent=e)}var ld=`pv-paused`;function ud(){try{let e=localStorage.getItem(ld);if(e!==null)return e===`1`}catch{}return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}var dd={paused:ud(),set(e){this.paused=e;try{localStorage.setItem(ld,e?`1`:`0`)}catch{}this.show(),cd(e?`Movement stopped. Nothing will move unless you move it.`:`Movement started again.`)},show(){let e=this.paused;document.body.classList.toggle(`paused`,e);let t=document.getElementById(`pause-motion`);t&&(t.setAttribute(`aria-pressed`,String(e)),t.setAttribute(`aria-label`,e?`Start Movement Again`:`Stop All Movement`),t.title=e?`Start Movement Again`:`Stop All Movement`,t.classList.toggle(`on`,e))}},fd=`<svg viewBox="0 0 10 14" aria-hidden="true"><circle cx="5" cy="3" r="2.600"/><path d="M1 14c0-5 1.500-7.500 4-7.500s4 2.500 4 7.500z"/></svg>`;function pd(){return`<div class="about-crowd" aria-hidden="true">${Array.from({length:96},(e,t)=>`<i style="--d:${t*37%96*55}ms">${fd}</i>`).join(``)}</div>`}var md=class{openMapGuide;openMethods;open=!1;el=document.createElement(`div`);index=0;constructor(e,t){this.openMapGuide=e,this.openMethods=t,this.el.id=`about`,this.el.setAttribute(`role`,`dialog`),this.el.setAttribute(`aria-modal`,`true`),this.el.setAttribute(`aria-label`,`About Politiview`),document.body.append(this.el),this.el.addEventListener(`click`,e=>{let t=e.target;if(t===this.el||t.closest(`[data-about-close]`)){this.close();return}t.closest(`[data-about-next]`)?this.go(this.index+1):t.closest(`[data-about-back]`)?this.go(this.index-1):t.closest(`[data-map-guide]`)?(this.close(),this.openMapGuide()):t.closest(`[data-about-methods]`)&&(this.close(),this.openMethods());let n=t.closest(`[data-about-page]`);n&&this.go(Number(n.dataset.aboutPage))}),window.addEventListener(`keydown`,e=>{this.open&&(e.key===`Escape`&&this.close(),e.key===`ArrowRight`&&this.go(this.index+1),e.key===`ArrowLeft`&&this.go(this.index-1))})}pages(){let e=G.news.find(e=>e.id===`race-closest`);return[`<small class="cu-kicker">Why Politiview Exists</small>
       <h2>It's Hard To Understand Each Other</h2>
       <p>Learning how another country works is hard, and that difficulty keeps us apart. Most of us never find out how other people came to be who they are, or what they're really arguing about.</p>
       <p>Politiview puts the world's politics on one living globe, so anyone can see who holds power, how people seem to feel, and how each country got here, without needing to know where to start.</p>`,`<small class="cu-kicker">Why Your Vote Matters</small>
       <h2>One Vote Rarely Decides Anything</h2>
       ${pd()}
       <p>That's just true. Most elections aren't won by a single vote.</p>
       <p><b>The belief is what counts.</b> Every election is decided by millions of people who each believed their vote mattered. If they stopped believing it, they'd stop showing up, and the few who still did would choose for everyone else. A vote has power because enough of us act as if it does.</p>
       ${e?`<p class="about-live"><i></i><span><b>Right Now:</b> ${i(e.title)}</span></p>`:``}`,`<small class="cu-kicker">Make Your Voice Heard</small>
       <h2>We'll Never Tell You Who To Vote For</h2>
       <p>Politiview is a launchpad. It makes the world's politics easy to reach for everyone, so you can start learning from anywhere.</p>
       <p>We side with no party. We only want more people to be active citizens of their countries.</p>
       <a class="vote-link" href="https://vote.gov" target="_blank" rel="noreferrer">Register To Vote In The US &#8250;</a>
       <p class="about-small">Anywhere else, your national election commission can tell you how.</p>
       <h3>About This Project</h3>
       <p class="about-small">A personal project by Ken, built with help from an AI called Claude. It updates itself from public data. News summaries are written by a small AI model, some explanations aren't independently fact-checked, and the voices on the map are imagined, so check anything important.</p>
       <button class="about-guide" data-about-methods>How We Know What We Show &#8250;</button>
       <button class="about-guide" data-map-guide>Reading The Map And Settings &#8250;</button>
       <a class="about-guide" href="${p(`text/index.html`)}">The Plain Text Version &#8250;</a>
       ${Xu()===`en`?`<button class="about-guide" data-lang="es" lang="es">Ver En Español (Beta: Menús Y Botones) &#8250;</button>`:`<button class="about-guide" data-lang="en" lang="en">Read In English &#8250;</button><p class="about-small">La traducción la hizo una IA y ninguna persona la ha revisado todavía. Las explicaciones de cada país, las historias y las noticias siguen en inglés por ahora.</p>`}`]}show(){this.open=!0,this.el.classList.add(`open`),this.go(0),ad(this.el,!0)}close(){this.open=!1,this.el.classList.remove(`open`),sd(this.el)}go(e){let t=this.pages();if(e>=t.length){this.close();return}this.index=Math.max(0,e);let n=this.index===t.length-1;this.el.innerHTML=`<div class="about-inner">
      <button class="cu-close" data-about-close aria-label="Close">&#215;</button>
      <div class="about-page">${t[this.index]}</div>
      <nav class="about-nav">
        <span class="tut-dots">${t.map((e,n)=>`<button data-about-page="${n}" class="${n===this.index?`on`:``}" aria-label="Page ${n+1} Of ${t.length}"></button>`).join(``)}</span>
        ${this.index?`<button data-about-back>Back</button>`:``}
        <button data-about-next class="go">${n?`Done`:`Next`}</button>
      </nav>
    </div>`}},hd=`https://github.com/KenLinz/politiview/issues/new`,gd=[[`Who Runs Each Country`,`Wikidata, checked against Wikipedia's list of current leaders`,`https://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government`],[`Left Or Right`,`Wikidata's records of each party, which can be rough`,`https://www.wikidata.org/`],[`Election Dates And Results Abroad`,`Wikipedia's election articles`,`https://en.wikipedia.org/wiki/Lists_of_elections`],[`US Races`,`Wikipedia's race tables, and official counts from California, Minnesota and North Carolina`,`https://en.wikipedia.org/wiki/United_States_elections`],[`US Members Of Congress`,`The congress-legislators project`,`https://github.com/unitedstates/congress-legislators`],[`Past US Votes By County`,`Public county results, 2008 to 2024`,`https://github.com/tonmcg/US_County_Level_Election_Results_08-24`],[`How Democratic A Country Is`,`V-Dem, Freedom House and Bertelsmann, all through Our World in Data`,`https://ourworldindata.org/democracy`],[`Turnout And Women In Parliament`,`V-Dem and the Inter-Parliamentary Union, through Our World in Data`,`https://ourworldindata.org/grapher/seats-held-by-women-in-national-parliaments`],[`A Second Opinion On Parliaments`,`The Inter-Parliamentary Union's Parline, used under its non-commercial license`,`https://data.ipu.org/about`],[`How People Rate Their Lives And Government`,`The World Happiness Report and the Wellcome Global Monitor, through Our World in Data`,`https://ourworldindata.org/happiness-and-life-satisfaction`],[`News`,`More than 30 news outlets' public feeds, Wikipedia's Current Events and GDELT`,`https://www.gdeltproject.org/`],[`What's Trending`,`Google Trends`,`https://trends.google.com/trending`],[`Maps And Pictures`,`Natural Earth, the US Census, NASA, EOX and Wikimedia Commons`,`https://www.naturalearthdata.com/`]],_d=[`No independent person or group has audited this site yet. Our error numbers come from our own tests.`,`No party has confirmed what we say about it. Party summaries come from Wikipedia, sometimes rewritten by a small AI.`,`We haven't tested the site with real people yet, including kids, newcomers or people who use screen readers.`,`No person reads the AI's news summaries before they appear.`,`Country explanations were written by AI. Each has been compared with Wikipedia by AI, but not fully checked by a person.`,`The Mood is our own estimate, not a poll. The voices on the map are imagined and don't quote anyone.`,`Most US race results rest on Wikipedia's tables alone until a state count or two news outlets back them up.`],vd=class{open=!1;el=document.createElement(`div`);files={};asked=!1;constructor(){this.el.id=`methods`,this.el.setAttribute(`role`,`dialog`),this.el.setAttribute(`aria-modal`,`true`),this.el.setAttribute(`aria-label`,`How We Know`),document.body.append(this.el),this.el.addEventListener(`click`,e=>{let t=e.target;(t===this.el||t.closest(`[data-methods-close]`))&&this.close()}),window.addEventListener(`keydown`,e=>{this.open&&e.key===`Escape`&&this.close()}),G.on(`races`,()=>{this.open&&this.render()})}show(){if(this.open=!0,this.el.classList.add(`open`),this.render(),ad(this.el,!0),this.asked)return;this.asked=!0;let e=async e=>{try{let t=await fetch(p(e));return t.ok?await t.json():void 0}catch{return}};Promise.all([e(`data/trust/backtest.json`),e(`data/trust/claims.json`),e(`data/corrections.json`),e(`data/trust/audit.json`),h(`reconcile.json`).then(t=>t.ok?t.json():e(`data/trust/reconcile.json`)).catch(()=>e(`data/trust/reconcile.json`))]).then(([e,t,n,r,i])=>{this.files={backtest:e,claims:t,corrections:n?.entries,audit:r,disagree:i},this.open&&this.render()})}close(){this.open&&(this.open=!1,this.el.classList.remove(`open`),sd(this.el))}tile(e,t,n=`plain`){return`<div class="mt-tile ${n}"><b>${i(e)}</b><span>${i(t)}</span></div>`}liveNow(){let e=G.trust,t=[...G.races.values()].filter(e=>e.status===`called`),n=e=>t.filter(t=>t.basis===e).length,r=n(`official`),a=n(`outlets`),o=n(`wikipedia`),s=e=>`${t.length?(e/t.length*100).toFixed(1):0}%`,c=e?.ai,u=c?c.invented+c.verdicts+c.unbacked+c.unchecked:0;return`<section><h3>Right Now</h3>
      <div class="mt-tiles">
        ${e?.checks.total?this.tile(`${e.checks.passed.toLocaleString(`en-US`)} Of ${e.checks.total.toLocaleString(`en-US`)}`,`Automatic Checks Passing, Like A Seat Can't Flip To The Party Already Holding It`,e.checks.failures.length?`warn`:`good`):``}
        ${c?.written?this.tile(`${c.shown} Of ${c.written}`,`AI Summaries Were Good Enough To Show`,`plain`):``}
        ${c?.written?this.tile(String(u),`Were Stopped Since ${l(c.since)}. Any Others Came Back Unreadable`,`good`):``}
        ${c?.trimmed?this.tile(String(c.trimmed),`AI Summaries Shown With Unbacked Sentences Removed`,`plain`):``}
      </div>
      ${e?.checks.failures.length?`<ul class="mt-fails">${e.checks.failures.slice(0,5).map(e=>`<li>${i(e.what)}</li>`).join(``)}</ul>`:``}
      ${t.length?`<h4>What Backs Up This Election's US Results</h4>
        <div class="stack mt-bar" role="img" aria-label="${r} results agree with a state count, ${a} are confirmed by news outlets, and ${o} come from Wikipedia alone">
          <i style="flex:${r||.001};background:#1fa3ae"></i><i style="flex:${a||.001};background:#6f9a2a"></i><i style="flex:${o||.001};background:#e8b339"></i></div>
        <ul class="mt-key">
          <li><i style="background:#1fa3ae"></i><b>${r}</b> Agree With A State's Own Count</li>
          <li><i style="background:#6f9a2a"></i><b>${a}</b> Confirmed By Two Or More News Outlets</li>
          <li><i style="background:#e8b339"></i><b>${o}</b> (${s(o)}) From Wikipedia Alone, Not Confirmed Here Yet</li>
        </ul>
        <p class="mt-small">Why use Wikipedia at all? Its volunteer editors usually record results within minutes, following news reports, and anyone can see their sources. Most US House races never make a headline we can check against, so we show them and say what they rest on.</p>`:``}
    </section>`}tests(){let{backtest:e,claims:t,audit:n,disagree:r}=this.files,a=[];if(e){let t=[...new Set(e.checkpoints.map(e=>e.year))].sort((e,t)=>t-e).map(t=>{let n=e.checkpoints.filter(e=>e.year===t),r=new Set(n.flatMap(e=>e.wrong.map(e=>e.split(`: page`)[0])));return`<li><b>${t}:</b> ${n[n.length-1].called} races recorded, and ${r.size===0?`no winner shown wrongly`:`${r.size} shown wrongly for a while (${[...r].map(e=>i(e.replace(/^[A-Z]:/,``))).join(`, `)})`}.</li>`}).join(``);a.push(`<h4>Would We Have Got Past Elections Right?</h4>
        <p>We rewound Wikipedia's tables to six moments in the two weeks after the last two US elections, read them the way this site does, and compared each winner with who was really sworn in. That list comes from a separate project.</p>
        <ul class="mt-list">${t}</ul>
        <p class="mt-small">This is why a winner only Wikipedia names is labeled as not confirmed. Editors can get one wrong, and it can stay wrong for days. It stays on the map with the word Reported, and doesn't become a news story until something else backs it up.</p>`)}t&&a.push(`<h4>Does The AI's Checker Work?</h4>
        <p>Each sentence the AI writes goes back to it as a question: do the sources really say this? We tested it on sentences we'd written, half of them wrong on purpose. It stopped every wrong one in ${t.badCaught} tries${t.badLetThrough?`, apart from ${t.badLetThrough}`:``}. It's overly careful though: of ${t.goodPassed+t.goodStopped} tries at a true sentence, it wrongly stopped ${t.goodStopped}. When that happens, you see the outlet's own words instead.${t.unreadable?` ${t.unreadable} answers came back unreadable, which never counts as passing.`:``}</p>
        <p class="mt-small">We wrote those tests ourselves, starting from real mistakes the site has made, so this is a first check, not proof.</p>`);let o=G.world?.leaderCheck;return o?.checked&&a.push(`<h4>Is That Really Who's In Charge?</h4>
        <p>Every time the data updates, we compare ${o.checked} top jobs with a second list kept up to date by Wikipedia's editors. Last time, ${o.replaced.length} didn't match, and we used the second list for those.${o.partiesChecked?` We also compare ${o.partiesChecked} leaders' parties with their own Wikipedia pages, which corrected or filled in ${o.parties?.length??0} of them.`:``} These sources are all written by volunteers, so this catches most old information, not all of it.</p>`),r&&a.push(`<h4>Do Our Numbers Match Other People's?</h4>
        <p>We compared ${r.checked.toLocaleString(`en-US`)} figures with ${i(r.source)}. ${r.differ} differ by more than a small margin. Differences can mean we're wrong, they are, or the two count different things.</p>`),n&&a.push(`<h4>A Second Reader</h4>
        <p>${i(n.reviewer)} checked ${n.claims} randomly chosen claims against outside sources. <b>${n.held}</b> held up, <b>${n.wrong}</b> were wrong, <b>${n.misleading??0}</b> were misleading and <b>${n.unclear}</b> couldn't be settled.</p>${n.note?`<p class="mt-small">${i(n.note)}</p>`:``}`),a.length?`<section><h3>How We Test Ourselves</h3>${a.join(``)}</section>`:``}render(){let e=this.el.querySelector(`.mt-inner`)?.scrollTop??0,t=this.files.corrections??[];this.el.innerHTML=`<div class="mt-inner">
      <button class="cu-close" data-methods-close aria-label="Close">&#215;</button>
      <small class="cu-kicker">How We Know</small>
      <h2>Show Your Working</h2>
      <p>Politiview gathers public information automatically. A small AI explains some of it. Nobody here decides what you should think, and we don't always get it right, so this page shows how it all works.</p>

      ${this.liveNow()}

      <section><h3>How A US Race Gets A Winner Here</h3>
        <ol class="mt-steps">
          <li><b>Wikipedia's editors record a result.</b> It waits 20 minutes before we show it, because bad edits are usually undone quickly.</li>
          <li><b>We label it "Wikipedia Only".</b> It says so right on the card, until something else backs it up.</li>
          <li><b>A state's own count or two news outlets agree.</b> The label changes to say which. If a nearly finished official count has someone else ahead, we show no winner at all.</li>
          <li><b>Certification comes weeks later.</b> Only that is truly final, and every result here says so.</li>
        </ol>
      </section>

      <section><h3>What The AI Does And Doesn't Do</h3>
        <ul class="mt-list">
          <li>It only rewrites what news outlets said, in plain words, on a small computer we run ourselves.</li>
          <li>It may not say who's right, who benefits, or what the news proves.</li>
          <li>Every name and number must appear in the sources, and every sentence must pass a second check against them.</li>
          <li>Reports that bundle several stories together are never summarized, because that's how stories get mixed up.</li>
          <li>Anything that fails isn't shown. You see the outlet's own words instead.</li>
          <li>It never writes race results. Those are written from the record, by rules.</li>
        </ul>
      </section>

      ${this.tests()}

      <section><h3>Where Everything Comes From</h3>
        <dl class="mt-sources">${gd.map(([e,t,n])=>`<dt>${i(e)}</dt><dd><a href="${i(n)}" target="_blank" rel="noreferrer">${i(t)} &#8599;</a></dd>`).join(``)}</dl>
      </section>

      <section class="mt-notyet"><h3>What We Haven't Done Yet</h3>
        <ul class="mt-list">${_d.map(e=>`<li>${i(e)}</li>`).join(``)}</ul>
      </section>

      <section><h3>Mistakes We've Made</h3>
        ${t.length?`<div class="mt-log">${t.map(e=>`<article><small>${i(l(e.date))}</small><p><b>What We Got Wrong:</b> ${i(e.wrong)}</p><p><b>What's Right:</b> ${i(e.right)}</p><p class="mt-small">${i(e.found)}</p></article>`).join(``)}</div>`:`<p class="mt-small">Loading the log.</p>`}
      </section>

      <section><h3>Your Privacy</h3>
        <p>There are no accounts, ads, cookies or trackers here, and we don't collect anything about you. Your browser remembers a few settings on your own device, like whether movement is stopped. To show the map and pictures, your browser asks GitHub, NASA, EOX, Wikimedia and news sites for files, and those sites can see that request as they would for any website.</p>
      </section>

      <section class="mt-report"><h3>Spot A Mistake?</h3>
        <p>Please tell us. Every mistake we confirm goes in the log above.</p>
        <a class="vote-link" href="${hd}" target="_blank" rel="noreferrer">Report A Mistake &#8250;</a>
        <p class="mt-small">This opens a public page on GitHub, which needs a free GitHub account. Please don't include personal details.</p>
        <p class="mt-small">Politiview is a personal project by Ken, built with Claude Code. It takes no money and sides with no party.${G.version?.date?` Last built ${i(c(G.version.date))}.`:``}</p>
      </section>
    </div>`;let n=this.el.querySelector(`.mt-inner`);n&&(n.scrollTop=e)}},yd=new Set([`country`,`admin1`,`state`,`seat`,`county`,`race`,`election`]);function bd(e){let[t,n]=e.replace(/^#\/?/,``).split(`/`).filter(Boolean).map(e=>{try{return decodeURIComponent(e)}catch{return e}});return t?yd.has(t)&&n?{name:`select`,spec:`${t}:${n}`}:t===`news`?{name:`news`,id:n}:t===`methods`?{name:`methods`}:t===`about`?{name:`about`}:t===`time`?{name:`time`}:t===`dictionary`?{name:`dictionary`,word:n}:t===`learn`?{name:`learn`,key:n}:null:null}var xd=(e,t)=>`${e}/${encodeURIComponent(t)}`;function Sd(e){let t=e?`#/${e}`:``;(location.hash||``)!==t&&history.replaceState(null,``,t||`${location.pathname}${location.search}`)}var Cd=[{key:`USA`,hook:`Built To Slow Power Down`,intro:`Its elections, money and military ripple through almost every other country, so its politics is never only its own.`,story:[{year:`1776`,title:`Independence`,text:`Thirteen British colonies declare independence, arguing that a government needs the consent of the people it governs.`,place:`Philadelphia`,at:[-75.16,39.95]},{year:`1787`,title:`The Constitution`,text:`Its authors split power between a president, Congress and the courts, and between the states and the center, so that no one part could grow too strong.`,place:`Philadelphia`,at:[-75.16,39.95]},{year:`1865`,title:`The Civil War Ends`,text:`Four years of war over slavery and secession end, and slavery is abolished. Equal rights in practice take another century.`,place:`Appomattox`,at:[-78.8,37.38]},{year:`1945`,title:`A Superpower`,text:`After the Second World War, the US helps build the United Nations and NATO, and its economy and military come to shape much of the world.`,place:`San Francisco`,at:[-122.42,37.77]},{year:`1965`,title:`The Voting Rights Act`,text:`After years of protest, the law finally protects Black Americans' right to vote. Women had won the vote nationally in 1920.`,place:`Selma`,at:[-87.02,32.41]}],power:`Voters choose Congress directly and the president through the Electoral College. Each can block the other, and the courts can overrule both.`,lens:[{title:`Gridlock Is Partly The Design`,text:`A law needs the House, the Senate and the president, and the courts can still strike it down. It's slow on purpose.`},{title:`States Run A Lot`,text:`States run their own elections and write many of their own laws, so the rules change when you cross a state line.`},{title:`It Sees Itself As A Model`,text:`Many Americans see their country as a champion of democracy and free markets. Many people abroad see its wars and its reach very differently.`}],remember:`A US election can change trade, aid and alliances for everyone, and it's often decided by a small number of votes in a few places.`},{key:`CHN`,hook:`One Party, 1.4 Billion People`,intro:`The world's second-largest economy and the biggest trading partner of many countries, run by a single party with no contested national vote.`,story:[{year:`221 BCE`,title:`The First Empire`,text:`The Qin dynasty unifies warring states. For two thousand years dynasties rise and fall, but the idea of one China under one ruler lasts.`,place:`Xi'an`,at:[108.95,34.27]},{year:`1839`,title:`A Century Of Humiliation`,text:`Defeat in the Opium Wars begins a century of unequal treaties and invasions. China's leaders still use that phrase today.`,place:`Guangzhou`,at:[113.26,23.13]},{year:`1949`,title:`The People's Republic`,text:`The Communist Party under Mao Zedong wins a civil war. The defeated Nationalists retreat to Taiwan.`,place:`Beijing`,at:[116.39,39.91]},{year:`1978`,title:`Opening Up`,text:`Deng Xiaoping's market reforms begin one of history's biggest economic booms, lifting hundreds of millions out of poverty. The party keeps sole power.`,place:`Shenzhen`,at:[114.06,22.54]},{year:`1989`,title:`Tiananmen Square`,text:`The army crushes student-led protests for reform in Beijing. The subject is still censored in China.`,place:`Beijing`,at:[116.39,39.91]}],power:`The Communist Party chooses who holds every major office. The real top job is the party's General Secretary, which isn't a post voters can fill.`,lens:[{title:`Stability Comes First`,text:`After a century of war and turmoil, order is a deeply felt priority, and the party ties its right to rule to growth and security.`},{title:`Taiwan`,text:`Beijing claims Taiwan as part of China and hasn't ruled out force. Taiwan governs itself, with its own elections.`},{title:`Rights Are Contested`,text:`The press, religion and dissent are tightly controlled. Rights groups and many governments criticize its treatment of Uyghurs and of Hong Kong. Beijing rejects those criticisms.`}],remember:`A government and its people aren't the same thing. With no free vote, nobody outside can really know how 1.4 billion people feel.`},{key:`IND`,hook:`The World's Biggest Vote`,intro:`The most populous country on Earth, with nearly a billion registered voters, and a rising power that avoids picking sides.`,story:[{year:`1757`,title:`British Rule Begins`,text:`The East India Company wins at Plassey and gradually takes control. The British Crown rules directly from 1858.`,place:`Plassey`,at:[88.25,23.8]},{year:`1947`,title:`Independence And Partition`,text:`A long movement, including Gandhi's non-violent campaigns, wins independence. Partition into India and Pakistan uproots millions, and huge numbers die.`,place:`Delhi`,at:[77.21,28.61]},{year:`1950`,title:`A Constitution For Everyone`,text:`Led by B. R. Ambedkar, its drafters give every adult the vote from the start, even though most people couldn't yet read.`,place:`New Delhi`,at:[77.21,28.61]},{year:`1975`,title:`The Emergency`,text:`Prime Minister Indira Gandhi suspends civil liberties for 21 months. When elections return in 1977, voters throw her out.`,place:`Delhi`,at:[77.21,28.61]},{year:`1991`,title:`Opening Up`,text:`A financial crisis pushes India to open its economy, starting decades of fast growth.`,place:`Mumbai`,at:[72.88,19.08]}],power:`Voters elect the Lok Sabha, whose majority chooses the prime minister, who runs the country. States also have their own elected governments.`,lens:[{title:`Enormous Difference`,text:`Its constitution recognizes 22 languages, and it has huge communities of many religions and castes. Politics often turns on who belongs and who gets heard.`},{title:`Friends On All Sides`,text:`Since the Cold War, India has tried not to choose camps, buying Russian arms while growing closer to the US.`},{title:`Hard Borders`,text:`It has fought wars with both Pakistan and China, and Kashmir and parts of the Chinese border remain disputed.`}],remember:`When India votes, more people take part than in any other election on Earth, and it takes weeks to finish.`},{key:`RUS`,hook:`The Largest Country, With A Long Memory Of Invasion`,intro:`It holds the world's largest nuclear arsenal, and its full-scale invasion of Ukraine in 2022 reshaped security across Europe.`,story:[{year:`1547`,title:`The First Tsar`,text:`Ivan IV is crowned tsar, and over the centuries Moscow's rule spreads across Eurasia to the Pacific.`,place:`Moscow`,at:[37.62,55.75]},{year:`1917`,title:`Revolution`,text:`The tsar falls and the Bolsheviks seize power, creating the Soviet Union, a one-party state.`,place:`St Petersburg`,at:[30.31,59.94]},{year:`1945`,title:`Victory At A Terrible Cost`,text:`The Soviet Union loses about 27 million people defeating Nazi Germany. That sacrifice is still central to how Russians see themselves.`,place:`Volgograd`,at:[44.52,48.72]},{year:`1991`,title:`The Soviet Union Collapses`,text:`It breaks into 15 countries. The 1990s bring new freedoms along with economic collapse and lawlessness.`,place:`Moscow`,at:[37.62,55.75]},{year:`2022`,title:`War In Ukraine`,text:`After annexing Crimea in 2014, Russia launches a full-scale invasion of Ukraine. Most countries at the UN vote to condemn it.`,place:`Kyiv`,at:[30.52,50.45]}],power:`Voters elect a president and a parliament, but researchers say real power sits with the president, and serious challengers rarely get the chance to run.`,lens:[{title:`Security Through Distance`,text:`Invasions across open plains, by Napoleon and Hitler, left a deep belief in buffer zones. Neighbors like Ukraine, Poland and the Baltic states see that belief as a threat to their independence.`},{title:`The Memory Of The 1990s`,text:`Many remember those years as poverty and chaos. The government points to them to justify a strong hand.`},{title:`Votes Without A Real Contest`,text:`Elections are held, but leading opponents have been barred, jailed or driven abroad, and independent media has been shut down.`}],remember:`A government and the 140 million people it governs aren't the same thing. Many Russians have little safe way to say what they think.`},{key:`GBR`,hook:`A Democracy With No Single Written Constitution`,intro:`A former empire with nuclear weapons and a permanent UN Security Council seat, whose way of running a parliament was copied around the world.`,story:[{year:`1215`,title:`Magna Carta`,text:`Rebel barons force King John to accept that even a king is bound by the law.`,place:`Runnymede`,at:[-.56,51.44]},{year:`1689`,title:`Parliament Over The Crown`,text:`After a revolution, the Bill of Rights makes Parliament stronger than the monarch.`,place:`Westminster`,at:[-.12,51.5]},{year:`1920s`,title:`The Empire At Its Height`,text:`Britain rules about a quarter of the world's people and land. Many borders, languages and laws still carry that mark.`,place:`London`,at:[-.12,51.5]},{year:`1947`,title:`The Empire Ends`,text:`Starting with India and Pakistan, most colonies win independence over the next few decades, often after hard struggles.`,place:`Delhi`,at:[77.21,28.61]},{year:`2016`,title:`Brexit`,text:`In a referendum, 52% vote to leave the European Union, and the country is still working out what that means.`,place:`London`,at:[-.12,51.5]}],power:`Voters elect MPs, and whoever leads the majority in the Commons becomes prime minister. The King is head of state, but doesn't make political decisions.`,lens:[{title:`Rules Built Up Over Centuries`,text:`Much of its constitution is custom and old laws, so it can change quickly, and it relies on people playing fair.`},{title:`Four Nations`,text:`Scotland, Wales and Northern Ireland have their own parliaments or assemblies, and independence is a live debate in some places.`},{title:`Mixed Feelings About Europe`,text:`Close to Europe but apart from it, Britain has argued for decades over how closely to join in.`}],remember:`How many countries vote and run their parliaments, and where many of their borders sit, traces back to decisions made here.`},{key:`FRA`,hook:`Born In A Revolution, Still Arguing In The Streets`,intro:`A nuclear power and permanent UN Security Council member at the heart of the EU, whose ideas about rights spread around the world.`,story:[{year:`1789`,title:`The Revolution`,text:`The monarchy falls, and the Declaration of the Rights of Man sets out liberty and equality as rights.`,place:`Paris`,at:[2.35,48.86]},{year:`1804`,title:`Napoleon's Code`,text:`Napoleon crowns himself emperor, but his legal code spreads across Europe and still shapes laws today.`,place:`Paris`,at:[2.35,48.86]},{year:`1905`,title:`Church And State Split`,text:`A law separates religion from government, the start of France's strict secularism, known as laïcité.`,place:`Paris`,at:[2.35,48.86]},{year:`1958`,title:`The Fifth Republic`,text:`During the crisis over Algeria, Charles de Gaulle brings in a new constitution with a strong president.`,place:`Paris`,at:[2.35,48.86]},{year:`1962`,title:`Algeria Wins Independence`,text:`After a brutal eight-year war, France's largest colony breaks free. That history still shapes French politics.`,place:`Algiers`,at:[3.06,36.75]}],power:`Voters elect both the president and the National Assembly. The president appoints a prime minister, but the Assembly can remove them, so the two can end up on opposite sides.`,lens:[{title:`The Street Is Part Of Politics`,text:`Protest is a long and respected tradition, and changes to pensions and fuel prices have filled the streets many times.`},{title:`A Strict Line On Religion`,text:`Secularism keeps religion out of state spaces, including a ban on religious symbols in public schools. Supporters see freedom. Critics see it falling hardest on Muslims.`},{title:`Europe As A Source Of Power`,text:`France pushes for a stronger EU that can act on its own on defense and trade.`}],remember:`When France marches, it often isn't a breakdown of politics. For many people there, that is politics.`},{key:`DEU`,hook:`A Constitution Written So It Can't Happen Again`,intro:`Europe's largest economy and a central voice in the EU, whose politics are shaped by the memory of where it once went.`,story:[{year:`1871`,title:`One Germany`,text:`Bismarck unites dozens of German states into a single empire.`,place:`Berlin`,at:[13.4,52.52]},{year:`1919`,title:`The Weimar Republic`,text:`After defeat in the First World War, a democracy is founded and women win the vote. Economic crisis and political violence weaken it.`,place:`Weimar`,at:[11.33,50.98]},{year:`1933`,title:`The Nazi Dictatorship`,text:`Hitler takes power and destroys democracy within months. The regime starts a world war and murders six million Jews, and millions of others, in the Holocaust.`,place:`Berlin`,at:[13.4,52.52]},{year:`1949`,title:`Two Germanys`,text:`The country is divided into a democratic West, with a new Basic Law, and a communist East. The Berlin Wall goes up in 1961.`,place:`Bonn`,at:[7.1,50.73]},{year:`1990`,title:`Reunification`,text:`The Wall falls in 1989, and the country reunites a year later. Differences between east and west still show in how people vote.`,place:`Berlin`,at:[13.4,52.52]}],power:`Voters elect the Bundestag, which chooses the chancellor. The 16 states have a say through the Bundesrat, and the president's role is mostly ceremonial.`,lens:[{title:`Never Again`,text:`Remembering the Nazi era is part of public life and school, and the constitution lets courts ban parties that attack democracy.`},{title:`Careful With Force`,text:`For decades it has been wary of military power, a stance being rethought since Russia invaded Ukraine.`},{title:`A Country Of Coalitions`,text:`Its proportional system means one party rarely governs alone, so compromise is built in.`}],remember:`Germany's money and votes carry great weight in the EU, so its elections affect people across Europe.`},{key:`JPN`,hook:`A Pacifist Constitution In A Tense Neighborhood`,intro:`One of the world's largest economies, ageing fast, and living between the US and China.`,story:[{year:`1868`,title:`The Meiji Restoration`,text:`Power returns to the emperor, and Japan rushes to industrialize so it won't be colonized.`,place:`Tokyo`,at:[139.69,35.69]},{year:`1937`,title:`War Across Asia`,text:`Japan invades China, then attacks the US at Pearl Harbor in 1941. Its occupations cause enormous suffering that its neighbors still remember.`,place:`Nanjing`,at:[118.8,32.06]},{year:`1945`,title:`Hiroshima And Nagasaki`,text:`Two atomic bombs destroy the cities, killing well over 100,000 people, and Japan surrenders.`,place:`Hiroshima`,at:[132.46,34.39]},{year:`1947`,title:`A New Constitution`,text:`Written under US occupation, it makes the emperor a symbol, gives women equal rights, and in Article 9 renounces war.`,place:`Tokyo`,at:[139.69,35.69]},{year:`2011`,title:`Earthquake And Fukushima`,text:`A huge earthquake and tsunami kill nearly 20,000 people and cause a nuclear disaster, shaking trust in government.`,place:`Fukushima`,at:[141.03,37.42]}],power:`Voters elect both houses of the Diet, and the lower house chooses the prime minister. The Emperor is a symbol with no political power.`,lens:[{title:`One Party, Almost Always`,text:`The Liberal Democratic Party has governed for nearly all of the time since 1955, so the real contests often happen inside it.`},{title:`An Ageing Country`,text:`It has one of the oldest populations on Earth, and a shrinking one, which strains care, pensions and work.`},{title:`Between Two Giants`,text:`The US is its security ally and China a huge trading partner. How far to rearm is one of its biggest questions.`}],remember:`Japan went from empire to pacifist democracy within a generation, and that peace is still being argued over.`},{key:`BRA`,hook:`Latin America's Giant, Still Defending Its Democracy`,intro:`The largest country in South America, home to most of the Amazon, and a leading voice for the developing world.`,story:[{year:`1500`,title:`The Portuguese Arrive`,text:`Portugal claims the land, and over the centuries brings more enslaved Africans to Brazil than to any other country in the Americas.`,place:`Salvador`,at:[-38.5,-12.97]},{year:`1888`,title:`Slavery Ends`,text:`Brazil is the last country in the Americas to abolish slavery. The inequality it left behind is still visible.`,place:`Rio de Janeiro`,at:[-43.2,-22.9]},{year:`1964`,title:`The Military Takes Over`,text:`A coup starts 21 years of military rule, with censorship and the torture of opponents.`,place:`Brasília`,at:[-47.88,-15.79]},{year:`1988`,title:`A New Constitution`,text:`Civilian rule returned in 1985, and a new constitution promises broad social rights.`,place:`Brasília`,at:[-47.88,-15.79]},{year:`2023`,title:`Attack In Brasília`,text:`Rioters who reject the election result storm government buildings a week after the new president takes office. The institutions hold.`,place:`Brasília`,at:[-47.88,-15.79]}],power:`Voters directly elect the president and both houses of Congress. Presidents need coalitions of many parties to pass anything.`,diagram:{links:[{a:`voters`,b:`hog`,v:`elect`},{a:`voters`,b:`lower`,v:`elect`},{a:`voters`,b:`upper`,v:`elect`}],labels:{voters:`Voters`,hog:`President`,lower:`Chamber Of Deputies`,upper:`Senate`},runs:`hog`},lens:[{title:`Everyone Has To Vote`,text:`Voting is compulsory for most adults aged 18 to 70, so turnout is high, and elections run on electronic machines.`},{title:`Deep Inequality`,text:`Some of the world's richest and poorest neighborhoods sit side by side, and race and class shape much of its politics.`},{title:`The Amazon`,text:`Decisions about the forest affect the whole planet's climate, and they're argued over between farming, Indigenous rights and conservation.`}],remember:`What Brazil does with the Amazon matters far beyond Brazil, and its recent years show how hard a democracy can be tested.`},{key:`NGA`,hook:`Africa's Most Populous Country`,intro:`More than 200 million people, one of the world's youngest populations, and a leading economy and cultural force in Africa.`,story:[{year:`1914`,title:`One Colony`,text:`Britain merges its northern and southern territories into one colony, joining peoples who had never been governed together.`,place:`Lokoja`,at:[6.74,7.8]},{year:`1960`,title:`Independence`,text:`Nigeria becomes independent, with Lagos as its capital.`,place:`Lagos`,at:[3.39,6.52]},{year:`1967`,title:`The Biafran War`,text:`The southeast tries to break away. In three years of war, a million or more people die, many of them from starvation.`,place:`Enugu`,at:[7.5,6.45]},{year:`1999`,title:`Civilians Return`,text:`After decades of mostly military rule, an elected government takes over.`,place:`Abuja`,at:[7.49,9.06]},{year:`2015`,title:`A Peaceful Handover`,text:`For the first time, a sitting president loses an election to the opposition and accepts it.`,place:`Abuja`,at:[7.49,9.06]}],power:`Voters directly elect the president and both houses of the National Assembly. Its 36 states also have powerful elected governors.`,lens:[{title:`North And South`,text:`The north is mostly Muslim and the south mostly Christian, with hundreds of ethnic groups. The presidency is informally expected to rotate between regions.`},{title:`Very Young`,text:`Half of Nigerians are under about 18, and jobs and a say in politics are big concerns.`},{title:`Oil And Insecurity`,text:`Oil pays for much of the state, while armed groups in parts of the country and corruption remain major problems.`}],remember:`By mid-century Nigeria is expected to be among the most populous countries on Earth, so much of the world's future will be shaped here.`},{key:`ZAF`,hook:`From Apartheid To One Person, One Vote`,intro:`Africa's most industrialized economy, and one of the world's most watched transitions to democracy.`,story:[{year:`1652`,title:`Settlers Arrive`,text:`The Dutch found a colony at the Cape. Later the British arrive too, and both take land from Black Africans.`,place:`Cape Town`,at:[18.42,-33.92]},{year:`1948`,title:`Apartheid`,text:`The National Party makes racial separation the law. Black South Africans lose their vote, their land and their freedom to move.`,place:`Pretoria`,at:[28.19,-25.75]},{year:`1976`,title:`Soweto`,text:`Police fire on schoolchildren protesting in Soweto. The killing turns the world's attention to apartheid.`,place:`Soweto`,at:[27.86,-26.27]},{year:`1994`,title:`The First Free Election`,text:`After Nelson Mandela's release from 27 years in prison, people of all races vote for the first time, and elect him president.`,place:`Pretoria`,at:[28.19,-25.75]},{year:`2024`,title:`A Party Loses Its Majority`,text:`The ANC, in power since 1994, falls below half the vote for the first time and has to share power.`,place:`Cape Town`,at:[18.42,-33.92]}],power:`Voters elect the National Assembly by proportional representation, and it chooses the president, who both leads the state and runs the government.`,lens:[{title:`Unfinished Equality`,text:`Legal apartheid ended, but inequality by race, along with very high unemployment, hasn't gone away.`},{title:`A Voice For The Global South`,text:`A member of BRICS, it often takes a different line from Western powers, shaped by who supported its liberation struggle.`},{title:`A Constitution People Use`,text:`Its constitution is among the world's most far-reaching on rights, and courts often hold governments to it.`}],remember:`South Africa shows that a peaceful handover is possible even after decades of oppression, and how much work comes afterward.`},{key:`SAU`,hook:`A Ruling Family, Holy Cities And Oil`,intro:`One of the world's largest oil exporters and home of Islam's holiest places, run by one family with no national elections.`,story:[{year:`1744`,title:`An Alliance`,text:`The Al Saud family allies with the religious reformer Muhammad ibn Abd al-Wahhab, a partnership that still shapes the state.`,place:`Diriyah`,at:[46.57,24.73]},{year:`1932`,title:`The Kingdom Is Founded`,text:`Abdulaziz Ibn Saud unites most of the peninsula and names the country after his family.`,place:`Riyadh`,at:[46.72,24.63]},{year:`1938`,title:`Oil`,text:`American geologists strike oil at Dhahran, which eventually makes it one of the world's richest states.`,place:`Dhahran`,at:[50.1,26.29]},{year:`1979`,title:`The Grand Mosque Siege`,text:`Armed militants seize the Grand Mosque in Mecca. In response, the rulers give religious conservatives more power for decades.`,place:`Mecca`,at:[39.83,21.42]},{year:`2018`,title:`Changing From The Top`,text:`Women are allowed to drive and a plan to move beyond oil goes ahead, while critics are jailed. The journalist Jamal Khashoggi is killed in the Saudi consulate in Istanbul.`,place:`Riyadh`,at:[46.72,24.63]}],power:`A king from the royal family holds power, and there's no national parliament that voters can elect. Decisions are made inside the family.`,lens:[{title:`Keeper Of The Holy Places`,text:`Mecca and Medina give the king a special role for nearly two billion Muslims, with millions arriving on pilgrimage.`},{title:`Oil Sets The Price`,text:`As a leader of OPEC, its decisions on how much to pump affect fuel prices almost everywhere.`},{title:`Changing Fast, From The Top`,text:`Daily life has changed quickly for many, especially young people and women, but speaking against the rulers can still mean prison.`}],remember:`With no national vote, nobody can say how its people feel, which is why Politiview won't guess.`},{key:`IRN`,hook:`A Republic Overseen By Clerics`,intro:`Home to an ancient civilization and about 90 million people, with a vote that's real but tightly filtered, and a central role in the Middle East's conflicts.`,story:[{year:`1906`,title:`The Constitutional Revolution`,text:`Protesters force the shah to accept a parliament, one of the first in the region.`,place:`Tehran`,at:[51.39,35.69]},{year:`1953`,title:`The Coup`,text:`The US and Britain help overthrow an elected prime minister, Mohammad Mosaddegh, after he nationalizes oil. Iranians have not forgotten.`,place:`Tehran`,at:[51.39,35.69]},{year:`1979`,title:`The Revolution`,text:`The shah falls to a mass uprising, and Ayatollah Khomeini founds an Islamic Republic. Students take American diplomats hostage.`,place:`Tehran`,at:[51.39,35.69]},{year:`1980`,title:`War With Iraq`,text:`Eight years of war kill hundreds of thousands of people and bind the new state together.`,place:`Khorramshahr`,at:[48.18,30.44]},{year:`2022`,title:`Woman, Life, Freedom`,text:`After Mahsa Amini dies in the custody of the morality police, protests spread nationwide and are met with force.`,place:`Tehran`,at:[51.39,35.69]}],power:`Voters elect a president and parliament, but unelected clerics vet who can run, and the Supreme Leader has the final word.`,lens:[{title:`The Memory Of 1953`,text:`Foreign interference is a live memory, and the rulers draw on it to justify distrust of the West, particularly the US.`},{title:`Votes With A Filter`,text:`Elections have real campaigns, but the Guardian Council bars many candidates, including most reformers in recent years.`},{title:`Regional Rivalries`,text:`It backs armed allies across the region and has long rivalries with Israel, Saudi Arabia and the US, which shape much of the Middle East.`}],remember:`Protest here can carry a huge personal risk, so what's on the streets alone can't show how many people agree.`},{key:`IDN`,hook:`Thousands Of Islands, One Huge Democracy`,intro:`The world's fourth most populous country, its largest Muslim-majority nation, and one of the biggest democracies on Earth.`,story:[{year:`1602`,title:`Dutch Control`,text:`The Dutch East India Company arrives for spices, beginning over three centuries of colonial rule.`,place:`Jakarta`,at:[106.85,-6.21]},{year:`1945`,title:`Independence`,text:`Sukarno declares independence, which Indonesia has to fight for until the Dutch give up in 1949.`,place:`Jakarta`,at:[106.85,-6.21]},{year:`1965`,title:`Mass Killings`,text:`After a failed coup, the army under Suharto takes over. At least 500,000 alleged communists are killed.`,place:`Central Java`,at:[110.4,-7.8]},{year:`1998`,title:`Suharto Falls`,text:`An economic crash and student protests end 32 years of rule, and democratic reforms follow.`,place:`Jakarta`,at:[106.85,-6.21]},{year:`2004`,title:`People Choose Their President`,text:`Voters directly elect a president for the first time.`,place:`Jakarta`,at:[106.85,-6.21]}],power:`Voters directly elect the president and parliament. Parties usually need to form broad coalitions to govern.`,lens:[{title:`Unity In Diversity`,text:`It has over 17,000 islands and hundreds of languages. A national motto and a shared national language hold it together.`},{title:`Faith And A Secular State`,text:`Most people are Muslim, but the state isn't Islamic. How far religion should shape the law is a lasting debate.`},{title:`Between The US And China`,text:`It avoids taking sides, trading heavily with China while keeping security ties with the US.`}],remember:`Many people never think of Indonesia, though it's among the largest democracies in the world. It belongs on the mental map.`},{key:`MEX`,hook:`71 Years Under One Party, Then A Vote That Ended It`,intro:`The largest trading partner of the US and one of the biggest Spanish-speaking democracies, whose border and migration politics touch both countries.`,story:[{year:`1521`,title:`The Fall Of Tenochtitlan`,text:`Spanish forces and Indigenous allies conquer the Aztec capital, beginning 300 years of colonial rule.`,place:`Mexico City`,at:[-99.13,19.43]},{year:`1848`,title:`Half Its Land Is Lost`,text:`After a war with the US, and the earlier loss of Texas, Mexico has given up around half of its territory, including California.`,place:`Ciudad Juárez`,at:[-106.49,31.74]},{year:`1910`,title:`The Revolution`,text:`A decade of war overthrows a long dictatorship and leaves behind a strong constitution and a promise of land and liberty.`,place:`Morelos`,at:[-99.07,18.68]},{year:`2000`,title:`The Party Loses`,text:`After 71 years in power, the PRI loses the presidency in a clean election.`,place:`Mexico City`,at:[-99.13,19.43]},{year:`2024`,title:`The First Woman President`,text:`Mexico elects a woman as president for the first time.`,place:`Mexico City`,at:[-99.13,19.43]}],power:`Voters directly elect the president and both chambers of Congress. A president serves one six-year term and can never run again.`,lens:[{title:`No Re-election`,text:`The revolution began over a leader who wouldn't leave, so a single six-year term is close to sacred.`},{title:`Violence And Elections`,text:`Organized crime is a serious force, and candidates are sometimes threatened or killed, especially in local races.`},{title:`Close To The US`,text:`Trade, migration and drug policy tie the two countries together, in what's often an uneven relationship.`}],remember:`One party losing power peacefully, after 71 years, is among the biggest democratic changes of our time.`},{key:`TUR`,hook:`Between Europe, Asia And Its Own Past`,intro:`A NATO member that straddles two continents and controls the sea route between the Black Sea and the Mediterranean.`,story:[{year:`1453`,title:`The Ottomans Take Constantinople`,text:`The city becomes the capital of an empire that rules much of the Middle East, North Africa and southeast Europe for centuries.`,place:`Istanbul`,at:[28.98,41.01]},{year:`1915`,title:`The Armenians`,text:`During the First World War, Ottoman authorities deport and kill up to 1.5 million Armenians. Most historians call it genocide. Turkey rejects the term.`,place:`Eastern Anatolia`,at:[41.27,39.9]},{year:`1923`,title:`The Republic`,text:`Atatürk founds a secular republic from the ruins of the empire, changing its alphabet, laws and dress.`,place:`Ankara`,at:[32.85,39.93]},{year:`1960`,title:`The Coups`,text:`The army overthrows governments several times to defend its idea of the state. A last attempt fails in 2016.`,place:`Ankara`,at:[32.85,39.93]},{year:`2017`,title:`A Presidential System`,text:`In a narrow referendum, voters approve moving power from parliament to the president.`,place:`Ankara`,at:[32.85,39.93]}],power:`Voters elect the president and parliament, and since 2017 the president holds most of the power. Researchers say the elections are real, but the contest isn't fair.`,lens:[{title:`Two Visions`,text:`Secular and religious ideas of what Turkey should be have divided its politics since the republic began.`},{title:`Real Elections, Uneven Field`,text:`Turnout is high and results can surprise, but opponents have been jailed and much of the media backs the government.`},{title:`A Bridge With Its Own Interests`,text:`In NATO, yet dealing with Russia and the Middle East, it often goes its own way, and it hosts millions of refugees.`}],remember:`Turkey is a reminder that a contested vote can still matter, even on uneven ground.`}],wd=e=>Cd.find(t=>t.key===e),Td={farleft:`Far Left`,left:`Left`,centreleft:`Center-Left`,centre:`Center`,centreright:`Center-Right`,right:`Right`,farright:`Far Right`,np:`No party in power`,na:`No data`};function Ed(e,t){return`<div class="flow-line" role="slider" tabindex="0" aria-label="Move Between Pages" aria-valuemin="1" aria-valuemax="${e.length}" aria-valuenow="${t+1}" aria-valuetext="${i(e[t]?.name??``)}" data-at="${t}">${e.map((e,n)=>`<i class="seg ${n<t?`done`:n===t?`now`:``}" data-name="${i(e.name)}" ${e.attrs??``}><u></u></i>`).join(``)}<span class="flow-peek" aria-hidden="true"></span></div>`}function Dd(e,t,n){return`<button class="flow-next" ${n}><small>${i(e)}</small><b>${i(t)}</b><i class="flow-go" aria-hidden="true"><em></em><em></em><em></em></i></button>`}var Od=(e,t)=>{e.querySelectorAll(`.seg`).forEach((e,n)=>{e.classList.toggle(`done`,n<t),e.classList.toggle(`now`,n===t)})};function kd(e,t){if(!e||t===void 0)return;let n=Number(e.dataset.at);t!==n&&(Od(e,t),e.offsetWidth,Od(e,n))}function Ad(e,t){if(!e||e.dataset.wired)return;e.dataset.wired=`1`,e.addEventListener(`keydown`,n=>{let r=n.key===`ArrowRight`?1:n.key===`ArrowLeft`?-1:0;if(!r)return;n.preventDefault(),n.stopPropagation();let i=Number(e.dataset.at)+r;if(i<0||i>=e.querySelectorAll(`.seg`).length)return;let a=e.closest(`[id]`)?.id;t(i);let o=()=>{a&&document.querySelector(`#${a} .flow-line`)?.focus({preventScroll:!0})};o(),setTimeout(o,80),setTimeout(o,450)});let n=[...e.querySelectorAll(`.seg`)],r=e.querySelector(`.flow-peek`),i=!1,a=t=>{let r=e.getBoundingClientRect();return Math.max(0,Math.min(n.length-1,Math.floor((t-r.left)/r.width*n.length)))},o=t=>{n.forEach((e,n)=>e.classList.toggle(`over`,n===t)),r.textContent=n[t]?.dataset.name??``;let i=e.getBoundingClientRect(),a=r.offsetWidth/2,o=(t+.5)/n.length*i.width;r.style.transform=`translateX(${Math.max(a,Math.min(i.width-a,o))-a}px)`,e.classList.add(`peeking`)},s=()=>{e.classList.remove(`peeking`,`scrubbing`),n.forEach(e=>e.classList.remove(`over`))};e.addEventListener(`pointerdown`,t=>{i=!0,e.setPointerCapture(t.pointerId),e.classList.add(`scrubbing`),o(a(t.clientX))}),e.addEventListener(`pointermove`,e=>{(i||e.pointerType===`mouse`)&&o(a(e.clientX))}),e.addEventListener(`pointerup`,n=>{if(!i)return;i=!1;let r=a(n.clientX);s(),r!==Number(e.dataset.at)&&t(r)}),e.addEventListener(`pointercancel`,()=>{i=!1,s()}),e.addEventListener(`pointerleave`,()=>{i||s()})}var jd=`#2dd4bf`,Md=`#ffd166`,Nd=`#a78bfa`,Pd=`#fb923c`,Fd=`#4a505c`,Id=`#8a93a0`,Ld=`#ffffff`,Rd=`#7cf0a5`,zd=`#f472b6`,Bd=(e,t=6,n=Fd)=>`<circle data-a="${e}" r="${t}" fill="${n}"/>`,Vd=(e,t,n=12,r=Ld,i=`middle`,a=600)=>`<text data-a="${e}" text-anchor="${i}" font-size="${n}" font-weight="${a}" fill="${r}" dominant-baseline="central">${t}</text>`,Hd=(e,t=Fd)=>`<g data-a="${e}" fill="${t}"><circle cy="-6.500" r="3.800"/><path d="M-5.500 7c0-5.500 1.800-8.500 5.500-8.500S5.500 1.500 5.500 7z"/></g>`;function Ud(e,t,n={}){let r=n.seats??0,i=e=>18+e*(r?26:34),a=`<rect data-a="line" x="-1" y="0" width="2" height="${e.length*(r?26:34)+2}" fill="${Ld}"/>`;a+=Vd(`lineT`,``,10,Ld);let o={line:{x:76,y:6,o:0},lineT:{x:76,y:0,o:0}};e.forEach((e,t)=>{a+=Vd(`l${e.id}`,e.name,12,Ld,`start`),a+=`<rect data-a="t${e.id}" x="0" y="-8" width="196" height="16" rx="4" fill="rgba(255,255,255,0.07)"/><rect data-a="b${e.id}" x="0" y="-8" width="196" height="16" rx="4" fill="${e.color}"/>`,a+=Vd(`n${e.id}`,``,12,Ld,`start`),a+=Vd(`w${e.id}`,`Wins`,11,`#0f1217`,`middle`,700),o[`l${e.id}`]={x:6,y:i(t),o:1},o[`t${e.id}`]={x:76,y:i(t),o:1},o[`b${e.id}`]={x:76,y:i(t),sx:.001,sy:1,o:1},o[`n${e.id}`]={x:81,y:i(t),o:0,t:``},o[`w${e.id}`]={x:252,y:i(t),o:0}});for(let t=0;t<r;t++)a+=Bd(`s${t}`,7,Fd),o[`s${t}`]={x:92+t*20,y:18+e.length*26+26,o:1,c:Fd};r&&(a+=Vd(`seatT`,`Seats`,12,Id,`start`),o.seatT={x:6,y:18+e.length*26+26,o:1});let s=t.map(t=>{let n={};if(t.v)for(let r of e){let e=t.v[r.id];e!==void 0&&(n[`b${r.id}`]={sx:Math.max(.001,e/100)},n[`n${r.id}`]={x:76+Math.max(.001,e/100)*196+5,o:+(e>0),t:`${e}%`})}if(t.line!==void 0&&(n.line=t.line===null?{o:0}:{x:76+t.line/100*196,o:.9},n.lineT=t.line===null?{o:0}:{x:76+t.line/100*196,o:1,t:t.lineLabel??``}),t.win!==void 0)for(let r of e)n[`w${r.id}`]={o:+(t.win===r.id)};if(t.out)for(let r of e){let e=t.out.includes(r.id);n[`b${r.id}`]={...n[`b${r.id}`],o:e?.16:1},n[`l${r.id}`]={o:e?.4:1},n[`n${r.id}`]={...n[`n${r.id}`],...e?{o:.35}:{}}}if(t.seats){let i=0;for(let r of e)for(let e=0;e<(t.seats[r.id]??0);e++)n[`s${i}`]={c:r.color,s:1,d:i*70},i++;for(;i<r;i++)n[`s${i}`]={c:Fd,s:1,d:0}}return{say:t.say,ms:t.ms,set:n}});return{shapes:a,start:o,beats:s}}function Wd(e,t,n){let r=Vd(`note`,``,21),i=Math.min(30,280/t),a=112/e,o=160-(t-1)*i/2,s={note:{x:160,y:146,o:0}},c=e*t;for(let e=0;e<c;e++)r+=Hd(`p${e}`),s[`p${e}`]={x:o+e%t*i,y:16+Math.floor(e/t)*a,c:Fd,s:Math.min(1.5,a/15),o:1};return{shapes:r,start:s,beats:n.map(e=>{let t={note:e.note?{o:1,t:e.note,c:e.noteColor??Ld}:{o:0}};for(let n=0;n<c;n++)t[`p${n}`]={c:e.color(n),d:n*22};return{say:e.say,ms:e.ms,set:t}})}}function Gd(e,t,n){let r=new Map(e.map(e=>[e.id,e])),i=``,a={};for(let e of t){let t=r.get(e.from),n=r.get(e.to),o=n.x-t.x,s=n.y-t.y,c=Math.hypot(o,s)||1,l=e=>(e.w??84)/2,u=e=>{let t=Math.abs(o/c),n=Math.abs(s/c);return Math.min(t>.001?l(e)/t:1e4,n>.001?17/n:1e4)+4},d=t.x+o/c*u(t),f=t.y+s/c*u(t),p=n.x-o/c*u(n),m=n.y-s/c*u(n),h=(e.bend??0)*(-s/c),g=(e.bend??0)*(o/c),_=(d+p)/2+h,v=(f+m)/2+g,y=p-(p-_)/(Math.hypot(p-_,m-v)||1)*8,b=m-(m-v)/(Math.hypot(p-_,m-v)||1)*8,x=-(m-v)/(Math.hypot(p-_,m-v)||1)*4.5,S=(p-_)/(Math.hypot(p-_,m-v)||1)*4.5,C=e.color??Id;i+=`<path data-a="${e.id}" pathLength="1" stroke-dasharray="1" d="M${d.toFixed(1)} ${f.toFixed(1)}Q${_.toFixed(1)} ${v.toFixed(1)} ${p.toFixed(1)} ${m.toFixed(1)}" fill="none" stroke="${C}" stroke-width="2.2" stroke-linecap="round"/>`,i+=`<path data-a="${e.id}h" d="M${p.toFixed(1)} ${m.toFixed(1)}L${(y+x).toFixed(1)} ${(b+S).toFixed(1)}L${(y-x).toFixed(1)} ${(b-S).toFixed(1)}Z" fill="${C}"/>`,a[e.id]={draw:0,o:1},a[`${e.id}h`]={o:0}}for(let t of e){let e=t.w??84,n=t.label.split(`
`);i+=`<g data-a="${t.id}"><rect data-a="${t.id}r" x="${-e/2}" y="-17" width="${e}" height="34" rx="11" fill="${t.color??`#2a2f3a`}"/>${n.map((e,r)=>`<text ${r===0?`data-a="${t.id}t"`:``} text-anchor="middle" y="${(r-(n.length-1)/2)*13}" dominant-baseline="central" font-size="${n.length>1?11:12}" font-weight="600" fill="${t.color?`#0f1217`:Ld}">${e}</text>`).join(``)}</g>`,a[t.id]={x:t.x,y:t.y,o:0,s:.86}}return i+=`<g data-a="token"><circle r="11" data-a="tokenC" fill="${Md}"/>${Vd(`tokenT`,``,11,`#0f1217`,`middle`,700)}</g>`,a.token={x:160,y:85,o:0},a.tokenC={c:Md},a.tokenT={t:``},{shapes:i,start:a,beats:n.map(e=>{let t={};for(let n of e.show??[])r.has(n)?t[n]={o:1,s:1}:(t[n]={draw:1,o:1},t[`${n}h`]={o:1,d:420});for(let n of e.hide??[])r.has(n)?t[n]={o:.18,s:.92}:(t[n]={o:0},t[`${n}h`]={o:0});if(e.token===null)t.token={o:0};else if(e.token){let n=r.get(e.token);t.token={x:n.x,y:n.y-25,o:1}}e.tokenText!==void 0&&(t.tokenT={t:e.tokenText}),e.tokenColor&&(t.tokenC={c:e.tokenColor});for(let[n,r]of Object.entries(e.recolor??{}))t[`${n}r`]={c:r};for(let[n,r]of Object.entries(e.relabel??{}))t[`${n}t`]={t:r};return{say:e.say,ms:e.ms,set:t}})}}function Kd(){let e=e=>98+e*25+25/2,t=e=>8+e*25+25/2,n=e=>e<=2,r=e=>[0,1,2,3,4].map(t=>[e,t]),i=[r(0),r(1),r(2),r(3),r(4)],a=[r(0),r(1),[[2,0],[2,1],[3,0],[4,0],[4,1]],[[2,2],[2,3],[3,1],[3,2],[3,3]],[[2,4],[3,4],[4,4],[4,3],[4,2]]],o=e=>e.map(([e,t])=>`M${98+e*25} ${8+t*25}h25v25h-25z`).join(``),s=e=>{let t=(t,n)=>e.some(([e,r])=>e===t&&r===n),n=``;for(let[r,i]of e){let e=98+r*25,a=8+i*25;t(r,i-1)||(n+=`M${e} ${a}h25`),t(r+1,i)||(n+=`M${e+25} ${a}v25`),t(r,i+1)||(n+=`M${e} ${a+25}h25`),t(r-1,i)||(n+=`M${e} ${a}v25`)}return n},c=``,l={};i.forEach((e,t)=>{c+=`<path data-a="ft${t}" d="${o(e)}" fill="${t<=2?jd:Md}"/><path data-a="fl${t}" d="${s(e)}" fill="none" stroke="${Ld}" stroke-width="2.2" stroke-linecap="round"/>`,l[`ft${t}`]={o:0},l[`fl${t}`]={o:0}}),a.forEach((e,t)=>{c+=`<path data-a="dt${t}" d="${o(e)}" fill="${t<=1?jd:Md}"/><path data-a="dl${t}" d="${s(e)}" fill="none" stroke="${Ld}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,l[`dt${t}`]={o:0},l[`dl${t}`]={o:0}});for(let n=0;n<5;n++)for(let r=0;r<5;r++)c+=Hd(`v${n}${r}`),l[`v${n}${r}`]={x:e(n),y:t(r)+1,c:Fd,s:.95,o:0};c+=Vd(`tn`,`Teal`,13,jd)+Vd(`ts`,``,32,jd)+Vd(`gn`,`Gold`,13,Md)+Vd(`gs`,``,32,Md)+Vd(`sc`,`Seats`,10,Id)+Vd(`sc2`,`Seats`,10,Id),Object.assign(l,{tn:{x:48,y:44,o:0},ts:{x:48,y:74,o:0,t:`0`},sc:{x:48,y:100,o:0},gn:{x:272,y:44,o:0},gs:{x:272,y:74,o:0,t:`0`},sc2:{x:272,y:100,o:0}});let u=e=>{let t={};for(let n=0;n<5;n++)for(let r=0;r<5;r++)t[`v${n}${r}`]={o:1,c:e(n),d:(n+r)*45};return t},d=(e,t,n,r=0)=>Object.fromEntries(t.map((t,i)=>[`${e}${t}`,{o:n,d:r*i}])),f=[0,1,2,3,4],p=(e,t)=>({ts:{o:1,t:String(e)},gs:{o:1,t:String(t)},tn:{o:1},gn:{o:1},sc:{o:1},sc2:{o:1}});return{shapes:c,start:l,beats:[{say:`Here are 25 voters. 15 like Team Teal, and 10 like Team Gold. So Teal has more support.`,ms:4200,set:u(e=>n(e)?jd:Md)},{say:`They need to elect 5 people, one from each district. So the map gets split into 5 districts of 5 voters.`,ms:4200,set:{...d(`fl`,f,1,180)}},{say:`With these straight lines, three districts pick Teal and two pick Gold. That matches how people feel.`,ms:4600,set:{...d(`ft`,f,.22,150),...p(3,2)}},{say:`Now imagine someone on Team Gold gets to redraw the map. Nobody moves. Only the lines do.`,ms:4200,set:{...d(`fl`,f,0),...d(`ft`,f,0),ts:{o:.25},gs:{o:.25}}},{say:`Step one is packing. Squeeze lots of Teal voters into just two districts, so Teal wins them by far more than it needs.`,ms:5e3,set:{...d(`dl`,[0,1],1,200),...d(`dt`,[0,1],.24,200),ts:{o:1,t:`2`}}},{say:`Step two is cracking. Spread the other Teal voters thinly, so they lose everywhere else.`,ms:4800,set:{...d(`dl`,[2,3,4],1,350),...d(`dt`,[2,3,4],.24,350),gs:{o:1,t:`3`}}},{say:`Same voters. Same votes. But now Gold wins 3 seats to 2, even though Teal has more supporters.`,ms:4800,set:{gs:{o:1,s:1.3},ts:{o:.6}}},{say:`That's gerrymandering. Whoever draws the lines can help pick the winner, so many places try to stop it.`,ms:5200,set:{gs:{s:1}}}]}}var qd={id:`A`,name:`Teal`,color:jd},Jd={id:`B`,name:`Gold`,color:Md},Yd={id:`C`,name:`Violet`,color:Nd},Xd={id:`D`,name:`Coral`,color:Pd},Zd=`#2dd4bf`,Qd={gerrymandering:Kd,"first-past-the-post":()=>Ud([qd,Jd,Yd],[{say:`Everyone gets one vote, for one person, in their area.`,v:{A:0,B:0,C:0},ms:2800},{say:`The votes are counted. Teal gets the most, but less than half.`,v:{A:40,B:35,C:25},ms:3800},{say:`That's enough. Whoever comes first wins the whole seat, like the first runner past a post.`,win:`A`,ms:4200},{say:`Everyone else gets nothing, so 60 out of 100 voters here didn't pick the winner.`,out:[`B`,`C`],ms:4600}]),plurality:()=>Ud([qd,Jd,Yd],[{say:`Three people run, and the votes come in.`,v:{A:40,B:35,C:25},ms:3400},{say:`Half would be 50. Nobody got there.`,line:50,lineLabel:`Half`,ms:3600},{say:`Teal still has the most votes of anyone. That's called a plurality: more than anyone else, but not over half.`,win:`A`,ms:5e3}]),majority:()=>Wd(2,5,[{say:`Here are 10 people deciding something.`,color:()=>Id,ms:2600},{say:`A majority means more than half. Out of 10, that's at least 6.`,color:e=>e<6?jd:Id,note:`6 Of 10`,noteColor:jd,ms:4200},{say:`With 6, Teal gets its way. The other 4 still count, but they can't win alone.`,color:e=>e<6?jd:Md,note:`A Majority`,noteColor:jd,ms:4400},{say:`Exactly 5 isn't enough. That's a tie, not a majority.`,color:e=>e<5?jd:Md,note:`5 And 5: No Majority`,ms:4e3}]),"proportional representation":()=>Ud([qd,Jd,Yd],[{say:`Everyone votes for a party, and the votes are added up across the whole country.`,v:{A:50,B:30,C:20},ms:3600},{say:`There are 10 seats to fill. Each party gets a share of seats to match its share of votes.`,seats:{A:5,B:3,C:2},ms:4600},{say:`So 30% of the votes gets about 30% of the seats. Very few votes go to waste.`,ms:4200},{say:`Parties often need to work together, because it's hard for one party to get over half.`,ms:4200}],{seats:10}),threshold:()=>Ud([qd,Jd,Yd,Xd],[{say:`Parties get seats to match their votes. But many places set a minimum.`,v:{A:48,B:42,C:7,D:3},ms:3800},{say:`Here, a party needs at least 5% to get in. That line is the threshold.`,line:5,lineLabel:`5%`,ms:4200},{say:`Coral got 3%, so it gets no seats at all, and those votes don't elect anyone.`,out:[`D`],ms:4400},{say:`It keeps out very small parties, but it means some voters end up with nobody.`,ms:4200}]),"two-round":()=>Ud([qd,Jd,Yd,Xd],[{say:`Round one: everyone votes. To win right away, you need more than half.`,v:{A:38,B:32,C:20,D:10},line:50,lineLabel:`Half`,ms:4400},{say:`Nobody made it, so only the top two go through.`,out:[`C`,`D`],ms:3800},{say:`Round two, usually a couple of weeks later. Everyone votes again between just those two.`,v:{A:38,B:32,C:0,D:0},ms:4200},{say:`People whose favorite is out pick again, so the winner always ends up with over half.`,v:{A:47,B:53,C:0,D:0},win:`B`,ms:5e3}]),runoff:()=>Ud([qd,Jd,Yd],[{say:`Three people run, and nobody gets more than half.`,v:{A:44,B:40,C:16},line:50,lineLabel:`Half`,ms:3800},{say:`So there's a runoff: a second vote between the top two.`,out:[`C`],ms:3600},{say:`Violet's voters choose again. Whoever gets over half wins, even if they were second before.`,v:{A:48,B:52,C:0},win:`B`,ms:5e3}]),"ranked choice":()=>Ud([qd,Jd,Yd],[{say:`You don't pick just one. You number them in order: first choice, second choice, third.`,v:{A:0,B:0,C:0},ms:3800},{say:`First choices are counted. Nobody has over half yet.`,v:{A:40,B:35,C:25},line:50,lineLabel:`Half`,ms:3800},{say:`Whoever came last is out. Violet's voters aren't ignored: their votes move to their second choice.`,out:[`C`],v:{A:40,B:35,C:25},ms:4800},{say:`Now Gold has passed half and wins, because more people ranked Gold above Teal.`,v:{A:45,B:55,C:0},win:`B`,ms:5e3}]),coalition:()=>Ud([qd,Jd,Yd,Xd],[{say:`After an election, the party or group with over half the seats runs the government.`,v:{A:40,B:35,C:15,D:10},line:50,lineLabel:`Half`,ms:4200},{say:`But nobody has over half. Teal is biggest, with 40%, and that's not enough alone.`,out:[`D`,`B`],ms:4e3},{say:`So Teal and Violet team up. Together they have 55%, and that's a coalition.`,v:{A:55,B:35,C:15,D:10},win:`A`,ms:4600},{say:`They share the top jobs and bargain over what to do. If they fall out, the government can fall too.`,ms:4800}]),"electoral college":()=>Gd([{id:`s1`,x:58,y:34,label:`Big State
10 Points`,w:92},{id:`s2`,x:160,y:34,label:`Middle State
6 Points`,w:92},{id:`s3`,x:262,y:34,label:`Small State
4 Points`,w:92},{id:`win`,x:160,y:138,label:`11 Points To Win`,w:150}],[{id:`a1`,from:`s1`,to:`win`},{id:`a2`,from:`s2`,to:`win`},{id:`a3`,from:`s3`,to:`win`}],[{say:`In a US presidential election, you aren't just adding up everyone's votes. Each state is worth points.`,show:[`s1`,`s2`,`s3`,`win`],ms:4400},{say:`Gold wins the big state by a whisker, 51 to 49. In most states, that still earns all its points.`,recolor:{s1:Md},show:[`a1`],ms:4600},{say:`Gold edges the middle state too. Now Gold has 16 points.`,recolor:{s2:Md},show:[`a2`],relabel:{win:`Gold: 16 Points`},ms:4e3},{say:`Teal wins the small state by a huge margin. That can give Teal more votes overall, but only 4 points.`,recolor:{s3:jd},show:[`a3`],ms:4800},{say:`So Gold wins with fewer total votes. It has happened in real life, most recently in 2016.`,recolor:{win:Md},relabel:{win:`Gold Wins, 16 To 4`},ms:5e3}]),constituency:()=>Gd([{id:`a`,x:56,y:40,label:`North`,color:jd,w:80},{id:`b`,x:160,y:40,label:`Middle`,color:Md,w:80},{id:`c`,x:264,y:40,label:`South`,color:Nd,w:80},{id:`h`,x:160,y:136,label:`Parliament`,w:120}],[{id:`x1`,from:`a`,to:`h`},{id:`x2`,from:`b`,to:`h`},{id:`x3`,from:`c`,to:`h`}],[{say:`A country gets divided into areas. Each one is a constituency, also called a district.`,show:[`a`,`b`,`c`],ms:3800},{say:`People in each area vote for someone to speak for them.`,show:[`h`],ms:3200},{say:`Each winner goes to parliament, so every place has someone to call on.`,show:[`x1`,`x2`,`x3`],ms:4400}]),"mixed-member":()=>Gd([{id:`v`,x:160,y:22,label:`You Get Two Votes`,w:150},{id:`a`,x:78,y:86,label:`One For A
Local Person`,color:jd,w:116},{id:`b`,x:242,y:86,label:`One For
A Party`,color:Md,w:104},{id:`h`,x:160,y:148,label:`Parliament`,w:120}],[{id:`x1`,from:`v`,to:`a`},{id:`x2`,from:`v`,to:`b`},{id:`x3`,from:`a`,to:`h`},{id:`x4`,from:`b`,to:`h`}],[{say:`This system mixes two ideas, so you get two votes.`,show:[`v`],ms:2800},{say:`One vote picks a person to speak for your local area.`,show:[`a`,`x1`],ms:3400},{say:`The other vote is for a party, and it helps decide how many seats each party gets overall.`,show:[`b`,`x2`],ms:4200},{say:`Together they fill parliament, so you get a local voice and seats that match how the country voted.`,show:[`h`,`x3`,`x4`],ms:4800}]),"party list":()=>Ud([qd,Jd],[{say:`You vote for a party, not a person. Each party has already written a list of its people in order.`,v:{A:0,B:0},ms:4200},{say:`Teal gets 60% of the votes, and Gold gets 40%.`,v:{A:60,B:40},ms:3200},{say:`With 10 seats, Teal gets 6, so the first 6 people on Teal's list get in. Gold's first 4 get in.`,seats:{A:6,B:4},ms:5e3},{say:`So where you are on the list matters a lot, and party leaders often decide that.`,ms:4200}],{seats:10}),parliamentary:()=>Gd([{id:`v`,x:160,y:22,label:`Voters`,color:Md},{id:`p`,x:160,y:85,label:`Parliament`,color:Zd,w:110},{id:`l`,x:160,y:148,label:`Prime Minister`,w:124}],[{id:`x1`,from:`v`,to:`p`},{id:`x2`,from:`p`,to:`l`},{id:`x3`,from:`p`,to:`l`,bend:44,color:zd}],[{say:`Voters elect a parliament. They usually don't vote for the leader directly.`,show:[`v`,`p`,`x1`],ms:3800},{say:`Then parliament decides who leads, normally the head of the biggest party or group.`,show:[`l`,`x2`],ms:4e3},{say:`If parliament stops backing the prime minister, it can vote them out, without waiting for an election.`,show:[`x3`],ms:4800}]),presidential:()=>Gd([{id:`v`,x:160,y:22,label:`Voters`,color:Md},{id:`p`,x:76,y:130,label:`President`,color:Nd,w:104},{id:`c`,x:244,y:130,label:`Lawmakers`,color:Zd,w:104}],[{id:`x1`,from:`v`,to:`p`},{id:`x2`,from:`v`,to:`c`}],[{say:`Voters choose the president directly.`,show:[`v`,`p`,`x1`],ms:3e3},{say:`They also vote separately for the lawmakers. So one side might win one and not the other.`,show:[`c`,`x2`],ms:4400},{say:`Neither one picks the other, and the president usually stays for a fixed term. They have to work together to get things done.`,ms:5e3}]),"semi-presidential":()=>Gd([{id:`v`,x:160,y:22,label:`Voters`,color:Md},{id:`p`,x:74,y:88,label:`President`,color:Nd,w:100},{id:`c`,x:246,y:88,label:`Parliament`,color:Zd,w:100},{id:`m`,x:160,y:150,label:`Prime Minister`,w:124}],[{id:`x1`,from:`v`,to:`p`},{id:`x2`,from:`v`,to:`c`},{id:`x3`,from:`p`,to:`m`},{id:`x4`,from:`c`,to:`m`,color:zd}],[{say:`This one is a blend, and voters elect both a president and a parliament.`,show:[`v`,`p`,`c`,`x1`,`x2`],ms:3800},{say:`The president picks a prime minister to run the day-to-day government.`,show:[`m`,`x3`],ms:3800},{say:`But parliament can throw that prime minister out, so the two have to get along.`,show:[`x4`],ms:4400}]),democracy:()=>Gd([{id:`v`,x:160,y:26,label:`The People`,color:Md,w:104},{id:`l`,x:160,y:140,label:`Leaders`,w:104}],[{id:`x1`,from:`v`,to:`l`,bend:36},{id:`x2`,from:`l`,to:`v`,bend:36,color:Rd}],[{say:`In a democracy, power starts with the people.`,show:[`v`],ms:2600},{say:`People vote, freely and fairly, to choose their leaders.`,show:[`l`,`x1`],token:`l`,tokenText:`Vote`,ms:3800},{say:`The leaders have to answer to the people, who can speak out and criticize them.`,show:[`x2`],token:null,ms:4e3},{say:`And if people aren't happy, they can vote them out, peacefully, next time.`,ms:3800}]),autocracy:()=>Gd([{id:`l`,x:160,y:26,label:`One Ruler Or Group`,color:Pd,w:150},{id:`v`,x:160,y:140,label:`The People`,w:104}],[{id:`x1`,from:`l`,to:`v`}],[{say:`In an autocracy, power sits with one person or a small group.`,show:[`l`],ms:3e3},{say:`Orders go down to the people, and the people can't remove the leader by voting.`,show:[`v`,`x1`],ms:4200},{say:`There may still be elections, but real rivals are blocked, or the result is already decided.`,ms:4400}]),federal:()=>Gd([{id:`n`,x:160,y:28,label:`National Government`,color:Nd,w:156},{id:`a`,x:60,y:136,label:`State`,color:jd,w:74},{id:`b`,x:160,y:136,label:`State`,color:Md,w:74},{id:`c`,x:260,y:136,label:`State`,color:Pd,w:74}],[{id:`x1`,from:`n`,to:`a`},{id:`x2`,from:`n`,to:`b`},{id:`x3`,from:`n`,to:`c`}],[{say:`In a federal country, power is shared between two levels.`,show:[`n`,`a`,`b`,`c`],ms:3200},{say:`The national government handles things like the army and money.`,show:[`x1`,`x2`,`x3`],ms:3800},{say:`But each state has its own leaders and makes many of its own laws. So rules can change when you cross a state line.`,ms:5e3}]),unitary:()=>Gd([{id:`n`,x:160,y:28,label:`National Government`,color:Nd,w:156},{id:`a`,x:60,y:136,label:`Region`,w:74},{id:`b`,x:160,y:136,label:`Region`,w:74},{id:`c`,x:260,y:136,label:`Region`,w:74}],[{id:`x1`,from:`n`,to:`a`},{id:`x2`,from:`n`,to:`b`},{id:`x3`,from:`n`,to:`c`}],[{say:`In a unitary country, the national government has the final say on almost everything.`,show:[`n`],ms:3600},{say:`Regions and towns exist, but mostly to carry out what the center decides.`,show:[`a`,`b`,`c`,`x1`,`x2`,`x3`],ms:4200},{say:`So the same rules usually apply everywhere, and the center can change what the regions do.`,ms:4400}]),bicameral:()=>Gd([{id:`lo`,x:66,y:44,label:`Lower House`,color:jd,w:104},{id:`up`,x:254,y:44,label:`Upper House`,color:Nd,w:104},{id:`law`,x:160,y:140,label:`A New Law`,w:104}],[{id:`x1`,from:`lo`,to:`up`},{id:`x2`,from:`up`,to:`law`}],[{say:`Bicameral means the parliament has two separate parts, called chambers or houses.`,show:[`lo`,`up`],ms:3400},{say:`An idea for a law, called a bill, usually has to pass the first one.`,token:`lo`,tokenText:`Bill`,ms:3400},{say:`Then the second looks it over, and can change it or say no.`,token:`up`,show:[`x1`],ms:3600},{say:`Only when both agree can it become a law. It's slower, but gives a second check.`,token:`law`,show:[`law`,`x2`],ms:4400}]),unicameral:()=>Gd([{id:`lo`,x:160,y:40,label:`Parliament`,color:jd,w:120},{id:`law`,x:160,y:140,label:`A New Law`,w:104}],[{id:`x1`,from:`lo`,to:`law`}],[{say:`Unicameral means a parliament with just one chamber.`,show:[`lo`],ms:3e3},{say:`A bill gets debated and voted on in that one place.`,token:`lo`,tokenText:`Bill`,ms:3200},{say:`If it passes, that's it. Laws can be made faster, with fewer checks.`,token:`law`,show:[`law`,`x1`],ms:4e3}]),veto:()=>Gd([{id:`lo`,x:66,y:44,label:`Lawmakers`,color:jd,w:100},{id:`le`,x:254,y:44,label:`The Leader`,color:Nd,w:100},{id:`law`,x:160,y:140,label:`New Law?`,w:104}],[{id:`x1`,from:`lo`,to:`le`},{id:`x2`,from:`le`,to:`lo`,bend:40,color:zd}],[{say:`Lawmakers pass a bill, and it goes to the leader to sign.`,show:[`lo`,`le`,`x1`,`law`],token:`lo`,tokenText:`Bill`,ms:3800},{say:`If the leader says no, the bill is stopped and sent back. That's a veto.`,token:`le`,tokenColor:zd,relabel:{law:`Stopped`},ms:4200},{say:`In many countries, lawmakers can still overrule the veto, but only if a lot more of them agree.`,show:[`x2`],token:`lo`,tokenColor:Md,relabel:{law:`Needs More Votes`},ms:4800}]),impeachment:()=>Gd([{id:`lo`,x:66,y:44,label:`Lawmakers
Accuse`,color:Md,w:104},{id:`up`,x:254,y:44,label:`A Trial Is
Held`,color:Nd,w:104},{id:`ou`,x:160,y:140,label:`Removed?`,w:104}],[{id:`x1`,from:`lo`,to:`up`},{id:`x2`,from:`up`,to:`ou`}],[{say:`Even a president isn't above the rules. Lawmakers can formally accuse them of wrongdoing. That's impeachment.`,show:[`lo`],ms:4400},{say:`Being impeached doesn't mean they're out. Next comes a kind of trial, often by a different group.`,show:[`up`,`x1`],ms:4400},{say:`Only if enough of them agree does the leader lose the job. Often that takes far more than half.`,show:[`ou`,`x2`],ms:4600}]),primary:()=>Gd([{id:`a`,x:52,y:30,label:`Asha`,w:72},{id:`b`,x:160,y:30,label:`Ben`,color:jd,w:72},{id:`c`,x:268,y:30,label:`Cruz`,w:72},{id:`t`,x:88,y:140,label:`Ben, For Teal`,color:jd,w:120},{id:`g`,x:232,y:140,label:`Dee, For Gold`,color:Md,w:120}],[{id:`x1`,from:`b`,to:`t`}],[{say:`Lots of people in a party may want to run. A primary is the vote that narrows them down.`,show:[`a`,`b`,`c`],ms:4200},{say:`Voters pick, and Ben wins Team Teal's primary. Team Gold holds its own.`,hide:[`a`,`c`],show:[`t`,`x1`],ms:4200},{say:`Later comes the main election, with one person from each party. Primaries can decide a lot, and often few people vote in them.`,show:[`g`],ms:5e3}]),referendum:()=>Ud([{id:`Y`,name:`Yes`,color:jd},{id:`N`,name:`No`,color:Pd}],[{say:`Usually we elect people to decide things for us. In a referendum, everyone votes on the question itself.`,v:{Y:0,N:0},ms:4400},{say:`It's often a Yes or No. Should we change this rule?`,ms:3e3},{say:`The votes come in, and every vote counts the same, wherever you live.`,v:{Y:52,N:48},line:50,lineLabel:`Half`,ms:4e3},{say:`Yes wins. A close result can still change a whole country, sometimes for good.`,win:`Y`,ms:4200}]),turnout:()=>Wd(2,5,[{say:`Here are 10 people who are allowed to vote.`,color:()=>Id,ms:2600},{say:`On election day, only 6 show up. So the turnout is 60%.`,color:e=>e<6?Rd:Fd,note:`60% Turnout`,noteColor:Rd,ms:4e3},{say:`Of those 6, 4 pick Teal, and 2 pick Gold. So Teal wins.`,color:e=>e<4?jd:e<6?Md:Fd,note:`Teal 4, Gold 2`,ms:4e3},{say:`If the 4 who stayed home had all picked Gold, Gold would have won. Staying home is a choice too.`,color:e=>e<4?jd:Md,note:`Teal 4, Gold 6`,noteColor:Md,ms:5e3}]),suffrage:()=>Wd(2,10,[{say:`Suffrage means the right to vote. For a long time, most people didn't have it.`,color:e=>e<2?Md:Fd,note:`Only Rich Men`,noteColor:Md,ms:4200},{say:`Slowly, people fought for more. Often all men came first.`,color:e=>e%2==0||e<2?Md:Fd,note:`All Men`,noteColor:Md,ms:3600},{say:`Then women won the vote too, after years of campaigning.`,color:e=>e<18?Md:Fd,note:`Women Too`,noteColor:Md,ms:3600},{say:`Today nearly every country lets all its adults vote, though not every vote is free or fair.`,color:()=>Md,note:`Everyone`,noteColor:Md,ms:4600}]),swing:()=>Wd(2,10,[{say:`Many people vote for the same side every time. They rarely change the result.`,color:e=>e%10<4?jd:e%10>5?Md:Id,ms:4e3},{say:`The people in the middle might go either way. They're called swing voters.`,color:e=>e%10<4?jd:e%10>5?Md:Ld,note:`Swing Voters`,ms:4e3},{say:`If they lean Teal, Teal wins.`,color:e=>e%10<6?jd:Md,note:`Teal Wins`,noteColor:jd,ms:3200},{say:`If they lean Gold, Gold wins. Places full of these voters are called swing states or swing seats.`,color:e=>e%10<4?jd:Md,note:`Gold Wins`,noteColor:Md,ms:4600}]),coup:()=>Gd([{id:`v`,x:62,y:28,label:`Voters`,color:Md},{id:`l`,x:160,y:88,label:`Elected Leader`,color:jd,w:120},{id:`a`,x:268,y:28,label:`The Army`,color:Pd}],[{id:`x1`,from:`v`,to:`l`},{id:`x2`,from:`a`,to:`l`,color:zd}],[{say:`People vote, and a leader takes office. That's how it's meant to work.`,show:[`v`,`l`,`x1`],ms:3400},{say:`In a coup, a group such as the army takes power by force, without any vote.`,show:[`a`,`x2`],ms:4e3},{say:`The elected leader is pushed out, and the vote no longer counts.`,hide:[`v`,`x1`],recolor:{l:Pd},relabel:{l:`Army Rule`},ms:4200},{say:`Coups are a big reason some countries go from democracy to rule by soldiers.`,ms:3800}]),midterm:()=>Gd([{id:`a`,x:60,y:44,label:`President
Elected`,color:Nd,w:92},{id:`b`,x:160,y:44,label:`2 Years
Later`,color:Md,w:92},{id:`c`,x:260,y:44,label:`Next
President`,color:Nd,w:92},{id:`n`,x:160,y:140,label:`Congress Is Up, Not The President`,w:230}],[{id:`x1`,from:`a`,to:`b`},{id:`x2`,from:`b`,to:`c`},{id:`x3`,from:`b`,to:`n`}],[{say:`In the US, a president gets a four-year term.`,show:[`a`,`c`],ms:3e3},{say:`Halfway through come the midterm elections.`,show:[`b`,`x1`,`x2`],ms:3200},{say:`All of the House and about a third of the Senate are up. Voters often use it to pass judgment on the president.`,show:[`n`,`x3`],ms:5e3}]),opposition:()=>Ud([qd,Jd],[{say:`After an election, the winners form the government.`,v:{A:55,B:45},line:50,lineLabel:`Half`,win:`A`,ms:3600},{say:`Everyone else in parliament is the opposition. They don't run things.`,ms:3600},{say:`Their job is to ask hard questions, point out mistakes and offer another choice. That keeps the winners honest.`,ms:5e3}]),"compulsory voting":()=>Wd(2,5,[{say:`In most places, voting is your choice. Often lots of people stay home.`,color:e=>e<6?Rd:Fd,note:`Often 6 In 10`,ms:3800},{say:`In a few countries, like Australia, the law says you must show up, or risk a small fine.`,color:e=>e<9?Rd:Fd,note:`About 9 In 10`,noteColor:Rd,ms:4400},{say:`You can still leave the ballot blank. Supporters say it makes sure everyone is heard. Others say it should be your choice.`,color:e=>e<9?Rd:Fd,ms:5200}])},$d=e=>e.toLowerCase()in Qd;function ef(e){let t=new Set,n=e.toLowerCase();for(let[e,r]of[[/first-past-the-post|most votes|gets the most/,`first-past-the-post`],[/runoff|two rounds/,`runoff`],[/rank/,`ranked choice`],[/party vote share|proportional|shared by/,`proportional representation`],[/party list|lists?\b/,`party list`],[/minimum|threshold/,`threshold`],[/two votes|two ballots|mixed/,`mixed-member`],[/electoral college/,`electoral college`],[/coalition/,`coalition`],[/federal|federation/,`federal`],[/unitary/,`unitary`],[/prime minister/,`parliamentary`],[/directly elect|elect a president/,`presidential`],[/two chambers|two-chamber|senate/,`bicameral`],[/single-chamber|one-chamber/,`unicameral`],[/coup/,`coup`],[/veto/,`veto`],[/impeach/,`impeachment`],[/referendum/,`referendum`],[/compulsory/,`compulsory voting`],[/primary/,`primary`]])e.test(n)&&t.add(r);return[...t].slice(0,4)}function tf(e){return $d(e)?`<div class="am" data-animatic="${e.toLowerCase()}"></div>`:``}function nf(e){for(let t of e.querySelectorAll(`[data-animatic]`))t.dataset.playing||rf(t,Qd[t.dataset.animatic??``]?.())}function rf(e,t){if(!t)return;e.dataset.playing=`1`,e.innerHTML=`<svg class="am-stage" viewBox="0 0 ${t.w??320} ${t.h??170}" aria-hidden="true">${t.shapes}</svg>
    <div class="am-steps">${t.beats.map(()=>`<i></i>`).join(``)}</div>
    <button class="am-pause" type="button" aria-label="Pause The Film" aria-pressed="false"><svg viewBox="0 0 20 20" width="12" height="12" aria-hidden="true"><path class="when-moving" d="M5 3h3.500v14H5zM11.500 3H15v14h-3.500z" fill="currentColor"/><path class="when-still" d="M5 3l12 7-12 7z" fill="currentColor"/></svg></button>
    <p class="am-say" aria-hidden="true"></p>
    <ol class="sr-only">${t.beats.map(e=>`<li>${e.say}</li>`).join(``)}</ol>`;let n=e.querySelector(`svg`),r=e.querySelector(`.am-say`),i=[...e.querySelectorAll(`.am-steps i`)],a=new Map;n.querySelectorAll(`[data-a]`).forEach(e=>a.set(e.dataset.a,e));let o=new Map,s=(e,t)=>{for(let[n,r]of Object.entries(e)){let e=a.get(n);if(!e)continue;let i={...o.get(n),...r};o.set(n,i),e.style.transition=t?`none`:``,e.style.transitionDelay=!t&&r.d?`${r.d}ms`:``,(i.x!==void 0||i.y!==void 0||i.s!==void 0||i.sx!==void 0)&&(e.style.transform=`translate(${i.x??0}px, ${i.y??0}px) scale(${i.sx??i.s??1}, ${i.sy??i.s??1})`),i.o!==void 0&&(e.style.opacity=String(i.o)),i.c!==void 0&&(e.style.fill=i.c),i.draw!==void 0&&(e.style.strokeDashoffset=String(1-i.draw)),r.t!==void 0&&e.textContent!==r.t&&(e.textContent=r.t)}},c=-1,l=0,u=document.body.classList.contains(`paused`),d=e.querySelector(`.am-pause`),f=()=>{d.classList.toggle(`on`,u),d.setAttribute(`aria-pressed`,String(u)),d.setAttribute(`aria-label`,u?`Play The Film`:`Pause The Film`)};f(),d.addEventListener(`click`,e=>{e.stopPropagation(),u=!u,f(),window.clearTimeout(l),u||(l=window.setTimeout(h,900))});let p=()=>{o.clear(),s(t.start,!0),n.getBoundingClientRect()},m=e=>{c=e;let n=t.beats[e];s(n.set,!1),r.classList.remove(`in`),r.offsetWidth,r.textContent=n.say,r.classList.add(`in`);let a=n.ms??3600;i.forEach((t,n)=>{t.className=n<e?`done`:n===e?`now`:``,t.style.setProperty(`--ms`,`${a}ms`)}),window.clearTimeout(l),u||(l=window.setTimeout(h,a))},h=()=>{e.isConnected&&(c+1<t.beats.length?m(c+1):(n.classList.add(`am-out`),window.clearTimeout(l),l=window.setTimeout(()=>{e.isConnected&&(p(),n.classList.remove(`am-out`),m(0))},620)))};e.addEventListener(`click`,()=>{window.clearTimeout(l),h()}),p(),window.setTimeout(()=>m(0),80)}var af={name:`Pew Research Center's Study Of 2024 Voters`,url:`https://www.pewresearch.org/politics/2025/06/26/voting-patterns-in-the-2024-election/`},of={stands:`In its 2024 platform, the party says it wants billionaires to pay at least a 25% income tax, no cuts to Social Security, the right to an abortion restored, action on climate change with clean energy, a secure border and a fixed immigration system, and a stronger NATO. It opposes private school vouchers.`,standsFrom:{name:`The 2024 Democratic Party Platform`,url:`https://www.presidency.ucsb.edu/documents/2024-democratic-party-platform`},who:`In 2024, its candidate did best with Black voters (83%), people in cities (65%) and college graduates (57%), and won women by 7 points.`,whoFrom:af},sf={stands:`In its 2024 platform, the party says it wants lower prices and permanent tax cuts, no cuts to Social Security or Medicare, abortion rules left to the states, more American energy, a sealed border and the largest deportation program in US history, and tariffs on foreign goods. It supports school choice.`,standsFrom:{name:`The 2024 Republican Party Platform`,url:`https://www.presidency.ucsb.edu/documents/2024-republican-party-platform`},who:`In 2024, its candidate did best with people in rural areas (69%), people who go to religious services at least monthly (64%) and voters without college degrees (56%), and won men by 12 points.`,whoFrom:af},cf={"Democratic Party (US)":of,"Democratic Party (United States)":of,"Republican Party (US)":sf,"Republican Party (United States)":sf},lf=/\b(far[- ]right|far[- ]left|hard[- ]right|hard[- ]left|ultra-?\w+|extrem\w+|radical\w*|prejudic\w+|racis\w+|xenophob\w+|bigot\w*|fascis\w+|authoritarian\w*|populis\w+|controversial\w*|critics?|accused|some people|considered|so-called|hate\w*|dictator\w*|military government|past leader|former leader|scandal\w*|corrupt\w*)\b/i,uf=`#14171d`;function df(e,t){let n=e.reduce((e,t)=>e+t,0)||1,r=e.map(e=>e/n*t),i=r.map(Math.floor),a=t-i.reduce((e,t)=>e+t,0),o=r.map((e,t)=>[e-Math.floor(e),t]).sort((e,t)=>t[0]-e[0]);for(let e=0;a>0;e=(e+1)%o.length,a--)i[o[e][1]]++;return i}var ff=`M5 .4a2.6 2.6 0 1 0 0 5.2a2.6 2.6 0 1 0 0-5.2zM.8 13.2c0-3.8 1.9-6.3 4.2-6.3s4.2 2.5 4.2 6.3z`;function pf(e,t={}){let n=t.total??100,r=t.cols??20,a=df(e.map(e=>e.value),n),o=13.4,s=Math.ceil(n/r),c=0,l=``;return e.forEach((e,s)=>{let u=t.tip?t.tip(e,a[s]):`${e.label}: ${a[s]} in ${n}`;for(let t=0;t<a[s];t++,c++){let t=c%r*o+1.6,n=Math.floor(c/r)*17+1;l+=`<path class="grow" transform="translate(${t.toFixed(1)} ${n})" style="--d:${(c*7).toFixed(0)}ms" d="${ff}" fill="${i(e.color)}" data-tip="${i(u)}"/>`}}),`<svg class="viz crowd" viewBox="0 0 ${r*o} ${s*17}" role="img" aria-label="${i(e.map((e,t)=>`${e.label}: ${a[t]} of ${n}`).join(`, `))}">${l}</svg>`}function mf(e,t,n,r){let a=Math.min(40,Math.ceil(t/Math.max(1,Math.ceil(t/40)))),o=Math.ceil(t/a),s=8.6,c=``;for(let r=0;r<t;r++){let t=r%a*s+4,o=Math.floor(r/a)*s+4;c+=`<circle class="grow" style="--d:${(r*3).toFixed(0)}ms" cx="${t.toFixed(1)}" cy="${o.toFixed(1)}" r="3" fill="${r<e?i(n):`rgba(255,255,255,0.13)`}"/>`}return`<svg class="viz" viewBox="0 0 ${a*s} ${o*s}" role="img" aria-label="${e} of ${t}" ${r?`data-tip="${i(r)}"`:``}>${c}</svg>`}function hf(e,t,n={}){if(e.length<2)return``;let r=n.h??132,a=t=>t/(e.length-1)*354,o=e.map(e=>e.parts.reduce((e,t)=>e+t,0)||1),s=e.map(()=>0),c=``,l=``;t.forEach((t,u)=>{let d=e.map((e,t)=>s[t]+e.parts[u]/o[t]*r),f=d.map((e,t)=>`${a(t).toFixed(1)},${(r-e).toFixed(1)}`).join(` `),p=s.map((e,t)=>`${a(t).toFixed(1)},${(r-e).toFixed(1)}`).reverse().join(` `);c+=`<polygon points="${f} ${p}" fill="${i(t.color)}" fill-opacity="0.62" stroke="${uf}" stroke-width="1.2"/>`,n.storyBand===u&&(l=`<polyline points="${f}" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" pathLength="1" class="draw"/>`),s=d});let u=354/e.length,d=e.map((e,t)=>`<rect class="hit" x="${(a(t)-u/2).toFixed(1)}" y="0" width="${(u+.5).toFixed(1)}" height="${r}" data-tip="${i(n.tip?n.tip(e.x,e.parts):String(e.x))}"/>`).join(``),f=`<line x1="0" x2="354" y1="${r/2}" y2="${r/2}" stroke="rgba(255,255,255,.4)" stroke-width="1"/><text x="3" y="${r/2-4}" class="ax">Half Of All Countries</text>`;return`<div class="viz-wrap"><svg class="viz wipe" viewBox="0 0 354 ${r}" role="img" aria-label="Share of countries by band, ${e[0].x} to ${e[e.length-1].x}">${c}${f}${l}${d}</svg>
    <div class="axis-row"><span>${e[0].x}</span><span>${e[e.length-1].x}</span></div></div>`}function gf(e,t){if(e.length<2)return``;let n=t.h??84,r=t.unit??``,a=e.map(e=>e[0]),o=a[0],s=a[a.length-1],c=t.max??Math.max(...e.map(e=>e[1]),t.ref?.value??0)*1.1,l=e=>(e-o)/(s-o||1)*310,u=e=>n-e/(c||1)*(n-12),d=e.map(([e,t])=>`${l(e).toFixed(1)},${u(t).toFixed(1)}`).join(` `),f=e[e.length-1],p=`${l(o).toFixed(1)},${n} ${d} ${l(s).toFixed(1)},${n}`,m=e.map(([a,o],s)=>{let c=s===0?0:(l(e[s-1][0])+l(a))/2,u=s===e.length-1?310:(l(a)+l(e[s+1][0]))/2;return`<rect class="hit" x="${c.toFixed(1)}" y="0" width="${(u-c).toFixed(1)}" height="${n}" data-tip="${i(t.tip?t.tip(a,o):`${a}: ${o}${r}`)}"/>`}).join(``),h=t.ref?`<line x1="0" x2="310" y1="${u(t.ref.value).toFixed(1)}" y2="${u(t.ref.value).toFixed(1)}" stroke="rgba(255,255,255,.28)" stroke-width="1"/><text x="3" y="${(u(t.ref.value)-4).toFixed(1)}" class="ax">${i(t.ref.label)}</text>`:``;return`<div class="viz-wrap"><svg class="viz" viewBox="0 0 354 ${n}" role="img" aria-label="Rising from ${e[0][1]}${r} in ${o} to ${f[1]}${r} in ${s}">
      <line x1="0" x2="310" y1="${n-.5}" y2="${n-.5}" stroke="rgba(255,255,255,.16)" stroke-width="1"/>
      ${h}
      <polygon class="fadein" points="${p}" fill="${i(t.color)}" fill-opacity="0.12"/>
      <polyline class="draw" pathLength="1" points="${d}" fill="none" stroke="${i(t.color)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      <circle class="grow" style="--d:700ms" cx="${l(s).toFixed(1)}" cy="${u(f[1]).toFixed(1)}" r="4" fill="${i(t.color)}" stroke="${uf}" stroke-width="2"/>
      <text class="val fadein" x="${(l(s)+9).toFixed(1)}" y="${(u(f[1])+4).toFixed(1)}">${f[1].toFixed(0)}${i(r)}</text>
      ${m}
    </svg>
    <div class="axis-row" style="padding-right:${(44/354*100).toFixed(1)}%"><span>${o}</span><span>${s}</span></div></div>`}function _f(e,t,n={}){let r=[14,20,28,38],a=[.46,.64,.82,1],o=[];r.forEach((e,t)=>{for(let n=0;n<e;n++){let r=Math.PI-n/(e-1)*Math.PI;o.push({x:50+Math.cos(r)*a[t]*46,y:50-Math.sin(r)*a[t]*46,a:r})}}),o.sort((e,t)=>t.a-e.a);let s=Math.round(e),c=o.map((e,n)=>`<circle class="grow" style="--d:${(n*5).toFixed(0)}ms" cx="${e.x.toFixed(1)}" cy="${e.y.toFixed(1)}" r="2" fill="${n<s?i(t):`rgba(255,255,255,0.14)`}"/>`).join(``);return`<figure class="chamber" ${n.tip?`data-tip="${i(n.tip)}"`:``}><svg class="viz" viewBox="0 0 100 54" role="img" aria-label="${s} of every 100 seats">${c}<text x="50" y="50" text-anchor="middle" class="chamber-val">${s}%</text></svg>${n.label?`<figcaption>${i(n.label)}</figcaption>`:``}</figure>`}function vf(e,t={}){let n=e.reduce((e,t)=>e+t.value,0),r=t.total??n;if(!r)return``;let a=(e,t)=>{let n=Math.PI-t*Math.PI;return`${(50+Math.cos(n)*e).toFixed(2)} ${(50-Math.sin(n)*e).toFixed(2)}`},o=.006,s=0,c=`<path d="M${a(44,0)}A44 44 0 0 1 ${a(44,1)}L${a(30,1)}A30 30 0 0 0 ${a(30,0)}Z" fill="rgba(255,255,255,.08)"/>`;for(let t of e){if(!t.value)continue;let e=s/r,n=(s+t.value)/r;s+=t.value;let l=e+(e>0?o:0),u=Math.max(l+.002,n-(n<1?o:0)),d=+(u-l>1);c+=`<path d="M${a(44,l)}A44 44 0 ${d} 1 ${a(44,u)}L${a(30,u)}A30 30 0 ${d} 0 ${a(30,l)}Z" fill="${i(t.color)}" data-tip="${i(`${t.label}: ${t.value}`)}"/>`}return`<svg class="viz gauge wipe-arc" viewBox="0 0 100 54" role="img" aria-label="${i(e.map(e=>`${e.label} ${e.value}`).join(`, `))}">${c}<line x1="50" x2="50" y1="3.5" y2="21.5" stroke="#fff" stroke-width="1.1"/>${t.caption?`<text x="50" y="49" text-anchor="middle" class="gauge-val">${i(t.caption)}</text>`:``}</svg>`}function yf(e,t){let n=Math.max(...e.map(e=>e.value),1);return`<div class="face-bars">${e.map((e,r)=>`<button class="face-bar" data-select="country:${i(e.key)}" style="--d:${r*50}ms" data-tip="${i(e.label?`${e.name}, ${e.sub}: ${e.label}`:`${e.name}, ${e.sub}`)}">
    ${e.face}<span class="fb-body"><span class="fb-top"><b>${i(e.name)}</b><em>${i(e.label)}</em></span><small>${i(e.sub)}</small><span class="fb-track"><i class="grow-x" style="width:${(e.value/n*100).toFixed(1)}%;background:${i(t)};--d:${r*50+120}ms"></i></span></span>
  </button>`).join(``)}</div>`}function bf(e,t,n={}){if(!e.length)return``;let r=Math.floor(Math.min(...e.map(e=>e.year))/10)*10,a=Math.floor(Math.max(...e.map(e=>e.year))/10)*10,o=(a-r)/10+1,s=354/o,c=Math.min(s*.9,9),l=new Map;for(let t of[...e].sort((e,t)=>e.year-t.year)){let e=Math.floor(t.year/10)*10;l.has(e)||l.set(e,[]),l.get(e).push(t)}let u=Math.max(...[...l.values()].map(e=>e.length));for(;n.maxH&&c>3&&Math.ceil(u/Math.max(1,Math.floor(s/c)))*c+4>n.maxH;)c-=.25;let d=Math.max(1,Math.floor(s/c)),f=Math.ceil(u/d)*c+4,p=``;for(let[e,n]of l){let a=(e-r)/10*s;n.forEach((n,o)=>{let l=o%d,u=Math.floor(o/d);p+=`<circle class="grow" style="--d:${((e-r)*6+o*6).toFixed(0)}ms" cx="${(a+(l+.5)*(s/d)).toFixed(1)}" cy="${(f-(u+.5)*c).toFixed(1)}" r="${(c/2-.7).toFixed(2)}" fill="${i(t)}" data-tip="${i(`${n.name}: ${n.year}`)}" data-select="country:${i(n.key)}"/>`})}let m=[],h=o>9?20:10;for(let e=r;e<=a;e+=h)m.push(`<text x="${((e-r)/10*s+1).toFixed(1)}" y="${f+13}" class="ax">${e}s</text>`);return`<svg class="viz piles" viewBox="0 0 354 ${f+18}" role="img" aria-label="Number of countries by decade, from the ${r}s to the ${a}s"><line x1="0" x2="354" y1="${f+.5}" y2="${f+.5}" stroke="rgba(255,255,255,.16)"/>${p}${m.join(``)}</svg>`}function xf(e,t){let n=8.4,r=t.unit??``,a=e=>(e-t.min)/(t.max-t.min)*345.6+n/2,o=[],s=0,c=[];for(let t of[...e].sort((e,t)=>e.value-t.value)){let e=a(t.value),r=0;for(;o.some(t=>Math.hypot(t.x-e,t.y-r)<n);)r+=2.4;o.push({x:e,y:r}),s=Math.max(s,r),c.push(`<circle class="grow" style="--d:${(e*2).toFixed(0)}ms" cx="${e.toFixed(1)}" cy="@${r.toFixed(1)}" r="${(n/2-.5).toFixed(2)}" fill="${i(t.color)}" data-tip="${i(t.tip)}" data-select="country:${i(t.key)}"/>`)}let l=s+n+2,u=c.map(e=>e.replace(/cy="@([\d.]+)"/,(e,t)=>`cy="${(l-n/2-Number(t)).toFixed(1)}"`)).join(``),d=t.marker?`<line x1="${a(t.marker.value).toFixed(1)}" x2="${a(t.marker.value).toFixed(1)}" y1="0" y2="${l+4}" stroke="rgba(255,255,255,.34)"/>`:``;return`<div class="viz-wrap"><svg class="viz" viewBox="0 0 354 ${l+5}" role="img" aria-label="${e.length} places from ${t.min}${r} to ${t.max}${r}"><line x1="0" x2="354" y1="${l+.5}" y2="${l+.5}" stroke="rgba(255,255,255,.16)"/>${d}${u}</svg>
    <div class="axis-row"><span>${t.min}${i(r)}</span>${t.marker?`<span>${i(t.marker.label)}</span>`:``}<span>${t.max}${i(r)}</span></div></div>`}function Sf(e,t,n){let r=Math.max(...e.map(e=>Math.abs(e.value)),.001);return`<div class="shift-bars">${e.map((e,a)=>{let o=Math.abs(e.value)/r*100;return`<button class="shift-bar" data-select="country:${i(e.key)}" data-tip="${i(`${e.name}: ${e.label}`)}"><span>${i(e.name)}</span>
      <span class="sb-side left">${e.value<0?`<i class="grow-x from-right" style="width:${o.toFixed(1)}%;background:${i(n)};--d:${a*40}ms"></i>`:``}</span>
      <span class="sb-side">${e.value>=0?`<i class="grow-x" style="width:${o.toFixed(1)}%;background:${i(t)};--d:${a*40}ms"></i>`:``}</span></button>`}).join(``)}</div>`}function Cf(e,t=new Date){let n=new Date(t.getFullYear(),t.getMonth(),1),r=e=>(e.getTime()-n.getTime())/31536e6*354,a=``;for(let e=0;e<12;e++){let t=new Date(n.getFullYear(),n.getMonth()+e,1),i=r(t);a+=`<line x1="${i.toFixed(1)}" x2="${i.toFixed(1)}" y1="26" y2="30" stroke="rgba(255,255,255,.2)"/>`,e%2==0&&(a+=`<text x="${(i+1).toFixed(1)}" y="41" class="ax">${t.toLocaleString(`en`,{month:`short`})}</text>`)}let o=[],s=``;e.forEach((e,t)=>{let n=new Date(e.date),a=r(n);if(a<0||a>354)return;let c=o.filter(e=>Math.abs(e-a)<8.5).length;o.push(a),s+=`<circle class="grow" style="--d:${(t*30).toFixed(0)}ms" cx="${a.toFixed(1)}" cy="${(24-c*8.5).toFixed(1)}" r="3.6" fill="${i(e.color)}" data-tip="${i(e.label)}" ${e.select?`data-select="${i(e.select)}"`:``}/>`});let c=r(t);return`<svg class="viz" viewBox="0 -14 354 58" role="img" aria-label="${e.length} votes in the next twelve months"><line x1="0" x2="354" y1="28" y2="28" stroke="rgba(255,255,255,.2)"/><line x1="${c.toFixed(1)}" x2="${c.toFixed(1)}" y1="18" y2="32" stroke="#fff" stroke-width="1.4"/>${a}${s}</svg>`}function wf(e){return`<div class="viz-legend">${e.map(e=>`<span><i style="background:${i(e.color)}"></i>${i(e.label)}</span>`).join(``)}</div>`}var Tf={farleft:.05,left:.2,centreleft:.36,centre:.5,centreright:.64,right:.8,farright:.95};function Ef(e,t){let n=e.filter(e=>(e.seats??0)>0),r=n.filter(e=>e.bloc&&Tf[e.bloc]!==void 0);if(r.length<2)return``;let a=n.reduce((e,t)=>e+(t.seats??0),0)||1,o=[...r].sort((e,t)=>(t.seats??0)-(e.seats??0)),s=[],c=62,l=``;o.forEach((e,n)=>{let r=(e.seats??0)/a,o=Math.max(4,Math.sqrt(r)*24*1.3),u=14+Tf[e.bloc]*326,d=62-o-3;for(let e=0;e<12;e++){let e=s.find(e=>Math.hypot(e.x-u,e.y-d)<e.r+o+1.5);if(!e)break;d=e.y-e.r-o-2}s.push({x:u,y:d,r:o}),c=Math.min(c,d-o);let f=n<3&&o>9?`<text x="${u.toFixed(1)}" y="${(d+3.4).toFixed(1)}" text-anchor="middle" class="pl-name" style="--d:${n*70}ms">${i(Df(e.name))}</text>`:``;l+=`<g data-tip="${i(`${e.name}: ${r>.4?`a big share of the seats`:r>.15?`a good share of the seats`:`a small share of the seats`}`)}"><circle class="grow" style="--d:${n*70}ms" cx="${u.toFixed(1)}" cy="${d.toFixed(1)}" r="${o.toFixed(1)}" fill="${i(t.get(e)??`#8a93a0`)}"/>${f}</g>`});let u=Math.max(0,-c+3),d=80+u,f=u,p=o.slice(0,4).map(e=>`<span><i style="background:${i(t.get(e)??`#8a93a0`)}"></i>${i(e.name.length>24?`${e.name.slice(0,22)}…`:e.name)}</span>`).join(``);return`<svg class="viz party-lines" viewBox="0 ${-f} 354 ${d}" role="img" aria-label="${i(o.map(e=>`${e.name} on the ${e.bloc}`).join(`, `))}">
      <defs><linearGradient id="pl-axis" x1="0" x2="1"><stop offset="0" stop-color="#5a78f0"/><stop offset="0.5" stop-color="#a7adb8"/><stop offset="1" stop-color="#e0474c"/></linearGradient></defs>
      <rect x="4" y="62" width="346" height="3" rx="1.5" fill="url(#pl-axis)"/>
      <text x="4" y="77" class="ax">Left</text><text x="177" y="77" class="ax" text-anchor="middle">Centre</text><text x="350" y="77" class="ax" text-anchor="end">Right</text>
      ${l}
    </svg><div class="viz-legend">${p}</div>`}var Df=e=>{let t=/\(([A-Z][\w-]{1,7})\)/.exec(e)?.[1];return t?t.slice(0,5):/^[A-Z][\w/-]{1,5}$/.test(e)?e.slice(0,5):e.split(/\s+/).filter(e=>/^\p{Lu}/u.test(e)).map(e=>e[0]).join(``).slice(0,4)};function Of(e){let t=(K.world.blocs??[]).filter(t=>t.members.includes(e));return t.length?`<div class="bloc-chips">${t.map(e=>`<span class="bloc-chip" style="--c:${e.color}" data-tip="${i(e.what)}"><i></i>${i(e.name)}</span>`).join(``)}</div>`:``}function kf(e){return e>=95?`A Democracy Of Some Kind Throughout`:e>=70?`A Democracy Of Some Kind For Most Of It`:e>=40?`A Democracy For A Good Part Of It`:e>=15?`A Democracy For A Short Stretch`:e>0?`Barely A Democracy At All`:`Never A Democracy`}var Af=[{key:`elections`,label:`Fair Elections`,color:`#5a78f0`,what:`Whether votes are free, fair and really counted.`},{key:`speech`,label:`Free Speech`,color:`#1fa3ae`,what:`Whether people and the press can say what they think.`},{key:`law`,label:`Rule Of Law`,color:`#6f9a2a`,what:`Whether the law applies to everyone, including those in power.`},{key:`clean`,label:`Clean Government`,color:`#c4821a`,what:`Whether officials serve the public rather than take bribes.`},{key:`rights`,label:`Human Rights`,color:`#a06ff0`,what:`Whether people are safe from abuse by their government.`}];function jf(e){return e>=.8?`Strong`:e>=.6?`Fairly Strong`:e>=.4?`Mixed`:e>=.2?`Weak`:`Very Weak`}function Mf(e){let t=Af.filter(t=>e[t.key]!==void 0);if(!t.length)return``;let n=[...t].sort((t,n)=>(e[n.key]??0)-(e[t.key]??0)),r=t.reduce((t,n)=>t+(e[n.key]??0),0)/t.length,i=n[0],a=n[n.length-1];return r>=.8?`Scores well on all five of these.`:r<.25?`Scores poorly on all five of these.`:`Strongest on ${i.label.toLowerCase()}, weakest on ${a.label.toLowerCase()}.`}function Nf(e){let t=Af.filter(t=>e[t.key]!==void 0);if(t.length<3)return``;let n=Af.length,r=``;Af.forEach((t,a)=>{let o=e[t.key];if(o===void 0)return;let s=a*360/n,c=Math.max(5,o*62),l=.46*c+4,u=(e,t)=>`M74 74C${74-t} ${74-e*.42} ${74-t} ${74-e*.86} 74 ${74-e}C${74+t} ${74-e*.86} ${74+t} ${74-e*.42} 74 74Z`;r+=`<g transform="rotate(${s} 74 74)"><path d="${u(62,32.519999999999996)}" fill="${t.color}" fill-opacity="0.1"/><path class="petal" style="--d:${a*70}ms;transform-origin:74px 74px" d="${u(c,l)}" fill="${t.color}" fill-opacity="0.92" data-tip="${i(`${t.label}: ${jf(o)}. ${t.what}`)}"/></g>`});let a=t.map(t=>`<span data-tip="${i(t.what)}"><i style="background:${t.color}"></i><b>${i(t.label)}</b><em>${i(jf(e[t.key]))}</em></span>`).join(``);return`<div class="flower"><svg class="viz" viewBox="0 0 148 148" role="img" aria-label="${i(t.map(t=>`${t.label}: ${jf(e[t.key])}`).join(`, `))}">${r}<circle cx="74" cy="74" r="4" fill="#fff"/></svg><div class="flower-key">${a}</div></div>`}var Pf={voters:`#1fa3ae`,lower:`#c4821a`,upper:`#d98f4a`,hog:`#a06ff0`,hos:`#c068cf`,party:`#e0474c`,military:`#6f9a2a`,clerics:`#2aa3ab`,family:`#e8b339`,crown:`#e8b339`,electors:`#5a78f0`,regions:`#6f9a2a`},Ff={voters:`Voters`,lower:`Parliament`,upper:`Upper house`,hog:`Head of government`,hos:`Head of state`,party:`Ruling party`,military:`Armed forces`,clerics:`Religious leaders`,family:`Royal family`,electors:`Electors`,regions:`Regions`,crown:`The monarch`},If={voters:`<path d="M9 1.500a2.300 2.300 0 1 0 0 4.600a2.300 2.300 0 1 0 0-4.600zM5 12.500c0-3 1.700-5.300 4-5.300s4 2.300 4 5.300zM3.500 4.300a1.700 1.700 0 1 0 0 3.400a1.700 1.700 0 1 0 0-3.400zM.5 12.500c0-2.400 1.200-4.100 2.900-4.100c.5 0 .9.100 1.300.400c-.8 1-1.200 2.300-1.200 3.700zM14.500 4.300a1.700 1.700 0 1 1 0 3.400a1.700 1.700 0 1 1 0-3.400zM17.500 12.500c0-2.400-1.200-4.100-2.900-4.100c-.5 0-.9.100-1.300.400c.8 1 1.200 2.300 1.200 3.700z"/>`,lower:`<path d="M1 13a8 8 0 0 1 16 0h-3.600a4.400 4.400 0 0 0-8.800 0z"/>`,upper:`<path d="M3 12a6 6 0 0 1 12 0h-3a3 3 0 0 0-6 0z"/><path d="M6 4h6" stroke="currentColor" stroke-width="1.400" stroke-linecap="round"/>`,hog:`<path d="M9 1.500a3 3 0 1 0 0 6a3 3 0 1 0 0-6zM3.500 15c0-4 2.400-6.300 5.500-6.300s5.500 2.300 5.500 6.300z"/>`,hos:`<path d="M9 3.500a2.700 2.700 0 1 0 0 5.400a2.700 2.700 0 1 0 0-5.400zM4 15.500c0-3.500 2.200-5.700 5-5.700s5 2.200 5 5.700zM9 0l.8 1.700l1.800.2l-1.300 1.200l.4 1.800l-1.700-.9l-1.700.9l.4-1.800l-1.300-1.200l1.800-.2z"/>`,party:`<path d="M9 1l2.400 5.100l5.500.7l-4 3.800l1 5.500l-4.900-2.700l-4.900 2.700l1-5.500l-4-3.800l5.500-.7z"/>`,military:`<path d="M9 1l1.900 4.100l4.400.5l-3.300 3l.9 4.400l-3.900-2.200l-3.900 2.200l.9-4.400l-3.300-3l4.400-.5zM3 15l6 2l6-2" fill-rule="evenodd"/>`,clerics:`<path d="M1 3.500c2.800-1.500 5.500-1.500 8 .5c2.500-2 5.200-2 8-.5v11c-2.800-1.500-5.500-1.500-8 .5c-2.500-2-5.200-2-8-.5z"/>`,family:`<path d="M1.500 14L2.800 5l3.700 3.500L9 3l2.500 5.500L15.200 5l1.300 9z"/>`,crown:`<path d="M1.500 14L2.800 5l3.700 3.500L9 3l2.500 5.500L15.200 5l1.300 9z"/>`,electors:`<path d="M3.500 1.500h11v15h-11zM6 9l2.200 2.400L12.300 6.500" fill-rule="evenodd"/>`,regions:`<path d="M1.500 2h6.500v6.500H1.500zM10 2h6.500v6.500H10zM1.500 10.500h6.500V17H1.500zM10 10.500h6.500V17H10z"/>`},Lf={elect:`elect`,choose:`choose`,appoint:`appoint`,inherit:`passes to`,approve:`must approve`,remove:`can remove`,advise:`advise`},Rf=new Set([`elect`,`choose`,`appoint`,`inherit`]);function zf(e,t=15){if(e.length<=t)return[e];let n=e.split(/\s+/),r=[e],i=1/0;for(let e=1;e<n.length;e++){let t=n.slice(0,e).join(` `),a=n.slice(e).join(` `),o=Math.max(t.length,a.length);o<i&&(i=o,r=[t,a])}return r}function Bf(e,t={},n){let r=e.filter(e=>e.a&&e.b&&e.a!==e.b);if(!r.length)return``;let a=[...new Set(r.flatMap(e=>[e.a,e.b]))],o=r.filter(e=>Rf.has(e.v)),s=new Map(a.map(e=>[e,0]));for(let e=0;e<a.length;e++){let e=!1;for(let t of o){let n=s.get(t.a)+1;n>s.get(t.b)&&n<a.length&&(s.set(t.b,n),e=!0)}if(!e)break}let c=[];for(let e of a)(c[s.get(e)]??=[]).push(e);let l=c.filter(e=>e?.length),u=new Map;l.forEach((e,t)=>{if(t>0){let t=e=>{let t=r.filter(t=>t.b===e&&u.has(t.a)).map(e=>u.get(e.a).x);return t.length?t.reduce((e,t)=>e+t,0)/t.length:177};e.sort((e,n)=>t(e)-t(n))}let n=Math.min(112,(354-(e.length-1)*10)/e.length),i=e.length*n+(e.length-1)*10;e.forEach((e,r)=>{u.set(e,{x:(354-i)/2+r*(n+10)+n/2,y:t*86+1,w:n})})});let d=l.length*42+(l.length-1)*44+2,f=n&&(s.get(n)??1)===0?14:0,p=!mu(),m=``,h=``;r.forEach((e,t)=>{let n=u.get(e.a),r=u.get(e.b),a=Rf.has(e.v),o=n.y===r.y,c=r.y<n.y,l,d,f;if(o){let e=n.x<r.x,t=n.x+(e?n.w/2:-n.w/2),i=r.x+(e?-r.w/2:r.w/2),a=n.y+21;l=`M${t.toFixed(1)} ${a}C${(t+(e?8:-8)).toFixed(1)} ${a+8} ${(i+(e?-8:8)).toFixed(1)} ${a+8} ${i.toFixed(1)} ${a}`,d=(t+i)/2,f=a+6}else if(c){let e=n.x>=177?1:-1,t=n.x+e*n.w/2,i=n.y+21,a=r.x+e*r.w/2,o=r.y+21,s=Math.max(t,a)*+(e>0)+Math.min(t,a)*+(e<0)+e*20;l=`M${t.toFixed(1)} ${i}C${s.toFixed(1)} ${i} ${s.toFixed(1)} ${o} ${a.toFixed(1)} ${o}`,d=s-e*3,f=(i+o)/2}else{let e=n.y+42,t=r.y-1,i=(t-e)*.5;l=`M${n.x.toFixed(1)} ${e}C${n.x.toFixed(1)} ${e+i} ${r.x.toFixed(1)} ${t-i} ${r.x.toFixed(1)} ${t}`,d=(n.x+r.x)/2,f=(e+t)/2}let g=120+s.get(e.a)*170+t*30;m+=`<path class="${a?`pd-edge`:`pd-edge side`} draw" style="animation-delay:${g}ms;--c:${Pf[e.a]??`#ffffff`}" pathLength="1" d="${l}" marker-end="url(#pd-head)"/>`,p&&a&&(m+=`<circle class="pd-mote" r="2.4" style="--c:${Pf[e.a]??`#ffffff`}"><animateMotion dur="2.8s" begin="${(.9+t*.37).toFixed(2)}s" repeatCount="indefinite" path="${l}"/></circle>`);let _=Lf[e.v]??e.v,v=_.length*5.4+10;h+=`<g class="fadein" style="animation-delay:${g+260}ms"><rect x="${(d-v/2).toFixed(1)}" y="${(f-7.5).toFixed(1)}" width="${v.toFixed(1)}" height="15" rx="7.5" fill="#14171d" fill-opacity="0.88"/><text class="pd-verb" x="${d.toFixed(1)}" y="${(f+3.4).toFixed(1)}" text-anchor="middle">${i(_)}</text></g>`});let g=a.map(e=>{let r=u.get(e),a=e===n,o=zf(t[e]||Ff[e]||e),c=40+s.get(e)*170,l=If[e]??If.hog,d=r.x-r.w/2+8,f=d+23,p=o.map((e,t)=>`<text class="pd-label" x="${f.toFixed(1)}" y="${(r.y+21+3.6+(t-(o.length-1)/2)*12).toFixed(1)}">${i(e)}</text>`).join(``);return`<g class="pd-node ${a?`runs`:``} grow" style="--d:${c}ms;--c:${Pf[e]??`#8a93a0`}">
      <rect x="${(r.x-r.w/2).toFixed(1)}" y="${r.y}" width="${r.w.toFixed(1)}" height="42" rx="12"/>
      <g transform="translate(${d.toFixed(1)} ${(r.y+21-9).toFixed(1)})" class="pd-icon">${l}</g>
      ${p}
      ${a?`<text class="pd-tag" x="${r.x.toFixed(1)}" y="${r.y-5}" text-anchor="middle">Runs The Country</text>`:``}
    </g>`}).join(``),_=r.map(e=>`${t[e.a]||Ff[e.a]||e.a} ${Lf[e.v]??e.v} ${t[e.b]||Ff[e.b]||e.b}`).join(`; `);return`<svg class="viz power" viewBox="0 ${-f} 354 ${d+f}" role="img" aria-label="${i(_)}">
    <defs><marker id="pd-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1.200L7 4L1 6.800" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.300" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
    ${m}${g}${h}</svg>`}var Vf={3:{label:Y.liberal.label,color:Y.liberal.color},2:{label:Y.electoral.label,color:Y.electoral.color},1:{label:Y.hybrid.label,color:Y.hybrid.color},0:{label:Y.closed.label,color:Y.closed.color},[-1]:{label:`No single record`,color:`rgba(255,255,255,0.1)`}},Hf=new Date().getFullYear();function Uf(e,t,n){let r=K.byCountry[e]?.r;if(!r?.length)return[];let i=[];return r[0][0]>t&&i.push({from:t,to:Math.min(r[0][0],n),regime:-1}),r.forEach(([e,a],o)=>{let s=o+1<r.length?r[o+1][0]:n,c=Math.max(e,t),l=Math.min(s,n);l>c&&i.push({from:c,to:l,regime:a})}),i}function Wf(e,t=100){let n=Uf(e,Hf-t,Hf);return n.length?n.filter(e=>e.regime>=2).reduce((e,t)=>e+(t.to-t.from),0):null}function Gf(e){let t=Uf(e,Hf-100,Hf);if(!t.length)return``;let n=t.map(e=>`<i style="flex:${e.to-e.from};background:${Vf[e.regime].color}" data-tip="${i(`${e.from} to ${e.to}: ${Vf[e.regime].label}`)}"></i>`).join(``),r=Wf(e);return`<div class="row-title">The Last Hundred Years <small>${r===null?``:`${kf(r)}, ${r} Years`}</small></div>
    <div class="ribbon-mini">${n}</div>`}var Kf={independence:`Independence`,constitution:`New constitution`,democracy:`Democracy`,coup:`Coup`,revolution:`Revolution`,suffrage:`The vote`,union:`Union`,monarchy:`Monarchy`,split:`Split`,reform:`Reform`};function qf(e,t=[]){let n=!!K.byCountry[e]?.r?.length;if(!n&&!t.length)return``;let r=[...t].sort((e,t)=>e.y-t.y),a=K.byCountry[e]?.r?.[0]?.[0]??1900,o=r.length?Math.min(r[0].y,1900):1900,s=n?Math.max(Math.min(o,1900),Math.min(a,o),1789):o,c=Hf,l=Math.max(280,r.length*40+20),u=e=>(Math.max(s,Math.min(c,e))-s)/(c-s)*l,d=Uf(e,s,c),f=d.map(e=>`<i style="top:${u(e.from).toFixed(1)}px;height:${Math.max(1,u(e.to)-u(e.from)).toFixed(1)}px;background:${Vf[e.regime].color}" data-tip="${i(`${e.from} to ${e.to}: ${Vf[e.regime].label}`)}"></i>`).join(``),p=c-s>160?50:25,m=``;for(let e=Math.ceil(s/p)*p;e<c;e+=p)m+=`<span class="tl-year" style="top:${u(e).toFixed(1)}px">${e}</span>`;let h=[],g=0;for(let e of r){let t=Math.max(u(e.y)-12,g);h.push(t),g=t+40}let _=l-40+12;for(let e=h.length-1;e>=0;e--)h[e]>_&&(h[e]=_),_=h[e]-40;let v=r.map((e,t)=>{let n=u(e.y),r=h[t]+12;return`<path class="draw" pathLength="1" style="animation-delay:${200+t*90}ms" d="M1 ${n.toFixed(1)}C12 ${n.toFixed(1)} 12 ${r.toFixed(1)} 23 ${r.toFixed(1)}"/>`}).join(``),y=r.map((e,t)=>`<div class="tl-event" style="top:${h[t].toFixed(1)}px;animation-delay:${240+t*90}ms"><b>${e.y}</b><span>${i(e.t)}</span>${e.k&&Kf[e.k]?`<small>${i(Kf[e.k])}</small>`:``}</div>`).join(``),b=[...new Set(d.map(e=>e.regime))].sort((e,t)=>t-e),x=Wf(e);return`<div class="timeline" style="height:${l+4}px">
      <div class="tl-marks">${m}</div>
      <div class="tl-ribbon">${f||`<i style="top:0;height:100%;background:${Vf[-1].color}"></i>`}</div>
      <svg class="tl-lines" width="24" height="${l+4}" viewBox="0 0 24 ${l+4}" aria-hidden="true">${v}</svg>
      <div class="tl-events">${y}</div>
    </div>
    ${n?`${wf(b.map(e=>Vf[e]))}
    <p class="lede tl-lede">${x===null?``:`<b>The Last Hundred Years:</b> ${kf(x)}${x>0?`, ${x} of them`:``} on V-Dem's count.`}</p>
    <p class="provenance">Colors: V-Dem's Regimes of the World, via Our World in Data. Under colonial rule, the record usually describes the colonial government. "No single record" means the data has a gap, as with a divided or absorbed country.</p>`:``}`}var Jf=`#c4821a`,Yf=`#a06ff0`,Xf=`#2aa3ab`,Zf=`#6f9a2a`,Qf=`rgba(255,255,255,0.14)`,$f=11,ep=`0.22 1 0.36 1`,tp=354,np=e=>Math.max(0,Math.min(.995,e));function rp(e,t){if(mu())return``;let n=t.map(([e])=>np(e)),r=t.map(([,e])=>e);n[0]>0&&(n.unshift(0),r.unshift(r[0])),n[n.length-1]<1&&(n.push(1),r.push(r[r.length-1]));let i=Array.from({length:n.length-1},()=>ep).join(`;`);return`<animate attributeName="${e}" dur="${$f}s" repeatCount="indefinite" calcMode="spline" keyTimes="${n.map(e=>e.toFixed(3)).join(`;`)}" keySplines="${i}" values="${r.join(`;`)}"/>`}var ip=[[.94,1],[.985,0]],ap=(e,t)=>rp(`opacity`,[[e,0],[e+.04,1],...t===void 0?ip:[[t,1],[t+.03,0]]]),op=e=>mu()&&!e?` opacity="0"`:mu()?``:` opacity="0"`;function sp(e,t,n,r,a={}){let o=a.until!==void 0;return`<text x="${e}" y="${t}" class="${a.cls??`vs-label`}" text-anchor="${a.anchor??`middle`}"${op(!o)}>${i(n)}${ap(r,a.until)}</text>`}function cp(e,t,n,r,i,a,o,s){let c=[[i,0],[i+.07,a]];for(let e of o??[])c.push([e.at,c[c.length-1][1]],[e.at+.06,e.h]);let l=rp(`height`,c),u=rp(`y`,c.map(([e,n])=>[e,t-n])),d=o?.length?o[o.length-1].h:a,f=s===void 0?``:rp(`fill-opacity`,[[0,1],[s,1],[s+.04,.16]]);return`<rect x="${e}" y="${t-d}" width="${n}" height="${d}" rx="2.500" fill="${r}"${mu()&&s!==void 0?` fill-opacity="0.16"`:``}>${l}${u}${f}</rect>`}function lp(e,t,n,r,i=5.5){return`<circle cx="${e}" cy="${t}" r="${i}" fill="${n}"${op(!0)}>${ap(r)}${rp(`r`,[[r,0],[r+.05,i]])}</circle>`}function up(e,t,n){return`<path d="M${e-5} ${t}l3.500 4l6.500-7.500" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${op(!0)}>${ap(n)}</path>`}function dp(e,t,n,r){return`<path d="M${e} ${n}H${t}" stroke="rgba(255,255,255,.5)" stroke-width="1"${op(!0)}>${ap(r)}</path>`}function fp(e,t,n,r){return`<path d="M${e} ${n}H${t}m-5-4l5 4l-5 4" fill="none" stroke="rgba(255,255,255,.62)" stroke-width="1.400" stroke-linecap="round" stroke-linejoin="round"${op(!0)}>${ap(r)}</path>`}function pp(e,t,n,r,i,a){let o=e,s=``;return i.forEach(([e,i],c)=>{let l=e*n;s+=`<rect x="${o.toFixed(1)}" y="${t}" width="${Math.max(0,l-2).toFixed(1)}" height="${r}" rx="2.500" fill="${i}"${op(!0)}>${ap(a+c*.012)}</rect>`,o+=l}),s}function mp(){let e=[[45,35,20],[42,38,20],[40,25,35],[30,45,25],[28,22,50]],t=[Jf,Yf,Xf],n=``,r=[];return e.forEach((e,i)=>{let a=22+i*66,o=.03+i*.05,s=e.indexOf(Math.max(...e));r.push(t[s]),e.forEach((e,r)=>{n+=cp(a+r*14,62,11,t[r],o,e*.9,void 0,r===s?void 0:.34+i*.05)}),n+=sp(a+19,74,`Area ${i+1}`,o,{cls:`vs-small`}),n+=lp(a+19,88,t[s],.36+i*.05)}),n+=sp(tp/2,112,`One party won 37% of the votes, and takes 60% of the seats`,.68),n+=pp(40,122,274,7,[[.37,Jf],[.33,Yf],[.3,Xf]],.7),n+=pp(40,133,274,7,[[.6,Jf],[.2,Yf],[.2,Xf]],.76),n+=sp(36,129,`votes`,.7,{cls:`vs-small`,anchor:`end`})+sp(36,140,`seats`,.76,{cls:`vs-small`,anchor:`end`}),wp(146,n)}function hp(){let e=sp(82,12,`Round one`,.02,{cls:`vs-head`})+sp(270,12,`Round two`,.42,{cls:`vs-head`});return e+=dp(16,150,51,.05)+sp(152,54,`half`,.05,{cls:`vs-small`,anchor:`start`}),[[Jf,38],[Yf,31],[Xf,19],[Zf,12]].forEach(([t,n],r)=>{e+=cp(22+r*30,96,22,t,.05+r*.03,n*.9,void 0,r>1?.34:void 0)}),e+=sp(82,112,`Nobody passes half, so the top two go on`,.26,{cls:`vs-small`}),e+=fp(172,212,58,.4),e+=dp(222,330,51,.44),e+=cp(238,96,30,Jf,.48,48.6)+cp(278,96,30,Yf,.5,41.4),e+=up(253,40,.6),e+=sp(270,112,`Most people now have to pick between two`,.56,{cls:`vs-small`}),wp(120,e)}function gp(){let e=`<g${op(!0)}>${ap(.02)}<rect x="18" y="20" width="52" height="66" rx="4" fill="rgba(255,255,255,.92)"/><g class="vs-ballot"><text x="26" y="39">1</text><text x="26" y="58">2</text><text x="26" y="77">3</text></g><path d="M38 35h24M38 54h24M38 73h24" stroke="#14171d" stroke-width="2.400" stroke-linecap="round" opacity=".5"/></g>`;return e+=sp(44,104,`Rank in order`,.02,{cls:`vs-small`}),e+=dp(100,340,46,.14)+sp(342,42,`half`,.14,{cls:`vs-small`,anchor:`end`}),e+=cp(130,96,42,Jf,.16,42,[{at:.52,h:56}]),e+=cp(196,96,42,Yf,.18,36,[{at:.52,h:44}]),e+=cp(262,96,42,Xf,.2,22,[{at:.46,h:0}]),e+=sp(283,112,`Last place is out`,.38,{cls:`vs-small`}),e+=sp(186,112,`Their votes move to each voter's next choice`,.5,{cls:`vs-small`}),e+=up(151,30,.66),wp(120,e)}function _p(e){let t=!!e&&e>0,n=t?[[.46,Jf],[.31,Yf],[.18,Xf],[.05,Zf]]:[[.5,Jf],[.3,Yf],[.2,Xf]],r=sp(tp/2,12,`Everyone votes for a party`,.02,{cls:`vs-head`});r+=pp(20,22,314,18,n,.05),t&&(r+=sp(318.3,54,`${e}% needed to get in`,.22,{cls:`vs-small`,anchor:`end`}),r+=`<path d="M325.3 20V44" stroke="#fff" stroke-width="1.400"${op(!0)}>${ap(.22)}</path>`),r+=sp(tp/2,74,`Seats are shared out to match the votes`,.3,{cls:`vs-head`});let i=t?[[10,Jf],[7,Yf],[3,Xf]]:[[10,Jf],[6,Yf],[4,Xf]],a=0;for(let[e,t]of i)for(let n=0;n<e;n++,a++)r+=lp(30+a*15.2,92,t,.36+a*.022);return wp(102,r)}function vp(){let e=sp(tp/2,12,`Rank the people you like. Three seats to fill`,.02,{cls:`vs-head`});e+=dp(20,300,62,.08)+sp(302,65,`share needed`,.08,{cls:`vs-small`,anchor:`start`});let t=[30,86,142,198,254];return e+=cp(t[0],88,40,Jf,.08,46,[{at:.3,h:26}]),e+=cp(t[1],88,40,Jf,.1,16,[{at:.3,h:30}]),e+=cp(t[2],88,40,Yf,.12,22,[{at:.62,h:30}]),e+=cp(t[3],88,40,Xf,.14,12,[{at:.54,h:0}]),e+=cp(t[4],88,40,Yf,.16,8,[{at:.46,h:0}]),e+=lp(50,100,Jf,.28,5)+lp(106,100,Jf,.42,5)+lp(162,100,Yf,.72,5),e+=sp(tp/2,122,`Spare votes, and votes for those knocked out, move to each voter's next choice`,.32,{cls:`vs-small`}),wp(128,e)}function yp(e){let t=sp(88,12,`Vote 1: a local person`,.02,{cls:`vs-head`})+sp(266,12,`Vote 2: a party`,.08,{cls:`vs-head`});return[Jf,Jf,Jf,Jf,Yf,Yf].forEach((e,n)=>{t+=lp(36+n*21,30,e,.08+n*.03)}),t+=pp(190,24,150,13,[[.4,Jf],[.4,Yf],[.2,Xf]],.14),t+=sp(tp/2,58,`Local winners take their seats first`,.32,{cls:`vs-small`}),[[Jf,!1],[Jf,!1],[Jf,!1],[Jf,!1],[Yf,!1],[Yf,!1],[Yf,!0],[Yf,!0],[Xf,!0],[Xf,!0]].forEach(([e,n],r)=>{let i=36+r*32;n&&(t+=`<circle cx="${i}" cy="78" r="8" fill="none" stroke="#fff" stroke-width="1.200" stroke-dasharray="2 2.500"${op(!0)}>${ap(.58+r*.025)}</circle>`),t+=lp(i,78,e,(n?.58:.34)+r*.025,6.5)}),t+=sp(tp/2,104,`Extra seats (ringed) top parties up until the total matches the party vote`,.62,{cls:`vs-small`}),e&&(t+=sp(tp/2,118,`A party usually needs ${e}% to share in these`,.72,{cls:`vs-small`})),wp(e?124:110,t)}function bp(){let e=sp(88,12,`Local seats: most votes wins`,.02,{cls:`vs-head`})+sp(266,12,`List seats: by party share`,.14,{cls:`vs-head`});return[Jf,Jf,Jf,Jf,Yf,Xf].forEach((t,n)=>{e+=lp(30+n*22,32,t,.06+n*.03)}),[Jf,Jf,Yf,Yf,Xf,Xf].forEach((t,n)=>{e+=lp(208+n*22,32,t,.2+n*.03)}),e+=sp(tp/2,58,`The two are simply added together, with no top-up to even things out`,.42,{cls:`vs-small`}),[Jf,Jf,Jf,Jf,Jf,Jf,Yf,Yf,Yf,Xf,Xf,Xf].forEach((t,n)=>{e+=lp(28+n*27,78,t,.5+n*.02,6.5)}),wp(90,e)}function xp(){let e=sp(tp/2,12,`One area, several seats`,.02,{cls:`vs-head`});return e+=cp(70,70,34,Jf,.06,42)+cp(112,70,34,Yf,.08,34,void 0,.36)+cp(154,70,34,Xf,.1,18,void 0,.36),e+=fp(204,234,50,.34),[0,1,2,3].forEach(t=>{e+=lp(254+t*22,50,Jf,.38+t*.05,7)}),e+=sp(tp/2,90,`Whoever comes first can take every seat in the area`,.5,{cls:`vs-small`}),wp(96,e)}function Sp(){let e=``;[0,1,2].forEach(t=>{let n=10+t*26;e+=`<rect x="24" y="${n}" width="86" height="20" rx="4" fill="${Qf}"${op(!0)}>${ap(.03+t*.05)}</rect>`,e+=sp(67,n+14,[`Councils`,`Regions`,`Groups`][t],.03+t*.05,{cls:`vs-small`}),e+=fp(120,196,n+10,.2+t*.05)});for(let t=0;t<14;t++){let n=Math.PI-t/13*Math.PI;e+=lp(270+Math.cos(n)*58,70-Math.sin(n)*58,t%3==0?Yf:Jf,.34+t*.022,5)}return e+=sp(tp/2,96,`Other bodies pick the members, instead of voters choosing directly`,.62,{cls:`vs-small`}),wp(102,e)}function Cp(){let e=`<g${op(!0)}>${ap(.03)}<circle cx="66" cy="28" r="9" fill="#fff" fill-opacity=".9"/><path d="M48 66c0-16 8-26 18-26s18 10 18 26z" fill="#fff" fill-opacity=".9"/></g>`;e+=sp(66,84,`Those in power`,.03,{cls:`vs-small`}),e+=fp(100,176,44,.2),e+=sp(138,36,`appoint`,.2,{cls:`vs-small`});for(let t=0;t<14;t++){let n=Math.PI-t/13*Math.PI;e+=lp(254+Math.cos(n)*58,72-Math.sin(n)*58,Jf,.28+t*.022,5)}return e+=sp(tp/2,100,`No national vote fills these seats`,.6,{cls:`vs-small`}),wp(106,e)}function wp(e,t){return`<svg class="viz voting" viewBox="0 0 ${tp} ${e}" role="img" aria-label="A picture of how votes become seats, using made-up numbers. The words below explain it.">${t}</svg>`}var Tp={fptp:`First Past The Post`,"two-round":`Two Rounds`,ranked:`Ranked choice`,"list-pr":`Party Lists, Shared By Vote`,stv:`Ranked, With Several Winners`,mmp:`Two Votes, Topped Up To Match`,parallel:`Two Systems Side By Side`,block:`Winner Takes The Area`,indirect:`Chosen By Other Bodies`,none:`No National Vote`};function Ep(e,t){switch(e){case`fptp`:return mp();case`two-round`:return hp();case`ranked`:return gp();case`list-pr`:return _p(t);case`stv`:return vp();case`mmp`:return yp(t);case`parallel`:return bp();case`block`:return xp();case`indirect`:return Sp();case`none`:return Cp();default:return``}}function Dp(e){let t=[];if(e.age&&t.push(`<div class="vf"><b>${e.age}</b><small>Voting Age</small></div>`),e.term){let n=Array.from({length:Math.min(e.term,7)},(t,n)=>`<i class="${n===Math.min(e.term,7)-1?`on`:``}" style="--d:${n*70}ms"></i>`).join(``);t.push(`<div class="vf"><span class="vf-pips">${n}</span><small>Votes Every ${e.term} Year${e.term>1?`s`:``}</small></div>`)}return(e.compulsory===!0||e.compulsory===!1)&&t.push(`<div class="vf"><b class="vf-word">${e.compulsory?`Required`:`A choice`}</b><small>${e.compulsory?`Voting Is The Law`:`Nobody Has To Vote`}</small></div>`),e.threshold&&t.push(`<div class="vf"><span class="vf-meter"><i style="width:${Math.min(100,e.threshold*5)}%"></i></span><small>${e.threshold}% Needed For Seats</small></div>`),t.length?`<div class="vfacts">${t.join(``)}</div>`:``}var Op={countries:{},glossary:{}},kp={wikipedia:`Wikipedia`,"wikipedia-votes":`Wikipedia`,"ca-sos":`California Secretary of State`,"nc-sbe":`NC State Board of Elections`,"mn-sos":`Minnesota Secretary of State`},Ap=e=>`<i class="dot" style="background:${i(e)}"></i>`,jp=[`#5a78f0`,`#c4821a`,`#a06ff0`,`#2aa3ab`,`#6f9a2a`,`#d5457f`,`#c068cf`,`#e0474c`];function Mp(e){if(!e)return;let t=/^#?([0-9a-f]{6})$/i.exec(e.trim());if(!t)return e;let n=parseInt(t[1],16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255<.2?`#8c93a0`:e}function Np(e){let t=new Map,n=new Set,r=[...e].sort((e,t)=>(t.seats??t.pct??0)-(e.seats??e.pct??0));for(let e of r){let r=Mp(e.color??(e.bloc&&e.bloc!==`na`?Al[e.bloc]:void 0)),i=r?.toLowerCase();if(r&&i&&!n.has(i)){t.set(e,r),n.add(i);continue}let a=jp.find(e=>!n.has(e))??`#9aa3ad`;t.set(e,a),n.add(a)}return t}function Pp(e){return`<div class="stack">${e.filter(e=>e.value>0).map(e=>`<i style="flex:${e.value};background:${i(e.color)}" data-tip="${i(e.label)}"></i>`).join(``)}</div>`}function Fp(e,t,n,r,a){let o=e=>`${(e/(n||1)*100).toFixed(1)}%`;return`<div class="tug-row"><small>${i(a)}</small><em><span class="sr-only">Democrats </span>${e}</em><div class="tug" data-tip="${i(`Democrats ${e}, Republicans ${t}. ${r} to win.`)}">
    <i class="grow-x" style="width:${o(e)};background:${q.D}"></i><i class="grow-x from-right tug-r" style="width:${o(t)};background:${q.R}"></i>
    <b style="left:${o(r)}"></b><b style="right:${o(r)}"></b></div><em><span class="sr-only">Republicans </span>${t}</em></div>`}function Ip(e){let t=e.parties.filter(e=>(e.seats??0)>0).sort((e,t)=>(t.seats??0)-(e.seats??0));if(!t.length)return``;let n=t.reduce((e,t)=>e+(t.seats??0),0),r=t.slice(0,5),a=t.slice(5).reduce((e,t)=>e+(t.seats??0),0),o=Np(t),s=r.map(e=>({color:o.get(e),value:e.seats??0,label:e.name}));return a&&s.push({color:`#6f7782`,value:a,label:`Others`}),`<div class="row-title">Parliament <small>${n} Seats</small></div>
    <div class="parl-mini">${vf(s,{total:n})}<div class="parl-legend">${r.slice(0,3).map(e=>`<span data-tip="${i(`${e.name}: ${e.seats} of ${n} seats`)}">${Ap(o.get(e))}<em>${i(Lp(e.name))}</em><b>${e.seats}</b></span>`).join(``)}</div></div>`}var Lp=e=>e.length>24?`${e.slice(0,22)}…`:e;function Rp(e,t){let n=t===`hos`?e.hosTitle:e.hogTitle;if(n){let e=n.replace(/\s+of\s+(the\s+)?.*$/i,``).trim();if(e)return e.replace(/\b\p{L}/gu,e=>e.toUpperCase())}return t===`hos`?`Head Of State`:`Head Of Government`}var zp=(e,t)=>`<span class="chip" style="--c:${Al[e.bloc]}" data-tip="Left or right describes whoever leads the government now, from Wikidata's party records, and can change at the next vote.">${i(t??(e.bloc===`na`?Td[e.bloc]:e.bloc===`np`?e.party===`Independent`?`Independent Leader`:`No Party Listed`:`Led From The ${Td[e.bloc]}`))}</span>`,Bp=(e,t)=>t.winner?e.basis===`wikipedia`?` <small class="reported-mark">Reported</small>`:` ✓`:``,Vp=e=>{let t=Y[Rl(e)];return`<span class="chip" style="--c:${t.color}" data-tip="${i(t.meaning)}">${i(t.label)}</span>`},Hp=e=>{let t=xl(e);return`<span class="chip" style="--c:${pl[t.mood].color}" data-tip="${i(t.reasons[0]??pl[t.mood].meaning)}">${i(pl[t.mood].label)}</span>`};function Up(e){let t=xl(e),n=pl[t.mood];return`<section class="mood"><h4>How People Seem To Feel</h4>
    <div class="mood-row"><span class="mood-figures" aria-hidden="true">${Array.from({length:7},(e,r)=>`<i class="mf mf-${t.mood}" style="--c:${n.second&&r%2?n.second:n.color};--d:${r*137%600}ms"></i>`).join(``)}</span><b style="--c:${n.color}">${i(n.label)}</b></div>
    <ul class="mood-why">${t.reasons.slice(0,3).map(e=>`<li>${i(e)}</li>`).join(``)}</ul>
    <p class="provenance"><b>This is our own estimate.</b> It comes from recent votes, local results, turnout and the news. It isn't a poll, and nobody here asked anyone.</p>
    ${Wp(e)}</section>`}function Wp(e){let t=K.byCountry[e.key];if(!t?.ladder&&!t?.trustGov)return`<p class="provenance">We have no recent survey from here to compare this with.</p>`;let n=t.ladder,r=t.trustGov,a=Math.min(n?.[0]??9999,r?.[0]??9999);return`<div class="survey"><small class="kicker">What People Told Surveys</small>${new Date().getFullYear()-a>=4?`<p class="provenance">Some of this is from ${a}, so it may be out of date.</p>`:``}
    ${n?`<div class="survey-row" data-tip="${i(`People rate their own lives from 0 to 10. World Happiness Report, ${n[0]}.`)}"><b>${n[1].toFixed(1)}<small> Of 10</small></b><span class="survey-bar"><i class="grow-x" style="width:${(n[1]*10).toFixed(0)}%;background:#1fa3ae"></i></span><span>How They Rate Their Own Lives, ${n[0]}</span></div>`:``}
    ${r?`<div class="survey-row" data-tip="${i(`The share who said they trust their national government. Wellcome Global Monitor, ${r[0]}.`)}"><b>${r[1].toFixed(0)}<small>%</small></b><span class="survey-bar"><i class="grow-x" style="width:${r[1].toFixed(0)}%;background:#a06ff0"></i></span><span>Trust Their National Government, ${r[0]}</span></div>`:``}
    <p class="provenance">From the <a href="https://ourworldindata.org/grapher/happiness-cantril-ladder" target="_blank" rel="noreferrer">World Happiness Report</a> and the <a href="https://ourworldindata.org/grapher/share-who-trust-government" target="_blank" rel="noreferrer">Wellcome Global Monitor</a>. In countries without free speech, people may not answer freely.</p></div>`}function Gp(e){let t=K.byCountry[e.key];if(!t?.indices?.length)return``;let n={"V-Dem":`political-regime`,"Freedom House":`political-rights-score-fh`,Bertelsmann:`political-regime-bti`};return`<section><h4>What Researchers Say</h4>
    ${t.split?`<p class="plain warn">These researchers disagree about ${i(e.name)}. They measure different things, and that's worth knowing before trusting any one label.</p>`:`<p class="plain">Different experts judge this differently, so here's more than one view.</p>`}
    <div class="idx-list">${t.indices.map(e=>`<div class="idx-row" data-tip="${i(`${e.name}, ${e.year}. Further right means more democratic.`)}"><a href="https://ourworldindata.org/grapher/${n[e.name]??``}" target="_blank" rel="noreferrer">${i(e.name)}</a><b>${i(e.label)}</b><span class="idx-track"><em style="left:${(e.v*100).toFixed(0)}%"></em></span></div>`).join(``)}</div>
    <p class="provenance">Further right means more democratic. Through Our World in Data. Governments may disagree with all of them.</p></section>`}function Kp(e){let t=Rl(e);if(t!==`liberal`&&t!==`electoral`&&t!==`hybrid`)return``;let n=e.next?.[0],r=K.byCountry[e.key]?.t?.at(-1);if(!n&&!r&&e.key!==`USA`)return``;let a=r?Array.from({length:10},(e,t)=>`<i class="${t<Math.round(r[1]/10)?`on`:``}" style="--d:${t*40}ms"></i>`).join(``):``;return`<section class="nudge"><h4>Your Vote</h4>
    ${n?`<p class="nudge-next">Next Chance: <b>${i(n.title)}, ${i(d(n.date))}</b></p>`:``}
    ${r?`<div class="nudge-turnout"><span class="turnout-dots" data-tip="${r[1].toFixed(0)}% of registered voters, ${r[0]}">${a}</span><small>About ${Math.round(r[1]/10)} in 10 registered voters turned out last time. The people who vote decide for everyone.</small></div>`:``}
    ${e.key===`USA`?`<a class="vote-link" href="https://vote.gov" target="_blank" rel="noreferrer">Register To Vote &#8250;</a><p class="provenance">You have to be 18 to vote in US national elections, and many states let you sign up earlier.</p>`:``}
  </section>`}var qp=e=>e.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase();function Jp(e,t=`large`){return`<span class="face ${t}"><em>${i(qp(e.name??e.leader??``))}</em>${e.image?`<img src="${i(v(e.image))}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">`:``}</span>`}function Yp(e,t){return e?`<div class="leader has-face">${Jp(e)}<div><small>${i(t)}</small><b>${i(e.name)}</b>
    <span>${e.party?`${Ap(e.color??Al[e.bloc??`na`])}${i(e.party)}`:`No Party`}</span></div></div>`:``}function Xp(e){let t=/^(.*?[.!?])(\s|$)/.exec(e);return t?t[1]:e}function Zp(e){let t=[...e.parties].filter(e=>e.pct).sort((e,t)=>(t.pct??0)-(e.pct??0)).slice(0,2);if(t.length<2)return``;let n=e=>e.leader||Lp(e.name),r=Np(t);return`<div class="row-title">Last National Vote</div>
    ${Pp(t.map(e=>({color:r.get(e),value:e.pct??0,label:`${e.name} ${e.pct}%`})))}
    <div class="legend-line split"><span>${Ap(r.get(t[0]))}${i(n(t[0]))} ${t[0].pct?.toFixed(1)}%</span><span>${Ap(r.get(t[1]))}${i(n(t[1]))} ${t[1].pct?.toFixed(1)}%</span></div>`}function Qp(e){let t=e.iso2?`<span class="fi fi-${i(e.iso2.toLowerCase())}"></span>`:``,n=e.exec===`hog`?e.hog:e.hos,r=n?Rp(e,e.exec===`hog`?`hog`:`hos`):``,a=Op.countries[e.key],o=``;if(e.key===`USA`){let t=$p();o=`${Yp(e.hos,`President`)}
      <div class="row-title">2024 Election</div>
      ${Pp([{color:q.R,value:t.evR,label:`Trump: ${t.evR} electoral votes`},{color:q.D,value:t.evD,label:`Harris: ${t.evD} electoral votes`}])}
      <div class="legend-line split"><span>${Ap(q.R)}Trump ${t.evR}</span><span>${Ap(q.D)}Harris ${t.evD}</span></div>
      ${em()}`}else o=`${Yp(n,r)||`<p class="muted">No current leader recorded for this territory.</p>`}
      ${e.exec!==`hog`&&e.lastExecutive?Zp(e.lastExecutive):``}
      ${e.lastLegislative?Ip(e.lastLegislative):``}`;let s=e.next?.[0],c=Y[Rl(e)];return`<header><h3>${t}${i(e.name)}</h3></header>
    <div class="lead-chip">${Vp(e)}${Hp(e)}</div>
    <p class="plain first">${i(a?Xp(a.gov):c.meaning)}</p>
    ${o}
    ${Gf(e.key)}
    ${s?`<div class="next">Next Vote: ${i(s.title)}, <b>${i(d(s.date))}</b></div>`:``}
    <div class="tap">Click To Learn How It Works</div>`}function $p(){return{evD:G.us.evTotals.D,evR:G.us.evTotals.R}}function em(){let e=G.chambers?.house,t=G.chambers?.senate;if(!e||!t)return``;let n=[...G.races.values()].some(e=>e.status!==`called`),r=e.reported.D??e.seatLevel.D??0,i=e.reported.R??e.seatLevel.R??0,a=t.reported.D??0,o=t.reported.R??0,{year:s}=G.usCycle;return`<div class="row-title">${n?`${ol(s)}, Still Counting`:ol(s).replace(/^The /,`The ${s} `)}</div>
    ${Fp(r,i,e.total,e.toWin,`House`)}
    ${a+o?Fp(a,o,t.total,t.toWin,`Senate`):``}`}function tm(e){if((e.reporting?.pct??0)<100)return`Still Counting`;let[t,n]=e.candidates.map(e=>e.pct??0).sort((e,t)=>t-e);return t-n<1?`Too Close To Call`:`Waiting For The Final Count`}var nm=e=>{let t=e.reporting?.pct??0;return`${t>=100?`All Precincts In`:`About ${Math.round(t)}% Counted`}${e.reporting?.text?`, ${i(e.reporting.text)}`:``}`},rm=e=>e.status===`called`?e.basis===`wikipedia`?e.flip?`Reported Flip`:`Reported Result`:e.flip?`Flipped`:`Held`:e.status===`contested`?tm(e):`Awaiting Result`;function im(e){return e.status===`called`?e.basis===`official`?`<p class="basis-note good">The state's own vote count agrees with this winner. Results become final when they're certified, which takes weeks.</p>`:e.basis===`outlets`?`<p class="basis-note good">Confirmed by ${i((e.confirmedBy??[]).slice(0,4).join(`, `))}. Results become final when they're certified, which takes weeks.</p>`:`<p class="basis-note warn">Only Wikipedia's race table says this so far. Its editors usually follow news reports, but no official count or second outlet has confirmed it here yet.</p>`:``}function am(e,t){let n=Math.abs(e-t);return n<1?`Neck And Neck`:n<5?`A Narrow Lead`:n<15?`A Clear Lead`:`Far Ahead`}function om(e){let t=ll[e];if(!t)return``;let n=Ul(e),r=Hl(e),a=Gl(e),o=G.races.get(`G:${e}`),s=G.races.get(`S:${e}`),c=n.length?`<div class="row-title">Senate${s?` <small>${i(rm(s))}</small>`:``}</div>
       <div class="seats">${n.map(e=>`<div class="seat" style="--c:${q[e.party]}">${i(e.name.split(` `).slice(-1)[0])}${e.up&&e.race?.status!==`called`?`<em>up</em>`:e.up?`<em>${e.race?.basis===`wikipedia`?`reported`:`new`}</em>`:``}</div>`).join(``)}</div>`:`<p class="muted">No voting senators.</p>`,l=r.total?`<div class="row-title">House <small>${r.total} Seat${r.total>1?`s`:``}${r.pending?`, ${r.pending} Unresolved`:``}</small></div>
       ${Pp([{color:q.D,value:r.D,label:`${r.D} Democratic`},{color:`#a79bc2`,value:r.other,label:`${r.other} other`},{color:q.R,value:r.R,label:`${r.R} Republican`}])}
       <div class="legend-line split"><span>${Ap(q.D)}${r.D} Democrats</span><span>${Ap(q.R)}${r.R} Republicans</span></div>`:``,u=o?`<div class="row-title">Governor <small>${i(rm(o))}</small></div><div class="kv-line">${o.status===`called`&&o.winnerParty?Ap(q[o.winnerParty]):``}${i(o.winnerName??o.candidates.slice(0,2).map(e=>e.name).join(` vs `))}</div>`:``,d=a.conflicted?`<p class="plain">Divided: the Senate seats and the House delegation lean opposite ways, so the map mixes the colors.</p>`:``;return`<header><h3>${i(t.name)}</h3></header>${c}${l}${u}${d}<div class="tap">Zoom In For Districts And Counties</div>`}function sm(e,t){let n=t.layers.admin1,r=n?.byKey.get(e);if(!n||r===void 0)return``;let a=n.meta[r],o=G.admin1[e],s=String(a.x?.cc??``),c=G.world.countries[s],l=String(a.x?.type??`Region`),u=o?.leader?`<div class="leader has-face">${Jp({name:o.leader,image:o.image})}<div><small>Runs This ${i(l)}</small><b>${i(o.leader)}</b><span>${o.party?`${Ap(o.color??Al[o.bloc])}${i(o.party)}`:`No Party Recorded`}</span></div></div>
       ${cm(o.score,c)}`:`<p class="muted">No local leader recorded here, so this shows ${i(c?.name??`the country`)}'s national picture.</p>`;return`<header><h3>${i(a.n)}</h3>${o?zp(o,o.bloc===`na`?`Not Classified`:void 0):``}</header>
    <small class="kicker">${i(l)} Of ${i(c?.name??s)}</small>${u}<div class="tap">Click For More</div>`}function cm(e,t){return e===void 0||t?.score===void 0||Math.abs(e)<.4||Math.abs(t.score)<.4||Math.sign(e)===Math.sign(t.score)?``:`<p class="plain">This region's leader sits on the other side from ${i(t.name)}'s national government.</p>`}function lm(e,t,n){let r=e?G.races.get(`H:${e}`):void 0,a=``;if(r?(a+=`<header><h3>${i(r.seat)}</h3><span class="chip ${r.status}">${i(rm(r))}</span></header>${um(r)}`,r.reporting?.pct!==void 0&&(a+=`<div class="meter" data-tip="${r.reporting.pct}% of precincts reporting"><i style="width:${r.reporting.pct}%"></i></div><small class="kicker">${nm(r)}</small>`)):e&&(a+=`<header><h3>${i(e)}</h3></header>`),t){let e=n.layers.uscounty?.meta[n.layers.uscounty.byKey.get(t)??-1],r=G.usCounty?.[t];if(e){if(a+=`<div class="row-title county">${i(e.n)} County <small>President 2024</small></div>`,r){let[e,t,n]=r;a+=`${Pp([{color:q.D,value:t,label:`Harris: ${o(t)} votes, ${(t/n*100).toFixed(1)}%`},{color:q.R,value:e,label:`Trump: ${o(e)} votes, ${(e/n*100).toFixed(1)}%`}])}
          <div class="legend-line split"><span>${Ap(q.D)}Harris ${(t/n*100).toFixed(1)}%</span><span>${Ap(q.R)}Trump ${(e/n*100).toFixed(1)}%</span></div>`}else a+=`<p class="muted">No county-level result (Alaska reports by election district instead).</p>`}}return`${a}<div class="tap">Click For Full Results</div>`}function um(e){let t=e.candidates.filter(e=>e.pct),n=[...t].sort((e,t)=>(t.pct??0)-(e.pct??0)),r=e.status!==`called`&&n.length>=2?am(n[0].pct??0,n[1].pct??0):``;return`${t.length>=2?Pp(n.slice(0,3).map(e=>({color:q[e.party],value:e.pct??0,label:`${e.name}: ${e.pct}%`}))):``}
    <div class="cands">${e.candidates.slice(0,3).map(t=>`<div class="cand ${t.winner?`won`:``}">
      ${Ap(q[t.party])}<span>${i(t.name)}${Bp(e,t)}</span><b>${t.pct===void 0?``:`${t.pct.toFixed(1)}%`}</b>
    </div>`).join(``)}</div>
    ${r?`<p class="margin-word">${i(r)}</p>`:``}
    ${e.status!==`called`&&!e.candidates.some(e=>e.pct)?`<p class="muted">No vote count in the feeds yet.</p>`:``}`}function dm(e){let t=e.phase===`upcoming`?d(e.date):e.phase===`voting`?`Voting Now`:`Counting`,n=(e.parties??[]).filter(e=>e.pct||e.seats||e.seatsBefore).slice(0,3),r=Np(n);return`<header><h3>${i(e.countryName)}</h3><span class="chip contested">${i(t)}</span></header>
    <div class="kv-line">${i(e.title)}</div>
    ${n.length?`<div class="cands">${n.map(e=>`<div class="cand" data-tip="${i(e.pct?`${e.pct.toFixed(1)}%`:`${e.seats??e.seatsBefore} seats`)}">${Ap(r.get(e))}<span>${i(Lp(e.name))}</span><b>${e.pct?`${e.pct.toFixed(1)}%`:e.seats??e.seatsBefore??``}</b></div>`).join(``)}</div>`:``}
    <div class="tap">Click For Details</div>`}function fm(e){let t=e.filter(e=>(e.seats??0)>0),n=t.reduce((e,t)=>e+(t.seats??0),0);if(!n)return``;let r=Math.max(2,Math.round(Math.sqrt(n)/1.7)),a=Array.from({length:r},(e,t)=>.42+.5800000000000001*t/Math.max(1,r-1)),o=a.reduce((e,t)=>e+t,0),s=[],c=n;a.forEach((e,t)=>{let i=t===r-1?c:Math.round(n*e/o);c-=i;for(let t=0;t<i;t++){let n=i===1?Math.PI/2:Math.PI-t/(i-1)*Math.PI;s.push({x:100+Math.cos(n)*e*95,y:100-Math.sin(n)*e*95,a:n})}}),s.sort((e,t)=>t.a-e.a);let l=Math.max(.9,Math.min(4.2,95/r/2.6,150/Math.sqrt(n)/2.2)),u=0,d=``,f=Np(t);return t.forEach(e=>{let t=i(`${e.name}: ${e.seats} seats`);for(let n=0;n<(e.seats??0)&&u<s.length;n++,u++)d+=`<circle cx="${s[u].x.toFixed(1)}" cy="${s[u].y.toFixed(1)}" r="${l.toFixed(2)}" fill="${i(f.get(e))}" data-tip="${t}"/>`}),`<svg class="hemi" viewBox="0 0 200 104" role="img" aria-label="Seats by party, ${n} total">${d}</svg>`}function pm(e,t){let n=e=>t===`seats`?e.seats??0:e.pct??0,r=[...e.parties].filter(e=>n(e)>0).sort((e,t)=>n(t)-n(e)).slice(0,7);if(!r.length)return`<div class="ptable">${e.parties.slice(0,7).map(e=>`<div class="prow"><span class="pname">${i(e.name)}</span></div>`).join(``)}</div>`;let a=Np(e.parties),o=n(r[0])||1;return`<div class="ptable">${r.map((e,r)=>`<div class="prow" data-tip="${i(t===`seats`?`${e.name}: ${e.seats} seats`:`${e.name}: ${e.pct}%`)}">
    <span class="pname">${i(e.name)}${Mm(e)?`<small>${i(Mm(e))}</small>`:``}</span>
    <span class="pbar"><i class="grow-x" style="width:${(n(e)/o*100).toFixed(1)}%;background:${i(a.get(e))};--d:${r*45}ms"></i></span><b>${t===`seats`?e.seats:`${e.pct?.toFixed(1)}%`}</b></div>`).join(``)}</div>`}function mm(e){let t=i(e),n=Object.keys(Op.glossary).sort((e,t)=>t.length-e.length),r=new Set;for(let e of n){let n=RegExp(`(?<![\\w>"-])(${e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)})(s?)(?![\\w<"-])`,`i`);!r.has(e)&&n.test(t)&&(t=t.replace(n,(t,n,r)=>`<button class="term" data-term="${i(e)}">${n}${r}</button>`),r.add(e))}return t}function hm(e,t){let n=new Map([[`voters`,Pf.voters],[`people`,Pf.voters]]);for(let[e,r]of Object.entries(t?.labels??{}))Pf[e]&&r&&n.set(r.toLowerCase(),Pf[e]);let r=[...n.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)),i=RegExp(`(?<![\\p{L}-])(${r.join(`|`)})(?![\\p{L}-])`,`giu`);return e.split(/(<[^>]+>)/).map((e,t)=>t%2?e:e.replace(i,e=>`<span class="w" style="--c:${n.get(e.toLowerCase())}">${e}</span>`)).join(``)}function gm(e,t,n){let r=e.iso2?`<span class="fi fi-${i(e.iso2.toLowerCase())}"></span>`:``,o=Op.countries[e.key],c=!!e.lastLegislative||!!e.lastExecutive;n.layers.admin1&&e.admin1&&e.admin1.total;let l=[[`now`,`Right Now`,!0],[`gov`,`Who Rules`,!0],[`vote`,`Voting`,!0],[`parties`,`The Parties`,c],[`parliament`,`Lawmakers`,c],[`works`,`How Well`,!0],[`history`,`History`,!0]].filter(e=>e[2]),u=Math.max(0,l.findIndex(e=>e[0]===t)),d=l[u+1],f=`<div class="flow-row"><b>${i(l[u][1])}</b>${Ed(l.map(([e,t])=>({name:t,attrs:`data-page="${e}"`})),u)}</div>`,m=d?Dd(`Up Next`,d[1],`data-tab="${d[0]}"`):Dd(`Back To The Start`,l[0][1],`data-tab="${l[0][0]}"`),h=``,g=(...t)=>{let n=t.map(e=>G.notes[e]?.lead).find(Boolean);return n?`<section><p class="explain">${mm(n)}</p><p class="provenance">From Wikipedia.</p></section>`:`<section><p class="plain"><a href="${i(a(e.name))}" target="_blank" rel="noreferrer">Read About ${i(e.name)} On Wikipedia &#8599;</a></p></section>`};h=t===`gov`?o?vm(o):g(`Politics of ${e.name}`,e.name):t===`vote`?`${Kp(e)}${o?xm(o):g(`Elections in ${e.name}`,`Politics of ${e.name}`,e.name)}`:t===`history`?Sm(e,o,g(`History of ${e.name}`,e.name)):t===`parties`?Im(e):t===`parliament`?Lm(e):t===`works`?Rm(e):t===`regions`?zm(e,n):Tm(e);let _=!o||![`gov`,`vote`,`history`].includes(t)?``:`<p class="provenance">Written in plain words by AI and compared with Wikipedia by AI. A person hasn't fully checked it. For the full story, see <a href="${i(a(`Politics of ${e.name}`))}" target="_blank" rel="noreferrer">Politics Of ${i(e.name)}</a> on Wikipedia.</p>`,v=_m(e,t),y=`<div class="sheet-actions">
    <button data-methods>How We Know</button>
    <button data-share="${i(`country/${e.key}`)}" data-share-title="${i(e.name)}">Share This Page</button>
    <a href="${i(`${hd}?title=${encodeURIComponent(`Mistake on the page for ${e.name}`)}`)}" target="_blank" rel="noreferrer">Report A Mistake</a>
    <a href="${i(p(`text/${e.key.toLowerCase()}.html`))}">Plain Text</a>
  </div>`;return`<header class="sheet-head"><small class="kicker">${i(e.subregion||e.continent||``)}${e.pop?`, ${s(e.pop)} People`:``}</small><h2>${r}${i(e.name)}</h2></header>${f}<div class="sheet-body">${h}${_}${v}${y}</div>${m}`}function _m(e,t){let n=(e,t)=>`<a href="${i(e)}" target="_blank" rel="noreferrer">${i(t)}</a>`,r=n(e.qid?`https://www.wikidata.org/wiki/${e.qid}`:`https://www.wikidata.org/`,`Wikidata`),a=(e,t)=>n(`https://ourworldindata.org/grapher/${e}`,t),o={now:`Leaders: ${r}. What kind of system this is: ${a(`political-regime`,`V-Dem${e.regime?.year?`, ${e.regime.year}`:``}`)}, through Our World in Data. Mood: our own estimate.`,parties:`Parties and left or right: ${r}. Seats: Wikipedia.`,works:`${a(`political-regime`,`V-Dem`)}, ${a(`political-rights-score-fh`,`Freedom House`)} and ${a(`political-regime-bti`,`Bertelsmann`)}, through Our World in Data.`};return o[t]?`<p class="provenance sheet-source"><b>Sources:</b> ${o[t]}</p>`:``}function vm(e){let t=e.facts,n=t?.power?.length?Bf(t.power,t.labels??{},t.runs):``;return`${n?`<section><h4>Who Chooses Whom</h4>${n}${t?.runs?`<p class="provenance">The bright box is where the sources say power really sits.</p>`:``}</section>`:``}
    <section><h4>In Words</h4><p class="explain">${hm(mm(e.gov),t)}</p></section>${ym(e.gov)}`}function ym(e){let n=ef(e);return n.length?`<section><h4>See How It Works</h4><div class="see-how">${n.map(e=>`<button data-dict="${i(e)}"><i>&#9654;</i>${i(t(e))}</button>`).join(``)}</div></section>`:``}var bm={fptp:`first-past-the-post`,"two-round":`two-round`,ranked:`ranked choice`,"list-pr":`proportional representation`,stv:`ranked choice`,mmp:`mixed-member`,parallel:`mixed-member`,block:`first-past-the-post`};function xm(e){let t=e.facts?.electoral,n=t?Ep(t.kind,t.threshold):``,r=t?.kind?Tp[t.kind]:``,a=t?.kind?bm[t.kind]:void 0;return`${n?`<section><h4>How Votes Become Seats${r?`: ${i(r)}`:``}</h4>${n}<p class="provenance">A made-up example of this system, not real results. It shows how the main parliament or chamber is filled.</p>${a?`<button class="learn-go" data-dict="${i(a)}">Watch How It Works &#8250;</button>`:``}</section>`:``}
    ${t?Dp(t):``}
    <section><h4>In Words</h4><p class="explain">${hm(mm(e.vote),e.facts)}</p></section>${ym(e.vote)}`}function Sm(e,t,n){let r=K.byCountry[e.key],i=qf(e.key,t?.facts?.timeline??[]),a=e.key===`USA`?`All adult women could vote from this year, by law. Most US women won the vote in 1920, but many Black women were kept from voting until the Voting Rights Act of 1965.`:`All adult women could vote from this year, by law. Some women may have been able to vote earlier.`,o=r?.s&&!r.sf?`<div class="milestone"><b>${r.s}</b><span>${a}</span></div>`:``,s=r?.wh&&r.wh.length>2?gf(r.wh,{color:`#a06ff0`,unit:`%`,max:Math.max(50,...r.wh.map(e=>e[1]*1.15)),h:62,tip:(e,t)=>`${e}: ${t}% of seats held by women`}):``;return`${i?`<section><h4>How It Has Been Ruled</h4>${i}</section>`:``}
    ${o||s?`<section><h4>Women's Place In Politics</h4>${o}${s?`<small class="kicker">Share Of Seats Held By Women</small>${s}`:``}</section>`:``}
    ${t?`<section><h4>The Story In Words</h4><p class="explain">${hm(mm(t.history),t.facts)}</p></section>`:n}`}function Cm(e){let t=K.byCountry[e.key];if(!t)return``;let n=K.world.womenInParliament?.world,r=t.t??[],a=K.world.turnout?.median;return[t.w===void 0?``:`<section><h4>Who Gets A Seat <small>Women Hold ${t.w.toFixed(0)}%</small></h4><div class="chambers">${_f(t.w,`#a06ff0`,{label:e.name,tip:`${t.w.toFixed(0)}% of seats are held by women`})}${n?_f(n,`#a06ff0`,{label:`The World`,tip:`${n.toFixed(0)}% of seats worldwide`}):``}</div><p class="provenance">The lit seats are held by women. ${K.ipu[e.key]?.women===void 0?`Through Our World in Data.`:`From <a href="https://data.ipu.org/" target="_blank" rel="noreferrer">the Inter-Parliamentary Union</a>${K.ipu[e.key]?.at?`, ${i(l(K.ipu[e.key].at))}`:``}.`}</p></section>`,r.length>1?`<section><h4>Who Turns Out</h4>${gf(r,{color:Y.electoral.color,unit:`%`,max:100,h:72,ref:a?{value:a,label:`A Typical Country: ${a.toFixed(0)}%`}:void 0,tip:(e,t)=>`${e}: ${t}% of registered voters`})}<p class="provenance">As officially reported. High turnout doesn't by itself mean an election was free.</p></section>`:``].join(``)}var wm=new Set([`FRA`,`SEN`,`TWN`,`LKA`,`UKR`]);function Tm(e){let n=e.exec===`hog`?e.hog:e.hos,a=e.exec===`hog`?e.hos:e.hog,o=Y[Rl(e)],s=G.news.find(t=>t.countries[0]===e.key&&!t.id.startsWith(`race-`)),c=Op.countries[e.key],l=Rl(e)===`unknown`&&c?Xp(c.gov):o.meaning,u=[`${e.unchecked?`<p class="provenance">This place isn't on the second list we check leaders against, so who's named here may be out of date.</p>`:``}<section class="now-top">${s?`<a class="in-news" href="#/news/${i(s.id)}"><small>In The News</small><b>${i(t(s.title))}</b></a>`:``}<div class="chips">${Vp(e)}${zl(Rl(e))?``:zp(e,e.bloc===`na`&&n?.party?`Left Or Right: Not Classified`:void 0)}</div>
    <p class="plain">${i(l)}</p>
    ${n?Yp(n,`${Rp(e,e.exec===`hog`?`hog`:`hos`)}, ${wm.has(e.key)?`Shares Power`:`Runs The Government`}`):`<p class="muted">No current leader recorded for this territory.</p>`}
    ${a&&a.name!==n?.name?Yp(a,`${Rp(e,e.exec===`hog`?`hos`:`hog`)}${wm.has(e.key)?`, Shares Power`:``}`):``}</section>`],f=au(e);if(f.length>1&&u.push(`<section><h4>Who Holds What</h4>${uu(f)}</section>`),wd(e.key)&&u.push(`<section><button class="learn-go" data-learn="${i(e.key)}">How ${i(r(e.name))} Came To Be &#8250;</button></section>`),e.key===`USA`&&G.usCycle.live){let e=G.news.find(e=>e.id===`race-balance`);u.splice(1,0,`<section><h4>${ol(G.usCycle.year)}</h4>${e?`<p class="plain"><b>${i(t(e.title))}.</b> ${i(e.why??``)}</p>`:``}${em()}</section>`)}e.next?.length&&u.push(`<section><h4>Coming Up</h4>${e.next.map(e=>`<div class="next">${i(e.title)}, <b>${i(d(e.date))}</b></div>`).join(``)}</section>`),u.push(Up(e));let p=Of(e.key);return p&&u.push(`<section><h4>Who It Stands With</h4>${p}</section>`),u.push(`<section><h4>The Last Hundred Years</h4>${Gf(e.key).replace(/<div class="row-title">.*?<\/div>/s,``)}</section>`),u.join(``)}function Em(e){let t=G.usHistory?.years;return!e||!t?``:`<div class="voted-years">${e.map((e,n)=>{if(!e[2])return``;let r=e[0]/e[2]*100,i=e[1]/e[2]*100;return`<div class="vy-row" data-tip="${t[n]}: Democrats ${r.toFixed(1)}%, Republicans ${i.toFixed(1)}%"><b>${t[n]}</b><span class="vy-n">${r.toFixed(0)}%</span><i><em class="grow-x" style="left:0;width:${r.toFixed(1)}%;background:${q.D}"></em><em class="grow-x from-right" style="right:0;width:${i.toFixed(1)}%;background:${q.R}"></em><u></u></i><span class="vy-n">${i.toFixed(0)}%</span></div>`}).join(``)}</div><p class="provenance">Votes for president here, each year: Democrats on the left, Republicans on the right.</p>`}function Dm(e){let t=km(`Politics of ${e}`);if(!t?.stands&&!t?.lead)return``;let n=Object.values(ll).some(t=>t.name===e)&&G.usCycle.live?` Written before this election, so it may not reflect the latest results.`:``;return`<section><h4>How ${i(e)} Runs Things</h4><p class="plain">${i(t.stands??t.lead??``)}</p>${t.who?`<h5 class="sub-h">What's Different Here</h5><p class="plain">${i(t.who)}</p>`:``}<p class="provenance">${t.stands?`Written by a small AI from Wikipedia.`:`From Wikipedia.`}${n}</p></section>`}function Om(e){return e===void 0?``:`<div class="lr-line" data-tip="Roughly where this party sits, from far left to far right. These labels mean different things in different countries."><span>Left</span><i><em style="left:${((Math.max(-3,Math.min(3,e))+3)/6*100).toFixed(0)}%"></em></i><span>Right</span></div>`}var km=e=>e?G.notes[e]:void 0,Am=/antisemit|racis|xenophob|islamophob|homophob|transphob|misogyn|sexis|white supremac|chauvinis|historical negation|denialis|conspiracy/i,jm=e=>(e.ideology??[]).filter(e=>!Am.test(e)&&!lf.test(e)),Mm=e=>(e.leader??``).replace(/\s*\([^)]*\)/g,``).trim();function Nm(e,n,r,o){let s=km(e.article),c=o?cf[e.article??``]:void 0,l=s?.stands&&!lf.test(s.stands)?s.stands:null,u=s?.who&&!lf.test(s.who)?s.who:null,d=Mm(e),f=(o?q[ul(e.name)]:e.color)??(e.bloc&&e.bloc!==`na`?Al[e.bloc]:[`#5a78f0`,`#c4821a`,`#a06ff0`,`#2aa3ab`][r%4]),p=e.seats&&n?`${e.seats} Of ${n} Seats`:e.pct?`${e.pct}% Of The Vote`:``;return`<article class="party-card" style="--c:${i(f)}">
    <header><i></i><b>${i(e.name)}</b>${p?`<small>${i(p)}</small>`:``}</header>
    ${d?`<div class="party-leader">${/leadership/i.test(d)?i(t(d)):`Led By ${i(d)}`}</div>`:``}
    ${Om(e.score)}
    ${jm(e).length?`<div class="party-ideas">${jm(e).map(e=>`<span>${i(t(e))}</span>`).join(``)}</div>`:``}
    ${c?`<h5>What They Say They Want</h5><p>${i(c.stands)}</p><small class="party-from">From <a href="${i(c.standsFrom.url)}" target="_blank" rel="noreferrer">${i(c.standsFrom.name)} &#8599;</a></small>
         <h5>Who Tends To Support Them</h5><p>${i(c.who)}</p><small class="party-from">From <a href="${i(c.whoFrom.url)}" target="_blank" rel="noreferrer">${i(c.whoFrom.name)} &#8599;</a></small>`:l?`<h5>What They Stand For</h5><p>${i(l)}</p>`:s?.lead?`<h5>How Wikipedia Describes Them</h5><p>${i(s.lead)}</p>`:``}
    ${!c&&u?`<h5>Who Tends To Support Them</h5><p>${i(u)}</p>`:``}
    ${e.article?`<a class="party-more" href="${i(a(e.article))}" target="_blank" rel="noreferrer">Read More &#8599;</a>`:``}
  </article>`}function Pm(e){let n=Date.now();return G.worldElections.filter(t=>t.country===e.key&&Date.parse(t.date)-n>-864e5&&Date.parse(t.date)-n<2592e6&&(t.parties??[]).some(e=>e.leader)).map(e=>`<section class="ballot-soon"><h4>On The Ballot ${i(t(d(e.date)))}</h4>
    ${(e.parties??[]).filter(e=>e.leader).slice(0,6).map(e=>{let t=km(e.leader);return`<article class="party-card person" style="--c:${i(e.color??`#8a93a0`)}">
        <header><i></i><b>${i(e.leader)}</b><small>${i(e.name)}</small></header>
        ${t?.stands?`<h5>What They Say They Want</h5><p>${i(t.stands)}</p>`:t?.lead?`<h5>In Short</h5><p>${i(t.lead)}</p>`:``}
        ${t?.differs?`<h5>Where They Differ From Their Party</h5><p>${i(t.differs)}</p>`:``}
      </article>`}).join(``)}</section>`).join(``)}function Fm(e){let t=e.lastLegislative,n=G.chambers?.house.reported;return!t||e.key!==`USA`||!n||!Object.keys(n).length?t:{...t,parties:t.parties.map(e=>({...e,seats:n[ul(e.name)]??e.seats}))}}function Im(e){let t=Fm(e),n=[...t?.parties??[]].filter(e=>e.seats||e.pct).sort((e,t)=>(t.seats??0)-(e.seats??0)||(t.pct??0)-(e.pct??0)).slice(0,8),r=t?.totalSeats??n.reduce((e,t)=>e+(t.seats??0),0),i=zl(Rl(e));return`${Pm(e)}<section><h4>${i?`The Parties Here`:`Which One Sounds Like You?`}</h4>
    ${i?`<p class="plain warn">Elections here aren't fully free, so people can't really choose between these parties, and the seats don't show how much anyone backs them.</p>`:`<p class="plain">Parties are teams of people who want the same things. Here's a short description of each, biggest first. We never tell you who to pick.</p>`}
    ${e.key===`USA`&&G.usCycle.live?`<p class="plain warn">Votes are still being counted, so these seat numbers can change until results are certified.</p>`:``}
    ${n.map((t,n)=>Nm(t,r,n,e.key===`USA`)).join(``)||`<p class="muted">No parties on record here.</p>`}
    <p class="provenance">${e.key===`USA`?`The US parties' words come from their own platforms. `:`These descriptions come from Wikipedia, some rewritten in plainer words by a small AI, and may be out of date or miss things. They aren't the parties' own words, and no party has checked them. `}"Left" and "right" come from Wikidata and mean different things in different countries.</p></section>`}function Lm(e){let t=Fm(e),n=e.lastExecutive,r=[];if(t){let n=e.key===`USA`?new Map(t.parties.map(e=>[e,q[ul(e.name)]])):Np(t.parties),o=Ef(t.parties,n),s=t.totalSeats??t.parties.reduce((e,t)=>e+(t.seats??0),0),c=K.ipu[e.key]?.seats,u=c&&s&&Math.abs(c-s)>Math.max(2,c*.03),d=zl(Rl(e));r.push(`<section><h4>${i(e.legislatureName??`Parliament`)}</h4>${fm(t.parties)}${d?`<p class="plain warn">Elections here aren't fully free, so these seats don't show how much people back each party.</p>`:``}${e.key===`USA`&&G.usCycle.live?`<p class="plain warn">Votes are still being counted, so this isn't final.</p>`:``}${u?`<p class="plain warn">This shows the ${s} seats in this vote's results. <a href="https://data.ipu.org/parliament/${i((e.iso2??``).toUpperCase())}" target="_blank" rel="noreferrer">The Inter-Parliamentary Union</a> lists ${c} seats in the full chamber, which can include appointed members or seats that weren't up this time.</p>`:``}${o?`<h4 class="sub">Where The Parties Stand</h4>${o}`:``}${pm(t,`seats`)}<p class="provenance"><a href="${i(a(t.article??t.title))}" target="_blank" rel="noreferrer">${i(t.title)}</a>, ${i(l(t.date))}</p></section>`)}return n&&n.article!==t?.article&&r.push(`<section><h4>${e.exec===`hog`?`Last Presidential Vote, Largely Ceremonial Here`:`Last Vote For The Top Job`}</h4>${pm(n,`votes`)}<p class="provenance"><a href="${i(a(n.article??n.title))}" target="_blank" rel="noreferrer">${i(n.title)}</a>, ${i(l(n.date))}</p></section>`),r.join(``)||`<p class="muted">No parliament on record for this territory.</p>`}function Rm(e){let t=K.byCountry[e.key],n=t?.q?Nf(t.q):``;return`${Gp(e)}${n?`<section><h4>How Well It Works</h4>${n}<p class="plain">${i(Mf(t.q))}</p><p class="provenance">V-Dem's assessments, via Our World in Data. These are researchers' judgments, and governments may disagree.</p></section>`:``}
    ${Cm(e)}`||`<p class="muted">No assessment on record for this territory.</p>`}function zm(e,t){let n=t.layers.admin1;return n?`<section><h4>Its Regions</h4><div class="region-grid">${n.meta.filter(t=>t.x?.cc===e.key).map(e=>({r:e,s:G.admin1[e.k]})).sort((e,t)=>Number(!!t.s)-Number(!!e.s)||e.r.n.localeCompare(t.r.n)).slice(0,80).map(({r:t,s:n})=>{let r=e.key===`USA`?String(t.x?.iso??``).replace(`US-`,``):``;return`<button data-select="${i(r?`state:${r}`:`admin1:${t.k}`)}" style="--c:${n?Al[n.bloc]:`rgba(255,255,255,.2)`}"><b>${i(t.n)}</b>${n?.leader?`<small>${i(n.leader)}</small>`:``}</button>`}).join(``)}</div></section>`:``}function Bm(e){let t=/^([DR])\+(\d+)/.exec(e);return t?`About ${t[2]} Point${t[2]===`1`?``:`s`} More ${t[1]===`D`?`Democratic`:`Republican`} Than The Whole Country`:`About The Same As The Whole Country`}function Vm(e){let t=/^(Tilt|Lean|Likely|Safe) ([DR])$/.exec(e);if(!t)return e===`Tossup`?`Too Close To Call`:e;let n=t[2]===`D`?`Democrats`:`Republicans`;return t[1]===`Tilt`?`A Slight Edge To ${n}`:t[1]===`Lean`?`Leaning To ${n}`:t[1]===`Likely`?`Likely ${n}`:`Safe For ${n}`}function Hm(e,t){let n=e.reporting?.pct===void 0?``:`<div class="meter" data-tip="${e.reporting.pct}% reporting${e.reporting.text?`, ${i(e.reporting.text)}`:``}"><i style="width:${e.reporting.pct}%"></i></div><small class="kicker">${nm(e)}</small>`,r=Math.max(...e.candidates.map(e=>e.pct??0),1),s=e.candidates.filter(e=>e.pct||e.votes).length>=2,l=[...e.candidates].filter(e=>e.pct).sort((e,t)=>(t.pct??0)-(e.pct??0)),u=e.status!==`called`&&l.length>=2?am(l[0].pct??0,l[1].pct??0):``;return`<section>${t?`<h4>${i(t)}</h4>`:``}
    <span class="chip ${e.status}">${i(rm(e))}${e.flip&&e.status===`called`?` From The ${i(kl[e.holder??`O`])}s`:``}</span>
    ${u?`<span class="margin-word inline">${i(u)}</span>`:``}
    ${e.candidates.map(t=>`<div class="cand-full ${t.winner?`won`:``}" data-tip="${i(`${t.name}${t.pct===void 0?``:`: ${t.pct.toFixed(1)}%`}${t.votes?`, ${o(t.votes)} votes`:``}`)}">
      <div class="cand-top">${Ap(q[t.party])}<span>${t.link?`<a href="${i(a(t.link))}" target="_blank" rel="noreferrer">${i(t.name)}</a>`:i(t.name)}${Bp(e,t)}</span><small>${i(t.partyName)}</small><b>${t.pct===void 0?``:`${t.pct.toFixed(1)}%`}</b></div>
      ${s&&t.pct?`<div class="barline tall"><i style="width:${((t.pct??0)/r*100).toFixed(1)}%;background:${q[t.party]}"></i></div>`:``}
    </div>`).join(``)}
    ${n}
    ${s&&e.candidates.some(e=>!e.pct&&!e.votes)?`<p class="muted">Smaller candidates' shares aren't in our data yet, so these don't add up to 100%.</p>`:``}
    ${im(e)}
    ${e.status!==`called`&&!s?`<p class="muted">No vote count in the feeds for this race yet. That doesn't mean it's tied.</p>`:``}
    ${e.status!==`called`&&s?`<p class="muted">Live count. No source has recorded a winner yet.</p>`:``}
    <dl class="facts">
      ${e.incumbents.length?`<dt>Now Held By</dt><dd>${e.incumbents.map(e=>`${i(e.name)} (${e.party})`).join(`, `)}</dd>`:``}
      ${e.note&&e.status===`called`?`<dt>${e.basis===`wikipedia`?`Wikipedia's Note`:`Status`}</dt><dd>${i(e.note)}</dd>`:``}
      ${e.pvi?`<dt>How It Usually Leans</dt><dd>${i(Bm(e.pvi))} <small>Cook PVI</small></dd>`:``}
      ${e.rating?`<dt>Forecasters Before The Vote</dt><dd>${i(Vm(e.rating.label))}</dd>`:``}
    </dl>
    <p class="provenance">Source: ${[...new Set(e.sources.map(e=>kp[e]??e))].map(i).join(` + `)}. Updated ${i(c(e.updatedAt))}.</p></section>`}function Um(e,t){return`<div class="sheet-actions"><button data-methods>How We Know</button><button data-share="${i(t)}" data-share-title="${i(e)}">Share This Page</button><a href="${i(`${hd}?title=${encodeURIComponent(`Mistake on the page for ${e}`)}`)}" target="_blank" rel="noreferrer">Report A Mistake</a></div>`}function Wm(e,t,n){if(!e)return``;if(e.status!==`called`||!e.winnerName)return`<div class="happened-row"><b>${i(t)}</b><p>Still counting. ${i(e.candidates.slice(0,2).map(e=>e.name).join(` and `))} are the main candidates.</p></div>`;let r=kl[e.winnerParty??`O`],a=e.flip&&e.holder?` This takes the seat from the ${kl[e.holder]}s.`:``,o=e.basis===`wikipedia`?`Wikipedia reports a win for`:`Won by`;return`<div class="happened-row"><b>${i(t)}</b><p>${Ap(q[e.winnerParty??`O`])}${o} <b>${i(e.winnerName)}</b>, ${i(r)}.${i(a)} <small>${i(n)}</small></p></div>`}function Gm(e,t,n,r){if(!t&&!n&&!r.length)return``;let a=G.usCycle.live,o=r.filter(e=>e.status===`called`).length,s=r.filter(e=>e.status===`called`&&e.flip).length,c=[t,n,...r].some(e=>e?.status===`called`&&e.basis===`wikipedia`);return`<section class="happened"><h4>${a?`What Just Happened In ${i(e)}`:`${i(e)}'s Last Election`}</h4>
    ${Wm(t,`Senate`,`Senators vote on national laws, judges and cabinet members.`)}
    ${Wm(n,e===`District of Columbia`?`Mayor`:`Governor`,`This job runs the local government and can sign or veto its laws.`)}
    ${r.length?`<div class="happened-row"><b>House</b><p>${o} of ${r.length} seats reported${s?`, ${s} changing party`:``}. Tap a seat number below for its result.</p></div>`:``}
    ${c?`<p class="provenance">"Wikipedia reports" means no official count or second news outlet has confirmed it here yet. Nothing is final until certified, which takes weeks.</p>`:``}</section>`}function Km(e){let t=e.name.toLowerCase().replace(/^u\.s\. /,`us-`).replace(/[^a-z-]+/g,`-`),n=new Date().getFullYear(),r=n%2==0&&Date.now()<nl(n)?n:n+(n%2==0?2:1);return`<section class="nudge"><h4>Your Vote In ${i(e.name)}</h4>
    <p class="plain">The next nationwide US election is in November ${r}. State and local votes often come sooner, and can decide a lot about daily life.</p>
    <div class="vote-links"><a class="vote-link" href="https://vote.gov/register/${i(t)}" target="_blank" rel="noreferrer">Register To Vote &#8250;</a>
    <a class="vote-more" href="https://www.usa.gov/state-election-office" target="_blank" rel="noreferrer">Find Your Election Office &#8599;</a>
    <a class="vote-more" href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer">Find Your District &#8599;</a></div>
    <p class="provenance">You have to be 18 to vote in US national elections, and many states let you sign up earlier.</p></section>`}function qm(e){let t=ll[e];if(!t)return``;let n=G.races.get(`S:${e}`),r=G.races.get(`G:${e}`),a=Ul(e).filter(e=>!e.up),o=G.us.president[e],s=uu(ou(e)),c=[...G.races.values()].filter(t=>t.office===`house`&&t.state===e).sort((e,t)=>(e.seat??``).localeCompare(t.seat??``));return`<header class="sheet-head"><small class="kicker">US ${t.delegate?`Territory`:`State`}</small><h2>${i(t.name)}</h2></header><div class="sheet-body">
    ${Gm(t.name,n,r,c)}
    ${Km(t)}
    ${s?`<section><h4>Who Holds What</h4>${s}</section>`:``}
    ${G.usHistory?.states[e]?`<section><h4>How ${i(t.name)} Has Voted</h4>${Em(G.usHistory.states[e])}</section>`:``}
    ${a.length?`<section><h4>Senators Not On The Ballot</h4>${a.map(e=>`<div class="kv-line">${Ap(q[e.party])}${i(e.name)}</div>`).join(``)}</section>`:``}
    ${n?Hm(n,`Senate Race`):``}
    ${r?Hm(r,t.code===`DC`?`Mayor's Race`:`Governor's Race`):``}
    ${Dm(t.name)}
    ${Um(t.name,`state/${e}`)}
    ${c.length?`<section><h4>House Seats <small>${c.filter(e=>e.status===`called`).length} Of ${c.length} Reported</small></h4><div class="tiles">${c.map(e=>{let t=e.status===`called`&&e.winnerParty?q[e.winnerParty]:e.holder?q[e.holder]:`#8a93a0`;return`<button class="tile ${e.status}" style="--c:${t}" data-select="seat:${i(e.seat??``)}" title="${i(e.seat??``)}">${i((e.seat??``).split(`-`)[1])}</button>`}).join(``)}</div><p class="muted">Solid: a winner is recorded. Outlined: who holds the seat now, no result yet.</p></section>`:``}
    ${o?`<section><h4>President, 2024</h4>${Pp([{color:q.D,value:o.dem,label:`Harris: ${(o.dem/o.total*100).toFixed(1)}%`},{color:q.R,value:o.rep,label:`Trump: ${(o.rep/o.total*100).toFixed(1)}%`}])}
      <div class="legend-line split"><span>${Ap(q.D)}Harris ${(o.dem/o.total*100).toFixed(1)}%</span><span>${Ap(q.R)}Trump ${(o.rep/o.total*100).toFixed(1)}%</span></div>
      ${o.note?`<p class="muted">${i(o.note)}</p>`:``}</section>`:``}
  </div>`}function Jm(e){let t=G.races.get(`H:${e}`),n=e.split(`-`)[0],r=ll[n],a=G.us.representatives[e];return`<header class="sheet-head"><small class="kicker"><button class="linkish" data-select="state:${i(n)}">${i(r?.name??n)}</button>, US House</small><h2>${i(e)}</h2></header><div class="sheet-body">
    ${t?Hm(t):`<p class="muted">This seat isn't on the ballot in the data feed.</p>`}
    ${a?`<section><h4>Serving Now</h4><div class="kv-line">${Ap(q[a.party])}${i(a.name)}</div></section>`:``}
    ${r?Km(r):``}
    <p class="provenance">Results come from Wikipedia's race tables and official counts where we have them. Members come from the congress-legislators project.</p>
    ${Um(e,`seat/${e}`)}
  </div>`}function Ym(e,t){let n=t.layers.admin1,r=n?.byKey.get(e);if(!n||r===void 0)return``;let a=n.meta[r],o=G.admin1[e],s=String(a.x?.cc??``),c=G.world.countries[s],l=uu(su(e,s));return`<header class="sheet-head"><small class="kicker"><button class="linkish" data-select="country:${i(s)}">${i(c?.name??s)}</button>, ${i(String(a.x?.type??`Region`))}</small><h2>${i(a.n)}</h2></header><div class="sheet-body"><section>
    ${o?.leader?`<div class="chips">${zp(o,o.bloc===`na`?`Alignment Not Classified`:void 0)}</div>
      <div class="leader has-face">${Jp({name:o.leader,image:o.image})}<div><small>Head Of Government</small><b>${o.qid?`<a href="https://www.wikidata.org/wiki/${i(o.qid)}" target="_blank" rel="noreferrer">${i(o.leader)}</a>`:i(o.leader)}</b>
      <span>${o.party?`${Ap(o.color??Al[o.bloc])}${i(o.party)}`:`No Party Recorded`}</span></div></div>
      ${cm(o.score,c)}`:`<p class="muted">Nobody is recorded as this region's head of government, so the map shows ${i(c?.name??`the country`)}'s national color here, very faintly.</p>`}
    <p class="provenance">Source: Wikidata. Regional coverage varies by country.</p></section>
    ${l?`<section><h4>Who Holds What</h4>${l}</section>`:``}
    ${Dm(a.n)}</div>`}function Xm(e,t){let n=t.layers.uscounty?.meta[t.layers.uscounty.byKey.get(e)??-1],r=G.usCounty?.[e],a=String(n?.x?.state??``),s=`<header class="sheet-head"><small class="kicker"><button class="linkish" data-select="state:${i(a)}">${i(ll[a]?.name??a)}</button>, County</small><h2>${i(n?.n??e)}</h2></header>`;if(!r)return`${s}<div class="sheet-body"><p class="muted">We don't have this county's 2024 result.</p>${Um(n?.n??e,`county/${e}`)}</div>`;let[c,l,u]=r;return`${s}<div class="sheet-body"><section><h4>President, 2024</h4>${Pp([{color:q.D,value:l,label:`Harris: ${o(l)} votes, ${(l/u*100).toFixed(1)}%`},{color:q.R,value:c,label:`Trump: ${o(c)} votes, ${(c/u*100).toFixed(1)}%`}])}
    <div class="legend-line split"><span>${Ap(q.D)}Harris ${(l/u*100).toFixed(1)}%</span><span>${Ap(q.R)}Trump ${(c/u*100).toFixed(1)}%</span></div></section>${G.usHistory?.counties[e]?`<section><h4>How It Has Voted</h4>${Em(G.usHistory.counties[e])}</section>`:``}<p class="provenance">County results come from a <a href="https://github.com/tonmcg/US_County_Level_Election_Results_08-24" target="_blank" rel="noreferrer">public collection of US results</a>.</p>${ll[a]?Km(ll[a]):``}${Um(n?.n??e,`county/${e}`)}</div>`}function Zm(e){let t=(e.parties??[]).some(e=>e.pct),n=e.parties??[],r={upcoming:`Voting ${d(e.date)}`,voting:`Voting Under Way`,counting:`Counting`,decided:`Decided`}[e.phase];return`<header class="sheet-head"><small class="kicker"><button class="linkish" data-select="country:${i(e.country)}">${i(e.countryName)}</button>, ${i(l(e.date))}</small><h2>${i(e.title)}</h2></header><div class="sheet-body"><section>
    <span class="chip contested">${i(r)}</span>
    ${n.length?pm({title:e.title,date:e.date,parties:n},t?`votes`:`seats`):`<p class="muted">The contenders aren't listed in a form this app can read yet.</p>`}
    ${t?``:`<p class="muted">${e.phase===`upcoming`?`No votes yet. Any seat numbers here are from the previous parliament.`:`No results in the feed yet.`}</p>`}
    ${e.article?`<p class="provenance"><a href="${i(a(e.article))}" target="_blank" rel="noreferrer">Wikipedia: ${i(e.article)}</a></p>`:``}
    ${Um(e.title,`election/${e.id}`)}
  </section></div>`}var X=`#d9952c`,Qm=`#a06ff0`,$m=`#2aa3ab`,Z=`rgba(255,255,255,0.86)`,eh=`rgba(255,255,255,0.22)`,th=0,nh=()=>(th+=34,th),Q=()=>`class="grow" style="--d:${nh()}ms"`,rh=`M5 .4a2.6 2.6 0 1 0 0 5.2a2.6 2.6 0 1 0 0-5.2zM.8 13.2c0-3.8 1.9-6.3 4.2-6.3s4.2 2.5 4.2 6.3z`;function $(e,t,n=1,r=Z){return`<g transform="translate(${e} ${t}) scale(${n})"><path ${Q()} d="${rh}" fill="${r}"/></g>`}function ih(e,t,n,r,i=Z,a=.72){let o=``;for(let s=0;s<n;s++){let n=Array.isArray(i)?i[s%i.length]:i;o+=$(e+s%r*8.2*(a/.72),t+Math.floor(s/r)*11*(a/.72),a,n)}return o}function ah(e,t,n,r,i=Z){let a=Math.atan2(r-t,n-e),o=4.4,s=`${(n-Math.cos(a-.5)*o).toFixed(1)} ${(r-Math.sin(a-.5)*o).toFixed(1)}`,c=`${(n-Math.cos(a+.5)*o).toFixed(1)} ${(r-Math.sin(a+.5)*o).toFixed(1)}`,l=nh();return`<path class="draw" style="animation-delay:${l}ms" pathLength="1" d="M${e} ${t}L${n} ${r}" fill="none" stroke="${i}" stroke-width="1.4" stroke-linecap="round"/><path class="fadein" style="animation-delay:${l+180}ms" d="M${s}L${n} ${r}L${c}" fill="none" stroke="${i}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`}function oh(e,t,n,r){let i=Math.PI-r*Math.PI;return`${(e+Math.cos(i)*n).toFixed(2)} ${(t-Math.sin(i)*n).toFixed(2)}`}function sh(e,t,n,r=[[.5,X],[.3,Qm],[.2,$m]]){let i=n*.62,a=0,o=``;for(let[s,c]of r){let r=a+(a>0?.012:0),l=a+s-(a+s<.999?.012:0);a+=s,o+=`<path ${Q()} d="M${oh(e,t,n,r)}A${n} ${n} 0 0 1 ${oh(e,t,n,l)}L${oh(e,t,i,l)}A${i} ${i} 0 0 0 ${oh(e,t,i,r)}Z" fill="${c}"/>`}return o}function ch(e,t,n=1,r=X){return`<g transform="translate(${e} ${t}) scale(${n})"><path ${Q()} d="M0 9L1.2 1.5L5 5.2L8 0L11 5.2L14.800 1.5L16 9Z" fill="${r}"/></g>`}function lh(e,t,n=5,r=X){let i=``;for(let r=0;r<10;r++){let a=-Math.PI/2+r*Math.PI/5,o=r%2?n*.44:n;i+=`${r?`L`:`M`}${(e+Math.cos(a)*o).toFixed(1)} ${(t+Math.sin(a)*o).toFixed(1)}`}return`<path ${Q()} d="${i}Z" fill="${r}"/>`}function uh(e,t,n=1,r=`tick`,i=X){let a=r===`tick`?`<path d="M4 9.500l3 3.500l6-8" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`:r===`cross`?`<path d="M4.500 5l8 8M12.500 5l-8 8" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round"/>`:``;return`<g transform="translate(${e} ${t}) scale(${n})"><g ${Q()}><rect width="17" height="20" rx="2" fill="rgba(255,255,255,.9)"/>${a}</g></g>`}function dh(e,t,n=1){return`<g transform="translate(${e} ${t}) scale(${n})"><g ${Q()}><rect y="6" width="26" height="20" rx="2.5" fill="none" stroke="${Z}" stroke-width="1.5"/><path d="M0 6h26" stroke="${Z}" stroke-width="1.5"/><path d="M8 6h10" stroke="#14171d" stroke-width="2.6"/></g></g>`}function fh(e,t,n=1,r=`rgba(255,255,255,.9)`){return`<g transform="translate(${e} ${t}) scale(${n})"><g ${Q()}><rect width="20" height="26" rx="2.5" fill="${r}"/><path d="M4.500 7h11M4.500 12h11M4.500 17h7" stroke="#14171d" stroke-width="1.500" stroke-linecap="round"/></g></g>`}function ph(e,t,n=1,r=X){return`<g transform="translate(${e} ${t}) scale(${n})"><g ${Q()}><path d="M1 0v26" stroke="${Z}" stroke-width="1.5" stroke-linecap="round"/><path d="M2 1h16l-3.500 5l3.500 5H2z" fill="${r}"/></g></g>`}function mh(e,t,n=1,r=`rgba(255,255,255,.9)`){return`<g transform="translate(${e} ${t}) scale(${n})"><path ${Q()} d="M0 2c4-2 8-2 11 1c3-3 7-3 11-1v16c-4-2-8-2-11 1c-3-3-7-3-11-1z" fill="${r}"/></g>`}function hh(e,t,n,r,i=eh){return`<rect ${Q()} x="${e}" y="${t}" width="${n}" height="${r}" rx="2.5" fill="${i}"/>`}function gh(e,t,n=6,r=`#e0474c`){return`<path ${Q()} d="M${e-n} ${t-n}L${e+n} ${t+n}M${e+n} ${t-n}L${e-n} ${t+n}" stroke="${r}" stroke-width="2.200" stroke-linecap="round"/>`}function _h(e,t,n=6,r=`#6ff0a4`){return`<path ${Q()} d="M${e-n} ${t}L${e-n*.25} ${t+n*.75}L${e+n} ${t-n*.75}" fill="none" stroke="${r}" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"/>`}function vh(e,t,n,r,i=11){return`<rect class="rise" style="--d:${nh()}ms" x="${e}" y="${t-n}" width="${i}" height="${n}" rx="2" fill="${r}"/>`}function yh(e,t,n,r=Z){return`<path class="draw" style="animation-delay:${nh()}ms" pathLength="1" d="M${e} ${n}H${t}" stroke="${r}" stroke-width="1.100"/>`}function bh(e,t,n,r=9.5,i=3.4){let a=``,o=0;for(let[s,c]of n)for(let n=0;n<s;n++,o++)a+=`<circle ${Q()} cx="${e+o*r}" cy="${t}" r="${i}" fill="${c}"/>`;return a}var xh={democracy:()=>ih(10,14,9,3,Z)+ah(44,33,76,33)+$(84,18,2.2,X),autocracy:()=>$(14,12,3,X)+ah(52,33,80,33)+ih(88,14,9,3,eh),parliament:()=>sh(66,58,48),parliamentary:()=>ih(4,18,6,3,Z)+ah(32,33,42,33)+sh(70,50,24)+ah(98,33,108,33)+$(113,20,1.7,X),presidential:()=>ih(4,20,6,3,Z)+ah(32,28,72,16)+$(80,2,1.7,X)+ah(32,40,72,50)+sh(102,62,22),"semi-presidential":()=>ih(2,20,6,3,Z)+ah(28,26,50,14)+$(55,0,1.5,X)+ah(28,42,48,52)+sh(68,64,16)+ah(88,54,106,48)+$(109,34,1.5,$m),republic:()=>$(30,12,3,X)+ch(82,18,1.7,eh)+gh(96,26,13),monarchy:()=>ch(52,2,1.7,X)+$(53,20,3,Z),"constitutional monarchy":()=>ch(10,8,1.1,X)+$(10,22,2,eh)+fh(50,18,1.1)+sh(106,54,24),"absolute monarchy":()=>ch(14,0,2.2,X)+$(16,20,2.8,Z)+ah(56,34,82,34)+ih(90,14,9,3,eh),constitution:()=>fh(48,3,2.2)+lh(98,50,7,X),"prime minister":()=>sh(40,54,34)+ah(78,34,96,34)+$(102,14,2.6,X),president:()=>uh(10,18,1.5)+ah(44,33,78,33)+$(88,14,2.6,X)+lh(100,8,6),chancellor:()=>sh(40,54,34,[[.6,X],[.4,eh]])+ah(78,34,96,34)+$(102,14,2.6,X),"head of state":()=>$(32,12,3,Z)+ph(82,10,1.8,X),"head of government":()=>$(52,8,2.2,X)+ih(14,42,3,3,Z)+ih(84,42,3,3,Z)+ah(48,34,34,42)+ah(84,34,96,42),coalition:()=>vh(10,58,24,X)+vh(25,58,18,Qm)+ah(44,40,66,40)+vh(80,58,24,X,18)+`<rect class="rise" style="--d:${nh()}ms" x="80" y="16" width="18" height="17" rx="2" fill="${Qm}"/>`+yh(4,112,26),opposition:()=>sh(66,60,50,[[.56,X],[.44,eh]])+ah(90,26,74,26,Z),majority:()=>bh(20,34,[[6,X],[4,eh]])+`<path class="fadein" d="M62.700 18V50" stroke="${Z}" stroke-width="1.100"/>`,plurality:()=>vh(30,60,36,X,18)+vh(56,60,28,Qm,18)+vh(82,60,22,$m,18)+yh(20,112,14)+_h(39,16,5),cabinet:()=>`<ellipse ${Q()} cx="66" cy="36" rx="30" ry="13" fill="${eh}"/>`+$(61,2,1.1,X)+$(32,10,1,Z)+$(90,10,1,Z)+$(32,42,1,Z)+$(90,42,1,Z)+$(61,49,1,Z),minister:()=>$(26,12,3,Z)+`<g ${Q()}><path d="M76 20h12l4 4h20v24H76z" fill="${X}"/></g>`,legislature:()=>fh(10,20,1.1)+ah(38,34,62,34)+sh(96,54,30),"upper house":()=>sh(66,32,24,[[1,X]])+sh(66,62,24,[[1,eh]]),"lower house":()=>sh(66,32,24,[[1,eh]])+sh(66,62,24,[[1,X]]),senate:()=>sh(66,58,48,[[1,eh]])+sh(66,58,28,[[1,X]]),bicameral:()=>sh(36,52,28,[[1,X]])+sh(96,52,28,[[1,Qm]]),unicameral:()=>sh(66,58,46,[[1,X]]),federal:()=>hh(26,6,38,24)+hh(68,6,38,24)+hh(26,34,38,24)+hh(68,34,38,24)+lh(45,18,5,X)+lh(87,18,5,Qm)+lh(45,46,5,$m)+lh(87,46,5,Z),unitary:()=>hh(26,6,80,52)+lh(66,32,8,X)+ah(56,26,38,16)+ah(76,26,94,16)+ah(56,38,38,48)+ah(76,38,94,48),"proportional representation":()=>`<rect ${Q()} x="4" y="24" width="30" height="16" rx="2" fill="${X}"/><rect ${Q()} x="36" y="24" width="17" height="16" rx="2" fill="${Qm}"/><rect ${Q()} x="55" y="24" width="11" height="16" rx="2" fill="${$m}"/>`+ah(70,32,80,32)+bh(86,24,[[3,X]],9,3.2)+bh(86,33,[[3,Qm]],9,3.2)+bh(86,42,[[1,$m]],9,3.2),"first-past-the-post":()=>vh(16,58,36,X)+vh(31,58,28,Qm)+vh(46,58,18,$m)+_h(21,16,5)+ah(66,34,88,34)+`<circle ${Q()} cx="106" cy="34" r="10" fill="${X}"/>`,"two-round":()=>vh(6,58,28,X,9)+vh(17,58,22,Qm,9)+vh(28,58,14,$m,9)+vh(39,58,8,eh,9)+ah(54,34,76,34)+vh(86,58,42,X,15)+vh(104,58,30,Qm,15)+_h(93,10,5),runoff:()=>vh(38,60,40,X,22)+vh(72,60,34,Qm,22)+yh(26,106,22)+_h(49,12,5),"ranked choice":()=>`<g ${Q()}><rect x="42" y="4" width="48" height="58" rx="3" fill="rgba(255,255,255,.9)"/><g font-size="11" font-weight="700" fill="#14171d"><text x="49" y="20">1</text><text x="49" y="37">2</text><text x="49" y="54">3</text></g><path d="M60 16h22M60 33h22M60 50h22" stroke="#14171d" stroke-width="2.200" stroke-linecap="round" opacity=".55"/></g>`,"mixed-member":()=>uh(6,6,1.2)+uh(6,36,1,`tick`,Qm)+ah(34,18,56,30)+ah(34,46,56,36)+sh(98,54,32,[[.55,X],[.45,Qm]]),"party list":()=>`<g ${Q()}><rect x="16" y="6" width="40" height="52" rx="3" fill="rgba(255,255,255,.9)"/><path d="M23 16h26M23 26h26M23 36h26M23 46h26" stroke="#14171d" stroke-width="2.200" stroke-linecap="round"/></g>`+ah(62,26,82,26)+bh(90,26,[[3,X]],9.5,3.8),threshold:()=>vh(20,58,40,X,16)+vh(42,58,30,Qm,16)+vh(64,58,20,$m,16)+vh(86,58,7,eh,16)+yh(10,116,46,`#fff`)+gh(94,34,5),constituency:()=>hh(10,8,34,24)+hh(48,8,34,24,X)+hh(86,8,34,24)+hh(10,36,34,22)+hh(48,36,34,22)+hh(86,36,34,22)+$(58,11,1.3,Z),"electoral college":()=>hh(6,8,20,16,X)+hh(30,8,12,16,Qm)+hh(6,28,12,26,Qm)+hh(22,28,20,26,X)+ah(50,32,82,32)+$(92,12,2.6,X),midterm:()=>yh(10,122,46)+$(4,18,1.7,X)+$(112,18,1.7,Z)+uh(56,16,1.1)+`<path class="fadein" d="M66 40V52" stroke="${Z}" stroke-width="1.500"/>`,gerrymandering:()=>`<path ${Q()} d="M22 12H52V26H80V10H112V30H84V54H58V38H40V56H22Z" fill="${eh}" stroke="${Z}" stroke-width="1.300" stroke-linejoin="round"/>`+bh(32,20,[[2,X]],12)+bh(90,20,[[2,X]],12)+bh(30,46,[[1,X]])+bh(70,46,[[1,X]]),referendum:()=>`<g ${Q()}><circle cx="38" cy="33" r="20" fill="rgba(111,240,164,.16)"/></g>`+_h(38,33,10)+`<g ${Q()}><circle cx="94" cy="33" r="20" fill="rgba(224,71,76,.16)"/></g>`+gh(94,33,9),junta:()=>$(26,22,2,Z)+$(56,16,2.4,Z)+$(90,22,2,Z)+lh(36,12,5)+lh(68,6,5)+lh(100,12,5),coup:()=>`<g transform="rotate(62 34 48)">${$(22,22,2.6,eh)}</g>`+ah(50,46,74,46)+$(86,14,2.8,X)+lh(100,8,6),"one-party state":()=>sh(50,56,40,[[1,X]])+uh(102,20,1.2,`tick`),theocracy:()=>mh(52,2,1.3)+$(52,28,2.7,Z),dictatorship:()=>$(40,2,4.4,X)+sh(108,60,16,[[1,eh]])+gh(108,52,7),independence:()=>hh(6,16,48,36)+ph(88,12,1.7,X)+hh(76,40,40,16,$m)+`<path class="fadein" d="M54 34H66M60 28l6 12" stroke="${Z}" stroke-width="1.300" stroke-linecap="round"/>`,colony:()=>hh(4,8,58,44)+ph(26,12,1.3,X)+ah(66,30,90,34)+hh(96,26,26,20,$m)+ph(101,8,.9,X),"civil war":()=>hh(20,10,44,46)+hh(68,10,44,46)+ph(32,16,1.2,X)+ph(80,16,1.2,Qm),sharia:()=>mh(12,18,1.7)+`<g ${Q()}><path d="M92 8V52M78 52h28M74 16h36M74 16l-6 18h12zM110 16l-6 18h12z" fill="none" stroke="${Z}" stroke-width="1.500" stroke-linejoin="round" stroke-linecap="round"/></g>`,tribal:()=>$(57,18,2,X)+$(26,4,1.1,Z)+$(90,4,1.1,Z)+$(14,26,1.1,Z)+$(102,26,1.1,Z)+$(26,48,1.1,Z)+$(90,48,1.1,Z),impeachment:()=>sh(30,56,26,[[1,X]])+ah(60,36,80,36,`#e0474c`)+$(88,12,2.8,Z)+gh(102,32,10),canton:()=>hh(30,6,22,16)+hh(56,6,22,16,X)+hh(82,6,22,16)+hh(30,26,22,16,Qm)+hh(56,26,22,16)+hh(82,26,22,16,$m)+hh(30,46,22,14,$m)+hh(56,46,22,14,Qm)+hh(82,46,22,14),"compulsory voting":()=>ih(8,14,9,3,X)+ah(44,33,68,33)+dh(78,18,1.3),incumbent:()=>`<g ${Q()}><path d="M40 16V54M40 38H66V54" fill="none" stroke="${Z}" stroke-width="2.600" stroke-linecap="round" stroke-linejoin="round"/></g>`+$(42,8,2.2,X)+$(92,18,2.2,eh),ballot:()=>uh(46,2,3,`cross`,X),delegate:()=>ih(6,14,9,3,Z)+ah(36,33,50,33)+$(56,16,2,X)+ah(82,33,94,33)+sh(114,50,16),veto:()=>fh(42,4,2.2)+gh(64,33,24),caucus:()=>`<ellipse ${Q()} cx="66" cy="34" rx="44" ry="25" fill="${eh}"/>`+ih(40,16,8,4,[X,X,X,Qm],1),primary:()=>ih(6,16,6,3,X,1)+ah(44,33,72,33)+$(84,12,2.8,X)+_h(112,16,6),suffrage:()=>ih(6,12,9,3,[Qm,X,$m])+ah(36,33,62,33)+dh(72,16,1.4)+uh(82,0,.8),swing:()=>`<rect ${Q()} x="20" y="12" width="52" height="14" rx="2" fill="${X}"/><rect ${Q()} x="74" y="12" width="38" height="14" rx="2" fill="${Qm}"/><rect ${Q()} x="20" y="40" width="42" height="14" rx="2" fill="${X}"/><rect ${Q()} x="64" y="40" width="48" height="14" rx="2" fill="${Qm}"/>`+ah(70,34,56,34),turnout:()=>{let e=``;for(let t=0;t<20;t++)e+=$(18+t%10*9.8,6+Math.floor(t/10)*26,1.3,t<13?X:eh);return e},candidate:()=>$(24,6,3,X)+`<g ${Q()}><path d="M18 58H62L58 46H22Z" fill="${eh}"/></g>`+uh(88,12,1.9),seat:()=>sh(66,58,48,[[1,eh]])+`<circle ${Q()} cx="66" cy="20" r="6" fill="${X}"/>`,ceremonial:()=>$(26,18,2.8,Z)+ch(29,4,1.3)+ah(60,34,80,34,eh)+fh(88,14,1.5)+gh(112,18,6),"governor general":()=>ch(10,24,1.5)+ah(42,31,70,31)+$(84,10,3,Z)+`<path ${Q()} d="M70 60H122" stroke="${eh}" stroke-width="2"/>`,federation:()=>`<rect ${Q()} x="26" y="6" width="80" height="54" rx="9" fill="none" stroke="${Z}" stroke-width="1.800"/>`+hh(33,13,30,18,X)+hh(69,13,30,18,Qm)+hh(33,36,30,18,$m)+hh(69,36,30,18,eh),protectorate:()=>$(102,8,3.3,eh)+`<path ${Q()} d="M42 8L72 15V34C72 46 60 56 42 62C24 56 12 46 12 34V15Z" fill="none" stroke="${X}" stroke-width="2.400"/>`+$(37,18,1.6,Z)+ch(36,9,.62),interim:()=>$(28,12,3,Z)+`<circle ${Q()} cx="92" cy="33" r="24" fill="none" stroke="${X}" stroke-width="2.400"/><path ${Q()} d="M92 19V33L102 40" fill="none" stroke="${Z}" stroke-width="2.400" stroke-linecap="round"/>`,hereditary:()=>$(12,12,3.4,X)+ch(17,0,1)+ah(50,38,64,38)+$(72,22,2.4,X)+ah(100,44,110,44)+$(114,34,1.5,X),secular:()=>`<g ${Q()}><path d="M12 28L36 14L60 28Z" fill="${Z}"/><rect x="16" y="31" width="5" height="22" fill="${Z}"/><rect x="26" y="31" width="5" height="22" fill="${Z}"/><rect x="41" y="31" width="5" height="22" fill="${Z}"/><rect x="51" y="31" width="5" height="22" fill="${Z}"/><rect x="12" y="54" width="48" height="4" fill="${Z}"/></g><path class="fadein" d="M66 6V62" stroke="${X}" stroke-width="2.400" stroke-dasharray="4 4"/><g ${Q()}><path d="M78 36A20 20 0 0 1 118 36Z" fill="${$m}"/><rect x="80" y="38" width="36" height="20" fill="${$m}"/><path d="M98 16V6" stroke="${$m}" stroke-width="2.400"/></g>`,sectarian:()=>ih(12,12,8,4,X,.9)+`<path class="fadein" d="M66 4L60 18L72 30L60 44L72 62" fill="none" stroke="${Z}" stroke-width="2"/>`+ih(80,12,8,4,$m,.9),cleric:()=>$(22,8,3.8,Qm)+mh(62,24,1.5)+ih(92,22,6,3,eh,.72),emir:()=>$(52,12,2.8,Z)+ch(55,0,1.1)+`<path ${Q()} d="M4 62C24 46 40 46 56 58C76 44 104 44 128 62Z" fill="${X}" fill-opacity="0.45"/>`,sultan:()=>`<g ${Q()}><path d="M14 40A24 24 0 0 1 62 40Z" fill="${$m}"/><rect x="14" y="42" width="48" height="18" fill="${$m}"/><path d="M38 16V6" stroke="${$m}" stroke-width="2.400"/><rect x="70" y="24" width="7" height="36" fill="${$m}"/></g>`+$(90,12,3.2,Z)+ch(95,0,1.1),"martial law":()=>fh(12,14,1.7)+gh(38,18,7)+`<g ${Q()}><path d="M82 13C82 3 106 3 106 13L108 16H80Z" fill="${$m}"/></g>`+$(80,14,2.8,$m)+ih(114,26,4,2,eh,.6),"term limit":()=>hh(10,22,22,22,X)+hh(36,22,22,22,X)+`<path class="fadein" d="M66 8V58" stroke="#e0474c" stroke-width="3" stroke-linecap="round"/>`+hh(74,22,22,22,eh)+hh(100,22,22,22,eh)};function Sh(e){let t=xh[e.toLowerCase()];return t?(th=0,`<svg class="viz term-viz" viewBox="0 0 132 66" aria-hidden="true">${t()}</svg>`):``}Object.keys(xh);var Ch={democracy:e=>e===`liberal`||e===`electoral`,autocracy:e=>![`liberal`,`electoral`,`unknown`].includes(e),dictatorship:e=>![`liberal`,`electoral`,`unknown`].includes(e),"one-party state":e=>e===`oneparty`,theocracy:e=>e===`religious`,junta:e=>e===`military`,"absolute monarchy":e=>e===`monarchy`},wh=[{name:`Kinds Of Government`,color:`#5a78f0`,words:[`democracy`,`autocracy`,`republic`,`monarchy`,`constitutional monarchy`,`absolute monarchy`,`dictatorship`,`junta`,`one-party state`,`theocracy`,`federation`,`hereditary`,`emir`,`sultan`,`parliamentary`,`presidential`,`semi-presidential`,`federal`,`unitary`]},{name:`Who Holds Power`,color:`#a06ff0`,words:[`president`,`prime minister`,`chancellor`,`head of state`,`head of government`,`cabinet`,`minister`,`incumbent`,`coalition`,`opposition`,`majority`,`plurality`,`impeachment`,`veto`,`delegate`,`ceremonial`,`governor general`,`interim`,`term limit`]},{name:`How Lawmaking Works`,color:`#1fa3ae`,words:[`filibuster`,`supreme court`,`parliament`,`legislature`,`upper house`,`lower house`,`senate`,`bicameral`,`unicameral`,`seat`,`caucus`,`constitution`]},{name:`Left And Right`,color:`#d5457f`,words:[`far left`,`far right`]},{name:`How Voting Works`,color:`#e8b339`,words:[`voting age`,`ballot`,`candidate`,`turnout`,`suffrage`,`compulsory voting`,`primary`,`midterm`,`swing`,`referendum`,`constituency`,`gerrymandering`,`first-past-the-post`,`two-round`,`runoff`,`ranked choice`,`proportional representation`,`party list`,`mixed-member`,`threshold`,`electoral college`]},{name:`From History`,color:`#d5457f`,words:[`independence`,`colony`,`coup`,`civil war`,`sharia`,`tribal`,`canton`,`protectorate`,`secular`,`sectarian`,`cleric`,`martial law`]}],Th={democracy:`A class choosing its own class captain, and able to pick someone else next year.`,autocracy:`A game where one player makes all the rules, and nobody can change them.`,parliament:`A big meeting where people from all over the country argue about the rules.`,republic:`A country whose top job isn't handed down through a family.`,monarchy:`A top job that passes from parent to child.`,constitution:`The rulebook for the rulebook. Every other law has to follow it.`,coalition:`Friends pooling their pocket money because nobody has enough alone.`,opposition:`The other team on the field, keeping the winners honest.`,majority:`If 10 friends pick a film, 6 is a majority.`,plurality:`If 4 want pizza, 3 want burgers and 3 want tacos, pizza has a plurality.`,cabinet:`The leader's team of captains, each in charge of one big job.`,minister:`The person in charge of one big job, like schools or hospitals.`,federal:`Like a school with its own rules, in a district with a few rules for everyone.`,unitary:`Like every classroom following one rulebook from the head teacher.`,bicameral:`Like needing both your parents to say yes.`,unicameral:`Like only needing one parent to say yes.`,"first-past-the-post":`A race where only first place gets a medal, however close second came.`,"proportional representation":`Sharing out slices of pizza depending on how many people voted for each topping.`,runoff:`A tie-breaker game between the top two.`,"ranked choice":`Saying your favorite ice cream, and which you'd want if they've run out.`,threshold:`A height limit on a ride. Below the line, you don't get on.`,constituency:`Your neighborhood's team, with one person speaking for it.`,gerrymandering:`Picking the teams so your side always wins, before the game even starts.`,referendum:`Everyone in the country gets to answer one question directly.`,coup:`Grabbing the steering wheel from whoever's driving.`,veto:`A parent saying no, even when all the kids agreed.`,filibuster:`One kid talking for so long that the class runs out of time to vote.`,"supreme court":`The teacher everyone goes to when nobody can agree on the rules.`,"voting age":`Being tall enough for the ride: a line everyone has to reach first.`,impeachment:`A formal charge against a top official, like a court case for a leader.`,incumbent:`The reigning champion, defending their title.`,ballot:`Your own private say, on paper or a screen.`,turnout:`How many people invited to the party actually came.`,swing:`Fans who might cheer for either team this season.`,primary:`Try-outs, to pick who plays for the team in the big game.`,suffrage:`Being allowed in the room when the decision is made.`,candidate:`Someone putting their hand up for the job.`,seat:`One chair at the table where decisions get made.`,"compulsory voting":`Like school: you have to turn up, though nobody can make you answer.`,ceremonial:`A role for big occasions, without real say over what happens.`,"head of state":`The face of the country, at big events and in the history books.`,"head of government":`The person actually doing the day-to-day running, like a team's manager.`};function Eh(e){return e[Math.floor(Date.now()/864e5)%e.length]}var Dh=wh.flatMap(e=>e.words),Oh=class{select;open=!1;el=document.createElement(`div`);query=``;chosen=null;constructor(e){this.select=e,this.el.id=`dictionary`,this.el.setAttribute(`role`,`dialog`),this.el.setAttribute(`aria-modal`,`true`),this.el.setAttribute(`aria-label`,`Dictionary`),document.body.append(this.el),this.el.addEventListener(`click`,e=>{let t=e.target;if(t===this.el||t.closest(`[data-dict-close]`)){this.close();return}if(t.closest(`[data-dict-back]`)){this.chosen=null,this.render();return}let n=t.closest(`[data-dict-word]`);if(n){this.show(n.dataset.dictWord);return}let r=t.closest(`[data-dict-country]`);r&&(this.close(),this.select(`country:${r.dataset.dictCountry}`))}),this.el.addEventListener(`input`,e=>{let t=e.target;t.id===`dict-search`&&(this.query=t.value.trim().toLowerCase(),this.renderList(),this.query&&cd(`${this.allWords.filter(e=>e.includes(this.query)).length} words found.`))}),window.addEventListener(`keydown`,e=>{this.open&&e.key===`Escape`&&this.close()})}get allWords(){return Object.keys(Op.glossary).sort((e,t)=>e.localeCompare(t))}show(e){this.open=!0,this.chosen=e??null,this.el.classList.add(`open`),this.render(),e&&setTimeout(()=>{let e=this.el.querySelector(`.dict-scroll h2, .dict-scroll h3, .dict-inner h2`);e&&(e.tabIndex=-1,e.focus({preventScroll:!0}))},60)}close(){this.open=!1,this.el.classList.remove(`open`)}usedIn(e){let t=RegExp(`\\b${e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}`,`i`),n=[];for(let[r,i]of Object.entries(Op.countries)){let a=G.world.countries[r],o=Ch[e];a&&t.test(`${i.gov??``} ${i.vote??``}`)&&(!o||o(Rl(a)))&&n.push({key:r,name:a.name,pop:a.pop??0})}let r=/^(midterm|electoral college|gerrymandering|caucus|primary|swing|senate)$/.test(e);return n.sort((e,t)=>Number(r&&t.key===`USA`)-Number(r&&e.key===`USA`)||t.pop-e.pop).slice(0,6)}detail(e){let n=Op.glossary[e],r=wh.find(t=>t.words.includes(e)),a=this.usedIn(e);return`<div class="dict-detail" style="--g:${r?.color??`#8a93a0`}">
      <button class="dict-back" data-dict-back>&#8249; All Words</button>
      ${r?`<small class="dict-group">${i(r.name)}</small>`:``}
      <h2>${i(t(e))}</h2>
      <p class="dict-def">${i(n??``)}</p>
      ${Th[e]?`<p class="dict-like"><b>Think Of It Like This</b>${i(Th[e])}</p>`:``}
      ${$d(e)?`<h4>Watch How It Works</h4>${tf(e)}`:`<div class="dict-pic">${Sh(e)??``}</div>`}
      ${a.length?`<h4>See It In The Real World</h4><div class="dict-used">${a.map(e=>`<button data-dict-country="${i(e.key)}">${i(e.name)} &#8250;</button>`).join(``)}</div>`:``}
      ${r?`<h4>Related Words</h4><div class="dict-related">${r.words.filter(t=>t!==e&&Op.glossary[t]).slice(0,8).map(e=>`<button data-dict-word="${i(e)}">${i(t(e))}</button>`).join(``)}</div>`:``}
    </div>`}card(e,n){return`<button class="dict-card" data-dict-word="${i(e)}" style="--g:${n}"><span class="dict-card-pic">${Sh(e)||`<b>${i(e[0].toUpperCase())}</b>`}</span><span>${i(t(e))}</span>${$d(e)?`<small class="dict-play">&#9654; Watch</small>`:``}</button>`}renderList(){let e=this.el.querySelector(`#dict-list`);if(!e)return;let n=new Set(this.allWords);if(this.query){let t=this.allWords.filter(e=>e.includes(this.query)||Op.glossary[e].toLowerCase().includes(this.query));e.innerHTML=t.length?`<div class="dict-grid">${t.map(e=>this.card(e,wh.find(t=>t.words.includes(e))?.color??`#8a93a0`)).join(``)}</div>`:`<p class="dict-none">Nothing by that name yet.</p>`;return}let r=new Set(wh.flatMap(e=>e.words)),a=this.allWords.filter(e=>!r.has(e)),o=Eh(this.allWords);e.innerHTML=`<button class="dict-today" data-dict-word="${i(o)}"><span class="dict-today-pic">${Sh(o)}</span><span><small>Word Of The Day</small><b>${i(t(o))}</b><em>${i(Op.glossary[o]??``)}</em></span></button>
      ${wh.map(e=>{let t=e.words.filter(e=>n.has(e));return t.length?`<section><h3 style="--g:${e.color}">${i(e.name)}</h3><div class="dict-grid">${t.map(t=>this.card(t,e.color)).join(``)}</div></section>`:``}).join(``)}
      ${a.length?`<section><h3>More Words</h3><div class="dict-grid">${a.map(e=>this.card(e,`#8a93a0`)).join(``)}</div></section>`:``}`}render(){let e=`<button class="dict-close" data-dict-close aria-label="Close">&#215;</button>`;this.chosen&&Op.glossary[this.chosen]?(this.el.innerHTML=`<div class="dict-inner glass panel">${e}<div class="dict-scroll">${this.detail(this.chosen)}</div></div>`,nf(this.el)):(this.el.innerHTML=`<div class="dict-inner glass panel">${e}<header class="dict-head"><h2>The Dictionary</h2><p>Every word politics throws at you, in pictures and plain language.</p><input id="dict-search" type="search" aria-label="Look Up A Word" placeholder="Look Up A Word" autocomplete="off" spellcheck="false" value="${i(this.query)}"></header><div class="dict-scroll" id="dict-list"></div></div>`,this.renderList())}},kh=`pv-globe-hint-done`,Ah=5,jh=25,Mh=()=>{try{return!!localStorage.getItem(kh)}catch{return!1}},Nh=class{el=document.createElement(`div`);clock=-4;done=Mh();constructor(){this.el.id=`globe-hint`,this.el.setAttribute(`aria-hidden`,`true`);let e=window.matchMedia(`(hover: none)`).matches;this.el.innerHTML=`<svg viewBox="0 0 40 28" width="34" height="24"><circle class="gh-a" cx="12" cy="14" r="5.500"/><circle class="gh-b" cx="28" cy="14" r="5.500"/><path d="M4 14H1M36 14h3" stroke="currentColor" stroke-width="1.500" stroke-linecap="round"/></svg><span>${e?`Pinch Or Drag The Globe To Explore`:`Drag Or Scroll The Globe To Explore`}</span>`,this.done||document.body.append(this.el)}finish(){if(!this.done){this.done=!0,this.el.remove();try{localStorage.setItem(kh,`1`)}catch{}}}update(e,t,n){if(this.done)return;if(!t){this.el.style.opacity=`0`;return}this.clock+=e;let r=0;if(this.clock>0){let e=this.clock%jh;r=e<Ah?e/Ah:e<10?2-e/Ah:0}this.el.style.opacity=r.toFixed(3),this.el.style.transform=`translate3d(${n.x.toFixed(1)}px, ${n.y.toFixed(1)}px, 0) translate(-50%, -50%)`}},Ph=[{year:1906,keys:[`FIN`],title:`Finland Lets Women Vote And Run`,happened:`Finland became the first place where all women could both vote and run for parliament. New Zealand let women vote in 1893, but not run.`,learn:`Things that seem impossible today can be normal tomorrow.`,source:`Women's suffrage in Finland`},{year:1910,keys:[`MEX`],title:`Mexico Rises Up`,happened:`One man had run Mexico for about 30 years. A rigged election helped set off a revolution.`,learn:`When people can't change leaders by voting, change can turn violent.`,source:`Mexican Revolution`},{year:1912,keys:[`CHN`],title:`China's Last Emperor Steps Down`,happened:`Emperors had ruled China for over 2,000 years. A child emperor gave up the throne, and China became a republic.`,learn:`Even the oldest way of ruling can end.`,source:`Xinhai Revolution`},{year:1917,keys:[`RUS`],title:`Revolution In Russia`,happened:`Russians overthrew their tsar. Within months, the Bolsheviks took power and built a one-party state.`,learn:`Getting rid of one ruler doesn't guarantee people get a free vote.`,source:`Russian Revolution`},{year:1918,keys:[`AUT`,`HUN`,`CZE`,`POL`,`TUR`],title:`Empires Fall Apart`,happened:`After World War I, huge empires broke up. New countries appeared, and many tried holding elections.`,learn:`Borders and countries are made by people, and they can change.`,source:`Dissolution of Austria-Hungary`},{year:1920,keys:[`USA`],title:`American Women Win The Vote`,happened:`The 19th Amendment said nobody could be denied the vote for being a woman. Women had campaigned for over 70 years.`,learn:`Big rights can take a lifetime of patient work to win.`,source:`Nineteenth Amendment to the United States Constitution`},{year:1922,keys:[`ITA`],title:`Italy's Democracy Starts To End`,happened:`Mussolini became prime minister, then turned Italy into a dictatorship over the next few years.`,learn:`A democracy can end from the inside, one step at a time.`,source:`March on Rome`},{year:1930,keys:[`IND`],title:`Gandhi's Salt March`,happened:`Britain taxed salt in India. Gandhi walked about 240 miles to the sea to make his own, and thousands joined him.`,learn:`Peaceful protest can shake even a huge empire.`,source:`Salt March`},{year:1933,keys:[`DEU`],title:`Germany Votes Away Its Freedoms`,happened:`Hitler became chancellor. Within months, parliament handed him its power and other parties were banned.`,learn:`Laws can be used to end freedom, so it takes people paying attention to protect it.`,source:`Enabling Act of 1933`},{year:1945,keys:[`USA`,`FRA`,`GBR`,`RUS`,`CHN`],title:`The United Nations Begins`,happened:`After World War II, 51 countries joined together to give the world a place to talk things out.`,learn:`Countries that talk have another option besides fighting.`,source:`United Nations`},{year:1946,keys:[`JPN`],title:`Japanese Women Vote For The First Time`,happened:`Women voted in Japan for the first time, and 39 women won seats in parliament.`,learn:`When more people can vote, different people get elected.`,source:`1946 Japanese general election`},{year:1947,keys:[`IND`,`PAK`],title:`India And Pakistan Become Independent`,happened:`British rule ended and the land was split into two countries. Millions had to move, and many died.`,learn:`How a country is born can shape its politics for generations.`,source:`Partition of India`},{year:1948,keys:[`FRA`],title:`A Promise To The Whole World`,happened:`The UN agreed on a list of human rights. It says everyone has the right to take part in their government.`,learn:`Writing a right down gives people something to hold their leaders to.`,source:`Universal Declaration of Human Rights`},{year:1949,keys:[`CHN`],title:`One Party Takes China`,happened:`The Communist Party won China's civil war and set up the People's Republic. It still rules alone today.`,learn:`Choosing how a country is run can last for many generations.`,source:`Chinese Civil War`},{year:1952,keys:[`IND`],title:`The Biggest Election Ever Held`,happened:`About 173 million Indians could vote in India's first election. Most couldn't read, so parties used pictures on the ballot.`,learn:`You don't need to be rich or schooled to have a say.`,source:`1951–52 Indian general election`},{year:1960,keys:[`NGA`,`COD`,`SEN`,`CMR`,`MDG`,`SOM`,`MLI`,`CIV`],title:`The Year Of Africa`,happened:`Seventeen African countries became independent in one year, after decades of being ruled from Europe.`,learn:`Freedom from outside rule is a start. Building what comes next is harder.`,source:`Year of Africa`},{year:1965,keys:[`USA`],title:`The Voting Rights Act`,happened:`Black Americans had the vote on paper, but unfair tests and threats kept many away. This law stopped that.`,learn:`A right on paper isn't the same as a right you can use.`,source:`Voting Rights Act of 1965`},{year:1971,keys:[`CHE`],title:`Swiss Women Finally Vote`,happened:`Switzerland's men had said no to women voting in 1959. In 1971, they said yes.`,learn:`Even old democracies can be very late to include everyone.`,source:`Women's suffrage in Switzerland`},{year:1973,keys:[`CHL`],title:`A Coup In Chile`,happened:`The army overthrew Chile's elected president. General Pinochet ruled for the next 17 years.`,learn:`Elections only work if the people with the guns accept the result.`,source:`1973 Chilean coup d'état`},{year:1974,keys:[`PRT`,`ESP`,`GRC`],title:`The Carnation Revolution`,happened:`Soldiers in Portugal ended a long dictatorship, almost without a shot. People put flowers in their guns. Greece and Spain soon changed too.`,learn:`One country's change can inspire its neighbors.`,source:`Carnation Revolution`},{year:1979,keys:[`IRN`],title:`Iran's Revolution`,happened:`Iranians overthrew their king. Religious leaders took charge, and they still decide who may run for office.`,learn:`Who gets to be on the ballot matters as much as the vote itself.`,source:`Iranian Revolution`},{year:1986,keys:[`PHL`],title:`People Power In The Philippines`,happened:`After a disputed election, millions filled the streets of Manila. President Marcos left the country.`,learn:`When enough people stand together peacefully, even strong rulers can fall.`,source:`People Power Revolution`},{year:1988,keys:[`CHL`],title:`Chile Says No`,happened:`General Pinochet held a vote on staying in power, expecting to win. Most voters said no, and he had to step aside.`,learn:`A single vote can change everything, even one that's meant to be for show.`,source:`1988 Chilean presidential referendum`},{year:1989,keys:[`DEU`,`POL`,`HUN`,`CZE`,`ROU`,`BGR`],title:`The Berlin Wall Falls`,happened:`All across Eastern Europe, one-party governments gave way. People crossed the wall that had split Berlin for 28 years.`,learn:`Things that seem permanent can change very fast.`,source:`Fall of the Berlin Wall`},{year:1989,keys:[`CHN`],title:`The Same Year, A Different Ending`,happened:`Students in Beijing filled Tiananmen Square asking for change. The army crushed the protest.`,learn:`People asking for change doesn't always mean they get it, and that's why it takes courage.`,source:`1989 Tiananmen Square protests and massacre`},{year:1991,keys:[`RUS`,`UKR`,`KAZ`,`GEO`,`LTU`,`LVA`,`EST`],title:`The Soviet Union Ends`,happened:`The world's biggest country broke into 15 separate ones. Some became democracies, and some didn't.`,learn:`The same moment can lead to very different futures.`,source:`Dissolution of the Soviet Union`},{year:1994,keys:[`ZAF`],title:`South Africa Votes Together`,happened:`For decades, the law kept Black South Africans from voting. In their first all-race election, people waited for hours and Nelson Mandela won.`,learn:`A vote is worth waiting in line for, as anyone who was ever denied one can tell you.`,source:`1994 South African general election`},{year:1999,keys:[`IDN`],title:`Indonesia Votes Freely`,happened:`After more than 30 years under one ruler, Indonesians held their first free election in decades.`,learn:`Countries of every size and faith can build a democracy.`,source:`1999 Indonesian legislative election`},{year:2e3,keys:[`MEX`],title:`Mexico Changes Parties`,happened:`One party had held Mexico's presidency for 71 years. Voters chose someone else, and it handed over power.`,learn:`Handing over power peacefully after losing is what makes a democracy work.`,source:`2000 Mexican general election`},{year:2005,keys:[`LBR`],title:`Africa Elects A Woman President`,happened:`After years of civil war, Liberia elected Ellen Johnson Sirleaf, the first woman elected to lead an African country.`,learn:`Who leads can change even after the hardest times.`,source:`Ellen Johnson Sirleaf`},{year:2008,keys:[`USA`],title:`A First For America`,happened:`Barack Obama became the first Black president, about 40 years after the Voting Rights Act.`,learn:`A country's politics can change a lot within one lifetime.`,source:`2008 United States presidential election`},{year:2011,keys:[`TUN`,`EGY`,`LBY`,`SYR`,`YEM`],title:`The Arab Spring`,happened:`Protests spread across the Arab world and several rulers fell. Only Tunisia became a democracy, and it has since slipped back.`,learn:`Removing a leader can be easier than building what comes next.`,source:`Arab Spring`},{year:2015,keys:[`SAU`],title:`Saudi Women Vote For The First Time`,happened:`Women in Saudi Arabia could vote and run in local elections for the first time. National elections still aren't held.`,learn:`Small steps can matter, even when there's a long way still to go.`,source:`2015 Saudi Arabian municipal elections`},{year:2016,keys:[`GBR`],title:`A Close Vote Changes Britain`,happened:`The UK voted on leaving the European Union. It was close, 52 to 48, and it changed the country's direction.`,learn:`Close votes have big results, so every person who stays home matters.`,source:`2016 United Kingdom European Union membership referendum`},{year:2021,keys:[`MMR`],title:`An Election Overturned In Myanmar`,happened:`The army refused to accept an election it didn't like and took power. Many people have resisted ever since.`,learn:`A democracy needs everyone to accept the result, even when they lose.`,source:`2021 Myanmar coup d'état`},{year:2024,keys:[`IND`,`USA`,`IDN`,`MEX`,`PAK`,`BGD`,`ZAF`,`GBR`],title:`The Biggest Year Of Voting Ever`,happened:`Countries with about half the world's people held national elections. In India alone, over 600 million people voted.`,learn:`Voting may be the biggest thing people on Earth ever do together.`,source:`List of elections in 2024`}],Fh=1900,Ih=2.2,Lh=8,Rh=J(`#ffd166`),zh=[Y.closed,Y.hybrid,Y.electoral,Y.liberal],Bh=class{globe;flow;focus;host;open=!1;playing=!1;el=document.createElement(`section`);pinBox=document.createElement(`div`);pins=[];year=1900;lastYear=new Date().getFullYear()-1;shownYear=-1;moment=null;inspected=null;hold=0;overlayKey=``;overlayAt=0;constructor(e,t,n,r){this.globe=e,this.flow=t,this.focus=n,this.host=r,this.el.id=`timemachine`,this.el.setAttribute(`aria-label`,`The Time Machine`),this.pinBox.id=`time-pins`,this.pinBox.setAttribute(`aria-hidden`,`true`),document.getElementById(`app`).append(this.el),document.body.append(this.pinBox),this.el.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-tm-close]`)){this.close();return}if(t.closest(`[data-tm-play]`)){this.setPlaying(!this.playing);return}if(t.closest(`[data-tm-next]`)){this.step(1);return}if(t.closest(`[data-tm-prev]`)){this.step(-1);return}let n=t.closest(`[data-tm-moment]`);if(n){this.goToMoment(Ph[Number(n.dataset.tmMoment)]);return}let r=t.closest(`[data-tm-today]`);r?(this.close(),this.host.select(`country:${r.dataset.tmToday}`)):t.closest(`[data-tm-uninspect]`)&&(this.inspected=null,this.renderCard())}),this.el.addEventListener(`input`,e=>{let t=e.target;t.id===`tm-range`&&(this.setPlaying(!1),this.moment=null,this.inspected=null,this.setYear(Number(t.value)),this.renderCard())}),window.addEventListener(`keydown`,e=>{this.open&&(e.key===`Escape`&&this.close(),e.key===`ArrowRight`&&this.step(1),e.key===`ArrowLeft`&&this.step(-1),e.key===` `&&(e.preventDefault(),this.setPlaying(!this.playing)))})}paint=e=>{let t=this.moment?.keys.includes(e)||this.inspected===e,n=dl(K.byCountry[e]?.r,Math.floor(this.year));if(n<0)return t?{color:Rh,alpha:.34,lines:1}:null;let r=J(zh[n].color);return t?{color:r,alpha:.6,lines:1}:{color:r,alpha:this.moment?.15:.26,lines:.2}};show(){this.open=!0;let e=K.world.regimeHistory??[];this.lastYear=Math.max(e[e.length-1]?.year??0,new Date().getFullYear()-1),this.year=Fh,this.moment=null,this.inspected=null,this.hold=0,this.overlayKey=``,this.render(),this.el.classList.add(`open`),document.body.classList.add(`has-time`),this.focus.setPainter(this.paint),this.flow.setOverlay([]),this.setYear(Fh,!0),this.setPlaying(!0),G.usHistory||fetch(p(`data/us-president-history.json`)).then(e=>e.ok?e.json():null).then(e=>{G.usHistory=e}).catch(()=>void 0),this.host.changed()}close(){this.open&&(this.open=!1,this.playing=!1,this.el.classList.remove(`open`),document.body.classList.remove(`has-time`),this.focus.setPainter(null),this.flow.setOverlay(null),this.setPins([]),this.host.changed())}inspect(e){this.setPlaying(!1),this.inspected=e,this.moment=null,this.renderCard(),this.setPins([e]),this.focus.repaint()}setPlaying(e){this.playing=e,e&&this.year>=this.lastYear&&(this.moment=null,this.setYear(Fh)),e&&(this.inspected=null);let t=this.el.querySelector(`[data-tm-play]`);t?.setAttribute(`aria-label`,e?`Pause`:`Play`),t&&(t.innerHTML=e?`<svg viewBox="0 0 16 16" width="15" height="15"><path d="M4 2.500h3v11H4zM9 2.500h3v11H9z" fill="currentColor"/></svg>`:`<svg viewBox="0 0 16 16" width="15" height="15"><path d="M4 2.500l9.500 5.500L4 13.500z" fill="currentColor"/></svg>`),e&&this.renderCard()}step(e){this.setPlaying(!1);let t=this.moment?Ph.indexOf(this.moment):-1,n;n=t>=0?Ph[t+e]:e>0?Ph.find(e=>e.year>this.year):[...Ph].reverse().find(e=>e.year<this.year),n&&this.goToMoment(n)}goToMoment(e){this.moment=e,this.inspected=null,this.hold=Lh,this.setYear(e.year),this.renderCard(),this.setPins(e.keys.slice(0,6)),this.focus.repaint(),this.face(e.keys),this.el.querySelectorAll(`[data-tm-moment]`).forEach(t=>t.classList.toggle(`on`,Ph[Number(t.dataset.tmMoment)]===e))}face(e){let t=this.globe.layers.countries;if(!t)return;let n=new H,r=new H;for(let i of e.slice(0,4)){let e=t.meta[t.byKey.get(i)??-1];e&&n.add(wl(e.c[0],e.c[1],1,r))}if(n.lengthSq()<1e-6)return;n.normalize();let i=Math.asin(n.y)*(180/Math.PI),a=Math.atan2(n.x,n.z)*(180/Math.PI);this.globe.cam.flyTo(a,Math.max(-40,Math.min(55,i)),this.globe.cam.alt,{ms:2400})}setPins(e){let t=this.globe.layers.countries;if(this.pinBox.innerHTML=``,this.pins=[],t)for(let n of e){let e=t.meta[t.byKey.get(n)??-1];if(!e)continue;let r=document.createElement(`div`);r.className=`ins-pin time-pin`,r.innerHTML=`<i></i><span>${i(e.n)}</span>`,this.pinBox.append(r),this.pins.push({el:r,at:wl(e.c[0],e.c[1],1,new H)})}}setYear(e,t=!1){this.year=Math.max(Fh,Math.min(this.lastYear,e));let n=this.el.querySelector(`#tm-line`);n&&(n.style.left=`${((this.year-Fh)/(this.lastYear-Fh)*100).toFixed(2)}%`);let r=Math.floor(this.year);if(r===this.shownYear&&!t)return;this.shownYear=r;let i=this.el.querySelector(`#tm-range`);i&&document.activeElement!==i&&(i.value=String(r));let a=this.el.querySelector(`#tm-year`);a&&(a.textContent=String(r)),this.renderCounts(r),this.focus.repaint(),this.inspected&&this.renderCard()}renderCounts(e){let t=this.el.querySelector(`#tm-counts`);if(!t)return;let n=K.world.regimeHistory??[],r=n.find(t=>t.year===e)??n[n.length-1],a=[];if(r){let e=r.closed+r.electoralAutocracy+r.electoralDemocracy+r.liberalDemocracy||1,t=r.electoralDemocracy+r.liberalDemocracy;a.push({label:`Countries That Vote Freely`,share:t/e,color:Y.electoral.color,tip:`${t} of ${e} countries on record`})}let o=Object.values(K.world.womenSuffrage?.byCountry??{});if(o.length){let t=o.filter(t=>t<=e).length;a.push({label:`Countries Where Women Can Vote`,share:t/o.length,color:`#a06ff0`,tip:`${t} of ${o.length} countries on record`})}t.innerHTML=a.map(e=>`<div class="tm-bar" data-tip="${i(e.tip)}"><span>${i(e.label)}</span><i><em style="width:${(e.share*100).toFixed(1)}%;background:${e.color}"></em></i></div>`).join(``)}renderCard(){let e=this.el.querySelector(`#tm-card`);if(!e)return;let t;if(this.inspected)t=this.countryThen(this.inspected);else if(this.moment){let e=this.moment;t=`<small class="tm-kicker">${e.year}, ${i(e.keys.slice(0,3).map(e=>G.world.countries[e]?.name??e).join(`, `))}</small><h2>${i(e.title)}</h2><p>${i(e.happened)}</p><p class="tm-learn"><b>What We Can Learn</b>${i(e.learn)}</p><a class="tm-source" href="${i(a(e.source))}" target="_blank" rel="noreferrer">Read More: ${i(e.source)} &#8599;</a>`}else t=`<small class="tm-kicker">The Time Machine</small><h2>Turn Back The Clock</h2><p>Every country takes the color of how it was run that year. We'll stop at the moments that changed things. Tap any country to see how it stood.</p>`;e.innerHTML!==t&&(e.innerHTML=t,e.classList.remove(`swap`),e.offsetWidth,e.classList.add(`swap`),this.host.changed())}countryThen(e){let t=G.world.countries[e];if(!t)return``;let n=Math.floor(this.year),r=K.byCountry[e],a=dl(r?.r,n),o=t.iso2?`<span class="fi fi-${i(t.iso2.toLowerCase())}"></span>`:``,s=(e,t)=>{let r=[...e??[]].filter(e=>e[0]<=n).sort((e,t)=>t[0]-e[0])[0];return r&&n-r[0]<=t?r:null},c=s(r?.t,8),l=s(r?.wh,8),u=(Op.countries[e]?.facts?.timeline??[]).filter(e=>Math.abs(e.y-n)<=12).sort((e,t)=>Math.abs(e.y-n)-Math.abs(t.y-n)).slice(0,2),d=[a>=0?`<li><i style="background:${zh[a].color}"></i>${i(zh[a].label)}</li>`:`<li><i></i>No Record For This Year</li>`,r?.s&&!r.sf?`<li><i style="background:#a06ff0"></i>${r.s<=n?`Women Could Vote, Since ${r.s}`:`Women Couldn't Vote Yet, Not Until ${r.s}`}</li>`:``,c?`<li><i style="background:${Y.electoral.color}"></i>${Math.round(c[1])}% Voted In ${c[0]}</li>`:``,l?`<li><i style="background:#ffd166"></i>Women Held ${Math.round(l[1])}% Of Seats In ${l[0]}</li>`:``].join(``);return`<small class="tm-kicker">${n}</small><h2>${o}${i(t.name)}</h2><ul class="tm-facts">${d}</ul>
      ${u.map(e=>`<p class="tm-event"><b>${e.y}</b> ${i(e.t)}</p>`).join(``)}
      <div class="tm-actions"><button class="learn-go" data-tm-today="${i(e)}">${i(t.name)} Today &#8250;</button><button class="learn-go quiet" data-tm-uninspect>Back</button></div>`}render(){let e=hf((K.world.regimeHistory??[]).filter(e=>e.year>=Fh).map(e=>({x:e.year,parts:[e.liberalDemocracy,e.electoralDemocracy,e.electoralAutocracy,e.closed]})),[Y.liberal,Y.electoral,Y.hybrid,Y.closed].map(e=>({label:e.label,color:e.color})),{h:44,storyBand:1}),t=e=>((e-Fh)/(this.lastYear-Fh)*100).toFixed(2),n=Array.from({length:Math.floor((this.lastYear-Fh)/25)+1},(e,t)=>Fh+t*25);this.el.innerHTML=`<div class="tm-scrim"></div><div class="tm-panel">
      <div class="tm-top"><b id="tm-year">${Fh}</b><div class="tm-counts" id="tm-counts"></div><button class="tm-x" data-tm-close aria-label="Close The Time Machine">&#215;</button></div>
      <div class="tm-card" id="tm-card"></div>
      <div class="tm-time">
        <button class="tm-btn" data-tm-prev aria-label="Previous Moment">&#8249;</button>
        <button class="tm-btn tm-play" data-tm-play aria-label="Play"></button>
        <div class="tm-chart">${e}
          <div class="tm-marks">${Ph.map((e,n)=>`<button data-tm-moment="${n}" style="left:${t(e.year)}%" aria-label="${i(`${e.year}: ${e.title}`)}" data-tip="${i(`${e.year}: ${e.title}`)}"></button>`).join(``)}</div>
          <i class="tm-line" id="tm-line"></i>
          <input id="tm-range" type="range" min="${Fh}" max="${this.lastYear}" step="1" value="${Fh}" aria-label="Year">
          <div class="tm-years">${n.map(e=>`<span style="left:${t(e)}%">${e}</span>`).join(``)}</div>
        </div>
        <button class="tm-btn" data-tm-next aria-label="Next Moment">&#8250;</button>
      </div>
    </div>`,this.shownYear=-1,this.renderCard()}updateOverlay(){let e=performance.now();if(e-this.overlayAt<350)return;this.overlayAt=e;let t=G.usHistory,n=Math.floor(this.year),r=this.globe.cam.alt;if(!t||n<t.years[0]||r>1.25){this.overlayKey!==`none`&&(this.overlayKey=`none`,this.flow.setOverlay([]));return}let i=0;t.years.forEach((e,t)=>{e<=n&&(i=t)});let a=wl(this.globe.cam.lon,this.globe.cam.lat,1,new H),o=r<.5,s=o?`${Math.round(this.globe.cam.lon/3)},${Math.round(this.globe.cam.lat/3)}`:``,c=`${i}:${o}:${s}`;if(c===this.overlayKey)return;this.overlayKey=c;let l=J(q.D),u=J(q.R),d=[],f=(e,t,n,r)=>{if(!r?.[2])return;let i=r[0]>=r[1];d.push({key:e,lon:t,lat:n,value:(i?r[0]:r[1])/r[2],color:i?l:u})},p=new H;if(o&&this.globe.layers.uscounty)for(let e of this.globe.layers.uscounty.meta)wl(e.c[0],e.c[1],1,p).dot(a)<.975||f(`c${e.k}`,e.c[0],e.c[1],t.counties[e.k]?.[i]);else for(let[e,n]of this.globe.usStateIndex){let r=this.globe.layers.admin1?.meta[n];r&&f(e,r.c[0],r.c[1],t.states[e]?.[i])}this.flow.setOverlay(d)}update(e){if(this.open){if(this.playing){if(this.hold>0)this.hold-=e;else{let t=this.year+Ih*e,n=Ph.find(e=>e.year>this.year&&e.year<=t&&e!==this.moment);n?(this.goToMoment(n),this.setPlaying(!0),this.hold=Lh):t>=this.lastYear?(this.setYear(this.lastYear),this.setPlaying(!1)):this.setYear(t)}}this.updateOverlay();for(let e of this.pins){let t=this.globe.project(e.at);t?(e.el.style.transform=`translate3d(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px, 0)`,e.el.classList.add(`on`)):e.el.classList.remove(`on`)}}}},Vh=e=>{let t=G.world.countries[e]?.iso2?.toLowerCase();return t?`<span class="fi fi-${i(t)}"></span>`:``};function Hh(e){return`<div class="learn-chips">${Cd.map(t=>{let n=G.world.countries[t.key]?.name??t.key;return`<button data-learn="${t.key}" class="${t.key===e?`on`:``}">${Vh(t.key)}${i(n)}</button>`}).join(``)}</div>`}var Uh=class{globe;focus;host;open=!1;el=document.createElement(`div`);pin=document.createElement(`div`);pinAt=null;module=null;beats=[];index=0;constructor(e,t,n){this.globe=e,this.focus=t,this.host=n,this.el.id=`learn`,this.el.setAttribute(`aria-label`,`Get To Know A Country`),this.pin.className=`learn-pin`,document.getElementById(`app`).append(this.el),document.body.append(this.pin),this.el.addEventListener(`click`,e=>{let t=e.target;t.closest(`[data-learn-next]`)?this.go(this.index+1):t.closest(`[data-learn-prev]`)?this.go(this.index-1):t.closest(`[data-learn-close]`)&&this.close();let n=t.closest(`[data-learn-beat]`);n&&this.go(Number(n.dataset.learnBeat))}),window.addEventListener(`keydown`,e=>{this.open&&(e.key===`Escape`&&this.close(),e.key===`ArrowRight`&&this.go(this.index+1),e.key===`ArrowLeft`&&this.go(this.index-1))});let r=0,i=0,a=0;this.el.addEventListener(`pointerdown`,e=>{r=e.clientX,i=e.clientY,a=performance.now()},{passive:!0}),this.el.addEventListener(`pointerup`,e=>{let t=e.target;if(t.closest(`.learn-chips, .flow-line, .flow-next`))return;let n=e.clientX-r,o=e.clientY-i;if(Math.abs(n)>50&&Math.abs(n)>Math.abs(o)*1.2){this.go(this.index+(n<0?1:-1));return}let s=t.closest(`.learn-caption`);if(s&&!t.closest(`button, a, input, [data-tip], .term`)&&Math.hypot(n,o)<10&&performance.now()-a<450){let t=s.getBoundingClientRect();this.go(this.index+(e.clientX<t.left+t.width*.28?-1:1))}},{passive:!0})}show(e){this.open=!0,this.module=e?wd(e)??null:null,document.body.classList.add(`has-learn`),this.el.classList.add(`open`),this.beats=this.module?this.build(this.module):[this.chooser()],this.index=0,this.host.changed(),this.go(0)}close(){this.open&&(this.open=!1,document.body.classList.remove(`has-learn`),this.el.classList.remove(`open`),this.pin.classList.remove(`on`),this.pinAt=null,this.host.spotlight(null),this.host.changed())}chooser(){return{kicker:`Get To Know A Country`,title:`Understanding Each Other Starts Somewhere`,html:`<p>Learning how another country works is hard, and that keeps us apart. Pick one, and in a couple of minutes you'll know how it came to be, who really holds power, and how people there see the world.</p>${Hh()}`}}build(e){let t=G.world.countries[e.key],n=t?.name??e.key,o=this.globe.layers.countries,s=o?.meta[o.byKey.get(e.key)??-1],c=s?[s.c[0],s.c[1]]:e.story[0].at,l=s?Math.max(.55,Math.min(2.1,.32+s.r*.075)):1.2,u=`Get To Know ${r(n)}`,d=[],f=t?Y[Rl(t)]:null,p=t?xl(t):null;d.push({kicker:u,at:c,alt:l,title:e.hook,html:`<p>${i(e.intro)}</p><div class="learn-chipline">${Vh(e.key)}<b>${i(n)}</b>${f?`<span class="kind-chip" style="--c:${f.color}"><i></i>${i(f.label)}</span>`:``}</div>`}),e.story.forEach((t,a)=>{let o=`<div class="learn-rail">${e.story.map((e,t)=>`<span class="${t===a?`on`:t<a?`past`:``}"><i></i><small>${i(e.year)}</small></span>`).join(``)}</div>`;d.push({kicker:`How ${r(n)} Came To Be`,at:t.at,alt:.62,place:t.place,title:`${t.year}: ${t.title}`,html:`<p>${i(t.text)}</p>${o}`})});let m=Op.countries[e.key]?.facts,h=m?.power?.length?Bf(m.power,m.labels??{},m.runs):e.diagram?Bf(e.diagram.links,e.diagram.labels,e.diagram.runs):``;d.push({kicker:`Who Really Holds Power`,at:c,alt:l,title:`How Power Works In ${n}`,html:`<p>${i(e.power)}</p>${h}`}),e.lens.forEach((t,r)=>{d.push({kicker:`How ${n} Sees The World, ${r+1} Of ${e.lens.length}`,at:c,alt:l,title:t.title,html:`<p>${i(t.text)}</p>`})});let g=t?t.exec===`hog`?t.hog:t.hos:void 0,_=t?t.exec===`hog`?t.hogTitle:t.hosTitle:void 0,v=t?.next?.find(e=>Date.parse(e.date)>Date.now()),y=G.news.find(t=>t.countries[0]===e.key);return d.push({kicker:`Right Now, Live`,at:c,alt:l,title:`${n} Today`,html:`${g?`<div class="learn-lead">${Jp(g,`small`)}<span><small>${i(_??`Leader`)}</small><b>${i(g.name)}</b></span></div>`:``}
        ${p?`<p class="learn-mood"><span class="mood-chip" style="--c:${pl[p.mood].color}"><i></i>${i(pl[p.mood].label)}</span> ${i(p.reasons[0]??pl[p.mood].meaning)}</p>`:``}
        ${y?`<p><b>In The News:</b> ${i(y.title)}</p>`:``}
        ${v?`<p><b>Next Vote:</b> ${i(v.title)}, ${i(new Date(v.date).toLocaleDateString(void 0,{month:`long`,year:`numeric`}))}</p>`:``}
        <button class="learn-go" data-select="country:${i(e.key)}">See Everything On ${i(n)} &#8250;</button>`}),d.push({kicker:`Before You Go`,at:c,alt:l,title:`Next Time ${n} Is In The News`,html:`<p class="learn-remember">${i(e.remember)}</p><small class="learn-chooser">Get To Know Another</small>${Hh(e.key)}<small class="learn-note">Written with AI and not independently fact-checked, so check anything important. To read more: <a href="${i(a(`History of ${G.world.countries[e.key]?.name??e.key}`))}" target="_blank" rel="noreferrer">History</a> and <a href="${i(a(`Politics of ${G.world.countries[e.key]?.name??e.key}`))}" target="_blank" rel="noreferrer">Politics</a> on Wikipedia.</small>`}),d}go(e){if(!this.open)return;if(e>this.beats.length-1){this.close();return}this.index=Math.max(0,e);let t=this.beats[this.index],n=this.module,r=this.beats.length>1;if(this.el.innerHTML=`<div class="ch-scrim"></div>
      <div class="ch-caption learn-caption">${r?Ed(this.beats.map(e=>({name:e.title})),this.index):``}<small class="ch-kicker">${i(t.kicker)}</small><h2>${i(t.title)}</h2>${t.html}${r?this.beats[this.index+1]?Dd(`Up Next`,this.beats[this.index+1].title,`data-learn-next`):Dd(`That's The Story`,`Back To The Globe`,`data-learn-next`):``}</div>
      <button data-learn-close class="learn-x" aria-label="Close">&#215;</button>`,Ad(this.el.querySelector(`.flow-line`),e=>this.go(e)),n){let e=G.world.countries[n.key];this.host.spotlight([n.key],e?Y[Rl(e)].color:void 0),window.setTimeout(()=>{this.open&&this.module===n&&this.host.spotlight([n.key],e?Y[Rl(e)].color:void 0)},200)}t.at?this.globe.cam.flyTo(t.at[0],t.at[1],t.alt??1,{ms:2400}):this.globe.cam.flyTo(this.globe.cam.lon,Math.max(-20,Math.min(35,this.globe.cam.lat)),2.3,{ms:1800}),t.place&&t.at?(this.pinAt=wl(t.at[0],t.at[1],1,new H),this.pin.innerHTML=`<i></i><span>${i(t.place)}</span>`):(this.pinAt=null,this.pin.classList.remove(`on`))}update(){if(!this.open||!this.pinAt)return;let e=this.globe.project(this.pinAt);e?(this.pin.style.transform=`translate3d(${e.x.toFixed(1)}px, ${e.y.toFixed(1)}px, 0)`,this.pin.classList.add(`on`)):this.pin.classList.remove(`on`)}},Wh=[{view:`home`,on:`globe`,title:`Welcome To Politiview`,text:`This is the world's politics on one living globe. Left alone, it runs by itself, cycling through what's happening and how it all works.`},{view:`home`,on:`globe`,title:`Move It Around`,text:`Drag to turn the globe, and pinch or scroll to zoom in. The closer you get, the more you see: countries first, then states and regions, then districts.`},{view:`home`,target:`#ch-stack`,title:`Swipe Through The Pages`,text:`Swipe across the words, or tap them, to move on. Tap the left side to go back. Tap Up Next to see what's coming. To jump anywhere, drag along the thin line above the words.`},{view:`map`,on:`rings`,title:`Read The Rings`,text:`Big countries and US states wear rings on the map. The outside is who runs the place, and each ring further in is a chamber or a vote. Tap one to see them named.`},{view:`map`,target:`#lens`,title:`Change What You're Looking At`,text:`These change what the colors on the map mean: who holds power, how each country seems to feel, left or right, and who votes next.`},{view:`map`,target:`.voice.on`,title:`People Talking`,text:`These bubbles show how each place seems to feel. The words are imagined, based on real votes and news. Tap one to visit that country.`},{view:`map`,target:`[data-learn='']`,title:`Learn More`,text:`Short stories on how notable countries came to be, a Time Machine that turns back the clock on the whole world, and a Dictionary of every political word, in pictures and plain language.`},{view:`map`,target:`#open-desk`,title:`The News`,text:`The biggest political news right now, and what each story means. Been away? Catch Me Up shows what you missed.`},{view:`map`,target:`#open-elections`,title:`Every Election`,text:`Every vote happening now and coming up, anywhere. The magnifying glass finds any country, leader, word or race.`},{view:`map`,target:`#open-info`,title:`Why This Exists`,text:`Why Politiview was made, and why your vote matters even when it doesn't feel like it. That's it. Go explore!`}],Gh=`<svg viewBox="0 0 40 64" width="40" height="64" aria-hidden="true"><circle cx="20" cy="11" r="9" fill="currentColor"/><path d="M7 62c0-9 .5-16 1.500-24 1-8 5.500-13 11.500-13s10.500 5 11.500 13c1 8 1.500 15 1.500 24z" fill="currentColor"/><path class="tut-arm" d="M30 32 L39 17" stroke="currentColor" stroke-width="5.500" stroke-linecap="round" fill="none"/></svg>`,Kh=class{host;open=!1;el=document.createElement(`div`);spot=document.createElement(`div`);guide=document.createElement(`div`);stops=[];index=0;raf=0;constructor(e){this.host=e,this.el.id=`tutorial`,this.el.setAttribute(`role`,`dialog`),this.el.setAttribute(`aria-modal`,`true`),this.el.setAttribute(`aria-label`,`How Politiview Works`),this.spot.className=`tut-spot`,this.guide.className=`tut-guide`,this.el.append(this.spot,this.guide),document.body.append(this.el),this.el.addEventListener(`click`,e=>{let t=e.target;t.closest(`[data-tut-next]`)?this.go(1):t.closest(`[data-tut-back]`)?this.go(-1):t.closest(`[data-tut-skip]`)&&this.close()}),window.addEventListener(`keydown`,e=>{this.open&&(e.key===`Escape`?this.close():e.key===`ArrowRight`||e.key===`Enter`?this.go(1):e.key===`ArrowLeft`&&this.go(-1))})}showing(e){let t=document.querySelector(e);if(!t)return null;for(let e=t;e;e=e.parentElement){let t=getComputedStyle(e);if(t.display===`none`||t.visibility===`hidden`||Number(t.opacity)<.1)return null}let n=t.getBoundingClientRect();return!n.width||!n.height?null:n.right>0&&n.bottom>0&&n.left<innerWidth&&n.top<innerHeight?n:null}show(){this.host.beforeOpen(),this.open=!0,this.index=0,this.stops=Wh,this.el.classList.add(`open`),this.enter();let e=()=>{this.open&&(this.layout(),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}close(){this.open&&(this.open=!1,cancelAnimationFrame(this.raf),this.el.classList.remove(`open`),this.host.afterClose())}go(e){this.index+e>=this.stops.length?this.close():(this.index=Math.max(0,this.index+e),this.enter())}enter(){let e=this.stops[this.index];this.host.setView(e.view,{rings:e.on===`rings`}),e.target&&document.querySelector(e.target)?.scrollIntoView({inline:`center`,block:`nearest`,behavior:`smooth`}),this.render()}render(){let e=this.stops[this.index],t=this.index===this.stops.length-1;this.guide.innerHTML=`<div class="tut-person">${Gh}</div>
      <div class="tut-bubble">
        <b>${i(e.title)}</b>
        <p>${i(e.text)}</p>
        <div class="tut-nav">
          <span class="tut-dots" aria-label="Step ${this.index+1} Of ${this.stops.length}">${this.stops.map((e,t)=>`<i class="${t===this.index?`on`:``}"></i>`).join(``)}</span>
          <button data-tut-skip>Skip</button>
          ${this.index?`<button data-tut-back>Back</button>`:``}
          <button data-tut-next class="go">${t?`Done!`:`Next`}</button>
        </div>
      </div>`,this.layout()}layout(){let e=this.stops[this.index],t=innerWidth,n=innerHeight,r=e.target?this.showing(e.target):null,i=r?null:(e.on===`rings`?this.host.ringsCircle():null)??this.host.globeCircle(),a,o,s;if(i){let r=Math.min(i.r+(e.on===`rings`?8:4),Math.max(t,n));this.spot.style.width=`${r*2}px`,this.spot.style.height=`${r*2}px`,this.spot.style.transform=`translate(${i.x-r}px, ${i.y-r}px)`,a=i.y-r,o=i.y+r,s=i.x}else this.spot.style.width=`${r.width+14}px`,this.spot.style.height=`${r.height+14}px`,this.spot.style.transform=`translate(${r.left-7}px, ${r.top-7}px)`,a=r.top-7,o=r.bottom+7,s=r.left+r.width/2;this.spot.classList.toggle(`round`,!!i);let c=this.guide.offsetWidth,l=this.guide.offsetHeight,u;u=n-o>=l+12&&n-o>=a?o+12:a>=l+12?a-l-12:n-l-12;let d=Math.max(8,Math.min(t-c-8,s-c/2));u=Math.max(8,Math.min(n-l-8,u)),this.guide.style.transform=`translate(${d.toFixed(0)}px, ${u.toFixed(0)}px)`}},qh={change:[[`Something has to change.`,`It usually does, when enough people turn up.`],[`We gave them their chance.`,`Now it's someone else's turn.`],[`I've never paid this much attention before.`,`Neither have I.`],[`Will the new lot be any better?`,`We'll find out. And we can always vote again.`],[`Same promises every time.`,`Then let's keep asking what they've actually done.`],[`My whole street was talking about the vote.`,`Mine too.`],[`I want to see something new.`,`Careful what you wish for.`,`I'll take the risk.`],[`Everyone at work wants a change.`,`Even your boss?`,`Especially my boss.`],[`Feels different this time.`,`It does. People are actually talking about it.`],[`My parents never changed their vote. I did.`,`What did they say?`,`Long dinner.`],[`They stopped listening to us.`,`So we stopped voting for them.`],[`Here in {city}, nobody's happy with how it's been.`,`Then let's see what's next.`],[`Change doesn't always mean better.`,`Staying put doesn't either.`],[`Do you think they got the message?`,`Hard to miss it.`],[`New faces at last.`,`Give them a year. Then we'll see.`],[`My kids deserve something different.`,`That's what got me to the polls.`],[`I liked them once.`,`What happened?`,`Nothing happened. That was the problem.`],[`Nobody in {city} expected that result.`,`Felt good to surprise them.`]],fired:[[`The line went around the block!`,`Mine too. Worth the wait.`],[`My whole family voted this time.`,`Even your grandfather?`,`He got there first.`],[`First time I've ever voted.`,`Welcome. Bring a friend next time.`],[`People really showed up.`,`Every one of those gets counted.`],[`Never seen {city} like this on voting day.`,`It feels good, doesn't it?`],[`I took the day off to vote.`,`I took my neighbor with me.`],[`Everyone's asking who I voted for.`,`Better than nobody asking at all.`],[`My daughter voted for the first time.`,`Were you proud?`,`I cried a little.`],[`I waited two hours.`,`I'd have waited four.`],[`Young people came out in numbers.`,`About time. It's their future.`],[`Did you see the crowds?`,`I was in them.`],[`We talked about it all week.`,`And then we actually went and did it.`],[`Feels like it matters this time.`,`It always did. Now people believe it.`],[`Our turnout was the talk of {city}.`,`Let's do it again next time.`],[`I drove three people to vote.`,`That's three more voices.`]],steady:[[`Busy day at work.`,`Same. Quiet in the news, at least.`],[`Not much to complain about today.`,`Give it a week.`],[`Another ordinary election coming.`,`Ordinary is fine by me.`],[`They're doing all right, I suppose.`,`We'll judge them at the next vote.`],[`Did you follow the debate?`,`A bit. Nobody shouted, so I got bored.`],[`Taxes again?`,`Taxes again.`],[`Coffee?`,`Always. Did you see the council's new plan?`,`Boring, but sensible.`],[`Nice to have boring politics.`,`Don't jinx it.`],[`I'll still vote, even when it's calm.`,`That's why it stays calm.`],[`What's new in {city}?`,`They finally fixed the road.`],[`My neighbor's running for local council.`,`Will you vote for them?`,`Depends on the bins.`],[`Nothing dramatic happening.`,`You say that like it's a bad thing.`],[`Rent is the only thing anyone talks about.`,`Is anyone doing anything about it?`,`Ask me at the next vote.`],[`Things could be worse.`,`Things could be better, too.`],[`The news is dull today.`,`Let's keep it that way.`]],divided:[[`We couldn't be further apart.`,`And yet here we both are.`],[`You voted for them?!`,`You voted for them?!`],[`It came down to a handful of votes.`,`So yours really did count.`],[`My city and my village want different things.`,`Can both of them be heard?`],[`Half the country disagrees with me.`,`The other half agrees, though.`],[`We don't talk politics at dinner anymore.`,`Maybe you should. Carefully.`],[`How can so many people think that?`,`They're asking the same about you.`],[`Too close to call.`,`That's what a real contest looks like.`],[`My brother and I canceled each other out.`,`Did you still go?`,`We drove together.`],[`Everyone in {city} has an opinion.`,`And they're all sure they're right.`],[`Who actually won, then?`,`Nobody by much.`],[`I don't recognize this country.`,`Funny. I was going to say that.`],[`We need to listen to each other.`,`You first.`,`Fair enough.`],[`One side wins, the other side stews.`,`Until the next vote.`],[`We were friends before all this.`,`We still are. Aren't we?`,`Of course.`],[`The north wants one thing, the south wants another.`,`And somehow it's one country.`]],weary:[[`Why bother? Nothing changes.`,`It won't if nobody shows up.`],[`I skipped the last one.`,`So did half my street.`],[`Politics is exhausting.`,`Someone decides for you if you don't.`],[`They're all the same.`,`Have you read what they actually want?`,`Who has the time?`],[`I forgot there was a vote.`,`So did a lot of people.`],[`My vote won't change anything.`,`That's what everyone who stayed home said.`],[`Too tired after work to care.`,`I get it. It's still your say.`],[`Nobody in {city} even talks about it now.`,`That's the worrying part.`],[`I used to vote every time.`,`What happened?`,`I stopped believing it mattered.`],[`Same faces, every year.`,`Fewer people voting keeps it that way.`],[`Honestly? I don't follow it anymore.`,`Your rent still does.`],[`What's the point?`,`Ask the people who can't vote at all.`],[`I'll vote next time.`,`That's what you said last time.`],[`They don't talk about people like me.`,`Maybe because people like us stay home.`],[`Who's even running?`,`I had to look it up too.`]],protest:[[`We're marching today.`,`I'll bring my sister.`],[`Will anyone listen?`,`They can't ignore all of us.`],[`Stay together. Stay calm.`,`Someone's filming everything.`],[`The streets in {city} are full.`,`I've never seen so many people.`],[`My mother came with me.`,`So did my whole office.`],[`Do you think it'll change anything?`,`It already got them talking.`],[`Have you got water?`,`And a phone charger. Stay safe.`],[`They said nobody cared.`,`Look around you.`],[`I've got work tomorrow.`,`So does everyone here.`],[`It's peaceful where I am.`,`Same here. Let's keep it that way.`],[`Why are you out here?`,`Because I've got kids.`],[`What's the news saying?`,`Depends which channel you watch.`]],upheaval:[[`Who's actually in charge now?`,`Nobody seems to know.`],[`What did the news say?`,`It keeps changing by the hour.`],[`Is it safe to go out?`,`Stay in touch, okay?`],[`The shops closed early in {city}.`,`Should we be worried?`],[`Have you heard from your brother?`,`He's fine. For now.`],[`What happens next?`,`I wish anyone could tell me.`],[`Everyone's glued to their phones.`,`What else can we do?`],[`I've never seen anything like this.`,`My parents have. That's what scares me.`],[`They keep saying it's under control.`,`Do you believe them?`],[`We just want to get on with our lives.`,`I know. I know.`]]},Jh={change:[[`Grandpa says it's always been like this.`,`Then it's about time.`],[`I read every leaflet this year.`,`All of them?`,`Even the boring ones.`],[`Let's give someone new a go.`,`And if they mess up?`,`Then we vote again.`],[`The bus still doesn't come on time.`,`Have you told the council?`],[`We want different things than our parents did.`,`Every generation says that.`],[`Who do you trust to fix it?`,`Nobody yet. But I'm listening.`],[`Prices keep going up.`,`So people want someone new to try.`],[`I signed my first petition today.`,`How did it feel?`,`Like I'd been heard, a little.`],[`Same old, same old.`,`Not this time.`],[`What would you change first?`,`The schools.`,`Mine too.`],[`They asked us what we want.`,`Finally.`],[`I changed my mind this year.`,`That's allowed, you know.`]],fired:[[`I wore my voting sticker all day.`,`Me too. Someone asked me about it.`],[`My class had a mock election.`,`Who won?`,`Everyone wanted a recount.`],[`Even the shop closed early so people could vote.`,`I love that.`],[`I've been reading up all week.`,`Want to compare notes?`],[`I helped count the ballots.`,`What was it like?`,`Slow, careful, and kind of beautiful.`],[`My neighbor needed a lift to the polls.`,`Did you take them?`,`Took the whole street.`],[`Nobody told me voting could feel like this.`,`Like what?`,`Like being part of something.`],[`They're giving out tea at the polling station.`,`I'm going back.`],[`The whole bus was talking about it.`,`Good. Let them talk.`],[`This is the most people I've seen care.`,`Let's keep it going after today.`]],steady:[[`Are you going to the town meeting?`,`Is there cake?`,`There's always cake.`],[`They're fixing the park.`,`About time. My kids love that park.`],[`Do you know who runs our town?`,`I had to look it up too.`],[`My teacher says local votes matter most.`,`Why's that?`,`They decide your street.`],[`The new library's nice.`,`Our taxes paid for that, you know.`],[`Quiet week.`,`I'll take it.`],[`Have you met our representative?`,`They came to my school once.`],[`I like knowing who to complain to.`,`That's what they're there for.`],[`They're debating bus fares.`,`Now that's a debate I'd watch.`],[`Everything okay at work?`,`Fine. Yours?`,`Fine. Nice, isn't it?`],[`Who's on the ballot next time?`,`I'll check before then.`]],divided:[[`My best friend and I never agree.`,`And you're still friends?`,`Of course. Pizza's pizza.`],[`It's okay to disagree.`,`It's better than everyone being scared to.`],[`Have you ever changed your mind?`,`Once. It wasn't so bad.`],[`Can we talk about something else?`,`Please. How's your dog?`],[`We both want good schools.`,`We just disagree on how.`,`That's a start.`],[`Half my family's not talking.`,`It'll pass. It usually does.`],[`They shouted at each other on TV.`,`My kids asked why grown-ups do that.`],[`At least we both voted.`,`That's the bit we agree on.`],[`What if we're both a little bit right?`,`Don't tell anyone.`],[`The two sides live on the same street here.`,`And they still wave to each other.`],[`Neither side got everything it wanted.`,`Maybe that's how it's meant to work.`]],weary:[[`I can't keep up with it all.`,`Pick one thing you care about. Start there.`],[`Who has time to read all that?`,`Ask someone you trust to explain it.`],[`I don't understand how it works.`,`Most people don't. You can ask.`],[`It's all so complicated.`,`It doesn't take long to learn the basics.`],[`My kids asked me who runs the country.`,`Did you know?`,`I had to look it up.`],[`One vote won't change anything.`,`That's what a lot of people thought.`],[`The news just makes me tired.`,`Same. I check once a week now.`],[`Did you vote?`,`I meant to.`,`There's always next time. Put it in your phone.`],[`Nobody asks what I think.`,`A ballot does.`],[`I don't like any of them.`,`Which one do you dislike least?`],[`They only care around election time.`,`Then that's when to speak up.`]],protest:[[`My feet hurt.`,`Mine too. I'm not leaving yet.`],[`I made a sign.`,`What does it say?`,`I ran out of room.`],[`What do we want them to do?`,`Listen, for a start.`],[`A stranger gave me their umbrella.`,`That's the kind of crowd this is.`],[`My grandmother marched too, when she was young.`,`What for?`,`Much the same thing.`],[`Is this your first march?`,`Is it that obvious?`],[`We're not here to fight.`,`We're here to be counted.`],[`The whole square is singing.`,`I can hear it from here.`]],upheaval:[[`Do you have enough food in?`,`For a few days. You?`],[`The radio's the only thing still working.`,`Keep it on.`],[`My kids keep asking questions.`,`What do you tell them?`,`That we're together.`],[`Who do we even ask?`,`I don't know. Neighbors, I guess.`],[`Has anyone checked on the old man next door?`,`I'll go.`],[`The schools are shut.`,`For how long?`,`Nobody's saying.`],[`We've been through hard times before.`,`We'll get through this one too.`]]},Yh=[[`How do I register to vote?`,`It's easier than you think. I'll show you.`],[`What's the difference between a president and a prime minister?`,`Good question. Let's look it up.`],[`I turn 18 next year.`,`Then you'll get a say. Exciting, isn't it?`],[`What does the {legislature} actually do?`,`It makes the laws. In theory.`],[`I found out who my representative is today.`,`What are they like?`,`I wrote them a letter. We'll see.`],[`Is it true you can vote early?`,`In some places. Worth checking here.`],[`The price of bread again.`,`I know. Who can do anything about that?`],[`Rent's gone up again.`,`Who decides that?`,`That's what I'd like to know.`],[`My daughter's school needs a new roof.`,`Did you go to the meeting?`,`I'm going to the next one.`],[`The bus was late again.`,`That's a local election right there.`],[`Did you see the match?`,`Don't. Just don't.`],[`Nice weather today.`,`Finally. Are you voting on your way to work?`],[`Lunch?`,`Sure. Not politics, though.`,`Agreed. Mostly.`],[`I read a thing about how laws get made.`,`And?`,`It's slower than you'd think.`],[`My grandma has never missed a vote.`,`How many is that?`,`She's lost count.`],[`Why do we vote on a weekday?`,`Good question. Some places don't.`],[`The kids did a project on our government.`,`Did they learn anything?`,`They taught me.`],[`Who runs the hospital here?`,`No idea. Who would know?`],[`The road to my village still floods.`,`Have you told anyone?`,`Who do I even tell?`],[`I just learned what a coalition is.`,`Explain it to me, then.`]],Xh=[`Voice`,`Voice`,`Voice`,`Student`,`Nurse`,`Shopkeeper`,`Teacher`,`Taxi Driver`,`Grandparent`,`Farmer`,`Parent`,`Office Worker`,`Bus Driver`,`Cook`,`Engineer`,`First-Time Voter`,`Neighbor`,`Mechanic`],Zh=()=>Xh[Math.floor(Math.random()*Xh.length)],Qh=[`Everyone's talking about it.`,`What does that mean for us?`,`I need to read more about that.`,`It's all anyone talks about in {city}.`,`I saw. My family's been arguing about it.`,`That's going to matter, isn't it?`,`Who told you?`,`I don't know what to think yet.`],$h=new Map([[[`MEX`,`ESP`,`ARG`,`COL`,`CHL`,`PER`,`VEN`,`ECU`,`BOL`,`PRY`,`URY`,`GTM`,`HND`,`SLV`,`NIC`,`CRI`,`PAN`,`DOM`],`Oye`],[[`BRA`,`PRT`,`AGO`,`MOZ`],`Olha`],[[`FRA`,`SEN`,`CIV`,`MLI`,`BFA`,`NER`,`GIN`,`TCD`,`BEN`,`TGO`,`COD`,`CMR`,`MDG`],`Bon`],[[`DEU`,`AUT`],`Also`],[[`ITA`],`Allora`],[[`NLD`],`Nou`],[[`SWE`],`Alltså`],[[`POL`],`No`],[[`TUR`],`Ya`],[[`IDN`,`MYS`],`Eh`],[[`PHL`],`Uy`],[[`IND`,`PAK`],`Yaar`],[[`NGA`],`Abeg`],[[`GHA`],`Chale`],[[`KEN`,`TZA`],`Sasa`],[[`ZAF`],`Eish`],[[`AUS`,`NZL`],`Mate`],[[`GBR`],`Honestly`],[[`IRL`],`Ah`],[[`EGY`,`MAR`,`DZA`,`TUN`,`JOR`,`LBN`,`IRQ`,`SYR`],`Yalla`],[[`GRC`],`Re`],[[`JPN`],`Nee`]].flatMap(([e,t])=>e.map(e=>[e,t]))),eg=e=>e[Math.floor(Math.random()*e.length)],tg=/^(I|I'm|I've|I'll|I'd)\b/;function ng(e,n){let r=[];for(let e of n.reasons){let t;(t=e.match(/^Turnout Rose To (\d+)%/))?r.push([`Turnout hit ${t[1]}% here.`,eg([`I was one of them.`,`That's a lot of people caring.`,`Let's beat it next time.`])]):(t=e.match(/^Turnout Fell To (\d+)%/))?r.push([`Only ${t[1]}% of us voted last time.`,eg([`And the rest let them decide.`,`That worries me.`,`I was one of the ones who stayed home.`])]):e.startsWith(`Fewer Than Half`)?r.push([`Fewer than half of us voted.`,`So who are they really speaking for?`]):e.startsWith(`A New Leader`)?r.push([`New leader, new promises.`,eg([`Let's see if they keep them.`,`I'm giving it a year.`,`We'll hold them to it.`])]):(t=e.match(/Gained (\d+) Seats/))?r.push([`${t[1]} seats moved at the last vote.`,eg([`I didn't see that coming.`,`That's a real shift.`,`People are clearly fed up.`])]):(t=e.match(/^(\d+) Seats Changed Hands/))?r.push([`${t[1]} seats just changed hands.`,eg([`That's not nothing.`,`People meant it.`,`Now let's see what they do with it.`])]):e.includes(`Razor-Thin`)?r.push([`It came down to almost nothing.`,`So don't tell me a vote doesn't count.`]):e.includes(`Vote Was Close`)?r.push([`That last vote was close.`,`Every one of us mattered, then.`]):e.startsWith(`Most Regions Are Run`)?r.push([`My region votes the other way from the capital.`,`Do they ever listen to you?`]):e.startsWith(`Regions Are Split`)?r.push([`Our regions don't agree on much.`,`Does anywhere?`]):e.includes(`Weakened`)?r.push([`It feels harder to speak up than ten years ago.`,`Then it matters more that we do.`]):e.includes(`Strengthened`)&&r.push([`It's easier to speak up than it was ten years ago.`,`Let's keep it that way.`])}let i=Date.now();for(let n of G.news){if(n.id.startsWith(`race-`)||n.kind===`result`||n.countries[0]!==e.key||i-Date.parse(n.lastSeen)>2592e5)continue;let a=t(n.title);if(a.length<=74&&r.push([`Did you see this? "${a}"`,eg(Qh)]),r.length>8)break}let a=/\b(vs?|x|fc|cf|cup|league|liga|serie|premier|match|game|open|united|city|madrid|barcelona)\b/i;for(let n of(G.buzz.countries[e.key]??[]).slice(0,5)){if(!/^[\p{Script=Latin}\s'\u2019.&]+$/u.test(n.t)||n.t.length<4||n.t.trim().split(/\s+/).length>4)continue;let e=t(n.t);a.test(n.t)?r.push([`Did you watch ${e}?`,eg([`Everyone here did.`,`Don't talk to me about it.`,`Best thing on all week.`,`I only saw the end.`])]):r.push(eg([[`Everyone's looking up ${e}.`,eg([`Why, what happened?`,`I saw it everywhere today.`,`I was about to ask you.`])],[`Have you seen all this about ${e}?`,eg([`It's all over my phone.`,`My whole family's talking about it.`,`I can't get away from it.`])],[`${e} is everywhere today.`,eg([`It really is.`,`What's the fuss, though?`,`I've been reading about it all morning.`])]]))}if([`USA`,`GBR`,`CAN`,`AUS`,`IRL`,`NZL`].includes(e.key))for(let e of G.buzz.world.slice(0,3))r.push([`People online can't stop talking about ${t(e.t)}.`,eg([`Of course they can't.`,`I saw that too.`,`What did I miss?`])]);let o=K.byCountry[e.key];o?.s&&!o.sf&&r.push([`Women here couldn't all vote until ${o.s}.`,eg([`My grandmother remembered that.`,`That's not so long ago.`,`And some people still skip it.`])]),o?.w!==void 0&&r.push([`Women hold ${Math.round(o.w)}% of the seats here.`,eg([`Is that a lot?`,`What would you want it to be?`,`It used to be less.`])]);let s=o?.t?.[o.t.length-1];s&&r.push([`About ${Math.round(s[1])} in 100 of us voted last time.`,eg([`Were you one of them?`,`I'd like to see that go up.`,`That sounds about right on my street.`])]);let c=e.exec===`hog`?e.hog:e.hos,l=c?.since?(i-Date.parse(c.since))/315576e5:0;c&&l>=2&&r.push([`${c.name} has been in charge for ${Math.floor(l)} years now.`,eg([`Is that a long time?`,`It goes fast, doesn't it?`,`Do you remember who came before?`])]),e.legislatureName&&r.push([`Did you see what happened in the ${e.legislatureName}?`,eg([`I missed it.`,`What did they decide?`,`They argue all day in there.`])]),(e.pop??0)>2e6&&r.push([`There are about ${Math.round((e.pop??0)/1e6)} million of us.`,eg([`And every vote counts the same.`,`Who could speak for all of us?`,`That's a lot of opinions.`])]);let u=e.next?.[0];if(u){let e=Math.ceil((Date.parse(u.date)-i)/864e5);if(e>=0&&e<=90){let t=e===0?`today`:e===1?`tomorrow`:e<14?`in ${e} days`:`in ${Math.round(e/7)} weeks`;r.push([`We vote ${t}.`,eg([`Are you registered?`,`Are you going?`,`I'll go if you go.`,`Have you looked at who's running?`])])}}for(let t of G.worldElections)if(t.country===e.key&&(t.phase===`counting`||t.phase===`voting`)){r.push(t.phase===`counting`?[`They're still counting.`,`Every last one, I hope.`]:[`Polls are open today.`,`On my way.`]);break}return r}var rg=[];function ig(e,t,n){let r=t.mood;if(r===`unclear`)return[];let i=ng(e,t),a=e=>!e.some(e=>/stopped voting|voted (them|for|this|out)|voting for them|seats? (moved|just changed|changed hands)|fed up/i.test(e)),o=t=>a(t)&&(n||!t.some(e=>e.includes(`{city}`)))&&(e.legislatureName||!t.some(e=>e.includes(`{legislature}`)))&&!rg.includes(t[0]),s=r!==`protest`&&r!==`upheaval`,c=[...qh[r],...Jh[r],...s?Yh:[]].filter(o),l=i.filter(o),u=l.length&&(Math.random()<.45||!c.length)?eg(l):eg(c.length?c:qh[r]);rg.push(u[0]),rg.length>160&&rg.shift();let d=u.map(t=>t.replaceAll(`{city}`,n??`town`).replaceAll(`{legislature}`,e.legislatureName??`parliament`)),f=$h.get(e.key);return f&&Math.random()<.3&&!d[0].includes(`"`)&&(d[0]=`${f}, ${tg.test(d[0])?d[0]:d[0][0].toLowerCase()+d[0].slice(1)}`),d}var ag=30,og={wide:5,phone:3},sg=15e4,cg=3e5,lg=30,ug=`#top-left, #top-right, #catch-me-up, #ticker, #scoreboard, #lens, #mood-key, #hint, #insight.open, body.has-sheet #sheet, body.has-world #ch-stack, body.has-learn .learn-caption, body.has-time .tm-panel, #drawer:not([hidden]), .bubble, #globe-hint`,dg=class{globe;box=document.createElement(`div`);groups=[];live=[];blockers=[];blockersAt=0;wait=1.5;pinnedKey=null;constructor(e){this.globe=e,this.box.id=`voices`,this.box.setAttribute(`aria-hidden`,`true`),document.body.append(this.box)}setPeople(e){let t=new Map(this.groups.map(e=>[e.key,e.spokeAt]));this.groups=e.filter(e=>e.places.length).map(e=>({key:e.key,pop:e.pop,spokeAt:t.get(e.key)??-1/0,places:e.places.map(e=>({at:wl(e.lon,e.lat,1,new H),name:e.name,usedAt:-1/0}))}))}pin(e){if(e===this.pinnedKey)return;this.pinnedKey=e;let t=this.live.findIndex(e=>e.pinned);if(t>=0&&this.remove(t),!e)return;let n=this.groups.find(t=>t.key===e),r=G.world.countries[e];if(!n||!r||xl(r).mood===`unclear`)return;let i=this.live.findIndex(t=>t.region===(this.globe.layers.countries?.byKey.get(e)??-2));i>=0&&this.remove(i);let a=n.places[0],o=this.build(r,a);if(!o)return;let s=this.globe.layers.countries?.byKey.get(e)??-1;this.lightUp(s,!0),n.spokeAt=performance.now(),this.live.push({...o,at:a.at,region:s,hiddenFor:0,age:0,shown:!0,life:1/0,pinned:{key:e,place:a,refreshIn:26}}),requestAnimationFrame(()=>o.el.classList.add(`on`))}build(e,t){let n=xl(e),r=pl[n.mood],a=ig(e,n,t.name);if(!a.length)return null;let o=e.iso2?`<span class="fi fi-${i(e.iso2.toLowerCase())}"></span>`:``,s=document.createElement(`button`);s.className=`voice`,s.tabIndex=-1,s.dataset.select=`country:${e.key}`,s.dataset.tip=`An imagined voice, based on what's really happening in ${e.name}. ${n.reasons[0]??r.meaning}.`,s.style.setProperty(`--c`,r.color),s.style.setProperty(`--c2`,r.second??r.color),s.innerHTML=`<span class="v-head">${o}<b>${i(e.name)}</b></span><span class="v-mood">${i(r.label)}</span><span class="v-thread">${a.map((e,t)=>`<span class="v-line ${t%2?`b`:`a`}" ${t?`hidden`:``}>${i(e)}</span>`).join(``)}</span><small class="v-tag">Imagined Quote, ${i(Zh())}${t.name?`, ${i(t.name)}`:``}</small><i class="v-stem"></i><i class="v-person"></i>`,this.box.append(s);let c=[...s.querySelectorAll(`.v-line[hidden]`)];c.forEach(e=>{e.hidden=!1});let l=s.offsetWidth,u=s.offsetHeight;return c.forEach(e=>{e.hidden=!0}),{el:s,w:l,h:u,next:c.map((e,t)=>({el:e,when:3+t*3.5+Math.random()}))}}get phone(){return this.globe.size.w<720}refreshBlockers(e){if(!(e-this.blockersAt<700)){this.blockersAt=e,this.blockers=[],this.box.classList.toggle(`covered`,!!document.querySelector(`#catchup.open, #about.open, #methods.open, #dictionary.open, #tutorial.open, #desk.open, #learn.open, #search:not([hidden])`));for(let e of document.querySelectorAll(ug)){let t=getComputedStyle(e);if(t.display===`none`||t.visibility===`hidden`||Number(t.opacity)<.05)continue;let n=e.getBoundingClientRect();n.width&&n.height&&this.blockers.push({x0:n.left,y0:n.top,x1:n.right,y1:n.bottom})}}}place(e,t,n){let r=Math.max(t/2+6,Math.min(this.globe.size.w-t/2-6,e.x));return{x:r,y:e.y-lg,box:{x0:r-t/2-3,x1:r+t/2+3,y0:e.y-lg-n-3,y1:e.y}}}clear(e,t){let n=t=>e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0;if(e.y0<4||e.y1>this.globe.size.h-4||this.blockers.some(n))return!1;for(let e of this.live){if(e===t||!e.shown)continue;let r=this.globe.project(e.at);if(r&&n(this.place(r,e.w,e.h).box))return!1}return!0}spawn(e){let t=this.globe.cam.camera.position,n=1+(t.length()-1)*.12,{w:r,h:i}=this.globe.size,a=[];for(let o of this.groups){if(e-o.spokeAt<sg)continue;let s=G.world.countries[o.key];if(!s)continue;let c=xl(s);if(c.mood!==`unclear`)for(let l of o.places){if(e-l.usedAt<cg||l.at.dot(t)<n)continue;let u=this.globe.project(l.at);if(!u||u.x<20||u.x>r-20||u.y<40||u.y>i-40)continue;let d=1+Math.log10(Math.max(o.pop,1e5)/1e5)*.55;a.push({group:o,place:l,c:s,weight:d*(.6+c.strength)});break}}if(!a.length)return!1;for(let t=0;t<5;t++){let t=Math.random()*a.reduce((e,t)=>e+t.weight,0),{group:n,place:r,c:i}=a.find(e=>(t-=e.weight)<=0)??a[0],o=this.build(i,r);if(!o)continue;let{el:s,w:c,h:l,next:u}=o,d=this.globe.project(r.at);if(!d||!this.clear(this.place(d,c,l).box)){s.remove();continue}n.spokeAt=e,r.usedAt=e;let f=this.globe.layers.countries?.byKey.get(i.key)??-1;this.lightUp(f,!0);let p={el:s,at:r.at,region:f,hiddenFor:0,w:c,h:l,age:0,shown:!0,life:ag,next:u};return this.live.push(p),requestAnimationFrame(()=>s.classList.add(`on`)),!0}return!1}lightUp(e,t){e>=0&&this.globe.layers.countries?.setGlow(e,t?3.2:0)}remove(e){let t=this.live[e];this.lightUp(t.region,!1),t.el.remove(),this.live.splice(e,1)}update(e){let t=performance.now();this.refreshBlockers(t);let n=this.phone?og.phone:og.wide;if(this.wait-=e,this.wait<=0){let e=document.hidden||!!document.querySelector(`#catchup.open, #about.open, #tutorial.open, #desk.open, #dictionary.open, #timemachine.open`);this.wait=!e&&this.live.filter(e=>!e.pinned).length<n&&this.spawn(t)?ag/n:1.5}for(let t=this.live.length-1;t>=0;t--){let n=this.live[t];if(n.age+=e,n.pinned){n.pinned.refreshIn-=e;let t=G.world.countries[n.pinned.key];if(n.pinned.refreshIn<=0&&t){let e=this.build(t,n.pinned.place);e&&(n.el.remove(),n.el=e.el,n.w=e.w,n.h=e.h,n.next=e.next,n.age=0,n.el.classList.add(`on`)),n.pinned.refreshIn=26}for(let e of n.next)e.el.hidden&&n.age>=e.when&&(e.el.hidden=!1);let r=this.globe.project(n.at);if(r&&n.at.dot(this.globe.cam.camera.position)>1.005){let e=this.place(r,n.w,n.h),t=Math.max(e.y,n.h+58),i={...e.box,y0:t-n.h-3,y1:t+lg};n.el.classList.toggle(`on`,!this.blockers.some(e=>i.x0<e.x1&&i.x1>e.x0&&i.y0<e.y1&&i.y1>e.y0)),n.el.style.transform=`translate3d(${e.x.toFixed(1)}px, ${t.toFixed(1)}px, 0) translate(-50%, -100%)`,n.el.style.setProperty(`--tail`,`${Math.max(-n.w/2+14,Math.min(n.w/2-14,r.x-e.x)).toFixed(1)}px`)}else n.el.classList.remove(`on`);continue}for(let e of n.next)e.el.hidden&&n.age>=e.when&&(e.el.hidden=!1);if(n.age>n.life+.35){this.remove(t);continue}n.age>n.life&&n.el.classList.remove(`on`);let r=this.globe.project(n.at),i=this.globe.cam.camera.position,a=!!r&&n.at.dot(i)>1.005;if(!r||!a){n.shown=!1,n.el.classList.remove(`on`),n.hiddenFor+=e,n.hiddenFor>2.5&&this.remove(t);continue}let o=this.place(r,n.w,n.h),s=this.clear(o.box,n);n.shown=s,n.hiddenFor=s?0:n.hiddenFor+e,n.hiddenFor>4?this.remove(t):(n.age<=n.life&&n.el.classList.toggle(`on`,s),n.el.style.transform=`translate3d(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px, 0) translate(-50%, -100%)`,n.el.style.setProperty(`--tail`,`${Math.max(-n.w/2+14,Math.min(n.w/2-14,r.x-o.x)).toFixed(1)}px`))}}},fg=`#a06ff0`,pg=e=>(e.pop??0)>0&&!!e.regime,mg=e=>e.exec===`hog`?e.hog:e.hos,hg=e=>!!e&&(Rl(e)===`liberal`||Rl(e)===`electoral`);function gg(e){if(!e)return null;let t=new Date(e).getTime();return Number.isFinite(t)?(Date.now()-t)/315576e5:null}function _g(){let e=new Map;for(let t of Object.values(G.world.countries).filter(pg)){let n=Rl(t),r=e.get(n)??{n:0,pop:0};r.n++,r.pop+=t.pop??0,e.set(n,r)}return Il.filter(t=>e.get(t)?.n).map(t=>({kind:t,...e.get(t)}))}function vg(){return Object.values(G.world.countries).filter(pg).map(e=>({c:e,y:gg(mg(e)?.since)})).filter(e=>e.y!==null&&e.y>0).sort((e,t)=>t.y-e.y)}function yg(e=40){return G.worldElections.filter(e=>new Date(e.date).getTime()>Date.now()-864e5&&!e.dependency).sort((e,t)=>e.date.localeCompare(t.date)).slice(0,e)}var bg=2800,xg=`
  uniform float uTime, uSize, uOpacity;
  uniform vec2 uRes;
  uniform vec3 uCam;
  in vec3 iDir;
  in vec3 iColor;
  in vec4 iData;  // gesture, phase, speed, which way they face
  out vec2 vP;
  out vec3 vColor;
  out float vAlpha;
  flat out vec4 vLimbs;  // left arm, right arm, left leg, right leg
  flat out vec3 vPose;   // bounce, head droop, whether they carry a sign
  void main() {
    vColor = iColor;
    vP = position.xy;
    vP.x *= iData.w;
    vAlpha = uOpacity;
    vLimbs = vec4(0.0);
    vPose = vec3(0.0);
    if (uOpacity < 0.01 || dot(iDir, uCam) < 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    float g = iData.x;
    float t = uTime * iData.z + iData.y * 6.2832;
    float armL = 0.2, armR = -0.2, legL = 0.12, legR = -0.12, bob = 0.0, droop = 0.0, carry = 0.0;
    vec2 roam = vec2(0.0);
    if (g < 0.5) {                 // A stroll.
      float s = sin(t * 3.0);
      legL = s * 0.4; legR = -s * 0.4; armL = -s * 0.32; armR = s * 0.32;
      bob = abs(cos(t * 3.0)) * 0.03;
      roam = vec2(sin(t * 0.3) * 13.0, cos(t * 0.23) * 4.0);
    } else if (g < 1.5) {          // Jumping up and down, arms in the air.
      float s = sin(t * 5.0);
      bob = abs(s) * 0.24;
      armL = 2.65 + s * 0.28; armR = -2.65 - s * 0.28;
      legL = 0.14 + abs(s) * 0.22; legR = -legL;
    } else if (g < 2.5) {          // Marching, one arm up holding a sign.
      float s = sin(t * 4.0);
      legL = s * 0.42; legR = -s * 0.42;
      armR = -s * 0.25; armL = 3.0 + sin(t * 2.0) * 0.12;
      bob = abs(cos(t * 4.0)) * 0.05;
      carry = 1.0;
      roam = vec2(sin(t * 0.42) * 17.0, 0.0);
    } else if (g < 3.5) {          // Arguing: leaning in and jabbing a finger.
      float s = sin(t * 4.5);
      armR = 1.7 + s * 0.4; armL = -0.5 - s * 0.2;
      legL = 0.2; legR = -0.2;
      bob = abs(s) * 0.03;
    } else if (g < 4.5) {          // Trudging along, head down.
      float s = sin(t * 1.5);
      legL = s * 0.2; legR = -s * 0.2; armL = 0.06; armR = -0.06;
      droop = 0.09;
      roam = vec2(sin(t * 0.14) * 9.0, 0.0);
    } else if (g < 5.5) {          // Standing still.
      armL = 0.07; armR = -0.07; legL = 0.06; legR = -0.06;
      bob = sin(t * 0.8) * 0.006;
    } else {                       // Running.
      float s = sin(t * 7.5);
      legL = s * 0.85; legR = -s * 0.85; armL = -s * 0.8; armR = s * 0.8;
      bob = abs(cos(t * 7.5)) * 0.08;
      roam = vec2(sin(t * 0.8) * 22.0, cos(t * 0.5) * 6.0);
    }
    vLimbs = vec4(armL, armR, legL, legR);
    vPose = vec3(bob, droop, carry);
    vec4 c = projectionMatrix * viewMatrix * vec4(iDir, 1.0);
    // Standing on their spot, so the figure rises from the ground instead of hanging over it.
    c.xy += (vec2(position.x * uSize, (position.y + 0.72) * uSize) + roam) / uRes * 2.0 * c.w;
    gl_Position = c;
  }
`,Sg=`
  precision highp float;
  in vec2 vP;
  in vec3 vColor;
  in float vAlpha;
  flat in vec4 vLimbs;
  flat in vec3 vPose;
  out vec4 fragColor;
  float seg(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a, ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }
  vec2 limb(float a) { return vec2(sin(a), -cos(a)); }
  void main() {
    vec2 p = vP - vec2(0.0, vPose.x);
    vec2 hip = vec2(0.0, -0.14), neck = vec2(0.0, 0.26);
    vec2 head = vec2(vPose.y * 0.6, 0.5 - vPose.y);
    float d = seg(p, hip, neck);
    vec2 handL = neck + limb(vLimbs.x) * 0.4;
    d = min(d, seg(p, neck, handL));
    d = min(d, seg(p, neck, neck + limb(vLimbs.y) * 0.4));
    d = min(d, seg(p, hip, hip + limb(vLimbs.z) * 0.56));
    d = min(d, seg(p, hip, hip + limb(vLimbs.w) * 0.56));
    d = min(d, length(p - head) - 0.1);
    float width = 0.082;
    float sign_ = 1.0;
    if (vPose.z > 0.5) {
      // A placard on a stick, held up in the raised hand.
      vec2 q = p - (handL + vec2(0.0, 0.26));
      vec2 box = abs(q) - vec2(0.2, 0.13);
      sign_ = length(max(box, 0.0)) + min(max(box.x, box.y), 0.0);
      d = min(d, seg(p, handL, handL + vec2(0.0, 0.16)));
    }
    float aa = fwidth(d) * 1.1 + 0.001;
    float core = 1.0 - smoothstep(width - aa, width + aa, d);
    float plate = 1.0 - smoothstep(-aa, aa, sign_);
    float halo = 1.0 - smoothstep(width + 0.02, width + 0.15, min(d, sign_ + 0.04));
    vec3 col = mix(vColor, vec3(1.0), plate * 0.86);
    float body = max(core, plate);
    float a = max(body, halo * 0.6);
    if (a < 0.01) discard;
    fragColor = vec4(mix(vec3(0.02, 0.03, 0.05), col, body), a * vAlpha);
  }
`,Cg=class{globe;geo=new wa;dir=new Float32Array(bg*3);color=new Float32Array(bg*3);data=new Float32Array(bg*4);attrs;mat;opacity=new du(0,.6,1);mesh;count=0;constructor(e){this.globe=e,this.geo.setAttribute(`position`,new yr(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),this.geo.setIndex([0,1,2,0,2,3]);let t=(e,t,n)=>{let r=new ci(t,n);return r.setUsage(st),this.geo.setAttribute(e,r),r};this.attrs=[t(`iDir`,this.dir,3),t(`iColor`,this.color,3),t(`iData`,this.data,4)],this.geo.instanceCount=0,this.mat=new Ri({glslVersion:ct,vertexShader:xg,fragmentShader:Sg,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:e.shared.uTime,uCam:e.shared.uCam,uSize:{value:15},uOpacity:{value:0},uRes:{value:new Mt(1,1)}}}),this.mesh=new ii(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=22,this.mesh.visible=!1,e.scene.add(this.mesh)}setMembers(e){let t=wl(0,0);this.count=Math.min(e.length,bg);for(let n=0;n<this.count;n++){let r=e[n];wl(r.lon,r.lat,1,t),this.dir.set([t.x,t.y,t.z],n*3);let i=J(r.color);this.color.set(i,n*3);let a=Math.abs(Math.sin(r.lon*12.9898+r.lat*78.233)*43758.5453)%1;this.data.set([r.gesture,a,r.speed,a>.5?1:-1],n*4)}this.geo.instanceCount=this.count;for(let e of this.attrs)e.needsUpdate=!0}show(e){this.opacity.target=+!!e}update(e){this.opacity.step(e);let t=Math.max(0,Math.min(1,this.opacity.value));this.mat.uniforms.uOpacity.value=t,this.mesh.visible=t>.005;let{w:n,h:r}=this.globe.size;this.mat.uniforms.uRes.value.set(n,r),this.mat.uniforms.uSize.value=Math.max(9.5,Math.min(n,r)/64)}},wg=.0016,Tg=42,Eg=1.42;function Dg(e,t,n){let r=Eg*Eg,i=r*r;if(n*n<1e-8){let n=Math.log(t/e)/Eg;return{length:Math.abs(n),path:t=>[t,e*Math.exp(Eg*t*n)]}}let a=(t*t-e*e+i*n*n)/(2*e*r*n),o=(t*t-e*e-i*n*n)/(2*t*r*n),s=Math.log(Math.sqrt(a*a+1)-a),c=(Math.log(Math.sqrt(o*o+1)-o)-s)/Eg;return{length:Math.abs(c),path:t=>{let i=t*c;return[e/(r*n)*(Math.cosh(s)*Math.tanh(Eg*i+s)-Math.sinh(s)),e*Math.cosh(s)/Math.cosh(Eg*i+s)]}}}var Og=e=>Dl(e*e*(3-2*e),1-(1-e)**3,.55),kg=class{el;camera;lon=-40;lat=25;alt=2.4;tilt=0;vLon=0;vLat=0;logTarget=Math.log(2.4);restLog=null;zoomedAt=-1/0;flight=null;lastInput=0;dragging=!1;pointers=new Map;pinch=0;lastMove=0;anchor=null;w=1;h=1;shiftX=new du(0,.5,1);shiftY=new du(0,.5,1);autoRotate=!0;spinAfter=16e3;spinSpeed=.9;zoomedOutAt=-1/0;onUserMove=null;speed=0;lastLon=this.lon;lastLat=this.lat;constructor(e){this.el=e,this.camera=new Sa(Tg,1,.01,100),e.addEventListener(`pointerdown`,this.down),window.addEventListener(`pointermove`,this.move),window.addEventListener(`pointerup`,this.up),window.addEventListener(`pointercancel`,this.up),e.addEventListener(`wheel`,this.wheel,{passive:!1}),e.style.touchAction=`none`}get isDragging(){return this.dragging}get isFlying(){return!!this.flight}markInput(){this.lastInput=performance.now(),this.flight&&(this.flight=null,this.logTarget=Math.log(this.alt)),this.onUserMove?.()}radiansPerPixel(){return 2*Math.max(this.alt,.01)*Math.tan(this.camera.fov*Cl/2)/(this.h||800)}viewAngle(){let e=1+this.alt,t=Math.tan(this.camera.fov*Cl/2),n=Math.atan(Math.min(t,t*this.camera.aspect)),r=e*Math.sin(n);return r>=1?Math.acos(1/e):Math.asin(r)-n}altForView(e){let t=Math.tan(this.camera.fov*Cl/2),n=Math.atan(Math.min(t,t*this.camera.aspect));return El(Math.sin(e+n)/Math.sin(n)-1,wg,5)}lonLatAt(e,t){let n=new H((e+this.shiftX.value)/this.w*2-1,-((t+this.shiftY.value)/this.h)*2+1,.5).unproject(this.camera),r=this.camera.position,i=n.sub(r).normalize(),a=r.dot(i),o=r.dot(r)-1,s=a*a-o;if(s<0)return null;let[c,l]=Tl(r.clone().addScaledVector(i,-a-Math.sqrt(s)));return{lon:c,lat:l}}down=e=>{(e.button===0||e.pointerType!==`mouse`)&&(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.el.setPointerCapture?.(e.pointerId),this.dragging=!0,this.pinch=0,this.vLon=this.vLat=0,this.lastMove=performance.now(),this.anchor=null,this.markInput())};move=e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,this.pointers.size===2){let[e,t]=[...this.pointers.values()],n=Math.hypot(e.x-t.x,e.y-t.y);this.pinch&&this.noteZoom(),this.pinch&&n<this.pinch&&(this.zoomedOutAt=performance.now()),this.pinch&&(this.logTarget=El(this.logTarget+Math.log(this.pinch/n),Math.log(wg),Math.log(5))),this.pinch=n;return}if(n===0&&r===0)return;let i=this.radiansPerPixel()/Cl,a=Math.max(.2,Math.cos(this.lat*Cl)),o=-n*i/a,s=r*i;this.lon+=o,this.lat=El(this.lat+s,-86,86);let c=performance.now(),l=Math.max(.004,(c-this.lastMove)/1e3);this.lastMove=c;let u=1-Math.exp(-l/.05);this.vLon+=(o/l-this.vLon)*u,this.vLat+=(s/l-this.vLat)*u,this.markInput()};up=e=>{this.pointers.delete(e.pointerId),this.pointers.size===0&&(this.dragging=!1,performance.now()-this.lastMove>70&&(this.vLon=this.vLat=0)),this.pinch=0};wheel=e=>{e.preventDefault();let t=e.deltaMode===1?e.deltaY*18:e.deltaY;this.noteZoom(),t>0&&(this.zoomedOutAt=performance.now()),this.logTarget=El(this.logTarget+El(t,-240,240)*.0016,Math.log(wg),Math.log(5)),this.anchor=this.lonLatAt(e.clientX,e.clientY),this.vLon=this.vLat=0,this.markInput()};noteZoom(){this.zoomedAt=performance.now(),this.restLog=null}keepPlanetWithin(e,t=!1,n=.05){let r=performance.now();if(this.flight||this.dragging||r-this.lastInput<1200||r-this.zoomedAt<3e4)return;let i=Math.tan(this.camera.fov*Cl/2),a=this.h/2/(Math.max(e,120)/2*(t?.93:.97)*i),o=Math.log(El(Math.sqrt(1+a*a)-1,wg,5)),s=this.restLog??this.logTarget,c=t?o:Math.max(o,s);this.logTarget+=El(c-this.logTarget,-n,n),this.restLog=Math.abs(this.logTarget-s)<.005?null:s}flyTo(e,t,n,r={}){Math.abs(n-this.alt)>.05&&(this.restLog=null);let i=wl(this.lon,this.lat),a=wl(e,El(t,-84,84)),o=Math.acos(El(i.dot(a),-1,1)),s=El(n,wg,5),{path:c,length:l}=Dg(Math.max(this.alt,.001),s,Math.max(o,1e-6));this.flight={t:0,dur:(r.ms??El(l*.62*1e3,750,3400))/1e3,from:i,to:a,arc:o,tilt0:this.tilt,tilt1:r.tilt??this.tiltFor(s),path:c},this.lastInput=performance.now(),this.vLon=this.vLat=0,this.anchor=null}tiltFor(e){let t=Math.max(0,Math.min(1,(1.25-e)/.95));return t*t*(3-2*t)*.72}update(e){if(this.flight){let t=this.flight;t.t=Math.min(1,t.t+e/t.dur);let n=Og(t.t),[r,i]=t.path(n),a=t.arc,[o,s]=Tl(a<1e-5?t.to.clone():t.from.clone().multiplyScalar(Math.sin((1-r)*a)/Math.sin(a)).addScaledVector(t.to,Math.sin(r*a)/Math.sin(a)));this.lon=o,this.lat=s,this.alt=El(i,wg,6.5),this.tilt=Dl(t.tilt0,t.tilt1,n),this.logTarget=Math.log(this.alt),t.t>=1&&(this.flight=null)}else{if(!this.dragging){this.lon+=this.vLon*e,this.lat=El(this.lat+this.vLat*e,-86,86);let t=Math.exp(-e/.42);this.vLon*=t,this.vLat*=t}let t=this.alt,n=Math.log(this.alt),r=Math.exp(n+(this.logTarget-n)*(1-Math.exp(-e*8.5)));if(this.alt=r,this.anchor&&Math.abs(r-t)>1e-6){let e=r/t,n=El((1.5-r)/1.1,0,1),i=(this.anchor.lon-this.lon+540)%360-180;this.lon+=i*(1-e)*n,this.lat=El(this.lat+(this.anchor.lat-this.lat)*(1-e)*n,-86,86)}this.tilt+=(this.tiltFor(this.alt)-this.tilt)*(1-Math.exp(-e*4)),this.autoRotate&&!this.dragging&&performance.now()-this.lastInput>this.spinAfter&&this.alt>1.2&&(this.lon+=e*this.spinSpeed)}let t=((this.lon-this.lastLon+540)%360-180)*Math.cos(this.lat*Cl),n=Math.hypot(t,this.lat-this.lastLat)*Cl/Math.max(e,.001);this.speed+=(n-this.speed)*(1-Math.exp(-e*10)),this.lastLon=this.lon,this.lastLat=this.lat,this.shiftX.step(e),this.shiftY.step(e),this.apply()}target=new H;north=new H;offset=new H;apply(){let e=this.camera;wl(this.lon,this.lat,1,this.target),wl(this.lon,this.lat+90,1,this.north);let t=Math.cos(this.tilt),n=Math.sin(this.tilt);this.offset.copy(this.target).multiplyScalar(t).addScaledVector(this.north,-n).multiplyScalar(this.alt),e.position.copy(this.target).add(this.offset),e.up.copy(this.north).multiplyScalar(t).addScaledVector(this.target,n).normalize(),e.lookAt(this.target),e.near=Math.max(2e-4,this.alt*.1),e.far=this.alt+90,this.applyShift(),e.updateMatrixWorld(!0)}applyShift(){let e=this.camera;Math.abs(this.shiftX.value)>.2||Math.abs(this.shiftY.value)>.2?e.setViewOffset(this.w,this.h,this.shiftX.value,this.shiftY.value,this.w,this.h):e.view?.enabled?e.clearViewOffset():e.updateProjectionMatrix()}resize(e,t){this.w=e,this.h=t,this.camera.aspect=e/t;let n=Math.tan(Tg*Cl/2);this.camera.fov=2*Math.atan(this.camera.aspect<1?n/this.camera.aspect:n)/Cl,this.camera.updateProjectionMatrix()}},Ag=`
  out vec3 vN;
  out vec3 vWorld;
  void main() {
    vN = normalize(position);
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,jg=`
  uniform vec3 uCam, uKey;
  vec3 gradeEarth(vec3 c, vec3 n) {
    // Muted and dark: the planet is a quiet stage, so political color can be the only thing that speaks.
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(vec3(l), c, 0.56);
    c = pow(max(c, 0.0), vec3(1.1)) * 0.9;
    c *= vec3(0.95, 0.98, 1.04);
    // Water would otherwise sink to near black. Anything distinctly bluer than it is bright gets lifted to a
    // deep sea blue, which also keeps coastlines easy to read, and the land stays as dark and quiet as it was.
    float water = smoothstep(0.03, 0.26, (c.b - max(c.r, c.g * 0.92)) / (l + 0.04));
    c = mix(c, c * 1.65 + vec3(0.012, 0.038, 0.074), water);
    // A broad, soft light with no hot spot and no terminator, and the edges falling gently away.
    float key = 0.8 + 0.2 * max(dot(n, uKey), 0.0);
    vec3 V = normalize(uCam - n);
    float limb = pow(max(dot(n, V), 0.0), 0.5);
    return c * key * mix(0.56, 1.0, limb);
  }
`,Mg=`
  precision highp float;
  uniform sampler2D uDay;
  ${jg}
  in vec3 vN;
  out vec4 fragColor;
  const float PI = 3.14159265359;
  void main() {
    vec3 n = normalize(vN);
    float u = atan(n.x, n.z) / (2.0 * PI);
    float v = asin(clamp(n.y, -1.0, 1.0)) / PI + 0.5;
    float a = fract(u + 0.5);
    float b = fract(u + 1.0);
    vec2 uv = vec2(fwidth(a) <= fwidth(b) + 1e-5 ? a : b + 0.5, v);
    fragColor = vec4(gradeEarth(texture(uDay, uv).rgb, n), 1.0);
  }
`,Ng=`
  precision highp float;
  uniform vec3 uCam;
  in vec3 vN;
  in vec3 vWorld;
  out vec4 fragColor;
  void main() {
    vec3 n = normalize(vN);
    vec3 V = normalize(uCam - vWorld);
    // Seen from inside the shell, this is brightest right at the planet's edge and gone within a
    // finger's width: a thin line of air, not a glowing halo.
    float glow = pow(clamp(dot(-n, V), 0.0, 1.0), 9.0);
    float height = clamp((length(uCam) - 1.0) / 0.4, 0.0, 1.0);
    fragColor = vec4(vec3(0.3, 0.46, 0.72) * glow * 0.8 * height, glow * height);
  }
`,Pg=`
  in float aSize;
  in vec3 aTint;
  uniform float uPixelRatio;
  out vec3 vTint;
  void main() {
    vTint = aTint;
    gl_PointSize = aSize * uPixelRatio;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Fg=`
  precision highp float;
  in vec3 vTint;
  out vec4 fragColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    fragColor = vec4(vTint * smoothstep(1.0, 0.05, d), 1.0);
  }
`;function Ig(e,t){let n=new jn,r=new ii(new ki(1,128,96),new Ri({glslVersion:ct,vertexShader:Ag,fragmentShader:Mg,side:0,uniforms:{uDay:{value:e},uCam:t.uCam,uKey:t.uKey}}));r.frustumCulled=!1,r.renderOrder=0,n.add(r);let i=new ii(new ki(1.028,128,96),new Ri({glslVersion:ct,vertexShader:Ag,fragmentShader:Ng,side:1,transparent:!0,depthWrite:!1,blending:2,uniforms:{uCam:t.uCam}}));return i.frustumCulled=!1,i.renderOrder=14,n.add(i),{group:n,sphere:r}}function Lg(e){let t=3600,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t*3),a=new Rn,o=42,s=()=>((o=o*16807%2147483647)-1)/2147483646;for(let e=0;e<t;e++){let t=s()*2-1,o=s()*2-1,c=s()*2-1;s()<.5&&(o*=.12*(.4+s()));let l=Math.hypot(t,o,c)||1;t/=l,o/=l,n.set([(t*.82-o*.57)*60,(t*.57+o*.82)*60,c/l*60],e*3);let u=s()**7;r[e]=.5+u*1.9,a.setHSL(s()<.55?.6:.09,.2*s(),.2+u*.55),i.set([a.r,a.g,a.b],e*3)}let c=new Pr;c.setAttribute(`position`,new yr(n,3)),c.setAttribute(`aSize`,new yr(r,1)),c.setAttribute(`aTint`,new yr(i,3));let l=new bi(c,new Ri({glslVersion:ct,vertexShader:Pg,fragmentShader:Fg,transparent:!0,depthWrite:!1,blending:2,uniforms:{uPixelRatio:e.uPixelRatio}}));return l.frustumCulled=!1,l.renderOrder=-1,l}var Rg=1024,zg=`
  uniform highp sampler2D uData;
  const int COLS = ${Rg};
  void readRegion(int id, out vec4 a, out vec4 b) {
    ivec2 c0 = ivec2(id % COLS, (id / COLS) * 2);
    a = texelFetch(uData, c0, 0);
    b = texelFetch(uData, c0 + ivec2(0, 1), 0);
  }
`,Bg=`
  uniform vec3 uWaveCenter;
  uniform float uWaveR, uWaveSoft;
  // How much of the circle has reached this point, and how close it is to the moving edge.
  void waveAt(vec3 n, out float mask, out float front) {
    float d = acos(clamp(dot(n, uWaveCenter), -1.0, 1.0));
    mask = 1.0 - smoothstep(uWaveR - uWaveSoft, uWaveR, d);
    float e = (d - (uWaveR - uWaveSoft * 0.4)) / (uWaveSoft * 0.55);
    front = exp(-e * e);
  }
`,Vg=`
  ${zg}
  uniform float uFade;
  in float aRegion;
  out vec3 vN;
  out vec3 vColor;
  out float vAlpha, vGlow, vPulse, vWave, vSeed;
  void main() {
    int id = int(aRegion + 0.5);
    vec4 a, b;
    readRegion(id, a, b);
    vAlpha = a.a * uFade;
    vColor = a.rgb;
    vGlow = b.r * uFade;
    vPulse = b.g;
    vWave = b.a;
    vSeed = float(id) * 0.37;
    vN = normalize(position);
    bool hide = vAlpha < 0.002 && vGlow < 0.002;
    gl_Position = hide ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * modelViewMatrix * vec4(vN, 1.0);
  }
`,Hg=`
  precision highp float;
  uniform float uTime;
  ${Bg}
  in vec3 vN;
  in vec3 vColor;
  in float vAlpha, vGlow, vPulse, vWave, vSeed;
  out vec4 fragColor;
  void main() {
    float mask, front;
    waveAt(normalize(vN), mask, front);
    float reveal = mix(1.0, mask, vWave);
    // Live races breathe very slightly. Enough to notice, not enough to nag.
    float beat = 0.5 + 0.5 * sin(uTime * 1.25 + vSeed);
    float a = vAlpha * reveal * (1.0 + vPulse * (0.4 * beat - 0.1));
    a += vGlow * 0.1 * reveal;
    a += vWave * front * 0.14 * step(0.002, vAlpha);
    vec3 col = mix(vColor, vec3(1.0), vWave * front * 0.35);
    fragColor = vec4(col, clamp(a, 0.0, 0.7));
  }
`,Ug=`
  in float aRegion;
  flat out int vId;
  void main() {
    vId = int(aRegion + 0.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(normalize(position), 1.0);
  }
`,Wg=`
  precision highp float;
  flat in int vId;
  out vec4 fragColor;
  void main() {
    fragColor = vec4(float((vId + 1) & 255) / 255.0, float(((vId + 1) >> 8) & 255) / 255.0, 1.0, 1.0);
  }
`,Gg=`
  ${zg}
  uniform vec2 uRes;
  uniform vec3 uCam, uView;
  uniform float uWidth, uHair, uSpot, uPixelRatio;
  in vec3 iA;
  in vec3 iB;
  in vec2 iR;
  out float vStrength, vHot, vWave, vPx, vCore, vOuter;
  out vec3 vN;
  out vec3 vTint;
  void main() {
    vec4 a0, b0, a1, b1;
    readRegion(int(iR.x + 0.5), a0, b0);
    readRegion(int(iR.y + 0.5), a1, b1);
    vHot = max(b0.r, b1.r);
    vStrength = max(b0.b, b1.b);
    vWave = max(b0.a * b0.b, b1.a * b1.b);
    // A focused border carries a little of its region's color, so it belongs to the land it surrounds.
    vTint = mix(vec3(1.0), b0.b >= b1.b ? a0.rgb : a1.rgb, 0.3);
    vec3 pa = normalize(iA);
    vec3 pb = normalize(iB);
    vN = pa;
    // Hairline context borders exist only around the middle of the view, thinning away to nothing.
    float spot = 1.0 - smoothstep(uSpot * 0.55, uSpot * 1.2, acos(clamp(dot(pa, uView), -1.0, 1.0)));
    float hair = uHair * spot;
    vec4 ca = projectionMatrix * modelViewMatrix * vec4(pa, 1.0);
    vec4 cb = projectionMatrix * modelViewMatrix * vec4(pb, 1.0);
    // Nothing here tests depth, so borders on the far side have to be dropped by hand. A point on a
    // unit sphere faces the camera exactly when its dot product with the camera position exceeds 1.
    bool behind = dot(pa, uCam) < 1.0 || dot(pb, uCam) < 1.0;
    if (behind || (vStrength < 0.004 && vHot < 0.004 && hair < 0.004) || ca.w < 0.0005 || cb.w < 0.0005) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    bool focused = vStrength > 0.2 || vHot > 0.02;
    vStrength = max(vStrength, hair);
    vec2 sa = ca.xy / ca.w * uRes * 0.5;
    vec2 sb = cb.xy / cb.w * uRes * 0.5;
    vec2 dir = sb - sa;
    float len = length(dir);
    dir = len > 1e-4 ? dir / len : vec2(1.0, 0.0);
    vec2 nrm = vec2(-dir.y, dir.x);
    vec4 c = position.x < 0.5 ? ca : cb;
    // The quad is wider than the visible line: the outer part carries a soft falloff, which is what
    // makes this read as a fine, anti-aliased line with a faint glow instead of a jagged strip.
    vCore = uWidth * uPixelRatio;
    vOuter = vCore + (focused ? 2.6 : 1.0) * uPixelRatio;
    vPx = position.y * vOuter;
    // Square caps overlap each segment with the next, which closes the gaps at every corner.
    vec2 along = dir * (position.x < 0.5 ? -1.0 : 1.0) * vCore;
    c.xy += (nrm * vPx + along) / uRes * 2.0 * c.w;
    gl_Position = c;
  }
`,Kg=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;
  ${Bg}
  in float vStrength, vHot, vWave, vPx, vCore, vOuter;
  in vec3 vN;
  in vec3 vTint;
  out vec4 fragColor;
  void main() {
    float mask, front;
    waveAt(normalize(vN), mask, front);
    float waving = step(0.01, vWave);
    float reveal = mix(1.0, mask, waving);
    float d = abs(vPx);
    float core = 1.0 - smoothstep(vCore - 0.5, vCore + 0.6, d);
    float t = clamp((d - vCore) / max(vOuter - vCore, 0.001), 0.0, 1.0);
    float glow = (1.0 - t) * (1.0 - t) * 0.16 * min(1.0, vStrength + vHot);
    float strength = uOpacity * vStrength + vHot * 0.3;
    float a = (core * strength + glow) * reveal + waving * front * 0.12 * core;
    fragColor = vec4(uColor * vTint, clamp(a, 0.0, 0.85));
  }
`,qg=class{meta;mesh;pickMesh;lines;data;tex;dirty=!0;target;current;active=new Set;material;lineMaterial;byKey=new Map;waveUniforms;constructor(e,t,n,r,i){this.meta=n,n.forEach((e,t)=>this.byKey.set(e.k,t));let a=new Uint32Array(t,0,5);if(a[0]!==1112491335)throw Error(`bad mesh file: ${e}`);let[o,s,c,l]=[a[1],a[2],a[3],a[4]],u=20,d=new Int16Array(t,u,o*3);u+=o*6;let f=new Uint16Array(t,u,o);u+=o*2,u+=o,u+=(4-u%4)%4;let p=new Uint32Array(t,u,s);u+=s*4;let m=new Int16Array(t,u,c*6);u+=c*12;let h=new Uint16Array(t,u,c*2),g=Math.ceil(l/Rg)*2||2;this.data=new Uint8Array(Rg*g*4),this.tex=new si(this.data,Rg,g,ce,O),this.tex.minFilter=this.tex.magFilter=S,this.tex.needsUpdate=!0,this.target=new Float32Array(l*8),this.current=new Float32Array(l*8),this.waveUniforms={uWaveCenter:{value:new H(0,0,1)},uWaveR:{value:7},uWaveSoft:{value:.08}};let _=new Pr;_.setAttribute(`position`,new yr(d,3,!0)),_.setAttribute(`aRegion`,new yr(f,1)),_.setIndex(new yr(p,1));let v={value:this.tex},y={value:1};this.material=new Ri({glslVersion:ct,vertexShader:Vg,fragmentShader:Hg,uniforms:{uData:v,uFade:y,uTime:r.uTime,...this.waveUniforms},side:0,transparent:!0,depthTest:!1,depthWrite:!1,blending:1}),this.mesh=new ii(_,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i.renderOrder,this.pickMesh=new ii(_,new Ri({glslVersion:ct,vertexShader:Ug,fragmentShader:Wg,side:2,blending:0})),this.pickMesh.frustumCulled=!1,this.pickMesh.visible=!1;let b=new wa;b.setAttribute(`position`,new yr(new Float32Array([0,-1,0,1,-1,0,1,1,0,0,1,0]),3)),b.setIndex([0,1,2,0,2,3]);let x=new Int16Array(c*3),C=new Int16Array(c*3);for(let e=0;e<c;e++)x[e*3]=m[e*6],x[e*3+1]=m[e*6+1],x[e*3+2]=m[e*6+2],C[e*3]=m[e*6+3],C[e*3+1]=m[e*6+4],C[e*3+2]=m[e*6+5];b.setAttribute(`iA`,new ci(x,3,!0)),b.setAttribute(`iB`,new ci(C,3,!0)),b.setAttribute(`iR`,new ci(h,2)),b.instanceCount=c,this.lineMaterial=new Ri({glslVersion:ct,vertexShader:Gg,fragmentShader:Kg,uniforms:{uData:v,uRes:{value:new Mt(1,1)},uWidth:{value:i.lineWidth},uCam:r.uCam,uView:r.uView,uSpot:r.uSpot,uHair:{value:i.hair},uPixelRatio:r.uPixelRatio,uColor:{value:i.lineColor},uOpacity:{value:i.lineOpacity},...this.waveUniforms},transparent:!0,depthTest:!1,depthWrite:!1}),this.lines=new ii(b,this.lineMaterial),this.lines.frustumCulled=!1,this.lines.renderOrder=i.renderOrder+1}set(e,t,n,r,i,a,o,s=0){let c=this.target,l=e*8;(c[l]!==t||c[l+1]!==n||c[l+2]!==r||c[l+3]!==i||c[l+5]!==a||c[l+6]!==o||c[l+7]!==s)&&(this.current[l+3]<.01&&(this.current[l]=t,this.current[l+1]=n,this.current[l+2]=r),c[l]=t,c[l+1]=n,c[l+2]=r,c[l+3]=i,c[l+5]=a,c[l+6]=o,c[l+7]=s,this.current[l+7]=s,this.active.add(e))}clear(e){let t=e*8;this.target[t+3]=0,this.target[t+5]=0,this.target[t+6]=0,this.target[t+7]=0,this.current[t+7]=0,this.active.add(e)}setGlow(e,t){e<0||e>=this.meta.length||(this.target[e*8+4]=t,this.active.add(e))}setWave(e,t,n){this.waveUniforms.uWaveCenter.value.copy(e),this.waveUniforms.uWaveR.value=t,this.waveUniforms.uWaveSoft.value=n}setWaveRadius(e){this.waveUniforms.uWaveR.value=e}snap(){this.current.set(this.target);for(let e=0;e<this.meta.length;e++)this.writeRegion(e);this.active.clear(),this.dirty=!0}writeRegion(e){let t=this.current,n=this.data,r=e*8,i=e%Rg,a=Math.floor(e/Rg)*2,o=(a*Rg+i)*4,s=((a+1)*Rg+i)*4;n[o]=t[r]*255,n[o+1]=t[r+1]*255,n[o+2]=t[r+2]*255,n[o+3]=t[r+3]*255,n[s]=t[r+4]*255,n[s+1]=t[r+5]*255,n[s+2]=t[r+6]*255,n[s+3]=t[r+7]*255}update(e){if(this.active.size){let t=1-Math.exp(-e*7);for(let e of this.active){let n=e*8,r=!0;for(let e=0;e<8;e++){let i=this.target[n+e]-this.current[n+e];Math.abs(i)>.002?(this.current[n+e]+=i*t,r=!1):this.current[n+e]=this.target[n+e]}this.writeRegion(e),r&&this.active.delete(e)}this.dirty=!0}this.dirty&&=(this.tex.needsUpdate=!0,!1)}setResolution(e,t){this.lineMaterial.uniforms.uRes.value.set(e,t)}},Jg=`
  uniform vec4 uBounds; // x0, y0, x1, y1 in Mercator space, 0-1
  out vec2 vUv;
  out vec3 vN;
  const float PI = 3.14159265359;
  void main() {
    vUv = uv;
    float mx = mix(uBounds.x, uBounds.z, uv.x);
    float my = mix(uBounds.y, uBounds.w, 1.0 - uv.y);
    float lon = (mx - 0.5) * 2.0 * PI;
    float lat = 2.0 * atan(exp(PI * (1.0 - 2.0 * my))) - PI / 2.0;
    vec3 p = vec3(cos(lat) * sin(lon), sin(lat), cos(lat) * cos(lon));
    vN = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }
`,Yg=`
  precision highp float;
  uniform sampler2D uMap;
  uniform float uOpacity;
  ${jg}
  in vec2 vUv;
  in vec3 vN;
  out vec4 fragColor;
  void main() {
    vec3 n = normalize(vN);
    // Mercator stops short of the poles. Feathering the last degree hides the join with the base sphere.
    float polar = 1.0 - smoothstep(0.9955, 0.9968, abs(n.y));
    fragColor = vec4(gradeEarth(texture(uMap, vUv).rgb, n), uOpacity * polar);
  }
`,Xg=Math.PI,Zg=e=>2*Math.atan(Math.exp(Xg*(1-2*e)))-Xg/2;function Qg(e,t,n){let r=(e-.5)*2*Xg,i=Zg(t);return n.set(Math.cos(i)*Math.sin(r),Math.sin(i),Math.cos(i)*Math.cos(r))}var $g=new Di(1,1,28,28);$g.translate(.5,.5,0);var e_=new Di(1,1,6,6);e_.translate(.5,.5,0);var t_=3,n_=10,r_=class{scene;renderer;shared;opts;opacity=1;tiles=new Map;inFlight=0;queue=[];decoded=[];frame=0;frustum=new fi;vp=new nn;tmpA=new H;tmpB=new H;tmpC=new H;sphere=new Er;drawn=new Set;wanted=[];lastCam=new H(1e9,0,0);lastAlt=-1;needsSelect=!0;view=new H;stats={drawn:0,loaded:0,loading:0,deepest:0};constructor(e,t,n,r){if(this.scene=e,this.renderer=t,this.shared=n,this.opts=r,r.pinZ!==void 0)for(let e=r.minZ;e<=r.pinZ;e++){let t=1<<e;for(let n=0;n<t;n++)for(let r=0;r<t;r++)this.request(this.tile(e,n,r))}}tile(e,t,n){let r=`${e}/${t}/${n}`,i=this.tiles.get(r);if(!i){let a=1<<e;i={key:r,z:e,x:t,y:n,state:`idle`,opacity:0,lastSeen:0,retryAt:0,mid:Qg((t+.5)/a,(n+.5)/a,new H)},this.tiles.set(r,i)}return i}parent(e){return e.z<=this.opts.minZ?null:this.tile(e.z-1,e.x>>1,e.y>>1)}request(e){(e.state===`idle`||e.state===`failed`&&performance.now()>e.retryAt)&&(e.state=`queued`,this.queue.push(e))}isPinned(e){return this.opts.pinZ!==void 0&&e.z<=this.opts.pinZ}pump(){if(this.queue.length)for(this.queue=this.queue.filter(e=>!this.isPinned(e)&&this.frame-e.lastSeen>40?(e.state=`idle`,!1):!0),this.queue.sort((e,t)=>Number(this.isPinned(t))-Number(this.isPinned(e))||(e.z-t.z)*.6+(t.mid.dot(this.view)-e.mid.dot(this.view)));this.inFlight<n_&&this.queue.length;){let e=this.queue.shift();e.state=`loading`,this.inFlight++,this.load(e)}}async load(e){try{let t=await fetch(this.opts.url(e.z,e.x,e.y));if(!t.ok)throw Error(String(t.status));let n=await t.blob();e.bitmap=await createImageBitmap(n,{imageOrientation:`flipY`,colorSpaceConversion:`none`,premultiplyAlpha:`none`}),e.state=`decoded`,this.decoded.push(e)}catch{e.state=`failed`,e.retryAt=performance.now()+2e4}finally{this.inFlight--}}upload(){let e=t_;for(this.decoded.length>e&&this.decoded.sort((e,t)=>t.mid.dot(this.view)-e.mid.dot(this.view));e-->0&&this.decoded.length;){let e=this.decoded.shift(),t=new Xt(e.bitmap);t.flipY=!1,t.colorSpace=``,t.wrapS=t.wrapT=b,t.minFilter=D,t.magFilter=T,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.needsUpdate=!0,this.renderer.initTexture(t),e.texture=t,e.mesh=this.makeMesh(e,t),this.scene.add(e.mesh),e.state=`ready`,e.bitmap?.close(),e.bitmap=void 0,this.needsSelect=!0}}makeMesh(e,t){let n=1<<e.z,r=8e-4/n,i=new Ri({glslVersion:ct,vertexShader:Jg,fragmentShader:Yg,uniforms:{uMap:{value:t},uBounds:{value:new Zt(e.x/n-r,e.y/n-r,(e.x+1)/n+r,(e.y+1)/n+r)},uOpacity:{value:0},uCam:this.shared.uCam,uKey:this.shared.uKey},transparent:!0,depthTest:!1,depthWrite:!1,side:0}),a=new ii(e.z<=5?$g:e_,i);return a.frustumCulled=!1,a.renderOrder=this.opts.renderOrder+e.z*.01,a.visible=!1,a}evict(){let e=[...this.tiles.values()].filter(e=>e.state===`ready`&&!this.isPinned(e));if(!(e.length<=this.opts.maxCached)){e.sort((e,t)=>e.lastSeen-t.lastSeen);for(let t of e.slice(0,e.length-this.opts.maxCached))this.frame-t.lastSeen<8||(t.mesh&&(this.scene.remove(t.mesh),t.mesh.material.dispose()),t.texture?.dispose(),t.mesh=void 0,t.texture=void 0,t.state=`idle`,t.opacity=0)}}select(e,t){this.wanted.length=0,this.vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.vp);let n=e.position,r=n.length();this.view.copy(n).divideScalar(r);let i=1/r,a=t/(2*Math.tan(e.fov*Xg/360)),o=(e,t,s)=>{let c=1<<e,[l,u,d,f]=[t/c,s/c,(t+1)/c,(s+1)/c],p=Qg((l+d)/2,(u+f)/2,this.tmpA),m=0;for(let[e,t]of[[l,u],[d,u],[l,f],[d,f]])m=Math.max(m,Qg(e,t,this.tmpB).distanceTo(p));if(e>=2&&(p.dot(this.view)<i-Math.min(m*1.1,1.2)||(this.sphere.center.copy(p),this.sphere.radius=m,!this.frustum.intersectsSphere(this.sphere))))return;let h=Math.max(n.distanceTo(p)-m*.7,r-1,4e-4),g=m*1.41/h*a;if(e<this.opts.minZ||e<this.opts.maxZ&&g>this.opts.splitAt){let[n,r]=[t*2,s*2];o(e+1,n,r),o(e+1,n+1,r),o(e+1,n,r+1),o(e+1,n+1,r+1)}else this.wanted.push(this.tile(e,t,s))};o(0,0,0),this.tmpC.copy(n)}hideAll(){for(let e of this.drawn)e.mesh&&(e.mesh.visible=!1);this.drawn.clear(),this.stats.drawn=0}update(e,t,n){if(this.frame++,this.upload(),this.pump(),this.opacity<=.003){this.drawn.size&&this.hideAll();return}let r=e.position.length()-1;if(e.position.distanceToSquared(this.lastCam)>(r*.004)**2||Math.abs(r-this.lastAlt)>r*.004||this.needsSelect||this.frame%30==0){e.updateMatrixWorld(),this.select(e,t),this.lastCam.copy(e.position),this.lastAlt=r,this.needsSelect=!1;let n=new Set;for(let e of this.wanted){e.lastSeen=this.frame,this.request(e);let t=e;for(;t&&(t.lastSeen=this.frame,!(t.state===`ready`&&(n.add(t),t.opacity>=1)));)t=this.parent(t);let r=this.parent(e);r&&this.request(r)}for(let e of this.drawn)!n.has(e)&&e.mesh&&(e.mesh.visible=!1);this.drawn=n,this.evict()}else for(let e of this.drawn)e.lastSeen=this.frame;let i=0;for(let e of this.drawn){if(!e.mesh)continue;e.mesh.visible=!0,e.opacity<1&&(e.opacity=Math.min(1,e.opacity+n*3.4),e.opacity>=1&&(this.needsSelect=!0));let t=e.opacity*e.opacity*(3-2*e.opacity);e.mesh.material.uniforms.uOpacity.value=t*this.opacity,i=Math.max(i,e.z)}this.stats.drawn=this.drawn.size,this.stats.deepest=i,this.stats.loading=this.inFlight+this.queue.length+this.decoded.length}},i_=[`countries`,`admin1`,`uscd`,`uscounty`],a_=new H(1,1,1),o_={countries:{lineWidth:.7,lineColor:a_,lineOpacity:.55,hair:.2,renderOrder:4},admin1:{lineWidth:.55,lineColor:a_,lineOpacity:.45,hair:0,renderOrder:5},uscd:{lineWidth:.6,lineColor:a_,lineOpacity:.55,hair:0,renderOrder:6},uscounty:{lineWidth:.4,lineColor:a_,lineOpacity:.3,hair:0,renderOrder:7}},s_=class{scene=new Bn;renderer;cam;shared;layers={};usStateIndex=new Map;size={w:1,h:1};pixelRatio=1;time=0;imagery;detail;lastFrame=performance.now();pickTarget;pickScene=new Bn;frameHooks=[];fpsSamples=[];qualityCooldown=0;fps=60;loader=new ma;constructor(e){let t=Math.min(window.innerWidth,window.innerHeight)<600;this.renderer=new el({canvas:e,antialias:!t,powerPreference:`high-performance`,stencil:!1}),this.renderer.toneMapping=0,this.renderer.outputColorSpace=tt,this.renderer.setClearColor(new Rn(0)),this.pixelRatio=Math.min(window.devicePixelRatio||1,t?1.75:2),this.renderer.setPixelRatio(this.pixelRatio),this.cam=new kg(e),this.shared={uTime:{value:0},uCam:{value:new H},uPixelRatio:{value:this.pixelRatio},uKey:{value:new H(0,0,1)},uView:{value:new H(0,0,1)},uSpot:{value:1}},this.pickTarget=new $t(4,1,{format:ce,type:O,minFilter:S,magFilter:S}),this.pickScene.add(new ii(new ki(.9985,64,48),new Kr({color:0}))),window.addEventListener(`resize`,()=>this.resize()),this.resize()}loadTexture(e){return new Promise((t,n)=>{this.loader.load(e,e=>{e.colorSpace=``,e.wrapS=y,e.wrapT=b,e.minFilter=D,e.magFilter=T,e.anisotropy=4,t(e)},void 0,n)})}async init(e){e(`Loading the planet`,.05);let t=await this.loadTexture(p(`data/earth/day-2k.jpg`));this.scene.add(Ig(t,this.shared).group),this.scene.add(Lg(this.shared)),this.imagery=new r_(this.scene,this.renderer,this.shared,{name:`bluemarble`,url:g,minZ:2,maxZ:7,splitAt:300,renderOrder:1,maxCached:300,pinZ:3}),this.detail=new r_(this.scene,this.renderer,this.shared,{name:`sentinel`,url:_,minZ:7,maxZ:15,splitAt:300,renderOrder:2,maxCached:320}),e(`Drawing borders`,.55),await this.loadMesh(`countries`)}async loadDetailLayers(){await this.loadMesh(`admin1`),this.layers.admin1.meta.forEach((e,t)=>{e.x?.cc===`USA`&&typeof e.x.iso==`string`&&this.usStateIndex.set(e.x.iso.replace(`US-`,``),t)})}closeUpAsked=!1;async loadCloseUpLayers(){return!this.closeUpAsked&&(this.closeUpAsked=!0,await Promise.all([this.loadMesh(`uscd`),this.loadMesh(`uscounty`)]),!0)}async loadMesh(e){if(this.layers[e])return this.layers[e];let[t,n]=await Promise.all([fetch(p(`data/geo/${e}.bin`)).then(t=>{if(!t.ok)throw Error(`mesh ${e}: HTTP ${t.status}`);return t.arrayBuffer()}),fetch(p(`data/geo/${e}.json`)).then(e=>e.json())]),r=new qg(e,t,n,this.shared,o_[e]);return r.setResolution(this.size.w*this.pixelRatio,this.size.h*this.pixelRatio),this.layers[e]=r,this.scene.add(r.mesh),this.scene.add(r.lines),this.pickScene.add(r.pickMesh),r}onFrame(e){this.frameHooks.push(e)}resize(){let e=window.innerWidth,t=window.innerHeight;this.size={w:e,h:t},this.renderer.setSize(e,t,!1),this.cam.resize(e,t);for(let n of Object.values(this.layers))n?.setResolution(e*this.pixelRatio,t*this.pixelRatio);this.shared.uPixelRatio.value=this.pixelRatio,this.resizeHook?.(e*this.pixelRatio,t*this.pixelRatio)}resizeHook=null;async pickAll(e,t){let n=this.cam.camera,r=this.pixelRatio,i={countries:null,admin1:null,uscd:null,uscounty:null},a=this.renderer.getRenderTarget();n.setViewOffset(this.size.w*r,this.size.h*r,(e+this.cam.shiftX.value)*r,(t+this.cam.shiftY.value)*r,1,1),this.renderer.setClearColor(0,0),i_.forEach((e,t)=>{let r=this.layers[e];r&&(this.pickTarget.viewport.set(t,0,1,1),this.pickTarget.scissor.set(t,0,1,1),this.pickTarget.scissorTest=!0,r.pickMesh.visible=!0,this.renderer.setRenderTarget(this.pickTarget),this.renderer.clear(),this.renderer.render(this.pickScene,n),r.pickMesh.visible=!1)}),this.renderer.setRenderTarget(a),this.renderer.setClearColor(new Rn(0),1),n.clearViewOffset(),this.cam.applyShift();let o=new Uint8Array(16);return await this.renderer.readRenderTargetPixelsAsync(this.pickTarget,0,0,4,1,o),i_.forEach((e,t)=>{if(!o[t*4+2])return;let n=(o[t*4]|o[t*4+1]<<8)-1;n>=0&&(i[e]=n)}),i}projected=new H;project(e){let t=this.cam.camera.position;return e.dot(t)/e.length()<1.002||(this.projected.copy(e).project(this.cam.camera),this.projected.z>1)?null:{x:(this.projected.x+1)/2*this.size.w,y:(1-this.projected.y)/2*this.size.h}}start(){let e=()=>{requestAnimationFrame(e);let t=performance.now(),n=Math.min(.1,(t-this.lastFrame)/1e3);this.lastFrame=t,this.time+=n,this.trackFps(n),this.shared.uTime.value=this.time,this.cam.update(n),this.shared.uCam.value.copy(this.cam.camera.position),this.updateLighting();let r=El((.62-this.cam.alt)/.3,0,1);this.detail.opacity=r*r*(3-2*r),this.imagery.update(this.cam.camera,this.size.h,n),this.detail.update(this.cam.camera,this.size.h,n);for(let e of Object.values(this.layers))e?.update(n);for(let e of this.frameHooks)e(n,this.time);this.renderer.render(this.scene,this.cam.camera)};requestAnimationFrame(e)}key=new H;right=new H;updateLighting(){let e=this.cam,t=this.shared.uView.value;wl(e.lon,e.lat,1,t),this.shared.uSpot.value=e.viewAngle();let n=this.shared.uCam.value.clone().normalize();this.right.crossVectors(e.camera.up,n).normalize(),this.key.copy(n).addScaledVector(e.camera.up,.55).addScaledVector(this.right,-.45).normalize(),this.shared.uKey.value.copy(this.key)}trackFps(e){if(this.fpsSamples.push(e),this.fpsSamples.length<60)return;let t=this.fpsSamples.reduce((e,t)=>e+t,0)/this.fpsSamples.length;this.fpsSamples.length=0,this.fps=1/t,this.qualityCooldown=Math.max(0,this.qualityCooldown-1),this.fps<42&&this.pixelRatio>1&&this.qualityCooldown===0&&(this.pixelRatio=El(this.pixelRatio-.25,1,2),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.qualityCooldown=2)}},c_=Math.min(window.innerWidth,window.innerHeight)<600?26:72,l_=6.2,u_=16,d_=class{root;globe;specs=[];slots=[];tmp=new H;viewDir=new H;lastChoose=0;bySpec=new Map;nearby=null;skip=null;constructor(e,t){this.root=e,this.globe=t;for(let t=0;t<c_;t++){let t=document.createElement(`div`);t.className=`glabel`,e.appendChild(t),this.slots.push({el:t,spec:null,spot:0,dy:0,shown:0,wroteAt:``,wroteOpacity:``})}}setSpecs(e){for(let t of e)t.pos=wl(t.lon,t.lat,1);this.specs=e.sort((e,t)=>t.priority-e.priority),this.lastChoose=0}choose(){let e=this.globe.cam.alt,t=this.globe.cam.camera.position,n=wl(this.globe.cam.lon,this.globe.cam.lat,1,this.viewDir),r=this.globe.cam.viewAngle(),{w:i,h:a}=this.globe.size,o=[],s=new Map;for(let c of this.specs){if(s.size>=c_)break;if(e>c.maxAlt||c.minAlt!==void 0&&e<c.minAlt||this.skip?.(c.id))continue;let l=c.pos;if(l.dot(t)<1.015)continue;let u=Math.acos(Math.min(1,l.dot(n))),d=1-Math.min(1,Math.max(0,(u-r*.62)/(r*.5)));if(d<=.02)continue;let f=this.tmp.copy(l).project(this.globe.cam.camera),p=(f.x+1)/2*i,m=(1-f.y)/2*a;if(p<-40||p>i+40||m<0||m>a)continue;let h=c.text.length*l_+12,g=this.nearby?.(p,m,h/2),_=g?g.y+g.r+u_/2+1-m:0,v={x0:p-h/2,x1:p+h/2,y0:m+_-u_/2,y1:m+_+u_/2};o.some(e=>v.x0<e.x1&&v.x1>e.x0&&v.y0<e.y1&&v.y1>e.y0)||(o.push(v),s.set(c,{spot:d,dy:_}))}for(let e of this.slots)e.spec&&!s.has(e.spec)&&(this.bySpec.delete(e.spec),e.spec=null,e.el.style.opacity=`0`,e.wroteOpacity=`0`);let c=this.slots.filter(e=>!e.spec);for(let[e,{spot:t,dy:n}]of s){let r=this.bySpec.get(e);if(r){r.spot=t,r.dy=n;continue}let i=c.shift();if(!i)break;i.spec=e,i.spot=t,i.dy=n,i.shown=n,i.el.textContent=e.text,i.el.className=`glabel ${e.cls??``}`,this.bySpec.set(e,i)}}update(){let e=performance.now();e-this.lastChoose>170&&(this.lastChoose=e,this.choose());let t=this.globe.cam.camera.position,{w:n,h:r}=this.globe.size;for(let e of this.slots){if(!e.spec)continue;let i=e.spec.pos,a=i.dot(t),o=this.tmp.copy(i).project(this.globe.cam.camera),s=(o.x+1)/2*n,c=(1-o.y)/2*r;e.shown+=(e.dy-e.shown)*.16;let l=`translate3d(${s.toFixed(1)}px, ${(c+e.shown).toFixed(1)}px, 0) translate(-50%, -50%)`;l!==e.wroteAt&&(e.el.style.transform=l,e.wroteAt=l);let u=(Math.max(0,Math.min(1,(a-1.015)*12))*e.spot).toFixed(2);u!==e.wroteOpacity&&(e.el.style.opacity=u,e.wroteOpacity=u)}}},f_=720,p_=class{globe;el=document.createElement(`div`);inner=document.createElement(`div`);content=document.createElement(`div`);anchorDot=document.createElement(`div`);tail=document.createElement(`div`);anchor=new H;visible=!1;key=``;x=new du(0,.5,.92);y=new du(0,.5,.92);scale=new du(.88,.38,.72);opacity=new du(0,.28,1);placed=!1;hideTimer=0;bw=0;bh=0;reduced=mu();constructor(e){this.globe=e,this.el.className=`bubble`,this.inner.className=`glass bubble-inner`,this.content.className=`bubble-content`,this.inner.appendChild(this.content),this.el.appendChild(this.inner),this.anchorDot.className=`bubble-anchor`,this.tail.className=`bubble-tail`,document.body.append(this.tail,this.anchorDot,this.el)}get compact(){return this.globe.size.w<f_}stagger(){Array.from(this.content.children).forEach((e,t)=>{e.style.setProperty(`--i`,String(Math.min(t,8)))}),this.content.classList.remove(`in`),this.content.offsetWidth,this.content.classList.add(`in`)}show(e,t,n,r){if(window.clearTimeout(this.hideTimer),wl(n,r,1,this.anchor),e!==this.key){let n=this.visible?this.inner.offsetHeight:0;if(this.content.innerHTML=t,this.content.dataset.html=t,this.key=e,this.stagger(),n&&!this.reduced){let e=this.inner.offsetHeight;Math.abs(n-e)>1&&this.inner.animate([{height:`${n}px`},{height:`${e}px`}],{duration:300,easing:`cubic-bezier(0.22, 1, 0.36, 1)`})}}else this.content.dataset.html!==t&&(this.content.innerHTML=t,this.content.dataset.html=t);this.bw=this.el.offsetWidth,this.bh=this.el.offsetHeight,this.visible||(this.visible=!0,this.placed=!1,this.scale.target=1,this.opacity.target=1,this.anchorDot.classList.add(`on`),this.tail.classList.add(`on`))}hide(e=140){window.clearTimeout(this.hideTimer),this.hideTimer=window.setTimeout(()=>{this.visible=!1,this.key=``,this.scale.target=.94,this.opacity.target=0,this.anchorDot.classList.remove(`on`),this.tail.classList.remove(`on`)},e)}update(e){this.scale.step(e),this.opacity.step(e);let t=Math.max(0,Math.min(1,this.opacity.value));if(this.el.style.opacity=t.toFixed(3),this.el.style.visibility=t<.004?`hidden`:`visible`,t<.004&&!this.visible)return;let{w:n,h:r}=this.globe.size,i=this.globe.project(this.anchor);!i&&this.visible&&this.hide(0);let a=this.compact,o,s;if(a)o=(n-this.bw)/2,s=r-this.bh-14-50;else{let e=i?.x??n/2,t=i?.y??r/2,a=Math.max(56,Math.min(n,r)*.09);o=e+a+this.bw+14<n?e+a:e-a-this.bw,s=t-this.bh*.55,o=Math.max(14,Math.min(n-this.bw-14,o)),s=Math.max(66,Math.min(r-this.bh-66,s))}this.placed||=(this.x.snap(o),this.y.snap(s+(a?22:14)),!0),this.x.target=o,this.y.target=s,this.x.step(e),this.y.step(e);let c=this.scale.value;if(this.el.style.transform=`translate3d(${this.x.value.toFixed(2)}px, ${this.y.value.toFixed(2)}px, 0) scale(${c.toFixed(4)})`,i&&!a){this.anchorDot.style.transform=`translate3d(${i.x.toFixed(1)}px, ${i.y.toFixed(1)}px, 0)`;let e=this.x.value,t=this.y.value,n=e>i.x?e:e+this.bw,r=Math.max(t+20,Math.min(t+this.bh-20,i.y)),a=n-i.x,o=r-i.y;this.tail.style.width=`${Math.max(0,Math.hypot(a,o)).toFixed(1)}px`,this.tail.style.transform=`translate3d(${i.x.toFixed(1)}px, ${i.y.toFixed(1)}px, 0) rotate(${Math.atan2(o,a)}rad)`}else this.anchorDot.classList.remove(`on`),this.tail.classList.remove(`on`)}get isVisible(){return this.visible}get dockedHeight(){return this.visible&&this.compact?this.bh+50:0}},m_={0:`Bring A Country To The Middle And Zoom In`,1:`Keep Zooming For Its Regions`,2:`Regions. In The US, Keep Zooming For Districts`,3:`Districts And Counties`},h_=class{globe;flow;actions;searchIndex=[];commits=null;tab=`now`;lens=`power`;overview=!1;constructor(e,t,n){this.globe=e,this.flow=t,this.actions=n}mount(){document.getElementById(`app`).innerHTML=`
      <header id="top-left" class="glass pill-row">
        <svg class="brand-mark" viewBox="0 0 64 64" width="24" height="24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round"><path d="M19 27V56" stroke-width="6"/><circle cx="36.500" cy="27" r="17.500" stroke-width="6"/><ellipse cx="36.500" cy="27" rx="7.500" ry="17.500" stroke-width="2" opacity="0.6"/><path d="M19 27h35" stroke-width="2" opacity="0.6"/></g><circle cx="36.500" cy="27" r="5.500" fill="#ffd166"/></svg>
        <b>Politiview</b><span id="crumb"></span>
      </header>
      <button id="catch-me-up" class="glass pill">Catch Me Up</button>
      <div id="top-right">
        <button class="glass round" id="open-search" title="Search (press /)" aria-label="Search"><svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
        <button class="glass round" id="open-dictionary" title="The Dictionary" aria-label="The Dictionary" aria-haspopup="dialog"><svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><path d="M10 5.200C8.500 3.800 6 3.300 2.800 3.500v12c3.200-.2 5.700.3 7.200 1.700 1.500-1.400 4-1.900 7.200-1.700v-12C14 3.300 11.500 3.800 10 5.200zM10 5.200v12" fill="none" stroke="currentColor" stroke-width="1.700" stroke-linejoin="round"/></svg></button>
        <button class="glass pill" id="open-desk" aria-haspopup="dialog"><svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M2 3h9v10H3.500A1.500 1.500 0 0 1 2 11.500zM11 6h3v5.500a1.500 1.500 0 0 1-3 0zM4 5.500h5M4 8h5M4 10.500h3" fill="none" stroke="currentColor" stroke-width="1.300" stroke-linecap="round" stroke-linejoin="round"/></svg><span>News</span></button>
        <button class="glass pill" id="open-elections" aria-haspopup="true"><i class="live-dot"></i><span id="elections-label">Elections</span></button>
        <button class="glass round" id="open-help" title="How It Works" aria-label="How It Works"><b class="help-mark">?</b></button>
        <button class="glass round" id="pause-motion" title="Stop All Movement" aria-label="Stop All Movement" aria-pressed="false"><svg class="when-moving" viewBox="0 0 20 20" width="13" height="13" aria-hidden="true"><path d="M5 3h3.500v14H5zM11.500 3H15v14h-3.500z" fill="currentColor"/></svg><svg class="when-still" viewBox="0 0 20 20" width="13" height="13" aria-hidden="true"><path d="M5 3l12 7-12 7z" fill="currentColor"/></svg></button>
        <button class="glass round" id="open-info" title="Why Politiview Exists" aria-label="Why Politiview Exists"><svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><circle cx="10" cy="10" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9v5.2M10 5.6v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
      </div>
      <aside id="drawer" class="glass panel" aria-label="Elections And The Map Guide" hidden></aside>
      <aside id="sheet" class="glass panel" aria-label="Details"><button class="close" id="close-sheet" aria-label="Close">&#215;</button><div id="sheet-content"></div></aside>
      <div id="lens-dock">
        <div id="mood-key"></div>
        <div id="hint"></div>
        <div id="lens" class="glass" role="toolbar" aria-label="What the colors show">
          <button data-lens="power" class="on" aria-pressed="true">Who Holds Power</button>
          <button data-lens="mood" aria-pressed="false">The Mood</button>
          <button data-lens="lean" aria-pressed="false">Left Or Right</button>
          <button data-lens="next" aria-pressed="false">Next Vote</button>
          <span class="sep"></span>
          <button data-world aria-pressed="false" title="The political status of the world">World View</button>
          <button data-learn="" title="Guided stories about notable countries">Get To Know</button>
          <button data-time title="Turn back the clock on the whole world">Time Machine</button>
          <button data-open-dictionary title="Every political word, in pictures">Dictionary</button>
        </div>
      </div>
      <button id="scoreboard" class="glass" data-select="country:USA"></button>
      <div id="toasts" aria-live="polite"></div>
      <div id="announcer" class="sr-only" aria-live="polite"></div>
      <div id="term-pop" class="glass" hidden></div>
      <div id="chart-tip" class="glass" hidden></div>
      <div id="search" hidden><div class="search-box glass"><input id="search-input" aria-label="Search for a country, region, seat or person" placeholder="France, Bavaria, TX-28, Ossoff..." autocomplete="off" spellcheck="false"><div id="search-results"></div></div></div>
      <footer id="credit">Imagery: NASA Blue Marble, Sentinel-2 cloudless by EOX. Maps: Natural Earth, US Census. Portraits: Wikimedia Commons.</footer>
    `,this.bind(),setInterval(()=>this.tick(),5e3)}bind(){document.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-select],[data-tab],[data-lens],[data-world]`);t.closest(`#search-results [data-dict]`)&&this.closeSearch();let r=t.closest(`#search-results [data-click]`);if(r?.dataset.click){this.closeSearch(),r.dataset.click===`[data-methods]`?this.actions.openMethods?.():document.querySelector(r.dataset.click)?.click();return}n?.dataset.select&&(this.actions.select(n.dataset.select),this.closeSearch(),this.closeDrawer()),n?.dataset.tab&&this.goTab(n.dataset.tab),n?.dataset.lens&&(this.lens=n.dataset.lens,document.querySelectorAll(`[data-lens]`).forEach(e=>{let t=e.dataset.lens===this.lens;e.classList.toggle(`on`,t),e.setAttribute(`aria-pressed`,String(t))}),this.actions.setLens(this.lens),this.renderMoodKey(),this.renderInfo()),n&&`world`in n.dataset&&this.toggleWorld(),t.closest(`[data-drawer-close]`)&&this.closeDrawer();let i=t.closest(`[data-vote-style]`);i&&(this.flow.setStyle(i.dataset.voteStyle),this.renderInfo())}),document.getElementById(`close-sheet`).addEventListener(`click`,()=>this.actions.closeSelection());let e=document.getElementById(`sheet`),t=0,n=0;e.addEventListener(`pointerdown`,e=>{t=e.clientX,n=e.clientY},{passive:!0}),e.addEventListener(`pointerup`,e=>{if(e.target.closest(`.flow-row, .flow-next, input, svg`))return;let r=e.clientX-t,i=e.clientY-n;Math.abs(r)>55&&Math.abs(r)>Math.abs(i)*1.4&&this.flipPage(r<0?1:-1)},{passive:!0}),window.addEventListener(`keydown`,e=>{G.selection&&!e.target.closest?.(`input, textarea`)&&(e.key===`ArrowRight`&&this.flipPage(1),e.key===`ArrowLeft`&&this.flipPage(-1))}),document.addEventListener(`load`,e=>{let t=e.target;t.tagName===`IMG`&&t.parentElement?.classList.contains(`face`)&&t.classList.add(`in`)},!0),document.addEventListener(`error`,e=>{let t=e.target;t.tagName===`IMG`&&t.parentElement?.classList.contains(`face`)&&t.remove()},!0),document.getElementById(`open-search`).addEventListener(`click`,()=>this.openSearch()),document.getElementById(`open-elections`).addEventListener(`click`,()=>this.toggleDrawer(`elections`)),document.getElementById(`search`).addEventListener(`click`,e=>{e.target===e.currentTarget&&this.closeSearch()});let r=document.getElementById(`search-input`);r.addEventListener(`input`,()=>this.renderSearch(r.value)),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&document.querySelector(`#search-results button`)?.click(),e.key===`ArrowDown`&&(e.preventDefault(),document.querySelector(`#search-results button`)?.focus()),e.key===`Escape`&&this.closeSearch()}),document.getElementById(`search-results`).addEventListener(`keydown`,e=>{let t=document.activeElement,n=e.key===`ArrowDown`?1:e.key===`ArrowUp`?-1:0;if(!n)return;e.preventDefault();let i=[...document.querySelectorAll(`#search-results button`)];(i[i.indexOf(t)+n]??r).focus()}),window.addEventListener(`keydown`,e=>{let t=e.target.tagName===`INPUT`,n=document.activeElement===document.body||document.activeElement?.id===`globe`;e.key===`/`&&!t&&n&&(e.preventDefault(),this.openSearch()),e.key===`Escape`&&!od()&&(this.closeSearch(),this.closeDrawer(),this.closeWorld(),this.actions.closeSelection())}),document.addEventListener(`pointerdown`,e=>{e.target.closest(`#drawer,#open-elections,#open-info`)||this.closeDrawer()});let a=document.getElementById(`term-pop`);document.addEventListener(`pointerover`,e=>{let t=e.target.closest(`.term`);if(!t){a.hidden=!0;return}let n=Op.glossary[t.dataset.term??``];if(!n)return;(a.dataset.term!==t.dataset.term||a.hidden)&&(a.dataset.term=t.dataset.term??``,a.innerHTML=`${Sh(t.dataset.term??``)}<b>${i(t.dataset.term)}</b><span>${i(n)}</span><small class="term-more">Tap For More In The Dictionary</small>`),a.hidden=!1;let r=t.getBoundingClientRect(),o=a.offsetWidth,s=a.offsetHeight;a.style.left=`${Math.max(10,Math.min(window.innerWidth-o-10,r.left+r.width/2-o/2))}px`,a.style.top=`${r.top-s-8>10?r.top-s-8:r.bottom+8}px`}),this.bindChartTips()}bindChartTips(){let e=document.getElementById(`chart-tip`),t=null,n=(t,n)=>{let r=e.offsetWidth,i=e.offsetHeight,a=Math.max(8,Math.min(window.innerWidth-r-8,t-r/2)),o=n-i-12>8?n-i-12:n+18;e.style.transform=`translate3d(${a.toFixed(1)}px, ${o.toFixed(1)}px, 0)`},r=()=>{(t||!e.hidden)&&(e.hidden=!0,t=null)};window.addEventListener(`scroll`,r,{capture:!0,passive:!0}),document.addEventListener(`pointerdown`,r,{passive:!0}),document.addEventListener(`pointermove`,r=>{let i=r.target.closest?.(`[data-tip]`)??null;i?(i!==t&&(e.textContent=i.dataset.tip??``,e.hidden=!1,t=i),n(r.clientX,r.clientY)):t&&=(e.hidden=!0,null)},{passive:!0});let i=0;document.addEventListener(`pointerdown`,r=>{if(r.pointerType===`mouse`)return;window.clearTimeout(i);let a=r.target.closest?.(`[data-tip]`);a?(e.textContent=a.dataset.tip??``,e.hidden=!1,t=a,n(r.clientX,r.clientY),i=window.setTimeout(()=>{e.hidden=!0,t=null},2800)):(e.hidden=!0,t=null)},{passive:!0}),document.addEventListener(`focusin`,r=>{let i=r.target.closest?.(`[data-tip]`);if(!i)return;let a=i.getBoundingClientRect();e.textContent=i.dataset.tip??``,e.hidden=!1,t=i,n(a.left+a.width/2,a.top)}),document.addEventListener(`focusout`,()=>{e.hidden=!0,t=null})}tick(){this.renderElectionLabel(),!document.getElementById(`drawer`).hidden&&document.getElementById(`drawer`).dataset.kind===`elections`&&this.renderElections()}renderScoreboard(){let e=document.getElementById(`scoreboard`);if(!e)return;let t=em(),n=G.usCycle.live&&[...G.races.values()].some(e=>e.status!==`called`);e.classList.toggle(`on`,!!t&&n),t&&e.dataset.line!==t&&(e.dataset.line=t,e.innerHTML=t)}renderElectionLabel(){this.renderScoreboard();let e=this.flow.fronts.filter(e=>e.phase===`live`&&e.level===0),t=document.getElementById(`elections-label`);t&&(t.innerHTML=e.length?`${e.length} Voting<span class="wide-only"> Now</span>`:`Votes`),document.getElementById(`open-elections`)?.classList.toggle(`is-live`,e.length>0)}setCrumb(e){let t=document.getElementById(`crumb`);t&&(t.innerHTML=e.map(e=>`<em>${i(e)}</em>`).join(``))}setHint(e){let t=document.getElementById(`hint`);t&&t.textContent!==m_[e]&&(t.classList.add(`swap`),window.setTimeout(()=>{t.textContent=m_[e],t.classList.remove(`swap`)},180))}toggleDrawer(e){let t=document.getElementById(`drawer`);if(!t.hidden&&t.dataset.kind===e){this.closeDrawer();return}t.dataset.kind=e,t.hidden=!1,e===`elections`?this.renderElections():this.renderInfo();let n=t.querySelector(`h3`);n&&(n.tabIndex=-1,n.focus({preventScroll:!0}))}openMapGuide(){this.toggleDrawer(`info`)}closeMenus(){this.closeSearch(),this.closeDrawer()}closeDrawer(){let e=document.getElementById(`drawer`);if(!e||e.hidden)return;let t=e.contains(document.activeElement);e.hidden=!0,t&&document.getElementById(e.dataset.kind===`elections`?`open-elections`:`open-info`)?.focus({preventScroll:!0})}renderElections(){let e=document.getElementById(`drawer`),t=this.flow.fronts,n=t.filter(e=>e.level===0),r=n.filter(e=>e.phase===`live`),a=n.filter(e=>e.phase===`upcoming`).sort((e,t)=>(e.election?.date??``).localeCompare(t.election?.date??``)),o=t.filter(e=>e.level===2&&e.phase===`live`).sort((e,t)=>Math.abs(e.sides[0].share-.5)-Math.abs(t.sides[0].share-.5)).slice(0,30).filter(e=>e.hasCount),s=[...G.races.values()].filter(e=>e.office!==`house`&&e.status!==`called`),l=e=>`<button class="flow-row" data-select="${i(e.select)}"><div class="flow-top"><b>${i(e.title)}</b><small>${i(e.election?S_(e):e.progress===null?``:`${Math.round(e.progress*100)}% in`)}</small></div>
      ${e.hasCount?`<div class="stack thin"><i style="flex:${e.sides[0].share};background:${Fl(e.sides[0].color)}"></i><i style="flex:${e.sides[1].share};background:${Fl(e.sides[1].color)}"></i></div>`:``}
      <small>${i(e.sub)}</small></button>`;e.innerHTML=`<button class="close" data-drawer-close aria-label="Close">&#215;</button><h3>Elections</h3>
      ${r.length?`<h4>Happening Now</h4>${r.map(l).join(``)}`:`<p class="muted">Nothing being counted right now.</p>`}
      ${s.length?`<h4>Statewide Races Still Open</h4>${s.map(e=>`<button class="flow-row" data-select="state:${i(e.state)}"><div class="flow-top"><b>${i(e.title)}</b></div><small>${i(e.candidates.slice(0,2).map(e=>e.name).join(` vs `))}</small></button>`).join(``)}`:``}
      ${o.length?`<h4>Closest Counted House Seats</h4>${o.slice(0,12).map(l).join(``)}`:``}
      ${a.length?`<h4>Coming Up</h4>${a.map(l).join(``)}`:``}
      ${G.events.some(e=>e.kind!==`deploy`)?`<h4>Latest Calls</h4>${G.events.filter(e=>e.kind!==`deploy`).slice(0,12).map(e=>`<button class="flow-row" ${e.raceId?`data-select="race:${i(e.raceId)}"`:``}><small>${i(e.text)}, ${i(c(e.at))}</small></button>`).join(``)}`:``}`}renderInfo(){let e=document.getElementById(`drawer`);if(e.dataset.kind!==`info`||e.hidden)return;let t=(e,t)=>`<div class="key"><i style="background:${e}"></i>${i(t)}</div>`,n=this.lens===`mood`?ml.map(e=>t(pl[e].color,pl[e].label)).join(``):this.lens===`power`?Il.map(e=>t(Y[e].color,Y[e].label)).join(``):this.lens===`next`?t(`#ffd166`,`Votes Soon`)+t(`#7c6a3a`,`Votes Later`):t(Al.left,`Left Of Center, Like US Democrats`)+t(Al.centre,`Center`)+t(Al.right,`Right Of Center, Like US Republicans`)+t(Al.np,`No Party Listed`)+t(jl,`US Race With No Count Yet`);G.version,e.innerHTML=`<button class="close" data-drawer-close aria-label="Close">&#215;</button><h3>Reading The Map</h3>
      <h4>How Votes Look On The Globe</h4>
      <div class="style-switch">${[[`pie`,`Pies`],[`ring`,`Rings`],[`stick`,`Sticks`]].map(([e,t])=>`<button data-vote-style="${e}" class="${this.flow.style===e?`on`:``}">${t}</button>`).join(``)}</div>
      ${t(`#f2c24d`,`Gold Edge: A Vote Is Coming. Slices Show Today's Parliament`)}
      ${t(`#ffffff`,`White Edge: Being Counted Now`)}
      ${t(`#3d4250`,`Grey Slice: Others, Or Not Yet Counted`)}
      <p class="muted">Big countries and US states have rings. The outside is who runs it, and each ring further in is a chamber or a vote. Tap any place to see its rings named.</p>
      <p class="muted">From orbit you see each country. Come in for its states, then districts. Closest in, US counties show the 2024 presidential vote.</p>
      <h4>What The Colors Mean</h4>
      ${n}
      <p class="muted">Only the place in the middle of your view lights up. World view shows every country at once. "Who holds power" comes from V-Dem's Regimes of the World, with the kinds of non-democratic rule named by hand. Inside a country, regions show the left-right lean of whoever runs them. In the US, a state's color shows its Senate seats, mixed slightly when its House delegation leans the other way.</p>
      <h4>Where The Facts Come From</h4>
      ${G.sources.map(e=>`<div class="src ${e.ok?`ok`:``}"><i></i><div><a href="${i(e.url)}" target="_blank" rel="noreferrer">${i(e.name)}</a><small>${e.ok?`${i(e.detail??`OK`)}, ${i(c(e.lastOk))}`:i(e.lastError??`Waiting for first response`)}</small></div></div>`).join(``)}
      <p class="muted">A winner is only shown when a source records one. A partial count never produces a call here. World data comes from Wikidata, Wikipedia and V-Dem via Our World in Data.</p>
      `,this.commits&&this.fillCommits()}fillCommits(){let e=document.getElementById(`commit-list`);e&&this.commits&&(e.innerHTML=this.commits.slice(1,8).map(e=>`<div class="commit"><b>${i(e.short)}</b> ${i(e.subject)}<small>${i(c(e.date))}</small></div>`).join(``))}flipDir=0;flipPage(e){let t=[...document.querySelectorAll(`#sheet .flow-line .seg`)],n=t[t.findIndex(e=>e.classList.contains(`now`))+e]?.dataset.page;n&&(this.flipDir=e,this.goTab(n))}goTab(e){let t=[...document.querySelectorAll(`#sheet .flow-line .seg`)].map(e=>e.dataset.page);this.flipDir||=t.indexOf(e)>=t.indexOf(this.tab)?1:-1,this.tab=e,this.renderSheet();let n=document.querySelector(`#sheet .flow-row b`);n&&(n.tabIndex=-1,n.focus({preventScroll:!0}),cd(n.textContent??``));let r=document.querySelector(`#sheet-content`);r?.classList.remove(`page-from-right`,`page-from-left`),r?.offsetWidth,r?.classList.add(this.flipDir>0?`page-from-right`:`page-from-left`),this.flipDir=0}refreshSheet(){G.selection&&this.renderSheet()}renderSheet(){let e=document.getElementById(`sheet`),t=document.getElementById(`sheet-content`);if(!e||!t)return;let n=G.selection;if(e.classList.toggle(`open`,!!n),document.body.classList.toggle(`has-sheet`,!!n),!n){this.sheetCache=``;return}let r=this.sheetHtml();if(r===this.sheetCache)return;this.sheetCache=r;let i=t.scrollTop,a=t.querySelector(`.flow-line`)?.dataset.at;t.innerHTML=r,t.scrollTop=i;for(let e of t.querySelectorAll(`h4, h5`))e.setAttribute(`role`,`heading`),e.setAttribute(`aria-level`,e.tagName===`H4`?`3`:`4`);let o=t.querySelector(`.flow-line`);kd(o,a===void 0?void 0:Number(a)),Ad(o,e=>{let t=o?.querySelectorAll(`.seg`)[e]?.dataset.page;t&&this.goTab(t)})}sheetCache=``;sheetHtml(){let e=G.selection;switch(e.kind){case`country`:{let t=G.world.countries[e.key];return t?gm(t,this.tab,this.globe):``}case`state`:return qm(e.key);case`seat`:return Jm(e.key);case`county`:return Xm(e.key,this.globe);case`admin1`:return Ym(e.key,this.globe);case`race`:{let t=G.races.get(e.key);return t?t.office===`house`?Jm(t.seat):qm(t.state):``}case`election`:{let t=G.worldElections.find(t=>t.id===e.key);return t?Zm(t):``}}}notice(e){let t=document.getElementById(`toasts`);if(!t)return;let n=document.createElement(`div`);n.className=`glass toast`,n.innerHTML=`<b>${i(e)}</b>`,t.prepend(n),cd(e),setTimeout(()=>n.remove(),6e3)}closeUpUs=!1;setCloseUpUs(e){e!==this.closeUpUs&&(this.closeUpUs=e,this.renderMoodKey())}renderMoodKey(){let e=document.getElementById(`mood-key`);e&&(e.classList.add(`on`),e.classList.toggle(`one-row`,this.lens===`power`),this.closeUpUs?e.innerHTML=[[q.D,`Democrats`],[q.R,`Republicans`]].map(([e,t])=>`<span class="mood-chip" style="--c:${e}"><i></i>${i(t)}</span>`).join(``):this.lens===`power`?e.innerHTML=Il.map(e=>`<span class="mood-chip" style="--c:${Y[e].color}" data-tip="${i(Y[e].meaning)}"><i></i>${i(Y[e].label)}</span>`).join(``):this.lens===`lean`?e.innerHTML=[[Al.left,`Run From The Left`],[Al.centre,`Center`],[Al.right,`Run From The Right`],[Al.np,`No Party Listed`]].map(([e,t])=>`<span class="mood-chip" style="--c:${e}"><i></i>${i(t)}</span>`).join(``):this.lens===`next`?e.innerHTML=`<span class="mood-note">Brighter Means Sooner</span>`+G.worldElections.filter(e=>e.phase===`upcoming`).sort((e,t)=>e.date.localeCompare(t.date)).slice(0,3).map(e=>`<button class="mood-chip" style="--c:#ffd166" data-select="country:${i(e.country)}"><i></i>${i(e.countryName)}, ${i(d(e.date))}</button>`).join(``):this.lens===`mood`&&(e.innerHTML=``,e.innerHTML=`<span class="mood-note">Our Own Rough Estimate</span>${ml.map(e=>`<span class="mood-chip" style="--c:${pl[e].color}" data-tip="${i(pl[e].meaning)}"><i></i>${i(pl[e].label)}</span>`).join(``)}`))}flipBanner(e){let t=document.createElement(`div`);t.className=`flip-banner`,e.party&&t.style.setProperty(`--c`,q[e.party]),t.innerHTML=`<small>${e.basis===`wikipedia`?`Reported, Not Confirmed Yet`:`A Seat Just Flipped${e.party?` To The ${i(kl[e.party])}s`:``}`}</small><b>${i(e.text)}</b>`,document.getElementById(`app`)?.append(t),setTimeout(()=>t.remove(),5200)}toast(e){if(![`flip`,`called`,`world`].includes(e.kind)&&!(e.kind===`deploy`&&0))return;e.kind===`flip`&&this.flipBanner(e);let t=document.getElementById(`toasts`);if(!t)return;let n=document.createElement(`div`);for(n.className=`glass toast`,e.party&&n.style.setProperty(`--c`,q[e.party]),n.innerHTML=`<b>${e.basis===`wikipedia`?`Reported Result`:e.kind===`flip`?`Seat Changed Hands`:e.kind===`called`?`Race Called`:e.kind===`deploy`?`New Version`:`New Results`}${e.party?` <em>${i(kl[e.party])}</em>`:``}</b><span>${i(e.text)}</span>`,t.prepend(n);t.children.length>3;)t.lastElementChild?.remove();setTimeout(()=>n.classList.add(`out`),6500),setTimeout(()=>n.remove(),7100)}renderBuild(e){}worldOpen=!1;onLayoutChange=null;toggleWorld(){this.worldOpen?this.closeWorld():this.openWorld()}openWorld(){this.worldOpen=!0,this.actions.closeSelection(),document.body.classList.add(`has-world`),document.querySelectorAll(`[data-world]`).forEach(e=>{e.classList.add(`on`),e.setAttribute(`aria-pressed`,`true`)}),this.actions.setWorld(!0),this.actions.focusWorld(),this.onLayoutChange?.()}closeWorld(){this.worldOpen&&(this.worldOpen=!1,document.body.classList.remove(`has-world`),document.querySelectorAll(`[data-world]`).forEach(e=>{e.classList.remove(`on`),e.setAttribute(`aria-pressed`,`false`)}),this.actions.setWorld(!1),this.onLayoutChange?.())}buildSearchIndex(){let e=[];for(let t of Object.values(G.world.countries)){let n=t.exec===`hog`?t.hog:t.hos;e.push({label:t.name,sub:t.unchecked?`Territory`:n?`Country, led by ${n.name}`:`Country`,select:`country:${t.key}`});for(let n of new Set([t.hos?.name,t.hog?.name]))n&&!/^Q\d+$/.test(n)&&e.push({label:n,sub:`Leader, ${t.name}`,select:`country:${t.key}`});for(let n of t.lastLegislative?.parties??[])n.name&&(n.seats??0)>0&&e.push({label:n.name,sub:`Party, ${t.name}`,select:`country:${t.key}`,tab:`parties`});if(t.key===`USA`)for(let n of[`Democrats`,`Republicans`])e.push({label:n,sub:`Party, ${t.name}`,select:`country:USA`,tab:`parties`})}this.globe.layers.admin1?.meta.forEach(t=>{let n=G.admin1[t.k],r=String(t.x?.cc??``),i=r===`USA`?`state:${String(t.x?.iso??``).replace(`US-`,``)}`:`admin1:${t.k}`;t.n!==G.world.countries[r]?.name&&(e.push({label:t.n,sub:r===`USA`?`US state`:`${String(t.x?.type||`Region`)}, ${G.world.countries[r]?.name??r}`,select:i}),n?.leader&&!/^Q\d+$/.test(n.leader)&&e.push({label:n.leader,sub:`${t.n}, ${G.world.countries[r]?.name??r}`,select:i}))});for(let t of G.races.values()){let n=t.office===`house`?`seat:${t.seat}`:`state:${t.state}`;e.push({label:t.title,sub:`${t.office===`house`?`US House`:t.office===`senate`?`US Senate`:`Governor`}${t.winnerName?`, ${t.winnerName}`:``}`,select:n});for(let r of t.candidates)e.push({label:r.name,sub:`Candidate, ${t.title} (${r.party})`,select:n})}for(let n of Dh)e.push({label:t(n),sub:`In The Dictionary`,dict:n});this.globe.layers.uscounty?.meta.forEach(t=>e.push({label:t.n,sub:`County, ${ll[String(t.x?.state??``)]?.name??`US`}`,select:`county:${t.k}`})),this.searchIndex=e}openSearch(){document.getElementById(`search`).hidden=!1,this.searchIndex.length||this.buildSearchIndex();let e=document.getElementById(`search-input`);e.value=``,this.renderSearch(``),e.focus()}closeSearch(){let e=document.getElementById(`search`);e&&(e.contains(document.activeElement)&&document.activeElement.blur(),e.hidden=!0)}renderSearch(e){let t=document.getElementById(`search-results`),n=e=>e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``),r=n(b_(e)),a=__.filter(t=>t.re.test(e)).map(e=>`<button ${e.select?`data-select="${i(e.select)}" data-tab="${i(e.tab??``)}"`:`data-click="${i(e.click??``)}"`}><b>${i(e.label)}</b><small>${i(e.sub)}</small></button>`).join(``);if(r.length<2&&!a){t.innerHTML=`<div class="search-hint">Try a country, a province, a seat like TX-28, a person's name, or a word like "senate".</div>`;return}let o=g_[r],s=this.searchIndex.map(e=>{let t=n(e.label);return{e,score:o&&e.select===`country:${o}`&&e.sub.startsWith(`Country`)?-1:t===r?0:t.startsWith(r)?1:t.includes(` ${r}`)?2:r.length>3&&t.includes(r)?3:9}}).filter(e=>e.score<9).filter(t=>!v_.test(e)||y_(t.e)===0).sort((e,t)=>e.score-t.score||y_(e.e)-y_(t.e)||e.e.label.length-t.e.label.length).slice(0,12),c=!s.length&&!a&&r.length>=4;c&&(s=this.searchIndex.filter(e=>e.dict||e.sub.startsWith(`Country`)||e.sub===`Territory`).map(e=>({e,score:x_(r,n(e.label))})).filter(e=>e.score<=(r.length>=8?2:1)).sort((e,t)=>e.score-t.score).slice(0,5));let l=s.map(({e})=>`<button ${e.dict?`data-dict="${i(e.dict)}"`:`data-select="${i(e.select??``)}"`} ${e.tab?`data-tab="${i(e.tab)}"`:``}><b>${i(e.label)}</b><small>${i(e.sub)}</small></button>`).join(``);t.innerHTML=s.length||a?`${a}${c?`<div class="search-hint">Did You Mean</div>`:``}${l}`:`<div class="search-hint">We couldn't find that. Try a country, a person's name, or a word like "senate".</div>`;let u=s.length+(a?__.filter(t=>t.re.test(e)).length:0);cd(u?`${u} ${u===1?`result`:`results`}. Press Enter for the first, or the down arrow to go through them.`:`We couldn't find that.`)}},g_={usa:`USA`,us:`USA`,"u.s.":`USA`,"u.s.a.":`USA`,"u.s":`USA`,america:`USA`,"united states of america":`USA`,uk:`GBR`,"u.k.":`GBR`,britain:`GBR`,"great britain":`GBR`,england:`GBR`,scotland:`GBR`,wales:`GBR`,burma:`MMR`,holland:`NLD`,"the netherlands":`NLD`,drc:`COD`,"dr congo":`COD`,congo:`COD`,korea:`KOR`,dprk:`PRK`,uae:`ARE`,emirates:`ARE`,turkiye:`TUR`,czechia:`CZE`,swaziland:`SWZ`,"cote d'ivoire":`CIV`,"ivory coast":`CIV`,"east timor":`TLS`,vatican:`VAT`,gaza:`PSX`,"west bank":`PSX`,persia:`IRN`,prc:`CHN`,"people's republic of china":`CHN`},__=[{re:/\b(how (do|can|to) (i |you )?vote|how to vote|register(ing)? to vote|where (do|can) i vote|voter registration|sign up to vote)\b/i,label:`How To Vote In The US`,sub:`How it works, with official links in each state's page`,select:`country:USA`,tab:`vote`},{re:/\b(next (election|vote)|who votes next|when (is|are) .*(election|vote)|upcoming elections?|elections? coming)\b/i,label:`Every Election Coming Up`,sub:`Who votes next, anywhere in the world`,click:`#open-elections`},{re:/\b(why (does |should |do )?(i |my |we )?vote|does my vote|my vote (matter|count)|why voting|vote matter)/i,label:`Why Your Vote Matters`,sub:`Why this site exists`,click:`#open-info`},{re:/\b(how do you know|your sources?|where .*(data|information)|can i trust|report a mistake)\b/i,label:`How We Know`,sub:`Where everything here comes from, and the mistakes we've made`,click:`[data-methods]`}],v_=/\b(?:president|prime minister|chancellor|king|queen|leader|ruler|head of state|head of government|government|capital|parliament) of /i,y_=e=>e.sub.startsWith(`Country`)||e.sub===`Territory`?0:e.dict?1:e.sub.startsWith(`US state`)?2:3;function b_(e){let t=e.trim().replace(/[?!.]+$/,``),n=/\b(?:president|prime minister|chancellor|king|queen|leader|ruler|head of state|head of government|government|capital|parliament) of (?:the )?(.+)$/i.exec(t);return n?n[1]:t.replace(/^(?:what(?:'s| is| are| does| do)?|who(?:'s| is| are| runs| leads)?|how (?:does|do|is|are)|where is|tell me about|define|meaning of|explain)\s+/i,``).replace(/^(?:a|an|the)\s+/i,``).replace(/\s+(?:mean|means|work|works)$/i,``)}function x_(e,t){if(Math.abs(e.length-t.length)>2)return 9;let n=[],r=Array.from({length:t.length+1},(e,t)=>t);for(let i=1;i<=e.length;i++){let a=[i];for(let o=1;o<=t.length;o++)a[o]=Math.min(r[o]+1,a[o-1]+1,r[o-1]+(e[i-1]===t[o-1]?0:1)),i>1&&o>1&&e[i-1]===t[o-2]&&e[i-2]===t[o-1]&&(a[o]=Math.min(a[o],n[o-2]+1));n=r,r=a}return r[t.length]}var S_=e=>e.election?e.phase===`upcoming`?d(e.election.date):e.election.phase===`voting`?`Voting`:`Counting`:``,C_=/^(co|com|org|net|gov|ac)$/;function w_(e){let t=``;try{t=new URL(e.url??``).hostname.replace(/^www\./,``)}catch{}let n=t.split(`.`),r=n.length>=3&&C_.test(n[n.length-2])?n[n.length-3]:n[n.length-2];return r?r.toLowerCase():e.name.toLowerCase().replace(/\.[a-z.]+$/,``).replace(/[^a-z0-9]/g,``)}function T_(e){let t=new Set(e.map(w_));return t.delete(`wikipedia`),t.delete(`raceresults`),t.size}var E_={result:{label:`Result`,color:`#e8b339`},upheaval:{label:`Upheaval`,color:`#e0474c`},leader:{label:`Leadership`,color:`#a06ff0`},election:{label:`Election`,color:`#1fa3ae`},law:{label:`Law`,color:`#5a78f0`},protest:{label:`Protest`,color:`#d5457f`},diplomacy:{label:`Diplomacy`,color:`#6f9a2a`},other:{label:`Politics`,color:`#8a93a0`}},D_=`<svg class="art-globe" viewBox="0 0 120 120" aria-hidden="true"><g fill="none" stroke="#fff" stroke-opacity="0.6"><circle cx="60" cy="60" r="52" stroke-width="2.500"/><ellipse cx="60" cy="60" rx="22" ry="52" stroke-width="1.200"/><ellipse cx="60" cy="60" rx="40" ry="52" stroke-width="1.200"/><path d="M8 60h104M15 34h90M15 86h90" stroke-width="1.200"/></g><circle cx="60" cy="60" r="7" fill="#ffd166"/></svg>`,O_=7e3,k_=window.matchMedia(`(hover: none)`).matches,A_=10;function j_(e,t=3){if(e.id.startsWith(`race-`))return[];let n=e.sources.map(e=>e.title).join(` `)+` ${e.summary??``} ${e.title}`,r=[],i=new Set;for(let t of e.countries){let e=G.world?.countries[t];if(e)for(let t of[e.hos,e.hog]){if(!t?.name||i.has(t.name))continue;let a=t.name.split(/\s+/).pop()??``;a.length>2&&RegExp(`\\b${a.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}\\b`).test(n)&&(i.add(t.name),r.push({c:e,name:t.name,html:Jp(t,`small`)}))}}return r.slice(0,t)}var M_={democrats:q.D,republicans:q.R},N_=(e,t)=>M_[e.toLowerCase().replace(/^the /,``)]??t;function P_(e){if(!e.id.startsWith(`race-`)||!e.gains&&!e.loses)return``;let n=(e,n)=>`<span class="desk-side ${n?`up`:`down`}" data-tip="${n?`Gained This Seat`:`Lost This Seat`}" style="--s:${N_(e,n?`#1fa3ae`:`#d5457f`)}"><i>${n?`&#9650;`:`&#9660;`}</i>${i(t(e))}</span>`;return`<div class="desk-moved">${e.gains?n(e.gains,!0):``}${e.loses?n(e.loses,!1):``}</div>`}function F_(e){let t=T_(e.sources);return e.basis===`official`?`<span class="reel-trust good">State Count Agrees</span>`:e.basis===`outlets`?`<span class="reel-trust good">Confirmed By ${Math.max(t,2)} News Outlets</span>`:e.basis===`wikipedia`?`<span class="reel-trust warn">Wikipedia Only, Not Confirmed Yet</span>`:e.id.startsWith(`race-`)?``:t?t>1?`<span class="reel-trust good">${t} Outlets Reporting</span>`:`<span class="reel-trust warn">One Outlet So Far</span>`:`<span class="reel-trust warn">Wikipedia Only So Far</span>`}function I_(e){let t=t=>`${(t/(e.total||1)*100).toFixed(1)}%`;return`<div class="desk-balance" data-tip="${i(`${e.name}: Democrats ${e.d}, Republicans ${e.r}. Before the vote: ${e.beforeD} and ${e.beforeR}. ${e.toWin} to win.`)}">
    <div class="db-top"><b>${e.d}</b><span>${i(e.name)}, ${e.toWin} To Win</span><b>${e.r}</b></div>
    <div class="db-bar"><i class="db-ghost" style="left:0;width:${t(e.beforeD)};background:${q.D}"></i><i class="db-ghost" style="right:0;width:${t(e.beforeR)};background:${q.R}"></i>
      <i class="grow-x db-now" style="left:0;width:${t(e.d)};background:${q.D}"></i><i class="grow-x from-right db-now" style="right:0;width:${t(e.r)};background:${q.R}"></i>
      <em style="left:${t(e.toWin)}"></em><em style="right:${t(e.toWin)}"></em></div>
  </div>`}var L_=class{globe;host;stories=[];open=!1;el=document.createElement(`section`);feed=document.createElement(`div`);count=document.createElement(`div`);ticker=document.createElement(`button`);pinBox=document.createElement(`div`);index=0;tickIndex=0;beacons=[];chartAt=null;lastTick=0;watcher;shownIds=``;constructor(e,t){this.globe=e,this.host=t,this.el.id=`desk`,this.el.setAttribute(`aria-label`,`The News`),this.feed.className=`feed`,this.count.className=`feed-count`,this.el.innerHTML=`<button class="feed-close" data-desk="close" aria-label="Close">&#215;</button><button class="feed-side prev" data-desk="prev" aria-label="Previous Story">&#8249;</button><button class="feed-side next" data-desk="next" aria-label="Next Story">&#8250;</button>`,this.el.append(this.feed,this.count),this.ticker.id=`ticker`,this.ticker.className=`glass`,this.pinBox.id=`news-pins`,this.pinBox.setAttribute(`aria-hidden`,`true`),document.getElementById(`app`).append(this.ticker),document.body.append(this.el,this.pinBox),this.watcher=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=Number(t.target.dataset.i);e===this.index&&this.count.textContent||this.settle(e)}},{root:this.feed,threshold:.6}),this.ticker.addEventListener(`click`,()=>{let e=this.ticker.dataset.id;this.show(Math.max(0,this.stories.findIndex(t=>t.id===e)))}),this.el.addEventListener(`click`,e=>{let t=e.target;if(t===this.el){this.close();return}let n=t.closest(`[data-desk]`);if(n?.dataset.desk===`close`)this.close();else if(n?.dataset.desk===`more`){let e=n.closest(`.reel`);e&&this.expand(e,!e.classList.contains(`open`))}else if(n?.dataset.desk===`next`)this.scrollTo(this.index+1);else if(n?.dataset.desk===`prev`)this.scrollTo(this.index-1);else if(n?.dataset.desk===`explain`){let e=n.dataset.key;this.close(),e&&this.host.select(`country:${e}`)}}),this.feed.addEventListener(`error`,e=>{let t=e.target;t.tagName===`IMG`&&t.classList.contains(`reel-img`)&&(t.closest(`.reel`)?.classList.add(`no-pic`),t.remove())},!0),this.feed.addEventListener(`load`,e=>{let t=e.target;t.tagName===`IMG`&&t.classList.contains(`reel-img`)&&t.classList.add(`in`)},!0),this.pinBox.addEventListener(`click`,e=>{let t=e.target.closest(`[data-beacon]`);t&&this.show(Math.max(0,this.stories.findIndex(e=>e.id===t.dataset.beacon)))}),this.watchGestures(),window.addEventListener(`keydown`,e=>{if(!this.open)return;let t=this.feed.querySelector(`.reel[data-i="${this.index}"]`);e.key===`Escape`&&this.close(),e.key===`ArrowRight`&&(e.preventDefault(),this.scrollTo(this.index+1)),e.key===`ArrowLeft`&&(e.preventDefault(),this.scrollTo(this.index-1)),e.key===`ArrowUp`&&t&&(e.preventDefault(),this.expand(t,!0)),e.key===`ArrowDown`&&t&&(e.preventDefault(),this.expand(t,!1))})}expand(e,t){e.classList.toggle(`open`,t),e.querySelector(`.reel-toggle`)?.setAttribute(`aria-expanded`,String(t));let n=e.querySelector(`.reel-text`);n&&!t&&(n.scrollTop=0)}watchGestures(){let e=0,t=0,n=0,r=null,i=(i,a,o)=>{e=i,t=a,r=o.closest?.(`.reel`)??null,n=r?.querySelector(`.reel-text`)?.scrollTop??0},a=(i,a)=>{if(!r)return;let o=i-e,s=a-t;Math.abs(s)>44&&Math.abs(s)>Math.abs(o)*1.2?s<0?this.expand(r,!0):n<=1&&this.expand(r,!1):Math.abs(o)>50&&r.classList.contains(`open`)&&this.scrollTo(this.index+(o<0?1:-1)),r=null};this.feed.addEventListener(`touchstart`,e=>i(e.touches[0].clientX,e.touches[0].clientY,e.target),{passive:!0}),this.feed.addEventListener(`touchend`,e=>a(e.changedTouches[0].clientX,e.changedTouches[0].clientY),{passive:!0}),this.feed.addEventListener(`pointerdown`,e=>{e.pointerType===`mouse`&&i(e.clientX,e.clientY,e.target)}),this.feed.addEventListener(`pointerup`,n=>{if(n.pointerType!==`mouse`||!r)return;let i=n.clientX-e;Math.abs(i)>50&&Math.abs(i)>Math.abs(n.clientY-t)?(this.scrollTo(this.index+(i<0?1:-1)),r=null):a(n.clientX,n.clientY)}),this.feed.addEventListener(`wheel`,e=>{let t=e.target.closest?.(`.reel`);if(!t||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;let n=t.querySelector(`.reel-text`);e.deltaY>0&&!t.classList.contains(`open`)?this.expand(t,!0):e.deltaY<0&&t.classList.contains(`open`)&&(n?.scrollTop??0)<=0&&this.expand(t,!1)},{passive:!0})}setStories(e){let t=this.stories[this.index]?.id;if(this.open){let t=new Map(e.map(e=>[e.id,e]));this.stories=this.stories.map(e=>t.get(e.id)??e)}else{this.stories=e;let n=e.findIndex(e=>e.id===t);this.index=n>=0?n:0}this.pending=e,this.announce(e),this.buildBeacons(),this.ticker.dataset.id||this.tick();let n=document.getElementById(`open-desk`);n&&n.classList.toggle(`has-news`,e.length>0)}pending=[];announced=null;announce(e){let n=e.filter(e=>e.breaking);if(this.announced)for(let e of n){if(this.announced.has(e.id))continue;let n=document.createElement(`button`);n.className=`breaking-banner`,n.innerHTML=`<small><i></i>Breaking</small><b>${i(t(e.title))}</b>`,n.addEventListener(`click`,()=>{n.remove(),this.show(Math.max(0,this.stories.findIndex(t=>t.id===e.id)))}),document.getElementById(`app`)?.append(n),setTimeout(()=>n.remove(),11e3);break}this.announced=new Set(n.map(e=>e.id))}show(e=0){let t=this.stories[e]?.id;this.pending.length&&(this.stories=this.pending);let n=t?this.stories.findIndex(e=>e.id===t):-1;this.index=n>=0?n:Math.min(e,Math.max(0,this.stories.length-1)),this.open=!0,document.body.classList.add(`has-desk`),this.el.classList.add(`open`),this.host.onOpenChange(),this.render(),this.feed.scrollLeft=this.index*this.feed.clientWidth,this.settle(this.index)}hold(){}close(){this.open&&(this.open=!1,document.body.classList.remove(`has-desk`),this.el.classList.remove(`open`),this.host.spotlight(null),this.host.onOpenChange())}render(){let e=this.stories.map(e=>`${e.id}:${e.image??``}:${e.detail?.length??0}:${e.why?.length??0}`).join(`|`);if(!(e===this.shownIds&&this.feed.childElementCount)){if(this.shownIds=e,this.watcher.disconnect(),!this.stories.length)this.feed.innerHTML=`<div class="reel no-pic"><div class="reel-text"><h2>The Newsroom Is Warming Up</h2><p class="reel-means">Stories appear here as the feeds come in.</p></div></div>`,this.count.textContent=``;else{this.feed.innerHTML=this.stories.map((e,t)=>this.reel(e,t)).join(``);for(let e of this.feed.querySelectorAll(`.reel`))this.watcher.observe(e)}}}settle(e){this.index=e;let n=this.stories[e];if(n){cd(`Story ${e+1} of ${this.stories.length}. ${t(n.title)}`),this.count.innerHTML=`<b>${e+1}</b> Of ${this.stories.length}${e===0?`<small>${k_?`Swipe Left For The Next Story`:`Use The Arrows For The Next Story`}</small>`:``}`;for(let t of this.feed.querySelectorAll(`.reel.open`))Number(t.dataset.i)!==e&&this.expand(t,!1);this.lookAt(n),this.host.onOpenChange()}}get currentId(){return this.open?this.stories[this.index]?.id:void 0}scrollTo(e){let t=Math.max(0,Math.min(this.stories.length-1,e));this.feed.scrollTo({left:t*this.feed.clientWidth,behavior:`smooth`})}place(e){if(e.region){let t=this.globe.usStateIndex.get(e.region),n=t===void 0?void 0:this.globe.layers.admin1?.meta[t];if(n)return{lon:n.c[0],lat:n.c[1]}}let t=this.globe.layers.countries,n=e.countries[0],r=n&&t?t.meta[t.byKey.get(n)??-1]:void 0;return r?{lon:r.c[0],lat:r.c[1]}:null}lookAt(e){this.host.spotlight(e.countries.length?e.countries:null,E_[e.kind].color);let t=this.place(e);t&&this.globe.cam.flyTo(t.lon,Math.max(-50,Math.min(62,t.lat)),1.95,{ms:2600})}reel(e,n){let a=E_[e.kind],o=e.countries.map(e=>G.world?.countries[e]).filter(e=>!!e),s=o[0],l=o.slice(0,3).map(e=>e.iso2?`<span class="fi fi-${i(e.iso2.toLowerCase())}" data-tip="${i(e.name)}"></span>`:``).join(``),u=j_(e,2).map(e=>`<span class="desk-face" data-tip="${i(e.name)}">${e.html}</span>`).join(``),d=[...new Map(e.sources.map(e=>[e.name,e])).values()],f=!e.why&&!e.summary,p=s?.iso2?`<span class="fi fi-${i(s.iso2.toLowerCase())}"></span>`:``;return`<article class="reel ${e.image?``:`no-pic`}" data-i="${n}" style="--k:${a.color}">
      <div class="reel-frame">
        <div class="reel-art">${p}${D_}</div>
        ${e.image?`<img class="reel-img" src="${i(e.image)}" alt="" ${n<2?``:`loading="lazy"`} decoding="async" referrerpolicy="no-referrer">`:``}
        ${e.imageNote?`<small class="reel-file">File Photo: ${i(e.imageNote)}</small>`:``}
      </div>
      <div class="reel-text">
        <div class="reel-top">${l}${e.breaking?`<span class="desk-breaking"><i></i>Breaking</span>`:``}<span class="desk-kind">${i(a.label)}</span><small>${i(t(c(e.firstSeen)))}</small>${F_(e)}${e.ai?`<span class="reel-trust ai">Summary Written By AI</span>`:``}</div>
        <div class="reel-head">${u}<h2>${i(t(e.title))}</h2></div>
        ${e.why?`<p class="reel-means">${i(e.why)}</p>`:e.blurb?`<p class="reel-means">${i(e.blurb)}</p>`:``}
        ${P_(e)}
        ${(e.balance??[]).map(I_).join(``)}
        <div class="reel-more">
          ${e.summary?`<h4>What Happened</h4><p>${i(e.summary)}</p>`:``}
          ${e.detail?`<h4>The Fuller Story</h4><p>${i(e.detail)}</p>`:``}
          ${e.next?`<h4>What's Next</h4><p>${i(e.next)}</p>`:``}
          ${e.blurb?`<h4>In ${i(d[0]?.name??`The Outlet`)}'s Words</h4><p>${i(e.blurb)}</p>`:``}
          ${f&&!e.blurb?`<h4>What The Outlets Are Saying</h4>${e.sources.slice(0,4).map(e=>`<p>${i(e.title)} <small class="reel-said">${i(e.name)}</small></p>`).join(``)}`:``}
          <h4>Read It From The Source</h4>
          <div class="reel-sources">${d.slice(0,8).map(e=>e.url?`<a href="${i(e.url)}" target="_blank" rel="noreferrer">${i(e.name)} &#8599;</a>`:`<span>${i(e.name)}</span>`).join(``)}</div>
          ${s?`<button class="desk-explain" data-desk="explain" data-key="${i(s.key)}">How ${i(r(s.name))} Works &#8250;</button>`:``}
          <div class="sheet-actions"><button data-share="news/${i(e.id)}" data-share-title="${i(t(e.title))}">Share This Story</button><button data-methods>How We Know</button></div>
          <small class="reel-note">${e.ai?`Written by a small AI model from these sources, then checked sentence by sentence against them by the same model. It can still be wrong, so check the sources for anything important.`:e.id.startsWith(`race-`)?`Written from recorded race results, with no AI. Official certification takes weeks.`:e.roundup?`This report covers several stories at once, so it isn't summarized here.`:`No summary here yet, only what the outlet said itself.`}${e.imageFrom?` Photo: ${e.imageLink?`<a href="${i(e.imageLink)}" target="_blank" rel="noreferrer">${i(e.imageFrom)}</a>`:i(e.imageFrom)}.`:``}</small>
        </div>
        <button class="reel-toggle" data-desk="more" aria-expanded="false"><i aria-hidden="true"></i><span class="when-closed">${k_?`Swipe Up To Read More`:`Read More`}</span><span class="when-open">${k_?`Swipe Down To Go Back`:`Go Back`}</span></button>
      </div>
    </article>`}tick(){if(!this.stories.length){this.ticker.classList.remove(`on`);return}this.tickIndex=(this.tickIndex+1)%Math.min(this.stories.length,12);let e=this.stories[this.tickIndex];this.ticker.dataset.id=e.id,this.ticker.classList.toggle(`is-breaking`,!!e.breaking),this.ticker.innerHTML=`<i style="background:${e.breaking?`#ff5a5f`:E_[e.kind].color}"></i><em>${e.breaking?`Breaking`:i(E_[e.kind].label)}</em><span class="tick-text">${i(t(e.title))}</span>`,this.ticker.classList.add(`on`)}buildBeacons(){this.pinBox.innerHTML=``,this.beacons=[];let e=new Set;for(let n of this.stories){if(this.beacons.length>=A_)break;let r=this.place(n),i=n.region??n.countries[0];if(!r||!i||e.has(i))continue;e.add(i);let a=document.createElement(`button`);a.className=`news-beacon`,a.tabIndex=-1,a.dataset.beacon=n.id,a.dataset.tip=t(n.title),a.style.setProperty(`--k`,E_[n.kind].color),a.setAttribute(`aria-label`,t(n.title)),this.pinBox.append(a),this.beacons.push({el:a,at:wl(r.lon,r.lat,1,new H)})}}update(e){let t=performance.now();if(!this.open&&t-this.lastTick>O_&&!this.ticker.matches(`:hover`)&&(this.lastTick=t,this.tick()),this.pinBox.classList.toggle(`on`,e),e){let e=[];for(let t of this.beacons){let n=this.globe.project(t.at);if(n){let r=this.chartAt?.(n.x,n.y),i=r?r.r*.74:0,a=n.x+i,o=n.y-i,s=e.some(e=>Math.hypot(e.x-a,e.y-o)<26);s||e.push({x:a,y:o}),t.el.style.transform=`translate3d(${a.toFixed(1)}px, ${o.toFixed(1)}px, 0)`,t.el.classList.toggle(`on`,!s)}else t.el.classList.remove(`on`)}}}},R_=`ge-last-visit`,z_=72e5,B_=5,V_=3;function H_(){try{let e=localStorage.getItem(R_);return e?Number(e):null}catch{return null}}function U_(){try{localStorage.setItem(R_,String(Date.now()))}catch{}}function W_(e){let t=new Map,n=[];for(let r of e){let e=r.countries[0]??r.id,i=t.get(e)??0;if(!(i>=V_)&&(t.set(e,i+1),n.push(r),n.length===B_))break}return n}function G_(e){let t=e/36e5;return t<24?`Today`:t<48?`Since Yesterday`:t<168?`This Week`:`While You Were Away`}var K_=class{host;open=!1;el=document.createElement(`section`);since=H_();shownOnce=!1;constructor(e){this.host=e,this.el.id=`catchup`,this.el.setAttribute(`aria-label`,`Catch Me Up`),document.body.append(this.el),this.el.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-catch]`);n?(this.close(),this.host.openStory(n.dataset.catch??``)):(t.closest(`[data-catch-close]`)||t===this.el)&&this.close()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.open&&this.close()}),window.addEventListener(`pagehide`,U_),document.addEventListener(`visibilitychange`,()=>{if(document.visibilityState===`hidden`){U_();return}let e=H_();e&&Date.now()-e>z_&&!this.open&&G.news.length&&(this.since=e,this.show(),U_())})}maybeOpen(){!this.shownOnce&&G.news.length&&(this.shownOnce=!0,this.since!==null&&Date.now()-this.since>z_&&this.show(),U_())}pick(){let e=this.since,t=G.news.filter(e=>e.why||e.summary),n=W_([...e?t.filter(t=>Date.parse(t.lastSeen)>e):t].sort((e,t)=>Number(!!t.why)-Number(!!e.why)));return n.length>=3?{stories:n,fresh:!!e}:{stories:W_([...t].sort((e,t)=>Number(!!t.why)-Number(!!e.why))),fresh:!1}}show(){let{stories:e,fresh:n}=this.pick(),r=n&&this.since?G_(Date.now()-this.since):`The Latest`,a=yg(2);this.el.innerHTML=`<div class="cu-inner">
        <button class="cu-close" data-catch-close aria-label="Close">&#215;</button>
        <small class="cu-kicker">${i(r)}, In About A Minute</small>
        <h2>Here's What You Need To Know</h2>
        <ol class="cu-list">${e.map((e,n)=>{let r=G.world?.countries[e.countries[0]];return`<li><button data-catch="${i(e.id)}" style="--k:${E_[e.kind].color};--d:${n*70}ms"><i></i><span class="cu-text"><b>${r?.iso2?`<span class="fi fi-${i(r.iso2.toLowerCase())}"></span>`:``}${i(t(e.title))}</b>${e.why||e.summary?`<em>${i(e.why??e.summary??``)}</em>`:``}</span></button></li>`}).join(``)}</ol>
        ${a.length?`<p class="cu-coming"><b>Coming Up</b> ${a.map(e=>`${i(e.countryName)}, ${i(d(e.date))}`).join(`. `)}.</p>`:``}
        <button class="cu-done" data-catch-close>Back To The Globe</button>
      </div>`,this.open=!0,this.el.classList.add(`open`),document.body.classList.add(`has-catchup`)}close(){this.open&&(this.open=!1,this.el.classList.remove(`open`),document.body.classList.remove(`has-catchup`),this.host.onClose())}},q_={3:J(Y.liberal.color),2:J(Y.electoral.color),1:J(Y.hybrid.color),0:J(Y.closed.color)},J_=Y.electoral.color,Y_=Y.closed.color,X_=new Date().getFullYear(),Z_=11,Q_=20,$_=`<svg class="brand-draw" viewBox="0 0 64 64" width="46" height="46" aria-hidden="true"><g fill="none" stroke="#fff" stroke-linecap="round"><path pathLength="1" d="M19 27V56" stroke-width="6"/><circle pathLength="1" cx="36.500" cy="27" r="17.500" stroke-width="6"/><ellipse pathLength="1" cx="36.500" cy="27" rx="7.500" ry="17.500" stroke-width="2" opacity="0.6"/><path pathLength="1" d="M19 27h35" stroke-width="2" opacity="0.6"/></g><circle class="brand-dot" cx="36.500" cy="27" r="5.500" fill="#ffd166"/></svg>`,ev=()=>Object.values(G.world.countries).filter(pg),tv=(e,t)=>{let n=Math.max(0,Math.min(1,e));return{color:J(t),alpha:.05+n**1.25*.7,lines:.16+n*.22}},nv=(e,t,n,r)=>`<div class="heat-scale">${r?`<b>${i(r)}</b>`:``}<i style="background:linear-gradient(90deg, color-mix(in srgb, ${n} 10%, transparent), ${n})"></i><span>${i(e)}</span><span>${i(t)}</span></div>`;function rv(){let e=[];for(let t of G.races.values()){let n=t.candidates.filter(e=>(e.votes??0)>500).sort((e,t)=>(t.votes??0)-(e.votes??0));n.length<2||e.push({title:t.title,margin:(n[0].votes??0)-(n[1].votes??0),select:t.office===`house`?`seat:${t.seat}`:`state:${t.state}`})}return e.sort((e,t)=>e.margin-t.margin)}function iv(){let e=G.news.find(e=>e.breaking)??G.news[0];return e?`<button class="now-line" data-ch-open="#catch-me-up"><small>Right Now</small><b>${i(t(e.title))}</b><i>Catch Me Up &#8250;</i></button>`:``}var av=class{globe;flow;focus;host;open=!1;el=document.createElement(`section`);pinBox=document.createElement(`div`);pins=[];index=0;chapters;year=1900;playing=!1;isolate=null;shownYear=-1;measure=`elections`;bloc=`nato`;touring=!1;knowing=Math.floor(Math.random()*Cd.length);pageDir=1;flowFrom=0;dwell=0;onTourStep=null;constructor(e,t,n,r){this.globe=e,this.flow=t,this.focus=n,this.host=r,this.el.id=`chapters`,this.el.setAttribute(`aria-label`,`The World View`),this.pinBox.id=`chapter-pins`,document.getElementById(`app`).append(this.el),document.body.append(this.pinBox),this.chapters=this.build(),this.el.innerHTML=`<div class="ch-scrim"></div><div class="ch-stack" id="ch-stack"></div>`,this.el.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-ch]`);if(n){this.go(Number(n.dataset.ch));return}let r=t.closest(`[data-ch-open]`);if(r){document.querySelector(r.dataset.chOpen??``)?.click();return}let i=t.closest(`[data-kind]`);if(i){let e=i.dataset.kind;this.isolate=this.isolate===e?null:e,this.renderCaption(),this.applyPins(),this.focus.repaint(),this.isolate&&this.face(ev().filter(e=>Rl(e)===this.isolate).sort((e,t)=>(t.pop??0)-(e.pop??0)).slice(0,4).map(e=>e.key));return}let a=t.closest(`[data-measure]`);if(a){this.measure=a.dataset.measure,this.renderCaption(),this.focus.repaint();return}let o=t.closest(`[data-bloc]`);if(o)this.bloc=o.dataset.bloc??this.bloc,this.renderCaption(),this.focus.repaint(),this.face((K.world.blocs??[]).find(e=>e.id===this.bloc)?.members??[]);else if(t.closest(`[data-ch-next]`))this.go(this.index+1);else if(t.closest(`[data-ch-prev]`))this.go(this.index-1);else if(t.closest(`[data-ch-close]`))this.host.close();else if(t.closest(`[data-ch-play]`)){let e=this.chapters[this.index].track;if(!e)return;!this.playing&&this.year>=e.to&&this.setYear(e.from),this.playing=!this.playing,this.renderPlayButton()}}),this.el.addEventListener(`input`,e=>{let t=e.target;t.id===`ch-range`&&(this.playing=!1,this.renderPlayButton(),this.setYear(Number(t.value)))}),window.addEventListener(`keydown`,e=>{this.open&&e.target.id!==`globe`&&(e.key===`ArrowRight`&&this.go(this.index+1),e.key===`ArrowLeft`&&this.go(this.index-1))});let i=0,a=0,o=0;this.el.addEventListener(`pointerdown`,e=>{i=e.clientX,a=e.clientY,o=performance.now()},{passive:!0}),this.el.addEventListener(`pointerup`,e=>{let t=e.target;if(t.closest(`#ch-range, .flow-line, .flow-next, .learn-chips`))return;let n=e.clientX-i,r=e.clientY-a;if(Math.abs(n)>50&&Math.abs(n)>Math.abs(r)*1.2){this.go(this.index+(n<0?1:-1));return}let s=t.closest(`.ch-caption`);if(s&&!t.closest(`button, a, input, [data-tip], .term, [data-kind], [data-measure], [data-bloc]`)&&Math.hypot(n,r)<10&&performance.now()-o<450){let t=s.getBoundingClientRect();this.go(this.index+(e.clientX<t.left+t.width*.28?-1:1))}},{passive:!0})}show(){this.open=!0,this.el.classList.add(`open`),this.go(this.index)}get wantsCrowd(){return this.open&&!!this.chapters[this.index]?.crowd}startTour(){this.touring=!0,this.dwell=0,this.el.classList.add(`touring`),this.markTiming()}stopTour(){this.touring=!1,this.el.classList.remove(`touring`),this.markTiming()}nextChapter(){this.go((this.index+1)%this.chapters.length)}hide(){this.open=!1,this.playing=!1,this.stopTour(),this.el.classList.remove(`open`),this.focus.setPainter(null),this.flow.setOverlay(null),this.pinBox.innerHTML=``,this.pins=[]}refresh(){this.open&&this.go(this.index)}go(e){let t=this.index;this.pageDir=e<t?-1:1,this.index=(e+this.chapters.length)%this.chapters.length;let n=this.chapters[this.index];n.id===`know`&&this.index!==t&&(this.knowing=(this.knowing+1)%Cd.length),this.dwell=0,this.isolate=null,this.playing=!1,this.shownYear=-1,n.track&&(this.year=n.track.from,this.playing=!0),this.focus.setPainter(n.paint??(e=>null)),this.flow.setOverlay(n.columns?this.columnItems(n):[]),this.host.crowdChanged(),this.renderAll(),this.applyPins(),n.track&&this.setYear(this.year),n.id===`blocs`?this.face((K.world.blocs??[]).find(e=>e.id===this.bloc)?.members??[]):n.pins&&this.face(n.pins().slice(0,4))}face(e){let t=this.globe.layers.countries;if(!t||!e.length)return;let n=new H,r=new H;for(let i of e){let e=t.meta[t.byKey.get(i)??-1];e&&n.add(wl(e.c[0],e.c[1],1,r))}if(n.lengthSq()<1e-6)return;n.normalize();let i=Math.asin(n.y)*(180/Math.PI),a=Math.atan2(n.x,n.z)*(180/Math.PI);this.globe.cam.flyTo(a,Math.max(-35,Math.min(45,i)),this.globe.cam.alt,{ms:2200})}columnItems(e){let t=this.globe.layers.countries;return(e.columns?.()??[]).flatMap(e=>{let n=t?.meta[t.byKey.get(e.key)??-1];return n?[{key:e.key,lon:n.c[0],lat:n.c[1],value:e.value,color:e.color}]:[]})}setYear(e){let t=this.chapters[this.index].track;if(!t)return;this.year=Math.max(t.from,Math.min(t.to,e));let n=Math.floor(this.year),r=document.getElementById(`ch-head`);r&&(r.style.left=`${((this.year-t.from)/(t.to-t.from)*100).toFixed(2)}%`);let i=this.el.querySelector(`.seg.now u`);if(i&&(i.style.transform=`scaleX(${((this.year-t.from)/(t.to-t.from)).toFixed(3)})`),n===this.shownYear)return;this.shownYear=n;let a=document.getElementById(`ch-range`);a&&document.activeElement!==a&&(a.value=String(n));let o=document.getElementById(`ch-year`);o&&(o.textContent=String(n));let s=t.onYear(n),c=document.getElementById(`ch-title`);c&&s.title&&c.textContent!==s.title&&(c.textContent=s.title,c.classList.remove(`swap`),c.offsetWidth,c.classList.add(`swap`));let l=document.getElementById(`ch-text`);l&&s.text&&(l.textContent=s.text),s.pins&&this.setPins(s.pins),this.focus.repaint()}renderAll(){let e=this.chapters[this.index],t=document.getElementById(`ch-stack`);t&&(t.innerHTML=`<div class="ch-caption" id="ch-caption"></div>
      ${e.track?`<div class="ch-track"><button data-ch-play class="ch-play" id="ch-play" aria-label="Play Or Pause"></button><div class="ch-chart">${e.track.chart()}<i class="ch-head" id="ch-head"></i><input id="ch-range" type="range" min="${e.track.from}" max="${e.track.to}" step="1" value="${e.track.from}" aria-label="Year"></div><b class="ch-year" id="ch-year">${e.track.from}</b></div>`:``}${this.upNext()}`,this.renderCaption(),this.renderPlayButton())}markTiming(){let e=this.el.querySelector(`.seg.now`);if(!e)return;let t=this.chapters[this.index];e.classList.remove(`timing`),e.offsetWidth,e.style.setProperty(`--dwell`,`${t.mark?Q_:Z_}s`),e.classList.toggle(`timing`,this.touring&&!t.track)}upNext(){let e=this.chapters[this.index+1];return e?Dd(`Up Next`,e.name,`data-ch-next`):Dd(`Back To The Start`,this.chapters[0].name,`data-ch-next`)}renderCaption(){let e=this.chapters[this.index],t=document.getElementById(`ch-caption`);if(!t)return;t.classList.remove(`page-from-right`,`page-from-left`),t.classList.add(this.pageDir>0?`page-from-right`:`page-from-left`),t.innerHTML=`${Ed(this.chapters.map(e=>({name:e.name})),this.index)}${e.mark?$_:`<small class="ch-kicker">The World, ${i(e.name)}</small>`}<h2 id="ch-title">${i(e.title())}</h2><p id="ch-text">${i(e.text())}</p>${e.visual?`<div class="ch-visual">${e.visual()}</div>`:``}`;let n=t.querySelector(`.flow-line`);Ad(n,e=>this.go(e)),kd(n,this.flowFrom),this.flowFrom=this.index,this.markTiming()}renderPlayButton(){let e=document.getElementById(`ch-play`);e&&(e.innerHTML=this.playing?`<svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 2.500h3v11H4zM9 2.500h3v11H9z" fill="currentColor"/></svg>`:`<svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 2.500l9.500 5.500L4 13.500z" fill="currentColor"/></svg>`)}applyPins(){let e=this.chapters[this.index];if(this.isolate){let e=ev().filter(e=>Rl(e)===this.isolate).sort((e,t)=>(t.pop??0)-(e.pop??0)).map(e=>e.key);this.setPins(e.slice(0,8))}else this.setPins(e.pins?.()??[])}setPins(e){let t=this.globe.layers.countries;if(!t)return;let n=e.join(`|`);if(this.pinBox.dataset.keys===n)return;this.pinBox.dataset.keys=n,this.pinBox.innerHTML=``,this.pins=[];let r=this.chapters[this.index].id===`leaders`;for(let n of e){let e=t.meta[t.byKey.get(n)??-1];if(!e)continue;let a=document.createElement(`div`);a.className=`ins-pin ${r?`with-face`:``}`;let o=r?mg(G.world.countries[n]):void 0;a.innerHTML=o?`${Jp(o,`small`)}<span>${i(o.name)}<small>${i(e.n)}</small></span>`:`<i></i><span>${i(e.n)}</span>`,this.pinBox.append(a),this.pins.push({el:a,at:wl(e.c[0],e.c[1],1,new H)})}}update(e){if(!this.open)return;if(this.touring){let t=this.chapters[this.index];t.track&&this.playing||(this.dwell+=e),this.dwell>(t.track?3.5:t.mark?Q_:Z_)&&(this.dwell=0,this.onTourStep?.())}let t=this.chapters[this.index].track;if(t&&this.playing){let n=this.year+(t.to-t.from)/t.ms*1e3*e;n>=t.to?(this.playing=!1,this.setYear(t.to),this.renderPlayButton()):this.setYear(n)}for(let e of this.pins){let t=this.globe.project(e.at);t?(e.el.style.transform=`translate3d(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px, 0)`,e.el.classList.add(`on`)):e.el.classList.remove(`on`)}}build(){let e=e=>{let t=G.world.countries[e];if(!t||!pg(t))return null;let n=Rl(t);return this.isolate&&n!==this.isolate?{color:J(Y[n].color),alpha:.02,lines:.1}:{color:J(Y[n].color),alpha:this.isolate?.34:.24,lines:.32}},t=()=>K.world.regimeHistory??[],n=e=>{let t=e.closed+e.electoralAutocracy+e.electoralDemocracy+e.liberalDemocracy;return(e.liberalDemocracy+e.electoralDemocracy)/(t||1)},a=e=>{let t=K.byCountry[e]?.r;if(!t)return null;let n=dl(t,Math.floor(this.year));return n<0?null:{color:q_[n],alpha:.26,lines:.26}},o=e=>{let t=K.byCountry[e]?.s;return!t||K.byCountry[e]?.sf?null:t<=Math.floor(this.year)?{color:J(fg),alpha:Math.floor(this.year)-t<2?.62:.3,lines:.3}:null},s=e=>{let t=K.byCountry[e];if(t?.e===void 0||t.e10===void 0)return null;let n=t.e-t.e10;return Math.abs(n)<.03?{color:[.6,.63,.68],alpha:.05,lines:.1}:{color:J(n>0?J_:Y_),alpha:Math.min(.52,.12+Math.abs(n)*1.1),lines:.3}},c=()=>Object.entries(K.byCountry).filter(([e,t])=>G.world.countries[e]&&t.e!==void 0&&t.e10!==void 0).map(([e,t])=>({key:e,name:G.world.countries[e].name,value:t.e-t.e10,label:t.e-t.e10>0?`Elections and free speech grew stronger`:`Elections and free speech weakened`})).sort((e,t)=>t.value-e.value),l=[{id:`welcome`,name:`Welcome`,title:()=>`This Is Politiview`,mark:!0,text:()=>`Your launchpad into world politics. See who's in charge everywhere, how people feel, and when they get to vote. We side with no party, and we'll never tell you who to pick.`,visual:()=>`${iv()}<div class="welcome-points"><span><b>Who's In Charge</b>Every country and who runs it</span><span><b>How It Feels</b>What people seem to be saying</span><span><b>What's Next</b>Every vote, and why yours counts</span></div>
          <div class="welcome-go"><button class="learn-go" data-ch-open="#open-help">Show Me Around &#8250;</button><button class="learn-go quiet" data-ch-open="#open-info">Why This Exists</button></div>`,paint:e},{id:`power`,name:`Who Holds Power`,title:()=>{let e=_g(),t=e.reduce((e,t)=>e+t.pop,0)||1,n=e.filter(e=>e.kind===`liberal`||e.kind===`electoral`).reduce((e,t)=>e+t.pop,0)/t;return n<.2?`Few People On Earth Live In A Democracy`:n<.4?`Most People On Earth Live Outside A Democracy`:n<.6?`About Half The World Lives In A Democracy`:`Most People On Earth Live In A Democracy`},text:()=>{let e=_g(),t=e.reduce((e,t)=>e+t.pop,0)||1,n=e.filter(e=>e.kind===`liberal`||e.kind===`electoral`).reduce((e,t)=>e+t.pop,0);return`${Math.round(n/t*100)} in every 100 people live in a democracy of some kind. Each figure is one person in a hundred, and each color is how their country is run. Tap a color to see only those countries.`},visual:()=>{let e=_g();return`${pf(e.map(e=>({color:Y[e.kind].color,label:Y[e.kind].label,value:e.pop})))}
            <div class="kind-chips">${Il.filter(t=>e.some(e=>e.kind===t)).map(e=>`<button class="kind-chip ${this.isolate===e?`on`:``}" data-kind="${e}" style="--c:${Y[e].color}" data-tip="${i(Y[e].meaning)}"><i></i>${i(Y[e].label)}</button>`).join(``)}</div>`},paint:e},{id:`century`,name:`A Century Of Change`,title:()=>`Almost Nobody Chooses Their Leaders`,text:()=>`Drag through the years and watch the world change. Colors show how each country was run at the time, by V-Dem's records.`,visual:()=>`<button class="learn-go" data-time>Open The Time Machine &#8250;</button>`,paint:a,track:{from:1900,to:X_-1,ms:22e3,chart:()=>hf(t().map(e=>({x:e.year,parts:[e.liberalDemocracy,e.electoralDemocracy,e.electoralAutocracy,e.closed]})),[Y.liberal,Y.electoral,Y.hybrid,Y.closed].map(e=>({label:e.label,color:e.color})),{h:54,storyBand:1}),onYear:e=>{let r=t(),i=r.find(t=>t.year===e)??r[r.length-1],a=r.find(t=>t.year===e-6);if(!i)return{};let o=n(i),s=a?n(a)-o>.012:!1,c=a?o-n(a)>.012:!1,l=`Democracy Holds Steady`;return o<.08?l=`Almost Nobody Chooses Their Leaders`:s?l=`Democracy Is Losing Ground`:o<.2?l=c?`A Few Countries Begin To Vote Freely`:`Only A Few Countries Vote Freely`:c&&o>.4?l=`Democracy Sweeps Across The World`:c?l=`Democracy Is Spreading`:o>.5&&(l=`Democracies Are Now The Majority`),{title:l}}}},{id:`vote`,name:`The Vote For Women`,title:()=>`The Long Road To The Vote`,text:()=>`A country lights up in the year all its adult women could vote, by law. That says nothing about whether voting decided much at the time.`,paint:o,track:{from:1890,to:2015,ms:2e4,chart:()=>bf(Object.entries(K.world.womenSuffrage?.byCountry??{}).filter(([e])=>G.world.countries[e]).map(([e,t])=>({year:t,key:e,name:G.world.countries[e].name})),fg,{maxH:66}),onYear:e=>{let t=Object.entries(K.world.womenSuffrage?.byCountry??{}).filter(([e])=>G.world.countries[e]),n=t.filter(([,t])=>t>e-3&&t<=e).sort((e,t)=>t[1]-e[1]).map(([e])=>e),r=t.filter(([,t])=>t<=e).length/(t.length||1);return{title:r<.03?`Almost Nowhere Lets Women Vote`:r<.25?`A Few Countries Open The Vote`:r<.6?`The Vote Spreads Across The World`:r<.95?`Most Of The World Now Agrees`:`The Last Few Countries Follow`,pins:n.slice(0,6)}}}},{id:`feel`,name:`How Countries Feel`,crowd:!0,title:()=>{let e=new Map;for(let t of ev()){let n=xl(t).mood;n!==`unclear`&&e.set(n,(e.get(n)??0)+1)}let t=[...e.entries()].sort((e,t)=>t[1]-e[1])[0]?.[0];return t===`change`?`Much Of The World Is Hungry For Change`:t===`weary`?`Much Of The World Is Tuning Out`:t===`divided`?`Much Of The World Is Split`:t===`fired`?`Much Of The World Is Fired Up`:`How Each Country Seems To Feel`},text:()=>`The little people act out how each country seems to feel, read from its recent votes, local results, turnout and the news. It's our reading, not a poll, and it updates as things happen.`,visual:()=>`<div class="kind-chips">${ml.map(e=>`<span class="kind-chip" style="--c:${pl[e].color}" data-tip="${i(pl[e].meaning)}"><i></i>${i(pl[e].label)}</span>`).join(``)}</div>`,paint:e=>{let t=G.world.countries[e];return!t||!pg(t)?null:{color:J(pl[xl(t).mood].color),alpha:.14,lines:.22}}},{id:`votes`,name:`Why Your Vote Counts`,title:()=>{let e=rv()[0];return e?`${e.title}: Just ${e.margin.toLocaleString(`en-US`)} Votes Apart`:`Every Vote Counts`},text:()=>`Races are decided by people who show up. In a typical country, about a third of registered voters stay home, and that's enough to change who wins almost anywhere. Some of these are still being counted, so the gaps can change.`,visual:()=>`<div class="close-races">${rv().slice(0,4).map(e=>`<button class="close-race" data-select="${i(e.select)}"><b>${e.margin.toLocaleString(`en-US`)}</b><span>Votes Apart<small>${i(e.title)}</small></span></button>`).join(``)}</div>
            <a class="vote-link" href="https://vote.gov" target="_blank" rel="noreferrer">Register To Vote In The US &#8250;</a>`,pins:()=>[`USA`]},{id:`works`,name:`How Well It Works`,title:()=>Af.find(e=>e.key===this.measure)?.label??`How Well It Works`,text:()=>`${Af.find(e=>e.key===this.measure)?.what??``} The brighter the country, the stronger this is there, in the judgment of V-Dem's researchers.`,visual:()=>`<div class="kind-chips">${Af.map(e=>`<button class="kind-chip ${this.measure===e.key?`on`:``}" data-measure="${e.key}" style="--c:${e.color}"><i></i>${i(e.label)}</button>`).join(``)}</div>`,paint:e=>{let t=K.byCountry[e]?.q?.[this.measure];return t===void 0?null:{color:J(Af.find(e=>e.key===this.measure).color),alpha:.03+t*t*.58,lines:.2}}},{id:`blocs`,name:`Who Stands With Whom`,title:()=>(K.world.blocs??[]).find(e=>e.id===this.bloc)?.name??`Who Stands With Whom`,text:()=>(K.world.blocs??[]).find(e=>e.id===this.bloc)?.what??``,visual:()=>`<div class="kind-chips">${(K.world.blocs??[]).map(e=>`<button class="kind-chip ${this.bloc===e.id?`on`:``}" data-bloc="${e.id}" style="--c:${e.color}"><i></i>${i(e.name)}</button>`).join(``)}</div>`,paint:e=>{let t=(K.world.blocs??[]).find(e=>e.id===this.bloc);return t?.members.includes(e)?{color:J(t.color),alpha:.42,lines:.5}:null}},{id:`turnout`,name:`Who Turns Out`,title:()=>`High Turnout Doesn't Always Mean A Real Choice`,text:()=>`The brighter the country, the bigger the share of voters who turned out last time, as officially reported. Compare the two colors: some of the highest numbers come from places without a real contest.`,visual:()=>`${nv(`Fewer Voted`,`More Voted`,J_,`Democracies`)}${nv(`Fewer Voted`,`More Voted`,Y.hybrid.color,`Everywhere Else`)}`,paint:e=>{let t=G.world.countries[e],n=K.world.turnout?.byCountry?.[e];return!t||!n?null:tv((n[1]-30)/65,hg(t)?J_:Y.hybrid.color)}},{id:`women`,name:`Who Gets A Seat`,title:()=>`Women Hold Few Of The World's Seats, But It's Changing`,text:()=>`The brighter the country, the bigger the share of its parliament's seats held by women. The chambers show the world, and the country leading it.`,visual:()=>{let e=K.world.womenInParliament,t=Object.entries(e?.byCountry??{}).filter(([e])=>G.world.countries[e]).sort((e,t)=>t[1]-e[1])[0],n=ev().filter(e=>mg(e)?.female).slice(0,7);return`${nv(`Fewer Women`,`More Women`,fg)}<div class="chambers small">${_f(e?.world??0,fg,{label:`The World`})}${t?_f(t[1],fg,{label:G.world.countries[t[0]].name}):``}</div>
            <div class="face-row">${n.map(e=>`<button data-tip="${i(`${mg(e).name}, ${e.name}`)}">${Jp(mg(e),`small`)}</button>`).join(``)}</div>`},paint:e=>{let t=K.world.womenInParliament?.byCountry?.[e];return t===void 0||!G.world.countries[e]?null:tv(t/55,fg)},pins:()=>Object.entries(K.world.womenInParliament?.byCountry??{}).filter(([e])=>G.world.countries[e]).sort((e,t)=>t[1]-e[1]).slice(0,3).map(([e])=>e)},{id:`know`,name:`Get To Know`,title:()=>Cd[this.knowing].hook,text:()=>Cd[this.knowing].intro,visual:()=>{let e=Cd[this.knowing],t=G.world.countries[e.key]?.name??e.key;return`<button class="learn-go" data-learn="${i(e.key)}">How ${i(r(t))} Came To Be &#8250;</button>${Hh(e.key)}`},pins:()=>[Cd[this.knowing].key],paint:e=>{if(e!==Cd[this.knowing].key)return null;let t=G.world.countries[e];return t?{color:J(Y[Rl(t)].color),alpha:.42,lines:.9}:null}},{id:`moving`,name:`Who's Moving`,title:()=>`Some Countries Are Opening Up, And Others Closing Down`,text:()=>`Over the last ten years, by V-Dem's judgment. Blue means elections and free speech grew stronger, and rose means they weakened. Governments may disagree.`,visual:()=>{let e=c();return`${Sf([...e.slice(0,3),...e.slice(-3)],J_,Y_)}${wf([{color:J_,label:`Stronger`},{color:Y_,label:`Weaker`}])}`},paint:s,pins:()=>{let e=c();return[...e.slice(0,3),...e.slice(-3)].map(e=>e.key)}},{id:`leaders`,name:`Longest In Power`,title:()=>`Some Leaders Have Been There For Decades`,text:()=>`The faces on the globe have held the top job the longest, counted from the date Wikidata records. Some were elected, and some weren't.`,pins:()=>vg().slice(0,7).map(e=>e.c.key),paint:e=>vg().slice(0,7).some(t=>t.c.key===e)?{color:J(Y[Rl(G.world.countries[e])].color),alpha:.3,lines:.4}:null},{id:`next`,name:`Who Votes Next`,title:()=>{let e=yg(1)[0];return e?`${e.countryName} Votes Next`:`Who Votes Next`},text:()=>{let e=yg(1)[0];return e?`${e.title}, ${d(e.date)}. Each dot below is a national vote in the coming year.`:`Each dot below is a national vote in the coming year.`},visual:()=>Cf(yg(40).filter(e=>new Date(e.date).getTime()<Date.now()+31536e6).map(e=>({date:e.date,label:`${e.countryName}: ${e.title}, ${d(e.date)}`,select:`country:${e.country}`,color:Y[Rl(G.world.countries[e.country])]?.color??`#fff`}))),pins:()=>[...new Set(yg(6).map(e=>e.country))]}];return[`welcome`,`century`,`power`,`feel`,`vote`,`moving`,`works`,`women`,`turnout`,`leaders`,`blocs`,`know`,`votes`,`next`].map(e=>l.find(t=>t.id===e))}},ov=11e3,sv=900,cv=14e3,lv=7,uv=e=>G.world.countries[e]?.name??e;function dv(e){return`<div class="flag-chips">${e.map(e=>{let t=G.world.countries[e];return t?`<button class="flag-chip" data-select="country:${i(e)}">${t.iso2?`<span class="fi fi-${i(t.iso2.toLowerCase())}"></span>`:``}${i(t.name)}</button>`:``}).join(``)}</div>`}function fv(){let e=G.chambers?.house,t=G.chambers?.senate;if(!e)return null;let n=[...G.races.values()].filter(e=>e.status!==`called`).length;if(!n)return null;let r=e=>{let t=Object.keys(e.reported).length?e.reported:e.seatLevel,n=[`D`,`R`];return{parts:n.map(e=>({color:q[e],label:kl[e],value:t[e]??0})),sum:n.reduce((e,n)=>e+(t[n]??0),0)}};if(!G.usCycle.live)return null;let a=r(e),o=t?r(t):null;if(!a.sum&&!o?.sum)return null;let s=(e,t,n)=>`<figure class="chamber" data-tip="${i(`${t.parts[0].label} ${t.parts[0].value}, ${t.parts[1].label} ${t.parts[1].value}`)}">${vf(t.parts,{total:n,caption:`${t.parts[0].value} : ${t.parts[1].value}`})}<figcaption>${i(e)}, ${Math.floor(n/2)+1} To Win</figcaption></figure>`;return{id:`live-us`,kicker:`Live now`,headline:`The US Is Still Counting ${n} Races`,visual:`<div class="chambers">${s(`House`,a,e.total)}${o&&t?s(`Senate`,o,t.total):``}</div>${wf([{color:q.D,label:kl.D},{color:q.R,label:kl.R}])}`,note:`The white tick is the halfway mark. Only seats a source has recorded count here.`,action:{label:`See The United States`,select:`country:USA`},spotlight:{keys:[`USA`]}}}function pv(){let e=_g();if(!e.length)return null;let t=e.reduce((e,t)=>e+t.pop,0)||1,n=e.filter(e=>e.kind===`liberal`||e.kind===`electoral`).reduce((e,t)=>e+t.pop,0),r=e.filter(e=>e.pop/t>.03);return{id:`crowd`,kicker:`The Whole Planet`,headline:`Of Every 100 People On Earth, ${Math.round(n/t*100)} Live In A Democracy`,visual:`${pf(e.map(e=>({color:Y[e.kind].color,label:Y[e.kind].label,value:e.pop})))}${wf(r.map(e=>({color:Y[e.kind].color,label:Y[e.kind].label})))}`,action:{label:`See The World View`,world:!0}}}function mv(){let e=K.world.regimeHistory;if(!e?.length)return null;let t=e=>{let t=e.closed+e.electoralAutocracy+e.electoralDemocracy+e.liberalDemocracy;return Math.round((e.liberalDemocracy+e.electoralDemocracy)/(t||1)*100)},n=e[0],r=e[e.length-1],i=[Y.liberal,Y.electoral,Y.hybrid,Y.closed].map(e=>({label:e.label,color:e.color}));return{id:`century`,kicker:`Over Time`,headline:`In ${n.year}, ${t(n)}% Of Countries Were Democracies. Today, ${t(r)}%`,visual:hf(e.map(e=>({x:e.year,parts:[e.liberalDemocracy,e.electoralDemocracy,e.electoralAutocracy,e.closed]})),i,{h:76,storyBand:1,tip:(e,t)=>`${e}: ${t[0]+t[1]} democracies, ${t[2]+t[3]} other`}),action:{label:`See The World View`,world:!0}}}function hv(){let e=yg(30);if(!e.length)return null;let n=e[0],r=e.filter(e=>new Date(e.date).getTime()<Date.now()+31536e6);return{id:`next-votes`,kicker:`Coming Up`,headline:`${n.countryName} Votes Next, ${t(d(n.date))}`,visual:`${Cf(r.map(e=>({date:e.date,label:`${e.countryName}: ${e.title}, ${d(e.date)}`,select:`country:${e.country}`,color:Y[Rl(G.world.countries[e.country])]?.color??`#fff`})))}`,note:`Each dot is a national vote in the coming year.`,action:{label:`See ${n.countryName}`,select:`country:${n.country}`},spotlight:{keys:[...new Set(e.slice(0,5).map(e=>e.country))]}}}function gv(){let e=Object.values(G.world.countries).filter(pg),t=e.filter(e=>mg(e)?.female);if(!t.length)return null;let n=t.slice(0,6);return{id:`women-leaders`,kicker:`Who's In Charge`,headline:`${t.length} Of ${e.length} Countries Are Run By A Woman`,visual:`${mf(t.length,e.length,fg)}<div class="face-row">${n.map(e=>`<button data-select="country:${i(e.key)}" data-tip="${i(`${mg(e).name}, ${e.name}`)}">${Jp(mg(e),`small`)}</button>`).join(``)}</div>`,action:{label:`See The World View`,world:!0},spotlight:{keys:t.map(e=>e.key),color:fg}}}function _v(){let e=vg().slice(0,3);if(!e.length)return null;let t=e[0];return{id:`longest`,kicker:`Who's In Charge`,headline:`${mg(t.c).name} Has Held Power In ${t.c.name} For ${Math.floor(t.y)} Years`,visual:yf(e.map(e=>({key:e.c.key,face:Jp(mg(e.c),`small`),name:mg(e.c).name,sub:e.c.name,value:e.y,label:`${Math.floor(e.y)} Years`})),`#7d8796`),action:{label:`See ${t.c.name}`,select:`country:${t.c.key}`},spotlight:{keys:e.map(e=>e.c.key)}}}function vv(){let e=K.world.womenInParliament;if(!e?.byCountry||!e.world)return null;let t=Object.entries(e.byCountry).filter(([e])=>G.world.countries[e]).sort((e,t)=>t[1]-e[1]);if(!t.length)return null;let[n,r]=t[0];return{id:`women-seats`,kicker:`Who Gets A Seat`,headline:`Women Hold ${r.toFixed(0)}% Of Seats In ${uv(n)}, And ${e.world.toFixed(0)}% Worldwide`,visual:`<div class="chambers">${_f(e.world,fg,{label:`The World`})}${_f(r,fg,{label:uv(n)})}</div>`,action:{label:`See ${uv(n)}`,select:`country:${n}`},spotlight:{keys:t.slice(0,5).map(([e])=>e),color:fg}}}function yv(){let e=K.world.womenSuffrage?.byCountry;if(!e)return null;let t=Object.entries(e).filter(([e])=>G.world.countries[e]).sort((e,t)=>e[1]-t[1]);if(!t.length)return null;let n=t[0],r=t[t.length-1];return{id:`suffrage`,kicker:`How We Got Here`,headline:`The Vote For Women Took ${r[1]-n[1]} Years To Spread, From ${uv(n[0])} To ${uv(r[0])}`,visual:bf(t.map(([e,t])=>({year:t,key:e,name:uv(e)})),fg),action:{label:`See The World View`,world:!0},spotlight:{keys:[n[0],r[0]],color:fg}}}function bv(){let e=K.world.turnout;if(!e?.byCountry)return null;let t=Object.entries(e.byCountry).filter(([e])=>G.world.countries[e]);if(t.length<20)return null;let n=Y.electoral.color,r=Y.hybrid.color,i=t.map(([e,[t,i]])=>{let a=G.world.countries[e];return{key:e,name:a.name,value:i,color:hg(a)?n:r,tip:`${a.name}: ${i}% in ${t}`}}),a=[...i].sort((e,t)=>t.value-e.value).slice(0,10);return{id:`turnout`,kicker:`Reading The Picture`,headline:`${a.filter(e=>!hg(G.world.countries[e.key])).length} Of The 10 Highest Turnouts Come From Countries V-Dem Doesn't Class As Democracies`,visual:`${xf(i,{min:0,max:100,unit:`%`})}${wf([{color:n,label:`Democracies`},{color:r,label:`Everywhere else`}])}`,action:{label:`See The World View`,world:!0},spotlight:{keys:a.slice(0,6).map(e=>e.key)}}}function xv(){let e=Object.entries(K.byCountry).filter(([e,t])=>G.world.countries[e]&&t.e!==void 0&&t.e10!==void 0).map(([e,t])=>({key:e,name:uv(e),value:t.e-t.e10,label:`${t.e-t.e10>0?`+`:``}${(t.e-t.e10).toFixed(2)} on a scale of 0 to 1`})).sort((e,t)=>t.value-e.value);if(e.length<6)return null;let t=[e[0],e[1],e[e.length-2],e[e.length-1]],n=Y.electoral.color,r=Y.closed.color;return{id:`shifts`,kicker:`What's Changing`,headline:`In Ten Years, Elections And Free Speech Grew Most In ${t[0].name}, And Weakened Most In ${t[3].name}`,visual:Sf(t,n,r),note:`On V-Dem's index, which is researchers' judgment.`,action:{label:`See The World View`,world:!0},spotlight:{keys:t.map(e=>e.key)}}}function Sv(e,t){let n=Object.values(G.world.countries).filter(pg).filter(t=>Rl(t)===e).sort((e,t)=>(t.pop??0)-(e.pop??0));if(!n.length)return null;let r=n.reduce((e,t)=>e+(t.pop??0),0);return{id:`kind-${e}`,kicker:`Who Holds Power`,headline:t(n.length,s(r)),visual:dv(n.slice(0,9).map(e=>e.key)),note:Y[e].meaning,action:{label:`See ${n[0].name}`,select:`country:${n[0].key}`},spotlight:{keys:n.map(e=>e.key),color:Y[e].color}}}function Cv(){return G.news.slice(0,3).map(e=>{let n=E_[e.kind],r=e.countries.map(e=>G.world.countries[e]).filter(Boolean);return{id:`news-${e.id}`,kicker:n.label,headline:t(e.title),visual:r.length?dv(r.slice(0,4).map(e=>e.key)):``,note:e.why??e.summary??void 0,action:{label:`Open The News`,story:e.id},spotlight:e.countries.length?{keys:e.countries,color:n.color}:void 0}})}function wv(){let e=fv(),t=[...Cv(),pv(),hv(),Sv(`oneparty`,(e,t)=>`${e} Countries, Home To ${t} People, Are Run By A Single Party`),mv(),gv(),bv(),Sv(`monarchy`,e=>`In ${e} Countries, A Royal Family Still Holds Real Power`),yv(),_v(),Sv(`military`,e=>`${e} Countries Are Run By Their Armed Forces`),vv(),xv(),Sv(`religious`,e=>`${e} Countries Give Religious Authorities The Final Say`)].filter(e=>!!e);if(!e)return t;let n=[e];return t.forEach((t,r)=>{n.push(t),r%3==2&&n.push(e)}),n}var Tv=class{globe;host;el=document.createElement(`aside`);body=document.createElement(`div`);bar=document.createElement(`i`);pinBox=document.createElement(`div`);list=[];index=-1;current=null;visible=!1;wantedSince=0;pins=[];named=null;chartAt=null;lastTouch=performance.now();openStory=null;dismissed=!1;constructor(e,t){this.globe=e,this.host=t,this.el.id=`insight`,this.el.className=`glass`,this.el.setAttribute(`aria-label`,`Something worth knowing`),this.body.className=`ins-body`,this.bar.className=`ins-progress`;let n=document.createElement(`button`);n.className=`ins-close`,n.setAttribute(`aria-label`,`Hide This Card`),n.setAttribute(`data-ins-close`,``),n.innerHTML=`&times;`,this.el.append(this.body,this.bar,n),this.pinBox.id=`insight-pins`,document.body.append(this.pinBox),document.getElementById(`app`).append(this.el),this.el.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-ins-close]`)){this.dismissed=!0,this.setVisible(!1);return}let n=t.closest(`[data-ins]`);if(n){this.step(n.dataset.ins===`next`?1:-1);return}if(t.closest(`[data-select]`))return;let r=this.current?.action;r?.story?this.openStory?.(r.story):r?.select?this.host.select(r.select):r?.world&&this.host.openWorld()}),this.bar.addEventListener(`animationend`,()=>this.step(1))}refresh(){let e=this.current?.id;if(this.list=wv(),!this.list.length)return;if(this.index<0){this.index=0,this.visible&&this.render(!1);return}let t=this.list.findIndex(t=>t.id===e);t>=0&&(this.index=t,this.current=this.list[t])}step(e){this.list.length&&(this.list=wv(),this.index=(this.index+e+this.list.length)%this.list.length,this.render(!0))}render(e){let t=this.list[this.index];if(!t)return;this.current=t;let n=e?this.el.offsetHeight:0;if(this.body.innerHTML=`<div class="ins-top"><small>${i(t.kicker)}</small><span class="ins-nav"><button data-ins="prev" aria-label="Previous">&#8249;</button><button data-ins="next" aria-label="Next">&#8250;</button></span></div>
      <h3>${i(t.headline)}</h3>
      <div class="ins-visual">${t.visual}</div>
      ${t.note?`<p class="ins-note">${i(t.note)}</p>`:``}
      <div class="ins-action">${i(t.action.label)} <span aria-hidden="true">&#8250;</span></div>`,n){let e=this.el.offsetHeight;Math.abs(n-e)>1&&this.el.animate([{height:`${n}px`},{height:`${e}px`}],{duration:420,easing:`cubic-bezier(0.22, 1, 0.36, 1)`})}this.bar.style.animation=`none`,this.bar.offsetWidth,this.bar.style.animation=`insprogress ${ov}ms linear forwards`,this.applySpotlight()}applySpotlight(){let e=this.current,t=this.visible?e?.spotlight?.keys??null:null;if(this.host.spotlight(t,e?.spotlight?.color),this.pinBox.innerHTML=``,this.pins=[],!t?.length)return;let n=this.globe.layers.countries;if(!n)return;let r=t.map(e=>n.meta[n.byKey.get(e)??-1]).filter(Boolean);for(let e of r.slice(0,lv)){let t=document.createElement(`div`);t.className=`ins-pin`,t.innerHTML=`<i></i><span>${i(e.n)}</span>`,this.pinBox.append(t),this.pins.push({el:t,at:wl(e.c[0],e.c[1],1,new H),key:e.k})}let a=r[0],o=this.globe.cam;a&&performance.now()-this.lastTouch>cv&&!o.isDragging&&o.flyTo(a.c[0],Math.max(-40,Math.min(50,a.c[1])),o.alt,{ms:3e3})}update(e){let t=performance.now();if(!e||this.dismissed?(this.wantedSince=0,this.visible&&this.setVisible(!1)):(this.wantedSince||=t,!this.visible&&t-this.wantedSince>sv&&this.list.length&&this.setVisible(!0)),this.visible)for(let e of this.pins){let t=this.globe.project(e.at);if(t){let n=this.chartAt?.(t.x,t.y);e.el.style.transform=`translate3d(${(t.x+(n?n.r+3:0)).toFixed(1)}px, ${t.y.toFixed(1)}px, 0)`,e.el.classList.toggle(`on`,!this.named?.(e.key))}else e.el.classList.remove(`on`)}}setVisible(e){this.visible=e,this.el.classList.toggle(`open`,e),e?(this.index<0&&(this.index=0),this.render(!1)):(this.bar.style.animation=`none`,this.applySpotlight())}get isVisible(){return this.visible}},Ev=document.getElementById(`globe`),Dv=document.getElementById(`boot-line`),Ov=document.getElementById(`boot-bar`);function kv(e,t){Dv.textContent=e,Ov.style.width=`${Math.round(t*100)}%`}function Av(e){Dv.textContent=e,Dv.classList.add(`fatal`)}var jv=!1,Mv=`ge-view`;function Nv(e){try{sessionStorage.setItem(Mv,JSON.stringify({lon:e.cam.lon,lat:e.cam.lat,alt:e.cam.alt,sel:G.selection,home:jv}))}catch{}}function Pv(){try{let e=sessionStorage.getItem(Mv);return sessionStorage.removeItem(Mv),e?JSON.parse(e):null}catch{return null}}var Fv=e=>fetch(e).then(e=>e.ok?e.json():{}).catch(()=>({}));async function Iv(){pu();let e;try{e=new s_(Ev)}catch(e){console.error(e),window.__report?.(`no-webgl`,String(e)),location.replace(p(`text/index.html?nowebgl=1`));return}let[t,n,r,i,a]=await Promise.all([h(`world.json`).then(e=>e.json()),h(`admin1-state.json`).then(e=>e.json()),h(`us-static.json`).then(e=>e.json()),Fv(p(`data/power-kinds.json`)),h(`state.json`).then(e=>e.json()),e.init(kv)]);G.world=t,$u(()=>Object.values(t.countries)),G.admin1=n,G.us=r,Ll.map=i,G.version=a.version;let o=new Bu(e);e.resizeHook=(e,t)=>o.resize(e,t),o.resize(e.size.w*e.pixelRatio,e.size.h*e.pixelRatio);let s=new Ku(e),l=new d_(document.getElementById(`labels`),e),u=new p_(e),d=new Cg(e),f=new dg(e),g=[],_=`power`,v=!1,y=!1,b=()=>{bl();let t=e.layers.countries;if(!t)return;let n=new Map;for(let e of[...g].sort((e,t)=>t[2]-e[2]))n.has(e[6])||n.set(e[6],[]),n.get(e[6]).push([e[0],e[1],e[5]]);let r=[],i=[];for(let e of t.meta){let t=G.world.countries[e.k];if(!t||!(t.pop??0))continue;let a=xl(t),o=pl[a.mood],s=a.mood===`unclear`?e.a>20?2:1:Math.round(Math.max(1,Math.min(8,1+Math.sqrt(Math.max(e.a,0))*.42))),c=n.get(e.k)??[],l=[...c].slice(0,24).map(([e,t,n])=>({lon:e,lat:t,name:n}));for(let e=l.length-1;e>1;e--){let t=1+Math.floor(Math.random()*e);[l[e],l[t]]=[l[t],l[e]]}pg(t)&&(t.pop??0)>=2e5&&i.push({key:e.k,pop:t.pop??0,places:l.length?l:[{lon:e.c[0],lat:e.c[1]}]});let u=c.slice(0,s).map(([e,t])=>[e,t]);for(let t=0;u.length<s;t++){let n=t*2.4+e.c[0],r=Math.min(e.r*.35,3)*Math.sqrt((t+1)/s);u.push([e.c[0]+Math.cos(n)*r,e.c[1]+Math.sin(n)*r*.7])}u.forEach(([e,t],n)=>{r.push({lon:e,lat:t,gesture:o.gesture,speed:o.speed*(.8+a.strength*.5),color:o.second&&n%2?o.second:o.color})})}d.setMembers(r),f.setPeople(i)},x=()=>{v=_===`mood`&&!y||C.wantsCrowd,d.show(v),S.worldOpen||o.setOverlay(_===`mood`||D.open?[]:null)},S=new h_(e,o,{select:e=>ke(e,!0),closeSelection:()=>{G.select(null),S.tab=`now`},openMethods:()=>j.show(),setLens:e=>{_=e,bl(),s.setLens(e),s.setOverview(e!==`power`),x()},setWorld:e=>{e?C.show():C.hide(),x()},focusWorld:()=>e.cam.flyTo(e.cam.lon,Math.max(-25,Math.min(40,e.cam.lat)),2.3)});S.mount();let C=new av(e,o,s,{select:e=>ke(e,!0),close:()=>S.closeWorld(),crowdChanged:()=>x()}),w=new Tv(e,{select:e=>ke(e,!0),openWorld:()=>S.openWorld(),spotlight:(e,t)=>s.setSpotlight(e,t)});for(let e of[`pointerdown`,`wheel`,`touchstart`])Ev.addEventListener(e,()=>{w.lastTouch=performance.now()},{passive:!0});let T=new K_({openStory:e=>{F(),E.show(Math.max(0,E.stories.findIndex(t=>t.id===e)))},onClose:()=>{ae=performance.now()}});document.getElementById(`catch-me-up`)?.addEventListener(`click`,()=>T.show());let E=new L_(e,{select:e=>ke(e,!0),spotlight:(e,t)=>s.setSpotlight(e,t),onOpenChange:()=>{document.getElementById(`open-desk`)?.classList.toggle(`on`,E.open),E.open?(G.select(null),S.closeWorld(),u.hide(0),E.currentId&&!jv&&Sd(`news/${encodeURIComponent(E.currentId)}`)):(location.hash.startsWith(`#/news`)&&Sd(G.selection?xd(G.selection.kind,G.selection.key):``),we()),Ae()}});document.getElementById(`open-desk`)?.addEventListener(`click`,()=>E.open?E.close():E.show(0));let D=new Uh(e,s,{changed:()=>{D.open&&(S.closeWorld(),u.hide(0)),x(),Ae(),D.open||we()},spotlight:(e,t)=>s.setSpotlight(e,t)});document.addEventListener(`click`,e=>{let t=e.target.closest?.(`[data-learn]`);t&&(F(),E.open&&E.close(),G.select(null),D.show(t.dataset.learn||void 0))});let O=!1,k=new Kh({beforeOpen:()=>{O=jv||S.worldOpen,jv=!1,window.clearTimeout(ce),C.stopTour(),S.closeMenus(),D.close(),E.open&&E.close(),N.open&&N.close(),M.open&&M.close(),G.select(null),ee.finish();try{localStorage.setItem(`pv-tour-seen`,`1`)}catch{}document.getElementById(`open-help`)?.classList.remove(`nudge`)},afterClose:()=>{ae=performance.now(),O&&de()},setView:(t,{rings:n})=>{t===`home`?(S.worldOpen||S.openWorld(),C.stopTour()):S.worldOpen&&S.closeWorld(),t===`map`&&(n||e.cam.alt<1.5)&&e.cam.flyTo(n?-98:e.cam.lon,n?36:e.cam.lat,Math.max(1.7,e.cam.alt),{ms:1400})},globeCircle:()=>{let t=e.cam,n=1/(1+t.alt),r=e.size.h/2*(n/Math.sqrt(1-n*n))/Math.tan(t.camera.fov*Math.PI/360);return{...Se(),r}},ringsCircle:()=>o.chartSpot(`US`)}),A=new md(()=>S.openMapGuide(),()=>j.show()),j=new vd,M=new Oh(e=>ke(e,!0)),N=new Bh(e,o,s,{changed:()=>{y=N.open,x(),u.hide(0),Ae()},select:e=>ke(e,!0)}),ee=new Nh;document.addEventListener(`click`,e=>{let t=e.target;t.closest?.(`#open-dictionary, [data-open-dictionary]`)&&M.show();let n=t.closest?.(`[data-dict]`);n&&M.show(n.dataset.dict),t.closest?.(`[data-time]`)&&(F(),jv=!1,C.stopTour(),E.open&&E.close(),D.close(),G.select(null),S.closeWorld(),S.closeMenus(),N.show());let r=(t.closest?.(`#term-pop`))?.dataset.term??(window.matchMedia(`(hover: hover)`).matches?t.closest?.(`.term`)?.dataset.term:void 0);r&&(document.getElementById(`term-pop`).hidden=!0,M.show(r))}),document.getElementById(`open-help`)?.addEventListener(`click`,()=>k.show()),document.getElementById(`open-info`)?.addEventListener(`click`,()=>A.show()),document.addEventListener(`click`,e=>{e.target.closest?.(`[data-methods]`)&&j.show()}),document.getElementById(`pause-motion`)?.addEventListener(`click`,()=>dd.set(!dd.paused)),dd.show(),document.addEventListener(`click`,e=>{let t=e.target.closest?.(`[data-lang]`);t?.dataset.lang&&Zu(t.dataset.lang)});let te=Qu();if(te){let e=document.createElement(`button`);e.className=`lang-offer glass`,e.dataset.lang=te,e.innerHTML=`<b>Ver En Español</b><small>Traducción hecha por IA</small>`,document.getElementById(`app`)?.append(e),setTimeout(()=>e.remove(),2e4)}document.addEventListener(`click`,e=>{let t=e.target.closest?.(`[data-share]`);if(!t)return;let n=/^country\/(.+)$/.exec(t.dataset.share??``),r=n?`${location.origin}${location.pathname}go/${n[1].toLowerCase()}.html`:`${location.origin}${location.pathname}#/${t.dataset.share}`,i=`${t.dataset.shareTitle??`World Politics`} | Politiview`,a=e=>{let n=t.textContent;t.textContent=e,cd(e),setTimeout(()=>{t.textContent=n},2200)};navigator.share?navigator.share({title:i,url:r}).catch(()=>void 0):navigator.clipboard.writeText(r).then(()=>a(`Link Copied`)).catch(()=>a(r))});let ne=(e,t,n,r=!1)=>{let i=()=>document.getElementById(t),a=e.show.bind(e),o=e.close.bind(e);e.show=(...e)=>{let t=a(...e),o=i();return o&&(o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-modal`,`true`),o.setAttribute(`aria-label`,n),ad(o,r)),t},e.close=()=>{let t=e.open,n=o(),r=i();return t&&r&&sd(r),n}},re=()=>Sd(G.selection?xd(G.selection.kind,G.selection.key):``),ie=(e,t,n)=>{let r=e.show.bind(e),i=e.close.bind(e),a=``;e.show=(...i)=>{e.open||(a=document.title);let o=r(...i);return Sd(n(i[0])),document.title=`${t} | Politiview`,o},e.close=()=>{let t=e.open,n=i();return t&&(re(),document.title=a||`Politiview`),n}};ie(M,`The Dictionary`,e=>e?`dictionary/${encodeURIComponent(String(e))}`:`dictionary`),ie(D,`Get To Know A Country`,e=>e?`learn/${encodeURIComponent(String(e))}`:`learn`),ie(N,`The Time Machine`,()=>`time`),ie(j,`How We Know`,()=>`methods`),ie(A,`About Politiview`,()=>`about`),ne(M,`dictionary`,`The Dictionary`,!0),ne(k,`tutorial`,`How It Works`),ne(D,`learn`,`Get To Know A Country`),ne(T,`catchup`,`Catch Me Up`,!0),ne(E,`desk`,`The News`);try{localStorage.getItem(`pv-tour-seen`)||document.getElementById(`open-help`)?.classList.add(`nudge`)}catch{}G.on(`buzz`,()=>b()),G.on(`news`,()=>{T.maybeOpen(),E.setStories(G.news),w.refresh(),b(),_===`mood`&&s.repaint(),ge||we()});let ae=performance.now(),oe=0,P=!1,se=0,ce=0,F=()=>{jv&&(jv=!1,ee.finish(),window.clearTimeout(ce),C.stopTour(),E.open&&E.close(),S.closeWorld())},le=e=>{S.worldOpen||S.openWorld(),e&&C.nextChapter(),C.startTour()},ue=()=>{jv=!0,oe=0,xe(null),u.hide(0),le(!1)},de=()=>{E.open&&E.close(),T.open&&T.close(),A.open&&A.close(),j.open&&j.close(),M.open&&M.close(),N.open&&N.close(),k.open&&k.close(),D.close(),S.closeMenus(),ue()};C.onTourStep=()=>{if(!(!jv||T.open||A.open||M.open||j.open)){if(oe++,oe%3==0&&E.stories.length){let e=se++%Math.min(E.stories.length,6);C.stopTour(),S.closeWorld(),E.show(e),E.hold(),ce=window.setTimeout(()=>{jv&&(E.close(),le(!0))},17e3)}else C.nextChapter()}};let fe=e=>{if(ae=performance.now(),!jv)return;let t=e.target;t?.closest?.(`#catchup, #about, #methods, #open-info, #pause-motion, #dictionary, #open-dictionary, [data-open-dictionary], [data-dict], [data-methods], #term-pop`)||(t?.closest?.(`#chapters, #desk, [data-world], [data-time], #open-desk, #tutorial, #open-help`)?(jv=!1,window.clearTimeout(ce),C.stopTour()):e instanceof KeyboardEvent&&[`Shift`,`Control`,`Alt`,`Meta`,`Tab`].includes(e.key)||(e instanceof WheelEvent&&e.deltaY>0?P=!0:F()))};for(let e of[`pointerdown`,`wheel`,`keydown`,`touchstart`])window.addEventListener(e,fe,{passive:!0,capture:!0});let pe=null;window.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(pe&&Math.hypot(e.clientX-pe.x,e.clientY-pe.y)>6&&(ae=performance.now()),pe={x:e.clientX,y:e.clientY})},{passive:!0}),w.openStory=e=>E.show(Math.max(0,E.stories.findIndex(t=>t.id===e)));let me=[];function he(){let t=[];e.layers.countries?.meta.forEach(e=>{let n=Number(e.x?.rank??9),r=n<=2?1.35:n<=3?1:n<=4?.72:n<=5?.5:n<=6?.35:.2;t.push({id:e.k,text:e.n,lon:e.c[0],lat:e.c[1],maxAlt:r,minAlt:.12,priority:60-n*5+Math.min(10,e.a/40),cls:`country`})}),e.layers.admin1?.meta.forEach(e=>{let n=e.r>5?.5:e.r>2.5?.32:e.r>1.2?.2:e.r>.5?.12:.07;t.push({id:e.k,text:e.n,lon:e.c[0],lat:e.c[1],maxAlt:n,minAlt:.008,priority:22+Math.min(14,e.a/3),cls:`region`})});for(let e of me){let[n,r,i,a,o,s]=e,c=a?.34:i>4e6?.24:i>1e6?.14:i>2e5?.06:o<=8?.03:.018;t.push({id:`c:${s}:${n}`,text:s,lon:n,lat:r,maxAlt:c,priority:(a?30:8)+Math.log10(Math.max(i,10))*2,cls:a?`city capital`:`city`})}l.setSpecs(t)}let ge=null,_e=null,ve=!1,ye=!1,be=0;new H;let xe=t=>{ge&&t&&ge.mesh===t.mesh&&ge.index===t.index||(ge&&e.layers[ge.mesh]?.setGlow(ge.index,0),ge=t,t&&e.layers[t.mesh]?.setGlow(t.index,1))},Se=()=>({x:e.size.w/2-e.cam.shiftX.value,y:e.size.h/2-e.cam.shiftY.value}),Ce=0;function we(){if(window.clearTimeout(Ce),G.selection||E.open||S.worldOpen||D.open||N.open){u.hide(0);return}let{countries:t,admin1:n,uscd:r,uscounty:i}=e.layers;if(s.level===3&&s.seat!==null&&r){let t=r.meta[s.seat],a=s.hit.uscounty===null?void 0:i?.meta[s.hit.uscounty];u.show(`d:${t.k}:${a?.k}`,lm(t.k,a?.k??null,e),t.c[0],t.c[1]),S.setCrumb([`United States`,String(n?.meta[s.region]?.n??``),t.k])}else if(s.level>=2&&s.region!==null&&n){let t=n.meta[s.region],r=G.world.countries[String(t.x?.cc??``)]?.name??``;t.x?.cc===`USA`?u.show(`s:${t.k}`,om(String(t.x.iso??``).replace(`US-`,``)),t.c[0],t.c[1]):u.show(`r:${t.k}`,sm(t.k,e),t.c[0],t.c[1]),S.setCrumb([r,t.n])}else{if(s.country!==null&&t){let e=t.meta[s.country],n=G.world.countries[e.k];if(n){S.setCrumb([n.name]),Ce=window.setTimeout(()=>{s.country!==null&&t.meta[s.country].k===e.k&&!ge&&!G.selection&&u.show(`c:${e.k}`,Qp(n),e.c[0],e.c[1])},u.isVisible?0:170);return}}S.setCrumb([]),u.hide()}}function Te(t,n,r){if(!_e)return;if(G.selection||E.open){xe(null);return}window.clearTimeout(Ce);let i=o.frontAt(n,r);if(i?.election)xe(null),u.show(`e:${i.id}`,dm(i.election),i.lon,i.lat),Ev.style.cursor=`pointer`;else{if(s.level<2||!e.layers.admin1){let n=t.countries,r=n===null?void 0:e.layers.countries?.meta[n],i=r?G.world.countries[r.k]:void 0;if(r&&i){xe({mesh:`countries`,index:n}),u.show(`c:${r.k}`,Qp(i),r.c[0],r.c[1]),Ev.style.cursor=`pointer`;return}}else{let n=t.admin1,r=n===null?void 0:e.layers.admin1?.meta[n];if(r){Ev.style.cursor=`pointer`;let i=r.x?.cc===`USA`;if(i&&s.level===3){let n=t.uscd===null?void 0:e.layers.uscd?.meta[t.uscd],r=t.uscounty===null?void 0:e.layers.uscounty?.meta[t.uscounty];if(n||r){xe(n?{mesh:`uscd`,index:t.uscd}:{mesh:`uscounty`,index:t.uscounty});let i=r??n;u.show(`d:${n?.k}:${r?.k}`,lm(n?.k??null,r?.k??null,e),i.c[0],i.c[1]);return}}xe({mesh:`admin1`,index:n}),i?u.show(`s:${r.k}`,om(String(r.x?.iso??``).replace(`US-`,``)),r.c[0],r.c[1]):u.show(`r:${r.k}`,sm(r.k,e),r.c[0],r.c[1]);return}}xe(null),Ev.style.cursor=`grab`,we()}}function Ee(){if(ye||!_e)return;if(jv||D.open){ve=!1;return}ye=!0,ve=!1,be=performance.now();let{x:t,y:n}=_e;e.pickAll(t,n).then(e=>{jv||Te(e,t,n)}).catch(()=>void 0).finally(()=>{ye=!1})}s.onChange=t=>{let n=t.country===null?null:e.layers.countries?.meta[t.country]?.k??null,r=t.region===null?``:String(e.layers.admin1?.meta[t.region]?.x?.iso??``);o.setLevel(t.level,n,r.startsWith(`US-`)?r.slice(3):null),S.setHint(t.level),S.setCloseUpUs(t.level>=2&&t.country!==null&&e.layers.countries?.meta[t.country]?.k===`USA`),ge||we()};function De(t){let{countries:n,admin1:r,uscd:i,uscounty:a}=e.layers;switch(t.kind){case`country`:return{mesh:`countries`,m:n?.meta[n.byKey.get(t.key)??-1]};case`admin1`:return{mesh:`admin1`,m:r?.meta[r.byKey.get(t.key)??-1]};case`seat`:return{mesh:`uscd`,m:i?.meta[i.byKey.get(t.key)??-1]};case`county`:return{mesh:`uscounty`,m:a?.meta[a.byKey.get(t.key)??-1]};case`state`:return{mesh:`admin1`,m:r?.meta[e.usStateIndex.get(t.key)??-1]};case`race`:{let n=G.races.get(t.key);return n?n.office===`house`?{mesh:`uscd`,m:i?.meta[i.byKey.get(n.seat)??-1]}:{mesh:`admin1`,m:r?.meta[e.usStateIndex.get(n.state)??-1]}:{mesh:`countries`,m:void 0}}case`election`:{let e=G.worldElections.find(e=>e.id===t.key);return{mesh:`countries`,m:e?n?.meta[n.byKey.get(e.country)??-1]:void 0}}}}function Oe(t){let{mesh:n,m:r}=De(t);if(!r)return;let i=Math.max(r.r,.15)*Cl*1.32;i=n===`countries`?Math.max(Math.min(i,34*Cl),2.6*Cl):n===`admin1`?Math.max(Math.min(i,14*Cl),.9*Cl):Math.max(Math.min(i,3.8*Cl),.22*Cl),e.cam.flyTo(r.c[0],r.c[1],e.cam.altForView(i))}function ke(e,t){let n=e.indexOf(`:`),r={kind:e.slice(0,n),key:e.slice(n+1)};S.tab=`now`,S.closeWorld(),G.select(r),r.kind===`country`&&(s.focusCountryByKey(r.key),s.locked=!0),t&&Oe(r)}function Ae(t=.05){let{w:n,h:r}=e.size,{top:i,bottom:a,left:o,right:s}=je(),c=n/2-(o+s)/2,l=Math.max(-r*.2,Math.min(r*.3,r/2-(i+a)/2));Math.abs(c-e.cam.shiftX.target)>6&&(e.cam.shiftX.target=c),Math.abs(l-e.cam.shiftY.target)>8&&(e.cam.shiftY.target=l);let u=S.worldOpen||N.open;(u||n<720&&e.cam.alt>1.8&&!G.selection&&!E.open)&&e.cam.keepPlanetWithin(Math.min(s-o,a-i),u,t)}function je(){let{w:t,h:n}=e.size,r=e=>{if(!e)return!1;let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`&&Number(t.opacity)>.05},i=0,a=n,o=0,s=t;for(let e of document.querySelectorAll(`#top-left, #top-right, #catch-me-up, #ticker`))r(e)&&(i=Math.max(i,e.getBoundingClientRect().bottom));let c=t<720,l=[`body.has-sheet #sheet`,`body.has-world #ch-stack`,`body.has-learn .learn-caption`,`body.has-time .tm-panel`,...c?[`#lens-dock`,`#insight.open`]:[]];for(let e of l){let n=document.querySelector(e);if(!r(n))continue;let i=n.getBoundingClientRect();c||i.width>t*.6?a=Math.min(a,i.top):i.left<t*.3?o=Math.max(o,i.right):i.right>t*.7?s=Math.min(s,i.left):a=Math.min(a,i.top)}return c&&u.dockedHeight&&(a=Math.min(a,n-u.dockedHeight-14)),{top:i,bottom:a,left:o,right:s}}S.onLayoutChange=()=>Ae();let Me=e=>e?e.kind===`country`?e.key:e.kind===`admin1`?e.key.split(`-`)[0]:e.kind===`election`?G.worldElections.find(t=>t.id===e.key)?.country??null:`USA`:null,Ne=null,I=!1;G.on(`selection`,()=>{if(Sd(G.selection?xd(G.selection.kind,G.selection.key):``),G.selection&&!I&&(Ne=document.activeElement),G.selection&&(jv&&F(),D.close(),E.open&&E.close()),f.pin(Me(G.selection)),G.selection||(s.locked=!1),S.renderSheet(),Ae(),G.selection){u.hide(0);let e=()=>{let e=document.getElementById(`sheet`),t=e?.querySelector(`h2, h3`);t&&!e?.contains(document.activeElement)&&(t.tabIndex=-1,t.focus({preventScroll:!0}))};e(),setTimeout(e,80),setTimeout(e,420);let t=document.querySelector(`#sheet h2, #sheet h3`)?.textContent?.trim()??``;document.getElementById(`sheet`)?.setAttribute(`aria-label`,t||`Details`),document.title=t?`${t} | Politiview`:`Politiview`,t&&cd(`${t} opened.`)}else we(),document.title=`Politiview`,I&&((Ne&&document.contains(Ne)&&Ne!==document.body&&Ne.getClientRects().length?Ne:Ev).focus({preventScroll:!0}),cd(`Closed.`));I=!!G.selection}),window.addEventListener(`resize`,()=>Ae(.6)),e.cam.onUserMove=()=>{e.cam.isDragging&&(s.locked=!1)};let Pe=null;Ev.addEventListener(`pointerdown`,e=>{Pe={x:e.clientX,y:e.clientY,t:performance.now()}}),Ev.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(_e={x:e.clientX,y:e.clientY},ve=!0)}),Ev.addEventListener(`pointerleave`,()=>{_e=null,xe(null),we()}),Ev.addEventListener(`pointerup`,t=>{if(!Pe)return;let n=Math.hypot(t.clientX-Pe.x,t.clientY-Pe.y),r=performance.now()-Pe.t<450;if(Pe=null,n>6||!r)return;if(N.open){e.pickAll(t.clientX,t.clientY).then(t=>{let n=t.countries===null?void 0:e.layers.countries?.meta[t.countries];n&&N.inspect(n.k)}).catch(()=>void 0);return}let i=o.frontAt(t.clientX,t.clientY);i?ke(i.select,!0):e.pickAll(t.clientX,t.clientY).then(e=>{let t=Fe(e);t?ke(t,!0):G.select(null)}).catch(()=>void 0)});function Fe(t){if(s.level<2||!e.layers.admin1){let n=t.countries===null?void 0:e.layers.countries?.meta[t.countries];return n?`country:${n.k}`:null}let n=t.admin1===null?void 0:e.layers.admin1?.meta[t.admin1];if(!n)return null;if(n.x?.cc!==`USA`)return`admin1:${n.k}`;if(s.level===3&&t.uscd!==null){let n=e.layers.uscd?.meta[t.uscd]?.k;if(n)return`seat:${n}`}return`state:${String(n.x.iso??``).replace(`US-`,``)}`}let Ie=0;e.onFrame((t,n)=>{s.update(t,Se());let r=dd.paused?0:t;o.update(r,n),l.update(),u.update(t);let i=e.size.w<720,a=_===`mood`;if(w.update(!N.open&&!G.selection&&!S.worldOpen&&!E.open&&!T.open&&!D.open&&!(i&&a)&&(i?!u.isVisible:s.level===0||!u.isVisible)),dd.paused||E.update(!N.open&&!G.selection&&!S.worldOpen&&!E.open&&!a&&!D.open),N.update(t),D.update(),C.update(r),d.update(r),f.update(r),ee.update(t,S.worldOpen&&!E.open&&!G.selection&&!A.open&&!M.open&&!k.open&&!T.open&&!D.open,Se()),!jv&&!dd.paused&&document.activeElement!==Ev){let t=!!G.selection||E.open||T.open||D.open||A.open||j.open||M.open||N.open||k.open||!!document.querySelector(`#search:not([hidden]), #drawer:not([hidden])`);(!t&&!S.worldOpen&&e.cam.alt>2.6&&performance.now()-e.cam.zoomedOutAt<800||performance.now()-ae>(t?18e4:3e4))&&de()}P&&performance.now()-e.cam.zoomedOutAt>1200&&(P=!1,e.cam.flyTo(e.cam.lon,e.cam.lat,2.3,{ms:1400})),e.cam.spinAfter=S.worldOpen?1200:16e3,e.cam.spinSpeed=S.worldOpen?2.6:.9,e.cam.autoRotate=!dd.paused&&document.activeElement!==Ev&&!k.open&&(S.worldOpen||(N.open?N.playing:!G.selection&&s.level===0&&!E.open&&!D.open));let c=performance.now();if(c-Ie>300&&(Ie=c,Ae()),_e&&!e.cam.isDragging){let t=e.cam.speed>.002||e.cam.isFlying;(ve&&c-be>50||t&&c-be>220)&&Ee()}});let L=!1;G.on(`races`,()=>{L=!0}),G.on(`event`,e=>{e&&S.toast(e)}),G.on(`world`,()=>{o.sync(),S.renderElectionLabel()}),setInterval(()=>{L&&(L=!1,s.repaint(),o.sync(),S.renderSheet(),S.renderElectionLabel(),b(),ge||we())},600);function Le(){{let e=a.serverTime,t=document.createElement(`div`);t.id=`stale-note`,document.body.append(t);let n=()=>{let n=Date.now()-Date.parse(e);t.classList.toggle(`on`,n>72e5),t.textContent=`Live Updates Paused, Last Updated ${c(e)}`};n(),window.setInterval(()=>fetch(m(),{cache:`no-cache`}).then(e=>e.json()).then(t=>{G.connected=!0,t.serverTime!==e&&(e=t.serverTime,R(t.version),G.applySnapshot(t)),n()}).catch(()=>{G.connected=!1,n()}),18e4);return}}function R(t){let n=G.version;n&&t.sha!==n.sha&&n.sha!==`dev`&&(S.toast({id:`deploy`,at:new Date().toISOString(),kind:`deploy`,text:`${t.short}: ${t.subject}. Reloading.`}),Nv(e),setTimeout(()=>location.reload(),3500))}G.applySnapshot(a);let z=Pv();if(z)e.cam.lon=z.lon,e.cam.lat=z.lat,e.cam.alt=z.alt,e.cam.flyTo(z.lon,z.lat,z.alt,{ms:1});else{let t=o.fronts.find(e=>e.level===0&&e.phase===`live`);e.cam.lon=t?.lon??-30,e.cam.lat=t?.lat??25,e.cam.alt=3.6}l.nearby=(e,t,n)=>o.pieNear(e,t,n),l.skip=e=>o.hasTag(e),E.chartAt=(e,t)=>o.pieNear(e,t),w.chartAt=(e,t)=>o.pieNear(e,t),w.named=e=>o.hasTag(e),o.setLevel(0),o.sync(),s.repaint(),he(),S.setHint(0),S.renderElectionLabel();let Re=bd(location.hash);!Re&&!z?.sel&&z?.home!==!1&&ue(),Le(),e.start(),document.getElementById(`boot`)?.classList.add(`done`),setTimeout(()=>document.body.classList.remove(`booting`),500);for(let t of[2e4,9e4])setTimeout(()=>window.__report?.(`fps`,`${Math.round(e.fps)} fps`),t);let ze=window.__report,Be=e.renderer.getContext(),Ve=Be.getExtension(`WEBGL_debug_renderer_info`);ze?.(`ready`,Ve?String(Be.getParameter(Ve.UNMASKED_RENDERER_WEBGL)):``),Ev.addEventListener(`webglcontextlost`,()=>ze?.(`gpu-lost`,`The browser took the graphics context away, usually from running out of memory.`)),setTimeout(()=>document.getElementById(`boot`)?.remove(),1200);let He=()=>{let e=bd(location.hash);if(e){if(j.open&&j.close(),A.open&&A.close(),M.open&&M.close(),e.name!==`news`&&E.open&&E.close(),e.name===`select`){let t=e.spec.indexOf(`:`),n=e.spec.slice(0,t),r=e.spec.slice(t+1),i=n===`country`?{PSE:`PSX`,XKX:`KOS`,ESH:`SAH`,SSD:`SDS`}[r.toUpperCase()]??r.toUpperCase():r;if(!(n===`country`?G.world.countries[i]:n===`state`?G.us.stateNames[i]:n===`seat`?G.us.representatives[i]||G.races.has(`H:${i}`):n!==`race`||G.races.has(i))){G.select(null),Sd(``),S.notice(`We Couldn't Find That Page`);return}ke(`${n}:${i}`,!0)}else e.name===`news`?E.show(Math.max(0,e.id?E.stories.findIndex(t=>t.id===e.id):0)):e.name===`methods`?j.show():e.name===`about`?A.show():e.name===`dictionary`?M.show(e.word):e.name===`learn`?(G.select(null),D.show(e.key)):e.name===`time`&&(G.select(null),S.closeWorld(),N.show())}};window.addEventListener(`hashchange`,He),He();let Ue=document.getElementById(`lens-dock`);Ue&&new ResizeObserver(()=>document.documentElement.style.setProperty(`--dock-h`,`${Ue.offsetHeight}px`)).observe(Ue);let We=0,Ge=0,Ke=0;Ev.tabIndex=0,Ev.setAttribute(`role`,`application`),Ev.setAttribute(`aria-label`,`The globe. Use the arrow keys to turn it, plus and minus to zoom, and Enter to open the country in the middle. Press slash to search. Everything here is also on the plain text pages.`);let qe=()=>{let t=Math.PI/180,n=e.cam.lat*t,r=e.cam.lon*t,i=null,a=1/0;for(let o of e.layers.countries?.meta??[]){let e=o.c[1]*t,s=o.c[0]*t,c=Math.sin(n)*Math.sin(e)+Math.cos(n)*Math.cos(e)*Math.cos(r-s),l=Math.acos(Math.max(-1,Math.min(1,c)))/t-Math.min(o.r,25)*.6;l<a&&(a=l,i={n:o.n,k:o.k})}return i};Ev.addEventListener(`keydown`,t=>{let n=e.cam,r=Math.max(1.5,n.alt*7),i=(e,r,i)=>{t.preventDefault(),n.flyTo(e,Math.max(-75,Math.min(80,r)),i,{ms:320}),window.clearTimeout(We),We=window.setTimeout(()=>{let e=qe();e&&cd(`${e.n} is in the middle. Press Enter to open it.`)},420)};if(t.key===`ArrowLeft`)i(n.lon-r,n.lat,n.alt);else if(t.key===`ArrowRight`)i(n.lon+r,n.lat,n.alt);else if(t.key===`ArrowUp`)i(n.lon,n.lat+r,n.alt);else if(t.key===`ArrowDown`)i(n.lon,n.lat-r,n.alt);else if(t.key===`+`||t.key===`=`||t.key===`-`||t.key===`_`){let e=performance.now()<Ke?Ge:n.alt;Ge=t.key===`+`||t.key===`=`?Math.max(.02,e*.72):Math.min(3,e/.72),Ke=performance.now()+700,i(n.lon,n.lat,Ge)}else if(t.key===`Enter`){let e=qe();if(e){t.preventDefault(),ke(`country:${e.k}`,!0);let n=document.getElementById(`sheet`);if(n){n.tabIndex=-1;for(let e of[120,420])setTimeout(()=>{n.contains(document.activeElement)||n.focus({preventScroll:!0})},e)}}}}),window.__ge={globe:e,store:G,flow:o,focus:s,selectFromSpec:ke,explain:Op,chrome:S,moodFor:xl,MOODS:pl,isHome:()=>jv};let Je=!1,Ye=()=>{Je||(Je=!0,e.loadDetailLayers().then(()=>{s.indexRegions(),o.sync(),s.repaint(),S.buildSearchIndex(),he(),z?.sel&&G.select(z.sel),G.selection&&G.selection.kind!==`country`&&Oe(G.selection)}).catch(e=>console.error(`detail layers`,e)))};for(let e of[`pointerdown`,`wheel`,`touchstart`,`keydown`])Ev.addEventListener(e,Ye,{passive:!0,once:!0});document.getElementById(`open-search`)?.addEventListener(`click`,Ye,{once:!0}),document.getElementById(`open-search`)?.addEventListener(`click`,()=>Ze(),{once:!0}),document.getElementById(`search-input`)?.addEventListener(`focus`,Ye,{once:!0}),window.addEventListener(`keydown`,e=>{e.key===`/`&&Ye()}),G.on(`selection`,()=>{G.selection&&Ye()}),(z?.sel||Re)&&Ye();let Xe=navigator.connection;Xe?.saveData||Xe?.effectiveType&&Xe.effectiveType!==`4g`||setTimeout(Ye,25e3);function Ze(){Qe()}let Qe=()=>{e.loadCloseUpLayers().then(e=>{e&&(s.indexRegions(),o.sync(),s.repaint(),S.buildSearchIndex(),G.selection&&G.selection.kind!==`country`&&Oe(G.selection))}).catch(e=>console.error(`close-up layers`,e))};e.onFrame(()=>{e.cam.alt<.9&&Qe()}),G.on(`selection`,()=>{let e=G.selection?.kind;e&&e!==`country`&&e!==`admin1`&&Qe()}),document.getElementById(`open-search`)?.addEventListener(`click`,Qe,{once:!0}),Fv(p(`data/us-president-county.json`)).then(e=>{G.usCounty=e}),fetch(p(`data/cities.json`)).then(e=>e.json()).then(e=>{me=e,g=e,he(),b()}).catch(()=>void 0),Promise.all([`americas`,`europe`,`africa`,`asia`,`oceania`].map(e=>Fv(p(`data/explain/${e}.json`)))).then(e=>{for(let t of e)Object.assign(Op.countries,t);ge||we(),S.renderSheet()}),Fv(p(`data/explain/glossary.json`)).then(e=>{Op.glossary=e,S.renderSheet()});let $e=()=>h(`parties.json`).then(e=>e.ok?e.json():{notes:{}}).then(e=>{G.notes=e.notes??{},S.refreshSheet()}).catch(()=>void 0);$e(),Fv(p(`data/us-president-history.json`)).then(e=>{e.years&&(G.usHistory=e,S.refreshSheet())}),setInterval(()=>void $e(),12e5),Promise.all([`world-status.json`,`country-stats.json`,`ipu.json`].map(e=>h(e).then(e=>e.ok?e.json():{}).catch(()=>({})))).then(([e,t,n])=>{K.world=e,K.byCountry=t,K.ipu=n,C.refresh(),S.renderSheet(),w.refresh(),b()}),w.refresh()}Iv().catch(e=>{console.error(e),Av(`Couldn't load the map: ${e instanceof Error?e.message:String(e)}`)});