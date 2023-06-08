import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value:string):string{

    // const words = value.split(" ")

    // return words.map(word => {

    //   return word[0].toUpperCase()+word.slice(1)

    // }).join(" ")

    return value.toUpperCase()

  }

  //sai suresh kumar  => words[0] -> sai, words[1]-> suresh, words[2]-> kumar

}


