const links = [
  {
    label: "Week 01",
    url: "week01/index.html"
  },
  {
    label: "Week 02",
    url: "week02/index.html"
  }
]

const getLinksHTML = () => {
  var html = '';

  links.forEach(link => {
    // let a = document.createElement(`a`);
    // a.innerHTML = link.url;
    // a.innerText = link.label;
    html += `\n<li><a href="${link.url}">${link.label}</a></li>`;
  })

  return html;
}

const loadTableOfContents = () => {
  var ol = document.getElementById("toc");
  var html = getLinksHTML();
  ol.innerHTML += html;
}

window.onload = loadTableOfContents;