import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapnilNarwadeComponent } from './swapnil-narwade.component';

describe('SwapnilNarwadeComponent', () => {
  let component: SwapnilNarwadeComponent;
  let fixture: ComponentFixture<SwapnilNarwadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapnilNarwadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapnilNarwadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
