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


const about_software = document.getElementById('about1');
const about_software1 = document.getElementById('about2');


const details = document.getElementById('details1');
const details1 = document.getElementById('details2');
const details2 = document.getElementById('details3');
const details3 = document.getElementById('details4');

const intro_title = document.getElementById('intro_title');
const intro = document.getElementById('intro');

const intro1 = document.getElementById('intro1');
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

const g0 = document.getElementById('banner');
const g1 = document.getElementById('content');
const g2 = document.getElementById('about');
const g3 = document.getElementById('gallery');
const g4 = document.getElementById('services');
const g5 = document.getElementById('testimonials');
const g6 = document.getElementById('clients');
const g7 = document.getElementById('pricing');


      
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');

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
function updateImageSrc(imageElement, newSrc) {
  // Update the src attribute of the image element
  imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
// Update the background color for the element
element.style.backgroundColor = newColor;
}
// Fetch JSON data from the text file
const fetchJson1 = fetch('t.txt')
.then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
.then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
.then(jsonDataArray => {
    // Merge the data from both JSON files
    const mergedData = Object.assign({}, ...jsonDataArray);


    // Update content for existing sidebar elements using variables
    updateContent(SideBar1, mergedData.sidebar.sidebar1);
    updateContent(SideBar2, mergedData.sidebar.sidebar2);
    updateContent(SideBar3, mergedData.sidebar.sidebar3);
    updateContent(SideBar4, mergedData.sidebar.sidebar4);
    updateContent(SideBar5, mergedData.sidebar.SideBar5);
    updateContent(SideBar6, mergedData.sidebar.SideBar6);
    updateContent(SideBar7, mergedData.sidebar.SideBar7);
    
    // Update content for existing banner elements using variables
    updateContent(Banner0, mergedData.banner.banner0);
    updateContent(Banner1, mergedData.banner.banner1);
    updateContent(Banner2, mergedData.banner.banner2);

    updateContent(content0, mergedData.c.c0);
    updateContent(content1, mergedData.c.c1);
    updateLinkContent(content2, mergedData.c.c2);

    updateContent(b0, mergedData.b.b0);
    updateContent(b1, mergedData.b.b1);
    
    updateContent(t0, mergedData.t.t0);
    updateContent(t1, mergedData.t.t1);

    updateContent(h0, mergedData.h.h0);
    updateContent(h1, mergedData.h.h1);
    updateContent(h2, mergedData.h.h2);
    updateContent(h3, mergedData.h.h3);
    updateContent(h4, mergedData.h.h4);

    updateContent(s0, mergedData.s.s0);
    updateContent(s1, mergedData.s.s1);

    updateContent(u0, mergedData.u.u0);
    updateContent(u1, mergedData.u.u1);
    updateContent(u2, mergedData.u.u2);
    updateContent(u3, mergedData.u.u3);
    updateContent(u4, mergedData.u.u4);
    updateContent(u5, mergedData.u.u5);
    
    updateContent(w1, mergedData.w.w1);
    updateContent(w2, mergedData.w.w2);
    updateContent(w3, mergedData.w.w3);


    updateContent(about_software, mergedData.software.about1);
    updateContent(about_software1, mergedData.software.about2);

    updateContent(details, mergedData.details.details1);
    updateContent(details1, mergedData.details.details2);
    updateContent(details2, mergedData.details.details3);
    updateContent(details3, mergedData.details.details4);

    updateContent(intro_title, mergedData.introduction.intro_title);
    updateContent(intro, mergedData.introduction.intro);    

    updateContent(intro1, mergedData.works.intro1);
    updateContent(how_works, mergedData.works.how_works);  

    updateBackgroundColor(g0, mergedData.color.banner);
    updateBackgroundColor(g1, mergedData.color.content);
    updateBackgroundColor(g2, mergedData.color.about);
    updateBackgroundColor(g3, mergedData.color.gallery);
    updateBackgroundColor(g4, mergedData.color.service);
    updateBackgroundColor(g5, mergedData.color.testimonials);
    updateBackgroundColor(g6, mergedData.color.clients);
    updateBackgroundColor(g7, mergedData.color.pricing);


    updateImageSrc(img1, mergedData.images.img1);
    updateImageSrc(img2, mergedData.images.img2);
    updateImageSrc(img3, mergedData.images.img3);
    updateImageSrc(img4, mergedData.images.img4);
    updateImageSrc(img5, mergedData.images.img5);
    updateImageSrc(img6, mergedData.images.img6);
    updateImageSrc(img7, mergedData.images.img7);
    updateImageSrc(img8, mergedData.images.img8);
    updateImageSrc(img9, mergedData.images.img9);
    updateImageSrc(img10, mergedData.images.img10);

  })
  .catch(error => console.error('Error fetching or parsing JSON:', error));