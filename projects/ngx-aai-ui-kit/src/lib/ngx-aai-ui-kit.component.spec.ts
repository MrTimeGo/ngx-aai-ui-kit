import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAaiUiKitComponent } from './ngx-aai-ui-kit.component';

describe('NgxAaiUiKitComponent', () => {
  let component: NgxAaiUiKitComponent;
  let fixture: ComponentFixture<NgxAaiUiKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAaiUiKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAaiUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
