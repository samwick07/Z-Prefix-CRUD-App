import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/Webmaster">
          Imaginary Item Inventory Solutions (I3S)
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright;