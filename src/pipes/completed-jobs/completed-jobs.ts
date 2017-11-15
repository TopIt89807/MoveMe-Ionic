import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the InactiveJobsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'completedJobs',
})
export class CompletedJobsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(job, ...args) {
    return job.filter(j => j.completed);
  }
}
