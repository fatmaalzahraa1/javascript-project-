// Ola
var getmovies = JSON.parse(localStorage.getItem('movies')) || []
var favouriteMovies = []
var num = 0
var container = document.querySelector(".movies")


// Fatma
var singup=document.querySelector(".btn")
var welcome=document.getElementById("welcome")
var login=localStorage.getItem("login")
var dname=localStorage.getItem("name")
var nav = document.getElementById("nav")
if (login=="true"){
    // welcome.style.opacity="100%";
    welcome.innerHTML=`welcome ${dname}`
    singup.style.display = "none"
    var li = document.createElement("li")
    var a = document.createElement("a")
    a.className = "btn"
    a.innerText = "Signout"
    a.setAttribute("onclick","signout()")
    li.appendChild(a)
    nav.appendChild(li)

    // ola
    getmovies.forEach(function(movie){
        container.innerHTML += `<div class="movie" onclick = "viewMovie(${movie.id})">
                                    <div class="movie-image"> <span class="play">
                                        <div class="favourite" onclick="addToFavourite(${movie.id})">
                                            <i class="fa-solid fa-heart"></i>
                                        </div>
                                        <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
                                        <div class="rating">
                                            <p>RATING</p>
                                        <div class="stars">
                                        ${movie.rate} / 5
                                        </div>
                                    </div>
                                </div>`
                            
})
}else{
    getmovies.forEach(function(movie){
        container.innerHTML += `<div class="movie">
                                    <div class="movie-image"> <span class="">
                                        <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
                                        <div class="rating">
                                            <p>RATING</p>
                                        <div class="stars">
                                        ${movie.rate} / 5
                                        </div>
                                    </div>
                                </div>`
                            
})
}

// Aya
function search(id) {
    // var input = document.getElementById('search');
    // input=input.toLowerCase();
    // var x = document.getElementsByClassName('search-field');
      
    // for (i = 0; i < x.length; i++) { 
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         x[i].style.display="none";
    //     }
    //     else {
    //         x[i].style.display="block";                 
    //     }
    // }

   let search = document.getElementById('search-field')
   
   search.focus()
   search.placeholder='waiting your search now...';
   search.value='';
}

function searchmovies(value){

  let table ='';

 for(let i=0; i < getmovies.length; i++){
     
    if(getmovies[i].name.includes(value)){
        table += `<div class="movie" onclick = "viewMovie(${getmovies[i].id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${getmovies[i].id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${getmovies[i].name}</span></span> <a href="#"><img src="css/images/${getmovies[i].img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${getmovies[i].rate} / 5
            </div>
        </div>
    </div>`
       
    }
         
        
     
    
        }
        
      container.innerHTML = table;

}

function sortAsen(){

    var sorting = getmovies.sort(function(a, b) {
        return parseFloat(a.rate) - parseFloat(b.rate);
    });
    
    let table ='';

    for(let i=0; i < sorting.length; i++){
    
        table += `<div class="movie" onclick = "viewMovie(${sorting[i].id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${sorting[i].id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${sorting[i].name}</span></span> <a href="#"><img src="css/images/${sorting[i].img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${sorting[i].rate} / 5
            </div>
        </div>
    </div>` 
        }
           
         container.innerHTML = table;   
}    
    
    function sortDesn(){
    
        var sorting = getmovies.reverse(function(a, b) {
            return parseFloat(a.rate) - parseFloat(b.rate);
        });
    
        let table ='';

        for(let i=0; i < sorting.length; i++){
        
            table += `<div class="movie" onclick = "viewMovie(${sorting[i].id})">
            <div class="movie-image"> <span class="play">
                <div class="favourite" onclick="addToFavourite(${sorting[i].id})">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <span class="name">${sorting[i].name}</span></span> <a href="#"><img src="css/images/${sorting[i].img}" alt="" /></a></div>
                <div class="rating">
                    <p>RATING</p>
                <div class="stars">
                ${sorting[i].rate} / 5
                </div>
            </div>
        </div>` 
            }
            
            container.innerHTML = table;       
}


