// This is not necessary, we could use the library from core
// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { FontAwesomeIcon as Base } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlus,
  faLinkedin,
  faSkype,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart,
  faLink,
  faBars,
  faTimes,
  faPlus,
  faTrash,
  faCode,
  faToggleOn,
  faFilter,
  faSyncAlt,
  faEdit,
  faStar,
  faSave,
  faCopy,
  faBroom,
  faEllipsisV,
  faSearch,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

const FontAwesomeIcon = styled(Base)`
  ${space}
`;

const Facebook = props => <FontAwesomeIcon {...props} icon={faFacebookF} />;
const GooglePlus = props => <FontAwesomeIcon {...props} icon={faGooglePlus} />;
const Linkedin = props => <FontAwesomeIcon {...props} icon={faLinkedin} />;
const Skype = props => <FontAwesomeIcon {...props} icon={faSkype} />;
const Twitter = props => <FontAwesomeIcon {...props} icon={faTwitter} />;
const Instagram = props => <FontAwesomeIcon {...props} icon={faInstagram} />;
const Envelope = props => <FontAwesomeIcon {...props} icon={faEnvelope} />;
const Heart = props => <FontAwesomeIcon {...props} icon={faHeart} />;
const FaLink = props => <FontAwesomeIcon {...props} icon={faLink} />;
const FaBars = props => <FontAwesomeIcon {...props} icon={faBars} />;
const FaTimes = props => <FontAwesomeIcon {...props} icon={faTimes} />;
const FaPlus = props => <FontAwesomeIcon {...props} icon={faPlus} />;
const FaTrash = props => <FontAwesomeIcon {...props} icon={faTrash} />;
const FaCode = props => <FontAwesomeIcon {...props} icon={faCode} />;
const FaToggleOn = props => <FontAwesomeIcon {...props} icon={faToggleOn} />;
const FaFilter = props => <FontAwesomeIcon {...props} icon={faFilter} />;
const FaSync = props => <FontAwesomeIcon {...props} icon={faSyncAlt} />;
const FaEdit = props => <FontAwesomeIcon {...props} icon={faEdit} />;
const FaStar = props => <FontAwesomeIcon {...props} icon={faStar} />;
const FaSave = props => <FontAwesomeIcon {...props} icon={faSave} />;
const FaCopy = props => <FontAwesomeIcon {...props} icon={faCopy} />;
const FaBroom = props => <FontAwesomeIcon {...props} icon={faBroom} />;
const FaEllipsisV = props => <FontAwesomeIcon {...props} icon={faEllipsisV} />;
const FaSearch = props => <FontAwesomeIcon {...props} icon={faSearch} />;
const FaMinus = props => <FontAwesomeIcon {...props} icon={faMinus} />;

export {
  Facebook,
  GooglePlus,
  Linkedin,
  Skype,
  Twitter,
  Instagram,
  Envelope,
  Heart,
  FaLink,
  FaBars,
  FaTimes,
  FaPlus,
  FaTrash,
  FaCode,
  FaToggleOn,
  FaFilter,
  FaSync,
  FaEdit,
  FaStar,
  FaSave,
  FaCopy,
  FaBroom,
  FaEllipsisV,
  FaSearch,
  FaMinus,
};
