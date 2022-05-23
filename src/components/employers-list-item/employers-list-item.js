

import './employers-list-item.css';


const EmployersListItem = (props) => {

        const {name, salary, onDelete, onToggleProp, increase, favorite} =  props;



        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';
        }
        if (favorite) {
            classNames += ' like';
        }
    
        return (
            <li className = {classNames}>
                <span className = "list-group-item-label"
                onClick = {onToggleProp} data-toggle ='favorite'>{name}
               </span>
                <input type="text" className = "list-group-item-input" defaultValue = {salary + '$'}/>
                <div className = "d-flex justify-content-center align-items-center">
                    <button type="button"
                    className = "btn-cookies btn-sm"
                    onClick = {onToggleProp}
                    data-toggle ='increase'>
                        <i className = "fas fa-cookie"></i> 
                    </button>
                    <button type="button"
                    className = "btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className = "fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployersListItem;