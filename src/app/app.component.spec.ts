import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {Comp1Component} from './comps/comp1/comp1.component';

describe('AppComponent dankstyle', () => {
  let comp: AppComponent,
    elem: HTMLElement,
    fixture: ComponentFixture<AppComponent>,
    de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, Comp1Component
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    comp = fixture.componentInstance;
    elem = fixture.nativeElement;
    de = fixture.debugElement;
  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(comp.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(elem.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should update h1 on title change', async(() => {
    comp.title = 'dank';
    fixture.detectChanges();
    expect(elem.querySelector('h1').textContent).toContain('Welcome to dank!');
  }));

  it('should update h1 on title change using By', async(() => {
    comp.title = 'dank';
    fixture.detectChanges();
    const h1 = de.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toContain('dank');
  }));

  it('should select child comp', () => {
    expect(de.query(By.directive(Comp1Component)).componentInstance.cval).toContain('from app');
  });

});

