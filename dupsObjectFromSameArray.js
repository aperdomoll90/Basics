const users = [
  { id: 32, fName: 'mary', lName: 'Sanchez' },
  { id: 25, fName: 'gary', lName: 'hortega' },
  { id: 23, fName: 'morty', lName: 'cobble' },
  { id: 87, fName: 'bear', lName: 'smith' },
  { id: 49, fName: 'justin', lName: 'perdomo' },
  { id: 94, fName: 'copper', lName: 'luminus' },
  { id: 32, fName: 'lou', lName: 'nostros' },
  { id: 32, fName: 'lou', lName: 'Sanchez' },
]

const uniqUsers = [...users.reduce((map, obj) => map.set(obj.id,obj),new Map()).values()]
console.log(uniqUsers)


