import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    //async action
    function getData() {
        return dispatch => {//这里的dispatch 就是onFetchData 里面的dispatch, 就是一个匿名函数
            axios.get("some url here...").then(res => {
                dispatch({
                    type: "FETCH_DATA",
                    data: res.data
                })
            });
        };
    };

    function onFetchData() {
        //invoke action
        dispatch(getData());
    };

    return (
        <div className="App">
            {content.data && (
                <ul>
                    <li>{content.data.title}</li>
                </ul>
            )}
        </div>
    );
};

export default App;
