import axios from "axios";

export const tvService = {
  getTVShowList,
};

async function getTVShowList() {
  let result;
  let url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/discover/tv?page=1`
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
