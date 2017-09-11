import {
  ON_YOUTUBE_LINK_CHANGE,
  ON_TITLE_CHANGE,
  ON_ARTIST_CHANGE,
  RECORD_TRACK,
} from './actionTypes';
import createReducer from '../../utils/redux';

const initialState = {
  youtubeLink: '',
  title: '',
  artist: '',
};

const reducers = {
  [ON_YOUTUBE_LINK_CHANGE]: (state, { youtubeLink }) => ({ ...state, youtubeLink }),
  [ON_TITLE_CHANGE]: (state, { title }) => ({ ...state, title }),
  [ON_ARTIST_CHANGE]: (state, { artist }) => ({ ...state, artist }),
  [RECORD_TRACK]: state => (state),
};

export default createReducer(reducers, initialState);
