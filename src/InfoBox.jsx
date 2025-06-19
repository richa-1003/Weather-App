import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox( {info}){
    const INIT_URI = "https://plus.unsplash.com/premium_photo-1667143329632-6cfb18f6fe7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1641672222794-536ad524a929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAINY_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    // let info ={
    //     city: "Patna",
    //     temp: 29.45,
    //     tempMin: 29.45,
    //     tempMax: 29.45,
    //     humidity: 71,
    //     feelsLike:33.45,
    //     weather: "overcast clouds"
    // }
    return(
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature={info.temp}</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}</p>
         <p>Max Temp={info.tempMax}</p>
         <p>Weather is described as {info.weather} but  feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
            </div>
        </div>
    )
}