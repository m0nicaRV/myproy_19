import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelessComponent } from './stateless.component';

describe('StatelessComponent', () => {
  let component: StatelessComponent;
  let fixture: ComponentFixture<StatelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
