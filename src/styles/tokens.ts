export const colors = {
  primary: '#000000',
  secondary: '#333333',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  text: '#111111',
  border: '#DDDDDD',

  text: {
    primary: '#111111',
    secondary: '#555555',
    onPrimary: '#FFFFFF',
    onSurface: '#000000',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  body: { fontSize: 16, lineHeight: 22 },
  heading: { fontSize: 24, lineHeight: 30 },
  subheading: { fontSize: 18, lineHeight: 24 },
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
};

export const shadows = {
  card: {
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
};

export const icon = {
  sm: 16,
  md: 24,
  lg: 32,
};

const tokens = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  icon,
};

export default tokens;