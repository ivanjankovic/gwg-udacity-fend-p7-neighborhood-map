(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(284)},114:function(e,t,n){},116:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=(n(114),n(16)),s=n(17),c=n(21),u=n(20),m=n(22),d=(n(116),function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"baseURL",value:function(){return"https://api.foursquare.com/v2/"}},{key:"auth",value:function(){var e={client_id:"N2LF450TRQ1L3PF3DSWNIV1N3UXBH1LRQ5LQ4PULFCAIO5A5",client_secret:"ONQENVONQGOXO0UJ2WCXC1A55Q3F00X0CAV505SXNUPAXOJD",v:"20181028"};return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")}},{key:"urlBuilder",value:function(e){return e?Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&"):""}},{key:"headers",value:function(){return{Accept:"application/json"}}},{key:"simpleFetch",value:function(t,n,a){var r={method:n,headers:e.headers()};return fetch("".concat(e.baseURL()).concat(t,"?").concat(e.auth(),"&").concat(e.urlBuilder(a)),r).then(function(e){return e.json()})}}]),e}()),p=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"search",value:function(e){return d.simpleFetch("/venues/search","GET",e)}},{key:"getVenueDetails",value:function(e){return d.simpleFetch("/venues/".concat(e),"GET")}},{key:"getVenuePhotos",value:function(e){return d.simpleFetch("/venues/".concat(e,"/photos"),"GET")}}]),e}(),h=n(47),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error",style:{backgroundColor:"lightgray",position:"absolute",margin:12,borderRadius:5,padding:45}},r.a.createElement("h4",{style:{color:"white",fontSize:"1.25rem",textAlign:"center"}},"We Are Unable to Process Your Request At This Time"))}}]),t}(a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.google,n=e.state,a=e.style,o=e.whenMapIsReady,i=e.closeInfoWindow,l=n.selectedPlace;return r.a.createElement(h.Map,{"aria-label":"map",role:"application",visible:n.mapVisible,google:t,style:a.map,zoom:n.zoom,center:n.mapCenter,onReady:o,onClick:i,initialCenter:{lat:40.745,lng:-73.985}},r.a.createElement(h.InfoWindow,{visible:n.showingInfoWindow,marker:n.selectedPlace,onClose:i},r.a.createElement("div",null,r.a.createElement("h4",null,l&&l.name),r.a.createElement("h4",null,l&&l.location.address))))}}]),t}(a.Component),w=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyDS-ak8ed2Bx4ib-u9-9KCRHdLJVKYKvlY",LoadingContainer:f})(b),g=n(48),k=n(46),v=n(68),y=n.n(v),E=n(105),O=n.n(E),C=n(106),j=n.n(C),I=n(104),M=n.n(I),P=n(65),A=n.n(P),N=n(66),V=n.n(N),W=n(107),L=n.n(W),R=n(67),S=n.n(R),T=n(49),B=n.n(T),x=n(108),F=n.n(x),q=n(103),U=n.n(q),D=n(64),Q=n.n(D),_=n(102),Y=n.n(_),G=n(101),X=n.n(G);window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__=!0;var z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},n.handleDrawerToggle=function(){n.setState(function(e){return{mobileOpen:!e.mobileOpen}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.theme,o=this.props,i=o.style,l=o.state,s=o.onQueryChange,c=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement(B.a,null),r.a.createElement(Q.a,{style:i.inputField,placeholder:"Filter list",onChange:function(e){return s(e.target.value)},"aria-label":"filter list",labelWidth:this.labelRef?this.labelRef.offsetWidth:0}),r.a.createElement(B.a,null),l.squareAPIerror&&r.a.createElement(X.a,{disabled:!0,error:!0,id:"outlined-error",label:"Error",defaultValue:"ForSquare data unavalable",className:n.textField,margin:"normal",variant:"outlined",style:{margin:"15px",width:"-webkit-fill-available"},visible:"false"}),r.a.createElement(A.a,{style:i.list},l.filterdVenues.map(function(t){return r.a.createElement(Y.a,{key:t.id,variant:"outlined",className:n.button,onClick:e.props.onListClick,style:i.listButton},r.a.createElement(U.a,{style:{fontSize:"22px"},primary:t.name}))})),r.a.createElement(B.a,null));return r.a.createElement("div",{className:n.root},r.a.createElement(M.a,null),r.a.createElement(O.a,{position:"fixed",className:n.appBar},r.a.createElement(j.a,null,r.a.createElement(L.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:n.menuButton},r.a.createElement(F.a,null)),r.a.createElement(V.a,{variant:"h6",color:"inherit",noWrap:!0},"NYC Libraries"))),r.a.createElement("nav",{className:n.drawer},r.a.createElement(S.a,{smUp:!0,implementation:"css"},r.a.createElement(y.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},c)),r.a.createElement(S.a,{xsDown:!0,implementation:"css"},r.a.createElement(y.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},c))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar})))}}]),t}(r.a.Component),J=Object(k.withStyles)(function(e){return{root:{display:"flex"},drawer:Object(g.a)({},e.breakpoints.up("sm"),{width:270,flexShrink:0}),appBar:Object(g.a)({marginLeft:270},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(270,"px)")}),menuButton:Object(g.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:270},content:{flexGrow:1,padding:3*e.spacing.unit},button:{margin:e.spacing.unit},input:{display:"none"}}},{withTheme:!0})(z),K={list:{padding:5},inputField:{width:"-webkit-fill-available",color:"blue",margin:"0.9rem"},listButton:{width:"-webkit-fill-available",padding:12,textTransform:"none"},map:{margin:12,borderRadius:5}},H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={squareVenues:[],filterdVenues:[],allMarkers:[],zoom:14,center:{},mapCenter:{},mapLoaded:!1,dropPins:!0,selectedPlace:null,showingInfoWindow:!1,squareAPIerror:!1,mapVisible:!0},n.whenMapIsReady=function(e,t){console.log("MAP ready"),n.setState({map:t}),setTimeout(function(){return n.createMarkers()},750)},n.createMarkers=function(){var e=[];n.state.filterdVenues.forEach(function(t,a){window.setTimeout(function(){var a=new window.google.maps.Marker({map:n.state.map,name:t.name,location:t.location,animation:n.state.dropPins?window.google.maps.Animation.DROP:null,position:{lat:t.location.lat,lng:t.location.lng}});a.addListener("click",function(){return n.onMarkerClick(a)}),e.push(a)},n.state.dropPins?175*a:50*a),n.setState({allMarkers:e})})},n.clearMarkers=function(){n.state.allMarkers.forEach(function(e){return e.setMap(null)})},n.onMarkerClick=function(e){n.setState({selectedPlace:e,showingInfoWindow:!0}),n.handleBounce(e)},n.handleBounce=function(e){e.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){return e.setAnimation(null)},2500)},n.onListClick=function(e){console.log("listButton Clicked",e);var t=n.state.allMarkers.find(function(t){return t.name===e.target.innerText});n.onMarkerClick(t)},n.closeInfoWindow=function(){return n.setState({selectedPlace:null,showingInfoWindow:!1})},n.onQueryChange=function(e){n.clearMarkers(),n.setState({query:e,filterdVenues:n.filterVenues(e),dropPins:!1,showingInfoWindow:!1},function(){return n.createMarkers()})},n.filterVenues=function(e){return n.state.squareVenues.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.search({near:"New York, NY",query:"library",limit:10}).then(function(t){e.setState({squareVenues:t.response.venues,filterdVenues:t.response.venues,mapCenter:t.response.geocode.feature.geometry.center})}).catch(function(){return e.setState({squareAPIerror:!0,mapVisilbe:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(J,{style:K,state:this.state,onListClick:this.onListClick,onQueryChange:this.onQueryChange,closeInfoWindow:this.closeInfoWindow}),r.a.createElement(w,{style:K,state:this.state,onMarkerClick:this.onMarkerClick,whenMapIsReady:this.whenMapIsReady,closeInfoWindow:this.closeInfoWindow}),this.state.squareAPIerror&&r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,2,1]]]);
//# sourceMappingURL=main.37143314.chunk.js.map