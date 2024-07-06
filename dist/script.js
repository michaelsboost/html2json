(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});let project={statekeys:!1,states:{},html:`<main class="container">
  <button class="bg-transparent border-0 px-3 py-2 m-0" onclick="alert('hello world')">
    <span>hello world</span>
  </button>
</main>`,json:`[
  {
    "tag": "main",
    "type": "box",
    "name": "box",
    "id": "z5a93xb61",
    "styles": "ym79qjhln",
    "props": {
      "class": "container"
    },
    "children": [
      {
        "tag": "button",
        "type": "text",
        "name": "text",
        "id": "eg89bdqbz",
        "styles": "dkp54r8ym",
        "props": {
          "class": "bg-transparent border-0 px-3 py-2 m-0"
        },
        "events": {
          "onclick": "alert('hello world')"
        },
        "children": [
          {
            "tag": "span",
            "type": "text",
            "name": "text",
            "id": "wzrfyyc1n",
            "styles": "n1bcgs5v1",
            "children": [
              {
                "text": "hello world"
              }
            ]
          }
        ]
      }
    ]
  }
]`,dark:!0};const data={themeIcon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",activePanel:null},MenuBar={render(e){let t="border-0 bg-transparent text-sm focus:shadow-none",r="h-3 -mt-1 transform origin-center scale-125",o=`<div class="flex justify-between items-center overflow-auto">
  <div class="flex justify-between items-center">
    <button
      aria-label="new project"
      name="new project"
      class="${t}"
      onclick="newProject()"
      style="color: unset;"
    >
      <svg class="${r}" viewBox="0 0 384 512">
        <path 
          fill="currentColor"
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
      </svg>
    </button>
    <button
      aria-label="import project"
      name="import project"
      class="${t}"
      onclick="importProject()"
      style="color: unset;"
    >
      <svg class="${r}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z" />
      </svg>
    </button>
    <a
      href="https://michaelsboost.com/donate/"
      aria-label="Donation helps developer maintence"
      target="_blank"
      role="button"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent text-red-400"
    >
      <svg class="${r}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
    </a>
  </div>
  <div class="px-2 flex justify-between font-thin select-none cursor-default">
    html2json
  </div>
  <div class="flex justify-between items-center">
    <button
      aria-label="export project"
      name="export project"
      class="${t}"
      onclick="download()"
      style="color: unset;"
    >
      <svg class="${r}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
      </svg>
    </button>
    <button
      aria-label="toggle theme"
      name="toggle theme"
      class="${t}"
      style="color: unset;"
      onclick="theme()"
    >
      <svg class="${r}" viewBox="0 0 512 512">
        <path 
          id="themeIcon"
          fill="currentColor"
          d="${data.themeIcon}"
        />
      </svg>
    </button>
    <button
      id="settingsBtn"
      aria-label="toggle settings"
      name="toggle settings"
      class="${t}"
      style="color: unset;"
      onclick="togglePanel('settings', this)"
    >
      <svg class="${r}" viewBox="0 0 512 512">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
      </svg>
    </button>
  </div>
</div>`,n=document.querySelector(e);n&&(n.innerHTML=o)}},Modal={render({title:e="Are you sure you want to proceed?",content:t,onConfirm:r}){let o="text-xs w-auto px-3 py-2 m-0 capitalize rounded-md",n=`<svg class="w-3" viewBox="0 0 384 512">
        <path 
          fill="currentColor" 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`,s=`<article class="rounded-md">
      <header class="flex justify-between items-center">
        <h1 class="text-lg font-thin">${e}</h1>
        <button class="${o} bg-transparent border-0" style="color: unset;" aria-label="Close">
          ${n}
        </button>
      </header>
      <main class="font-thin">
        ${t||""}
      </main>
      <footer>
        <button class="${o} bg-transparent border ${project.dark?"border-gray-600":"border-gray-200"}" style="color: unset;" aria-label="Close" onclick="this.closest('dialog').close()">close</button>
        <button class="${o}" aria-label="Confirm">confirm</button>
      </footer>
    </article>`,l=document.createElement("dialog");l.open=!0,l.innerHTML=s,document.body.appendChild(l);let a=l.querySelector("footer button:first-child"),c=l.querySelector("footer button:last-child");a.onclick=()=>document.body.removeChild(l),c.onclick=function(){r&&"function"==typeof r&&r(),document.body.removeChild(l)}}},Settings={render(e){let t="text-xs w-auto px-3 py-1 m-0 mx-1 capitalize rounded-md",r=Object.entries(project.states).map(([e,r])=>`
      <div class="grid grid-cols-3 justify-between gap-2 items-center m-0 px-2 py-4 border-0 border-b border-solid border-gray-800" data-theme="border">
        <span>${e}</span>
        <div>
          <input type="checkbox" ${r?"checked":""} role="switch" onchange="updateState('${e}', this.checked)">
        </div>
        <button class="${t} bg-transparent text-red-600 border-red-600" onclick="removeKey('${e}')">Remove</button>
      </div>
    `).join(""),o=`<div class="flex flex-col h-full justify-between font-thin">
  <div 
    class="flex-none px-3 pt-1 pb-2 border-0 border-b border-solid border-gray-800" 
    data-theme="border"
  >
    <div 
      class="flex justify-between items-center"
    >
      <button class="${t} bg-transparent border-0 px-3 py-2" onclick="settingsBtn.onclick();">
        <svg class="h-3" viewBox="0 0 384 512">
          <path 
            fill="currentColor" 
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
        </svg>
      </button>
      <div class="capitalize text-right">
        <span>state</span>
        <label for="typesInJSON" class="inline-block m-0 ml-2">
          <input id="typesInJSON" type="checkbox" ${project.statekeys?"checked":""} onchange="setState(this)">
        </label>
      </div>
    </div>
  </div>
  <div 
    class="flex-none px-3 py-2 border-0 border-b border-solid border-gray-800" 
    data-theme="border"
  >
    <div 
      class="grid grid-cols-3 justify-between gap-2"
    >
      <span class="capitalize">key</span>
      <span class="capitalize">value</span>
      <span class="capitalize text-right">actions</span>
    </div>
  </div>
  <div 
    id="stateKeys"
    class="flex-[2]">
    ${r}
  </div>
  <div 
    class="flex-none">
    <div 
      class="flex justify-between gap-2 p-2 pt-3 border-0 border-t border-solid border-gray-800" 
      data-theme="border">
        <input type="text" id="newKey" class="w-auto rounded-md text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" placeholder="Enter key" onkeydown="handleEnterKey(event)">
        <select id="newValue" class="m-0 w-auto rounded-md text-[.6rem]" style="padding: 0.5rem 2rem 0.5rem 0.5rem;">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button id="addKeyBtn" class="${t}" onclick="addKey()">Add</button>
      </div>
    </div>
  </div>
</div>`,n=document.querySelector(e);n&&(n.innerHTML=o)}};function setState(e){project.statekeys=e.checked,input.value&&input.oninput()}function addKey(){let e=document.getElementById("newKey").value,t="true"===document.getElementById("newValue").value,r=`
    <div class="grid grid-cols-3 justify-between gap-2 items-center m-0 px-2 py-4 border-0 border-b border-solid border-gray-800" data-theme="border">
      <span>${e}</span>
      <div>
        <input type="checkbox" ${t?"checked":""} role="switch" onchange="updateState('${e}', this.checked)">
      </div>
      <button class="text-xs w-auto px-3 py-1 m-0 mx-1 capitalize rounded-md bg-transparent text-red-600 border-red-600" onclick="removeKey('${e}')">Remove</button>
    </div>
  `;e&&(project.states[e]=t,document.getElementById("stateKeys").innerHTML+=r,input.value&&input.oninput(),newKey.value="")}function updateState(e,t){e in project.states&&(project.states[e]=t,input.value&&input.oninput())}function removeKey(e){delete project.states[e],Settings.render("[data-panel=settings]"),input.value&&input.oninput()}function handleEnterKey(e){"Enter"===e.key&&addKey()}function html2json(e,t){function r(){let e="";for(;!/^[a-zA-Z]/.test(e);)e=Math.random().toString(36).substr(2,9);return e}let o=document.querySelector(`${e}`).value,n=new DOMParser,s=n.parseFromString(o,"text/html"),l=Array.from(s.body.children).map(e=>(function e(t){let o={tag:t.tagName.toLowerCase()};if(project.statekeys){let n=t.tagName.toLowerCase();["article","aside","div","figcaption","figure","footer","header","hgroup","label","main","nav","ol","section","ul"].includes(n)?(o.type="box",o.name="box"):["a","abbr","b","blockquote","button","cite","del","em","h1","h2","h3","h4","h5","h6","i","ins","kbd","mark","p","small","span","strike","strong","summary","sub","sup","u"].includes(n)?(o.type="text",o.name="text"):(o.type=n,o.name=n),o.id=r(),o.styles=r(),o.states=project.states}let s={},l={};return Array.from(t.attributes).forEach(e=>{e.name.startsWith("on")?l[e.name]=e.value:s[e.name]=e.value}),Object.keys(s).length>0&&(o.props=s),Object.keys(l).length>0&&(o.events=l),t.childNodes.length>0&&(o.children=[],t.childNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE?o.children.push(e(t)):t.nodeType===Node.TEXT_NODE&&t.nodeValue.trim()&&o.children.push({text:t.nodeValue.trim()})})),o})(e));document.querySelector(`${t}`).value=JSON.stringify(l,null,2)}function json2html(e,t){let r=JSON.parse(document.querySelector(`${e}`).value);document.querySelector(`${t}`).value=function e(t){let r=function e(t){let r=e=>{let t="";if(!e.tag)return t+(e.text||"");if(t+=`<${e.tag}`,e.props||(e.props={},e.props.class||(e.props.class=`${classList}`)),e.props)for(let[o,n]of(e.props.class||(e.props.class=`${classList}`),Object.entries(e.props)))t+=` ${o}="${n}"`;if(t+=">",e.text&&(t+=escapeHtml(e.text)),e.children)for(let s of e.children)t+=r(s);return t+`</${e.tag}>`},o="";return Array.isArray(t)&&t.forEach(e=>{o+=r(e)}),o}(t),o="",n="";return r.split(/>\s*</).forEach(function(e){e.match(/^\/\w/)&&(n=n.substring(2)),o+=n+"<"+e.trim()+">\r\n",e.match(/^<?\w[^>]*[^\/]$/)&&!e.startsWith("<input")&&(n+="  ")}),o.substring(1,o.length-3).trim()}(r)}function newProject(){Modal.render({title:"Are you sure you want to start a new project?",content:'<div class="p-4 text-center">All current data will be lost.</div>',onConfirm:function(){project={statekeys:!0,html:"",json:"",dark:!0},input.value=project.html,output.value=project.json;let e=document.getElementById("settingsBtn");e.classList.contains("text-blue-500")&&e.onclick()}})}function importProject(){Modal.render({title:"Are you sure you want to load a new project?",content:'<div class="p-4 text-center">All current data will be lost.</div>',onConfirm:function(){let e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",t=>{let r=t.target.files[0];if(!r){console.error("No file selected.");return}let o=new FileReader;o.onload=function(t){try{let r=JSON.parse(t.target.result);project={...project,...r},e.value=project.html,output.value=project.json;let o=document.getElementById("settingsBtn");o.classList.contains("text-blue-500")&&o.onclick(),console.log("Project imported successfully:",r)}catch(n){console.error("Error parsing JSON file:",n)}},o.readAsText(r),e.remove()}),e.click()}})}function download(e){let t="output",r=window.confirm("Are you sure you want to start a new project? All current data will be lost.");if(r){if(e){if("html"===e){let o=new Blob([project.html],{type:"text/html"});saveAs(o,`${t}.html`)}if("json"===e){let n=new Blob([project.json],{type:"application/json"});saveAs(n,`${t}.json`)}}else{let s=JSON.stringify(project,null,2);saveAs(s,`${t}-html2json.json`)}}}function theme(){project.dark=!project.dark,data.themeIcon=project.dark?"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z":"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",document.documentElement.setAttribute("data-theme",project.dark?"dark":"light"),document.getElementById("themeIcon").setAttribute("d",data.themeIcon),document.querySelectorAll("[data-theme]").forEach(e=>{if("html"!==e.tagName.toLowerCase())"border"===e.getAttribute("data-theme")&&(e.classList.toggle("border-gray-800",project.dark),e.classList.toggle("border-gray-200",!project.dark))})}function togglePanel(e,t){data.activePanel=data.activePanel===e?null:e;let r=document.querySelectorAll("[data-panel]");data.activePanel?(r.forEach(e=>e.classList.add("hidden")),document.querySelector(`[data-panel=${e}]`).classList.remove("hidden"),t.classList.add("text-blue-500"),t.style=""):(r.forEach(e=>e.classList.add("hidden")),document.querySelector("[data-panel=code]").classList.remove("hidden"),t.classList.remove("text-blue-500"),t.style="color: unset;")}document.addEventListener("DOMContentLoaded",function(){MenuBar.render("[data-menubar]"),Settings.render("[data-panel=settings]"),input.oninput=()=>html2json("#input","#output"),output.oninput=()=>json2html("#output","#input")});