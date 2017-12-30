import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TwainComponent } from './twain.component';
import {TwainService} from '../../services/twain.service';

describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let serv: TwainService;
  let spy;
  let el: HTMLElement;
  let testQuote: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwainComponent ],
      providers: [TwainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testQuote = 'test q';
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    serv = TestBed.get(TwainService);
    spy = spyOn(serv, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));
    // fixture.detectChanges(); // tests expect this not to have been called
  });

  it('should not show quote before OnInit', () => {
    expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    expect(el.textContent).toBe('', 'no quote yet');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });


  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(el.textContent).toBe(testQuote);
    });
  }));

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));

  it('should show quote after getQuote promise (done)', (done: any) => {
    fixture.detectChanges();

    // get the spy promise and wait for it to resolve
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });
  });

});
