import './App.css';
import Typography from '@mui/material/Typography';
import NavMenu from './NavMenu';
import PersonalCard from './PersonalCard';
import StandardCard from './StandardCard';
import StandardList from './StandardList';
import CreditsCard from './CreditsCard';

function App() {
  return (
    <div className="App">
        <NavMenu/>
        <StandardCard/>
        <br/>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          About Me
        </Typography>
        <PersonalCard/>
        <br/>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Hobbies
        </Typography>
        <StandardList/>
        <br/>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Credits
        </Typography>
        <CreditsCard/>
    </div>
  );
}

export default App;
