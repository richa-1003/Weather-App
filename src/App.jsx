import WeatherApp from "./WeatherApp"



function App() {
  

  return (
    <div style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1409340439/photo/white-recycled-paper-texture.webp?a=1&b=1&s=612x612&w=0&k=20&c=zoTIAs8Ws7jBGC-ow4-jUEhcLuGtGLYJQJJv_aWFM4o=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px"}}>
   
   <WeatherApp/>
        
    </div>
  )
}

export default App
