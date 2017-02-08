import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UpgradeAdapter, UpgradeAdapterRef } from '@angular/upgrade';

// This is really strange. But you need the module when you create 
// the upgrade adapter, but you also need the created upgrade adapter
// when creating the Module (see below, the call to upgradeNg1Component)
// so we use a forwardRef, and we have to put the upgradeAdapter and the 
// module in the same file
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
    // RouterModule.forRoot([], {useHash: true})
  ],
  declarations: [
    AppComponent,
    
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
