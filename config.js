var config = {
    // Lenguage for the mirror (currently not implemented)
    lenguage : "en",
    greeting : ["Hi, sexy!", "Goedemorgen!", "Happy Tuesday!"], // An array of greetings to randomly choose from
    // forcast.io
    forcast : {
        key : "e97f236510e92a312f54b7c432aa5f12", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Philips Hue
    hue : {
        ip : "", // The IP address of your hue base
        uername : "", // The username used to control your hue
        group : "0", // The group you'd like the mirror to control (0 is all hue lights connected to your hub)
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : [],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    // Giphy
    giphy: {
      key : "dc6zaTOxFJmzC" // Your Gliphy API key
    },
    traffic: {
      key : "ybLTyVQuuybPborWFb1b~HXbbDtMYqCV6EvfHkP7zsQ~AkikrAY-vOcfaVdjN-vQfikxDCjaCNsDIgoXlD2OvppxPi3VzvbAiW7DiNWzq9ou", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "Maria Duystlaan, 2612 SR Delft, Nederland", // Start of your trip. Human readable address.
      destination : "Station Rotterdam Centraal, Nederland", // Destination of your trip. Human readable address.
      name : "work", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    }
}
