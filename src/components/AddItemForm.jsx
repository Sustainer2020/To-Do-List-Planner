const AddItemForm = ({ item, setItem, addItem }) => {
  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input 
            value={item}
            onChange={ (e) => setItem(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addItem}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddItemForm;