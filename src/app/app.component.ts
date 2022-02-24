import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  VERSION,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('class.my-app')
  public hasBoundClass = true;

  name = 'Angular ' + VERSION.major;
}
