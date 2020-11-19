import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { Spied } from '@Specs/types/utils.type';

import { PostsFacade } from '../../store/posts.facade';
import { ListPostsComponent } from './list-posts.component';

describe('ListPostsComponent', (): void => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;
  let mockedTranslateService: Spied<TranslateService>;
  let mockedPostsFacade: Spied<PostsFacade>;

  beforeEach(async(): Promise<void> => {
    mockedTranslateService = {
      ...jasmine.createSpyObj('TranslateService', ['use', 'get']),
    };
    mockedPostsFacade = {
      ...jasmine.createSpyObj('PostsFacade', ['setPendingState']),
    };

    await TestBed.configureTestingModule({
      declarations: [
        ListPostsComponent,
      ],
      providers: [
        {
          provide: PostsFacade,
          useValue: mockedPostsFacade,
        },
        {
          provide: TranslateService,
          useValue: mockedTranslateService,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('handleClick', (): void => {
    it('should change language', (): void => {
      mockedTranslateService.currentLang = 'en';
      component.changeLanguage();

      expect(mockedTranslateService.use).toHaveBeenCalledTimes(1);
      expect(mockedTranslateService.use).toHaveBeenCalledWith('ar');
    });

    it('should change language', (): void => {
      mockedTranslateService.currentLang = 'ar';
      component.changeLanguage();

      expect(mockedTranslateService.use).toHaveBeenCalledTimes(1);
      expect(mockedTranslateService.use).toHaveBeenCalledWith('en');
    });
  });
});
