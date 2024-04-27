import {
  Component, EventEmitter, Input, Output, OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy

} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy
{
  @Input() postImg: string = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges() called');
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }


}



