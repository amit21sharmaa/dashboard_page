import { Card, CardActions, CardContent, Typography } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../common/orderCard.css";

const OrderCard = (props) => {
    return(
            <Card elevation={0} sx={{ borderRadius:'30px', p:'1% 0% 0% 0%', backgroundColor:'#1c1a1a', color:'white' }}>
                <Typography className="orderStatusIcon" sx={{width:'30%', mb:0, backgroundColor:'blue', borderRadius:'30%',height:'30%', marginLeft:'8%', }}>
                    <ShoppingBagIcon sx={{width:'100%', height:'100%', mb:0}} />
                </Typography>
                <Typography sx={{p:'5% 5% 0% 5%', fontSize:'85%', mb:0}}>
                    {props.title}
                </Typography>
                <CardActions disableSpacing sx={{p:'0% 0% 0% 0%', mb:0}}>
                    <CardContent sx={{display:'flex', justifyContent:'space-between', width:'100%', p:'2% 5% 0% 5%'}}>
                        <Typography sx={{p:'0% 0% 0% 0%', fontWeight:'1000', fontSize:'1.5rem', mb:0}}>
                        {props.value}
                        </Typography>
                        <Typography sx={{alignContent:'center', mb:0, p:'0% 0% 0% 0%', fontSize:'1rem',fontWeight:'600', color: (props.changeType) === 'increment' ? "green" : "#b52f2f" }}>
                            {props.changeType === 'increment' ? <ArrowDropUpIcon sx={{verticalAlign:"middle", mb:0}} /> : <ArrowDropDownIcon sx={{verticalAlign:"middle"}}/>}{props.change}%
                        </Typography>
                    </CardContent>
                </CardActions>
            </Card>
    )
}

export default OrderCard;