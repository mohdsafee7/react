import React from 'react'
import { Bookmark } from 'lucide-react'

const cards = (props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
        <img src={props.img} alt="" />
        <button>Save <Bookmark size={15}/> </button>
      </div>

      <div className="middle">
        <h3>{props.user} <span>{props.age}</span></h3>
        <h1>{props.job}</h1>
        <div className="tag">
          <h4>{props.type1}</h4>
          <h4>{props.type2}</h4>
        </div>
      </div>
      </div>

      <div className="bottom">
        <div className="rate">
          <h3>{props.money}</h3>
          <p>{props.loc}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default cards
