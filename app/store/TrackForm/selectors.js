import { createSelector } from 'reselect';
import fp from 'lodash/fp';

const getTrackFormState = fp.get('trackForm');

export const getYoutubeLink = createSelector(
  getTrackFormState,
  fp.get('youtubeLink'),
);

export const getTitle = createSelector(
  getTrackFormState,
  fp.get('title'),
);

export const getArtist = createSelector(
  getTrackFormState,
  fp.get('artist'),
);
