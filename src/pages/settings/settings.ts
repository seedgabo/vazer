import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  language = "en";
  currency = "dollar";
  constructor(public nav: NavController, public translate: TranslateService) {}

  logout() {
    this.nav.setRoot(LoginPage);
  }
  changeLanguage(ev) {
    this.translate.use(this.language);
  }
}
