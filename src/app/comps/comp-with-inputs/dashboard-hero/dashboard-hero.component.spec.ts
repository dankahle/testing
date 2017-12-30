import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { DashboardHeroComponent } from './dashboard-hero.component';
import {Hero} from '../hero';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {click} from '../../../../testing/helpers';

@Component({
  template: `<app-dashboard-hero [hero]="hero" (selected)="onSelected($event)"></app-dashboard-hero>`
})
class HostDashboardHeroComponent {
  hero = new Hero(1,'dank', 50);
  selectedHero: Hero;
  onSelected(selHero) {
    this.selectedHero = selHero;
  }
}

describe('DashboardHeroComponent', () => {
  let hcomp: HostDashboardHeroComponent;
  let comp: DashboardHeroComponent;
  let fixture: ComponentFixture<HostDashboardHeroComponent>;
  let elem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDashboardHeroComponent, DashboardHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDashboardHeroComponent);
    hcomp = fixture.componentInstance;
    comp = fixture.debugElement.query(By.directive(DashboardHeroComponent)).componentInstance;
    // this doesn't work (below) cause it gets the ng host elem, not the content elem with the click handler
    // elem = fixture.debugElement.query(By.directive(DashboardHeroComponent)).nativeElement;
    elem = fixture.debugElement.nativeElement.querySelector('.hero');
    fixture.detectChanges();

  });

  it('should contain text', () => {
    expect(elem.textContent).toContain(hcomp.hero.name.toUpperCase());
  });

  it('should handle click event no async', () => {
    click(elem)
    expect(hcomp.selectedHero).toBe(hcomp.hero);
  });

  it('should handle click event (async)', async(() => {
    // click(elem);
    elem.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(hcomp.selectedHero).toBe(hcomp.hero);
    });
  }));

  it('should handle click event (fakeAsync)', fakeAsync(() => {
    click(elem)
    tick();
    expect(hcomp.selectedHero).toBe(hcomp.hero);
  }));

});
