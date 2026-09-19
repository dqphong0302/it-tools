import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#0f172a',
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
  },
});
