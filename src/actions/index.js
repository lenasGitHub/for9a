import axiosService from "../services/axios-service";
import axios from "axios";
import {
  FETCH_RENTAL_BY_ID_SCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SCCESS
} from "./types";

const axiosInstance = axiosService.getInstance();

const fetchPostByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};
const fetchRentalByIdSccess = item => {
  return {
    type: FETCH_RENTAL_BY_ID_SCCESS,
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
  return function(dispatch) {
    dispatch(fetchPostByIdInit());

    axios.get(`/${postId}`).then(item => {
      dispatch(fetchRentalByIdSccess(item.data));
    });
  };
};
