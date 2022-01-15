import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
    state = {
        arrList: []
    };

    componentDidMount() {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
            const arrList = res.data.categories;
            console.log(arrList);
            this.setState({ arrList });
        });
    }

    render() {
        return (    
        <div>
            {this.state.arrList.map((li) => (
            <div key={li.idCategory} className="container">
                <div>
                <h1>{li.strCategory}</h1>
                <img
                    style={{ width: "80px" }}
                    src={li.strCategoryThumb}
                    alt="placeholder"
                />
                <p>{li.strCategoryDescription.slice(0, 30)}</p>
                </div>
            </div>
            ))}
        </div>
        );
    }
}
