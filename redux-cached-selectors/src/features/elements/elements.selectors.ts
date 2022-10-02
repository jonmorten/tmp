import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

type Element = {
  id: string;
  name: string;
};

const count = false;

const getThangs = (state: RootState) => state.thangs.thangs;

const getThings = (state: RootState) => state.things.things;

export const getElementIds = createSelector(
  [getThangs, getThings],
  (thangs, things) => {
    count && console.count("getElementIds");
    return [...Object.keys(thangs), ...Object.keys(things)];
  }
);

const getElements = createSelector([getThangs, getThings], (thangs, things) => {
  count && console.count("getElements");
  const elements: Record<string, Element> = {};
  Object.keys(thangs).forEach((id) => (elements[id] = thangs[id]));
  Object.keys(things).forEach((id) => (elements[id] = things[id]));
  return elements;
});

const getElementId = (_state: RootState, elementId: string) => elementId;

export const getElement = createSelector(
  [getElements, getElementId],
  (elements, id) => {
    count && console.count("getElement");
    return elements[id];
  }
);

export const getElementFactory = (elementId: string) => {
  count && console.count("getElementFactory");
  return createSelector([getElements], (elements) => elements[elementId]);
};
