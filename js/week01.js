const loadStory = () => {
  const storyName = document.getElementById("name_input").value;
  const storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}

const saveStory = () => {
  const storyName = document.getElementById("name_input").value;
  const storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
}

const displayStory = () => {
  const storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_display").innerHTML = storyHTML;
}