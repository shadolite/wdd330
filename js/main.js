const linksInfo = [
  {
    label: "Week 01",
    url: "week01/index.html"
  },
  {
    label: "Week 02",
    url: "week02/index.html"
  },
  {
    label: "Week 03",
    url: "week03/index.html"
  },
  {
    label: "Week 04",
    url: "week04/index.html"
  },
  {
    label: "Week 05",
    url: "week05/index.html"
  },
  {
    label: "Challenge 01",
    url: "challenge01/index.html"
  },
  {
    label: "Week 07",
    url: "week07/index.html"
  },
  {
    label: "Week 08",
    url: "week08/index.html"
  },
  {
    label: "Week 09",
    url: "week09/index.html"
  },
  {
    label: "Week 10",
    url: "week10/index.html"
  },
  {
    label: "Week 11",
    url: "week11/index.html"
  },
  {
    label: "Week 12",
    url: "week12/index.html"
  },
  {
    label: "Week 13",
    url: "week13/index.html"
  },
  {
    label: "Challenge 02",
    url: "challenge02/index.html"
  }
]

const getLink = (linkInfo) => {
  let a = document.createElement(`a`);
  a.href = linkInfo.url;
  a.innerText = linkInfo.label;
  return a;
};

const getLi = (el) => {
  let li = document.createElement(`li`);
  li.append(el);
  return li;
}

const getLinks = () => {
  const links = [];

  linksInfo.forEach(link => {
    links.push(getLi(getLink(link)));
  });

  return links;
};

const loadTableOfContents = () => {
  getLinks().forEach(link => {
    document.getElementById("toc").appendChild(link);
  });
}

window.onload = loadTableOfContents;