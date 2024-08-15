
import Input from "../../composant/Input"
import "./Price.css"
function Price({handleChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
          <lable className="sidebar-label-container">
        <input type="radio" value="" id="" onChange={handleChange} name='test2'/>
        <span className="checkmark">

        </span>All
      </lable>
     <Input 
     
     handleChange={handleChange}
     value={50}
     title="$0-$50"
     name="test2"
     />

<Input 
     
     handleChange={handleChange}
     value={100}
     title="$50-$100"
     name="test2"
     />
       <Input 
     
     handleChange={handleChange}
     value={150}
     title="$100-$150"
     name="test2"
     />
       <Input 
     
     handleChange={handleChange}
     value={150}
     title="Over 150$"
     name="test2"
     />
    </div>
  )
}

export default Price