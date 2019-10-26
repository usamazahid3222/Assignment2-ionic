import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgamePage } from './addgame.page';

describe('AddgamePage', () => {
  let component: AddgamePage;
  let fixture: ComponentFixture<AddgamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
