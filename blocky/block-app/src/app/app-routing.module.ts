/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ConsumerInfoComponent } from './ConsumerInfo/ConsumerInfo.component';

import { ConsumerComponent } from './Consumer/Consumer.component';
import { ClientComponent } from './Client/Client.component';
import { ServiceComponent } from './Service/Service.component';
import { RegulatorComponent } from './Regulator/Regulator.component';

import { SampleTransactionComponent } from './SampleTransaction/SampleTransaction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ConsumerInfo', component: ConsumerInfoComponent },
  { path: 'Consumer', component: ConsumerComponent },
  { path: 'Client', component: ClientComponent },
  { path: 'Service', component: ServiceComponent },
  { path: 'Regulator', component: RegulatorComponent },
  { path: 'SampleTransaction', component: SampleTransactionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
