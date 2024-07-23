const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/test');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
   
  }


const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    year: Number,
    isWatched: Boolean
})

const Movie = mongoose.model("Movie",movieSchema);

const Avengers = new Movie({
    name: "Avengers",
    year: 2015,
    ratings: 8,
    isWatched: false
});

const ironman = new Movie({ 
    name: "Ironman",
    year: 2011,
    rating: 8.5,
    isWatched: true
})
Promise.all([Avengers.save(), ironman.save()]) 
  .then(() => console.log('Sample movies saved'))
  .catch(err => console.error('Error saving movies:', err.message));


const updateHighRatedMovies = async () => {
    try {
      const result = await Movie.updateMany({ rating: { $gte: 8 } }, { $inc: { rating: 0.1 } }); // Increment rating by 0.1
      console.log(`${result.modifiedCount} movie(s) rating increased (movies with rating >= 8)`);
    } catch (err) {
      console.error('Error updating high-rated movies:', err.message);
    }
  };
console.log(Avengers);
console.log(ironman);