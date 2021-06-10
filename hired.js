const students = [{
name:'Vitoria',
specialty:'Neuro',
},
{ 
name:'Nikki',
specialty:'Mfg',
    },
{
name:'Rebecca',
specialty:'retail',
     }
]

const hired = ['Rebecca','Skar']

// Comparison between two arrays with nested array methods
const availableCandidate = students.filter(stud => !hired.includes(stud.name))


console.log(availableCandidate)



// Todds way
function getCandidates(students){
   return students.filter(student => student.hired !== 'true')
}

// My way
const hiredList = students.filter(student => student.hired !== 'true')

