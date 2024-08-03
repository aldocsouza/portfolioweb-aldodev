import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { Certification } from '../../model/Certification';
import { CertificationCardComponent } from '../shared/cards/certification-card/certification-card.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel'
import { IconChevronLeftComponent } from '../shared/icons/icon-chevron-left/icon-chevron-left.component';
import { IconChevronRightComponent } from '../shared/icons/icon-chevron-right/icon-chevron-right.component';

@Component({
  selector: 'certification',
  standalone: true,
  imports: [
    CommonModule,
    CertificationCardComponent,
    SlickCarouselModule,
    IconChevronLeftComponent,
    IconChevronRightComponent
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  slideConfig = {
    dots: true,
    infinite: true,
    mobileFirst: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  certList: Certification[] = [
    {
      image: '/assets/udemy.png',
      name: 'Java - Programação Orientada a Objetos'
    },
    {
      image: '/assets/ada.png',
      name: 'Santander Coder | Back-end Java'
    },
    {
      image: '/assets/loiane.png',
      name: 'Angular - Loiane Groner'
    },
    {
      image: '/assets/loiane.png',
      name: 'Angular + Spring Boot - Loiane Groner'
    },
    {
      image: '/assets/udemy.png',
      name: 'Web Frontend: HTML5/CSS3/JS'
    },
    {
      image: '/assets/ada.png',
      name: 'Design Patterns em Java'
    },
    {
      image: '/assets/ada.png',
      name: 'Serviços Cloud AWS'
    },
    {
      image: '/assets/ada.png',
      name: 'Conhecendo sobre infraestrutura AWS'
    },
    {
      image: '/assets/ada.png',
      name: 'Kubernetes'
    },
    {
      image: '/assets/ada.png',
      name: 'API Rest'
    },
  ]

}
