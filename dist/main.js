!function(e){function t(t){for(var a,o,u=t[0],i=t[1],c=t[2],f=0,s=[];f<u.length;f++)o=u[f],l[o]&&s.push(l[o][0]),l[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(t);s.length;)s.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var i=n[u];0!==l[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},l={0:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=i;r.push([265,1]),n()}({122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=f(n(5)),r=n(1),o=f(r),u=n(114),i=f(n(494)),c=f(n(496)),d=f(n(497));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){var t=e.mobile;return o.default.createElement(u.Container,{text:!0},o.default.createElement(u.Image,{src:"https://www.ppt-backgrounds.net/uploads/food-template-presentation.jpg",style:{position:"absolute",height:"auto",width:t?"99%":"104%",top:t?"79px":"84px",right:t?"2px":"0px",maxWidth:"2000px",maxHeight:"639px"}}),o.default.createElement(u.Header,{as:"h1",content:"BudgetLife",style:{fontFamily:"cursive",color:"white",position:"relative",fontSize:t?"3em":"8em",fontWeight:"normal",marginBottom:0,marginTop:"1.5em"}}),o.default.createElement(u.Header,{as:"h2",content:"Save money. Eat Healthier.",style:{color:"white",position:"relative",fontSize:t?"1.0em":"1.7em",fontWeight:"normal",marginTop:t?"1.0em":"1.5em"}}),o.default.createElement(u.Button,{href:"#",primary:!0,size:"huge",inverted:!0,color:"green",animated:!0},o.default.createElement(u.Button.Content,{visible:!0},"Get Started"),o.default.createElement(u.Button.Content,{hidden:!0},o.default.createElement(u.Icon,{name:"right arrow"}))))};h.propTypes={mobile:l.default.bool};var E=function(e){function t(e){s(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.hideFixedMenu=n.hideFixedMenu.bind(n),n.showFixedMenu=n.showFixedMenu.bind(n),n}return p(t,r.Component),a(t,[{key:"hideFixedMenu",value:function(){this.setState({fixed:!1})}},{key:"showFixedMenu",value:function(){this.setState({fixed:!0})}},{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return o.default.createElement(u.Responsive,{minWidth:u.Responsive.onlyTablet.minWidth},o.default.createElement(u.Visibility,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},o.default.createElement(u.Segment,{textAlign:"center",style:{minHeight:700,padding:"1em 0em"},vertical:!0},o.default.createElement(u.Menu,{fixed:t?"top":null,pointing:!t,secondary:!t,size:"large"},o.default.createElement(u.Container,null,o.default.createElement(u.Menu.Item,null,o.default.createElement(u.Image,{size:"mini",src:"https://image.flaticon.com/icons/svg/424/424067.svg"})),o.default.createElement(u.Menu.Item,{href:"#",as:"a",active:!0},"Home"),o.default.createElement(u.Menu.Item,{href:"#",as:"a"},"About"),o.default.createElement(u.Menu.Item,{href:"#",as:"a"},"Features"),o.default.createElement(u.Menu.Item,{position:"right"},o.default.createElement(i.default,{fluid:!0}),o.default.createElement(d.default,null),o.default.createElement(c.default,null)))),o.default.createElement(h,null))),e)}}]),t}();E.propTypes={children:l.default.node};var b=function(e){function t(e){s(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.handlePusherClick=n.handlePusherClick.bind(n),n.handleToggle=n.handleToggle.bind(n),n}return p(t,r.Component),a(t,[{key:"handlePusherClick",value:function(){this.state.sidebarOpened&&this.setState({sidebarOpened:!1})}},{key:"handleToggle",value:function(){this.setState({sidebarOpened:!this.state.sidebarOpened})}},{key:"render",value:function(){var e=this.props.children,t=this.state.sidebarOpened;return o.default.createElement(u.Responsive,{maxWidth:u.Responsive.onlyMobile.maxWidth},o.default.createElement(u.Sidebar.Pushable,null,o.default.createElement(u.Sidebar,{as:u.Menu,animation:"uncover",inverted:!0,vertical:!0,visible:t},o.default.createElement(u.Menu.Item,null,o.default.createElement(u.Image,{size:"mini",src:"https://image.flaticon.com/icons/svg/424/424067.svg"})),o.default.createElement(u.Menu.Item,{href:"#",as:"a",active:!0},"Home"),o.default.createElement(u.Menu.Item,{href:"#",as:"a"},"Our Mission"),o.default.createElement(u.Menu.Item,{href:"#",as:"a"},"Features"),o.default.createElement(u.Menu.Item,{href:"#",as:"a"},"Benefits")),o.default.createElement(u.Sidebar.Pusher,{dimmed:t,onClick:this.handlePusherClick,style:{minHeight:"100vh"}},o.default.createElement(u.Segment,{textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0},o.default.createElement(u.Container,null,o.default.createElement(u.Menu,{pointing:!0,secondary:!0,size:"large"},o.default.createElement(u.Menu.Item,{onClick:this.handleToggle},o.default.createElement(u.Icon,{name:"sidebar"})),o.default.createElement(u.Menu.Item,{position:"right"},o.default.createElement(i.default,{size:"mini",fluid:!0}),o.default.createElement(d.default,null),o.default.createElement(c.default,null)))),o.default.createElement(h,{mobile:!0})),e)))}}]),t}();b.propTypes={children:l.default.node};var y=function(e){var t=e.children;return o.default.createElement("div",null,o.default.createElement(E,null,t),o.default.createElement(b,null,t))};y.propTypes={children:l.default.node};t.default=function(){return o.default.createElement(y,null,o.default.createElement(u.Divider,{section:!0}),o.default.createElement(u.Segment,{style:{padding:"8em 0em"},vertical:!0},o.default.createElement(u.Grid,{container:!0,stackable:!0,verticalAlign:"middle"},o.default.createElement(u.Grid.Row,null,o.default.createElement(u.Grid.Column,{width:8},o.default.createElement(u.Header,{as:"h3",style:{fontSize:"2em"}},"Healthier, Informed, Affordable meal prep."),o.default.createElement("p",{style:{fontSize:"1.33em"}},"Some Description...."),o.default.createElement(u.Header,{as:"h3",style:{fontSize:"2em"}},"Easy to use on the go!..."),o.default.createElement("p",{style:{fontSize:"1.33em"}},"paragraph description...")),o.default.createElement(u.Grid.Column,{floated:"right",width:6},o.default.createElement(u.Image,{bordered:!0,rounded:!0,size:"large",src:""}))),o.default.createElement(u.Grid.Row,null,o.default.createElement(u.Grid.Column,{textAlign:"center"},o.default.createElement(u.Button,{href:"#",size:"huge"},"Check Them Out"))))),o.default.createElement(u.Segment,{style:{padding:"0em"},vertical:!0},o.default.createElement(u.Grid,{celled:"internally",columns:"equal",stackable:!0},o.default.createElement(u.Grid.Row,{textAlign:"center"},o.default.createElement(u.Grid.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},o.default.createElement(u.Header,{as:"h3",style:{fontSize:"2em"}},'"What a Company"'),o.default.createElement("p",{style:{fontSize:"1.33em"}},"That is what they all say about us (We can maybe put a comment stream here)")),o.default.createElement(u.Grid.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},o.default.createElement(u.Header,{as:"h3",style:{fontSize:"2em"}},'"Fake user comment here."'),o.default.createElement("p",{style:{fontSize:"1.33em"}},o.default.createElement("b",null,"Nan")," Fake user name and picture"))))),o.default.createElement(u.Segment,{style:{padding:"8em 0em"},vertical:!0},o.default.createElement(u.Container,{text:!0},o.default.createElement(u.Header,{as:"h3",style:{fontSize:"2em"}},"List of Features"),o.default.createElement("p",{style:{fontSize:"1.33em"}},"- Allergens ",o.default.createElement("br",null),"- Recipes ",o.default.createElement("br",null),"- Prices ",o.default.createElement("br",null),"Short description..."),o.default.createElement(u.Button,{href:"#",as:"a",size:"large"},"Read More"),o.default.createElement(u.Divider,{as:"h4",className:"header",horizontal:!0,style:{margin:"3em 0em",textTransform:"uppercase"}},o.default.createElement("a",{href:"#"},"Case Studies")),o.default.createElement(u.Header,{as:"h3",style:{fontSize:"2em"}},"Did We Tell You About Our Bananas?"),o.default.createElement("p",{style:{fontSize:"1.33em"}},"Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."),o.default.createElement(u.Button,{href:"#",as:"a",size:"large"},"I'm Still Quite Interested"))),o.default.createElement(u.Segment,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},o.default.createElement(u.Container,null,o.default.createElement(u.Grid,{divided:!0,inverted:!0,stackable:!0},o.default.createElement(u.Grid.Row,null,o.default.createElement(u.Grid.Column,{width:3},o.default.createElement(u.Header,{inverted:!0,as:"h4",content:"About"}),o.default.createElement(u.List,{link:!0,inverted:!0},o.default.createElement(u.List.Item,{href:"#",as:"a"},"Sitemap"),o.default.createElement(u.List.Item,{href:"#",as:"a"},"Contact Us"),o.default.createElement(u.List.Item,{href:"#",as:"a"},"Team hours"))),o.default.createElement(u.Grid.Column,{width:3},o.default.createElement(u.Header,{inverted:!0,as:"h4",content:"Services"}),o.default.createElement(u.List,{link:!0,inverted:!0},o.default.createElement(u.List.Item,{href:"#",as:"a"},"Feature List"),o.default.createElement(u.List.Item,{href:"#",as:"a"},"Membership"),o.default.createElement(u.List.Item,{href:"#",as:"a"},"Renown recipes"))),o.default.createElement(u.Grid.Column,{width:7},o.default.createElement(u.Header,{as:"h4",inverted:!0},"Footer Header"),o.default.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users.")))))))}},265:function(e,t,n){"use strict";var a=o(n(1)),l=o(n(79)),r=o(n(122));function o(e){return e&&e.__esModule?e:{default:e}}l.default.render(a.default.createElement(function(){return a.default.createElement("div",null,a.default.createElement(r.default,null))},null),document.getElementById("index"))},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=c(n(495)),o=n(1),u=c(o),i=n(114);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isLoading:!1,results:[],value:""},e.resetComponent=e.resetComponent.bind(e),e.handleResultSelect=e.handleResultSelect.bind(e),e.handleSearchChange=e.handleSearchChange.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),l(t,[{key:"componentWillMount",value:function(){this.resetComponent()}},{key:"resetComponent",value:function(){this.setState({isLoading:!1,results:[],value:""})}},{key:"handleResultSelect",value:function(e,t){var n=t.result;this.setState({value:n.title})}},{key:"handleSearchChange",value:function(e,t){var n=this,a=t.value;this.setState({isLoading:!0,value:a}),setTimeout(function(){if(n.state.value.length<1)return n.resetComponent();var e=new RegExp(r.default.escapeRegExp(n.state.value),"i");n.setState({isLoading:!1,results:r.default.filter({value:a},function(t){return e.test(t.title)})})},300)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.value,l=e.results;return u.default.createElement(i.Grid,null,u.default.createElement(i.Grid.Column,{width:6},u.default.createElement(i.Search,a({loading:t,onResultSelect:this.handleResultSelect,onSearchChange:r.default.debounce(this.handleSearchChange,500,{leading:!0}),results:l,value:n},this.props))))}}]),t}();t.default=d},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),r=u(l),o=n(114);u(n(122));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n.handleRef=n.handleRef.bind(n),n.open=n.open.bind(n),n.close=n.close.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"handleRef",value:function(e){this.ref=e}},{key:"open",value:function(){var e=this;this.setState({open:!0},function(){return e.ref.focus()})}},{key:"close",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.state;e.open,e.dimmer;return r.default.createElement("div",null,r.default.createElement(o.Button,{color:"green",inverted:!0,primary:!0,content:"Sign Up",onClick:this.open,style:{marginLeft:"0.5em"}}),r.default.createElement(o.Modal,{open:this.state.open,onClose:this.close},r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Modal.Description,null,r.default.createElement(o.Header,null,"Sign Up"))),r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Form,null,r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"First Name"),r.default.createElement("input",{placeholder:"First Name",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Last Name"),r.default.createElement("input",{placeholder:"Last Name",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Email"),r.default.createElement("input",{placeholder:"Email",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Username"),r.default.createElement("input",{placeholder:"Username",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Password"),r.default.createElement("input",{placeholder:"Password",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement(o.Checkbox,{label:"I agree to the Terms and Conditions"})),r.default.createElement(o.Button,{type:"submit"},"Submit")))))}}]),t}();t.default=i},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),r=u(l),o=n(114);u(n(122));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n.handleRef=n.handleRef.bind(n),n.open=n.open.bind(n),n.close=n.close.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"handleRef",value:function(e){this.ref=e}},{key:"open",value:function(){var e=this;this.setState({open:!0},function(){return e.ref.focus()})}},{key:"close",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.state;e.open,e.dimmer;return r.default.createElement("div",null,r.default.createElement(o.Button,{color:"green",inverted:!0,primary:!0,content:"Log In",onClick:this.open,style:{marginLeft:"0.5em"}}),r.default.createElement(o.Modal,{open:this.state.open,onClose:this.close},r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Modal.Description,null,r.default.createElement(o.Header,null,"Log In"))),r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Form,null,r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"First Name"),r.default.createElement("input",{placeholder:"First Name",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Last Name"),r.default.createElement("input",{placeholder:"Last Name",ref:this.handleRef})),r.default.createElement(o.Button,{type:"submit"},"Submit")))))}}]),t}();t.default=i}});