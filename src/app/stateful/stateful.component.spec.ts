import { ComponentFixture, TestBed } from '@angular/core/testing';


import { StatefulComponent } from './stateful.component';

describe('StatefulComponent', () => {
  let component: StatefulComponent;
  let fixture: ComponentFixture<StatefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatefulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
