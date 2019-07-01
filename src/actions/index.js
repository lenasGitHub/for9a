import axiosService from "../services/axios-service";
import axios from "axios";
import {
  FETCH_RENTAL_BY_ID_SCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SCCESS,
  FETCH_RENTAL_BY_ID
} from "./types";

const axiosInstance = axiosService.getInstance();

const fetchPostByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};
const fetchRentalByIdSccess = item => {
  return {
    type: FETCH_RENTAL_BY_ID,
    item
  };
};

const fetchRentalsSccess = items => {
  return {
    type: FETCH_RENTAL_SCCESS,
    items
  };
};

export const fetchPosts = () => {
  return dispatch => {
    axiosInstance
      .get("/filter")
      .then(res => res.data.result.items)
      .then(items => dispatch(fetchRentalsSccess(items)));
  };
};

export const fetchPostById = postId => {
  return dispatch => {
    axiosInstance
      .get(`/filter?id=${postId}&full=1`)
      .then(res => {
        console.log(res.data.result.items);
        return res.data.result.items.find(i => i.id == postId);
      })
      .then(item => {
        dispatch(fetchRentalByIdSccess(item));
      });
  };
};
