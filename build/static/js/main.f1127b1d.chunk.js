(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(16),c=t.n(r),a=t(3),o=t(2),i=t(4),u=t.n(i),d="/api/persons",s=function(){return u.a.get(d).then((function(e){return e.data}))},l=function(e){return u.a.post(d,e).then((function(e){return e.data}))},h=function(e){return u.a.delete("".concat(d,"/").concat(e))},b=function(e,n){return u.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},j=t(0),f=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},m=function(e){var n=e.searchTerm,t=e.handleSearchTermChange;return Object(j.jsx)("form",{children:Object(j.jsxs)("div",{children:["filter shown with ",Object(j.jsx)("input",{value:n,onChange:t})]})})},O=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,a=e.handleNumberChange;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:t,onChange:r})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:c,onChange:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.person,t=e.handleDeletePerson;return Object(j.jsxs)("div",{children:[n.name," ",n.number,Object(j.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]})},v=function(e){var n=e.filteredPersons,t=e.handleDeletePerson;return n().map((function(e){return Object(j.jsx)(p,{person:e,handleDeletePerson:t},e.name)}))},x=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),i=Object(a.a)(c,2),u=i[0],d=i[1],p=Object(o.useState)(""),x=Object(a.a)(p,2),g=x[0],w=x[1],C=Object(o.useState)(""),S=Object(a.a)(C,2),N=S[0],P=S[1],k=Object(o.useState)(null),y=Object(a.a)(k,2),D=y[0],T=y[1];Object(o.useEffect)((function(){s().then((function(e){r(e)}))}),[]);var U=function(e){T(e),setTimeout((function(){T(null)}),2e3)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(f,{message:D}),Object(j.jsx)(m,{searchTerm:N,handleSearchTermChange:function(e){P(e.target.value)}}),Object(j.jsx)("h2",{children:"add a new"}),Object(j.jsx)(O,{addPerson:function(e){e.preventDefault();var n={name:u,number:g},c=t.find((function(e){return e.name===n.name}));c?window.confirm("".concat(n.name," is already added on phonebook, replace the old number with a new one?"))&&b(c.id,n).then((function(e){r(t.map((function(n){return n.id!==e.id?n:e}))),U("Updated ".concat(e.name))})).catch((function(e){U("Imformation of ".concat(n.name," has already been deleted")),r(t.filter((function(e){return e.id!==c.id})))})):l(n).then((function(e){r(t.concat(e)),U("Added ".concat(e.name))}));d(""),w("")},newName:u,handleNameChange:function(e){d(e.target.value)},newNumber:g,handleNumberChange:function(e){w(e.target.value)}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(v,{filteredPersons:function(){return""===N?t:t.filter((function(e){return e.name.toUpperCase().includes(N.toUpperCase())}))},handleDeletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&h(e.id).then(r(t.filter((function(n){return n.id!==e.id}))))}})]})};c.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f1127b1d.chunk.js.map