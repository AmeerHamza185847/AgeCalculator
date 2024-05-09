    //1 year = 31,556,952,000 ms
    const milliSecInYear = 31556952000;

    // 1 month = 2629746000 ms
    const milliSecInMonth = 2629746000;

    //1 day = 86,400,000 ms
    const milliSecondsInDay = 86400000; 

    // 1 hour = 3600000 ms
    const milliSecInHour = 3600000;

    // 1 minute = 60000 ms
    const milliSecInMinute = 60000;


const ageCalculator = ()=>{

    const userDOB = new Date(document.querySelector("#userBirthDate").value);
    const todaydate = new Date();

    let milliSecondsInUserDob = userDOB.getTime();
    let milliSecondsIntodayDate = todaydate.getTime();

    let milliSecondsDiffernce = milliSecondsIntodayDate - milliSecondsInUserDob;
    
    let ageInYear = Math.floor(milliSecondsDiffernce / milliSecInYear);
    // console.log("Age in year :" , ageInYear);

    let remainderInAge = milliSecondsDiffernce % milliSecInYear;
    // console.log("remainder in year :" , remainderInAge); 
    
    let ageInMonth = Math.floor(remainderInAge / milliSecInMonth);
    // console.log("Age in month :" , ageInMonth);

    let remainderInMonth = remainderInAge % milliSecInMonth;
    // console.log("remainder in month :" , remainderInMonth);

    let ageInDays = Math.floor(remainderInMonth / milliSecondsInDay);
    // console.log("age in days :" , ageInDays);

    let remainderInDay = remainderInMonth % milliSecondsInDay;
    // console.log("remainder in day :" , remainderInDay);

    let ageInHours = Math.floor(remainderInDay / milliSecInHour);
    // console.log("age in hours :" , ageInHours);

    let remainderInHours = remainderInAge % milliSecInHour;
    // console.log("remainder in hours :" , remainderInHours);

    let ageInMinutes = Math.floor(remainderInHours / milliSecInMinute);
    // console.log("age in minutes :" , ageInMinutes);

    let remainderInMinutes = remainderInHours %  milliSecInMinute;
    // console.log("remainder in minutes :" , remainderInMinutes);

    document.querySelector("#Years").innerHTML = ageInYear;
    document.querySelector("#Months").innerHTML = ageInMonth ;
    document.querySelector("#Days").innerHTML = ageInDays;
    document.querySelector("#Hours").innerHTML = ageInHours;
    document.querySelector("#Minutes").innerHTML = ageInMinutes;
}


