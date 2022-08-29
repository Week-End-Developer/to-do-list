import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private _userService: UserService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    if (!!localStorage.getItem('accessToken')) {
      if (await this._userService.checkUserAccessToPage(state.url) == false) {
        this.router.navigateByUrl('/no-access').then();
        return;
      }

      return true;
    } else {
      this.router.navigateByUrl('/login').then();
      return false;
    }


  }
}


// if (!!localStorage.getItem('accessToken')) {
//   if (!this._userService.checkUserAccessToPage(state.url)) {

//   } {
//     return true;
//   } else {
//     console.log("Giremedim");
//     this.router.navigateByUrl('/no-access').then();
//     return;
//   }

//   this.router.navigateByUrl('/login').then();
//   return false;
// }