import{u as f,r as l,aQ as P,j as e,ar as h,aR as j,aS as I,$ as B,as as E,aT as H,ap as k,ag as C,aU as R,n as S}from"./sanity-fcb95a9e.js";const T=f(S)`
  position: relative;
`;function U(a){const{children:o}=a,{collapsed:t}=I();return e.jsx(T,{hidden:t,height:"fill",overflow:"auto",children:o})}function b(a){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=a,{features:s}=B();return!(n!=null&&n.length)&&!i?null:e.jsx(E,{actions:e.jsx(H,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&t>0&&e.jsx(k,{as:C,"data-as":"a",icon:R,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function y(a){const{index:o,pane:t,paneKey:n,...r}=a,{child:i,component:s,menuItems:c,menuItemGroups:d,type:g,...p}=t,[u,m]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(b,{actionHandlers:u==null?void 0:u.actionHandlers,index:o,menuItems:c,menuItemGroups:d,title:x}),e.jsxs(U,{children:[j.isValidElementType(s)&&l.createElement(s,{...r,...p,ref:m,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{y as default};
