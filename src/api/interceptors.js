import axios from 'axios';
import MD5 from 'crypto-js/md5';
import Vue from 'vue';
import config from './config';

const { PRIVATE_KEY, PUBLIC_KEY } = config;

let loading = null;
const openLoading = () => {
  loading = Vue.prototype.$buefy.loading.open({
    container: null,
  });
};
const closeLoading = () => {
  loading.close();
};

export default function execute() {
  axios.interceptors.request.use(
    (request) => {
      openLoading();
      const ts = Date.now();
      // eslint-disable-next-line no-param-reassign
      request.params = {
        ...request.params,
        apikey: PUBLIC_KEY,
        ts,
        hash: MD5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
          .toString(),
      };
      return request;
    },
    (err) => {
      closeLoading();
      return Promise.reject(err);
    },
  );
  axios.interceptors.response.use(
    (response) => {
      closeLoading();
      return response;
    },
    (err) => {
      closeLoading();
      return Promise.reject(err);
    },
  );
}
