function updateMap(){
    console.log("updating time with real time data")
    fetch("/data.json")
    .then(response => response.json())
    .then( rsp=>{
        // console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            infected = element.infected;
             new mapboxgl.Marker({
                draggable: false , 
                color : `rgb(${infected} , 0 ,0)`
                })
                .setLngLat([longitude, latitude])
                .addTo(map);

                
            
        });
    })
}
let interval = 200000
setInterval(updateMap , interval);