// ola
// rate filter
function show(num){
    container.innerHTML = ""
    getmovies.forEach(function(movie){
        if(movie.rate == num){
        container.innerHTML += `<div class="movie" onclick = "viewMovie(${movie.id})">
                                    <div class="movie-image"> <span class="play">
                                        <div class="favourite" onclick="addToFavourite(${movie.id})">
                                            <i class="fa-solid fa-heart"></i>
                                        </div>
                                        <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
                                        <div class="rating">
                                            <p>RATING</p>
                                        <div class="stars">
                                        ${movie.rate} / 5
                                        </div>
                                    </div>
                                </div>`
        }
    })
}


function addToFavourite(id){
    
    getmovies.forEach(movie => {
        if(movie.id == id && favouriteMovies.length == 0){
            favouriteMovies.push(movie)
        }else if(movie.id == id && favouriteMovies.indexOf(movie.id) == -1){
            favouriteMovies.push(movie)
        }
    });

    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
}

function viewMovie(id){
    localStorage.setItem("viewMovie", id);
    window.open("describetion.html","_self")
}


// fatma

// filter ->action

function action(){
    var a1 = getmovies.filter(d => d.category == "action");
    container.innerHTML = ""
    a1.forEach(function d (movie){
        container.innerHTML+=`<div class="movie" onclick = "viewMovie(${movie.id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${movie.id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${movie.rate} / 5
            </div>
        </div>
    </div>`
    // console.log(movie);
    
    })}
    
    // filter ->romance
    
    function romance(){
    container.innerHTML = ""
    var a = getmovies.filter(d => d.category == "romance");
    a.forEach(function d (movie){
        container.innerHTML+=`<div class="movie" onclick = "viewMovie(${movie.id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${movie.id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${movie.rate} / 5
            </div>
        </div>
    </div>`
    
    // console.log(movie);
    
    })}
    
    // filter ->comedy
    
    function comedy(){
    container.innerHTML = ""
    var ar = getmovies.filter(d => d.category == "comedy");
    ar.forEach(function d (movie){
        container.innerHTML+=`<div class="movie" onclick = "viewMovie(${movie.id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${movie.id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${movie.rate} / 5
            </div>
        </div>
    </div>`
    // console.log(movie);
    
    })}
    
    // filter ->animation
    
    function animation(){
    container.innerHTML = ""
    var arr = getmovies.filter(d => d.category == "animation");
    arr.forEach(function d (movie){
        container.innerHTML+=`<div class="movie" onclick = "viewMovie(${movie.id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${movie.id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${movie.rate} / 5
            </div>
        </div>
    </div>`
    // console.log(movie);
    
    })}
    
    // filter ->war
    function war(){
    container.innerHTML = ""
    var arr1 = getmovies.filter(d => d.category == "war");
    arr1.forEach(function d (movie){
        container.innerHTML+=`<div class="movie" onclick = "viewMovie(${movie.id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${movie.id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${movie.rate} / 5
            </div>
        </div>
    </div>`
    // console.log(movie);
    
    })}
    
    // filter ->horror
    
    function horror(){
    container.innerHTML = ""
    var arr2 = getmovies.filter(d => d.category == "horror");
    arr2.forEach(function d (movie){
        container.innerHTML+=`<div class="movie" onclick = "viewMovie(${movie.id})">
        <div class="movie-image"> <span class="play">
            <div class="favourite" onclick="addToFavourite(${movie.id})">
                <i class="fa-solid fa-heart"></i>
            </div>
            <span class="name">${movie.name}</span></span> <a href="#"><img src="css/images/${movie.img}" alt="" /></a></div>
            <div class="rating">
                <p>RATING</p>
            <div class="stars">
            ${movie.rate} / 5
            </div>
        </div>
    </div>`
    // console.log(movie);
    
    })}

function signout(){
    localStorage.setItem("login",false)
    window.open("./index.html","_self")
}