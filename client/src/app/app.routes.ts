import { Routes } from '@angular/router'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { EventsComponent } from './events/events.component'
import { SpecialEventsComponent } from './special-events/special-events.component'

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'special-events', component: SpecialEventsComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
]
