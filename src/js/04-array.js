const people = [
  'Rutherford, Ernest',
  'Sagan, Carl',
  'Marconi, Guglielmo',
  'Maxwell, James Clerk',
  'Newton, Isaac',
  'Nye, Bill',
  'Oppenheimer, J. Robert',
  'Pasteur, Louis',
  'Plato',
  'Reagan, Ronald',
  'Roosevelt, Eleanor',
  'Becker, Carl',
  'Bohr, Niels',
  'Carson, Rachel',
  'Salk, Jonas',
  'Sanger, Margaret',
  'Sartre, Jean-Paul',
  'Shakespeare, William',
  'Sontag, Susan',
  'Tesla, Nikola',
  'Thoreau, Henry David',
  'Turing, Alan',
  'Wilde, Oscar',
  'Woolf, Virginia',
  'Wright, Orville and Wilbur',
  'Goodall, Jane',
  'Gould, Stephen Jay',
  'Hawking, Stephen',
  'Heisenberg, Werner',
  'Hertz, Heinrich',
  'Hubble, Edwin',
  'Kaku, Michio',
  'Kepler, Johannes',
  'Leakey, Mary',
  'Lovelace, Ada',
  'Mandela, Nelson',
  'Mann, Thomas',
  'Chomsky, Noam',
  'Curie, Marie',
  'Darwin, Charles',
  'Dyson, Freeman',
  'Einstein, Albert',
  'Faraday, Michael',
  'Feynman, Richard',
  'Franklin, Benjamin',
  'Freud, Sigmund',
  'Gandhi, Mahatma',
  'Gibran, Kahlil',
];

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943 },
  { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Charles', last: 'Darwin', year: 1809, passed: 1882 },
];

const vehicles = [
  'Car',
  'Dirt',
  'Bus',
  'Bus',
  'Bus',
  'Bus',
  'Car',
  'Spaceship',
  'Spaceship',
  'Zeppelin',
  'Dirt',
  'Car',
  'Segway',
  'Spaceship',
  'Dirt',
  'Dirt',
  'Car',
];

const fifteen = inventors.filter(({ year }) => year >= 1500 && year < 1600);
const fullName = inventors.map(({ first, last }) => [first, last]);
const yearsSorted = [...inventors].sort((a, b) => a.year - b.year);
const yearsOfLive = inventors.reduce((acc, i) => (acc += i.passed - i.year), 0);
const newInventors = inventors.map(i => ({ ...i, live: i.passed - i.year }));
const sortedYearsOfLive = [...newInventors].sort((a, b) => a.live - b.live);
const alphaName = [...people].sort((a, b) => a.localeCompare(b));
const vehiclesQuontity = vehicles.reduce((acc, i) => {
  if (!acc[i]) {
    acc[i] = 0;
  }
  acc[i]++;
  return acc;
}, {});
console.log(vehiclesQuontity);
