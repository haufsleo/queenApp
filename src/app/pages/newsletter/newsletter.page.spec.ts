import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsletterPage } from './newsletter.page';

describe('NewsletterPage', () => {
  let component: NewsletterPage;
  let fixture: ComponentFixture<NewsletterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
