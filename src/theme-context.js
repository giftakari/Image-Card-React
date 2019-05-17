import React from 'react'

 const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export default ThemeContext;