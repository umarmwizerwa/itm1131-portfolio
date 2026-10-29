
const modulesList = document.querySelector('#modules-list');
const modulesError = document.querySelector('#modules-error');

async function loadModules() {
  try {
    const response = await fetch('modules.json');

    if (!response.ok) {
      throw new Error('Could not load modules.json');
    }

    const data = await response.json();

    modulesList.replaceChildren();

    data.modules.forEach((module) => {
      const item = document.createElement('li');
      item.textContent = `${module.name} — ${module.hours} hours`;
      modulesList.appendChild(item);
    });

    modulesError.hidden = true;
    modulesError.textContent = '';
  } catch (error) {
    modulesList.replaceChildren();

    modulesError.textContent =
      'Sorry, the course modules could not be loaded. Please try again.';
    modulesError.hidden = false;

    console.error('Error loading modules:', error);
  }
}

loadModules();
