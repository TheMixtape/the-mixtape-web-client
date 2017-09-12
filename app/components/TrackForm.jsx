import React from 'react';
import PropTypes from 'prop-types';

const TrackForm = ({
  youtubeLink,
  title,
  artist,
  onYoutubeLinkChange,
  onTitleChange,
  onArtistChange,
  recordTrack,
}) => (
  <form>
    <div>
      <label htmlFor="youtubeLink">Youtube Embeded Link</label>
      <input
        id="youtubeLink"
        type="text"
        value={youtubeLink}
        onChange={onYoutubeLinkChange}
      />
    </div>
    <div>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={onTitleChange}
      />
    </div>
    <div>
      <label htmlFor="artist">Artist</label>
      <input
        id="artist"
        type="text"
        value={artist}
        onChange={onArtistChange}
      />
    </div>
    <input
      type="submit"
      value="Record"
      onClick={recordTrack}
    />
  </form>
);

TrackForm.propTypes = {
  youtubeLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  onYoutubeLinkChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onArtistChange: PropTypes.func.isRequired,
  recordTrack: PropTypes.func.isRequired,
};

export default TrackForm;
