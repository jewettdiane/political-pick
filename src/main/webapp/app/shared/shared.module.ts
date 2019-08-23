import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PoliticalPickSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PoliticalPickSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [PoliticalPickSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PoliticalPickSharedModule {
  static forRoot() {
    return {
      ngModule: PoliticalPickSharedModule
    };
  }
}
