(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../wwwroot/lib/decimal.js/decimal.min.js":
/*!************************************************!*\
  !*** ../wwwroot/lib/decimal.js/decimal.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* decimal.js v10.2.0 https://github.com/MikeMcl/decimal.js/LICENCE */
!function(n){"use strict";var h,R,e,o,u=9e15,g=1e9,m="0123456789abcdef",t="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",r="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",c={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-u,maxE:u,crypto:!1},N=!0,f="[DecimalError] ",w=f+"Invalid argument: ",s=f+"Precision limit exceeded",a=f+"crypto unavailable",L=Math.floor,v=Math.pow,l=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,d=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,p=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,b=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,T=1e7,U=7,E=t.length-1,x=r.length-1,y={name:"[object Decimal]"};function M(n){var e,i,t,r=n.length-1,s="",o=n[0];if(0<r){for(s+=o,e=1;e<r;e++)t=n[e]+"",(i=U-t.length)&&(s+=C(i)),s+=t;o=n[e],(i=U-(t=o+"").length)&&(s+=C(i))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function q(n,e,i){if(n!==~~n||n<e||i<n)throw Error(w+n)}function O(n,e,i,t){var r,s,o;for(s=n[0];10<=s;s/=10)--e;return--e<0?(e+=U,r=0):(r=Math.ceil((e+1)/U),e%=U),s=v(10,U-e),o=n[r]%s|0,null==t?e<3?(0==e?o=o/100|0:1==e&&(o=o/10|0),i<4&&99999==o||3<i&&49999==o||5e4==o||0==o):(i<4&&o+1==s||3<i&&o+1==s/2)&&(n[r+1]/s/100|0)==v(10,e-2)-1||(o==s/2||0==o)&&0==(n[r+1]/s/100|0):e<4?(0==e?o=o/1e3|0:1==e?o=o/100|0:2==e&&(o=o/10|0),(t||i<4)&&9999==o||!t&&3<i&&4999==o):((t||i<4)&&o+1==s||!t&&3<i&&o+1==s/2)&&(n[r+1]/s/1e3|0)==v(10,e-3)-1}function D(n,e,i){for(var t,r,s=[0],o=0,u=n.length;o<u;){for(r=s.length;r--;)s[r]*=e;for(s[0]+=m.indexOf(n.charAt(o++)),t=0;t<s.length;t++)s[t]>i-1&&(void 0===s[t+1]&&(s[t+1]=0),s[t+1]+=s[t]/i|0,s[t]%=i)}return s.reverse()}y.absoluteValue=y.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),_(n)},y.ceil=function(){return _(new this.constructor(this),this.e+1,2)},y.comparedTo=y.cmp=function(n){var e,i,t,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(t=o.length)<(r=u.length)?t:r;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return t===r?0:r<t^c<0?1:-1},y.cosine=y.cos=function(){var n,e,i=this,t=i.constructor;return i.d?i.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+U,t.rounding=1,i=function(n,e){var i,t,r=e.d.length;t=r<32?(i=Math.ceil(r/3),(1/J(4,i)).toString()):(i=16,"2.3283064365386962890625e-10");n.precision+=i,e=W(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(t,z(t,i)),t.precision=n,t.rounding=e,_(2==o||3==o?i.neg():i,n,e,!0)):new t(1):new t(NaN)},y.cubeRoot=y.cbrt=function(){var n,e,i,t,r,s,o,u,c,f,a=this,h=a.constructor;if(!a.isFinite()||a.isZero())return new h(a);for(N=!1,(s=a.s*v(a.s*a,1/3))&&Math.abs(s)!=1/0?t=new h(s.toString()):(i=M(a.d),(s=((n=a.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=v(i,1/3),n=L((n+1)/3)-(n%3==(n<0?-1:2)),(t=new h(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=a.s),o=(n=h.precision)+3;;)if(f=(c=(u=t).times(u).times(u)).plus(a),t=F(f.plus(a).times(u),f.plus(c),o+2,1),M(u.d).slice(0,o)===(i=M(t.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(r||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(_(t,n+1,1),e=!t.times(t).times(t).eq(a));break}if(!r&&(_(u,n+1,0),u.times(u).times(u).eq(a))){t=u;break}o+=4,r=1}return N=!0,_(t,n,h.rounding,e)},y.decimalPlaces=y.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=((n=e.length-1)-L(this.e/U))*U,n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},y.dividedBy=y.div=function(n){return F(this,new this.constructor(n))},y.dividedToIntegerBy=y.divToInt=function(n){var e=this.constructor;return _(F(this,new e(n),0,1,1),e.precision,e.rounding)},y.equals=y.eq=function(n){return 0===this.cmp(n)},y.floor=function(){return _(new this.constructor(this),this.e+1,3)},y.greaterThan=y.gt=function(n){return 0<this.cmp(n)},y.greaterThanOrEqualTo=y.gte=function(n){var e=this.cmp(n);return 1==e||0===e},y.hyperbolicCosine=y.cosh=function(){var n,e,i,t,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,t=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,e=(r=s.d.length)<32?(1/J(4,n=Math.ceil(r/3))).toString():(n=16,"2.3283064365386962890625e-10"),s=W(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return _(s,o.precision=i,o.rounding=t,!0)},y.hyperbolicSine=y.sinh=function(){var n,e,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,(t=r.d.length)<3)r=W(s,2,r,r,!0);else{n=16<(n=1.4*Math.sqrt(t))?16:0|n,r=W(s,2,r=r.times(1/J(5,n)),r,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(f))))}return _(r,s.precision=e,s.rounding=i,!0)},y.hyperbolicTangent=y.tanh=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,F(i.sinh(),i.cosh(),t.precision=n,t.rounding=e)):new t(i.s)},y.inverseCosine=y.acos=function(){var n,e=this,i=e.constructor,t=e.abs().cmp(1),r=i.precision,s=i.rounding;return-1!==t?0===t?e.isNeg()?P(i,r,s):new i(0):new i(NaN):e.isZero()?P(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,e=e.asin(),n=P(i,r+4,s).times(.5),i.precision=r,i.rounding=s,n.minus(e))},y.inverseHyperbolicCosine=y.acosh=function(){var n,e,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(n=t.precision,e=t.rounding,t.precision=n+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,N=!1,i=i.times(i).minus(1).sqrt().plus(i),N=!0,t.precision=n,t.rounding=e,i.ln()):new t(i)},y.inverseHyperbolicSine=y.asinh=function(){var n,e,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,N=!1,i=i.times(i).plus(1).sqrt().plus(i),N=!0,t.precision=n,t.rounding=e,i.ln())},y.inverseHyperbolicTangent=y.atanh=function(){var n,e,i,t,r=this,s=r.constructor;return r.isFinite()?0<=r.e?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,t=r.sd(),Math.max(t,n)<2*-r.e-1?_(new s(r),n,e,!0):(s.precision=i=t-r.e,r=F(r.plus(1),new s(1).minus(r),i+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)},y.inverseSine=y.asin=function(){var n,e,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),i=s.precision,t=s.rounding,-1!==e?0===e?((n=P(s,i+4,t).times(.5)).s=r.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))},y.inverseTangent=y.atan=function(){var n,e,i,t,r,s,o,u,c,f=this,a=f.constructor,h=a.precision,l=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&h+4<=x)return(o=P(a,h+4,l).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(h+4<=x)return(o=P(a,h+4,l).times(.5)).s=f.s,o}for(a.precision=u=h+10,a.rounding=1,n=i=Math.min(28,u/U+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(N=!1,e=Math.ceil(u/U),t=1,c=f.times(f),o=new a(f),r=f;-1!==n;)if(r=r.times(c),s=o.minus(r.div(t+=2)),r=r.times(c),void 0!==(o=s.plus(r.div(t+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),N=!0,_(o,a.precision=h,a.rounding=l,!0)},y.isFinite=function(){return!!this.d},y.isInteger=y.isInt=function(){return!!this.d&&L(this.e/U)>this.d.length-2},y.isNaN=function(){return!this.s},y.isNegative=y.isNeg=function(){return this.s<0},y.isPositive=y.isPos=function(){return 0<this.s},y.isZero=function(){return!!this.d&&0===this.d[0]},y.lessThan=y.lt=function(n){return this.cmp(n)<0},y.lessThanOrEqualTo=y.lte=function(n){return this.cmp(n)<1},y.logarithm=y.log=function(n){var e,i,t,r,s,o,u,c,f=this,a=f.constructor,h=a.precision,l=a.rounding;if(null==n)n=new a(10),e=!0;else{if(i=(n=new a(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new a(i&&!i[0]?-1/0:1!=f.s?NaN:i?0:1/0);if(e)if(1<i.length)s=!0;else{for(r=i[0];r%10==0;)r/=10;s=1!==r}if(N=!1,o=V(f,u=h+5),t=e?Z(a,u+10):V(n,u),O((c=F(o,t,u,1)).d,r=h,l))do{if(o=V(f,u+=10),t=e?Z(a,u+10):V(n,u),c=F(o,t,u,1),!s){+M(c.d).slice(r+1,r+15)+1==1e14&&(c=_(c,h+1,0));break}}while(O(c.d,r+=10,l));return N=!0,_(c,h,l)},y.minus=y.sub=function(n){var e,i,t,r,s,o,u,c,f,a,h,l,d=this,p=d.constructor;if(n=new p(n),!d.d||!n.d)return d.s&&n.s?d.d?n.s=-n.s:n=new p(n.d||d.s!==n.s?d:NaN):n=new p(NaN),n;if(d.s!=n.s)return n.s=-n.s,d.plus(n);if(f=d.d,l=n.d,u=p.precision,c=p.rounding,!f[0]||!l[0]){if(l[0])n.s=-n.s;else{if(!f[0])return new p(3===c?-0:0);n=new p(d)}return N?_(n,u,c):n}if(i=L(n.e/U),a=L(d.e/U),f=f.slice(),s=a-i){for(o=(h=s<0)?(e=f,s=-s,l.length):(e=l,i=a,f.length),(t=Math.max(Math.ceil(u/U),o)+2)<s&&(s=t,e.length=1),e.reverse(),t=s;t--;)e.push(0);e.reverse()}else{for((h=(t=f.length)<(o=l.length))&&(o=t),t=0;t<o;t++)if(f[t]!=l[t]){h=f[t]<l[t];break}s=0}for(h&&(e=f,f=l,l=e,n.s=-n.s),o=f.length,t=l.length-o;0<t;--t)f[o++]=0;for(t=l.length;s<t;){if(f[--t]<l[t]){for(r=t;r&&0===f[--r];)f[r]=T-1;--f[r],f[t]+=T}f[t]-=l[t]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=S(f,i),N?_(n,u,c):n):new p(3===c?-0:0)},y.modulo=y.mod=function(n){var e,i=this,t=i.constructor;return n=new t(n),!i.d||!n.s||n.d&&!n.d[0]?new t(NaN):!n.d||i.d&&!i.d[0]?_(new t(i),t.precision,t.rounding):(N=!1,9==t.modulo?(e=F(i,n.abs(),0,3,1)).s*=n.s:e=F(i,n,0,t.modulo,1),e=e.times(n),N=!0,i.minus(e))},y.naturalExponential=y.exp=function(){return B(this)},y.naturalLogarithm=y.ln=function(){return V(this)},y.negated=y.neg=function(){var n=new this.constructor(this);return n.s=-n.s,_(n)},y.plus=y.add=function(n){var e,i,t,r,s,o,u,c,f,a,h=this,l=h.constructor;if(n=new l(n),!h.d||!n.d)return h.s&&n.s?h.d||(n=new l(n.d||h.s===n.s?h:NaN)):n=new l(NaN),n;if(h.s!=n.s)return n.s=-n.s,h.minus(n);if(f=h.d,a=n.d,u=l.precision,c=l.rounding,!f[0]||!a[0])return a[0]||(n=new l(h)),N?_(n,u,c):n;if(s=L(h.e/U),t=L(n.e/U),f=f.slice(),r=s-t){for((o=(o=r<0?(i=f,r=-r,a.length):(i=a,t=s,f.length))<(s=Math.ceil(u/U))?s+1:o+1)<r&&(r=o,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for((o=f.length)-(r=a.length)<0&&(r=o,i=a,a=f,f=i),e=0;r;)e=(f[--r]=f[r]+a[r]+e)/T|0,f[r]%=T;for(e&&(f.unshift(e),++t),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=S(f,t),N?_(n,u,c):n},y.precision=y.sd=function(n){var e;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(w+n);return this.d?(e=k(this.d),n&&this.e+1>e&&(e=this.e+1)):e=NaN,e},y.round=function(){var n=this.constructor;return _(new n(this),this.e+1,n.rounding)},y.sine=y.sin=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+U,t.rounding=1,i=function(n,e){var i,t=e.d.length;if(t<3)return W(n,2,e,e);i=16<(i=1.4*Math.sqrt(t))?16:0|i,e=e.times(1/J(5,i)),e=W(n,2,e,e);for(var r,s=new n(5),o=new n(16),u=new n(20);i--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}(t,z(t,i)),t.precision=n,t.rounding=e,_(2<o?i.neg():i,n,e,!0)):new t(NaN)},y.squareRoot=y.sqrt=function(){var n,e,i,t,r,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(N=!1,t=0==(f=Math.sqrt(+o))||f==1/0?(((e=M(u)).length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=L((c+1)/2)-(c<0||c%2),new a(e=f==1/0?"1e"+c:(e=f.toExponential()).slice(0,e.indexOf("e")+1)+c)):new a(f.toString()),i=(c=a.precision)+3;;)if(t=(s=t).plus(F(o,s,i+2,1)).times(.5),M(s.d).slice(0,i)===(e=M(t.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(_(t,c+1,1),n=!t.times(t).eq(o));break}if(!r&&(_(s,c+1,0),s.times(s).eq(o))){t=s;break}i+=4,r=1}return N=!0,_(t,c,a.rounding,n)},y.tangent=y.tan=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,(i=i.sin()).s=1,i=F(i,new t(1).minus(i.times(i)).sqrt(),n+10,0),t.precision=n,t.rounding=e,_(2==o||4==o?i.neg():i,n,e,!0)):new t(NaN)},y.times=y.mul=function(n){var e,i,t,r,s,o,u,c,f,a=this.constructor,h=this.d,l=(n=new a(n)).d;if(n.s*=this.s,!(h&&h[0]&&l&&l[0]))return new a(!n.s||h&&!h[0]&&!l||l&&!l[0]&&!h?NaN:h&&l?0*n.s:n.s/0);for(i=L(this.e/U)+L(n.e/U),(c=h.length)<(f=l.length)&&(s=h,h=l,l=s,o=c,c=f,f=o),s=[],t=o=c+f;t--;)s.push(0);for(t=f;0<=--t;){for(e=0,r=c+t;t<r;)u=s[r]+l[t]*h[r-t-1]+e,s[r--]=u%T|0,e=u/T|0;s[r]=(s[r]+e)%T|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=S(s,i),N?_(n,a.precision,a.rounding):n},y.toBinary=function(n,e){return G(this,2,n,e)},y.toDecimalPlaces=y.toDP=function(n,e){var i=this,t=i.constructor;return i=new t(i),void 0===n?i:(q(n,0,g),void 0===e?e=t.rounding:q(e,0,8),_(i,n+i.e+1,e))},y.toExponential=function(n,e){var i,t=this,r=t.constructor;return i=void 0===n?A(t,!0):(q(n,0,g),void 0===e?e=r.rounding:q(e,0,8),A(t=_(new r(t),n+1,e),!0,n+1)),t.isNeg()&&!t.isZero()?"-"+i:i},y.toFixed=function(n,e){var i,t,r=this,s=r.constructor;return i=void 0===n?A(r):(q(n,0,g),void 0===e?e=s.rounding:q(e,0,8),A(t=_(new s(r),n+r.e+1,e),!1,n+t.e+1)),r.isNeg()&&!r.isZero()?"-"+i:i},y.toFraction=function(n){var e,i,t,r,s,o,u,c,f,a,h,l,d=this,p=d.d,g=d.constructor;if(!p)return new g(d);if(f=i=new g(1),o=(s=(e=new g(t=c=new g(0))).e=k(p)-d.e-1)%U,e.d[0]=v(10,o<0?U+o:o),null==n)n=0<s?e:f;else{if(!(u=new g(n)).isInt()||u.lt(f))throw Error(w+u);n=u.gt(e)?0<s?e:f:u}for(N=!1,u=new g(M(p)),a=g.precision,g.precision=s=p.length*U*2;h=F(u,e,0,1,1),1!=(r=i.plus(h.times(t))).cmp(n);)i=t,t=r,r=f,f=c.plus(h.times(r)),c=r,r=e,e=u.minus(h.times(r)),u=r;return r=F(n.minus(i),t,0,1,1),c=c.plus(r.times(f)),i=i.plus(r.times(t)),c.s=f.s=d.s,l=F(f,t,s,1).minus(d).abs().cmp(F(c,i,s,1).minus(d).abs())<1?[f,t]:[c,i],g.precision=a,N=!0,l},y.toHexadecimal=y.toHex=function(n,e){return G(this,16,n,e)},y.toNearest=function(n,e){var i=this,t=i.constructor;if(i=new t(i),null==n){if(!i.d)return i;n=new t(1),e=t.rounding}else{if(n=new t(n),void 0===e?e=t.rounding:q(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(N=!1,i=F(i,n,0,e,1).times(n),N=!0,_(i)):(n.s=i.s,i=n),i},y.toNumber=function(){return+this},y.toOctal=function(n,e){return G(this,8,n,e)},y.toPower=y.pow=function(n){var e,i,t,r,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new c(v(+u,f));if((u=new c(u)).eq(1))return u;if(t=c.precision,s=c.rounding,n.eq(1))return _(u,t,s);if((e=L(n.e/U))>=n.d.length-1&&(i=f<0?-f:f)<=9007199254740991)return r=I(c,u,i,t),n.s<0?new c(1).div(r):_(r,t,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=v(+u,f))&&isFinite(i)?new c(i+"").e:L(f*(Math.log("0."+M(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(0<e?o/0:0):(N=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),(r=B(n.times(V(u,t+i)),t)).d&&O((r=_(r,t+5,1)).d,t,s)&&(e=t+10,+M((r=_(B(n.times(V(u,e+i)),e),e+5,1)).d).slice(t+1,t+15)+1==1e14&&(r=_(r,t+1,0))),r.s=o,N=!0,_(r,t,c.rounding=s))},y.toPrecision=function(n,e){var i,t=this,r=t.constructor;return i=void 0===n?A(t,t.e<=r.toExpNeg||t.e>=r.toExpPos):(q(n,1,g),void 0===e?e=r.rounding:q(e,0,8),A(t=_(new r(t),n,e),n<=t.e||t.e<=r.toExpNeg,n)),t.isNeg()&&!t.isZero()?"-"+i:i},y.toSignificantDigits=y.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(q(n,1,g),void 0===e?e=i.rounding:q(e,0,8)),_(new i(this),n,e)},y.toString=function(){var n=this,e=n.constructor,i=A(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},y.truncated=y.trunc=function(){return _(new this.constructor(this),this.e+1,1)},y.valueOf=y.toJSON=function(){var n=this,e=n.constructor,i=A(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var F=function(){function S(n,e,i){var t,r=0,s=n.length;for(n=n.slice();s--;)t=n[s]*e+r,n[s]=t%i|0,r=t/i|0;return r&&n.unshift(r),n}function Z(n,e,i,t){var r,s;if(i!=t)s=t<i?1:-1;else for(r=s=0;r<i;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function P(n,e,i,t){for(var r=0;i--;)n[i]-=r,r=n[i]<e[i]?1:0,n[i]=r*t+n[i]-e[i];for(;!n[0]&&1<n.length;)n.shift()}return function(n,e,i,t,r,s){var o,u,c,f,a,h,l,d,p,g,m,w,v,N,b,E,x,y,M,q,O=n.constructor,D=n.s==e.s?1:-1,F=n.d,A=e.d;if(!(F&&F[0]&&A&&A[0]))return new O(n.s&&e.s&&(F?!A||F[0]!=A[0]:A)?F&&0==F[0]||!A?0*D:D/0:NaN);for(u=s?(a=1,n.e-e.e):(s=T,a=U,L(n.e/a)-L(e.e/a)),M=A.length,x=F.length,g=(p=new O(D)).d=[],c=0;A[c]==(F[c]||0);c++);if(A[c]>(F[c]||0)&&u--,null==i?(N=i=O.precision,t=O.rounding):N=r?i+(n.e-e.e)+1:i,N<0)g.push(1),h=!0;else{if(N=N/a+2|0,c=0,1==M){for(A=A[f=0],N++;(c<x||f)&&N--;c++)b=f*s+(F[c]||0),g[c]=b/A|0,f=b%A|0;h=f||c<x}else{for(1<(f=s/(A[0]+1)|0)&&(A=S(A,f,s),F=S(F,f,s),M=A.length,x=F.length),E=M,w=(m=F.slice(0,M)).length;w<M;)m[w++]=0;for((q=A.slice()).unshift(0),y=A[0],A[1]>=s/2&&++y;f=0,(o=Z(A,m,M,w))<0?(v=m[0],M!=w&&(v=v*s+(m[1]||0)),1<(f=v/y|0)?(s<=f&&(f=s-1),1==(o=Z(l=S(A,f,s),m,d=l.length,w=m.length))&&(f--,P(l,M<d?q:A,d,s))):(0==f&&(o=f=1),l=A.slice()),(d=l.length)<w&&l.unshift(0),P(m,l,w,s),-1==o&&(o=Z(A,m,M,w=m.length))<1&&(f++,P(m,M<w?q:A,w,s)),w=m.length):0===o&&(f++,m=[0]),g[c++]=f,o&&m[0]?m[w++]=F[E]||0:(m=[F[E]],w=1),(E++<x||void 0!==m[0])&&N--;);h=void 0!==m[0]}g[0]||g.shift()}if(1==a)p.e=u,R=h;else{for(c=1,f=g[0];10<=f;f/=10)c++;p.e=c+u*a-1,_(p,r?i+p.e+1:i,t,h)}return p}}();function _(n,e,i,t){var r,s,o,u,c,f,a,h,l,d=n.constructor;n:if(null!=e){if(!(h=n.d))return n;for(r=1,u=h[0];10<=u;u/=10)r++;if((s=e-r)<0)s+=U,o=e,c=(a=h[l=0])/v(10,r-o-1)%10|0;else if(l=Math.ceil((s+1)/U),(u=h.length)<=l){if(!t)break n;for(;u++<=l;)h.push(0);a=c=0,o=(s%=U)-U+(r=1)}else{for(a=u=h[l],r=1;10<=u;u/=10)r++;c=(o=(s%=U)-U+r)<0?0:a/v(10,r-o-1)%10|0}if(t=t||e<0||void 0!==h[l+1]||(o<0?a:a%v(10,r-o-1)),f=i<4?(c||t)&&(0==i||i==(n.s<0?3:2)):5<c||5==c&&(4==i||t||6==i&&(0<s?0<o?a/v(10,r-o):0:h[l-1])%10&1||i==(n.s<0?8:7)),e<1||!h[0])return h.length=0,f?(e-=n.e+1,h[0]=v(10,(U-e%U)%U),n.e=-e||0):h[0]=n.e=0,n;if(0==s?(h.length=l,u=1,l--):(h.length=l+1,u=v(10,U-s),h[l]=0<o?(a/v(10,r-o)%v(10,o)|0)*u:0),f)for(;;){if(0==l){for(s=1,o=h[0];10<=o;o/=10)s++;for(o=h[0]+=u,u=1;10<=o;o/=10)u++;s!=u&&(n.e++,h[0]==T&&(h[0]=1));break}if(h[l]+=u,h[l]!=T)break;h[l--]=0,u=1}for(s=h.length;0===h[--s];)h.pop()}return N&&(n.e>d.maxE?(n.d=null,n.e=NaN):n.e<d.minE&&(n.e=0,n.d=[0])),n}function A(n,e,i){if(!n.isFinite())return j(n);var t,r=n.e,s=M(n.d),o=s.length;return e?(i&&0<(t=i-o)?s=s.charAt(0)+"."+s.slice(1)+C(t):1<o&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+C(-r-1)+s,i&&0<(t=i-o)&&(s+=C(t))):o<=r?(s+=C(r+1-o),i&&0<(t=i-r-1)&&(s=s+"."+C(t))):((t=r+1)<o&&(s=s.slice(0,t)+"."+s.slice(t)),i&&0<(t=i-o)&&(r+1===o&&(s+="."),s+=C(t))),s}function S(n,e){var i=n[0];for(e*=U;10<=i;i/=10)e++;return e}function Z(n,e,i){if(E<e)throw N=!0,i&&(n.precision=i),Error(s);return _(new n(t),e,1,!0)}function P(n,e,i){if(x<e)throw Error(s);return _(new n(r),e,i,!0)}function k(n){var e=n.length-1,i=e*U+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];10<=e;e/=10)i++}return i}function C(n){for(var e="";n--;)e+="0";return e}function I(n,e,i,t){var r,s=new n(1),o=Math.ceil(t/U+4);for(N=!1;;){if(i%2&&K((s=s.times(e)).d,o)&&(r=!0),0===(i=L(i/2))){i=s.d.length-1,r&&0===s.d[i]&&++s.d[i];break}K((e=e.times(e)).d,o)}return N=!0,s}function H(n){return 1&n.d[n.d.length-1]}function i(n,e,i){for(var t,r=new n(e[0]),s=0;++s<e.length;){if(!(t=new n(e[s])).s){r=t;break}r[i](t)&&(r=t)}return r}function B(n,e){var i,t,r,s,o,u,c,f=0,a=0,h=0,l=n.constructor,d=l.rounding,p=l.precision;if(!n.d||!n.d[0]||17<n.e)return new l(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(c=null==e?(N=!1,p):e,u=new l(.03125);-2<n.e;)n=n.times(u),h+=5;for(c+=t=Math.log(v(2,h))/Math.LN10*2+5|0,i=s=o=new l(1),l.precision=c;;){if(s=_(s.times(n),c,1),i=i.times(++a),M((u=o.plus(F(s,i,c,1))).d).slice(0,c)===M(o.d).slice(0,c)){for(r=h;r--;)o=_(o.times(o),c,1);if(null!=e)return l.precision=p,o;if(!(f<3&&O(o.d,c-t,d,f)))return _(o,l.precision=p,d,N=!0);l.precision=c+=10,i=s=u=new l(1),a=0,f++}o=u}}function V(n,e){var i,t,r,s,o,u,c,f,a,h,l,d=1,p=n,g=p.d,m=p.constructor,w=m.rounding,v=m.precision;if(p.s<0||!g||!g[0]||!p.e&&1==g[0]&&1==g.length)return new m(g&&!g[0]?-1/0:1!=p.s?NaN:g?0:p);if(a=null==e?(N=!1,v):e,m.precision=a+=10,t=(i=M(g)).charAt(0),!(Math.abs(s=p.e)<15e14))return f=Z(m,a+2,v).times(s+""),p=V(new m(t+"."+i.slice(1)),a-10).plus(f),m.precision=v,null==e?_(p,v,w,N=!0):p;for(;t<7&&1!=t||1==t&&3<i.charAt(1);)t=(i=M((p=p.times(n)).d)).charAt(0),d++;for(s=p.e,1<t?(p=new m("0."+i),s++):p=new m(t+"."+i.slice(1)),c=o=p=F((h=p).minus(1),p.plus(1),a,1),l=_(p.times(p),a,1),r=3;;){if(o=_(o.times(l),a,1),M((f=c.plus(F(o,new m(r),a,1))).d).slice(0,a)===M(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(Z(m,a+2,v).times(s+""))),c=F(c,new m(d),a,1),null!=e)return m.precision=v,c;if(!O(c.d,a-10,w,u))return _(c,m.precision=v,w,N=!0);m.precision=a+=10,f=o=p=F(h.minus(1),h.plus(1),a,1),l=_(p.times(p),a,1),r=u=1}c=f,r+=2}}function j(n){return String(n.s*n.s/0)}function $(n,e){var i,t,r;for(-1<(i=e.indexOf("."))&&(e=e.replace(".","")),0<(t=e.search(/e/i))?(i<0&&(i=t),i+=+e.slice(t+1),e=e.substring(0,t)):i<0&&(i=e.length),t=0;48===e.charCodeAt(t);t++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(t,r)){if(r-=t,n.e=i=i-t-1,n.d=[],t=(i+1)%U,i<0&&(t+=U),t<r){for(t&&n.d.push(+e.slice(0,t)),r-=U;t<r;)n.d.push(+e.slice(t,t+=U));e=e.slice(t),t=U-e.length}else t-=r;for(;t--;)e+="0";n.d.push(+e),N&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function W(n,e,i,t,r){var s,o,u,c,f=n.precision,a=Math.ceil(f/U);for(N=!1,c=i.times(i),u=new n(t);;){if(o=F(u.times(c),new n(e++*e++),f,1),u=r?t.plus(o):t.minus(o),t=F(o.times(c),new n(e++*e++),f,1),void 0!==(o=u.plus(t)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=t,t=o,o=s,0}return N=!0,o.d.length=a+1,o}function J(n,e){for(var i=n;--e;)i*=n;return i}function z(n,e){var i,t=e.s<0,r=P(n,n.precision,1),s=r.times(.5);if((e=e.abs()).lte(s))return o=t?4:1,e;if((i=e.divToInt(r)).isZero())o=t?3:2;else{if((e=e.minus(i.times(r))).lte(s))return o=H(i)?t?2:3:t?4:1,e;o=H(i)?t?1:4:t?3:2}return e.minus(r).abs()}function G(n,e,i,t){var r,s,o,u,c,f,a,h,l,d=n.constructor,p=void 0!==i;if(p?(q(i,1,g),void 0===t?t=d.rounding:q(t,0,8)):(i=d.precision,t=d.rounding),n.isFinite()){for(p?(r=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):r=e,0<=(o=(a=A(n)).indexOf("."))&&(a=a.replace(".",""),(l=new d(1)).e=a.length-o,l.d=D(A(l),10,r),l.e=l.d.length),s=c=(h=D(a,10,r)).length;0==h[--c];)h.pop();if(h[0]){if(o<0?s--:((n=new d(n)).d=h,n.e=s,h=(n=F(n,l,i,t,0,r)).d,s=n.e,f=R),o=h[i],u=r/2,f=f||void 0!==h[i+1],f=t<4?(void 0!==o||f)&&(0===t||t===(n.s<0?3:2)):u<o||o===u&&(4===t||f||6===t&&1&h[i-1]||t===(n.s<0?8:7)),h.length=i,f)for(;++h[--i]>r-1;)h[i]=0,i||(++s,h.unshift(1));for(c=h.length;!h[c-1];--c);for(o=0,a="";o<c;o++)a+=m.charAt(h[o]);if(p){if(1<c)if(16==e||8==e){for(o=16==e?4:3,--c;c%o;c++)a+="0";for(c=(h=D(a,r,e)).length;!h[c-1];--c);for(o=1,a="1.";o<c;o++)a+=m.charAt(h[o])}else a=a.charAt(0)+"."+a.slice(1);a=a+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)a="0"+a;a="0."+a}else if(++s>c)for(s-=c;s--;)a+="0";else s<c&&(a=a.slice(0,s)+"."+a.slice(s))}else a=p?"0p+0":"0";a=(16==e?"0x":2==e?"0b":8==e?"0o":"")+a}else a=j(n);return n.s<0?"-"+a:a}function K(n,e){if(n.length>e)return n.length=e,!0}function Q(n){return new this(n).abs()}function X(n){return new this(n).acos()}function Y(n){return new this(n).acosh()}function nn(n,e){return new this(n).plus(e)}function en(n){return new this(n).asin()}function tn(n){return new this(n).asinh()}function rn(n){return new this(n).atan()}function sn(n){return new this(n).atanh()}function on(n,e){n=new this(n),e=new this(e);var i,t=this.precision,r=this.rounding,s=t+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?P(this,t,r):new this(0)).s=n.s:!n.d||e.isZero()?(i=P(this,s,1).times(.5)).s=n.s:i=e.s<0?(this.precision=s,this.rounding=1,i=this.atan(F(n,e,s,1)),e=P(this,s,1),this.precision=t,this.rounding=r,n.s<0?i.minus(e):i.plus(e)):this.atan(F(n,e,s,1)):(i=P(this,s,1).times(0<e.s?.25:.75)).s=n.s:i=new this(NaN),i}function un(n){return new this(n).cbrt()}function cn(n){return _(n=new this(n),n.e+1,2)}function fn(n){if(!n||"object"!=typeof n)throw Error(f+"Object expected");var e,i,t,r=!0===n.defaults,s=["precision",1,g,"rounding",0,8,"toExpNeg",-u,0,"toExpPos",0,u,"maxE",0,u,"minE",-u,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(i=s[e],r&&(this[i]=c[i]),void 0!==(t=n[i])){if(!(L(t)===t&&s[e+1]<=t&&t<=s[e+2]))throw Error(w+i+": "+t);this[i]=t}if(i="crypto",r&&(this[i]=c[i]),void 0!==(t=n[i])){if(!0!==t&&!1!==t&&0!==t&&1!==t)throw Error(w+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(a);this[i]=!0}else this[i]=!1}return this}function an(n){return new this(n).cos()}function hn(n){return new this(n).cosh()}function ln(n,e){return new this(n).div(e)}function dn(n){return new this(n).exp()}function pn(n){return _(n=new this(n),n.e+1,3)}function gn(){var n,e,i=new this(0);for(N=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return N=!0,new this(1/0);i=e}return N=!0,i.sqrt()}function mn(n){return n instanceof h||n&&"[object Decimal]"===n.name||!1}function wn(n){return new this(n).ln()}function vn(n,e){return new this(n).log(e)}function Nn(n){return new this(n).log(2)}function bn(n){return new this(n).log(10)}function En(){return i(this,arguments,"lt")}function xn(){return i(this,arguments,"gt")}function yn(n,e){return new this(n).mod(e)}function Mn(n,e){return new this(n).mul(e)}function qn(n,e){return new this(n).pow(e)}function On(n){var e,i,t,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:q(n,1,g),t=Math.ceil(n/U),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(t));s<t;)429e7<=(r=e[s])?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else{if(!crypto.randomBytes)throw Error(a);for(e=crypto.randomBytes(t*=4);s<t;)214e7<=(r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))?crypto.randomBytes(4).copy(e,s):(u.push(r%1e7),s+=4);s=t/4}else for(;s<t;)u[s++]=1e7*Math.random()|0;for(t=u[--s],n%=U,t&&n&&(r=v(10,U-n),u[s]=(t/r|0)*r);0===u[s];s--)u.pop();if(s<0)u=[i=0];else{for(i=-1;0===u[0];i-=U)u.shift();for(t=1,r=u[0];10<=r;r/=10)t++;t<U&&(i-=U-t)}return o.e=i,o.d=u,o}function Dn(n){return _(n=new this(n),n.e+1,this.rounding)}function Fn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function An(n){return new this(n).sin()}function Sn(n){return new this(n).sinh()}function Zn(n){return new this(n).sqrt()}function Pn(n,e){return new this(n).sub(e)}function Rn(n){return new this(n).tan()}function Ln(n){return new this(n).tanh()}function Tn(n){return _(n=new this(n),n.e+1,1)}(h=function n(e){var i,t,r;function s(n){var e,i,t,r=this;if(!(r instanceof s))return new s(n);if(n instanceof(r.constructor=s))return r.s=n.s,void(N?!n.d||n.e>s.maxE?(r.e=NaN,r.d=null):n.e<s.minE?(r.e=0,r.d=[0]):(r.e=n.e,r.d=n.d.slice()):(r.e=n.e,r.d=n.d?n.d.slice():n.d));if("number"==(t=typeof n)){if(0===n)return r.s=1/n<0?-1:1,r.e=0,void(r.d=[0]);if(r.s=n<0?(n=-n,-1):1,n===~~n&&n<1e7){for(e=0,i=n;10<=i;i/=10)e++;return void(r.d=N?s.maxE<e?(r.e=NaN,null):e<s.minE?[r.e=0]:(r.e=e,[n]):(r.e=e,[n]))}return 0*n!=0?(n||(r.s=NaN),r.e=NaN,void(r.d=null)):$(r,n.toString())}if("string"!==t)throw Error(w+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),r.s=-1):(43===i&&(n=n.slice(1)),r.s=1),b.test(n)?$(r,n):function(n,e){var i,t,r,s,o,u,c,f,a;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(d.test(e))i=16,e=e.toLowerCase();else if(l.test(e))i=2;else{if(!p.test(e))throw Error(w+e);i=8}for(o=0<=(s=(e=0<(s=e.search(/p/i))?(c=+e.slice(s+1),e.substring(2,s)):e.slice(2)).indexOf(".")),t=n.constructor,o&&(s=(u=(e=e.replace(".","")).length)-s,r=I(t,new t(i),s,2*s)),s=a=(f=D(e,i,T)).length-1;0===f[s];--s)f.pop();return s<0?new t(0*n.s):(n.e=S(f,a),n.d=f,N=!1,o&&(n=F(n,r,4*u)),c&&(n=n.times(Math.abs(c)<54?v(2,c):h.pow(2,c))),N=!0,n)}(r,n)}if(s.prototype=y,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=fn,s.clone=n,s.isDecimal=mn,s.abs=Q,s.acos=X,s.acosh=Y,s.add=nn,s.asin=en,s.asinh=tn,s.atan=rn,s.atanh=sn,s.atan2=on,s.cbrt=un,s.ceil=cn,s.cos=an,s.cosh=hn,s.div=ln,s.exp=dn,s.floor=pn,s.hypot=gn,s.ln=wn,s.log=vn,s.log10=bn,s.log2=Nn,s.max=En,s.min=xn,s.mod=yn,s.mul=Mn,s.pow=qn,s.random=On,s.round=Dn,s.sign=Fn,s.sin=An,s.sinh=Sn,s.sqrt=Zn,s.sub=Pn,s.tan=Rn,s.tanh=Ln,s.trunc=Tn,void 0===e&&(e={}),e&&!0!==e.defaults)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<r.length;)e.hasOwnProperty(t=r[i++])||(e[t]=this[t]);return s.config(e),s}(c)).default=h.Decimal=h,t=new h(t),r=new h(r), true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return h}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this);
//# sourceMappingURL=decimal.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!--<div class=\"container\">-->\r\n  <div class=\"sample-container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-details/order-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-wrapper/order-details/order-details.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"outlined order-details\">\r\n    <ng-container *ngIf=\"stubOnFetching; then stubDetails; else displayDetails\">\r\n    </ng-container>\r\n    <ng-template #stubDetails>\r\n      <div class=\"loadingSpinner order-details-loader\"></div>\r\n    </ng-template>\r\n    <ng-template #displayDetails>\r\n      <!--Header of table-->\r\n      <header class=\"relayed-grid details-header-layout\">\r\n        <div>Product Name</div>\r\n        <div>Qty</div>\r\n        <div>Price</div>\r\n        <div>Total</div>\r\n      </header>\r\n      <!--Table body-->\r\n      <div class=\"relayed-grid details-body-layout\">\r\n        <ng-container *ngIf=\"selectedOrder\">\r\n          <ng-container *ngFor=\"let proposal of sortProposals(selectedOrder.details.proposals); index as id\">\r\n            <div>{{proposal.product.productName}}</div>\r\n            <div>{{proposal.quantity}}</div>\r\n            <div>{{proposal.product.price}}</div>\r\n            <div>{{proposalAmount(proposal)}}</div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <!--Footer of table-->\r\n      <footer class=\"relayed-grid details-footer-layout\">\r\n        <div>Total</div>\r\n        <div>{{totalCount()}}</div>\r\n        <div>{{averagePrice()}}</div>\r\n        <div>{{totalAmount()}}</div>\r\n      </footer>\r\n    </ng-template>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-overview/order-overview.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-wrapper/order-overview/order-overview.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"outlined order-overview\">\r\n    \r\n      <ng-container *ngIf=\"stubOnFetching; then stubHeaderContainer; else displayHeaderContainer\">\r\n      </ng-container>\r\n      <ng-template #stubHeaderContainer>\r\n        <div class=\"loadingSpinner order-overview-loader\"></div>\r\n      </ng-template>\r\n      <ng-template #displayHeaderContainer>\r\n        <div class=\"header-container\">\r\n          <div class=\"header-item\"\r\n               *ngFor=\"let header of sortHeaders(headers); index as id\"\r\n               (click)=\"this.requestFetchDetails.emit(header.id)\">\r\n            <div [ngClass]=\"{\r\n                      'order-status': true,\r\n                      'order-inprogress': header.status === orderStatusEnum.InProgress,\r\n                      'order-completed': header.status === orderStatusEnum.Complete\r\n                      }\">\r\n            </div>\r\n            <div class=\"order-name\">\r\n              {{header.orderName}}\r\n            </div>\r\n            <div class=\"order-moment\">\r\n              {{header.creationMomentString}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    \r\n    <div class=\"status-legend outlined\">\r\n      <div class=\"status-legend-item\"\r\n           *ngFor=\"let status of orderStatusNames\">\r\n        <div [ngClass]=\"{\r\n                      'order-status': true,\r\n                      'order-inprogress': status.value === orderStatusEnum.InProgress,\r\n                      'order-completed': status.value === orderStatusEnum.Complete\r\n                      }\">\r\n        </div>\r\n        <div [ngSwitch]=\"status.value\">\r\n          <p *ngSwitchCase=\"orderStatusEnum.InProgress\"\r\n             class=\"text-inprogress text-inprogress-title\">\r\n\r\n          </p>\r\n          <p *ngSwitchCase=\"orderStatusEnum.Complete\"\r\n             class=\"text-completed text-completed-title\">\r\n\r\n          </p>\r\n          <p *ngSwitchDefault\r\n             class=\"text-default\">\r\n            {{status.key}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-summary/order-summary.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-wrapper/order-summary/order-summary.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"outlined order-summary\">\r\n\r\n    <div class=\"number-header\">Number:</div>    \r\n    <div class=\"date-header\">Date:</div>    \r\n    <div class=\"status-header\">Status:</div>   \r\n    <div class=\"total-row total-header\">Total:</div>    \r\n\r\n    <ng-container *ngIf=\"stubOnFetching; then stubValueContainers; else displayValueContainers\">\r\n    </ng-container>\r\n    <ng-template #stubValueContainers>\r\n      <div class=\"loadingSpinner order-summary-loader\"></div>\r\n    </ng-template>\r\n    <ng-template #displayValueContainers>\r\n      <div class=\"number-value\">{{selectedOrder?.header.orderName}}</div>\r\n      <div class=\"date-value\">{{selectedOrder?.header.creationMomentString}}</div>\r\n      <div class=\"status-bar\">\r\n        <div *ngIf=\"selectedOrder\"\r\n             [ngClass]=\"{\r\n                      'order-status': true,\r\n                      'order-inprogress': selectedOrder.header.status === orderStatusEnum.InProgress,\r\n                      'order-completed': selectedOrder.header.status === orderStatusEnum.Complete\r\n                      }\">\r\n        </div>\r\n        <div *ngIf=\"selectedOrder\"\r\n             [ngClass]=\"{\r\n                      'text-inprogress-title': selectedOrder.header.status === orderStatusEnum.InProgress,\r\n                      'text-completed-title': selectedOrder.header.status === orderStatusEnum.Complete\r\n                      }\"></div>\r\n\r\n\r\n      </div>\r\n      <div class=\"total-row total-value\">{{totalAmount()}}</div>\r\n    </ng-template>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-wrapper.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-wrapper/order-wrapper.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-grid wrapper-grid-layout\">  \r\n  <order-overview\r\n                  class=\"wrapper-grid-item order-overview-container\"\r\n                  [headers] = \"headers\"\r\n                  [stubOnFetching] =\"loadingHeaders\"\r\n                  (requestFetchDetails)=\"fetchDetails($event)\">\r\n  </order-overview>\r\n  <order-summary\r\n                 class=\"wrapper-grid-item order-summary-container\"\r\n                 [selectedOrder]=\"selectedOrder\"\r\n                 [stubOnFetching] =\"fetchingDetails\">\r\n    \r\n  </order-summary>\r\n  <order-details class=\"wrapper-grid-item order-details-container\"\r\n                 [selectedOrder]=\"selectedOrder\"\r\n                 [stubOnFetching] =\"fetchingDetails\">\r\n\r\n  </order-details>\r\n\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/OrderDetails.ts":
/*!****************************************!*\
  !*** ./src/app/Models/OrderDetails.ts ***!
  \****************************************/
/*! exports provided: OrderDetails, getTotalOrderAmount, getTotalOrderItemsCount, getOrderAveragePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetails", function() { return OrderDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalOrderAmount", function() { return getTotalOrderAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalOrderItemsCount", function() { return getTotalOrderItemsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderAveragePrice", function() { return getOrderAveragePrice; });
/* harmony import */ var _Proposal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proposal */ "./src/app/Models/Proposal.ts");
/* harmony import */ var _wwwroot_lib_decimal_js_decimal_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../wwwroot/lib/decimal.js/decimal.min.js */ "../wwwroot/lib/decimal.js/decimal.min.js");
/* harmony import */ var _wwwroot_lib_decimal_js_decimal_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wwwroot_lib_decimal_js_decimal_min_js__WEBPACK_IMPORTED_MODULE_1__);


var OrderDetails = /** @class */ (function () {
    function OrderDetails() {
    }
    return OrderDetails;
}());

function getTotalOrderAmount(orderDetails) {
    return orderDetails.proposals
        .map(function (p) { return Object(_Proposal__WEBPACK_IMPORTED_MODULE_0__["calcTotalProposalAmount"])(p); })
        .reduce(function (sum, current) { return _wwwroot_lib_decimal_js_decimal_min_js__WEBPACK_IMPORTED_MODULE_1__["Decimal"].add(sum, current); }, 0);
}
function getTotalOrderItemsCount(orderDetails) {
    return orderDetails.proposals
        .map(function (p) { return p.quantity; })
        .reduce(function (sum, current) { return sum + current; }, 0);
}
function getOrderAveragePrice(orderDetails) {
    return getTotalOrderAmount(orderDetails) / getTotalOrderItemsCount(orderDetails);
}


/***/ }),

/***/ "./src/app/Models/OrderStatus.ts":
/*!***************************************!*\
  !*** ./src/app/Models/OrderStatus.ts ***!
  \***************************************/
/*! exports provided: OrderStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatus", function() { return OrderStatus; });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Complete"] = 1] = "Complete";
    OrderStatus[OrderStatus["InProgress"] = 2] = "InProgress";
})(OrderStatus || (OrderStatus = {}));


/***/ }),

/***/ "./src/app/Models/Proposal.ts":
/*!************************************!*\
  !*** ./src/app/Models/Proposal.ts ***!
  \************************************/
/*! exports provided: Proposal, calcTotalProposalAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proposal", function() { return Proposal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTotalProposalAmount", function() { return calcTotalProposalAmount; });
var Proposal = /** @class */ (function () {
    function Proposal() {
    }
    return Proposal;
}());

function calcTotalProposalAmount(proposal) {
    return proposal.product.price * proposal.quantity;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sample-container{\r\n  height:80vh;\r\n  width: 90vw;\r\n  margin: 10vh 5vw 10vh 5vw;\r\n}\r\n\r\n.loadingSpinner {\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  min-height:2em;\r\n  min-width:2em;\r\n  border: 0.2em solid #fff;\r\n  border-radius: 50%;\r\n  border-top-color: #000;\r\n  border-bottom-color: #000;\r\n  animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n  -webkit-animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdFQUFnRTtFQUNoRSx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbXBsZS1jb250YWluZXJ7XHJcbiAgaGVpZ2h0Ojgwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWFyZ2luOiAxMHZoIDV2dyAxMHZoIDV2dztcclxufVxyXG5cclxuLmxvYWRpbmdTcGlubmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBtaW4taGVpZ2h0OjJlbTtcclxuICBtaW4td2lkdGg6MmVtO1xyXG4gIGJvcmRlcjogMC4yZW0gc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgY3ViaWMtYmV6aWVyKDAuNDUsIDAuMDUsIDAuNTUsIDAuOTUpIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _order_wrapper_order_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-wrapper/order-wrapper.component */ "./src/app/order-wrapper/order-wrapper.component.ts");
/* harmony import */ var _order_wrapper_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-wrapper/order-overview/order-overview.component */ "./src/app/order-wrapper/order-overview/order-overview.component.ts");
/* harmony import */ var _order_wrapper_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-wrapper/order-summary/order-summary.component */ "./src/app/order-wrapper/order-summary/order-summary.component.ts");
/* harmony import */ var _order_wrapper_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-wrapper/order-details/order-details.component */ "./src/app/order-wrapper/order-details/order-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _order_wrapper_order_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["OrderWrapperComponent"],
                _order_wrapper_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_8__["OrderOverviewComponent"],
                _order_wrapper_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_9__["OrderSummaryComponent"],
                _order_wrapper_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'orders/:routedApiBaseUrl/:routedPendData', component: _order_wrapper_order_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["OrderWrapperComponent"] },
                    { path: '**', redirectTo: '/orders/http:%2F%2Flocalhost:5050%2F/2000' }
                ])
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/order-wrapper/Scaffolding/ViewModels/HeaderView.ts":
/*!********************************************************************!*\
  !*** ./src/app/order-wrapper/Scaffolding/ViewModels/HeaderView.ts ***!
  \********************************************************************/
/*! exports provided: HeaderView, convertHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderView", function() { return HeaderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHeader", function() { return convertHeader; });
var HeaderView = /** @class */ (function () {
    function HeaderView() {
    }
    return HeaderView;
}());

function convertHeader(h, datePipe) {
    var header = {
        id: h.id,
        orderName: h.orderName,
        status: h.status,
        creationMomentString: datePipe.transform(h.creationMoment, 'dd.MM.yyyy HH:mm')
    };
    return header;
}


/***/ }),

/***/ "./src/app/order-wrapper/Scaffolding/ViewModels/OrderView.ts":
/*!*******************************************************************!*\
  !*** ./src/app/order-wrapper/Scaffolding/ViewModels/OrderView.ts ***!
  \*******************************************************************/
/*! exports provided: OrderView, convertOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderView", function() { return OrderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertOrder", function() { return convertOrder; });
/* harmony import */ var _HeaderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderView */ "./src/app/order-wrapper/Scaffolding/ViewModels/HeaderView.ts");

var OrderView = /** @class */ (function () {
    function OrderView() {
    }
    return OrderView;
}());

function convertOrder(o, datePipe) {
    var headerV = Object(_HeaderView__WEBPACK_IMPORTED_MODULE_0__["convertHeader"])(o.header, datePipe);
    var order = {
        id: o.id,
        header: headerV,
        details: o.details
    };
    return order;
}


/***/ }),

/***/ "./src/app/order-wrapper/order-details/order-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/order-wrapper/order-details/order-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-grid {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  /*there is no text wich should wraps, else this properties should be overrided*/\r\n  word-wrap: break-word;\r\n  white-space: nowrap;\r\n  --inprogress-color: darkmagenta;\r\n  --inprogress-title: \"In Progress\";\r\n  --completed-color: forestgreen;\r\n  --completed-title: \"Completed\";\r\n  --outline-width: 0.2em;\r\n  --outline-style: solid;\r\n  --outline-color: #000;\r\n}\r\n\r\n\r\n.wrapper-grid-layout {\r\n  grid-template-columns: minmax(-webkit-min-content,1fr) 3fr;\r\n  grid-template-columns: minmax(min-content,1fr) 3fr;\r\n  grid-template-rows: 1.1fr 3fr;\r\n}\r\n\r\n\r\n.outlined {\r\n  outline: var(--outline-width) var(--outline-style) var(--outline-color);  \r\n}\r\n\r\n\r\n.wrapper-grid-item {\r\n  margin: calc(2px + 0.1em);\r\n}\r\n\r\n\r\n.order-status {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  margin-left: 0.3em;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n\r\n.order-inprogress {\r\n  background-color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.order-completed {\r\n  background-color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-inprogress {\r\n  color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.text-inprogress-title::after {\r\n  content: var(--inprogress-title);\r\n}\r\n\r\n\r\n.text-completed {\r\n  color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-completed-title::after {\r\n  content: var(--completed-title);\r\n}\r\n\r\n\r\n.text-default {\r\n}\r\n\r\n\r\n.order-overview-container {\r\n  grid-area: 1 / 1 / 3 / 2;\r\n  display: grid; /*grid with single cell let stretch content conviniently (or I just like grids)*/\r\n}\r\n\r\n\r\n.order-summary-container {\r\n  grid-area: 1 / 2 / 2 / 3;\r\n  display: grid;\r\n}\r\n\r\n\r\n.order-details-container {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n  display:grid; \r\n  grid-template-columns:minmax(-webkit-min-content, auto); \r\n  grid-template-columns:minmax(min-content, auto);\r\n  min-height:0;\r\n}\r\n\r\n\r\n@media (max-width: 448px) {\r\n\r\n  .wrapper-grid-layout {\r\n    grid-template-columns: minmax(-webkit-min-content,1fr);\r\n    grid-template-columns: minmax(min-content,1fr);\r\n    grid-template-rows: 40% -webkit-min-content 100%;\r\n    grid-template-rows: 40% min-content 100%;\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 3 / 1 / 4 / 2;\r\n    display: grid; \r\n  }\r\n}\r\n\r\n\r\n@media(max-height: 350px)\r\n{\r\n  .wrapper-grid-layout {\r\n    grid-template-rows: auto;\r\n    grid-template-columns: repeat(3,minmax(-webkit-min-content,1fr));\r\n    grid-template-columns: repeat(3,minmax(min-content,1fr));\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 1 / 3 / 2 / 4;\r\n    display: grid;\r\n    /*else right outline is not visible on overflow*/\r\n    padding-right: var(--outline-width);\r\n  }\r\n}\r\n\r\n\r\n.sample-container{\r\n  height:80vh;\r\n  width: 90vw;\r\n  margin: 10vh 5vw 10vh 5vw;\r\n}\r\n\r\n\r\n.loadingSpinner {\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  min-height:2em;\r\n  min-width:2em;\r\n  border: 0.2em solid #fff;\r\n  border-radius: 50%;\r\n  border-top-color: #000;\r\n  border-bottom-color: #000;\r\n  animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n  -webkit-animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n}\r\n\r\n\r\n@keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n.order-details {\r\n  display: grid;\r\n  overflow: hidden;\r\n  grid-template-rows: -webkit-min-content auto -webkit-min-content;\r\n  grid-template-rows: min-content auto min-content;\r\n  align-items: start;\r\n  --details-background-color: white;\r\n  --details-header-color: white;\r\n  --details-footer-color: white;\r\n  --details-body-color: white;\r\n  background-color: var(--details-background-color);\r\n}\r\n\r\n\r\n.order-details-loader {\r\n  align-self: center;\r\n  justify-self: center;\r\n  grid-area: 1 / 1 / 3 / 2;\r\n}\r\n\r\n\r\n.relayed-grid {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr 1fr 1fr;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.details-header-layout {\r\n  grid-template-rows: auto;\r\n  background-color: var(--details-header-color);\r\n}\r\n\r\n\r\n.details-header-layout > * {\r\n    margin-bottom: 0.7em;\r\n    margin-top: 0.5em;\r\n    padding-left: 0.1em;\r\n    padding-right: 0.1em;\r\n    border-bottom: var(--outline-width) var(--outline-style) var(--outline-color);\r\n  }\r\n\r\n\r\n.details-footer-layout {\r\n  grid-template-rows: auto;\r\n  background-color: var(--details-footer-color);\r\n}\r\n\r\n\r\n.details-footer-layout > * {\r\n    margin-top: 0.7em;\r\n    margin-bottom: 0.5em;\r\n    padding-left: 0.1em;\r\n    padding-right: 0.1em;\r\n    background-color: var(--details-footer-color);\r\n    border-top: var(--outline-width) var(--outline-style) var(--outline-color);\r\n  }\r\n\r\n\r\n.details-body-layout {\r\n  grid-template-rows: auto;\r\n  overflow-y: auto;\r\n  background-color: var(--details-body-color);\r\n  max-height: 100%;\r\n}\r\n\r\n\r\n.details-body-layout > div {\r\n    margin-top: 0.2em;\r\n    margin-bottom: 0.2em;\r\n    padding-left: 0.1em;\r\n    padding-right: 0.1em;\r\n    border-bottom: var(--outline-width) var(--outline-style) var(--outline-color);\r\n  }\r\n\r\n\r\n\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItd3JhcHBlci9vcmRlci13cmFwcGVyLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9vcmRlci13cmFwcGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtFQUErRTtFQUMvRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSwwREFBa0Q7RUFBbEQsa0RBQWtEO0VBQ2xELDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSx1RUFBdUU7QUFDekU7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7OztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7O0FBRUE7QUFDQTs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYSxFQUFFLGdGQUFnRjtBQUNqRzs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osdURBQStDO0VBQS9DLCtDQUErQztFQUMvQyxZQUFZO0FBQ2Q7OztBQUdBOztFQUVFO0lBQ0Usc0RBQThDO0lBQTlDLDhDQUE4QztJQUM5QyxnREFBd0M7SUFBeEMsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmO0FBQ0Y7OztBQUVBOztFQUVFO0lBQ0Usd0JBQXdCO0lBQ3hCLGdFQUF3RDtJQUF4RCx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELG1DQUFtQztFQUNyQztBQUNGOzs7QUNqSUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnRUFBZ0U7RUFDaEUsd0VBQXdFO0FBQzFFOzs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7O0FDekJBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnRUFBZ0Q7RUFBaEQsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsaURBQWlEO0FBQ25EOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsV0FBVztBQUNiOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw2Q0FBNkM7QUFDL0M7OztBQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDZFQUE2RTtFQUMvRTs7O0FBQ0Y7RUFDRSx3QkFBd0I7RUFDeEIsNkNBQTZDO0FBQy9DOzs7QUFDRTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MsMEVBQTBFO0VBQzVFOzs7QUFFRjtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQjs7O0FBRUU7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsNkVBQTZFO0VBQy9FIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItd3JhcHBlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLyp0aGVyZSBpcyBubyB0ZXh0IHdpY2ggc2hvdWxkIHdyYXBzLCBlbHNlIHRoaXMgcHJvcGVydGllcyBzaG91bGQgYmUgb3ZlcnJpZGVkKi9cclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtLWlucHJvZ3Jlc3MtY29sb3I6IGRhcmttYWdlbnRhO1xyXG4gIC0taW5wcm9ncmVzcy10aXRsZTogXCJJbiBQcm9ncmVzc1wiO1xyXG4gIC0tY29tcGxldGVkLWNvbG9yOiBmb3Jlc3RncmVlbjtcclxuICAtLWNvbXBsZXRlZC10aXRsZTogXCJDb21wbGV0ZWRcIjtcclxuICAtLW91dGxpbmUtd2lkdGg6IDAuMmVtO1xyXG4gIC0tb3V0bGluZS1zdHlsZTogc29saWQ7XHJcbiAgLS1vdXRsaW5lLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5cclxuLndyYXBwZXItZ3JpZC1sYXlvdXQge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LDFmcikgM2ZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS4xZnIgM2ZyO1xyXG59XHJcblxyXG4ub3V0bGluZWQge1xyXG4gIG91dGxpbmU6IHZhcigtLW91dGxpbmUtd2lkdGgpIHZhcigtLW91dGxpbmUtc3R5bGUpIHZhcigtLW91dGxpbmUtY29sb3IpOyAgXHJcbn1cclxuXHJcbi53cmFwcGVyLWdyaWQtaXRlbSB7XHJcbiAgbWFyZ2luOiBjYWxjKDJweCArIDAuMWVtKTtcclxufVxyXG5cclxuLm9yZGVyLXN0YXR1cyB7XHJcbiAgd2lkdGg6IDEuNWVtO1xyXG4gIGhlaWdodDogMS41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcbi5vcmRlci1pbnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnByb2dyZXNzLWNvbG9yKTtcclxufVxyXG5cclxuLm9yZGVyLWNvbXBsZXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQtaW5wcm9ncmVzcyB7XHJcbiAgY29sb3I6IHZhcigtLWlucHJvZ3Jlc3MtY29sb3IpO1xyXG59XHJcblxyXG4udGV4dC1pbnByb2dyZXNzLXRpdGxlOjphZnRlciB7XHJcbiAgY29udGVudDogdmFyKC0taW5wcm9ncmVzcy10aXRsZSk7XHJcbn1cclxuXHJcbi50ZXh0LWNvbXBsZXRlZCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWNvbXBsZXRlZC10aXRsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IHZhcigtLWNvbXBsZXRlZC10aXRsZSk7XHJcbn1cclxuXHJcbi50ZXh0LWRlZmF1bHQge1xyXG59XHJcblxyXG4ub3JkZXItb3ZlcnZpZXctY29udGFpbmVyIHtcclxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XHJcbiAgZGlzcGxheTogZ3JpZDsgLypncmlkIHdpdGggc2luZ2xlIGNlbGwgbGV0IHN0cmV0Y2ggY29udGVudCBjb252aW5pZW50bHkgKG9yIEkganVzdCBsaWtlIGdyaWRzKSovXHJcbn1cclxuXHJcbi5vcmRlci1zdW1tYXJ5LWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xyXG4gIGRpc3BsYXk6Z3JpZDsgXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChtaW4tY29udGVudCwgYXV0byk7XHJcbiAgbWluLWhlaWdodDowO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0OHB4KSB7XHJcblxyXG4gIC53cmFwcGVyLWdyaWQtbGF5b3V0IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwJSBtaW4tY29udGVudCAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLW92ZXJ2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXN1bW1hcnktY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xyXG4gICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LWhlaWdodDogMzUwcHgpXHJcbntcclxuICAud3JhcHBlci1ncmlkLWxheW91dCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLG1pbm1heChtaW4tY29udGVudCwxZnIpKTtcclxuICB9XHJcblxyXG4gIC5vcmRlci1vdmVydmlldy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zdW1tYXJ5LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKmVsc2UgcmlnaHQgb3V0bGluZSBpcyBub3QgdmlzaWJsZSBvbiBvdmVyZmxvdyovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1vdXRsaW5lLXdpZHRoKTtcclxuICB9XHJcbn1cclxuIiwiLnNhbXBsZS1jb250YWluZXJ7XHJcbiAgaGVpZ2h0Ojgwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWFyZ2luOiAxMHZoIDV2dyAxMHZoIDV2dztcclxufVxyXG5cclxuLmxvYWRpbmdTcGlubmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBtaW4taGVpZ2h0OjJlbTtcclxuICBtaW4td2lkdGg6MmVtO1xyXG4gIGJvcmRlcjogMC4yZW0gc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgY3ViaWMtYmV6aWVyKDAuNDUsIDAuMDUsIDAuNTUsIDAuOTUpIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5AaW1wb3J0ICcuLi9vcmRlci13cmFwcGVyLmNvbXBvbmVudC5jc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG5cclxuLm9yZGVyLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IGF1dG8gbWluLWNvbnRlbnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIC0tZGV0YWlscy1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtLWRldGFpbHMtaGVhZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWRldGFpbHMtZm9vdGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWRldGFpbHMtYm9keS1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlscy1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMtbG9hZGVyIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xyXG59XHJcblxyXG4ucmVsYXllZC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGV0YWlscy1oZWFkZXItbGF5b3V0IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlscy1oZWFkZXItY29sb3IpO1xyXG59XHJcbiAgLmRldGFpbHMtaGVhZGVyLWxheW91dCA+ICoge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC4xZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjFlbTtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLW91dGxpbmUtd2lkdGgpIHZhcigtLW91dGxpbmUtc3R5bGUpIHZhcigtLW91dGxpbmUtY29sb3IpO1xyXG4gIH1cclxuLmRldGFpbHMtZm9vdGVyLWxheW91dCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbHMtZm9vdGVyLWNvbG9yKTtcclxufVxyXG4gIC5kZXRhaWxzLWZvb3Rlci1sYXlvdXQgPiAqIHtcclxuICAgIG1hcmdpbi10b3A6IDAuN2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4xZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWxzLWZvb3Rlci1jb2xvcik7XHJcbiAgICBib3JkZXItdG9wOiB2YXIoLS1vdXRsaW5lLXdpZHRoKSB2YXIoLS1vdXRsaW5lLXN0eWxlKSB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcclxuICB9XHJcblxyXG4uZGV0YWlscy1ib2R5LWxheW91dCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlscy1ib2R5LWNvbG9yKTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4gIC5kZXRhaWxzLWJvZHktbGF5b3V0ID4gZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4xZW07XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1vdXRsaW5lLXdpZHRoKSB2YXIoLS1vdXRsaW5lLXN0eWxlKSB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiBcclxuIl19 */"

/***/ }),

/***/ "./src/app/order-wrapper/order-details/order-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/order-wrapper/order-details/order-details.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Scaffolding_ViewModels_OrderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scaffolding/ViewModels/OrderView */ "./src/app/order-wrapper/Scaffolding/ViewModels/OrderView.ts");
/* harmony import */ var _Models_OrderDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/OrderDetails */ "./src/app/Models/OrderDetails.ts");
/* harmony import */ var _Models_Proposal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/Proposal */ "./src/app/Models/Proposal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent() {
        this.stubOnFetching = false;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
    };
    OrderDetailsComponent.prototype.sortProposals = function (incoming) {
        return incoming.sort(function (n1, n2) {
            return n1.product.productName > n2.product.productName ?
                1
                :
                    (n1.product.productName < n2.product.productName ?
                        -1
                        :
                            0);
        });
    };
    OrderDetailsComponent.prototype.totalAmount = function () {
        if (this.selectedOrder) {
            return Object(_Models_OrderDetails__WEBPACK_IMPORTED_MODULE_2__["getTotalOrderAmount"])(this.selectedOrder.details);
        }
        else {
            return '';
        }
    };
    OrderDetailsComponent.prototype.totalCount = function () {
        if (this.selectedOrder) {
            return String(Object(_Models_OrderDetails__WEBPACK_IMPORTED_MODULE_2__["getTotalOrderItemsCount"])(this.selectedOrder.details));
        }
        else {
            return '';
        }
    };
    OrderDetailsComponent.prototype.averagePrice = function () {
        if (this.selectedOrder) {
            return String(Object(_Models_OrderDetails__WEBPACK_IMPORTED_MODULE_2__["getOrderAveragePrice"])(this.selectedOrder.details).toFixed(2));
        }
        else {
            return '';
        }
    };
    OrderDetailsComponent.prototype.proposalAmount = function (proposal) {
        return Object(_Models_Proposal__WEBPACK_IMPORTED_MODULE_3__["calcTotalProposalAmount"])(proposal);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedOrder'),
        __metadata("design:type", _Scaffolding_ViewModels_OrderView__WEBPACK_IMPORTED_MODULE_1__["OrderView"])
    ], OrderDetailsComponent.prototype, "selectedOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OrderDetailsComponent.prototype, "stubOnFetching", void 0);
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-details',
            template: __webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/order-wrapper/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/order-wrapper/order-overview/order-overview.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/order-wrapper/order-overview/order-overview.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-grid {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  /*there is no text wich should wraps, else this properties should be overrided*/\r\n  word-wrap: break-word;\r\n  white-space: nowrap;\r\n  --inprogress-color: darkmagenta;\r\n  --inprogress-title: \"In Progress\";\r\n  --completed-color: forestgreen;\r\n  --completed-title: \"Completed\";\r\n  --outline-width: 0.2em;\r\n  --outline-style: solid;\r\n  --outline-color: #000;\r\n}\r\n\r\n\r\n.wrapper-grid-layout {\r\n  grid-template-columns: minmax(-webkit-min-content,1fr) 3fr;\r\n  grid-template-columns: minmax(min-content,1fr) 3fr;\r\n  grid-template-rows: 1.1fr 3fr;\r\n}\r\n\r\n\r\n.outlined {\r\n  outline: var(--outline-width) var(--outline-style) var(--outline-color);  \r\n}\r\n\r\n\r\n.wrapper-grid-item {\r\n  margin: calc(2px + 0.1em);\r\n}\r\n\r\n\r\n.order-status {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  margin-left: 0.3em;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n\r\n.order-inprogress {\r\n  background-color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.order-completed {\r\n  background-color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-inprogress {\r\n  color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.text-inprogress-title::after {\r\n  content: var(--inprogress-title);\r\n}\r\n\r\n\r\n.text-completed {\r\n  color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-completed-title::after {\r\n  content: var(--completed-title);\r\n}\r\n\r\n\r\n.text-default {\r\n}\r\n\r\n\r\n.order-overview-container {\r\n  grid-area: 1 / 1 / 3 / 2;\r\n  display: grid; /*grid with single cell let stretch content conviniently (or I just like grids)*/\r\n}\r\n\r\n\r\n.order-summary-container {\r\n  grid-area: 1 / 2 / 2 / 3;\r\n  display: grid;\r\n}\r\n\r\n\r\n.order-details-container {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n  display:grid; \r\n  grid-template-columns:minmax(-webkit-min-content, auto); \r\n  grid-template-columns:minmax(min-content, auto);\r\n  min-height:0;\r\n}\r\n\r\n\r\n@media (max-width: 448px) {\r\n\r\n  .wrapper-grid-layout {\r\n    grid-template-columns: minmax(-webkit-min-content,1fr);\r\n    grid-template-columns: minmax(min-content,1fr);\r\n    grid-template-rows: 40% -webkit-min-content 100%;\r\n    grid-template-rows: 40% min-content 100%;\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 3 / 1 / 4 / 2;\r\n    display: grid; \r\n  }\r\n}\r\n\r\n\r\n@media(max-height: 350px)\r\n{\r\n  .wrapper-grid-layout {\r\n    grid-template-rows: auto;\r\n    grid-template-columns: repeat(3,minmax(-webkit-min-content,1fr));\r\n    grid-template-columns: repeat(3,minmax(min-content,1fr));\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 1 / 3 / 2 / 4;\r\n    display: grid;\r\n    /*else right outline is not visible on overflow*/\r\n    padding-right: var(--outline-width);\r\n  }\r\n}\r\n\r\n\r\n.sample-container{\r\n  height:80vh;\r\n  width: 90vw;\r\n  margin: 10vh 5vw 10vh 5vw;\r\n}\r\n\r\n\r\n.loadingSpinner {\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  min-height:2em;\r\n  min-width:2em;\r\n  border: 0.2em solid #fff;\r\n  border-radius: 50%;\r\n  border-top-color: #000;\r\n  border-bottom-color: #000;\r\n  animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n  -webkit-animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n}\r\n\r\n\r\n@keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n.order-overview {\r\n  display: grid;\r\n  min-width: -webkit-min-content;\r\n  min-width: -moz-min-content;\r\n  min-width: min-content;\r\n  grid-template-rows: 1fr -webkit-min-content;\r\n  grid-template-rows: 1fr min-content;\r\n  grid-template-columns: minmax(-webkit-min-content, auto);\r\n  grid-template-columns: minmax(min-content, auto);  \r\n  overflow-x: hidden;\r\n  align-items: start;\r\n  --legend-backgroind-color: white;\r\n}\r\n\r\n\r\n.header-container {\r\n  display:grid;\r\n  grid-template-columns: -webkit-min-content;\r\n  grid-template-columns: min-content;\r\n  grid-template-rows: auto;\r\n  overflow-y: auto;\r\n  max-height: 100%;\r\n  min-height: 2em;\r\n}\r\n\r\n\r\n.header-item {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  border-style:dashed;\r\n  border-width:1px;\r\n  border-color:transparent;\r\n  transition-property: border-color;\r\n  transition-duration: 0.5s;\r\n}\r\n\r\n\r\n.header-item:hover, .header-item:focus, .header-item:active {\r\n    border-color: #000;\r\n  }\r\n\r\n\r\n.order-name {\r\n  margin: 0.3em;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: default;\r\n  word-wrap: break-word;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.order-moment {\r\n  margin: 0.3em;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: default;\r\n  word-wrap: break-word;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.status-legend {\r\n  display: grid;\r\n  grid-template-rows: auto;\r\n  background-color: var(--legend-backgroind-color);\r\n}\r\n\r\n\r\n.status-legend-item{\r\n  display:grid;\r\n  grid-template-columns:-webkit-min-content auto;\r\n  grid-template-columns:min-content auto;\r\n  word-wrap:break-word;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.order-overview-loader{\r\n  align-self:center;\r\n  justify-self:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItd3JhcHBlci9vcmRlci13cmFwcGVyLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9vcmRlci13cmFwcGVyL29yZGVyLW92ZXJ2aWV3L29yZGVyLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0VBQStFO0VBQy9FLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFLDBEQUFrRDtFQUFsRCxrREFBa0Q7RUFDbEQsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLHVFQUF1RTtBQUN6RTs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7OztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOzs7QUFFQTtBQUNBOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhLEVBQUUsZ0ZBQWdGO0FBQ2pHOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix1REFBK0M7RUFBL0MsK0NBQStDO0VBQy9DLFlBQVk7QUFDZDs7O0FBR0E7O0VBRUU7SUFDRSxzREFBOEM7SUFBOUMsOENBQThDO0lBQzlDLGdEQUF3QztJQUF4Qyx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0VBQ2Y7QUFDRjs7O0FBRUE7O0VBRUU7SUFDRSx3QkFBd0I7SUFDeEIsZ0VBQXdEO0lBQXhELHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsbUNBQW1DO0VBQ3JDO0FBQ0Y7OztBQ2pJQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdFQUFnRTtFQUNoRSx3RUFBd0U7QUFDMUU7OztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOzs7QUMxQkE7RUFDRSxhQUFhO0VBQ2IsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIsMkNBQW1DO0VBQW5DLG1DQUFtQztFQUNuQyx3REFBZ0Q7RUFBaEQsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOzs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQ0FBa0M7RUFBbEMsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOzs7QUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7O0FBSUY7RUFDRSxhQUFhO0VBQ2IseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixnREFBZ0Q7QUFDbEQ7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItd3JhcHBlci9vcmRlci1vdmVydmlldy9vcmRlci1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAvKnRoZXJlIGlzIG5vIHRleHQgd2ljaCBzaG91bGQgd3JhcHMsIGVsc2UgdGhpcyBwcm9wZXJ0aWVzIHNob3VsZCBiZSBvdmVycmlkZWQqL1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC0taW5wcm9ncmVzcy1jb2xvcjogZGFya21hZ2VudGE7XHJcbiAgLS1pbnByb2dyZXNzLXRpdGxlOiBcIkluIFByb2dyZXNzXCI7XHJcbiAgLS1jb21wbGV0ZWQtY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gIC0tY29tcGxldGVkLXRpdGxlOiBcIkNvbXBsZXRlZFwiO1xyXG4gIC0tb3V0bGluZS13aWR0aDogMC4yZW07XHJcbiAgLS1vdXRsaW5lLXN0eWxlOiBzb2xpZDtcclxuICAtLW91dGxpbmUtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcblxyXG4ud3JhcHBlci1ncmlkLWxheW91dCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsMWZyKSAzZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjFmciAzZnI7XHJcbn1cclxuXHJcbi5vdXRsaW5lZCB7XHJcbiAgb3V0bGluZTogdmFyKC0tb3V0bGluZS13aWR0aCkgdmFyKC0tb3V0bGluZS1zdHlsZSkgdmFyKC0tb3V0bGluZS1jb2xvcik7ICBcclxufVxyXG5cclxuLndyYXBwZXItZ3JpZC1pdGVtIHtcclxuICBtYXJnaW46IGNhbGMoMnB4ICsgMC4xZW0pO1xyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzIHtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICBtYXJnaW4tbGVmdDogMC4zZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxuLm9yZGVyLWlucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHJvZ3Jlc3MtY29sb3IpO1xyXG59XHJcblxyXG4ub3JkZXItY29tcGxldGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY29sb3IpO1xyXG59XHJcblxyXG4udGV4dC1pbnByb2dyZXNzIHtcclxuICBjb2xvcjogdmFyKC0taW5wcm9ncmVzcy1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWlucHJvZ3Jlc3MtdGl0bGU6OmFmdGVyIHtcclxuICBjb250ZW50OiB2YXIoLS1pbnByb2dyZXNzLXRpdGxlKTtcclxufVxyXG5cclxuLnRleHQtY29tcGxldGVkIHtcclxuICBjb2xvcjogdmFyKC0tY29tcGxldGVkLWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQtY29tcGxldGVkLXRpdGxlOjphZnRlciB7XHJcbiAgY29udGVudDogdmFyKC0tY29tcGxldGVkLXRpdGxlKTtcclxufVxyXG5cclxuLnRleHQtZGVmYXVsdCB7XHJcbn1cclxuXHJcbi5vcmRlci1vdmVydmlldy1jb250YWluZXIge1xyXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcclxuICBkaXNwbGF5OiBncmlkOyAvKmdyaWQgd2l0aCBzaW5nbGUgY2VsbCBsZXQgc3RyZXRjaCBjb250ZW50IGNvbnZpbmllbnRseSAob3IgSSBqdXN0IGxpa2UgZ3JpZHMpKi9cclxufVxyXG5cclxuLm9yZGVyLXN1bW1hcnktY29udGFpbmVyIHtcclxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XHJcbiAgZGlzcGxheTpncmlkOyBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KG1pbi1jb250ZW50LCBhdXRvKTtcclxuICBtaW4taGVpZ2h0OjA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDQ4cHgpIHtcclxuXHJcbiAgLndyYXBwZXItZ3JpZC1sYXlvdXQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIG1pbi1jb250ZW50IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub3JkZXItb3ZlcnZpZXctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XHJcbiAgICBkaXNwbGF5OiBncmlkOyBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtaGVpZ2h0OiAzNTBweClcclxue1xyXG4gIC53cmFwcGVyLWdyaWQtbGF5b3V0IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsbWlubWF4KG1pbi1jb250ZW50LDFmcikpO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLW92ZXJ2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXN1bW1hcnktY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8qZWxzZSByaWdodCBvdXRsaW5lIGlzIG5vdCB2aXNpYmxlIG9uIG92ZXJmbG93Ki9cclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW91dGxpbmUtd2lkdGgpO1xyXG4gIH1cclxufVxyXG4iLCIuc2FtcGxlLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6ODB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICBtYXJnaW46IDEwdmggNXZ3IDEwdmggNXZ3O1xyXG59XHJcblxyXG4ubG9hZGluZ1NwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIG1pbi1oZWlnaHQ6MmVtO1xyXG4gIG1pbi13aWR0aDoyZW07XHJcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGN1YmljLWJlemllcigwLjQ1LCAwLjA1LCAwLjU1LCAwLjk1KSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiXHJcbkBpbXBvcnQgJy4uL29yZGVyLXdyYXBwZXIuY29tcG9uZW50LmNzcyc7XHJcbkBpbXBvcnQgJy4uLy4uL2FwcC5jb21wb25lbnQuY3NzJztcclxuXHJcbi5vcmRlci1vdmVydmlldyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCBhdXRvKTsgIFxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgLS1sZWdlbmQtYmFja2dyb2luZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDJlbTtcclxufVxyXG4uaGVhZGVyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICBib3JkZXItc3R5bGU6ZGFzaGVkO1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvcjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcbiAgLmhlYWRlci1pdGVtOmhvdmVyLCAuaGVhZGVyLWl0ZW06Zm9jdXMsIC5oZWFkZXItaXRlbTphY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuLm9yZGVyLW5hbWUge1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5vcmRlci1tb21lbnQge1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uc3RhdHVzLWxlZ2VuZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGVnZW5kLWJhY2tncm9pbmQtY29sb3IpO1xyXG59XHJcbi5zdGF0dXMtbGVnZW5kLWl0ZW17XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczptaW4tY29udGVudCBhdXRvO1xyXG4gIHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5vcmRlci1vdmVydmlldy1sb2FkZXJ7XHJcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOmNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/order-wrapper/order-overview/order-overview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/order-wrapper/order-overview/order-overview.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOverviewComponent", function() { return OrderOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_OrderStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/OrderStatus */ "./src/app/Models/OrderStatus.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderOverviewComponent = /** @class */ (function () {
    function OrderOverviewComponent() {
        this.requestFetchDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stubOnFetching = false;
        this.keys = Object.keys;
    }
    OrderOverviewComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(OrderOverviewComponent.prototype, "orderStatusEnum", {
        get: function () { return _Models_OrderStatus__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderOverviewComponent.prototype, "orderStatusNames", {
        get: function () {
            return Object.keys(_Models_OrderStatus__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"])
                .filter(function (x) { return Number.isNaN(parseInt(x, 10)); })
                .map(function (key) {
                return { key: key, value: _Models_OrderStatus__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"][key] };
            });
        },
        enumerable: true,
        configurable: true
    });
    OrderOverviewComponent.prototype.sortHeaders = function (incoming) {
        if (incoming) {
            return incoming.sort(function (n1, n2) {
                return n1.orderName > n2.orderName ?
                    1
                    :
                        (n1.orderName < n2.orderName ?
                            -1
                            :
                                0);
            });
        }
        else
            return [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrderOverviewComponent.prototype, "requestFetchDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OrderOverviewComponent.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OrderOverviewComponent.prototype, "stubOnFetching", void 0);
    OrderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-overview',
            template: __webpack_require__(/*! raw-loader!./order-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-overview/order-overview.component.html"),
            styles: [__webpack_require__(/*! ./order-overview.component.css */ "./src/app/order-wrapper/order-overview/order-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderOverviewComponent);
    return OrderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/order-wrapper/order-summary/order-summary.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/order-wrapper/order-summary/order-summary.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-grid {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  /*there is no text wich should wraps, else this properties should be overrided*/\r\n  word-wrap: break-word;\r\n  white-space: nowrap;\r\n  --inprogress-color: darkmagenta;\r\n  --inprogress-title: \"In Progress\";\r\n  --completed-color: forestgreen;\r\n  --completed-title: \"Completed\";\r\n  --outline-width: 0.2em;\r\n  --outline-style: solid;\r\n  --outline-color: #000;\r\n}\r\n\r\n\r\n.wrapper-grid-layout {\r\n  grid-template-columns: minmax(-webkit-min-content,1fr) 3fr;\r\n  grid-template-columns: minmax(min-content,1fr) 3fr;\r\n  grid-template-rows: 1.1fr 3fr;\r\n}\r\n\r\n\r\n.outlined {\r\n  outline: var(--outline-width) var(--outline-style) var(--outline-color);  \r\n}\r\n\r\n\r\n.wrapper-grid-item {\r\n  margin: calc(2px + 0.1em);\r\n}\r\n\r\n\r\n.order-status {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  margin-left: 0.3em;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n\r\n.order-inprogress {\r\n  background-color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.order-completed {\r\n  background-color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-inprogress {\r\n  color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.text-inprogress-title::after {\r\n  content: var(--inprogress-title);\r\n}\r\n\r\n\r\n.text-completed {\r\n  color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-completed-title::after {\r\n  content: var(--completed-title);\r\n}\r\n\r\n\r\n.text-default {\r\n}\r\n\r\n\r\n.order-overview-container {\r\n  grid-area: 1 / 1 / 3 / 2;\r\n  display: grid; /*grid with single cell let stretch content conviniently (or I just like grids)*/\r\n}\r\n\r\n\r\n.order-summary-container {\r\n  grid-area: 1 / 2 / 2 / 3;\r\n  display: grid;\r\n}\r\n\r\n\r\n.order-details-container {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n  display:grid; \r\n  grid-template-columns:minmax(-webkit-min-content, auto); \r\n  grid-template-columns:minmax(min-content, auto);\r\n  min-height:0;\r\n}\r\n\r\n\r\n@media (max-width: 448px) {\r\n\r\n  .wrapper-grid-layout {\r\n    grid-template-columns: minmax(-webkit-min-content,1fr);\r\n    grid-template-columns: minmax(min-content,1fr);\r\n    grid-template-rows: 40% -webkit-min-content 100%;\r\n    grid-template-rows: 40% min-content 100%;\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 3 / 1 / 4 / 2;\r\n    display: grid; \r\n  }\r\n}\r\n\r\n\r\n@media(max-height: 350px)\r\n{\r\n  .wrapper-grid-layout {\r\n    grid-template-rows: auto;\r\n    grid-template-columns: repeat(3,minmax(-webkit-min-content,1fr));\r\n    grid-template-columns: repeat(3,minmax(min-content,1fr));\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 1 / 3 / 2 / 4;\r\n    display: grid;\r\n    /*else right outline is not visible on overflow*/\r\n    padding-right: var(--outline-width);\r\n  }\r\n}\r\n\r\n\r\n.sample-container{\r\n  height:80vh;\r\n  width: 90vw;\r\n  margin: 10vh 5vw 10vh 5vw;\r\n}\r\n\r\n\r\n.loadingSpinner {\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  min-height:2em;\r\n  min-width:2em;\r\n  border: 0.2em solid #fff;\r\n  border-radius: 50%;\r\n  border-top-color: #000;\r\n  border-bottom-color: #000;\r\n  animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n  -webkit-animation: spin 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n}\r\n\r\n\r\n@keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n.order-summary {\r\n  display: grid;\r\n  height: 100%;\r\n  width: 100%;\r\n  grid-template-columns:-webkit-min-content 1fr;\r\n  grid-template-columns:min-content 1fr;\r\n  grid-template-rows:repeat(4,auto);\r\n  align-items: center;\r\n  justify-items: left;\r\n  grid-column-gap:1em;\r\n}\r\n\r\n\r\n.order-summary > * {\r\n    margin:0.5em;\r\n  }\r\n\r\n\r\n.number-header{\r\n    grid-area: 1 / 1 / 2 / 2;\r\n  }\r\n\r\n\r\n.number-value {\r\n  grid-area: 1 / 2 / 2 / 3;\r\n}\r\n\r\n\r\n.date-header {\r\n  grid-area: 2 / 1 / 3 / 2;\r\n}\r\n\r\n\r\n.date-value {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n}\r\n\r\n\r\n.status-header {\r\n  grid-area: 3 / 1 / 4 / 2;\r\n}\r\n\r\n\r\n.status-bar {\r\n  grid-area: 3 / 2 / 4 / 3;\r\n  display: grid;\r\n  grid-template-columns: auto,1fr;\r\n  grid-auto-flow: column;\r\n}\r\n\r\n\r\n.total-header {\r\n  grid-area: 4 / 1 / 5 / 2;\r\n}\r\n\r\n\r\n.total-value {\r\n  grid-area: 4 / 2 / 5 / 3;\r\n}\r\n\r\n\r\n.total-row{\r\n  margin-top:1em;\r\n}\r\n\r\n\r\n.order-summary-loader {\r\n  grid-area: 1 / 2 / 5 / 3;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItd3JhcHBlci9vcmRlci13cmFwcGVyLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9vcmRlci13cmFwcGVyL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtFQUErRTtFQUMvRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSwwREFBa0Q7RUFBbEQsa0RBQWtEO0VBQ2xELDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSx1RUFBdUU7QUFDekU7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7OztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7O0FBRUE7QUFDQTs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYSxFQUFFLGdGQUFnRjtBQUNqRzs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osdURBQStDO0VBQS9DLCtDQUErQztFQUMvQyxZQUFZO0FBQ2Q7OztBQUdBOztFQUVFO0lBQ0Usc0RBQThDO0lBQTlDLDhDQUE4QztJQUM5QyxnREFBd0M7SUFBeEMsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmO0FBQ0Y7OztBQUVBOztFQUVFO0lBQ0Usd0JBQXdCO0lBQ3hCLGdFQUF3RDtJQUF4RCx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELG1DQUFtQztFQUNyQztBQUNGOzs7QUNqSUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnRUFBZ0U7RUFDaEUsd0VBQXdFO0FBQzFFOzs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7O0FDMUJBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsNkNBQXFDO0VBQXJDLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7OztBQUVFO0lBQ0UsWUFBWTtFQUNkOzs7QUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0Y7RUFDRSx3QkFBd0I7QUFDMUI7OztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOzs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7OztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isc0JBQXNCO0FBQ3hCOzs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXdyYXBwZXIvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC8qdGhlcmUgaXMgbm8gdGV4dCB3aWNoIHNob3VsZCB3cmFwcywgZWxzZSB0aGlzIHByb3BlcnRpZXMgc2hvdWxkIGJlIG92ZXJyaWRlZCovXHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLS1pbnByb2dyZXNzLWNvbG9yOiBkYXJrbWFnZW50YTtcclxuICAtLWlucHJvZ3Jlc3MtdGl0bGU6IFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAtLWNvbXBsZXRlZC1jb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgLS1jb21wbGV0ZWQtdGl0bGU6IFwiQ29tcGxldGVkXCI7XHJcbiAgLS1vdXRsaW5lLXdpZHRoOiAwLjJlbTtcclxuICAtLW91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gIC0tb3V0bGluZS1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi53cmFwcGVyLWdyaWQtbGF5b3V0IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwxZnIpIDNmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuMWZyIDNmcjtcclxufVxyXG5cclxuLm91dGxpbmVkIHtcclxuICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lLXdpZHRoKSB2YXIoLS1vdXRsaW5lLXN0eWxlKSB2YXIoLS1vdXRsaW5lLWNvbG9yKTsgIFxyXG59XHJcblxyXG4ud3JhcHBlci1ncmlkLWl0ZW0ge1xyXG4gIG1hcmdpbjogY2FsYygycHggKyAwLjFlbSk7XHJcbn1cclxuXHJcbi5vcmRlci1zdGF0dXMge1xyXG4gIHdpZHRoOiAxLjVlbTtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xyXG59XHJcblxyXG4ub3JkZXItaW5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wcm9ncmVzcy1jb2xvcik7XHJcbn1cclxuXHJcbi5vcmRlci1jb21wbGV0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWlucHJvZ3Jlc3Mge1xyXG4gIGNvbG9yOiB2YXIoLS1pbnByb2dyZXNzLWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQtaW5wcm9ncmVzcy10aXRsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IHZhcigtLWlucHJvZ3Jlc3MtdGl0bGUpO1xyXG59XHJcblxyXG4udGV4dC1jb21wbGV0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY29sb3IpO1xyXG59XHJcblxyXG4udGV4dC1jb21wbGV0ZWQtdGl0bGU6OmFmdGVyIHtcclxuICBjb250ZW50OiB2YXIoLS1jb21wbGV0ZWQtdGl0bGUpO1xyXG59XHJcblxyXG4udGV4dC1kZWZhdWx0IHtcclxufVxyXG5cclxuLm9yZGVyLW92ZXJ2aWV3LWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7IC8qZ3JpZCB3aXRoIHNpbmdsZSBjZWxsIGxldCBzdHJldGNoIGNvbnRlbnQgY29udmluaWVudGx5IChvciBJIGp1c3QgbGlrZSBncmlkcykqL1xyXG59XHJcblxyXG4ub3JkZXItc3VtbWFyeS1jb250YWluZXIge1xyXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscy1jb250YWluZXIge1xyXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcclxuICBkaXNwbGF5OmdyaWQ7IFxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pO1xyXG4gIG1pbi1oZWlnaHQ6MDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDhweCkge1xyXG5cclxuICAud3JhcHBlci1ncmlkLWxheW91dCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MCUgbWluLWNvbnRlbnQgMTAwJTtcclxuICB9XHJcblxyXG4gIC5vcmRlci1vdmVydmlldy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zdW1tYXJ5LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7IFxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC1oZWlnaHQ6IDM1MHB4KVxyXG57XHJcbiAgLndyYXBwZXItZ3JpZC1sYXlvdXQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMyxtaW5tYXgobWluLWNvbnRlbnQsMWZyKSk7XHJcbiAgfVxyXG5cclxuICAub3JkZXItb3ZlcnZpZXctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLyplbHNlIHJpZ2h0IG91dGxpbmUgaXMgbm90IHZpc2libGUgb24gb3ZlcmZsb3cqL1xyXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tb3V0bGluZS13aWR0aCk7XHJcbiAgfVxyXG59XHJcbiIsIi5zYW1wbGUtY29udGFpbmVye1xyXG4gIGhlaWdodDo4MHZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1hcmdpbjogMTB2aCA1dncgMTB2aCA1dnc7XHJcbn1cclxuXHJcbi5sb2FkaW5nU3Bpbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgbWluLWhlaWdodDoyZW07XHJcbiAgbWluLXdpZHRoOjJlbTtcclxuICBib3JkZXI6IDAuMmVtIHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcclxuICBhbmltYXRpb246IHNwaW4gMXMgY3ViaWMtYmV6aWVyKDAuNDUsIDAuMDUsIDAuNTUsIDAuOTUpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGN1YmljLWJlemllcigwLjQ1LCAwLjA1LCAwLjU1LCAwLjk1KSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iLCJcclxuQGltcG9ydCAnLi4vb3JkZXItd3JhcHBlci5jb21wb25lbnQuY3NzJztcclxuQGltcG9ydCAnLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuLm9yZGVyLXN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczptaW4tY29udGVudCAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCg0LGF1dG8pO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogbGVmdDtcclxuICBncmlkLWNvbHVtbi1nYXA6MWVtO1xyXG59XHJcblxyXG4gIC5vcmRlci1zdW1tYXJ5ID4gKiB7XHJcbiAgICBtYXJnaW46MC41ZW07XHJcbiAgfVxyXG5cclxuICAubnVtYmVyLWhlYWRlcntcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICB9XHJcbi5udW1iZXItdmFsdWUge1xyXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcclxufVxyXG4uZGF0ZS1oZWFkZXIge1xyXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcclxufVxyXG4uZGF0ZS12YWx1ZSB7XHJcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xyXG59XHJcbi5zdGF0dXMtaGVhZGVyIHtcclxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XHJcbn1cclxuLnN0YXR1cy1iYXIge1xyXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bywxZnI7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxufVxyXG4udG90YWwtaGVhZGVyIHtcclxuICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDI7XHJcbn1cclxuLnRvdGFsLXZhbHVlIHtcclxuICBncmlkLWFyZWE6IDQgLyAyIC8gNSAvIDM7XHJcbn1cclxuXHJcbi50b3RhbC1yb3d7XHJcbiAgbWFyZ2luLXRvcDoxZW07XHJcbn1cclxuXHJcbi5vcmRlci1zdW1tYXJ5LWxvYWRlciB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDUgLyAzO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/order-wrapper/order-summary/order-summary.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/order-wrapper/order-summary/order-summary.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_OrderStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/OrderStatus */ "./src/app/Models/OrderStatus.ts");
/* harmony import */ var _Scaffolding_ViewModels_OrderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Scaffolding/ViewModels/OrderView */ "./src/app/order-wrapper/Scaffolding/ViewModels/OrderView.ts");
/* harmony import */ var _Models_OrderDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/OrderDetails */ "./src/app/Models/OrderDetails.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
        this.stubOnFetching = false;
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(OrderSummaryComponent.prototype, "orderStatusEnum", {
        get: function () { return _Models_OrderStatus__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"]; },
        enumerable: true,
        configurable: true
    });
    OrderSummaryComponent.prototype.totalAmount = function () {
        if (this.selectedOrder) {
            return Object(_Models_OrderDetails__WEBPACK_IMPORTED_MODULE_3__["getTotalOrderAmount"])(this.selectedOrder.details);
        }
        else {
            '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedOrder'),
        __metadata("design:type", _Scaffolding_ViewModels_OrderView__WEBPACK_IMPORTED_MODULE_2__["OrderView"])
    ], OrderSummaryComponent.prototype, "selectedOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OrderSummaryComponent.prototype, "stubOnFetching", void 0);
    OrderSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-summary',
            template: __webpack_require__(/*! raw-loader!./order-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-summary/order-summary.component.html"),
            styles: [__webpack_require__(/*! ./order-summary.component.css */ "./src/app/order-wrapper/order-summary/order-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/order-wrapper/order-wrapper.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-wrapper/order-wrapper.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-grid {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  /*there is no text wich should wraps, else this properties should be overrided*/\r\n  word-wrap: break-word;\r\n  white-space: nowrap;\r\n  --inprogress-color: darkmagenta;\r\n  --inprogress-title: \"In Progress\";\r\n  --completed-color: forestgreen;\r\n  --completed-title: \"Completed\";\r\n  --outline-width: 0.2em;\r\n  --outline-style: solid;\r\n  --outline-color: #000;\r\n}\r\n\r\n\r\n.wrapper-grid-layout {\r\n  grid-template-columns: minmax(-webkit-min-content,1fr) 3fr;\r\n  grid-template-columns: minmax(min-content,1fr) 3fr;\r\n  grid-template-rows: 1.1fr 3fr;\r\n}\r\n\r\n\r\n.outlined {\r\n  outline: var(--outline-width) var(--outline-style) var(--outline-color);  \r\n}\r\n\r\n\r\n.wrapper-grid-item {\r\n  margin: calc(2px + 0.1em);\r\n}\r\n\r\n\r\n.order-status {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  margin-left: 0.3em;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n\r\n.order-inprogress {\r\n  background-color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.order-completed {\r\n  background-color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-inprogress {\r\n  color: var(--inprogress-color);\r\n}\r\n\r\n\r\n.text-inprogress-title::after {\r\n  content: var(--inprogress-title);\r\n}\r\n\r\n\r\n.text-completed {\r\n  color: var(--completed-color);\r\n}\r\n\r\n\r\n.text-completed-title::after {\r\n  content: var(--completed-title);\r\n}\r\n\r\n\r\n.text-default {\r\n}\r\n\r\n\r\n.order-overview-container {\r\n  grid-area: 1 / 1 / 3 / 2;\r\n  display: grid; /*grid with single cell let stretch content conviniently (or I just like grids)*/\r\n}\r\n\r\n\r\n.order-summary-container {\r\n  grid-area: 1 / 2 / 2 / 3;\r\n  display: grid;\r\n}\r\n\r\n\r\n.order-details-container {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n  display:grid; \r\n  grid-template-columns:minmax(-webkit-min-content, auto); \r\n  grid-template-columns:minmax(min-content, auto);\r\n  min-height:0;\r\n}\r\n\r\n\r\n@media (max-width: 448px) {\r\n\r\n  .wrapper-grid-layout {\r\n    grid-template-columns: minmax(-webkit-min-content,1fr);\r\n    grid-template-columns: minmax(min-content,1fr);\r\n    grid-template-rows: 40% -webkit-min-content 100%;\r\n    grid-template-rows: 40% min-content 100%;\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 3 / 1 / 4 / 2;\r\n    display: grid; \r\n  }\r\n}\r\n\r\n\r\n@media(max-height: 350px)\r\n{\r\n  .wrapper-grid-layout {\r\n    grid-template-rows: auto;\r\n    grid-template-columns: repeat(3,minmax(-webkit-min-content,1fr));\r\n    grid-template-columns: repeat(3,minmax(min-content,1fr));\r\n  }\r\n\r\n  .order-overview-container {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    display: grid;\r\n  }\r\n\r\n  .order-summary-container {\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    display: grid;\r\n  }\r\n\r\n  .order-details-container {\r\n    grid-area: 1 / 3 / 2 / 4;\r\n    display: grid;\r\n    /*else right outline is not visible on overflow*/\r\n    padding-right: var(--outline-width);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItd3JhcHBlci9vcmRlci13cmFwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsK0VBQStFO0VBQy9FLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFLDBEQUFrRDtFQUFsRCxrREFBa0Q7RUFDbEQsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLHVFQUF1RTtBQUN6RTs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7OztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOzs7QUFFQTtBQUNBOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhLEVBQUUsZ0ZBQWdGO0FBQ2pHOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix1REFBK0M7RUFBL0MsK0NBQStDO0VBQy9DLFlBQVk7QUFDZDs7O0FBR0E7O0VBRUU7SUFDRSxzREFBOEM7SUFBOUMsOENBQThDO0lBQzlDLGdEQUF3QztJQUF4Qyx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0VBQ2Y7QUFDRjs7O0FBRUE7O0VBRUU7SUFDRSx3QkFBd0I7SUFDeEIsZ0VBQXdEO0lBQXhELHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsbUNBQW1DO0VBQ3JDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci13cmFwcGVyL29yZGVyLXdyYXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLyp0aGVyZSBpcyBubyB0ZXh0IHdpY2ggc2hvdWxkIHdyYXBzLCBlbHNlIHRoaXMgcHJvcGVydGllcyBzaG91bGQgYmUgb3ZlcnJpZGVkKi9cclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtLWlucHJvZ3Jlc3MtY29sb3I6IGRhcmttYWdlbnRhO1xyXG4gIC0taW5wcm9ncmVzcy10aXRsZTogXCJJbiBQcm9ncmVzc1wiO1xyXG4gIC0tY29tcGxldGVkLWNvbG9yOiBmb3Jlc3RncmVlbjtcclxuICAtLWNvbXBsZXRlZC10aXRsZTogXCJDb21wbGV0ZWRcIjtcclxuICAtLW91dGxpbmUtd2lkdGg6IDAuMmVtO1xyXG4gIC0tb3V0bGluZS1zdHlsZTogc29saWQ7XHJcbiAgLS1vdXRsaW5lLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5cclxuLndyYXBwZXItZ3JpZC1sYXlvdXQge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LDFmcikgM2ZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS4xZnIgM2ZyO1xyXG59XHJcblxyXG4ub3V0bGluZWQge1xyXG4gIG91dGxpbmU6IHZhcigtLW91dGxpbmUtd2lkdGgpIHZhcigtLW91dGxpbmUtc3R5bGUpIHZhcigtLW91dGxpbmUtY29sb3IpOyAgXHJcbn1cclxuXHJcbi53cmFwcGVyLWdyaWQtaXRlbSB7XHJcbiAgbWFyZ2luOiBjYWxjKDJweCArIDAuMWVtKTtcclxufVxyXG5cclxuLm9yZGVyLXN0YXR1cyB7XHJcbiAgd2lkdGg6IDEuNWVtO1xyXG4gIGhlaWdodDogMS41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcbi5vcmRlci1pbnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnByb2dyZXNzLWNvbG9yKTtcclxufVxyXG5cclxuLm9yZGVyLWNvbXBsZXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQtaW5wcm9ncmVzcyB7XHJcbiAgY29sb3I6IHZhcigtLWlucHJvZ3Jlc3MtY29sb3IpO1xyXG59XHJcblxyXG4udGV4dC1pbnByb2dyZXNzLXRpdGxlOjphZnRlciB7XHJcbiAgY29udGVudDogdmFyKC0taW5wcm9ncmVzcy10aXRsZSk7XHJcbn1cclxuXHJcbi50ZXh0LWNvbXBsZXRlZCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWNvbXBsZXRlZC10aXRsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IHZhcigtLWNvbXBsZXRlZC10aXRsZSk7XHJcbn1cclxuXHJcbi50ZXh0LWRlZmF1bHQge1xyXG59XHJcblxyXG4ub3JkZXItb3ZlcnZpZXctY29udGFpbmVyIHtcclxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XHJcbiAgZGlzcGxheTogZ3JpZDsgLypncmlkIHdpdGggc2luZ2xlIGNlbGwgbGV0IHN0cmV0Y2ggY29udGVudCBjb252aW5pZW50bHkgKG9yIEkganVzdCBsaWtlIGdyaWRzKSovXHJcbn1cclxuXHJcbi5vcmRlci1zdW1tYXJ5LWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xyXG4gIGRpc3BsYXk6Z3JpZDsgXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChtaW4tY29udGVudCwgYXV0byk7XHJcbiAgbWluLWhlaWdodDowO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0OHB4KSB7XHJcblxyXG4gIC53cmFwcGVyLWdyaWQtbGF5b3V0IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwJSBtaW4tY29udGVudCAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLW92ZXJ2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXN1bW1hcnktY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xyXG4gICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LWhlaWdodDogMzUwcHgpXHJcbntcclxuICAud3JhcHBlci1ncmlkLWxheW91dCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLG1pbm1heChtaW4tY29udGVudCwxZnIpKTtcclxuICB9XHJcblxyXG4gIC5vcmRlci1vdmVydmlldy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zdW1tYXJ5LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKmVsc2UgcmlnaHQgb3V0bGluZSBpcyBub3QgdmlzaWJsZSBvbiBvdmVyZmxvdyovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1vdXRsaW5lLXdpZHRoKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/order-wrapper/order-wrapper.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-wrapper/order-wrapper.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderWrapperComponent", function() { return OrderWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Scaffolding_ViewModels_HeaderView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scaffolding/ViewModels/HeaderView */ "./src/app/order-wrapper/Scaffolding/ViewModels/HeaderView.ts");
/* harmony import */ var _Scaffolding_ViewModels_OrderView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scaffolding/ViewModels/OrderView */ "./src/app/order-wrapper/Scaffolding/ViewModels/OrderView.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var OrderWrapperComponent = /** @class */ (function () {
    function OrderWrapperComponent(_http, _datePipe, route) {
        this._http = _http;
        this._datePipe = _datePipe;
        this.route = route;
        this.apiBaseUrl = 'http://localhost:5050/';
        this.pendData = 2000;
        this.loadingHeaders = false;
        this.fetchingDetails = false;
    }
    OrderWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.routedApiBaseUrl = params['routedApiBaseUrl'];
            _this.routedPendData = +params['routedPendData'];
            if (_this.routedApiBaseUrl)
                _this.apiBaseUrl = _this.routedApiBaseUrl;
            if (_this.routedPendData)
                _this.pendData = _this.routedPendData;
        });
        this.loadingHeaders = true;
        this._http.get(this.apiBaseUrl + 'api/orders/brief/')
            .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, _this.pendData); })];
                    case 1:
                        _a.sent();
                        this.headers = result.map(function (h) {
                            return Object(_Scaffolding_ViewModels_HeaderView__WEBPACK_IMPORTED_MODULE_3__["convertHeader"])(h, _this._datePipe);
                        });
                        this.loadingHeaders = false;
                        return [2 /*return*/];
                }
            });
        }); }, function (error) { return console.error(error); });
    };
    OrderWrapperComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    OrderWrapperComponent.prototype.fetchDetails = function (headerId) {
        var _this = this;
        this.fetchingDetails = true;
        this._http.get(this.apiBaseUrl + 'api/orders/details/' + headerId)
            .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var convertedOrder;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, _this.pendData); })];
                    case 1:
                        _a.sent();
                        convertedOrder = Object(_Scaffolding_ViewModels_OrderView__WEBPACK_IMPORTED_MODULE_4__["convertOrder"])(result, this._datePipe);
                        this.selectedOrder = convertedOrder;
                        this.fetchingDetails = false;
                        return [2 /*return*/];
                }
            });
        }); }, function (error) { return console.error(error); });
    };
    OrderWrapperComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderWrapperComponent.prototype, "apiBaseUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrderWrapperComponent.prototype, "pendData", void 0);
    OrderWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-wrapper',
            template: __webpack_require__(/*! raw-loader!./order-wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-wrapper/order-wrapper.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./order-wrapper.component.css */ "./src/app/order-wrapper/order-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], OrderWrapperComponent);
    return OrderWrapperComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cypok\source\repos\DisplayOrdersTestTask\FrontEnd\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map