import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

// import React, { Component } from 'react'

// export class NewsItem extends Component {

//   render() {

//     let {title, description, imageUrl, newsUrl} = this.props;

//     return (
//       <div className="my-3">
        
//         <div className="card" style={{width: "18rem"}}>
//           <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/02/19/1600x900/WhatsApp_Image_2021-09-18_at_094218_1676765744429_1676765744642_1676765744642.jpeg"} className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}</p>
//             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
//           </div>
//         </div>

//       </div>
//     )
//   }
// }

// export default NewsItem