import React from "react";
import CourseCard from "../../components/cards/CourseCard";
import Header from '../../components/Header.js'
import Carousel from "react-bootstrap/Carousel";

const CoursesPage = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const coursesData = [
    {
      id: 1,
      name: "Learn Python: Complete for Begineers",
      authors: "Avinash Jain, The codex",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
      stars: 4.6,
      totalUsers: 3807,
      Duration:'3 Hours',
      currentPrice: 449,
      actualPrice: 3399,
      priceUnit: "rupees",
    },
    {
      id: 2,
      name: "Learn Python: for data analysis",
      authors: "Jose",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      stars: 4.2,
      totalUsers: 18000,
      Duration:'3 Hours',
      currentPrice: 449,
      actualPrice: 3499,
      priceUnit: "rupees",
    },
    {
      id: 3,
      name: "Learn Python: for data analysis",
      authors: "Jose",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      stars: 4.2,
      totalUsers: 18000,
      Duration:'3 Hours',
      currentPrice: 449,
      actualPrice: 3499,
      priceUnit: "rupees",
    },
    {
      id: 4,
      name: "Learn Python: for data analysis",
      authors: "Jose",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      stars: 2.3,
      totalUsers: 18000,
      Duration:'3 Hours',
      currentPrice: 449,
      actualPrice: 3499,
      priceUnit: "rupees",
    },
  ];

  const recommendedCourses = [
    {
      id: 1,
      name: "Learn Python: Complete for Begineers",
      authors: "Avinash Jain, The codex",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
      stars: 4.6,
      totalUsers: 3807,
      currentPrice: 449,
      actualPrice: 3399,
      priceUnit: "rupees",
    },
    {
      id: 2,
      name: "Learn Python: for data analysis",
      authors: "Jose",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      stars: 4.2,
      totalUsers: 18000,
      currentPrice: 449,
      actualPrice: 3499,
      priceUnit: "rupees",
    },
  ];
  return (
    <>
    <Header />
    <div className="container pt-3">

    <div className="row g-5">
      <div className="col-12 col-md-4">
        <div
          className="mb-3 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3f3f3",
            padding: "16px",
          }}
        >
          <p className="fs-3 m-0">Recommended</p>
        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          style={{ padding: "0px 0px" }}
        >
          {recommendedCourses.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="p-0">
                <CourseCard
                  name={item.name}
                  authors={item.authors}
                  imageUrl={item.imageUrl}
                  imageHeight={null}
                  stars={item.stars}
                  totalUsers={item.totalUsers}
                  currentPrice={item.currentPrice}
                  actualPrice={item.actualPrice}
                  priceUnit={item.priceUnit}
                  Duration={item.Duration}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="card" style={{ border: "0px" }}>
          <img
            src={process.env.PUBLIC_URL + "/assets/side-image.svg"}
            className="card-img-top"
            alt={`side-image"`}
          />
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="mb-4 d-flex">
          <input type="text" className="form-control" placeholder="Search" />
          <button type="button" className="btn btn-secondary ms-3">
            Filters
          </button>
        </div>
        <div className="row g-4">
          {coursesData.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4">
              <CourseCard
                name={item.name}
                authors={item.authors}
                imageUrl={item.imageUrl}
                imageHeight={null}
                stars={item.stars}
                totalUsers={item.totalUsers}
                Duration={item.Duration}
                currentPrice={item.currentPrice}
                actualPrice={item.actualPrice}
                priceUnit={item.priceUnit}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default CoursesPage;
