(this["webpackJsonpreact-timeline-2"]=this["webpackJsonpreact-timeline-2"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),c=(n(45),n(33)),o=n(34),s=n(37),u=n(39),m=n(7),d=(n(57),n(58),n(38)),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+Math.random().toString(36).substring(2)+Date.now().toString(36)},f=function(e,t,n){var a=!(["desc","descending","d"].indexOf(n)>-1);if(e||null==e)return a?-1:1;if(t||null==t)return a?1:-1;var r=new Date(e),l=new Date(t);return a?r-l:l-r},E=function(e,t){var n="";return e&&null!=e&&(n=n.concat(e.startsWith("-")?e.substring(0,5):e.substring(0,4))),t&&null!=t&&(n=n.concat(" - ",t.startsWith("-")?t.substring(1,4):t.substring(0,4))),r.a.createElement("span",null," ",r.a.createElement("b",null," ",n," "))},v=n(35),g=n.n(v),b=function(e){var t=e.title,n=e.subHeaders;return r.a.createElement("div",{key:h(t)},r.a.createElement("center",null,r.a.createElement("h3",{className:"vertical-timeline-element-title"},t)),n.sort((function(e,t){return f(e.DateFrom,t.DateFrom,"")})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.Title),r.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},E(e.DateFrom,e.DateTo)),r.a.createElement("ul",null," ",e.Texts.map((function(e){return r.a.createElement("li",{key:h(e)},g()(e))}))))})))},p=n(36),D=n.n(p),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).fetchData=function(){D.a.get("https://raw.githubusercontent.com/hirak1984/VariousTimelines/master/data/json/CanadaHistory.json").then((function(e){var t=e.data;console.log(t),console.log(t.Title),console.log(t.headers),a.setState({title:t.Title,data:t.headers})})).catch((function(e){return console.log(e)}))},a.state={title:"",data:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"leftpane"},"\xa0"),r.a.createElement("div",{className:"middlepane"},r.a.createElement("center",null," ",r.a.createElement("h3",null," ",this.state.title," "))," ",r.a.createElement("hr",null),r.a.createElement(m.VerticalTimeline,null," ",this.state.data.sort((function(e,t){return f(e.DateFrom,t.DateFrom,"")})).map((function(e){return r.a.createElement(m.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:E(e.DateFrom,e.DateTo),key:h(e.DateFrom),iconStyle:{background:"#EF3340",color:"#fff"},icon:r.a.createElement(d.a,null)},r.a.createElement(b,{key:h(e.Title),title:e.Title,subHeaders:e.subHeaders}))})))),r.a.createElement("div",{className:"rightpane"},"\xa0"))}}]),n}(a.Component);function w(){return r.a.createElement(k,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,n){e.exports=n(119)},45:function(e,t,n){},58:function(e,t,n){},83:function(e,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.2f43f4f3.chunk.js.map