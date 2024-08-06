import { Box, Typography } from "@mui/material";
import Activity from "../Components/Activity.jsx";
import RecentOrders from "../Components/RecentOrder.jsx";
import OrderStats from "../Components/OrderStats.jsx";
import Profit from "../Components/Profit.jsx";
import PopularTabs from "../Components/PopularTabs.jsx";
import CustomerFeedBack from "../Components/CustomerFeedBack.jsx";
import "../Pages/dashboard.css";

const Dashboard = () => {
    return(
        <div className="container">
            <Typography sx={{pl:'2%', mt:0,mb:0, pt:'1%', color:'white'}}>
                <h2>Dashboard</h2>
            </Typography>
            <Box className="dashboardContainer">
                <Box>
                    <OrderStats />
                </Box>
                <Box>
                    <Profit />
                </Box>
                <Box>
                    <Activity />
                </Box>
                <Box>
                    <PopularTabs />
                </Box>
                <Box>
                    <RecentOrders />
                </Box>
                <Box>
                    <CustomerFeedBack />
                </Box>
            </Box>
        </div>
    )
}
export default Dashboard;