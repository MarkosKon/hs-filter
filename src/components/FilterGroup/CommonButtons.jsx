import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Primitives";
import { FaPlus } from "../Icons";

const CommonButton = ({ openModal, filterGroup }) => (
  <>
    <Button
      order={2}
      variant="paradisePink"
      mr={3}
      aria-label="Add filter or group"
      data-microtip-position="bottom-left"
      role="tooltip"
      onClick={() => openModal(filterGroup)}
    >
      <FaPlus />
    </Button>
  </>
);

CommonButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  filterGroup: PropTypes.shape({
    type: PropTypes.string,
    operator: PropTypes.string,
    children: PropTypes.array
  }).isRequired
};

export default CommonButton;
