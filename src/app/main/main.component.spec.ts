import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MainComponent } from './main.component';
import { Content, Section } from '../../customize/interfaces';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PortfolioService } from '../services/portfolio.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('SectionPageComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let portfolioService: jasmine.SpyObj<PortfolioService>;

  beforeEach(async () => {
    const portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', ['getExperiences', 'getProjects', 'getWritings']);
    
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MainComponent
      ],
      providers: [
        { provide: PortfolioService, useValue: portfolioServiceSpy },
        { provide: ActivatedRoute, useValue: { params: of({}) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(PortfolioService) as jasmine.SpyObj<PortfolioService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
