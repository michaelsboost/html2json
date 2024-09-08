(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

// keep project and data in the global scope
let project = {
  statekeys: false,
  states: {},
  html: `<main class="container">
  <button class="bg-transparent border-0 px-3 py-2 m-0" onclick="alert('hello world')">
    <span>hello world</span>
  </button>
</main>`,
  json: `[
  {
    "tag": "main",
    "props": {
      "class": "container"
    },
    "children": [
      {
        "tag": "button",
        "props": {
          "class": "bg-transparent border-0 px-3 py-2 m-0"
        },
        "events": {
          "onclick": "alert('hello world')"
        },
        "children": [
          {
            "tag": "span",
            "children": [],
            "text": "hello world"
          }
        ]
      }
    ]
  }
]`,
  dark: true
};
const data = {
  themeIcon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
  activePanel: null
};
const MenuBar = {
  render(container) {
    const buttonClass = 'border-0 bg-transparent text-sm focus:shadow-none';
    const svgClass = 'h-3 -mt-1';
    const svgClassTransform = `${svgClass} transform origin-center scale-125`;
    const selectClass = 'm-0 w-auto rounded-md text-[.6rem]';
    const selectStyle = 'padding: 0.5rem 2rem 0.5rem 0.5rem;';

    const html = `<div class="flex justify-between items-center overflow-auto">
  <div class="flex justify-between items-center">
    <button
      aria-label="new project"
      name="new project"
      class="${buttonClass}"
      onclick="newProject()"
      style="color: unset;"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 384 512">
        <path 
          fill="currentColor"
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
      </svg>
    </button>
    <button
      aria-label="import project"
      name="import project"
      class="${buttonClass}"
      onclick="importProject()"
      style="color: unset;"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
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
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
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
      class="${buttonClass}"
      onclick="download()"
      style="color: unset;"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
      </svg>
    </button>
    <button
      aria-label="toggle theme"
      name="toggle theme"
      class="${buttonClass}"
      style="color: unset;"
      onclick="theme()"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
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
      class="${buttonClass}"
      style="color: unset;"
      onclick="togglePanel('settings', this)"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
      </svg>
    </button>
  </div>
</div>`;
          
    const element = document.querySelector(container);
    if (!element) return;
    element.innerHTML = html;
  }
};
const Modal = {
  render({
    title = "Are you sure you want to proceed?",
    content,
    onLoad,
    onConfirm
  }) {
    // if (!options) return false;
    const hClass = "text-lg font-thin";
    const buttonClass = "text-xs w-auto px-3 py-2 m-0 capitalize rounded-md";
    const svgClass = "w-3";
    const times = `<svg class="${svgClass}" viewBox="0 0 384 512">
        <path 
          fill="currentColor" 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`;

    const html = `<article class="rounded-md">
      <header class="flex justify-between items-center">
        <h1 class="${hClass}">${title}</h1>
        <button class="${buttonClass} bg-transparent border-0" style="color: unset;" aria-label="Close">
          ${times}
        </button>
      </header>
      <main class="font-thin">
        ${content ? content : ''}
      </main>
      <footer>
        <button class="${buttonClass} bg-transparent border ${project.dark ? 'border-gray-600' : 'border-gray-200'}" style="color: unset;" aria-label="Close" onclick="this.closest('dialog').close()">close</button>
        ${onConfirm ? `<button class="${buttonClass}" aria-label="Confirm">confirm</button>` : ''}
      </footer>
    </article>`;

    const modal = document.createElement('dialog');
    modal.open = true;
    modal.innerHTML = html;

    document.body.appendChild(modal);
    if (onLoad && typeof onLoad === 'function') {
      onLoad();
    }

    const closeBtn = modal.querySelector('footer button:first-child');
    const confirmBtn = modal.querySelector('footer button:last-child');

    // Confirm handler function
    closeBtn.onclick = () => document.body.removeChild(modal);
    confirmBtn.onclick = function() {
      if (onConfirm && typeof onConfirm === 'function') {
        onConfirm();
      }
      document.body.removeChild(modal);
    }
  }
}
const Settings = {
  render(container) {
    const svgClass = 'h-3';
    const inputClass = 'w-auto rounded-md text-[.6rem]';
    const inputStyle = 'height: auto; margin: 0; padding: .4rem;';
    const selectClass = 'm-0 w-auto rounded-md text-[.6rem]';
    const selectStyle = 'padding: 0.5rem 2rem 0.5rem 0.5rem;';
    const buttonClass = "text-xs w-auto px-3 py-1 m-0 mx-1 capitalize rounded-md";

    const stateKeysHtml = Object.entries(project.states).map(([key, value]) => `
      <div class="grid grid-cols-3 justify-between gap-2 items-center m-0 px-2 py-4 border-0 border-b border-solid border-gray-800" data-theme="border">
        <span>${key}</span>
        <div>
          <input type="checkbox" ${value ? 'checked' : ''} role="switch" onchange="updateState('${key}', this.checked)">
        </div>
        <button class="${buttonClass} bg-transparent text-red-600 border-red-600" onclick="removeKey('${key}')">Remove</button>
      </div>
    `).join('');

    const html = `<div class="flex flex-col h-full justify-between font-thin">
  <div 
    class="flex-none px-3 pt-1 pb-2 border-0 border-b border-solid border-gray-800" 
    data-theme="border"
  >
    <div 
      class="flex justify-between items-center"
    >
      <button class="${buttonClass} bg-transparent border-0 px-3 py-2" style="color: unset;" onclick="settingsBtn.onclick();">
        <svg class="${svgClass}" viewBox="0 0 384 512">
          <path 
            fill="currentColor" 
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
        </svg>
      </button>
      <div class="capitalize text-right">
        <span>state</span>
        <label for="typesInJSON" class="inline-block m-0 ml-2">
          <input id="typesInJSON" type="checkbox" ${project.statekeys ? 'checked' : ''} onchange="setState(this)">
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
    ${stateKeysHtml}
  </div>
  <div 
    class="flex-none">
    <div 
      class="flex justify-between gap-2 p-2 pt-3 border-0 border-t border-solid border-gray-800" 
      data-theme="border">
        <input type="text" id="newKey" class="${inputClass}" style="${inputStyle}" placeholder="Enter key" onkeydown="handleEnterKey(event)">
        <select id="newValue" class="${selectClass}" style="${selectStyle}">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button id="addKeyBtn" class="${buttonClass}" onclick="addKey()">Add</button>
      </div>
    </div>
  </div>
</div>`;

    const element = document.querySelector(container);
    if (!element) return;
    element.innerHTML = html;
  }
};

// Function that sets initial optional keys to json
function setState(element) {
  project.statekeys = element.checked;
  if (input.value) input.oninput();
}
// Function to add a new key-value pair to the state
function addKey() {
  const key = document.getElementById('newKey').value;
  const value = document.getElementById('newValue').value === 'true';
  const buttonClass = "text-xs w-auto px-3 py-1 m-0 mx-1 capitalize rounded-md";
  const stateKeysHtml = `
    <div class="grid grid-cols-3 justify-between gap-2 items-center m-0 px-2 py-4 border-0 border-b border-solid border-gray-800" data-theme="border">
      <span>${key}</span>
      <div>
        <input type="checkbox" ${value ? 'checked' : ''} role="switch" onchange="updateState('${key}', this.checked)">
      </div>
      <button class="${buttonClass} bg-transparent text-red-600 border-red-600" onclick="removeKey('${key}')">Remove</button>
    </div>
  `;
  
  if (key) {
    project.states[key] = value;
    document.getElementById('stateKeys').innerHTML += stateKeysHtml;
    if (input.value) input.oninput();
    newKey.value = '';
  }
}
// Function to update a state value
function updateState(key, value) {
  if (key in project.states) {
    project.states[key] = value;
    if (input.value) input.oninput();
  }
}
// Function to remove a key from the state
function removeKey(key) {
  delete project.states[key];
  Settings.render('[data-panel=settings]'); // Re-render to update the UI
  if (input.value) input.oninput();
}
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    addKey();
  }
}

// converts html to json
function html2json(input) {
  function generateId() {
    let id = '';
    while (!/^[a-zA-Z]/.test(id)) {
      id = Math.random().toString(36).substr(2, 9);
    }
    return id;
  }
  function elementToJson(element) {
    const boxElements = [
      'article',
      'aside',
      'div',
      'figcaption',
      'figure',
      'footer',
      'header',
      'hgroup',
      'label',
      'main',
      'nav',
      'ol',
      'section',
      'ul'
    ];
    const textElements = [
      'a',
      'abbr',
      'b',
      'blockquote',
      'button',
      'cite',
      'del',
      'em',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'i',
      'ins',
      'kbd',
      'mark',
      'p',
      'small',
      'span',
      'strike',
      'strong',
      'summary',
      'sub',
      'sup',
      'u'
    ];
    const obj = {
      tag: element.tagName.toLowerCase()
    };

    if (project.statekeys) {
      const tagName = element.tagName.toLowerCase();
      if (boxElements.includes(tagName)) {
        obj.type = "box";
        obj.name = "box";
      } else if (textElements.includes(tagName)) {
        obj.type = "text";
        obj.name = "text";
      } else {
        obj.type = tagName;
        obj.name = tagName;
      }
      obj.id = generateId();
      obj.styles = generateId();
      obj.states = project.states;
    }
  
    // Collect attributes
    const props = {};
    const events = {};
    Array.from(element.attributes).forEach(attr => {
      if (attr.name.startsWith('on')) {
        events[attr.name] = attr.value;
      } else {
        props[attr.name] = attr.value;
      }
    });
  
    // Add props only if not empty
    if (Object.keys(props).length > 0) {
      obj.props = props;
    }
  
    // Add events only if not empty
    if (Object.keys(events).length > 0) {
      obj.events = events;
    }
  
    if (element.childNodes.length > 0) {
      obj.children = [];
      element.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          obj.children.push(elementToJson(child));
        } else if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
          obj.text = child.nodeValue.trim();
        }
      });
    }
  
    return obj;
  }

  project.html = input;
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  
  // Process both head and body elements
  const headJson = Array.from(doc.head.children).map(child => elementToJson(child));
  const bodyJson = Array.from(doc.body.children).map(child => elementToJson(child));

  // Combine the head and body JSON structures into one array
  json = [...headJson, ...bodyJson];

  project.json = JSON.stringify(json, null, 2);
  return project.json;
}
// converts json to html
function json2html(input) {
  const selfClosingTags = [
    'br',
    'hr',
    'input',
    'img',
    'option'
  ]
  function jsonToElement(json) {
    function escapeHtml(text) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
    const renderElement = element => {
      let html = '';
      
      if (!element.tag) {
        html += element.text || '';
        return html;
      }
    
      html += `<${element.tag}`;
        
      if (element.props) {
        for (const [key, value] of Object.entries(element.props)) {
          html += ` ${key}="${value}"`;
        }
      }
    
      if (selfClosingTags.includes(element.tag)) {
        html += '/>';
      } else {
        html += '>';
      }
    
      if (element.text) {
        html += escapeHtml(element.text);
      }
    
      if (element.children) {
        for (const childElement of element.children) {
          html += renderElement(childElement);
        }
      }
    
      if (!selfClosingTags.includes(element.tag)) {
        html += `</${element.tag}>`;
      }
      return html;
    }
  
    let html = '';
    if (Array.isArray(json)) {
      json.forEach(element => {
        html += renderElement(element);
      });
    }
    return html;
  }
  function beautifyHtml(json) {
    const html = jsonToElement(json);
    let tab = '  ';
    let result = '';
    let indent = '';
  
    html.split(/>\s*</).forEach(function(element) {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }
  
      result += indent + '<' + element.trim() + '>\r\n';
  
      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("<input")) {
        indent += tab;
      }
    });
  
    // Remove leading tab and newline, and trim trailing newline and whitespace
    return result.substring(1, result.length - 3).trim();
  }

  project.json = JSON.parse(input);
  project.html = beautifyHtml(project.json);
  project.json = JSON.stringify(project.json, null, 2);
  return project.html;
}
// new project
function newProject() {
  // Ask user for confirmation
  Modal.render({
    title: "Are you sure you want to start a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm: function() {
      project = {
        statekeys: true,
        html: ``,
        json: ``,
        dark: true
      };

      input.value = project.html;
      output.value = project.json;
      const settingsBtn = document.getElementById('settingsBtn');
      if (settingsBtn.classList.contains('text-blue-500')) settingsBtn.onclick();
    }
  });
}
// import project file
function importProject() {
  // Ask user for confirmation
  Modal.render({
    title: "Are you sure you want to load a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm: function() {
      // Create an input element of type file
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.json'; // Accept only .json files
    
      // Add event listener for file selection
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (!file) {
          console.error('No file selected.');
          return;
        }
    
        const reader = new FileReader();
    
        // Define what happens once file is loaded
        reader.onload = function(event) {
          try {
            const importedData = JSON.parse(event.target.result);
            
            // Replace project data with imported JSON data
            project = {...project, ...importedData};

            // set theme
            document.documentElement.setAttribute('data-theme', project.dark);
      
            input.value = project.html;
            output.value = project.json;

            const settingsBtn = document.getElementById('settingsBtn');
            if (settingsBtn.classList.contains('text-blue-500')) settingsBtn.onclick();
    
            console.log('Project imported successfully:', importedData);
          } catch (error) {
            console.error('Error parsing JSON file:', error);
          }
        };
    
        // Read the file as text
        reader.readAsText(file);
        fileInput.remove();
      });
    
      // Click the input element to trigger file selection dialog
      fileInput.click();
    }
  });
}
// download
function download(string) {
  // Ask user for confirmation
  Modal.render({
    title: "Project File Name",
    content: `<input id="fileName" type="text" value="output" placeholder="Project file name....">`,
    onLoad: function() {
      const fileNameInput = document.getElementById('fileName');
      fileNameInput.focus();
      fileNameInput.select();
    
      const confirmBtn = fileNameInput.closest('dialog').querySelector('footer button:last-child');

      fileNameInput.onkeydown = event => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent the default form submission
          confirmBtn.click(); // Trigger the confirm button click
        }
      };
    },
    onConfirm: function() {
      const fileName = document.getElementById('fileName').value.trim().toLowerCase();
      const html = document.getElementById('input').value;
      const json = document.getElementById('output').value;
      
      if (!fileName) {
        return Modal.render({
          title: "Error",
          content: `<div class="text-center">File name not found!</div>`
        });
      }
  
      let fileContent, extension, blob;
      if (string) {
        if (string === 'html') {
          fileContent = html;
          extension = 'html';
          blob = new Blob([fileContent], { type: "text/html;charset=utf-8" });
        }
        if (string === 'json') {
          fileContent = json;
          extension = 'json';
          blob = new Blob([fileContent], { type: "application/json;charset=utf-8" });
        }
      } else {
        fileContent = JSON.stringify(project, null, 2);
        extension = 'json';
        blob = new Blob([fileContent], {type: "application/json;charset=utf-8"});
      }
      saveAs(blob, `${fileName}${string ? `` : `_html2json`}.${extension}`);
    }
  });
}

