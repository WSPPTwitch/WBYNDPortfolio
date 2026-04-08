// video list - add here
const videos = [
    {
        youtubeId: "asymAPq4Nsc", 
        title: "I Caught A REAL Ghost On Camera!!",
        category: "long"
    },
    {
        youtubeId: "hOoiLAh32DU", 
        title: "BEYOND SANDBOX RELEASE DATE CONFIRMED!!!",
        category: "long"
    },
    {
        youtubeId: "jZH4Ux1m8V8",
        title: "This VR Bowling Game Made Me RAGE!!!",
        category: "long"
    },
    {
        youtubeId: "EfVowScXhTo",
        title: "We Are Definitely NOT Qualified For This!!",
        category: "long"
    },
    {
        youtubeId: "bGsyYhupshY",
        title: "Deadpool VR Is Actually INSANE",
        category: "long"
    },
    {
        youtubeId: "FwjgmckaZj0",
        title: "THE ENDING IS INSANE!",
        category: "long"
    },
    {
        youtubeId: "lWFzShuhWgU",
        title: "WHY WOULD THEY SHOW THIS!",
        category: "long"
    },
    {
        youtubeId: "2qhcJtIHVp0",
        title: "What Is Inside This Weird Package...",
        category: "long"
    },
    {
        youtubeId: "VhxKr4MkOZQ",
        title: "These Are The SCARIEST Games Ive Ever Played",
        category: "long"
    },
    {
        youtubeId: "29CGFkBWcIQ",
        title: "Content Warning VR Is The FUNNIEST VR Game!",
        category: "long"
    },
    {
        youtubeId: "Gstwel6Aq0Q",
        title: "This Horror Game Knows When You Blink...",
        category: "long"
    },
    {
        youtubeId: "p1qSG9vNkl8",
        title: "Buck Shot Roulette In VR Is Hilarious!",
        category: "long"
    },
    {
        youtubeId: "B9d5HPqkgQ0",
        title: "I Fought HUGE Mechs In VR!",
        category: "long"
    },
    {
        youtubeId: "FIcmMqB2K2U",
        title: "Beyond Sandbox Release Date CONFIRMED!!!",
        category: "short"
    },
    {
        youtubeId: "ynJ04rRKwxc",
        title: "It's Like a Playable Animated Movie!",
        category: "short"
    },
    {
        youtubeId: "azxj6bG013c",
        title: "Minecraft's Top 5 Rarest Blocks",
        category: "short"
    },
    {
        youtubeId: "MSk_9_2K3S4",
        title: "Minecraft Beginner Tips And Tricks!",
        category: "short"
    },
    {
        youtubeId: "3UHqjLsAn7s",
        title: "How To Do The Launch Glitch In Skate 4",
        category: "short"
    }
];

const grid = document.getElementById('video-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// calculate and update button counts
function updateFilterCounts() {
    const total = videos.length;
    const longCount = videos.filter(v => v.category === 'long').length;
    const shortCount = videos.filter(v => v.category === 'short').length;
    
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        let baseText = '';
        let count = 0;
        
        if (filter === 'all') {
            baseText = 'All';
            count = total;
        } else if (filter === 'long') {
            baseText = 'Long‑form';
            count = longCount;
        } else if (filter === 'short') {
            baseText = 'Shorts';
            count = shortCount;
        }
        
        btn.innerHTML = `${baseText} (${count})`;
    });
}

function createVideoCard(video) {
    return `
        <div class="video-card" data-category="${video.category}">
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.youtubeId}" 
                    title="${video.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-title">${video.title}</div>
            <div class="video-meta">
                <span class="category-badge ${video.category}">${video.category === 'long' ? 'Long‑form' : 'Short'}</span>
            </div>
        </div>
    `;
}

function renderVideos(filter = 'all') {
    let html = '';
    videos.forEach(video => {
        if (filter === 'all' || filter === video.category) {
            html += createVideoCard(video);
        }
    });
    grid.innerHTML = html;
}

function setActiveFilter(activeFilter) {
    filterButtons.forEach(btn => {
        const filterValue = btn.getAttribute('data-filter');
        if (filterValue === activeFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');
        renderVideos(filterValue);
        setActiveFilter(filterValue);
    });
});

// show counts on buttons
updateFilterCounts();

// show all on load
renderVideos('all');
setActiveFilter('all');