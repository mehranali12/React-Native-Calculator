import { StyleSheet } from 'react-native';
import { layoutStyles } from './layout';
import { spacingStyles } from './spacings';
import { typographyStyles } from './typography';
import { buttonStyles } from './buttons';
import { formStyles } from './forms';

const s = StyleSheet.create({
  ...layoutStyles,
  ...spacingStyles,
  ...typographyStyles,
  ...buttonStyles,
  ...formStyles,
});

export { s };
