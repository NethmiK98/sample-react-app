import { Carousel } from 'antd';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};
const carousel =()=>{
return(
  <Carousel autoplay style={{width:"80%",margin:"10%"}} >
    <div>
      <h3 style={contentStyle}>Swipe to see new arrivals.</h3>
    </div>
    <div>
      <h3 style={contentStyle}>  <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                </p>
              <br></br></h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
};
export default carousel;