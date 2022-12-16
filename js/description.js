var getmovies = JSON.parse(localStorage.getItem('movies')) || []
var viewMovie = localStorage.getItem('viewMovie')
var container = document.querySelector(".movie-detail")
var title = document.getElementById("title")
var slider = document.getElementById("slider")

                title.innerHTML = getmovies[viewMovie].name
                container.innerHTML += `
                <div class="container">

                <figure class="movie-detail-banner">

                    <img src="./css/images/${getmovies[viewMovie].img}" alt="Free guy movie poster">

                </figure>

                <div class="movie-detail-content">

                    <h1 class="h1 detail-title">
                    ${getmovies[viewMovie].name}
                    </h1>

                    <div class="meta-wrapper">

                    <div class="badge-wrapper">

                        <div class="badge badge-outline">5</div>
                    </div>

                    <div class="ganre-wrapper">
                        <!-- <a href="#">Comedy,</a> -->

                        <a href="#">${getmovies[viewMovie].category},</a>

                        <!-- <a href="#">Adventure,</a> -->

                        <!-- <a href="#">Science Fiction</a> -->
                    </div>

                    <div class="date-time">

                        <div>
                        <ion-icon name="calendar-outline"></ion-icon>

                        <time datetime="2021">2022</time>
                        </div>

                        <div>
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT115M">115 min</time>
                        </div>

                    </div>

                    </div>

                    <p class="storyline">
                    ${getmovies[viewMovie].description}
                    </p>


        `
        

        


slider.oninput = function(){
    getmovies[viewMovie].rate = this.value
}

function editRate(){
console.log(getmovies[viewMovie].rate);

    localStorage.setItem("movies", JSON.stringify(getmovies));
    
    window.open("index.html","_self")
}