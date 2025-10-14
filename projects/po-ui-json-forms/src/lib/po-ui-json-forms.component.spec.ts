import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoUiJsonFormsComponent } from './po-ui-json-forms.component';

describe('PoUiJsonFormsComponent', () => {
  let component: PoUiJsonFormsComponent;
  let fixture: ComponentFixture<PoUiJsonFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoUiJsonFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoUiJsonFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
