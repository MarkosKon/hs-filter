import theme from './theme';

const { colors } = theme;

export const selectStyles = {
  placeholder: provided => ({
    ...provided,
    color: colors.raisinBlack,
  }),
};
