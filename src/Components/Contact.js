const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Name"
        ></input>

        <input
          type="tel"
          className="border border-black m-2 p-2"
          placeholder="Telephone number"
        ></input>
        <br></br>
        <button className="border  border-black p-2 m-2 bg-red-300 rounded-lg">
          Submit
        </button>
      </form>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnOnOVPzbsemkgOVe8aJuDXqhO7Nn2_PBfw&s"
        alt="Contact us img"
      />
    </>
  );
};

export default Contact;
