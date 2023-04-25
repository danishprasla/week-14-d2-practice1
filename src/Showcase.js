import salamenceImage from './images/salamence.png'
function Showcase() {
    let favPokemon = 'Salamence'
    let pokeCharacteristics = {
        type: "Dragon",
        move: "Draco Meteor"
    }
    return(
        <div>
            <h1>{favPokemon}'s Showcase Component</h1>
            <img src = {salamenceImage} alt = {favPokemon}/>
            <h2> {favPokemon}'s type is <span style = {{backgroundColor: 'red', color: 'white'}}>{pokeCharacteristics.type}</span> and one of their moves is <span style = {{backgroundColor: "white", color: "red"}}>{pokeCharacteristics.move}</span></h2>
        </div>
    )
}

export default Showcase