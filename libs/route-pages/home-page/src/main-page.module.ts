import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./routes";
import { SwiperModule } from "swiper/angular";
import { CommonDocsModule, GetPortfolioService } from '@valor-software/common-docs';
import { NpmStatisticService } from './getNpmStatistic.service';
import { MainPageComponent } from "./main-page.component";
import { FeedbackModule } from "@valor-software/feedback";
import { BusinessesCardComponent } from './businesses-card.component';

export { MainPageComponent } from "./main-page.component";

@NgModule({
    declarations: [
        MainPageComponent,
        BusinessesCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SwiperModule,
        CommonDocsModule,
        FeedbackModule
    ],
    providers: [NpmStatisticService, GetPortfolioService]
})
export class MainPageModule {
    static routes: Routes = routes;
}
