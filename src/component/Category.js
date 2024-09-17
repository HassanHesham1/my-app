import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  let [Home, setGategory] = useState([]);
  let obj = useParams();
  useEffect(() => {
    fetch(
      `https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${obj.cat}`
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setGategory(JSON.parse(result));
      });
  }, [obj.cat]);
  const baseUrl = "https://xbellstore.com/itsharks24/blog/admin/";
  return (
    <>
      <div className="mydiv">
        <h1> {obj.cat}</h1>
      </div>

      {/* {Home.map((post)=>{
              let x = document.createElement("div");
              x.innerHTML = post.description;
                                return (	
                                    <>

                                    <div className="contentLeft">
                                    <div className="blogPostListWrap">
                       
                                    <div className="blogPostListItem clear" key={post.id}>
                                    <Link
                                      to={`/Single/${post.id}`}
                                      className="blogPostListImg otherPages"
                                    >
                                      <img src={baseUrl + post.image} alt="Francoise img" />
                                    </Link>
                                    <div className="blogPostListText">
                                      <div className="blogPostListTime">{post.date}</div>
                                      <h3 className="otherPages">
                                        <Link to={`/Single/${post.id}`}>
                                          {post.title}
                                        </Link>
                                      </h3>
                                      <p
                                        dangerouslySetInnerHTML={{ __html: post.description }}
                                      ></p>
                                    </div>
                                    </div>
                                   
                      </div>

                            </div>

                            <div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialas">
						<a href="#"><i className="fa-brands fa-instagram"></i></a>
						<span></span>
						<a href="#"><i className="fa-brands fa-facebook"></i></a>
						<span></span>
						<a href="#"><i className="fa-brands fa-twitter"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i className="fa-brands fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i className="fa-brands fa-google-plus"></i></a>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time dateTime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div>
				</div>
				
				
		                	</div>

















               
                            </>
                            )
                            })} */}

      <section className="container mt-5">
        <div className="wrapper clear">
          <div className="clear"></div>
          <div className="contentLeft">
            {Home.map((post) => {
              let x = document.createElement("div");
              x.innerHTML = post.description;
              return (
                <>
                  <div className="contentLeft" key={post.id}>
                    <div className="blogPostListWrap">
                      <div className="blogPostListItem clear">
                        <Link
                          to={`/Single/${post.id}`}
                          className="blogPostListImg otherPages"
                        >
                          <img src={baseUrl + post.image} alt="Francoise img" />
                        </Link>
                        <div className="blogPostListText">
                          <div className="blogPostListTime">{post.date}</div>
                          <h3 className="otherPages">
                            <Link to={`/Single/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.description,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="clear"></div>

        {/* <div className="sidebarRight">
	              			<div className="sidebar-widget">
	              				<h3>About us</h3>
	              				<div className="aboutMeWidget">
	              					<img src="images/ourlogo.png" alt="Francoise img"/>
	              					<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
	              				</div>
	              			</div>
	              			<div className="sidebar-widget">
	              				<h3>follow me</h3>
	              				<div className="followMeSocialas">
	              					<a href="#"><i className="fa-brands fa-instagram"></i></a>
	              					<span></span>
	              					<a href="#"><i className="fa-brands fa-facebook"></i></a>
	              					<span></span>
	              					<a href="#"><i className="fa-brands fa-twitter"></i></a>
	              					<span></span>
	              					<a href="#"><i className="fa fa-heart"></i></a>
	              					<span></span>
	              					<a href="#"><i className="fa-brands fa-pinterest"></i></a>
	              					<span></span>
	              					<a href="#"><i className="fa-brands fa-google-plus"></i></a>
	              				</div>
	              			</div>
	              			
	              			<div className="sidebar-widget">
	              				<h3>Recent post</h3>
	              				<div className="popularPostsWidget">
	              					<div className="popularPostsWidgetItem">
	              						<a href="#" className="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img"/></a>
	              						<time dateTime="2015-05-15">15.05.2015</time>
	              						<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
	              					</div>
	              					
	              				</div>
	              			</div>
	              			
	              			
	              		</div> */}
      </section>
    </>
  );
};

export default Category;
