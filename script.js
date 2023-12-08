const countries = {
  Andorra: "AD",
  "United Arab Emirates": "AE",
  Afghanistan: "AF",
  "Antigua and Barbuda": "AG",
  Anguilla: "AI",
  Albania: "AL",
  Armenia: "AM",
  "Netherlands Antilles": "AN",
  Angola: "AO",
  Antarctica: "AQ",
  Argentina: "AR",
  "American Samoa": "AS",
  Austria: "AT",
  Australia: "AU",
  Aruba: "AW",
  "Åland Islands": "AX",
  Azerbaijan: "AZ",
  "Bosnia and Herzegovina": "BA",
  Barbados: "BB",
  Bangladesh: "BD",
  Belgium: "BE",
  "Burkina Faso": "BF",
  Bulgaria: "BG",
  Bahrain: "BH",
  Burundi: "BI",
  Benin: "BJ",
  "Saint Barthélemy": "BL",
  Bermuda: "BM",
  "Brunei Darussalam": "BN",
  Bolivia: "BO",
  "Bonaire, Sint Eustatius and Saba": "BQ",
  Brazil: "BR",
  Bahamas: "BS",
  Bhutan: "BT",
  "Bouvet Island": "BV",
  Botswana: "BW",
  Belarus: "BY",
  Belize: "BZ",
  Canada: "CA",
  "Cocos (Keeling) Islands": "CC",
  "Congo, The Democratic Republic Of The": "CD",
  "Central African Republic": "CF",
  Congo: "CG",
  Switzerland: "CH",
  "Côte D'Ivoire": "CI",
  "Cook Islands": "CK",
  Chile: "CL",
  Cameroon: "CM",
  China: "CN",
  Colombia: "CO",
  "Costa Rica": "CR",
  Cuba: "CU",
  "Cape Verde": "CV",
  Curaçao: "CW",
  "Christmas Island": "CX",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  Germany: "DE",
  Djibouti: "DJ",
  Denmark: "DK",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Algeria: "DZ",
  Ecuador: "EC",
  Estonia: "EE",
  Egypt: "EG",
  "Western Sahara": "EH",
  Eritrea: "ER",
  Spain: "ES",
  Ethiopia: "ET",
  Finland: "FI",
  Fiji: "FJ",
  "Falkland Islands (Malvinas)": "FK",
  "Micronesia, Federated States Of": "FM",
  "Faroe Islands": "FO",
  France: "FR",
  Gabon: "GA",
  "United Kingdom": "GB",
  Grenada: "GD",
  Georgia: "GE",
  "French Guiana": "GF",
  Guernsey: "GG",
  Ghana: "GH",
  Gibraltar: "GI",
  Greenland: "GL",
  Gambia: "GM",
  Guinea: "GN",
  Guadeloupe: "GP",
  "Equatorial Guinea": "GQ",
  Greece: "GR",
  "South Georgia and the South Sandwich Islands": "GS",
  Guatemala: "GT",
  Guam: "GU",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  "Hong Kong": "HK",
  "Heard and McDonald Islands": "HM",
  Honduras: "HN",
  Croatia: "HR",
  Haiti: "HT",
  Hungary: "HU",
  Indonesia: "ID",
  Ireland: "IE",
  Israel: "IL",
  "Isle of Man": "IM",
  India: "IN",
  "British Indian Ocean Territory": "IO",
  Iraq: "IQ",
  "Iran, Islamic Republic Of": "IR",
  Iceland: "IS",
  Italy: "IT",
  Jersey: "JE",
  Jamaica: "JM",
  Jordan: "JO",
  Japan: "JP",
  Kenya: "KE",
  Kyrgyzstan: "KG",
  Cambodia: "KH",
  Kiribati: "KI",
  Comoros: "KM",
  "Saint Kitts And Nevis": "KN",
  "Korea, Democratic People's Republic Of": "KP",
  "Korea, Republic of": "KR",
  Kuwait: "KW",
  "Cayman Islands": "KY",
  Kazakhstan: "KZ",
  "Lao People's Democratic Republic": "LA",
  Lebanon: "LB",
  "Saint Lucia": "LC",
  Liechtenstein: "LI",
  "Sri Lanka": "LK",
  Liberia: "LR",
  Lesotho: "LS",
  Lithuania: "LT",
  Luxembourg: "LU",
  Latvia: "LV",
  Libya: "LY",
  Morocco: "MA",
  Monaco: "MC",
  "Moldova, Republic of": "MD",
  Montenegro: "ME",
  "Saint Martin": "MF",
  Madagascar: "MG",
  "Marshall Islands": "MH",
  "Macedonia, the Former Yugoslav Republic Of": "MK",
  Mali: "ML",
  Myanmar: "MM",
  Mongolia: "MN",
  Macao: "MO",
  "Northern Mariana Islands": "MP",
  Martinique: "MQ",
  Mauritania: "MR",
  Montserrat: "MS",
  Malta: "MT",
  Mauritius: "MU",
  Maldives: "MV",
  Malawi: "MW",
  Mexico: "MX",
  Malaysia: "MY",
  Mozambique: "MZ",
  Namibia: "NA",
  "New Caledonia": "NC",
  Niger: "NE",
  "Norfolk Island": "NF",
  Nigeria: "NG",
  Nicaragua: "NI",
  Netherlands: "NL",
  Norway: "NO",
  Nepal: "NP",
  Nauru: "NR",
  Niue: "NU",
  "New Zealand": "NZ",
  Oman: "OM",
  Panama: "PA",
  Peru: "PE",
  "French Polynesia": "PF",
  "Papua New Guinea": "PG",
  Philippines: "PH",
  Pakistan: "PK",
  Poland: "PL",
  "Saint Pierre And Miquelon": "PM",
  Pitcairn: "PN",
  "Puerto Rico": "PR",
  "Palestine, State of": "PS",
  Portugal: "PT",
  Palau: "PW",
  Paraguay: "PY",
  Qatar: "QA",
  Réunion: "RE",
  Romania: "RO",
  Serbia: "RS",
  "Russian Federation": "RU",
  Rwanda: "RW",
  "Saudi Arabia": "SA",
  "Solomon Islands": "SB",
  Seychelles: "SC",
  Sudan: "SD",
  Sweden: "SE",
  Singapore: "SG",
  "Saint Helena": "SH",
  Slovenia: "SI",
  "Svalbard And Jan Mayen": "SJ",
  Slovakia: "SK",
  "Sierra Leone": "SL",
  "San Marino": "SM",
  Senegal: "SN",
  Somalia: "SO",
  Suriname: "SR",
  "South Sudan": "SS",
  "Sao Tome and Principe": "ST",
  "El Salvador": "SV",
  "Sint Maarten": "SX",
  "Syrian Arab Republic": "SY",
  Swaziland: "SZ",
  "Turks and Caicos Islands": "TC",
  Chad: "TD",
  "French Southern Territories": "TF",
  Togo: "TG",
  Thailand: "TH",
  Tajikistan: "TJ",
  Tokelau: "TK",
  "Timor-Leste": "TL",
  Turkmenistan: "TM",
  Tunisia: "TN",
  Tonga: "TO",
  Turkey: "TR",
  "Trinidad and Tobago": "TT",
  Tuvalu: "TV",
  "Taiwan, Republic Of China": "TW",
  "Tanzania, United Republic of": "TZ",
  Ukraine: "UA",
  Uganda: "UG",
  "United States Minor Outlying Islands": "UM",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  "Holy See (Vatican City State)": "VA",
  "Saint Vincent And The Grenadines": "VC",
  "Venezuela, Bolivarian Republic of": "VE",
  "Virgin Islands, British": "VG",
  "Virgin Islands, U.S.": "VI",
  Vietnam: "VN",
  Vanuatu: "VU",
  "Wallis and Futuna": "WF",
  Samoa: "WS",
  Yemen: "YE",
  Mayotte: "YT",
  "South Africa": "ZA",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

const backgroundImgs = {
  night:
    "https://media1.giphy.com/media/iF1WNy0WkmSUWXsLWn/giphy.gif?cid=4c7a3af2dwiifccvwpf0x4pw62lwmd1iesqtjcvccthxbg8i&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
  day: "https://media4.giphy.com/media/RNKcGP3I3NaZpZrgCY/giphy.gif?cid=4c7a3af2x4u9h8kls3vvo1gyki1642iso3jdhwn3bn2ncs1l&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
  morning:
    "https://media2.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif?cid=4c7a3af25yggngzqdqd8pfu9evb7gknqeirztb6f2pa1lrpo&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
};

async function fetchUserIP() {
  try {
    const response = await fetch("https://geolocation-db.com/json/", {
      mode: "cors",
    });

    if (!response.ok) throw new Error("Couldn't retrieve user's IP");

    const locationData = await response.json();
    return locationData.IPv4;
  } catch (err) {
    console.error(err);
    return "178.238.11.6";
  }
}

async function fetchWeatherData(ip) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e1e762ba41c948f3b34204333230712&q=${ip}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
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

async function getWeather() {
  const userIP = await fetchUserIP();
  const weatherData = await fetchWeatherData(userIP);
  return weatherData;
}

function toggleLoading() {
  const container = document.querySelector(".weather-container");
  container.toggleAttribute("loading");
}

function getTimeOfDay(hour) {
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
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

  countryFlag.src = `https://flagsapi.com/${
    countries[weatherData.location.country]
  }/shiny/64.png`;
  locationText.innerText = weatherData.location.name;
  conditionIcon.src = weatherData.current.condition.icon;
  conditionText.innerText = weatherData.current.condition.text;
  temperatureText.innerText = `${weatherData.current.temp_c} C°`;
  windText.innerText = `${weatherData.current.wind_kph} KM/H`;
  humidityText.innerText = `${weatherData.current.humidity}%`;

  toggleLoading();
}

getWeather().then((weatherData) => {
  displayData(weatherData);
});
