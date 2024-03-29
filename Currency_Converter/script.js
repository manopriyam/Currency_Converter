apikey="";

currencies = [
    "USD",
    "AED",
    "AUD",
    "CAD",
    "CNY",
    "EUR",
    "GBP",
    "HKD",
    "INR",
    "JPY",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "FJD",
    "FKP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STD",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VEF",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
];

let frommenu = document.getElementById("fromcurr");
let tomenu = document.getElementById("tocurr");

for (let i=0; i<currencies.length; i++) {
    let option = document.createElement("option");
    option.value = currencies[i];
    option.text = currencies[i];
    frommenu.appendChild(option);
}

for (let i=0; i<currencies.length; i++) {
    let option = document.createElement("option");
    option.value = currencies[i];
    option.text = currencies[i];
    tomenu.appendChild(option);
}

async function convertCurrency() {
    let fc=frommenu.value;
    let tc=tomenu.value;
    
    let amount = document.getElementById("amt");
    let val = amount.value;

    let apireq = `https://v6.exchangerate-api.com/v6/${apikey}/pair/${fc}/${tc}/${val}`;

    let response = await fetch(apireq);
    let data = await response.json();

    let answer = document.getElementById("ans");
    let ans = data.conversion_result.toFixed(2);

    answer.value = `${fc} ${val} = ${tc} ${ans}`;
}

