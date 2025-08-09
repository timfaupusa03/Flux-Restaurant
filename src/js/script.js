/* --------------------------Menu Page Tabs --------------------------------- */
const tabs = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('.menu-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Hide all menu sections
    sections.forEach(section => section.style.display = 'none');
    
    // Set active tab
    tab.classList.add('active');
    // Show selected menu
    const selectedId = tab.getAttribute('data-menu');
    document.getElementById(selectedId).style.display = 'block';
  });
});

// Optional: activate the first tab on load
if (tabs.length > 0) {
  tabs[0].click();
}
