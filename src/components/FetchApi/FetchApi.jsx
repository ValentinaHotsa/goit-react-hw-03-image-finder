import axios from 'axios';
const API_KEY = '40344925-ced1c275c1243101e1d196b12';
axios.defaults.baseURL = 'https://pixabay.com/api/?';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: '12',
};
async function fetchImage(galleryImg, page) {
  try {
    const { data } = await axios(`q=${galleryImg}&page=${page}`);
    console.log(data);
  } catch (error) {}
}
export { fetchImage };
// import axios from 'axios';
// const BASE_URL = 'https://pixabay.com/api/';
// let numberPage = 1;

// async function search(userSearch) {
//   const parameters = {
//     key: '40344925-ced1c275c1243101e1d196b12',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     q: userSearch,
//     per_page: '12',
//     page: numberPage,
//   };

//   try {
//     const { response } = await axios.get(`${BASE_URL}?${parameters}`);
//     const result = await response.data.hits.map(item => ({
//       id: item.id,
//       webformatURL: item.webformatURL,
//       largeImageURL: item.largeImageURL,
//     }));

//     return result;
//   } catch (error) {}
// }
// export { search };
