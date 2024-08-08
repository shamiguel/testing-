import { Component, Input } from '@angular/core';
import { Section } from '../../customize/interfaces';
import {Router, RouterModule } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './section-page.component.html',
  styleUrl: './section-page.component.scss'
})
export class SectionPageComponent {
  currentUrl!: string;
  segment!: string;
  section!:Section;
  
  constructor(private router: Router, private portfolioService:PortfolioService){}
  ngOnInit(){
    this.currentUrl = this.router.url
    const segments = this.currentUrl.split('/');
    this.segment = segments[1];
    console.log(this.segment)
    if(this.segment === 'experience'){
      this.portfolioService.getExperiences().subscribe((data)=>{
        this.section = data;
      })
    }else if(this.segment === 'projects'){
      this.portfolioService.getProjects().subscribe((data)=>{
        this.section = data
      })
    }else if(this.segment === 'writings'){
      this.portfolioService.getWritings().subscribe((data)=>{
        this.section = data
      })
    }
  }

}
