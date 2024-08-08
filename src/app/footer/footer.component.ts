import { Component } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Link } from '../../customize/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  socialMediaLinks:Link[] = [];
  portfolioNames:string[] = [];
  portfolioLinks:Link[] = [

  ]
  constructor(private portfolioService: PortfolioService){

  }

  ngOnInit():void{
    this.portfolioService.getSocialMediaLinks().subscribe((data) => {
      this.socialMediaLinks = data
    })
    this.portfolioService.getSectionNames().subscribe((data) => {
      this.portfolioNames = data
      this.portfolioNames.forEach((name) => {
        const link = `/${name.toLocaleLowerCase()}`
        const newLinkObject:Link = {
          name: name,
          url: link
        }
        this.portfolioLinks.push(newLinkObject)
      });
      
    })
  }
}
