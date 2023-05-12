
const  App=()=> {

const getMassage = async ()=>{
   const options ={
    method:"POST",
    body:JSON.stringify({
      massage:"hello how are you"
    }),
    headers:{
      "Content-Type":"application/json"
    }
   }
  try{
   const response = await fetch('http://localhost:8000/comletions')
   const data = response.json()
   console.log(data)
  }
  catch(error){
  console.error(error)
  }

}



  return (
    <div className="app">
      <section className="side-bar">
      <button>+ New chat</button>
       <ul className="history">
           <li>Bugh</li>
       </ul>
       <nav>
        <p>AIItech</p>
       </nav>
      </section>
      <section className="main">
        <h1>AIItech</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" />
            <div id="submit" onClick={getMassage}>b</div>
          </div>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consectetur eaque cumque, saepe, a voluptate autem ab quidem 
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;
