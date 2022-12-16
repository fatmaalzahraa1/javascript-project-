var favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies')) || []
var container = document.querySelector(".movies")

if(favouriteMovies.length == 0){
    container.innerHTML += `
    <div class="empty">
        <h1>You did not add movie to favourite</h1>
    </div>
    `
}else{
favouriteMovies.forEach(function(movie,index){
container.innerHTML += `<div class="movie">
                            <div class="movie-image"> <span class="play">
                                <div class="close" onclick="remove(favouriteMovies,${index})">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
                                <div class="rating">
                                    <p>RATING</p>
                                <div class="stars">
                                    <div class="stars-in"> </div>
                                </div>
                            </div>
                        </div>`
})
}
function remove(favouriteMovies,index) {
    var mov = document.querySelectorAll(".movie") || []
    favouriteMovies.splice(index, 1);
    localStorage.setItem('favouriteMovies',JSON.stringify(favouriteMovies));
    location.reload();
}