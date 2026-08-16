import React from 'react'

const form =  async() => {
    
   const submitAction = async (e)=>{
    "use server"
    console.log(e.get("name"), e.get("pass"))
   }
  return (
     <form action={submitAction}>
      <div>
        <label htmlFor="name">name</label>
        <input name='name' type="text" />
      </div>
      <div>
        <label htmlFor="pass">pass</label>
        <input name='pass' type="text" />
      </div>
      <button>submit</button>
     </form>
  );
};

export default form