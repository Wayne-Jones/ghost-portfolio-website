import{i as e}from"./preload-helper-BtWQueYT.js";import{nt as t}from"./iframe-DkY79Z9P.js";import{c as n,r,s as i,t as a}from"./hi2-BLV1bLaO.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(),n(),r(),s={title:`Atoms/Button`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},c=(0,o.jsx)(a,{className:`w-6 h-6`}),l=()=>{document.documentElement.className.includes(`dark`)?(document.documentElement.classList.remove(`dark`),document.documentElement.classList.add(`light`),localStorage.theme=`light`):(document.documentElement.classList.remove(`light`),document.documentElement.classList.add(`dark`),localStorage.theme=`dark`)},u={args:{text:`Button`}},d={args:{text:`Button`,variant:`outline`}},f={args:{text:`Button`,icon:c}},p={args:{text:`Icon Button`,icon:c,hideText:!0}},m={args:{text:`Toggle Dark Mode`,icon:c,onClick:l,hideText:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Button"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Button",
    variant: "outline"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Button",
    icon: Icon
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Icon Button",
    icon: Icon,
    hideText: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Toggle Dark Mode",
    icon: Icon,
    onClick: toggleTheme,
    hideText: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Outline`,`TextWithIcon`,`IconOnly`,`DarkModeToggle`]}))();export{m as DarkModeToggle,u as Default,p as IconOnly,d as Outline,f as TextWithIcon,h as __namedExportsOrder,s as default};