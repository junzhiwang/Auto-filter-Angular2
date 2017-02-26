import {Component} from 'angular2/core';

@Component ({
  selector : 'artist-unit',
  templateUrl : '../partials/artistunit.html',
  inputs : ['artist'],
  styles : [`
    img {
    display: block;
    float: left;
    width: 60px;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
  }`, 'h2 { margin-top: 0;}'],
})

export class ArtistUnitComponent{

}
