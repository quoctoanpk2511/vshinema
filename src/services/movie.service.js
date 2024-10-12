import axios from "axios";

export const movieService = {
  // TV
  getTVTrend,
  getTVAiringToday,
  getTVOnTheAir,
  getTVPopular,
  getTVTopRated,
  // Movie
  getMovieTrend,
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
};

// TV Series
// Get the trending TV series
async function getTVTrend(periodTime) {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/trending/tv/${periodTime}`;
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of TV shows airing today
async function getTVAiringToday() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/tv/airing_today`
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of TV shows that air in the next 7 days
async function getTVOnTheAir() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/tv/on_the_air`
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of TV shows ordered by popularity
async function getTVPopular() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/tv/popular`
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of TV shows ordered by rating
async function getTVTopRated() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/tv/top_rated`
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Movies
// Get the trending movies
async function getMovieTrend(periodTime) {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/trending/movie/${periodTime}`;
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of movies that are currently in theatres
async function getMovieNowPlaying() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/movie/now_playing`;
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of movies ordered by popularity
async function getMoviePopular() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/movie/popular`;
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of movies ordered by rating
async function getMovieTopRated() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/movie/top_rated`;
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}

// Get a list of movies that are being released soon
async function getMovieUpComing() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/movie/upcoming`;
  let options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = { success: true, data: response.data };
    })
    .catch(err => {
      result = { success: false, message: err }
    });
  return result;
}
