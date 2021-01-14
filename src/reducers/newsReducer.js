import produce, { enableES5 } from 'immer';
import {
  ON_SCREEN_CHANGED,
  FETCH_TRENDING_NEWS,
  FETCH_NEWS,
  FILTER_NEWS,
} from '../constants';

const initialState = {
  news: [],
  trendingLoading: false,
  loading: false,
  trendingNews: [],
  tabs: [
    { id: 1, name: 'Business', visible: true },
    { id: 2, name: 'Entertainment', visible: true },
    { id: 3, name: 'Health', visible: true },
    { id: 4, name: 'Science', visible: true },
    { id: 5, name: 'Sports', visible: true },
    { id: 6, name: 'Technology', visible: true },
  ],
  tabIndex: 0,
};

const reducer = (state = initialState, action) => {
  enableES5();
  const { payload, type } = action;
  return produce(state, (draft) => {
    switch (type) {
      case ON_SCREEN_CHANGED:
        draft.currentScreen = payload.currentScreen;
        return draft;

      //get trending News
      case FETCH_TRENDING_NEWS.FETCH_TRENDING_NEWS: {
        draft.trendingLoading = true;
        return draft;
      }
      case FETCH_TRENDING_NEWS.FETCH_TRENDING_NEWS_SUCCESS: {
        console.log('FETCH_TRENDING_NEWS returnproduce ~ payload', payload);
        const { articles, totalResults } = payload;
        draft.trendingNews = articles;
        draft.count = totalResults;
        draft.trendingLoading = false;
        return draft;
      }
      case FETCH_TRENDING_NEWS.FETCH_TRENDING_NEWS_FAILED: {
        draft.trendingLoading = false;
        return draft;
      }

      //get News
      case FETCH_NEWS.FETCH_NEWS: {
        draft.loading = true;
        return draft;
      }
      case FETCH_NEWS.FETCH_NEWS_SUCCESS: {
        const { articles, totalResults } = payload;
        draft.news = articles;
        draft.count = totalResults;
        draft.loading = false;
        return draft;
      }
      case FETCH_NEWS.FETCH_NEWS_FAILED: {
        draft.loading = false;
        return draft;
      }

      //filter News
      case FILTER_NEWS.FILTER_NEWS: {
        draft.loading = true;
        return draft;
      }
      case FILTER_NEWS.FILTER_NEWS_SUCCESS: {
        console.log('returnproduce ~ payload', payload);
        const { data, index } = payload;
        const { articles, totalResults } = data;
        draft.news = articles;
        draft.count = totalResults;
        draft.loading = false;
        draft.tabIndex = index;
        return draft;
      }
      case FILTER_NEWS.FILTER_NEWS_FAILED: {
        draft.loading = false;
        return draft;
      }

      default:
        return state;
    }
  });
};

export default reducer;
