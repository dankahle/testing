import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {UserService} from '../../services/user.service';


describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userServiceStub: any;
  let userService: UserService;
  let elem: HTMLElement;

  beforeEach(async(() => {
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers:    [ {provide: UserService, useValue: userServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    // userService = fixture.debugElement.injector.get(UserService);
    userService = TestBed.get(UserService);
    elem = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should welcome user', () => {
    const content = elem.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');  });

  it('should welcome dank', () => {
    userService.user.name = 'dank';
    fixture.detectChanges();
    const content = elem.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('dank', 'expected name');
  });

  it('should say login', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const content = elem.textContent;
    expect(content).not.toContain('Welcome', '"Welcome ..."');
    expect(content).toMatch(/log in/i);
  });

});
