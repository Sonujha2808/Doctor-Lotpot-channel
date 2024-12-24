// Video data (URLs, titles, and logo paths)
const videos = [
    { url: "https://www.youtube.com/embed/Qekknv3pvZY?si=iu3Q3Zb1yvZYcCXb", title: "INDIAN MOTHER | DOCTOR LOTPOT | FUNNY VIDEO", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/TuIO-dHw0zo?si=N8cdaUC2j-Uywd65", title: "Trump Modi Ka CORONA | Stand Up Comedy", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/IT_LP6bv7DA?si=wQez2rdq0g17TdZQ", title: "FUNNY STORIES | PART 33 | BEST COMEDY", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/k1nmSeMYETk?si=SlDWjWsvUg25uLyg", title: "Beastie Boys - Sabotage", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/k4hU9vuVkKE?si=qP23nj8yLYblKAxc", title: "Hello - Adele", logo: "img/logo.png" },
    { url: "https://youtube.com/embed/4rLt_tAtPuY?si=4EbdoPNBkqJ0eZdd", title: "Never Gonna Give You Up", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/SJNR4d1c0z4?si=X2-zsh87-B_S3XeR", title: "Beastie Boys - Intergalactic", logo: "img/logo.png" },
   
    { url: "https://www.youtube.com/embed/k1nmSeMYETk?si=bUv0H1O0KGVm79Ah", title: "Beastie Boys - Sabotage", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/Qekknv3pvZY?si=-UimXB2g2hp9Gcek", title: "INDIAN MOTHER | DOCTOR LOTPOT | FUNNY VIDEO", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/ANAtSuBV6H0?si=PTKP29lSt-9Freyc", title: "Trump Modi Ka CORONA | Stand Up Comedy", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/e7vsZ019gns?si=gcC2RQ9xSiGwCrQ1", title: "FUNNY STORIES | PART 33 | BEST COMEDY", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/ANAtSuBV6H0?si=PTKP29lSt-9Freyc", title: "Trump Modi Ka CORONA | Stand Up Comedy (Duplicate)", logo: "img/logo.png" },


    { url: "https://www.youtube.com/embed/Z2BL6pJDNG4?si=Dmqu5lN5UQxb9PwT", title: "He-Man: What's Going On", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/YXeO4OakmWA?si=fdo4UJiHFub6ZV5C", title: "The Final Countdown", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/Qekknv3pvZY?si=iu3Q3Zb1yvZYcCXb", title: "INDIAN MOTHER | DOCTOR LOTPOT | FUNNY VIDEO", logo: "img/logo.png" },
    { url: "https://www.youtube.com/embed/TuIO-dHw0zo?si=N8cdaUC2j-Uywd65", title: "Trump Modi Ka CORONA | Stand Up Comedy", logo: "img/logo.png" },
];

let videosLoaded = 0; // Counter for videos loaded
const initialBatchSize = 8; // Initial number of videos to load
const subsequentBatchSize = 4; // Batch size for subsequent loads

// Function to load videos
function loadVideos(batchSize) {
    const videoContainer = document.getElementById("video-container");
    const batch = videos.slice(videosLoaded, videosLoaded + batchSize); // Get the next batch of videos
    batch.forEach(video => {
        const videoElement = `
            <div class="col-md-3 mb-4">
                <div style="text-align: center; margin-bottom: 10px;">
                    <iframe width="100%" height="200" src="${video.url}" 
                        title="${video.title}" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <div style="width: 20%; text-align: center;">
                        <img src="${video.logo}" alt="Channel Logo" style="width: 40px; height: 40px; border-radius: 50%;">
                    </div>
                    <div style="width: 80%; text-align: center;">
                        <p style="color: #ffffff; text-align: center; font-size: 14px; margin: 0;">${video.title}</p>
                    </div>
                </div>
                <button class="btn btn-warning" style="color: #000000; width: 100%;">Watch</button>
            </div>
        `;
        videoContainer.innerHTML += videoElement;
    });
    videosLoaded += batch.length; // Update the counter
    if (videosLoaded >= videos.length) {
        document.getElementById("load-more").style.display = "none"; // Hide the button if all videos are loaded
    }
}

// Load the initial batch of videos
loadVideos(initialBatchSize);

// Attach event listener to "Load More" button
document.getElementById("load-more").addEventListener("click", () => loadVideos(subsequentBatchSize));
