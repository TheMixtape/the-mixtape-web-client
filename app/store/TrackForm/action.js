import {
  ON_YOUTUBE_LINK_CHANGE,
  ON_TITLE_CHANGE,
  ON_ARTIST_CHANGE,
  RECORD_TRACK,
} from './actionTypes';

/* eslint-disable import/prefer-default-export */

export const onYoutubeLinkChange = e => (dispatch) => {
  dispatch({
    type: ON_YOUTUBE_LINK_CHANGE,
    youtubeLink: e.target.value,
  });
};

export const onTitleChange = e => (dispatch) => {
  dispatch({
    type: ON_TITLE_CHANGE,
    title: e.target.value,
  });
};

export const onArtistChange = e => (dispatch) => {
  dispatch({
    type: ON_ARTIST_CHANGE,
    artist: e.target.value,
  });
};

export const recordTrack = e => (dispatch) => {
  e.preventDefault();
  /* eslint-disable no-undef, no-alert */
  alert('recording this track');
  /* eslint-enable */
  dispatch({
    type: RECORD_TRACK,
  });
};
