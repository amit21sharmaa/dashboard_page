import { Box } from "@mui/material";
import OrderCard from "../common/OrderCard";
import orderArray from "../utils/OrderArray";
import "../Components/orderStats.css";

const OrderStats = () => {
    return(
        <Box className="orderStats" sx={{}}>
            {orderArray?.map((orderCardElement, key) => {
                return (<Box className="ordercards">
                            <OrderCard key={key} title={orderCardElement.title} value={orderCardElement.value} changeType={orderCardElement.changeType} change={orderCardElement.change} />
                        </Box>)
            })}
        </Box>
    )
}
export default OrderStats;