import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './common/popover/popover.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { ImgHoverDirective } from './common/directives/img-hover.directive';
import { ContactModalComponent } from "./common/contactModal/contactModal.components";
import { ModalService } from "./common/services/modal.service";
import { ReactiveFormsModule } from "@angular/forms";

export { TopMenuComponent } from './common/top-menu/top-menu.component';

@NgModule({
  declarations: [
    PopoverComponent,
    TopMenuComponent,
    ImgHoverDirective,
    ContactModalComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    TopMenuComponent
  ],
  providers: [ModalService]
})
export class CommonDocsModule {}
