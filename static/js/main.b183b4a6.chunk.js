(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),c=(n(15),n(1)),l=n(2),s=n(5),u=n(3),p=n(4),h=n(6),m=(n(16),n(17),n(18),n(19),n(20),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Option"},o.a.createElement("input",{type:"radio",id:this.props.option,name:this.props.option,value:this.props.option}),o.a.createElement("label",{for:this.props.option},this.props.option))}}]),t}(o.a.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,this.props.label),o.a.createElement("div",{className:"Question"},this.props.options.map(function(e){return o.a.createElement(m,{option:e})})))}}]),t}(o.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"QuestionList"},this.props.questions.map(function(e){return o.a.createElement(d,{label:e.label,options:e.options})}))}}]),t}(o.a.Component),f=(n(21),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(e){e.preventDefault();var t=document.getElementById("label").value,a=document.getElementById("options").value;n.props.onClick(t,a.split(", "))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"NewQuestion"},o.a.createElement("label",null,"Add a new question:"),o.a.createElement("textarea",{rows:"2",id:"label",type:"text",placeholder:"What is your favourite programming language?"}),o.a.createElement("textarea",{rows:"4",id:"options",type:"text",placeholder:"Enter your options separated by a comma. i.e Java, PHP, C, C++"}),o.a.createElement("a",{href:"#",class:"btn btn-primary a-btn-slide-text",onClick:this.handleClick},o.a.createElement("span",{class:"glyphicon glyphicon-remove","aria-hidden":"true"}),o.a.createElement("span",null,o.a.createElement("strong",null,"Add"))))}}]),t}(o.a.Component)),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={questions:[{label:"What is your favourite programming language?",options:["C++","Java","Javascript","Python"]},{label:"What is your favourite front-end library?",options:["Anuglar","jQuery","React","Vue"]}]},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e,t){var n=this.state.questions.slice();n.push({label:e,options:t}),this.setState({questions:n})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{questions:this.state.questions}),o.a.createElement(f,{onClick:this.handleClick}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.b183b4a6.chunk.js.map