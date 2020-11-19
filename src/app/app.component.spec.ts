import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';

import { TranslateTestingModule } from '@Mocks/translate.mock.spec';
import { Spied } from '@Specs/types/utils.type';

import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockedTranslateService: Spied<TranslateService>;

  beforeEach(async(): Promise<void> => {
    mockedTranslateService = {
      ...jasmine.createSpyObj('TranslateService', ['use', 'setDefaultLang']),
    };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        {
          provide: TranslateService,
          useValue: mockedTranslateService,
        },
      ],
    }).compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should have as title 'json-challenge'`, (): void => {
    expect(component.title).toEqual('json-challenge');
  });
});
