const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val"); 
const temp_status = document.getElementById("temp_status"); 
const datHide = document.querySelector(".middle_layer");
const getInfo = async(e)=>{
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please write the city name before you search`;
        datHide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=653479eb73149bfd3c6c55ba437874fd`
            let response =  await fetch(url)
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            console.log(arrData[0].main.temp);

            const tempMood = arrData[0].weather[0].main;
            //conditon to check weaher is sunny or cloudy etc

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                '<i class="fas fa-sun" style="color: #eccc68;"></i>'
            }else if(tempMood == "Cloudy") {
                temp_status.innerHTML =
                '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>' 
            }else if(tempMood == "Rain") {
                temp_status.innerHTML =
                '<i class="fas fa-cloud-rain" style="color: #99c8ff;"></i>' 
            }else{
                temp_status.innerHTML =
                '<i class="fas fa-cloud" style="color: #95a9c2;"></i>' 
            }
            datHide.classList.remove("data_hide")
        } catch (error) {
            city_name.innerText = `Please write the City name properly`;
            datHide.classList.add("data_hide")
        }
    
   }
}
submitBtn.addEventListener("click", getInfo)