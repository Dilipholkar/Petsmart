import React from 'react'

export const Login = () => {
    return (
        <>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address:-</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
                                        
                                        
  </div>
                                    <div className="mb-3">
                                        <br />
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password:-</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
                                        <div className="mb-3 form-check">
                                            <br/>
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
                                            <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
</form>
                                    </div>
                                </div>
                </div>
                    
        </>
                    )
}

                    export default Login;
