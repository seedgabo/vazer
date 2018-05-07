import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";

import { ActivityService } from "../services/activity-service";
import { TripService } from "../services/trip-service";
import { WeatherProvider } from "../services/weather";

import { MyApp } from "./app.component";

import { SettingsPage } from "../pages/settings/settings";
import { CheckoutTripPage } from "../pages/checkout-trip/checkout-trip";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { NotificationsPage } from "../pages/notifications/notifications";
import { RegisterPage } from "../pages/register/register";
import { SearchLocationPage } from "../pages/search-location/search-location";
import { TripDetailPage } from "../pages/trip-detail/trip-detail";
import { TripsPage } from "../pages/trips/trips";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { CalendarPage } from "../pages/calendar/calendar";

// import services
// end import services
// end import services

// import pages
// end import pages
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: "__ionic3_start_theme",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    CalendarPage
  ],
  providers: [StatusBar, SplashScreen, Keyboard, ActivityService, TripService, WeatherProvider]
})
export class AppModule {}
