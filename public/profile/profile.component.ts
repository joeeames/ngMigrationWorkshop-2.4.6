import { Component, Inject } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../toastr/toastr.service';

@Component({
  selector: 'profile',
  templateUrl: '/profile/profile.component.html',
})
export class ProfileComponent { 
  
  profile: any;

  constructor(
    @Inject('currentIdentity') private currentIdentity:any,
    @Inject('$location') private $location:any,
    @Inject(TOASTR_TOKEN) private toastr:Toastr
    ) {

    this.currentIdentity = currentIdentity;
  }
    
      
  save(newProfile) {
    // this.currentIdentity.updateUser(newProfile);
    toastr.success('Profile Saved!');
  }
  
  cancel() {
    this.$location.path('/home');
  }
  
}