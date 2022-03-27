function Todo(props) {
  return (
    <div>
      <h2>{props.text}</h2>
      <div className="card">
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
