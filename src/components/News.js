import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  articles = [
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Fox News",
        "title": "Talk to an attorney — don't take their money: Anahita Sedaghatfar | Fox News Video",
        "description": "Attorney Anahita Sedaghatfar offers her view on what actions residents of East Palestine, Ohio, should pursue and gives her take on the Murdaugh trial on 'Fox News @ Night.'",
        "url": "https://www.foxnews.com/video/6320747820112",
        "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/f7f4b539-34c2-4964-b1e6-003a20e24713/8b98046c-017b-41d5-90a0-53ded86d9248/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
        "publishedAt": "2023-02-18T05:52:19.7706414Z",
        "content": "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
    },
    {
        "source": {
            "id": "recode",
            "name": "Recode"
        },
        "author": "Peter Kafka",
        "title": "AMC’s new plan: Get used to paying more money for better movie tickets",
        "description": "AMC’s new plan is ... good?",
        "url": "https://www.vox.com/recode/2023/2/10/23593428/amc-movie-ticket-prices-sightline-variable-peter-kafka-column",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/6KgmAHT-tIgpn1GYMuCd1VYEHkc=/0x0:1654x866/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24421903/Screen_Shot_2023_02_09_at_5.45.59_PM.png",
        "publishedAt": "2023-02-10T12:10:00Z",
        "content": "Lets say I want to take myself to see Magic Mikes Last Dance on Friday at the AMC 34th Street theater in Manhattan. Could happen! And if it does, I have two options: I can buy a regular ticket for $2… [+7055 chars]"
    },
    {
        "source": {
            "id": "financial-post",
            "name": "Financial Post"
        },
        "author": "Financial Post",
        "title": "Financial Post",
        "description": "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
        "url": "https://financialpost.com/category/personal-finance/business-essentials/",
        "urlToImage": "https://dcs-static.gprod.postmedia.digital/12.2.3/websites/images/postmedia-image-fallback.png",
        "publishedAt": "2022-11-13T00:37:35.7082248Z",
        "content": null
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "Alex Gangitano, Rachel Frazin",
        "title": "Questions grow about Biden’s position on a gas tax holiday",
        "description": "President Biden is facing growing questions about whether he will throw his support behind a federal gas tax holiday in an attempt to save Americans some money at the pump while gas prices remain high from inflation and the impact of Russia’s invasion into Uk…",
        "url": "https://thehill.com/policy/equilibrium-sustainability/3260062-questions-grow-about-bidens-position-on-a-gas-tax-holiday/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/04/california-gas-prices_040422_ap-Jeff-Chiu_gasprices.jpg?w=1280",
        "publishedAt": "2022-04-06T10:03:07Z",
        "content": "President Biden is facing growing questions about whether he will throw his support behind a federal gas tax holiday in an attempt to save Americans some money at the pump while gas prices remain hig… [+6271 chars]"
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": null,
        "title": "‘Money is no object’: Ghislaine Maxwell trial shines light on class divide",
        "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
        "url": "https://www.ft.com/content/0b9d93da-1687-4eb1-bd53-0a84a1b40dff",
        "urlToImage": null,
        "publishedAt": "2021-12-14T06:22:29.1165883Z",
        "content": "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]"
    },
    {
        "source": {
            "id": "the-sport-bible",
            "name": "The Sport Bible"
        },
        "author": "Ryan Sidle",
        "title": "Dana White Hits Back At Paige VanZant After Instagram Claims",
        "description": "The UFC fighter said she earned more posting on social media than she did in the octagon and wants more money in her next contract.",
        "url": "http://www.thesportbible.com/ufc/pub-talk-dana-white-hits-back-at-paige-vanzant-after-instagram-claims-20190828",
        "urlToImage": "http://beta.ems.ladbiblegroup.com/s3/content/808x455/61791cc65d668d6c1794bd4ee562a2ee.png",
        "publishedAt": "2019-08-28T21:07:40Z",
        "content": "UFC president Dana White has responded to Paige VanZant's claims that she makes more money posting on Instagram than she does fighting in UFC. \r\nVanZant claimed on Tuesday that she wanted more money … [+1438 chars]"
    }
]

  
  constructor(){
    super();
    console.log("constructor called")
    this.state = {
      articles : this.articles, 
      loading : false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News360 - Latest Headlines</h2>
        
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" imageUrl="https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/f7f4b539-34c2-4964-b1e6-003a20e24713/8b98046c-017b-41d5-90a0-53ded86d9248/1280x720/match/1024/512/image.jpg?ve=1&tl=1"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc"/>
          </div>
        </div>
        
        
      </div>
    )
  }
}

export default News