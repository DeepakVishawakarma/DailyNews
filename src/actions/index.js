// import AsyncStorage from '@react-native-community/async-storage';
import route from '../common/route';
import axios from 'axios';
import Config from '../config';
import { FETCH_TRENDING_NEWS, FETCH_NEWS, FILTER_NEWS } from '../constants';
import { Toast } from 'native-base';

const getTrendingNews = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TRENDING_NEWS.FETCH_TRENDING_NEWS });
    let url = route.Route.topHeadlines + `?country=in&apiKey=${Config.apiKey}`;
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch({
        type: FETCH_TRENDING_NEWS.FETCH_TRENDING_NEWS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('getTrendingNews ~ error', error.response);
    dispatch({ type: FETCH_TRENDING_NEWS.FETCH_TRENDING_NEWS_FAILED });
  }
};

const getNews = () => async (dispatch, getState) => {
  const { newsReducer } = getState();
  const { tabs, tabIndex } = newsReducer;
  try {
    dispatch({ type: FETCH_NEWS.FETCH_NEWS });
    let url =
      route.Route.topHeadlines +
      `?country=in&category=${tabs[tabIndex].name}&apiKey=${Config.apiKey}`;
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch({ type: FETCH_NEWS.FETCH_NEWS_SUCCESS, payload: res.data });
    } else {
      Toast.show({
        text: res.message,
        type: 'danger',
        duration: 1000,
      });
    }
  } catch (error) {
    console.log('getNews ~ error', error.response);
    dispatch({ type: FETCH_NEWS.FETCH_NEWS_FAILED });
  }
};

const changeFilter = (index) => async (dispatch, getState) => {
  const { newsReducer } = getState();
  const { tabs } = newsReducer;
  try {
    dispatch({ type: FILTER_NEWS.FILTER_NEWS });
    let url =
      route.Route.topHeadlines +
      `?country=in&category=${tabs[index].name}&apiKey=${Config.apiKey}`;
    const res = await axios.get(url);
    console.log('changeFilter ~ res', res);
    if (res.status === 200) {
      dispatch({
        type: FILTER_NEWS.FILTER_NEWS_SUCCESS,
        payload: { data: res.data, index },
      });
    } else {
      Toast.show({
        text: res.message,
        type: 'danger',
        duration: 1000,
      });
    }
  } catch (error) {
    console.log('changeFilter ~ error', error.response);
    dispatch({ type: FILTER_NEWS.FILTER_NEWS_FAILED });
  }
};

export { getTrendingNews, getNews, changeFilter };
