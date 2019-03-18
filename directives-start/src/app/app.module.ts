import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic/basic-highlight.directive';
import { BetterHighlightDirective } from './basic/better-highlight.directive';
import { BestHighlightDirective } from './basic/best-highlight.directive';
import { BindingHighlightDirective } from './basic/binding-highlight.directive';
import { UnlessDirective } from './basic/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BestHighlightDirective,
    BindingHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
