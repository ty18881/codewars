/**
 * Interview Cake training exercise.
 * The premise is to identify two movies where the sum of their running time
 * equals the length of the flight.
 * INPUT:  flightLength and array of movieRunTimes
 * OUTPUT:  TRUE if there are two movies that match the flight's length
 *          FALSE otherwise
 * 
 * NOTES:  1.  for speed not memory usage as per the directions.
 *          2.  don't duplicate movies.
 */

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Movie lengths we've seen so far
    const movieLengthsSeen = new Set();
  
    for (let i = 0; i < movieLengths.length; i++) {
      const firstMovieLength = movieLengths[i];
  
      const matchingSecondMovieLength = flightLength - firstMovieLength;
      if (movieLengthsSeen.has(matchingSecondMovieLength)) {
        return true;
      }
  
      movieLengthsSeen.add(firstMovieLength);
    }
  
    // We never found a match, so return false
    return false;
  }


  console.log(canTwoMoviesFillFlight([90, 90], 180));

  console.log(canTwoMoviesFillFlight([85, 90], 180));

