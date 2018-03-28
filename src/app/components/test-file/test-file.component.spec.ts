import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFileComponent } from './test-file.component';

describe('TestFileComponent', () => {
  let component: TestFileComponent;
  let fixture: ComponentFixture<TestFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('removeSpaces', () => {
    it('when given empty string, returns empty', () => {
      expect(component.removeSpaces('')).toEqual('');
    });

    it('when given a letter, returns letter', () => {
      expect(component.removeSpaces('a')).toEqual('a');
    });

    it('when given blank string, returns empty', () => {
      expect(component.removeSpaces(' ')).toEqual('');
    });

    it('when given a letter and space, returns letter', () => {
      expect(component.removeSpaces('a ')).toEqual('a');
    });
  });
});
