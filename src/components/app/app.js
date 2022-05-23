import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name:'Nik', salary: 300, increase: false, favorite: false, id: 1},
                {name:'Alex', salary: 700, increase: false, favorite: false, id: 2},
                {name:'Igor', salary: 1500, increase: false, favorite: false, id: 3},
           ],
           term: '',
           filter: 'all',
        }

        this.maxId = 4;
    }

    addNew = (name, salary) => {
        const newPerson = {
            name,
            salary,
            increase: false,
            favorite: false,
            id: this.maxId ++
        }

        this.setState(({data}) => {
            const newArr = [...data, newPerson];
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
       this.setState(({data}) => {            
            return {
                data: data.filter(item => item.id !== id)
            }
       })
    }

    onToggleProp = (id, key) => {
        this.setState(({data}) => ({
           data: data.map(item => {
               if (item.id === id) {
                   return {...item, [key]: !item[key]}
               }
               return item;
           }) 
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'favorite':
                    return items.filter(item => item.favorite);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

   render() {

    const {data, term, filter} = this.state;
    const people = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
        <div className = "app">
            <AppInfo people ={people} increased={increased}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch ={this.onUpdateSearch}/>
                <AppFilter filter = {filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <EmployersList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}/>
            <EmployersAddForm
            onAdd = {this.addNew}
            />
        </div>
    );
   }
}

export default App;