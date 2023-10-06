//destructure

const person = {
    name : "tommie",
    age: 3,
    ability:{
        food:"curd",
        fav:"egg"  
    }
}
const somename=person.ability.food
const {fav:chicken}=person.ability                    
console.log(chicken)