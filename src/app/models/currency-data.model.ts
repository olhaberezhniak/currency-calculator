import {FormControl} from '@angular/forms';

export interface CurrencyDataFormModel {
  amountOfMoney: FormControl<number>;
  currencyCode: FormControl<string>;
}
