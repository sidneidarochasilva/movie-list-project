import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryComponent } from './search-history.component';

describe('SearcHistoryComponent', () => {
  let component: SearchHistoryComponent;
  let fixture: ComponentFixture<SearchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchHistoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
