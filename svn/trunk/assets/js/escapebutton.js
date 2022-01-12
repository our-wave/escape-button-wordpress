// Define configuration			
const config = {
    newTabUrl: undefined,
    replaceTabUrl: undefined
}

// Set up config
const newTabUrl = config.newTabUrl != null ? config.newTabUrl : 'https://www.amazon.com/?search=newest-deals-today/490239040234023942342i04203904';
const replaceTabUrl = config.replaceTabUrl != null ? config.replaceTabUrl : 'https://www.allrecipes.com/?page=2';

// Define leave handler
const handleLeavePage = () => {
    document.body.innerHTML = '';
    window.open(newTabUrl, '_newtab');
    window.location.replace(replaceTabUrl);
};

// Show escape button
const elements = document.querySelectorAll('.ow-leave-page-fab.script-enabled');
for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.display = 'block';
}

// Handle escape button logic
document.addEventListener('click', (event) => {

    // Ignore if incorrect selector
    if (!event.target.closest('.ow-leave-page-fab.script-enabled')) return;

    // Handle leave page logic
    handleLeavePage();
});