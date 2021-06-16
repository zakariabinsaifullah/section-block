!function(){"use strict";var e=wp.blockEditor,t=wp.blocks,n=wp.i18n,o={sectionId:{type:"string",default:null},padding:{type:"object",default:{top:"150px",left:"0",right:"0",bottom:"150px"}},pressed:{type:"boolean",default:!0},notPressed:{type:"boolean",default:!1},bgColor:{type:"string",default:null},bgImage:{type:"string",default:null},bgPositions:{type:"string",default:"center center"},enableOverlay:{type:"boolean",default:!1},overlayType:{type:"string",default:null}},r=wp.components,a=wp.element;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=[{name:"Green",color:"#0e9b75"},{name:"Red",color:"#ff0000"},{name:"Black",color:"#000000"},{name:"White",color:"#ffffff"},{name:"Light Yellow",color:"#E9F7CA"}],m=[{label:"Select Overlay Type",value:null},{label:"Black",value:"black_overlay"},{label:"White",value:"white_overlay"}],v=[{label:"Top Center",value:"top center"},{label:"Center Center",value:"center center"},{label:"Bottom Center",value:"bottom center"}],k=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,t);var o,a,l,c=b(u);function u(){return s(this,u),c.apply(this,arguments)}return o=u,(a=[{key:"render",value:function(){var t=this.props,o=t.className,a=t.attributes,l=t.setAttributes,c=a.sectionId,u=a.padding,s=a.pressed,p=a.notPressed,f=a.bgColor,b=a.bgImage,d=a.enableOverlay,g=a.overlayType,k=a.bgPositions;return React.createElement("div",null,React.createElement(e.InspectorControls,null,React.createElement(r.PanelBody,{title:(0,n.__)("Section Block Settings"),initialOpen:!0},React.createElement(r.TextControl,{label:"Section ID",onChange:function(e){return l({sectionId:e})},value:c}),React.createElement(r.__experimentalBoxControl,{values:u,label:(0,n.__)("Section Padding"),onChange:function(e){return l(i(i({},u),{},{padding:{top:e.top,left:e.left,right:e.right,bottom:e.bottom}}))}}),React.createElement(r.ButtonGroup,{style:{paddingBottom:20,marginTop:10}},React.createElement(r.Button,{isSmall:!0,isPressed:s,onClick:function(){return l({pressed:!s,notPressed:!p,bgImage:null})}},"Color Background"),React.createElement(r.Button,{isSmall:!0,isPressed:p,onClick:function(){return l({pressed:!s,notPressed:!p,bgColor:null})}},"Image Background")),s&&React.createElement(r.ColorPalette,{colors:y,onChange:function(e){return l({bgColor:e})},value:f}),p&&React.createElement(React.Fragment,null,React.createElement(e.MediaUpload,{onSelect:function(e){return l({bgImage:e.sizes.full.url})},type:"image",value:b,render:function(e){var t=e.open;return React.createElement(r.Button,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"Add Background Image")}}),React.createElement(r.SelectControl,{label:"Background Position",options:v,onChange:function(e){l({bgPositions:e})},value:k}),React.createElement(r.ToggleControl,{label:"Enable Overlay",checked:d,onChange:function(){return l({enableOverlay:!d})}}),d?React.createElement(r.SelectControl,{label:"Overlay Type",options:m,onChange:function(e){l({overlayType:e})},value:g}):l({overlayType:null})))),React.createElement("section",{className:"section-block ".concat(o," ").concat(g),id:c,style:{paddingTop:u.top,paddingBottom:u.bottom,paddingLeft:u.left,paddingRight:u.right,backgroundColor:f,backgroundImage:"url(".concat(b,")"),backgroundSize:"cover",backgroundPosition:k,backgroundRepeat:"no-repeat"}},React.createElement("div",{className:"ast-container"},React.createElement(e.InnerBlocks,{allowedBlocks:!0}))))}}])&&p(o.prototype,a),l&&p(o,l),u}(a.Component);(0,t.registerBlockType)("gmtb-blocks/section-block",{title:(0,n.__)("Section Block"),description:(0,n.__)("Section Block includes all Gutenberg Blocks"),category:"theme-blocks",icon:"media-document",keywords:["section block"],edit:k,attributes:o,save:function(t){var n=t.attributes,o=n.sectionId,r=n.padding,a=n.bgColor,l=n.bgImage,c=n.className,i=n.overlayType,u=n.bgPositions;return React.createElement("section",{className:"section-block ".concat(c," ").concat(i),id:o,style:{paddingTop:r.top,paddingBottom:r.bottom,paddingLeft:r.left,paddingRight:r.right,backgroundColor:a,backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",backgroundPosition:u,backgroundRepeat:"no-repeat"}},React.createElement("div",{className:"ast-container"},React.createElement(e.InnerBlocks.Content,null)))}})}();
//# sourceMappingURL=editor.js.map