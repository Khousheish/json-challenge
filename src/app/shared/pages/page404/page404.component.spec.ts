import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateTestingModule } from '@Mocks/translate.mock.spec';

import { Page404Component } from './page404.component';

describe('Page404Component', (): void => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async(): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule,
      ],
      declarations: [
        Page404Component,
      ],
    })
    .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
