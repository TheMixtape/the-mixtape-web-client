import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrackForm from '../../components/TrackForm';
import { onYoutubeLinkChange, onTitleChange, onArtistChange, recordTrack } from '../../store/TrackForm/action';
import { getYoutubeLink, getTitle, getArtist } from '../../store/TrackForm/selectors';

const HomePage = ({ match, location, ...otherProps }) => (
  <div>
    <div>{JSON.stringify(match)}</div>
    <div>{JSON.stringify(location)}</div>
    <div>HomePage</div>
    <TrackForm {...otherProps} />
  </div>
);

/* eslint-disable react/forbid-prop-types */
HomePage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
/* eslint-enable */

const ConnectedHomePage = connect(
  state => ({
    youtubeLink: getYoutubeLink(state),
    title: getTitle(state),
    artist: getArtist(state),
  }),
  {
    onYoutubeLinkChange,
    onTitleChange,
    onArtistChange,
    recordTrack,
  },
)(HomePage);

export default ConnectedHomePage;
