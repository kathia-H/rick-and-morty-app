import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDetalsComponent } from './characters-detals.component';

describe('CharactersDetalsComponent', () => {
  let component: CharactersDetalsComponent;
  let fixture: ComponentFixture<CharactersDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersDetalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
