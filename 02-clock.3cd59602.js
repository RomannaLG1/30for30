!function(){var e=document.querySelector(".second-hand"),t=document.querySelector(".min-hand"),n=document.querySelector(".hour-hand");setInterval((function(){var r=new Date,o=r.getSeconds()/60*360+90;e.style.transform="rotate(".concat(o,"deg)");var a=r.getMinutes(),c=a/60*360+90;t.style.transform="rotate(".concat(c,"deg)");var d=r.getHours()/12*360+a/60*30+90;n.style.transform="rotate(".concat(d,"deg)")}),1e3)}();
//# sourceMappingURL=02-clock.3cd59602.js.map