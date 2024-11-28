import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
    transform(array: any[], order: 'asc' | 'desc', key: string): any[] {
        if (!array || array.length === 0 || !key) {
            return array;
        }

        return array.sort((a, b) => {
            const valA = a[key]?.toString().toLowerCase() || '';
            const valB = b[key]?.toString().toLowerCase() || '';

            if (order === 'asc') {
                return valA < valB ? -1 : valA > valB ? 1 : 0;
            } else {
                return valA > valB ? -1 : valA < valB ? 1 : 0;
            }
        });
    }
}
