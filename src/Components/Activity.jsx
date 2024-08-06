import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import Graph from "../Components/Graph.jsx";

const Activity = () => {
    return(
            <Box sx={{width:'100%', backgroundColor:"#1c1a1a",color:'white', height:'100%', borderRadius:'2%'}}>
                <Box sx={{display:'inline-flex', justifyContent:'space-between',width:'100%'}}>
                    <Typography sx={{pl:'2%'}}>
                        <h3>Activity</h3>
                    </Typography>
                    <Typography sx={{pr:'3%'}}>
                        <FormControl sx={{width:120, color: "white"}} >
                            <Select value={"Weekly"}>
                                <MenuItem value="weekly">Weekly</MenuItem>
                                <MenuItem value={"Monthly"}>Monthly</MenuItem>
                                <MenuItem value={"Yearly"}>Yearly</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>
                </Box>
                <Box sx={{p:'0 0 0 0', color:'white'}}>
                    <Graph />
                </Box>
            </Box>
    )
}
export default Activity;