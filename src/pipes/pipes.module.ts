import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen/imagen';
import { ImgPipe } from './img/img';
@NgModule({
	declarations: [ImagenPipe,
    ImgPipe,
    ImgPipe],
	imports: [],
	exports: [ImagenPipe,
    ImgPipe,
    ImgPipe]
})
export class PipesModule {}
