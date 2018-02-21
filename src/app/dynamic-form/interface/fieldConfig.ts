import { ValidatorFn, FormGroup } from '@angular/forms';
export interface FieldConfig {
    name: string;
    validations?: ValidatorFn[];
    value?: any;
    disabled?: boolean;
    placeholder?: string;
    type: string;
    label?: string;
    options?: string[];
}
