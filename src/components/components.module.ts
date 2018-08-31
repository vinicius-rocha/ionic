import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message';

@NgModule({
	declarations: [
		MessageComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MessageComponent
	]
})
export class ComponentsModule { }
