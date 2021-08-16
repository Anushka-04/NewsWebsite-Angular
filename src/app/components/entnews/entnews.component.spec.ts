import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntnewsComponent } from './entnews.component';

describe('EntnewsComponent', () => {
  let component: EntnewsComponent;
  let fixture: ComponentFixture<EntnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
