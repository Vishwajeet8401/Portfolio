import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log("greate");
    // this.startTypingEffect();
  }
  ngAfterViewInit(): void {
    // setTimeout(()=>{this.startTypingEffect()}, 1000);  
    }
  staticText: string = 'I am';
  words: string[] = ['Developer', 'Software Engineer', 'Tech Enthusiast'];
  currentWord: string = '';
  wordIndex: number = 0;

  

  startTypingEffect() {
    let charIndex = 0;
    const typingSpeed = 150; // Speed of typing in ms
    const erasingSpeed = 100; // Speed of erasing in ms
    const delayBetweenWords = 1000; // Delay before switching to the next word

    const typeWord = () => {
      if (charIndex < this.words[this.wordIndex].length) {
        this.currentWord += this.words[this.wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, typingSpeed);
      } else {
        setTimeout(eraseWord, delayBetweenWords);
      }
    };

    const eraseWord = () => {
      if (charIndex > 0) {
        this.currentWord = this.currentWord.slice(0, -1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
      } else {
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        setTimeout(typeWord, typingSpeed);
      }
    };

    typeWord();
  }
}
