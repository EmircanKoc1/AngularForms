import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms"

export function customNameValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        if (control.value === "name") {
            return null;
        }

        const error: ValidationErrors = {
            name: "error message"
        };

        return error;
    }

}

export function asyncCustomMinLenghtValidator(min: number): AsyncValidatorFn {

    return (control: AbstractControl) => {

        const stringValue: string = control.value as string;

        return new Promise<ValidationErrors | null>((resolve, reject) => {
            if (stringValue.length < min) {
                resolve({ asyncEmail: "async email error message " })
            }
            else {
                resolve(null);
            }
        });

    }
}