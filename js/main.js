const links = [
  {
    label: "Week 01",
    url: "week01/index.html"
  }
]

const getLinksHTML = () => {
  var html = '';

  links.forEach(link => {
    html += `\n<li><a href="${link.url}">${link.label}</a></li>`;
  })

  return html;
}

const loadTableOfOntents = () => {
  var ol = document.getElementById("toc");
  var html = getLinksHTML();
  ol.innerHTML += html;
}

window.onload = loadTableOfOntents;