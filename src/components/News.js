import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){ 
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

     handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    
     handleNextClick = async ()=>{
        console.log("Next"); 
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
          document.getElementById("nxtBtnId").disabled = true;
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }
    }

    render() { 
        return (
            <div className="container my-3">
                
                <h2>News360 - Latest Headlines</h2>
                {/* {this.state.loading && <Spinner/>} */}
                <div className="row"> 
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description.slice(0, 60):""} imageUrl={element.urlToImage} newsUrl={element.url}/>

                        {/* <NewsItem title={element.title !== null ? element.title.slice(0, 40) : element.title} discription={element.description !== null ? element.description.slice(0, 60) : element.description} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} id="nxtBtnId" type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News