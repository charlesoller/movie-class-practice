class Movie {
    constructor(title, duration, rating){
        this.title = title;
        this.duration = duration;
        this.rating = rating;
        this.cast = [];
    }

    static actorInMovie(movie, actor){
        let cast = movie.cast;
        for(let name in cast){
            if(cast[name].name === actor){
                return true;
            }
        }
        // for(let i = 0; i < cast.length; i++){
        //     if(cast[i].name === actor){
        //         return true;
        //     }
        // }
        return false;
    }

    isLong = () => this.duration > 150 ? true : false;
    //     if(this.duration > 150){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    updateRating(newRating){
        this.rating = newRating;
    }
}

module.exports = Movie;
