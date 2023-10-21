import {Component, OnDestroy, OnInit} from '@angular/core';
import {TitleService} from "@app/services/title/title.service";
import {tap} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  title = '';
  titleSubcription!: Subscription;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleSubcription = this.titleService.title$
      .pipe(
        tap(value => this.title = value)
      )
      .subscribe()
  }

  ngOnDestroy() {
    this.titleSubcription.unsubscribe()
  }

}
