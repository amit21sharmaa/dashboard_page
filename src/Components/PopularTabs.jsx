import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
import { Box } from '@mui/material';
import "../Components/popularTabs.css";

const PopularTabs = () => {
    return(<Box sx={{display:"flex", flexDirection:'column', backgroundColor:'#1c1a1a', color:'white', height:"100%",fontSize:'1.5rem', borderRadius:'2%' }}>
        <Box className='popularTab' sx={{display:'inline-flex', justifyContent:'space-between', p:'5%'}}>
            <Box>
                <ModeStandbyIcon  sx={{verticalAlign:'middle', backgroundColor:'orange',fontSize:'60px', borderRadius:"50%"}}/>  <strong>Goal</strong> 
            </Box>
            <Box>
                <PlayCircleTwoToneIcon sx={{fontSize:'40px', verticalAlign:'middle'}} />
            </Box>
        </Box>
        <Box className='popularTab' sx={{display:'inline-flex', justifyContent:'space-between',  p:'5%'}}>
            <Box>
                <LunchDiningIcon sx={{verticalAlign:'middle', backgroundColor:'blue',fontSize:'60px', borderRadius:"50%"}}/>  <strong>Popular Dishes</strong> 
            </Box>
            <Box>
                <PlayCircleTwoToneIcon sx={{fontSize:'40px', verticalAlign:'middle'}} />
            </Box> 
        </Box>
        <Box className='popularTab' sx={{display:'inline-flex', justifyContent:'space-between',  p:'5%'}}>
            <Box>
                <RestaurantMenuIcon sx={{verticalAlign:'middle', backgroundColor:'#9090c7',fontSize:'60px', borderRadius:"50%"}}/>  <strong>Menus</strong> 
            </Box>
            <Box>
                <PlayCircleTwoToneIcon sx={{fontSize:'40px', verticalAlign:'middle'}} />
            </Box>
        </Box>
    </Box>)
}

export default PopularTabs;