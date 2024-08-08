import { Component, Input, TemplateRef } from '@angular/core';
import { Section } from '../../customize/interfaces';
import { CommonModule, NgIfContext } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

  @Input() sectionData!: Section;
}
