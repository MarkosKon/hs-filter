/* eslint-disable no-param-reassign */
import cloneDeep from "lodash.clonedeep";
import createId from "uuid/v4";

import { idEquals, isGroup } from "../utils/compare";

// Constants
const ADD = "hs-filter/live-filters/ADD";
const ADD_GROUP = "hs-filter/live-filters/ADD_GROUP";
const UPDATE = "hs-filter/live-filters/UPDATE";
const REMOVE = "hs-filter/live-filters/REMOVE";
const TOGGLE_OPERATOR = "hs-filter/live-filters/TOGGLE_OPERATOR";
const REPLACE = "hs-filter/live-filters/REPLACE";

// Action Creators
export const add = payload => ({ type: ADD, payload });
export const addGroup = payload => ({ type: ADD_GROUP, payload });
export const update = payload => ({ type: UPDATE, payload });
export const remove = payload => ({ type: REMOVE, payload });
export const toggleOperator = payload => ({ type: TOGGLE_OPERATOR, payload });
export const replace = payload => ({ type: REPLACE, payload });

// Utils
// shallow copy, bugs everywhere if you use this ;)
// const getCopy = obj => Object.assign({}, obj);
const getCopy = obj => cloneDeep(obj);
const toggle = ({ operator }) => (operator === "AND" ? "OR" : "AND");

// Reducer
export default (state = {}, action = {}) => {
  const { type, payload } = action;
  const copy = getCopy(state);
  // ADD
  if (type === ADD) {
    const { filterGroup, thingToAdd } = payload;
    const hasThatFilterGroupId = idEquals(filterGroup.id);
    const addNewChild = child => {
      if (isGroup(child)) {
        if (hasThatFilterGroupId(child))
          child.children = child.children.concat(thingToAdd);
        else child.children.forEach(addNewChild);
      }
    };
    [copy].forEach(addNewChild);
    return copy;
  }
  // ADD_GROUP
  if (type === ADD_GROUP) {
    const { filterGroup, thingToAdd } = payload;
    const thingToAddCopy = cloneDeep(thingToAdd);

    const resetIds = child => {
      child.id = createId();
      if (isGroup(child)) child.children.forEach(resetIds);
    };
    const hasThatFilterGroupId = idEquals(filterGroup.id);
    const addNewChild = child => {
      if (isGroup(child)) {
        if (hasThatFilterGroupId(child))
          child.children = child.children.concat(thingToAddCopy);
        else child.children.forEach(addNewChild);
      }
    };
    [thingToAddCopy].forEach(resetIds);
    [copy].forEach(addNewChild);
    return copy;
  }
  // UPDATE
  if (type === UPDATE) {
    const { object } = payload;
    const hasThatId = idEquals(object.id);
    const updateFilter = (child, index, array) => {
      if (isGroup(child)) child.children.forEach(updateFilter);
      else if (hasThatId(child)) array[index] = object;
    };
    copy.children.forEach(updateFilter);
    return copy;
  }
  // REMOVE
  if (type === REMOVE) {
    const { object } = payload;
    const hasThatId = idEquals(object.id);
    const removeFilterThing = (child, index, array) => {
      if (hasThatId(child)) array.splice(index, 1);
      else if (isGroup(child)) {
        if (hasThatId(child)) array.splice(index, 1);
        else child.children.forEach(removeFilterThing);
      }
    };
    copy.children.forEach(removeFilterThing);
    return copy;
  }
  // TOGGLE
  if (type === TOGGLE_OPERATOR) {
    const { filterGroup } = payload;
    const hasThatFilterGroupId = idEquals(filterGroup.id);
    const toggleFilterGroup = child => {
      if (isGroup(child)) {
        if (hasThatFilterGroupId(child)) child.operator = toggle(child);
        else child.children.forEach(toggleFilterGroup);
      }
    };
    [copy].forEach(toggleFilterGroup);
    return copy;
  }
  // REPLACE
  // Read about object assignment (=) vs shallow copy(Object.assign) vs deep copy(lodash.clonedeep)
  // and explain why the commented out block works without problems if we don't copy it.
  // if (type === REPLACE) {
  //   return payload;
  // }
  if (type === REPLACE) {
    const payloadCopy = getCopy(payload);
    return payloadCopy;
  }
  return state;
};
