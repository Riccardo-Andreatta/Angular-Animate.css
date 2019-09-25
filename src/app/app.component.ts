import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public title = 'Animate Angular';
    public selectedOption: string = 'bounce';
    public selectedAnimation: string;

    /**
     * animationChanged function is replacing the CSS animation by adding
     * the `Animate.css` class to the logo element.
     * @param {selectedOption: string}
     */
    public animationChanged(selectedOption: string) {
        this.selectedAnimation = selectedOption;
    }

    /**
     * animate function is forcing the CSS animation on the Angular logo
     * by adding the `Animate.css` class to the logo element.
     * @param {selectedOption: string}
     */
    public animate(selectedOption: string) {
        this.selectedAnimation = selectedOption;
    }

    /**
     * onAnimationEnd function is removeing the animation class when the
     * animation has ended.
     */
    public onAnimationEnd() {
        this.selectedAnimation = '';
    }
}
