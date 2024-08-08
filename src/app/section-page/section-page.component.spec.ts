import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionPageComponent } from './section-page.component';
import { Content, Section } from '../../customize/interfaces';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PortfolioService } from '../services/portfolio.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

const mockContent: Content = {
  name: 'How In The World Do I Make This Accessible?',
  id: 1,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

const mockSection: Section = {
  name: 'Experience',
  primary: true,
  display: true,
  content: [mockContent],
};

describe('SectionPageComponent', () => {
  let component: SectionPageComponent;
  let fixture: ComponentFixture<SectionPageComponent>;
  let portfolioService: jasmine.SpyObj<PortfolioService>;

  beforeEach(async () => {
    const portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', ['getExperiences', 'getProjects', 'getWritings']);
    
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SectionPageComponent
      ],
      providers: [
        { provide: PortfolioService, useValue: portfolioServiceSpy },
        { provide: ActivatedRoute, useValue: { params: of({}) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPageComponent);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(PortfolioService) as jasmine.SpyObj<PortfolioService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set the segment to "experience" and load experiences', () => {
    portfolioService.getExperiences.and.returnValue(of(mockSection));
    
    Object.defineProperty(component['router'], 'url', { get: () => '/experience' });

    fixture.detectChanges();

    expect(component.segment).toBe('experience');
    expect(portfolioService.getExperiences).toHaveBeenCalled();
    expect(component.section).toEqual(mockSection);
  });

  it('should set the segment to "projects" and load projects', () => {
    portfolioService.getProjects.and.returnValue(of(mockSection));
    
    Object.defineProperty(component['router'], 'url', { get: () => '/projects' });

    fixture.detectChanges();

    expect(component.segment).toBe('projects');
    expect(portfolioService.getProjects).toHaveBeenCalled();
    expect(component.section).toEqual(mockSection);
  });

  it('should set the segment to "writings" and load writings', () => {
    portfolioService.getWritings.and.returnValue(of(mockSection));
    
    Object.defineProperty(component['router'], 'url', { get: () => '/writings' });

    fixture.detectChanges();

    expect(component.segment).toBe('writings');
    expect(portfolioService.getWritings).toHaveBeenCalled();
    expect(component.section).toEqual(mockSection);
  });
});