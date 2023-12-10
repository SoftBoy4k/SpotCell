import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function PopUp({street, freePlaces, totalPlaces, price}) {

  return (
    <Card variant="outlined" sx={{minWidth: '200px', margin: 0}}>
        <Typography component="div" 
        sx={{
            width: '100%',
            fontSize: '18px',
            padding: '2%',
            borderBottom: '2px solid #228BE6',
            textAlign: 'center',
            margin: 0
        }} gutterBottom>
            {street}
        </Typography>
        <CardContent sx={{ padding: '1% 8ёpx' }}>
            <Typography sx={{ margin: "3% 0" }} component="div">
                <Typography sx={{ color: '#228BE6', fontWeight: '600' }} component="span">Мест свободно:</Typography> {freePlaces}
            </Typography>
            <Typography sx={{ margin: "3% 0" }} component="div">
                <Typography sx={{ color: '#228BE6', fontWeight: '600' }} component="span">Мест всего:</Typography> {totalPlaces}
            </Typography>
            <Typography sx={{ margin: "3% 0" }} component="div">
                <Typography sx={{ color: '#228BE6', fontWeight: '600' }} component="span">Цена:</Typography> {price} руб/час
            </Typography>
        </CardContent>

        <CardActions>
            <Link style={{ margin: '0 auto', width: '100%' }} to="booking/">
                <Button variant="contained" size="small" sx={{ backgroundColor: '#228BE6', width: '100%' }}>Бронировать</Button>
            </Link>
        </CardActions>
    </Card>
  );
}