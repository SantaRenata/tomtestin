import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyindexComponent } from './bodyindex.component';

describe('BodyindexComponent', () => {
  let component: BodyindexComponent;
  let fixture: ComponentFixture<BodyindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
