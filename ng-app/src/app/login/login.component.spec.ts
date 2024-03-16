/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let page:any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    page=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('given form when email is empty then forgot password button should be disabled', () => {
    expect(page.querySelector('[test-id="forgot-password-button]').disabled).toBeTruthy();//hata alıyorum
  });
  it('given form, when email is invalid, then recover password button should be disabled', ()=>{
  component.form.get('email')?.setValue('invalidEmail');
  fixture.detectChanges();
  
  expect(page.querySelector('[test-id="forgot-password-button]').disabled).toBeTruthy();
});
});
