import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule} from "@angular/cdk/drag-drop";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import {CdkDropList} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CdkDropList,
      DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
