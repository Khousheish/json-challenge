import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsComponent } from './list-posts.component';

describe('ListPostsComponent', (): void => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;

  beforeEach(async(): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [
        ListPostsComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
