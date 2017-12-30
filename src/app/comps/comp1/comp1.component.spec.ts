import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Component } from './comp1.component';
import {DebugElement} from '@angular/core';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;
  let elem: HTMLElement;
  let delem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    elem = fixture.nativeElement;
    delem = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });

  it('should set and show cval',  () => {
    component.cval = 'lala';
    fixture.detectChanges();
    expect(elem.querySelector('.comp1').textContent).toBe('comp 1 content: lala');
  });

});
