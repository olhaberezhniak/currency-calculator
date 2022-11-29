import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/dist/types';
import {CurrencyWithRate} from '../../../models/currency';
import {CurrenciesService} from '../../services/currencies.service';
import {CurrenciesStore} from '../../stores/currencies.store';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss']
})
export class CurrenciesListComponent implements OnInit {
  constructor(private currenciesService: CurrenciesService, public currenciesStore: CurrenciesStore) { }

  ngOnInit(): void {
    this.currenciesService.getAllCurrenciesWithSpecificRate();
  }

}
