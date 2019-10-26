import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameslistPage } from './gameslist.page';

describe('GameslistPage', () => {
  let component: GameslistPage;
  let fixture: ComponentFixture<GameslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
