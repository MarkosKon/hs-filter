import React, { useState, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import styled from 'styled-components';

import { Flex } from './Primitives';
import { selectStyles } from '../layouts/react-select-styles';

const Container = styled(Flex)`
  & > * {
    min-width: 200px;
    margin: 2px 2px;
  }
  input {
    max-width: 250px;
  }
`;
const TextInput = styled.input`
  color: black;
  padding: 8px 14px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
`;

const toOption = string => ({
  label: string,
  value: string,
});

const DIYFilterForm = ({ handleSubmit, initialValues, children }) => {
  const [property, setProperty] = useState(toOption(initialValues.property));
  const [operation, setOperation] = useState(toOption(initialValues.operation));
  const [filterValue, setFilterValue] = useState(initialValues.filterValue);

  const { allOperationsJson, allCardPropertiesJson } = useStaticQuery(graphql`
    query operationsProperties {
      allOperationsJson {
        edges {
          node {
            operations
          }
        }
      }
      allCardPropertiesJson {
        edges {
          node {
            cardProperties
          }
        }
      }
    }
  `);
  const { operations } = allOperationsJson.edges[0].node;
  const { cardProperties } = allCardPropertiesJson.edges[0].node;

  // eslint-disable-next-line arrow-body-style
  const [cardPropertyOptions, operationOptions] = useMemo(() => {
    return [cardProperties.map(toOption), operations.map(toOption)];
  }, [operations, cardProperties]);

  const handleChange = (e) => {
    const { value } = e.target;
    const float = parseFloat(value);
    // Maybe just compare with typeof in the future?
    if (Number.isNaN(float)) {
      if (value === 'true') setFilterValue(true);
      else if (value === 'false') setFilterValue(false);
      else setFilterValue(value);
    } else setFilterValue(float);
  };

  return (
    <Container
      as="form"
      flexWrap="wrap"
      alignItems="center"
      color="black"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ property: property.value, operation: operation.value, filterValue });
      }}
    >
      <ReactSelect
        placeholder="property"
        aria-label="property"
        styles={selectStyles}
        options={cardPropertyOptions}
        value={property}
        onChange={e => setProperty(e)}
        required
      />
      <ReactSelect
        placeholder="operation"
        aria-label="operation"
        styles={selectStyles}
        options={operationOptions}
        value={operation}
        onChange={e => setOperation(e)}
      />
      <TextInput
        type="text"
        placeholder="value"
        aria-label="value"
        value={filterValue}
        onChange={handleChange}
        required
      />
      {children}
    </Container>
  );
};

DIYFilterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.shape({
    property: PropTypes.string,
    operation: PropTypes.string,
    filterValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  }),
};

DIYFilterForm.defaultProps = {
  initialValues: {
    property: 'race',
    operation: 'equals',
    filterValue: '',
  },
};

export default DIYFilterForm;
