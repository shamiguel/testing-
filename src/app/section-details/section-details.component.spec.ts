import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionDetailsComponent } from './section-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Content } from '../../customize/interfaces';

describe('SectionDetailsComponent', () => {
  let component: SectionDetailsComponent;
  let fixture: ComponentFixture<SectionDetailsComponent>;
  let portfolioService: jasmine.SpyObj<PortfolioService>;

  const mockContent: Content = {
    name: 'How In The World Do I Make This Accessible?',
    id: 1,
    image: './assets/images/writing.avif',
    position: 'string',
    text: 'Lorem impsum herm er askll moded',
    link: 'https://example.com',
  };

  beforeEach(async () => {
    const portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', ['getExperience', 'getProject', 'getWriting']);
    
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SectionDetailsComponent // Import the standalone component
      ],
      providers: [
        { provide: PortfolioService, useValue: portfolioServiceSpy },
        { provide: ActivatedRoute, useValue: { params: of({}) } } // Keep ActivatedRoute simple
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDetailsComponent);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(PortfolioService) as jasmine.SpyObj<PortfolioService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
