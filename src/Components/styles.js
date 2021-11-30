import { makeStyles } from '@material-ui/core/styles';
import Palm from './Palm.jpg';
import Fa from './Fa.jpg';
import enter from './Para.jpg';
import crime from './Justice-for-Zothansanga.jpg';
import inter from './A.jpg';
const useStyles = makeStyles(() => ({
  nav: {
    width: '100vw',
    height: '80px',
    backgroundColor: '#737373',
    display: 'flex',
    flexDirection: 'row',

    '& div': {
      marginLeft: 10,
      paddingTop: 40,
      whiteSpace: 'nowrap',
      fontFamily: 'Gilroy-Medium, sans-serif',
      marginRight: 250,
      // borderStyle: 'solid',
      borderColor: 'black',
      // textDecoration: 'underline',
      //   borderWidth:100%,
      borderRadius: 5,
      '& span': {},
    },
  },
  main: {
    margin: '10px',
  },
  ima1: {
    backgroundImage: `url(${Palm})`,
    // margin: '0 auto',
    marginLeft: 40,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 600,
    height: 300,
  },
  ima2: {
    backgroundImage: `url(${Fa})`,
    // margin: '0 auto',
    marginLeft: 40,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 600,
    height: 300,
  },
  ima3: {
    backgroundImage: `url(${inter})`,
    // margin: '0 auto',
    marginLeft: 40,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 600,
    height: 300,
  },
  ima4: {
    backgroundImage: `url(${crime})`,
    // margin: '0 auto',
    marginLeft: 40,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 600,
    height: 300,
  },
  ima5: {
    backgroundImage: `url(${enter})`,
    // margin: '0 auto',
    marginLeft: 40,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 600,
    height: 300,
  },
}));

export default useStyles;
