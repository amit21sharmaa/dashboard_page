import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Profit = () => {
    return (<Box sx={{backgroundColor: '#1c1a1a', color:"white",padding:'0% 5% 0% 5%', borderRadius:'2%'}}>
            <Typography sx={{fontWeight:'1000',pt:'3%'}}>Net Profit</Typography>
            <Box sx={{display:'inline-flex', justifyContent:'space-between', width:"100%"}}>
                <Box>
                    <Typography variant="h5" sx={{fontSize:"1.5rem",fontWeight:'1000',p:'10% 0 16% 0'}}>
                        $6759.25
                    </Typography>
                    <Typography sx={{alignContent:'center', p:'0% 0% 0% 0%', fontSize:'1rem', color: "green",verticalAlign:"middle"}}>
                                <ArrowDropUpIcon sx={{verticalAlign:"middle"}} />3%
                    </Typography>
                </Box>
                <Box>
                    <Stack  sx={{color:'blue'}} direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                        <Gauge width={110} height={110} value={70} />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default Profit;