const countries = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  "American Samoa": "AS",
  Andorra: "AD",
  Angola: "AO",
  Anguilla: "AI",
  Antarctica: "AQ",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Aruba: "AW",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bermuda: "BM",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bonaire, Sint Eustatius and Saba": "BQ",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  "Bouvet Island": "BV",
  Brazil: "BR",
  "British Indian Ocean Territory": "IO",
  "Brunei Darussalam": "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Cayman Islands": "KY",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  "Christmas Island": "CX",
  Cocos: "CC",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  "Cook Islands": "CK",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Curaçao: "CW",
  Cyprus: "CY",
  Czechia: "CZ",
  "Côte d'Ivoire": "CI",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  "Falkland Islands": "FK",
  "Faroe Islands": "FO",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  "French Guiana": "GF",
  "French Polynesia": "PF",
  "French Southern Territories": "TF",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Gibraltar: "GI",
  Greece: "GR",
  Greenland: "GL",
  Grenada: "GD",
  Guadeloupe: "GP",
  Guam: "GU",
  Guatemala: "GT",
  Guernsey: "GG",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  "Heard Island and McDonald Islands": "HM",
  "Holy See": "VA",
  Honduras: "HN",
  "Hong Kong": "HK",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  "Isle of Man": "IM",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jersey: "JE",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Korea: "KR",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  "Lao People's Democratic Republic": "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Macao: "MO",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Martinique: "MQ",
  Mauritania: "MR",
  Mauritius: "MU",
  Mayotte: "YT",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Montserrat: "MS",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  Niue: "NU",
  "Norfolk Island": "NF",
  "Northern Mariana Islands": "MP",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  "Palestine, State of": "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Pitcairn: "PN",
  Poland: "PL",
  Portugal: "PT",
  "Puerto Rico": "PR",
  Qatar: "QA",
  "Republic of North Macedonia": "MK",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  Réunion: "RE",
  "Saint Barthélemy": "BL",
  "Saint Helena, Ascension and Tristan da Cunha": "SH",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin": "MF",
  "Saint Pierre and Miquelon": "PM",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  "Sint Maarten": "SX",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Georgia and the South Sandwich Islands": "GS",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  "Svalbard and Jan Mayen": "SJ",
  Sweden: "SE",
  Switzerland: "CH",
  "Syrian Arab Republic": "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  "Tanzania, United Republic of": "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tokelau: "TK",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  "Turks and Caicos Islands": "TC",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom of Great Britain and Northern Ireland": "GB",
  "United States Minor Outlying Islands": "UM",
  "United States of America": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  Venezuela: "VE",
  "Viet Nam": "VN",
  "Virgin Islands": "VI",
  "Wallis and Futuna": "WF",
  "Western Sahara": "EH",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
  "Åland Islands": "AX",
};

const backgroundImgs = {
  night:
    "https://media1.giphy.com/media/iF1WNy0WkmSUWXsLWn/giphy.gif?cid=4c7a3af2dwiifccvwpf0x4pw62lwmd1iesqtjcvccthxbg8i&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
  day: "https://media4.giphy.com/media/RNKcGP3I3NaZpZrgCY/giphy.gif?cid=4c7a3af2x4u9h8kls3vvo1gyki1642iso3jdhwn3bn2ncs1l&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
  morning:
    "https://media2.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif?cid=4c7a3af25yggngzqdqd8pfu9evb7gknqeirztb6f2pa1lrpo&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
};

async function fetchUserIP() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const locationString = `${pos.coords.latitude} ${pos.coords.longitude}`;
        resolve(locationString);
      },
      (error) => {
        resolve("New York");
      }
    );
  });
}

async function fetchWeatherData(ip) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e1e762ba41c948f3b34204333230712&q=${ip}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();

  if (weatherData.hasOwnProperty("error")) return weatherData;

  const {
    location: { name, country, localtime },
    current: {
      condition: { text, icon },
      temp_c,
      wind_kph,
      humidity,
    },
  } = weatherData;
  return {
    location: { name, country, localtime },
    current: { condition: { text, icon }, temp_c, wind_kph, humidity },
  };
}

async function getWeather(location) {
  let userIP;
  if (location === "auto") {
    userIP = await fetchUserIP();
  } else {
    userIP = location;
  }
  const weatherData = await fetchWeatherData(userIP);
  if (weatherData.hasOwnProperty("error")) {
    throw new Error(weatherData.error.message);
  }
  return weatherData;
}

