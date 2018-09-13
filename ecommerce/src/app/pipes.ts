import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertBoolean' })
export class QuestionableBooleanPipe implements PipeTransform {
    transform(value: string): string {
        if(value=="true")
        {
            return "Yes"
        }
        else
        {
            return "No"
    

        }
        }; 
}