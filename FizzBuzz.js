/* Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :

Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.

l'opérateur modulo % qui renvoie le reste de la division d'un entier par un autre.
 par ex : 10 % 2 = 0 et 11 % 2 = 1

*/

let i=1;

while (i <= 100) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
        } else {
          console.log(i);
        }
  i++;
}
