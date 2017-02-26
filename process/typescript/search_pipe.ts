import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name : 'find'
})

export class SearchPipe implements PipeTransform{
  transform(pipeData, [pipeModifier]) {
    return pipeData.filter((eachItem) => {
      return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||     eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}
