import React from 'react'

export default function Footer() {
  return (
    <>
    <section>
    <div className="container-fluid">
        <div className="row text-center load-more-row">
            <button type="button" className="load-more-button " id="loadMore"> Load More
            </button>
        </div>
        <div className="row links-row">
            <div className="col-sm-3 foot">
                <h1>Usefull Links</h1>
                <div className="usefull-links">
                    <p>Explore</p>
                    <p>Marketplace</p>
                </div>
                <div className="usefull-links">
                    <p>Auction</p>
                    <p>Realtime</p>
                </div>
                <p>Stats</p>

            </div>
            <div className="col-sm-3 foot">
                <h1>Legal</h1>
                
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
            </div>
            <div className="col-sm-3 foot">
                <h1>help</h1>
                
                    <p>Support</p>
                    <p>Contact</p>
            </div>
            <div className="col-sm-3 foot">
                <h1>Our Newslatter</h1>
                <form>
                   <div className="email-fill">
                       <span className="email-fill-d">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style = "" value="Email"/>
                    </span>
                    <button type="submit" className="footer-button-email">
                        <span> Send </span>
                        
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className="fotter-last-caption">
             <div className="fotter-last-caption1">
                 <div className="fotter-last-caption10">
                     <img src="./img/globe.svg" alt="" />
                     English

                 </div>
                 <div className="fotter-last-caption20">

                </div>

             </div>

        </div>
    </div>
</section>
    </>
  )
}
