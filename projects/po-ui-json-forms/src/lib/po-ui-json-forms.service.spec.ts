import { TestBed } from '@angular/core/testing';

import { PoUiJsonFormsService } from './po-ui-json-forms.service';

describe('PoUiJsonFormsService', () => {
  let service: PoUiJsonFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoUiJsonFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
