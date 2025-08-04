
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from "../projects/projects.component";
import { CertificationsComponent } from '../certifications/certifications.component';
import { ExtraComponent } from "../extra/extra.component";
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, CertificationsComponent, ExtraComponent, ContactComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('starfieldCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private stars: Star[] = [];
  private readonly STAR_COUNT = 200;
  
  // Typing effect properties
  public typedText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;
  private typingTimeout?: any;
  
  private readonly roles = [
    'Web Developer',
    'Java Full Stack',
    'Frontend Specialist',
    
  ];

  ngOnInit(): void {
    this.startTypingEffect();
  }

  ngAfterViewInit(): void {
    this.initializeStarfield();
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  private initializeStarfield(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    
    this.resizeCanvas();
    this.createStars();
    this.animate();
  }

  private resizeCanvas(): void {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private createStars(): void {
    this.stars = [];
    for (let i = 0; i < this.STAR_COUNT; i++) {
      this.stars.push(new Star(this.canvas.width, this.canvas.height));
    }
  }

  private animate(): void {
    // Check current theme for background clearing
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light' || 
                       (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches && 
                        !document.documentElement.getAttribute('data-theme'));
    
    if (isLightMode) {
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    } else {
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    }
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.stars.forEach(star => {
      star.update();
      star.draw(this.ctx, isLightMode);
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private handleResize(): void {
    this.resizeCanvas();
    this.createStars();
  }

  private startTypingEffect(): void {
    const currentRole = this.roles[this.roleIndex];
    
    if (!this.isDeleting) {
      // Typing
      if (this.charIndex < currentRole.length) {
        this.typedText = currentRole.substring(0, this.charIndex + 1);
        this.charIndex++;
        this.typingTimeout = setTimeout(() => this.startTypingEffect(), this.typingSpeed);
      } else {
        // Pause at end of word
        this.typingTimeout = setTimeout(() => {
          this.isDeleting = true;
          this.startTypingEffect();
        }, this.pauseTime);
      }
    } else {
      // Deleting
      if (this.charIndex > 0) {
        this.typedText = currentRole.substring(0, this.charIndex - 1);
        this.charIndex--;
        this.typingTimeout = setTimeout(() => this.startTypingEffect(), this.deletingSpeed);
      } else {
        // Move to next role
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.typingTimeout = setTimeout(() => this.startTypingEffect(), 500);
      }
    }
  }
}

class Star {
  private x: number;
  private y: number;
  private z: number;
  private prevX: number;
  private prevY: number;
  private maxZ: number;

  constructor(private canvasWidth: number, private canvasHeight: number) {
    this.maxZ = 1500;
    this.x = Math.random() * canvasWidth - canvasWidth / 2;
    this.y = Math.random() * canvasHeight - canvasHeight / 2;
    this.z = Math.random() * this.maxZ;
    this.prevX = this.x / (this.z * 0.0005) + canvasWidth / 2;
    this.prevY = this.y / (this.z * 0.0005) + canvasHeight / 2;
  }

  update(): void {
    this.z -= 3;
    if (this.z <= 0) {
      this.z = this.maxZ;
      this.x = Math.random() * this.canvasWidth - this.canvasWidth / 2;
      this.y = Math.random() * this.canvasHeight - this.canvasHeight / 2;
    }
    this.prevX = this.x / (this.z * 0.0005) + this.canvasWidth / 2;
    this.prevY = this.y / (this.z * 0.0005) + this.canvasHeight / 2;
  }

  draw(ctx: CanvasRenderingContext2D, isLightMode: boolean = false): void {
    const x = this.x / (this.z * 0.0005) + this.canvasWidth / 2;
    const y = this.y / (this.z * 0.0005) + this.canvasHeight / 2;
    const opacity = 1 - this.z / this.maxZ;
    const radius = (1 - this.z / this.maxZ) * 2;

    // Use black color for light mode, white for dark mode
    const color = isLightMode ? '0, 0, 0' : '255, 255, 255';

    ctx.beginPath();
    ctx.strokeStyle = `rgba(${color}, ${opacity})`;
    ctx.lineWidth = radius;
    ctx.moveTo(this.prevX, this.prevY);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = `rgba(${color}, ${opacity})`;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}