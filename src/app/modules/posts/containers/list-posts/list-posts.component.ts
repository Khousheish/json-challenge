import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { PostsFacade } from '../../store/posts.facade';

@Component({
  selector: 'jc-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPostsComponent {

  public constructor(
    public readonly postsFacade: PostsFacade,
    public readonly translateService: TranslateService,
  ) {
  }

  public changeLanguage(): void {
    this.translateService.currentLang === 'en'
      ? this.translateService.use('ar')
      : this.translateService.use('en');
  }
}
