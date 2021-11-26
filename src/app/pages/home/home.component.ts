import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  name = 'Angular';
  @ViewChild('bgVideo', { read: ElementRef }) bgVideo:any;

  ngAfterViewInit() {

    const video: HTMLVideoElement = this.bgVideo.nativeElement;

   

    setTimeout(() => {


      // 'muted' doesn't work in Chrome if the DOM element is added after initial page load
      // uncomment this line to mute the video right before playing it

      video.muted = true;
      video.play();

    }, 100);
  }
  
  }
  

  


