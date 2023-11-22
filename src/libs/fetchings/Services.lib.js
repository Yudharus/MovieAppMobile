import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from "../../configs/axios/Axios.configs";
import { ToastAndroid } from 'react-native';

const GetNowPlaying = async (page) => {
  try {

    const response = await Axios.get(`/movie/now_playing?language=en-US&page=${page}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQyZjhkMWU3YjMzZDE4NDFhYmJjMDM1NGI4Y2I4NSIsInN1YiI6IjYzYmFhZjhhYWU2ZjA5M2M0ZTY1Y2YyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CmKgtX7Aw1gDdvn6iPx2Zsmt0lvDLY0OULi4JRdPms`,
      },
    });
    return response.data.results
  } catch (error) {
    console.log(error)
    return false;
  }
};

const GetPopular = async (page) => {
  try {

    const response = await Axios.get(`/movie/popular?language=en-US&page=${page}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQyZjhkMWU3YjMzZDE4NDFhYmJjMDM1NGI4Y2I4NSIsInN1YiI6IjYzYmFhZjhhYWU2ZjA5M2M0ZTY1Y2YyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CmKgtX7Aw1gDdvn6iPx2Zsmt0lvDLY0OULi4JRdPms`,
      },
    });
    return response.data.results
  } catch (error) {
    console.log(error)
    return false;
  }
};

const GetTopRated = async (page) => {
  try {

    const response = await Axios.get(`/movie/top_rated?language=en-US&page=${page}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQyZjhkMWU3YjMzZDE4NDFhYmJjMDM1NGI4Y2I4NSIsInN1YiI6IjYzYmFhZjhhYWU2ZjA5M2M0ZTY1Y2YyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CmKgtX7Aw1gDdvn6iPx2Zsmt0lvDLY0OULi4JRdPms`,
      },
    });
    return response.data.results
  } catch (error) {
    console.log(error)
    return false;
  }
};

const GetDetail = async (id) => {
  try {

    const response = await Axios.get(`/movie/${id}?language=en-US`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQyZjhkMWU3YjMzZDE4NDFhYmJjMDM1NGI4Y2I4NSIsInN1YiI6IjYzYmFhZjhhYWU2ZjA5M2M0ZTY1Y2YyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CmKgtX7Aw1gDdvn6iPx2Zsmt0lvDLY0OULi4JRdPms`,
      },
    });
    return response.data
  } catch (error) {
    console.log(error)
    return false;
  }
};

const GetRecommendation = async (id) => {
  try {

    const response = await Axios.get(`/movie/${id}/recommendations?language=en-US&page=1`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQyZjhkMWU3YjMzZDE4NDFhYmJjMDM1NGI4Y2I4NSIsInN1YiI6IjYzYmFhZjhhYWU2ZjA5M2M0ZTY1Y2YyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CmKgtX7Aw1gDdvn6iPx2Zsmt0lvDLY0OULi4JRdPms`,
      },
    });
    return response.data.results
  } catch (error) {
    console.log(error)
    return false;
  }
};

export {
  GetNowPlaying,
  GetPopular,
  GetTopRated,
  GetDetail,
  GetRecommendation
};
