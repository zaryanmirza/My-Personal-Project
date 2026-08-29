// import React, { useState } from 'react'

// const App = () => {

//   const [number, setNumber] = useState(0)

//   const Incerement = () => {
//     if (number < 10) {
//       setNumber(number + 1)
//     }
//   }

//   const Decrement = () => {
//     if (number > 0) {
//       setNumber(number - 1)
//     }
//   }
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={Incerement}>Increase</button>
//       <button onClick={Decrement}>Decrease</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [message, setMessage] = useState("I am Black now")
//   const [color, setColor] = useState("black")
//   const Red = () => {
//     setMessage("I am Red now")
//     setColor("red")
//   }
//   const Green = () => {
//     setMessage("I am Green now")
//     setColor("green")
//   }

//   return (
//     <div>
//       <h1 style={{ color: color }}>{message}</h1>
//       <button onClick={Red}>Red</button>
//       <button onClick={Green}>Green</button>
//     </div >
//   )
// }
// export default App

// import React, { useState } from 'react'

// const App = () => {

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log(name, email);
//   }

//   return (
//     <>
//       <form action="" onSubmit={submitForm}>
//         <label htmlFor="">Enter your Name</label> <br /><br />
//         <input type='text' placeholder='Your Name...' value={name} onChange={(e) => setName(e.target.value)}></input> <br /><br />
//         <label htmlFor="">Enter your Email</label> <br /><br />
//         <input type='email' placeholder='Your Email...' value={email} onChange={(e) => setEmail(e.target.value)}></input> <br /><br />
//         <button type=''>Submit</button>
//       </form>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     city: "",
//     address: "",
//     address2: "",
//     state: "",
//     zip: "",
//   })

//   const handleFormData = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log(formData)
//   }

//   return (
//     <div className="container">
//       <form class="row g-3" onSubmit={submitForm}>
//         <div class="col-md-6">
//           <label for="inputEmail4" class="form-label">Email</label>
//           <input type="email" class="form-control" id="inputEmail4" value={formData.email} onChange={handleFormData} name="email" />
//         </div>
//         <div class="col-md-6">
//           <label for="inputPassword4" class="form-label">Password</label>
//           <input type="password" class="form-control" id="inputPassword4" value={formData.password} onChange={handleFormData} name="password"/>
//         </div>
//         <div class="col-12">
//           <label for="inputAddress" class="form-label">Address</label>
//           <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={formData.address} onChange={handleFormData} name="address"/>
//         </div>
//         <div class="col-12">
//           <label for="inputAddress2" class="form-label">Address 2</label>
//           <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleFormData} name="address"/>
//         </div>
//         <div class="col-md-6">
//           <label for="inputCity" class="form-label">City</label>
//           <input type="text" class="form-control" id="inputCity" value={formData.city} onChange={handleFormData} name="city"/>
//         </div>
//         <div class="col-md-4">
//           <label for="inputState" class="form-label">State</label>
//           <select id="inputState" class="form-select">
//             <option selected>Choose...</option>
//             <option>...</option>
//           </select>
//         </div>
//         <div class="col-md-2">
//           <label for="inputZip" class="form-label">Zip</label>
//           <input type="text" class="form-control" id="inputZip" value={formData.zip} onChange={handleFormData} name="zip"/>
//         </div>
//         <div class="col-12">
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" id="gridCheck" />
//             <label class="form-check-label" for="gridCheck">
//               Check me out
//             </label>
//           </div>
//         </div>
//         <div class="col-12">
//           <button type="submit" class="btn btn-primary">Sign in</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Home = () => {
    const [products, setProducts] = useState([])
    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products')
            console.log(response.data)
            setProducts(response.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <>
            <div className="container">
                <h1 className='text-center mt-4 mb-4'>Products</h1>
                <div className="row g-5">
                    {
                        products?.map((product) => {
                            return (
                                <div className='col-sm-3 col-12'>
                                    <Link to={`/${product.id}`}>
                                        <img src={product.images[0]} alt="" style={{ width: "250px", height: "250px" }} />
                                        <h2>{product.title}</h2>
                                        <p>Price : {product.price}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home