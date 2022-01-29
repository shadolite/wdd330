// Search form exercise
const searchForm = document.forms['search'];
const input = searchForm.elements.searchInput;
input.value = 'Search Here';

input.addEventListener('focus', function () {
  if (input.value === 'Search Here') {
    input.value = ''
  }
}, false);

input.addEventListener('blur', function () {
  if (input.value === '') {
    input.value = 'Search Here';
  }
}, false);

input.addEventListener('change', () => alert('changed'), false);

searchForm.addEventListener('submit', search, false);

function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}

// Hero form exercise
const heroForm = document.forms['hero'];
const nameInput = heroForm.elements.heroName;
nameInput.addEventListener('keyup', validateInline, false);

const label = heroForm.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
  if (!this.value)
    return;
  const heroName = heroForm.heroName.value.toUpperCase();
  if (heroName.startsWith('X')) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
}

heroForm.addEventListener('submit', makeHero, false);
document.forms.hero.heroName.focus();

function makeHero(event) {
  event.preventDefault(); // prevent the form from being submitted

  const hero = {}; // create an empty object
  hero.name = heroForm.heroName.value; // create a name property based on the input field's value
  hero.realName = heroForm.realName.value;
  hero.age = heroForm.age.value;
  hero.powers = [...heroForm.powers].filter(box => box.checked).map(box => box.value);
  hero.category = heroForm.category.value;
  hero.city = heroForm.city.value;
  hero.origin = heroForm.origin.value;
  alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog

  return hero;
}