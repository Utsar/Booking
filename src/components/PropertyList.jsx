import styled from "styled-components";

const List = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
`;
const ListItem = styled.div`
  flex: 1;
  border-radius: 0.625rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 9.375rem;
    object-fit: cover;
  }
`;
const ListTitles = styled.div`
  h1 {
    font-size: 1.125rem;
  }
  h2 {
    font-size: 0.875rem;
    font-weight: 300;
  }
`;

const PropertyList = () => {
  return (
    <>
      <List>
        <ListItem>
          <img
            src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt="hotels"
          />
          <ListTitles>
            <h1>Hotels</h1>
            <h2>123 hotels</h2>
          </ListTitles>
        </ListItem>
        <ListItem>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt="apartments"
          />
          <ListTitles>
            <h1>Apartments</h1>
            <h2>123 apartments</h2>
          </ListTitles>
        </ListItem>
        <ListItem>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt="resorts"
          />
          <ListTitles>
            <h1>Resorts</h1>
            <h2>123 resorts</h2>
          </ListTitles>
        </ListItem>
        <ListItem>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt="villas"
          />
          <ListTitles>
            <h1>Villas</h1>
            <h2>123 villas</h2>
          </ListTitles>
        </ListItem>
      </List>
    </>
  );
};

export default PropertyList;
