async function loadResume() {
    try {
        const response = await fetch('resume.json');
        const data = await response.json();
        document.getElementById('user-name').innerText = data.personal_info.name;
        document.getElementById('user-title').innerText = data.personal_info.title;
        document.getElementById('summary-text').innerText = data.summary;
        // Logic to populate skills and experience...
    } catch (e) { console.error(e); }
}
function toggleTheme() { document.body.classList.toggle('dark-mode'); }
window.onload = loadResume;
