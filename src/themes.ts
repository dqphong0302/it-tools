import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#059669',
    primaryColorHover: '#10b981',
    primaryColorPressed: '#047857',
    primaryColorSuppl: '#10b981',
    borderRadius: '8px',
  },

  Menu: {
    itemHeight: '34px',
    borderRadius: '6px',
    itemColorActive: 'rgba(5, 150, 105, 0.1)',
    itemColorActiveHover: 'rgba(5, 150, 105, 0.15)',
    itemTextColorActive: '#059669',
    itemIconColorActive: '#059669',
  },

  Layout: { color: '#f8fafc', siderColor: '#ffffff' },

  Card: {
    borderRadius: '12px',
    borderColor: '#e2e8f0',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    primaryColorHover: '#34d399',
    primaryColorPressed: '#059669',
    primaryColorSuppl: '#34d399',
    infoColor: '#06b6d4',
    infoColorHover: '#22d3ee',
    infoColorPressed: '#0891b2',
    baseColor: '#0b0f19',
    bodyColor: '#0b0f19',
    cardColor: '#0f172a',
    modalColor: '#0f172a',
    popoverColor: '#0f172a',
    tableColor: '#0f172a',
    inputColor: '#1e293b',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
  },

  Notification: {
    color: '#0f172a',
    textColor: '#f8fafc',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#0f172a' },
    },
  },

  Menu: {
    itemHeight: '34px',
    borderRadius: '6px',
    itemColorActive: 'rgba(16, 185, 129, 0.12)',
    itemColorActiveHover: 'rgba(16, 185, 129, 0.18)',
    itemTextColorActive: '#34d399',
    itemIconColorActive: '#34d399',
  },

  Layout: {
    color: '#0b0f19',
    siderColor: '#090d16',
    siderBorderColor: 'rgba(255, 255, 255, 0.06)',
  },

  Card: {
    color: '#0f172a',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
  },

  Table: {
    tdColor: '#0f172a',
    thColor: '#1e293b',
  },
};
