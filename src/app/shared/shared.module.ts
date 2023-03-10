import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationModule } from "../authentication/authentication.module";
import { CarouselComponent } from "./carousel/carousel.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { WorksComponent } from './works/works.component';
import { AnnouncementsModule } from "../announcements/announcement.module";
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        CarouselComponent,
        ContactComponent,
        BacktotopComponent,
        WorksComponent,
        AboutComponent,
        SearchComponent
    ],
    exports: [
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        CarouselComponent,
        BacktotopComponent,
        WorksComponent,
        SearchComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthenticationModule,
        AnnouncementsModule
    ]
})
export class SharedModule {

}
