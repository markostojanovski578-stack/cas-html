const movies = [
    { 
        id: 1, 
        title: "One Battle After Another", 
        genre: "Action, Thriller",
        rating: 0,
        image: "poster-1.jpg" 
    },
    { 
        id: 2, 
        title: "First Reformed", 
        genre: "Drama",
        rating: 0,
        image: "poster-2.png"
    },
    { 
        id: 3, 
        title: "Furiosa: A Mad Max Saga", 
        genre: "Action, Adventure",
        rating: 0,
        image: "poster-3.jpg"
    },
    { 
        id: 4, 
        title: "F For Fake", 
        genre: "Docufiction, Drama",
        rating: 0,
        image: "poster-4.jpg"
    },
    { 
        id: 5, 
        title: "His Girl Friday", 
        genre: "Comedy, Romance",
        rating: 0,
        image: "poster-5.jpg"
    }
];

const STORAGE_KEY = 'movie_ratings_v1';


function loadRatings() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        movies.forEach(movie => {
            if (parsedData[movie.id] !== undefined) {
                movie.rating = parsedData[movie.id];
            }
        });
    }
}


function saveRatings() {
    const ratingsMap = {};
    movies.forEach(movie => {
        ratingsMap[movie.id] = movie.rating;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratingsMap));
}


function getStarsHTML(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span class="star">★</span>';
        } else {
            html += '<span class="star empty">★</span>';
        }
    }
    return html;
}



function handleRate(id, inputId, starsId, resetBtnId) {
    const input = document.getElementById(inputId);
    const starsContainer = document.getElementById(starsId);
    const resetBtn = document.getElementById(resetBtnId);
    const val = parseInt(input.value);

    if (isNaN(val) || val < 1 || val > 5) {
        return; 
    }
    const movie = movies.find(m => m.id === id);
    movie.rating = val;
    saveRatings();
    starsContainer.innerHTML = getStarsHTML(val);
    resetBtn.style.display = 'inline-block';
    
}


function handleReset(id, starsId, resetBtnId, inputId) {
    const starsContainer = document.getElementById(starsId);
    const resetBtn = document.getElementById(resetBtnId);
    const input = document.getElementById(inputId);
    const movie = movies.find(m => m.id === id);
    movie.rating = 0;
    saveRatings();
    starsContainer.innerHTML = getStarsHTML(0);
    resetBtn.style.display = 'none';
    input.value = '';
}


function renderMovies() {
    const container = document.getElementById('movie-container');
    
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    movies.forEach(movie => {
        
        const inputId = `input-${movie.id}`;
        const starsId = `stars-${movie.id}`;
        const resetBtnId = `reset-${movie.id}`;

        
        const card = document.createElement('div');
        card.className = 'movie-card';

        
        const posterWrapper = document.createElement('div');
        posterWrapper.className = 'poster-wrapper';

        
        const img = document.createElement('img');
        img.src = movie.image; 
        img.alt = `${movie.title} Poster`;
        
        posterWrapper.appendChild(img);
        card.appendChild(posterWrapper);

        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const title = document.createElement('h3');
        title.className = 'movie-title';
        title.textContent = movie.title;
        cardContent.appendChild(title);
        
        const genre = document.createElement('p');
        genre.className = 'movie-genre';
        genre.textContent = movie.genre;
        cardContent.appendChild(genre);

        
        const controls = document.createElement('div');
        controls.className = 'rating-controls';

        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = inputId;
        input.className = 'number-input';
        input.placeholder = '0';
        input.min = '1';
        input.max = '5';
        controls.appendChild(input);

        
        const btnRate = document.createElement('button');
        btnRate.className = 'btn btn-rate';
        btnRate.textContent = 'Rate';
        btnRate.onclick = function() {
            handleRate(movie.id, inputId, starsId, resetBtnId);
        };
        controls.appendChild(btnRate);
        cardContent.appendChild(controls);
        
        const starsWrapper = document.createElement('div');
        starsWrapper.className = 'stars-wrapper';

        
        const starsDiv = document.createElement('div');
        starsDiv.className = 'stars-display';
        starsDiv.id = starsId;
        starsDiv.innerHTML = getStarsHTML(movie.rating);
        starsWrapper.appendChild(starsDiv);

        
        const btnReset = document.createElement('button');
        btnReset.id = resetBtnId;
        btnReset.className = 'btn btn-reset';
        btnReset.textContent = 'X'; 
        
        
        if (movie.rating > 0) {
            btnReset.style.display = 'inline-block';
        }

        btnReset.onclick = function() {
            handleReset(movie.id, starsId, resetBtnId, inputId);
        };

        starsWrapper.appendChild(btnReset); 
        cardContent.appendChild(starsWrapper); 

        
        card.appendChild(cardContent);
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadRatings();
    renderMovies();
});