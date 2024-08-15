import Input from '../../composant/Input'
import './Colors.css'
function Colors({handleChange}) {
  return (
    <div>   
      <h2 className="sidebar-title color-title">Colors</h2>
    
      <lable className="sidebar-label-container">
        <input type="radio" value="" id="" onChange={handleChange} name='test'/>
        <span className="checkmark All">

        </span>All
      </lable>
      <Input handleChange={handleChange}  value="black" title="Black" name="test1" color="black"/>
      <Input handleChange={handleChange}  value="blue" title="Blue" name="test1" color="blue"/>
      <Input handleChange={handleChange}  value="red" title="Red" name="test1" color="red"/>
      <Input handleChange={handleChange}  value="green" title="Green" name="test1" color="green"/>
      <Input handleChange={handleChange}  value="white" title="White" name="test1" color="white"/>
<label className="sidebar-label-container">
  <input type="radio" onChange={handleChange} value="white" name='test1' />
  <span className="checkmatk" style={{background:'white',border:"2px solid black"}}>

  </span> White
</label>


      </div>
  )
}
export default Colors