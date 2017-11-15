import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ActiveJobsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'activeJobs',
})
export class ActiveJobsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(job, ...args) {
    return job.filter(j => j.active && !j.completed);
  }
}
