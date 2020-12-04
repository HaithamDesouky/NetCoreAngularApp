import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BusyService } from 'src/app/_services/busy.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  showSpinner = false;
  constructor(private busy: BusyService, private cDRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.busy.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start';
      this.cDRef.detectChanges();
    });
  }
}
