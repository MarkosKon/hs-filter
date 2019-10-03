/* eslint-disable react/jsx-props-no-spreading */
// This is not necessary, we could use the library from core
// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { FontAwesomeIcon as Base } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faTrash,
  faFilter,
  faSyncAlt,
  faEdit,
  faStar,
  faSave,
  faCopy,
  faBroom,
  faEllipsisV,
  faSearch,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

const FontAwesomeIcon = styled(Base)`
  ${space}
`;

const FaTimes = props => <FontAwesomeIcon {...props} icon={faTimes} />;
const FaPlus = props => <FontAwesomeIcon {...props} icon={faPlus} />;
const FaTrash = props => <FontAwesomeIcon {...props} icon={faTrash} />;
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
  FaTimes,
  FaPlus,
  FaTrash,
  FaFilter,
  FaSync,
  FaEdit,
  FaStar,
  FaSave,
  FaCopy,
  FaBroom,
  FaEllipsisV,
  FaSearch,
  FaMinus
};
