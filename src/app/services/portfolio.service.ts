import { Injectable } from '@angular/core';
import { intro, socialMediaLinks, projectSection, experienceSection, writingSection } from '../../customize/portfolio';
import { Observable, of } from 'rxjs';
import { Section, Content, Link } from '../../customize/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  sections:Section[] = [
    projectSection,
    experienceSection,
    writingSection
  ]

  constructor() { }

  getIntro(): Observable<any>{
    return of(intro)
  }

  getProjects(): Observable<Section>{
    return of(projectSection)
  }

  getProject(id: number): Observable<Content> | undefined{
    const project = projectSection.content.find((c) => c.id === id)
    if(!project) return undefined;
    return of(project)
  }

  getWritings(): Observable<Section>{
    return of(writingSection)
  }  

  getWriting(id: number): Observable<Content> | undefined{
    const writing = writingSection.content.find((c) => c.id === id)
    if(!writing) return undefined;
    return of(writing)
  }

  getExperiences(): Observable<Section>{
    return of(experienceSection)
  }    

  getExperience(id: number): Observable<Content> | undefined{
    const exp = experienceSection.content.find((c) => c.id === id)
    if(!exp) return undefined;
    return of(exp)
  }

  getSocialMediaLinks(): Observable<Link[]>{
    return of(socialMediaLinks)
  }

  getSectionNames(): Observable<string[]>{
      const names:string[] = [];
      this.sections.forEach((section) => names.push(section.name))
      return of(names);
  }
}
