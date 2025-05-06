import {Female, Male, Transgender } from '@mui/icons-material';
import { Gender } from '../types';

export const genderIcon = (gender : Gender | undefined): JSX.Element => {

  switch (gender) {
      case "male":
        return <Male sx={{fontSize: 60, alignItems:'center'}} color='info'/>;
        break;

      case "female":
        return <Female sx={{fontSize: 60, alignItems:'center'}} color='error'/>;
        break;

      case "other":
        return <Transgender sx={{fontSize: 60, alignItems:'center'}} color='success'/>;
        break;

      default:
        return <h1></h1>;
        break;
    }
};