// other functions for app
function theme() {
  const sun = "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z";
  const moon = "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z";
  
  // Toggle dark mode
  project.dark = !project.dark;

  // update icon based upon theme
  data.themeIcon = project.dark ? moon : sun;

  // Set data-theme attribute on <html> element
  document.documentElement.setAttribute('data-theme', project.dark ? 'dark' : 'light');

  // update elements to new theme
  document.getElementById('themeIcon').setAttribute('d', data.themeIcon);
  document.querySelectorAll('[data-theme]').forEach(element => {
    if (element.tagName.toLowerCase() === 'html') return;
    let item = element.getAttribute('data-theme');
    
    switch (item) {
      case 'border':
        element.classList.toggle("border-gray-800", project.dark);
        element.classList.toggle("border-gray-200", !project.dark);
        break;
      // Add more cases for other attributes if needed
      default:
        break;
    }
  });
}
function togglePanel(panel, button) {
  data.activePanel = data.activePanel === panel ? null : panel;
  
  const panelElements = document.querySelectorAll(`[data-panel]`);
  if (data.activePanel) {
    panelElements.forEach(element => element.classList.add('hidden'));
    document.querySelector(`[data-panel=${panel}]`).classList.remove('hidden');
    button.classList.add('text-blue-500');
    button.style = "";
  } else {
    panelElements.forEach(element => element.classList.add('hidden'));
    document.querySelector(`[data-panel=code]`).classList.remove('hidden');
    button.classList.remove('text-blue-500');
    button.style = "color: unset;";
  }
}

// once dom has loaded init functions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize and render components
  MenuBar.render('[data-menubar]');
  Settings.render('[data-panel=settings]');
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  input.oninput = () => {
    output.value = html2json(input.value);
    localStorage.setItem('html2json', JSON.stringify(project));
  }
  output.oninput = () => {
    input.value = json2html(output.value);
    localStorage.setItem('html2json', JSON.stringify(project));
  }

  if (localStorage.getItem('html2json')) {
    project = JSON.parse(localStorage.getItem('html2json'));
  }

  input.value = project.html;
  output.value = project.json;
});