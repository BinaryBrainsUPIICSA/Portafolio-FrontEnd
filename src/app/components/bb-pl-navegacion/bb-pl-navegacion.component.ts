import {Component, HostListener, ViewChild} from '@angular/core';
import {CdkOverlayOrigin, Overlay, OverlayConfig, OverlayRef} from "@angular/cdk/overlay";

@Component({
  selector: 'app-bb-pl-navegacion',
  templateUrl: './bb-pl-navegacion.component.html',
  styleUrls: ['./bb-pl-navegacion.component.scss']
})
export class BbPlNavegacionComponent {
  @ViewChild('menuOverlayOrigin') menuOverlayOrigin!: CdkOverlayOrigin;
  overlayRef!: OverlayRef;
  showMenu = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.hideOverlayOnSmallScreen();
  }

  private hideOverlayOnSmallScreen() {
    if (window.innerWidth <= 767) {
      this.showMenu = false;
      this.hideOverlay();
    }
  }

  constructor(private overlay: Overlay) {}

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }

  showOverlay(): void {
    if (!this.overlayRef) {
      const overlayConfig = new OverlayConfig();
      overlayConfig.positionStrategy = this.getOverlayPosition();
      this.overlayRef = this.overlay.create(overlayConfig);
    }
  }

  hideOverlay(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }

  private getOverlayPosition(): any {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.menuOverlayOrigin.elementRef)
      .withPositions(this.getOverlayPositions());
  }

  private getOverlayPositions(): OverlayPosition[] {
    return [
      {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        offsetX: 0,
        offsetY: -8 // Adjust this value to position the menu as desired above the button
      }
    ];
  }
}

interface OverlayPosition {
  originX: 'start' | 'center' | 'end';
  originY: 'top' | 'center' | 'bottom';
  overlayX: 'start' | 'center' | 'end';
  overlayY: 'top' | 'center' | 'bottom';
  offsetX: number;
  offsetY: number;
}
