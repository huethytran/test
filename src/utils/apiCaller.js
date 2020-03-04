import axios from 'axios';
import { api_url } from '../core/constants';

export function callApiLogin(body) {
  return axios({
    method: 'POST',
    data: body,
    url: `https://cors-anywhere.herokuapp.com/${api_url}/user/login`
  });
}
export function callApiRegister(body) {
    return axios({
      method: 'POST',
      data: body,
      url: `https://cors-anywhere.herokuapp.com/${api_url}/user/register`
    });
  }
  export function callApiGetInfo() {
    return axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('usertoken')}`
      },
      url: `https://cors-anywhere.herokuapp.com/${api_url}/user/self`
    });
  }