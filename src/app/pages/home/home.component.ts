import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  name = 'Angular';
  @ViewChild('bunnyVideo', { read: ElementRef }) bunnyVideo:any;

  ngAfterViewInit() {

    const video: HTMLVideoElement = this.bunnyVideo.nativeElement;

   

    setTimeout(() => {


      // 'muted' doesn't work in Chrome if the DOM element is added after initial page load
      // uncomment this line to mute the video right before playing it

      video.muted = true;


      try {
        if (video.muted) {

          console.log('playing muted video...');

          // try to play the muted video
          video.play().catch((err) => {
           console.log('*** ERROR *** Cannot play the muted video (probably mobile browser) ' + err);
          });
        }
        else {

          console.log('play unmuted video...');

          // try to play the muted video
          video.play().catch((err) => {
            console.log ('*** ERROR *** Cannot play the unmuted video (probably mobile browser) ' + err);
          });
        }

      }
      catch (err) {
        console.log('SOME OTHER ERROR');
      }

    }, 100);
  }
  
  }
  

  


