let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote : 'We accept the love we think we deserve.”' ,
  person : '"Stephen Chbosky, The Perks of Being a Wallflower"'
},
{
  quote : '“A friend is someone who knows all about you and still loves you.”.”' ,
  person : '"Elbert Hubbard"'
},
{
  quote : '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe”' ,
  person : '"Albert Einstein"'
},
{
  quote : '“So many books, so little time.”' ,
  person : '"Frank Zapaa"'
},
{
  quote : '“A room without books is like a body without a soul.”' ,
  person : '"Marcus Tullius Cicero"'
},
{
  quote : '“Be the change that you wish to see in the world"',
  person : '"Ghandi"'

}]

btn.addEventListener('click', function () {
  let ran = Math.floor(Math.random() * quotes.length)

  quote.innerText = quotes[ran].quote
  person.innerText = quotes[ran].person
})