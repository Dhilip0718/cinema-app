import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(summary: string, showFull: boolean): string {
    if (showFull) {
      return summary;
    }
    return summary?.length > 190 ? summary.substring(0, 190) + '...' : summary;
  }
}