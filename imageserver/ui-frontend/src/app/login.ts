/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.ng.html',
  styleUrls: ['./login.scss']
})
export class Login {
  constructor(private auth: AuthService, private router: Router) {}

  loginUser(event: Event) {
    event.preventDefault();
    const username =
        (document.getElementById('username') as HTMLInputElement).value;

    this.router.navigate(['thumbnail']);
    this.auth.setLoggedIn(true);
    this.auth.setUsername(username);
  }
}
