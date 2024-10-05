import axios from "axios";

export const movieService = {
  getTVTrendDay,
  getTVOnTheAir,
  getTVPopular,
  getTVTopRated,
  getMovieTrendDay,
};

// TV Series

async function getTVTrendDay() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/trending/tv/day`;
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

async function getMovieTrendDay() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/trending/movie/day`;
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
