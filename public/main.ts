import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { UpgradeModule } from '@angular/upgrade/static';

// this is done to make sure that typescript knows about all the rxjs operations
import './rxjsOperations';


platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
