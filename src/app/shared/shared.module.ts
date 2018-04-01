import { LoadingService } from './loading/loading.service';
import { HttpBaseService } from './http-base.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginacaoComponent, LoadingComponent],
  exports: [CommonModule, PaginacaoComponent, LoadingComponent],
  providers: [LoadingService]
})
export class SharedModule {}
