import './app-info.css';

const AppInfo = ({increased, people}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компани Front-end Devs</h1>
            <h2>Общее число сотрудников: <span style = {{color: 'antiquewhite'}}>{people}</span></h2>
            <h2>Премию получат: <span style = {{color: 'antiquewhite'}}>{increased}</span></h2>
        </div>
    )
}

export default AppInfo;