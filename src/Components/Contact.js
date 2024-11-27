const Contact = () => {
  return (
    <>
      <h1>This is Contact</h1>
      <form className="m-2 p-2">
        <div>
          <label for="Name">Name</label>
          <input type="text" className="border border-black "></input>
        </div>
        <div className="mt-2">
          <label>Age : </label>
          <input type="number" className="border border-black ml-3"></input>
        </div>
        <button className="border border-black m-2 p-2">Submit</button>
      </form>
    </>
  );
};

export default Contact;
