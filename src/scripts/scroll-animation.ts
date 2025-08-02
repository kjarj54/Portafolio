// Scroll Animation Utility for Astro
// Pure TypeScript implementation without React dependencies

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface AnimationConfig {
  animation: string;
  delay: number;
  element: HTMLElement;
}

export class ScrollAnimationManager {
  private observer!: IntersectionObserver;
  private animatedElements: Set<HTMLElement>;
  private options: ScrollAnimationOptions;

  constructor(options: ScrollAnimationOptions = {}) {
    this.animatedElements = new Set();
    this.options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
      once: true,
      ...options,
    };
    
    this.init();
  }

  private init(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animatedElements.has(entry.target as HTMLElement)) {
            const element = entry.target as HTMLElement;
            const delay = parseInt(element.dataset.delay || '0');
            
            setTimeout(() => {
              this.animateElement(element);
              if (this.options.once) {
                this.animatedElements.add(element);
              }
            }, delay);
          }
        });
      },
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin,
      }
    );

    this.observeElements();
  }

  private observeElements(): void {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
      const element = el as HTMLElement;
      this.setInitialState(element);
      this.observer.observe(element);
    });
  }

  private setInitialState(element: HTMLElement): void {
    const animation = element.dataset.animation || 'fade-up';
    element.style.transition = 'all 1s ease-out';
    element.style.opacity = '0';

    switch (animation) {
      case 'fade-up':
        element.style.transform = 'translateY(2rem)';
        break;
      case 'fade-down':
        element.style.transform = 'translateY(-2rem)';
        break;
      case 'fade-left':
        element.style.transform = 'translateX(2rem)';
        break;
      case 'fade-right':
        element.style.transform = 'translateX(-2rem)';
        break;
      case 'scale-up':
        element.style.transform = 'scale(0.95)';
        break;
      case 'slide-up':
        element.style.transform = 'translateY(3rem)';
        break;
      case 'zoom-in':
        element.style.transform = 'scale(0.8)';
        break;
      case 'rotate-in':
        element.style.transform = 'rotate(-5deg) scale(0.95)';
        break;
      default:
        element.style.transform = 'translateY(2rem)';
    }
  }

  private animateElement(element: HTMLElement): void {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) translateX(0) scale(1) rotate(0)';
  }

  public refresh(): void {
    // Re-observe elements (useful for dynamic content)
    this.observer.disconnect();
    this.animatedElements.clear();
    this.observeElements();
  }

  public destroy(): void {
    this.observer.disconnect();
    this.animatedElements.clear();
  }
}

// Utility functions for smooth scrolling
export const smoothScrollTo = (selector: string): void => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Initialize scroll animations when DOM is ready
export const initScrollAnimations = (options?: ScrollAnimationOptions): ScrollAnimationManager => {
  return new ScrollAnimationManager(options);
};

// Auto-initialize for Astro
let scrollAnimationManager: ScrollAnimationManager | null = null;

const autoInit = () => {
  if (scrollAnimationManager) {
    scrollAnimationManager.destroy();
  }
  scrollAnimationManager = new ScrollAnimationManager();
};

// Handle both initial load and client-side navigation
document.addEventListener('DOMContentLoaded', autoInit);
document.addEventListener('astro:page-load', autoInit);

// Cleanup on page unload
document.addEventListener('astro:before-preparation', () => {
  if (scrollAnimationManager) {
    scrollAnimationManager.destroy();
    scrollAnimationManager = null;
  }
});
