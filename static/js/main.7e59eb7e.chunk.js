(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[0],{20:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(29),r=n.n(o),s=(n(20),n(12)),i=n(13),l=n(15),h=n(14),u=n(8),d=n(1),j=function(){return Object(d.jsx)("nav",{className:"main-nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{exact:!0,to:"/cats",children:"Cats"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/dogs",children:"Dogs"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/cars",children:"Cars"})})]})})},f=function(){return Object(d.jsx)("div",{className:"not-found-container",children:Object(d.jsxs)("div",{className:"not-found",children:[Object(d.jsx)("h2",{children:"Oops"}),Object(d.jsx)("h3",{children:"Not Found"}),Object(d.jsx)("h3",{children:"This search query has returned no results"})]})})},p=function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:t.url,alt:t.title})})},g=n(2),b=Object(g.g)((function(t){var e,n=t.data;e=n.length>0?n.map((function(t){return Object(d.jsx)(p,{url:"https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,"_m.jpg"),title:t.title},t.id)})):Object(d.jsx)(f,{});var a=t.match.params.query;return Object(c.useEffect)((function(){t.title!==a&&t.handleSearch(a)})),Object(d.jsx)("div",{className:"photo-container",children:Object(d.jsx)("ul",{children:e})})})),v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleSubmit=function(e){e.preventDefault(),t.props.onSearch(t.query.value);var n="/search/".concat(t.query.value);t.props.history.push(n),e.currentTarget.reset()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"search-form",children:[Object(d.jsx)("input",{type:"text",ref:function(e){return t.query=e},placeholder:"Search"}),Object(d.jsx)("button",{type:"submit",children:"Go!"})]})}}]),n}(a.a.Component),O=Object(g.g)(v),m=n(11),x=n.n(m),w="210a677dfe4920704dfa203a5b15b589",k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={photos:[],cats:[],dogs:[],cars:[],title:"",loading:!0},t.performSearch=function(e){t.setState({loading:!0}),x.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(n){return t.setState({photos:n.data.photos.photo,title:e,loading:!1})})).catch((function(t){console.log("Error fetching in parsing data",t)}))},t.catsResults=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cats";x.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){return t.setState({cats:e.data.photos.photo,loading:!1})})).catch((function(t){console.log("Error fetching in parsing data",t)}))},t.dogsResult=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dogs";x.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){return t.setState({dogs:e.data.photos.photo,loading:!1})})).catch((function(t){console.log("Error fetching in parsing data",t)}))},t.carsResults=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cars";x.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){return t.setState({cars:e.data.photos.photo,loading:!1})})).catch((function(t){console.log("Error fetching in parsing data",t)}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.catsResults(),this.dogsResult(),this.carsResults()}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{onSearch:this.performSearch}),Object(d.jsx)(j,{}),this.state.loading?Object(d.jsx)("p",{children:"Loading images..."}):Object(d.jsxs)(g.d,{children:[Object(d.jsx)(g.b,{exact:!0,path:"/",component:function(){return Object(d.jsx)(g.a,{to:"/cats"})}}),Object(d.jsx)(g.b,{exact:!0,path:"/cats",render:function(){return Object(d.jsx)(b,{data:t.state.cats})}}),Object(d.jsx)(g.b,{exact:!0,path:"/dogs",render:function(){return Object(d.jsx)(b,{data:t.state.dogs})}}),Object(d.jsx)(g.b,{exact:!0,path:"/cars",render:function(){return Object(d.jsx)(b,{data:t.state.cars})}}),Object(d.jsx)(g.b,{path:"/search/:query",render:function(){return Object(d.jsx)(b,{data:t.state.photos,title:t.state.title,handleSearch:t.performSearch,loading:t.state.loading})}}),Object(d.jsx)(g.b,{component:f})]})]})}}]),n}(c.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var _=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(d.jsx)(u.a,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/reactGallery",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/reactGallery","/service-worker.js");y?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):S(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(e,t)}))}}(),_()}},[[62,1,2]]]);
//# sourceMappingURL=main.7e59eb7e.chunk.js.map