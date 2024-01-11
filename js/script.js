// script.js
// Variables to store HTML elements
const SideBar1 = document.getElementById('sidebar1');
const SideBar2 = document.getElementById('sidebar2');
const SideBar3 = document.getElementById('sidebar3');
const SideBar4 = document.getElementById('sidebar4');
const SideBar5 = document.getElementById('sidebar5');
const SideBar6 = document.getElementById('sidebar6');
const SideBar7 = document.getElementById('sidebar7');

const Banner0 = document.getElementById('banner0');
const Banner1 = document.getElementById('banner1');
const Banner2 = document.getElementById('banner2');


const content0 = document.getElementById('c0');
const content1 = document.getElementById('c1');
const content2 = document.getElementById('c2');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');


const about_software = document.getElementById('software');
const about_software1 = document.getElementById('software1');


const details = document.getElementById('details1');
const details1 = document.getElementById('details2');
const details2 = document.getElementById('details3');
const details3 = document.getElementById('details4');

const intro_title = document.getElementById('intro_title');
const intro = document.getElementById('intro');

const works = document.getElementById('works');
const how_works = document.getElementById('how_works');

const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');

const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');

const u1 = document.getElementById('u1');
const u2 = document.getElementById('u2');
const u3 = document.getElementById('u3');
const u4 = document.getElementById('u4');
const u5 = document.getElementById('u5');

const w1 = document.getElementById('w1');
const w2 = document.getElementById('w2');
const w3 = document.getElementById('w3');

const paragraph1 = document.getElementById('paragraph1');

// Function to update content for a specific element

function updateContent(element, newValue) {
  // Update content for the element
  element.textContent = newValue;
}

// Function to update content for an <a> tag
function updateLinkContent(linkElement, newValue) {
  // Update content for the <a> tag
  linkElement.innerText = newValue;
}

// Fetch JSON data from the text file
fetch('t.txt')
  .then(response => response.text())
  .then(textData => {
    // Parse the text data as JSON
    const jsonData = JSON.parse(textData);

    // Update content for existing sidebar elements using variables
    updateContent(SideBar1, jsonData.sidebar.sidebar1);
    updateContent(SideBar2, jsonData.sidebar.sidebar2);
    updateContent(SideBar3, jsonData.sidebar.sidebar3);
    updateContent(SideBar4, jsonData.sidebar.sidebar4);
    updateContent(SideBar5, jsonData.sidebar.SideBar5);
    updateContent(SideBar6, jsonData.sidebar.SideBar6);
    updateContent(SideBar7, jsonData.sidebar.SideBar7);
    
    // Update content for existing banner elements using variables
    updateContent(Banner0, jsonData.banner.banner0);
    updateContent(Banner1, jsonData.banner.banner1);
    updateContent(Banner2, jsonData.banner.banner2);

    updateContent(content0, jsonData.c.c0);
    updateContent(content1, jsonData.c.c1);
    updateLinkContent(content2, jsonData.c.c2);

    updateContent(b0, jsonData.b.b0);
    updateContent(b1, jsonData.b.b1);
    
    updateContent(t0, jsonData.t.t0);
    updateContent(t1, jsonData.t.t1);

    updateContent(h0, jsonData.h.h0);
    updateContent(h1, jsonData.h.h1);
    updateContent(h2, jsonData.h.h2);
    updateContent(h3, jsonData.h.h3);
    updateContent(h4, jsonData.h.h4);

    updateContent(s0, jsonData.s.s0);
    updateContent(s1, jsonData.s.s1);

    updateContent(u0, jsonData.u.u0);
    updateContent(u1, jsonData.u.u1);
    updateContent(u2, jsonData.u.u2);
    updateContent(u3, jsonData.u.u3);
    updateContent(u4, jsonData.u.u4);
    updateContent(u5, jsonData.u.u5);
    
    updateContent(w1, jsonData.w.w1);
    updateContent(w2, jsonData.w.w2);
    updateContent(w3, jsonData.w.w3);


    updateContent(about_software, jsonData.software.about1);
    updateContent(about_software1, jsonData.software.about2);

    updateContent(details, jsonData.details.details1);
    updateContent(details1, jsonData.details.details2);
    updateContent(details2, jsonData.details.details3);
    updateContent(details3, jsonData.details.details4);

    updateContent(intro_title, jsonData.introduction.intro_title);
    updateContent(intro, jsonData.introduction.intro);    

    updateContent(works, jsonData.works.intro);
    updateContent(how_works, jsonData.works.how_works);  

  })
  .catch(error => console.error('Error fetching or parsing JSON:', error));