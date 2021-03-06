(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}const n=[31,28,31,30,31,30,31,31,30,31,30,31];function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var l=function(){function t(){e(this,t)}return r(t,[{key:"remain",value:function(e){var t=new Date,r=Math.floor(e-t+1e3)/1e3;return{remainSecs:("0"+Math.floor(r%60)).slice(-2),remainMinutes:("0"+Math.floor(r/60%60)).slice(-2),remainHours:("0"+Math.floor(r/3600%24)).slice(-2),remainDays:Math.floor(r/86400%30),remainMonths:Math.floor(r/2592e3%12),remainYears:Math.floor(r/31104e3),remain:r}}}]),t}(),h=function(t){a(o,t);var n=c(o);function o(t){var r;return e(this,o),(r=n.call(this)).newDate=t.date,r.modal=document.querySelector("#modal"),r.dateText=document.querySelector("#dateText"),r.dateText.style.fontSize="1rem",r.text=document.querySelector("#textModal"),r.text.textContent="Still Left",r.text.style.fontSize="2.5rem",document.querySelector("#modalImage").src="./assets/stopwatch.svg",r.render(),r}return r(o,[{key:"render",value:function(){var e=this;setTimeout((function(){e.modal.style.display="flex",e.modal.classList.add("animate__fadeInDownBig"),e.update(e.dateText)}),1e3)}},{key:"update",value:function(e){var t=this,r=setInterval((function(){var n=t.remain(t.newDate);e.innerText="".concat(n.remainYears,"y : ").concat(n.remainMonths,"m : ").concat(n.remainDays,"d : ").concat(n.remainHours,"h : ").concat(n.remainMinutes,"m : ").concat(n.remainSecs,"s"),"none"===t.modal.style.display&&clearInterval(r)}),1e3)}}]),o}(l),m=function(t){a(o,t);var n=c(o);function o(){var t;return e(this,o),(t=n.call(this)).presidentDate=document.querySelector("#presidentDate"),t.presidentDate.style.fontSize=".9rem",t.birthDate=document.querySelector("#birthDate"),t.birthDate.style.fontSize=".9rem",t.roseDate=document.querySelector("#roseDate"),t.roseDate.style.fontSize=".9rem",t.presidentLimit=new Date(2022,4,29,0),t.birthLimit=new Date(2021,4,10,0),t.roseLimit=new Date(2021,2,12,0),t.updatePresidentCard(),t.updateBirthCard(),t.updateRoseCard(),t}return r(o,[{key:"updateBirthCard",value:function(){this.update(this.birthDate,this.birthLimit,"Now! Buy me a coffe ;3")}},{key:"updatePresidentCard",value:function(){this.update(this.presidentDate,this.presidentLimit,"Really? I must be dreaming")}},{key:"updateRoseCard",value:function(){this.update(this.roseDate,this.roseLimit,"Out Already!")}},{key:"update",value:function(e,t,r){var n=this,o=setInterval((function(){var a=n.remain(t);e.innerText="".concat(a.remainYears,"y: ").concat(a.remainMonths,"m: ").concat(a.remainDays,"d: ").concat(a.remainHours,"h: ").concat(a.remainMinutes,"m: ").concat(a.remainSecs,"s"),a.remain<1&&(e.innerText="".concat(r||"Now !"),clearInterval(o))}),1e3)}}]),o}(l);const d=h;const f=function(){function t(r){e(this,t),this.values=r.values,this.year=parseInt(r.values[0]),this.month=parseInt(r.values[1])-1,this.day=parseInt(r.values[2]),this.hour=parseInt(r.values[3]),this.time=r.time.toLocaleLowerCase(),this.date=new Date(this.year,this.month,this.day,this.hour),this.now=new Date,this.modal=document.querySelector("#modal"),this.text=document.querySelector("#textModal"),this.text.style.fontSize="1.5rem",this.modalImg=document.querySelector("#modalImage"),this.dateRight()}return r(t,[{key:"dateRight",value:function(){this.values.includes("")||this.values.includes(NaN)?this.throwError("Oh oH Wrong Date! Try Again"):this.validateDays()}},{key:"validateDays",value:function(){switch(!0){case this.year<0:this.throwError("Oh oh Wrong Year! Check It");break;case this.month>11||this.month<0:this.throwError("Oh oH Wrong Month! Check It");break;case this.day>n[this.month]||this.day<0:this.throwError("Oh oH Wrong Day! Check It");break;case this.hour>12||this.hour<0:this.throwError("Oh oH Wrong Hour! Check It");break;case"am"!==this.time&&"pm"!==this.time:this.throwError("Oh oH Wrong Time Period! Check It");break;default:this.isNegative()}}},{key:"isNegative",value:function(){if((this.date-this.now+"").includes("-"))this.throwError("Date Wrong! Try with one on the future");else{var e=this.getExactHour(),t=new Date(this.year,this.month,this.day,e);new d({date:t})}}},{key:"getExactHour",value:function(){var e=this.hour;return"pm"===this.time&&(e+=12),"am"===this.time&&12===this.hour&&(e=0),"pm"===this.time&&12===this.hour&&(e=12),e}},{key:"throwError",value:function(e){var t=this;this.text.innerText=e,this.modalImg.src="./assets/error.svg",setTimeout((function(){t.modal.style.display="flex",t.modal.classList.add("animate__fadeInDownBig")}),1e3)}}]),t}();var y=document.querySelector("#yearInput"),p=document.querySelector("#monthInput"),v=document.querySelector("#dayInput"),w=document.querySelector("#hourInput"),S=document.querySelector("#timeInput"),b=document.querySelector("#send"),g=document.querySelector("#modal"),D=document.querySelector("#loveCard");new m,document.body.addEventListener("click",(function(e){var t,r,n,o,a=e.target;if("send"===a.id){var i=[y.value,p.value,v.value,w.value];b.classList.add("animation"),new f({values:i,time:S.value}),setTimeout((function(){return b.classList.remove("animation")}),3e3)}(a.classList.contains("modal__container")||a.classList.contains("modal--close"))&&(g.style.display="none"),a.classList.contains("love")&&(D.classList.add("animate__pulse"),setTimeout((function(){return D.classList.remove("animate__pulse")}),2e3),t="Now, Text me bae ;3",r="./assets/heart.svg",n=document.querySelector("#modalImage"),o=document.querySelector("#textModal"),document.querySelector("#dateText").innerText=" ",o.style.fontSize="1.5rem",o.innerText=t,n.src=r,setTimeout((function(){g.style.display="flex",g.classList.add("animate__fadeInDownBig")}),1e3))}))})();