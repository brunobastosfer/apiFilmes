import data from './movieData';

const TIMEOUT = 2000;


const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getMovies = () => (
  new Promise((resolve) => {
    simulateRequest(data)(resolve);
  })
);
