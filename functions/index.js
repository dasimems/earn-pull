export const formatDate = (dateObject) => {
  var {
    date,
    timeFormat,
    dateFormat,
    timeSeparator,
    dateSeparator,
    showTimeDifference,
  } = dateObject || {};

  if (!date) {
    date = Date.now();
  }

  if (!dateFormat) {
    dateFormat = ["D", "DDD", "MM", "YY"];
  }

  if (!timeFormat) {
    timeFormat = ["H", "M", "S"];
  }

  if (!timeSeparator) {
    timeSeparator = ":";
  }

  if (!dateSeparator) {
    dateSeparator = " ";
  }

  const months = {
    january: {
      shortName: "Jan",
      longName: "January",
    },

    february: {
      shortName: "Feb",
      longName: "February",
    },

    march: {
      shortName: "Mar",
      longName: "March",
    },
    april: {
      shortName: "April",
      longName: "April",
    },

    may: {
      shortName: "May",
      longName: "May",
    },

    june: {
      shortName: "June",
      longName: "June",
    },
    july: {
      shortName: "July",
      longName: "July",
    },
    august: {
      shortName: "Aug",
      longName: "August",
    },
    september: {
      shortName: "Sept",
      longName: "September",
    },
    october: {
      shortName: "Oct",
      longName: "October",
    },
    november: {
      shortName: "Nov",
      longName: "November",
    },
    december: {
      shortName: "Dec",
      longName: "December",
    },
  };

  const days = {
    sunday: {
      shortName: "Sun",
      longName: "Sunday",
    },
    monday: {
      shortName: "Mon",
      longName: "Monday",
    },

    tuesday: {
      shortName: "Tues",
      longName: "Tuesday",
    },
    wednesday: {
      shortName: "Wed",
      longName: "Wednesday",
    },
    thursday: {
      shortName: "Thurs",
      longName: "Thursday",
    },
    friday: {
      shortName: "Fri",
      longName: "Friday",
    },
    saturday: {
      shortName: "Sat",
      longName: "Saturday",
    },
  };

  var dateSent = new Date(date),
    daysArr = Object.keys(days),
    monthArr = Object.keys(months);

  if (!Array.isArray(dateFormat)) {
    dateFormat = ["D", "DDD", "MM", "YY"];
  }

  if (!Array.isArray(timeFormat)) {
    timeFormat = ["H", "M", "S"];
  }

  var dateObj = {
    date:
      dateSent.getDate().toString().length < 2
        ? `0${dateSent.getDate()}`
        : dateSent.getDate(),
    day: {
      num:
        (dateSent.getDay() + 1).toString().length < 2
          ? `0${dateSent.getDay() + 1}`
          : dateSent.getDay() + 1,
      shortName: days[daysArr[dateSent.getDay()]].shortName,
      fullName: days[daysArr[dateSent.getDay()]].longName,
    },
    month: {
      num:
        (dateSent.getMonth() + 1).toString().length < 2
          ? `0${dateSent.getMonth() + 1}`
          : dateSent.getMonth() + 1,
      shortName: months[monthArr[dateSent.getMonth()]].shortName,
      fullName: months[monthArr[dateSent.getMonth()]].longName,
    },
    year: {
      shortYear: dateSent
        .getFullYear()
        .toString()
        .slice(dateSent.getFullYear().toString().length - 2),
      fullYear: dateSent.getFullYear(),
    },
    minutes: dateSent.getMinutes(),
    fullHours: dateSent.getHours(),
    shortHour:
      dateSent.getHours() > 12 ? dateSent.getHours() - 12 : dateSent.getHours(),
    seconds: dateSent.getSeconds(),
    timeDifference: dateSent.getHours() > 12 ? "PM" : "AM",
  };

  var fullDate = "",
    fullTime = "";

  dateFormat.forEach((value, index) => {
    if (value.toLowerCase() === "y") {
      fullDate += `${dateObj.year.shortYear}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "yy") {
      fullDate += `${dateObj.year.fullYear}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "m") {
      fullDate += `${dateObj.month.num}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "mm") {
      fullDate += `${dateObj.month.shortName}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "mmm") {
      fullDate += `${dateObj.month.fullName}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "d") {
      fullDate += `${dateObj.date}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "dd") {
      fullDate += `${dateObj.day.shortName}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    } else if (value.toLowerCase() === "ddd") {
      fullDate += `${dateObj.day.fullName}${
        index !== dateFormat.length - 1 ? dateSeparator : ""
      }`;
    }
  });

  timeFormat.forEach((value, index) => {
    if (value.toLowerCase() === "h") {
      fullTime += `${dateObj.shortHour}${
        index !== timeFormat.length - 1 ? timeSeparator : ""
      }`;
    } else if (value.toLowerCase() === "hh") {
      fullTime += `${dateObj.fullHours}${
        index !== timeFormat.length - 1 ? timeSeparator : ""
      }`;
    } else if (value.toLowerCase() === "m") {
      fullTime += `${dateObj.minutes}${
        index !== timeFormat.length - 1 ? timeSeparator : ""
      }`;
    } else if (value.toLowerCase() === "s") {
      fullTime += `${dateObj.seconds}${
        index !== timeFormat.length - 1 ? timeSeparator : ""
      }`;
    }
  });

  return {
    fullDate: fullDate.trim(),
    fullTime: `${fullTime.trim()}${
      showTimeDifference ? ` ${dateObj.timeDifference}` : ""
    }`,
    formattedDate: `${fullDate.trim()} ${fullTime.trim()}${
      showTimeDifference ? ` ${dateObj.timeDifference}` : ""
    }`,
    ...dateObj,
  };
};

export const formatSeconds = (sec) => {
  var formatedSec = 0,
    secType = "s";

  if (sec) {
    var newSec = parseInt(sec / 1000);

    if (newSec < 60) {
      formatedSec = `0.${newSec}`;
    } else {
      var secs = parseInt(newSec / 60);
      var remainingSec = newSec - secs * 60;
      formatedSec = `${secs}.${remainingSec}`;
    }
  }
  return `${formatedSec}${secType}`;
};

export function formatPrice(sentPrice) {

  let newPrice = "";
  let priceDecimal = ""

  if(sentPrice){

    const price = sentPrice?.toString();
    const priceUnits = price?.split(".");
    priceDecimal = priceUnits[1] || "";
    const priceArray = priceUnits[0]?.split("");
  
    if (!priceArray) return;
  
    for (var i = 0; i < priceArray?.length; i++) {
      if (priceArray?.length % 3 !== 0) {
        var remainder = priceArray?.length % 3;
  
        if (i <= remainder - 1) {
          newPrice += priceArray[i];
        } else {
          if (i === remainder) {
            newPrice += `,${priceArray[i]}`;
          } else {
            if (i !== 0 && (i - remainder) % 3 === 0) {
              newPrice += `,${priceArray[i]}`;
            } else {
              newPrice += priceArray[i];
            }
          }
        }
      } else {
        if (i !== 0 && i % 3 === 0) {
          newPrice += `,${priceArray[i]}`;
        } else {
          newPrice += priceArray[i];
        }
      }
    }
  }else{
    newPrice = "0";
  }

  if(priceDecimal && priceDecimal.length > 0){
    newPrice +="."
    newPrice +=priceDecimal
  }
  

  return newPrice;
} //done

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function splitName(name) {

  let newName = "";
  if(name !== undefined){
    
    const nameArray = name?.split(" ");
  
    // if (!newName) return;
  
    for (var i = 0; i < nameArray?.length; i++) {

      if (i < 1) {

        newName += `${nameArray[i].slice(0, 1).toUpperCase()}${nameArray[i].slice(
          1
        )}`;

      } else {

        newName += ` ${nameArray[i].slice(0, 1).toUpperCase()}${nameArray[
          i
        ].slice(1)}`;
        
      }
    }

  }

  return newName;
}
