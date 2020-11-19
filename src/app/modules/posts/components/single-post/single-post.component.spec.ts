import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostComponent } from './single-post.component';

describe('SinglePostComponent', (): void => {
  let component: SinglePostComponent;
  let fixture: ComponentFixture<SinglePostComponent>;

  beforeEach(async(): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [
        SinglePostComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
