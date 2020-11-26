import React, {Component} from "react";
import "./blogss.css";
import {Link} from "react-router-dom";
import blogsHome from "../../HomepageAssets/blogsHome.jpg";
class Blogss extends Component {
  render() {
    return (
      <div className="BlogssMainContainer">
        <div className="BlogssContainer" style={{boxSizing: "border-box"}}>
          <div className="cardHeader4">
            <h2>Blogs</h2>
          </div>
          <div className="BlogssCardContent">
            <div className="Description">
              <p className="bloghead">
                Finding the best depression treatment for you
              </p>
              <p className="DescriptionContent">
                When you’re depressed, it can feel like you’ll never get out
                from under a dark shadow. However, even the most severe
                depression is treatable. So, if your depression is keeping you
                from living the life you want to, don’t hesitate to seek help.
                From therapy to medication to healthy lifestyle changes, there
                are many different treatment options available.Of course, just
                as no two people are affected by depression in exactly the same
                way, neither is there a “one size fits all” treatment to cure
                depression. What works for one person might not work for
                another. By becoming as informed as possible, though, you can
                find the treatments...
              </p>
              <Link to="/post/1" class="round-button">
                Read Here
              </Link>
            </div>
            <div className="BlogssImageContainer">
              <img className="BlogssImage" src={blogsHome}></img>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    );
  }
}

export default Blogss;
