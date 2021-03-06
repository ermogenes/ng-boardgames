import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameDetailComponent } from './boardgame-detail.component';

describe('BoardgameDetailComponent', () => {
  let component: BoardgameDetailComponent;
  let fixture: ComponentFixture<BoardgameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
