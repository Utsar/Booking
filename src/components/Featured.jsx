import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;
const FeaturedItem = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const FeaturedItemTitles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  h1 {
  }
  h2 {
  }
`;

const Featured = () => {
  return (
    <Wrapper>
      <FeaturedItem>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
          alt="London Westminster and Houses of Parliament"
        />
        <FeaturedItemTitles>
          <h1>London</h1>
          <h2>14 000 properties</h2>
        </FeaturedItemTitles>
      </FeaturedItem>
      <FeaturedItem>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/687163.webp?k=0c6630c2ae631108dda22f3c9ba147046178b9b2e3dbceb5fff4645b67bd0035&o="
          alt="Manchester"
        />
        <FeaturedItemTitles>
          <h1>Manchester</h1>
          <h2>1000 properties</h2>
        </FeaturedItemTitles>
      </FeaturedItem>
      <FeaturedItem>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/686185.webp?k=dc6e30f60fa23f042b872ecd6d769650f89c54414ad64ea1e5e62fafef31a609&o="
          alt="Edinburgh"
        />
        <FeaturedItemTitles>
          <h1>Edinburgh</h1>
          <h2>3300 properties</h2>
        </FeaturedItemTitles>
      </FeaturedItem>
      <FeaturedItem>
        <img
          src="https://t-cf.bstatic.com/xdata/images/region/square250/66333.webp?k=ba149e36e802032cd6ec35570600fe35878c339011b88cdd9f1fd084a8ac73b6&o="
          alt="Lake district"
        />
        <FeaturedItemTitles>
          <h1>Lake district</h1>
          <h2>2500 properties</h2>
        </FeaturedItemTitles>
      </FeaturedItem>
    </Wrapper>
  );
};

export default Featured;
