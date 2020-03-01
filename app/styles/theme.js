import media from './utils/theme.utils';

const theme = {
  primaryColor: 'red',
  secondaryColor: 'white',
  accentColor: 'pink',
  primaryFontFamily: 'sans-serif',
  pageContainer: {
    display: 'flex',
    margin: '0 auto',
    'margin-top': '50px',
    padding: '20px',
    'max-width': '1280px'
  },
  button: {
    'min-width': '150px',
    height: '50px',
  },
  navigationBar: {
    display: 'flex',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    'align-items': 'center',
    height: '50px',
  },
  footerBar: {
    display: 'flex',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    'align-items': 'center',
    height: '40px',
    'justify-content': 'flex-end',
    'font-size': '10px',
  },
  media,
};

export default theme;
