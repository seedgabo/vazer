import { Component } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { NotificationsPage } from "../notifications/notifications";
import { SettingsPage } from "../settings/settings";
import { TripsPage } from "../trips/trips";
import { SearchLocationPage } from "../search-location/search-location";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  entries = [
    {
      title: "EXPECT RESULTS THAT ARE YOUR PERFECT FIT",
      text:
        "With VASER® treatments, you can achieve beautiful results you’ll notice right away. VASERlipo® is designed for people like you who are looking to be the best they can be.VASERlipo just might give you the inspiration you need to live healthier and happier.With just one procedure, you can expect dramatic results that can have you smiling and feeling more confident. Talk to a VASER physician to determine the best treatment options for you."
    },
    {
      title: "Precision Body Contouring",
      text:
        "If you’ve struggled with weight gain, and exercise and diet just haven't given you the dramatic transformation you’d like, VASERlipo® can help. VASERlipo uses a precise, minimally invasive liposuction technology that produces eye-catching results in just one procedure and the technology provides many benefits versus traditional liposuction treatments. The procedure is tissue-selective, targeting fat while protecting other tissues from damage. It’s powerful enough to eliminate substantial areas of fat but gentle enough to treat delicate areas such as the neck and arms. VASERlipo is clinically proven to produce even results in treated areas, leaving your skin smooth and your body beautifully contoured."
    },
    {
      title: "HELPING YOUR BODY FIT YOUR LIFESTYLE",
      text:
        "For over a decade, VASER® has provided high quality, versatile body shaping procedures to patients throughout the world. The VASERlipo® procedure is well-respected and uses trusted ultrasound-assisted liposuction technology. With a suite of body shaping tools and treatments, VASER gives you customized solutions that fit your lifestyle. By choosing VASER, you're getting trusted science and clinically proven results."
    }
  ];
  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {}

  ionViewWillEnter() {}
  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}

//
