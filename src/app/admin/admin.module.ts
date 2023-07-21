import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { MaterialFeatures } from './material.module';
import { OrderTableComponent } from './orderTable.component';
import { PrdouctEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  // { path: 'main', component: AdminComponent },
  // { path: 'main', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products/:mode/:id', component: PrdouctEditorComponent },
      { path: 'products/:mode', component: PrdouctEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, MaterialFeatures],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    PrdouctEditorComponent,
    OrderTableComponent,
  ],
  providers: [AuthGuard],
})
export class AdminModule {}