function toggleLoading() {
  const container = document.querySelector(".weather-container");
  container.toggleAttribute("loading");
}

function getTimeOfDay(hour) {
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 19) {
    return "day";
  } else {
    return "night";
  }
}

function displayData(weatherData) {
  const {
    location: { localtime },
  } = weatherData;

  const currentHour = parseInt(localtime.split(" ")[1].split(":")[0], 10);

  document.body.setAttribute("theme", getTimeOfDay(currentHour));

  document.body.style.backgroundImage = `url(${
    backgroundImgs[getTimeOfDay(currentHour)]
  })`;

  const countryFlag = document.querySelector(".country-img");
  const locationText = document.querySelector(".location-text");
  const conditionIcon = document.querySelector(".condition img");
  const conditionText = document.querySelector(".condition span");
  const temperatureText = document.querySelector(".temperature-text");
  const windText = document.querySelector(".wind-text");
  const humidityText = document.querySelector(".humidity-text");
  if (countries.hasOwnProperty(weatherData.location.country)) {
    countryFlag.src = `https://flagsapi.com/${
      countries[weatherData.location.country]
    }/shiny/64.png`;
  } else {
    countryFlag.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC8CAMAAAD4iUTeAAAAMFBMVEXFxcWOjo61tbWSkpKjo6PCwsK/v7+5ubmTk5OampqmpqaysrKXl5e9vb2vr6+YmJjwQAS0AAACY0lEQVR4nO3bwXaCQAyFYQQGFBXf/22r9pwWnRsZXJhM+39rF1dOmExi2zQAAAAAAAAAAAAAAAAA/q50Htv5qh3PyTtLuTT3l2631B2mNv4XSPNlp3X96B3uleFg5P62n6I++9S/DH53GLxTKsf14DeTd87cVJb8WvStd9QnBcXyWzXeYZfSaUPyUNlTtx73wSnMUfP6TIycfd6cPErNpDeS73ZH79g328vlpgtQMu+Uy03vHbxptp4uP87eyUcj2H46jsMwtpN55LtfCXQbXV6zrGvZ3i/0N1kvT8fHoIvKuWJkvWRDhc7uXDHqZJzzj8lvePp83KXSGpYv66fDPhjKHrrx2D+d9kGb5+n0J9W47TrtiVZqvHxqinLdEYgj2/ikGl1dR738gLGOjbOILt+KT8kPDvMiHi16HsfsM/GjW3FUwbjW+tQ/sy4m6jUNvYX8pa6PAQalAmqANZpXNKojxdgKrJFbA/cxqYjcGoRcWD+Ta+Aq6kUPpyGWSCv0jsl5Riox7GVy76G6gBhG7gIsv1ZYv9OEL5dkrVIjLEtfMlZH1+TRj3RrHVlx8ii/xpjM5OG7qFou3cU/FY1GVEH7N3bqXfweapTLIfoL2lgPvYrZQvaiaH+SIamlSyWrC/Vbah3JValXUS2Nmosu3pFK5f2oknIRW9Tw95YfWXTXdfQWeS+tpl7y+653omL5FsA7UbHsZ4BK1tGNaKbufz9SLCuY8FuXhfTIOw4ARDC0Ge9IpcQ+wDtSKaJ7ILoHonsgugeieyC6B6J7ILoH8e8w3pEAAAAAAAAAAAAAAADwP3wBec4P4WaLqSkAAAAASUVORK5CYII=";
  }

  locationText.innerText = weatherData.location.name;
  conditionIcon.src = weatherData.current.condition.icon;
  conditionText.innerText = weatherData.current.condition.text;
  temperatureText.innerText = `${weatherData.current.temp_c} C°`;
  windText.innerText = `${weatherData.current.wind_kph} KM/H`;
  humidityText.innerText = `${weatherData.current.humidity}%`;

  toggleLoading();
}

window.onload = () => {
  getWeather("auto").then((weatherData) => {
    displayData(weatherData);
  });
};

let searching = false;

document.querySelector(".search-button").addEventListener("click", (e) => {
  if (searching || document.querySelector(".search-text").value === "") return;

  toggleLoading();
  searching = true;
  const target = document.querySelector(".search-text").value;
  getWeather(target)
    .then((weatherData) => {
      console.log(weatherData);
      displayData(weatherData);
    })
    .catch((error) => {
      document.querySelector(".search-text").value = "";
      document.querySelector(".search-text").placeholder = error;
      toggleLoading();
    });

  searching = false;
});

document
  .querySelector(".search-text")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".search-button").click();
    }
  });
