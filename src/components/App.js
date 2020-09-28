import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images:[]}
   onSearchSubmit = async term =>{
        console.log(term);
    const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term,per_page:20},
            headers:{
                Authorization:'Client-ID 5rEEE0q91-pnsZO389vtOQzdYRUwmfwlzeIlgduFLP8'
            }
        });
        this.setState({images:response.data.results});
    }
    
    render(){
        return (
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmit ={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }

}
export default App