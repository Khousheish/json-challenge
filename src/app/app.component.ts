import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@Environment';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public title: string = 'json-challenge';

  public constructor(
    private readonly translateService: TranslateService,
    private readonly titleService: Title,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.translateService.setDefaultLang(environment.defaultLang);
    this.translateService.use(environment.defaultLang);
  }
}
