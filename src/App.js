import "./App.css";
import CardList from "./components/card-list/CardListComponent";
import Searchbox from "./components/search-box/Searchbox";
import { useEffect, useState } from "react";

const App = () => {
    const[searchField, setSearchField] = useState(''); 
    const[monsters, setMonster] = useState([]);
    const[filteredMonsters, setFilterdMonsters] = useState(monsters)

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
    }, [])

    useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilterdMonsters(newFilteredMonsters);
    }, [monsters, searchField]);
    
    const onserachChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
    };

    return(
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <Searchbox className='monster-search-box' placeholder='Serach Monsters' onChangeHandler={onserachChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//     console.log("constructor");
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((result) => result.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   onserachChange = (event) => {
//     // console.log(event.target.value);
//     const searchString = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchString };
//     });
//   };
//   render() {
//     console.log("render");
//     const { monsters, searchString } = this.state;
//     const { onserachChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <Searchbox className='monster-search-box' placeholder='Serach Monsters' onChangeHandler={onserachChange} />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
