import { TableRow } from "@material-ui/core";
import "./App.css";
import Card from "./component/Card/Card";
import Header from "./component/Header/Header";
import Slider from "./component/Slider/Slider";


// Amazon Website

// 1. Header
// 2. Slider
// 3. Card


function App() {
  return (

    <div className="App">
      <Header />
      <Slider />
      <div class="row">
        <div class="col-lg-4"><Card
title = "Mobile Phone"
          img1="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTixiNqfsBAymquzPSH2aRlsTVbfpKoCxXTuNjU-rOfPm-BWJLUkDL2ZMEoS-hdi1IMlN7mb5rrCfIGT7cLPhAUA6M-7_OU0g8IWXZNXrvR3FdC1ksV2np-&usqp=CAE"
          img2="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTixiNqfsBAymquzPSH2aRlsTVbfpKoCxXTuNjU-rOfPm-BWJLUkDL2ZMEoS-hdi1IMlN7mb5rrCfIGT7cLPhAUA6M-7_OU0g8IWXZNXrvR3FdC1ksV2np-&usqp=CAE"
          img3="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTixiNqfsBAymquzPSH2aRlsTVbfpKoCxXTuNjU-rOfPm-BWJLUkDL2ZMEoS-hdi1IMlN7mb5rrCfIGT7cLPhAUA6M-7_OU0g8IWXZNXrvR3FdC1ksV2np-&usqp=CAE"

          img4="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTixiNqfsBAymquzPSH2aRlsTVbfpKoCxXTuNjU-rOfPm-BWJLUkDL2ZMEoS-hdi1IMlN7mb5rrCfIGT7cLPhAUA6M-7_OU0g8IWXZNXrvR3FdC1ksV2np-&usqp=CAE"
        /></div>
        <div class="col-lg-4"><Card
title = "Laptop"
          img1="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqS7LPhTgl5RJsnjGCFG4Wg6QXAZWa8XMXPkMrKTIKyI45g5qiODc7H5j0NAC8ZhjwBd1R0CmDbg&usqp=CAc"
          img2="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqS7LPhTgl5RJsnjGCFG4Wg6QXAZWa8XMXPkMrKTIKyI45g5qiODc7H5j0NAC8ZhjwBd1R0CmDbg&usqp=CAc"
          img3="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqS7LPhTgl5RJsnjGCFG4Wg6QXAZWa8XMXPkMrKTIKyI45g5qiODc7H5j0NAC8ZhjwBd1R0CmDbg&usqp=CAc"

          img4="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqS7LPhTgl5RJsnjGCFG4Wg6QXAZWa8XMXPkMrKTIKyI45g5qiODc7H5j0NAC8ZhjwBd1R0CmDbg&usqp=CAc"
        /></div>

        <div class="col-lg-4"><Card
title = "Television"
          img1="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaHJUFuhhTYIvpiP0G_RrtJH0lxuRcURuSWs4rmql3N07dmRywK-Dx2nPU9xM8XpJ66Z4APpYVSfM&usqp=CAc"
          img2="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaHJUFuhhTYIvpiP0G_RrtJH0lxuRcURuSWs4rmql3N07dmRywK-Dx2nPU9xM8XpJ66Z4APpYVSfM&usqp=CAc"
          img3="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaHJUFuhhTYIvpiP0G_RrtJH0lxuRcURuSWs4rmql3N07dmRywK-Dx2nPU9xM8XpJ66Z4APpYVSfM&usqp=CAc"
E
          img4="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaHJUFuhhTYIvpiP0G_RrtJH0lxuRcURuSWs4rmql3N07dmRywK-Dx2nPU9xM8XpJ66Z4APpYVSfM&usqp=CAc"
        /></div>

      </div>
      <div> Made with &hearts;	Animesh Srivastava</div>
    </div>

  );
}

export default App;
