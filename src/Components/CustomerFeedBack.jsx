import { Box, Rating, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const CustomerFeedBack = () => {
    return(    
    <Box sx={{ height: "100%", width: '100%', backgroundColor:'#1c1a1a', color: 'white', borderRadius:'2%' }}>
        <Typography sx={{pl:'2%', mt:0, pt:'2%'}}>
            <h3>Customer's Feedback</h3>
        </Typography>
        <Box sx={{overflow:'clip', pl:'2%'}}>
            <Box>
                <Typography sx={{ fontSize: 30 }}>
                    <AccountCircleIcon sx={{ fontSize: 30 }} /> Jenny Wilson
                </Typography>
                <Typography>
                    <Rating name="read-only" value={4} readOnly />
                </Typography>
                <Typography>
                    The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: 30 }}>
                    <AccountCircleIcon  /> Dianne Russell
                </Typography>
                <Typography>
                    <Rating name="read-only" value={5} readOnly />
                </Typography>
                <Typography>
                    We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: 30 }}>
                    <AccountCircleIcon sx={{ fontSize: 30 }} /> Devon Lane
                </Typography>
                <Typography>
                    <Rating name="read-only" value={4} readOnly />
                </Typography>
                <Typography>
                    Normally wings are wings, but theirs are lean meaty and tender.
                </Typography>
            </Box>
        </Box>
    </Box>
    )
}

export default CustomerFeedBack;