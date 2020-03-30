(this["webpackJsonptalech-task"]=this["webpackJsonptalech-task"]||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(29),a(13)),s=a(16),i=a(14),m=a(4),u=a(5),p=a(6),d=a(7),h=(a(30),a(31),a(2)),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.products;return r.a.createElement("div",{className:"productList"},r.a.createElement("table",{className:"productTable"},r.a.createElement("tr",null,r.a.createElement("th",{className:"text-left"},"Name"),r.a.createElement("th",{className:"text-right"},"EAN Code"),r.a.createElement("th",{className:"text-right"},"Type"),r.a.createElement("th",{className:"text-right"},"Weight"),r.a.createElement("th",{className:"text-right"},"Color"),r.a.createElement("th",{className:"text-center"},"Active")),t.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"text-left"},t.name),r.a.createElement("td",{className:"text-right"},t.ean),r.a.createElement("td",{className:"text-right"},t.type),r.a.createElement("td",{className:"text-right"},t.weight),r.a.createElement("td",{className:"text-right"},t.color),r.a.createElement("td",{className:"text-center"},r.a.createElement("input",{type:"checkbox",id:a,className:"checkmark",checked:t.active,onChange:function(a){return e.props.setProductActive(t,a.target.checked)}}),r.a.createElement("label",{for:a})),r.a.createElement("td",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/view",state:{prodIndex:a}}},r.a.createElement("button",{className:"view-button"},"View"))),r.a.createElement("td",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/edit",state:{prodIndex:a}}},r.a.createElement("button",{className:"edit-button"},"Edit"))),r.a.createElement("td",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/talech-task"}},r.a.createElement("button",{className:"delete-button",onClick:function(){return e.props.deleteProduct(a)}},"Delete"))))}))),r.a.createElement("div",{className:"create-box"},r.a.createElement(h.b,{to:{pathname:"/create"}},r.a.createElement("button",{className:"create-button"},"Create"))))}}]),a}(r.a.Component),b=a(10),g=(a(37),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.redirect?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"createProd"},r.a.createElement("form",{className:"createForm",onSubmit:this.props.handleFormSubmit},r.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Product Name:",value:this.props.newName,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"ean",type:"text",name:"ean",placeholder:"EAN Code:",value:this.props.newEan,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"type",type:"text",name:"type",placeholder:"Product Type:",value:this.props.newType,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"weight",type:"text",name:"weight",placeholder:"Product Weight:",value:this.props.newWeight,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"color",type:"text",name:"color",placeholder:"Product Color:",value:this.props.newColor,onChange:this.props.handleInputChange}),r.a.createElement("div",{className:"createButtons"},r.a.createElement("button",{type:"submit",value:"Submit",className:"new-button"},"Add"),r.a.createElement(h.b,{to:{pathname:"/talech-task"}},r.a.createElement("button",{className:"close-button"},"Close")))))}}]),a}(r.a.Component)),v=(a(38),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.products,t=this.props.location.state.prodIndex;return r.a.createElement("div",{className:"viewProd"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Name:")," ",e[t].name),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"EAN Code:")," ",e[t].ean),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Type:")," ",e[t].type),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Weight:")," ",e[t].weight),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Color:")," ",e[t].color),r.a.createElement("li",{className:"capitalize"},r.a.createElement("span",{className:"bold"},"Active:")," ",String(e[t].active)),r.a.createElement("div",{className:"viewbutt"},r.a.createElement("td",null,r.a.createElement(h.b,{to:{pathname:"/talech-task"}},r.a.createElement("button",{className:"viewclose-button"},"Close"))))))}}]),a}(r.a.Component)),N=(a(39),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.props.products,a=this.props.location.state.prodIndex;return this.props.redirect?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("form",{className:"editForm",onSubmit:function(t){return e.props.handleEditFormSubmit(a,t)}},r.a.createElement("input",{id:"editname",type:"text",name:"name",placeholder:"Name: ".concat(t[a].name),value:this.props.editName,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"editean",type:"text",name:"ean",placeholder:"EAN Code: ".concat(t[a].ean),value:this.props.editEan,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"edittype",type:"text",name:"type",placeholder:"Type: ".concat(t[a].type),value:this.props.editType,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"editweight",type:"text",name:"weight",placeholder:"Weight: ".concat(t[a].weight),value:this.props.editWeight,onChange:this.props.handleInputChange}),r.a.createElement("input",{id:"editcolor",type:"text",name:"color",placeholder:"Color: ".concat(t[a].color),value:this.props.editColor,onChange:this.props.handleInputChange}),r.a.createElement("div",{className:"editButtons"},r.a.createElement("button",{className:"edit-save-button",type:"submit",value:"Submit"},"Save"),r.a.createElement(h.b,{to:{pathname:"/talech-task"}},r.a.createElement("button",{className:"close-edit-button"},"Close")))))}}]),a}(r.a.Component)),f=(a(40),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.products;return r.a.createElement("div",{className:"lowWidthList"},t.map((function(t,a){return r.a.createElement("ul",{className:"low-list",key:a},r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Name:")," ",t.name),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"EAN Code:")," ",t.ean),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Type:")," ",t.type),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Weight:")," ",t.weight),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Color:")," ",t.color),r.a.createElement("li",{className:"capitalize"},r.a.createElement("span",{className:"bold"},"Active:")," ",String(t.active)),r.a.createElement("div",{className:"low-buttons"},r.a.createElement("li",null,r.a.createElement(h.b,{to:{pathname:"/create"}},r.a.createElement("button",{className:"create-button",onClick:function(){return window.scrollTo(0,0)}},"Create"))),r.a.createElement("li",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/edit",state:{prodIndex:a}}},r.a.createElement("button",{className:"edit-button"},"Edit"))),r.a.createElement("li",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/talech-task"}},r.a.createElement("button",{className:"delete-button",onClick:function(){return e.props.deleteProduct(a)}},"Delete")))))})))}}]),a}(r.a.Component)),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){if(!n.canBeSubmitted())return e.preventDefault(),alert("Please fill all empty text spaces");e.preventDefault();var t=Object(i.a)(n.state.products);t.push({name:n.state.name,ean:n.state.ean,type:n.state.type,weight:n.state.weight,color:n.state.color,active:!1}),n.setState({redirect:!0,products:t,name:"",ean:"",type:"",weight:"",color:"",active:!1},(function(){n.setState({redirect:!1})}))},n.handleEditFormSubmit=function(e,t){if(!n.canBeSubmitted())return t.preventDefault(),alert("Please fill all empty text spaces");t.preventDefault();var a=Object(i.a)(n.state.products);a.splice(e,1,{name:n.state.name,ean:n.state.ean,type:n.state.type,weight:n.state.weight,color:n.state.color,active:!1}),n.setState({redirect:!0,products:a,name:"",ean:"",type:"",weight:"",color:"",active:!1},(function(){return n.setState({redirect:!1})}))},n.handleInputChange=function(e){n.setState(Object(s.a)({},n.state,Object(o.a)({},e.target.name,e.target.value)))},n.deleteProduct=function(e){var t=Object(i.a)(n.state.products).filter((function(t,a){return a!==e}));n.setState({products:t})},n.setProductActive=function(e,t){n.setState((function(a){return{products:a.products.map((function(a){return a.name===e.name?Object(s.a)({},a,{active:t}):a}))}}))},n.state={redirect:!1,name:"",ean:"",type:"",weight:"",color:"",active:!1,products:[{name:"Cabbage",ean:"00000000",type:"Vegetable",weight:"2kg",color:"Green",active:!1},{name:"Banana",ean:"111111111",type:"Fruit",weight:"0.3kg",color:"Yellow",active:!1},{name:"Chocolate",ean:"22222222222",type:"Candy",weight:"0.2kg",color:"Brown",active:!1},{name:"Orange",ean:"3333333333",type:"Fruit",weight:"0.5kg",color:"Orange",active:!1},{name:"Cucumber",ean:"4444444444",type:"Vegetable",weight:"1kg",color:"Green",active:!1}]},n}return Object(u.a)(a,[{key:"canBeSubmitted",value:function(){var e=this.state,t=e.name,a=e.ean,n=e.type,r=e.weight,c=e.color;return t.length>0&&a.length>0&&n.length>0&&r.length>0&&c.length>0}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{products:this.state.products,deleteProduct:this.deleteProduct,setProductActive:this.setProductActive}),r.a.createElement(b.b,{path:"/create",render:function(t){return r.a.createElement(g,Object.assign({},t,{products:e.state.products,redirect:e.state.redirect,handleFormSubmit:e.handleFormSubmit,handleInputChange:e.handleInputChange,newName:e.state.name,newEan:e.state.ean,newType:e.state.type,newWeight:e.state.weight,newColor:e.state.color}))}}),r.a.createElement(b.b,{path:"/view",render:function(t){return r.a.createElement(v,Object.assign({},t,{products:e.state.products}))}}),r.a.createElement(b.b,{path:"/edit",render:function(t){return r.a.createElement(N,Object.assign({},t,{products:e.state.products,handleInputChange:e.handleInputChange,handleEditFormSubmit:e.handleEditFormSubmit,editName:e.state.name,editEan:e.state.ean,editType:e.state.type,editWeight:e.state.weight,editColor:e.state.color,redirect:e.state.redirect}))}}),r.a.createElement(f,{products:this.state.products,deleteProduct:this.deleteProduct})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5d61e605.chunk.js.map