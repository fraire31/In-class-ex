// document.getElementById('first').innerHTML
// =('Hello Cinthia')

// var lizard = "Dolores"
// document.getElementById('first').innerHTML
// =lizard

function save(){

    var thoughts = document.getElementById('thoughts').value
    var facts = document.getElementById('facts').value

    console.log(thoughts + ' \'is a cool thought.\' ' + 'Cool, I didnt know that ' + facts)

}

//funtion save(){
	//var thoughts = prompt('say somthing');
	//console.log(thoughts);
//}

var sister = [ 'sweet', 'hard working', 'adorable', 21, 'funny']

for (i= 0; i < sister.length; i++){
	console.log(sister[i])
}


var sisters = [
    {name:'cinthia', order:'first child', age:23}
//     { name: ' karina', order: 'second child', age:21},
//     { name: 'clarissa', order: 'last child', age: 11}
]
for(i = 0; i < sisters.length; i++){
	console.log(sisters[i].name + ' ' + sisters[i].order + ' ' + sisters[i].age)
}


var coWorkers = [
    {name:'Yaneth', age:30, title: 'MA'},
    {name: 'Rubi', age:24, title: 'FNP-RN'},
    {name: ' John', age:42, title: 'RN'}

    ]

for( i = 0; i < coWorkers.length; i++){
	console.log(coWorkers[i]);
}