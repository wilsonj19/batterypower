
export const BATTERYINFO = [
  {
    ratingGood: [
      { name: "Rating", status: "Good", icon: "ios-happy-outline" },
      { name: "Temp", status: "30C", icon: "ios-thermometer-outline" },
      { name: "Battery Status", status: "High", icon: "ios-build-outline" },
      { name: "Battery Level", status: "90"+"%", icon: "ios-battery-dead-outline" },
      { name: "Connected", status: "True", icon: "ios-power-outline" },
      { name: "Discharging", status: "08"+"h"+" "+"50"+"m", icon: "ios-timer-outline"
     }
    ],
    ratingBad: [
      { name: "Rating", status: "Pool", icon: "ios-outlet-outline" },
      { name: "Temp", status: "30C", icon: "ios-thermometer-outline" },
      { name: "Battery Status", status: "Low", icon: "ios-build-outline" },
      { name: "Battery Level", status: "90"+"%", icon: "ios-battery-dead-outline" },
      { name: "Connected", status: "True", icon: "ios-power-outline" },
      { name: "Discharging", status: "08"+"h"+" "+"50"+"m", icon: "ios-timer-outline" }
    ]
  },
  {
    assets: {
        images: {
            loading: 'assets/images/drbs-front.jpg',
            brand: 'assets/images/drbs-brand.jpg'
        }
    }
  }
]
