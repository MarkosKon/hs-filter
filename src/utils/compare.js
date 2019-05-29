import compareFieldToValue, {
  equals,
  notEquals,
  lessThan,
  greaterThan,
} from 'compare-object-field';

// Equals
const operationEquals = compareFieldToValue(equals);
const typeEquals = operationEquals('type');
const operatorEquals = operationEquals('operator');
export const hasAndOperator = operatorEquals('AND');
export const hasOrOperator = operatorEquals('OR');
export const idEquals = operationEquals('id');
export const isGroup = typeEquals('GROUP');
export const isFilter = typeEquals('FILTER');

// Not equals
export const hasChildren = compareFieldToValue(notEquals)('children')(undefined);

// Less than
const operationLessThan = compareFieldToValue(lessThan);
export const setLessThan9 = operationLessThan('set')(9);

// Greater than
const operationGreaterThan = compareFieldToValue(greaterThan);
export const lengthGreaterThan0 = operationGreaterThan('length')(0);
