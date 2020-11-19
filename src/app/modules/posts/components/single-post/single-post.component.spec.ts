import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOCKED_POST } from '@Mocks/posts.mock';
import { TranslateTestingModule } from '@Mocks/translate.mock.spec';

import { SinglePostComponent } from './single-post.component';

describe('SinglePostComponent', (): void => {
  let component: SinglePostComponent;
  let fixture: ComponentFixture<SinglePostComponent>;

  beforeEach(async(): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule,
      ],
      declarations: [
        SinglePostComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;
    component.post = MOCKED_POST;

    fixture.detectChanges();
  });

  describe('handleClick', (): void => {
    it('should flip showId', (): void => {
      component.showId = true;

      component.handleClick();

      expect(component.showId).toBeFalse();
    });
  });
});
