//My code
class Movie{
    constructor(title, princess, yearReleased){
        this.title = title;
        this.princess = princess;  
        this.yearReleased = yearReleased;
    
     this.age = function() {
       // return new Date().getFullYear() - this.yearReleased;
       console.log(new Date().getFullYear() - this.yearReleased);

}
}}


class UI {
    
    addMovieToList(movie) {  // need to add if else statement 
       
 
   

            let html = '<div class="display-movie"><div class="display-title">%title%</div><div class = "display-princess">%princess%</div><div class="display-yearReleased">%yearReleased%</div><div class="display-age"> %age% </div><div class = "remove-movie">X</div>'
            const currentYear = new Date().getFullYear();

        const age = currentYear - yearReleased.value;

            let newHtml = html.replace('%title%', movie.title);
            newHtml = newHtml.replace('%princess%', movie.princess);
            newHtml = newHtml.replace('%yearReleased%', movie.yearReleased); 
            newHtml = newHtml.replace('%age%', age); 
            document.querySelector(".display").insertAdjacentHTML('beforeend', newHtml); 
            console.log(age);
 }
        
        

    clearFields () {
        document.getElementById('title').value = "";
        document.getElementById('princess').value = "";
        document.getElementById('yearReleased').value = "";
    }  

    deleteMovie(target) {    
        if (target.className === "remove-movie") {
            target.parentElement.remove();
        }
    } 
}


document.getElementById('movie-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    
     const princess = document.getElementById('princess').value;
    const yearReleased = document.getElementById('yearReleased').value;

    const movie = new Movie(title, princess, yearReleased);
   

    const ui = new UI();
    console.log(ui);
    if(title === '' || princess === '' || yearReleased === ''){

        alert('try again');

    }else{
        ui.addMovieToList(movie);
        ui.clearFields(); 
    }

    
    e.preventDefault();
});

document.querySelector(".display").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteMovie(e.target);
    ui.clearFields();
    e.preventDefault();
});



///display calculate age NOT year released
//style the remove element because I'm not an animal