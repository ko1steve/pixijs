import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
window.PIXI = PIXI;
import './style.css';
import { IMainConfig, MainConfig } from 'src/config/MainConfig';

window.onload = () => {
	new GmaeApplication();
};

export class GmaeApplication {

	protected appConfig: IMainConfig;
	protected mainContainer: HTMLDivElement;
	protected pixi: PIXI.Application;

	constructor () {
		this.appConfig = new MainConfig();
		document.title = this.appConfig.title;
		document.body.style.overflow = 'hidden';
		this.createElements();
		this.tickStart();
	}

	protected tickStart (): void {
		function animate () {
			requestAnimationFrame( animate )
			TWEEN.update()
		}
		requestAnimationFrame( animate )
	}

	protected createElements (): void {
		this.mainContainer = <HTMLDivElement> document.getElementById( 'mainContainer' );
		this.setupPixiApplication();
	}

	protected setupPixiApplication (): void {
		this.pixi = new PIXI.Application( this.appConfig );
	}

}