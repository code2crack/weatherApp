const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const your_city_name = document.getElementById("your_city_name");
const temp_value = document.getElementById("temp_value");
const temp_status = document.getElementById("temp_status");
const middle_layer = document.querySelector(".middle_layer")
const today_day = document.getElementById("today_day")
const today_date = document.getElementById("today_date")



const getInfo = async (e) => {
    e.preventDefault();
    // alert("hello");
    const city_name_value = city_name.value;
    // console.log(city_name_value);

    if (city_name_value === "") {
        your_city_name.innerText = "Please Enter City";
        console.log("Please Enter City");
        middle_layer.classList.add("data_hide");
    }
    else {
        try {
            const myWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city_name_value}&units=metric&appid=5bde2b2febaaa9cf7ac7070b668bb0dc`
            let response = await fetch(myWeatherApi);
            // console.log({ response });
            let data = await response.json()
            console.log("data", data);

            //----manupulating innerHtml----
            your_city_name.innerText = `${data.name},${data.sys.country}`;
            temp_value.innerText = data.main.temp;
            const temp_logo = data.weather[0].main;
            console.log("temp_logo:-", { temp_logo });

            middle_layer.classList.remove("data_hide");


            //------weather logo condition check------
            switch (temp_logo) {
                case "Clear": temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color:#eccc68"></i>';
                    break;
                case "Rain": temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color:#a4b0be"></i>';
                    break;
                case "Clouds": temp_status.innerHTML = '<i class="fa-solid fa-cloud style="color:#f1f2f6"></i>';
                    break;
                case "Smoke": temp_status.innerHTML = '<i class="fa-solid fa-smog style="color:#919191"></i>';
                    break;
                default: temp_status.innerHTML = '<i class="fa-solid fa-cloud style="color:#f1f2f6"></i>';
                    break;
            }
        }
        catch (error) {
            your_city_name.innerText = "Please Enter Proper City Name";
            console.log(" Catch error");
            middle_layer.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener("click", getInfo);



// ------Day & Date portion---------
const date = new Date();
let dummyDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let dummyMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// console.log(date);
// console.log(date.getDay());
// console.log(dummyDay[date.getDay()]);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(dummyMonth[date.getMonth()]);
// console.log(date.getFullYear());

let current_day = dummyDay[date.getDay()];
// console.log(current_day);
today_day.innerText = current_day;

let current_date = `${date.getDate()} ${dummyMonth[date.getMonth()]} ${date.getFullYear()}`
// console.log(current_date);
today_date.innerText = current_date;



/*
const getCurrentDay = () => {
    let dummyDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    let today = new Date();
    let day = dummyDay[today.getDay()];
    return day;
}
getCurrentDay();

const getCurrentMonth = () => {
    let dummyMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let today = new Date();
    let date = dummyMonth[today.getMonth()];
    return date;
}
getCurrentMonth();

console.log({ day: getCurrentDay(), month: getCurrentMonth() });
*/ 