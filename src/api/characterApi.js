import axios from 'axios';
import config from './config';

const { MARVEL_API_URL } = config;

const jobsService = {
  getCharactersApi(params = {}) {
    return axios.get(`${MARVEL_API_URL}/characters`, { params });
  },
};
export default jobsService;
