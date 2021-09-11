import React, { Component } from 'react';
import './index.css';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

class App extends Component {

  state = {
    photos: [],
    cats: [],
    dogs: [],
    cars: [],
    title: "",
    loading: false, // Show/Hide loading text between get requests.
    error:false
  }

  /* Perform a Search with the query typed by the user */
  performSearch = (query) => {
    this.setState({loading:true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( res => this.setState({
      photos: res.data.photos.photo,
      title:query,
      loading:false,
      error:false
    }))
    .catch(error => {
      this.setState({error:true});
      console.log('Error fetching in parsing data', error)
    } );
   
}

/*This functions would be called immediately when the page mounts */
componentDidMount() {
  this.catsResults();
  this.dogsResult();
  this.carsResults();
}

  /* Fetch Cats */ 
  catsResults = ( query = "ball" ) => {
    this.setState({loading:true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then( res => this.setState({
          cats: res.data.photos.photo,
          loading:false,
          error:false
        }))
        .catch(error => {
          this.setState({error:true})
        console.log('Error fetching in parsing data', error)
        } );
  }

  /* Fetch dogs */
  dogsResult = (query = "dogs") => {
    this.setState({loading:true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( res => this.setState({
        dogs: res.data.photos.photo,
        loading:false,
        error:false
      }))
      .catch(error => {
        this.setState({error:true})
      console.log('Error fetching in parsing data', error)
      } );
  }

  /* Fetch cars */
  carsResults = ( query = "cars" ) => {
    this.setState({loading:true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( res => this.setState({
      cars: res.data.photos.photo,
      loading:false,
      error:false
    }))
    .catch(error => {
      this.setState({error:true})
    console.log('Error fetching in parsing data', error)
    } );
  }


  render() {
    return (
      
        <div className="App">
        
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {/* two if conditions */}
          { this.state.error ? <p> Not found...</p> : 
            this.state.loading ? <p>Loading images...</p> : 
          (<Switch>
            <Route exact path='/' component={ () => <Redirect to="/ball" />}/>
            <Route exact path="/ball" render={ () => <PhotoContainer data={this.state.cats}/>} />
            <Route exact path="/dogs" render={ () => <PhotoContainer data={this.state.dogs}/>} />
            <Route exact path="/cars" render={ () => <PhotoContainer data={this.state.cars}/>} />

            <Route path="/search/:query" render={() => 
              <PhotoContainer
                data={this.state.photos}  
                title={this.state.title}
                handleSearch={this.performSearch}
                loading={this.state.loading}
                />} 
            /> 
            <Route component={NotFound} />
          </Switch>)
          }

        </div>

    )
  }
};


export default App;
