(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n(10),r=n.n(o),i=n(13),s=n(5),u=n(6),m=n(8),l=n(7),b=n(11),d=n.n(b),C=n(12),h=n(3),j=n.n(h),f=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t.handlechange=function(e){var n=e.target.name;t.setState(Object(C.a)({},n,e.target.value))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.ContactForm,children:[Object(a.jsxs)("label",{className:j.a.ContactForm_label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handlechange,className:j.a.ContactForm_input})]}),Object(a.jsxs)("label",{className:j.a.ContactForm_label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handlechange,placeholder:"Example +380440000000",className:j.a.ContactForm_input})]}),Object(a.jsx)("button",{type:"submit",className:j.a.ContactForm_btn,children:"Add contact"})]})}}]),n}(c.Component),p=n(4),_=n.n(p),v=function(t){var e=t.name,n=t.number,c=t.OnRemove;return Object(a.jsxs)("li",{className:_.a.ContactList_item,children:[Object(a.jsxs)("p",{children:["- ",e,": ",n]}),Object(a.jsx)("button",{type:"button",onClick:c,className:_.a.ContactList_item_btn,children:"Delete"})]})},O=n(2),g=n.n(O),x=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)("ul",{className:_.a.ContactList,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsx)(v,{name:c,number:o,OnRemove:function(){return n(e)}},e)}))})};x.prototype={contacts:g.a.arrayOf(g.a.exact({id:g.a.string.isRequired,name:g.a.string.isRequired,number:g.a.number.isRequired})),onRemoveContact:g.a.func.isRequired};var F=x;function y(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}y.prototype={value:g.a.string.isRequired,onChangeFilter:g.a.func.isRequired};var L=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermion Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.findContact=function(t,e){return t.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))},t.addContact=function(e,n){var a={id:d()(),name:e,number:n},c=t.findContact(t.state.contacts,a);t.setState((function(){a.name?c?alert("".concat(c.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}})):alert("Input name please!")}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getVisibleContact();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"PhoneBook"}),Object(a.jsx)(f,{onAddContact:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(a.jsx)(y,{value:n,onChangeFilter:this.changeFilter}),c.length>0&&Object(a.jsx)(F,{contacts:c,onRemoveContact:this.removeContact})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(L,{}),document.querySelector("#root"))},3:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",ContactForm_label:"ContactForm_ContactForm_label__3P8Ek",ContactForm_input:"ContactForm_ContactForm_input__2HggA",ContactForm_btn:"ContactForm_ContactForm_btn__2DSYP"}},4:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactList_item:"ContactList_ContactList_item__1wR0Z",ContactList_item_btn:"ContactList_ContactList_item_btn__yspio"}}},[[21,1,2]]]);
//# sourceMappingURL=main.b0f0490e.chunk.js.map