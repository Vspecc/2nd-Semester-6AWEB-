import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: '01',
      icon: 'assets/icons/cloud.svg', // Use emoji or SVG paths if preferred
      title: 'Cloud Infrastructure',
      description: 'Architecting resilient, scalable cloud environments with automated CI/CD pipelines.',
      tags: ['AWS', 'Azure', 'Terraform']
    },
    {
      id: '02',
      icon: 'assets/icons/web.svg',
      title: 'Full-Stack Development',
      description: 'Building high-performance web applications using modern frameworks and microservices.',
      tags: ['Angular', 'Node.js', 'Go']
    },
    {
      id: '03',
      icon: 'assets/icons/shield.svg',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive vulnerability assessments and implementation of zero-trust security protocols.',
      tags: ['Pen-Testing', 'IAM', 'Compliance']
    },
    {
      id: '04',
      icon: 'assets/icons/data.svg',
      title: 'AI & Data Analytics',
      description: 'Turning raw data into actionable insights through machine learning models and visualization.',
      tags: ['Python', 'TensorFlow', 'PowerBI']
    }
  ];

  searchTerm: string = '';

  get filteredServices() {
    return this.services.filter(service =>
      service.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}