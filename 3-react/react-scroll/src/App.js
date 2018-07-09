import React, { Component } from 'react';
import BScroll from 'better-scroll'
import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';

class App extends Component {

  
  render() {
    const options = {
      scrollY: true // 因为scrollY默认为true，其实可以省略
    }
    
    this.scroll = new BScroll(this.$refs.wrapper, options)
    return (
      <div className="App">
        <div className="wrapper">
          <ul className="content">
            <li><img src={img1}/></li>
            <li><img src={img2}/></li>
           
  </ul>
          不会影响滚动的区域
</div>

      </div>
    );
  }
}

export default App;
