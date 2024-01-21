import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ZgIe26cOYi2c_VyZQ341yjS_KNh9I8kd4mbyHv45NjivmahY2oRybv5Ve3so5uJZeTQwGACmS2PR-fSsh9qpYi7TmrPLbA2AaugmcOrN0q3Q8Z6gFBpaseCXz-urZXYx',
  },
});
