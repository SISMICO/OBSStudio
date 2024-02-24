(()=>{"use strict";const t=function(){function t(t,n,e){void 0===e&&(e=!1),this.intervalHandler=null,this.element=null,this.element=t,this.initialClock=n,this.decrement=e}return t.prototype.startClock=function(){var t=this,n=this.initialClock;this.intervalHandler=setInterval((function(){t.decrement?n--:n++,t.element.innerText=t.formatTime(n)}),1e3)},t.prototype.stopClock=function(){clearInterval(this.intervalHandler)},t.prototype.resetClock=function(){this.stopClock(),this.startClock()},t.prototype.formatTime=function(t){var n,e=Math.abs(t),o=Math.floor(e/60),r=Math.floor(e%60);return"".concat((n=t,n<0?"-":"")).concat(this.formatNumber(o),":").concat(this.formatNumber(r))},t.prototype.formatNumber=function(t){return"0".concat(t).slice(-2)},t}();var n=function(){function t(t){var n=this;this.people=[],this.position=0,this.getRandomIndex=function(t){return Math.floor(Math.random()*t)},this.randomizePeople=function(t){for(var e=function(t,n,e){if(e||2===arguments.length)for(var o,r=0,i=n.length;r<i;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}([],t,!0),o=0;o<e.length;o++){var r=e[o],i=n.getRandomIndex(e.length);e[o]=e[i],e[i]=r}return e},this.people=this.randomizePeople(t)}return t.prototype.start=function(){return this.getPerson()},t.prototype.next=function(){return this.position++,this.getPerson()},t.prototype.getPerson=function(){return this.people[this.position]},t}();const e=n;var o=["Bento","Sosa","Alysson","Samille","Ellen","Vini"],r=null,i=null,l=null;window.onload=function(){l=new e(o),r=new t(document.getElementById("totalClock"),0),i=new t(document.getElementById("personClock"),120,!0),document.getElementById("panel").innerText=l.people.join(" | "),document.getElementById("start").addEventListener("click",(function(){return c()})),document.getElementById("stop").addEventListener("click",(function(){return s()})),document.getElementById("nextPerson").addEventListener("click",(function(){return a()}))};var c=function(){r.startClock(),i.startClock(),u(l.start())},s=function(){r.stopClock(),i.stopClock()},a=function(){i.resetClock(),u(l.next())},u=function(t){document.getElementById("person").innerText=t}})();