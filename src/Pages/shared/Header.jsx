import React from 'react'
import { Link } from "react-router-dom";
import sun from './img/Web.png'
export default function Header() {
  return (
    <>
<div className="container-fluid m-0 p-0 navbar-light navback">

    <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#"> 
        <img src={sun} alt=""/>
         </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon1">
            <img src="./img/Group 20885.svg"/>
          </span>
          <span className="navbar-toggler-icon1">
            <img src="./img/Group 20884.svg"/>
          </span>
          <span className="navbar-toggler-icon1 ">
            <img src="./img/ Group 20894.svg"/>
          </span>
        </button>
        
       
        <form className="form-inline my-2 my-lg-0">
            
            <input className="form-control mr-sm-2" type="search" placeholder="Search here" aria-label="Search"/>
          </form>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link  stats-a-tag03" href="#">
                  <span className="menu-bar-svg1">
                    <svg  id="explore-svg" className="navbar-svgs" width="30.644" height="30.106" viewBox="0 0 30.644 30.106"><g id="Group_12640" data-name="Group 12640" transform="translate(-4553.495 75.74)"><g id="Group_12641" data-name="Group 12641"><path id="Path_2212" data-name="Path 2212" d="M427.761,429.948l5.476,4.459c.63.513,1.266,1.019,1.888,1.542a3.469,3.469,0,1,1-4.821,4.942c-1.957-2.212-3.9-4.439-5.845-6.659-.129-.147-.265-.289-.421-.458a11.2,11.2,0,0,1-9.2,1.247A10.889,10.889,0,0,1,408.7,430.5a11.24,11.24,0,1,1,19.064-.556Zm-9.766-16.1a10.405,10.405,0,1,0,10.448,10.362A10.4,10.4,0,0,0,417.995,413.846Zm9.6,17.03-2.8,2.485,1.506,1.718c1.567,1.786,3.115,3.588,4.707,5.351a2.612,2.612,0,0,0,3.816.108,2.577,2.577,0,0,0-.044-3.769C432.335,434.7,429.828,432.7,427.595,430.876Z" transform="translate(4147.203 -488.269)" fill="#dd272d" stroke="#dd272d" stroke-width="1"></path></g><path id="Path_2216" data-name="Path 2216" d="M443.518,457.241a7.8,7.8,0,0,1,.033-15.6,7.8,7.8,0,0,1-.033,15.6Z" transform="translate(4121.69 -513.47)" fill="#ffd8b3"></path></g></svg>
                    </span> Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link stats-a-tag02" href="trending.html">
                  <span className="menu-bar-svg" >
                    <svg  id="auction-svg" className="navbar-svgs auction" width="28.864" height="28.865" viewBox="0 0 28.864 28.865"><g id="Group_2263" data-name="Group 2263" transform="translate(-1207.787 -1727)"><path id="Path_2089" data-name="Path 2089" d="M1056.885,1769.617l1.545-.281,6.637-6.5v-1.826s.808-.773.983-.878a9.19,9.19,0,0,1,1.335-.281l5.794,5.689-.176,2.072-1.756.421-.7.316-.632.632.632,1.37.211,1.545c.053.386-.386,0-.386,0l5.584,5.654,6.708,5.408.843,2.072-.843,1.44-1.4.913-.176.422-1.826-.176-11.8-13.029-.6.351-.632.176-1.159-.983-.492.176-.913,1.019-.632,2.212-.7.316-1.615-.562-4.811-4.846-.737-.913.386-1.019Z" transform="translate(152.833 -32.475)" fill="#ffd8b3"></path><path id="Path_2090" data-name="Path 2090" d="M28.36,23.686a3.55,3.55,0,0,0-.679-.78l-2.634-2.3a.56.56,0,0,0-.224-.2L23.23,19.024l-7.374-6.432a1.688,1.688,0,0,0-.5-2.693l.682-.682a2.256,2.256,0,0,0,2.177-.583,2.255,2.255,0,0,0,0-3.189L13.437.662A2.254,2.254,0,0,0,9.665,2.839L2.858,9.645a2.269,2.269,0,0,0-.584-.076A2.255,2.255,0,0,0,.68,13.418L5.464,18.2a2.254,2.254,0,0,0,3.772-2.177l.681-.681a1.692,1.692,0,0,0,2.694.494l7.854,9.023a.566.566,0,0,0,.076.1l.031.028,2.34,2.689c.058.069.12.136.185.2a3.353,3.353,0,0,0,2.383.991,3.461,3.461,0,0,0,.475-.033,3.411,3.411,0,0,0,2.517-1.743A3.336,3.336,0,0,0,28.36,23.686ZM11.045,1.459a1.127,1.127,0,0,1,1.595,0l4.784,4.783a1.127,1.127,0,0,1-1.594,1.595L11.045,3.053h0A1.128,1.128,0,0,1,11.045,1.459ZM7.856,17.4a1.129,1.129,0,0,1-1.595,0L1.478,12.621a1.127,1.127,0,0,1,1.594-1.595L7.856,15.81A1.128,1.128,0,0,1,7.856,17.4Zm2.374-3.968L8.653,15.013,3.869,10.229,10.247,3.85l4.784,4.784-1.579,1.579-.016.015-3.187,3.188Zm2.013,1.176,0,0-.4.4a.564.564,0,0,1-.8-.79l3.2-3.2a.564.564,0,0,1,.956.4.559.559,0,0,1-.165.4l-.395.395-.008.008Zm1.167.427,1.648-1.648,6.976,6.085-2.546,2.546Zm6.82,7.836,2.655-2.655.852.743-2.765,2.765Zm7.258,3.665A2.293,2.293,0,0,1,25.8,27.716a2.24,2.24,0,0,1-1.906-.639c-.043-.043-.085-.088-.124-.134l-.005-.006L21.714,24.58l2.875-2.875,2.354,2.053.005,0a2.427,2.427,0,0,1,.465.535A2.226,2.226,0,0,1,27.488,26.54Z" transform="translate(1207.766 1726.999)" fill="#dd272d"></path></g></svg>
                    <svg id="Group_12909" className="navbar-svgs auction" data-name="Group 12909"  width="29.075" height="28.865" viewBox="0 0 29.075 28.865"><g id="Component_57_1" data-name="Component 57 ??? 1" transform="translate(0 21.72)"><g id="Group_12907" data-name="Group 12907"><path id="Path_2087" data-name="Path 2087" d="M14.275,395.129a1.974,1.974,0,0,0-1.59-3.142H3.1a1.972,1.972,0,0,0-1.589,3.141A2.821,2.821,0,0,0,0,397.625v.564a.564.564,0,0,0,.564.564H15.221a.564.564,0,0,0,.564-.564v-.564A2.821,2.821,0,0,0,14.275,395.129ZM2.5,393.362a.84.84,0,0,1,.6-.248h9.584a.846.846,0,1,1,0,1.691H3.1a.846.846,0,0,1-.6-1.444Zm-1.375,4.263a1.693,1.693,0,0,1,1.691-1.691H12.966a1.693,1.693,0,0,1,1.691,1.691Z" transform="translate(0 -391.987)" fill="#dd272d"></path></g></g></svg>
                </span>  Auction</a>
            </li>
            
            <li className="nav-item">
              <Link  className="nav-link stats-a-tag01"  to="/Marketplace" >
                  <span className="menu-bar-svg2"><svg  id="marketplace-svg" className="navbar-svgs" width="26.049" height="29.597" viewBox="0 0 26.049 29.597"><g id="Group_12646" data-name="Group 12646" transform="translate(-4784.877 106)"><g id="Group_12642" data-name="Group 12642"><path id="Path_2217" data-name="Path 2217" d="M1461.9,376.642a3.017,3.017,0,0,1,1.157,2.418,3.562,3.562,0,0,1-1.409,2.343c.608.576,1.193,1.1,1.749,1.661a2.6,2.6,0,1,1-3.684,3.665q-1.847-1.831-3.675-3.681a2.975,2.975,0,0,1-.342-.537l-.268.011a4.991,4.991,0,0,1-.52.693,2.525,2.525,0,0,1-3.508.082c-.937-.858-1.839-1.759-2.7-2.7a2.542,2.542,0,0,1,.167-3.595c1.474-1.5,2.972-2.967,4.45-4.459a17.8,17.8,0,0,0,4.865-8.89,1.422,1.422,0,0,0-.085-.809,2.628,2.628,0,0,1,.867-3.239,2.569,2.569,0,0,1,3.291.254q4.964,4.926,9.889,9.891a2.537,2.537,0,0,1,.245,3.289,2.616,2.616,0,0,1-3.19.872,1.231,1.231,0,0,0-.65-.145A17.737,17.737,0,0,0,1461.9,376.642Zm5.262-4.345-7.458-7.456a19.854,19.854,0,0,1-4.072,7.772l3.755,3.769A19.911,19.911,0,0,1,1467.16,372.3Zm-9.291,5.488-3.613-3.713c-1.376,1.375-2.771,2.759-4.153,4.156a.845.845,0,0,0-.053,1.285q1.2,1.249,2.456,2.45a.8.8,0,0,0,1.195,0C1455.126,380.557,1456.531,379.131,1457.87,377.785Zm2.544-17.02a3.361,3.361,0,0,0-.716.616.792.792,0,0,0,.226,1.036q4.818,4.817,9.637,9.632a.873.873,0,1,0,1.205-1.234q-4.792-4.8-9.6-9.591A4.158,4.158,0,0,0,1460.414,360.765Zm-3.623,20.59c1.373,1.372,2.73,2.732,4.091,4.089.524.522,1.007.588,1.4.2.415-.4.348-.892-.206-1.447q-1.855-1.859-3.714-3.714c-.115-.115-.246-.216-.366-.32Zm3.677-1.294c1.146-.934,1.152-1.436-.018-2.3l-1.216,1.136Z" transform="translate(3336.842 -464.036)" fill="#dd272d"></path><path id="Path_2218" data-name="Path 2218" d="M1629.611,367.98c-.188-.15-.522-.289-.614-.523a1.055,1.055,0,0,1,.058-.9,22.282,22.282,0,0,1,1.9-1.923.755.755,0,0,1,1.055.036.728.728,0,0,1,.194,1.032c-.653.748-1.391,1.423-2.106,2.115C1630.016,367.9,1629.855,367.9,1629.611,367.98Z" transform="translate(3176.869 -468.73)" fill="#dd272d"></path><path id="Path_2219" data-name="Path 2219" d="M1598.429,351.377c0-.307-.022-.617,0-.922a.791.791,0,0,1,.786-.774.742.742,0,0,1,.874.659,12.156,12.156,0,0,1,0,2.123.743.743,0,0,1-.87.664.789.789,0,0,1-.789-.77C1598.406,352.033,1598.429,351.7,1598.429,351.377Z" transform="translate(3203.847 -455.678)" fill="#dd272d"></path><path id="Path_2220" data-name="Path 2220" d="M1645.116,411.245c-.269,0-.539.013-.807,0a.857.857,0,0,1-.868-.882.839.839,0,0,1,.846-.843c.576-.023,1.154-.022,1.73,0a.859.859,0,0,1,.876.879.878.878,0,0,1-.912.848C1645.693,411.256,1645.4,411.245,1645.116,411.245Z" transform="translate(3164.033 -508.582)" fill="#dd272d"></path></g><g id="Group_12645" data-name="Group 12645"><path id="Path_2224" data-name="Path 2224" d="M1523.757,542.233l1.21-1.189c.12.1.25.2.366.32q1.859,1.855,3.714,3.714c.554.556.621,1.044.206,1.447-.4.385-.88.319-1.4-.2C1526.487,544.965,1525.129,543.605,1523.757,542.233Z" transform="translate(3269.876 -624.914)" fill="#ffd8b3"></path><path id="Path_2225" data-name="Path 2225" d="M1546.118,522.509l-1.234-1.169,1.216-1.136C1547.27,521.073,1547.263,521.575,1546.118,522.509Z" transform="translate(3251.192 -606.484)" fill="#ffd8b3"></path><g id="Group_12644" data-name="Group 12644"><path id="Path_2221" data-name="Path 2221" d="M1525.253,415.979a19.911,19.911,0,0,0-7.774,4.085l-3.755-3.769a19.852,19.852,0,0,0,4.071-7.772Z" transform="translate(3278.749 -507.718)" fill="#ffd8b3"></path><path id="Path_2223" data-name="Path 2223" d="M1548.738,373.276a4.157,4.157,0,0,1,.756.46q4.808,4.785,9.6,9.591a.873.873,0,1,1-1.205,1.234q-4.823-4.812-9.637-9.632a.792.792,0,0,1-.226-1.036A3.36,3.36,0,0,1,1548.738,373.276Z" transform="translate(3248.518 -476.547)" fill="#ffd8b3"></path><g id="Group_12643" data-name="Group 12643"><path id="Path_2222" data-name="Path 2222" d="M1471.219,492.065c-1.339,1.345-2.743,2.772-4.168,4.178a.8.8,0,0,1-1.195,0q-1.252-1.2-2.455-2.45a.845.845,0,0,1,.053-1.285c1.382-1.4,2.777-2.781,4.153-4.156Zm-2.613-.208c-.156-.2-.29-.54-.521-.633a1.069,1.069,0,0,0-.9.059,9.985,9.985,0,0,0-1.429,1.415.761.761,0,0,0,.064,1.055.75.75,0,0,0,1.088.141,17.3,17.3,0,0,0,1.473-1.456A2.008,2.008,0,0,0,1468.606,491.856Z" transform="translate(3323.492 -578.316)" fill="#ffd8b3"></path><path id="Path_2226" data-name="Path 2226" d="M1487.292,513.282a2.008,2.008,0,0,1-.225.58,17.311,17.311,0,0,1-1.473,1.456.75.75,0,0,1-1.087-.141.761.761,0,0,1-.064-1.055,9.981,9.981,0,0,1,1.43-1.415,1.069,1.069,0,0,1,.9-.059C1487,512.741,1487.136,513.079,1487.292,513.282Z" transform="translate(3304.806 -599.741)" fill="#ffd8b3"></path></g></g></g></g></svg></span> Marketplace</Link >
            </li>
            <li className="nav-item">
                <a className="nav-link stats-a-tag" href="#">
                    <span className="menu-bar-svg3"> <svg  width="40" height="40" viewBox="0 0 40 40">
                        <defs>
                          <clipPath id="clip-path">
                            <rect id="Rectangle_306" data-name="Rectangle 306" width="40" height="40" transform="translate(2931 -276)" fill="#fff" stroke="#707070" stroke-width="1"/>
                          </clipPath>
                        </defs>
                        <g id="Mask_Group_35" data-name="Mask Group 35" transform="translate(-2931 276)" clip-path="url(#clip-path)">
                          <g id="Group_20457" data-name="Group 20457" transform="translate(947 -1267)">
                            <g id="Rectangle_41" data-name="Rectangle 41" transform="translate(2001 1006)" fill="none" stroke="#dd272d" stroke-width="1.5">
                              <rect width="7" height="30" rx="3.5" stroke="none"/>
                              <rect x="0.75" y="0.75" width="5.5" height="30" rx="2.75" fill="none"/>
                            </g>
                            <g id="Rectangle_42" data-name="Rectangle 42" transform="translate(2011 1013)" fill="#ffd8b3" stroke="#dd272d" stroke-width="1.5">
                              <rect width="7" height="30" rx="3.5" stroke="none"/>
                              <rect x="0.75" y="0.75" width="5.5" height="30" rx="2.75" fill="none"/>
                            </g>
                            <g id="Rectangle_43" data-name="Rectangle 43" transform="translate(1991 998)" fill="#ffd8b3" stroke="#dd272d" stroke-width="1.5">
                              <rect width="7" height="30" rx="3.5" stroke="none"/>
                              <rect x="0.75" y="0.75" width="5.5" height="30" rx="2.75" fill="none"/>
                            </g>
                          </g>
                        </g>
                      </svg></span> Stats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                   <span className="menu-bar-svg4"><svg  className="navbar-svgs" id="activity-svg" width="27.128" height="28.25" viewBox="0 0 27.128 28.25"><g id="Group_12649" data-name="Group 12649" transform="translate(-5151.76 184.75)"><g id="Group_12651" data-name="Group 12651" transform="translate(5152.51 -184)"><circle id="Ellipse_57" data-name="Ellipse 57" cx="11.462" cy="11.462" r="11.462" fill="#ffd8b3"></circle></g><g id="Group_12648" data-name="Group 12648" transform="translate(5152.51 -184)"><circle id="Ellipse_57-2" data-name="Ellipse 57" cx="11.462" cy="11.462" r="11.462" fill="none" stroke="#dd272d" stroke-miterlimit="10" stroke-width="1.5"></circle><path id="Path_2227" data-name="Path 2227" d="M3080.05,468.311v7.146h7.711" transform="translate(-3068.5 -463.163)" fill="none" stroke="#dd272d" stroke-miterlimit="10" stroke-width="1.5"></path></g><g id="Group_12647" data-name="Group 12647" transform="translate(5167.04 -155.349)"><circle id="Ellipse_59" data-name="Ellipse 59" cx="5.674" cy="5.674" r="5.674" fill="#ffd8b3"></circle><circle id="Ellipse_58" data-name="Ellipse 58" cx="5.674" cy="5.674" r="5.674" fill="none" stroke="#dd272d" stroke-miterlimit="10" stroke-width="1"></circle><path id="Path_2228" data-name="Path 2228" d="M3137.34,588.771l1.461,1.461,3.524-3.524" transform="translate(-3134.149 -582.558)" fill="none" stroke="#dd272d" stroke-miterlimit="10" stroke-width="1"></path></g></g></svg></span> Activity</a>
              </li>
              <li className="nav-item wallet-skew">
                  <a className="nav-link connect-wallet-butttom" href="Wallet.html" > 
                      Connect Wallet
                 </a>
              </li>
          </ul>
          
        </div>
      </nav>
    </div>
 
    </>
  )
}
