import moment from 'moment';

export default {
  filters: {
    dateTimeFormat(value, format = 'DD-MM-YYYY') {
      if (value) {
        return moment(String(value)).format(format);
      }
      return '';
    },
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      }
      return text;
    },
  },
};
