import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '../../shared/posts.model';

@Component({
  selector: 'jc-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePostComponent {
  @Input() public post: Post;

  public showId: boolean = true;

  public handleClick(): void {
    this.showId = !this.showId;
  }
}
