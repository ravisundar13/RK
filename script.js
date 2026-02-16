async function renderResume() {
    const res = await fetch('resume.json');
    const data = await res.json();

    document.getElementById('name').textContent = data.personal_info.name;
    document.getElementById('title').textContent = data.personal_info.title;
    document.getElementById('contact').innerHTML = `
        ${data.personal_info.mobile}<br>${data.personal_info.email}<br>${data.personal_info.location}
    `;
    document.getElementById('summary').textContent = data.summary;

    // Render Skills
    const skillsSection = document.getElementById('skills-section');
    Object.entries(data.skills_highlights).forEach(([key, list]) => {
        const sub = document.createElement('p');
        sub.style.fontWeight = 'bold';
        sub.textContent = key;
        skillsSection.appendChild(sub);
        list.forEach(s => {
            const span = document.createElement('div');
            span.className = 'small-text';
            span.style.marginBottom = '5px';
            span.textContent = "• " + s;
            skillsSection.appendChild(span);
        });
    });

    // Render Experience
    const expContainer = document.getElementById('experience');
    data.experience_details.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'exp-item';
        div.innerHTML = `
            <h3>${exp.role}</h3>
            <p><strong>${exp.company}</strong> | ${exp.period}</p>
            <ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        `;
        expContainer.appendChild(div);
    });

    // Render Certs
    const certsList = document.getElementById('certs');
    data.certifications.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        certsList.appendChild(li);
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

window.onload = renderResume;
