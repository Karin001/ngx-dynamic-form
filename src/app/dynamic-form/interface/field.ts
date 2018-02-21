import { FormGroup } from '@angular/forms';
import {FieldConfig} from './fieldConfig';
export interface Field {
    group: FormGroup;
    config: FieldConfig;
}
