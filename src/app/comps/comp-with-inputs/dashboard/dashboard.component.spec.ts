import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Router} from '@angular/router';
import {HeroService} from '../hero.service';
import {DashboardHeroComponent} from '../dashboard-hero/dashboard-hero.component';
import {AppModule} from '../../../app.module';


class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('DashboardComponent', () => {
  let comp: DashboardComponent;
  let heroElem: HTMLElement;
  let fixture: ComponentFixture<DashboardComponent>;
  const heroService = {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      // declarations: [ DashboardComponent, DashboardHeroComponent ],
      providers: [{provide: Router, useClass: RouterStub}, {provide: HeroService, useValue: heroService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    heroElem = fixture.nativeElement.querySelector('.hero');
  });

  it('should navigate on click', inject([Router], router => {
      const spy = spyOn(router, 'navigateByUrl');
      heroElem.click();
      const args = spy.calls.first().args[0];
      expect(args).toBe('/heroes/' + comp.heroes[0].id);
  }));

});
