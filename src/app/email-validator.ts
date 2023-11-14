import { AbstractControl, ValidationErrors } from "@angular/forms";


export function emailValidator(control: AbstractControl): ValidationErrors | null{
    const emailRegex = RegExp('.*wilder\.school\.com$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: "Email must end with wilder.school.com"
        }
    };

    return !valid ? errors : null;
}