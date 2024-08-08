import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { Content } from '../../customize/interfaces';

@Component({
  selector: 'app-section-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './section-details.component.html',
  styleUrl: './section-details.component.scss'
})
export class SectionDetailsComponent {
 currentUrl: string;
 segment:string;
 content!:Content;
 id:number;

  constructor(private router: Router, private route:ActivatedRoute, private portfolioService: PortfolioService){
    this.currentUrl = this.router.url
    const segments = this.currentUrl.split('/');
    this.segment = segments[1];
    this.id = parseInt(segments[2]);
    if(!this.id) return;
    if(this.segment === 'experience'){
      this.portfolioService.getExperience(this.id)!.subscribe((data)=>{
        this.content = data;
      })
    }else if(this.segment === 'projects'){
      this.portfolioService.getProject(this.id)!.subscribe((data)=>{
        this.content = data
      })
    }else if(this.segment === 'writings'){
      this.portfolioService.getWriting(this.id)!.subscribe((data)=>{
        this.content = data
      })
    }
  }
}
