import { StyleSheet } from 'react-native';
import _ from 'lodash';

const GAP = 4;
const LOOPS = 26;

const generateSpace = (direction, type) => {
  let obj = {};
  for (let i = 0; i <= LOOPS; i++) {
    obj = {
      ...obj,
      [`${type.charAt(0)}${direction.charAt(0)}${i * GAP}`]: {
        [`${type}${_.capitalize(direction)}`]: i * GAP,
      },
    };
  }
  return obj;
};

export const spacingStyles = StyleSheet.create({
  ...generateSpace('left', 'margin'),
  ...generateSpace('right', 'margin'),
  ...generateSpace('top', 'margin'),
  ...generateSpace('bottom', 'margin'),
  ...generateSpace('top', 'padding'),
  ...generateSpace('bottom', 'padding'),
  ...generateSpace('left', 'padding'),
});
