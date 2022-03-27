function Todo(props) {
  function deleteHandler() {
      console.log('OPACHA')
      console.log(props.text)
  }

  return (
    <div>
      <h2>{props.text}</h2>
      <div className="card">
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
