import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthentificatorsPage } from './authentificators.page';

describe('AuthentificatorsPage', () => {
  let component: AuthentificatorsPage;
  let fixture: ComponentFixture<AuthentificatorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
