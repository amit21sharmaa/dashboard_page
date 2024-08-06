import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../Components/sidebar.css";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebarHeader">
            <Box className="mainIcon">
                <IconButton >
                    <AcUnitIcon color="primary" sx={{ fontSize: 40 }} />
                </IconButton>
            </Box>
            </div>
            <div className="sidebarPages">
                <Box className='pageIcon'  sx={{'borderLeft':'solid blue 5px', pt:'2%'}}>
                    <HomeIcon color="primary" fontSize="large" />
                </Box>
                <Box className='pageIcon'>
                    <AssessmentIcon sx={{ 'color':'white', pt:'2%' }} fontSize="large" />
                </Box>
                <Box className='pageIcon'>
                    <AssignmentTurnedInIcon sx={{ 'color':'white' , pt:'2%'}} fontSize="large" />
                </Box>
                <Box className='pageIcon'>
                    <AccountBalanceWalletIcon sx={{ 'color':'white', pt:'2%' }} fontSize="large" />
                </Box>
                <Box className='pageIcon'>
                    <LocalMallIcon sx={{ 'color':'white', pt:'2%' }} fontSize="large" />
                </Box>
            </div>
        </div>
    )
}

export default Sidebar