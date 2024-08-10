// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading for initiative blocks
document.addEventListener('DOMContentLoaded', () => {
    const initiatives = [
        {
            title: "Startups, Corporates and Funding (SCF)",
            description: "Our SCF vertical bridges the gap between students and the corporate world by bringing in funding opportunities, corporate partnerships, and government associations. We strive to build a sustainable ecosystem where innovation thrives."
        },
        {
            title: "Institute Innovation Council (IIC) and Rankings",
            description: "IIC drives innovation and excellence in the institute by promoting a culture of creativity, problem-solving, and critical thinking. Our rankings reflect the impact of our initiatives in fostering entrepreneurship and innovation."
        },
        {
            title: "Technical Innovation & Startups Council (TISC)",
            description: "The TISC body is dedicated to nurturing technical talent and fostering startups that leverage cutting-edge technology. We provide resources, mentorship, and a platform for budding entrepreneurs to launch their ideas."
        },
        {
            title: "Events, Media and Coverage",
            description: "Our Events and Media vertical is the voice of E-Cell, managing outreach, events, and media coverage. We ensure that the entrepreneurial spirit is broadcast far and wide, attracting attention and support from various sectors."
        },
        {
            title: "Web Development",
            description: "The Web Development team creates and maintains the online presence of E-Cell. From the official website to event pages, we ensure everything is accessible, visually appealing, and functional for our audience."
        }
    ];

    const initiativeContainer = document.querySelector('.initiatives');
    initiatives.forEach((initiative, index) => {
        const initiativeBlock = document.createElement('div');
        initiativeBlock.className = 'initiative-block';
        initiativeBlock.style.animationDelay = `${index * 0.1}s`;

        const title = document.createElement('h2');
        title.textContent = initiative.title;

        const description = document.createElement('p');
        description.textContent = initiative.description;

        initiativeBlock.appendChild(title);
        initiativeBlock.appendChild(description);
        initiativeContainer.appendChild(initiativeBlock);

        // Debugging Information
        console.log(`Initiative Block Added: ${initiative.title}`);
    });
});

// Animation on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Debugging Information
            console.log(`Animate class added to: ${entry.target.querySelector('h2').textContent}`);
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.initiative-block').forEach(block => {
    observer.observe(block);
});
