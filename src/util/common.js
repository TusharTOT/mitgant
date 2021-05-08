export const uid5 = () => {
  return (
    Math.random().toString(36).substring(2, 5) +
    Math.random().toString(36).substring(2, 5)
  );
};

export const dateFormater = (date, format) => {
  if (date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = new Date(date);

    const year = formattedDate.getFullYear();
    const month = months[formattedDate.getMonth()];
    const digimonth = (formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = formattedDate.getUTCDate().toString().padStart(2, "0");
    let hours = formattedDate.getHours();
    let minutes = formattedDate.getMinutes();
    const ampm = hours >= 12 ? " PM" : " AM";
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const time = `${hours}:${minutes}${ampm}`;

    switch (format) {
      case "time":
        return `${day} ${month} ${year} ${time}`;
      case "digitime":
        return `${day}-${digimonth}-${year} ${time}`;
      case "reverse":
        return `${year}-${month}-${day}`;
      default:
        return `${day}-${digimonth}-${year}`;
    }
  }
};

export const showitems = (pagenumber, pagesize, last, total) => {
  var lastNumber = 10;
  var firstNumber = 1;
  if (pagenumber > 1) {
    firstNumber = pagesize * pagenumber - (pagesize - 1);
    if (last) {
      lastNumber = total;
    } else {
      lastNumber = pagesize * pagenumber;
    }
  } else {
    firstNumber = 1;
    lastNumber = pagesize;
  }
  return `${firstNumber} - ${lastNumber}`;
};


export const filterParser = (baseUrl, filterOptions, pageData) => {

  let alertsUrl = pageData.sortColumn ? `${baseUrl}&sort=${pageData.sortColumn},${pageData.sortType}` : baseUrl;
  if (filterOptions) {
    if (
      filterOptions[0].severity !== undefined &&
      filterOptions[0].severity.length > 0
    ) {
      alertsUrl = `${alertsUrl}&severity=${filterOptions[0].severity.split(' ').join('_').toUpperCase()}`;
    }

    if (
      filterOptions[0].serviceType !== undefined &&
      filterOptions[0].serviceType.length > 0
    ) {
      alertsUrl = `${alertsUrl}&serviceType=${filterOptions[0].serviceType.split(' ').join('_').toUpperCase()}`;
    }

    if (
      filterOptions[0].resourceType !== undefined &&
      filterOptions[0].resourceType.length > 0
    ) {
      alertsUrl = `${alertsUrl}&resourceType=${filterOptions[0].resourceType.split(' ').join('_').toUpperCase()}`;
    }
  }

  return alertsUrl;
};

export const setFilter = (option, filterColumn, value) => {
  switch (filterColumn) {
    case "severity":
      option[0].severity = value
      return option;
    case "serviceType":
      option[0].serviceType = value;
      return option;
    case "resourceType":
      option[0].resourceType = value
      return option;
    default:
      return;
  }
}


export const add3Dots = (string) => {
  var dots = "...";
  if (string.length > 24) {
    // you can also use substr instead of substring
    string = string.substring(0, 24) + dots;
  }
  return string;
}