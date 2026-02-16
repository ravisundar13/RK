async function loadResume() {
    const response = await fetch('resume.json');
    const data = await response.json();

    document.getElementById('name').textContent = data.personal_info.name;
    document.getElementById('title').textContent = data.personal_info.title;
    document.getElementById('contact').innerHTML = `
        📞 ${data.personal_info.mobile}<br>
        📧 ${data.personal_info.email}<br>
        📍 ${data.personal_info.location}
    `;

    // Render Impact Hooks
    const impactContainer = document.getElementById('impact-container');
    data.recruiter_impact.forEach(item => {
        const card = document.createElement('div');
        card.className = 'impact-card';
        card.innerHTML = `<h4>${item.metric}</h4><p>${item.label}</p>`;
        impactContainer.appendChild(card);
    });

    // ... (rest of the rendering logic for summary, skills, and experience)
}
window.onload = loadResume;
